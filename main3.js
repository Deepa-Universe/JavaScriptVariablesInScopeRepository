//let


let intValue4 = 200;

var globalIntVariable = "Deepa";
//Exception throw 
//console.log(intValue2); //intValue2 is not defined
//var intValue3 = "Deepa"; //Out of Scope we can have variable with same name, but best practice would be to keep variables with different names
{
    let intValue3 = 100;
    //Exception throw
    //console.log(intValue1); //intValue1 is not defined


    globalIntVariable = globalIntVariable + " Cafe";

    console.log(intValue3);
    console.log(intValue4); //Variable declared outside the scope is global and is accessible inside the scope

    console.log(globalIntVariable);
}

//console.log(intValue3); //intValue3 is not defined-- Variable is inaccessible out of the scope.
console.log(intValue4);

//console.log(intValue3);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//var

console.log(intValue5); //undefined
var intValue5;
console.log(intValue5); //undefined
{
    console.log(intValue5); //undefined
    var intValue6 = 600;

    globalIntVariable = "Deepa- Your Birthday"; //var is always global
}
console.log(intValue6); //var is accessible outside the scope

console.log(globalIntVariable);