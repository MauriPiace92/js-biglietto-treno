// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: il prezzo del biglietto è definito in base ai km (0.21 € al km) 
// va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.

//chiedere età e km al cliente:
var kmUtente=prompt('Quanti km devi percorrere?');

var etaUtente=prompt('quanti anni hai?');

// Trasformali in numeri e non stringhe:
var kmUtenteNum= parseInt(kmUtente);

var etaUtenteNum= parseInt(etaUtente);

// Crea la tariffa base:
var prezzoBiglietto= kmUtenteNum * 0.21;
var prezzoBigliettoSconto; 
var scontoBigliettoMin= prezzoBiglietto * 0.20;
var scontoBigliettoOver= prezzoBiglietto * 0.40;

if (etaUtenteNum < 18){

    prezzoBigliettoSconto = prezzoBiglietto - scontoBigliettoMin;
    document.getElementById('total-price').innerHTML=  prezzoBiglietto.toFixed(2) + ' €';
    document.getElementById('sales-price').innerHTML= '- ' + scontoBigliettoMin.toFixed(2) + ' €';
    document.getElementById('final-price').innerHTML=  prezzoBigliettoSconto.toFixed(2) + ' €';

}else if(etaUtenteNum >= 65){

    prezzoBigliettoSconto = prezzoBiglietto - scontoBigliettoOver;

    document.getElementById('total-price').innerHTML=  prezzoBiglietto.toFixed(2) + ' €';
    document.getElementById('sales-price').innerHTML= '- ' + scontoBigliettoOver.toFixed(2) + ' €';
    document.getElementById('final-price').innerHTML=  prezzoBigliettoSconto.toFixed(2) + ' €';
}else {

    document.getElementById('total-price').innerHTML=  prezzoBiglietto.toFixed(2) + ' €';
    document.getElementById('final-price').innerHTML=  prezzoBiglietto.toFixed(2) + ' €';
}




