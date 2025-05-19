function Obliczenie(){
    event.preventDefault();
    var szero=document.getElementById("szero").value;
    var dlugosc=document.getElementById("dlugosc").value;
    var pole_dom=szero*dlugosc;
    var lam=document.getElementById("laminowe").checked;
    var win=document.getElementById("winylowe").checked;
    var des=document.getElementById("deska").checked;
    var wynik=document.getElementById("wynik");
    var koszt=1;
    if(lam){
        koszt=pole_dom*12;
        wynik.innerHTML="Pole powierzchni pomieszczenia: "+pole_dom+", koszt montażu: "+koszt+" zł.";
    }
    else if(win){
        koszt=pole_dom*14;
        wynik.innerHTML="Pole powierzchni pomieszczenia: "+pole_dom+", koszt montażu: "+koszt+" zł.";
    }
    else if(des){
        koszt=pole_dom*18;
        wynik.innerHTML="Pole powierzchni pomieszczenia: "+pole_dom+", koszt montażu: "+koszt+" zł.";
    }
    else{
        wynik.innerHTML="Wprowadź poprawne dane."
    }
}