var student = {Id:121, phone:017222321344,name:"abir"};
var student2 = {Id:131, phone:0172,name:"mahi"};
//var phoneNo = student.phone; its a way for object call...
var phoneNo = student['phone'];//.....Another way to call object property......
student.phone = 384874373;
student2.phone = 454534532;
student2.cinema = "Ogni2";
student2["cinema"] = "smart girl";
console.log(phoneNo);
console.log(student);
console.log(student2);