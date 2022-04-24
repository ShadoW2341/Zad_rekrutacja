let imie = document.getElementById("imie")
let nazwisko = document.getElementById("nazwisko")
let pesel = document.getElementById("pesel")
let data = document.getElementById("data")

function button(){
    if(imie.value && nazwisko.value && pesel.value.length == 11){
        alert("Sukses");
    }
    else alert("error");
}

function parsepesel(id){

    let pes = document.getElementById(id).value;

    let x = new Array();
    for (i=0;i<11; i++){
      x[i] = parseInt(pes.substring(i,i+1));
    }

    let rok = 1900+x[0]*10+x[1];
    
    if (x[2]>=2 && x[2]<8)
        rok+=Math.floor(x[2]/2)*100;
    if (x[2]>=8)
        rok-=100;

    let miesiac = (x[2]%2)*10+x[3];
    if(x[2] == 2){
        miesiac.toString();
        miesiac = '0' + miesiac;
    }
    else if(x[2] == 0){
        miesiac.toString();
        miesiac = '0' + miesiac;
    }


    let dzien = x[4]*10+x[5];
    if(x[4] == 0){
        dzien.toString();
        dzien = '0' + dzien;
    }

    data.value = rok + "-" + miesiac + "-" + dzien;
}