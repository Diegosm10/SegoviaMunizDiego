function buscarpersona () {
    let urlrandomuser = "https://randomuser.me/api/";
    fetch(urlrandomuser)
    .then(res => res.json())
    .then(data => {
        let latitude = data.results[0].location.coordinates.latitude;
        let longitude = data.results[0].location.coordinates.longitude;
        createmap(latitude,longitude)
        let name = document.getElementById("name")
        name.innerHTML = data.results[0].name.title + ' ' + data.results[0].name.first + ' ' + data.results[0].name.last;
        let picture = document.getElementById()
    })
}
function createmap(latitude,longitude) {
    let map = L.map('map').setView([latitude, longitude], 10);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    let marker = L.marker([latitude,longitude]).addTo(map)
    .bindPopup('Ubicacion de la persona buscada')
    .openPopup();
}