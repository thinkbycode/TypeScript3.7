//An interface with one property 'target'
interface Runnable {
    target:string;
}

function interfaceDemo(iface:Runnable) {
    console.log("Runnable Target:: "+iface.target)
}

interfaceDemo({target:"Dummy"})
/*
Trying to pass an unknown property,
a compile-time error when un-commented.
*/
//interfaceDemo({unknown:"unknownProp", target:"Dummy"})

/**
 * Interface with 'Optional Properties'
 * Syntax - Question Mark ('?')
 * Example - propName?:number
 * Here propName is an optional paramater that a subtype may or may not pass
 */

interface RunnableWithOptionalProperties {
    target:string;
    unknown?:string
}

function optionalProp(runnable:RunnableWithOptionalProperties) {
    console.log("Runnable Target = { "+runnable.target+", "+runnable.unknown+" }")
}
console.log("\n------- Optional Properties ----------");
optionalProp({target:"another target"});
optionalProp({target:"another target", unknown:"Don't know"});

/**
 * read-only properties
 */
interface ReadOnlyIFace {
    readonly id:number;
}

function readonlyDemo(iface:ReadOnlyIFace) {
    console.log("\n--------- Read-only Properties ---------");
    console.log("ID = "+iface.id);
    
    /*
    Can't re-assign read-only property.
    Compile-time error when un-commented.
    */
    //iface.id = 10;
}
readonlyDemo({id:101});

/**
 * Interface with method
 */
//Sample 1
interface Greeter {
    name:string,
    greet(name:string):string 
}

let helloGreeter:Greeter = {
    name:"ThinkByCode",
    greet(name:string):string {
        return "Hello "+name;
    }
};
console.log("\n------ Interfaces with Methods -----------");
console.log("Greetings - "+helloGreeter.greet(helloGreeter.name));

//Sample 2
interface Print {
    (msg:string):void
}

let namePrinter:Print = function(msg){
    console.log("What's the message - "+msg);
}
namePrinter("It's secret");

/**
 * Extending another Interface
 * An Interface can extend other Interface(s)
 */

interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square = {} as Square;
square.color = "blue";
square.sideLength = 10;
console.log("\n-------- Extending another Interface ---------")
console.log("Square - {"+square.color+", "+square.sideLength+"}");