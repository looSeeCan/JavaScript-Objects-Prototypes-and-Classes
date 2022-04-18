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


(() => {
    let someDate = new Date(2050, 11, 19, 12, 30, 30);
    console.log(someDate);
    
    console.log(someDate.getFullYear());
    console.log(someDate.getMonth());//gets the month. Jan = 0;
    console.log(someDate.getDay());//gets the number of the day of the week. Sunday = 0
    console.log(someDate.getDate());
    console.log(someDate.getHours());
    console.log(someDate.getMinutes());
    
    console.log(someDate.__proto__);

})();


//Exec function
//like the test function, the exec function is used to search a string, but instead of returning true or false, it returns information about what it found.

(() => {
    const findAlerts = (logData) => {
        // let regex = /ERROR:/;//this is going to search for a word ERROR followed by a colon
        let regex = /ERROR.*?:/;
        
        return regex.exec(logData);//the regex function returns an array    
    };

    let logData = "INFO:OK;ERROR:Something broke;";
    let result = findAlerts(logData);
    console.log(result);
    console.log("///////////////////////");
    console.log(findAlerts("ERROR:blahblahblah"));

    console.log("///////////////////////");
    console.log(result[0]);//indexing the first index in the array which is ERROR 
    console.log(result.index);
    console.log(result.input);

    
    //what if there are multiple errors
    let multipleErrors = "INFO:OK;ERROR(HIGH):Something broke;ERROR(Low):Something fishy;";
    console.log(findAlerts(multipleErrors));
})();


console.log("What if there are multiple errors?");

(() => {
    const findAlerts = (logData) => {
        // let regex = /ERROR:/;//this is going to search for a word ERROR followed by a colon
        let regex = /ERROR.*?:/g;//by default the exec function only finds the first and stops trying. to have it keep going, we need to give it the global flag  by adding a "g"
        console.log(regex.exec(logData));//finds the first string. the return will find the second string. only if the global glag is declared
        return regex.exec(logData);//the regex function returns an array which is an object. Arrays in javascript are realy just objects.    
    };

    let multipleErrors = "INFO:OK;ERROR(HIGH):Something broke;ERROR(LOW):Something is fishy;";
    let result = findAlerts(multipleErrors);
    console.log(result);
})();

console.log('----------------Capture Groups------------------------------');

(() => {
    const findAlerts = (logData) => {
        let regex = /ERROR(.*?):(.*?);/g;//two capture groups. capture groups allow you to captrue and return data from within the input string
        //the () are what creates the capture groups. One to capture the level of the error and one to capture the error message
        
        let result = regex.exec(logData);//when declared here it is only going to find the first error and return it
        console.log(result);//there are three indexes in the array, because, of the two capture groups
        console.log(result !== null);
        while(result) {//why does this come out of the loop? when is it not true?
            console.log(result[0]);//logs the first index
            console.log(result[1]);//logs the second index
            result = regex.exec(logData);//declared here so it will find the second error and if there is more errors it will keep itterating
        };
    };
    let multipleErrors = "INFO:OK;ERROR(HIGH):Something broke;ERROR(LOW):Something is fishy;ERROR(MEDIUM):SOMETHING SUSPECT;";
    findAlerts(multipleErrors);
})();