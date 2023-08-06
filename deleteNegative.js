const numbers=[34,53,64,84,-33,55,-100,56];
function findPositive(numbers){
    // ai array da declare korci karon aidar modde push kormo
    const positiveArr=[];
    for(let i=0; i<numbers.length; i++){
        // prottek ta element nice
        const number=numbers[i];
        // aikane check korci number gula jodi 0 er chaya choto hoi thahole skip korbo
      if(number<0){
        continue
      }
    //   na hoy number gula re positive array er modde push koira dice
      else{
        positiveArr.push(number)
      }
    }
    return positiveArr
}
const result=findPositive(numbers);
console.log(result)