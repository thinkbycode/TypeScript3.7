/**
 * Destructuring is a way to unpack values from array, or object properties into variables.
 */

//Traditional way
let input:number[] = [1,2,3]
let first = input[0]
let second = input[1]
console.log("Traditional way of getting values from array-");
console.log("first = "+first+", second= "+second);

//with Destructuring, notice the square brackets
let [fName, lName] = ["ThinkBy", "Code"];
console.log("\nGetting values from array using Destructuring-");
console.log("fName = "+first+", lName= "+second);

//Using Destructuring in function parameters
function destructure([msg, name]:[string, string]) {
    console.log(msg+" "+name)
}
console.log("\nUsing Destructuring in function parameters");
//Notice how a tuple is getting destructured
destructure(["Hello", "ThinkByCode"]);

//Extracting partial parameters
let [justOne] = [1, 4, 8]
console.log("\nExtracting partial values using Destructuring")
console.log("Just one value = "+justOne);

//Using Destructuring with objects
//creating an object with three properties

let emp = {
    name:"ThinkByCode",
    empId: 1001,
    department: "IT"
}
//Getting only two properties and renaming properties to 'empName' and 'dept' for further use
let {name:empName, department:dept} = emp;
console.log("\nUsing Destructuring with objects")
console.log("empName = "+empName+", dept = "+dept);
