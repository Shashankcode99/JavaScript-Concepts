console.log(`Welcome to tutuorial No. 16`);


// EVENTS & EVENT OBJECTS

document.getElementById('practice').addEventListener(`click`,function(){
console.log(`YOU HAVE CLICKED THIS ELEMENT`);
});


document.getElementById(`cont`).addEventListener(`click`,function(e){
    console.log(`YOU HAVE CLICKED THIS ELEMENT`);
    let variable,cl,c2,ox,oy;
    variable=e.target;//target
    c1=e.target.className;//className of the target
    c2=e.target.classList;//list of class name
    ox=e.offsetX;//give the position where you have clicked wrt to x axis
    oy=e.offsetY ; //give you the position where you have clicked wrt to y axis
    cx=e.clientX;//give you the position where you have clicked via x axis wrt to user window
    cy=e.clientY;//give you the position where you have clicked via y axis wrt to user window
    
    console.log(variable);
    console.log(c1);
    console.log(Array.from(c2));
    console.log(ox);
    console.log(oy);
    console.log(cx);
    console.log(cy);
    });
    
    
    