
/*Various ways to write a string in JAVASCRIPT*/

console.log('WE ARE AT TUTORIAL No. 5');
const name=`Shanky`;
const greeting=`Good Morning`;
console.log(greeting+' '+name); 
/*CONCATENATION WITHOUT USING FUNCTION*/ 



//Various String Functions 

let para=`Welcome To The World Of`;
let para2='PROGRAMMING Of JAVASCRIPT';
para=para.concat(` `+para2); 
console.log(para);
//CONCATENATION



console.log(para.length);//LENGTH function

console.log(para.toLowerCase());
//Lowercase Conversion Function

console.log(para.toUpperCase());
//Uppercase conversion Function

console.log(para[3]);
//INDEXING

console.log(para.indexOf('Of')); 
//index of first occurence of the string

console.log(para.lastIndexOf(`Of`));
//index of last occurence of the string

console.log(para.charAt(5));
//particular character at the specified index


console.log(para.endsWith(`javascript`));
//FALSE
console.log(para.endsWith(`JAVASCRIPT`));
//TRUE

//returns TRUE/FALSE if the string ends or not, with th specified string in parameters.

console.log(para.includes(`javascript`));
//checks whether the given parameter is present in the the string or not

console.log(para.substring(0,5));
//returns the part of string according to index specified but it doesn't includes the end index character .

console.log(para.split(' '));
//used to break the string into parts in put them in an array

console.log(para.replace('Of',`"REPLACED FUNCTION IS USED HERE"`));
//IMPORTANT:- It replaces a string with another string but only first occurence




