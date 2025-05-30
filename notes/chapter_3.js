// Chapter 3: JavaScript Basics
// This file covers basic JavaScript concepts including data types, functions, and error handling.
// Importing the fs module for file system operations
// Importing functions and variables from chapter_2.js
const { addStrings, example_array } = require("./chapter_2")
console.log('Example array from chapter 2:', example_array)
console.log(addStrings('hello', 'world'))

let example_sentence = 'this_is_a_string'
let string_length = example_sentence.length

// data manipulation :

//array and lists
let simple_array = [1, 4, 2, 3, 5] // 1 dimensional

//crud - create read update delete
// for (let i = 0; i < simple_array.length; i++) {
//     let subArray = simple_array[i]
//     for (let j = 0; j < subArray.length; j++) {
//         console.log(i, j, simple_array[i][j])
//     }
// }

let index_of_three = simple_array.indexOf(3)
let start_array = simple_array.slice(0, index_of_three)
let end_array = simple_array.slice(index_of_three + 1)

let new_filtered_array = start_array.concat(end_array)

console.log('Original array:', simple_array)
console.log('Index of 3:', index_of_three)
console.log('Start array:', start_array)
console.log('End array:', end_array)
console.log('New filtered array:', new_filtered_array)


// dictionaries or objects
const bio = {
    name: 'james',
    age: 27,
    hobbies: ['gym', 'coding', 'reading'],
    friends: {
        'juan': {
            description: 'good at maths'
        }
    }
}

console.log(bio)
console.log(bio.name)
console.log('name' in bio)
console.log('joke' in bio)

function helloWorld() {
    let sentence = 'hello world and India'
    console.log(sentence)
}
helloWorld()


function counter() {
    let count = 0

    return function () {
        count++
        console.log(count)
    }
}
let increment = counter()
increment()
increment()


// error handling and debugging
const broken_object = {
    word: 'nice'
}
function problematicCodeBlock() {
    try {
        console.log('Attempted the try block')
        const sub_object = broken_object.hello.world
        console.log(sub_object)
    } catch (err) {
        console.error(err.message)
    }


}
console.log('Before the problematic code block')
problematicCodeBlock()


function throwError() {
    try {
        console.log('Attempting to throw an error')
        throw new Error('custom error message')
    } catch (err) {
        console.log(err.message)
    }
}

console.log('Before throwing an error')
throwError()
console.log('code continued to execute')