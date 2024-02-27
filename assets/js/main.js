// EX 1 - PALINDROMO	


// - chiedere con un prompt all'utente di inserire una parola e salvarla in una variabile
const wordUser = "fragile"; //prompt("inserisci una parola")
console.log(wordUser);

// trasformo una stringa in un array dividendo i vari array con "" 
//(niente , quindi ogni parola diventa un oggetto dell'array)
const wordArray = wordUser.split("") 
console.log(wordArray);

//iverte l'ordine delle posizioni dell'array dall'ultima posizione alla prima
const wordRev = wordArray.reverse() 
console.log(wordArray);

// trasformare l'array in stringa per avere la parola al contrario 



// - anzi devo controllare se gurando la parola, è uguale alla parola originale 
// - salvare la parola al contrario in un altr variabile e metterle a confronto con un if
// - dare la risposta







// EX 2 - PARI O DISPARI

// - far scegliere all'utente pari o disapri
// - far inserire un numero da 1 a 5
// - generare un numero randomico da 1 a 5 dalla funzione Math
// - controllare se il numero è pari o dispari
// - dichiarare chio ha vinto
