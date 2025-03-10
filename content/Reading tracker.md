---
tags:
  - dataview
cssclasses:
  - cards
publish: true
---
> [!multi-column]
>
>> [!important]+ Reading
>> ```dataview
>> TABLE
>> 	paperTitle AS Title,
>> 	progress AS Progress,
>> 	project AS Project,
>> 	tags AS Tags
>> FROM "Papers/Notes"
>> WHERE status = "reading"
>> SORT file.mtime DESC
>> LIMIT 20
>> ```
>
>> [!error]+ Urgent
>> ```dataview
>> TABLE
>> 	paperTitle AS Title,
>> 	progress AS Progress,
>> 	project AS Project,
>> 	tags AS Tags
>> FROM "Papers/Notes"
>> WHERE status = "urgent"
>> SORT file.mtime DESC
>> LIMIT 20
>> ```

```dataviewjs
const pages = dv.pages('"Papers/Notes"')
    .where(p => p.status === "to read")
    .sort(p => p.file.mtime, "desc");

// Group by project
const groupedPages = pages.groupBy(p => p.project || "No Project");

for (const group of groupedPages) {
    dv.header(3, group.key);
    dv.table(
        ["Title", "Progress", "Tags"],
        group.rows.map(p => [
            p.paperTitle,
            p.progress,
            p.tags
        ])
    );
}
```

> [!multi-column]
> 
>> [!warning]+ To read
>> ```dataview
>> TABLE WITHOUT ID
>> 	paperTitle AS Title,
>> 	progress AS Progress,
>> 	tags AS Tags
>> FROM "Papers/Notes"
>> WHERE status = "to read"
>> GROUP BY project
>> SORT file.mtime DESC
>> LIMIT 20
>> ```
>
>> [!note]+ To implement
>> ```dataview
>> TABLE
>> 	paperTitle AS Title,
>> 	progress AS Progress,
>> 	project AS Project,
>> 	tags AS Tags
>> FROM "Papers/Notes"
>> WHERE status = "to implement"
>> SORT file.mtime DESC
>> LIMIT 20
>> ```
