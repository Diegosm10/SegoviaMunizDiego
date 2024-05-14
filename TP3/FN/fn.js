numeros1 = []
numeros2 = []



function capturarnumeros1 () {
    
    let primeringreso = Number(document.getElementById("ingreso1").value);
    document.getElementById("ingreso1").value = "";
    if (primeringreso <=0 || primeringreso > 826) {
        alert("Ingrese un numero mayor a 0 y menor a 826") }
        else if (numeros1.includes(primeringreso) || numeros2.includes(primeringreso)) { 
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

    let segundoingreso = Number(document.getElementById("ingreso2").value);
    document.getElementById("ingreso2").value = "";
    if (segundoingreso <=0 || segundoingreso > 826) {
        alert("Ingrese un numero mayor a 0 y menor a 826") }
            else if (numeros2.includes(segundoingreso) || numeros1.includes(segundoingreso)) { 
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


function traerpersonajes () {
    let urlrickandmorty = `https://rickandmortyapi.com/api/character/${numeros1},${numeros2}`;
    if (numeros1.length == 3 & numeros2.length == 3) {
    fetch(urlrickandmorty)
    .then(res => res.json())
    .then(data => {  
        let ids = [];
        let ordengrupo1 = [];
        let ordengrupo2 = []; 
        for(i=0; i < data.length; i++) {
            ids.push(data[i].id);
        }
        for(i=0; i < numeros1.length; i++) {
            for(j=0; j < ids.length; j++) {
                ordengrupo1[i] = ids.indexOf(numeros1[i]);
                ordengrupo2[i] = ids.indexOf(numeros2[i]);
            }
        }
        for (i=0; i < numeros1.length; i++) {
            document.getElementById("info1").innerHTML += 
            `<img src=${data[ordengrupo1[i]].image} alt="fotopj">`;                
            document.getElementById("info2").innerHTML +=
            `<img src=${data[ordengrupo2[i]].image} alt="fotopj">`;
        }
        console.log(ordengrupo1);
        console.log(ordengrupo2);
        console.log(data);
    })         
}
}

