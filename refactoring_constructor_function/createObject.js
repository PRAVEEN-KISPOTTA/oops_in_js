const cars = {
    getDetails(name){
        console.log(`The car is ${name}`)
    }
}

const car1 = Object.create(cars);
console.log(car1.__proto__)
car1.getDetails("Mahindra")

const car2 = Object.assign(cars);
console.log(car2.__proto__)
car2.getDetails("Honda")
