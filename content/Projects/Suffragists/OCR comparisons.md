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
My intuition: Mistral OCR trained to extract text and keep images from pdfs and here it's understanding our whole scan as an image.
## Document understanding
```python
messages = [
    {
        "role": "user",
        "content": [
            {
                "type": "text",
                "text": "Extract all the upcoming political meetings from this scan of a journal issue",
            },
            {"type": "document_url", "document_url": signed_url.url},
        ],
    }
]
chat_response = client.chat.complete(
    model="mistral-small-latest", messages=messages
)
print(chat_response.choices[0].message.content)
```
Mistral small found only 2 meetings, medium and large did not find any
```
Based on the provided scan of the journal issue, here are the upcoming political meetings mentioned:

1. **Greenwich**:
   - **Polling Day, January 15**:
     - **Candidates**: R. S. Jackson, W.S.P.U. Comm. Rms., W.S.P.U. Organiser, Miss Grace.
     - **Location**: W.S.P.U. Election Sec.
     - **Details**: The meeting will be specially at the hours of 8 a.m. to 10 p.m. and from 2 to 5 p.m. and from 8 to 10 o'clock.

2. **Lewisham**:
   - **January 17**:
     - **Candidates**: J. H. Benn (C.), Major Conybeare.
     - **Location**: High Street, Lewisham.
     - **Details**: The meeting will be held at the local Press Rooms and other places.

These are the specific upcoming political meetings extracted from the document.
```