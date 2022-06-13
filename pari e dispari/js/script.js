// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// chiediamo pari o dispari
let userChoise1 = prompt('pari o dispari?');
let userChoise2 = parseInt(prompt('dimmi un numero'));

// applico funzione
let finalNumber = sum(userChoise2);

// applico funzione
let thisNumber = evenOrOdd(finalNumber);

let eoNumber;

// output funzione
if (!thisNumber) {
    eoNumber = 'dispari';
} else {
    eoNumber = 'pari';
}

// l'utente ha indovinato?
if (eoNumber === userChoise1) {
    alert(`complimenti hai vinto! ${finalNumber}`);
} else {
    alert(`mi dispiace, hai perso.. ${finalNumber}`);
}

// funzione numero utente + numero generato casualmente da 1 a 5
function sum(userNumber) {
    let sumNumber = 0;
    let pcNumber = parseInt(((Math.random() * 5) + 1).toFixed(0));
    console.log(pcNumber + '(numero generato casualmente)')
    sumNumber = pcNumber + userNumber;

    return sumNumber;
}

// funzione per verificare se il numero è pari o dispari
function evenOrOdd(result) {
    if (result % 2 === 0) {
        result = true;
    } else {
        result = false;
    }

    return result
}