var adicionarPaciente = document.querySelector("#adicionar-paciente");

adicionarPaciente.addEventListener('click', function (event) {
    event.preventDefault();

    let form = document.querySelector("#form-adiciona");
    let paciente = retornaValorFormulario(form);
   
    var erros = validaPaciente(paciente);

    console.log(erros);
    if (erros.length > 0) {
        exibeMensagemDeErros(erros);
        return;
    }
    /*
    if (!validaPaciente(paciente)) {
        console.log("Paciente Inválido.")
        return;
    }
    */
   adicionaNovoPaciente(paciente);

    form.reset();
    document.querySelector("#mensagens-erro").innerHTML = "";
});


function adicionaNovoPaciente(paciente){
    
    const criaTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(criaTr);
}

function retornaValorFormulario(form) {
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente) {

    const novaTr = document.createElement("tr");
    novaTr.classList.add("paciente");

    novaTr.appendChild(montaTd(paciente.nome, "info-nome"));
    novaTr.appendChild(montaTd(paciente.peso, "info-peso"));
    novaTr.appendChild(montaTd(paciente.altura, "info-altura"));
    novaTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    novaTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return novaTr;
}

function montaTd(dado, classe) {
    let td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco")
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido.");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida.");

    }
    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco")
    }

    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco")
    }

    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco")
    }

    return erros;
}

function exibeMensagemDeErros(erros) {

    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
