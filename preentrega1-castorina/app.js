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

function comprarProductos(){
    productos = prompt(
        "Elija uno de nuestros productos: \n 1: Tabla de fiambre chica \n 2: Tabla de fiambre mediana \n 3: Tabla de fiambre grande"
    );
    if (productos === "1"){
        alert("La tabla de fiambres chica es para 2 a 3 personas y tiene un monto final de " + tablaChica * 1.21)
    }
    if (productos === "2"){
        alert("La tabla de fiambres mediana es para 4 a 6 personas y tiene un monto final de " + tablaMediana * 1.21)
    }
    if (productos === "3"){
        alert("La tabla de fiambres grande es para 8 a 10 personas y tiene un monto final de " + tablaGrande * 1.21)
    }
}

function trabajaConNosotros(){
    alert("Para trabajar con nosotros, podes enviarnos tu CV, en formato PDF, a nuestro WhatsApp: 11-5949-9268 o acercarlo presencial a nuestro local ubicado en: Los Andes 1210, Ingeniero Maschwitz")
}

function preguntasFrecuentes(){
    alert("En nuestra página tenemos una opción de Preguntas Frecuentes. Te invitamos a conocerla: www.peppesmaschwitz.com/preguntasfrecuentes")
}

/*Variables Globales*/
let productos;
bienvenidos();
let tablaChica = 5000;
let tablaMediana = 6000;
let tablaGrande = 7000;
let opcion = prompt("Ingrese la opción deseada: \n 1: Comprar productos \n 2: Trabajar con nosotros \n 3: Preguntas frecuentes \n 4: Terminar")

/*Bucle*/
while(opcion !=="4"){
    if (opcion === "1"){
        comprarProductos()
        opcion = "4"
    }
    if (opcion === "2"){
        trabajaConNosotros()
        opcion = "4"
    }
    if (opcion === "3"){
        preguntasFrecuentes()
        opcion = "4"
    }
}

alert("Gracias por elegirnos! Te invitamos a seguirnos en nuestro Instagram: @peppesmaschwitz")