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
    
})();
