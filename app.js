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
        class="bg-slate-900 border border-slate-800 hover:border-slate-750 rounded-xl p-5 sm:p-6 transition-colors flex flex-col justify-between"
      >
        <div>
          <!-- Cabecera: Icono y código -->
          <div class="flex items-center justify-between gap-3 mb-3">
            <div class="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-xl text-slate-200 shrink-0">
              ${materia.icono}
            </div>
            <span class="text-xs font-mono text-slate-400">
              Código [${materia.codigo}]
            </span>
          </div>

          <!-- Título y descripción -->
          <h3 class="text-lg sm:text-xl font-bold text-white mb-1.5">
            ${materia.nombre}
          </h3>
          <p class="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
            ${materia.descripcion}
          </p>

          <!-- Resumen de contenido -->
          <div class="text-xs text-slate-400 flex items-center gap-3 mb-5 font-mono">
            <span>${unidadesCount} unidades</span>
            <span>•</span>
            <span>${totalEjercicios} ejercicios</span>
            <span>•</span>
            <span>${totalPasos} etapas</span>
          </div>
        </div>

        <!-- Barra de avance personal y botón de entrada -->
        <div class="pt-4 border-t border-slate-800">
          <div class="flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
            <span>Progreso: ${ejerciciosResueltos}/${totalEjercicios} resueltos</span>
            <span class="font-medium text-slate-300">${porcentaje}%</span>
          </div>
          <div class="w-full bg-slate-800 rounded-full h-1.5 mb-4 overflow-hidden">
            <div 
              class="h-full bg-blue-500 rounded-full transition-all duration-300" 
              style="width: ${porcentaje}%"
            ></div>
          </div>

          <button 
            onclick="abrirMateria('${materia.id}')"
            class="w-full py-2.5 px-4 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-100 hover:text-white border border-slate-700 font-medium text-xs sm:text-sm transition-colors flex items-center justify-center gap-1.5 min-h-[44px]"
          >
            <span>Ingresar a la materia</span>
            <svg class="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
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
    statsContainer.className = 'hidden sm:flex items-center gap-2 text-xs text-slate-400 font-mono';
  }
  if (btnReiniciar) {
    btnReiniciar.className = 'p-1 rounded-lg text-slate-500 hover:text-rose-400 transition-colors hidden sm:block shrink-0';
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
    columna.classList.add('fixed', 'inset-0', 'top-14', 'z-50', 'bg-slate-950', 'p-4', 'overflow-y-auto');
    if (icono) icono.innerText = 'Cerrar ▴';
  } else {
    columna.classList.add('hidden');
    columna.classList.remove('fixed', 'inset-0', 'top-14', 'z-50', 'bg-slate-950', 'p-4', 'overflow-y-auto');
    if (icono) icono.innerText = 'Lista ▾';
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
    iconoBox.className = 'w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-sm text-slate-300 select-none shrink-0';
  }

  const nombreHeader = document.getElementById('materia-nombre-header');
  if (nombreHeader) {
    nombreHeader.innerText = materia.nombre;
  }

  const subtitulo = document.getElementById('materia-subtitulo');
  if (subtitulo) subtitulo.innerText = materia.subtitulo || materia.descripcion;

  const badge = document.getElementById('materia-badge');
  if (badge) {
    badge.innerText = `[${materia.codigo}]`;
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
    <span class="text-xs text-slate-500 font-mono mr-1 hidden md:inline">Unidad:</span>
  `;

  unidades.forEach(u => {
    const esActivo = AppState.temaSeleccionado === u.id;
    html += `
      <button 
        onclick="cambiarTema('${u.id}')"
        data-tema="${u.id}"
        class="px-2.5 py-1 text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap ${
          esActivo 
            ? 'bg-slate-800 text-white border border-slate-600' 
            : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 border border-transparent'
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
      class="px-2.5 py-1 text-xs font-medium rounded-lg transition-colors flex items-center gap-1 whitespace-nowrap ${
        todosActivo 
          ? 'bg-slate-800 text-white border border-slate-600' 
          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 border border-transparent'
      }"
    >
      <span>Todas las unidades</span>
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
      <div class="mb-3 bg-slate-900 rounded-lg border border-slate-800 overflow-hidden">
        <div 
          onclick="toggleColapsoUnidad('${unidad.id}')"
          class="p-2.5 bg-slate-850 hover:bg-slate-800 cursor-pointer flex items-center justify-between border-b border-slate-800 transition-colors select-none"
        >
          <div class="flex items-center gap-2">
            <span class="text-sm">${unidad.icono}</span>
            <span class="font-semibold text-xs text-slate-200 tracking-wide uppercase">
              ${unidad.titulo}
            </span>
          </div>
          <div class="flex items-center gap-2 text-xs text-slate-400 font-mono">
            <span>${completadosUnidad}/${totalEjerciciosUnidad}</span>
            <span>${estaColapsada ? '▼' : '▲'}</span>
          </div>
        </div>

        <!-- Lista de tarjetas de ejercicios de esta unidad -->
        <div class="p-1.5 space-y-1 ${estaColapsada ? 'hidden' : 'block'}">
          ${ejerciciosDeUnidad.map((ej, idx) => {
            const esSeleccionado = ej.id === AppState.ejercicioActualId;
            const datosProgreso = AppState.progresoUsuario[ej.id] || { pasosCompletados: [] };
            const completado = datosProgreso.pasosCompletados.length === ej.pasos.length;
            const pasosHechos = datosProgreso.pasosCompletados.length;
            const totalPasos = ej.pasos.length;

            const numeroItem = `${unidad.numero}.${idx + 1}`;

            return `
              <div 
                onclick="seleccionarEjercicio('${ej.id}')"
                class="exercise-item cursor-pointer p-2 rounded-lg border transition-colors ${
                  esSeleccionado 
                    ? 'bg-slate-800 border-slate-600 text-white' 
                    : 'bg-slate-900 hover:bg-slate-850 border-slate-850 hover:border-slate-800 text-slate-300'
                }"
              >
                <div class="flex items-center justify-between gap-2 mb-0.5">
                  <span class="font-mono text-xs font-semibold ${esSeleccionado ? 'text-blue-400' : 'text-slate-400'}">
                    Ej. ${numeroItem}
                  </span>
                  ${completado 
                    ? '<span class="text-[11px] text-emerald-400 font-mono">✓</span>' 
                    : `<span class="text-[10px] text-slate-500 font-mono">${pasosHechos}/${totalPasos}</span>`
                  }
                </div>
                <h5 class="text-xs text-slate-200 line-clamp-1 font-normal">
                  ${formatearTextoConLatex(ej.titulo)}
                </h5>
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
    <div class="animate-fade-in space-y-4">
      <!-- Encabezado del ejercicio: limpio y sin recuadros pesados -->
      <div class="pb-3 border-b border-slate-800">
        <div class="flex items-center justify-between gap-3 mb-1.5">
          <div class="flex items-center gap-2">
            <span class="font-mono text-xs text-slate-400 font-semibold">Problema ${numeroEjercicio}</span>
            <span class="text-slate-600">•</span>
            <span class="text-xs text-slate-400 font-medium">${ejercicio.dificultad}</span>
          </div>

          <div class="flex items-center gap-3">
            ${ejercicioCompletado ? `
              <span class="text-xs text-emerald-400 font-medium flex items-center gap-1 font-mono">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                Resuelto
              </span>
            ` : ''}
            ${ejercicio.teoria ? `
              <button 
                onclick="toggleTeoria()" 
                class="text-xs text-slate-400 hover:text-slate-200 transition-colors flex items-center gap-1"
              >
                <span>Conceptos</span>
                <span id="btn-toggle-teoria-badge" class="font-mono text-[10px] text-slate-500">${AppState.teoriaAbierta ? '▲' : '▼'}</span>
              </button>
            ` : ''}
          </div>
        </div>

        <h2 class="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
          ${formatearTextoConLatex(ejercicio.titulo)}
        </h2>

        <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
          ${formatearTextoConLatex(ejercicio.enunciado)}
        </p>

        <!-- Panel de teoría sobrio y desplegable -->
        ${ejercicio.teoria ? `
          <div id="panel-teoria" class="${AppState.teoriaAbierta ? 'block' : 'hidden'} mt-3 p-3.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs sm:text-sm leading-relaxed overflow-x-auto">
            ${formatearTextoConLatex(ejercicio.teoria)}
          </div>
        ` : ''}
      </div>

      <!-- Diagrama esquemático y datos del circuito (integrados y sin sombras) -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-start">
        <div class="md:col-span-8 bg-slate-900 border border-slate-800 rounded-xl p-2.5 circuit-container flex items-center justify-center">
          <div class="overflow-x-auto w-full flex items-center justify-center bg-white rounded-lg p-2 border border-slate-200">
            ${ejercicio.circuitoSvg}
          </div>
        </div>

        <!-- Parámetros de partida (compacto) -->
        <div class="md:col-span-4 bg-slate-900 border border-slate-800 rounded-xl p-3">
          <h4 class="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-2 font-mono">
            Parámetros
          </h4>
          <div class="space-y-1 font-mono text-xs">
            ${(Array.isArray(ejercicio.datos) ? ejercicio.datos : Object.entries(ejercicio.datos || {}).map(([clave, valor]) => ({ clave, valor }))).map(d => `
              <div class="flex items-center justify-between py-1 px-2 rounded bg-slate-950 border border-slate-850">
                <span class="text-slate-400">${renderLatex(d.clave)}</span>
                <span class="text-slate-200 font-semibold">${formatearTextoConLatex(d.valor)}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Pestañas de etapas de resolución (Stepper minimalista) -->
      <div>
        <div class="flex items-center justify-between text-xs text-slate-500 mb-1.5 font-mono">
          <span>Etapas</span>
          <span>Paso ${AppState.pasoActualIndex + 1} de ${totalPasos}</span>
        </div>
        <div class="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          ${ejercicio.pasos.map((p, idx) => {
            const pasoCompletado = datosProgreso.pasosCompletados.includes(p.id);
            const esActivo = idx === AppState.pasoActualIndex;
            return `
              <button 
                onclick="cambiarPaso(${idx})"
                class="px-2.5 py-1 rounded-lg text-xs font-medium transition-colors flex items-center gap-1 whitespace-nowrap ${
                  esActivo 
                    ? 'bg-blue-600 text-white' 
                    : pasoCompletado
                    ? 'bg-slate-800 text-emerald-400 border border-slate-700'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }"
              >
                <span>Paso ${idx + 1}</span>
                ${p.simbolo ? `<span class="opacity-80">${renderLatex(p.simbolo)}</span>` : ''}
                ${pasoCompletado ? '<span class="text-emerald-400">✓</span>' : ''}
              </button>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Espacio de trabajo activo (enfocado en resolver, sin distracciones) -->
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-5">
        <!-- Pregunta o consigna del paso actual -->
        <div class="mb-4">
          <span class="text-xs font-mono text-slate-400 block mb-1">
            Paso ${AppState.pasoActualIndex + 1}: ${formatearTextoConLatex(pasoActual.titulo)}
          </span>
          <h3 class="text-sm sm:text-base font-medium text-white leading-relaxed">
            ${formatearTextoConLatex(pasoActual.pregunta)}
          </h3>
        </div>

        <!-- Entrada de respuesta numérica y validación -->
        <div class="mb-3">
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <div class="relative flex-1">
              <input 
                type="text" 
                id="input-respuesta"
                inputmode="decimal"
                enterkeyhint="done"
                autocomplete="off"
                placeholder="Ingresa valor..."
                value="${yaCompletadoEstePaso ? (pasoActual.valorEsperado !== undefined ? pasoActual.valorEsperado : pasoActual.solucion) : ''}"
                ${yaCompletadoEstePaso ? 'disabled' : ''}
                onkeypress="if(event.key === 'Enter') verificarRespuesta('${pasoActual.id}')"
                class="w-full bg-slate-950 border border-slate-700 focus:border-blue-500 rounded-lg px-3.5 py-2.5 text-white font-mono text-sm focus:outline-none transition-colors min-h-[44px]"
              />
              <span class="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-mono text-xs">
                ${pasoActual.unidad}
              </span>
            </div>

            ${!yaCompletadoEstePaso ? `
              <button 
                onclick="verificarRespuesta('${pasoActual.id}')"
                class="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg text-xs sm:text-sm transition-colors min-h-[44px] shrink-0"
              >
                Comprobar
              </button>
            ` : `
              <button 
                onclick="irAlSiguientePaso()"
                class="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-lg text-xs sm:text-sm transition-colors min-h-[44px] shrink-0 flex items-center justify-center gap-1.5"
              >
                <span>Siguiente paso</span>
                <span>→</span>
              </button>
            `}
          </div>

          <!-- Mensaje de feedback directo -->
          <div id="feedback-paso" class="mt-2.5 hidden text-xs sm:text-sm font-medium rounded-lg p-2.5"></div>
        </div>

        <!-- Acciones secundarias (discretas): Pistas y Desarrollo -->
        <div class="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
          ${pistasUsadas < pasoActual.pistas.length && !yaCompletadoEstePaso ? `
            <button 
              onclick="revelarSiguientePista('${ejercicio.id}', '${pasoActual.id}')"
              class="text-slate-400 hover:text-amber-300 transition-colors flex items-center gap-1"
            >
              <span>💡 Pista (${pistasUsadas + 1}/${pasoActual.pistas.length})</span>
            </button>
          ` : `
            <span class="text-slate-500 font-mono">${pasoActual.pistas.length > 0 ? `${pistasUsadas}/${pasoActual.pistas.length} pistas` : ''}</span>
          `}

          <button 
            onclick="${solucionRevelada ? `ocultarSolucionPaso('${ejercicio.id}', '${pasoActual.id}')` : `revelarSolucionPaso('${ejercicio.id}', '${pasoActual.id}', ${yaCompletadoEstePaso})`}"
            class="text-slate-400 hover:text-slate-200 transition-colors"
          >
            ${solucionRevelada ? 'Ocultar desarrollo ▲' : (yaCompletadoEstePaso ? 'Ver desarrollo analítico' : '¿Trabado? Ver resolución')}
          </button>
        </div>

        <!-- Pistas reveladas (limpias, sin cajas chillonas) -->
        ${pistasUsadas > 0 ? `
          <div class="mt-3 space-y-2">
            ${pasoActual.pistas.slice(0, pistasUsadas).map((pista, idx) => `
              <div class="p-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 text-xs sm:text-sm leading-relaxed">
                <span class="text-amber-400/90 font-mono text-xs block mb-1">Pista ${idx + 1}:</span>
                ${formatearTextoConLatex(pista)}
              </div>
            `).join('')}
          </div>
        ` : ''}

        <!-- Desarrollo analítico -->
        ${solucionRevelada ? `
          <div class="mt-3 p-3.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 text-xs sm:text-sm leading-relaxed">
            <span class="text-emerald-400 font-mono text-xs block mb-1">Desarrollo analítico:</span>
            ${formatearTextoConLatex(pasoActual.explicacionPaso || pasoActual.explicacion)}
          </div>
        ` : ''}
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
    feedback.className = "mt-2.5 block text-xs sm:text-sm font-medium rounded-lg p-2.5 bg-slate-950 border border-amber-600/60 text-amber-300";
    feedback.innerHTML = "Por favor, ingresa un valor numérico (ejemplo: 12.5 o 0.05).";
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
    feedback.className = "mt-2.5 block text-xs sm:text-sm font-medium rounded-lg p-2.5 bg-slate-950 border border-emerald-600/60 text-emerald-300";
    feedback.innerHTML = formatearTextoConLatex(`✓ <strong>¡Correcto!</strong> Resultado: $${valorIngresado}\\text{ ${paso.unidad}}$.`);

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
    }, 700);

  } else {
    // Respuesta incorrecta: dar orientación
    const ratio = valorIngresado / esperado;
    let orientacion = "";
    
    if (Math.abs(ratio - 1000) < 0.1 || Math.abs(ratio - 0.001) < 0.0001) {
      orientacion = " (Revisa las unidades: parece un error de escala de factor 1000).";
    } else if (valorIngresado * esperado < 0) {
      orientacion = " (Verifica el signo o polaridad).";
    }

    feedback.className = "mt-2.5 block text-xs sm:text-sm font-medium rounded-lg p-2.5 bg-slate-950 border border-rose-600/60 text-rose-300";
    feedback.innerHTML = formatearTextoConLatex(`✕ El valor ingresado ($${valorIngresado}\\text{ ${paso.unidad}}$) no coincide.${orientacion}`);
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
