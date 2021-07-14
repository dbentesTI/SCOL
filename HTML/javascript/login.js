function verificacao(login) {
if (login.Email.value == "felipinhonet11@gmail.com" && login.Senha.value == "123") {
location = "index3.html"
}
else {
    login.Email.value=""
    login.Senha.value=""
    alert('Email ou senha não encontrados no sistema.')
}
}