class Parent{
    constructor(){
        this.fatherName = "schweznegger";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;

    }
    getFullName(){
        return this.name + ' ' +this.fatherName;
    }
}
const baby = new Child("Arnold");
console.log(baby.getFullName());