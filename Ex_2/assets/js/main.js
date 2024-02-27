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

	//console.log(typeof userChoice, userChoice);
	//console.log(typeof userNumber, userNumber);

	// - generare un numero randomico da 1 a 5 dalla funzione Math
	
		function generateRandomNumber() {
	
			let pcNumber = Math.round(Math.random() * 5) + 1; // genera un numero randomico da 1 a 5
			console.log(`numero random del pc ${pcNumber}`);
			
			return pcNumber
			
		}
		
		let pcNumber = generateRandomNumber();		
	

	// sommiamo i numeri e controlliamo se la somma è pari o dispari

	let sum = userNumber + pcNumber;
	console.log(`La somma dei numeri è: ${sum}`);

	function pariDispari(somma) {

		//console.log(somma);
		if (somma % 2 === 0) {
			return 0
		} else {
			return 1
		}
	}


	//console.log(pariDispari(sum)); // se leggo 0 il numero è pari se leggo 1 il numero è dispari


	// - controllare se il numero è pari o dispari
	// - dichiarare chi ha vinto

	if (pariDispari(sum) === 0 && userChoice === 0) {

		alert(`Hai vinto, la somma dei numeri è: ${sum}! Pari!`)
	} else {

		alert(`Hai perso, la somma dei numeri è: ${sum}! Dispari!`)
	}

})

