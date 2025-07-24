

/*interface Student{
    firstName: string;
    lastName: string;
    age:number;
    location:string;
}

const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    location: "Washington"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Doe",
    age: 25,
    location: "Arisona"
};


const studentsList: Student[] = [student1, student2];

function renderTable(students: Student[]){
    const table:HTMLTableElement = document.createElement("table");

    const headerRow = table.insertRow();
    const headerCell1 = headerRow.insertCell(0);
    const headerCell2 = headerRow.insertCell(1);

    headerCell1.innerText = 'First Name';
    headerCell2.innerText = 'Location';

    students.forEach(student => {
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);

        cell1.innerText = student.firstName;
        cell2.innerText = student.location;
    });

    document.body.appendChild(table);
    
}

renderTable(studentsList);*/

interface Student{
	firstName: string,
	lastName: string,
	age: number,
	location: string,
  }

const student1: Student = {
	firstName: "hafed",
	lastName: "inoubli",
	age: 26,
	location: "Tunisia",
}
const student2: Student = {
	firstName: "coucou",
	lastName: "coucou",
	age: 25,
	location: "Canada",
}

const studentsList: Array<Student> = [student1,student2]

const table: HTMLTableElement = document.createElement('table');

document.body.appendChild(table);

const thead: HTMLTableSectionElement = document.createElement('thead');
thead.innerHTML = '<tr><th>firstName</th><th>location</th></tr>';
table.appendChild(thead);
const tbody: HTMLTableSectionElement = document.createElement('tbody');
table.appendChild(tbody);
for (let i: number = 0; i < studentsList.length; i++) {
    const row: HTMLTableRowElement = document.createElement('tr');
    const th1: HTMLTableCellElement = document.createElement('th');
    const th2: HTMLTableCellElement = document.createElement('th');
    th1.innerHTML = studentsList[i].firstName;
    th2.innerHTML = studentsList[i].location;
    row.appendChild(th1);
    row.appendChild(th2);

    tbody.appendChild(row);
}
