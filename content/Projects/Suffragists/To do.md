# 2025-03-11
- [x] VfW 98: page 7 table missing, reprompt
- [x] VfW 99: page 7 missing events because city name on previous page
- [x] Idea: prompt 2 pages by 2 pages and remove duplicates
	- [x] Remove duplicates, try with LLM or with threshold on BERTScore
- [x] Try adding in prompt that there are pages without meetings/that it needs to be sure (e.g. page 1&2 VfW 99)
- [x] Changed Gemini flash -> Gemini pro
- [x] Test Mistral OCR
# 2025-03-24
- [ ] Switched temperature to 0 to remove randomness (should have done this since the beginning)
- [ ] Current issue
	- [ ] Gemini pro outputs duplicates (meetings from page 7 are outputted when prompting on page 8)
	- [ ] Gemini flash versions don't have this issue but they still miss meetings on "big issues" (c.f. issue 100 with ~200 meetings)