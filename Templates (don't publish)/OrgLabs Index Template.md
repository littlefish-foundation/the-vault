## Instructions

Whenever you need to update [[Org Labs Index]] for Obsidian Publish, paste this code to where the table is, press ALT + R and watch the magic. You need templater and dataview enabled for this.

## The Template

<%*
const headers = ["File", "Created", "Last Modified"];
const tableValues = DataviewAPI.pages('#orglabs')
.sort(p => p.tool, 'asc')
.map(p =>[p.file.link, p.file.cday, p.file.mday]);
const myTable = DataviewAPI.markdownTable(headers, tableValues);
-%>

<% myTable %>

