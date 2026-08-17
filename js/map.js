// map.js

let map;
let markerPositions = [];

const apiOptions = {
    apiKey: "your_api_key_here"
}

export async function initMap() {
    const position = { lat: 48.82711, lng: 2.31842 };
    const position2 = { lat: 48.89355, lng: 2.38089 };
    const position3 = { lat: 48.85825, lng: 2.43739 };
    const position4 = { lat: 48.82675087449088, lng: 2.3649505847051646};
    const position5 = { lat: 48.858604256941874, lng: 2.435756179819767};
    

    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

    map = new Map(document.getElementById("map"), {
        center: { lat: 48.866667, lng: 2.333333 },
        zoom: 14,
        mapId: 'CARTEPARIS'
    });

    
    const marker1 = new AdvancedMarkerView({
        map: map,
        position: position,
        title: "Notre Dame du bon secours - 68 rue des Plantes 75014 Paris",
    });
    markerPositions.push(position);

    const marker2 = new AdvancedMarkerView({
        map: map,
        position: position2,
        title: "Brasserie Les Eiders - 142 avenue de Flandres 75019 Paris",
    });
    markerPositions.push(position2);

    const marker3 = new AdvancedMarkerView({
        map: map,
        position: position3,
        title: "Les nouveaux Sauvages - 1 avenue Gabriel Péri 93100 Montreuil",
    });
    markerPositions.push(position3);

    const marker4 = new AdvancedMarkerView({
        map: map,
        position: position4,
        title: "Le Nouvô Cosmos - 105 rue de Tolbiac 75013 Paris",
    });
    markerPositions.push(position4);

    const marker5 = new AdvancedMarkerView({
        map: map,
        position: position5,
        title: "la Bicyclette - 6 bd de Chanzy 93100 Montreuil",
    });
    markerPositions.push(position5);

    
}

export function showMarker(index) {
    // Check if the marker position exists
    if (markerPositions[index]) {
        // Pan to the marker position
        map.panTo(markerPositions[index]);
    }
}

(g => {
    var h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document, b = window;
    b = b[c] || (b[c] = {});
    var d = b.maps || (b.maps = {}), r = new Set, e = new URLSearchParams, u = () => h || (h = new Promise(async (f, n) => {
        await (a = m.createElement("script"));
        e.set("libraries", [...r] + "");
        for (k in g) e.set(k.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), g[k]);
        e.set("callback", c + ".maps." + q);
        a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
        d[q] = f;
        a.onerror = () => h = n(Error(p + " could not load."));
        a.nonce = m.querySelector("script[nonce]")?.nonce || "";
        m.head.append(a);
    }));
    d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n));
})({ key: "your_api_key_here", v: "beta" });

initMap();
