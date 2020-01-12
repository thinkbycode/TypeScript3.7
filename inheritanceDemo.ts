/**
 * 1) A child class inherits data and behavior from the parent using 'extends' keyword
 * 
 * 2) protected variables are accessible from within the same class or by 
 * inheritance in the child classes.
 */
class ParentGreeter {
    //public variable
    msg:string;
    private name:string;
    protected user:string;

    constructor(name:string, user:string) {
        console.log("-------In the parent construcotr------");
        this.name = name;
        this.user = user;
    }

    greet() {
        console.log("\n------- Basic Inheritance ---------");
        console.log("Hello from Parent! It's a "+this.msg);
    }
}

class Child extends ParentGreeter {
    constructor(name:string, user:string) {
        super(name, user); //call to super constructor is must
        console.log("-------In the Child construcotr------");
    }

    printSummary() {
        //protected variables can be accessed only by inheritance in the child class
        console.log("Child is trying to access protected variable, value is = "+this.user);
    }
}

let c:Child = new Child("ThinkByCode", "SuperUser");
c.msg = "Secret message.";
//can't access private variables
//c.name = "xyz";

//can't access protected variable directly
//c.user = "abc";

c.greet();
c.printSummary();

/**
 * Abstarct classes (abstract keyword)
 * 
 * An abstract class can have-
 * 1) Concrete methods i.e methods with implementation
 * 2) Abstract methods i.e. methods without implementation same as Interface methods
 * 
 * If a class has at least one abstract method, the class must be declared abstract.
 */

abstract class Printer {
    startPrint() {
        console.log("Printer starts...");
    }

    endPrint() {
        console.log("Printer terminates...");
    }
    abstract print();
} 

class LaserPrinter extends Printer {
    //Child has to give concrete implementation of abstract method
    print() {
        this.startPrint();
        console.log("This is Laser Printer!!");
        this.endPrint();
    }    
}
console.log("\n--------- Abstract Demo ------------");
let laser:Printer = new LaserPrinter();
laser.print();