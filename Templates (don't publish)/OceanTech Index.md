
<%*
const headers = ["Tool", "File", "Chain", "Date", "Author", "Bridge" ];
const tableValues = DataviewAPI.pages('#ocean-tech')
.sort(p => p.tool, 'asc')
.map(p =>[ p.tool, p.file.link, p.chain, p.date, p.author, p.bridge]);
const myTable = DataviewAPI.markdownTable(headers, tableValues);
-%>

<% myTable %>