var idade
var ano  = 2010
//JavaScript
console.log("Helo world") //apresentar uma mensagem
console.clear() //limpar
//variaveis
var numero1 =192 // inicializar uma variavel
console.log(numero1)

var num1 = 4
var num2 = 4
var resultado = num1 + num2
console.log(resultado)

idade = 89 // iniciar a variavel em outra parte do codigo
console.log(idade)


 ano = 1936
 

//Textos - strings
var nome = 'Matheus Araujo'
var nome2 = "Matheus Vinicius"
var nome3 = "12365.4789" // texto
console.log(nome, nome2, nome3)



console.log("olá + papai") // concatenar
console.log("Aluno" + nome + "e Aluno" + nome2 + 'tem um total de ' + nome3 + "dinheiro ") // concatenar
//  VAR // Flexivel e com menos regras (posso alterar o valor inicial de uma var e recriar a mesma em outras partes do codigo)


// LET // você não pode recriar a mesma em outras partes do codigo com o mesmo nome, mas pode chamar e alterar o valor inicial

 // CONST // você não pode recriar a mesma em outras partes do cogido e não pode alterar o valor inicial dela garantindo a confiança do dado que está sendo utilizadado no decorrer do seu codigo

 //Template String
console.log(`Aluno ${nome} e Aluno ${nome2}tem um total de ${nome3}dinheiros`) //
// Concatenar 3



// Operadores
var valor1 = 5
var valor2 = 5
console.log(valor1 + valor2)
console.log(valor1 - valor2)
console.log(valor1 * valor2)
console.log(valor1 / valor2)
console.log(valor1 ** valor2)



// Operadores relacionais
console.log(5 == 5)
console.log(5 > 5)
console.log(22 < 8)
console.log(22 >= 22)
console.log(22 != 23);
console.log('Ana' == 'ana')
console.log(true == false)
console.log(true === 'true') // boolean e a outro e txt > String
console.log(true != 'false') // true


let temcamisa = false
let temCracha = true
console.log(temcamisa)
console.log(temCracha)
console.log(temcamisa  == true && temCracha == true) // false == true = false)
console.log(temCamise == true || temCracha == true)// false ou true = true


//operador de atribuição
var x = 3
var y =2
//x = x + mmj
// x += y formato contraido
// x = 3 + 2
console.log(x)
console.log(x)

x = 720
console.log(x)

// log > para mostrar resultados, mensagens do sistema
//clear > Limpar o console e deixar disponivel para novas mensagens

console.clear()

console.log("Está tudo limpo")
console.log("olá mundo")

console.error("Não use essa tela, você poder ser punido isso")

console.warn("mas apresenta uma mensagem em amarelo")
