"use strict";

// arguments object - no longer bound with arrow functions

var add = function add(a, b) {
  //console.log(arguments);
  return a + b;
};

console.log(add(55, 1, 100));

// this keyword - no longer bound

var user = {
  name: "Andrew",
  cities: ["Philadelphia", "New York", "Dublin"],
  printPlacesLived: function printPlacesLived() {
    console.log(this.name);
    console.log(this.cities);
  }
};

user.printPlacesLived();
