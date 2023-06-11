

//----------------------------------- Eventos e Funçoes JavaScript -----------------------------------

// Eventos JS - São funçoes e funções são trechos de codigos que so e executado quando e chamado.

const input = document.querySelector("#main-input")

function cliqueiNoButton(){
    alert("Botão clicado com sucesso!!!")
}

// outra função - motra o que foi digitado no input...

function digiteiNoInput (){
    console.log("Digitei no input!!!")
    console.log(input.value)
}

// ao clicar no botao pegar o valor do input...

//const informacaoDoInput = document.querySelector("#main-input")

function cliqueiNoButton() {
    const informacaoDoInput = document.querySelector("#main-input").value
    const criarparagrafo = document.createElement("p")
    criarparagrafo.innerHTML = informacaoDoInput
    const botao = document.querySelector(".main-button")
    document.body.insertBefore(criarparagrafo, botao)

}

