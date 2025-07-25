interface Student{
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


const table:HTMLTableElement = document.createElement('table');

document.body.appendChild(table);

const headerRow: HTMLTableRowElement = table.insertRow();

const firstNameHeader: HTMLTableCellElement = headerRow.insertCell();

const locationHeader: HTMLTableCellElement = headerRow.insertCell();

firstNameHeader.innerHTML = 'First Name';

locationHeader.innerHTML = 'Location';

studentsList.forEach((student) => {
    const row: HTMLTableRowElement = table.insertRow();
    const firstName: HTMLTableCellElement = row.insertCell();
    const location: HTMLTableCellElement = row.insertCell();

    firstName.innerHTML = student.firstName;
    location.innerHTML = student.location;
});
