# 2025-03-11
- [x] VfW 98: page 7 table missing, reprompt
- [x] VfW 99: page 7 missing events because city name on previous page
- [x] Idea: prompt 2 pages by 2 pages and remove duplicates
	- [x] Remove duplicates, try with LLM or with threshold on BERTScore
- [x] Try adding in prompt that there are pages without meetings/that it needs to be sure (e.g. page 1&2 VfW 99)
- [x] Changed Gemini flash -> Gemini pro
- [x] Test Mistral OCR
# 2025-03-24
- Switched temperature to 0 to remove randomness (should have done this since the beginning)
- [x] Issue: Gemini pro outputs duplicates (meetings from page 7 are outputted when prompting on page 8)
- Seems fixed by refining the prompt, added
`Don't include any meeting from the CONTEXT section, only from the TEXT one. It is possible that there are no valid meetings.`
Note: Gemini flash versions don't have this issue but they miss meetings on "big issues" (c.f. issue 100 with ~200 meetings)
- Switched to Gemini 2.5 (lower request per day: 100, but better: reasoning model and max output tokens 8k -> 65k)
- [x] I get annoying `list index out of range` errors using the Gemini 2.5 API (shared with other users, seems like some prompts are *blocked*, though not on the website)
- Seems fixed
- [ ] To check: maybe still some duplicates (26 page 8 has some events of 7 but very hard to spot for the model, actually kind of duplicated in the text)
Note: 5/10min per issue in current setup