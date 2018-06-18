// Defination of add function

function add(no1:number,no2:number):number 
{  
    var ans:number;

    ans = no1+no2;
    
    return ans; 
} 

var iret:number;
iret = add(10,1);

console.log("Addition is :"+iret);

function sub(num1:number,num2:number):number
{
    var result:number;
    result= num1-num2;
    return result;
    
}
var myresult:number;
myresult=sub(200,100);

console.log("Subtraction is"+myresult);