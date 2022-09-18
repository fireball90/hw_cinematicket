/*
Adjunk meg egy változóban életkort, döntse-el, hogy elérte-e a 18 évet,
akkor engedjen tovább - (ha nem írja ki, hogy nem vagy 18 éves, viszlát) és adjuk meg változóban a mozijegy sorszámát, az ülés sorát és a szék számát külön majd function-nel írja vissza, a szék számát, a sor számát és a mozijegy sorszámát!
Állapítsa meg, hogy nappalis diák-e az illető (25 év alatti). Ha igen, írja ki, hogy a mozijegy ára 500 Ft, egyébként 1850 Ft.

Minden kiíratást console.log-ba kérek!
*/

"use strict"
//random az alap jegyhez
let cinemaTicket = Math.floor(Math.random() * 300)+1;
let cinemaSeat = Math.floor(Math.random() * 300)+1;
let cinemaLine =  Math.floor(Math.random() * 30)+1;


//elmúlt 18?
function getAge(){

    const age = document.getElementById("age").value;
    //console.log(age)

    if (age < 18){
        document.getElementById("popupForm").classList.add("hidden");
        document.getElementById("popupForm2").classList.remove("hidden");
    }
    else{
        closeForm()
        IsStudent(age)
    }
    
}

//25 év alatti vagy feletti
function IsStudent(age){

    let studentHTML = ""
    let otherHTML = ""

    if (age < 25) {
        studentHTML = `
        <hr>
        <p>Nappali tagozatos diák jegy ára: 500 Ft</p>
        <p>Mozijegy sorszáma: ${cinemaTicket} <br> Sor száma: ${cinemaLine} <br> Ülés száma: ${cinemaSeat}</p>
        <hr>
        `
        document.getElementById("which_price").innerHTML=studentHTML;
    }
    else{
        otherHTML = `
        <hr>
        <p>Felnőtt és egyéb jegy ára: 1850 Ft</p>
        <p>Mozijegy sorszáma: ${cinemaTicket} <br> Sor száma: ${cinemaLine} <br> Ülés száma: ${cinemaSeat}</p>
        <hr>
        `
        document.getElementById("which_price").innerHTML=otherHTML;
    }
}




//jegy ár kalkulátor
document.getElementById("calc_price").onsubmit = function PriceCalc(event){

    event.preventDefault();

    //full ár
    let others = Number(event.target.elements.normal.value);
    let students = Number(event.target.elements.student.value);
    
    let fullPrice = (others*1850) + (students*500);
    let contentLiteral = ""

    contentLiteral = `
    <h1>${fullPrice} Ft</h1>
    `
    document.getElementById("calculated").innerHTML = contentLiteral;


    //mozijegyek
    let seats = others + students;
    let ticketHTML="";

    for (let i = 0; i < seats; i++) {
        ticketHTML += `
        <p>${i+1}. Mozijegy sorszáma: ${Math.floor(Math.random() * 300)+1} | Sor száma: ${Math.floor(Math.random() * 30)+1} | Ülés száma: ${Math.floor(Math.random() * 300)+1}</p>
        ` 
    }

    document.getElementById("ticket_box").innerHTML = ticketHTML;
}


//popup kérdés
window.onload=openForm();

function openForm() {
    //document.getElementById("popupForm").style.display = "block";
    document.getElementById("popupForm").classList.remove("hidden");
    document.getElementById("container").classList.add("blur-filter");
}

function closeForm() {
    //document.getElementById("popupForm").style.display = "none";
    document.getElementById("popupForm").classList.add("hidden");
    document.getElementById("container").classList.remove("blur-filter");
}

//leave oldal
function leavePage(){
    location.href = "https://www.google.com";
}