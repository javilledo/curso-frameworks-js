// alert('Hola Mundo');
var nombre = "Javier Lledó";
var altura = 165;

// document.write(nombre);
// document.write(altura);

var concatenacion = nombre + " " + altura;
// document.write(concatenacion);

var datos = document.getElementById("datos");
datos.innerHTML = `
    <h1>Soy la caja de datos</h1>
    <p>Mi nombre es ${nombre} y mido ${altura} cm</p>
`;

if (altura >=190){
    datos.innerHTML += "Eres una persona alta </br>"
} else {
    datos.innerHTML += "Eres una persona bajita </br>"
}

for (i = 0; i<11; i++){
    datos.innerHTML += `Estamos recorriendo el bucle haciendo su cuadrado: ${cuadrado(i)} </br>`;
}

function cuadrado(el){
    return el**2;
}

var nombres = ['Victor', 'Javi', 'Joaquín'];

for (var i in nombres){
    datos.innerHTML += nombres[i] + "</br>";
}

nombres.forEach(function(nombre){
    datos.innerHTML += nombre + "</br>";
})

nombres.forEach((nombre)=> {datos.innerHTML += nombre +  '</br>'});

//OBJETOS JSON
var coche = {
    marca: 'Mercedes',
    modelo: 'Clase A',
    velocidad: 250, 
    anyo: 2020,
    mostrarDatos(){
        console.log('Marca: ' + this.marca)
        console.log('Modelo: ' + this.modelo)
        console.log('Velocidad máxima: ' + this.velocidad + ' km/h')
        console.log('Año de fabricación: ' + this.anyo)
        console.log(this);
    }
}

coche.mostrarDatos();

var promesa = new Promise((res, req)=>{

    // let respuesta = {
    //     message: 'Todo ok!'
    // }
    let respuesta = false;

    setTimeout(()=>{

        if (respuesta){
            res(respuesta.message);
        } else {
            req('error');
        }
    },2000)

})

promesa .then((res)=>{alert(res)})
        .catch((err)=>{alert(err)})


