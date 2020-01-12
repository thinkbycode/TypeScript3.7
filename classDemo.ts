/**
 * A plain class
 */

//A clss with two public properties and one public method 
class Greeter {
    //properties are by default public, public keyword is not required
    message:string;
    //explicitly using public keyword
    public name:string    

    constructor() {
        //Empty constructor
    }
    
    greet() {
        //accessing properties using this keyword
        console.log("------- Class with public data ---------");
        console.log(this.message+", "+this.name);
    }  
}

let myGreeter:Greeter = new Greeter(); //creating a new Greeter object
myGreeter.message = "Hello"; //setting message property
myGreeter.name = "World"; //setting name property
myGreeter.greet(); //invoking greet method on the instance

/**
 * Private variables and methods
 */

class AnotherGreeter {
    //two private variables, only accesssible from with in the class
    private message:string;
    private name:string

    constructor() {
        //Initializing the variables directly in the constructor
        this.message = "Private Hello";
        this.name = "World";
    }

    greet() {
        console.log("\n------- Class with private properties ---------");
        console.log(this.message+", "+this.name);
    }
}

let anotherGreeter:AnotherGreeter = new AnotherGreeter();
/*
can't access private variables from outside the class
compile-time error when un-commented
*/
//anotherGreeter.message = "x";
//anotherGreeter.name = "y";
anotherGreeter.greet();

/**
 * Using constructor to initialize properties
 */

class YetAnotherGreeter {
    private greeting:string;

    //constructor with one parameter same as method
    constructor(greeting:string) {
        //initializing class variable with value passed to the constructor
        this.greeting = greeting;
    }

    greet() {
        console.log("\n------- Initializing variables using constructor ---------");
        console.log(this.greeting);
    }
} 
//passing values via constructor
let yetAnotherGreeter:YetAnotherGreeter = new YetAnotherGreeter("Hello World");
yetAnotherGreeter.greet();

/**
 * A class with static variable and method
 */
class MyTimer {
    //a public static variable, can be accessed without using this
    static activty:string;

    static schedule() {
        console.log("\n-------- Using static variable and method ------------");
        console.log("The activity=["+MyTimer.activty+"] has been schedule!");
    }
}
/*
No need to create an instance to use the functionality.
Static members are accessed by ClassName
*/
MyTimer.activty = "Clean-up";
MyTimer.schedule();
