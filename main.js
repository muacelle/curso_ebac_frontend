const form = document.getElementById("form-deposito");

function validarNome(nome) {
    const nomeArray = nome.split(" ");
    return nomeArray.length >= 2;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let formValido = false;

    const nomeBeneficiario = document.getElementById("nome-beneficiario");
    const numeroConta = document.getElementById("numero-conta");
    const valorDeposito = document.getElementById("valor-deposito");
    const mensagemSucesso = `O montante de <b>R$${valorDeposito.value}</b> foi depositado na conta <b>${numeroConta.value}</b> do beneficiário <b>${nomeBeneficiario.value}</b>.`;
    const mensagemErro = `Informe o seu nome completo.`
    formValido = validarNome(nomeBeneficiario.value)

    if (formValido) {
        
        document.getElementById("mensagem-sucesso").innerHTML = mensagemSucesso;
        document.getElementById("mensagem-sucesso").style.display = "block";
        document.getElementById("mensagem-erro").style.display = "none";

        nomeBeneficiario.value = "";
        numeroConta.value = "";
        valorDeposito.value = "";
    } else {
        document.getElementById("mensagem-erro").innerHTML = mensagemErro;
        document.getElementById("mensagem-erro").style.display = "block";
    }
})