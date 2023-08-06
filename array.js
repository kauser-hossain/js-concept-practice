const country="Bangladesh";
const age=52;
const isIndependent=true;
const student={
  id:121,
  class:11,
  name:"kauserhossain"
}
const friends=[13,14,11,17,21,16,15,20];
function add(num1,num2){
  return num1+num2  
}
console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(typeof friends);
console.log(typeof add);
// that is the way to check array datatype
console.log(Array.isArray(friends));
// how to check given element exist an array
console.log(friends.includes(50));
// another system to check 
if(friends.indexOf(20)!==-1){
  
}
// how to add two array by return one array
const newFriendAge=[12,13,11,13];
const allFriend=newFriendAge.concat(friends)
console.log(allFriend);
