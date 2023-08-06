// splice mathod molotho original array ka change kore fale
// splice er karjokrom first a jai index thake start korbo oi index divo
// second a koita element remove korbo oitar sonka divo
// ami chaile er pore aro element add korthe parbo
const friends=[12,45,32,22,44,62,29,69,87];
const partial=friends.splice(1,5);
// output ashbe 45,32,22,44,62
// console.log(partial);
// original array element 12,29,69,87
// console.log(friends);
const friend=[12,45,32,22,44,62,29,69,87];
const addSomeElement=friend.splice(0,2,0,2);
// output 12,45
console.log(addSomeElement);
// original array 0,2,32,22,44,,62,29,69,87
console.log(friend);