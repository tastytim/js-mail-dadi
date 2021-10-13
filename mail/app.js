const mails = ["boolean@gmail.com", "test@gmail.com", "unaltro@gmail.com"];
const controllaMail = prompt("Inserisci la tua e-mail");
let boolean = 0;



// La mia bicicletta

for(let i = 0; i < mails.length; i++){
    if(mails[i] === controllaMail){
        boolean = 1;
    }
}

if(boolean === 0){
    alert("non puoi accedere ai servizi, la tua mail non valida");
}else{
    alert("tra 3 secondi verrai reindirizzato alla pagina del tuo profilo");
}



// IL metodo includes

// if(!mails.includes(controllaMail)){
//     alert("non puoi accedere ai servizi, la tua mail non valida");
// }else{
//     alert("tra 3 secondi verrai reindirizzato alla pagina del tuo profilo");
// }
