function Obliczenie()
{
    var miasto=document.getElementById("wybor").value;
    var raty=document.getElementById("liczba").value;
    var java=document.getElementById("java").checked;
    var react=document.getElementById("react").checked;
    var tekst=document.getElementById("wynik");
    var wartosc=0;
    var rata=0;
    if(raty==0){
        tekst.innerHTML="Nie uczymy innych za bezpłatnie!";
    }
    else if(react==false&&java==false){
    tekst.innerHTML="Nie zaznaczono żadnego kursu!";}
    else if(react==true&&java==false){
        wartosc=5000;
        rata=wartosc/raty;
        tekst.innerHTML="Kurs odbędzie się w "+miasto+". Koszt całkowity: "+wartosc+" zł. Płacisz "+raty+" rat po "+rata+" zł";
    }
    else if(react==true&&java==true){
        wartosc=8000;
        rata=wartosc/raty;
        tekst.innerHTML="Kurs odbędzie się w "+miasto+". Koszt całkowity: "+wartosc+" zł. Płacisz "+raty+" rat po "+rata+" zł";
    }
    else if(react==false&&java==true){
        wartosc=3000;
        rata=wartosc/raty;
        tekst.innerHTML="Kurs odbędzie się w "+miasto+". Koszt całkowity: "+wartosc+" zł. Płacisz "+raty+" rat po "+rata+" zł";
    }
}