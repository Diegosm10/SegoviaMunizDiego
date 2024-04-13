function buscadorpersonajes() {
    var numero = document.getElementById("id").value;
    var numero2 = document.getElementById("id2").value;
    fetch(`https://rickandmortyapi.com/api/character/${numero},${numero2}`)
    .then(res => res.json())
    .then(data => {
        for (i=0; i <= data.length; i++) {
            if (data[i].id == numero){
                document.getElementById("nombre").innerHTML = data[i].name;
                document.getElementById("foto1").innerHTML = `<img src="${data[i].image}" alt="foto personaje">`
            }
            if (data[i].id ==  numero2) {
                document.getElementById("nombre2").innerHTML = data[i].name;
                document.getElementById("foto2").innerHTML = `<img src="${data[i].image}" alt="foto personaje">`
            }
        }
    });
}