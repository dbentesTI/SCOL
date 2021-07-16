function verificacaocadastro() {
    const  emaillogin = document.getElementById('email').value
    localStorage.setItem('email', emaillogin)
    const  senhalogin = document.getElementById('senha').value
    localStorage.setItem('senha', senhalogin)
    const  nomelogin = document.getElementById('nome').value
    localStorage.setItem('nome', nomelogin)
    const sobrenomelogin = document.getElementById('sobrenome').value
    localStorage.setItem('sobrenome', sobrenomelogin)
    const celularlogin = document.getElementById('celular').value
    localStorage.setItem('celular', celularlogin)
    window.location.href = "cadastroconfirmado.html"
}
function verificacao() {
    const meuemail = localStorage.getItem('email')
    const minhasenha = localStorage.getItem('senha')
    if (login.Email.value == (`${meuemail}`)  && login.Senha.value == (`${minhasenha}`)  ) {
    location = "index3.html"
    }
    else {
        login.Email.value=""
        login.Senha.value=""
        alert('Email ou senha não encontrados no sistema.')
    }
    }