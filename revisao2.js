const idades = [15, 29, 35, 17, 61, 18, 33, 25, 21, 10]

const maioresIdade = idades.filter(idade => idade >= 18)

const novaDiv = document.createElement('div')
novaDiv.classList.add('caixinha')

function adicionarIdade(idade){
    const novoP = document.createElement('p')
    novoP.textContent = idade
    novaDiv.appendChild(novoP)
}

maioresIdade.map(item => adicionarIdade(item))

document.body.appendChild(novaDiv)