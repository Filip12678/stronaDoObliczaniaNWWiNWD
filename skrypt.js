function myFunction() {

function nwd(a, b) {
    var reszta;
    while (b) {
        reszta = a % b;
        a = b;
        b = reszta;
    }
    return a;
}

function nww(a, b) {
    return a*b/nwd(a,b);
  }

//var a = 5;
//var b = 15;
var a = prompt("Wprowadź pierwszą liczbę")
var b = prompt("Wprowadź drugą liczbę")
var wynikNww = nww(a, b);
var wynikNwd = nwd(a, b);

alert(`Najmniejsza wspólna wielokrotność (NWW) ${a} i ${b} wynosi: ${wynikNww} a największy wspólny dzielnik (NWD) wynosi: ${wynikNwd}`);
console.log(`Najmniejsza wspólna wielokrotność (NWW) tych liczb wynosi: ${wynikNww} a największy wspólny dzielnik (NWD) wynosi: ${wynikNwd}`)

}