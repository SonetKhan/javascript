const student = [
    {id:31,name:"Omar sunny"},
    {id:32, name: "Maaannnaaa"},
    {id:33,name : "Moyuri"},
    {id:34,name : "Deepjol"}

];
const nameArray = [];
for (let i = 0; i < student.length; i++) {
    const element = student[i];
    sName = element.name;
    nameArray.push(sName);
    
};
const names = student.map(element=>element.name);
const bigger = student.filter(x => x.id >31);
const biggerOne = student.find(x => x.id >31);
console.log(names);
console.log(bigger);
console.log(biggerOne);