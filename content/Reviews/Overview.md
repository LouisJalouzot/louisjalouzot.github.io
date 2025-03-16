---
createdDate: 2025-03-16
publish: true
tags:
  - dataview
project: 
type:
  - Overview
---
```dataview
TABLE
	deadline,
	cycle,
	project
FROM "Reviews"
WHERE contains(type, "review")
AND reviewStatus = "to do"
SORT deadline
```
