// Declare class Student
var Student = /** @class */ (function () {
    //constructor 
    function Student(value) {
        this.name = value;
    }
    //Behaviour
    Student.prototype.display = function () {
        console.log("Name of Teacher : " + this.name);
    };
    return Student;
}());
// Create object of above class
var obj1 = new Student("Piyush Khairnar");
obj1.display();
obj1.display();
var Ankit = /** @class */ (function () {
    //constructor 
    function Ankit(value) {
        this.myname = value;
    }
    //Behaviour
    Ankit.prototype.display = function () {
        console.log("Name of student : " + this.myname);
    };
    return Ankit;
}());
// Create object of above class
var obj2 = new Ankit("Ankit Sanjay Gaikar");
obj2.display();
