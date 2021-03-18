const normalPerson ={
    firstName:'Refat',
    lastName:'Khan',
    salary : 15000,
    fullName:function(){
        console.log(this.firstName,this.lastName);
    },
    chargeBill:function(amount){
        //console.log(this);
        this.salary = this.salary - amount;
        return this.salary;
    }
}
const heroPerson = {
    firstName:'Hero',
    lastName:'Balam',
    salary : 250000


}
const friendlyPerson = {
    firstName:'Hero',
    lastName:'Balam',
    salary : 250000


}
//normalPerson.chargeBill();
const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
console.log(heroChargeBill(2000));
console.log(heroChargeBill(3000));
console.log(heroPerson.salary);
console.log(normalPerson.salary);
const friendChargeBill = normalPerson.chargeBill.bind(friendlyPerson);

console.log(friendChargeBill(10000));
