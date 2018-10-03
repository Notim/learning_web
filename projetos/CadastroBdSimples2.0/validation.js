$(document).ready(function(){
  var statusValidacao = {
    nome   : "False"
    ,email : "False"
    ,senha : "False"
  }
  $('#txtNome').keyup(function(){
    var lname = $('#txtNome').val();
    if (lname.length <= 4){
      $('#alertNome').html('Por favor digite o nome completo');
      statusValidacao.nome = "False";
    }else{
      $('#alertNome').html('Nome OK!');
      statusValidacao.nome = "True";
    }
  });
  $('#txtEmail').keyup(function(){
    var lemail = $('#txtEmail').val();
    if (lemail.length <= 10){
      $('#alertEmail').html('Por favor digite o email completo');
      statusValidacao.email = "False";
    }else{
      $('#alertEmail').html('Email OK!');
      statusValidacao.email = "True";
    }
  });
  $('#txtSenha').keyup(function(){
    var lname = $('#txtSenha').val();
    if (lname.length <= 4){
      $('#alerteSenha').html('Por favor digite uma senha maior');
      statusValidacao.senha = "False";
    }else{
      $('#alertSenha').html('Senha OK!');
      statusValidacao.senha = "True";
    }
  });
  $('#btnEnviar').on('click',function(){
    if(statusValidacao.nome == 'True' && statusValidacao.email == 'True' && statusValidacao.senha == 'True'){
      var data = {
        nome   : $('#txtNome').val()
        ,email : $('#txtEmail').val()
        ,senha : $('#txtSenha').val()
      }
      $.post(
        'cadBanco.php'
        ,data
        ,function(response, status){
          if(status == "success"){
            if(response == 'True'){
              alert('cadastrado com sucesso');
            }else if(response == "False"){
              alert('Algo deu errado');
            }else{
              $('#alertNome').html(response);
            }
          }else{
            alert("Problemas na conexao com o banco");
          }
        }
      );
    }else{
      alert('Verifique os dados novamente');
    }

  })
});
