// allows type declaration 
var a: number;
var b: boolean;
var c : string;

a = 10 ; 
b = true;
c = 'hello';

// undefined null types - more primitive types  
var foo = undefined; // contains one undefined value

// Array 
var myArr: number[]; // Specifying this is an array of numbers 
myArr = [];
myArr = [1,2,3];
myArr.push(1);
myArr.push(4);
myArr.pop();

// Tuple , we can use many types in the """array""'"

var myArr1:[number,boolean] = [1, true];

// functions 
function add(a:number,b:number){
    return a + b ;
}
var sum = add(1,2);
console.log(sum);

// Argument as Optional 
// optional is always at the end 

function add1(a,b,c?){
    return a + b ;
}
add1(1,2,3);

// default value 
function add3(a,b,c = 0 , d?){
    return a + b + c ;

}
var sum3 = add3(1,2,3);
console.log(sum3);





