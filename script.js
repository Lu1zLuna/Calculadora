var primeiroValor = parseInt(prompt("Digite o primeiro valor:"))
var segundoValor = parseInt(prompt("Digite o segundo valor:"))

var operacao = prompt("Digite 1 para fazer uma soma, 2 para subtração, 3 para multiplicação e 4 para divisão: ")

//ao escolher operação 1, a calculadora soma:
if (operacao == 1) {
  var resultado = primeiroValor + segundoValor
  document.write("<h2>" + primeiroValor + " + " +       segundoValor + " = " + resultado + "</h2>")
}
//ao escolher operação 2, a calculadora subtrai:
else if (operacao == 2) {
  var resultado = primeiroValor - segundoValor
  document.write("<h2>" + primeiroValor + " - " +       segundoValor + " = " + resultado + "</h2>")
}
//ao escolher operação 3, a calculadora multiplica:
else if(operacao == 3) {
  var resultado = primeiroValor * segundoValor
  document.write("<h2>" + primeiroValor + " * " +       segundoValor + " = " + resultado + "</h2>")
}
//ao escolher operação 4, a calculadora divide:
else if(operacao == 4) {
  var resultado = primeiroValor / segundoValor
  document.write("<h2>" + primeiroValor + " / " +       segundoValor + " = " + resultado + "</h2>")
}
//ao escolher algum algarismo maior que 4, enviar mensagem:
else {
  document.write("<h2>Opção inválida.</h2>")
}


//~~~~~~~~~~~~~~~~~~~~Revisão~~~~~~~~~~~~~~~~~~~~
//if: se
//else: senão
//else if: senão se
//escrever na tela: document.write()
//concatenação: (juntar palavra com variáveis) = ("palavra" + variável)
//= -> atribuição
//== -> comparação
//"=" é diferente de "=="