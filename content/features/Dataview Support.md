---
title: Dataview Support
---

# Dataview Support in Quartz

Quartz now supports Dataview code blocks and inline queries thanks to the DataviewTransformer plugin. While Quartz can't execute Dataview queries dynamically like in Obsidian, it can render them as static content, preserving your structured data views in your published notes.

## Dataview Code Blocks

Dataview code blocks are transformed into static views in your Quartz site. For example:

```dataview
TABLE file.cday AS "Created", file.mday AS "Last Modified" 
FROM "features"
SORT file.name ASC
```

## DataviewJS Code Blocks

DataviewJS blocks are also supported:

```dataviewjs
// In Obsidian, this would show a table of files
// In Quartz, it shows as a static block
dv.table(
  ["Name", "Created"],
  dv.pages()
    .where(p => p.file.path.includes("features"))
    .sort(p => p.file.name)
    .map(p => [p.file.name, p.file.cday])
)
```

## Inline Queries

Inline Dataview queries are supported using the standard syntax. For example:

- Number of feature pages: `= dv.pages("features").length`
- Current file name: `= this.file.name`

## Working with Dataview in Quartz

Since Quartz renders Dataview statically, keep these tips in mind:

1. Use Dataview for structural organization in your notes that will remain useful even without dynamic execution
2. Complex dynamic queries that need to be updated frequently should be used primarily in your local Obsidian vault
3. Consider pre-processing important Dataview outputs into static content if the dynamic calculation is essential

This support allows for a smoother transition between your Obsidian notes and your published Quartz site.