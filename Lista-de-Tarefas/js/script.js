document.getElementById("adicionartarefa").addEventListener("click", function AdicionarTarefa(){
    var tarefaadicionada = document.getElementById("tarefas").value;
    document.getElementById("listadetarefas").innerHTML += `<div class="tarefadiv"> <input type="checkbox" name="" id=""> ` + tarefaadicionada + `</div>` + "";
    
})

document.getElementById("removertarefa").addEventListener("click", function RemoverTarefa(){
    var tarefaadicionada = document.getElementById("tarefas").value;
    document.getElementById("listadetarefas").innerHTML = ``;
    
})