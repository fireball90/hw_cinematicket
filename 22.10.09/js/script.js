/* Töltsünk fel véletlen szám generátorral 2 és 90 közötti egész számokkal, ötször.
Ismétlődést ne engedjünk meg!

Az algoritmus válogassa ki:
a., a páros számokat és generáljon velük egy új tömböt
b., a 3-al osztható számokat és generáljon velük egy tömböt
c., az 5-el osztható számokat, amiket csak simán írassuk ki
d., írassuk ki CSAK a 3-al és 5-tel oszthatóakat egy új tömbbe!

Hozzunk létre egy callback-et, ami meghív egy számológép functiont, ami összead 2 számot és kiírja a képernyőre
Hozzunk létre egy promise-t, ami letölt egy fájlt (akár a gyakorlaton vett fájlt) és visszatér, ha nem sikerült
Hozzunk létre intervalt, ami minden 5. másodpercen számol, pl. 0-tól felfelé */


//TÖMB FELTÖLTÉSE ISMÉTLŐDÉS NÉLKÜL
const array = []

while (array.length < 5){
    let rng = Math.floor((Math.random() * 89)+2)

    if (!array.includes(rng)){
        array.push(rng)
    }
}
console.log(array)
//A) FELADAT RÉSZ
const arrayA = []

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0){
        arrayA.push(array[i])
    }
}
console.log(arrayA)

//B) FELADAT RÉSZ
const arrayB = []

for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 == 0){
        arrayB.push(array[i])
    }
}
console.log(arrayB)

//C) FELADAT RÉSZ
for (let i = 0; i < array.length; i++) {
    if (array[i] % 5 == 0){
        console.log(array[i])
    }
}

//D) FELADAT RÉSZ
const arrayD = []

for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 == 0 && array[i] % 5 == 0){
        arrayD.push(array[i])
    } 
}
console.log(arrayD)


//callback feladat
function Write(text){
    document.getElementById('callback').innerHTML = text;
}

function Calculator(num1, num2, callback) {
    let sum = num1 + num2;
    callback(sum);
}

let rng1=Math.floor(Math.random() * 100)
let rng2=Math.floor(Math.random() * 100)

Calculator(rng1,rng2,Write)

//Promise feladat     
//test file letöltés, mert feels good 
function download(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);

    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    }
    else {
        pom.click();
    } 
}

function Write2(text){
    document.getElementById('promise').innerHTML = text;
}


let myPromise = new Promise(function(resolve, reject) {
    let req = new XMLHttpRequest();
    req.open('GET',"http://fireball90.github.io/");
    // req.open('GET',download("test.txt","test file letoltesre")) // <- ha szeretnénk saját file-t létrehozni 
    req.onload = function() {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        reject("File not Found");
      }
    };
    req.send();
});
  
myPromise.then(
    function(value) {Write2(value)},
    function(error) {Write2(error)}
);

//interval feladat (ami minden 5. másodpercen számol, pl. 0-tól felfelé )
let numbers = 0;
setInterval(() => {
    console.log(numbers)
    //document.getElementById('counting').innerHTML = number
    numbers++;  
}, 5000);