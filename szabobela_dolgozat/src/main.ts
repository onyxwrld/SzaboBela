import './style.css'
import { Artwork } from './Artowrk';
import { Statue } from './Statue';

const artworks: Artwork[] = [];
let hiba: string[]=[];

document.addEventListener('DOMContentLoaded',() => {
    document.getElementById('buttonSubmit')!.addEventListener('click',feltolt);
});

function feltolt()
{
    check();
    const kiirCount = document.getElementById('countID');
    const kiirAr = document.getElementById('arID');
    kiirCount!.textContent = `a művekdarabszáma: `+artworks.length;
    let kiirAr1 = 0;
    for (const iterator of artworks) {
        kiirAr1+=iterator.price;
    }
    kiirAr!.textContent = ` A művek összesitett ára: `+kiirAr1 + ` Ft`;

}
function check()
{
    document.getElementById('hibaID')!.innerHTML=``;
    let checkPass = 0;
    hiba = [];
    const nev = (document.getElementById('nameID')! as HTMLInputElement).value;
    const ev =  parseInt((document.getElementById('yearID')! as HTMLInputElement).value);
    const ar =  parseInt((document.getElementById('priceID')! as HTMLInputElement).value);
    const magassag =  parseInt((document.getElementById('heightID')! as HTMLInputElement).value);
    const nevTest = /^[A-Za-z, ]+$/;
    console.log(nevTest.test(nev));
    if(nev.trim().length > 0 && nevTest.test(nev))
    {
        console.log('OK');
        checkPass++;
    }
    else{
        hiba.push('Hibás név:' + nev); 
    }
    if(ev < 2023)
    {
        console.log('OK');
        checkPass++;

    }
    else{
        hiba.push('Hibás év: '+ev); 
    }
    if (ar >= 5)
    {
        console.log('OK');
        checkPass++;

    }
    else {
        hiba.push('Hibás ár: '+ar + ' Ft'); 
    }
    if (magassag >= 15)
    {
        console.log('OK');
        checkPass++;
        
    }
    else {
        hiba.push('Hibás magasság: '+magassag+' cm');          
    }
    if(checkPass==4)
    {
        artworks.push(new Statue(nev,ev,ar,magassag));
        (document.getElementById('nameID') as HTMLInputElement).value ='';
        (document.getElementById('yearID') as HTMLInputElement).value ='';
        (document.getElementById('priceID') as HTMLInputElement).value ='';
        (document.getElementById('heightID') as HTMLInputElement).value ='';
        const body = document.getElementById('hibaID')!.innerHTML=`Sikeres feltöltés`;
        checkPass = 0;
    }
    else{
        const body = document.getElementById('hibaID');
        for (const iterator of hiba) {
            body!.innerHTML += `<li> ${iterator} </li>`
        }
    }
}