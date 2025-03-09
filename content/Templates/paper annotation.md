<%*
if (app.vault.getAbstractFileByPath(`Annotations/${tp.file.title} Annotation.md`)) {
  return;
}

let pdfLink = "";
if (tp.frontmatter?.filename) {
    const pdfPath = `Papers/PDFs/${tp.file.title} - ${tp.frontmatter.filename}.pdf`;
    if (app.vault.getAbstractFileByPath(pdfPath)) {
        const encodedPath = pdfPath.replace(/ /g, "%20");
        pdfLink = `[${pdfPath}](${encodedPath})`;
    }
}
%>
---
publish: true
status: to read
related project:
type: annotation
tags: 
---
# Annotation for [<% tp.file.title %>](Papers/References/<% tp.file.title %>)

**Authors:** <% tp.frontmatter.authors || "Unknown" %>
**Year:** <% tp.frontmatter.year || "" %>
**DOI:** <% tp.frontmatter.DOI || "" %>
**URL:** <% tp.frontmatter.url || "" %>
**PDF:** 
<%*
//This empty inline script block is needed because the template must return a string, and the frontmatter does this.
%>