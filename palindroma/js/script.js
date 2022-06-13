// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// chiedo una parola al cliente
let userWord = prompt('dimmi una parola');

// output 
let reversed = reverseWord(userWord);

console.log(reversed);

if (userWord === reversed) {
    alert('parola palindroma');
} else {
    alert('parola non palindroma');
}

// funzione riutilizzabile
function reverseWord(word) {
    let reverseWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i];
    }
    return reverseWord;
}

