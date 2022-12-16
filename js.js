var i = 0
var num = localStorage.getItem("qtaTafs")

if (Number.isInteger(parseInt(num))){
    i = parseInt(localStorage.getItem("qtaTafs"))
}else{
    
    i = 0
}

function AdicionaTarefa(){
    
    var tarefa = document.getElementById('txtTarefa').value
    erroMsg.innerText = ''

    if (tarefa == ''){
        erroMsg.innerText = "Não deixe o campo em branco, digite algo"
    }
    else{
        i += 1
        let res = '<div id= "'+ 'taf'+ i +'" style = "background-color:rgb(230 230 230 / 78%); display: flex; flex-direction: row; padding:10px;border-radius:10px; margin:5px; justify-content: space-between;">'+ tarefa + '<section>' +'<input type="button" id = "'+ i +'" class="btnCumprir" value="Cumprida"style = "margin-right:5px;" onclick = "tarefaCumprida(this.id)">' + '<input type="button" id = "'+ i +'" class="btnDel" value="deletar tarefa" onclick="deletarTarefa(this.id)">' + '</section>' + '</div>'
        localStorage.setItem('taf' + i,res)
        localStorage.setItem('qtaTafs', i)
        console.log(i)
        atualizarTarefas()
    }
}

function deletarTarefa(numero){
    let taf = document.getElementById("taf" + numero)

    localStorage.removeItem("taf" + numero)
    atualizarTarefas()
}

function tarefaCumprida(numero){
    let taf = document.getElementById("taf" + numero)
    let res = localStorage.getItem("taf" + numero)

    let mod = res.replace("rgb(230 230 230 / 78%)",'rgb(103 255 0 / 78%)')

    localStorage.setItem("taf" + numero, mod)

    atualizarTarefas()
    
}

function atualizarTarefas(){

    geral.innerHTML = ''

    let nextValue;
    for (let y = 0; y < localStorage.length; y++){
        let res = nextValue = localStorage.getItem(localStorage.key(y));

        if (res.includes("div")){
            geral.innerHTML += res
        }
    }

}