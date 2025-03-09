<%*
// --- Check if the annotation file already exists ---
const annotationFilePath = `Papers/Annotations/${tp.file.title}.md`;
const annotationFile = app.vault.getAbstractFileByPath(annotationFilePath);
if (annotationFile) {
  // Annotation file already exists.  Do nothing and exit.
  tR += "<!-- Annotation file already exists. -->";
  return;
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