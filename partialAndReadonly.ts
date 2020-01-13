/**
 * Partial<T> and Readonly<T>
 * Partial<T> - Constructs a type with all properties of T set to optional.
 * Readonly<T> - Constructs a type with all properties of T set to readonly.
 */

interface Loggable {
    level:string,
    message:string
}

function enrich(logTarget:Partial<Loggable>) {
    console.log("------- Partial Demo --------");
    //logTarget.message is undefined because it is optional
    console.log("Target properties - {"+logTarget.level+", "+logTarget.message+"}")
}

enrich({level:"WARN"});

function validate(logTarget:Readonly<Loggable>) {
    console.log("\n------- Readonly Demo --------");

    //can't assign to readonly property, compiler error when un-commented
    //logTarget.level = "ERROR";
}
validate({
    level:"WARN",
    message:"Warning"
})