class Ninja{
    constructor(name){
        this.salud = 200;
        this.velocidad= 10;
        this.fuerza = 10;
        this.name = name;
    }

    drinkSake() {
        this.salud += 10;
        return this;
    }

}

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.sabiduria = 10;
    }

    showStats(){
        console.log(`Nombre:${this.name} , Salud: ${this.salud}, Velocidad: ${this.velocidad}, Fuerza: ${this.fuerza}`);
    }

    speakWiswom() {
        super.drinkSake();
        console.log(
          "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
        );
        return this;
      }

}

const superSensei = new Sensei("Master Splinter");
superSensei.showStats();
superSensei.speakWiswom();