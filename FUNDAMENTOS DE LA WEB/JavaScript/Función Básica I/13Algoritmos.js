// Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.
let array1 = [];
function alg1(){
    for(var i=0 ; i<=255; i++){
        array1.push(i);
    }
    console.log(array1);
}
alg1();

// Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números pares del 1 al 1000 - Puedes usar un operador de módulo para este ejercicio. 
function alg2(){
    let sum = 0;
    for(var i=0; i<=1000; i++){
        if(i%2 == 0){
            sum+=i;
        }
    }
    console.log(sum);
}
alg2();

// Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999).
function alg3(){
    let sum = 0;
    for(var i=0; i<=5000; i++){
        if(i%2 != 0){
            sum+=i;
        }
    }
    console.log(sum);
}
alg3();


// Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array (ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14). 
let array3 = [1,2,5];
let array4 = [-5,2,5,12];
function alg4(array){
    let array_sum = 0;
    array.forEach(element => {
        array_sum += element;
    });
    return array_sum;
}
console.log(alg4(array3));
console.log(alg4(array4));


// Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función que devuelva el número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7). 
let array5 = [-3,3,5,7];
function alg5(array){
    let maxvalor = array[0];
    array.forEach(element => {
        if(element> maxvalor){
            maxvalor = element;
        }
    });
    console.log("mayor :",maxvalor);
}
alg5(array5);


// Encuentra el promedio (avg): Dado un array con múltiples valores, escribe una función que devuelva el promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2).
let array6 = [1,3,5,7,20];
function alg6(array){
   let sum =  alg4(array);
   let len = array.length;
   let avg =  sum/len;
   console.log("avg: ",avg);
}
alg6(array6);


// Array de impares: Escribe una función que devuelva un array de todos los números impares entre 1 y 50 (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.
function alg7(){
    let array =[];
    for(var i=0; i<=50; i++){
        if(i%2 != 0){
            array.push(i);
        }
    }
    return array;
}
console.log(alg7());

// Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y. Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7). 
let array7 = [1,3,5,7];
let valor = 3;
function alg8(array){
    let maxNum =0;
    array.forEach(element => {
        if(element >valor){
            maxNum+=1;
        }
    });
    return maxNum;
}

console.log(alg8(array7));

//Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]).
let array8 = [1,5,10,-2];
function alg9(array){
    for (let index = 0; index < array.length; index++) {
        array[index] = array[index] * array[index];
    }
    return array;
}
console.log(alg9(array8));

//Negativos: Dado un array con múltiples valores, escribe una función que reemplace cualquier número negativo dentro del array por 0. Cuando el programa esté listo, el array no debiera contener números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]).
let array9 = [1,5,10,-2];
function alg10(array){
    array.forEach(element =>{
        if(element<0){
            array[element] = 0;
        }
    })
    return array;
}
console.log("Consulta");
console.log(alg10(array9));


//Max/Min/Avg: Dado un array con múltiples valores, escribe una función que devuelva un nuevo array que solo contenga el valor mayor (max), menor (min) y promedio (avg) del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]).
let array10 = [1,5,10,-2];
function alg11(array){
    let _array = [];
    let sum = 0;
    let min = array[0];
    let max = array[0];
    array.forEach(t => {
        sum +=t;
        if(t < min){
            min = t;
        }
        if(t > max){
            max = t;
        }
    })
 
    _array[0] = max;
    _array[1] = min;
    _array[2] = sum/array.length;
    return _array;
}
console.log(alg11(array10));
//Intercambia Valores: Escribe una función que intercambie el primer y el último valor de cualquier array. La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]). 
let array11 = [1,5,10,-2];
function alg12(array){
    let temp = array[0];
    array[0] = array[array.length-1];
    array[array.length-1] = temp;
    return array
}
console.log(alg12(array11))
// De Número a String: Escribe una función que tome un array de números y reemplace cualquier valor negativo por el string ‘Dojo’. Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2].
let array12 = [-1,-3,2];
function alg13(array){
    for (let index = 0; index < array.length; index++) {
        if(array[index]<0){
            array[index] = 'Dojo';
        }
    }
    return array;
}
console.log(alg13(array12));

















