//Boolean
function booleanDemo() {
    let isOpen:boolean;
    isOpen = true;
    console.log("----------Boolean demo starts----------")
    console.log("isOpen Before::"+isOpen);
    isOpen = false;
    console.log("isOpen Before::"+isOpen);
    console.log("----------Boolean demo Ends----------")
}
booleanDemo()

//Number
function numberDemo() {
    console.log("\n----------Number demo starts----------")
    //Integers, decimals both are numbers in TypeScript.
    let intNum:number = 1;
    let floatNum:number = 2.5;
    console.log("Integer::"+intNum)
    console.log("Float/Double::"+floatNum)
    
    intNum = 3.5; //assigning a decimal value is fine
    console.log("Integer**::"+intNum)
    console.log("----------Number demo ends----------")
}
numberDemo();

//String
function stringDemo() {
    console.log("\n----------String demo starts----------")
    let name:string = "ThinkByCode";
    console.log("Hello "+name)
    console.log("----------String demo ends----------")
}
stringDemo();

//Array
function arrayDemo() {
    console.log("\n----------Array demo starts----------")
    let nameArray:string[] = ["Tom", "Harry"]
    console.log("Name array before::"+nameArray)
    console.log("2nd Name::"+nameArray[1])
    console.log("----------Array demo ends----------")
}
arrayDemo();

//Tuple
/*
When you strictly need an array of two elements
*/
function tupleDemo() {
    console.log("\n----------Tuple demo starts----------")
    let sameTypeTuple:[string, string];
    sameTypeTuple = ['ThinkBy', 'code'] //Two values of type string
    console.log("Tuple of same types::"+sameTypeTuple)
    //compile-time error when un-commented, can't assign any other type than string.
    //sameTypeTuple[1] = 4.5;

    let diffType:[string, number];
    diffType = ['ThinkByCode', 2020];
    console.log("Tuple of different types::"+diffType)

    //Order matters for type-checking, compile time error when un-commented
    //diffType = [2020, "ThinkByCode"]

    console.log("----------Tuple demo ends----------")
}
tupleDemo();

//Enum
function enumDemo() {
    console.log("\n----------Enum demo starts----------")
    enum Color {Red, Green, Blue}
    
    let c:Color;
    c = Color.Green;
    console.log("Chosen color1::"+c) //prints the index
    console.log("Chosen color2::"+Color[c]) //prints the name of the color
    console.log("----------Enum demo ends----------")
}
enumDemo();

//Any
function anyDemo() {
    console.log("\n----------Any demo starts----------")
    /**
     * Use when you're not sure about the exact type of the value (similar to raw type in Java Generics)
     * Useful when working with existing JS code or any third-party code.
     * Useful when working with the legacy code.
     */

     let notSure:any
     notSure = 'StringValue'
     console.log("Assigning String::", notSure);
     notSure = 23;
     console.log("Assigning Number::", notSure);
     notSure = true
     console.log("Assigning Boolean::", notSure);
     notSure = [1, 'String']
     console.log("Assigning tuple::", notSure);
    console.log("----------Any demo ends----------")
}
anyDemo();