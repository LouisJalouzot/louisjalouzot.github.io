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
title: ${originalFileName}
paperTitle: "${frontmatter.paperTitle || ""}"
authors: ${frontmatter.authors || ""}
publish: true
cssclasses:
  - list-cards
type: annotation
project:
tags:
status: to read
progress: to annotate
---
# Annotation for [${originalFileName}](Papers/References/${encodeURIComponent(originalFileName)})

> [!example]- Authors
`;

                if (frontmatter.authors) {
                    frontmatter.authors.forEach(author => {
                        annotationContent += `> - [${author}](${encodeURIComponent(author)})\n`;
                    })
                }

                annotationContent += `
**Year:** ${frontmatter.year || ""}
`;

                if (frontmatter.DOI) {
                    annotationContent += `**DOI:** ${frontmatter.DOI}\n`;
                }

                if (frontmatter.url) {
                    annotationContent += `**URL:** ${frontmatter.url}\n`;
                }

                // Safe PDF link generation
                const pdfFilename = frontmatter.filename ? encodeURIComponent(frontmatter.filename) : "";
                annotationContent += `**PDF:** [${file.basename}](Papers/PDFs/${pdfFilename})`;

                annotationContent += `

# Highlights


# Goal (yellow)


# Method (purple)


# Data (purple)


# Results (red)


# Discussion (blue)


# Questions

`;
                await app.vault.create(annotationPath, annotationContent);
                new Notice(`Created: ${annotationPath} `);
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
        new Notice(`Error: ${error.message} `);
    }
}

// Export both the main function and settings for QuickAdd
module.exports = {
    entry: processReferences,
    settings: settings
}