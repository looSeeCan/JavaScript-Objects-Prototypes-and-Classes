"use strict";

(() => {//self executing function
    let person = {//object literal
        firstName: "Lucycan",
        lastName: "Ly",
        age: 43,
        isAdult: function () {return this.age >= 18},//method
    };
    // display(person.firstName, person["lastName"]);
    
    ///Adding properties to the object literal 
    ///commented these out to just add them in the object literal above
    // person.age = 43;//added an age property with a value of 43
    // display(person.age);
    // person["age"] = 42;//changed that value to 42 using bracket notation
    // display(person.age);
    // display(person)//dispays the whole object

    ///adding a method to the object obove
    //commented this out to add it up in the object literal
    // person.isAdult = function () {return this.age >= 18};//something about you can not use arrow functions in methods
    //also "this" is used to reference other properties on the object from within the object
    // display(person.isAdult())

})();

(() => {
    //create a reusable function, objecg
    const registerUser = (fName, lName) => {
        let person = {
            firstName: fName,
            lastName: lName,
        };
        return person;
    };
    // display(registerUser("Axavier", "Ly"));
})();

///the ^ in shorthand
display("shorthand");
(() => {
    const registerUser = (firstName, lastName, age) => {
        let person = {
            firstName,
            lastName,
            age,
            //method declaration shorthand
            isAdult() {return this.age >= 18},
        };
        // display(person);
        // display(person.isAdult());
    };
    registerUser("Lucycan", "Ly", 43);
})();

////////////////////////////////////////////////
///the ^ in shorthand
display("JavaScript provides an object named Object with a capital O");
(() => {
    const registerUser = (firstName, lastName, age) => {
        let person = {
            firstName,
            lastName,
            age,
            //method declaration shorthand
            isAdult() {return this.age >= 18},
        };
        // display(person);
        display(Object.keys(person));//displays all the propertie keys of an object
        for(let propertyName in person) {//displays all the property keys of an object
            display(propertyName);
        };
    };
    registerUser("Lucycan", "Ly", 43);
})();

///////////////////////////////////////////
display("Javascript compares objects by thier memory addresses");

(() => {
    const registerUser = (firstName, lastName, age) => {
        let person = {
            firstName,
            lastName,
            age,
            //method declaration shorthand
            isAdult() {return this.age >= 18},
        };
        let person2 = { };//create an empty object
        //create the same object^
        Object.assign(person2, person)//copys the object of the second argument to the first argument
        // display(person2);
        // display(person === person2);//returns a false value. Even these two objects are identical. Javascript places them in different memory addresses. The addresses is what is being compared, so it returns a false
        
        let healthStats = {
            height: 68,
            weight: 150,
        };
        Object.assign(person, healthStats);
        display(healthStats);
        display(person);
    };
    registerUser("Lucycan", "Ly", 43);
})();

////////////////////////////////////////////
display("making sure you do not have unwanted mutable objects");
(() => {
    const registerUser = (firstName, lastName, age) => {
        let person = {
            firstName,
            lastName,
            age,
            //method declaration shorthand
            isAdult() {return this.age >= 18},
        };

        let healthStats = {
            height: 68,
            weight: 150,
        };

        //to fix the problem^ we declare the Object.assign with an empty array {}
        //this is how you will often see the object assignment method used to avoid unwanted mutation
        const mergeHealthStats = (person, healthStats) => Object.assign({}, person, healthStats);
        let mergedPerson = mergeHealthStats(person, healthStats);
        display(mergedPerson)//in this situation mergedPerson is the new object that is merged from both our objects, but there is a problem, the original person object was mutated also. We do not want that
        display(person);
    }
        registerUser("Lucycan", "Ly", 43);
})();

/////////////////////////////////////////////////////
display("Constructor Function");
(() => {
    function Person (firstName, lastName, age)  {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.isAdult = function () {return this.age >= 18}
    };

    let lucycan = new Person("Lucycan", "Ly", 43);//new sets an empty object thaty is filled with "this" properties
    let sheng = new Person("Sheng", "Yang", 32);

    display(lucycan);
    display(sheng);
    display(sheng.isAdult());
})();