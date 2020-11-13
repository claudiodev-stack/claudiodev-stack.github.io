const botaoImporta = document.querySelector("#importar-paciente");

botaoImporta.addEventListener('click', function () {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener('load', function(){
        
        if(xhr.status == 200){
            
            var resposta = xhr.responseText
            var json = JSON.parse(resposta);        
            console.log(json);
            
            for(var i = 0; i < json.length; i++){
                adicionaNovoPaciente(json[i]);

                /*
               json.forEach(function(paciente){
                    adicionaNovoPaciente(paciente);
                });
                */
            }
            
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            alert("Ocorreu algum problema com o link da página de importação");
        }
    })
    
    xhr.send();


})