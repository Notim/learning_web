function checkNull(dados) {
    for(var i = 0; i != dados.length; i++) {
        Obj = dados[i];
        if (Obj.value == "") {
            alert("Verifique o campo " + Obj.name);
            document.getElementById(Obj.id).style.border = "2px solid red";
            return 0;
        }
        document.getElementById(Obj.id).style.border = "";
    }
    var premio = document.getElementById("txtPremio").value
    checkPremio(premio);

}

function checkPremio(premio){
    if (premio.length != 6){
        alert("Premio com numero de caracteres invalido")
        return false
    }
    if (premio[0] != premio[4] || premio[1] != premio[5]){
        alert("Premio com numero caracteres Diferentes")
        return false
    }
    alert("Cadastrado com sucesso!!!")
}

function enviar() {
    var dados = [
         { id:"txtNome"    , name : "Nome", value : document.getElementById("txtNome").value}
        ,{ id:"slcTipoLog" , name : "Tipo de logradouro", value : document.getElementById("slcTipoLog").value}
        ,{ id:"txtEndereco", name : "Endereco", value : document.getElementById("txtEndereco").value}
        ,{ id:"txtNumero"  , name : "Numero", value : document.getElementById("txtNumero").value}
        ,{ id:"txtBairro"  , name : "Bairro", value : document.getElementById("txtBairro").value}
        ,{ id:"txtCidade"  , name : "Cidade", value : document.getElementById("txtCidade").value}
        ,{ id:"slcUf"      , name : "Unidade Federativa", value : document.getElementById("slcUf").value}  
    ];
    checkNull(dados)
}