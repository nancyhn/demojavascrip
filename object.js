/**
 * Created by nguyenkhoa on 9/16/16.
 */
var myObject = {name:"Khoa", tuoi:"27", ngaysinh:"01.11"};
console.log(myObject);

function Person(ten, tuoi, ngaysinh, gioitinh){
    "use strict";
    this.name = ten;
    this.age = tuoi;
    this.birthday = ngaysinh;
    this.sex = gioitinh;
}
var person1 =  new Person("ten1", 20, "01-11", "nam");
console.log(person1);

Person.prototype.showinfo = function() {
    console.log("name:", this.name);
}
person1.showinfo();