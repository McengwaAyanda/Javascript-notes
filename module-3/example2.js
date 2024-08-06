
// var Ret = lefty("This is a test", 7);
// alert(Ret);
// function lefty(InString, Num){
//     var OutString = InString.substring(InString, Num);
//     alert(OutString);
// }
// lefty("This is a test", 7);

//================================
//calling one function from another function

// function run() {
//     var Ret = changeText("Change Me");
//     alert(Ret);
//     document.write(Ret);
// }
// function changeText(text) {
//     text = makeBold(text);
//     text = makeItalics(text);
//     text = makeBig(text);
//     return text;
// }
//  function makeBold(InString) {
//     return InString.bold();
// }
//  function makeItalics(InString) {
//     return InString.italics();
// }
//  function makeBig(InString) {
//     return InString.fontsize(7);
// }
//===================================
// defining new propertie
// customer = new makeSimpleObject();
// customer.name = 'Fred';
// customer.address = '123 main Street';
// customer.phone = '555-552-1212';
// function makeSimpleObject(){
//     return (this);
// }
//===========================================

// Defining properties when you create the object
// customer = new makeCustomer("Fred", "123 Main street", "555-2212");
// alert(customer.Address);
// customer.salutation = 'Mr ';
// function makeCustomer(Name, Address, Phone){
//     this.name = Name;
//     this.Address = Address;
//     this.Phone = Phone;
// }
// alert(customer.Name);

//===================================
// Destructuring
//  var foo = ['one', 'two', 'three'];
//  var one = foo[0];
//  var two = foo[1];
//  var three = foo[2];
//  var [one, two, three] = foo;

//===================================
// Regular expressions
// let waldoHiding = 'Somewhere waldo is hiding in this text.';
// let waldoRegex = /waldo/;
// let result = waldoRegex.test(waldoHiding);

// Day 3 JavaScript forms
//===================================
//Javascript methods and "this" keyword
// In JS, Objects can also contain functions
//Object containing method
// let person ={
//     name: 'John',
//     greet: function(){console.log('Hello');}
// }
// // accessing property
// person.name; // John

// // accessing method
// person.greet();// hello

//==========================================
// JS built-in methods
// let number = '23.32';
// let result = parseInt(number);
// console.log(result);

//========================================
//Adding a method to a JS Object
// creating an Object
// let student = {};
// // adding a property
// student.name = 'John';
// // adding a method
// student.greet = function(){console.log("Hello")}

//=============================================
// JS this keyword
// let person = {
//     name: "John",
//     age: 30,
//     // accessing name property by using this.name
//     greet: function(){
//         console.log("The name is" + " " + this.name);
//     }
// }

//===========================================
// JS switch statements
var x = "0";
switch (x){
    case 0:
        text = "off";
        break;
    case 1:
        text = "On";
        break;
    default:
        text = "No value found";
        break;
}