// Muestra de código 1 - function y return I
// ????
function a() {
  console.log("hello");
}
console.log("Dojo");




// Muestra de código 2 - function y return I
// hello
// x is 15
function a() {
  console.log("hello");
  return 15;
}
x = a();
console.log("x is", x);



//Muestra de código 3 - function y return I
// n is 3 
// x is 18
function a(n) {
  console.log("n is", n);
  return n + 15;
}
x = a(3);
console.log("x is", x);




//Muestra de código 4 - function y return I
//n is 3 
//n is 5 
//x is 16
function a(n) {
  console.log("n is", n);
  y = n * 2;
  return y;
}
x = a(3) + a(5);
console.log("x is", x);




// Muestra de código 5 - orden de las operaciones I
// c  is 5
// c is 8
// x is 13
function op(a, b) {
  c = a + b;
  console.log("c is", c);
  return c;
}
x = op(2, 3) + op(3, 5);
console.log("x is", x);




// Muestra de código 6 - orden de las operaciones I
// c is 5
// c is 3
// c is 6
// c is 3
// c is 5
// c is 8
// x is 19
function op(a, b) {
  c = a + b;
  console.log("c is", c);
  return c;
}
x = op(2, 3) + op(3, op(2, 1)) + op(op(2, 1), op(2, 3));
console.log("x is", x);




// Muestra de código 7 - scoping
//15
//15
var x = 15;
function a() {
  var x = 10;
}
console.log(x);
a();
console.log(x);


// Actividad 
//2
//3
function multiply(x,y) {
    console.log(x);
    console.log(y);
}
b = multiply(2,3);
console.log(b);


//
function multiply(x,y) {
    return x*y;
}
b = multiply(2,3);
console.log(b);
console.log(multiply(5,2));




// 6
//10
function multiply(x,y) {
    return x*y;
}
b = multiply(2,3);
console.log(b);
console.log(multiply(5,2));


// 15 15 10 15
var x=15;
console.log(x);
function awesome(){
    var x=10;
    console.log(x);
}
console.log(x);
awesome();
console.log(x);


// 0 2 4 6 8 10 12 14
for(var i=0; i<15; i+=2) {
    console.log(i);
 }


 // 0 0 0
 // 1 0 2
 for(var i=0; i<3; i++) {
    for(var j=0; j<2; j++) {      
        console.log(i*j);
    }
 }

 // Parte 2

 function printUpTo(x) {
     if(x>0){
    for (let index = 1; index <=x; index++) {
        console.log(index);
    }
    }
    else{
        return false;
    }

  }
  printUpTo(1000); // debería imprimir todos los enteros de 1 to 1000
  y = printUpTo(-10); // debería imprimir false
  console.log(y); // debería imprimir false



  function printSum(x) {
    var sum = 0;
    for (let index = 0; index <= x; index++) {
        sum = sum + index;
        console.log(index, sum);
        
    }
    return sum
  }
  y = printSum(255) // debería imprimir todos los enteros de 0 a 255 y que cada entero imprima la suma parcial.
  console.log(y) // // debería imprimir 32640


  function printSumArray(x) {
    var sum = 0;
    for(var i=0; i<x.length; i++) {
      sum = sum + x[i];
    }
    return sum;
  }
  console.log( printSumArray([1,2,3]) ); // debería imprimir 6