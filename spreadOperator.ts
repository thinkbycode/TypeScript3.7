/**
 * Spread operator is used to fill an object with another object, OR
 * fill an array into another array.
 * Three dots(...) are used for this operator.
 */

//Using spread operator with Arrays
let array1 = [1,2,3,4] 
let array2 = [5,6]

let merged = [...array1, ...array2]
console.log("Using spread operator with Arrays-")
console.log(merged)

//Using spread operator with Objects
let emp = {name:"Tom", age:28, dept:"IT"};
/**
 * With objects, 
 * 1) The final object is a supertype in terms of properties.
 * 2) The scanning proceeds from left-to-right, any property that comes later will override the value
 * 
 * In this example,
 * 1) Notice, we're adding a new property "another" to the overriddenEmp
 * 2) Because, age comes later, it will be changed to 30
 */
let overriddenEmp = {...emp, age:30, another:"dummy"}
console.log("\nUsing spread operator with Objects")
console.log("Property overridden = ")
console.log(overriddenEmp)

//will not override as the emp object comes later
let notOverriddenEmp = {age:30, ...emp}
console.log("Property not overridden = ")
console.log(notOverriddenEmp)