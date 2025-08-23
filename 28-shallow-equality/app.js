const person1 = {
    firstName: 'Simon', 
    lastName: 'Fraser',
    course: 'Understanding React'
}

const person2 = {
    firstName: 'Simon', 
    lastName: 'Fraser',
    course: 'Understanding React'
}

const person3 = person1

console.log(Object.is(person1, person2)) // false, because they are different objects in memory
console.log(Object.is(person1, person3)) // true