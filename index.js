// Initialize the map
const map = L.map('map-container').setView([23.0381, 72.5544], 3); // Replace with your initial coordinates

// Add basemap tiles (e.g., OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Prepare your location data (replace with your actual data)
const locations = [
  [23.02185, 72.33155],
  [23.02165, 72.33134],
];

// Create a heatmap instance
const heatmap = hm.create({
  container: document.getElementById('map-container'),
});

// Convert locations to heatmap data format
const heatmapData = locations.map(location => ({ x: location[0], y: location[1], value: 1 })); // Adjust 'value' for intensity

// Set heatmap data and options (adjust as needed)
heatmap.setData({ data: heatmapData });
heatmap.setOptions({ radius: 15, max: 50, gradient: { colors: ['#ffff00', '#ff0000'] } }); // Adjust radius, max intensity, and color gradient
