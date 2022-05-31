function getCharCount(str){
    document.getElementById("numcaracteres").innerHTML = str.length;
    document.getElementById("mayuscula").innerHTML = str.toUpperCase();
    document.getElementById("minuscula").innerHTML = str.toLowerCase();
    document.getElementById("primercaracter").innerHTML = str[0];
    document.getElementById("ultimocaracter").innerHTML = str[str.length-1];
}

function insertarfila() {
    document.getElementById("tablafila").innerHTML += `<tr>
        <td>ejemplo fila 1</td>
        <td>ejemplo fila 2</td>
    </tr>`;
}

function paroimpar(number) {
    if(parseInt(number)%2==0){
        document.getElementById("paroimpar").innerHTML = "par";
    }else{
        document.getElementById("paroimpar").innerHTML = "impar";
    }
    
}