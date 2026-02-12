
export function esPar(numero) {
    return numero % 2 === 0;
}

export function esPositivo(numero) {
    return numero >= 0;
}

export function esPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) return false;
    }
    return true;
}
