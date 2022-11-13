## Instructions

Whenever you need to update [[Love House Index]] for Obsidian Publish, paste this code to where the table is, press ALT + R and watch the magic. You need templater and dataview enabled for this.

## The Template

<%*
const headers = ["File", "Created", "Last Modified"];
const tableValues = DataviewAPI.pages('#LoveHouse')
.sort(p => p.file.cday, 'desc')
.map(p =>[p.file.link, p.file.cday, p.file.mday]);
const myTable = DataviewAPI.markdownTable(headers, tableValues);
-%>

<% myTable %>




