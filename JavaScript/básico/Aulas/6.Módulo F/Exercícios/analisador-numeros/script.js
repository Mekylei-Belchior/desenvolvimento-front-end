// Variáveis globais
var numeros = []

var sectionTag = document.getElementById('section')
var divResultado = document.createElement('div')
var tagP = document.createElement('p')

divResultado.setAttribute('id', 'resultado')


function adicionar() {

    let iNumero = document.getElementById('inNumero')
    let selectTag = document.getElementById('sDados')

    if (!iNumero.value || parseInt(iNumero.value) < 0 || parseInt(iNumero.value) > 100) {
        window.alert('Informe um número válido!')
    } else {
        let opTag = document.createElement('option')
        numero = Number(iNumero.value)

        // Verifica se o número já existe no array de números
        if (numeros.indexOf(numero) == -1) {
            numeros.push(numero)

            for (let indice in numeros) {
                opTag.text = `O número ${numeros[indice]} foi adicionado`
                selectTag.setAttribute('size', `${numeros.length}`)
                selectTag.appendChild(opTag)
            }
        } else {
            window.alert(`O número ${numero} já foi adicionado anteriormente!`)

            for (let indice in numeros) {
                let i = parseInt(indice)
                // Seleciona o option corresponde ao número existente
                if (selectTag.options[i].text == `O número ${numero} foi adicionado`) {
                    selectTag.selectedIndex = i
                }
            }
        }
    }
    // Limpa o campo, resultado e coloca o foco na entrada de números
    iNumero.value = ''
    tagP.innerHTML = ''
    iNumero.focus()
}

function finalizar() {

    if (numeros.length == 0) {
        window.alert('Adicione valor(es) antes de finalizar.')
    } else {
        tagP.innerHTML = `Total de números: ${numeros.length}<br/>`
        tagP.innerHTML += `Maior número: ${maior(numeros)}<br/>`
        tagP.innerHTML += `Menor número: ${menor(numeros)}<br/>`
        tagP.innerHTML += `Soma: ${soma(numeros)}<br/>`
        tagP.innerHTML += `Média: ${media(numeros)}`

        divResultado.appendChild(tagP)
        sectionTag.appendChild(divResultado)
    }
}

function maior(arrayNumeros) {
    let maior = Number.NEGATIVE_INFINITY

    for (let indice in arrayNumeros) {
        if (arrayNumeros[indice] > maior) {
            maior = arrayNumeros[indice]
        }
    }

    return maior
}

function menor(arrayNumeros) {
    let menor = Number.POSITIVE_INFINITY

    for (let indice in arrayNumeros) {
        if (arrayNumeros[indice] < menor) {
            menor = arrayNumeros[indice]
        }
    }

    return menor
}

function soma(arrayNumeros) {
    let soma = 0

    for (let indice in arrayNumeros) {
        soma += arrayNumeros[indice]
    }

    return soma
}

function media(arrayNumeros) {
    let frequencia = numeros.length
    let total = soma(arrayNumeros)

    return (total / frequencia).toFixed(2)
}