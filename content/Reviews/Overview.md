---
createdDate: 2025-03-16
publish: false
tags: 
project: 
type:
  - Overview
  - dataview
---

```dataview
TABLE
	deadline,
	cycle,
	project,
	originalReviewer
FROM "Reviews"
WHERE contains(type, "review") or contains(type, "answer")
AND reviewStatus = "to do"
SORT deadline
```

