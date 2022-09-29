/**
 * if..else
 */
let age = 3
let result = ''
if(age >= 18) {
    result = 'Has enough age'
}
else {
    result = 'Does not have enough age'
}
console.log(result)

/**
 * Switch..case
 */
let typeEmployee = 'Full-time'
switch(typeEmployee) {
    case 'Full-time': 
        console.log('Full time employee')
        break
    case 'Part-time': 
        console.log('Part time employee')
        break
    default:
        console.log('Contractor')
}

/**
 * For
 */
for(let i=1;i<=5;i++) {
    console.log(`for-iter: ${i}`)
}

/**
 * While
 */
let i=1
while(i<=5) {
    console.log(`while-iter: ${i}`)
    i++
}

/**
 * Do While
 */
i=1
do {
    console.log(`do-while-iter: ${i}`)
    i++
} while(i<=5)

/**
 * For in (better to iterate over objects)
 */
const person = {
    name: 'Mosh',
    age: 30
}
for(let key in person) {
    console.log(key, person[key])
}

const colors = ['red', 'green', 'blue']
for(let index in colors) {
    console.log(index, colors[index])
}

/**
 * For of (better to iterate over arrays)
 */
for(let color of colors) {
    console.log(color) // without using index in bracket notation as in for..in
}

/**
 * Break and continue
 */
 i=1
 while(i<=5) { // it will only print numbers 1, 2 and 4
    if(i==3) {
        i++
        continue // jump to next iteration
    }
    if(i==5) {
        break // break the loop
    }
    console.log(`while-iter: ${i}`)
    i++
 }