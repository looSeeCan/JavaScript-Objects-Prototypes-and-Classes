"use strict";
(() => {
    class Person {
        constructor(firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        };

        get fullName() {
            return `${this.firstName} ${this.lastName}` 
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

    let lucycan = new Person("Lucycan", "Ly", 43);
    lucycan.fullName = "Peter Ly";//when you change the value here. it calls the set. the set changes the value of the first and last name in hte class
    console.log(lucycan.fullName);
    console.log(lucycan.isAdult());//remember that they are methods when they are in a class. I have to call them like a method and not a function

})();

"use strict";
(() => {
    class Person {
        constructor(firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        };

        get fullName() {
            return `${this.firstName} ${this.lastName}` 
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

    //set the enumerable descriptor to true so the fullName will show up in lucycan
    console.log(Object.getOwnPropertyDescriptor(Person.prototype, "fullName"));
    Object.defineProperty(Person.prototype, "fullName", {enumerable: true});
    console.log(Object.getOwnPropertyDescriptor(Person.prototype, "fullName"));
    

    let lucycan = new Person("Lucycan", "Ly", 43);
    console.log(lucycan);

    //is it in the new Person lucycan that I have to change enumerable
    console.log(Object.getOwnPropertyDescriptor(lucycan.__proto__, "fullName"));


})();

