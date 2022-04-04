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
        input.parentElement.querySelector('.mensagem-erro').innerHTML = ''
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


const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
]

const mensagensDeErro = {
    nome: {
        valueMissing: 'O campo nome não pode estar vazio',
        typeMismatch: 'O nome digitado não é válido'
    },
    email: {
        valueMissing: 'O campo de email não pode estar vazio',
        typeMismatch: 'O email digitado não é válido'
    },
    assunto: {
        valueMissing: 'O campo assunto não pode estar vazio',
    },
    mensagem: {
        valueMissing: 'O campo mensagem não pode estar vazio'
    }
}

function mostraMensagemDeErro(tipoDeInput, input, textarea) {
    let mensagem = ''
    tiposDeErro.forEach(erro => {
        if (input.validity[erro]) {
            mensagem = mensagensDeErro[tipoDeInput][erro]
        }
    })
    return mensagem
}

function mostraMensagemDeErroTextarea(tipoDeTextarea, textarea) {
    let mensagem = ''
    tiposDeErro.forEach(erro => {
        if (textarea.validity[erro]) {
            mensagem = mensagensDeErro[tipoDeTextarea][erro]
        }
    })
    return mensagem
}
