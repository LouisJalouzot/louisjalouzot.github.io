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
When multiple cities are provided, use the smallest, most precise one.
Your answer should have the JSON format specified in FORMAT.
Don't provide the fields which are not applicable.
The location is provided as LOCATION.
</INSTRUCTION>
<FORMAT>
{
	"City": {
		"type": "string",
		"description": "Most precise city found in the raw data",
	},
	"Street": {
		"type": "string",
		"description": "When applicable, name of the street for addresses",
	},
	"StreetNumber": {
		"type": "string",
		"description": "When applicable, street number for complete addresses",
	},
	"PublicPlace": {
		"type": "string",
		"description": "When applicable, name of the public place",
	},
	required: ["City"],
}
</FORMAT>
<LOCATION>
Birmingham, Physical Training College, Erdington
</LOCATION>
```
## Structured output
```
{
  "type": "object",
  "properties": {
    "City": {
      "type": "string"
    },
    "Street": {
      "type": "string"
    },
    "StreetNumber": {
      "type": "string"
    },
    "PublicPlace": {
      "type": "string"
    }
  },
  "required": [
    "City"
  ]
}
```
# Time
## Prompt
```
<INSTRUCTION>
You are an assistant tasked to format raw times of political meetings which come out of an OCR process.
The time is provided as TIME and you return it in 24h format: HH:MM.
Your answer should have the JSON format specified in FORMAT.
</INSTRUCTION>
<FORMAT>
"FormattedTime": {
	"type": "string",
	"description": "24h formatted time",
}
</FORMAT>
<TIME>
3 and 8 p.m
</TIME>
```
## Structured output
```
{
  "type": "object",
  "properties": {
    "FormattedTime": {
      "type": "string"
    }
  },
  "required": [
    "FormattedTime"
  ]
}
```