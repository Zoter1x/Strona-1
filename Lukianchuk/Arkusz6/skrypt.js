function skrypt1(){
    var liczba1=document.getElementById("liczby").value;
    var liczba3=liczba1;
    var wynik=document.getElementById("wynik");
    var liczba2="";
    var dolny=" (2)";
    if (liczba1==0){
        wynik.innerHTML="Podaj liczbe różną od zera";
    }
    while(liczba1>0){
        liczba2=(liczba1%2)+liczba2;
        liczba1=Math.floor(liczba1/2);
    }
    var czesci=[];
    for(var i=liczba2.length;i>0;i-=4){
        var start=Math.max(i-4,0);
        czesci.unshift(liczba2.slice(start,i));
    }

    wynik.innerHTML="Liczba binarna, która wynika z "+liczba3+" to jest: "+czesci.join(" ")+dolny.sub();
}