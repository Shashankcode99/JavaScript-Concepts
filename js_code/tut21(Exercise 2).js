console.log(`Welcome to tutorial no. 21`);
// Creating a div Element
let divElem=document.createElement(`div`);

// Adding Text to that element
let text=document.createTextNode(`THIS IS MY ELEMENT. CLICK TO EDIT IT`);

// Appending the text in that element
divElem.appendChild(text);

// Settinfg id,class and style of the created element
divElem.setAttribute(`id`,`elem`);
divElem.setAttribute(`class`,`elem`);
divElem.setAttribute(`style`,`border:2px solid black; width:154px;margin:34px;padding:23px`);
let container=document.querySelector(`.container`);
let first=document.getElementById('myfirst');

//Insert element before id='first';
container.insertBefore(divElem,first);



console.log(divElem,container,first);


// Adding EventListener to the div element
divElem.addEventListener(`click`,function(){
    let noTextAreas=document.getElementsByClassName(`textarea`).length;
    if(noTextAreas==0)
    {
let html=elem.innerHTML;
divElem.innerHTML=`<textarea class="textarea form-control" aria-label="With textarea" row="3" style="width:147px";>${html}</textarea>`;
    }

    // Listen for the blur event on text area

    let textarea=document.getElementById(`textarea`);
    textarea.addEventListener('blur',function() {
        
        elem.innerHTML=textarea.value;
    })
});