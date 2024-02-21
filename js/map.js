// map.js

let map;
let markerPositions = [];

const apiOptions = {
    apiKey: "your own ApiKey"
}

export async function initMap() {
    const position = { lat: 48.86572, lng: 2.37710 };
    const position2 = { lat: 48.862755, lng: 2.415302 };
    const position3 = { lat: 48.88708, lng: 2.37598 };

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
        title: "QG - 103 rue Oberkampf 75011 Paris",
    });
    markerPositions.push(position);

    const marker2 = new AdvancedMarkerView({
        map: map,
        position: position2,
        title: "Sample O - 18 Av. de la République 93170 Bagnolet",
    });
    markerPositions.push(position2);

    const marker3 = new AdvancedMarkerView({
        map: map,
        position: position3,
        title: "Péniche Antipode - 55 quai de Seine 75019 Paris",
    });
    markerPositions.push(position3);
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
})({ key: "AIzaSyB90QX4PqN47D_0qkp2DtSCaf3LeFC1Y6s", v: "beta" });

initMap();
