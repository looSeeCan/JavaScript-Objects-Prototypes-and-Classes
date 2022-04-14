// "use strict";

// (() => {//self executing function
//     let person = {//object literal
//         firstName: "Lucycan",
//         lastName: "Ly",
//         age: 43,
//         isAdult: function () {return this.age >= 18},//method
//     };
//     // display(person.firstName, person["lastName"]);
    
//     ///Adding properties to the object literal 
//     ///commented these out to just add them in the object literal above
//     // person.age = 43;//added an age property with a value of 43
//     // display(person.age);
//     // person["age"] = 42;//changed that value to 42 using bracket notation
//     // display(person.age);
//     // display(person)//dispays the whole object

//     ///adding a method to the object obove
//     //commented this out to add it up in the object literal
//     // person.isAdult = function () {return this.age >= 18};//something about you can not use arrow functions in methods
//     //also "this" is used to reference other properties on the object from within the object
//     // display(person.isAdult())

// })();

// (() => {
//     //create a reusable function, objecg
//     const registerUser = (fName, lName) => {
//         let person = {
//             firstName: fName,
//             lastName: lName,
//         };
//         return person;
//     };
//     // display(registerUser("Axavier", "Ly"));
// })();

// ///the ^ in shorthand
// display("shorthand");
// (() => {
//     const registerUser = (firstName, lastName, age) => {
//         let person = {
//             firstName,
//             lastName,
//             age,
//             //method declaration shorthand
//             isAdult() {return this.age >= 18},
//         };
//         // display(person);
//         // display(person.isAdult());
//     };
//     registerUser("Lucycan", "Ly", 43);
// })();

// ////////////////////////////////////////////////
// ///the ^ in shorthand
// display("JavaScript provides an object named Object with a capital O");
// (() => {
//     const registerUser = (firstName, lastName, age) => {
//         let person = {
//             firstName,
//             lastName,
//             age,
//             //method declaration shorthand
//             isAdult() {return this.age >= 18},
//         };
//         // display(person);
//         display(Object.keys(person));//displays all the propertie keys of an object
//         for(let propertyName in person) {//displays all the property keys of an object
//             display(propertyName);
//         };
//     };
//     registerUser("Lucycan", "Ly", 43);
// })();

// ///////////////////////////////////////////
// display("Javascript compares objects by thier memory addresses");

// (() => {
//     const registerUser = (firstName, lastName, age) => {
//         let person = {
//             firstName,
//             lastName,
//             age,
//             //method declaration shorthand
//             isAdult() {return this.age >= 18},
//         };
//         let person2 = { };//create an empty object
//         //create the same object^
//         Object.assign(person2, person)//copys the object of the second argument to the first argument
//         // display(person2);
//         // display(person === person2);//returns a false value. Even these two objects are identical. Javascript places them in different memory addresses. The addresses is what is being compared, so it returns a false
        
//         let healthStats = {
//             height: 68,
//             weight: 150,
//         };
//         Object.assign(person, healthStats);
//         display(healthStats);
//         display(person);
//     };
//     registerUser("Lucycan", "Ly", 43);
// })();

// ////////////////////////////////////////////
// display("making sure you do not have unwanted mutable objects");
// (() => {
//     const registerUser = (firstName, lastName, age) => {
//         let person = {
//             firstName,
//             lastName,
//             age,
//             //method declaration shorthand
//             isAdult() {return this.age >= 18},
//         };

//         let healthStats = {
//             height: 68,
//             weight: 150,
//         };

//         //to fix the problem^ we declare the Object.assign with an empty array {}
//         //this is how you will often see the object assignment method used to avoid unwanted mutation
//         const mergeHealthStats = (person, healthStats) => Object.assign({}, person, healthStats);
//         let mergedPerson = mergeHealthStats(person, healthStats);
//         display(mergedPerson)//in this situation mergedPerson is the new object that is merged from both our objects, but there is a problem, the original person object was mutated also. We do not want that
//         display(person);
//     }
//         registerUser("Lucycan", "Ly", 43);
// })();

// /////////////////////////////////////////////////////
// display("Constructor Function");
// (() => {
//     function Person (firstName, lastName, age)  {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.isAdult = function () {return this.age >= 18}
//     };

//     let lucycan = new Person("Lucycan", "Ly", 43);//new sets an empty object thaty is filled with "this" properties
//     let sheng = new Person("Sheng", "Yang", 32);

//     display(lucycan);
//     display(sheng);
//     display(sheng.isAdult());
// })();

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// display("MODULE: JAVASCRIPT OBJECT PROPERTIES");

// (() => {
//     let person = {
//         firstName: "Lucycan",
//         lastName: "Ly",   
//         age: 43,
//     };
//     // a note on bracket notation
//     for (let propertyName in person) {//declare a variable, in this case "propertyName" to use for the object "person"
//         display(propertyName);//the loop loops thru the property nanmes and displays them  
//     };

//     for (let propertyName in person) {
//         display(person[propertyName]);// in this case, I get the values because I am indexing the values, using bracket notation
//     };

//     display(Object.getOwnPropertyDescriptor(person, "firstName"));//propertyy discriptor. displays the value of the firstName property in the person object. Also other attributes
//     Object.defineProperty(person, "firstName", {writable: false});//makes the first name property non writable. person is the target object, firstName is the target property, writable is the target attribute
//     display(Object.getOwnPropertyDescriptor(person, "firstName"));//now the writable value = false.
//     //try to change the value of the firstNanme property
//     // person.firstName = "Peter";//throws error: cannot assign to read only property
//     // display(Object.getOwnPropertyDescriptor(person, "firstName"));//now the writable value = false.

//     //lets add a property that has an object to the person object
//     person.gender = "male";
//     display(person);
//     display(Object.getOwnPropertyDescriptor(person, "gender"));
//     person.name = {"firstName": "Lucycan", "lastName": "Ly",};//this adds a property to the person object. this property now has the folowing properties.
//     display(person);
//     display("the properties in the name property", person.name);
//     display(Object.getOwnPropertyDescriptor(person, "name"));
//     display(person);
//     //because the firstName and lastName properties are now in the name property. I want to delete the those properties
//     delete person.firstName; delete person.lastName
//     display(person); 

//     display(`lets make the name property non writable`);
//     display(Object.getOwnPropertyDescriptor(person, "name"));
//     Object.defineProperty(person, "name", {writable: false});
//     display(Object.getOwnPropertyDescriptor(person, "name"));
//     display("lets see if we can write to it now.");
//     display(person.name.firstName = "Lee");
//     display(person.name);// so I can write to it even though I set the writable property to false. why? IDK... its something about where the object is being stored in memory
//     // display("you can use Object.freeze to stop all writable on an object");
//     // Object.freeze(person.name);//freeze the person.name property
//     // display(person.name.firstName = "Lucycan");
//     // display("the change did not reflectr because the freeze",person.name);

//     display("enumerable property");
//     person.name.firstName = "Lucycan"
//     display(Object.getOwnPropertyDescriptor(person.name, "firstName"));//displays the value of the firstName property. person > name> firstName > Lucycan  
//     display("change enumearable to false")
//     display('use for in loop');
//     for (let propertyName in person) {//using the for in to loop thru properties
//         display(person[propertyName])
//     };
//     Object.defineProperty(person.name, "firstName", {enumerable: false});
//     display(Object.getOwnPropertyDescriptor(person.name, "firstName"));//displays the value of the firstName property. person > name> firstName > Lucycan  
//     display("here, the firstName value is no longer displayed in the object because we set enumerable to false",person.name);
//     //run the for loop again to see if firstName shows up
//     for (let propertyName in person.name) {//using the for in to loop thru properties
//         display(propertyName);
//     };
// })();
////////////////////////////////////////////////////////////////////////////////////////

//I was having an issiue seeing the same results in Chrome debugger, so I came back here to use his display tutorial

(function() {
    class Person {
        constructor(firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        };

        get fullName() {
            return `${this.firstName} ${this.lastName}`; 
        };
        set fullName(fullName) {
            let nameParts = fullName.split(' ');
            this.firstName = nameParts[0];
            this.lastName = nameParts[1];
        };

        isAdult() {
            return this.age >= 18;
        };

    };
    
    class Student extends Person {
        constructor(firstName, lastName, age) {
            super(firstName, lastName, age);//the super key word is used to access and call functions on an objects parent
            this.enrolledCourses = [];
        };
        enroll(courseId) {
            this.enrolledCourses.push(courseId);
        };
        getCourses() {
            return `${this.fullName}'s enrolled courses are: ${this.enrolledCourses.join(", ")}`
        }
    };

    Object.defineProperty(Person.prototype, "fullName", {enumerable: true});
    
    let lucycan = new Person("Lucycan", "Ly", 43);
    display(lucycan);
    let rosy = new Person("Rosy", "Thao", 32);
    display(rosy);
    // create a new Student
    let sheng = new Student("Sheng", "Yang", 32);
    display(sheng);
    //enroll sheng in some courses
    sheng.enroll("Math");
    sheng.enroll("Science");
    display(sheng.getCourses());
})();

(() => {
    class Person {
        constructor() {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        };
        getFullName() {
            return `${this.fullName} ${this.lastName}`;
        };
        setFullName() {
            let nameParts = fullName.split(" ");
            this.firstName = nameParts[0];
            this.lastName = nameParts[1];
        };
        isAdult() {
            return this.age >= 18;
        };
    };
});



