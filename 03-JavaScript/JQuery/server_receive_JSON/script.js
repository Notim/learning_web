$(document).on('click', "#btnEnviarDados", function(){
    var vNome = $("#nome").val();
    var vEmail = $("#email").val();

    if(vNome == "" || vEmail == ""){
        $("#result").show();
        $("#result").html("  !!!  Entrada Vazia !!!");
        $("#result").css("background-color", "rgb(243, 21, 21)");
        $("#result").css("border", "rgb(121, 16, 16) solid 1px"); 
        
        return 0;
    }

    var vData = { nome : vNome , email : vEmail }; 
    $.post("receive.php",vData,function(response, status){
            if(status == "success"){
                var Obj = JSON.parse(response);
            }
            $("#result").show();
            $("#result").html("Enviado com sucesso!! <strong>Dados enviados</strong> : " + Obj.nome + ", " + Obj.email);
            $("#result").css("background-color", "rgb(21, 196, 21)");
            $("#result").css("border", "rgb(16, 121, 16) solid 1px"); 
        }
    );
});