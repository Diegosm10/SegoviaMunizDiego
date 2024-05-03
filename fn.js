numeros1 = []
numeros2 = []



function capturarnumeros1 () {
    
    let primeringreso = document.getElementById("ingreso1").value;
        if (primeringreso <=0 || primeringreso > 826) {
            alert("Ingrese un numero mayor a 0 y menor a 826") }
            else if (numeros1.includes(primeringreso) || numeros2.include(primeringreso)) { 
            alert("El numero ya esta registrado, ingrese uno diferente")
            }
            else { 

            numeros1.push(primeringreso) }
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

    let segundoingreso = document.getElementById("ingreso2").value;
    if (segundoingreso <=0 || segundoingreso > 826) {
        alert("Ingrese un numero mayor a 0 y menor a 826") }
            else if (numeros2.includes(segundoingreso) || numeros1.include(segundoingreso)) { 
            alert("El numero ya esta registrado, ingrese uno diferente")
            }
            else { 
                numeros2.push(segundoingreso)
            }
    
    if (numeros2.length == 3) {
        document.getElementById("ingreso2").disabled = true;
        document.getElementById("boton2").disabled = true; 
    }
        if (numeros1.length == 3) {
        traerpersonajes();
    } 
    
    console.log(numeros2) 
}

imagenespersonajes = []

function traerpersonajes () {
    let urlrickandmorty = `https://rickandmortyapi.com/api/character/${numeros1},${numeros2}`;
    fetch(urlrickandmorty)
    .then(res => res.json())
    .then(data => {   
    for (i=0; i < data.length; i++) {
        if (data[i].id == numeros1[0]) {
            imagenespersonajes[0] = data[i].image
        }
        if (data[i].id == numeros1[1]) {
            imagenespersonajes[1] = data[i].image
        }
        if (data[i].id == numeros1[2]) {
            imagenespersonajes[2] = data[i].image
        }
        if (data[i].id == numeros2[0]) {
            imagenespersonajes[3] = data[i].image
        }
        if (data[i].id == numeros2[1]) {
            imagenespersonajes[4] = data[i].image
        }
        if (data[i].id == numeros2[2]) {
            imagenespersonajes[5] = data[i].image
        }
    } 
    if (imagenespersonajes.length == 6) {
        document.getElementById("info1").innerHTML = 
        `<img src=${imagenespersonajes[0]} alt="fotopj">
        <img src=${imagenespersonajes[1]} alt="fotopj">
        <img src=${imagenespersonajes[2]} alt="fotopj">`;
        document.getElementById("info2").innerHTML =
        `<img src=${imagenespersonajes[3]} alt="fotopj">
        <img src=${imagenespersonajes[4]} alt="fotopj">
        <img src=${imagenespersonajes[5]} alt="fotopj">`;
    }
    console.log(data);
    })
}

