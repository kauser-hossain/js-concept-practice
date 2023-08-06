// how to remove duplicate element in array

// declare an array
const names = [
  "abul",
  "babul",
  "cabul",
  "dabul",
  "cabul",
  "babul",
  "abul",
  "kabul",
  "gabul",
  "cabul",
  "babul",
  "abul",
];
// declare function
function removeElement(names){
    // lets declare an empty array beacause of unique element push this array
    const unique=[];
    // right now i will travarse names array ,i need single element
    for(let i=0; i<names.length; i++){
        // single element 
        const name=names[i];
        // console.log(element);
        // aikane check korbo unique array er modde ki name ace naki , jodi na thake thahole unique array er modde push korbo
        if(unique.includes(name)===false){
            unique.push(name)
        }

    }
    return unique
}
const uniqueNames=removeElement(names)
console.log(uniqueNames);


















const myFriends=['sagir','junayed','sajib','junayed','sajib','sohag'];
function removeDuplicateElement(myFriends){
    const newArr=[];
    for(let i=0 ;i<myFriends.length; i++){
        const singleFriend=myFriends[i];
        if(newArr.includes(singleFriend)===false){
            newArr.push(singleFriend)
        }
    }
    return newArr;
}
const duplicateNameRemove=removeDuplicateElement(myFriends);
console.log(duplicateNameRemove);
