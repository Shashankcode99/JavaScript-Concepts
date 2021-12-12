console.log(`Welcome to tutorial no. 22`);

//OBJECT LITERALS,CONSTRUCTORS AND OBJECT ORIENTED JAVASCRIPT

//Object is a unique entity which contains properties and methods

// Object Literal for creating object
let car={
    name:`Maruti Suzuki`,
    topspeed:90,
    run:function() {
        console.log(`Car is running`);
    }
}
console.log(car);//printing entire object
console.log(car.run());//printing run() of the object


// Using Constructors for Object Creation
function generalCar(givenname,giventopSpeed)
{
    this.name=givenname;
    this.topSpeed=giventopSpeed;
    this.run=function(){
        console.log( `${this.name} is running at ${this.topSpeed}`);
    }
}

car1=new generalCar(`BMW`, `110km/hr`);
car2=new generalCar(`AUDI`, `120km/hr`);
car3=new generalCar(`JAGUAR`, `130km/hr`);
console.log(car1,car2,car3);

//Accessing the run method

// car1=new generalCar(`BMW`, `110km/hr`).run();
// car2=new generalCar(`AUDI`, `120km/hr`).run();
// car3=new generalCar(`JAGUAR`, `130km/hr`).run();
// console.log(car1,car2,car3);