/*ARRAYS And OBJECTS*/

console.log(`TUTORIAL NO.6`);
console.log(`Let's Discuss Arrays`);

const marks=[90,91,92,93,94,95];
//integer array
const fruit=[`apple`,`banana`,`orange`,`Grapes`];
//string array
const mixed=['str', 36, 47.8,[2,3]];
//mixed array

const arr=new Array(23,123,21,`Apple`);
//array using constructor

console.log(marks);
console.log(fruit);
console.log(mixed);
console.log(arr);


/*INDEXING:- in array indexing starts from 0 */

console.log(marks[0]);
console.log(fruit[1]);
console.log(mixed[2]);
console.log(arr[3]);

/*CHNAGING VALUES IN ARRAY*/

arr[0]=`SHASHANK`;
console.log(arr);// 23 changed to shashank




/*Different methods used in array*/

let index=marks.indexOf(93);
console.log(index);
//find the index of the element in an array

/*IMPORTANT:- MUTATING ARRAYS*/

marks.push(100);
console.log(marks);
//insert new element at the end of the array

marks.unshift(89);
console.log(marks);
//insert new element in the begining of the array

marks.pop();
console.log(marks);
//removes the last element from the array

marks.shift();
console.log(marks);
//removes first element of the array


/*IMPORTANT*/ 
marks.splice(2,4);
console.log(marks);
/*removes total no of elements given at in parameter from given start index 
where 2= start index
       4= total number of elements to be removed  */


       marks.reverse();
       console.log(`Reversed array is:- `+marks);
       //Reverse the array






/*CONCATENATION OF ARRAYS */
let arr1=[1,2,3,4,5];
let arr2=[6,7,8,9,10];
arr1=arr1.concat(arr2);
console.log(`Concatenated Array is:- `+arr1);






/*IMPORTANT*/

/*OBJECT CREATION*/

let myobj={
       //we use ':' instead of '='
   name:`Shashank`,  
   course:`MCA`,
   marks:[90,91,92,93],
   project_status:'work in progress' 
}
console.log(myobj);
console.log(myobj.name);
console.log(myobj.course);
console.log(myobj.marks);
console.log(myobj.project_status);