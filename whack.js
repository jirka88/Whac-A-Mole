let count = 30;
let Skore = 1;
let nahoda = 0;
var cass;
let Mole;
let prvniMole = -1;
let startt = false;
var test;
function start() {
    if (!startt) {
        cass = setInterval(cas, 1000)
    }

}
function cas() {
    startt = true;
    count--;
    document.querySelector(".cas").innerHTML = "Zbývajicí čas: " + count;
    if (count === 0) {
        clearInterval(cass);
        clear();
    }
    else {
        Mole = document.getElementsByClassName("mole")[random(nahoda)];   //výběr náhodného mole 
        Mole.style.display = "block";
        Mole.style.animation = "pohyb 0.4s 1"
        Mole.style.top = "-70%";
        setTimeout(zmiz, test = Math.floor(Math.random() * (550 - 350 + 1) + 350));      //po časovém intervalu zmizí 
        console.log(test);
    }


}
function random(nahoda) {
    nahoda = Math.floor(Math.random() * 8);
    if (prvniMole === nahoda) {
        while (nahoda === prvniMole) {
            nahoda = Math.floor(Math.random() * 8);
        }

    }
    prvniMole = nahoda;
    return nahoda;
}

function clear() {
    count = 30;
    prvniMole = -1;
    Skore = 1;
    startt = false;
}
function zmiz() {
    Mole.style.animation = "PohybDolu 0.3s 1"
    Mole.style.top = "-20%";
    setTimeout(funkce, 300);
}
function funkce() {
    Mole.style.display = "none";
}
