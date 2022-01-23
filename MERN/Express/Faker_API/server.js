const express = require("express");
const minifaker = require('minifaker');
require('minifaker/locales/es')
const app = express();
const port = 8000;


class User{
    constructor(){
        this._id = minifaker.uuid.v4()
        this.primer_nombre = minifaker.name()
        this.apellido = minifaker.name()
        this.telefono = minifaker.phoneNumber()
        this.email = minifaker.email()
        this.password = minifaker.password()
    }
}

class Bussiness {
    constructor(){
        this._id = minifaker.uuid.v4()
        this.name = minifaker.name()
        this.direccion = {
            calle: minifaker.streetName(),
            ciudad: minifaker.cityName(),
            estado : minifaker.state(),
            codigo_postal : minifaker.zipCode(),
            country: minifaker.country()
        }
    }
}

app.get("/api/users/new", (req,res) => {
    console.log("creating new account...");
    const new_user = new User();
    console.log(new_user);
    res.json(new_user);
});

app.get("/api/companies/new", (req,res) => {
    console.log("creating new bussiness...");
    const new_bussiness = new Bussiness();
    console.log(new_bussiness);
    res.json(new_bussiness);
});

app.get("/api/user/company",(req,res) => {
    console.log("creating user and bussiness...");
    const new_bussiness = new Bussiness();
    const new_user = new User();
    const usercompany = [];
    usercompany.push(new_bussiness);
    usercompany.push(new_user);
    console.log(usercompany);
    res.json(usercompany);
})

app.listen( port, () => console.log(`Listening on port: ${port}`) );