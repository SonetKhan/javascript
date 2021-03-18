function addNumber(num1,num2){
    //console.log(arguments[4]);
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        //console.log(element);
        sum = sum + element;
       

        
    }
    
  return sum;
}
let result = addNumber(2,3,5,6,8);
console.log(result);