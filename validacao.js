function verificaChuteValorValido(chute) {
    const numero = +chute
    const palavraFim = "game over"

    if (chute.toLowerCase() == palavraFim) {
        document.body.innerHTML = `
        <h2>Game Over</h2>
        <button id="reiniciar" class="btn-reiniciar">Reiniciar</button>`
    }

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido!</div>'

        return
    }

    if (numeroForaValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}!</div>`

        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou! <i class="fa-regular fa-face-smile-wink"></i></h2>
        <h3>O número secreto era ${numeroSecreto}.</h3>

        <button id="reiniciar" class="btn-reiniciar">Reiniciar</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>o número secreto é menor! <i class="fa-solid fa-arrow-down-long"></i></div>`
    } else {
        elementoChute.innerHTML += `<div>o número secreto é maior! <i class="fa-solid fa-arrow-up-long"></i></div>`
    }

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForaValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'reiniciar') {
        window.location.reload()
    }
})
