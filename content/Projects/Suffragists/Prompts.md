---
createdDate: 2025-03-11
publish: true
tags: 
project:
  - Suffragists
type:
  - prompt
---
# Structured output for Gemini
```
> {
  "type": "object",
  "properties": {
    "Meetings": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "Date": {
            "type": "string"
          },
          "Location": {
            "type": "string"
          },
          "Raw": {
            "type": "string"
          },
          "Speakers": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "Hosts": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "Description": {
            "type": "string"
          }
        },
        "required": [
          "Date",
          "Location",
          "Raw"
        ]
      }
    },
    "IssueDate": {
      "type": "string"
    }
  },
  "required": [
    "Meetings"
  ]
}
```
