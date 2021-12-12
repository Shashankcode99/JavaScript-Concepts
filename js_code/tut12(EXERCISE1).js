/*EXERCISE:1*/
/*Here you have to find out all the links of the website which contains the text given by default through user

*/



let s= `in`;
let d=document.links;
for(let i=0;i<d.length;i++)
{
console.log(`All the links are ${d} `);
}

/*Making an array of links using Array.from method()*/
Array.from(d).forEach(function(element) 
{
let h=element.href;
if(h.includes(s))
{
    console.log(element);
}   
});