// ============================================================
// DATOS DE LAS TRUFIS (YACUIBA)
// ============================================================
const lineasData = [
    {
        id: 1,
        nombre: "Trufi Azul A",
        horario: "6:00 am - 8:00 pm",
        frecuencia: "15 minutos",
        tarifa: "3.50 Bs.",
        niños: "Menores de 4 años no pagan",
        tipo: "linea",
        paradasIda: ["Terminal de Buses", "Av. San Martin", "Plaza Principal", "Mercado Obrero", "Hospital Regional", "Fin del recorrido"],
        paradasVuelta: ["Hospital Regional", "Mercado Obrero", "Plaza Principal", "Av. San Martin", "Terminal de Buses"],
        rutaIda: [
            [-21.9833546, -63.6639553], [-21.9855752, -63.6648536], [-21.9856548, -63.6646766], 
            [-21.9859084, -63.6632764], [-21.9867939, -63.6634535], [-21.9864805, -63.6652398], 
            [-21.9865153, -63.6653257], [-21.9862218, -63.6677343], [-21.9889726, -63.6688876], 
            [-21.9890074, -63.6686409], [-21.9891815, -63.6686355], [-21.9894924, -63.6687213], 
            [-21.9916711, -63.6690432], [-21.9914771, -63.6706418], [-21.9950434, -63.6711675], 
            [-21.9947898, -63.6732274], [-21.9946978, -63.6732543], [-21.9946356, -63.6733294], 
            [-21.9946032, -63.6734206], [-21.9946057, -63.6735252], [-21.994653, -63.6736271], 
            [-21.9947749, -63.6736888], [-21.9948868, -63.6736754], [-21.9949738, -63.6736351], 
            [-21.9950211, -63.6736298], [-21.9951902, -63.6736646], [-21.9954041, -63.6737505], 
            [-22.0012178, -63.6767972], [-22.0012974, -63.6764968], [-22.0014466, -63.6760301], 
            [-22.0017102, -63.6754025], [-22.0020583, -63.6745817], [-22.0057687, -63.6764753], 
            [-22.0067033, -63.6769419], [-22.0075786, -63.6774086], [-22.0083749, -63.6756613], 
            [-22.0093323, -63.676128], [-22.0102598, -63.6765947], [-22.0111774, -63.6770721], 
            [-22.0120527, -63.6775361], [-22.0121025, -63.6775281], [-22.0123959, -63.6776756], 
            [-22.0131071, -63.6780645], [-22.0141938, -63.6785634], [-22.0149323, -63.6763774], 
            [-22.0161383, -63.6768656], [-22.0172797, -63.6773323], [-22.0179237, -63.6756103], 
            [-22.0192071, -63.6761177], [-22.0204131, -63.6766435], [-22.0215793, -63.677086], 
            [-22.0224073, -63.6773355], [-22.0227877, -63.6774749], [-22.0229543, -63.6771021], 
            [-22.0242846, -63.6774401], [-22.0245332, -63.6774696], [-22.0246501, -63.6774347], 
            [-22.0247819, -63.6773381], [-22.0248863, -63.6772711], [-22.0249734, -63.6772309], 
            [-22.0250852, -63.6772282], [-22.0263832, -63.6774052], [-22.0281286, -63.6776439], 
            [-22.0296031, -63.6778317], [-22.0310675, -63.6780141], [-22.0323157, -63.6781777], 
            [-22.0338821, -63.6783735], [-22.0352346, -63.6785478], [-22.0365126, -63.6787409], 
            [-22.0379297, -63.6789099], [-22.0395632, -63.6790977], [-22.0413134, -63.6793418], 
            [-22.0425018, -63.6795081], [-22.0428772, -63.6795966], [-22.0435386, -63.6798406], 
            [-22.0441054, -63.6800204], [-22.0442744, -63.6800606], [-22.0443789, -63.6800901], 
            [-22.0445355, -63.6800928], [-22.0453186, -63.6802403], [-22.0463031, -63.6804468], 
            [-22.0471509, -63.6806024], [-22.0472926, -63.680656], [-22.0473895, -63.6806855], 
            [-22.0482572, -63.6808733], [-22.0482795, -63.6808089], [-22.0483243, -63.6807606], 
            [-22.0483889, -63.6807499], [-22.0484784, -63.6807687], [-22.0493187, -63.6810369], 
            [-22.0502733, -63.6812998], [-22.0509446, -63.6813293], [-22.0510067, -63.681332], 
            [-22.0510838, -63.6813481], [-22.0511434, -63.6813802], [-22.0511733, -63.6814285], 
            [-22.0511111, -63.6819515], [-22.0502012, -63.6817665], [-22.0501142, -63.6823941]
        ],
        rutaVuelta: [
            [-22.0501142, -63.6823941], [-22.0481248, -63.6820518], [-22.0464641, -63.6817353], 
            [-22.0463447, -63.6816656], [-22.0462105, -63.6815583], [-22.0437144, -63.6796271], 
            [-22.0435553, -63.6795198], [-22.0434211, -63.6794876], [-22.0403084, -63.679096], 
            [-22.0376133, -63.6787473], [-22.036042, -63.6785274], [-22.0355696, -63.6784523], 
            [-22.0332425, -63.6781733], [-22.0303086, -63.6777925], [-22.0285631, -63.6775511], 
            [-22.026395, -63.6772882], [-22.024734, -63.6770254], [-22.0238339, -63.6768752], 
            [-22.0233068, -63.6768108], [-22.0231924, -63.6768162], [-22.023083, -63.6768322], 
            [-22.0230233, -63.6768376], [-22.0223818, -63.6765962], [-22.0222625, -63.6768162], 
            [-22.0221854, -63.6768832], [-22.022076, -63.6769342], [-22.0219392, -63.6769637], 
            [-22.0218174, -63.6769744], [-22.0217055, -63.6769744], [-22.0215563, -63.6769529], 
            [-22.0214668, -63.6769369], [-22.0204274, -63.6765211], [-22.0192488, -63.6760384], 
            [-22.01903, -63.67665], [-22.0185277, -63.6778704], [-22.0180254, -63.6790908], 
            [-22.0168493, -63.6786053], [-22.0157154, -63.6780769], [-22.0145069, -63.677629], 
            [-22.0133854, -63.6771757], [-22.0124529, -63.6767063], [-22.0115776, -63.6762101], 
            [-22.0106774, -63.6755717], [-22.0114532, -63.6738229], [-22.0118138, -63.6729566], 
            [-22.010844, -63.672573], [-22.0098791, -63.672176], [-22.0089516, -63.6717952], 
            [-22.0083821, -63.6731121], [-22.0074399, -63.6752119], [-22.0071166, -63.6759159], 
            [-22.0062238, -63.6754103], [-22.0055362, -63.6750375], [-22.0053398, -63.6749571], 
            [-22.0048374, -63.6760031], [-22.0043935, -63.6770398], [-22.0031601, -63.6764148], 
            [-22.0023966, -63.6760259], [-22.0008293, -63.6752443], [-22.0006937, -63.6754951], 
            [-22.0006601, -63.6756037], [-22.0006005, -63.6757942], [-22.0003903, -63.6762461], 
            [-21.9968329, -63.6743564], [-21.995863, -63.6738387], [-21.9953159, -63.673549], 
            [-21.9950547, -63.6734176], [-21.9950174, -63.6733452], [-21.9949727, -63.6732996], 
            [-21.9949279, -63.6732513], [-21.994995, -63.6724708], [-21.9951617, -63.6712155], 
            [-21.9950434, -63.6711675], [-21.9935203, -63.6709473], [-21.9921176, -63.6707488], 
            [-21.9914771, -63.6706418], [-21.9916711, -63.6690432], [-21.990307, -63.6688337], 
            [-21.9894924, -63.6687213], [-21.9892077, -63.6686433], [-21.9890074, -63.6686409], 
            [-21.9889726, -63.6688876], [-21.9877925, -63.6683965], [-21.9862269, -63.6677219], 
            [-21.9865195, -63.6652545], [-21.9847785, -63.6645464], [-21.9833546, -63.6639553]
        ]
    },
    {
        id: 2,
        nombre: "Trufi Azul M",
        horario: "6:00 am - 8:00 pm",
        frecuencia: "15 minutos",
        tarifa: "3.50 Bs.",
        niños: "Menores de 4 años no pagan",
        tipo: "linea",
        paradasIda: ["Inicio del recorrido", "Av. Internacional", "Mercado Central", "Fin del recorrido"],
        paradasVuelta: ["Fin del recorrido", "Mercado Central", "Av. Internacional", "Inicio del recorrido"],
        rutaIda: [
            [-21.9913931, -63.6633911], [-21.9987665, -63.6662726], [-21.9996469, -63.6667098], 
            [-21.9989779, -63.6684694], [-22.0028425, -63.6704274], [-22.0019529, -63.6725084], 
            [-22.0016868, -63.6731534], [-22.0017229, -63.6732071], [-22.0012814, -63.6741686], 
            [-22.0057717, -63.6764782], [-22.0066869, -63.6769208], [-22.0075747, -63.6773996], 
            [-22.0083754, -63.6756615], [-22.0102413, -63.6765775], [-22.0111838, -63.6770737], 
            [-22.0120541, -63.677527], [-22.0120898, -63.6775187], [-22.0127907, -63.6778783], 
            [-22.0131165, -63.6780714], [-22.0141932, -63.6785596], [-22.0149404, -63.6763682], 
            [-22.0172803, -63.6773285], [-22.0179306, -63.6755944], [-22.0192161, -63.6761188], 
            [-22.0213322, -63.6770039], [-22.0227967, -63.6774599], [-22.0229459, -63.6771005], 
            [-22.0243259, -63.6774438], [-22.0245671, -63.6774545], [-22.0246964, -63.6774062], 
            [-22.0248282, -63.6773043], [-22.02496, -63.6772319], [-22.0251116, -63.6772212], 
            [-22.0300452, -63.6778972], [-22.0330188, -63.678262], [-22.0356692, -63.6786107], 
            [-22.036082, -63.6786965], [-22.0394483, -63.6790881], [-22.0421732, -63.6794529], 
            [-22.042566, -63.6795173], [-22.0439334, -63.6799679], [-22.0442367, -63.6800483], 
            [-22.044361, -63.6801074], [-22.044453, -63.6800752], [-22.0463723, -63.6804614], 
            [-22.0472126, -63.680617], [-22.0473021, -63.6806706], [-22.0482592, -63.6808745], 
            [-22.0482791, -63.6808128], [-22.0483139, -63.6807618], [-22.0483686, -63.6807484], 
            [-22.0484332, -63.6807511], [-22.0493281, -63.6810327], [-22.0502728, -63.6813009], 
            [-22.0510559, -63.6813358], [-22.0511753, -63.6814029], [-22.0511081, -63.6819527], 
            [-22.0501989, -63.6817686], [-22.0501193, -63.6823828]
        ],
        rutaVuelta: [
            [-22.0501039, -63.6823999], [-22.048115, -63.6820458], [-22.0464295, -63.681724], 
            [-22.0436948, -63.6795943], [-22.0435207, -63.6795085], [-22.0367633, -63.6786233], 
            [-22.0356395, -63.6784624], [-22.0332725, -63.6781781], [-22.0306867, -63.6778294], 
            [-22.0283545, -63.6775344], [-22.0241624, -63.6769496], [-22.0237944, -63.6768692], 
            [-22.0233319, -63.6768048], [-22.0230584, -63.676837], [-22.0229937, -63.6768423], 
            [-22.022387, -63.6765902], [-22.0221831, -63.6769067], [-22.0219195, -63.6769711], 
            [-22.0215664, -63.6769496], [-22.021472, -63.6769389], [-22.0176128, -63.6753779], 
            [-22.0167549, -63.6750077], [-22.015713, -63.6780788], [-22.0133784, -63.6771856], 
            [-22.0124533, -63.6767135], [-22.011573, -63.6762146], [-22.0106778, -63.6755655], 
            [-22.0114437, -63.6738249], [-22.0104876, -63.6733916], [-22.0086659, -63.6725119], 
            [-22.0068108, -63.6715892], [-22.0043965, -63.6770359], [-22.0016112, -63.675625], 
            [-22.0020589, -63.6745951], [-22.0025861, -63.6736026], [-22.003347, -63.6718699], 
            [-21.9997759, -63.6700568], [-22.0004474, -63.6682543], [-21.9992487, -63.6677581], 
            [-21.9996391, -63.6667134], [-21.999526, -63.6666316], [-21.9986605, -63.6662427], 
            [-21.9971833, -63.6656794], [-21.9943802, -63.6645804], [-21.991923, -63.6636309], 
            [-21.9913931, -63.6633911]
        ]
    }
];

const microsData = [];

let lineaActual = null;
let microActual = null;
let mapInstance = null;
let mapMainInstance = null;
let lineaVista = 'ida';   

// ============================================================
// INICIALIZACIÓN Y PANTALLAS
// ============================================================
function initMainMap() {
    if (typeof L === 'undefined') return;
    const center = [-22.015, -63.678];
    mapMainInstance = L.map('mapMain', { zoomControl: false }).setView(center, 14);
    L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', { maxZoom: 20, subdomains: ['mt0', 'mt1', 'mt2', 'mt3'] }).addTo(mapMainInstance);
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(screenId);
    if (target) target.classList.add('active');
    
    if (screenId === 'lineasScreen') renderizarLineas();
    if (screenId === 'mainScreen' && mapMainInstance) setTimeout(() => mapMainInstance.invalidateSize(), 300);
    if (screenId === 'detalleScreen' && mapInstance) setTimeout(() => mapInstance.invalidateSize(), 300);
}

function cerrarDetalle() {
    if (mapInstance) { try { mapInstance.remove(); } catch (e) {} mapInstance = null; }
    showScreen('lineasScreen');
}

// ============================================================
// LÓGICA DE LÍNEAS
// ============================================================
function renderizarLineas() {
    const container = document.getElementById('lineasList');
    container.innerHTML = lineasData.map(l => `
        <div class="item-card" onclick="abrirDetalle(${l.id})">
            <span class="nombre"><i class="fas fa-bus linea-icon"></i>${l.nombre}</span>
            <div style="display:flex;align-items:center;gap:10px;">
                <span class="badge">${l.paradasIda.length} paradas</span>
                <span class="icono"><i class="fas fa-chevron-right"></i></span>
            </div>
        </div>
    `).join('');
}
function filtrarLineas() { renderizarLineas(); }

function abrirDetalle(id) {
    lineaActual = lineasData.find(l => l.id === id);
    if (!lineaActual) return;
    
    lineaVista = 'ida';
    document.getElementById('detalleTitulo').textContent = lineaActual.nombre;
    showScreen('detalleScreen');
    
    // Restauramos el color original del icono de sync
    const iconoSync = document.getElementById('iconoVuelta');
    if(iconoSync) iconoSync.style.color = '#c5e16a';

    setTimeout(() => { mostrarMapa(lineaActual.rutaIda, '#2e86c1'); }, 150);
}

// ============================================================
// PANTALLA DE DATOS
// ============================================================
function mostrarDatos() {
    if (!lineaActual) return;
    document.getElementById('datosContent').innerHTML = `
        <div class="data-header-info">
            <div class="data-icon-box"><i class="fas fa-bus"></i></div>
            <h2>${lineaActual.nombre}</h2>
        </div>
        <div class="data-row"><div class="data-label">Horario:</div><div class="data-value">${lineaActual.horario}</div></div>
        <div class="data-row border-bottom"><div class="data-label">Frecuencia:</div><div class="data-value">${lineaActual.frecuencia}</div></div>
        <div class="data-row"><div class="data-label">Tarifa:</div><div class="data-value"><div>General: ${lineaActual.tarifa}</div></div></div>
        <div class="data-row border-bottom"><div class="data-label">Niños:</div><div class="data-value">${lineaActual.niños}</div></div>
    `;
    document.getElementById('datosTituloHeader').textContent = "Datos de la Línea";
    showScreen('datosScreen');
}
function cerrarDatos() { showScreen('detalleScreen'); }

// ============================================================
// PANTALLA DE RECORRIDO
// ============================================================
function mostrarRecorrido() {
    if (!lineaActual) return;
    mostrarMapa(lineaActual.rutaIda, '#2e86c1');
    
    let html = '<div class="stops-list">';
    lineaActual.paradasIda.forEach((parada) => {
        html += `
            <div class="stop-row">
                <div class="stop-indicator">
                    <div class="stop-dot" style="background: #2e86c1; border-color: #bbdefb;"></div>
                    <div class="stop-line"></div>
                </div>
                <div class="stop-info">
                    <div class="stop-name">${parada}</div>
                </div>
            </div>
        `;
    });
    html += '</div>';
    
    document.getElementById('recorridoContent').innerHTML = html;
    document.getElementById('recorridoTituloHeader').textContent = "Recorrido";
    showScreen('recorridoScreen');
}

function cerrarRecorrido() {
    showScreen('detalleScreen');
    setTimeout(() => { if (mapInstance) mapInstance.invalidateSize(); }, 200);
}

// ============================================================
// BOTÓN RUTA DE VUELTA (Solo cambia el mapa y el color del icono)
// ============================================================
function mostrarVuelta() {
    if (!lineaActual) return;
    const iconoSync = document.getElementById('iconoVuelta');

    if (lineaVista === 'ida') {
        lineaVista = 'vuelta';
        mostrarMapa(lineaActual.rutaVuelta, '#e74c3c');
        if (iconoSync) iconoSync.style.color = '#e74c3c'; // Se pone rojo
    } else {
        lineaVista = 'ida';
        mostrarMapa(lineaActual.rutaIda, '#2e86c1');
        if (iconoSync) iconoSync.style.color = '#c5e16a'; // Vuelve a su color
    }
}

// ============================================================
// MAPA Y GPS
// ============================================================
function mostrarMapa(coordenadas, color) {
    if (typeof L === 'undefined' || !coordenadas) return;
    if (mapInstance) { try { mapInstance.remove(); } catch (e) {} mapInstance = null; }
    
    const center = [coordenadas.reduce((s, c) => s + c[0], 0) / coordenadas.length, coordenadas.reduce((s, c) => s + c[1], 0) / coordenadas.length];
    mapInstance = L.map('map', { zoomControl: false }).setView(center, 15);
    L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', { maxZoom: 20, subdomains: ['mt0', 'mt1', 'mt2', 'mt3'] }).addTo(mapInstance);
    
    const polyline = L.polyline(coordenadas, { color: color, weight: 5, opacity: 0.9 }).addTo(mapInstance);
    
    // Iconos sin cuadrados
    L.marker(coordenadas[0], { icon: L.divIcon({ html: '🟢', iconSize: [28, 28], className: 'custom-icon' }) }).addTo(mapInstance);
    L.marker(coordenadas[coordenadas.length - 1], { icon: L.divIcon({ html: '🔴', iconSize: [28, 28], className: 'custom-icon' }) }).addTo(mapInstance);
    
    setTimeout(() => { if (mapInstance) { mapInstance.invalidateSize(); mapInstance.fitBounds(polyline.getBounds(), { padding: [40, 40] }); } }, 200);
}

function ubicarme() {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(function(pos) {
        const ubi = [pos.coords.latitude, pos.coords.longitude];
        if (mapMainInstance) { 
            mapMainInstance.setView(ubi, 16); 
            L.marker(ubi, { icon: L.divIcon({ html: '📍', className: 'custom-icon', iconSize: [30, 30] }) }).addTo(mapMainInstance).bindPopup('¡Aquí estás!').openPopup(); 
        }
    });
}

function ubicarmeLinea() {
    if (!navigator.geolocation || !mapInstance) return;
    navigator.geolocation.getCurrentPosition(function(pos) {
        const ubi = [pos.coords.latitude, pos.coords.longitude];
        mapInstance.setView(ubi, 17); 
        L.marker(ubi, { icon: L.divIcon({ html: '📍', className: 'custom-icon', iconSize: [30, 30] }) }).addTo(mapInstance).bindPopup('¡Aquí estás!').openPopup();
    });
}

function ubicarmeMicro() {}

// ============================================================
// INICIO DE LA APP
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    try { initMainMap(); } catch(e) {}
    renderizarLineas();
    setTimeout(() => { document.getElementById('splashScreen').classList.add('fade-out'); setTimeout(() => showScreen('mainScreen'), 200); }, 800);
});