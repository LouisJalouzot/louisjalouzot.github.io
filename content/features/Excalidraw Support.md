---
title: Excalidraw Support
---

# Excalidraw Support in Quartz

Quartz now supports rendering Excalidraw diagrams through the ExcalidrawTransformer plugin. This means your visual diagrams created in Obsidian using the Excalidraw plugin can now be viewed directly in your published Quartz site!

## How It Works

When you include an Excalidraw diagram in your notes using the standard Obsidian syntax:

```markdown
![[drawing.excalidraw]]
```

The ExcalidrawTransformer will:
1. Find the referenced Excalidraw file
2. Extract the diagram data
3. Render it as an interactive diagram in your published site

## Example Usage

Referencing an Excalidraw diagram stored in your vault:

```markdown
![[example-diagram.excalidraw]]
```

The diagram above would be rendered as an interactive Excalidraw drawing on your Quartz site, maintaining the same appearance as in Obsidian.

## Technical Details

- The transformer embeds the required Excalidraw libraries (React, React-DOM, and Excalidraw)
- Diagrams are rendered in view-only mode
- Multiple diagrams on the same page share the libraries to minimize load time

## Tips for Using Excalidraw in Quartz

1. **Keep file paths consistent**: Make sure your Excalidraw files are included in your content directory
2. **Simple, focused diagrams**: While complex diagrams will work, simpler diagrams load faster and display better on the web
3. **Consider image performance**: If you're embedding images within Excalidraw, make sure they're optimized for web
4. **Fallback for non-JavaScript environments**: The transformer will show an error message if JavaScript is disabled

By supporting Excalidraw, Quartz makes your digital garden even more visually rich and expressive!

## Creating Diagrams

To create Excalidraw diagrams for your Quartz site:

1. Use the Excalidraw plugin in Obsidian
2. Create and save your drawing
3. Reference it in your markdown with the standard syntax
4. The transformer handles the rest!