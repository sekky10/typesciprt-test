class Student {
  fullName: String;
  constructor(public firstName: string, public middleName: string, public lastName: string) {
    this.fullName = firstName + " " + middleName + " " + lastName;
  }
}

interface Person {
  firstName: string;
  middleName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.middleName + " " + person.lastName;
}

let user = new Student("Jane", "M", "User");

document.body.textContent = greeter(user);