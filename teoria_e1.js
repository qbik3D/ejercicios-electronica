// ==========================================================================
// MANUAL TEÓRICO COMPLETO Y EXHAUSTIVO - ELECTRÓNICA I (CÓDIGO 3696)
// Cátedra: Ing. Adrián Martínez / Ing. Alejandro Bevilacqua (UTN FRBA)
// Preparación integral para Examen Parcial y Final
// ==========================================================================

const MANUAL_TEORIA_E1 = {
  materiaId: 'electronica-1',
  codigo: '3696',
  nombre: 'Electrónica I',
  titulo: 'Manual y Compendio Teórico de Dispositivos y Circuitos Electrónicos I',
  subtitulo: 'Cátedra: Ing. Adrián Martínez / Ing. Alejandro Bevilacqua - UTN FRBA',
  descripcion: 'Fundamentos de circuitos en continua, teoremas de red, física del semiconductor, juntura PN y diodos, polarización estática del transistor BJT y modelos de pequeña señal.',
  
  unidades: [
    // ========================================================================
    // UNIDAD 1: CIRCUITOS EN CORRIENTE CONTINUA
    // ========================================================================
    {
      id: 'cc',
      numero: 1,
      titulo: 'Unidad 1: Circuitos en Corriente Continua y Teoremas Fundamentales',
      icono: '⚡',
      badgeColor: 'border-blue-500/40 bg-blue-950/40 text-blue-300',
      introduccion: 'Esta unidad establece los pilares del análisis circuital en régimen estacionario de continua. Se desarrollan las leyes de Kirchhoff, los métodos sistemáticos de nodos y mallas, y los teoremas de Thévenin, Norton, Superposición y Máxima Transferencia de Potencia.',
      secciones: [
        {
          id: 'e1-u1-leyes-fundamentales',
          titulo: '1.1 Leyes de Kirchhoff y Métodos Sistemáticos de Nodos y Mallas',
          contenido: `
            <p class="mb-3">El análisis de redes en corriente continua se basa en la conservación de la carga y de la energía aplicadas a circuitos con parámetros concentrados.</p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
              <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span class="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">Ley de Corrientes de Kirchhoff (LCK)</span>
                <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  En todo nodo de un circuito eléctrico, la suma algebraica de corrientes que inciden es idénticamente nula (conservación de carga):
                </p>
                $$\\sum_{k=1}^N I_k = 0$$
              </div>

              <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span class="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">Ley de Tensiones de Kirchhoff (LTK)</span>
                <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  En toda trayectoria cerrada o malla, la suma algebraica de las diferencias de potencial es igual a cero (conservación de energía):
                </p>
                $$\\sum_{k=1}^M V_k = 0$$
              </div>
            </div>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Método de Potenciales de Nodo</h5>
            <p class="mb-2">Para un circuito de $N$ nodos, se selecciona uno como referencia de masa ($0\\text{ V}$) y se plantean $N-1$ ecuaciones independientes de admitancia:</p>
            $$[G] \\cdot [V_n] = [I_s]$$
            <ul class="list-disc pl-5 space-y-1 text-xs sm:text-sm">
              <li>Los términos diagonales $G_{ii}$ son la suma de conductancias conectadas al nodo $i$.</li>
              <li>Los términos fuera de la diagonal $G_{ij}$ son las conductancias conectadas entre los nodos $i$ y $j$ con signo negativo.</li>
              <li>Si existen fuentes de tensión ideales sin resistencia en serie entre dos nodos esenciales, se define un <strong>supernodo</strong>.</li>
            </ul>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Método de Corrientes de Malla</h5>
            <p class="mb-2">Para redes planares con $M = B - N + 1$ mallas independientes (donde $B$ es el número de ramas):</p>
            $$[R] \\cdot [I_m] = [V_s]$$
            <p class="text-xs text-slate-600 dark:text-slate-400">Si una rama compartida posee una fuente de corriente ideal, se prescinde de la ecuación de esa rama y se define una <strong>supermalla</strong> relacionando las corrientes con la fuente.</p>
          `
        },
        {
          id: 'e1-u1-teoremas-red',
          titulo: '1.2 Teoremas de Thévenin, Norton y Máxima Transferencia de Potencia',
          contenido: `
            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-2 mb-2">Teorema de Thévenin</h5>
            <p class="mb-2">Cualquier red lineal resistiva vista desde dos terminales $A$ y $B$ puede ser reemplazada por una fuente de tensión ideal $V_{th}$ en serie con una resistencia equivalente $R_{th}$:</p>
            <ul class="list-disc pl-5 space-y-1 text-xs sm:text-sm mb-3">
              <li><strong>Tensión de Thévenin ($V_{th}$):</strong> Es la tensión a circuito abierto entre $A$ y $B$ ($V_{AB,ca}$).</li>
              <li><strong>Resistencia de Thévenin ($R_{th}$):</strong> Es la resistencia vista desde $A$ y $B$ pasivando todas las fuentes independientes (fuentes de tensión como cortocircuitos y fuentes de corriente como circuitos abiertos). En presencia de fuentes dependientes:
                $$R_{th} = \\frac{V_{prueba}}{I_{prueba}} = \\frac{V_{oc}}{I_{sc}}$$
              </li>
            </ul>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Teorema de Norton</h5>
            <p class="mb-2">Equivalente dual compuesto por una fuente de corriente ideal $I_N$ en paralelo con $R_N = R_{th}$:</p>
            $$I_N = I_{sc} = \\frac{V_{th}}{R_{th}}$$

            <div class="p-4 my-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-950 dark:text-blue-200">
              <h5 class="font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <span>📐</span> Teorema de Máxima Transferencia de Potencia
              </h5>
              <p class="text-xs">Para una fuente real de continua caracterizada por $V_{th}$ y $R_{th}$, la potencia transferida a una carga variable $R_L$ es:</p>
              $$P_L(R_L) = I_L^2 R_L = \\left( \\frac{V_{th}}{R_{th} + R_L} \\right)^2 R_L$$
              <p class="text-xs mt-1">Derivando $\\frac{dP_L}{dR_L} = 0$, se obtiene la condición óptima de adaptación:</p>
              $$\\mathbf{R_L = R_{th}}$$
              <p class="text-xs mt-1">La potencia máxima entregada a la carga es:</p>
              $$\\mathbf{P_{L,max} = \\frac{V_{th}^2}{4 R_{th}}}$$
              <p class="text-xs text-slate-500 italic mt-1">Nótese que en esta condición el rendimiento es de exactamente el $50\\%$, disipándose la mitad de la potencia dentro del propio generador.</p>
            </div>
          `
        },
        {
          id: 'e1-u1-formulario',
          titulo: '1.3 Formulario de Examen - Unidad 1',
          contenido: `
            <div class="overflow-x-auto my-3">
              <table class="w-full text-xs text-left border-collapse border border-slate-200 dark:border-slate-800">
                <thead>
                  <tr class="bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 font-mono">
                    <th class="p-2 border border-slate-200 dark:border-slate-800">Teorema / Regla</th>
                    <th class="p-2 border border-slate-200 dark:border-slate-800">Fórmula</th>
                    <th class="p-2 border border-slate-200 dark:border-slate-800">Condición</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 dark:divide-slate-800 font-mono">
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">Divisor de Tensión</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$V_x = V_{total} \\frac{R_x}{R_1 + R_2}$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">Resistencias en serie</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">Divisor de Corriente</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$I_1 = I_{total} \\frac{R_2}{R_1 + R_2}$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">Dos ramas en paralelo</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">Equivalente Thévenin / Norton</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$V_{th} = I_N \\cdot R_{th}$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">$R_{th} = V_{oc} / I_{sc}$</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">Máxima Transferencia de Potencia</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$P_{L,max} = \\frac{V_{th}^2}{4 R_{th}}$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">$R_L = R_{th}$ (Rendimiento $\\eta = 50\\%$)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="pt-2 flex justify-end">
              <button onclick="filtrarUnidad('cc'); volverAEjercicios();" class="text-xs font-mono text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1">
                <span>Practicar ejercicios guiados de la Unidad 1</span>
                <span>→</span>
              </button>
            </div>
          `
        }
      ]
    },

    // ========================================================================
    // UNIDAD 2: FÍSICA DEL SEMICONDUCTOR Y DIODOS
    // ========================================================================
    {
      id: 'diodos',
      numero: 2,
      titulo: 'Unidad 2: Semiconductores, Juntura PN y Diodos',
      icono: '🔻',
      badgeColor: 'border-emerald-500/40 bg-emerald-950/40 text-emerald-300',
      introduccion: 'Esta unidad abarca la física de semiconductores de silicio, el dopaje tipo P y N, la formación de la zona de agotamiento o de carga espacial en la juntura PN, la ecuación de Shockley, el modelo incremental y las aplicaciones prácticas en rectificadores, filtros, recortadores y estabilizadores con diodo Zener.',
      secciones: [
        {
          id: 'e1-u2-fisica-juntura',
          titulo: '2.1 Física del Semiconductor y la Juntura PN',
          contenido: `
            <p class="mb-3">El silicio cristalino es un semiconductor intrínseco del grupo IV. Mediante dopaje con impurezas pentavalentes (fósforo, arsénico) se obtienen materiales <strong>tipo N</strong> con electrones libres como portadores mayoritarios ($n_n \\approx N_D$). Con impurezas trivalentes (boro, galio) se obtienen materiales <strong>tipo P</strong> con huecos como portadores mayoritarios ($p_p \\approx N_A$).</p>
            <p class="mb-2">Por ley de acción de masas en equilibrio térmico: $n \\cdot p = n_i^2(T)$, donde $n_i \\approx 1.5 \\times 10^{10}\\text{ cm}^{-3}$ a $300\\text{ K}$.</p>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Formación de la Zona de Carga Espacial (ZCE)</h5>
            <p class="mb-2">Al unir un semiconductor P y uno N, se produce difusión de electrones hacia el lado P y de huecos hacia el lado N. Los iones fijos no compensados ($N_D^+$ en el lado N y $N_A^-$ en el lado P) crean un campo eléctrico interno $\\vec{\\mathcal{E}}$ que se opone a la difusión ulterior, alcanzando el equilibrio térmico.</p>
            <p class="my-2">El <strong>potencial de contacto interno (barrera de potencial)</strong> es:</p>
            $$V_0 = V_{bi} = V_T \\ln\\left( \\frac{N_A N_D}{n_i^2} \\right)$$
            <p class="text-xs text-slate-600 dark:text-slate-400">donde $V_T = k T / q \\approx 25.86\\text{ mV}$ a temperatura ambiente. En silicio típico, $V_0 \\approx 0.6\\text{ V} - 0.8\\text{ V}$.</p>
          `
        },
        {
          id: 'e1-u2-ecuacion-shockley-modelos',
          titulo: '2.2 Ecuación de Shockley y Modelos del Diodo',
          contenido: `
            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-2 mb-2">Ecuación Característica de Shockley</h5>
            $$I_D = I_S \\left( e^{\\frac{V_D}{\\eta V_T}} - 1 \\right)$$
            <ul class="list-disc pl-5 space-y-1 text-xs sm:text-sm mb-3">
              <li>$I_S$: Corriente inversa de saturación (típicamente $10^{-15}\\text{ A}$ a $10^{-12}\\text{ A}$).</li>
              <li>$\\eta$: Factor de idealidad ($\ eta \\approx 1$ para conducción por difusión pura; $\\eta \\approx 2$ para corrientes bajas dominadas por recombinación).</li>
              <li>En polarización directa ($V_D > 0.1\\text{ V}$): $e^{V_D/V_T} \\gg 1 \\implies I_D \\approx I_S e^{V_D/(\\eta V_T)}$.</li>
              <li>En polarización inversa ($V_D < -0.1\\text{ V}$): $I_D \\approx -I_S$.</li>
            </ul>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Resistencia Dinámica Incremental ($r_d$)</h5>
            <p class="mb-2">Para pequeñas variaciones de señal alrededor del punto de reposo $(V_{DQ}, I_{DQ})$:</p>
            $$r_d = \\left( \\left. \\frac{dI_D}{dV_D} \\right|_{Q} \\right)^{-1} = \\frac{\\eta V_T}{I_{DQ} + I_S} \\approx \\mathbf{\\frac{\\eta V_T}{I_{DQ}}}$$
            <p class="text-xs text-slate-600 dark:text-slate-400">Para $\\eta = 1$ y $I_{DQ} = 1\\text{ mA}$, $r_d \\approx 25\\,\\Omega$.</p>
          `
        },
        {
          id: 'e1-u2-rectificadores-zener',
          titulo: '2.3 Rectificadores, Filtro Capacitivo y Diodo Zener',
          contenido: `
            <div class="space-y-3 my-3">
              <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span class="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">1. Rectificador de Onda Completa con Filtro por Capacitor</span>
                <p class="text-xs mt-1">Tensión continua media con rizado triangular aproximado:</p>
                $$V_{DC} \\approx V_{pico} - \\frac{V_r}{2}, \\quad V_r = \\frac{I_{DC}}{2 f C} = \\frac{V_{pico}}{2 f R_L C}$$
                <p class="text-xs text-slate-500 mt-0.5">donde $f = 50\\text{ Hz}$ red ($2f = 100\\text{ Hz}$ en onda completa) y $V_{pico} = V_{sec,rms}\\sqrt{2} - 2 V_D$.</p>
              </div>

              <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span class="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">2. Regulador con Diodo Zener</span>
                <p class="text-xs mt-1">El Zener opera en ruptura inversa manteniendo $V_Z \\approx \\text{constante}$. Para garantizar regulación:</p>
                $$I_Z = I_R - I_L \\ge I_{Z,min} \\quad (\\text{típicamente } 1 - 5\\text{ mA})$$
                $$R_s \\le \\frac{V_{in,min} - V_Z}{I_{L,max} + I_{Z,min}}, \\quad P_{Z,max} = V_Z \\cdot I_{Z,max} \\quad (\\text{con } I_L = 0)$$
              </div>
            </div>
            <div class="pt-2 flex justify-end">
              <button onclick="filtrarUnidad('diodos'); volverAEjercicios();" class="text-xs font-mono text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1">
                <span>Practicar ejercicios guiados de la Unidad 2</span>
                <span>→</span>
              </button>
            </div>
          `
        }
      ]
    },

    // ========================================================================
    // UNIDAD 3: TRANSISTOR BJT - POLARIZACIÓN DC
    // ========================================================================
    {
      id: 'bjt-pol',
      numero: 3,
      titulo: 'Unidad 3: Transistor BJT - Teoría y Polarización DC',
      icono: '🔲',
      badgeColor: 'border-purple-500/40 bg-purple-950/40 text-purple-300',
      introduccion: 'Esta unidad analiza la física del transistor bipolar de juntura (BJT), sus regiones de operación (activa, corte, saturación), las relaciones fundamentales de corrientes y las topologías de polarización continua para fijar el punto de trabajo Q con estabilidad térmica.',
      secciones: [
        {
          id: 'e1-u3-fisica-regiones-bjt',
          titulo: '3.1 Principio de Operación y Relaciones de Corriente',
          contenido: `
            <p class="mb-3">El BJT consiste en dos junturas PN acopladas con una base física muy estrecha ($W_B \\ll L_n$). En <strong>Zona Activa Directa (ZAD)</strong>, la juntura Base-Emisor está en polarización directa ($V_{BE} \\approx 0.7\\text{ V}$) y la juntura Colector-Base en polarización inversa ($V_{CB} > 0$).</p>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Relaciones de Corriente en ZAD</h5>
            $$I_E = I_C + I_B$$
            $$I_C = \\beta I_B = h_{FE} I_B$$
            $$I_C = \\alpha I_E \\implies \\alpha = \\frac{\\beta}{1 + \\beta}, \\quad \\beta = \\frac{\\alpha}{1 - \\alpha}$$
            $$I_E = (1 + \\beta) I_B$$

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Condiciones de Borde entre Regiones</h5>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 my-3 text-xs">
              <div class="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <strong>Corte:</strong><br>
                $V_{BE} < 0.5\\text{ V}$<br>
                $I_B \\approx 0, \\; I_C \\approx 0$
              </div>
              <div class="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <strong>Zona Activa:</strong><br>
                $V_{BE} \\approx 0.7\\text{ V}$<br>
                $v_{CE} > V_{CE,sat}$ ($I_C = \\beta I_B$)
              </div>
              <div class="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <strong>Saturación:</strong><br>
                $v_{CE} = V_{CE,sat} \\approx 0.2\\text{ V}$<br>
                $I_{C,sat} < \\beta I_B$
              </div>
            </div>
          `
        },
        {
          id: 'e1-u3-circuitos-polarizacion',
          titulo: '3.2 Polarización por Divisor Resistivo Universal y Recta de Carga',
          contenido: `
            <p class="mb-3">El circuito más robusto y utilizado en ingeniería utiliza un divisor de tensión en base ($R_1, R_2$) y una resistencia en emisor ($R_E$):</p>
            $$V_{BB} = V_{CC} \\frac{R_2}{R_1 + R_2}, \\quad R_B = R_1 \\parallel R_2$$
            $$V_{BB} = I_B R_B + V_{BE} + I_E R_E = I_B [R_B + (1+\\beta)R_E] + V_{BE}$$
            <p class="my-2">Despejando la corriente de base y colector:</p>
            $$I_B = \\frac{V_{BB} - V_{BE}}{R_B + (1+\\beta)R_E} \\implies \\mathbf{I_{CQ} = \\frac{\\beta (V_{BB} - V_{BE})}{R_B + (1+\\beta)R_E}}$$

            <div class="p-3.5 my-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-950 dark:text-purple-200 text-xs">
              <strong>Condición de Inmunidad a $\\beta$:</strong> Si se diseña de modo que $(1+\\beta)R_E \\gg R_B$ (regla: $R_B \\le 0.1 \\beta R_E$):
              $$I_{CQ} \\approx \\frac{V_{BB} - V_{BE}}{R_E} = \\text{constante e independiente de } \\beta$$
            </div>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Recta de Carga Estática</h5>
            $$V_{CEQ} = V_{CC} - I_{CQ}(R_C + R_E)$$
            <p class="text-xs text-slate-600 dark:text-slate-400">Punto Q centrado para señal simétrica: $V_{CEQ} \\approx V_{CC}/2$.</p>
            <div class="pt-2 flex justify-end">
              <button onclick="filtrarUnidad('bjt-pol'); volverAEjercicios();" class="text-xs font-mono text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-1">
                <span>Practicar ejercicios guiados de la Unidad 3</span>
                <span>→</span>
              </button>
            </div>
          `
        }
      ]
    },

    // ========================================================================
    // UNIDAD 4: CUADRIPOLOS Y PEQUEÑA SEÑAL BJT
    // ========================================================================
    {
      id: 'bjt-ac',
      numero: 4,
      titulo: 'Unidad 4: Cuadripolos y Modelos de Pequeña Señal BJT',
      icono: '📶',
      badgeColor: 'border-amber-500/40 bg-amber-950/40 text-amber-300',
      introduccion: 'Esta unidad desarrolla la teoría de cuadripolos lineales de 2 puertos, los parámetros híbridos h y el modelo híbrido pi del transistor BJT. Se deducen analíticamente las impedancias de entrada y salida y las ganancias de tensión y corriente en las configuraciones Emisor Común, Colector Común (Seguidor de Emisor) y Base Común.',
      secciones: [
        {
          id: 'e1-u4-parametros-hibridos-pi',
          titulo: '4.1 Parámetros Híbridos h y Modelo Híbrido Pi',
          contenido: `
            <p class="mb-3">Para pequeñas variaciones sinusoidales, el BJT se modela como un cuadripolo lineal con variables $[v_1, i_2]^T = [h] [i_1, v_2]^T$:</p>
            $$v_1 = h_{11} i_1 + h_{12} v_2 = h_i i_1 + h_r v_2$$
            $$i_2 = h_{21} i_1 + h_{22} v_2 = h_f i_1 + h_o v_2$$

            <div class="p-3.5 my-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs space-y-1">
              <p>• $h_{ie} = r_\\pi = (1+\\beta) r_e = \\frac{\\beta V_T}{I_{CQ}}$: Resistencia de entrada en cortocircuito de salida.</p>
              <p>• $h_{fe} = \\beta$: Ganancia de corriente en cortocircuito de salida.</p>
              <p>• $h_{re} \\approx 0$: Factor de realimentación inversa (despreciable a bajas frecuencias).</p>
              <p>• $h_{oe} = 1/r_o = \\frac{I_{CQ}}{V_A}$: Admitancia de salida (efecto Early, a menudo despreciable si $R_C \\ll r_o$).</p>
            </div>

            <p class="text-xs sm:text-sm">En el <strong>modelo híbrido $\\pi$</strong> con fuente controlada de transconductancia:</p>
            $$g_m = \\frac{I_{CQ}}{V_T}, \\quad r_\\pi = \\frac{\\beta}{g_m}, \\quad r_e = \\frac{\\alpha}{g_m} \\approx \\frac{V_T}{I_{EQ}}$$
          `
        },
        {
          id: 'e1-u4-configuraciones-comparativa',
          titulo: '4.2 Configuraciones Básicas: EC, CC y BC',
          contenido: `
            <div class="overflow-x-auto my-3">
              <table class="w-full text-xs text-left border-collapse border border-slate-200 dark:border-slate-800">
                <thead>
                  <tr class="bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 font-mono">
                    <th class="p-2 border border-slate-200 dark:border-slate-800">Configuración</th>
                    <th class="p-2 border border-slate-200 dark:border-slate-800">Ganancia $A_v$</th>
                    <th class="p-2 border border-slate-200 dark:border-slate-800">Resistencia Entrada $R_i$</th>
                    <th class="p-2 border border-slate-200 dark:border-slate-800">Resistencia Salida $R_o$</th>
                    <th class="p-2 border border-slate-200 dark:border-slate-800">Aplicación Típica</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 dark:divide-slate-800 font-mono text-[11px]">
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-bold">Emisor Común (EC)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$-g_m (R_C \\parallel R_L)$ (Alta, invierte fase)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$R_B \\parallel r_\\pi$ (Media, $1-5\\text{ k}\\Omega$)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$R_C$ (Media)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">Amplificación de tensión principal</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-bold">Colector Común (CC)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$\\approx +1$ (No invierte)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$R_B \\parallel [r_\\pi + (1+\\beta)R_L']$ (Muy alta)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$R_E \\parallel \\left( \\frac{R_s' + r_\\pi}{1+\\beta} \\right)$ (Muy baja)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">Buffer / Adaptador de impedancias</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-bold">Base Común (BC)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$+g_m (R_C \\parallel R_L)$ (Alta, no invierte)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$R_E \\parallel r_e$ (Muy baja, $\\sim 25\\,\\Omega$)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$R_C$ (Alta)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">Etapa de alta frecuencia (sin efecto Miller)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="pt-2 flex justify-end">
              <button onclick="filtrarUnidad('bjt-ac'); volverAEjercicios();" class="text-xs font-mono text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1">
                <span>Practicar ejercicios guiados de la Unidad 4</span>
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
MANUALES_TEORIA['electronica-1'] = MANUAL_TEORIA_E1;
