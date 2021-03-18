function add(num1,num2=20){
return num1 + num2;
}
total = add(12,12);
console.log(total);
function createUser(name,age=18){
const user = {};
user.name = name;
user.age = age;
return user;
}
 const user = createUser('sonet',14);
 console.log(user);
