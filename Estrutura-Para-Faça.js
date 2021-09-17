
function acaoBotao() {
var numero, fatorial;
numero = prompt("Digite o número para calcular o fatorial: ")
fatorial = 1
for (var contador = 1; contador <= numero; contador ++) {
    fatorial = fatorial * contador
}
document.getElementById("parágrafo").innerText = "O fatorial de " + numero + " é " + fatorial  
}
