function loadDocument() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() { 
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("exemplo").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    //methodo get http
    xhttp.send();   
}

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    
    xhttp.open("GET", "ajax_info.txt", false);
    xhttp.send();

    document.getElementById("demo").innerHTML = xhttp.responseText;
}