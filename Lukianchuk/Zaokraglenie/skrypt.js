function zaokraglenie()
{
    var liczba=parseFloat(document.getElementById("liczba_user").value);
    var div_1=document.getElementById("round");
    var div_2=document.getElementById("floor");
    var div_3=document.getElementById("ceil");
    var div_4=document.getElementById("trunt");

    if(Number.isInteger(liczba)){
        alert("Po co to zaokrąglasz?");
        return False;
    }
    else{
        div_1.innerHTML=Math.round(liczba);
        div_2.innerHTML=Math.floor(liczba);
        div_3.innerHTML=Math.ceil(liczba);
        div_4.innerHTML=Math.trunc(liczba);
    }
}