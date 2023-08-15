let [segundos,minutos,horas] = [0,0,0];
let referenciatempo = document.querySelector('.cronometro')
let int = null;

document.getElementById('start').addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(cronometroTempo,1000);
}
);

document.getElementById('stop').addEventListener('click', ()=>{
    clearInterval(int);
}
)
;

document.getElementById('reset').addEventListener('click', ()=>{
    clearInterval(int);
    [segundos,minutos,horas] = [0,0,0];
    referenciatempo.innerHTML = '00 : 00 : 00'

}
)
;

function cronometroTempo(){
    segundos+=1;
        if(segundos == 60){
            segundos = 0;
            minutos++;
            if(minutos == 60){
                minutos = 0;
                horas++;
            }
        }

    
let h = horas < 10 ? "0" + horas : horas;
let m = minutos < 10 ? "0" + minutos : minutos;
let s = segundos < 10 ? "0" + segundos : segundos;

referenciatempo.innerHTML =`${h}h : ${m}m : ${s}s` ;

}