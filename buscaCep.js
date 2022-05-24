/* essa primeira função vai pegar os dados que eu preciso pra preencher os formulários do jeito que eu preciso */

function buscaCep() {
    let cep = document.querySelector('#cep').value;
    if (cep.length !== 8) {
        alert('CEP inválido');
        return;
    }
    let url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url).then(function(response){
        response.json().then(function(data) {
            console.log(data)
            mostraEndereco(data);
        });
    });
}

/* essa função coloca o enderço nas minhas inputs */

function mostraEndereco(dados) {
    if (dados.erro) {
        alert("CEP inválido!")
    } else {
    document.querySelector('input[name=rua]').value = dados.logradouro;
    document.querySelector('input[name=bairro]').value = dados.bairro;
    }
}
