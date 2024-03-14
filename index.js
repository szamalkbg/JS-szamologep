/*const szamok = [1,2,3,4,5,6,7,8,9]
let szamgombok
for (let index = 0; index < 10; index++) {
    szamgombok += <button>szamok[index]</button>
}*/

/*const gombSzam = document.getElementsByClassName("szamok");
const gombok = ['egy', 'ketto', 'harom', 'negy', 'ot', 'hat', 'het', 'nyolc', 'kilenc', 'nulla'];
for (let index = 0; index < 10; i++) {
        const gombId = gombok[index];
        console.log(gombSzam.textContent);
}*/

gombok();

function gombok(){
    const szamgombok = document.getElementsByClassName("szamok")[0];
    console.log(szamgombok)
    let txt = "";
    let szam = 1
    for (let index = 0; index < 9; index++) {
            txt += `<button class="gombok">${szam}</button>`;
            szam += 1;
        }
    txt += `<button class="gombok">0</button>`
    szamgombok.innerHTML=txt;

    console.log(txt);
    }