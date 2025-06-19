// gurda a localização do input
  let textoNome = document.getElementById

  // Criar funcao para mostrar a mensagem
  function mostrarMensagem(){
    // ler o texto que será digitado no input
    let recebeNome = textoNome.value
    // Apresenta a mensagem na tag H1
    let tagH1 =  document.getElementById("h1")
    tagH1.innerHTML = `olá ${recebeNome}, bem vindo ao nosso site`
  }


  //TABUADA
  let numeroTabuada =  document.getElementById("numero")
  let recebeCalculo =  document.getElementById("recebeCalculo")

  // funcao de calcular a tabuada
  function Calcular(){
    // ler o numero que será digitado no input
    let numero = numeroTabuada.value;

    //Apresentar a tabuada
    for(let i = 0; i <= 10; i++){
        recebecalculo.innerHTML += `${NUMERO} X ${I} = ${numero} <br>`
    }
    {

        // limpar o console
        function Limpar(){
            recebecalculo.innerHTML =''
            numero.addventListener('reset', (event))
        }
    }
  