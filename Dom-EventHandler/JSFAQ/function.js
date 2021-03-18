function evenIfy(nums){
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        
        
        
    if(num % 2 == 0){
        console.log(num,': is even');

    }
    else{
        console.log(num,': is odd');

    }
}
}
let nums = [5,12,89,45,18,9];

evenIfy(nums);

let friends_age = [16,17,18,20,24];

evenIfy(friends_age);
    