document.addEventListener('DOMContentLoaded', function(){

    function location(){
        const lat = 38.494751;
        const long = -77.341469;

        console.log(lat, long);
    
       /* txtOutput.innerHTML = `<p>Your location is ${lat.toFixed(3)}&#0176; latitude,
                                ${long.toFixed(3)}&#0176; longitude<br>
                                This is accurate to
                                ${location.coords.accuracy.toFixed(3)}m.</p>`;*/
    
        const map = L.map('map').setView([lat, long], 12);
    
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
    
        const marker = L.marker([lat, long]).addTo(map);
    
        marker.bindPopup("You are here").openPopup();
}
location();
});