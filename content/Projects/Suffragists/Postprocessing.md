---
createdDate: 2025-04-15
publish: true
tags: 
project:
  - Suffragists
type:
---
# Date
## Prompt
```
<INSTRUCTION>
You are an assistant tasked to format raw dates which come out of an OCR process.
If possible, format the date provided in DATE as YYYY-MM-DD.
Your answer should have the JSON format specified in FORMAT.
</INSTRUCTION>
<FORMAT>
{
    "FormattedDate":
    {
      "type": "string",
      "description": "Formatted date",
	}
}
</FORMAT>
<DATE>
</DATE>
```
## Structured output
```
{
  "type": "object",
  "properties": {
    "FormattedDate": {
      "type": "string"
    }
  },
  "required": [
    "FormattedDate"
  ]
}
```
# Location
## Prompt
```
<INSTRUCTION>
You are an assistant tasked to format raw locations which come out of an OCR process.
If possible, format the location provided in LOCATION as
	- CITY, STREET, NUMBER or CITY,  for complete adresses
	- CITY, LOCATION when this is a public place.
Your answer should have the JSON format specified in FORMAT.
</INSTRUCTION>
<FORMAT>
{
    "FormattedLocation":
    {
      "type": "string",
      "description": "Formatted location",
	}
}
</FORMAT>
<LOCATION>
</LOCATION>
```
## Structured output
```
{
  "type": "object",
  "properties": {
    "FormattedLocation": {
      "type": "string"
    }
  },
  "required": [
    "FormattedLocation"
  ]
}
```