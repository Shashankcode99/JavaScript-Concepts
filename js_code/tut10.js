 console.log(`Welcome to Tutorial No. 10`)

/* WHAT IS DOM?
DOM stands for Document Object Module.
Document Object in JAVASCRIPT is a part of windows.
*/

let a=window;
console.log(a);

/*this can be used as "window.alert" but we use methods of window as it is because window is a global object */

alert(`ALERT created by a window object!!`);



/*Prompt method window*/
let prom;
prom=prompt(`This is a prompt method`);
console.log(prom);


/*CONFIRM Method
This basically assign a boolean value to the variable*/

let conf=confirm(`Are You Sure you want to close this?`);
console.log(conf);





a=window.innerHeight;
console.log(`Height of window panel is: ${a}`);
a=window.innerWidth;
console.log(`Width of window panel is: ${a}`);
a=scrollX;
console.log(`Scrolling of window panel wrt X is: ${a}`);
a=scrollY;
console.log(`Scrolling of window panel wrt Y is: ${a}`);

a=window.location;
console.log(`Locations of window panel is: ${a}`);
/*Things to perform with location method are
1. location.reload()
2.location.href
3.location.href='//google.com'
4. location.toString
*/

a=window.history;
console.log(`History Method of window is: ${a}`);

/*Things to be performed with history method:
1.history.length
2.history.go(-1) i.e no of steps to be taken back

it basically acts like a backbutton only

3. history.go(1)

it basically acts like a forward button only

*/