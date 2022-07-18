var boundary = [-81.3899688720703, -18.4412956237793, -68.5886001586914, 0.0298568718135357];

var map = L.map('map', {
    center: [(boundary[1] + boundary[3]) / 2, (boundary[0] + boundary[2]) / 2],
    zoom: 5
});

// var defaultBase = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png').addTo(map);
var defaultBase = L.tileLayer.provider('CartoDB.DarkMatter').addTo(map);

var baseLayers = {
    'Dark Matter': defaultBase,
    'OpenStreetMap': L.tileLayer.provider('OpenStreetMap'),
    'OpenTopoMap': L.tileLayer.provider('OpenTopoMap'),
    'EsriWorldPhysical': L.tileLayer.provider('Esri.WorldPhysical'),
    'EsriWorldImagery': L.tileLayer.provider('Esri.WorldImagery')
};

var limiteNacional = L.geoJSON({
    "type": "FeatureCollection",
    "name": "limite_nacional",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    ]
    }
    ).addTo(map);

var groupOverLays = {
    "Límite nacional del Perú": {
        "Límite Nacional": limiteNacional
    }
};

L.control.groupedLayers(baseLayers, groupOverLays).addTo(map);
L.control.scale({position: 'bottomleft'}).addTo(map);

map.pm.addControls(options);