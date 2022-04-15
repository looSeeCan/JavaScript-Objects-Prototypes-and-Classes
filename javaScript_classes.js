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
/////////////////////////////////////////////////////////////

//Static Properties and methods.

(() => {
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
            let nameParts = fullName.split(" ");
            this.firstName = nameParts[0];
            this.lastName = nameParts[1];
        };
        isAdult() {
            return this.age >= 18;
        };
    };

    class Student extends Person {
        constructor(firstName, lastName, age) {
            super(firstName, lastName, age);
            this.enrolledCourses = [];
        };
        enroll(courseId) {
            this.enrolledCourses.pusn(courseId);
        };
        getCourses() {
            return `${this.fullName}'s enrolled courses are ${this.enrolledCourses.join(", ")}`;
        };
    };

    let lucycan = new Student("Lucycan", "Ly", 43);
    console.log(lucycan);
    console.log(lucycan.getCourses());
    console.log(Student);
})();

/////////////////////////////////////////////////////////////
//quick youtube tutorial on static

//A static method is a method that is attached to a class or an object

(() => {
    class Person {

        static greet() {
            console.log("This is a static method")
        };

        greet() {
            console.log("this is not a static method. It will show up in the prototype of the instance")
        };

        constructor(firstName, lastName, birthYear) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.birthYear = birthYear;
        };
        calcAge() {
            return new Date().getFullYear() - this.birthYear;
        };
    };

    let lucycan = new Person("Lucycan", "Ly", 1979);//lucycan is an instance of this Person class
    console.log(lucycan.calcAge());//and it has access to this calcAge method
    console.log(lucycan);//we can check the instance and see that it is listed in the proto
    lucycan.greet();//here the instance lucycan can only access the greet that is not a static method
    Person.greet();//while the only way that the static method can be accessed is by the class that it belongs to.
})();


