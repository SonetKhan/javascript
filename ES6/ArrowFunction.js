// function doubleIt(num){
// return num * 2;
// }
// doubleIt = function myFun(num){
//     return num * 2;
// }
const doubleIt = num => num * 2;
const result = doubleIt(100);
const add = (x,y)=> x + y;
const sum = add(8,9);
const doMath=(x,y)=>{
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result2 = doMath(10,5);
console.log(result2);

