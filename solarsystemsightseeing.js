window.onload = function() {
        L.mapquest.key = 'btABxCqVuXsCkrCU41iC3r0iamxRWtom';


        L.mapquest.map('map', {
            center: [37.7749, -122.4194],
            layers: L.mapquest.tileLayer('map'),
            zoom: 12
        });
        L.mapquest.directions().route({
            start: '350 5th Ave, New York, NY 10118',
            end: 'One Liberty Plaza, New York, NY 10006'
        });

    }
    // var baseLayer = L.mapquest.tileLayer('dark');

// L.mapquest.geocoding().geocode(['New York, NY'], showMap);

// function showMap(err, data) {
//     var map = createMap();
//     map.addControl(L.mapquest.control());
//     addLayerControl(map);
// }

// function createMap() {
//     var map = L.mapquest.map('map', {
//         center: [40.7237, -73.9825],
//         zoom: 14,
//         layers: baseLayer
//     });
//     return map;
// }

// function addLayerControl(map) {
//     L.control.layers({
//         'Map': L.mapquest.tileLayer('map'),
//         'Satellite': L.mapquest.tileLayer('satellite'),
//         'Hybrid': L.mapquest.tileLayer('hybrid'),
//         'Light': L.mapquest.tileLayer('light'),
//         'Dark': baseLayer
//     }, {}, { position: 'topleft' }).addTo(map);