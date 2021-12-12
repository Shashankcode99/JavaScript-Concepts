console.log(`Welcome to tutuorial No. 17`);

// This program is just explaination and not in a working condition as we dont have button in index.html file
let btn=document.getElementById(`btn`);
btn.addEventListener(`click`, func1);//single click Event

function func1(e)
{
    console.log('Thanks',e);
    e.preventDefault();//prevent event from being hidden after being saved i.e its shown after saving 
}



btn.addEventListener(`dblclick`, func1);//double click Event

function func1(e)
{
    console.log('Thanks for double clicking',e);
    e.preventDefault();//prevent event from being hidden after being saved i.e its shown after saving 
}
//mouseeneter event
document.querySelector('.container').addEventListener('mouseenter',function(){
console.log(`You Entered Container`);
});

// mouseleave event
document.querySelector('.container').addEventListener('mouseleave',function(){
    console.log(`You Left Container`);
    });
    
    // mousemove event
    document.querySelector('.container').addEventListener('mousemove',function(){
        console.log(`You Triggered mouse move Event`);
        });
        