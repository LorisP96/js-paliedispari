// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// chiedo una parola al cliente
let userWord = prompt('dimmi una parola');

// creo un array e inserisco la parola dell'utente
let userArray = [...userWord.split('')];
// output 
let reverseArray;

for (let i = userArray.lenght - 1; i >= 0; i--) {
    reverseArray += [i];
    console.log(reverseArray)
}

// if (reverseWord === word) {
//     alert('parola palindroma')
// }



// creo la funzione
    // se la parola letta al contrario è uguale è true
// function reverseArray (array, reverse, word) {
//     let array;
//     let reverse;
//     let word;
//     for (let i = array.lenght - 1; i >= 0; i--) {
//         reverse += array;
//     }
//     if (array === word) {
//         reverseArray = true;
//     }

// }

