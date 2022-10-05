// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21



// i dati 


// chiedo all'utente il nome
const userName = prompt("qual e il tuo nome?");
console.log(userName, typeof userName);

// chiedo all'utente il cognome

const userEndname = prompt("qual e il tuo cognome?");
console.log(userEndname, typeof userEndname);

// chiedo all'utente il colore
const userPcolor = prompt("qual e il tuo colore preferito?");
console.log(userPcolor, typeof userPcolor);

// elaborazione

const newUsername = userName + userEndname + userPcolor + 21
console.log(newUsername, typeof newUsername);
// fase output 

// preparazione 
const result = `Ciao il tuo username e ${newUsername}`;

// output

document.getElementById("result").innerHTML = result ;
