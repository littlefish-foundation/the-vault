## Instructions

Whenever you need to update [[Work Tools Index]] for Obsidian Publish, paste this code to where the table is, press ALT + R and watch the magic. You need templater and dataview enabled for this.

## The Template

<%*
const headers = ["Tool", "File", "Category", "Date", "Author", "AI" ];
const tableValues = DataviewAPI.pages('#work-tools')
.sort(p => p.tool, 'asc')
.map(p =>[ p.tool, p.file.link, p.category, p.date, p.author, p.ai]);
const myTable = DataviewAPI.markdownTable(headers, tableValues);
-%>

<% myTable %>



