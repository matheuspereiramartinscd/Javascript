document.getElementById("start").addEventListener("click", function Novascores(){
    var valor01 = (Math.floor(Math.random() * 255));
    var valor02 = (Math.floor(Math.random() * 255));
    var valor03 = (Math.floor(Math.random() * 255));
    document.getElementById("primeiracor").style.backgroundColor = "rgb(" + valor01 + "," + valor02 + "," + valor03 + ")";

    var valor04 = (Math.floor(Math.random() * 255));
    var valor05 = (Math.floor(Math.random() * 255));
    var valor06  = (Math.floor(Math.random() * 255));
    document.getElementById("segundacor").style.backgroundColor = "rgb(" + valor04 + "," + valor05 + "," + valor06 + ")";

    var valor07 = (Math.floor(Math.random() * 255));
    var valor08 = (Math.floor(Math.random() * 255));
    var valor09  = (Math.floor(Math.random() * 255));
    document.getElementById("terceiracor").style.backgroundColor = "rgb(" + valor07 + "," + valor08 + "," + valor09 + ")";

    var valor10 = (Math.floor(Math.random() * 255));
    var valor11 = (Math.floor(Math.random() * 255));
    var valor12  = (Math.floor(Math.random() * 255));
    document.getElementById("quartacor").style.backgroundColor = "rgb(" + valor10 + "," + valor11 + "," + valor12 + ")";

    var valor13 = (Math.floor(Math.random() * 255));
    var valor14 = (Math.floor(Math.random() * 255));
    var valor15  = (Math.floor(Math.random() * 255));
    document.getElementById("quintacor").style.backgroundColor = "rgb(" + valor13 + "," + valor14 + "," + valor15 + ")";

    var valor16 = (Math.floor(Math.random() * 255));
    var valor17 = (Math.floor(Math.random() * 255));
    var valor18  = (Math.floor(Math.random() * 255));
    document.getElementById("sextacor").style.backgroundColor = "rgb(" + valor16 + "," + valor17 + "," + valor18 + ")";
})

document.getElementById("start").addEventListener("click", function Rgb(){
    document.getElementById("rgb").style.color = "white";
    var rgbguess = (Math.floor(Math.random() * 6));
    if(rgbguess <= 0){
        document.getElementById("rgb").innerHTML = document.getElementById("primeiracor").style.backgroundColor
    }
    else if(rgbguess == 1){
        document.getElementById("rgb").innerHTML = document.getElementById("segundacor").style.backgroundColor
    }
    else if(rgbguess == 2){
        document.getElementById("rgb").innerHTML = document.getElementById("terceiracor").style.backgroundColor
    }
    else if(rgbguess == 3){
        document.getElementById("rgb").innerHTML = document.getElementById("quartacor").style.backgroundColor
    }
    else if(rgbguess == 4){
        document.getElementById("rgb").innerHTML = document.getElementById("quintacor").style.backgroundColor
    }
    else if(rgbguess == 5){
        document.getElementById("rgb").innerHTML = document.getElementById("sexta").style.backgroundColor
    }

}
)


document.getElementById("primeiracor").addEventListener("click", function Corescolhida(){
    var corescolhida = this.style.backgroundColor;
    var corrgb = document.getElementById("rgb").innerHTML;
    if(corescolhida == corrgb){
        document.getElementById("rgb").style.color = "#36E03A";
        document.getElementById("rgb").innerHTML = "Você acertou! Parabéns";
    }
    else{
        document.getElementById("rgb").style.color = "#FF1A0D";
        document.getElementById("rgb").innerHTML = "Você errou! Tente novamnete..."
    }
}
)

document.getElementById("segundacor").addEventListener("click", function Corescolhida(){
    var corescolhida = this.style.backgroundColor;
    var corrgb = document.getElementById("rgb").innerHTML;
    if(corescolhida == corrgb){
        document.getElementById("rgb").style.color = "#36E03A";
        document.getElementById("rgb").innerHTML = "Você acertou! Parabéns";
    }
    else{
        document.getElementById("rgb").style.color = "#FF1A0D";
        document.getElementById("rgb").innerHTML = "Você errou! Tente novamnete..."
    }
}
)

document.getElementById("terceiracor").addEventListener("click", function Corescolhida(){
    var corescolhida = this.style.backgroundColor;
    var corrgb = document.getElementById("rgb").innerHTML;
    if(corescolhida == corrgb){
        document.getElementById("rgb").style.color = "#36E03A";
        document.getElementById("rgb").innerHTML = "Você acertou! Parabéns";
    }
    else{
        document.getElementById("rgb").style.color = "#FF1A0D";
        document.getElementById("rgb").innerHTML = "Você errou! Tente novamnete..."
    }
}
)

document.getElementById("quartacor").addEventListener("click", function Corescolhida(){
    var corescolhida = this.style.backgroundColor;
    var corrgb = document.getElementById("rgb").innerHTML;
    if(corescolhida == corrgb){
        document.getElementById("rgb").style.color = "#36E03A";
        document.getElementById("rgb").innerHTML = "Você acertou! Parabéns";
    }
    else{
        document.getElementById("rgb").style.color = "#FF1A0D";
        document.getElementById("rgb").innerHTML = "Você errou! Tente novamnete..."
    }
}
)

document.getElementById("quintacor").addEventListener("click", function Corescolhida(){
    var corescolhida = this.style.backgroundColor;
    var corrgb = document.getElementById("rgb").innerHTML;
    if(corescolhida == corrgb){
        document.getElementById("rgb").style.color = "#36E03A";
        document.getElementById("rgb").innerHTML = "Você acertou! Parabéns";
    }
    else{
        document.getElementById("rgb").style.color = "#FF1A0D";
        document.getElementById("rgb").innerHTML = "Você errou! Tente novamnete..."
    }
}
)

document.getElementById("sextacor").addEventListener("click", function Corescolhida(){
    var corescolhida = this.style.backgroundColor;
    var corrgb = document.getElementById("rgb").innerHTML;
    if(corescolhida == corrgb){
        document.getElementById("rgb").style.color = "#36E03A";
        document.getElementById("rgb").innerHTML = "Você acertou! Parabéns";
    }
    else{
        document.getElementById("rgb").style.color = "#FF1A0D";
        document.getElementById("rgb").innerHTML = "Você errou! Tente novamnete..."
    }
}
)


