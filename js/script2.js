/*
Adjunk meg egy változóban életkort, döntse-el, hogy elérte-e a 18 évet,
akkor engedjen tovább - (ha nem írja ki, hogy nem vagy 18 éves, viszlát) és adjuk meg változóban a mozijegy sorszámát, az ülés sorát és a szék számát külön majd function-nel írja vissza, a szék számát, a sor számát és a mozijegy sorszámát!
Állapítsa meg, hogy nappalis diák-e az illető (25 év alatti). Ha igen, írja ki, hogy a mozijegy ára 500 Ft, egyébként 1850 Ft.

Minden kiíratást console.log-ba kérek!
*/


//console.log megoldás

//kor bekérés
let age = prompt("Adja meg az életkorát:");

if (age < 18){
    console.log("18 év alatti személy nem nézheti meg a filmet. Viszlát!")
}
else{
    //Bekérés ha szükséges
    /*let ticketNumber = prompt("Adja meg a mozijegy sorszámát:"); 
    let seatLine = prompt("Adja meg az ülés sorát:");
    let chairNumber = prompt("Adja meg a szék számát:");*/
    
    //saját számok
    let ticketNumber = 11; 
    let lineNumber = 9;
    let chairNumber = 22;
    
    ShowTicket(chairNumber,lineNumber,ticketNumber);
    StudentCalc(age);
}

//funkció a kiírásra
function ShowTicket(ticket,line,chair){
    console.log("Szék szám: " + chair)
    console.log("Sor száma: " + line)
    console.log("Mozijegy sorszáma: " + ticket)
}

//diák-e
function StudentCalc(age){
    if (age < 25){
        console.log("Diák mozijegy ára 500 Ft.")
    }
    else
    {
        console.log("Felnőtt mozijegy ára 1850 Ft.")
    }
}
