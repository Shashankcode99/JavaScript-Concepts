console.log('TUTORIAL NO. 2')

//VARIABLES in Javascript
/*Keywords used are: 
var,let,const*/ 


        /*VAR  (Here value of the variable can be changed)*/

        var name=`Sha"sha"nk`;
 /*we can use back tick so as we can even use '' or "" in the string*/

var name1= 'Arun';
var name2= "Praveen";

var marks=100;

var undef;
/* This will be shown undefined as no value is assigned to this variable */
console.log(name,name1,name2);
console.log(marks,undef);

/* RULES FOR CREATING JS VARIABLES

1.Cannot start with number
2.Can start with letter,numbers,_ and $
3.JS Variables are case sensitive
*/


        /*CONST  (Here value of the variable cant be changed and it remains constant to avoid some sort of errors and to provide security)*/

const ownersNAme=`Hari Ram`;
console.log(ownersNAme);
const fruit="Apple";
console.log(fruit);

            /* LET*/
var city=`Kolkata`;
{
    let city=`Rampur`;
    /*let is useful inside a scope */
    console.log(city) 
    //prints RAMPUR
}
console.log(city)
//prints KOLKATA





/*MOST COMMON PROGRAMMING CASE TYPES:
1.camelCase
2.kebab-case
3.snake_case
4.PascalCase 
*/