class Student{
    constructor(sId,Sname){
        this.id = sId;
        this.name = Sname;
        this.school = "kolimunnnesa school";
    }

}
const student1 = new Student(1,'sonet');
const student2 = new Student(2,'mahabub');
console.log(student1.name,student2.name);