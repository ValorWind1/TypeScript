// allows type declaration 
var a;
var b;
var c;
a = 10;
b = true;
c = 'hello';
// undefined null types - more primitive types  
var foo = undefined; // contains one undefined value
// Array 
var myArr; // Specifying this is an array of numbers 
myArr = [];
myArr = [1, 2, 3];
myArr.push(1);
myArr.push(4);
myArr.pop();
// Tuple , we can use many types in the """array""'"
var myArr1 = [1, true];
// functions 
function add(a, b) {
    return a + b;
}
var sum = add(1, 2);
console.log(sum);
// Argument as Optional 
// optional is always at the end 
function add1(a, b, c) {
    return a + b;
}
add1(1, 2, 3);
// default value 
function add3(a, b, c, d) {
    if (c === void 0) { c = 0; }
    return a + b + c;
}
var sum3 = add3(1, 2, 3);
console.log(sum3);
