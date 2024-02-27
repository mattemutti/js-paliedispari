// EX 2 - PARI O DISPARI

// - far scegliere all'utente pari o disapri con un prompt




let el_userChoice = document.getElementById("pari_dispari"); //Selezione da parte dell'utente di pari o dispari
let el_userNumber = document.getElementById("number_user"); // dichiarazione input numero utente
const el_btnStart = document.getElementById("btn_start");	// pulsante di start dichiarato

let userChoice;
let userNumber;


//Alla pressione del pulsante Leggo i dato dagli input di html

el_btnStart.addEventListener('click', function () {
	
	userChoice = el_userChoice;
	userNumber  = el_userNumber;
	
	console.log(userChoice, userNumber);

})


/*
el_btnStart.addEventListener("click", function () {

	
	


})
*/



/*

if (userChoice == "pari"){
	userChoice = 0
} else{
	userChoice = 1
}
console.log(userChoice);

// - far inserire un numero da 1 a 5 con un Prompt

const numberUser = prompt('Inserisci un numero da 1 a 5:')
console.log(numberUser);

if (numberUser )

// - generare un numero randomico da 1 a 5 dalla funzione Math

const numPc = Math.round(Math.random()*5)+1;

// - controllare se il numero è pari o dispari

// - dichiarare chio ha vinto


*/