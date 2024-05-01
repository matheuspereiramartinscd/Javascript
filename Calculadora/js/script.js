var primeironumero = "";
var segundonumero = "";
var operacao = "";
var resultado = "";

document.getElementById("adicao").addEventListener("click", Adicao);

function Adicao(){ 
    operacao = "adicao"
    document.getElementById("displaytext").innerHTML = " + ";
}

document.getElementById("subtracao").addEventListener("click", Subtracao);

function Subtracao(){ 
    operacao = "subtracao"
    document.getElementById("displaytext").innerHTML = " - ";
}

document.getElementById("multiplicacao").addEventListener("click", Multiplicacao);

function Multiplicacao(){ 
    operacao = "multiplicao"
    document.getElementById("displaytext").innerHTML = " x ";
}

document.getElementById("divisao").addEventListener("click", Divisao);

function Divisao(){ 
    operacao = "divisao"
    document.getElementById("displaytext").innerHTML = " / ";
}

document.getElementById("7").addEventListener("click", Sete);

function Sete(){ 
    if (operacao == "") {
        primeironumero = primeironumero + "7";
        document.getElementById("displaytext").innerHTML = primeironumero;
    }
    if (operacao != "") {
        segundonumero = segundonumero + "7";
        document.getElementById("displaytext").innerHTML = segundonumero;
    }
}

document.getElementById("8").addEventListener("click", Oito);

function Oito(){ 
    if (operacao == "") {
        primeironumero = primeironumero + "8";
        document.getElementById("displaytext").innerHTML = primeironumero;
    }
    if (operacao != "") {
        segundonumero = segundonumero + "8";
        document.getElementById("displaytext").innerHTML = segundonumero;
    }
}

document.getElementById("9").addEventListener("click", Nove);

function Nove(){ 
    if (operacao == "") {
        primeironumero = primeironumero + "9";
        document.getElementById("displaytext").innerHTML = primeironumero;
    }
    if (operacao != "") {
        segundonumero = segundonumero + "9";
        document.getElementById("displaytext").innerHTML = segundonumero;
    }
}

document.getElementById("igual").addEventListener("click", Igual);

function Igual(){ 
    if(primeironumero == "")
    { 
        document.getElementById("displaytext").innerHTML = "Digite um número"
    }
    
    else if(operacao == "")
    { 
        document.getElementById("displaytext").innerHTML = "Escolha uma operação"
    }
    else if(segundonumero == "")
    { 
        document.getElementById("displaytext").innerHTML = "Digite outro número"
    }
    else{
        resultado = eval(primeironumero) + eval(segundonumero);
        document.getElementById("displaytext").innerHTML = resultado; 
   primeironumero = "";
    segundonumero = "";
    operacao = "";
    resultado = "";
    }
}

document.getElementById("4").addEventListener("click", Quatro);

function Quatro(){ 
    if (operacao == "") {
        primeironumero = primeironumero + "4";
        document.getElementById("displaytext").innerHTML = primeironumero;
    }
    if (operacao != "") {
        segundonumero = segundonumero + "4";
        document.getElementById("displaytext").innerHTML = segundonumero;
    }
}

document.getElementById("5").addEventListener("click", Cinco);

function Cinco(){ 
    if (operacao == "") {
        primeironumero = primeironumero + "5";
        document.getElementById("displaytext").innerHTML = primeironumero;
    }
    if (operacao != "") {
        segundonumero = segundonumero + "5";
        document.getElementById("displaytext").innerHTML = segundonumero;
    }
}

document.getElementById("6").addEventListener("click", Seis);

function Seis(){ 
    if (operacao == "") {
        primeironumero = primeironumero + "6";
        document.getElementById("displaytext").innerHTML = primeironumero;
    }
    if (operacao != "") {
        segundonumero = segundonumero + "6";
        document.getElementById("displaytext").innerHTML = segundonumero;
    }
}

document.getElementById("1").addEventListener("click", Um);

function Um(){ 
    if (operacao == "") {
        primeironumero = primeironumero + "1";
        document.getElementById("displaytext").innerHTML = primeironumero;
    }
    if (operacao != "") {
        segundonumero = segundonumero + "1";
        document.getElementById("displaytext").innerHTML = segundonumero;
    }
}

document.getElementById("2").addEventListener("click", Dois);

function Dois(){ 
    if (operacao == "") {
        primeironumero = primeironumero + "2";
        document.getElementById("displaytext").innerHTML = primeironumero;
    }
    if (operacao != "") {
        segundonumero = segundonumero + "2";
        document.getElementById("displaytext").innerHTML = segundonumero;
    }
}

document.getElementById("3").addEventListener("click", Tres);

function Tres(){ 
    if (operacao == "") {
        primeironumero = primeironumero + "3";
        document.getElementById("displaytext").innerHTML = primeironumero;
    }
    if (operacao != "") {
        segundonumero = segundonumero + "3";
        document.getElementById("displaytext").innerHTML = segundonumero;
    }
}

document.getElementById("0").addEventListener("click", Zero);

function Zero(){ 
    if (operacao == "") {
        primeironumero = primeironumero + "0";
        document.getElementById("displaytext").innerHTML = primeironumero;
    }
    if (operacao != "") {
        segundonumero = segundonumero + "0";
        document.getElementById("displaytext").innerHTML = segundonumero;
    }
}



document.getElementById("limpar").addEventListener("click", Clear);

function Clear(){ 
    primeironumero = "";
    segundonumero = "";
    operacao = "";
    resultado = "";
    document.getElementById("displaytext").innerHTML = "Calculadora Javascript";
}