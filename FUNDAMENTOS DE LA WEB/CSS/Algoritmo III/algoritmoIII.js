//5
function a(x,y){
    return 5;
  }
  console.log(a(5,5))

// 2 2 5
// 2 2 5
// 6 8 5
// 6 8 5
  function a(x,y){
    z = []
    z.push(x);
    z.push(y);
    z.push(5);
    console.log(z);
    return z;
}
b = a(2,2)
console.log(b);
console.log(a(6,8));



//2 2 5
function a(x){
    z = [];
    z.push(x);
    z.pop();
    z.push(x);
    z.push(x);
    return z;
 }
 y = a(2);
 y.push(5);
 console.log(y);


// true
 function a(x){
    if(x[0] < x[1]) {
       return true;
    }
    else {
       return false;
    }
 }
 b = a([2,3,4,5])
 console.log(b);






//['Coding', 'Coding', 'Coding', 'Coding']
 function a(x){
    for(var i=0; i<x.length; i++){
      if(x[i] > 0){
           x[i] = "Coding";
      }
    }
    return x;
}
console.log(a([1,2,3,4]))





//[5, 'Coding', 'Dojo', 4]
function a(x){
    for(var i=0; i<x.length; i++){
      if(x[i] > 5){
           x[i] = "Coding";
      }
      else if(x[i] < 0){
           x[i] = "Dojo";
      }
    }
    return x;
}
console.log(a([5,7,-1,4]))




//[5, 'Coding', 'Dojo', 4]
function a(x){
    for(var i=0; i<x.length; i++){
      if(x[i] > 5){
           x[i] = "Coding";
      }
      else if(x[i] < 0){
           x[i] = "Dojo";
      }
    }
    return x;
}
console.log(a([5,7,-1,4]))




// 10
function a(x){
    if(x[0] > x[1]) {
     return x[1];
    }
    return 10;
 }
 b = a([5,10])
 console.log(b);


//
 function sum(x){
    sum = 0;
    for(var i=0; i<x.length; i++){
       sum = sum + x[i];
       console.log(sum);
    }
    return sum;
}


function printAverage(x){
    sum = 0;
    for (let index = 0; index < x.length; index++) {
        sum += x[index];
    }
    avg = sum/x.length;
    return avg;
 }

 y = printAverage([1,2,3]);
 console.log(y); // should log 2
   
 y = printAverage([2,5,8]);
 console.log(y); // should log 5



function returnOddArray(max){
    let newArray =[];
    for (let index = 1; index <= max; index++) {
        if(index%2 != 0){
            newArray.push(index);
        }
    }
    return newArray;
 }
 y = returnOddArray(255);
 console.log(y); // should log [1,3,5,...,253,255]



 //
 function squareValue(x){
    for (let index = 0; index < x.length; index++) {
        x[index] = x[index] * x[index];
    }
    return x;
 }
 y = squareValue([1,2,3]);
 console.log(y); // should log [1,4,9]
   
 y = squareValue([2,5,8]);
 console.log(y); // should log [4,25,64]













