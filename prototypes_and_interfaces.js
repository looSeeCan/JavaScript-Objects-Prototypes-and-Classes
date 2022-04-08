"use strict";

//What is a prototype?
// A prototype is an object that exest on every function in JS.
(() => {
    let myFunction = function () {
        
    };
    console.log(myFunction.prototype);//displays a prototype object. tutorial says and empty object. I am seeing {constructor: f} in debug. Same thing probably.

    // let myFunction2 = () => {// when I use an arrow function. I get undefined
    // };
    // console.log(myFunction2.prototype);

    let person = {//objects have prototypes, but they do not have a prototype propertty
        firstName: "Lucycan",
    };
    console.log(person.prototype);//undefined
    console.log(person.__proto__);//you can see the prototype of the object with this proto property    
})();

//A functions prototype is the object instance that will become the prototype for alll the objects created using this function as a constructor.
//An Objects Prototype is the object instance from which the object is is inherited.
(() => {
    // let Person = (firstName, lastName) => {//arrow function gives me undefined
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    // };
    // console.log(Person.prototype);

    function Person2 (firstName, lastName)  {//constructor functions
        this.firstName = firstName;
        this.lastName = lastName;
    };
    console.log("Person2 is an empty constructor function", Person2.prototype);
    console.log("create a new person from the constructor object")
    let lucycan = new Person2("Lucycan","Ly"); console.log(lucycan);
    console.log(lucycan.__proto__);
    console.log(lucycan.__proto__ === Person2.prototype);// these two objects are the same instance    
})();