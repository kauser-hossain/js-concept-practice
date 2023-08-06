const shopingCost=[
    {name:"shoes",price:250},
    {name:"pant",price:350},
    {name:"tshirt",price:450},
    {name:"shirt",price:2550},
]
function totalCost(products){
    let sum=0;
    for(let i=0;i<products.length;i++){
        const product=products[i]
        // console.log(product);
        sum+=product.price
    }
    return sum
}
const total=totalCost(shopingCost);
console.log(total);