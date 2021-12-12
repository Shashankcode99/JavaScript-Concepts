console.log(`Welcome to tutuorial No. 15`)

// Creating Elements with javascript and puttting them in html file

let element=document.createElement(`li`);


//Adding class name and id name to the created element

element.className=`BOX`;
element.id=`this`;
element.setAttribute(`title`,`mytitle`);
element.innerHTML=`This li element is created using Javascript`;
console.log(element);


// Selecting and appending created elements in html file

let ul=document.querySelector('ul.this');
ul.append(element);
console.log(ul);
console.log(element);


//replacing element
let elem2=document.createElement(`h3`);
elem2.className=`elem2`;
elem2.id=`e2`;
let tnode=document.createTextNode(`This is heading is created using JS`)
elem2.appendChild(tnode);

element.replaceWith(elem2);


//replacing child
let c=document.getElementById('myul');
c.replaceChild(element,document.getElementById('fui'));


//removing child

c.removeChild(document.getElementById(`lui`));


//getting attribute

let att=elem2.getAttribute('id');
//give id as attributes and does respectively with other attributes too

console.log(att);


//checking availibilty of attribute

let att1=elem2.hasAttribute('dfd')
//checks and gives value as true or false 

console.log(att1);


//removing attribute
let att2=elem2.removeAttribute(`id`);
//removes the attribute

console.log(elem2,att2);





//practice question
let h=document.createElement(`h2`);
h.style.color='red';
h.innerText='CODE WITH HARRY';
console.log(h);
let q=document.querySelector(`#practice`);
q.append(h);

 let pr=document.createElement(`a`);
 pr.setAttribute(`href`,`www.codewithharry.com`);
 pr.setAttribute(`target`,`_blank`);

 pr.innerHTML=`Go to Code with harry`;

 console.log(pr);

let cont=document.querySelector(`#practice`);
cont.append(pr);