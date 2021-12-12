         /*DATATYPES*/
/*   Primitive Datatypes 
1.String
2.Number
3.Boolean
4.Null
5.Undefined
6.Symbol       

       
        Reference Datatypes
1.Arrays
2.Object Literals
3.Functions
4.Dates 
*/


//STRING
let name=`SHASHANK`;
console.log('The string is:'+name)
console.log("Data type of name is:"+(typeof name))

//NUMBERS
let NUM=100;
console.log('The number is:'+NUM)
console.log("Data type of NUM is:"+(typeof NUM))

//BOOLEAN
let isDriver=true;
console.log('Eligible for Driving:'+isDriver)
console.log("Data type of isDriver is:"+(typeof isDriver))

//NULL
let nullVar=null;
console.log('The value of nullVar is:'+nullVar)
console.log("Data type of nullVar is:"+(typeof nullVar))

//UNDEFINED
let undef= undefined;
console.log('The value of undef is:'+undef)
console.log("Data type of undef is:"+(typeof undef));



//ARRAY
let arr=[1,2,3,4,false,"SHANKY"];
console.log('The array is:'+arr)
console.log("Data type of array is: "+(typeof arr))


//Object Literals(IMPORTANT)
let stMarks={
    Nikunj:80,
    Daljee:70,
    Shashank:100
};
console.log('Object Literal Example is:'+stMarks);
console.log("Data type of starMarks is:"+(typeof stMarks));


//FUNCTION
function findName() {
    let n='THIS IS FUNCTION DATATYPE';
    console.log(n)
    
}
console.log('Function is:-'+findName)
console.log('Datatype of function findName is:- '+ typeof findName)


//DATE
let date=new Date();
console.log('Date is:- '+date)
console.log('Datatype of date is:-'+typeof date)

