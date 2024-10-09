// main.ts
export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentsList: Student[] = [
  {
    firstName: "Liam",
    lastName: "Smith",
    age: 21,
    location: "New York, USA",
  },
  {
    firstName: "Emma",
    lastName: "Johnson",
    age: 23,
    location: "Toronto, Canada",
  },
];

const styleSheet = `
  html { margin: 0; height: 100%; }
  body {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    margin: 10%;
  }
  table { border-collapse: collapse; }
  thead { font-weight: bold; }
  td {
    padding: 10px;
    border: 1px solid gray;
    cursor: pointer;
  }
  td:hover { background: gainsboro; }
  td:nth-child(1) { text-align: center; }
`;

const createTable = (students: Student[]): HTMLTableElement => {
  const table = document.createElement('table');
  const tableHead = document.createElement('thead');
  const headRow = document.createElement('tr');

  headRow.innerHTML = '<td>FirstName</td><td>Location</td>';
  tableHead.appendChild(headRow);
  table.appendChild(tableHead);

  const tableBody = document.createElement('tbody');
  students.forEach(student => {
    const bodyRow = document.createElement('tr');
    bodyRow.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
    tableBody.appendChild(bodyRow);
  });

  table.appendChild(tableBody);
  return table;
};

document.body.appendChild(createTable(studentsList));

const styleSheetElement = document.createElement('style');
styleSheetElement.innerHTML = styleSheet;
document.head.appendChild(styleSheetElement);
document.title = 'Task 0';
