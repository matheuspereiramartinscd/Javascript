myID00 = document.getElementById("conteudo01");

var myScrollFunc00 = function() {
  var y = window.scrollY;
  if (y >= 100) {
    myID00.className = "conteudo01 showright"
  } else {
    myID00.className = "conteudo01 hide"
  }
};


myID01 = document.getElementById("conteudo02");

var myScrollFunc01 = function() {
  var y = window.scrollY;
  if (y >= 300) {
    myID01.className = "conteudo02 showleft"
  } else {
    myID01.className = "conteudo02 hide"
  }
};

myID02 = document.getElementById("conteudo03");

var myScrollFunc02 = function() {
  var y = window.scrollY;
  if (y >= 800) {
    myID02.className = "conteudo03 showright"
  } else {
    myID02.className = "conteudo03 hide"
  }
};

myID03 = document.getElementById("conteudo04");

var myScrollFunc03 = function() {
  var y = window.scrollY;
  if (y >= 1300) {
    myID03.className = "conteudo04 showleft"
  } else {
    myID03.className = "conteudo04 hide"
  }
};

myID04 = document.getElementById("conteudo05");

var myScrollFunc04 = function() {
  var y = window.scrollY;
  if (y >= 1700) {
    myID04.className = "conteudo05 showright"
  } else {
    myID04.className = "conteudo05 hide"
  }
};

myID05 = document.getElementById("conteudo06");

var myScrollFunc05 = function() {
  var y = window.scrollY;
  if (y >= 2100) {
    myID05.className = "conteudo06 showleft"
  } else {
    myID05.className = "conteudo06 hide"
  }
};

myID06 = document.getElementById("conteudo07");

var myScrollFunc06 = function() {
  var y = window.scrollY;
  if (y >= 2400) {
    myID06.className = "conteudo07 showright"
  } else {
    myID06.className = "conteudo07 hide"
  }
};

myID07 = document.getElementById("conteudo08");

var myScrollFunc07 = function() {
  var y = window.scrollY;
  if (y >= 2800) {
    myID07.className = "conteudo08 showleft"
  } else {
    myID07.className = "conteudo08 hide"
  }
};





window.addEventListener("scroll", myScrollFunc00);
window.addEventListener("scroll", myScrollFunc01);
window.addEventListener("scroll", myScrollFunc02);
window.addEventListener("scroll", myScrollFunc03);
window.addEventListener("scroll", myScrollFunc04);
window.addEventListener("scroll", myScrollFunc05);
window.addEventListener("scroll", myScrollFunc06);
window.addEventListener("scroll", myScrollFunc07);

