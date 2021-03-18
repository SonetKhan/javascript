function callback_explain(name,age,task){
    console.log('your name',name);
    console.log('your age',age);
   // console.log(task);
   task();
}
function handWash(){
    console.log('wash your hand');
}
function takeShower(){
    console.log('Take shower please');
}
function scrollFacebook(){
    console.log('Scroll facebook but don'+'t like any post');
}
callback_explain('nurul  uddin', 16,handWash);
callback_explain('sujon  uddin', 17,takeShower);
callback_explain('Ramzan uddin', 18,scrollFacebook);