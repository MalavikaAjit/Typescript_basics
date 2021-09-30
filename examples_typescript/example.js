//declaring types 
var myName = "Alice";
console.log(myName);
var no = 20;
console.log(no);
var state = true;
console.log(state);
var a = 123;
a = "hello world";
console.log(a); //takes any type 
var years = [2015, 2016, 2017, 2018, 2019]; //array with numbers
console.log(years);
//composing type
var month_year = ["Jan", 2015, "Feb", 2016]; //array with string and numbers 
console.log(month_year);
//opertors
var x = 5;
var y = 6;
var sum = 0;
sum = x + y;
console.log("Sum: " + sum);
//if -else
var num = 5;
if (num > 0) {
    console.log("positive integer ");
}
else if (num < 2) {
    console.log("negative integer");
}
// loop
var value;
for (value = 1; value <= 10; value++) {
    console.log(value);
}
var value2 = 1;
while (value2 <= 4) {
    console.log("values :", value2);
    value2++;
}
//function
function employee(empId, name) {
    console.log(empId);
    console.log(name);
}
employee(645, "Jai");
function display() {
    var ageOfEmployees = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ageOfEmployees[_i] = arguments[_i];
    }
    for (var i = 0; i < ageOfEmployees.length; i++) {
        console.log("freshers", ageOfEmployees[i]);
    }
}
display(25, 26, 28, 24);
var greet = function (message) {
    return "Hello " + message;
};
console.log(greet("world"));
function numberTest(n1) {
    console.log(n1);
}
var n1 = new Number(123);
var n2 = new Number(455);
numberTest(n1);
numberTest(n2);
var user = {
    name: "Hayes",
    id: 0
};
console.log("user", user);
//object example 
var person = {
    fname: "Alice",
    place: "Mumbai"
};
var hello = function (obj) {
    console.log("first name :" + obj.fname);
    console.log("place :" + obj.place);
};
hello(person);
