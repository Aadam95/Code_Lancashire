console.log("Hello I am Aadam")

let age = 10

console.log(age)

age = 20

console.log(age)


var salary = 100

var salary = 200

let answer = salary * age

console.log(answer)

function checkIfEligible(cV, mD, mO){
    if(cV > mO && cV > mD){
        console.log("You have met all the conditions")
    }
    else{

        let generalMessage = "You have not met all the conditions."

        // let specificMessage = "You are " +(mO - cV) + " away for min order value "

        let specificMessage = `You are ${(mO - cV)} away for min order value`

        // let specificMessage  = `You are ${(minOrder - cartValue)} away for min order value`

        console.log(`${generalMessage} ${specificMessage}`)
    }
}

let cartValue = 100

let minDisc = 150

let minOrder = 120

checkIfEligible(cartValue, minDisc, minOrder)

checkIfEligible(1000, minDisc, minOrder)

let numbers = [1,2,3,4,5.12, "Aadam", true]

console.log(numbers[3])

const item = {
    name: "iPhone",
    price: 799,
    colour:"black",
    memory: [64, 128, 256]
}

console.log(item.name)

for(let i = 0; i < numbers.length ; i++){
    console.log(numbers[i])
}

let start = 0

while(start < numbers.length){
    console.log(numbers[start])
    start++
}

let newNumbers = [1,2,3,4,5,6,7,8,9,10]

let evenNumbers = newNumbers.filter((number, index, newNumbers)=>{
    // should return a boolean true or false
    return number % 2 == 0
})

console.log(evenNumbers)