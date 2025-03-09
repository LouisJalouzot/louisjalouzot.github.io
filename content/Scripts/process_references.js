module.exports = async (params) => {
    const files = app.vault.getFiles().filter(file => file.path.startsWith("Temp/References"));

    for (const file of files) {
        const originalFileName = file.basename;
        const annotationTitle = `${originalFileName} Annotation`;
        const annotationPath = `Paper/Notes/${annotationTitle}.md`;
        const newReferencePath = `Papers/References/${file.name}`;
        const cache = app.metadataCache.getFileCache(file);
        const frontmatter = cache?.frontmatter || {};
        if (!app.vault.getAbstractFileByPath(annotationPath)) {
            const annotationContent = `---
publish: true
status: to read
project:
type: annotation
tags:
---
# Annotation for [${originalFileName}](${file.path})

**Authors:** ${frontmatter.authors || "Unknown"}
**Year:** ${frontmatter.year || ""}
**DOI:** ${frontmatter.DOI || ""}
**URL:** ${frontmatter.url || ""}
**PDF:** [[${file.path}|PDF]]
`;
            await app.vault.create(annotationPath, annotationContent);
            new Notice(`Created: ${annotationPath}`);
        }

        if (!app.vault.getAbstractFileByPath(newReferencePath)) {
            await app.vault.rename(file, newReferencePath);
            new Notice(`Moved: ${file.path} -> ${newReferencePath}`);
        }
    }
    new Notice("References Processed");
}