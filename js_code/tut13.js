console.log(`Welcome to tutoria No.13`);
/* HTML Element Selectors 
1.Singe Element Selectors
1.Multi Element Selectors
*/


//Singe Element Selectors

let element=document.getElementById('myfirst');
console.log(element);//getting element through div Id

console.log(element.className) //getting class name of the document

console.log(element.childNodes)//getting child nodes of the element

console.log(element.parentNode)//getting parent nodes of the element

console.log(element.innerText=" INNERTEXT can only enter the text.")
//simpe inner text of the element selected

console.log(element.innerHTML=`INNERHTML is be used to enter the <b>Text<b> along with the use of HTML tags .`)
//change inner text HTML along with HTML Tags

console.log(element.style.color=`red`);
//CSS features using javascript.





// The selector given below only selects and shows the first element

let sel=document.querySelector(`#myfirst`);
console.log(sel);
let sel1=document.querySelector('h1');
console.log(sel1);

let sel3=document.querySelector('h1');
console.log(sel1.style.color=`green`);

let sel4=document.querySelector('h1');
console.log(sel4.style.border='solid');

//Multi Element Selector

let el=document.getElementsByClassName('child');
console.log(el);

let el1=document.getElementsByClassName('CONTAINER');
console.log(el1);


let el2=document.getElementsByTagName('div');
console.log(el2);


Array.from(el).forEach(element => {
    console.log(element);
    element.style.color='blue';
    
});