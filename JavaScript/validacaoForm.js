
 const form = document.getElementById('form')
 const nome = document.getElementById('nome')
 const email = document.getElementById('email')
 const assunto = document.getElementById('assunto')
 const mensagem = document.getElementById('mensagem')

 form.addEventListener('submit', (e) => {


       checkInputs()
 })

 function checkInputs() {
       const nomeValue = nome.value.trim()
       const emailValue = email.value.trim()
       const assuntoValue = assunto.value.trim()
       const mensagemValue = mensagem.value.trim()

       if (nomeValue === '') {
          validandoErro(nome, 'preencha esse campo');
       } else if (nomeValue.length < 3) {
        validandoErro(nome, 'O nome deve ter mais que 3 caracteres');
       } else {
          validandoSucesso(nome)
       }

       if (emailValue === '') {
          validandoErro(email, 'preencha esse campo');
       } else {
          validandoSucesso(email)
       }

       if (assuntoValue === '') {
        validandoErro(assunto, 'preencha esse campo');
       } else if (assuntoValue.length < 3) {
           validandoErro(assunto, 'Digite um assunto válido');
       }    else {
        validandoSucesso(assunto)
       }

       if (mensagemValue === '') {
        validandoErro(mensagem, 'preencha esse campo');
       } else if (mensagemValue.length < 3) {
           validandoErro(mensagem, 'Digite uma mensagem válida');
       } else {
        validandoSucesso(mensagem)
       }
 }

 function validandoErro(input, message) {
      const formControl = input.parentElement;
      const small = formControl.querySelector('small')

      small.innerText = message;

      formControl.className = 'form-control error';
 }

 function validandoSucesso(input) {
      const formControl = input.parentElement;

      formControl.className = 'form-control success';

 }
