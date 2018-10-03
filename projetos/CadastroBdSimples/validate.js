var statusNome = null ;
var statusEmail = null ;
var statusSenha = null ;

function verifName(){
    var valor = document.getElementById('txtNome').value;

    if (valor.length <= 6){
        document.getElementById('statusNome').innerHTML = 'por favor, digite o nome completo' ;
        statusNome = null;
    }else{
        document.getElementById('statusNome').innerHTML = 'Nome OK!' ;
        statusNome = 'OK';
    }
}
function verifEmail(){
    //atribuindo o valor do campo
    var sEmail	= document.getElementById('txtEmail').value;
    
    // filtros
    var emailFilter=/^.+@.+\..{2,}$/;
    var illegalChars= /[\(\)\<\>\,\;\:\\\/\'\[\]]/;

    if(!(emailFilter.test(sEmail))||sEmail.match(illegalChars)){
        document.getElementById('statusEmail').innerHTML = 'Email em formato inviavel';
        document.getElementById('statusEmail').style.display = 'block'; 
        statusEmail = 'null';
    }else{
        verifDb(sEmail);    
    }
}
function verifDb(Email){
    var sendEmail = { email : Email };
    $.post('consultaEmail.php',sendEmail,
        function(response, status){
            if(status == 'success'){                
                if (response == 'False'){
                    document.getElementById('statusEmail').innerHTML = 'email OK!';
                    statusEmail = 'OK';                
                }else if(response == 'True'){
                    document.getElementById('statusEmail').innerHTML = 'Email ja cadastrado no Banco de dados';
                    statusEmail = null;     
                }else{
                    document.getElementById('statusEmail').innerHTML = response;
                }
            }else{
                alert("alguma coisa deu Ruim");
            }
        }
    );
}  
function verifPassword(){
    var valor = document.getElementById('txtPassword').value;
    if (valor.length <= 4){
        document.getElementById('statusComprimentoSenha').innerHTML = 'Fraco' ;
        statusSenha = 'null';
    }else if(valor.length <= 6){
        document.getElementById('statusComprimentoSenha').innerHTML = 'Medio' ;
    }else if(valor.length > 6){
        document.getElementById('statusComprimentoSenha').innerHTML = 'Forte' ;
    }
}
function verifEquaPassword(){
    var senhaP = document.getElementById('txtPassword').value;
    var senhaS = document.getElementById('verifPassword').value;

    if(senhaP != senhaS){
        document.getElementById('statusSenha').innerHTML = 'Senha diferente da anterior' ;
    } else {
        document.getElementById('statusSenha').innerHTML = 'senhas OK!' ;
        statusSenha = 'OK'
    }
}
function mandarInfo(){
    verifEmail();
    if((statusNome == 'OK') && (statusSenha == 'OK') && (statusEmail == 'OK')){
        sendForm();
    }else{
        alert('Verifique os dados');
    }   
}

function sendForm(){

    vNome  = document.getElementById('txtNome').value;
    vEmail = document.getElementById('txtEmail').value;
    vSenha = document.getElementById('txtPassword').value;

    var data = {
        nome :   vNome
        ,email : vEmail
        ,senha : vSenha 
    }
    $.post('sendCad.php', data, 
        function(response, status){
            if(status == "success"){
                if(response == "False"){
                    alert('Alguma coisa deu errado');
                }else if(response == "True"){
                    alert('Cadastrado com sucesso');
                }
            }else{
                document.getElementById('error').innerHTML = ('Alguma coisa deu errado');
            }
        }
    );
}

/*
var Obj = { 
    nome : "joao"
    ,email : "paulino.joaovitor@yahoo.com.br" 
    ,senha : "123456"
};
//metodo .post
$.post(
    'sendCad.php' //Definindo o arquivo onde serão buscados os dados
    ,data //objeto enviado
    //   response = resposta do servidor, status = retorno do status
    ,function(response , status){
        if(status == "success"){
            var Obj = JSON.parse(response);
        }else{
            alert('Alguma coisa deu errado');
        }
    }
);*/