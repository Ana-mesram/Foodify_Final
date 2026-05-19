
/* Archivo: foodify.js
    Descripcion: Página de lógica
    Asignatura: Interacción Persona-Ordenador
                Tercero de Ingenieria en Informatica.
                Facultad de Ciencias, Universidad de Salamanca.
    Curso: 2025/26.
    Autoras: Mesón Ramos Ana Li y Salvatierra Jugo Catalina
    Version: 2.1 18/05/26.
*/


// VARIABLES CONSTANTES
// ------------------------------------------
// Alimentos que simulan ser escaneados
const foodDB = 
{
    manzana: {name:'Manzana', calories:95, protein:.5, carbs:25, fat:.3, fiber:4.4, servingSize:182},
    platano: {name:'Plátano', calories:105, protein:1.3, carbs:27, fat:.4, fiber:3.1, servingSize:118},
    naranja: {name:'Naranja', calories:62, protein:1.2, carbs:15, fat:.2, fiber:3.1, servingSize:131},
    fresa: {name:'Fresas', calories:49, protein:1, carbs:12, fat:.5, fiber:3, servingSize:152},
    uva: {name:'Uvas', calories:104, protein:1.1, carbs:27, fat:.2, fiber:1.4, servingSize:151},
    sandia: {name:'Sandía', calories:86, protein:1.7, carbs:22, fat:.4, fiber:1.1, servingSize:286},
    mango: {name:'Mango', calories:99, protein:1.4, carbs:25, fat:.6, fiber:2.6, servingSize:165},
    pina: {name:'Piña', calories:82, protein:.9, carbs:22, fat:.2, fiber:2.3, servingSize:165},
    pollo: {name:'Pechuga de pollo', calories:165, protein:31, carbs:0, fat:3.6, fiber:0, servingSize:100},
    salmon: {name:'Salmón', calories:208, protein:20, carbs:0, fat:13, fiber:0, servingSize:100},
    huevo: {name:'Huevo', calories:78, protein:6, carbs:.6, fat:5, fiber:0, servingSize:50},
    atun: {name:'Atún', calories:132, protein:29, carbs:0, fat:1, fiber:0, servingSize:100},
    carne: {name:'Carne de res', calories:250, protein:26, carbs:0, fat:15, fiber:0, servingSize:100},
    tofu: {name:'Tofu', calories:76, protein:8, carbs:1.9, fat:4.8, fiber:.3, servingSize:100},
    arroz: {name:'Arroz blanco', calories:206, protein:4.3, carbs:45, fat:.4, fiber:.6, servingSize:158},
    pasta: {name:'Pasta cocida', calories:220, protein:8, carbs:43, fat:1.3, fiber:2.5, servingSize:140},
    pan: {name:'Pan integral', calories:81, protein:4, carbs:14, fat:1.1, fiber:1.9, servingSize:33},
    avena: {name:'Avena', calories:154, protein:5.3, carbs:27, fat:2.6, fiber:4, servingSize:40},
    papa: {name:'Papa', calories:161, protein:4.3, carbs:37, fat:.2, fiber:3.8, servingSize:213},
    tortilla: {name:'Tortilla de maíz', calories:52, protein:1.4, carbs:11, fat:.7, fiber:1.5, servingSize:24},
    brocoli: {name:'Brócoli', calories:55, protein:3.7, carbs:11, fat:.6, fiber:5.1, servingSize:156},
    espinaca: {name:'Espinaca', calories:23, protein:2.9, carbs:3.6, fat:.4, fiber:2.2, servingSize:100},
    zanahoria: {name:'Zanahoria', calories:41, protein:.9, carbs:10, fat:.2, fiber:2.8, servingSize:100},
    tomate: {name:'Tomate', calories:22, protein:1.1, carbs:4.8, fat:.2, fiber:1.5, servingSize:123},
    aguacate: {name:'Aguacate', calories:240, protein:3, carbs:13, fat:22, fiber:10, servingSize:150},
    yogur: {name:'Yogur natural', calories:100, protein:17, carbs:6, fat:.7, fiber:0, servingSize:170},
    leche: {name:'Leche entera', calories:149, protein:8, carbs:12, fat:8, fiber:0, servingSize:244},
    queso: {name:'Queso cheddar', calories:113, protein:7, carbs:.4, fat:9, fiber:0, servingSize:28},
    almendras: {name:'Almendras', calories:164, protein:6, carbs:6, fat:14, fiber:3.5, servingSize:28},
    granola: {name:'Granola', calories:210, protein:5, carbs:34, fat:7, fiber:3, servingSize:50},
    chocolate: {name:'Chocolate oscuro', calories:170, protein:2.2, carbs:13, fat:12, fiber:3.1, servingSize:28},
    pizza: {name:'Pizza margarita', calories:266, protein:11, carbs:33, fat:10, fiber:2.3, servingSize:107},
    hamburguesa: {name:'Hamburguesa', calories:354, protein:20, carbs:29, fat:17, fiber:1.3, servingSize:150},
    tacos: {name:'Tacos de carne', calories:226, protein:13, carbs:20, fat:10, fiber:2, servingSize:130},
    sushi: {name:'Sushi (6 pzas)', calories:250, protein:9, carbs:38, fat:7, fiber:1, servingSize:180},
    ensalada: {name:'Ensalada César', calories:180, protein:8, carbs:10, fat:12, fiber:3, servingSize:200},
    burrito: {name:'Burrito', calories:350, protein:15, carbs:45, fat:12, fiber:4, servingSize:200},
    cafe: {name:'Café negro', calories:2, protein:.3, carbs:0, fat:0, fiber:0, servingSize:240},
    'cafe-latte': {name:'Café latte', calories:190, protein:10, carbs:18, fat:7, fiber:0, servingSize:360},
    'te-verde': {name:'Té verde', calories:2, protein:0, carbs:0, fat:0, fiber:0, servingSize:240},
    'jugo-naranja': {name:'Jugo de naranja', calories:112, protein:1.7, carbs:26, fat:.5, fiber:.5, servingSize:248},
    'smoothie-frutas': {name:'Smoothie de frutas', calories:180, protein:3, carbs:40, fat:1, fiber:3, servingSize:350},
    'refresco-cola': {name:'Refresco de cola', calories:140, protein:0, carbs:39, fat:0, fiber:0, servingSize:355},
    cerveza: {name:'Cerveza', calories:153, protein:1.6, carbs:13, fat:0, fiber:0, servingSize:355},
    'vino-tinto': {name:'Vino tinto', calories:125, protein:.1, carbs:4, fat:0, fiber:0, servingSize:148},
    'leche-almendra': {name:'Leche de almendra', calories:39, protein:1, carbs:3.4, fat:2.5, fiber:.5, servingSize:240},
    'proteina-shake': {name:'Batido de proteína', calories:150, protein:25, carbs:8, fat:2, fiber:1, servingSize:300},
    horchata: {name:'Horchata', calories:156, protein:.8, carbs:32, fat:2.7, fiber:.4, servingSize:240}
};
// Objetivos del perfil
const goalsData = 
[
    {key:'maintain', label:'Mantenerme', emoji:'⚖︎'},
    {key:'lose_weight', label:'Bajar de peso', emoji:'↓'},
    {key:'gain_muscle', label:'Ganar músculo', emoji:'⚡︎'},
    {key:'improve_health', label:'Mejorar salud', emoji:'♡'}
];
// Variables de Sliders
const sliderConfigs = 
[
    {key:'calories', label:'Calorías', max:1200, unit:'kcal', color:'var(--primary)'},
    {key:'protein', label:'Proteína', max:100, unit:'g', color:'var(--protein)'},
    {key:'carbs', label:'Carbohidratos', max:150, unit:'g', color:'var(--carbs)'},
    {key:'fat', label:'Grasa', max:80, unit:'g', color:'var(--fat)'},
    {key:'fiber', label:'Fibra', max:30, unit:'g', color:'var(--fiber)'},
];
// Perfil por defecto
const DEFAULT_PROFILE = 
{
    name: 'Usuario',
    age: 25,
    sex: 'male',
    weight: 70,
    height: 175,
    goal: 'maintain'
};


// SIMULACIÓN DE BASES DE DATOS LOCAL
// ------------------------------------------
const obtenerUsuariosDB = () => JSON.parse(localStorage.getItem('usersDB')) || {};
const guardarUsuariosDB = (db) => localStorage.setItem('usersDB', JSON.stringify(db));


// VARIABLES GLOBALES
// ------------------------------------------
let profile=loadProfile();
let history=loadHistory();
let currentView='home';
let selectedFood=null;
let detailValues={};
let modoAuthActual = 'login'; // Puede ser 'login' o 'register'
let usuarioSesionActiva = null;


// FUNCIONES DE ALMACENAMIENTO
// ------------------------------------------
// Cargar el perfil
function loadProfile()
{
  try {
    const r = localStorage.getItem('foodify-profile');
    return r ? JSON.parse(r) : {...DEFAULT_PROFILE}
  } catch {
    return {...DEFAULT_PROFILE}
  }
}
// Guardar perfil
function saveProfileData(p)
{
  localStorage.setItem('foodify-profile', JSON.stringify(p))
}
// Cargar historial
function loadHistory()
{
  try {
    return JSON.parse(localStorage.getItem('foodify-history')||'[]')
  } catch {
    return []
  }
}
// Guardar historial
function saveHistoryData(h)
{
  localStorage.setItem('foodify-history', JSON.stringify(h))
}


// FUNCIONES DE UTILIDAD
// ------------------------------------------
// Fecha de hoy
function todayStr()
{
  return new Date().toISOString().split('T')[0]
}
// CCalorías objetivo
function getCalorieTarget(g)
{
  return g==='lose_weight'?1800:
         g==='gain_muscle'?2800:2200
}
// Proteína máxima
function getProteinMax(g)
{
  return g==='gain_muscle'?180:120
}


// GESTIÓN DE NAVEGACIÓN Y VISTAS
// ------------------------------------------
function navegar(view) 
{
    currentView = view;
    
    // Control de Vistas Activas
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    
    // Mapeo lógico de rutas internas
    let targetView = view;
    if (view === 'home') targetView = 'inicio';
    if (view === 'scan') targetView = 'escaner';
    if (view === 'historial') targetView = 'stats'; // Redirige a la vista de estadísticas
    
    const el = document.getElementById('vista_' + targetView) || document.getElementById('view-' + targetView);
    if (el) el.classList.add('active');
    
    // Actualización del menu inferior
    document.querySelectorAll('.btn_menu').forEach(b => {
        const isSelected = b.dataset.view === view || (view === 'food-detail' && b.dataset.view === 'scan');
        b.classList.toggle('active', isSelected);
    });
    
    // Resetear el scroll 
    const contenido = document.querySelector('.contenido');
    if (contenido) contenido.scrollTop = 0;
    
    // Renderizado según vista activa
    switch (view) 
    {
        case 'home':
            renderInicio();
            break;
        case 'scan':
            renderEscaner();
            break;
        case 'historial':
            renderHistorial();
            break;
        case 'profile':
            renderPerfil();
            break;
    }
}


// MODULO DE INICIO 
// ------------------------------------------
function renderAnilloCalorias(consumed, target) 
{
    const size = 240, sw = 10, r = (size - sw) / 2, c = 2 * Math.PI * r;
    const p = Math.min(consumed / target, 1);
    const off = c * (1 - p);
  
    return `
        <svg width="${size}" height="${size}" style="transform:rotate(-90deg)">
            <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="${sw}"/>
            <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="var(--primary-light)" stroke-width="${sw}" stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${off}" style="transition:stroke-dashoffset .7s ease"/>
        </svg>
        <div style="position:absolute;display:flex;flex-direction:column;align-items:center">
            <span class="text-on-bg" style="font-size:30px;font-weight:700">${consumed}</span>
            <span class="text-on-bg" style="font-size:14px;font-weight:300;opacity:.7">/ ${target} kcal</span>
        </div>`;
}

function renderBarraNutriente(label, value, max, color) 
{
    const pct = Math.min((value / max) * 100, 100);
    return `
        <div class="nutrient-bar">
            <div class="row">
                <div class="label text-on-bg" style="color:#f5f5dc"><span class="dot" style="background:${color}"></span>${label}</div>
                <span class="val text-on-bg">${value}<small>g</small></span>
            </div>
            <div class="track"><div class="fill" style="width:${pct}%;background:${color}"></div></div>
        </div>`;
}

function renderInicio() 
{
    const today = todayStr();
    const todayEntries = history.filter(e => e.date === today);
    
    const totals = todayEntries.reduce((a, e) => ({
        calories: a.calories + e.calories,
        protein: a.protein + e.protein,
        carbs: a.carbs + e.carbs,
        fat: a.fat + e.fat,
        fiber: a.fiber + (e.fiber || 0)
    }), { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 });
    
    const target = getCalorieTarget(profile.goal);
    
    // Inyección de Datos de Usuario
    document.getElementById('home-name').textContent = `Hola, ${profile.name}`;
    const goal = goalsData.find(g => g.key === profile.goal);
    document.getElementById('calorie-ring-wrap').innerHTML = renderAnilloCalorias(totals.calories, target);
    
    // Inyección de Macronutrientes
    document.getElementById('home-nutrients').innerHTML =
        renderBarraNutriente('Proteína', Math.round(totals.protein), getProteinMax(profile.goal), 'var(--protein)') +
        renderBarraNutriente('Carbohidratos', Math.round(totals.carbs), 250, 'var(--carbs)') +
        renderBarraNutriente('Grasa', Math.round(totals.fat), 70, 'var(--fat)') +
        renderBarraNutriente('Fibra', Math.round(totals.fiber), 30, 'var(--fiber)');
}


// MÓDULO DE ESCANEO 
// ------------------------------------------
function renderEscaner() 
{
    document.getElementById('contenido_scaner').innerHTML = `
        <div class="scan-idle">
            <div class="scan-ring-outer">
                <div class="pulse-ring"></div>
                <div class="pulse-ring"></div>
                <button class="scan-btn-big" onclick="escaneando()">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/>
                        <path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/>
                        <line x1="7" y1="12" x2="17" y2="12"/>
                    </svg>
                </button>
            </div>
            <p class="scan-hint">Pulsa para escanear<br>un alimento</p>
        </div>
        <div id="food-list" style="max-height:40vh;overflow-y:auto"></div>`;
}

function escaneando() 
{
    document.getElementById('contenido_scaner').innerHTML = `
        <div style="display:flex;flex-direction:column;align-items:center;padding-top:32px;animation:fadeUp .3s ease-out">
            <div class="scanner-area">
                <svg class="scanner-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M12 3l1.45 4.35L18 9l-4.55 1.65L12 15l-1.45-4.35L6 9l4.55-1.65z"/>
                </svg>
                <div class="scanner-line"></div>
            </div>
            <p class="scanning-text">Escaneando alimento...</p>
        </div>`;
        
    setTimeout(() => 
    {
        // 1. Probabilidad de 1 entre 5 (20%) de provocar un fallo de lectura
        const debeFallar = Math.random() < 0.2;

        if (debeFallar) {
            // Inyectamos el diseño exacto del error solicitado en el contenedor del escáner
            document.getElementById('contenido_scaner').innerHTML = `
                <div class="saved-check" style="animation: fadeIn 0.3s ease; margin-top: 40px; text-align: center;">
                    <div class="check-circle" style="width: 60px; height: 60px; border-radius: 50%; background: rgba(231, 76, 60, 0.2); border: 2px solid #e74c3c; color: #e74c3c; margin: 0 auto 16px; display: flex; align-items: center; justify-content: center;">
                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </div>
                    <div class="text-on-bg" style="font-weight:600; font-size:18px; margin-bottom:6px; color:#fff;">Error de escaneo</div>
                    <div class="text-on-bg" style="font-size:14px; opacity:.7; color:#fff;">No se reconocio el alimento. Inténtalo de nuevo.</div>
                </div>`;

            // Tras 1.5 segundos, reconstruye la interfaz inicial del escáner de manera limpia
            setTimeout(() => {
                renderEscaner();
            }, 3500);

            return; // Detiene la ejecución aquí para que no salte al detalle del producto
        }

        // 2. Flujo normal (80% restante de las veces)
        const keys = Object.keys(foodDB);
        selectFood(keys[Math.floor(Math.random() * keys.length)]); 
    }, 2000);
}

function selectFood(key)
{
  selectedFood = foodDB[key];
  detailValues = {
      calories: selectedFood.calories,
      protein: Math.round(selectedFood.protein),
      carbs: Math.round(selectedFood.carbs),
      fat: Math.round(selectedFood.fat),
      fiber: Math.round(selectedFood.fiber),
      servingSize: selectedFood.servingSize
  };
  navegar('food-detail');
  renderDetalleAlimento();
}

function confirmarComida() 
{
    const entry = { 
        id: (typeof crypto !== 'undefined' && crypto.randomUUID) ? crypto.randomUUID() : Date.now().toString(), 
        name: selectedFood.name, 
        ...detailValues, 
        date: new Date().toISOString().split('T')[0]
    };
    
    if (typeof history !== 'undefined') {
        history = [entry, ...history];
        if (typeof saveHistoryData === 'function') saveHistoryData(history);
    }
    
    selectedFood = null;
    
    const contenedorScanner = document.getElementById('contenido_scaner');
    if (contenedorScanner) {
        contenedorScanner.innerHTML = `
            <div class="saved-check" style="text-align:center;padding-top:40px;animation:fadeUp .3s ease;">
                <div class="check-circle" style="width:60px;height:60px;border-radius:50%;background:rgba(46,204,113,0.1);color:#2ecc71;display:flex;align-items:center;justify-content:center;margin:0 auto 16px;">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                    </svg>
                </div>
                <div class="text-on-bg" style="font-weight:600;font-size:18px;margin-bottom:6px">Guardado con éxito</div>
                <div class="text-on-bg" style="font-size:14px;opacity:.7">El alimento se añadió correctamente a tu día</div>
            </div>`;
    }
    
    setTimeout(() => navegar('home'), 1500);
}

document.addEventListener('DOMContentLoaded', () => {
    if (typeof profile === 'undefined') {
        window.profile = { goal: 'maintain' }; 
    }
    renderEscaner();
});


// MÓDULO DE HISTORIAL
// ------------------------------------------
function renderHistorial() 
{
    // Estructurar el HTML contenedor - Dejamos el título, el log y el contenedor del modal
    const statsView = document.getElementById('contenido_historial');
    statsView.innerHTML = `
        <div id="stats-food-log"></div>
        <div id="history-modal-container"></div>
    `;
        
    const el = document.getElementById('stats-food-log');
    
    // Si el historial global está vacío, mostramos el mensaje de feedback amigable
    if (!history.length) {
        el.innerHTML = `
            <div class="card" style="text-align:center;padding:40px">
                <p style="font-size:14px;color:var(--card-fg)">Tu historial está vacío</p>
                <p style="font-size:11px;color:var(--muted-fg);margin-top:4px">Los alimentos que registres aparecerán aquí</p>
            </div>`;
        return;
    }
    
    // Agrupar los alimentos del historial por su fecha
    const grouped = {};
    history.forEach(e => {
        if (!grouped[e.date]) grouped[e.date] = [];
        grouped[e.date].push(e);
    });
    
    // Dibujar la línea de tiempo (Timeline) con los alimentos consumidos
    el.innerHTML = '<div class="timeline">' + Object.entries(grouped).map(([date, entries]) => {
        const totalCal = entries.reduce((s, e) => s + e.calories, 0);
        return `
            <div class="timeline-group">
                <div class="timeline-dot"></div>
                <div class="timeline-header" style="display:flex; align-items:baseline; gap:8px; margin-bottom:12px;">
                    <h3 class="text-on-bg timeline-date" style="margin:0; font-size:16px;">${escribirFecha(date)}</h3>
                    <span class="timeline-total-badge" style="font-size:12px; font-weight:600; color:var(--primary); background:rgba(var(--primary-rgb), 0.1); padding:2px 8px; border-radius:12px;">
                        ${totalCal} kcal
                    </span>
                </div>
                ${entries.map(e => {
                    // Usamos el id del elemento, o en su defecto el timestamp/index si no tuviera
                    const itemKey = e.id || e.timestamp || history.indexOf(e);
                    return `
                    <div class="history-card" 
                         onclick="abrirDetalleAlimento('${itemKey}')"
                         style="margin-bottom:8px; padding:12px; border-radius:8px; 
                            background: rgba(234, 231, 231, 0.35);
                            box-shadow: 0 2px 8px rgba(0,0,0,0.05); /* Añadido un sutil relieve */
                            cursor:pointer; transition:transform 0.15s ease;"
                         onmouseover="this.style.transform='translateY(-1px)'"
                         onmouseout="this.style.transform='none'">
                        <div class="top" style="display:flex; justify-content:space-between;">
                            <div>
                                <p style="font-size:14px;font-weight:500;color:var(--card-fg);margin:0;">${e.name}</p>
                                <div class="chips" style="display:flex; gap:6px; margin-top:6px; flex-wrap:wrap;">
                                    <span class="nutrient-chip" style="font-size:10px;"><span class="chip-dot" style="background:var(--protein)"></span>P: ${e.protein}g</span>
                                    <span class="nutrient-chip" style="font-size:10px;"><span class="chip-dot" style="background:var(--carbs)"></span>C: ${e.carbs}g</span>
                                    <span class="nutrient-chip" style="font-size:10px;"><span class="chip-dot" style="background:var(--fat)"></span>G: ${e.fat}g</span>
                                    <span class="nutrient-chip" style="font-size:10px;"><span class="chip-dot" style="background:var(--fiber)"></span>F: ${e.fiber || 0}g</span>
                                </div>
                            </div>
                            <p style="font-size:14px;font-weight:700;color:var(--card-fg);margin:0;">${e.calories} <small style="font-size:10px;font-weight:400;color:var(--muted-fg)">kcal</small></p>
                        </div>
                        <p style="font-size:10px;color:var(--muted-fg);margin:4px 0 0 0;">${e.servingSize}g</p>
                    </div>`;
                }).join('')}
            </div>`;
    }).join('') + '</div>';
}
function escribirFecha(d) 
{
    const today = todayStr();
    const yesterday = new Date(Date.now() - 864e5).toISOString().split('T')[0];
    
    switch (true) 
    {
        case (d === today):
            return 'Hoy';
            
        case (d === yesterday):
            return 'Ayer';
            
        default:
            return new Date(d + 'T12:00:00').toLocaleDateString('es-ES', { 
                weekday: 'long', 
                day: 'numeric', 
                month: 'short' 
            });
    }
}

function abrirDetalleAlimento(itemKey) 
{
    const alimento = history.find(e => (e.id == itemKey || e.timestamp == itemKey)) || history[itemKey];
    
    if (!alimento) return;

    // eliminar modal anterior si existe
    cerrarDetalleAlimento();

    const modal = document.createElement('div');
    modal.id = 'food-modal-overlay';

    modal.innerHTML = `
        <div 
            onclick="cerrarDetalleAlimento()"
            style="
                position:fixed;
                inset:0;
                width:100vw;
                height:100vh;
                background:rgba(6, 13, 9, 0.78);
                z-index:99999;
                display:flex;
                align-items:center;
                justify-content:center;
                backdrop-filter:blur(3px);
                padding:20px;
                box-sizing:border-box;
            "
        >

            <div 
                onclick="event.stopPropagation()"
                style="
                    width:100%;
                    max-width:420px;
                    background:var(--color_tarjeta_detalle);
                    border-radius:20px;
                    padding:24px;
                    box-sizing:border-box;
                    box-shadow:0 10px 40px rgba(0,0,0,0.3);
                    animation:scaleCenter .2s ease-out;
                    max-height:90vh;
                    overflow-y:auto;
                "
            >

                <div style="
                    display:flex;
                    justify-content:space-between;
                    align-items:flex-start;
                    margin-bottom:20px;
                    gap:16px;
                ">
                    <div>
                        <h2 style="
                            margin:0;
                            font-size:20px;
                            color:var(--card-fg);
                            font-weight:600;
                        ">
                            ${alimento.name}
                        </h2>

                        <p style="
                            margin:4px 0 0 0;
                            font-size:13px;
                            color:var(--muted-fg);
                        ">
                            ${alimento.servingSize} gramos consumidos
                        </p>
                    </div>

                    <div style="text-align:right;">
                        <span style="
                            font-size:24px;
                            font-weight:700;
                            color:var(--primary);
                        ">
                            ${alimento.calories}
                        </span>

                        <span style="
                            font-size:12px;
                            color:var(--muted-fg);
                            display:block;
                        ">
                            kcal
                        </span>
                    </div>
                </div>

                <hr style="
                    border:0;
                    border-top:1px solid var(--border);
                    margin-bottom:20px;
                ">

                <h4 style="
                    margin:0 0 14px 0;
                    font-size:12px;
                    text-transform:uppercase;
                    color:var(--muted-fg);
                    letter-spacing:.5px;
                ">
                    Desglose Nutricional
                </h4>

                <div style="
                    display:flex;
                    flex-direction:column;
                    gap:12px;
                    margin-bottom:28px;
                ">

                    <div style="display:flex;justify-content:space-between;">
                        <div style="display:flex;align-items:center;gap:8px;">
                            <span style="width:8px;height:8px;border-radius:50%;background:var(--protein)"></span>
                            Proteínas
                        </div>
                        <strong>${alimento.protein}g</strong>
                    </div>

                    <div style="display:flex;justify-content:space-between;">
                        <div style="display:flex;align-items:center;gap:8px;">
                            <span style="width:8px;height:8px;border-radius:50%;background:var(--carbs)"></span>
                            Carbohidratos
                        </div>
                        <strong>${alimento.carbs}g</strong>
                    </div>

                    <div style="display:flex;justify-content:space-between;">
                        <div style="display:flex;align-items:center;gap:8px;">
                            <span style="width:8px;height:8px;border-radius:50%;background:var(--fat)"></span>
                            Grasas
                        </div>
                        <strong>${alimento.fat}g</strong>
                    </div>

                    <div style="display:flex;justify-content:space-between;">
                        <div style="display:flex;align-items:center;gap:8px;">
                            <span style="width:8px;height:8px;border-radius:50%;background:var(--fiber)"></span>
                            Fibra
                        </div>
                        <strong>${alimento.fiber || 0}g</strong>
                    </div>

                </div>

                <div style="display:flex;gap:12px;">

                    <button 
                        onclick="cerrarDetalleAlimento()"
                        style="
                            flex:1;
                            background:var(--boton_cerrar);
                            border:none;
                            color:var(--text-on-bg);
                            padding:12px;
                            border-radius:10px;
                            font-weight:600;
                            cursor:pointer;
                        "
                    >
                        Cerrar
                    </button>

                    <button 
                        onclick="eliminarAlimentoHistorial('${itemKey}')"
                        style="
                            width:48px;
                            height:44px;
                            border:none;
                            border-radius:10px;
                            background:var(--boton_eliminar);
                            color:#e74c3c;
                            display:flex;
                            align-items:center;
                            justify-content:center;
                            cursor:pointer;
                        "
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                            <line x1="10" y1="11" x2="10" y2="17"></line>
                            <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                    </button>

                </div>

            </div>

        </div>
    `;

    document.body.appendChild(modal);

    // bloquear scroll
    document.body.style.overflow = 'hidden';

    // Inyectar nueva animación de escalado y aparición hacia el centro
    if (!document.getElementById('modal-animations-css')) 
    {
        const style = document.createElement('style');
        style.id = 'modal-animations-css';
        style.innerHTML = `
            @keyframes scaleCenter 
            {
                from 
                {
                    opacity: 0;
                    transform: scale(0.92) translateY(20px);
                }
                to 
                {
                    opacity: 1;
                    transform: scale(1) translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
    }
}
function cerrarDetalleAlimento() 
{
    const modal = document.getElementById('food-modal-overlay');
    if (modal) 
    {
        modal.remove();
    }
    document.body.style.overflow = '';
}

function eliminarAlimentoHistorial(itemKey) {
    if (!confirm('¿Quieres eliminar este alimento del historial?')) return;

    const index = history.findIndex(e => (e.id == itemKey || e.timestamp == itemKey));
    
    if (index !== -1) {
        history.splice(index, 1);
    } else if (history[itemKey]) {
        history.splice(itemKey, 1);
    }

    if (typeof saveHistoryData === 'function') {
        saveHistoryData(history);
    }

    cerrarDetalleAlimento();
    // ⚠️ quitamos el renderHistorial de aquí porque si no, renderizas la lista
    // e inmediatamente después la destruyes en confirmarEliminarComida()

    confirmarEliminarComida();
}

function confirmarEliminarComida() 
{
    // 1. Limpiamos referencias por seguridad
    selectedFood = null;
    
    // 2. Ocultar todas las vistas de la app (.view)
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    
    // 3. Activar la vista del historial usando tu ID REAL del HTML: 'view-stats'
    const vistaHistorial = document.getElementById('view-stats');
    if (vistaHistorial) {
        vistaHistorial.classList.add('active');
    }
    
    // 4. Seleccionar el contenedor real de tu HTML: 'contenido_historial'
    const contenedorFeedback = document.getElementById('contenido_historial');
    
    if (contenedorFeedback) {
        // Guardamos la estructura limpia del historial ANTES de meter el cartel de eliminado
        const htmlOriginal = contenedorFeedback.innerHTML;

        // Inyectamos el feedback visual de ¡Eliminado!
        contenedorFeedback.innerHTML = `
            <div class="saved-check" style="text-align:center;padding-top:40px;animation:fadeUp .3s ease;">
                <div class="check-circle" style="width:60px;height:60px;border-radius:50%;background:rgba(46,204,113,0.1);color:#2ecc71;display:flex;align-items:center;justify-content:center;margin:0 auto 16px;">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                    </svg>
                </div>
                <div class="text-on-bg" style="font-weight:600;font-size:18px;margin-bottom:6px">Eliminado con exito</div>
                <div class="text-on-bg" style="font-size:14px;opacity:.7">El alimento se elimino correctamente a tu dia</div>
            </div>`;
            
        // 5. Esperamos 1.5 segundos mostrando el aviso rojo
        setTimeout(() => {
            // Restauramos el esqueleto del contenedor
            contenedorFeedback.innerHTML = htmlOriginal;
            
            // Volvemos a pintar los alimentos que quedan en el historial
            if (typeof renderHistorial === 'function') {
                renderHistorial();
            }

            // Te redirigimos o nos aseguramos de que estás en 'stats'
            if (typeof navegar === 'function') {
                navegar('stats'); 
            }
        }, 1500);
    }
}

// MÓDULO DE PERFIL DE USUARIO
// ------------------------------------------
let perfilEnEdicion = false;

function renderPerfil() {
    const profileView = document.getElementById('contenido_perfil');
    
    const totalFoods = history.length;
    const uniqueDays = new Set(history.map(e => e.date)).size;
    const objetivoActual = goalsData.find(g => g.key === profile.goal)?.label || 'No definido';
    const emojiObjetivo = goalsData.find(g => g.key === profile.goal)?.emoji || '🎯';

    if (!perfilEnEdicion) {
        profileView.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:24px; width:100%;">
                <div>
                    <h1 class="titulo_seccion" style="margin:0 0 4px 0;">Mi Perfil</h1>
                    <div class="subtitulo_seccion" style="display:flex; align-items:center; gap:6px;">
                        <svg class="icono_seccion" viewBox="0 0 24 24" style="width:16px; height:16px;">
                            <path fill="currentColor" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.84-8.84 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                        <span class="subtitulo_seccion">Cuéntanos más sobre ti</span>
                    </div>
                    <br>
                </div>
                <button onclick="abrirAjustes()" style="background:none; border:none; cursor:pointer; color:var(--text-on-bg); display:flex; align-items:center; padding:8px; background:rgba(110,135,115,0.08); border-radius:50%; transition: background 0.2s;" class="text-on-bg" onmouseover="this.style.background='rgba(110,135,115,0.15)'" onmouseout="this.style.background='rgba(110,135,115,0.08)'">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="3"/>
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                    </svg>
                </button>
            </div>

            <div class="card" style="display:flex; align-items:center; gap:16px; margin-bottom:20px;">
                <div class="avatar" style="width:60px; height:60px; border-radius:50%; background:var(--primary); color:white; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:24px;">
                    ${profile.name ? profile.name[0].toUpperCase() : 'U'}
                </div>
                <div>
                    <h2 style="font-size:20px; font-weight:600; margin:0; color:var(--card-fg);">${profile.name || 'Usuario'}</h2>
                    <p style="font-size:13px; color:var(--muted-fg); margin:4px 0 0 0;">${profile.age || 0} años • ${profile.weight || 0} kg • ${profile.height || 0} cm</p>
                </div>
            </div>

            <h3 class="text-on-bg" style="font-size:14px; margin-bottom:10px;">Objetivo Seleccionado</h3>
            <div class="card" style="display:flex; align-items:center; gap:12px; margin-bottom:20px; padding:16px;">
                <span style="font-size:24px;">${emojiObjetivo}</span>
                <p style="margin:0; font-size:14px; font-weight:500; color:var(--card-fg);">${objetivoActual}</p>
            </div>

            <h3 class="text-on-bg" style="font-size:14px; margin-bottom:10px;">Tu Actividad</h3>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
                <div class="stat-card" style="padding:16px; background: rgba(215, 217, 216, 0.59); border: 1px solid rgba(110, 135, 115, 0.2); border-radius:12px; text-align:center; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03), inset 0 1px 2px rgba(255, 255, 255, 0.4); backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);">
                    <div style="font-size:24px; font-weight:700; color:var(--primary);">${totalFoods}</div>
                    <div style="font-size:11px; color:var(--muted-fg); margin-top:4px; font-weight:500;">Alimentos registrados</div>
                </div>
                <div class="stat-card" style="padding:16px; background: rgba(215, 217, 216, 0.59); border: 1px solid rgba(110, 135, 115, 0.2); border-radius:12px; text-align:center; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03), inset 0 1px 2px rgba(255, 255, 255, 0.4); backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);">
                    <div style="font-size:24px; font-weight:700; color:var(--primary);">${uniqueDays}</div>
                    <div style="font-size:11px; color:var(--muted-fg); margin-top:4px; font-weight:500;">Días activo</div>
                </div>
            </div>
        `;
        return;
    }

    profileView.innerHTML = `
        <div style="display:flex; align-items:center; gap:12px; margin-bottom:24px;">
            <button onclick="perfilEnEdicion = false; renderPerfil();" style="background:none; border:none; cursor:pointer; color:var(--text-on-bg); display:flex; align-items:center; padding:4px;" class="text-on-bg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
            </button>
            <h1 class="titulo_seccion" style="margin:0;">Editar Perfil</h1>
        </div>

        <div class="card" style="margin-bottom:20px;">
            <div class="form-group" style="margin-bottom:12px;">
                <label style="display:block; font-size:12px; margin-bottom:4px;" class="text-on-bg">Nombre y Apellidos</label>
                <input class="input" id="prof-name" value="${profile.name}" oninput="aplicarAjustePerfil()">
            </div>
            <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap:10px; margin-bottom:12px;">
                <div>
                    <label style="display:block; font-size:12px; margin-bottom:4px;" class="text-on-bg">Edad</label>
                    <input class="input" type="number" id="prof-age" value="${profile.age}" oninput="aplicarAjustePerfil()">
                </div>
                <div>
                    <label style="display:block; font-size:12px; margin-bottom:4px;" class="text-on-bg">Peso (kg)</label>
                    <input class="input" type="number" id="prof-weight" value="${profile.weight}" oninput="aplicarAjustePerfil()">
                </div>
                <div>
                    <label style="display:block; font-size:12px; margin-bottom:4px;" class="text-on-bg">Alt (cm)</label>
                    <input class="input" type="number" id="prof-height" value="${profile.height}" oninput="aplicarAjustePerfil()">
                </div>
            </div>
            <label style="display:block; font-size:12px; margin-bottom:6px;" class="text-on-bg">Género</label>
            <div id="sex-btns" style="display:flex; gap:8px; margin-bottom:12px;"></div>
        </div>

        <h3 class="text-on-bg" style="font-size:14px; margin-bottom:10px;">Selecciona tu Objetivo</h3>
        <div id="goal-grid" style="display:flex; flex-direction:column; gap:10px; margin-bottom:20px;"></div>

        <div style="display:flex; flex-direction:column; align-items:center; gap:14px; margin-top:28px;">
            <button onclick="confirmarAjustesPerfil()" style="background:var(--primary); border:none; border-radius:10px; color:white; font-weight:600; font-size:14px; padding:12px; width:100%; cursor:pointer;">
                Guardar cambios
            </button>

            <div style="width: 100%; display: flex; align-items: center; justify-content: center; margin: 28px 0 20px 0;">
                <div style="width: 100%; height: 2px; background: linear-gradient(to right, transparent, #cccccc 20%, #cccccc 80%, transparent);"></div>
            </div>

            <div style="display:flex; flex-direction:column; align-items:center; gap:12px; width:100%;">
                <button class="btn-logout" onclick="cerrarSesion()" style="margin:0; width:100%; max-width:340px; padding:10px; font-size:13px; border-radius:10px; display:flex; align-items:center; justify-content:center; gap:6px;">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                        <polyline points="16 17 21 12 16 7"></polyline>
                        <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                    Cerrar Sesión
                </button>

                <button onclick="eliminarCuenta()" style="background:none; border:none; padding:4px; color:#e74c3c; font-weight:500; font-size:11px; text-decoration:underline; cursor:pointer; opacity:0.75; transition:opacity .2s ease;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.75'">
                    Eliminar cuenta permanentemente
                </button>
            </div>
        </div>
    `;

    const sexOpts = [{ key: 'male', label: 'Masculino' }, { key: 'female', label: 'Femenino' }, { key: 'other', label: 'Otro' }];
    document.getElementById('sex-btns').innerHTML = sexOpts.map(s => `
        <button class="sex-btn ${profile.sex === s.key ? 'active' : ''}" style="flex:1; padding:8px; border:1px solid var(--border); border-radius:6px; cursor:pointer;" onclick="profile.sex='${s.key}';saveProfileData(profile);renderPerfil()">${s.label}</button>`).join('');
        
    document.getElementById('goal-grid').innerHTML = goalsData.map(g => {
        const isSelected = profile.goal === g.key;
        return `
        <div class="goal-list-item" 
             style="display:flex; align-items:center; justify-content:between; padding:14px 16px; border:2px solid ${isSelected ? 'var(--primary)' : 'var(--border)'}; background:${isSelected ? 'var(--card-bg)' : 'transparent'}; border-radius:10px; cursor:pointer; transition: all 0.2s ease;" 
             onclick="profile.goal='${g.key}';saveProfileData(profile);renderPerfil()">
            <div style="display:flex; align-items:center; gap:14px; flex:1;">
                <span style="font-size:22px;">${g.emoji}</span>
                <p style="margin:0; font-size:14px; font-weight:${isSelected ? '600' : '400'}; color:var(--color_titulo);">${g.label}</p>
            </div>
            <div style="width:20px; height:20px; border-radius:50%; border:2px solid ${isSelected ? 'var(--primary)' : 'var(--muted-fg)'}; display:flex; align-items:center; justify-content:center; background:${isSelected ? 'var(--primary)' : 'transparent'};">
                ${isSelected ? '<span style="color:white; font-size:11px; font-weight:bold;">✓</span>' : ''}
            </div>
        </div>`;
    }).join('');
}

function confirmarAjustesPerfil() 
{
    const contenedorFeedback = document.getElementById('contenido_perfil');

    if (contenedorFeedback) {
        // En lugar de machacar la estructura global, inyectamos la pantalla de éxito limpia
        contenedorFeedback.innerHTML = `
            <div class="saved-check" style="text-align:center; padding-top:60px; animation:fadeUp .3s ease;">
                <div class="check-circle" style="width:60px; height:60px; border-radius:50%; background:rgba(46,204,113,0.1); color:#2ecc71; display:flex; align-items:center; justify-content:center; margin:0 auto 16px; border:2px solid #2ecc71;">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                    </svg>
                </div>
                <div class="text-on-bg" style="font-weight:600; font-size:18px; margin-bottom:6px; color:#fff;">Cambios guardados</div>
                <div class="text-on-bg" style="font-size:14px; opacity:.7; color:#fff;">Tu perfil se ha actualizado correctamente</div>
            </div>`;
            
        // Esperamos 1.5 segundos con el check verde antes de regresar a la vista de lectura
        setTimeout(() => {
            perfilEnEdicion = false; 
            renderPerfil(); // Redibuja el perfil actualizado en modo lectura limpia
            
            if (typeof navegar === 'function') {
                navegar('profile'); // Te redirige al panel inicial de la app
            }
        }, 1500);
    } else {
        // Contingencia por si falla el DOM
        perfilEnEdicion = false;
        renderPerfil();
    }
}

function aplicarAjustePerfil() {
    profile.name = document.getElementById('prof-name').value;
    profile.age = parseInt(document.getElementById('prof-age').value) || 0;
    profile.weight = parseInt(document.getElementById('prof-weight').value) || 0;
    profile.height = parseInt(document.getElementById('prof-height').value) || 0;
    saveProfileData(profile);
}

function eliminarCuenta() {
    const confirmacion = confirm("¿Estás completamente seguro de que deseas eliminar tu cuenta? Esta acción borrará permanentemente todo tu historial de alimentos y configuración y no se puede deshacer.");
    if (!confirmacion) return;

    const db = obtenerUsuariosDB();
    delete db[usuarioSesionActiva];
    guardarUsuariosDB(db);
    
    usuarioSesionActiva = null;
    perfilEnEdicion = false;
    window.profile = {};
    window.history = [];
    window.location.href = 'index.html';
}

function abrirAjustes() {
    perfilEnEdicion = true;
    renderPerfil();
}

function cerrarAjustes() {
    perfilEnEdicion = false;
    renderPerfil();
}

function cerrarSesion() {
    usuarioSesionActiva = null;
    window.profile = {};
    window.history = [];
    window.location.href = 'index.html'; 
}

// DETALLE Y AJUSTE DE ALIMENTOS
// ------------------------------------------
function renderDetalleAlimento() 
{
    if (!selectedFood) return;
    document.getElementById('detail-name').textContent = selectedFood.name;
    document.getElementById('detail-serving-badge').textContent = detailValues.servingSize + 'g';
    document.getElementById('detail-cal-display').innerHTML = `${detailValues.calories} <span style="font-size:14px;font-weight:400;color:var(--muted-fg)">kcal</span>`;
    
    document.getElementById('detail-sliders').innerHTML = `
        <h3 style="font-size:15px;font-weight:500;color:var(--card-fg);margin-bottom:12px">Ajusta los valores</h3>
        ${sliderConfigs.map(s => {
            const v = detailValues[s.key];
            const pct = Math.min((v / s.max) * 100, 100);
            return `
                <div class="slider-group">
                    <div class="row"><span class="lbl">${s.label}</span><span class="val">${v}<small>${s.unit}</small></span></div>
                    <input type="range" min="0" max="${s.max}" value="${v}" oninput="actualizarSlider('${s.key}',this.value)" style="background:linear-gradient(90deg,${s.color} ${pct}%,var(--border) ${pct}%)">
                </div>`;
        }).join('')}`;
}

function actualizarSlider(key, val) 
{
    detailValues[key] = parseInt(val);
    document.getElementById('detail-cal-display').innerHTML = `${detailValues.calories} <span style="font-size:14px;font-weight:400;color:var(--muted-fg)">kcal</span>`;
    
    const sliders = document.querySelectorAll('#detail-sliders .slider-group');
    sliders.forEach((s, i) => {
        const conf = sliderConfigs[i];
        const value = detailValues[conf.key];
        const pct = Math.min((value / conf.max) * 100, 100);
        s.querySelector('.val').innerHTML = `${value}<small>${conf.unit}</small>`;
        s.querySelector('input').style.background = `linear-gradient(90deg,${conf.color} ${pct}%,var(--border) ${pct}%)`;
    });
}

function autoAjuste() 
{
    if (!selectedFood) return;
    let factor = 1;
    if (profile.goal === 'lose_weight') factor = 0.75;
    else if (profile.goal === 'gain_muscle') factor = 1.3;
    else if (profile.goal === 'improve_health') factor = 0.9;
    
    detailValues = {
        calories: Math.round(selectedFood.calories * factor),
        protein: Math.round(selectedFood.protein * (profile.goal === 'gain_muscle' ? 1.5 : factor)),
        carbs: Math.round(selectedFood.carbs * (profile.goal === 'lose_weight' ? 0.6 : factor)),
        fat: Math.round(selectedFood.fat * factor),
        fiber: Math.round(selectedFood.fiber * factor),
        servingSize: Math.round(selectedFood.servingSize * factor)
    };
    renderDetalleAlimento();
}

function confirmarComida() 
{
    const entry = { id: crypto.randomUUID(), name: selectedFood.name, ...detailValues, date: todayStr() };
    history = [entry, ...history];
    saveHistoryData(history);
    selectedFood = null;
    
    // Cambiar visualización a guardado (Feedback IPO positivo)
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById('vista_escaner').classList.add('active');
    document.getElementById('contenido_scaner').innerHTML = `
        <div class="saved-check">
            <div class="check-circle">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                </svg>
            </div>
            <div class="text-on-bg" style="font-weight:600;font-size:16px;margin-bottom:4px">¡Guardado!</div>
            <div class="text-on-bg" style="font-size:13px;opacity:.7">Alimento registrado correctamente</div>
        </div>`;
        
    setTimeout(() => navegar('home'), 1500);
}


// Inicialización Automática de la App al Cargar
renderInicio();