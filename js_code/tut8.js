console.log("Welcome to Tutorial No. 8");


/*TYPES OF LOOP*/

//FOR LOOP
for (let i = 0; i <=20; i++) 
{
    console.log(i);
}


//WHILE LOOP
let j = 0;
while (j < 10) {
    console.log(j);
    j++;
}

//DO WHILE (it works at least for once atleast)
let k = 110;
do {
    console.log(k);
}
while(k<10)



//BREAK and CONTINUE

let b = 0;
while (b < 10) {
    if(b==5)
    break;
    console.log(b);
    b++;
}



let c = 0;
while (c < 10) {
    if(c==5)
    continue;
    console.log(c);
    c++;
}

/*IMPORANT*/
//Some Other LOOPS for iteration of arrays and objects


//forEach is used to print the each element of the array 
let arr=[1,2,3,4,5];                   
arr.forEach(function (element)
{
    console.log(element);
}
);



//Used for iteration of objects
let obj={
    name:`Shashank`,
    age:78,
    type:`Programmer`,
    os:"Linux"
}

for(let key in obj)
{
    console.log(`the ${key} of the object is ${obj[key]}`);
}