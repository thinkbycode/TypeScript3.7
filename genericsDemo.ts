/**
 * A generic Method
 */

function add<T>(a:T):T {
    return a;
}

console.log("--------- A Generic Method ----------")
console.log("String version = "+add("Dummy"));
console.log("Number version = "+add(1));

/**
 * A Generic Interface
 * Defines an add method for a Type T
 */
interface Adder<T> {
    add(a:T, b:T):T;
}

//A number implementation, replaces T with number
class NumberAdder implements Adder<number> {
    add(a: number, b: number):number {
        return a+b;
    }
}
console.log("\n--------- A Generic Interface ----------")
console.log("Number Adder = "+new NumberAdder().add(4,5))

//A string implementation, replaces T with string
class StringAdder implements Adder<string> {
    add(a: string, b: string):string {
        return a+b;
    }
}
console.log("String Adder = "+new StringAdder().add("4","5"))
