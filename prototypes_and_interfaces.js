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

    console.log('lets look at the Person constructor function:', Person);
    console.log("lets look at the Person prototype:", Person.prototype);
    let lucycan = new Person("Lucycan", "Ly");
    console.log("created a new Person lucycan", lucycan);
    console.log("lucycan prototype", lucycan.__proto__);
    console.log("Person prototype", Person.prototype);
    console.log("lets compare the lucycan prototype to the Person Prototype:", lucycan.__proto__ === Person.prototype);
    console.log("the prototype lucycan and person prototype are the same, but what about the new person object that was created from the person prototype:", lucycan === Person.prototype);
    console.log("lets give the Person.prototype a property of age:", Person.prototype.age = 43);
    console.log("check if the age is there:" , Person.prototype);
    console.log("now, because I gave Person prototype an age property, it is going to stick with the lucycan proto:", lucycan.__proto__);
    console.log('same as if I give the lucycan proto a property, it will stick with the Person proto:', lucycan.__proto__.gender = "male");
    console.log("check Person proto:", Person.prototype);
    console.log("now lucycan is:", lucycan.__proto__);
    console.log("what happends if I make a new Person here");
    let sheng = new Person("Sheng", "Yang");
    console.log("Sheng:", sheng);
    console.log("shengs proto:", sheng.__proto__);
    console.log("I want to give new Person sheng a property of age:", sheng.age = 32);
    console.log("this only effects the new Person:",sheng);
    console.log(lucycan);
})();

console.log("prototype chain");
(() => {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        Object.defineProperty(this, "fullName", {
            get: function() {
                return `${this.firstName} ${this.lastName}`
            }, 
            enumerable: true
        });
    };

    function Student(firstName, lastName, age) {
        Person.call(this, firstName, lastName, age);
        this.enrolledCourses = [];
        this.enroll = function (courseId) {
            this.enrolledCourses.push(courseId);
        };
        this.getCourses = function () {
            return `${this.fullName}'s enrolled courses are: ${this.enrolledCourses.join(', ')}`;
        };
    };

    Student.prototype = Object.create(Person.prototype);
    Student.prototype.constructor = Student;

    let lucycan = new Student("Lucycan", "Ly", 43);
    
    lucycan.enroll("Math101");
    lucycan.enroll("Science101");
    lucycan.enroll("Quantim Physics");

    console.log(lucycan.getCourses());

})();