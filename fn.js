function buscarpersona () {
    const urlrandomuser = "https://randomuser.me/api/";
    fetch(urlrandomuser)
    .then(res => res.json())
    .then(data => {
        let latitude = data.results[0].location.coordinates.latitude;
        let longitude = data.results[0].location.coordinates.longitude;
        let map = L.map('map').setView([latitude,longitude], 13);
    })
}