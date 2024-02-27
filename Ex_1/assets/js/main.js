// EX 1 - PALINDROMO





// - chiedere con un prompt all'utente di inserire una parola e salvarla in una variabile
let wordUser = prompt("inserisci una parola"); // dichiaro la variabile che ha lo stesso nome della variabile del parametro della funzione.
console.log(wordUser);

// - devo controllare se girando la parola, è uguale alla parola originale 


/**
 * Controlla che la parola inserita sia palindroma con questi passaggi: la rende tutta miniscola, la trasforma in array,
 * inverte l'ordine e la ritrasforma in stringa. Poi controll ache le due soluzioni siano identiche e ne da il risultato
 * @param {string} wordUser 
 * @returns {string}
 */
function controlWordReverse(wordUser) {

	const wordShow = wordUser

	
	wordUser = wordUser.toLowerCase();
	console.log(wordUser);
	
	let wordOriginalUser = wordUser

	// trasformo una stringa in un array dividendo i vari array con "" 
	//(niente , quindi ogni parola diventa un oggetto dell'array)
	wordUser = wordUser.split("");
	console.log(wordUser);

	//iverte l'ordine delle posizioni dell'array dall'ultima posizione alla prima
	wordUser = wordUser.reverse();
	console.log(wordUser);

	// trasformare l'array in stringa per avere la parola al contrario con i separatore "" 
	//quindi attacca tutte le lettere in un unica stringa
	// - salvare la parola al contrario in un altr variabile e metterle a confronto con un if
	const wordRev = wordUser.join("");
	console.log(wordRev);

	// - dare la risposta

	if (wordOriginalUser === wordRev) {
		return alert(`La parola ${wordShow} è palindroma`);

	}

	return alert(`La parola ${wordShow} non è palindroma`);

}

console.log(controlWordReverse(wordUser));	// richiamiamo la funzione per controllare la parola.



 
