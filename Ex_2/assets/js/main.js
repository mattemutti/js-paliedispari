// EX 2 - PARI O DISPARI

// - far scegliere all'utente pari o disapri con un prompt

let userChoice = prompt("Se scegli pari, scrivilo qui sotto, altrimenti otterrai dispari:") //Selezione da parte dell'utente di pari o dispari
console.log(userChoice);

userChoice = userChoice.toLowerCase() // trasformo il testo in minuscolo per compararlo

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
