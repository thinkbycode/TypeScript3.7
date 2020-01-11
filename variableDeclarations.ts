/**
 * Use of const
 * const is used to declare constants, once assigned can't be changed.
 */

console.log("---------Use of const keyword starts---------") 
//Case-1 
//must be initialized, compile-time error when un-commented
//const myConstant:number;

//Case-2 
const myValidConstant:number = 10;
console.log("myValidConstant ::"+myValidConstant)

//Case-3 
//can't re-assign constant variables, compile-time error when un-commented 
//myValidConstant = 20;

//Case-4 
const myName = {
    fName:"ThinkBy",
    lName:"Code"
}
console.log("myName before::"+myName.fName)

//Case-5 
myName.fName = "Think By"; //updating the value of same object is allowed
console.log("myName after::"+myName.fName)

//Case-6 
//can't re-assign constant, compile-time error when un-commented
//myName = {fName:"Another", lName:"Name"};

console.log("---------Use of const keyword ends---------") 

/**
 * var is the standard way to declare variables in JS
 * We can obviously use var in TypeScript as it is a super type of JavaScript.
 */

console.log("\n---------Use of var keyword starts---------") 

var welcome = "Hello!";
console.log("Welcome message:: "+welcome);

//var declarations are accessible anywhere within their containing function, module, namespace, or global scope
function varDemo() {
    if(true) {
        var temp = "I'm inside method"; //variable is declared here in the block
    }
    console.log("What's in the temp:: "+temp); //but can be used here also
}
varDemo()
console.log("---------Use of var keyword ends---------") 

/**
 * let is a new way to declare block-scoped variables in TypeScript.
 */
console.log("\n---------Use of let keyword starts---------")
let welcomeMsg:string = "Hello World!";
console.log("Welcome message::"+welcomeMsg);

function letDemo() {
    if(true) {
        let localVar = "Should not escape the scope";
    }
    /*
    can't access the scoped variable here, compile-time error when un-commented
    let helps us to avoid scope related bugs that can be there with var.
    */
    //console.log("localVar here:: "+localVar);
}
letDemo();

console.log("---------Use of let keyword ends---------") 