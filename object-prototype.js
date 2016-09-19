/**
 * Created by nguyenkhoa on 9/19/16.
 */
var myObject = function (type, size) {
    this.myType = type;
    this.mySize = size;
}

var Obj1 = new myObject('type of 1', 'size of 1');
var Obj2 = new myObject('type of 2', 'size of 2');

console.log(Obj1.myType, Obj2.mySize);
console.log('Obj 2', Obj2.myType, Obj2.mySize);

myObject.prototype.showInfo = function () {
    console.log(this.mySize, this.myType);
}

Obj1.showInfo();
myObject.height = "100";
Obj1.height = '200';
console.log(myObject.height, Obj1.height);

var myName = "myName";

var yourName = myName;
yourName = 'your name';
console.log(yourName, myName);

var flight = {status: "Flying"};

//Object is passed by reference by default
var byRefFlight = flight;

//This code really copies object to other instance
var byCopyFlight = Object.create(flight);

byRefFlight.status = "Landing";
console.log('flight.status = ' + flight.status + ". byRefFlight.status = " + byRefFlight.status);
//flight.status = Landing. byRefFlight.status = Landing

byCopyFlight.status = "Crash!";
console.log('flight.status = ' + flight.status + ". byCopyFlight.status = " + byCopyFlight.status);