class Person{
    constructor(firstName,lastName,salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

function person1(firstName,lastName,salary){

    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;

}
const heroPerson = new Person('Hero','Balam',25000);
const oldPerson = new person1("Grand","Pappa",1200);
console.log(heroPerson);
console.log(oldPerson);