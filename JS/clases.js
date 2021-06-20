class Coche{
    constructor(marca, modelo, velocidad, anyo){
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.anyo = anyo;
    }

    aumentarVelocidad(){
        this.velocidad += 1;
    }
    
    reducirVelocidad(){
        this.velocidad -= 1;
    }
}

var coche1 = new Coche('BMW', 'M3', 200, 2020)

console.log(coche1)
coche1.aumentarVelocidad();

console.log(coche1)

class Autobus extends Coche{
    constructor(marca, modelo, velocidad, anyo, altura){
        super(marca, modelo, velocidad, anyo)
        this.altura = altura;
    }
}

var autobus1 = new Autobus('Pegasus', '180CV', 100, 2018, 5);
console.log(autobus1)