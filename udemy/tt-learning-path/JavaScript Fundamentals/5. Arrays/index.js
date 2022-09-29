/**
 * Adding elements
 */
let numbers = [3, 4]
console.log(numbers) // 3, 4

// to the end
numbers.push(5, 6)
console.log(numbers) // 3, 4, 5, 6

// to the beginning
numbers.unshift(1, 2)
console.log(numbers) // 1, 2, 3, 4, 5, 6

// to the middle
numbers.splice(2, 1, 'a', 'b')
console.log(numbers) // 1, 2, a, b, 4, 5, 6

/**
 * Finding elements (primitives)
 */
numbers = [1, 2, 3, 1, 4]
console.log(numbers.indexOf('a')) // -1
console.log(numbers.indexOf(3)) // 2
console.log(numbers.indexOf(1)) // 0
console.log(numbers.indexOf(1, 1)) // 3 as it is the next 1 since index 1
console.log(numbers.lastIndexOf(1)) // 3
console.log(numbers.includes(1)) // true

/**
 * Finding elements (Reference Types)
 */
const courses = [
    {
        id: 1,
        name: 'a'
    },
    {
        id: 2,
        name: 'b'
    },
    {
        id: 3,
        name: 'a'
    }
]
console.log(courses.find((course) => course.name === 'a')) // return first element that matches criteria
console.log(courses.findIndex((course) => course.name === 'a')) // return first index that matches criteria
console.log(courses.findIndex((course) => course.name === 'w')) // -1

/**
 * Removing elements
 */
numbers = [1, 2, 3, 4, 5]
const last = numbers.pop() // remove from the end
console.log(last)
console.log(numbers) // 1, 2, 3, 4

const first = numbers.shift() // remove from the beginning
console.log(first)
console.log(numbers) // 2, 3, 4

const middle = numbers.splice(numbers.length / 2, 1) // remove from the middle
console.log(middle)
console.log(numbers) // 2, 4

/** 
 * Emptying an array
 */
numbers = [1, 2, 3, 4, 5]
let another = numbers

numbers = [] // 1st approach
console.log(numbers)
console.log(another) // another is not cleared as it is referencing to the still existent array

numbers = [1, 2, 3, 4, 5]
another = numbers
numbers.length = 0 // 2nd approach
console.log(numbers)
console.log(another) // bot arrays are cleared

numbers = [1, 2, 3, 4, 5]
another = numbers
numbers.splice(0, numbers.length) // 3rd approach
console.log(numbers)
console.log(another) // bot arrays are cleared

numbers = [1, 2, 3, 4, 5]
another = numbers
while (numbers.length > 0) numbers.pop() // 4th approach
console.log(numbers)
console.log(another) // bot arrays are cleared

/**
 * Combining and slicing arrays
 */
numbers = [1, 2, 3]
numbers2 = [4, 5, 6]

let combined = numbers.concat(numbers2)
console.log(combined) // 1, 2, 3, 4, 5, 6

let sliced = combined.slice(2, 4)
console.log(sliced) // 3, 4

sliced = combined.slice(2)
console.log(sliced) // 3, 4, 5, 6

sliced = combined.slice()
console.log(sliced) // copy of the combined array, note that all the primitives were copied, in the case of reference types the references are copied
// it means that any modification in one array item will modify as well that item in the other array

let objectsArr = [{ id: 1 }]
let copy = objectsArr.slice()
console.log('copy is: ', copy[0].id)
objectsArr[0].id = 2;
console.log('after modifying id is: ', copy[0].id) // copy array was modified as well

/**
 * The Spread Operator
 */
numbers = [1, 2, 3]
numbers2 = [4, 5, 6]

combined = [...numbers, ...numbers2]
console.log(combined) // 1, 2, 3, 4, 5, 6

objectsArr = [{ id: 1 }]
let objectsArr2 = [{ id: 2 }]
combined = [objectsArr, objectsArr2]
console.log(combined)

copy = [...combined]
objectsArr[0].id = 20;
console.log(copy) // elements are also copied by reference as in the previous case

/**
 * Iterating an aray
 */
numbers = [1, 2, 3]

for (let number of numbers) {
    console.log(number)
}

numbers.forEach((number) => console.log(number))

/**
 * Joining arrays
 */
numbers = [1, 2, 3]
let joined = numbers.join('-')
console.log(joined) // 1-2-3

joined = numbers.join()
console.log(joined) // 1,2,3

/**
 * Sorting arrays
 */
numbers = [6, 1, 2]
let sorted = numbers.sort()
console.log(sorted) // 1, 2, 6
console.log(sorted.reverse()) // 6, 2, 1

objectsArr = [
    {
        id: 5,
        name: 'A'
    },
    {
        id: 1,
        name: 'D'
    },
    {
        id: 7,
        name: 'Z'
    }
]
sorted = objectsArr.sort((a, b) => {
    if (a.id < b.id) return -1
    if (a.id > b.id) return 1
    return 0
}
)
console.log(sorted) // array sorted by object.id

/**
 * Testing the Elements of an Array
 */
numbers = [1, 2, 3]
let allPositive = numbers.every((number) => number > 0)
console.log(allPositive) // true

numbers = [-11, -1, 2, -3]
let atLeastOnePositive = numbers.some((number) => number > 0)
console.log(atLeastOnePositive) // true

/**
 * Filtering an array
 */
numbers = [-11, -1, 2, -3]
let filtered = numbers.filter((number) => number > 0)
console.log(filtered) // [2]

/**
 * Mapping an array
 */
numbers = [-11, -1, 2, -3]
let mapped = numbers.map((number) => number *= -1)
console.log(mapped) // [11, 1, -2, 3]

/**
 * Reducing an array
 */
numbers = [1, 2, 3]
let sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 0) // 0 is the initial value, if not specified then first element of array will be used, for this example it is the same
console.log(sum)