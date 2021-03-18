function doSomething(){
    console.log(22222);
}
console.log(44444);
//setTimeout(doSomething,1000);
setTimeout(function(){
    console.log('Lazy and waiting ');
});
setInterval(function (){
    console.log('Doing it again');
},1000);
console.log(4444);