const ages = [12,18,20];
const ages2 = [16,20,45];
const ages3 = [22,25,36];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages,...ages2, 5, ...ages3];
//console.log(allAges2);
const takaPoisha = [12,14,15,16,20];
const maximum = Math.max(...takaPoisha);
console.log(maximum);

