$(document).ready(() => {

    // Masks
    $("#number").mask("(00) 00000-0000", {placeholder: "(11) 91234-1234"});
    $("#cpf").mask("000.000.000-00", {placeholder: "987.654.321-00"}, {reverse: true});
    $("#cep").mask("00000-000", {placeholder: "00000-000"});

    // Validação
    $("#form").validate({
        rules: {
            fullname: { required: true },
            email: { required: true, email: true },
            number: { required: true, minlength: 11 },
            cpf: { required: true, minlength: 11 },
            cep: { required: true, minlength: 8 },
            address: { required: true },
        }, 
    })

})