function bienvenidos() { 
    let nombre, edad;   
    nombre = prompt ('Por favor introduce tu nombre:');    
    if (nombre =="") { alert ('No has introducido ningún nombre'); }
    else {
        alert ('Hola '+nombre + '. Bienvenido a la tienda online de Peppes Maschwitz'); 
    }
        while (nombre ==""){
            nombre = prompt ("Vuelve a introducir tu nombre")
        }
    edad = prompt ('¿Cuál es tu edad?');   
    edad = Number(edad);
    if (edad => 18){
        alert ("Eres mayor de edad. Continuemos!")
    }
        while (edad <= 17){
                alert("Para continuar, debes ser mayor de edad.")
                edad = prompt ("Ingrese edad nuevamente")
        }
}

function Productos (nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}

let producto = [
    {nombre: "Aceite 10 40 Valvolin", precio: "2500"},
    {nombre: "Aceite 10 40 Motul", precio: "3500"},
    {nombre: "Aceite 10 40 Elaion", precio: "2800"},
    {nombre: "Agua Destilada", precio: "800"},
]

function agregarAlCarrito(){
    const producto2 = new Productos (nombre, precio)
    const producto3 = new Productos (nombre, precio)
    arrayCarrito.push(producto2)
    arrayCarrito.push(producto3)
    alert("Producto añadido al carrito")
}

function carrito(){
    arrayCarrito.forEach((elemento) =>{
        console.log (`Usted eligio ${elemento.nombre} por un valor de ${elemento.precio}`)
    })
}

function valores(){
    const valor = producto.filter ((aceite) => aceite.precio < 3000) 
}



function trabajaConNosotros(){
    alert("Para trabajar con nosotros, podes enviarnos tu CV, en formato PDF, a nuestro WhatsApp: 11-5949-9268 o acercarlo presencial a nuestro local ubicado en: Los Andes 1210, Ingeniero Maschwitz")
}

function preguntasFrecuentes(){
    alert("En nuestra página tenemos una opción de Preguntas Frecuentes. Te invitamos a conocerla: www.peppesmaschwitz.com/preguntasfrecuentes")
}

/*Variables Globales*/

bienvenidos();
let arrayCarrito = []

let opcion = prompt ("Ingrese una opción: \n 1: Cargar productos \n 2: Ver carrito \n 3: Filtro de precios \n 4: Trabaja con Nosotros \n 5: Preguntas Frecuentes \n 6: Salir")

/*Bucle*/
while(opcion !=="6"){
    if (opcion === "1"){
        agregarAlCarrito(arrayCarrito)
    }
    if (opcion === "2"){
        carrito(arrayCarrito)
    }
    if (opcion === "3"){
        valores()
    }
    if (opcion === "4"){
        trabajaConNosotros()
        opcion = "6"
    }
    if (opcion === "5"){
        preguntasFrecuentes()
        opcion = "6"
    }
}

alert("Gracias por elegirnos! Te invitamos a seguirnos en nuestro Instagram: @peppesmaschwitz")