
'hello world'
console.log('Hello Aditya')

let example_variable = 'this is a string' // this is a string
let example_number = 123 // this is a number
let example_float = 123.456 // this is a float
let example_boolean = true // this is a boolean
let example_null = null // this is a null value

481212398123 // this is number

let sentence = 'hello world' // this is a string of characters

true && false // these are booleans

let friends = {
    james: 'is super cool',
    lucy: 'isn\'t so cool',
    number_of_eggs: sentence
}

let is_true = true // could be false


function myFirstFunction(value, secondValue) {
    console.log('The value is: ', value)
    console.log('The second value is: ', secondValue)
    //console.log(value != secondValue)
}


let multiplyTwoNumbers = myFirstFunction
multiplyTwoNumbers(3, 5)
multiplyTwoNumbers('6', 6)


// && AND || OR !
let condition1 = true
let condition2 = false

// console.log(typeof example_array)

if (condition2 && condition1) {
    console.log('hi mum')
} else if (condition1 || condition2) {
    console.log('one condition of the two was true')
} else {
    console.log('the value was false so here we are')
}

let example_array = [1, 5, 7, 9, 4, 5, 6, 7, 3, 4, 5, 2342]
let i = 0
let length = example_array.length
while (i < length) {
    //console.log('value was true: ', i, example_array[i])
    i++
}

for (let j = 0; j < length; j++) {
    if (j === 6) {
        break
    }
    //console.log('value was true: ', j, example_array[j])
}


function addStrings(string1 = 'default1', string2 = 'default2') {
    let concatString = string1 + ' ' + string2
    console.log(concatString)
    return concatString
}

let newString = addStrings('hello')
console.log('The new string is: ', newString)

module.exports = {
    addStrings,
    example_array
}