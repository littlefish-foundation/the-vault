## Instructions

Whenever you need to update [[D. Simplifying Decentralized Work/DAO Tools/DAO Tools Index]] for Obsidian Publish, paste this code to where the table is, press ALT + R and watch the magic. You need templater and dataview enabled for this.

## The Template

<%*
const headers = ["Tool", "File"];
const tableValues = DataviewAPI.pages('#dao-tool')
.sort(p => p.tool, 'asc')
.map(p =>[ p.tool, p.file.link]);
const myTable = DataviewAPI.markdownTable(headers, tableValues);
-%>

<% myTable %>

Deep Dive

<%*
const headers = ["Tool", "File"];
const tableValues = DataviewAPI.pages('#deep-dive')
.sort(p => p.tool, 'asc')
.map(p =>[ p.tool, p.file.link]);
const myTable = DataviewAPI.markdownTable(headers, tableValues);
-%>

<% myTable %>
