const allFriend = ["sajid", "kamal", "junayed ahamed sajib", "sagir", "hridoy"];
function bestFriends(allFriend) {
  let largeName = allFriend[0];
//   console.log(largeName.length)
  for (let i=0; i<allFriend.length;i++){
    const singleFriend=allFriend[i];
    // console.log(singleFriend);
    // console.log(singleFriend.length);
    if(largeName.length<singleFriend.length){
       largeName=singleFriend 
    }
  }
  return largeName
}
const largerstName = bestFriends(allFriend);
console.log(largerstName);
