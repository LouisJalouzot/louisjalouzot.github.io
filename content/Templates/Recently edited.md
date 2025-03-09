<%*
const dv = app.plugins.plugins["dataview"].api;
const filename = "Recently Edited";
const query = `TABLE WITHOUT ID
file.link AS Note, dateformat(file.mtime, "ff") AS Modified
FROM ""
SORT file.mtime desc
LIMIT 7`;

const tFile = tp.file.find_tfile(filename);
const queryOutput = await dv.queryMarkdown(query);

// write query output to file
await app.vault.modify(tFile, queryOutput.value);
%>