console.log(`Welcome to tutuorial No. 18`);
let impArray=[`ABC`,`DEF`,`GHI`]
//Local Storage 

//Setting values 
localStorage.setItem('Name1','Shanky');
localStorage.setItem('Name2','Coder');
localStorage.setItem('Alphabet Set', `impArray`); //This will be converted into string then gets saved in the local storage

//To get the value in arrayform in the local Storage we use json.stringyfy or  json.parse accordingly as follows:
localStorage.setItem('Alphabet Set', JSON.stringify(impArray));//JSON converted array object into string


//getting values
let name=localStorage.getItem(`Name1`);
console.log(name);


let ar=localStorage.getItem('Alphabet Set');//Here it will get printed as a string
console.log(ar);


let ar1=JSON.parse(localStorage.getItem('Alphabet Set'));//Here the JSON string will get converted into JSON array Object and then gets printed
console.log(ar1);
//clearing Local Storage
// localStorage.clear();

// Removing particular value from the local storage
localStorage.removeItem('Name1');


// Session Storage has similar function as local storage but it only stores data till session is ON or in lamen language
// till the browser is working
sessionStorage.setItem;
sessionStorage.getItem;
sessionStorage.removeItem;
