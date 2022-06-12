const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.", 
  "Não conte com isso.", 
  "Sem dúvidas!", 
  "Pergunte novamente mais tarde.", 
  "Sim, definitivamente!", 
  "Minha resposta é não.", 
  "Você pode contar com isso.", 
  "Melhor não te dizer agora.", 
  "Ao meu ver, sim.",
  "Minhas fontes dizem não.", 
  "Provavelmente.", 
  "Naõ é possivel prever agora.", 
  "Perspectiva boa.", 
  "As perspectivas não são tão boas.", 
  "Sim.", 
  "Concentre-se e pergunte novamente.", 
  "Sinais apontam que sim.",
]
const elementoResposta = document.querySelector(".resposta")
const inputPergunta = document.querySelector(".inputPergunta")
const buttonPergunta = document.querySelector(".perguntar")

function fazerPergunta() {

  if(inputPergunta.value == "") {
    alert("Digite alguma pergunta")
    return
  }

  buttonPergunta.setAttribute("disabled", true)

  const pergunta = "<div class='pergunta'>" + inputPergunta.value + "</div>"
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]
  elementoResposta.style.opacity = 1;
  setTimeout(function() {
    elementoResposta.style.opacity = 0;
    buttonPergunta.removeAttribute("disabled");
  }, 3000)
}