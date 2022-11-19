let btnLogin = document.getElementById('btnLogin')

btnLogin.onclick = (event) => {
  event.preventDefault()

  let form = document.querySelector('form')

  let inputEmail = document.querySelector('.email')
  let inputSenha = document.querySelector('.senha')
  let htmlErros = document.querySelector('ul.erros')

  htmlErros.innerHTML = ''

  let listaErros = []

  if (!inputEmail.value.includes('@') || !inputEmail.value.includes('.')) {
    listaErros.push('Insira um E-mail válido, deve conter os caracters "@" e "."')
  }

  if (inputSenha.value.length < 8) {
    listaErros.push('O campo senha esta incorreto, deve conter no mínimo 8 caracters.')
  } else if(inputSenha.value.length > 32){
    listaErros.push('O campo senha esta incorreto, deve conter no máximo 32 caracters.')
  }
    
  if (listaErros.length > 0) {
    listaErros.forEach((mensagemErro) => {
      htmlErros.innerHTML += '<li>' + mensagemErro + '</li>'
    })
  } else {
    form.submit()
    // CORRIGIR O LINK!!!!
    window.location.href = "https://isorganicfood.netlify.app/perfil-horta/perfil-horta.html"; 
  }
}
