/*var nome = "Guilherme"
let idade = 37
const anoNascimento = 1986
let idadeEsposa = "37"
/*
= atribuição
== comparar se é igual
=== comparar se é exatamente igual

let nume= 98
const pi  = 3.14

const titulo = document.getElementById("conteiner")



if (idade === idadeEsposa) {
    console.log("igual")
}else {
    console.log("Diferente.....")
}


let num = 7;


//Array
/*Acessamos o array fazendo referencia ao index

let lista = [1,2,3,4,5,6]

for (let index = 0; index < lista.length; index++) {
    const element = lista[index];

    console.log(element)
    
}



console.log(idade === idadeEsposa);
let listaCompras = []
listaCompras.push("Maça")


console.log(listaCompras.length)
console.log(listaCompras)*/

const titulo = document.getElementById("titulo")
const nomeInput = document.getElementById("nome")
const EmailInput = document.getElementById("Email")
const PhoneInput = document.getElementById("Phone")



const resultado = document.getElementById("resultado")
const resultado1 = document.getElementById("resultado1")
const resultado2 = document.getElementById("resultado2")

console.log(titulo.textContent)

titulo.textContent = "Senai Cotia 2023"

function salvar(){

    resultado.textContent = nomeInput.value
    resultado1.textContent = EmailInput.value
    resultado2.textContent = PhoneInput.value
    


}