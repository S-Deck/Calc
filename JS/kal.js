function kalk(){
    let tab = document.getElementsByName("op");
    var op;
    for(let i=0;i<tab.length;i++){
        if(tab[i].checked) op = tab[i].value;
    }
    let x=parseInt(document.getElementById("x").value);
    let y=parseInt(document.getElementById("y").value);
    let wyn=document.getElementById("wynik");
    if(op==1){
        wyn.value=x+y;
    }
    if(op==2){
        wyn.value=x-y;
    }
    if(op==3){
        wyn.value=x*y;
    }
    if(op==4){
        wyn.value=x/y;
    }
    if(isNaN(wyn.value)){
        wyn.value="Błąd obliczenia";
    }
    if(!isFinite(wyn.value)){
        wyn.value="Dzielenie przez 0";
    }
}