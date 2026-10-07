// ==========================================================================
// CONFIGURACIÓN MODULAR DE MATERIAS - CARRERA INGENIERÍA ELECTRÓNICA
// ==========================================================================

const MATERIAS_CONFIG = {
  'electronica-1': {
    id: 'electronica-1',
    codigo: '3696',
    nombre: 'Electrónica I',
    tituloCompleto: 'Electrónica I - Cátedra Interactiva',
    descripcion: 'Circuitos en Continua, Diodos, Polarización BJT y Modelos de Pequeña Señal',
    subtitulo: 'Cátedra: Ing. Adrián Martínez / Ing. Alejandro Bevilacqua',
    icono: '⚡',
    colorGradiente: 'from-blue-600 to-indigo-500',
    colorBorde: 'border-blue-500/30',
    colorBadge: 'bg-blue-500/20 text-blue-400',
    unidades: [
      {
        id: 'cc',
        numero: 1,
        titulo: 'Unidad 1: Circuitos CC',
        tituloCompleto: 'Unidad 1: Circuitos en Corriente Continua',
        descripcion: 'Leyes fundamentales, Mallas, Nodos y Teoremas de Thévenin/Norton',
        icono: '⚡',
        badgeColor: 'border-blue-500/40 bg-blue-950/40 text-blue-300'
      },
      {
        id: 'diodos',
        numero: 2,
        titulo: 'Unidad 2: Física del Semiconductor y Diodos',
        tituloCompleto: 'Unidad 2: Semiconductores, Juntura PN y Diodos',
        descripcion: 'Diodos rectificadores, recortadores, modelo incremental y diodo Zener',
        icono: '🔻',
        badgeColor: 'border-emerald-500/40 bg-emerald-950/40 text-emerald-300'
      },
      {
        id: 'bjt-pol',
        numero: 3,
        titulo: 'Unidad 3: Transistor BJT - Polarización',
        tituloCompleto: 'Unidad 3: Transistor BJT - Teoría y Polarización DC',
        descripcion: 'Punto de reposo Q, rectas de carga, estabilidad y polarización por fuentes múltiples',
        icono: '🔲',
        badgeColor: 'border-purple-500/40 bg-purple-950/40 text-purple-300'
      },
      {
        id: 'bjt-ac',
        numero: 4,
        titulo: 'Unidad 4: Cuadripolos y Pequeña Señal BJT',
        tituloCompleto: 'Unidad 4: Cuadripolos y Modelos de Pequeña Señal BJT',
        descripcion: 'Parámetros híbridos "h", modelo híbrido π, etapas EC, BC, CC e impedancias',
        icono: '📶',
        badgeColor: 'border-amber-500/40 bg-amber-950/40 text-amber-300'
      }
    ]
  },
  'circuitos-3': {
    id: 'circuitos-3',
    codigo: '3709',
    nombre: 'Teoría de Circuitos III',
    tituloCompleto: 'Teoría de Circuitos III - Síntesis y Cuadripolos',
    descripcion: 'Funciones de Red, Operacionales GIC/FDNR, Síntesis de Dipolos, MAI y Parámetros S',
    subtitulo: 'Cátedra: Ing. Marcelo Márquez / Ing. Germán Cardozo',
    advertencia: 'Materia en revisión (contenidos preliminares)',
    icono: '📐',
    colorGradiente: 'from-indigo-600 to-violet-500',
    colorBorde: 'border-indigo-500/30',
    colorBadge: 'bg-indigo-500/20 text-indigo-400',
    unidades: [
      {
        id: 'tc3-u1',
        numero: 1,
        titulo: 'Unidad 1: Funciones de Red y Bode',
        tituloCompleto: 'Unidad 1: Introducción, Funciones de Red y Normalización',
        descripcion: 'Transformada de Laplace, polos y ceros, diagramas de Bode y retardo de grupo',
        icono: '📊',
        badgeColor: 'border-cyan-500/40 bg-cyan-950/40 text-cyan-300'
      },
      {
        id: 'tc3-u2',
        numero: 2,
        titulo: 'Unidad 2: Operacionales, GIC y FDNR',
        tituloCompleto: 'Unidad 2: Redes Activas con Amplificadores Operacionales',
        descripcion: 'GIC de Antoniou, Inductores simulados, FDNR (Elemento D) e INIC',
        icono: '⚡',
        badgeColor: 'border-amber-500/40 bg-amber-950/40 text-amber-300'
      },
      {
        id: 'tc3-u3',
        numero: 3,
        titulo: 'Unidad 3: Síntesis de Dipolos',
        tituloCompleto: 'Unidad 3: Síntesis de Funciones de Excitación (Foster y Cauer)',
        descripcion: 'Dipolos reactivos puros LC y dipolos con pérdidas RC/RL',
        icono: '🔄',
        badgeColor: 'border-emerald-500/40 bg-emerald-950/40 text-emerald-300'
      },
      {
        id: 'tc3-u4',
        numero: 4,
        titulo: 'Unidad 4: Cuadripolos y MAI',
        tituloCompleto: 'Unidad 4: Análisis de Cuadripolos y Matriz de Admitancia Indefinida',
        descripcion: 'Propiedades de la MAI, T puenteada, Doble T Notch y cálculo de transferencias',
        icono: '🔲',
        badgeColor: 'border-rose-500/40 bg-rose-950/40 text-rose-300'
      },
      {
        id: 'tc3-u5',
        numero: 5,
        titulo: 'Unidad 5: Teoría Imagen y Parámetros S',
        tituloCompleto: 'Unidad 5: Caracterización Imagen, Coeficiente de Reflexión y Parámetros S',
        descripcion: 'Impedancias imagen, constante de transferencia, ROE y parámetros de dispersión',
        icono: '🌐',
        badgeColor: 'border-purple-500/40 bg-purple-950/40 text-purple-300'
      }
    ]
  },
  'electronica-aplicada-1': {
    id: 'electronica-aplicada-1',
    codigo: '3708',
    nombre: 'Electrónica Aplicada I',
    tituloCompleto: 'Electrónica Aplicada I - Sistemas Analógicos y Amplificación Lineal',
    descripcion: 'Señales Fuertes, Potencia y Disipación Térmica, Integrados Lineales (Diferenciales y Op-Amps) y Amplificadores Realimentados',
    subtitulo: 'Cátedra: Ing. Pablo González Galli / Ing. Adrián Martínez',
    advertencia: 'Materia en revisión (contenidos preliminares)',
    icono: '🎛️',
    colorGradiente: 'from-amber-600 to-orange-500',
    colorBorde: 'border-amber-500/30',
    colorBadge: 'bg-amber-500/20 text-amber-400',
    unidades: [
      {
        id: 'ea1-u1',
        numero: 1,
        titulo: 'Unidad 1: Transistores con Señales Fuertes',
        tituloCompleto: 'Unidad 1: Amplificación con Transistores en Gran Señal y Rango Dinámico',
        descripcion: 'Excursión máxima simétrica del punto Q, rango dinámico, distorsión y estabilidad de polarización',
        icono: '📈',
        badgeColor: 'border-amber-500/40 bg-amber-950/40 text-amber-300'
      },
      {
        id: 'ea1-u2',
        numero: 2,
        titulo: 'Unidad 2: Potencia, Disipación y Regímenes Máximos',
        tituloCompleto: 'Unidad 2: Balance Energético, Clases de Potencia y Rendimiento Térmico',
        descripcion: 'Amplificadores Clase A/B/AB, balance de potencias, rendimiento, resistencia térmica y cálculo de disipadores',
        icono: '🔥',
        badgeColor: 'border-rose-500/40 bg-rose-950/40 text-rose-300'
      },
      {
        id: 'ea1-u3',
        numero: 3,
        titulo: 'Unidad 3: Circuitos Integrados Lineales',
        tituloCompleto: 'Unidad 3: Amplificador Diferencial, Cargas Activas y Amplificadores Operacionales',
        descripcion: 'Par diferencial BJT/MOS, fuentes y espejos Widlar/Wilson, CMRR, análisis interno del 741 y arquitectura Rail-to-Rail',
        icono: '🔬',
        badgeColor: 'border-cyan-500/40 bg-cyan-950/40 text-cyan-300'
      },
      {
        id: 'ea1-u4',
        numero: 4,
        titulo: 'Unidad 4: Amplificadores Realimentados',
        tituloCompleto: 'Unidad 4: Realimentación Negativa, Topologías y Cuadripolos',
        descripcion: 'Topologías serie/paralelo, desensibilización, cálculo de impedancias de entrada/salida y funciones de transferencia',
        icono: '🔁',
        badgeColor: 'border-emerald-500/40 bg-emerald-950/40 text-emerald-300'
      }
    ]
  }
};

// Registro dinámico de bancos de ejercicios por materia
const BANCO_MATERIAS = {
  'electronica-1': [],
  'circuitos-3': [],
  'electronica-aplicada-1': []
};
