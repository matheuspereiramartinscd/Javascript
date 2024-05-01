function tempoAtual(){
    let date = new Date();
    let horas = date.getHours();
    let minutos = date.getMinutes();
    let segundos = date.getSeconds();
    let ampm = "AM";
   

    if (horas == 0) {
        horas = 12;
    }
    
    if (horas > 12) {
        horas = horas -12;
        ampm="PM"
    }

    horas = (horas <10) ? "0" + horas: horas;
    minutos = (minutos <10) ? "0" + minutos: minutos;
    segundos = (segundos <10) ? "0" + segundos: segundos;

    let tempo = horas + ":" + minutos + ":" + segundos + " " + ampm;

    document.getElementById("time").innerHTML = tempo;

    var t = setTimeout(function(){ tempoAtual() }, 1000); 
    
    }

tempoAtual();