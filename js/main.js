/*************** 
    CODE FIZZBUZZ
***************/

const cellContainer = document.querySelector('.container'); //dichiarazione della variabile container dove inserire le celle
//console.log('Container per le celle:', cellContainer);

/*
* Creazione del ciclo for per calcolore i numeri
* che partono da 1 e arrivano fino a 100
*/

for (let genNumber = 1; genNumber <= 100; genNumber++) { //ciclo per calcolare i numeri da 1 fino a 100
    //console.log('Numeri calcolati:', genNumber);
    
    /*
    * Creazione degli if per cambiare colore e testo
    * alle celle multiple di 3, 5 e tutti e due assieme
    */
    
    if ((genNumber%3 == 0) && (genNumber%5 == 0)) { //se numero e' multiplo di 3 E multiplo di 5 allora..
       cellContainer.innerHTML += `<div class="cell d-flex bg-danger justify-content-center align-items-center m-2">FizzBuzz</div>`
    } else if (genNumber%5 == 0) { //se numero e' multiplo di 5 allora..
        cellContainer.innerHTML += `<div class="cell d-flex bg-warning justify-content-center align-items-center m-2">Buzz</div>`
    } else if (genNumber%3 == 0) { //se numero e' multiplo di 3 allora..
        cellContainer.innerHTML += `<div class="cell d-flex bg-success justify-content-center align-items-center m-2">Fizz</div>`
    } else { //in tutti gli altri casi..
        cellContainer.innerHTML += `<div class="cell d-flex bg-info justify-content-center align-items-center m-2">${genNumber}</div>`
    }
}