interface Teacher{
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}



const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};


interface Directors extends Teacher{
    numberOfReports: number;
};

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};



interface printTeacherFunction{
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string) : string =>{
    return `${firstName.charAt(0)}. ${lastName}`;
};



interface StudentClassConstructor{
  firstName: string;
  lastName: string;
}

interface StudentClassInterface{
  workOnHomework(): String;
  dislayName(): string;
}

class StudentClass{
  firstName: string;
  lastName: string;

  constructor({firstName, lastName}: StudentClassConstructor){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string{
    return "Currently working";
  }

  displayName(): string{
    return this.firstName;
  }
}


