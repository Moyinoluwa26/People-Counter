let Dexpr = document.getElementById("numbers");
let count = 0 ;

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
 let on = false;
 const Adeb = document.getElementById("ade")
  function onoff () {

        on = !on;
        if ( on = true) {
        Adeb.innerText = "Adebayo"
        }
        else{
            return 0
        }
        

    
 }