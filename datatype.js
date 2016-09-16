/**
 * Created by khoa on 15/09/2016.
 */
"use strict";

var age = 10;
const pi = 3.14;

console.log(typeof  pi);

if (parseInt(age)) {
    console.log("Age is number");
}

var myAge = "27";
//myAge = "27AAA99" >> parse(myAge) = 27
//myAge = "AAA" >> parse(myAge) = NaN (not a number)
var intAge = parseInt(myAge);

//Object
var cuong = {firstname: "Trinh", lastname: "Cuong"};

var book = {name: "Java Cookbook", author: cuong};
console.log(book.name);
console.log(book.price);
book.price = 100;
console.log(book.price);
cuong.firstname = "Trịnh";
console.log(book.author);