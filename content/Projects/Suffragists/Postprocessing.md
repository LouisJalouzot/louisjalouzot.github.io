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
February 27 & 28, 1911
</DATE>
```
## Structured output
```json
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
```json
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
{
	"FormattedTime": {
		"type": "string",
		"description": "24h formatted time",
	}
}
</FORMAT>
<TIME>
3 and 8 p.m
</TIME>
```
## Structured output
```json
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
# Combined
## Prompt
Works well with Gemini 2.0 flash (not flash-lite)
```
<INSTRUCTIONS>  
You are an assistant tasked to format raw data which comes out of an OCR process.  
This data describes political meetings in the UK in early 20th century.  
A date is provided in DATE and should be formatted as YYYY-MM-DD.  
A time is provided in TIME and should be formatted in 24h format: HH:MM.  
A location is provided in LOCATION and should be decomposed in a combination of "City", "Street", "StreeNumber", and "PublicPlace" as described in FORMAT.  
Populate as many fields as possible from the location but don't provide the fields which are not applicable.  
When multiple cities appear in LOCATION, keep the smallest one.  
Your answer should have the JSON format specified in FORMAT.  
Required fields are "FormattedDate" and "City".  
</INSTRUCTION>  
<FORMAT>  
{  
"FormattedDate":  
{  
"type": "string",  
"description": "Formatted date",  
},  
"FormattedTime": {  
"type": "string",  
"description": "24h formatted time",  
},  
"City": {  
"type": "string",  
"description": "Smallest city found in the raw data",  
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
}  
}  
</FORMAT>  
<DATE>  
1910-04-28  
</DATE>  
<TIME>  
3.30 and 8 p.m.  
</TIME>  
<LOCATION>  
45, Marlborough Road, Sheffield  
</LOCATION>
```
## Response
Adding `This data describes political meetings in the UK in early 20th century.` to the prompt made it understand `3.30` as `15:30` instead of `03:30`.
```
{
  "City": "Sheffield",
  "FormattedDate": "1910-04-28",
  "FormattedTime": "15:30",
  "Street": "Marlborough Road",
  "StreetNumber": "45"
}
```
## Structured output
```json
{
  "type": "object",
  "properties": {
    "FormattedDate": {
      "type": "string"
    },
    "FormattedTime": {
      "type": "string"
    },
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
    "Date",
    "City"
  ]
}
```
# Results
## Examples of formatting
![[Pasted image 20250416121240.png]]
## VfW 54
### Hard duplicates
![[Pasted image 20250416124004.png]]
### Soft duplicates
~5s for prompting 142 entries in parallel
![[Pasted image 20250416124027.png]]
## V2
```
<INSTRUCTIONS>
You are an assistant tasked to format raw data which comes out of an OCR process.
This data describes political meetings in the UK in early 20th century.
A date is provided in DATE and should be formatted into a Year: YYYY, and when applicable, a Month: MM, and a Day: DD.
A time is provided in TIME and should be formatted in 24h format: HH:MM.
A location is provided in LOCATION and should be decomposed in a combination of "City", "Street", "StreeNumber", and "PublicPlace" as described in FORMAT.
Populate as many fields as possible from the location but don't provide the fields which are not applicable.
When multiple cities appear in LOCATION, keep the smallest one.
Your answer should have the JSON format specified in FORMAT.
All the fields are required but should have an empty string when not applicable.
</INSTRUCTION>
<FORMAT>
{
    "Year": {
        "type": "string",
        "description": "Formatted year",
    },
    "Month": {
        "type": "string",
        "description": "Formatted month",
    },
    "Day": {
        "type": "string",
        "description": "Formatted day",
    },
    "FormattedTime": {
        "type": "string",
        "description": "24h formatted time",
    },
    "City": {
        "type": "string",
        "description": "Smallest city found in the raw data",
    },
    "Street": {
        "type": "string",
        "description": "Name of the street for addresses",
    },
    "StreetNumber": {
        "type": "string",
        "description": "Street number for complete addresses",
    },
    "PublicPlace": {
        "type": "string",
        "description": "Applicable, name of the public place",
    },
}
</FORMAT>
<DATE>
1909-03-13
</DATE>
<TIME>
2 to 5 o'clock
</TIME>
<LOCATION>
London, 24, Stafford Place Studios, Buckingham Palace Gate
</LOCATION>
```
### Structured output
```json
{
  "type": "object",
  "properties": {
    "Year": {
      "type": "string"
    },
    "Month": {
      "type": "string"
    },
    "Day": {
      "type": "string"
    },
    "FormattedTime": {
      "type": "string"
    },
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
    "Year",
    "City"
  ]
}
```
### Reponse
```json
{
  "City": "Erdington",
  "Year": "1908",
  "Month": "09",
  "PublicPlace": "Physical Training College"
}
```
### Sample
![[Pasted image 20250422184645.png]]