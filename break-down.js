const products = [
    {name: 'iphone 14', price: 70000},
    {name: 'samsung galuxy 14', price: 6000},
    {name: 'dell laptop', price: 50000},
    {name: 'lenevo laptop yoga', price: 55000},
    {name: 'Asus laptop', price: 35000},
    {name: 'smart watch samsung', price: 4000},
    {name: 'apple watch', price: 9000},
    {name: 'plus one phone 4', price: 27000},
];

/* for(const product of products){
    if(product.price < 5000){
        break;
    }
    console.log(product)
} */

for(const product of products){
    if(product.price < 10000){
        continue;
    }
    console.log(product)
}