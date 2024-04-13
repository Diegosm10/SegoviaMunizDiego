
function buscadorpersonajes () {
    var numero = document.getElementById("id").value;
    fetch (`https://rickandmortyapi.com/api/character/${numero}`)
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            document.getElementById("nombre").innerHTML = data.name;
            document.getElementById("content").innerHTML = `<img src="${data.image}" alt="foto personaje">`
        });
}
