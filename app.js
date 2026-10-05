/**
 * LÓGICA DE LA APLICACIÓN MULTI-MATERIA - CÁTEDRA INTERACTIVA
 * Soporta Electrónica I, Teoría de Circuitos III y nuevas materias de forma modular.
 */

// Estado global de la aplicación
const AppState = {
  vistaActual: 'materias', // 'materias' (portal de recuadros) | 'ejercicios' (interfaz de materia)
  materiaSeleccionada: 'electronica-1', // 'electronica-1' | 'circuitos-3'
  temaSeleccionado: 'cc', // ID de la unidad activa dentro de la materia seleccionada
  textoBusqueda: '',
  teoriaAbierta: false,
  ejercicioActualId: null,
  pasoActualIndex: 0,
  unidadesColapsadas: {}, // { [unidadId]: boolean }
  pistasReveladasPorPaso: {}, // { [ejercicioId_pasoId]: numeroPistasMostradas }
  solucionReveladaPorPaso: {}, // { [ejercicioId_pasoId]: boolean } - Solo en memoria para la sesión activa
  progresoUsuario: {}, // { [ejercicioId]: { resuelto: bool, pasosCompletados: [pasoId, ...] } }
  listaEjerciciosMovilAbierta: false
};

// Obtener la configuración de la materia activa
function getMateriaConfig() {
  if (typeof MATERIAS_CONFIG !== 'undefined' && MATERIAS_CONFIG[AppState.materiaSeleccionada]) {
    return MATERIAS_CONFIG[AppState.materiaSeleccionada];
  }
  return {
    id: 'electronica-1',
    codigo: '3703',
    nombre: 'Electrónica I',
    subtitulo: 'Resolución guiada paso a paso y con pistas progresivas',
    icono: '⚡',
    unidades: []
  };
}

// Obtener el banco de ejercicios de la materia activa
function getBancoEjerciciosActual() {
  if (typeof BANCO_MATERIAS !== 'undefined' && Array.isArray(BANCO_MATERIAS[AppState.materiaSeleccionada])) {
    return BANCO_MATERIAS[AppState.materiaSeleccionada];
  }
  if (typeof BANCO_EJERCICIOS !== 'undefined') {
    return BANCO_EJERCICIOS;
  }
  return [];
}

// Cargar progreso de localStorage específico por materia
function cargarProgreso() {
  try {
    // Limpia cualquier residuo de soluciones guardadas previamente para que no queden permanentes
    localStorage.removeItem('electronica1_soluciones');
    AppState.solucionReveladaPorPaso = {};

    const materiaKey = AppState.materiaSeleccionada;
    const data = localStorage.getItem(`progreso_${materiaKey}`) || localStorage.getItem('electronica1_progreso');
    if (data) {
      AppState.progresoUsuario = JSON.parse(data);
    } else {
      AppState.progresoUsuario = {};
    }

    const pistas = localStorage.getItem(`pistas_${materiaKey}`);
    if (pistas) {
      AppState.pistasReveladasPorPaso = JSON.parse(pistas);
    } else {
      AppState.pistasReveladasPorPaso = {};
    }
  } catch (e) {
    console.error("Error al cargar progreso:", e);
  }
}

// Guardar progreso en localStorage específico por materia
function guardarProgreso() {
  try {
    const materiaKey = AppState.materiaSeleccionada;
    localStorage.setItem(`progreso_${materiaKey}`, JSON.stringify(AppState.progresoUsuario));
    localStorage.setItem(`pistas_${materiaKey}`, JSON.stringify(AppState.pistasReveladasPorPaso));
  } catch (e) {
    console.error("Error al guardar progreso:", e);
  }
}

// Helper para renderizar KaTeX de forma directa y a prueba de fallos
function renderLatex(formula, displayMode = false) {
  if (!formula) return '';
  const formulaLimpia = formula.trim().replace(/^\$+|\$+$/g, '');
  try {
    if (typeof katex !== 'undefined') {
      return katex.renderToString(formulaLimpia, { displayMode, throwOnError: false });
    }
  } catch (e) {
    console.warn("KaTeX render error:", e);
  }
  return formulaLimpia;
}

// Alternar visibilidad del marco teórico
function toggleTeoria() {
  AppState.teoriaAbierta = !AppState.teoriaAbierta;
  const panel = document.getElementById('panel-teoria');
  const btn = document.getElementById('btn-toggle-teoria-badge');
  if (panel) {
    if (AppState.teoriaAbierta) {
      panel.classList.remove('hidden');
      if (btn) btn.innerText = 'Ocultar ▲';
    } else {
      panel.classList.add('hidden');
      if (btn) btn.innerText = 'Ver conceptos ▼';
    }
  }
}

// Renderizador seguro para fórmulas KaTeX dentro de textos
function formatearTextoConLatex(texto) {
  if (!texto) return '';

  // Procesa bloques $$ ... $$
  let resultado = texto.replace(/\$\$([\s\S]*?)\$\$/g, (match, formula) => {
    return `<div class="katex-display my-2 overflow-x-auto">${renderLatex(formula, true)}</div>`;
  });

  // Procesa bloques $ ... $
  resultado = resultado.replace(/\$([^\$\n]+?)\$/g, (match, formula) => {
    return renderLatex(formula, false);
  });

  // Headers markdown
  resultado = resultado.replace(/^#### (.*?)$/gm, '<h5 class="text-sm font-bold text-indigo-300 mt-3 mb-1">$1</h5>');
  resultado = resultado.replace(/^### (.*?)$/gm, '<h4 class="text-base font-bold text-indigo-200 mt-4 mb-2 border-b border-indigo-900/50 pb-1">$1</h4>');

  // Markdown básico: negrita, cursiva, listas
  resultado = resultado.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  resultado = resultado.replace(/\*(.*?)\*/g, '<em>$1</em>');
  resultado = resultado.replace(/\n\n/g, '<br/><br/>');
  resultado = resultado.replace(/\n- /g, '<br/>• ');

  return resultado;
}

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', () => {
  // Asegurar registro de materias
  if (typeof BANCO_MATERIAS !== 'undefined') {
    if (typeof BANCO_EJERCICIOS !== 'undefined') {
      BANCO_MATERIAS['electronica-1'] = BANCO_EJERCICIOS;
    }
    if (typeof EJERCICIOS_CIRCUITOS_3 !== 'undefined') {
      BANCO_MATERIAS['circuitos-3'] = EJERCICIOS_CIRCUITOS_3;
    }
  }

  configurarEventosUI();
  renderizarGridMaterias();

  // Escuchar navegación del navegador (adelante / atrás)
  window.addEventListener('hashchange', procesarRutaHash);

  // Escuchar redimensionamiento para resetear drawer móvil al pasar a desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024 && AppState.listaEjerciciosMovilAbierta) {
      toggleListaEjerciciosMovil(false);
    }
  });

  // Procesar ruta inicial según hash
  if (window.location.hash.startsWith('#materia=')) {
    procesarRutaHash();
  } else {
    volverAMaterias();
  }
});

// Procesar el hash de la URL para navegación profunda
function procesarRutaHash() {
  const hash = window.location.hash;
  if (hash.startsWith('#materia=')) {
    const materiaId = hash.replace('#materia=', '').trim();
    if (typeof MATERIAS_CONFIG !== 'undefined' && MATERIAS_CONFIG[materiaId]) {
      abrirMateria(materiaId);
      return;
    }
  }
  volverAMaterias();
}

// Renderizar la grilla de recuadros de selección de materias
function renderizarGridMaterias() {
  const container = document.getElementById('grid-materias-cards');
  if (!container || typeof MATERIAS_CONFIG === 'undefined') return;

  const materias = Object.values(MATERIAS_CONFIG);

  let html = materias.map(materia => {
    const banco = (typeof BANCO_MATERIAS !== 'undefined' && BANCO_MATERIAS[materia.id])
      ? BANCO_MATERIAS[materia.id]
      : (materia.id === 'electronica-1' && typeof BANCO_EJERCICIOS !== 'undefined' ? BANCO_EJERCICIOS : []);

    const totalEjercicios = banco.length;
    let totalPasos = 0;
    let pasosResueltos = 0;
    let ejerciciosResueltos = 0;

    try {
      const data = localStorage.getItem(`progreso_${materia.id}`) || (materia.id === 'electronica-1' ? localStorage.getItem('electronica1_progreso') : null);
      if (data) {
        const prog = JSON.parse(data);
        banco.forEach(ej => {
          const pasosLen = ej.pasos ? ej.pasos.length : 0;
          totalPasos += pasosLen;
          if (prog[ej.id] && prog[ej.id].pasosCompletados) {
            pasosResueltos += prog[ej.id].pasosCompletados.length;
            if (prog[ej.id].pasosCompletados.length === pasosLen && pasosLen > 0) {
              ejerciciosResueltos++;
            }
          }
        });
      } else {
        banco.forEach(ej => {
          totalPasos += ej.pasos ? ej.pasos.length : 0;
        });
      }
    } catch (e) {
      console.warn("Error leyendo progreso:", e);
    }

    const porcentaje = totalPasos > 0 ? Math.round((pasosResueltos / totalPasos) * 100) : 0;
    const unidadesCount = materia.unidades ? materia.unidades.length : 0;

    return `
      <div 
        class="bg-slate-900/90 border border-slate-800 hover:border-slate-700/80 rounded-3xl p-6 sm:p-7 shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between group relative overflow-hidden"
      >
        <!-- Acento decorativo gradiente de fondo -->
        <div class="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br ${materia.colorGradiente || 'from-blue-600 to-indigo-500'} opacity-10 rounded-bl-full pointer-events-none group-hover:opacity-20 transition-opacity"></div>

        <div>
          <!-- Cabecera: Icono y código -->
          <div class="flex items-center justify-between gap-3 mb-4">
            <div class="w-14 h-14 rounded-2xl bg-gradient-to-tr ${materia.colorGradiente || 'from-blue-600 to-indigo-500'} flex items-center justify-center text-2xl shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform shrink-0">
              ${materia.icono}
            </div>
            <div class="flex items-center gap-2">
              <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                Código [${materia.codigo}]
              </span>
            </div>
          </div>

          <!-- Título y descripción -->
          <h3 class="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
            ${materia.nombre}
          </h3>
          <p class="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
            ${materia.descripcion}
          </p>

          <!-- Badges informativos de contenido -->
          <div class="flex flex-wrap gap-2 mb-6">
            <span class="text-xs px-2.5 py-1 rounded-xl bg-slate-800/80 text-slate-300 border border-slate-700/60 flex items-center gap-1.5 font-medium">
              <span>📚</span> ${unidadesCount} ${unidadesCount === 1 ? 'Unidad' : 'Unidades'}
            </span>
            <span class="text-xs px-2.5 py-1 rounded-xl bg-slate-800/80 text-slate-300 border border-slate-700/60 flex items-center gap-1.5 font-medium">
              <span>✏️</span> ${totalEjercicios} ejercicios
            </span>
            <span class="text-xs px-2.5 py-1 rounded-xl bg-slate-800/80 text-slate-300 border border-slate-700/60 flex items-center gap-1.5 font-medium">
              <span>👣</span> ${totalPasos} etapas guiadas
            </span>
          </div>
        </div>

        <!-- Barra de avance personal y botón de entrada -->
        <div class="pt-4 border-t border-slate-800/80">
          <div class="flex items-center justify-between text-xs text-slate-400 mb-2 font-medium">
            <span>Tu avance: <strong class="text-slate-200">${ejerciciosResueltos}/${totalEjercicios} resueltos</strong></span>
            <span class="font-bold ${porcentaje > 0 ? 'text-blue-400' : 'text-slate-500'}">${porcentaje}%</span>
          </div>
          <div class="w-full bg-slate-800 rounded-full h-2 mb-5 overflow-hidden border border-slate-700/60">
            <div 
              class="h-full bg-gradient-to-r ${materia.colorGradiente || 'from-blue-500 to-emerald-400'} rounded-full transition-all duration-500" 
              style="width: ${porcentaje}%"
            ></div>
          </div>

          <button 
            onclick="abrirMateria('${materia.id}')"
            class="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r ${materia.colorGradiente || 'from-blue-600 to-indigo-600'} hover:opacity-95 active:scale-[0.99] text-white font-semibold text-sm shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-2 min-h-[48px]"
          >
            <span>Ingresar a la materia</span>
            <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = html;
}

// Abrir entorno de ejercicios de una materia específica
function abrirMateria(materiaId) {
  if (typeof MATERIAS_CONFIG === 'undefined' || !MATERIAS_CONFIG[materiaId]) return;

  AppState.vistaActual = 'ejercicios';
  AppState.materiaSeleccionada = materiaId;
  localStorage.setItem('electronica_materia_activa', materiaId);

  // Actualizar URL hash si difiere
  if (window.location.hash !== `#materia=${materiaId}`) {
    window.location.hash = `materia=${materiaId}`;
  }

  // Alternar visibilidad de las vistas
  const vistaSeleccion = document.getElementById('vista-seleccion-materias');
  const vistaMateria = document.getElementById('vista-materia-ejercicios');
  if (vistaSeleccion) vistaSeleccion.classList.add('hidden');
  if (vistaMateria) vistaMateria.classList.remove('hidden');

  // Ajustar cabecera para modo materia
  const btnVolver = document.getElementById('header-btn-volver-materias');
  const infoMateria = document.getElementById('header-info-materia');
  const statsContainer = document.getElementById('header-stats-container');
  const btnReiniciar = document.getElementById('btn-reiniciar-progreso');
  const taglinePortal = document.getElementById('header-portal-tagline');

  if (btnVolver) {
    btnVolver.classList.remove('hidden');
    btnVolver.classList.add('flex');
  }
  if (infoMateria) {
    infoMateria.classList.remove('hidden');
    infoMateria.classList.add('flex');
  }
  if (statsContainer) {
    statsContainer.className = 'hidden sm:flex flex-col items-end';
  }
  if (btnReiniciar) {
    btnReiniciar.className = 'p-1.5 sm:p-2 rounded-xl bg-slate-800/80 hover:bg-rose-900/40 text-slate-400 hover:text-rose-300 border border-slate-700/60 transition-all hidden sm:block shrink-0';
  }
  if (taglinePortal) {
    taglinePortal.classList.add('hidden');
    taglinePortal.classList.remove('flex');
  }

  const materia = getMateriaConfig();
  AppState.temaSeleccionado = (materia.unidades && materia.unidades.length > 0) ? materia.unidades[0].id : 'todos';
  AppState.solucionReveladaPorPaso = {};
  AppState.textoBusqueda = '';
  AppState.unidadesColapsadas = {};

  cargarProgreso();
  actualizarUIHeaderMateria();
  renderizarFiltrosUnidades();

  const banco = getBancoEjerciciosActual();
  const primerEjercicio = banco.find(e => e.categoria === AppState.temaSeleccionado) || banco[0];
  if (primerEjercicio) {
    seleccionarEjercicio(primerEjercicio.id);
  } else {
    AppState.ejercicioActualId = null;
    const container = document.getElementById('vista-ejercicio');
    if (container) container.innerHTML = `<div class="p-8 text-center text-slate-400">Esta materia no contiene ejercicios aún.</div>`;
  }

  renderizarListaEjercicios();
  actualizarEstadisticasGenerales();

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Volver al portal principal de selección de materias
function volverAMaterias() {
  AppState.vistaActual = 'materias';
  toggleListaEjerciciosMovil(false);

  if (window.location.hash !== '#materias') {
    window.location.hash = 'materias';
  }

  const vistaSeleccion = document.getElementById('vista-seleccion-materias');
  const vistaMateria = document.getElementById('vista-materia-ejercicios');
  if (vistaSeleccion) vistaSeleccion.classList.remove('hidden');
  if (vistaMateria) vistaMateria.classList.add('hidden');

  const btnVolver = document.getElementById('header-btn-volver-materias');
  const infoMateria = document.getElementById('header-info-materia');
  const statsContainer = document.getElementById('header-stats-container');
  const btnReiniciar = document.getElementById('btn-reiniciar-progreso');
  const taglinePortal = document.getElementById('header-portal-tagline');

  if (btnVolver) {
    btnVolver.classList.add('hidden');
    btnVolver.classList.remove('flex');
  }
  if (infoMateria) {
    infoMateria.classList.add('hidden');
    infoMateria.classList.remove('flex');
  }
  if (statsContainer) {
    statsContainer.className = 'hidden flex-col items-end';
  }
  if (btnReiniciar) {
    btnReiniciar.className = 'hidden';
  }
  if (taglinePortal) {
    taglinePortal.classList.remove('hidden');
    taglinePortal.classList.add('flex');
  }

  document.title = 'Plataforma Interactiva - Cátedra de Ingeniería Electrónica';

  renderizarGridMaterias();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Compatibilidad
function cambiarMateria(materiaId) {
  abrirMateria(materiaId);
}

// Alternar cajón flotante de lista de ejercicios en móvil (< lg)
function toggleListaEjerciciosMovil(forzarEstado) {
  const columna = document.getElementById('columna-lista-ejercicios');
  const icono = document.getElementById('icono-desplegable-movil');
  if (!columna) return;

  const esMovil = window.innerWidth < 1024;
  if (!esMovil) {
    columna.classList.remove('fixed', 'inset-0', 'top-16', 'z-50', 'bg-slate-950/98', 'backdrop-blur-xl', 'p-4', 'overflow-y-auto', 'animate-drawer');
    columna.classList.add('hidden', 'lg:block');
    AppState.listaEjerciciosMovilAbierta = false;
    return;
  }

  const nuevoEstado = forzarEstado !== undefined ? forzarEstado : !AppState.listaEjerciciosMovilAbierta;
  AppState.listaEjerciciosMovilAbierta = nuevoEstado;

  if (nuevoEstado) {
    columna.classList.remove('hidden');
    columna.classList.add('fixed', 'inset-0', 'top-16', 'z-50', 'bg-slate-950/98', 'backdrop-blur-xl', 'p-4', 'overflow-y-auto', 'animate-drawer');
    if (icono) icono.innerText = 'Cerrar ▲';
  } else {
    columna.classList.add('hidden');
    columna.classList.remove('fixed', 'inset-0', 'top-16', 'z-50', 'bg-slate-950/98', 'backdrop-blur-xl', 'p-4', 'overflow-y-auto', 'animate-drawer');
    if (icono) icono.innerText = 'Lista ▼';
  }
}

// Navegación rápida entre ejercicios anterior/siguiente para móvil y atajos
function navegarEjercicioRelativo(delta) {
  const banco = getBancoEjerciciosActual();
  if (!banco || banco.length === 0) return;

  const ejerciciosDisponibles = AppState.temaSeleccionado === 'todos'
    ? banco
    : banco.filter(e => e.categoria === AppState.temaSeleccionado);

  const lista = ejerciciosDisponibles.length > 0 ? ejerciciosDisponibles : banco;
  const indexActual = lista.findIndex(e => e.id === AppState.ejercicioActualId);

  let siguienteIndex = indexActual + delta;
  if (siguienteIndex < 0) {
    siguienteIndex = lista.length - 1;
  } else if (siguienteIndex >= lista.length) {
    siguienteIndex = 0;
  }

  const siguienteEjercicio = lista[siguienteIndex];
  if (siguienteEjercicio) {
    seleccionarEjercicio(siguienteEjercicio.id);
  }
}

// Actualizar textos e íconos del header según la materia activa
function actualizarUIHeaderMateria() {
  const materia = getMateriaConfig();

  const iconoBox = document.getElementById('materia-icono-box');
  if (iconoBox) {
    iconoBox.innerText = materia.icono;
    if (materia.colorGradiente) {
      iconoBox.className = `w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr ${materia.colorGradiente} flex items-center justify-center shadow-lg shadow-blue-500/25 text-base sm:text-xl select-none shrink-0`;
    }
  }

  const nombreHeader = document.getElementById('materia-nombre-header');
  if (nombreHeader) {
    nombreHeader.innerText = materia.nombre;
  }

  const subtitulo = document.getElementById('materia-subtitulo');
  if (subtitulo) subtitulo.innerText = materia.subtitulo || materia.descripcion;

  const badge = document.getElementById('materia-badge');
  if (badge) {
    badge.innerText = `Asignatura [${materia.codigo}]`;
  }

  document.title = `${materia.nombre} - Ejercicios Guiados Paso a Paso`;
}

// Renderizar dinámicamente los botones de filtrado de unidades según la materia actual
function renderizarFiltrosUnidades() {
  const container = document.getElementById('contenedor-filtros-unidades');
  if (!container) return;

  const materia = getMateriaConfig();
  const unidades = materia.unidades || [];

  let html = `
    <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2 hidden md:inline">Unidad:</span>
  `;

  unidades.forEach(u => {
    const esActivo = AppState.temaSeleccionado === u.id;
    html += `
      <button 
        onclick="cambiarTema('${u.id}')"
        data-tema="${u.id}"
        class="px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
          esActivo 
            ? 'bg-blue-600 text-white shadow-md ring-2 ring-blue-400/30' 
            : 'bg-slate-800/90 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60'
        }"
      >
        <span>${u.icono}</span>
        <span>${u.titulo}</span>
      </button>
    `;
  });

  const todosActivo = AppState.temaSeleccionado === 'todos';
  html += `
    <button 
      onclick="cambiarTema('todos')"
      data-tema="todos"
      class="px-3 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
        todosActivo 
          ? 'bg-blue-600 text-white shadow-md ring-2 ring-blue-400/30 font-semibold' 
          : 'bg-slate-800/90 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60'
      }"
    >
      <span>📚 Todas las unidades</span>
    </button>
  `;

  container.innerHTML = html;
}

// Configurar escuchadores de eventos generales
function configurarEventosUI() {
  // Botón para reiniciar progreso
  const btnReiniciar = document.getElementById('btn-reiniciar-progreso');
  if (btnReiniciar) {
    btnReiniciar.addEventListener('click', () => {
      const materia = getMateriaConfig();
      if (confirm(`¿Deseas reiniciar tu progreso en ${materia.nombre}?`)) {
        AppState.progresoUsuario = {};
        AppState.pistasReveladasPorPaso = {};
        AppState.solucionReveladaPorPaso = {};
        guardarProgreso();
        renderizarListaEjercicios();
        if (AppState.ejercicioActualId) {
          seleccionarEjercicio(AppState.ejercicioActualId);
        }
        actualizarEstadisticasGenerales();
      }
    });
  }
}

// Alternar colapso de una unidad en la lista lateral
function toggleColapsoUnidad(unidadId) {
  AppState.unidadesColapsadas[unidadId] = !AppState.unidadesColapsadas[unidadId];
  renderizarListaEjercicios();
}

// Cambiar filtro de categoría / unidad
function cambiarTema(tema) {
  AppState.temaSeleccionado = tema;

  renderizarFiltrosUnidades();

  const materia = getMateriaConfig();
  const banco = getBancoEjerciciosActual();

  // Si el ejercicio actual no pertenece a la unidad seleccionada (y no es 'todos'), seleccionar el primero de la unidad
  if (tema !== 'todos') {
    const ejercicioActual = banco.find(e => e.id === AppState.ejercicioActualId);
    if (!ejercicioActual || ejercicioActual.categoria !== tema) {
      const primerEjercicioUnidad = banco.find(e => e.categoria === tema);
      if (primerEjercicioUnidad) {
        seleccionarEjercicio(primerEjercicioUnidad.id);
      }
    }
  }

  // Actualizar badge indicador en el panel lateral
  const badge = document.getElementById('unidad-filtro-badge');
  if (badge) {
    const unidadConfig = (materia.unidades || []).find(u => u.id === tema);
    badge.innerText = unidadConfig ? `Unidad ${unidadConfig.numero}` : 'Todas las unidades';
  }

  renderizarListaEjercicios();
}

// Filtrar por término de búsqueda en tiempo real
function filtrarPorTexto(texto) {
  AppState.textoBusqueda = (texto || '').trim().toLowerCase();
  renderizarListaEjercicios();
}

// Renderizar la lista lateral de ejercicios agrupada por Unidades
function renderizarListaEjercicios() {
  const container = document.getElementById('lista-ejercicios');
  if (!container) return;

  const materia = getMateriaConfig();
  const banco = getBancoEjerciciosActual();
  const unidades = materia.unidades || [];

  // Determinar qué unidades mostrar
  const unidadesAMostrar = AppState.temaSeleccionado === 'todos'
    ? unidades
    : unidades.filter(u => u.id === AppState.temaSeleccionado);

  let htmlTotal = '';
  let totalEjerciciosCoincidentes = 0;

  unidadesAMostrar.forEach(unidad => {
    // Filtrar ejercicios de esta unidad
    let ejerciciosDeUnidad = banco.filter(ej => ej.categoria === unidad.id);

    // Si hay búsqueda por texto:
    if (AppState.textoBusqueda) {
      const q = AppState.textoBusqueda;
      ejerciciosDeUnidad = ejerciciosDeUnidad.filter(ej => {
        return ej.titulo.toLowerCase().includes(q) ||
               ej.enunciado.toLowerCase().includes(q) ||
               ej.dificultad.toLowerCase().includes(q) ||
               ej.id.toLowerCase().includes(q);
      });
    }

    if (ejerciciosDeUnidad.length === 0) {
      if (AppState.textoBusqueda) return;
    }

    totalEjerciciosCoincidentes += ejerciciosDeUnidad.length;

    // Calcular progreso de esta unidad
    const totalEjerciciosUnidad = banco.filter(ej => ej.categoria === unidad.id).length;
    let completadosUnidad = 0;
    banco.filter(ej => ej.categoria === unidad.id).forEach(ej => {
      const prog = AppState.progresoUsuario[ej.id];
      if (prog && prog.pasosCompletados && prog.pasosCompletados.length === ej.pasos.length) {
        completadosUnidad++;
      }
    });

    const estaColapsada = !!AppState.unidadesColapsadas[unidad.id];
    const porcentajeUnidad = totalEjerciciosUnidad > 0 ? Math.round((completadosUnidad / totalEjerciciosUnidad) * 100) : 0;

    // Encabezado de la unidad
    htmlTotal += `
      <div class="mb-4 bg-slate-950/40 rounded-2xl border border-slate-800/80 overflow-hidden shadow-sm">
        <div 
          onclick="toggleColapsoUnidad('${unidad.id}')"
          class="p-3.5 bg-slate-800/80 hover:bg-slate-800 cursor-pointer flex items-center justify-between border-b border-slate-700/60 transition-colors select-none"
        >
          <div class="flex items-center gap-2.5">
            <span class="text-base">${unidad.icono}</span>
            <div>
              <h4 class="font-bold text-xs text-slate-100 tracking-wide uppercase">
                ${unidad.titulo}
              </h4>
              <p class="text-[11px] text-slate-400 leading-tight">
                ${completadosUnidad} de ${totalEjerciciosUnidad} resueltos (${porcentajeUnidad}%)
              </p>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-12 bg-slate-700 rounded-full h-1.5 hidden sm:block overflow-hidden">
              <div class="h-1.5 bg-emerald-500 rounded-full transition-all duration-300" style="width: ${porcentajeUnidad}%"></div>
            </div>
            <span class="text-xs text-slate-400 font-mono">
              ${estaColapsada ? '▼' : '▲'}
            </span>
          </div>
        </div>

        <!-- Lista de tarjetas de ejercicios de esta unidad -->
        <div class="p-2 space-y-2 ${estaColapsada ? 'hidden' : 'block'}">
          ${ejerciciosDeUnidad.map((ej, idx) => {
            const esSeleccionado = ej.id === AppState.ejercicioActualId;
            const datosProgreso = AppState.progresoUsuario[ej.id] || { pasosCompletados: [] };
            const completado = datosProgreso.pasosCompletados.length === ej.pasos.length;
            const pasosHechos = datosProgreso.pasosCompletados.length;
            const totalPasos = ej.pasos.length;
            const porcentaje = Math.round((pasosHechos / totalPasos) * 100);

            const badgeDificultad = {
              'Básico': 'bg-emerald-900/60 text-emerald-300 border border-emerald-700/50',
              'Fácil': 'bg-emerald-900/60 text-emerald-300 border border-emerald-700/50',
              'Intermedio': 'bg-amber-900/60 text-amber-300 border border-amber-700/50',
              'Media': 'bg-amber-900/60 text-amber-300 border border-amber-700/50',
              'Avanzado': 'bg-rose-900/60 text-rose-300 border border-rose-700/50',
              'Avanzada': 'bg-rose-900/60 text-rose-300 border border-rose-700/50'
            }[ej.dificultad] || 'bg-slate-700 text-slate-300';

            const badgeTipo = {
              'guiado': '<span class="text-[10px] px-1.5 py-0.2 rounded font-medium bg-indigo-900/60 text-indigo-300 border border-indigo-700/50">📚 Guía</span>',
              'practica': '<span class="text-[10px] px-1.5 py-0.2 rounded font-medium bg-slate-800 text-slate-300 border border-slate-700/60">✏️ Práctica</span>',
              'desafio': '<span class="text-[10px] px-1.5 py-0.2 rounded font-semibold bg-amber-900/60 text-amber-200 border border-amber-600/50">🏆 Desafío</span>'
            }[ej.tipo] || '';

            const numeroItem = `${unidad.numero}.${idx + 1}`;

            return `
              <div 
                onclick="seleccionarEjercicio('${ej.id}')"
                class="exercise-item cursor-pointer p-3 rounded-xl border transition-all ${
                  esSeleccionado 
                    ? 'bg-blue-950/70 border-blue-500 shadow-md ring-1 ring-blue-500/40' 
                    : 'bg-slate-900/80 hover:bg-slate-800/90 border-slate-800 hover:border-slate-700'
                }"
              >
                <div class="flex items-center justify-between gap-2 mb-1.5">
                  <div class="flex items-center gap-1.5 flex-wrap">
                    <span class="font-mono text-xs font-bold ${esSeleccionado ? 'text-blue-300' : 'text-slate-400'}">
                      Ej. ${numeroItem}
                    </span>
                    ${badgeTipo}
                    <span class="text-[10px] px-2 py-0.2 rounded-full font-medium ${badgeDificultad}">
                      ${ej.dificultad}
                    </span>
                  </div>
                  ${completado 
                    ? '<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">✓ Resuelto</span>'
                    : `<span class="text-[10px] text-slate-400 font-mono">${pasosHechos}/${totalPasos} pasos</span>`
                  }
                </div>
                <h5 class="font-semibold text-xs text-slate-100 leading-snug line-clamp-2 mb-2">
                  ${formatearTextoConLatex(ej.titulo)}
                </h5>
                <div class="w-full bg-slate-800 rounded-full h-1 overflow-hidden">
                  <div class="h-1 rounded-full transition-all duration-300 ${completado ? 'bg-emerald-500' : 'bg-blue-500'}" style="width: ${porcentaje}%"></div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  });

  if (!htmlTotal || totalEjerciciosCoincidentes === 0) {
    container.innerHTML = `<div class="p-6 text-center text-slate-400 text-xs">No se encontraron ejercicios con ese criterio en esta materia.</div>`;
    return;
  }

  container.innerHTML = htmlTotal;
}

// Seleccionar un ejercicio y preparar la vista
function seleccionarEjercicio(id) {
  AppState.ejercicioActualId = id;
  AppState.teoriaAbierta = false;
  AppState.solucionReveladaPorPaso = {}; // Limpia las soluciones para que no queden abiertas al pasar a otro ejercicio

  const banco = getBancoEjerciciosActual();
  const ejercicio = banco.find(e => e.id === id);
  if (!ejercicio) return;

  const datosProgreso = AppState.progresoUsuario[id] || { pasosCompletados: [] };
  
  // Posicionarse en el primer paso que no esté completado aún
  let primerPasoIncompleto = ejercicio.pasos.findIndex(p => !datosProgreso.pasosCompletados.includes(p.id));
  if (primerPasoIncompleto === -1) {
    primerPasoIncompleto = 0;
  }
  AppState.pasoActualIndex = primerPasoIncompleto;

  // Asegurar que la unidad del ejercicio seleccionado no esté colapsada
  AppState.unidadesColapsadas[ejercicio.categoria] = false;

  // Actualizar etiqueta en barra de navegación móvil
  const labelMovil = document.getElementById('label-ejercicio-movil');
  if (labelMovil) {
    const materia = getMateriaConfig();
    const unidad = (materia.unidades || []).find(u => u.id === ejercicio.categoria);
    const numUnidad = unidad ? unidad.numero : '1';
    const indexEnUnidad = (banco.filter(e => e.categoria === ejercicio.categoria).findIndex(e => e.id === ejercicio.id) + 1);
    const tituloPlano = (ejercicio.titulo || '').replace(/<[^>]*>?/gm, '').replace(/\$/g, '');
    labelMovil.innerText = `Ej. ${numUnidad}.${indexEnUnidad} - ${tituloPlano.slice(0, 24)}...`;
  }

  // Cerrar cajón móvil si estaba abierto
  if (AppState.listaEjerciciosMovilAbierta) {
    toggleListaEjerciciosMovil(false);
  }

  renderizarListaEjercicios();
  renderizarDetalleEjercicio();
}

// Renderizar el contenido completo del ejercicio actual
function renderizarDetalleEjercicio() {
  const banco = getBancoEjerciciosActual();
  const ejercicio = banco.find(e => e.id === AppState.ejercicioActualId);
  const container = document.getElementById('vista-ejercicio');
  if (!ejercicio || !container) return;

  const materia = getMateriaConfig();
  const datosProgreso = AppState.progresoUsuario[ejercicio.id] || { pasosCompletados: [] };
  const totalPasos = ejercicio.pasos.length;
  const pasoActual = ejercicio.pasos[AppState.pasoActualIndex];
  const yaCompletadoEstePaso = datosProgreso.pasosCompletados.includes(pasoActual.id);
  const ejercicioCompletado = datosProgreso.pasosCompletados.length === totalPasos;

  const clavePaso = `${ejercicio.id}_${pasoActual.id}`;
  const pistasUsadas = AppState.pistasReveladasPorPaso[clavePaso] || 0;
  // Solo se muestra si el usuario lo pidió en esta vista o acaba de resolverlo (no permanentemente)
  const solucionRevelada = !!AppState.solucionReveladaPorPaso[clavePaso];

  const configUnidad = (materia.unidades || []).find(u => u.id === ejercicio.categoria) || {
    numero: 1,
    titulo: 'Unidad de Estudio',
    icono: '📘'
  };
  const indiceEnUnidad = banco.filter(e => e.categoria === ejercicio.categoria).findIndex(e => e.id === ejercicio.id);
  const numeroEjercicio = `${configUnidad.numero}.${indiceEnUnidad !== -1 ? indiceEnUnidad + 1 : 1}`;

  container.innerHTML = `
    <div class="animate-fade-in space-y-6">
      <!-- Encabezado del ejercicio -->
      <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-5 md:p-6 shadow-xl">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="text-xs uppercase tracking-wider font-bold px-2.5 py-1 rounded-md bg-blue-500/20 text-blue-300 border border-blue-500/30 flex items-center gap-1.5">
              <span>${configUnidad.icono}</span>
              <span>${configUnidad.titulo}</span>
            </span>
            <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-slate-900/80 text-blue-400 border border-slate-700/60">
              Problema ${numeroEjercicio}
            </span>
            ${ejercicio.tipo === 'guiado' ? '<span class="text-xs font-bold px-2.5 py-1 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">📚 Problema Guía / Tutorial</span>' : ''}
            ${ejercicio.tipo === 'desafio' ? '<span class="text-xs font-bold px-2.5 py-1 rounded-md bg-amber-500/20 text-amber-200 border border-amber-500/40">🏆 Desafío para Clase / Parcial</span>' : ''}
            ${ejercicio.tipo === 'practica' ? '<span class="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700/60">✏️ Ejercicio de Práctica</span>' : ''}
            <span class="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-700/60 text-slate-300">
              Dificultad: ${ejercicio.dificultad}
            </span>
          </div>
          ${ejercicioCompletado ? `
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              ¡Ejercicio resuelto al 100%!
            </div>
          ` : ''}
        </div>
        <h2 class="text-xl md:text-2xl font-bold text-white mb-3">
          ${formatearTextoConLatex(ejercicio.titulo)}
        </h2>
        <div class="text-slate-300 text-sm md:text-base leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-700/50">
          ${formatearTextoConLatex(ejercicio.enunciado)}
        </div>

        <!-- Apartado teórico y conceptos clave -->
        ${ejercicio.teoria ? `
          <div class="mt-4 pt-3 border-t border-slate-700/60">
            <button 
              onclick="toggleTeoria()" 
              class="w-full py-2.5 px-4 rounded-xl bg-indigo-950/50 hover:bg-indigo-900/60 text-indigo-300 border border-indigo-500/40 font-semibold text-xs sm:text-sm flex items-center justify-between transition-all group"
            >
              <span class="flex items-center gap-2">
                <svg class="w-5 h-5 text-indigo-400 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                <span>📖 Repaso Conceptual y Fórmulas Teóricas</span>
              </span>
              <span id="btn-toggle-teoria-badge" class="text-xs bg-indigo-900/80 px-2.5 py-1 rounded-lg text-indigo-200 font-mono">
                ${AppState.teoriaAbierta ? 'Ocultar ▲' : 'Ver conceptos ▼'}
              </span>
            </button>

            <div id="panel-teoria" class="${AppState.teoriaAbierta ? 'block' : 'hidden'} animate-fade-in mt-3 p-5 rounded-xl bg-slate-900/95 border border-indigo-500/40 text-slate-200 text-sm leading-relaxed overflow-x-auto shadow-inner">
              ${formatearTextoConLatex(ejercicio.teoria)}
            </div>
          </div>
        ` : ''}
      </div>

      <!-- Diagrama esquemático y datos del circuito -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="lg:col-span-2 bg-slate-800/90 border border-slate-700/80 rounded-2xl p-5 shadow-xl flex flex-col justify-center circuit-container">
          <h3 class="text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
            <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
            Diagrama esquemático
          </h3>
          <div class="overflow-x-auto bg-white rounded-xl p-2 flex items-center justify-center">
            ${ejercicio.circuitoSvg}
          </div>
        </div>

        <!-- Panel de datos clave -->
        <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-5 shadow-xl flex flex-col">
          <h3 class="text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
            <svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
            Parámetros de partida
          </h3>
          <div class="space-y-2 flex-1">
            ${(Array.isArray(ejercicio.datos) ? ejercicio.datos : Object.entries(ejercicio.datos || {}).map(([clave, valor]) => ({ clave, valor }))).map(d => `
              <div class="flex items-center justify-between py-2 px-3 bg-slate-900/60 rounded-lg text-sm border border-slate-800">
                <span class="font-mono text-blue-300 font-bold">${renderLatex(d.clave)}</span>
                <span class="font-semibold text-slate-200">${formatearTextoConLatex(d.valor)}</span>
              </div>
            `).join('')}
          </div>
          <div class="mt-4 p-3 bg-blue-950/40 rounded-xl border border-blue-900/60 text-xs text-blue-300 leading-normal">
            💡 <strong>Consejo:</strong> Resuelve cada etapa en tu cuaderno u hoja de cálculos antes de comprobar el resultado aquí.
          </div>
        </div>
      </div>

      <!-- Barra de navegación por pasos (Stepper) -->
      <div class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 shadow-xl">
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Resolución guiada paso a paso
          </span>
          <span class="text-xs font-semibold text-blue-400">
            Paso ${AppState.pasoActualIndex + 1} de ${totalPasos}
          </span>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
          ${ejercicio.pasos.map((p, idx) => {
            const pasoCompletado = datosProgreso.pasosCompletados.includes(p.id);
            const esActivo = idx === AppState.pasoActualIndex;
            return `
              <button 
                onclick="cambiarPaso(${idx})"
                class="py-2.5 px-3 rounded-xl text-left border transition-all flex items-center justify-between ${
                  esActivo 
                    ? 'bg-blue-600/30 border-blue-500 text-white font-semibold' 
                    : pasoCompletado
                    ? 'bg-emerald-950/30 border-emerald-700/50 text-emerald-300'
                    : 'bg-slate-900/40 border-slate-700/60 text-slate-400 hover:bg-slate-700/40'
                }"
              >
                <div class="truncate text-xs font-medium">
                  <span class="opacity-75">Paso ${idx + 1}:</span> ${p.simbolo ? `<span class="font-bold text-blue-300">${renderLatex(p.simbolo)}</span>` : formatearTextoConLatex(p.titulo)}
                </div>
                ${pasoCompletado ? '<span class="text-emerald-400 text-xs ml-1 font-bold">✓</span>' : ''}
              </button>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Área de trabajo del paso actual -->
      <div class="bg-slate-800/95 border-2 ${yaCompletadoEstePaso ? 'border-emerald-500/50' : 'border-blue-500/50'} rounded-2xl p-5 md:p-7 shadow-2xl relative">
        <div class="flex items-start justify-between gap-4 mb-4 pb-4 border-b border-slate-700">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950 px-2.5 py-1 rounded-md border border-blue-800">
              Etapa ${AppState.pasoActualIndex + 1} de ${totalPasos}
            </span>
            <h3 class="text-lg md:text-xl font-bold text-white mt-2">
              ${formatearTextoConLatex(pasoActual.titulo)}
            </h3>
          </div>
          ${yaCompletadoEstePaso ? `
            <div class="px-3 py-1.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-xl text-xs font-bold flex items-center gap-1.5">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              Completado con éxito
            </div>
          ` : ''}
        </div>

        <!-- Pregunta o consigna del paso -->
        <div class="text-slate-200 text-sm md:text-base leading-relaxed mb-6 bg-slate-900/50 p-4 rounded-xl border border-slate-800">
          ${formatearTextoConLatex(pasoActual.pregunta)}
        </div>

        <!-- Sistema de pistas dinámicas progresivas -->
        <div class="mb-6 space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
              <svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
              Pistas de ayuda (${pistasUsadas} de ${pasoActual.pistas.length} disponibles)
            </span>
            ${pistasUsadas < pasoActual.pistas.length && !yaCompletadoEstePaso ? `
              <button 
                onclick="revelarSiguientePista('${ejercicio.id}', '${pasoActual.id}')"
                class="text-xs px-3 py-1.5 rounded-lg bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 border border-amber-500/40 transition-all font-semibold flex items-center gap-1.5"
              >
                💡 ¿Trabado? Pedir pista ${pistasUsadas + 1}
              </button>
            ` : ''}
          </div>

          <!-- Contenedor de pistas reveladas -->
          ${pasoActual.pistas.slice(0, pistasUsadas).map((pista, idx) => `
            <div class="animate-fade-in p-4 rounded-xl bg-amber-950/30 border border-amber-500/40 text-amber-100 text-sm leading-relaxed">
              ${formatearTextoConLatex(pista)}
            </div>
          `).join('')}
        </div>

        <!-- Input de respuesta y validación -->
        <div class="bg-slate-900/80 p-5 rounded-xl border border-slate-700/80 mb-4">
          <label class="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wide">
            Ingresa tu resultado numérico para <span class="font-bold text-blue-400 font-mono text-sm">${renderLatex(pasoActual.simbolo)}</span>:
          </label>
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div class="relative flex-1">
              <input 
                type="text" 
                id="input-respuesta"
                inputmode="decimal"
                enterkeyhint="done"
                autocomplete="off"
                placeholder="Ingresa tu resultado (ej: 12.5)"
                value="${yaCompletadoEstePaso ? (pasoActual.valorEsperado !== undefined ? pasoActual.valorEsperado : pasoActual.solucion) : ''}"
                ${yaCompletadoEstePaso ? 'disabled' : ''}
                onkeypress="if(event.key === 'Enter') verificarRespuesta('${pasoActual.id}')"
                class="w-full bg-slate-950 border border-slate-600 focus:border-blue-500 rounded-xl px-4 py-3.5 text-white font-mono text-base focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all min-h-[48px]"
              />
              <span class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">
                ${pasoActual.unidad}
              </span>
            </div>
            
            ${!yaCompletadoEstePaso ? `
              <button 
                onclick="verificarRespuesta('${pasoActual.id}')"
                class="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 min-h-[48px] active:scale-95 text-sm sm:text-base shrink-0"
              >
                Comprobar
              </button>
            ` : `
              <button 
                onclick="irAlSiguientePaso()"
                class="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 min-h-[48px] active:scale-95 text-sm sm:text-base shrink-0"
              >
                Siguiente paso →
              </button>
            `}
          </div>

          <!-- Mensaje de retroalimentación inmediata -->
          <div id="feedback-paso" class="mt-3 hidden text-sm font-medium rounded-lg p-3"></div>
        </div>

        <!-- Sección de solución completa explicada -->
        ${solucionRevelada ? `
          <div class="animate-fade-in mt-6 bg-slate-900/90 border border-emerald-500/40 rounded-xl p-5">
            <div class="flex items-center justify-between gap-2 mb-3">
              <div class="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Desarrollo analítico y justificación del resultado:
              </div>
              <button 
                onclick="ocultarSolucionPaso('${ejercicio.id}', '${pasoActual.id}')"
                class="text-xs px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors flex items-center gap-1"
              >
                <span>Ocultar desarrollo</span>
                <span>▲</span>
              </button>
            </div>
            <div class="text-slate-300 text-sm leading-relaxed">
              ${formatearTextoConLatex(pasoActual.explicacionPaso || pasoActual.explicacion)}
            </div>
          </div>
        ` : `
          <div class="flex items-center justify-end mt-4">
            <button 
              onclick="revelarSolucionPaso('${ejercicio.id}', '${pasoActual.id}', ${yaCompletadoEstePaso})"
              class="text-xs text-slate-400 hover:text-slate-200 underline transition-colors"
            >
              ${yaCompletadoEstePaso ? '📖 Ver desarrollo analítico paso a paso' : '¿No logras llegar al resultado? Ver desarrollo paso a paso'}
            </button>
          </div>
        `}
      </div>
    </div>
  `;

  // Renderizar cualquier fórmula matemática restante
  try {
    if (typeof window.renderMathInElement === 'function') {
      window.renderMathInElement(container, {
        delimiters: [
          {left: '$$', right: '$$', display: true},
          {left: '$', right: '$', display: false}
        ],
        throwOnError: false
      });
    }
  } catch (e) {
    console.warn("renderMathInElement error:", e);
  }
}

// Cambiar de paso con el stepper
function cambiarPaso(index) {
  AppState.pasoActualIndex = index;
  renderizarDetalleEjercicio();
}

// Revelar la siguiente pista del paso
function revelarSiguientePista(ejercicioId, pasoId) {
  const clave = `${ejercicioId}_${pasoId}`;
  const pistasActuales = AppState.pistasReveladasPorPaso[clave] || 0;
  AppState.pistasReveladasPorPaso[clave] = pistasActuales + 1;
  guardarProgreso();
  renderizarDetalleEjercicio();
}

// Revelar la solución directa o justificación en pantalla (sin persistir en localStorage)
function revelarSolucionPaso(ejercicioId, pasoId, yaCompletado) {
  if (yaCompletado || confirm('¿Deseas ver la explicación y respuesta de este paso? Intenta primero revisar las pistas si aún no las has leído todas.')) {
    const clave = `${ejercicioId}_${pasoId}`;
    AppState.solucionReveladaPorPaso[clave] = true;
    renderizarDetalleEjercicio();
  }
}

// Ocultar el desarrollo paso a paso
function ocultarSolucionPaso(ejercicioId, pasoId) {
  const clave = `${ejercicioId}_${pasoId}`;
  AppState.solucionReveladaPorPaso[clave] = false;
  renderizarDetalleEjercicio();
}

// Verificación matemática y numérica con tolerancia
function verificarRespuesta(pasoId) {
  const input = document.getElementById('input-respuesta');
  const feedback = document.getElementById('feedback-paso');
  if (!input || !feedback) return;

  const valorTexto = input.value.trim().replace(',', '.');
  const valorIngresado = parseFloat(valorTexto);

  if (isNaN(valorIngresado)) {
    feedback.className = "mt-3 block text-sm font-medium rounded-lg p-3 bg-amber-950/50 border border-amber-500/50 text-amber-300";
    feedback.innerHTML = "⚠️ Por favor, ingresa un valor numérico válido (ejemplo: 12.5 o 0.05).";
    return;
  }

  const banco = getBancoEjerciciosActual();
  const ejercicio = banco.find(e => e.id === AppState.ejercicioActualId);
  const paso = ejercicio.pasos.find(p => p.id === pasoId);
  if (!paso) return;

  const esperado = (paso.valorEsperado !== undefined ? paso.valorEsperado : paso.solucion);
  const tolerancia = paso.tolerancia || 0.05; // Por defecto 5% de tolerancia

  // Cálculo de error relativo y absoluto
  const errorAbsoluto = Math.abs(valorIngresado - esperado);
  const margenPermitido = Math.max(Math.abs(esperado * tolerancia), 0.01);

  if (errorAbsoluto <= margenPermitido) {
    // ¡RESPUESTA CORRECTA!
    feedback.className = "mt-3 block text-sm font-medium rounded-lg p-3 bg-emerald-950/60 border border-emerald-500/60 text-emerald-300";
    feedback.innerHTML = formatearTextoConLatex(`🎉 <strong>¡Excelente!</strong> Tu resultado es correcto ($${valorIngresado}\\text{ ${paso.unidad}}$).`);

    // Mostrar inmediatamente la justificación para este paso
    const clave = `${ejercicio.id}_${pasoId}`;
    AppState.solucionReveladaPorPaso[clave] = true;

    // Registrar en progreso
    if (!AppState.progresoUsuario[ejercicio.id]) {
      AppState.progresoUsuario[ejercicio.id] = { pasosCompletados: [] };
    }
    if (!AppState.progresoUsuario[ejercicio.id].pasosCompletados.includes(pasoId)) {
      AppState.progresoUsuario[ejercicio.id].pasosCompletados.push(pasoId);
    }
    guardarProgreso();

    // Actualizar UI tras un breve delay o al presionar continuar
    setTimeout(() => {
      renderizarListaEjercicios();
      renderizarDetalleEjercicio();
      actualizarEstadisticasGenerales();
    }, 900);

  } else {
    // Respuesta incorrecta: dar orientación
    const ratio = valorIngresado / esperado;
    let orientacion = "";
    
    if (Math.abs(ratio - 1000) < 0.1 || Math.abs(ratio - 0.001) < 0.0001) {
      orientacion = " (Revisa las unidades: parece un error de factor 1000 entre mA y A o kΩ y Ω).";
    } else if (valorIngresado * esperado < 0) {
      orientacion = " (Ten en cuenta el signo o sentido de referencia solicitado).";
    }

    feedback.className = "mt-3 block text-sm font-medium rounded-lg p-3 bg-rose-950/60 border border-rose-500/60 text-rose-300";
    feedback.innerHTML = formatearTextoConLatex(`❌ El valor ingresado ($${valorIngresado}\\text{ ${paso.unidad}}$) no coincide con el esperado.${orientacion} <br/><span class="text-xs opacity-90 mt-1 inline-block">Prueba solicitando una pista o revisando el marco teórico.</span>`);
  }
}

// Avanzar al siguiente paso del ejercicio
function irAlSiguientePaso() {
  const banco = getBancoEjerciciosActual();
  const ejercicio = banco.find(e => e.id === AppState.ejercicioActualId);
  if (!ejercicio) return;

  if (AppState.pasoActualIndex < ejercicio.pasos.length - 1) {
    AppState.pasoActualIndex++;
    renderizarDetalleEjercicio();
  } else {
    alert("🎉 ¡Felicitaciones! Has completado todos los pasos de este ejercicio.");
  }
}

// Actualizar barra y contadores generales de progreso para la materia activa
function actualizarEstadisticasGenerales() {
  const banco = getBancoEjerciciosActual();
  const totalEjercicios = banco.length;
  let ejerciciosCompletos = 0;
  let pasosTotales = 0;
  let pasosCompletadosTotales = 0;

  banco.forEach(ej => {
    pasosTotales += ej.pasos.length;
    const prog = AppState.progresoUsuario[ej.id];
    if (prog && prog.pasosCompletados) {
      pasosCompletadosTotales += prog.pasosCompletados.length;
      if (prog.pasosCompletados.length === ej.pasos.length) {
        ejerciciosCompletos++;
      }
    }
  });

  const porcentajeGlobal = pasosTotales > 0 ? Math.round((pasosCompletadosTotales / pasosTotales) * 100) : 0;

  const elContador = document.getElementById('stats-ejercicios');
  const elBarra = document.getElementById('stats-barra-progreso');
  const elPorcentaje = document.getElementById('stats-porcentaje');

  if (elContador) elContador.innerText = `${ejerciciosCompletos}/${totalEjercicios} ejercicios`;
  if (elPorcentaje) elPorcentaje.innerText = `${porcentajeGlobal}% completado`;
  if (elBarra) elBarra.style.width = `${porcentajeGlobal}%`;
}
