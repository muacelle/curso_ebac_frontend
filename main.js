const form = document.getElementById("form-valores");

function validarValores(a, b) {
    return parseInt(b) > parseInt(a);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const valorA = document.getElementById("valor-a");
    const valorB = document.getElementById("valor-b");

    const mensagemSucesso = `Formulário válido! <b>${valorB.value}</b> é maior que <b>${valorA.value}</b>.`;
    const mensagemErro = `Formulário inválido! <b>${valorB.value}</b> NÃO é maior que <b>${valorA.value}</b>.`

    let formValido = false;
    formValido = validarValores(valorA.value, valorB.value);

    if (formValido) {
        
        document.getElementById("mensagem-sucesso").innerHTML = mensagemSucesso;
        document.getElementById("mensagem-sucesso").style.display = "block";
        document.getElementById("mensagem-erro").style.display = "none";

        valorA.value = "";
        valorB.value = "";

    } else {
        document.getElementById("mensagem-erro").innerHTML = mensagemErro;
        document.getElementById("mensagem-erro").style.display = "block";
        document.getElementById("mensagem-sucesso").style.display = "none";
    }
})