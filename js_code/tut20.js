console.log(`Welcome to tutorial no. 20`);

//DATE & TIME

let date=new Date();
console.log(date)//current date and time

let otherdate=new Date(`4/2/1999 11:11:00`);
console.log(otherdate);//date by user


//getting the day of the given date
console.log(`The day is `+otherdate.getDay());


//gettin the given date
console.log(`The day is `+otherdate.getDate());

//getting the minutes of the time
console.log(`The day is `+otherdate.getMinutes());

//getting the seconds of the time
console.log(`The day is `+otherdate.getSeconds());

//getting the hours of the time
console.log(`The day is `+otherdate.getHours());

//getting the milliseconds of the time
console.log(`The day is `+otherdate.getMilliseconds());

//getting the month of the date and it starts from 0 i.e january=0
console.log(`The day is `+otherdate.getMonth());




//Setting the date,month ,time etc.

//setting Date
otherdate.setDate(3);

//setting Month
otherdate.setMonth(11);


//setting Year
otherdate.setFullYear(2002);


//setting Hours
otherdate.setHours(12);


//setting Minutes
otherdate.setMinutes(12);


//setting Date
otherdate.setSeconds(12);


//setting Date
otherdate.setMilliseconds(20);

console.log(otherdate);








