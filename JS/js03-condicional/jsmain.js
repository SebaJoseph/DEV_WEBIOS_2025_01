//(nome da funcao, tempo para chama a funcao)
// window.setTimeout(mensagem, 5000)
// 6s > 6000 mil mile segundos

// FUNCTION > Ações que o codigo pode executar quando for solicitado pelo usuario no navegador
function Mensagem(){
    alert("aPRENDENDO Dom com JS")
    alert(Date(String))
    // console.log("Aprendendo DOM JS")

}



let tagH1 = document.createElement("h1")
// innerHTML > para adicionar uma informação dentro das tag do HTML
tagH1.innerHTML = 'OLá Mundo, Criei você'
// A quem ela vai pertencer
document.body.appendChild(tagH1)
