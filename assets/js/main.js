// EX 1 - PALINDROMO	


// - chiedere con un prompt all'utente di inserire una parola e salvarla in una variabile
const wordUser = "anna"; //prompt("inserisci una parola")
console.log(wordUser);

// trasformo una stringa in un array dividendo i vari array con "" 
//(niente , quindi ogni parola diventa un oggetto dell'array)
const wordArray = wordUser.split("");
console.log(wordArray);

//iverte l'ordine delle posizioni dell'array dall'ultima posizione alla prima
const wordRevArray = wordArray.reverse();
console.log(wordRevArray);

// trasformare l'array in stringa per avere la parola al contrario con i separatore "" 
//quindi attacca tutte le lettere in un unica stringa
// - salvare la parola al contrario in un altr variabile e metterle a confronto con un if
const wordRev = wordRevArray.join("");
console.log(wordRev);



// - devo controllare se girando la parola, è uguale alla parola originale 


function controlWordReverse(wordUser) {

	if (wordUser === wordRev){
		return (`La parola ${wordUser} è palindroma`)
				
	}

	return (`La parola ${wordUser} non è palindroma`)

}


console.log(controlWordReverse(wordUser));






// - dare la risposta







// EX 2 - PARI O DISPARI

// - far scegliere all'utente pari o disapri
// - far inserire un numero da 1 a 5
// - generare un numero randomico da 1 a 5 dalla funzione Math
// - controllare se il numero è pari o dispari
// - dichiarare chio ha vinto
