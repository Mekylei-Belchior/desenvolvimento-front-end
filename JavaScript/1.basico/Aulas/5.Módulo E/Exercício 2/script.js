function gerar() {
    let numero = document.getElementById('valor').value
    let resultado = document.getElementById('resultado')

    if (!numero){
        window.alert('Informe um número!')
    }else{
        numero = Number(numero)

        for (let i = 0; i <= 10; i++) {
            if (i == 0){
                // Limpa a entrada de dados existente (i igual a 0)
                resultado.innerHTML = ''
            } else{
                // Cria uma nova tag Option
                let op = document.createElement('option')

                op.text = `${numero} x ${i} = ${numero * i}`
                op.value = `valor${i}`
                resultado.appendChild(op)
            }
        }
    }
}