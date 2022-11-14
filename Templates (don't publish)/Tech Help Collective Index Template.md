## Instructions

Whenever you need to update [[Tech Help Collective Index]] for Obsidian Publish, paste this code to where the table is, press ALT + R and watch the magic. You need templater and dataview enabled for this.

## The Template

<%*
const headers = ["Tool", "File", "Created"];
const tableValues = DataviewAPI.pages('#THC')
.sort(p => p.tool, 'asc')
.map(p =>[ p.tool, p.file.link, p.file.cday]);
const myTable = DataviewAPI.markdownTable(headers, tableValues);
-%>

<% myTable %>

