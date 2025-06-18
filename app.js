// Pull the configuration file
fetch('./config.json')
    .then(config => config.json())
    .then(config => {
        // Pull MapTiler API Key
        maptilersdk.config.apiKey = config.API_KEY;

        // Create map object
        const map = new maptilersdk.Map({
            container: 'map',   // Contianer's ID or the HTML element to render the map
            style: maptilersdk.MapStyle.DATAVIZ.LIGHT,
            center: [-96.05, 36.79], // Starting position (Lng, Lat)
            zoom: 4, // Starting Zoom
        });

        // Adds MapTiler countries data source
        map.on('ready', async() => {
            map.addSource('countries', {
                type: 'vector',
                url: `https://api.maptiler.com/tiles/countries/tiles.json`
            });

            // Find the first symbol (text) layer from the maps
            const firstSymbolId = findFirstSymbolLayer(map);

            map.addLayer(
                {
                'id': 'states',
                'source': 'countries',
                'source-layer': 'administrative',
                'type': 'fill',
                'maxzoom': 7,
                'filter': [
                    'all',
                    ['==', 'level', 1],
                    ['==', 'level_0', 'US']
                ],
                'paint': {
                    'fill-opacity': 1,
                    'fill-outline-color': '#fff',
                    'fill-color': '#DEDEDE',
                }
                },
                firstSymbolId
            );

        });
    })



// A function that gets the first symbol layer of a passed in map.
function findFirstSymbolLayer() {
    const layers = map.getStyle().layers;
    const firstSymbolId = layers.find(layer => layer.type === 'symbol').id;
    return firstSymbolId;
}