const inputs = document.querySelectorAll("input")
const textarea = document.querySelectorAll("textarea")

inputs.forEach( input => {
    input.addEventListener('blur', (evento) => {
        validaInput(evento.target)
    })
})

textarea.forEach( textarea => {
    textarea.addEventListener('blur', (evento) => {
        validaTextarea(evento.target)
    })
})

function validaInput(input) {
    const tipoDeInput = input.dataset.tipo


    if (input.validity.valid) {
        input.parentElement.classList.remove('form-control-error')
        input.parentElement.classList.add('form-control-success')
       // input.parentElement.querySelector('.mensagem-valida').innerHTML = ''
    } else {
        input.parentElement.classList.add('form-control-error')
        input.parentElement.classList.remove('form-control-success')
        input.parentElement.querySelector('.mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input)
    }

}

function validaTextarea(textarea) {
    const tipoDeTextarea = textarea.dataset.tipo

    if (textarea.validity.valid) {
        textarea.parentElement.classList.remove('form-control-error')
        textarea.parentElement.classList.add('form-control-success')
        textarea.parentElement.querySelector('.mensagem-erro').innerHTML = ''
    } else {
        textarea.parentElement.classList.add('form-control-error')
        textarea.parentElement.classList.remove('form-control-success')
        textarea.parentElement.querySelector('.mensagem-erro').innerHTML = mostraMensagemDeErroTextarea(tipoDeTextarea, textarea)
    }

}


const tiposDeValidacao = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
]

const mensagensDeErro = {
    nome: {
        valueMissing: 'O campo nome não pode estar vazio &cross;',
        typeMismatch: 'O nome digitado não é válido &cross;'
    },
    email: {
        valueMissing: 'O campo de email não pode estar vazio &cross;',
        typeMismatch: 'O email digitado não é válido &cross;'
    },
    assunto: {
        valueMissing: 'O campo assunto não pode estar vazio &cross;',
    },
    mensagem: {
        valueMissing: 'O campo mensagem não pode estar vazio &cross;'
    }
}

function mostraMensagemDeErro(tipoDeInput, input) {
    let mensagem = ''
    tiposDeValidacao.forEach(validacao => {
        if (input.validity[validacao]) {
            mensagem = mensagensDeErro[tipoDeInput][validacao]
        }
    })
    return mensagem
}

function mostraMensagemDeErroTextarea(tipoDeTextarea, textarea) {
    let mensagem = ''
    tiposDeValidacao.forEach(validacao => {
        if (textarea.validity[validacao]) {
            mensagem = mensagensDeErro[tipoDeTextarea][validacao]
        }
    })
    return mensagem
}

