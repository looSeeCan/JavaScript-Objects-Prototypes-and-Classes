"use strict";
(() => {
    let person = {
        name: {
            firstName: "Lucycan",
            lastName: "Ly",
        },
        age: 43,
        gender: "male",
    };

    console.log("the person object",person);
    console.log("person > name", person.name);
    console.log("person > name > firstName", person.name.firstName)
    console.log("check the attributes of person > name > firstName", Object.getOwnPropertyDescriptor(person.name, "firstName"));
    console.log("change the enumerable attribute to false");
    
    Object.defineProperty(person.name, "firstName", {enumerable: false});
    console.log("check to see if enumerable was changed", Object.getOwnPropertyDescriptor(person.name, "firstName"));
    console.log("when the enumerable property is set to false it is no longer visible for loops, Object.keys, and json");
    for (let item in person.name) {//goes into person > name 
        console.log(item, person.name[item])//sets the property to the variable item, sets the value to the item
    };
    console.log(Object.keys(person.name));
    console.log(JSON.stringify(person));

    console.log("*NOTE* even though enumerable is set to false, it will still show up in normal indexes", person.name);

    console.log("------configurable property-----", "locks down the property descriptors themselves from being changed");
    console.log(Object.getOwnPropertyDescriptor(person.name, "firstName"));
    console.log("set configurable to false");
    Object.defineProperty(person.name, "firstName", {configurable: false});
    console.log("check to see if it changed");
    console.log(Object.getOwnPropertyDescriptor(person.name, "firstName"));
    console.log("try to change the enumerable descriptor back to true");
    // Object.defineProperty(person.name, "firstName",  {enumerable: true});//type error cannot redifine property
    console.log("turn configurable back to true. I connot change it back down here. Everything is locked. I have to go back up to where I already changed it.")
    // Object.defineProperty(person.name, "firstName",  {configurable: true});//I connot change it back down here. Everything is locked. I have to go back up to where I already changed it.
    // delete person.name.firstName;// also can not delete the property when configurable is set to false. TypeError can not delete property.  
    console.log("you can change the writable descriptor though");
    Object.defineProperty(person.name, "firstName", {writable: false});
    console.log(Object.getOwnPropertyDescriptor(person.name, "firstName"));

})();

(() => {
    console.log("----getters and setters----");
    console.log("create an object from scratch");
    let person = {};
    console.log(person);
    console.log("create a property that is an object within person object");
    person.name = {"firstName": "Lucycan", "lastName": "Ly"}; person.gender = "male"; person.age = 43; console.log(person); console.log(person.name);
    
    console.log("get");
    Object.defineProperty(person, "fullName", {//im defining this fullname property and
        get: function () { //im deifining this get attribute 
        return `${this.name.firstName} ${this.name.lastName}`;// that is returning the firstName and lastName values
        // basically I created a property in the person object named "fullName" and gave it a value of Lucycan Ly
        },
        set: function (value) {
            
            let nameParts = value.split(" ");
            this.name.firstName = nameParts[0];
            this.name.lastName = nameParts[1];
            
        }
        
    });
    person.fullName = "Sheng Yang";
    console.log(person.fullName);

    // console.log("check for the fullName property", person.fullName);
    // // console.log("check the fullName property value:", person.fullName);
    // console.log(person.name.firstName);
    // //does the value that I just created have attributes also?
    // console.log(Object.getOwnPropertyDescriptor(person, "fullName"));

})();