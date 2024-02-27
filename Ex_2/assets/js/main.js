// EX 2 - PARI O DISPARI


// - far scegliere all'utente pari o disapri e un numero da 1 a 5

let el_userChoice = document.getElementById("pari_dispari"); //Selezione da parte dell'utente di pari o dispari
let el_userNumber = document.getElementById("number_user"); // dichiarazione input numero utente
const el_btnStart = document.getElementById("btn_start");	// pulsante di start dichiarato

let userChoice;
let userNumber;


//Alla pressione del pulsante Leggo i dato dagli input di html con le scelte fatte

el_btnStart.addEventListener('click', function () {

	userChoice = Number(el_userChoice.value);
	userNumber = Number(el_userNumber.value);

	console.log(typeof userChoice, userChoice);
	console.log(typeof userNumber, userNumber);

	// - generare un numero randomico da 1 a 5 dalla funzione Math
/*
	function generateRandomNumber() {

		return pcNumber
		
	}
	
	
	generateRandomNumber();
	console.log(pcNUmber);
*/


	let pcNumber = Math.round(Math.random() * 5) + 1; // genera un numero randomico da 1 a 5

	console.log(pcNumber);
	
	











})





/*




// - controllare se il numero è pari o dispari

// - dichiarare chio ha vinto


*/