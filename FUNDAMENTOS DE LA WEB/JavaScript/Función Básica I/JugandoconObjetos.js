var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

//¿Cómo harías print/log de la edad de John?
users.forEach(element => {
    if(element.name == "John"){
        console.log("John ",element.age);
        break;
    }
})

// ¿Cómo harías print/log del nombre del primer objeto?
console.log(users[0].name);

// ¿Cómo harías print/log del nombre y la edad de cada usuario utilizando un for loop? Tu output debería verse algo como esto
users.forEach(element => {
    console.log(element.name, " - ", element.age);
})

// ¿Cómo harías para imprimir el nombre de los mayores de edad?
users.forEach(element => {
    if( element.age >18){
    console.log(element.name, " - ", element.age);
    }
})

