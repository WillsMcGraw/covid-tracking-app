// Pull the configuration file
fetch('./config.json')
    .then(config => config.json())
    .then(data => {
        console.log(data);
        


        // Pull MapTiler API Key
        maptilersdk.config.apiKey = config.API_KEY;

        // Create map object
        const map = new maptilersdk.Map({
            container: 'map',   // Contianer's ID or the HTML element to render the map
            style: maptilersdk.MapStyle.DATAVIZ.LIGHT,
            center: [-96.05, 36.79], // Starting position (Lng, Lat)
            zoom: 4, // Starting Zoom
        });


        
    })

// // Pull MapTiler API Key
// maptilersdk.config.apiKey = config.API_KEY;

// // Create map object
// const map = new maptilersdk.Map({
//     container: 'map',   // Contianer's ID or the HTML element to render the map
//     style: maptilersdk.MapStyle.DATAVIZ.LIGHT,
//     center: [-96.05, 36.79], // Starting position (Lng, Lat)
//     zoom: 4, // Starting Zoom
// });

// map.on('ready', async() => {
//     map.addSource('countries', {
//         type: 'vector',
//         url: `https://api.maptiler.com/tiles/countries/tiles.json`
//     });
// });

// console.log('app.js is loaded');