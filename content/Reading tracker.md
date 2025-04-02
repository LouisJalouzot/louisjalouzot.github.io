---
tags:
  - dataview
cssclasses:
  - cards
publish: false
---

> [!multi-column]
>
>> [!important]+ Reading
>> ```dataviewjs
>> const pages = dv.pages('"Papers/Notes"')
>>     .where(p => p.status === "reading")
>>     .sort(p => p.file.mtime, "desc");
>> 
>> // Group by project
>> const groupedPages = pages.groupBy(p => p.project || "No Project");
>> 
>> for (const group of groupedPages) {
>>     dv.header(3, group.key);
>>     dv.table(
>>         ["Title", "Progress", "Tags"],
>>         group.rows.map(p => [
>>             p.file.link,
>>             p.paperTitle,
>>             p.progress,
>>             p.tags
>>         ])
>>     );
>> }
>> ```
>
>> [!error]+ Urgent
>> ```dataviewjs
>> const pages = dv.pages('"Papers/Notes"')
>>     .where(p => p.status === "urgent")
>>     .sort(p => p.file.mtime, "desc");
>> 
>> // Group by project
>> const groupedPages = pages.groupBy(p => p.project || "No Project");
>> 
>> for (const group of groupedPages) {
>>     dv.header(3, group.key);
>>     dv.table(
>>         ["Title", "Progress", "Tags"],
>>         group.rows.map(p => [
>>             p.file.link,
>>             p.paperTitle,
>>             p.progress,
>>             p.tags
>>         ])
>>     );
>> }
>> ```

<br>

> [!multi-column]
>
>> [!important]+ To review
>> ```dataviewjs
>> const pages = dv.pages('"Papers/Notes"')
>>     .where(p => p.status === "to review")
>>     .sort(p => p.file.mtime, "desc");
>> 
>> // Group by project
>> const groupedPages = pages.groupBy(p => p.project || "No Project");
>> 
>> for (const group of groupedPages) {
>>     dv.header(3, group.key);
>>     dv.table(
>>         ["Title", "Progress", "Tags"],
>>         group.rows.map(p => [
>>             p.file.link,
>>             p.paperTitle,
>>             p.progress,
>>             p.tags
>>         ])
>>     );
>> }
>> ```
>
>> [!error]+ To implement
>> ```dataviewjs
>> const pages = dv.pages('"Papers/Notes"')
>>     .where(p => p.status === "to implement")
>>     .sort(p => p.file.mtime, "desc");
>> 
>> // Group by project
>> const groupedPages = pages.groupBy(p => p.project || "No Project");
>> 
>> for (const group of groupedPages) {
>>     dv.header(3, group.key);
>>     dv.table(
>>         ["Title", "Progress", "Tags"],
>>         group.rows.map(p => [
>>             p.file.link,
>>             p.paperTitle,
>>             p.progress,
>>             p.tags
>>         ])
>>     );
>> }
>> ```

<br>

> [!multi-column]
> 
>> [!warning]+ To read
>> ```dataviewjs
>> const pages = dv.pages('"Papers/Notes"')
>>     .where(p => p.status === "to read")
>>     .sort(p => p.file.mtime, "desc");
>> 
>> // Group by project
>> const groupedPages = pages.groupBy(p => p.project || "No Project");
>> 
>> for (const group of groupedPages) {
>>     dv.header(3, group.key);
>>     dv.table(
>>         ["Title", "Progress", "Tags"],
>>         group.rows.slice(0, 20).map(p => [
>>             p.file.link,
>>             p.paperTitle,
>>             p.progress,
>>             p.tags
>>         ])
>>     );
>> }
>> ```
>
>> [!quote]+ Read
>> ```dataviewjs
>> const pages = dv.pages('"Papers/Notes"')
>>     .where(p => p.status === "read")
>>     .sort(p => p.file.mtime, "desc");
>> 
>> // Group by project
>> const groupedPages = pages.groupBy(p => p.project || "No Project");
>> 
>> for (const group of groupedPages) {
>>     dv.header(3, group.key);
>>     dv.table(
>>         ["Title", "Progress", "Tags"],
>>         group.rows.slice(0, 20).map(p => [
>>             p.file.link,
>>             p.paperTitle,
>>             p.progress,
>>             p.tags
>>         ])
>>     );
>> }
>> ```