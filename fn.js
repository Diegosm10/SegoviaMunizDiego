numeros1 = []
numeros2 = []


function capturarnumeros1 () {
    numeros1.push(document.getElementById("ingreso1").value)
    if (numeros1.length == 3) {
        document.getElementById("ingreso1").disabled = true;
        document.getElementById("boton1").disabled = true; 
        if (numeros2.length == 3) {
            traerpersonajes();
        }  
    }
    console.log(numeros1)
}
function capturarnumeros2 () {
    numeros2.push(document.getElementById("ingreso2").value)
    if (numeros2.length == 3) {
        document.getElementById("ingreso2").disabled = true;
        document.getElementById("boton2").disabled = true; 
        if (numeros1.length == 3) {
            traerpersonajes();
        } 
    }
    console.log(numeros2) 
}
function traerpersonajes () {
    urlrickandmorty = "https://rickandmortyapi.com/api/character/"+numeros1+","+numeros2
    fetch(urlrickandmorty)
    .then(res => res.json())
    .then(data => {   
    for (i=0; i < data.length; i++) {
        if (data[i].id == numeros1[i]) {
            
        }
    }       
    console.log(data);
    })
}
