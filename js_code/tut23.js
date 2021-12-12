console.log(`Welcome to tutorial no. 23`);

// Object prototype in JavaScript
let obj={
    name:`Shashank Tyagi`,
    Address:`Indirapuram,Ghaziabad`,
    Core:`WebDev`
}
console.log(obj);


function ABC(givenName){
this.name=givenName;
}

// Editing our own constructor (object prototype)
/*Pro Tip:- 1.Edit only your constructors and not of others
            2.We cannot change protype of the object literal
            3. Only our constructors prototype can be edited */

ABC.prototype.getName=function()
{
   return this.name;
} 
let obj2=new ABC(`Shanky`);
console.log(obj2);