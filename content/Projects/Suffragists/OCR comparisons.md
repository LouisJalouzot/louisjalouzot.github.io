---
createdDate: 2025-04-18
publish: true
tags:
  - OCR
  - API
project:
  - Suffragists
type:
---
# Testing page
![[Pasted image 20250418115317.png|800]]
# Mistral
## OCR
```python
uploaded_pdf = client.files.upload(

file={

"file_name": image_path,

"content": open(image_path, "rb"),

},

purpose="ocr",

)

retrieved_file = client.files.retrieve(file_id=uploaded_pdf.id)

signed_url = client.files.get_signed_url(file_id=uploaded_pdf.id)

ocr_response = client.ocr.process(

model="mistral-ocr-latest",

document={

"type": "document_url",

"document_url": signed_url.url,

},

image_limit=0,

)
```
Complete garbage
```
WINNING VOTES IN LONDON. Spinalis Voxis in the metropolitan constituencies.\n\n| Name | Description | Amount | Amount |\n|----------|-------------------------------|-------------------------------|-------------------------------|\n| Thamnus | The Name of Thamnus | 1,000,000 | 1,000,000 |\n| Thamnus | The Name of Thamnus | 1,000,000 | 1,000,000 |\n| Thamnus | The Name of Thamnus | 1,000,000 | 1,000,000 |\n| Thamnus | The Name of Thamnus | 1,000,000 | 1,000,000 |\n| Thamnus | The Name of Thamnus | 1,000,000 | 1,000,000 |\n| Thamnus | The Name of Thamnus | 1,000,000 | 1,000,000 |\n| Thamnus | The Name of Thamnus | 1,000,000 | 1,000,000 |\n| Thamnus | The Name of Thamnus | 1,000,000 | 1,000,000 |\n| Thamnus | The Name of Thamnus | 1,000,000 | 1,000,000 |\n| Thamnus | The Name of Thamnus | 1,000,000 | 1,000,000 |\n| Thamnus | The Name of Thamnus | 1,000,000 | 1,000,000 |\n| Thamnus | The Name of Thamnus | 1,000,000 | 1,000,000 |\n| Thamnus | The Name of Thamnus | 1,000,000 | 1,000,000 |\n| Thamnus | The Name of Thamnus | 1,000,000 | 1,000,000 |\n| Thamnus | The Name of Thamnus | 1,000,000 | 1,000,000 |\n| Thamnus | The Name of Thamnus | 1,000,000 | 1,000,000 |\n| Thamnus | The Name of Thamnus | 1,000,000 | 1,000,000 |\n| Thamnus | The Name of Thamnus | 1,000,000 | 1,000,000 |\n| Thamnus | The Name of Thamnus | 1,000,000 | 1,000,000 |\n| Thamnus | The Name of Thamnus | 1,000,000 | 1,000,000 |\n| Thamnus | The Name of Thamnus | 1,000,000 | 1,000,000 |\n| Thamnus | The Name of Thamnus | 1,000,000 | 1,000,000 |\n| Thamnus | The Name of Thamnus | 1,000,000 | 1,000,000 |\n| Thamnus | The Name of Thamnus | 1,000,000 | 1,000,000 |\n| Thamnus | The Name of Thamnus | 1,000,000 | 1,000,000 |\n| Thamnus | The Name of Thamnus | 1,000,000 | 1,000,000 |\n| Thamnus | The Name of Thamnus | 1,000,000 | 1,000,000 |\n| Thamnus | The Name of Thamnus | 1,000,000 | 1,000,000 |\n| Thamnus | The Name of Thamnus | 1,000,000 | 1,000,000 |\n| Thamnus | The Name of Thamnus | 1,000,000 | 1,000,000 |\n| Thamnus | The Name of Thamnus | 1,000,000 | 1,000,000 |\n
```