---
tags:
  - dataview
cssclasses: []
publish: true
---

```dataviewjs
const readingStatuses = ["reading", "urgent", "to read", "to implement"];
const notes = dv.pages('"Papers/Notes"');

const projects = [...new Set(notes.map(note => note.project).filter(Boolean))];

let tableData = {};

projects.forEach(project => {
    tableData[project] = {};
    readingStatuses.forEach(status => {
        tableData[project][status] = notes
            .filter(note => note.project === project && note.status === status)
            .map(note => `- [[${note.file.path}|${note.file.name}]] (${note.title || ""}, ${note.progress || ""}, ${note.tags || ""})`)
            .join("<br>") || "No notes";
    });
});

let tableRows = [];
tableRows.push(["Project", ...readingStatuses.map(status => `Status: ${status}`)]);

projects.forEach(project => {
    let row = [project];
    readingStatuses.forEach(status => {
        row.push(tableData[project][status]);
    });
    tableRows.push(row);
});

dv.table(["Project", ...readingStatuses.map(status => `Status: ${status}`)],
    tableRows.slice(1)
);
```

> [!multi-column]
>
>> [!important]+ Reading
>> WHERE status = "reading"
>
>> [!error]+ Urgent
>> WHERE status = "urgent"

> [!multi-column]
> 
>> [!warning]+ To read
>> WHERE status = "to read"
>
>> [!note]+ To implement
>> WHERE status = "to implement"