"use strict";
exports.__esModule = true;
var studentsList = [
    {
        firstName: "Liam",
        lastName: "Smith",
        age: 21,
        location: "New York, USA"
    },
    {
        firstName: "Emma",
        lastName: "Johnson",
        age: 23,
        location: "Toronto, Canada"
    },
];
var styleSheet = "\n  html { margin: 0; height: 100%; }\n  body {\n    box-sizing: border-box;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 80%;\n    margin: 10%;\n  }\n  table { border-collapse: collapse; }\n  thead { font-weight: bold; }\n  td {\n    padding: 10px;\n    border: 1px solid gray;\n    cursor: pointer;\n  }\n  td:hover { background: gainsboro; }\n  td:nth-child(1) { text-align: center; }\n";
var createTable = function (students) {
    var table = document.createElement('table');
    var tableHead = document.createElement('thead');
    var headRow = document.createElement('tr');
    headRow.innerHTML = '<td>FirstName</td><td>Location</td>';
    tableHead.appendChild(headRow);
    table.appendChild(tableHead);
    var tableBody = document.createElement('tbody');
    students.forEach(function (student) {
        var bodyRow = document.createElement('tr');
        bodyRow.innerHTML = "<td>" + student.firstName + "</td><td>" + student.location + "</td>";
        tableBody.appendChild(bodyRow);
    });
    table.appendChild(tableBody);
    return table;
};
document.body.appendChild(createTable(studentsList));
var styleSheetElement = document.createElement('style');
styleSheetElement.innerHTML = styleSheet;
document.head.appendChild(styleSheetElement);
document.title = 'Task 0';
