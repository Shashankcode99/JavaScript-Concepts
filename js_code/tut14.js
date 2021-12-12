console.log('Welcome to tutorial No. 14');

// Getting Child Nodes including text(i.e comments,new lines etc) 
let a=document.querySelector('.conatiner');
console.log(a.childNodes);

// Getting Child Nodes excluding text(i.e comments,new lines etc) 
let b=document.querySelector('.conatiner');
console.log(b.children);

// Getting Child Nodes names with respect to position
let c=document.querySelector('.conatiner');
console.log(c.childNodes[1].nodeName);

// Getting Child Nodes names with respect to position
// 1.element
// 2.Attributes
// 3.Text Node
// 8.Comment
// 9.document
// 10.docType
let d=document.querySelector('.conatiner');
console.log(d.childNodes[1].nodeType);


// Getting children of the children 
let e=document.querySelector('.conatiner');
console.log(e.childNodes[1].children);


// Geetting firstChild and firstElementChild

let f=document.querySelector('.conatiner');
console.log(f.firstChild);
console.log(f.firstElementChild);

// Geetting lastChild and lastElementChild

let g=document.querySelector('.conatiner');
console.log(g.lastChild);
console.log(g.lastElementChild);


// count of child Elements

let h=document.querySelector('.conatiner');
console.log(h.childNodes);
console.log(h.childElementCount);


let i=document.querySelector('.conatiner');
console.log(i.children);
console.log(i.childElementCount);

// Finding Sibling i.e next element 

let j=document.querySelector('.conatiner');
console.log(j.firstElementChild.parentNode);
console.log(j.firstElementChild.nextSibling);
console.log(j.firstElementChild.nextElementSibling); 