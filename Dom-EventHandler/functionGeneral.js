function getName(firstName,lastName){
    console.log(arguments);
    let fullName = '';
    for(let i=0; i<arguments.length;i++){
       const namePart = arguments[i];
        fullName = fullName + namePart + ' ';


    }
    // const fullName = firstName + " " + lastName;
    return fullName

}
const fullname = getName('refat','sonet','khan');
console.log(fullname);