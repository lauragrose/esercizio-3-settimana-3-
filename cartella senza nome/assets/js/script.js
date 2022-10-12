// prima parte 

function succo(mele, arance){
    var succoFrutta = `Succo con ${mele} mele e ${arance} arance`;
    return succoFrutta;
}
document.getElementById('corretta').innerHTML = succo(4,5);
document.getElementById('sbagliata').innerHTML = succo (6);

// seconda parte 

document.getElementById('eta').innerHTML += `${count()} anni`;

function count(){
    return 2022 - 2002;
}

// terza parte 
 

calcolaEta = (nome, aCorrente, eta1) => {
    var calcEta = `L'anno di nascita di ${nome} è ${aCorrente - eta1}`;
    return calcEta
}
document.getElementById('persona1').innerHTML = calcolaEta('Anna', 2022, 30);
document.getElementById('persona2').innerHTML = calcolaEta('Maria', 2022, 24);

// quarta parte

/* 
function torta1(numero1, numero2){
    var succoFrutta = `Torta con ${numero1} fette di mela e ${numero2} fette di arance`;
    return succoFrutta;
}
document.getElementById('torta').innerHTML = torta1(9,15);


function torta1(numero1){
    var succoFrutta1 = `Torta con ${numero1} fette di mela e`;
    return succoFrutta1;
}

 function torta2(numero2){
    var succoFrutta2 = `${numero2} fette di arance`;
    return succoFrutta2;
    }

document.getElementById('torta').innerHTML = torta1(9), torta2(15);
*/

function torta() {
    var ricetta = `Torta con ${torta2()*3} fette di mela e ${torta2()*5} fette di arancia.`;
    return ricetta;
}
function torta2() {
    var fette = 3;
    return fette;
}
document.getElementById('torta').innerHTML = torta();

// quinta parte

var btncalcola = document.getElementById('calcola');

btncalcola.addEventListener('click', function(){
    document.getElementById('totale').innerHTML += risultato()
});

function risultato() {
    let cibo = document.getElementById('cibo').valueAsNumber;
    let detersivi = document.getElementById('detersivi').valueAsNumber;
    let abiti = document.getElementById('abiti').valueAsNumber;
    var calcolo1 = ${cibo + abiti + detersivi};
    return calcolo1;
}



