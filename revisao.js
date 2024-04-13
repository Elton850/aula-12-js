const listaFrutas = ["Maça","Banana", "Uva", "Melancia", "Abacaxi"]

const lista = document.createElement('ul')

document.body.appendChild(lista)

function criar_fruta(nome_fruta){
    const listaElemento = document.createElement('li')
    if(nome_fruta.toLowerCase() !== "banana"){
        listaElemento.textContent = nome_fruta
        listaElemento.classList.add('lista-item')
        lista.appendChild(listaElemento)
    }
}

listaFrutas.forEach(fruta => criar_fruta(fruta))