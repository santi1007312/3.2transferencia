// Reto 5 – Reto creativo
// Propón y desarrolla un programa propio donde apliques los conceptos de:
// • Funciones tradicionales y funciones flecha.
// • Parámetros y argumentos.
// • Retorno de valores.
// • Modularización y buenas prácticas.
// El proyecto puede ser un mini-sistema (calculadora, registro de estudiantes, agenda,
// simulador, etc.), siempre que esté estructurado mediante funciones y demuestre la
// comprensión de todos los temas de la guía.

// Se importa prompt-sync para leer entrada del usuario desde consola
import promptSync from 'prompt-sync';
const prompt = promptSync({sigint: true});

// Se define función flecha que solicita número y valida entrada
const pedirNumero = (mensaje) => {
    // Se declara variable para almacenar número
    let num;
    // Se inicia ciclo de validación
    while (true) {
        // Se solicita número con mensaje personalizado
        num = parseFloat(prompt(mensaje));
        // Se verifica si entrada es número válido
        if (!isNaN(num)) {
            // Se retorna número válido
            return num;
        }
        // Se muestra mensaje de error si entrada no es válida
        console.log("Ingrese un valor numérico válido");
    }
};

// Se define función que muestra menú de opciones
function menu() {
    // Se imprime título de calculadora
    console.log("\nBienvenido a tu calculadora\n\n");
    // Se muestran opciones disponibles del menú
    console.log("Este es tu menu: \n1-Sumar\n2-Restar\n3-Multiplicar\n4-Dividir\n5-Calcular exponente\n6-Salir");
}

// Se define función que realiza suma de múltiples números
function suma(cant) {
    // Se inicializa variable acumuladora en cero
    let valOpe=0;
    // Se itera según cantidad de números a sumar
    for (let i = 1; i <=cant; i++) {
        // Se solicita cada número de la operación
        let num=pedirNumero(`Ingrese el ${i} numero: `);
        // Se acumula número en total
        valOpe+=num;
        
    }
    // Se retorna resultado de suma
    return valOpe;
}

// Se define función flecha que realiza resta de múltiples números
const resta=(cant) =>{
    // Se solicita primer número como base para restar
    let resultado = pedirNumero(`Ingrese el 1 número: `);
    // Se itera desde segundo número hasta cantidad indicada
    for (let j = 2; j <=cant; j++) {
        // Se solicita siguiente número
        let num=pedirNumero(`Ingrese el ${j} numero: `);
        // Se resta número del resultado acumulado
        resultado-=num;
        
    }
    // Se retorna resultado de resta
    return resultado;
}

// Se define función que realiza multiplicación de múltiples números
function multi(cant) {
    // Se solicita primer número como base para multiplicar
    let resultado = pedirNumero(`Ingrese el 1 número: `);
    // Se itera desde segundo número hasta cantidad indicada
    for (let h = 2; h <=cant; h++) {
        // Se solicita siguiente número
        let num=pedirNumero(`Ingrese el ${h} numero: `);
        // Se multiplica número con resultado acumulado
        resultado*=num;
       
    }
    // Se retorna resultado de multiplicación
    return resultado;
}
  
// Se define función que realiza división entre dos números
function div(num1,num2) {
    // Se valida que divisor no sea cero
    if(num2===0){
        // Se retorna mensaje de error si intenta dividir por cero
        return "No se puede dividir por cero";
    }
    // Se calcula división entre los dos números
    let resultDiv=num1/num2;
    // Se retorna resultado de división
    return resultDiv;
}

// Se define función que calcula potencia de un número
function potencia(num1,num2) {
    // Se calcula número elevado a exponente usando operador **
    return num1**num2;
}

// Se define función principal que controla flujo de calculadora
function calculadora() {
    // Se inicia ciclo infinito para mantener calculadora activa
    while(true){
        // Se muestra menú de opciones
        menu();
        // Se solicita opción del menú al usuario
        let opcion=pedirNumero("\nIngrese la opcion que desea realizar: ");
        // Se evalúa si opción está entre 1 y 3 (suma, resta, multiplicación)
        if(opcion>=1 && opcion<=3){
            // Se solicita cantidad de números para la operación
            let cant=pedirNumero("Ingrese la cantidad de numeros que agregara a la operacion: ");
            // Se evalúa si opción es suma
            if(opcion==1){
                // Se ejecuta función suma y se guarda resultado
                let operacion=suma(cant);
                // Se muestra resultado de suma
                console.log(`El resultado de la operacion es de: ${operacion}`);
            // Se evalúa si opción es resta
            }else if(opcion==2){
                // Se ejecuta función resta y se guarda resultado
                let operacion=resta(cant);
                // Se muestra resultado de resta
                console.log(`El resultado de la operacion es de: ${operacion}`);
            // Se evalúa si opción es multiplicación
            }else if(opcion==3){
                // Se ejecuta función multiplicación y se guarda resultado
                let operacion=multi(cant);
                // Se muestra resultado de multiplicación
                console.log(`El resultado de la operacion es de: ${operacion}`);
            }
            
        }
        // Se evalúa si opción es división
        else if(opcion==4){
            // Se solicita dividendo
            let numero1=pedirNumero("Ingrese el dividendo: ");
            // Se solicita divisor
            let numero2=pedirNumero("Ingrese el divisor: ");
            // Se calcula división
            let calcDivision=div(numero1,numero2);
            // Se muestra resultado de división
            console.log(`El resultado es: ${calcDivision}`)
        }
        // Se evalúa si opción es potencia
        else if(opcion==5){
            // Se solicita número base
            let entero=pedirNumero("Ingrese el numero entero: ");
            // Se solicita exponente
            let exponente=pedirNumero("Ingrese el valor del exponente: ");
            // Se calcula potencia
            let resultado=potencia(entero,exponente);
            // Se muestra resultado de potencia
            console.log("El resultado del numero "+entero+" elevado a la "+ exponente+ " es: "+ resultado)
        // Se evalúa si opción es salir
        }else if(opcion==6){
            // Se muestra mensaje de despedida
            console.log("Saliendo de la calculadora...");
            // Se rompe ciclo para terminar programa
            break;
        // Se ejecuta si opción no es válida
        }else{
            // Se muestra mensaje de error
            console.log("\nIngrese una opcion valida.")
            
        }
    }
}

// Se ejecuta función calculadora para iniciar programa
calculadora();