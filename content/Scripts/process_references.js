// Define the settings for QuickAdd
const settings = {
    name: "Process References",
    author: "Louis Jalouzot",
    description: "Process references in the Temp/References folder",
};

// The main function that processes references
const processReferences = async (params) => {
    // Get the app object from params
    const { app, quickAddApi } = params;

    try {
        // Make sure we have access to the app
        if (!app) {
            throw new Error("Could not access the Obsidian app");
        }

        const files = app.vault.getFiles().filter(file => file.path.startsWith("Temp/References"));

        if (files.length === 0) {
            new Notice("No reference files found in Temp/References");
            return;
        }

        for (const file of files) {
            const originalFileName = file.basename;
            const annotationPath = `Papers/Notes/${originalFileName}.md`;
            const newReferencePath = `Papers/References/${file.name}`;
            const cache = app.metadataCache.getFileCache(file);
            const frontmatter = cache?.frontmatter || {};

            // Create annotation file if it doesn't exist
            if (!app.vault.getAbstractFileByPath(annotationPath)) {
                let annotationContent = `---
publish: true
status: to read
project:
type: annotation
tags:
---
# Annotation for [${originalFileName.split(" - ")[0]}](${file.path.replace(/ /g, '%20')})

**Authors:** ${frontmatter.authors || "Unknown"}
**Year:** ${frontmatter.year || ""}
`;

                if (frontmatter.DOI) {
                    annotationContent += `**DOI:** ${frontmatter.DOI}\n`;
                }

                if (frontmatter.url) {
                    annotationContent += `**URL:** ${frontmatter.url}\n`;
                }

                annotationContent += `**PDF:** [${file.basename}](Papers/PDFs/${frontmatter.filename?.replace(/ /g, '%20') || ""})`;

                await app.vault.create(annotationPath, annotationContent);
                new Notice(`Created: ${annotationPath}`);
            }

            // Move reference file if destination doesn't exist
            if (!app.vault.getAbstractFileByPath(newReferencePath)) {
                await app.vault.rename(file, newReferencePath);
            } // Otherwise, delete the reference file
            else {
                await app.vault.delete(file);
            }
        }
    } catch (error) {
        console.error("Error processing references:", error);
        new Notice(`Error: ${error.message}`);
    }
}

// Export both the main function and settings for QuickAdd
module.exports = {
    entry: processReferences,
    settings: settings
}