
/* aqui eu faço antes uma verificação pra saber se todo meu formulário está preenchido */
function pedidoFeito() {
   let nome = document.getElementById('nome');
   let email = document.getElementById('email');
   let telefone = document.getElementById('celular');
   let rua = document.getElementById('rua');
   let numero = document.getElementById('numero');
   let bairro = document.getElementById('bairro');

   if (nome.value == "") {
       alert("Falta o nome! Por favor, confira o formulário novamente 😁");
       nome.focus();
       return;
   }

   if (email.value == "") {
       alert("Falta o E-mail! Por favor, confira o formulário novamente 😁");
       email.focus();
       return;
   }

   if (telefone.value == "") {
       alert("Falta o celular! Por favor, confira o formulário novamente 😁");
       telefone.focus();
       return;
   }

   if (rua.value == "") {
       alert("Falta a sua rua! Por favor, confira o formulário novamente 😁");
       rua.focus();
       return;
   }

   if (numero.value == "") {
       alert("Falta o número da sua casa! Por favor, confira o formulário novamente 😁");
       numero.focus();
       return;
   }

   if (bairro.value == "") {
       alert("Falta o seu bairro! Por favor, confira o formulário novamente 😁");
       bairro.focus();
       return;
   }
    alert("Certin! Você vai receber no e-mail cadastrado todos os detalhes do seu pedido em breve 😁");
}

/* um replace pra que o campo do celular fique mais estético */
    const $campoCelular = document.getElementById('celular');
    
     $campoCelular.addEventListener('focusin', (event) => {
       $numeroDoCelular = event.target.value;
       $campoCelular.value = $numeroDoCelular.replace(/[.-]/g, "")
     })
      
     $campoCelular.addEventListener('focusout', () => {
       $numeroDoCelular = event.target.value;
       $campoCelular.value = $numeroDoCelular.replace(/(\d{2})?(\d{1})?(\d{4})?(\d{4})/, "($1) $2 $3-$4");
     })
    