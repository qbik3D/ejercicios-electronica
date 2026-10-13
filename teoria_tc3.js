// ==========================================================================
// MANUAL TEÓRICO COMPLETO Y EXHAUSTIVO - TEORÍA DE CIRCUITOS III (CÓDIGO 3709)
// Cátedra: Ing. Marcelo Márquez / Ing. Germán Cardozo (UTN FRBA)
// Preparación integral para Examen Parcial y Final
// ==========================================================================

const MANUAL_TEORIA_TC3 = {
  materiaId: 'circuitos-3',
  codigo: '3709',
  nombre: 'Teoría de Circuitos III',
  titulo: 'Manual y Compendio Teórico de Síntesis de Redes, MAI y Cuadripolos',
  subtitulo: 'Cátedra: Ing. Marcelo Márquez / Ing. Germán Cardozo - UTN FRBA',
  descripcion: 'Funciones de red en el plano s, normalización, redes activas con GIC y FDNR, síntesis de dipolos de Foster y Cauer, Matriz de Admitancia Indefinida (MAI), teoría imagen y parámetros de dispersión S.',
  
  unidades: [
    // ========================================================================
    // UNIDAD 1: FUNCIONES DE RED Y BODE
    // ========================================================================
    {
      id: 'tc3-u1',
      numero: 1,
      titulo: 'Unidad 1: Funciones de Red, Transformada de Laplace y Normalización',
      icono: '📊',
      badgeColor: 'border-cyan-500/40 bg-cyan-950/40 text-cyan-300',
      introduccion: 'Esta unidad fundamenta el análisis de redes en el dominio de la variable compleja s de Laplace. Se desarrollan las condiciones de estabilidad de Hurwitz, las técnicas de normalización en frecuencia e impedancia, y el análisis del retardo de grupo en la transmisión de señales analógicas.',
      secciones: [
        {
          id: 'tc3-u1-funciones-red',
          titulo: '1.1 Funciones de Red de 1 y 2 Puertos en el Plano Complejo s',
          contenido: `
            <p class="mb-3">Una <strong>función de red $H(s)$</strong> relaciona la transformada de Laplace de una respuesta $Y(s)$ con la de una excitación $X(s)$, asumiendo condiciones iniciales nulas:</p>
            $$H(s) = \\frac{Y(s)}{X(s)} = \\frac{N(s)}{D(s)} = K \\frac{(s - z_1)(s - z_2)\\dots(s - z_m)}{(s - p_1)(s - p_2)\\dots(s - p_n)}$$
            <ul class="list-disc pl-5 space-y-1 text-xs sm:text-sm mb-3">
              <li><strong>Funciones de Excitación o Inmitancia (1 puerto):</strong> Impedancia $Z(s) = V(s)/I(s)$ o Admitancia $Y(s) = I(s)/V(s)$ vistas desde el mismo par de terminales.</li>
              <li><strong>Funciones de Transferencia (2 puertos):</strong> Relacionan magnitudes de puertos distintos:
                Transferencia de tensión $T_v(s) = V_2(s)/V_1(s)$, de corriente $T_i(s) = I_2(s)/I_1(s)$, transimpedancia $Z_{21}(s) = V_2(s)/I_1(s)$ o transadmitancia $Y_{21}(s) = I_2(s)/V_1(s)$.
              </li>
            </ul>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Estabilidad y Polinomios de Hurwitz</h5>
            <p class="mb-2">Para que una red pasiva o activa sea asintóticamente estable, todos los polos de la función de transferencia deben residir estrictamente en el <strong>semiplano izquierdo abierto (SPI)</strong>: $\\text{Re}\\{p_k\\} < 0$. El denominador $D(s)$ debe ser un <strong>polinomio de Hurwitz</strong>.</p>
          `
        },
        {
          id: 'tc3-u1-normalizacion-retardo',
          titulo: '1.2 Normalización de Redes y Retardo de Grupo',
          contenido: `
            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-2 mb-2">Normalización en Frecuencia e Impedancia</h5>
            <p class="mb-2">Para simplificar los cálculos numéricos en síntesis, se eligen una frecuencia de referencia $\\Omega_0$ [rad/s] y una resistencia de referencia $R_0$ [$\\Omega$]:</p>
            $$\\Omega_n = \\frac{\\omega}{\\Omega_0}, \\quad s_n = \\frac{s}{\\Omega_0}, \\quad z_n(s_n) = \\frac{Z(s)}{R_0}$$
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 my-3 text-xs">
              <div class="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <strong>Resistencia:</strong><br>
                $r_n = \\frac{R}{R_0}$<br>
                $R = r_n \\cdot R_0$
              </div>
              <div class="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <strong>Inductor:</strong><br>
                $l_n = \\frac{L \\cdot \\Omega_0}{R_0}$<br>
                $L = l_n \\frac{R_0}{\\Omega_0}$
              </div>
              <div class="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <strong>Capacitor:</strong><br>
                $c_n = C \\cdot \\Omega_0 \\cdot R_0$<br>
                $C = \\frac{c_n}{\\Omega_0 R_0}$
              </div>
            </div>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Retardo de Grupo (Group Delay)</h5>
            <p class="mb-2">El retardo de grupo $\\tau_g(\\omega)$ cuantifica la demora temporal experimentada por la envolvente de un paquete de ondas a cada frecuencia:</p>
            $$\\mathbf{\\tau_g(\\omega) = -\\frac{d\\phi(\\omega)}{d\\omega}}$$
            <p class="text-xs text-slate-600 dark:text-slate-400">Si $\\tau_g(\\omega) = \\text{constante}$ en la banda de paso, la fase $\\phi(\\omega)$ es estrictamente lineal y la señal se transmite sin distorsión de fase (propiedad de los filtros de Bessel/Thomson).</p>
            <div class="pt-2 flex justify-end">
              <button onclick="filtrarUnidad('tc3-u1'); volverAEjercicios();" class="text-xs font-mono text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1">
                <span>Practicar ejercicios guiados de la Unidad 1</span>
                <span>→</span>
              </button>
            </div>
          `
        }
      ]
    },

    // ========================================================================
    // UNIDAD 2: OPERACIONALES, GIC Y FDNR
    // ========================================================================
    {
      id: 'tc3-u2',
      numero: 2,
      titulo: 'Unidad 2: Redes Activas con Amplificadores Operacionales, GIC y FDNR',
      icono: '⚡',
      badgeColor: 'border-amber-500/40 bg-amber-950/40 text-amber-300',
      introduccion: 'En esta unidad se estudian las redes activas basadas en operacionales diseñadas para sintetizar componentes circuitales que no existen en la naturaleza, como inductores puros sin pérdidas y elementos de inmitancia cuadrática (FDNR o Elemento D de Bruton).',
      secciones: [
        {
          id: 'tc3-u2-gic-antoniou',
          titulo: '2.1 El Convertidor de Inmitancia Generalizado (GIC de Antoniou)',
          contenido: `
            <p class="mb-3">El circuito GIC de Antoniou consta de 2 amplificadores operacionales ideales y 5 impedancias pasivas ($Z_1, Z_2, Z_3, Z_4, Z_5$) interconectadas:</p>

            <div class="p-4 my-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-950 dark:text-amber-200">
              <h5 class="font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <span>⚡</span> Ecuación Fundamental del GIC de Antoniou
              </h5>
              $$\\mathbf{Z_{in}(s) = \\frac{Z_1(s) \\cdot Z_3(s) \\cdot Z_5(s)}{Z_2(s) \\cdot Z_4(s)}}$$
              <p class="text-xs mt-2">La impedancia vista desde el borne 1 de entrada es directamente proporcional a los elementos de numeradores impares e inversamente proporcional a los elementos pares.</p>
            </div>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">1. Síntesis de Inductor Simulado Activo</h5>
            <p class="mb-2">Si se coloca un único capacitor en la posición $Z_4$ ($Z_4 = 1/(s C_4)$) y las restantes impedancias son resistencias puras ($Z_1 = R_1, Z_2 = R_2, Z_3 = R_3, Z_5 = R_5$):</p>
            $$Z_{in}(s) = \\frac{R_1 R_3 R_5}{R_2 \\left( \\frac{1}{s C_4} \\right)} = s \\cdot \\left( \\frac{R_1 R_3 R_5 C_4}{R_2} \\right) = s \\cdot L_{eq}$$
            $$\\mathbf{L_{eq} = \\frac{R_1 R_3 R_5 C_4}{R_2}}$$
            <p class="text-xs text-slate-600 dark:text-slate-400">Permite obtener inductores de alta precisión y factor Q elevado sin masa ni pérdidas magnéticas.</p>
          `
        },
        {
          id: 'tc3-u2-fdnr-bruton',
          titulo: '2.2 El Elemento D de Bruton (FDNR)',
          contenido: `
            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-2 mb-2">Síntesis del Elemento D (FDNR)</h5>
            <p class="mb-2">Si en el GIC se eligen dos capacitores en las posiciones $Z_1$ y $Z_3$ ($Z_1 = 1/(s C_1), Z_3 = 1/(s C_3)$) y resistencias en $Z_2, Z_4, Z_5$:</p>
            $$Z_{in}(s) = \\frac{\\left( \\frac{1}{s C_1} \\right) \\left( \\frac{1}{s C_3} \\right) R_5}{R_2 R_4} = \\frac{1}{s^2 \\cdot \\left( \\frac{R_2 R_4 C_1 C_3}{R_5} \\right)} = \\mathbf{\\frac{1}{s^2 D}}$$
            $$\\mathbf{D = \\frac{R_2 R_4 C_1 C_3}{R_5} \\quad [\\text{Farad}^2 / \\Omega]}$$
            <p class="text-xs text-slate-600 dark:text-slate-400">A frecuencia sinusoidal ($s = j\\omega$, $s^2 = -\\omega^2$):</p>
            $$Z_{in}(j\\omega) = -\\frac{1}{\\omega^2 D}$$
            <p class="text-xs font-semibold text-rose-600 dark:text-rose-400">Es una resistencia real puramente negativa inversamente proporcional al cuadrado de la frecuencia (*Frequency Dependent Negative Resistor*).</p>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Transformación de Bruton para Filtros Activos</h5>
            <p class="mb-2">Al multiplicar todas las impedancias de un prototipo pasivo RLC por el factor de escala $1/s$ (la transferencia de tensión $V_2/V_1$ queda inalterada):</p>
            <ul class="list-disc pl-5 space-y-1 text-xs sm:text-sm">
              <li>Resistencia $R \\implies R/s$ (se convierte en un <strong>Capacitor</strong> $C = 1/R$).</li>
              <li>Inductor $s L \\implies s L / s = L$ (se convierte en una <strong>Resistencia</strong> $R = L$).</li>
              <li>Capacitor $1/(s C) \\implies 1/(s^2 C)$ (se convierte en un <strong>Elemento D</strong> con $D = C$).</li>
            </ul>
            <p class="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-2">¡Todos los inductores de la red desaparecen, reemplazándose por resistencias y FDNRs activos!</p>
            <div class="pt-2 flex justify-end">
              <button onclick="filtrarUnidad('tc3-u2'); volverAEjercicios();" class="text-xs font-mono text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1">
                <span>Practicar ejercicios guiados de la Unidad 2</span>
                <span>→</span>
              </button>
            </div>
          `
        }
      ]
    },

    // ========================================================================
    // UNIDAD 3: SÍNTESIS DE DIPOLOS PASIVOS
    // ========================================================================
    {
      id: 'tc3-u3',
      numero: 3,
      titulo: 'Unidad 3: Síntesis de Dipolos Pasivos (Foster y Cauer)',
      icono: '🔄',
      badgeColor: 'border-emerald-500/40 bg-emerald-950/40 text-emerald-300',
      introduccion: 'Esta unidad enseña a sintetizar dipolos pasivos a partir de una función de inmitancia positiva real (PR). Se estudian los dipolos reactivos puros LC (teorema de Foster) y los algoritmos canónicos de Foster I y II y Cauer I y II.',
      secciones: [
        {
          id: 'tc3-u3-teorema-foster-lc',
          titulo: '3.1 Dipolos Reactivos Puros LC y Teorema de Reactancia de Foster',
          contenido: `
            <p class="mb-3">Una función de impedancia reactiva pura $Z(s)$ de un dipolo LC satisface:</p>
            <ul class="list-disc pl-5 space-y-1 text-xs sm:text-sm mb-3">
              <li>Es un cociente de polinomios par e impar (función impar de $s$): $Z(-s) = -Z(s)$.</li>
              <li>Todos sus polos y ceros están situados sobre el eje imaginario $j\\omega$, son simples y se alternan estrictamente.</li>
              <li>En el origen ($s = 0$) y en el infinito ($s \\to \\infty$) debe haber obligatoriamente un polo o un cero.</li>
            </ul>

            <div class="p-3.5 my-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-950 dark:text-emerald-200">
              <h5 class="font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <span>📐</span> Teorema de Reactancia de Foster
              </h5>
              $$\\mathbf{\\frac{dX(\\omega)}{d\\omega} > 0, \\quad \\frac{dB(\\omega)}{d\\omega} > 0}$$
              <p class="text-xs mt-1">La pendiente de la curva de reactancia y susceptancia con respecto a la frecuencia es estrictamente positiva para cualquier $\\omega$.</p>
            </div>
          `
        },
        {
          id: 'tc3-u3-formas-canonicas',
          titulo: '3.2 Formas Canónicas de Síntesis: Foster y Cauer',
          contenido: `
            <div class="space-y-3 my-3">
              <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span class="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">Foster I (Expansión en Fracciones Simples de Z)</span>
                $$Z(s) = s L_\\infty + \\frac{1}{s C_0} + \\sum_{i=1}^k \\frac{\\frac{2 k_i}{s^2 + \\omega_i^2} s}{1} = s L_\\infty + \\frac{1}{s C_0} + \\sum_{i=1}^k \\frac{1}{s C_i + \\frac{1}{s L_i}}$$
                <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Topología: Inductor en serie ($L_\\infty$), capacitor en serie ($C_0$) y tanques LC paralelos en serie.</p>
              </div>

              <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span class="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">Foster II (Expansión en Fracciones Simples de Y)</span>
                $$Y(s) = s C_\\infty + \\frac{1}{s L_0} + \\sum_{i=1}^k \\frac{1}{s L_i + \\frac{1}{s C_i}}$$
                <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Topología: Ramas en paralelo (capacitor $C_\\infty$, inductor $L_0$ y circuitos resonantes LC serie).</p>
              </div>

              <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span class="text-xs font-mono font-bold text-amber-600 dark:text-amber-400">Cauer I (Fracciones Continuas en el Infinito, $s \\to \\infty$)</span>
                <p class="text-xs text-slate-600 dark:text-slate-400">Divisiones sucesivas ordenando polinomios por potencias decrecientes. Red en escalera tipo té con inductores en serie y capacitores en paralelo.</p>
              </div>

              <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span class="text-xs font-mono font-bold text-purple-600 dark:text-purple-400">Cauer II (Fracciones Continuas en el Origen, $s \\to 0$)</span>
                <p class="text-xs text-slate-600 dark:text-slate-400">Divisiones sucesivas ordenando polinomios por potencias crecientes. Red en escalera con capacitores en serie e inductores en paralelo.</p>
              </div>
            </div>
            <div class="pt-2 flex justify-end">
              <button onclick="filtrarUnidad('tc3-u3'); volverAEjercicios();" class="text-xs font-mono text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1">
                <span>Practicar ejercicios guiados de la Unidad 3</span>
                <span>→</span>
              </button>
            </div>
          `
        }
      ]
    },

    // ========================================================================
    // UNIDAD 4: CUADRIPOLOS Y MATRIZ DE ADMITANCIA INDEFINIDA (MAI)
    // ========================================================================
    {
      id: 'tc3-u4',
      numero: 4,
      titulo: 'Unidad 4: Análisis de Cuadripolos y Matriz de Admitancia Indefinida (MAI)',
      icono: '🔲',
      badgeColor: 'border-rose-500/40 bg-rose-950/40 text-rose-300',
      introduccion: 'Esta unidad desarrolla el método matricial más potente para resolver circuitos con topologías arbitrarias, fuentes controladas y amplificadores operacionales: la Matriz de Admitancia Indefinida (MAI) de Puckett y sus propiedades de reducción.',
      secciones: [
        {
          id: 'tc3-u4-mai-propiedades',
          titulo: '4.1 Fundamentos y Propiedades Cardinales de la MAI',
          contenido: `
            <p class="mb-3">La Matriz de Admitancia Indefinida (MAI) $[Y_{ind}]$ describe una red de $n$ nodos donde <em>ningún nodo ha sido elegido como referencia</em> ($[I] = [Y_{ind}] [V]$):</p>

            <div class="p-4 my-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-950 dark:text-rose-200">
              <h5 class="font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <span>⚡</span> Propiedades Cardinales de la MAI
              </h5>
              <ol class="list-decimal pl-5 space-y-1.5 text-xs">
                <li><strong>Suma de filas nula:</strong> En toda fila $i$, $\\sum_{j=1}^n Y_{ij} = 0$ (la corriente total es nula si todas las tensiones son iguales por invariancia de potencial).</li>
                <li><strong>Suma de columnas nula:</strong> En toda columna $j$, $\\sum_{i=1}^n Y_{ij} = 0$ (conservación global de carga / LCK).</li>
                <li><strong>Elección de referencia:</strong> Si el nodo $k$ se conecta a masa ($V_k = 0$), la matriz definida se obtiene <em>suprimiendo la fila $k$ y la columna $k$</em>.</li>
                <li><strong>Reducción de nodos flotantes (Complemento de Schur):</strong> Para eliminar nodos internos sin fuentes externas:
                  $$[Y_{red}] = [Y_{11}] - [Y_{12}] [Y_{22}]^{-1} [Y_{21}]$$
                </li>
              </ol>
            </div>
          `
        },
        {
          id: 'tc3-u4-mai-calculos-transferencia',
          titulo: '4.2 Cálculo de Transferencias e Inmitancias mediante la MAI',
          contenido: `
            <p class="mb-2">Sean $j$ el nodo excitado, $k$ el nodo de salida y $m$ el nodo de masa (referencia). Aplicando la regla del cociente de cofactores de Puckett:</p>
            <div class="p-3.5 my-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs space-y-2">
              <p>• <strong>Ganancia de Tensión:</strong>
                $$A_v = \\frac{V_k}{V_j} = \\frac{(-1)^{j+k} \\det(Y_{jk}^m)}{\\det(Y_{jj}^m)}$$
                donde $Y_{jk}^m$ es el cofactor obtenido tachando la fila $j$, columna $k$ y la fila/columna de masa $m$.
              </p>
              <p>• <strong>Impedancia de Entrada:</strong>
                $$Z_{in} = \\frac{\\det(Y_{jj}^m)}{\\det(Y^m)}$$
              </p>
            </div>
            <div class="pt-2 flex justify-end">
              <button onclick="filtrarUnidad('tc3-u4'); volverAEjercicios();" class="text-xs font-mono text-rose-600 dark:text-rose-400 hover:underline flex items-center gap-1">
                <span>Practicar ejercicios guiados de la Unidad 4</span>
                <span>→</span>
              </button>
            </div>
          `
        }
      ]
    },

    // ========================================================================
    // UNIDAD 5: TEORÍA IMAGEN Y PARÁMETROS S
    // ========================================================================
    {
      id: 'tc3-u5',
      numero: 5,
      titulo: 'Unidad 5: Teoría Imagen, Coeficiente de Reflexión y Parámetros S',
      icono: '🌐',
      badgeColor: 'border-purple-500/40 bg-purple-950/40 text-purple-300',
      introduccion: 'Esta unidad abarca la caracterización imagen de cuadripolos y la formulación de alta frecuencia y microondas basada en ondas de dispersión (Parámetros S), coeficiente de reflexión gamma y ROE.',
      secciones: [
        {
          id: 'tc3-u5-teoria-imagen',
          titulo: '5.1 Impedancias Imagen y Función de Transferencia Imagen',
          contenido: `
            <p class="mb-3">Para un cuadripolo caracterizado por su matriz de transmisión $[A, B; C, D]$:</p>
            <ul class="list-disc pl-5 space-y-1 text-xs sm:text-sm mb-3">
              <li><strong>Impedancia Imagen 1 ($Z_{I1}$):</strong> $Z_{I1} = \\sqrt{\\frac{A B}{C D}} = \\sqrt{Z_{ca1} \\cdot Z_{cc1}}$.</li>
              <li><strong>Impedancia Imagen 2 ($Z_{I2}$):</strong> $Z_{I2} = \\sqrt{\\frac{B D}{A C}} = \\sqrt{Z_{ca2} \\cdot Z_{cc2}}$.</li>
              <li><strong>Constante de Transferencia Imagen ($\\theta$):</strong>
                $$\\theta = \\alpha + j\\beta = \\frac{1}{2} \\ln\\left( \\frac{V_1 I_1}{V_2 I_2} \\right) = \\text{Arcosh}(\\sqrt{A D})$$
                donde $\\alpha$ es la atenuación (Neper o dB) y $\\beta$ el desfasaje (radianes).
              </li>
            </ul>
          `
        },
        {
          id: 'tc3-u5-parametros-s',
          titulo: '5.2 Ondas de Potencia y Matriz de Dispersión (Parámetros S)',
          contenido: `
            <p class="mb-2">A frecuencias de RF y microondas, las tensiones y corrientes totales son difíciles de medir. Se utilizan las <strong>ondas de potencia incidentes ($a$) y reflejadas ($b$)</strong> normalizadas respecto a la impedancia característica $Z_0$ (típicamente $50\\,\\Omega$):</p>
            $$a_n = \\frac{V_n + Z_0 I_n}{2 \\sqrt{Z_0}}, \\quad b_n = \\frac{V_n - Z_0 I_n}{2 \\sqrt{Z_0}}$$

            <div class="p-4 my-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-950 dark:text-purple-200">
              <h5 class="font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <span>📡</span> Ecuaciones de los Parámetros S
              </h5>
              $$\\begin{bmatrix} b_1 \\\\ b_2 \\end{bmatrix} = \\begin{bmatrix} S_{11} & S_{12} \\\\ S_{21} & S_{22} \\end{bmatrix} \\begin{bmatrix} a_1 \\\\ a_2 \\end{bmatrix}$$
              <ul class="list-disc pl-5 space-y-1 text-xs mt-2">
                <li>$\\mathbf{S_{11} = \\left. \\frac{b_1}{a_1} \\right|_{a_2=0}}$: Coeficiente de reflexión en el puerto 1 con puerto 2 adaptado a $Z_0$.</li>
                <li>$\\mathbf{S_{21} = \\left. \\frac{b_2}{a_1} \\right|_{a_2=0}}$: Ganancia de transmisión directa hacia adelante.</li>
                <li>$\\mathbf{S_{12} = \\left. \\frac{b_1}{a_2} \\right|_{a_1=0}}$: Aislamiento inverso.</li>
                <li>$\\mathbf{S_{22} = \\left. \\frac{b_2}{a_2} \\right|_{a_1=0}}$: Coeficiente de reflexión en el puerto 2 con puerto 1 adaptado.</li>
              </ul>
            </div>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Coeficiente de Reflexión $\\Gamma$ y ROE (VSWR)</h5>
            $$\\Gamma_L = \\frac{Z_L - Z_0}{Z_L + Z_0}, \\quad \\mathbf{\\text{ROE} = \\text{VSWR} = \\frac{1 + |\\Gamma_L|}{1 - |\\Gamma_L|}}$$
            <p class="text-xs text-slate-600 dark:text-slate-400">Si $Z_L = Z_0 \\implies \\Gamma_L = 0 \\implies \\text{ROE} = 1$ (adaptación perfecta sin reflexiones).</p>
            <div class="pt-2 flex justify-end">
              <button onclick="filtrarUnidad('tc3-u5'); volverAEjercicios();" class="text-xs font-mono text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-1">
                <span>Practicar ejercicios guiados de la Unidad 5</span>
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
MANUALES_TEORIA['circuitos-3'] = MANUAL_TEORIA_TC3;
