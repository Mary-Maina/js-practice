let stocks = {
    Fruits: ["strawberries", "grapes", "bananas", "apples"],
    Liquids: ["ice", "water", "milk"],
    Holder: ["cup", "cone", "stick"],
    Toppings: ["chocolate", "caramel", "peanuts"],
};

let shop_open = true; //if true we continue to next step

let order = (time, work) => {
    new Promise ((resolve, reject) => {
    if (shop_open) {
        setTimeout (() => {
            resolve( work())
        }, time)
       
    }
    else {
        reject(console.log("shop closed"))
    }
})
}
order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
    .then(() => {
        return order(1000, () => console.log("Production has started"));
    });
