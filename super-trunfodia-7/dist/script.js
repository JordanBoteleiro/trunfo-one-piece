var carta1 = {
  nome: "Robin",
  
  atributos: {
    ataque: 2,
    defesa: 3,
    magia: 10
  }
};

var carta2 = {
 nome: "Zoro",
  atributos: {
    ataque: 9,
    defesa: 7,
    magia: 2
  }
};

var carta3 = {
 nome: "Chopper",
  atributos: {
    ataque: 7,
    defesa: 7,
    magia: 4
  }
};

var carta4 = {
 nome: "Franky",
  atributos: {
    ataque: 9,
    defesa: 10,
    magia: 1
  }
};


var cartas = [carta1, carta2,carta3, carta4];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3);
  cartaMaquina = cartas[numeroCartaMaquina];
  console.log(cartaMaquina);
   
  
   var numeroCartaJogador = parseInt(Math.random() * 3);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 3);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);
  
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  
  exibirOpcoes()
  
}


function exibirOpcoes(){
  var opcoes = document.getElementById("opcoes")
  var opcoesTexto = ""
  for (var atributo in cartaJogador.atributos){
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo;
    
  }
  opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado(){
  var radioAtributos = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributos.length; i ++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value
    }
  }
  
}

function jogar(){
  var atributoSelecionado = obtemAtributoSelecionado()
 var elementoResultado= document.getElementById("resultado")
 var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]
  
  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = "Você Venceu!"  
  }else if (valorCartaMaquina > valorCartaJogador){
    elementoResultado.innerHTML = "Você perdeu, a carta da maquina é maior"
  }else{
    elementoResultado.innerHTML = "Empatou"
  }
  console.log(cartaMaquina)
}