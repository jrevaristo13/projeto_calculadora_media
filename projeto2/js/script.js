var form = document.getElementById('formAtividade');
var imgAprovado = `<img src="./img/aprovado.png" alt=""></img>`;
var imgReprovado = `<img src="./img/reprovado.png" alt=""></img>`;
var atividades =[];
var notas = [];
var spanAprovado = '<span class"aprovado">Aprovado</span>';
 var spanReprovado = '<span class ="reprovado">Reprovado</span></td>';
var notaMinima = parseFloat(prompt("Digite a nota Minima"));
let linhas =' ';
form.addEventListener('submit',function(e){
    e.preventDefault();
  
    adicionarLinha();
    atualizarTabela();
    atulizarMediaFinal();
});
function adicionarLinha(){
    var inputNomeAtividade = document.getElementById('nomeAtividade');
    var inputNotaAtividade = document.getElementById('notaAtividade');
    if (atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade : ${inputNomeAtividade.value} Ja foi Inserida`);
    }
    else{
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
        let linha = '<tr>'
        linha +=  `<td>${inputNomeAtividade.value} </td>`;
        linha +=  `<td>${inputNotaAtividade.value} </td>`;
        linha +=  `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado  : imgReprovado } </td>`;
        linha += `</tr>`;
        linhas += linha;
    }
        inputNomeAtividade.value = ' ';
        inputNotaAtividade.value = ' ';
       

}
 function atualizarTabela(){
    var corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
  }

function atulizarMediaFinal(){
    var mediaFinal =  calcularMediaFinal();
   
    document.getElementById("mediaValorFinal").innerHTML = mediaFinal;
    document.getElementById("mediaResultadoFinal").innerHTML = mediaFinal >+ notaMinima ? spanAprovado : spanReprovado;
     
}

function calcularMediaFinal(){
    

    let somaNota = 0;
    for (let i = 0; i < notas.length; i++) {
        somaNota += notas[i];
        
    }
    return somaNota /  notas.length; 
}


