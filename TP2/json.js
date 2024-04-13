function buscadorpersonajes() {
    var numero = document.getElementById("id").value;
    var numero2 = document.getElementById("id2").value;
    fetch(`https://rickandmortyapi.com/api/character/${numero}/${numero2}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        document.getElementById("nombre").innerHTML = data.name;
        document.getElementById("nombre2").innerHTML = data.name;
    });
}