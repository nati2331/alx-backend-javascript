var studentA = {
    firstName: "John",
    lastName: "Doe",
    age: 22,
    location: "New York, USA",
};
var studentB = {
    firstName: "Jane",
    lastName: "Smith",
    age: 21,
    location: "London, UK",
};
var studentsList = [studentA, studentB];
var styleSheet = "\n  html {\n    margin: 0;\n    height: 100%;\n  }\n  body {\n    box-sizing: border-box;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 80%;\n    margin: 10%;\n    font-family: Arial, sans-serif;\n    background-color: #f4f4f4;\n  }\n  table {\n    border-collapse: collapse;\n    width: 50%;\n    background-color: white;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  }\n  thead {\n    background-color: #4CAF50;\n    color: white;\n  }\n  th, td {\n    padding: 10px;\n    border: 1px solid gray;\n    text-align: center;\n  }\n  td {\n    cursor: pointer;\n  }\n  td:hover {\n    background: gainsboro;\n  }\n";
export var displayStudents = function (students) {
    var table = document.createElement('table');
    // Create table header
    var tableHead = document.createElement('thead');
    var headRow = document.createElement('tr');
    headRow.insertAdjacentHTML('beforeend', '<th>First Name</th>');
    headRow.insertAdjacentHTML('beforeend', '<th>Location</th>');
    tableHead.appendChild(headRow);
    // Create table body
    var tableBody = document.createElement('tbody');
    for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
        var student = students_1[_i];
        var bodyRow = document.createElement('tr');
        bodyRow.insertAdjacentHTML('beforeend', "<td>" + student.firstName + "</td>");
        bodyRow.insertAdjacentHTML('beforeend', "<td>" + student.location + "</td>");
        tableBody.appendChild(bodyRow);
    }
    table.appendChild(tableHead);
    table.appendChild(tableBody);
    document.body.appendChild(table);
};
// Call the fu
//# sourceMappingURL=main.js.map