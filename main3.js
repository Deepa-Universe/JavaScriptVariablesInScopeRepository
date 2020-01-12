//let
let intValue = 10;

//Exception throw
//console.log(intValue6); //intValue6 is not defined
//Curly braces indicates scope
{
    let intValue67 = 1991;

    //Exception throw
    //console.log(intValue5); //intValue5 is not defined
    console.log(intValue); //If 'let' variable is defined outside, it is accessible inside the scope
}

{
    //Throws exception
    //intValue = 15; //Identifier 'intValue' has already been declared
    console.log(intValue);
    //console.log(intValue6);
    intValue67 = 1992;

    let intNewValue = 1993;
}

console.log(intValue67);
console.log(intValue);
console.log(intNewValue);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
//var
var intValue2 = 100;
console.log(intValue7); //Undefined
//Curly braces indicates scope
{
    var intValue7 = 1206;
    console.log(intValue2); //If 'var' variable is defined outside, it is accessible inside the scope
}

{
    intValue2 = 150;
    console.log(intValue2);
}

console.log(intValue2); 
console.log(intValue7); //Var is accessible through out the page

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//const
/*const intValue3 = 1000;

//Curly braces indicates scope
{
    console.log(intValue3); //If 'const' variable is defined outside, it is accessible inside the scope
}

{
    //const intValue3 = 1500; //1500

    //Exception
    //intValue3 = 56; //Assignment to constant variable
    console.log(intValue3);
}

console.log(intValue3); */