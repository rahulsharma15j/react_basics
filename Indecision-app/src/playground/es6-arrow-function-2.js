// arguments object - no longer bound with arrow functions

const add = (a, b) => {
  //console.log(arguments);
  return a + b;
};

console.log(add(55, 1, 100));

// this keyword - no longer bound

const user = {
  name: "Andrew",
  cities: ["Philadelphia", "New York", "Dublin"],
  printPlacesLived: function () {
    console.log(this.name);
    console.log(this.cities);

    this.cities.forEach(function (city) {});
  },
};

user.printPlacesLived();
