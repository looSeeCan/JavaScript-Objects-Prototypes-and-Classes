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
    console.log(lucycan.__proto__ === Person2.prototype);// these two objects are the same instance. They are the same object in memory. I did not understand this befroe I abandoned the "display" thing. I thought that there was someting going on with that that was making the objects change.
    //So the object instance that is the functions prototype becomes the prototype for all objects created from that prototype
    //So, its just the prototypes that are the same. Not the new Object right?
    console.log("create new person"); let sheng = new Person2("Sheng", "Yang"); console.log(sheng);
    console.log("is lucycan and sheng the same object:", lucycan === sheng); console.log(`they are not, but thier prototypes are`, sheng.__proto__ === lucycan.__proto__)
    
})();

(() => {
    //create a constructor function
    // const Person = (firstName, lastName) = {
    //     this.firstName = firstNme;
    //     this.lastName = lastName;
    // };

    function Person (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName; 
    };

    let lucycan = new Person("Lucycan", "Ly"); console.log(lucycan);
    let sheng = new Person("Sheng", "Yang"); console.log(sheng);
    console.log(lucycan === sheng); console.log(lucycan.__proto__ === sheng.__proto__);
    //all the same object, because they are all from the same prototype
    console.log(Person.prototype); console.log(sheng.__proto__); console.log(lucycan.__proto__);
    //if you change the prototype, the others will change
    Person.prototype.gender = "female";
    console.log(Person.prototype.gender); console.log(sheng.gender); console.log(lucycan.gender);
    lucycan.gender = "male"; console.log(lucycan.gender); console.log(Person.prototype.gender)// but if you change the person the others do not change.

    // sheng.gender = "male";
    
})();

