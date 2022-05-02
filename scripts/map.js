const map = L.map('map').setView([0, 0], 2);
const attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const tiles = L.tileLayer(tileUrl, {attribution});
tiles.addTo(map);

var marker = L.marker([48.8566, 2.3522]).addTo(map); //Paris
marker.bindPopup("Paris, count: 46252").openPopup();
var marker = L.marker([37.0902, -95.7129]).addTo(map); //United States
marker.bindPopup("United States, count: 6980").openPopup();
var marker = L.marker([41.8719, 12.5674]).addTo(map); //Italy
marker.bindPopup("Italy, count: 20616").openPopup();
var marker = L.marker([51.5072, 0.1276]).addTo(map); //London
marker.bindPopup("London, count: 87554").openPopup();
var marker = L.marker([46.2276, 2.2137]).addTo(map); //France
marker.bindPopup("France, count: 44634").openPopup();
var marker = L.marker([54.5260, 15.2551]).addTo(map); //Europe
marker.bindPopup("Europe, count: 15832").openPopup();
var marker = L.marker([51.1657, 10.4515]).addTo(map); //Germany
marker.bindPopup("Germany, count: 12235").openPopup();
var marker = L.marker([52.8793, 2.0572]).addTo(map); //Staffordshire
marker.bindPopup("Staffordshire, count: 11246").openPopup();
var marker = L.marker([35.8617, 104.1954]).addTo(map); //China
marker.bindPopup("China, count: 8134").openPopup();
var marker = L.marker([55.3781, 3.4360]).addTo(map); //United Kingdom
marker.bindPopup("United Kingdom, count: 7767").openPopup();
var marker = L.marker([20.5937, 78.9629]).addTo(map); //India
marker.bindPopup("India, count: 6962").openPopup();
var marker = L.marker([26.8206, 30.8025]).addTo(map); //Egypt
marker.bindPopup("Egypt, count: 6904").openPopup();
var marker = L.marker([52.1326, 5.2913]).addTo(map); //Netherlands
marker.bindPopup("Netherlands, count: 5523").openPopup();
var marker = L.marker([40.4637, 3.7492]).addTo(map); //Spain
marker.bindPopup("Spain, count: 5484").openPopup();
var marker = L.marker([41.9028, 12.4964]).addTo(map); //Rome
marker.bindPopup("Rome, count: 5353").openPopup();
var marker = L.marker([36.2048, 138.2529]).addTo(map); //Japan
marker.bindPopup("Japan, count: 4925").openPopup();
var marker = L.marker([32.4279, 53.6880]).addTo(map); //
marker.bindPopup("Iran, count: 4780").openPopup();