
let inputTarefa = document.getElementById('inputTarefa');
let main = document.getElementById('areaLista');
let btnAdicionar = document.getElementById('adicionar');

let contador = 0;

btnAdicionar.addEventListener("click", function(){
    //pegar o valor digitado no input
    let valorInput = inputTarefa.value;
    

    //se não for, nem nulo, nem vazio, nem indefinido
    if((valorInput !== '') && (valorInput !== null) & (valorInput !== undefined)){
        ++contador; 

        let novoItem = `<div id="${contador}" class="item"> 
        <div onclick="marcarTarefa(${contador})" class="itemIcone">
            <i id="icone_${contador}" ></i>
        </div>

        <div onclick="marcarTarefa(${contador})" class="itemNome">
            ${valorInput}
        </div>

        <div class="itemBotao">
            <button id="deletar" onclick="deletar(${contador})" ><i class="fa-sharp fa-solid fa-trash"></i></button>
        </div>
    </div>`
    
    //adionar novo item no main
    main.innerHTML += novoItem; 

    //zerar campos
    inputTarefa.value = '';
    inputTarefa.focus();

    }
});

//configurando para que a tecla enter adicione uma nova tarefa
inputTarefa.addEventListener("keyup", function(event){
    //se teclou ENTER (13)
    if(event.keyCode === 13){
        event.preventDefault();
        btnAdicionar.click();
    }
})

//configurando o deletar 
function deletar (id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    console.log(classe);

    if(classe == 'item'){
        item.classList.add('clicado');
        var icone = document.getElementById('icone_' + id);
    
        item.parentNode.appendChild(item);
    }
    else {
        item.classList.remove('clicado');
        var icone = document.getElementById('icone_' + id);
    }

}
