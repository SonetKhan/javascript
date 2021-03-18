const normalPerson ={
    firstName:'Refat',
    lastName:'Khan',
    salary : 15000,
    fullName:function(){
        console.log(this.firstName,this.lastName);
    },
    chargeBill:function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}
console.log(normalPerson.chargeBill(150));