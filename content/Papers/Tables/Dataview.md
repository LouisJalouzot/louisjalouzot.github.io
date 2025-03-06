---
tags:
  - dataview
---
# Test
```dataview
TABLE
	paperTitle AS Title,
	generated AS Status
FROM "Papers/References"
```



# Testing
```dataviewjs
dv.table(
  ["Title", "Status"],
  dv.pages('"Papers/References"')
    .map(p => [p.paperTitle, p.generated])
);
```



