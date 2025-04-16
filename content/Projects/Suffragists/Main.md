# 2025-03-11
- [x] VfW 98: page 7 table missing, reprompt
- [x] VfW 99: page 7 missing events because city name on previous page
- [x] Idea: prompt 2 pages by 2 pages and remove duplicates
	- [x] Remove duplicates, try with LLM or with threshold on BERTScore
- [x] Try adding in prompt that there are pages without meetings/that it needs to be sure (e.g. page 1&2 VfW 99)
- [x] Changed Gemini flash -> Gemini pro
- [x] Test Mistral OCR
# 2025-03-24
- Olivia: 102 is actually *small*, thanks for flagging it, it made me see that it had duplicates
- Switched temperature to 0 to remove randomness (should have done this since the beginning)
- [x] Issue: Gemini pro outputs duplicates (meetings from page 7 are outputted when prompting on page 8)
- Mostly fixed by refining the prompt, added
`Don't include any meeting from the CONTEXT section, only from the TEXT one. It is possible that there are no valid meetings.`
Note: Gemini flash versions don't have this issue but they miss meetings on "big issues" (c.f. issue 100 with ~200 meetings)
- Switched to Gemini 2.5
	- Lower request per day: 100 but seems not hard enforced
	- Better: reasoning model
	- Max output tokens 8k -> 65k (maybe no need to reprompt but seems usefull in practice, c.f. 26 p7)
Note: 5/10min per issue in current setup
# 2025-04-02
- [x] I get annoying `list index out of range` errors using the Gemini 2.5 API (shared with other users, seems like some prompts are *blocked*, though not on the website)
- Seems fixed
- [x] To check: maybe still some duplicates (26 page 8 has some events of 7 but very hard to spot for the model, actually kind of duplicated in the text), but also for the other ones
- Even with temperature = 0, model not deterministic throughout time (maybe modifs on Google side), rerun and duplicates seem to disappear
- I coded a simple function to check duplicates and rerun corresponding scans
## Duplicates
- [x] Reprompt for completion is sometimes beneficial (26 p7) and sometimes harmful (192 p7)
- Potential solutions
	- ~~Hard drop duplicates, maybe while asking a specific format for date, location and time~~
	- ~~Prompt Gemini 2.5~~
	- ~~Refine prompt~~
- [ ] Hard drop then soft drop: post process date/location/time to specific format then drop *similar* ones
- [ ] What to do about multiple dates/times (e.g. "3 and 8pm", "Monday afternoons and Thursday evenings"), try to recreate one entry for each?
- Tried refining the prompt slightly and obtained less meetings (as expected) with
```
Include only meetings from TEXT.  
There could be none, in which case output an empty list of meetings.  
Meetings which can be found in CONTEXT should be ignored.
```
### Gemini miss
![[Pasted image 20250402143852.png|800]]
### Actual duplicates
![[Pasted image 20250402143805.png|800]]
# Pricing
- [x] What to do about rate limit? When enforced (not always), only 10 issues/day. Can switch to paying `gemini-2.5-pro-preview-03-25`:
![[Screenshot_20250408_160134.png|400]]
Issue 100 (~200 meetings): ~150k input tokens and ~20k output tokens -> $0.4
~100€ spent for all of VfW