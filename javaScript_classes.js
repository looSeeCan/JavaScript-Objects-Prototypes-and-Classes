'use strict';
(function() {
    class Person {
        constructor(firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }

        get fullName() {
            return `${this.firstName} ${this.lastName}`; 
        }
        set fullName(fullName) {
            let nameParts = fullName.split(' ');
            this.firstName = nameParts[0];
            this.lastName = nameParts[1];
        }

        isAdult() {
            return this.age >= 18;
        }
    }
    // console.log(Object.getOwnPropertyDescriptor(Person.prototype, "fullName"));
    // Object.defineProperty(Person.prototype, "fullName", {enumerable: true});

    // console.log(Object.getOwnPropertyDescriptor(Person.prototype, "fullName"));

    let lucycan = new Person("Lucycan", "Ly", 43);
    console.log(lucycan);
})();

