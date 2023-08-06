function paperRequirement(book1,book2,book3){
    const book1NeedPaper=100*book1;
    const book2NeedPaper=200*book2;
    const book3NeedPaper=300*book3;
    const total=book1NeedPaper+book2NeedPaper+book3NeedPaper;
    return total
}
const paperRequirementResult=paperRequirement(1,1,1);
console.log(paperRequirementResult);
