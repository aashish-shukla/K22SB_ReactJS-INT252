class student{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
var student1 = new student( 'John', 25);
student1.greet();


//arrow function

add=()=>{
    console.log(a+b);
}
a=100;
b=-200;
add(a,b);


let name=Array.from('Lovely');
console.log(name);

//spread operator
//spread operator is used to split up array elements or object properties.
let arr1=[1,2,3,4,5];
let arr2=[6,7,8,9,10];
let arr3=[...arr1,...arr2];
console.log(arr3); 

//Array.entries
//The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
let arr4=['a','b','c','d','e'];
let entries=arr4.entries();
for(let i of entries){
    console.log(i);
}

//Array.keys
var colours=['red','green','blue','yellow'];
var show=colours.keys();
console.log(...show);

//Array.values
var fruits=['apple','banana','mango','orange'];
var show=fruits.values();
console.log(...show);

//Array.fill

var colours=['red','green','blue','yellow'];
var show=colours.fill('black',1,4);
console.log(...show);

//Array destructuring
//Array destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
var colours=['red','green','blue','yellow'];
var [a,b,c,d]=colours;
console.log(a); 
console.log(b);
console.log(c);
console.log(d);


//Array destructuring with rest parameter
var colours=['red','green','blue','yellow','black','white','pink'];
var [a,b,...args]=colours;
console.log(a);
console.log(b);
console.log(args);

//Array destructuring with default value
//If you want to assign a default value to a variable in case the value unpacked from the array is undefined,
//  you can use the assignment operator (=) to provide a default value.
var colours=['red','green','blue','yellow','a','white','pink'];
var [a,b,c,d,e,f,g='black']=colours;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);

//Swapping variables
var a=10;
var b=20;
[a,b]=[b,a];
console.log(a);
console.log(b);

//Basic Calcutor with javascript
function calculate(a,b){
   const sum=a+b;
   const diff=a-b;
   const mul=a*b;
   const div=a/b;
   return {sum,diff,mul,div};
}
let add, sub, mul, div;
({sum: add, diff: sub, mul, div} = calculate(10, 5));
console.log(add);
console.log(sub);
console.log(mul);
console.log(div);

const vehicle={
    brand:'Toyota',
    model:'Corolla',
    year:2021,
    color:'red'
}
const {brand,model,year,color}=vehicle;
console.log(brand);
console.log("My "+model+" is "+color+" in color and was manufactured in the year "+year);

//Map properties
//The Map object holds key-value pairs and remembers the original insertion order of the keys.


