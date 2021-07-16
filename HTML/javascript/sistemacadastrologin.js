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
function perfiljavascript() {
    const emaildoperfil = localStorage.getItem('email')
    const nomedoperfil = localStorage.getItem('nome')
    const sobrenomedoperfil = localStorage.getItem('sobrenome')
    const celulardologin = +localStorage.getItem('celular')
    document.getElementById("emailperfil").innerHTML = "Email: " + (`${emaildoperfil}`)
    document.getElementById("nomeperfil").innerHTML = "Nome: " + (`${nomedoperfil}`) + " " + (`${sobrenomedoperfil}`)
    document.getElementById("numeroperfil").innerHTML = "Número de telefone: " + (`${celulardologin}`)
}
function trocarfoto() {
    const fotodeperfilnova = document.getElementById("botaosubmitimagemperfil").value
    document.getElementById("fotodeperfil").setAttribute(src, (`${fotodeperfilnova}`))
}
function anunciar() {
    const nomeproduto = document.getElementById("nomedoproduto").value
    localStorage.setItem('nomedoproduto', nomeproduto)
    const descricaoproduto = document.getElementById("descricaodoproduto").value
    localStorage.setItem('descricao', descricaoproduto)
    const valorproduto = document.getElementById("valordoproduto").value
    localStorage.setItem('valor', valorproduto)
    const imagemproduto = document.getElementById("inputfile").value
    localStorage.setItem('imagemdoproduto', imagemproduto)
    const servicoproduto = document.getElementById("opcoes").value
    localStorage.setItem('servicoouproduto', servicoproduto)
    window.location.href = "anuncioexito.html"
}