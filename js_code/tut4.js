//TYPE COVERSION & TYPE COERCION


        /* TYPE CONVERSION */

//1.string

let myVar=95;
console.log(myVar, (typeof myVar));

let myVar1=String(98);
console.log(myVar1, (typeof myVar1));


let booleanVar=true;
console.log(booleanVar, (typeof booleanVar))

let booleanVar1=String(true);
console.log(booleanVar1, (typeof booleanVar1))


let date=new Date();
console.log(date, (typeof date))

let date1=String(new Date());
console.log(date1, (typeof date1))


let myArr=[95,96,97,98,99,100];
console.log(myArr, myArr.length,(typeof myArr))

let myArr1=String([95,96,97,98,99,100]);
console.log(myArr1, myArr1.length,(typeof myArr1))


let stri="3434";
console.log(stri,(typeof stri));

let stri1=Number("3434");
console.log(stri1, (typeof stri1));

            

let stri2=Number([1,2,3,4,5]);
console.log(stri2, (typeof stri2))

 let stri3= Number(true)
 console.log(stri3, (typeof stri3))

//2. toString

let i=79
console.log(i.toString())
/*if the output is in blue colour then its type is number only but if its in white then it converted into string*/

let b=true
console.log(b.toString())
/* This is visible in white i.e.
now it has been converted to String*/

          
//3. PARSEINT & PARSEFLOAT

     let j=parseInt('39')
     console.log(j, (typeof j))

     let k=parseFloat('39.467')
     console.log(k,(typeof k))


//4. toFixed

     /*used to handle the number of decimal points*/

     let price=23.738363937
     console.log(price.toFixed(3), (typeof price))
 







       /*TYPE COERCION */


       let mystr="698"
       let  mynum= 34
       console.log(mystr+mynum)

       //OUTPUT= 69834

       let strng=Number("698")
       let  num= 34
       console.log(strng+num)

       //OUTPUT= 732


        