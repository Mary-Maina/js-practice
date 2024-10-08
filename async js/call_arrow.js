let stocks = {
    Fruits: ["strawberries", "grapes", "bananas", "apples"],
    Liquids: ["ice", "water", "milk"],
    Holder: ["cup", "cone", "stick"],
    Toppings: ["chocolate", "caramel", "peanuts"],
};


let order = (fruit_name, call_production) => {
    setTimeout(() => {
        console.log(`${stocks.Fruits[fruit_name]} was selected`);
        call_production(after_production);
    }, 2000);

    
};


let production = (call_after) => {
    setTimeout(() => {
        console.log("Production has started");

        setTimeout(() => {
            console.log("The fruit has been chopped");

            setTimeout(() => {
                console.log(`${stocks.Liquids[0]} and ${stocks.Liquids[1]} have been added`);

                setTimeout(() => {
                    console.log("The machine has been started");
                    call_after();
                }, 1000)
            }, 1000)
        }, 2000)
    }, 0000);

    
};

let after_production = () => {
    setTimeout(() => {
        console.log(`${stocks.Holder[0]} was selected`);

        setTimeout(() => {
            console.log(`${stocks.Toppings[1]} was selected`);

            setTimeout(() => {
                console.log("Your order is ready, hope you enjoy");
            }, 1000)
        }, 1000)
    }, 1000)
    
}

order(0, production);
