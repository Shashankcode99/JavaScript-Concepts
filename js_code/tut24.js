console.log(`Welcome to Tutorial No, 24`)

// Inheritance Prototyping

const proto = {
    slogan: function () {
        return `This company is the best`;
    },
    changeName: function (newName) {
        this.name = newName
    }
}

// This creates harry object
let harry = Object.create(proto);
harry.name = "Shanky";
harry.role = "Programmer";
// harry.changeName("Shanky2")
// console.log(Shanky)

// This also creates Shanky object
const harry1 = Object.create(proto, {
    name: { value: "Shanky", writable: true },
    role: { value: "Programmer" },
});
harry1.changeName("Shanky2")
// console.log(harry1)


// Employee constructor
function Employee(name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

// Slogan
Employee.prototype.slogan = function () {
    return `This company is the best. Regards, ${this.name}`;
}

// Create an object from this constructor now
let shankyyObj = new Employee("Shanky", 345099, 87);
console.log(shankyyObj.slogan())

// Programmer
function Programmer(name, salary, experience, language) {
    Employee.call(this, name, salary, experience);
    this.language = language;
}

// Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

// Manually set the constructor
Programmer.prototype.constructor = Programmer;

let rohan = new Programmer("Rohan", 2, 0, "Javascript");
console.log(rohan);


