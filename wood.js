// chair banaithe lage 3 cft kat
// table banithe lage 10 cft kat 
// bed banithe lage 50 cft kat
// aikane shob somoy kat er requrement fixed thakbe
// shudu matro change hobe amader kotho gula jinis lagbe
function woodCalculator(chairQuantity,tableQuantity,bedQuantity){
    // per chair a 3 cft kat lagbe
    const perChairWood=3;
    // per table a 10 cft kat lagbe
    const perTableWood=10;
    // per bad a 50 cft kat lagbe
    const perBedWood=50;
    // chair banaithe amader total kat lagbe amader ekta chair banaithe jothotoko kat lagbe abong kotho gula chair lagbe oi duitar gunfol
    const totalChairWood=perChairWood*chairQuantity;
    const totalTablewood=perTableWood*tableQuantity;
    const totalBedWood=bedQuantity*perBedWood;
    const totalWood=totalChairWood+totalTablewood+totalBedWood;
    return totalWood;
}
const totalWood=woodCalculator(1,1,1);
console.log(totalWood);
