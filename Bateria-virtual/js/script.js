document.getElementById('bpratodeataque').addEventListener('click',function Prato() {
    var pratodeataque = new Audio('../audio/pratodeataque.mp3')
    pratodeataque.play();
});

document.getElementById('btom01').addEventListener('click',function Prato() {
    var pratodeataque = new Audio('../audio/tom01.mp3')
    pratodeataque.play();
});

document.getElementById('btom02').addEventListener('click',function Prato() {
    var pratodeataque = new Audio('../audio/tom02.mp3')
    pratodeataque.play();
});

document.getElementById('btom03').addEventListener('click',function Prato() {
    var pratodeataque = new Audio('../audio/tom03.mp3')
    pratodeataque.play();
});

document.getElementById('bcaixa').addEventListener('click',function Prato() {
    var pratodeataque = new Audio('../audio/caixa.mp3')
    pratodeataque.play();
});

document.getElementById('bbumbo').addEventListener('click',function Prato() {
    var pratodeataque = new Audio('../audio/bumbo.mp3')
    pratodeataque.play();
});
document.getElementById('bbumbo02').addEventListener('click',function Prato() {
    var pratodeataque = new Audio('../audio/bumbo.mp3')
    pratodeataque.play();
});

document.getElementById('bpratodeconducao').addEventListener('click',function Prato() {
    var pratodeataque = new Audio('../audio/pratodeconducao.mp3')
    pratodeataque.play();
});



document.getElementById('pratodeataque').addEventListener('click',function Prato() {
    var pratodeataque = new Audio('../audio/pratodeataque.mp3')
    pratodeataque.play();
});

document.getElementById('tom01').addEventListener('click',function Prato() {
    var pratodeataque = new Audio('../audio/tom01.mp3')
    pratodeataque.play();
});

document.getElementById('tom02').addEventListener('click',function Prato() {
    var pratodeataque = new Audio('../audio/tom02.mp3')
    pratodeataque.play();
});

document.getElementById('tom03').addEventListener('click',function Prato() {
    var pratodeataque = new Audio('../audio/tom03.mp3')
    pratodeataque.play();
});

document.getElementById('caixa').addEventListener('click',function Prato() {
    var pratodeataque = new Audio('../audio/caixa.mp3')
    pratodeataque.play();
});

document.getElementById('bumbo').addEventListener('click',function Prato() {
    var pratodeataque = new Audio('../audio/bumbo.mp3')
    pratodeataque.play();
});
document.getElementById('bumbo02').addEventListener('click',function Prato() {
    var pratodeataque = new Audio('../audio/bumbo.mp3')
    pratodeataque.play();
});

document.getElementById('pratodeconducao').addEventListener('click',function Prato() {
    var pratodeataque = new Audio('../audio/pratodeconducao.mp3')
    pratodeataque.play();
});


keydown = function(e){
    if(e.keyCode==69)
      document.getElementById('pratodeataque').click()
    else if(e.keyCode==70)
      document.getElementById('tom01').click()
    else if(e.keyCode==71)
      document.getElementById('tom02').click()
    else if(e.keyCode==72)
      document.getElementById('tom03').click()
    else if(e.keyCode==74)
      document.getElementById('caixa').click()
    else if(e.keyCode==75)
      document.getElementById('pratodeconducao').click()
    else if(e.keyCode==66)
      document.getElementById('bumbo').click()
    else if(e.keyCode==86)
      document.getElementById('bumbo02').click()
   }

   document.onkeydown = keydown
