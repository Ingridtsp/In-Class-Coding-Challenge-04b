//Step 2: Define array of products 
let products =[
    { sku:"E100", name:"Laptop", category:"electronics", price:1095.00, inventory:12 },
    { sku:"E200", name:"Mouse", category:"electronics", price:23.99, inventory:18 },
    { sku:"E300", name:"Shoes", category:"apparel", price:125.00, inventory:27 },
    { sku:"E400", name:"Sweater", category:"apparel", price:37.95, inventory:32 },
    { sku:"E500", name:"Ice Cream", category:"groceries", price:7.95, inventory:12 },
]

//Step 3: Apply category discounts
for (let product of products){
    switch(product.category){
        case "electronics":
            discount = .2
            break;
        case "apparel":
            discount =.15; 
            break;
        case "groceries":
            discount = .10;
        default: 
            discount = 0
            break;

    }
    
    let promoPrice = product.price * (1 - discount);
    product.promoPrice = promoPrice;


console.log(products)

    //Step 4: customer type discounts 
    
    const customers = [
        { id: 1, customerType: "regular", couponCode: "SAVE10", taxRate: 0.085,
        cart:[{ sku: "E100", qty: 2 },{ sku: "E200", qty:5}]},
        { id: 2, customerType: "student", couponCode: "FREESHIP", taxRate: 0.085, 
        cart:[{ sku: "E300", qty: 2}, { sku: "E500", qty:5}]},
        { id: 3, customerType: "senior", couponCode: "SHOPSENIOR", taxRate: 0.085,
        cart:[{ sku: "E500", qty:2}, {sku: "E100", qty:5}]
        }]






}
