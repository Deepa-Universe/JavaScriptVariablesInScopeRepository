//let
let intValue = 10;

//Curly braces indicates scope
{
    console.log(intValue); //If 'let' variable is defined outside, it is accessible inside the scope
}

{
    let intValue = 15;
    console.log(intValue);
}

console.log(intValue);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//var
var intValue2 = 100;

//Curly braces indicates scope
{
    console.log(intValue2); //If 'var' variable is defined outside, it is accessible inside the scope
}

{
    var intValue2 = 150;
    console.log(intValue2);
}

console.log(intValue2); 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//const
const intValue3 = 1000;

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

console.log(intValue3); 