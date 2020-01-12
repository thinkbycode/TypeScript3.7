/**
 * Knows that the return type is number
 */
function add(a:number, b:number) {
    return a+b;
}
console.log("\n------- A simple Method ------------")
console.log("Calling named method = "+add(10,5));

/**
 * Fixing the return type.
 * Can't return anything else, only number is allowed.
 */
function addTwo(a:number, b:number):number {
    return a+b;
}

let addThree = function(a:number, b:number, c:number):number {
    return a+b+c;
}
console.log("\n------- Anonymous methods ------------")
console.log("Calling anonymous method = "+addThree(1, 2, 3));

/**
 * Anonymous method with one string parameter and void return type
 */
let greet = (msg:string) => {
    console.log("Another way to define an anonymous method = "+msg);
}
greet("Hello");

/**
 * Declaring method type of printMsg method.
 * Method body on the right side is inferring the type of input parameter.
 * It knows that 'msg' is a string.
 */
let printMsg:(message:string) => void = (msg) => {
    console.log("Passed message is = "+msg)
}
printMsg("Hello World");

/**
 * Method with Optional Parameter
 * user is an optional parameter, compiler ignores if it's not passed
 */
let greetUser = function(msg:string, user?:string):void {
    console.log(msg+", "+user);
}
console.log("\n------- Optional Parameters ------------")
greetUser("Hello");
greetUser("Hello", "ThinkByCode");

/**
 * Method with default parameter.
 * If the value is not passed, compiler assigns the default value.
 */
let greetUserBetter = function(msg:string, user="Super User"):void {
    console.log(msg+", "+user);
}
console.log("\n------- Default Parameter Values ------------")
greetUserBetter("Hello");
greetUserBetter("Hello", "ThinkByCode");

/**
 * Rest parameters - three dots (...)
 * If you're not sure about no of parameters, you can use ... to capture the extra values.
 * Compiler creates an array and fill it with the rest vlues.
 */
function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

// employeeName will be "Joseph Samuel Lucas MacKinzie"
let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log("\n------- Rest Parameters ------------")
console.log(employeeName)