
console.log("Welcome to Tutorial No. 9");

/*FUNCTIONS*/

//Function
function greet(name,thank) {
    console.log(`HAPPY BIRTHDAY ${name}.
     May God bless you. Enjoy your day.
    ${thank}!`);
}
  let name1=`NIKUNJ`;
  let name2=`DALJEET`;
 greet(name1,'Thanks alot');
 greet(name2,'Thanks alot');
  
//Returning Function
 function return_func(name,thanks) {
     console.log("This is a function which returns a value even it has string element");
     return 10;
     
 }
 let name3="RETURNING FUNCTION";
 console.log(return_func(name3,'BOOMMM'));
//returns 10; 




function return_func1(name,boom) {
    let msg=`This is a ${name3} which returns a value even it has string element ${boom}`;
    return msg;  
    }
let name4="RETURNING FUNCTION";
console.log(return_func1(name4,'BOOMMM'));
//returns a String;





//Using a variable to store a function
let name=`SHASHANK`;
const FUNC= function(name,thank) {

    let msg=`${name}  ${thank}`;
    return msg;  
    
   
}
console.log(FUNC(name ,'THANKS FOR THESE NOTES'));




//function inside Objects

const myobj={
    name:"Skilled",
    str:`JAVSCRIPTER`,
    Language:function () {
        let val=`Function Inside Object.`;
        return val;
    }
}
console.log(myobj.Language());



//Function with arrays
arr1=['Fruits','Vegetables','Furniture'];
arr1.forEach(function(element,index,array) {
    console.log(element,index,array)
});