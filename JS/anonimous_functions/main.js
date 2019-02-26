(() => {
    function fun2(){
        return 10
    }    

    var fun = () => {
        return 10
    }

    let calcular = (funcao) => {
        var ar = [0,1,2,5,6,5,2,4]

        ar.forEach( c => {
            console.log(funcao(c))
        });
    }

    calcular((arg) => arg + 20)

})(); 
