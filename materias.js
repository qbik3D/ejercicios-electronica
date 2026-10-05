// ==========================================================================
// CONFIGURACIÓN MODULAR DE MATERIAS - CARRERA INGENIERÍA ELECTRÓNICA
// ==========================================================================

const MATERIAS_CONFIG = {
  'electronica-1': {
    id: 'electronica-1',
    codigo: '3703',
    nombre: 'Electrónica I',
    tituloCompleto: 'Electrónica I - Cátedra Interactiva',
    descripcion: 'Circuitos en Continua, Diodos y Transistores BJT',
    subtitulo: 'Resolución guiada paso a paso y con pistas progresivas',
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
        descripcion: 'Leyes fundamentales, Mallas, Nodos y Teoremas',
        icono: '⚡',
        badgeColor: 'border-blue-500/40 bg-blue-950/40 text-blue-300'
      },
      {
        id: 'diodos',
        numero: 2,
        titulo: 'Unidad 2: Diodos',
        tituloCompleto: 'Unidad 2: Diodos y Aplicaciones',
        descripcion: 'Punto de polarización, pequeña señal y rectificación',
        icono: '🔻',
        badgeColor: 'border-emerald-500/40 bg-emerald-950/40 text-emerald-300'
      },
      {
        id: 'bjt',
        numero: 3,
        titulo: 'Unidad 3: Transistores BJT',
        tituloCompleto: 'Unidad 3: Transistores Bipolares (BJT)',
        descripcion: 'Polarización DC, amplificación y pequeña señal',
        icono: '🔲',
        badgeColor: 'border-purple-500/40 bg-purple-950/40 text-purple-300'
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
  }
};

// Registro dinámico de bancos de ejercicios por materia
const BANCO_MATERIAS = {
  'electronica-1': [],
  'circuitos-3': []
};
