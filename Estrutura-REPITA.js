
function acaoBotao() {
var sairLoop, valor01, valor02;
do {        
    valor01 = prompt("Digite o primeiro valor: ")
    valor02 = prompt("Digite o segundo valor: ")
    document.getElementById("parágrafo").innerText = "Resultado:" + (parseInt( valor01 ) + parseInt( valor02 ) )
    sairLoop = prompt("Deseja sair? SIM/NÃO")
    
}while (sairLoop == "NÃO"); 
}
 