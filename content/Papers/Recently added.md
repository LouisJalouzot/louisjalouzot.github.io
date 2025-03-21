---
createdDate: 2025-03-21
publish: true
tags: 
project: 
type:
  - dataview
---
```dataview
TABLE
	paperTitle AS Title,
	tags,
	project,
	status
FROM "Papers/Notes"
SORT file.ctime DESC
LIMIT 20
```



