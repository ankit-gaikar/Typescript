// Declare class Student
class Student 
{ 
    // Characteristics
    name:string; 
  
    //constructor 
    constructor(value:string) 
    { 
       this.name = value 
    }  
 
    //Behaviour
    display():void 
    { 
       console.log("Name of Teacher : "+this.name) 
    } 
 }

 // Create object of above class
 var obj1 = new Student("Piyush Khairnar");
 obj1.display();
 obj1.display();
 class Ankit 
{ 
    // Characteristics
    myname:string; 
  
    //constructor 
    constructor(value:string) 
    { 
       this.myname = value 
    }  
 
    //Behaviour
    display():void 
    { 
       console.log("Name of student : "+this.myname) 
    } 
 }

 // Create object of above class
 var obj2 = new Ankit("Ankit Sanjay Gaikar");
 obj2.display();


