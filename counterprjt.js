let Dexpr = document.getElementById("numbers");
let count = 0 ;
const stats = {
    name: mtna.innerText,
    age: mtnb.innerText,
    Nationality :mtnc.innerText
    }
function increment() {
    
 count += 1;
 Dexpr.innerText = count;

}
let Depp = document.getElementById("welcome-El")
function save(){
    Depp.textContent +=  count + " - ";
    Dexpr.innerText = 0;
    count = 0;
}
let mtna = document.getElementById("mtn1");
let mtnb = document.getElementById("mtn2");
let mtnc = document.getElementById("mtn3");


const on = true;
function  onoff () {
    let name = "Adebayo"; 
    on = !true ;
    if ( on = !true) {
        return Dexpr.innerText= name 
    }
    else {return count}
}