const titulo = document.querySelector("h1");
titulo.textContent = "Bem Vindo, Nutricionista."

const pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {

    let paciente = pacientes[i];

    const pesopaciente = paciente.querySelector(".info-peso");
    const alturapaciente = paciente.querySelector(".info-altura");
    let imcpaciente = paciente.querySelector(".info-imc");
    const peso = pesopaciente.textContent;
    const altura = alturapaciente.textContent;

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if (!pesoValido) {
        pesoValido = false;
        imcpaciente.textContent = "Peso Inválido."
        paciente.classList.add("paciente-invalido");
    } else if (!alturaValida) {
        alturaValida = false;
        imcpaciente.textContent = "Altura Inválida."
        paciente.classList.add("paciente-invalido");
    }

    if (pesoValido && alturaValida) {
        let imc = calculaImc(peso, altura);
        imcpaciente.textContent = imc;
    }
}

function validaPeso(peso) {
    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.00){
        return true;
    } else {
        return false;
    }
}


function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);;
}