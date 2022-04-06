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
    console.log("it does not take effect if you are just checking the index", person.name);
    console.log("it does take effect if you run a for loop to look for it");
    for (let attribute in person.name) {//goes into person > name 
        console.log(attribute, person.name[attribute])//sets the property to the variable attribute, sets the value to the attribute
    };
})();
