function buscarpersona () {
    let urlrandomuser = "https://randomuser.me/api/";
    fetch(urlrandomuser)
    .then(res => res.json())
    .then(datA => {
        let latitude = data.results[0].location.coordinates.latitude;
        let longitude = data.results[0].location.coordinates.longitude;
        createmap(latitude,longitude)

        let picture = document.getElementById("picture")
        picture.innerHTML = `<img src="${data.results[0].picture.thumbnail}" alt="foto pesona">`;

        let name = document.getElementById("name")
        name.innerHTML = "Nombre completo: " + data.results[0].name.title + ' ' + data.results[0].name.first + ' ' + data.results[0].name.last;

        let age = document.getElementById("age")
        age.innerHTML = "Edad: " + data.results[0].dob.age;

        let city = document.getElementById("city")
        city.innerHTML = "Ciudad: " + data.results[0].location.city;

        let country = document.getElementById("country")
        country.innerHTML = "Pais: " + data.results[0].location.country;
    })
    .catch(error => {
        document.getElementById("error").innerHTML = "ERROR"
    })
}
function createmap(latitude,longitude) {
    

    let mapa = L.DomUtil.get ('mapa');
    if (mapa != null) {
        mapa._leaflet_id = null;
    }

    let map = L.map('mapa').setView([latitude, longitude], 10);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    let marker = L.marker([latitude,longitude]).addTo(map)
    .bindPopup('Ubicacion de la persona buscada')
    .openPopup();
     }