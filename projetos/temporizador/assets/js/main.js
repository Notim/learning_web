(function(){
    setInterval(function(){        
        $('.display').height($('.display').width());
        parent.postMessage($("body").height() + 50 ,'*') 
    }, 500);

    $("#include-form").load("form.html"); 

    var end = new Date(2018, 10, 23, 23, 59)        

    setInterval(function(){             
        var now = new Date(Date.now())        
        var miss = end.getTime() - now.getTime()        
    
        var totalSeg  = parseInt(miss/1000)
        
        var Sdias  = totalSeg - (totalSeg % 86400)
        totalSeg   -= Sdias
        var Shoras = totalSeg - (totalSeg % 3600)
        totalSeg   -= Shoras
        var Sminutos= totalSeg- (totalSeg % 60)           
        totalSeg   -= Sminutos
        var segundos  = totalSeg

        var dias      = Sdias    / 86400
        var horas     = Shoras   / 3600
        var minutos   = Sminutos / 60

        var segundos  = totalSeg % 60

        //console.log(dias + " " + horas + ":" + minutos + ":" + segundos)        

        $('#Day-block').html(dias)
        $('#Hour-block').html(horas)
        $('#Min-block').html(minutos)
        $('#Sec-block').html(segundos)        
    }, 1000);        
})()
