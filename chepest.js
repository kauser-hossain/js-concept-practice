// nicher list thaika shob chaya kom dahmi phone ta find out korthe hobe
const phones = [
  { name: "samsung", storage: "32gb", price: 36000, color: "silvar" },
  { name: "Apple", storage: "32gb", price: 86000, color: "silvar" },
  { name: "Oppo", storage: "32gb", price: 26000, color: "silvar" },
  { name: "Htc", storage: "32gb", price: 56000, color: "silvar" },
  { name: "Vivo", storage: "32gb", price: 16000, color: "silvar" },
  { name: "Walton", storage: "32gb", price: 46000, color: "silvar" },
];
function chepestPhone(phones){
    // compare korer jonno first prothom phone ta ke chepest doira nilam
    let chepest=phones[0];
    for(let i=0; i<phones.length;i++){
        // prottek ta phone alada koira nialm
        const phone=phones[i];
        // ai kane amra check korbo phone er price ki protom phone er price thaika boro na choto jodi choto hoi thahole amra chepest er modde phone er price ta chepest er modde set kore falbo
        if(phone.price<chepest.price){
           chepest=phone
        }
    }
    return chepest
}
const mySelection=chepestPhone(phones);
console.log(mySelection);