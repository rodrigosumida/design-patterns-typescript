const personPrototype = {
  firstName: 'Rodrigo',
  lastName: 'Sumida',
  age: 21,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const anotherPerson = Object.create(personPrototype);
anotherPerson.firstName = 'Messi';
console.log(anotherPerson);
console.log(anotherPerson.lastName);
console.log(anotherPerson.fullName());
