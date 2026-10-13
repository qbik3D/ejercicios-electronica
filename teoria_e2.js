// ==========================================================================
// MANUAL TEÓRICO COMPLETO Y EXHAUSTIVO - ELECTRÓNICA II (CÓDIGO 3702)
// Cátedra: Ing. Alejandro Bevilacqua / Ing. Adrián Martínez (UTN FRBA)
// Preparación integral para Examen Parcial y Final
// ==========================================================================

const MANUAL_TEORIA_E2 = {
  materiaId: 'electronica-2',
  codigo: '3702',
  nombre: 'Electrónica II',
  titulo: 'Manual y Compendio Teórico de Transistores FET, Multietapa y Operacionales',
  subtitulo: 'Cátedra: Ing. Alejandro Bevilacqua / Ing. Adrián Martínez - UTN FRBA',
  descripcion: 'Transistores de efecto de campo JFET y MOSFET, polarización y modelos incrementales, amplificadores multietapa capacitivos y directos, etapas cascode y pares compuestos, etapas diferenciales MOS y amplificadores operacionales.',
  
  unidades: [
    // ========================================================================
    // UNIDAD 1: JFET Y MOSFET
    // ========================================================================
    {
      id: 'e2-u1',
      numero: 1,
      titulo: 'Unidad 1: Transistores de Efecto de Campo JFET y MOSFET',
      icono: '⚡',
      badgeColor: 'border-teal-500/40 bg-teal-950/40 text-teal-300',
      introduccion: 'Esta unidad analiza la física de los transistores unipolares de efecto de campo, donde la conducción se debe a un único tipo de portadores y se modula mediante un campo eléctrico transversal. Se estudian el JFET, los MOSFET de enriquecimiento y deplexión, los métodos de polarización DC y el modelado incremental.',
      secciones: [
        {
          id: 'e2-u1-fisica-jfet-mosfet',
          titulo: '1.1 Física y Ecuaciones Características de JFET y MOSFET',
          contenido: `
            <p class="mb-3">A diferencia del BJT (dispositivo controlado por corriente en base), los <strong>transistores de efecto de campo (FET)</strong> son dispositivos controlados por tensión aplicada a la compuerta (Gate), con una corriente estática de entrada prácticamente nula ($I_G \\approx 0$) y una impedancia de entrada casi infinita ($R_{in} \\ge 10^{9}\\,\\Omega$ en JFET, $R_{in} \\ge 10^{12}\\,\\Omega$ en MOSFET).</p>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">1. Transistor de Juntura JFET (Canal N)</h5>
            <p class="mb-2">La compuerta se polariza en inversa ($V_{GS} \\le 0$). Al aumentar $|V_{GS}|$, la zona de agotamiento crece hasta estrangular el canal a la tensión de pinch-off $V_P$ (o $V_{GS(off)} < 0$).</p>
            <div class="p-3.5 my-3 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-950 dark:text-teal-200">
              <h5 class="font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <span>⚡</span> Ecuación de Shockley en Saturación ($V_{DS} \\ge V_{GS} - V_P$)
              </h5>
              $$\\mathbf{I_D = I_{DSS} \\left( 1 - \\frac{V_{GS}}{V_P} \\right)^2}$$
              <p class="text-xs mt-1">donde $I_{DSS}$ es la corriente de saturación con $V_{GS} = 0$.</p>
            </div>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">2. Transistor MOSFET de Acumulación / Enriquecimiento (Canal N)</h5>
            <p class="mb-2">Requiere una tensión positiva de compuerta superior a la tensión de umbral ($V_{GS} > V_{th}$) para crear el canal de inversión de electrones.</p>
            <div class="p-3.5 my-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
              <p>• <strong>Zona Óhmica / Tríodo ($V_{DS} < V_{GS} - V_{th}$):</strong>
                $$I_D = k_n \\left[ 2(V_{GS} - V_{th}) V_{DS} - V_{DS}^2 \\right]$$
              </p>
              <p class="mt-2">• <strong>Zona de Saturación / Activa ($V_{DS} \\ge V_{GS} - V_{th}$):</strong>
                $$\\mathbf{I_D = k_n (V_{GS} - V_{th})^2 (1 + \\lambda V_{DS})}$$
                donde $k_n = \\frac{1}{2} \\mu_n C_{ox} \\frac{W}{L}$ y $\\lambda = 1/V_A$ es el parámetro de modulación de longitud de canal (análogo al efecto Early del BJT).
              </p>
            </div>
          `
        },
        {
          id: 'e2-u1-polarizacion-pequena-senal',
          titulo: '1.2 Polarización DC y Modelo de Pequeña Señal FET',
          contenido: `
            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-2 mb-2">Polarización por Divisor Resistivo</h5>
            <p class="mb-2">Como $I_G = 0$, la tensión de compuerta es simplemente:</p>
            $$V_G = V_{DD} \\frac{R_2}{R_1 + R_2}$$
            $$V_{GS} = V_G - V_S = V_G - I_D R_S$$
            <p class="my-2">Sustituyendo en la ecuación de saturación $I_D = k_n (V_{GS} - V_{th})^2$, se obtiene una ecuación cuadrática cuya raíz físicamente admisible cumple $V_{GS} > V_{th}$.</p>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Modelo Incremental de Pequeña Señal</h5>
            $$\\mathbf{g_m = \\left. \\frac{\\partial I_D}{\\partial V_{GS}} \\right|_Q = 2 k_n (V_{GSQ} - V_{th}) = 2 \\sqrt{k_n I_{DQ}} = \\frac{2 I_{DQ}}{V_{GSQ} - V_{th}}}$$
            $$\\mathbf{r_d = r_o = \\frac{1}{\\lambda I_{DQ}} = \\frac{V_A}{I_{DQ}}}$$

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3 text-xs">
              <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <span class="font-bold text-teal-600 dark:text-teal-400">Fuente Común (FC):</span><br>
                $A_v = -g_m (R_D \\parallel R_L \\parallel r_o)$<br>
                $R_{in} = R_1 \\parallel R_2$, $\\; R_o = R_D \\parallel r_o$
              </div>
              <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <span class="font-bold text-blue-600 dark:text-blue-400">Drenaje Común / Seguidor (DC):</span><br>
                $A_v = \\frac{g_m (R_S \\parallel R_L)}{1 + g_m (R_S \\parallel R_L)} \\approx 1$<br>
                $R_o = R_S \\parallel \\frac{1}{g_m}$ (baja impedancia)
              </div>
            </div>
            <div class="pt-2 flex justify-end">
              <button onclick="filtrarUnidad('e2-u1'); volverAEjercicios();" class="text-xs font-mono text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1">
                <span>Practicar ejercicios guiados de la Unidad 1</span>
                <span>→</span>
              </button>
            </div>
          `
        }
      ]
    },

    // ========================================================================
    // UNIDAD 2: AMPLIFICADORES MULTIETAPA
    // ========================================================================
    {
      id: 'e2-u2',
      numero: 2,
      titulo: 'Unidad 2: Amplificadores Multietapa y Pares Compuestos',
      icono: '🔗',
      badgeColor: 'border-sky-500/40 bg-sky-950/40 text-sky-300',
      introduccion: 'Esta unidad estudia el diseño de amplificadores con múltiples etapas en cascada, analizando los efectos de carga mutua entre etapas, la respuesta en frecuencia global, el estrechamiento del ancho de banda y configuraciones compuestas de alto desempeño como el Par Darlington, Sziklai y la etapa Cascode.',
      secciones: [
        {
          id: 'e2-u2-acoplamientos-cascada',
          titulo: '2.1 Acoplamientos en Cascada y Efectos de Carga Inter-etapa',
          contenido: `
            <p class="mb-3">En una cadena multietapa, la impedancia de entrada de cada etapa $R_{i,k+1}$ actúa como resistencia de carga efectiva de la etapa precedente $k$:</p>
            $$R_{L,k}' = R_{D,k} \\parallel R_{i,k+1}$$
            <p class="my-2">La ganancia total de tensión es el producto de las ganancias individuales considerando la carga:</p>
            $$\\mathbf{A_{v,total} = A_{v1} \\cdot A_{v2} \\dots A_{vn}}$$

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Contracción del Ancho de Banda Multietapa</h5>
            <p class="mb-2">Para $n$ etapas idénticas no interactuantes con frecuencia de corte individual $\\omega_H$:</p>
            $$\\mathbf{\\omega_{H,total} = \\omega_H \\sqrt{2^{1/n} - 1}}$$
            <p class="text-xs text-slate-600 dark:text-slate-400">Para $n = 2$, $\\omega_{H,total} \\approx 0.64 \\omega_H$; para $n = 3$, $\\omega_{H,total} \\approx 0.51 \\omega_H$. Al agregar etapas en cascada, el ancho de banda global siempre se reduce.</p>
          `
        },
        {
          id: 'e2-u2-pares-compuestos-cascode',
          titulo: '2.2 Par Darlington, Par Sziklai y Configuración Cascode',
          contenido: `
            <div class="space-y-3 my-3">
              <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span class="text-xs font-mono font-bold text-sky-600 dark:text-sky-400">1. Par Darlington (NPN - NPN)</span>
                <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Ganancia de corriente compuesta: $\\beta_D \\approx \\beta_1 \\cdot \\beta_2$. Resistencia de entrada enorme ($R_i \\approx \\beta_1 \\beta_2 R_E$). Caída de tensión de entrada: $V_{BE,total} = V_{BE1} + V_{BE2} \\approx 1.4\\text{ V}$.
                </p>
              </div>

              <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span class="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">2. Par Sziklai / Realimentado (NPN - PNP)</span>
                <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Similar ganancia multiplicativa $\\beta_1 \\beta_2$, pero con una única caída $V_{BE} \\approx 0.7\\text{ V}$ y mayor estabilidad térmica. Ideal para etapas de salida complementarias.
                </p>
              </div>

              <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span class="text-xs font-mono font-bold text-purple-600 dark:text-purple-400">3. Configuración Cascode (FC + GC o EC + BC)</span>
                <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  La etapa inferior opera como Fuente Común conectada a la muy baja impedancia de entrada de la etapa superior ($1/g_{m2}$). La ganancia de la primera etapa es $A_{v1} \\approx -1$, <strong>anulando por completo el efecto Miller</strong> ($C_{in,M} \\approx 2 C_{gd}$). Provee un ancho de banda extraordinariamente superior y muy alta impedancia de salida ($R_o \\approx g_{m2} r_{o2} r_{o1}$).
                </p>
              </div>
            </div>
            <div class="pt-2 flex justify-end">
              <button onclick="filtrarUnidad('e2-u2'); volverAEjercicios();" class="text-xs font-mono text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-1">
                <span>Practicar ejercicios guiados de la Unidad 2</span>
                <span>→</span>
              </button>
            </div>
          `
        }
      ]
    },

    // ========================================================================
    // UNIDAD 3: DIFERENCIALES Y OPERACIONALES
    // ========================================================================
    {
      id: 'e2-u3',
      numero: 3,
      titulo: 'Unidad 3: Amplificador Diferencial MOS, Cargas Activas y Amplificador Operacional',
      icono: '📐',
      badgeColor: 'border-indigo-500/40 bg-indigo-950/40 text-indigo-300',
      introduccion: 'Esta unidad cubre el par diferencial implementado con transistores MOS, las cargas activas integradas CMOS, los parámetros no ideales del amplificador operacional real y las aplicaciones lineales de precisión (amplificador de instrumentación).',
      secciones: [
        {
          id: 'e2-u3-par-diferencial-mos',
          titulo: '3.1 El Par Diferencial MOSFET y Cargas Activas CMOS',
          contenido: `
            <p class="mb-3">El par diferencial MOSFET alimentado por una fuente de corriente de cola $I_{SS}$ satisface:</p>
            $$i_{D1} + i_{D2} = I_{SS}$$
            $$v_{id} = v_{GS1} - v_{GS2} = \\sqrt{\\frac{i_{D1}}{k_n}} - \\sqrt{\\frac{i_{D2}}{k_n}}$$
            <p class="my-2">La corriente diferencial de salida es:</p>
            $$i_{D1} - i_{D2} = k_n v_{id} \\sqrt{\\frac{2 I_{SS}}{k_n} - v_{id}^2}$$
            <div class="p-3.5 my-3 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-950 dark:text-indigo-200 text-xs">
              <strong>Rango Lineal del Par MOS vs BJT:</strong> El par diferencial MOS se mantiene lineal hasta $|v_{id}| \\le \\sqrt{2} (V_{GS} - V_{th})$, lo que típicamente equivale a $200 - 500\\text{ mV}$, notablemente superior a los escasos $50\\text{ mV}$ ($2 V_T$) del BJT.
            </div>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Par Diferencial con Carga Activa CMOS</h5>
            <p class="mb-2">Al utilizar un espejo de corriente PMOS activo como carga:</p>
            $$\\mathbf{A_d = -g_{mN} (r_{oN} \\parallel r_{oP}) = -\\frac{2}{\\lambda_N + \\lambda_P} \\frac{1}{V_{GSN} - V_{thN}}}$$
            <p class="text-xs text-slate-600 dark:text-slate-400">Proporciona ganancias superiores a $40 - 50\\text{ dB}$ en una sola etapa con área mínima de silicio.</p>
          `
        },
        {
          id: 'e2-u3-opamp-instrumentacion',
          titulo: '3.2 No Idealidades del Op-Amp y Amplificador de Instrumentación',
          contenido: `
            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-2 mb-2">Parámetros No Ideales del Op-Amp Real</h5>
            <ul class="list-disc pl-5 space-y-1 text-xs sm:text-sm mb-3">
              <li><strong>Tensión de Offset ($V_{OS}$):</strong> Desbalance de entrada ($1 - 5\\text{ mV}$ en BJT, $5 - 15\\text{ mV}$ en MOS). Provoca tensión continua no nula a la salida con entradas en cortocircuito.</li>
              <li><strong>Corrientes de Polarización ($I_B = \\frac{I_{B1}+I_{B2}}{2}$) y Offset ($I_{OS} = |I_{B1} - I_{B2}|$):</strong> Para minimizar el error por $I_B$, la resistencia de Thévenin conectada al terminal no inversor debe igualar a la del inversor: $R_p = R_1 \\parallel R_2$.</li>
            </ul>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">El Amplificador de Instrumentación (3 Operacionales)</h5>
            <p class="mb-2">Circuito estándar para adquisición de bioseñales y sensores (puentes de Wheatstone) con muy alta impedancia de entrada y elevadísimo CMRR:</p>
            <div class="p-4 my-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-950 dark:text-emerald-200">
              <h5 class="font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <span>🎯</span> Ganancia del Amplificador de Instrumentación
              </h5>
              $$\\mathbf{V_o = \\left( 1 + \\frac{2 R_1}{R_G} \\right) \\frac{R_4}{R_3} (V_2 - V_1)}$$
              <p class="text-xs mt-1">La ganancia diferencial se programa finamente modificando <em>únicamente la resistencia de ajuste $R_G$</em>, sin descompensar el apareamiento del restador de salida ni degradar el CMRR.</p>
            </div>
            <div class="pt-2 flex justify-end">
              <button onclick="filtrarUnidad('e2-u3'); volverAEjercicios();" class="text-xs font-mono text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1">
                <span>Practicar ejercicios guiados de la Unidad 3</span>
                <span>→</span>
              </button>
            </div>
          `
        }
      ]
    }
  ]
};

if (typeof MANUALES_TEORIA === 'undefined') {
  var MANUALES_TEORIA = {};
}
MANUALES_TEORIA['electronica-2'] = MANUAL_TEORIA_E2;
