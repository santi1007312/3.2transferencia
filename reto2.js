// Reto 2 – Módulo de operaciones bancarias
// Diseña un sistema que permita simular las siguientes operaciones:
// • Depositar dinero, retirar dinero y consultar saldo.
// Cada operación debe estar representada por una función diferente y el saldo debe
// mantenerse actualizado entre operaciones.
// Aplica ciclos para permitir múltiples operaciones hasta que el usuario decida salir.

// Se importa prompt-sync para leer entrada del usuario desde consola
import promptSync from 'prompt-sync';
const prompt = promptSync({sigint: true});

// Se declara variable global con saldo inicial de 5000
let dinero=5000;
// Se define función que permite depositar dinero en cuenta
function depositarDinero(dineroActual){
    // Se solicita monto a depositar 
    let dineroDepo=parseFloat(prompt("Ingrese el dinero que desea depositar: "));
    // Se valida que sea número válido y mayor que 0
    if(isNaN(dineroDepo)|| dineroDepo<=0){
        // Se muestra error si valor no es válido
        console.log("\nEl dinero depositado debe ser un valor numerico mayor que 0")
        // Se retorna saldo sin cambios
        return dineroActual;
    }
    // Se confirma depósito exitoso
    console.log("Dinero depositado exitosamente")
    // Se retorna saldo actualizado sumando depósito
    return dineroActual+dineroDepo;
}
// Se define función que permite retirar dinero de cuenta
function retirarDinero(dineroActual) {
    // Se solicita monto a retirar
    let dineroRetiro=parseFloat(prompt("Ingrese el dinero que desea retirar: "));
    // Se valida que sea número válido y mayor que 0
    if(isNaN(dineroRetiro)|| dineroRetiro<=0){
        // Se muestra error si valor no es válido
        console.log("\nEl dinero retirado debe ser un valor numerico mayor que 0")
        // Se retorna saldo sin cambios
        return dineroActual;
    }
    // Se valida que retiro no exceda saldo disponible
    if(dineroRetiro>dineroActual){
        // Se muestra error si intenta retirar más de lo disponible
        console.log("\nEl dinero a retirar no debe ser mayor que el dinero actual");
        // Se retorna saldo sin cambios
        return dineroActual;
    }
    // Se confirma retiro exitoso
    console.log("Dinero retirado exitosamente")
    // Se retorna saldo actualizado restando retiro
    return dineroActual-dineroRetiro;
}

// Se define función que muestra saldo actual
function consultarDinero(dinero) {
    // Se retorna mensaje con saldo disponible
    return "\nEl total de dinero que tiene en su cuenta es de: "+dinero;
}


// Se inicia ciclo infinito para menú de opciones
while (true) {
    // Se define texto del menú con opciones disponibles
    const menu="\nEl menu es:\n1-Depositar dinero\n2-Retirar dinero\n3-Consultar dinero\n4-Salir";
    // Se muestra menú en consola
    console.log(menu);
    // Se solicita opción del menú y se convierte a entero
    let opcion=parseInt(prompt("\nIngrese la opcion del menu que desea: "));
    // Se evalúa si opción es depositar
    if(opcion==1){
        // Se ejecuta función depositar y se actualiza saldo
        dinero=depositarDinero(dinero);
    }
    // Se evalúa si opción es retirar
    else if(opcion==2){
        // Se ejecuta función retirar y se actualiza saldo
        dinero=retirarDinero(dinero);
    // Se evalúa si opción es consultar
    }else if(opcion==3){
        // Se obtiene mensaje con saldo actual
        let mensaje=consultarDinero(dinero);
        // Se imprime saldo en consola
        console.log(mensaje);
    // Se evalúa si opción es salir
    }else if(opcion==4){
        // Se rompe ciclo para terminar programa
        break;
    // Se ejecuta si opción no es válida
    }else{
        // Se muestra mensaje de error
        console.log("Ingrese una opcion valida ")
    }
}