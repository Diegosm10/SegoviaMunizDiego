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
                var genero1 = data[i].gender;
            }
            else
            if (data[i].id ==  numero2) {
                document.getElementById("nombre2").innerHTML = data[i].name;
                document.getElementById("foto2").innerHTML = `<img src="${data[i].image}" alt="foto personaje">`
                var genero2 = data[i].gender;
            }
            if (genero1 == genero2) {
                document.getElementById("match").innerHTML = `<img src="https://imgs.search.brave.com/8cbjpdIb4z5FQfoUA1eZdNxAomFUBtkHZyhT5kllze0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHNkLWdyYXRpcy9z/aW1ib2xvLXZlcmlm/aWNhY2lvbi1haXNs/YWRvXzIzLTIxNTA1/MDAzNTYuanBnP3Np/emU9NjI2JmV4dD1q/cGc" alt="verificacion ok" width="100" height="100">`
            }
            if (genero1 != genero2) {
                document.getElementById("match").innerHTML = `<img src="https://imgs.search.brave.com/X8Ih00I_9AVUJvT_vimeYE2ZlkEibbaSXiiW8P7mTF4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/Mi8xMi8yMS8yOS9m/YWxzZS0yMDYxMTMx/XzY0MC5wbmc" alt="verificacion x" width="100" height="100">`
            }
        }
    });
}