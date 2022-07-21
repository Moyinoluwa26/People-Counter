let Dexpr = document.getElementById("numbers");
let count = 0 ;
function increment() {
    
 count += 1;
 Dexpr.innerText = count;
}
let Depp = document.getElementById("welcome-El")
function save(){
    Depp.innerText += " " + count + " " + ",";
    Dexpr.innerText = 0;
    count = 0 ;
}