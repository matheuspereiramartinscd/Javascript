var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
    var valortotal = document.getElementById("valortotalinput").value;
    output.innerHTML = this.value + " %";
    document.getElementById("tipamountvalue").innerHTML = "R$ " + Math.floor((valortotal / 100) * this.value);
    document.getElementById("totalbillvalue").innerHTML = "R$ " + (Math.floor((valortotal / 100) * this.value) + eval(valortotal));
  }



