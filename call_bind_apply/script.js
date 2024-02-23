const mobile = {
    year: "2024",
    chargerType: "type C",
    category: "MOBILE",

    getDetails(name, price){
        console.log(`Category - ${this.category}
        This is a "${name}" phone, which was launched in "${this.year}"
        under the price range of "${price}" having a "${this.chargerType}"
        carger cable.`)
    }
}
//------------------Normal call-----------
mobile.getDetails("Nokia", "25k");

const laptop = {
    year: 2023,
    chargerType: "type M",
    category: "LAPTOP"
}

//------------------call type---------------
mobile.getDetails.call(laptop, "Asus", "45k");

//-----------------bind type-----------
const res = mobile.getDetails.bind(laptop);
res("Mac", "95k");

//---------------apply type---------------
mobile.getDetails.apply(laptop, ["Acer", "32k"]);


//-----------------------------------add infinite number------------------------
function addNum(...args){
    const res = args.reduce((acc, currentVal)=>
     acc + currentVal, 0
    )
    return res;
}

const result = addNum(1, 2, 3, 4);
console.log("Add Num - ", result);