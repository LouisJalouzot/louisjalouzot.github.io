---
tags:
  - dataview
cssclasses:
  - cards
---
```dataview
TABLE
	paperTitle AS Title,
	progress AS Progress
FROM "Papers/Notes"
SORT file.mtime DESC
LIMIT 10
```


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
>
>> [!warning]+ To read
>> ```dataview
>> TABLE
>> 	paperTitle AS Title,
>> 	progress AS Progress,
>> 	project AS Project,
>> 	tags AS Tags
>> FROM "Papers/Notes"
>> WHERE status = "to read"
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
>> WHERE status = "to read"
>> SORT file.mtime DESC
>> LIMIT 20
>> ```
