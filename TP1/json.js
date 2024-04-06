/*const personaje = {
    "id": 140,
    "name": "Genital Washer",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
        "name": "Post-Apocalyptic Earth",
        "url": "https://rickandmortyapi.com/api/location/8"
    },
    "location": {
        "name": "Post-Apocalyptic Earth",
        "url": "https://rickandmortyapi.com/api/location/8"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/140.jpeg",
    "episode": [
        "https://rickandmortyapi.com/api/episode/23"
    ],
    "url": "https://rickandmortyapi.com/api/character/140",
    "created": "2017-12-27T18:47:44.566Z"
}
    console.log(personaje);
    console.log(personaje.name)
    console.log(personaje.origin.url)*/
/*const jugador = {
    "nombre": "Nahuel",
    "apellido": "Barrios",
    "apodo": "Perrito",
    "edad": 28,
    "clubes":["San Lorenzo", "U Catolica", "Central Cordoba"],
    "activo": true,
    "sueldo": 1000000.99,
}
    console.log(jugador.apodo)
    console.log(jugador.clubes[0])*/
const personaje ={
    "id": 333,
    "name": "Stair Goblin",
    "status": "Alive",
    "species": "Mythological Creature",
    "type": "Stair goblin",
    "gender": "Genderless",
    "origin": {
        "name": "unknown",
        "url": ""
    },
    "location": {
        "name": "Fantasy World",
        "url": "https://rickandmortyapi.com/api/location/48"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/333.jpeg",
    "episode": [
        "https://rickandmortyapi.com/api/episode/5",
        "https://rickandmortyapi.com/api/episode/11",
        "https://rickandmortyapi.com/api/episode/25"
    ],
    "url": "https://rickandmortyapi.com/api/character/333",
    "created": "2018-01-10T16:34:19.420Z"    
}
document.getElementById("nombre y estatus").innerHTML = "El personaje " + personaje.name + " esta " + personaje.status;
