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

    class Student extends Person{
        constructor(firstName, lastName, age) {
            super(firstName, lastName, age);
            this._enrolledCourses = [];
        };
        enroll(courseId) {
            this._enrolledCourses.push(courseId);
        };
        getCourses() {
            return `${this.fullName}'s enrolled courses are ${this._enrolledCourses.join(", ")}`
        };
    };
    // console.log(Object.getOwnPropertyDescriptor(Person.prototype, "fullName"));
    // Object.defineProperty(Person.prototype, "fullName", {enumerable: true});

    // console.log(Object.getOwnPropertyDescriptor(Person.prototype, "fullName"));

    //SO I GOT STUCK ON HERE FOR A LONG TIME. MODIFYING PROPERTY DESCRIPTOR. IT WORKED ON HIS DISPLAY PART. BUT I WAS HAVING ISSUES WITH THE CHROME DEBUGGER. I THINK ITS RIGHT AND THE WAY HE IS DOING THE TUTORIAL WITH "DISPLAY" IS JUST CONFUSING ME.
    let lucycan = new Person("Lucycan", "Ly", 43);
    console.log(lucycan);

    //create new Student
    let sheng = new Student("Sheng", "Yang", 32);
    console.log(sheng);
    sheng.enroll("Math"); sheng.enroll("Sex101");
    console.log(sheng.getCourses());
})();

