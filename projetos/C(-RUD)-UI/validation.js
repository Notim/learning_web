$(document).ready(function(){
  $('#txtNome').keyup('keyUp',function(){
    var nome = $('#txtNome').val();
    if(nome.length < 5){
      $("#alertNome").show();
      $("#alertNome").removeClass("alert-success").addClass("alert-danger");
      $('#msgAlertNome').html('Nome muito curto');
      statusAll.statusNome = 'False';
    }else{
      $("#alertNome").show();
      $("#alertNome").removeClass("alert-danger").addClass("alert-success");
      $('#msgAlertNome').html('Nome OK');
      statusAll.statusNome = 'True';
    }
  });
  $('#txtEmail').keyup('keyUp',function(){
    var email = $('#txtEmail').val();
    // filtros
    var emailFilter=/^.+@.+\..{2,}$/;
    var illegalChars= /[\(\)\<\>\,\;\:\\\/\'\[\]]/;

    if(!(emailFilter.test(email))||email.match(illegalChars)){
      $("#alertEmail").show();
      $("#alertEmail").removeClass("alert-success").addClass("alert-danger");
      $('#msgAlertEmail').html('Email em formato inadequado');
      statusAll.statusEmail = 'False';
    }else{
        $("#alertEmail").show();

        $.post(
          'verifEmail.php'
          ,{email : email}
          ,function(response, status){
            if(status == 'success'){
              if(response == 'False'){
                $("#alertEmail").removeClass("alert-danger").addClass("alert-success");
                $('#msgAlertEmail').html('Email OK!');
                statusAll.statusEmail = 'True';
              }else if(response == 'True'){
                $("#alertEmail").removeClass("alert-success").addClass("alert-danger");
                $('#msgAlertEmail').html('Email ja existente na base de dados');
                statusAll.statusEmail = 'False';
              }else{
                $('#msgAlertEmail').html(response);
                statusAll.statusEmail = 'False';
              }
            }else {
              $('#msgAlertEmail').html('Erro no banco de banco de Dados');
              statusAll.statusEmail = 'False';
            }
          }
        );
    }
  });
  var length = 'False';
  $('#txtSenha').keyup('keyUp',function(){
    $('#alertSenha').show();
    var senha = $('#txtSenha').val();

    if(senha.length <= 4){
      $('#alertSenha').removeClass("alert-success").removeClass("alert-warning").addClass("alert-danger");
      $('#msgAlertSenha').html('Senha muito curta');
      length = 'False';
    }else if(senha.length <= 8){
      $('#alertSenha').removeClass("alert-success").removeClass("alert-danger").addClass("alert-warning");
      $('#msgAlertSenha').html('Senha tamanho Medio');
      length = 'True';
    }else{
      $('#alertSenha').removeClass("alert-warning").removeClass("alert-danger").addClass("alert-success");
      $('#msgAlertSenha').html('Senha Ok!');
      length = 'True';
    }
  });

  $('#txtVerifSenha').keyup('keyUp',function(){
    $('#alertVerifSenha').show();
    var senha = $('#txtVerifSenha').val();

    if($('#txtVerifSenha').val() != $('#txtSenha').val() ){
      $('#alertVerifSenha').removeClass("alert-success").addClass("alert-danger");
      $('#msgAlertVerifSenha').html('Senhas Diferentes');
      statusAll.statusSenha = 'False';
    }else{
      $('#alertVerifSenha').removeClass("alert-danger").addClass("alert-success");
      $('#msgAlertVerifSenha').html('Senhas iguais!');
      if (length == 'False'){
          statusAll.statusSenha = 'False';
      }else{
          statusAll.statusSenha = 'True';
      }

    }
  });

  $('#sendData').on('click',function(){
    /*alert(statusAll.statusNome);
    alert(statusAll.statusSenha);
    alert(statusAll.statusEmail);*/
    if(statusAll.statusNome == 'True' && statusAll.statusEmail == 'True' && statusAll.statusSenha == 'True'){
      $('#statusSpan').show();

      var vNome  = $('#txtNome').val();
      var vEmail = $('#txtEmail').val();
      var vSenha = $('#txtVerifSenha').val();
      var Obj = {
          "nome": vNome
          ,"email":vEmail
          ,"senha":vSenha
        }
      var json = JSON.stringify(Obj);
      $.ajax({
           type: 'post' //tipo de request
          ,data:{dados : json}  //variavel que vai ficar no data pode ser um obj ou um str
          ,dataType: 'html' // tipo de retorno do server
          ,url:'cadastroBd.php' //onde esta localizado a page php
          ,success: // se sucesso
            function(result) {
              if(result == 'True'){
                $('#statusSpan').removeClass('alert-danger').addClass('alert-succes');
                $('#msgStatusSpan').html('Dados cadastrados com sucesso!!');
              }else if(result == 'False'){
                $('#statusSpan').removeClass('alert-succes').addClass('alert-danger');
                $('#msgStatusSpan').html('Ocorreu algum erro');
              }else{
                $('#statusSpan').removeClass('alert-succes').addClass('alert-danger');
                $('#msgStatusSpan').html(result);
              }
            }
        })
    }else{
      $('#statusSpan').show();
      $('#statusSpan').removeClass('alert-succes').addClass('alert-danger');
      $('#msgStatusSpan').html('Verifique os Dados');
    }
  });
});
