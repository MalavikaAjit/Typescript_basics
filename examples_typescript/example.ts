

//declaring types 
  let myName: string = "Alice";
  console.log(myName)
  let no :number = 20;
  console.log(no)
  let state :boolean = true;
  console.log(state)
  let a :any = 123
  a = "hello world";
  console.log(a)//takes any type 

  let years: Array<number> = [2015, 2016, 2017, 2018, 2019]; //array with numbers
  console.log(years)

  //composing type

  let month_year: Array<string | number> = ["Jan", 2015, "Feb", 2016]; //array with string and numbers 
  console.log(month_year)

//opertors

var x:number = 5;
var y:number = 6;
var sum:number = 0;
sum = x + y;
console.log("Sum: "+sum); 
 

//if -else
var num:number = 5;  
if(num>0){  
console.log("positive integer ");  
}  
else if(num<2){  
console.log("negative integer");  
} 


// loop
var value :number;
for (value=1; value<=10; value++)  {  
  console.log(value);  
  }

var value2:number=1;  
while (value2<=4)  {  
console.log("values :",value2);
value2++;
}  


//function
function employee(empId:number,name:string) { 
  console.log(empId);
  console.log(name);
} 
employee(645,"Jai");

function display(...ageOfEmployees:number[]) {    
  for(var i = 0;i<ageOfEmployees.length;i++) { 
     console.log("freshers",ageOfEmployees[i]);
  } 
} 
display(25,26,28,24); 


var greet = function(message:string) { 
  return "Hello "+message;  
} 
console.log(greet("world"));

function numberTest(n1:Number){
  console.log(n1); 
}
var n1 = new Number(123);
var n2 = new Number(455);
numberTest(n1);
numberTest(n2);


//interface example 
interface User {
  name: string;
  id: number;
}
const user: User = {
  name: "Hayes",
  id: 0,
 
};
console.log("user",user)


//object example 
var person = { 
  fname:"Alice", 
  place:"Mumbai" 
}; 
var hello = function(obj: { fname:string, place :string }) { 
  console.log("first name :"+obj.fname) 
  console.log("place :"+obj.place) 
} 
hello(person)
  