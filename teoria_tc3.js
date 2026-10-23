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

            <div class="p-3 my-3 rounded-xl bg-cyan-500/10 dark:bg-cyan-950/40 border border-cyan-500/30 text-xs flex items-start gap-2.5">
              <span class="text-base shrink-0">🔗</span>
              <div class="flex-1 min-w-0">
                <div class="font-semibold text-cyan-900 dark:text-cyan-300">
                  Fundamento Físico en Electrónica Aplicada I (Arquitectura del Op-Amp):
                </div>
                <p class="text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                  Para comprender el comportamiento real de los amplificadores operacionales del GIC (producto ganancia-ancho de banda finito, compensación Miller y Slew Rate):
                </p>
                <button 
                  onclick="navegarASeccionTeorica('electronica-aplicada-1', 'u3-carga-activa-opamp')"
                  class="mt-1.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-mono text-[11px] font-medium transition-colors shadow-2xs"
                >
                  <span>📖 Ver Electrónica Aplicada I · Unidad 3 (Arquitectura Interna del Op-Amp)</span>
                  <span>→</span>
                </button>
              </div>
            </div>
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
      introduccion: 'Esta unidad enseña a sintetizar dipolos pasivos a partir de una función de inmitancia positiva real (PR). Se estudian los dipolos reactivos puros LC (teorema de Foster), los dipolos disipativos RC y RL, y los algoritmos canónicos de Foster I y II y Cauer I y II.',
      secciones: [
        {
          id: 'tc3-u3-funciones-pr',
          titulo: '3.1 Funciones Real Positivas (PR) y Criterios de Realizabilidad de Brune',
          contenido: `
<p class="mb-3">El problema fundamental de la <strong>síntesis de redes</strong> consiste en determinar si una función racional de variable compleja $F(s) = N(s)/D(s)$ puede materializarse físicamente como la impedancia $Z(s)$ o la admitancia $Y(s)$ de un dipolo pasivo lineal, invariante en el tiempo (LTI), constituido exclusivamente por componentes $R$, $L$, $C$ y transformadores ideales sin pérdidas. En 1931, el matemático e ingeniero <strong>Otto Brune</strong> demostró que la condición matemática necesaria y suficiente para que esto sea posible es que la función de inmitancia sea <strong>Real Positiva (PR, por sus siglas en inglés *Positive Real*)</strong>.</p>

<div class="p-4 my-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-950 dark:text-emerald-200">
  <h5 class="font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
    <span>📐</span> Definición Axiomática de Función Real Positiva (Brune, 1931)
  </h5>
  <p class="text-xs sm:text-sm mb-2">Una función analítica $F(s)$ (con $s = \\sigma + j\\omega$) es <strong>Real Positiva (PR)</strong> si satisface rigurosamente los dos axiomas siguientes:</p>
  <ol class="list-decimal pl-5 space-y-1 text-xs sm:text-sm">
    <li><strong>Axioma de Realidad:</strong> $F(s)$ es un número real siempre que $s$ sea un número real:<br>
      $$F(\\sigma) \\in \\mathbb{R} \\quad \\forall \\sigma \\in \\mathbb{R} \\iff F(s^*) = [F(s)]^*$$
      Físicamente implica que todos los coeficientes polinomiales de $N(s)$ y $D(s)$ son números reales.
    </li>
    <li><strong>Axioma de Pasividad Energética:</strong> La parte real de $F(s)$ es no negativa en todo el semiplano derecho cerrado de la variable compleja $s$ ($\\text{Re}\\{s\\} \\ge 0$):<br>
      $$\\mathbf{\\text{Re}\\{F(s)\\} \\ge 0 \\quad \\forall s \\in \\mathbb{C} \\text{ tal que } \\text{Re}\\{s\\} \\ge 0}$$
      Físicamente significa que un dipolo pasivo es incapaz de generar energía neta activa hacia el exterior.
    </li>
  </ol>
</div>

<h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Propiedades Cardinales y Criterios de Verificación</h5>
<p class="mb-2">Para verificar si una función racional irreducible $F(s) = \\frac{N(s)}{D(s)}$ es PR en la práctica sin tener que evaluar todo el semiplano derecho $\\text{Re}\\{s\\} > 0$, se utilizan las siguientes propiedades y teoremas deducidos del principio del módulo máximo:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-3 my-3 text-xs sm:text-sm">
  <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
    <div class="font-bold text-blue-600 dark:text-blue-400 font-mono">1. Inversión y Grados Polinomiales</div>
    <p>Si $F(s)$ es PR, entonces su inversa dual $\\frac{1}{F(s)}$ también es PR (si una impedancia pasiva existe, su admitancia dual también existe). Los grados de $N(s)$ y $D(s)$ difieren como máximo en 1: $|\\deg(N) - \\deg(D)| \\le 1$.</p>
  </div>
  <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
    <div class="font-bold text-indigo-600 dark:text-indigo-400 font-mono">2. Polinomios de Hurwitz Estricto</div>
    <p>Ni $N(s)$ ni $D(s)$ pueden poseer ceros en el semiplano derecho abierto ($\\text{Re}\\{s\\} > 0$). Por lo tanto, no pueden faltar coeficientes intermedios en $N(s)$ o $D(s)$ a menos que sean polinomios estrictamente pares o impares.</p>
  </div>
  <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
    <div class="font-bold text-amber-600 dark:text-amber-400 font-mono">3. Singularidades en el Eje Imaginario $j\\omega$</div>
    <p>Si $F(s)$ posee polos o ceros sobre el eje imaginario $j\\omega$ (incluyendo el origen $s = 0$ y el infinito $s \\to \\infty$), deben ser <strong>estrictamente simples</strong> (de primer orden) y sus residuos $k_i$ deben ser <strong>reales y estrictamente positivos</strong> ($k_i > 0$).</p>
  </div>
  <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
    <div class="font-bold text-emerald-600 dark:text-emerald-400 font-mono">4. Test de Parte Real sobre el Eje $j\\omega$</div>
    <p>La condición necesaria y suficiente de contorno exige que $\\text{Re}\\{F(j\\omega)\\} \\ge 0$ para toda frecuencia real $\\omega \\in [0, \\infty)$. Si este test se satisface y los polos en $j\\omega$ tienen residuos positivos, la función es PR en todo el semiplano derecho.</p>
  </div>
</div>

<h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Algoritmo del Test de Parte Real Par: $A(\\omega^2) \\ge 0$</h5>
<p class="mb-2">Sea $F(s) = \\frac{M_1(s) + N_1(s)}{M_2(s) + N_2(s)}$, donde $M_i(s)$ representa la parte par del polinomio y $N_i(s)$ la parte impar. Se construye la parte par de la función de inmitancia $\\text{Ev}\\{F(s)\\}$:</p>
$$\\text{Ev}\\{F(s)\\} = \\frac{1}{2} [F(s) + F(-s)] = \\frac{M_1(s) M_2(s) - N_1(s) N_2(s)}{M_2^2(s) - N_2^2(s)}$$
<p class="mb-2">Al evaluar sobre el eje imaginario sustituyendo $s = j\\omega$ (notando que $s^2 = -\\omega^2$):</p>
$$\\text{Re}\\{F(j\\omega)\\} = \\left. \\frac{M_1(s) M_2(s) - N_1(s) N_2(s)}{M_2^2(s) - N_2^2(s)} \\right|_{s=j\\omega} = \\frac{A(\\omega^2)}{|D(j\\omega)|^2}$$
<p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-3">Dado que el denominador $|D(j\\omega)|^2 = M_2^2(j\\omega) - N_2^2(j\\omega) \\ge 0$ es el módulo al cuadrado de un número complejo (siempre estrictamente no negativo), la condición $\\text{Re}\\{F(j\\omega)\\} \\ge 0$ se cumple si y solo si el <strong>polinomio par del numerador</strong> $A(\\omega^2) = M_1(j\\omega) M_2(j\\omega) - N_1(j\\omega) N_2(j\\omega) \\ge 0$ para todo $\\omega \\ge 0$. Para que esto ocurra, $A(\\omega^2)$ no debe tener raíces reales positivas de multiplicidad impar ni volverse negativo en ningún intervalo de frecuencias.</p>

          `
        },
        {
          id: 'tc3-u3-teorema-foster-lc',
          titulo: '3.2 Dipolos Reactivos Puros LC y Teorema de Reactancia de Foster',
          contenido: `
<p class="mb-3">Un <strong>dipolo reactivo puro (o dipolo LC)</strong> es una red de dos terminales construida exclusivamente con inductores y capacitores ideales, sin resistencias que disipen energía activa ($R = 0$). En régimen permanente sinusoidal, la potencia activa consumida es nula ($P = 0$), lo que exige que la impedancia de entrada sea puramente reactiva: $Z(j\\omega) = j X(\\omega)$ y la admitancia sea puramente susceptiva: $Y(j\\omega) = j B(\\omega)$.</p>

<div class="p-4 my-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-950 dark:text-emerald-200">
  <h5 class="font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
    <span>📐</span> Teorema de Reactancia de Ronald M. Foster (1924)
  </h5>
  <p class="text-xs sm:text-sm mb-2">Para cualquier red pasiva sin pérdidas de dos terminales (LC pura), la reactancia $X(\\omega)$ y la susceptancia $B(\\omega)$ son funciones continuas monótonamente crecientes con respecto a la frecuencia angular $\\omega$ en todos los puntos excepto en los polos:</p>
  $$\\mathbf{\\frac{dX(\\omega)}{d\\omega} > 0, \\qquad \\frac{dB(\\omega)}{d\\omega} > 0 \\qquad \\forall \\omega \\in [0, \\infty)}$$
  <p class="text-xs mt-1"><strong>Demostración energética:</strong> La energía electromagnética total almacenada en el interior de la red es la suma de la energía magnética en los inductores y electrostática en los capacitores: $W = W_m + W_e = \\frac{1}{4} \\sum L_k |I_k|^2 + \\frac{1}{4} \\sum C_k |V_k|^2$. Aplicando el teorema de Tellegen en redes sin pérdidas se deduce que $\\frac{dX(\\omega)}{d\\omega} = \\frac{4(W_m + W_e)}{|I|^2}$. Al ser inductores y capacitores elementos pasivos reales no nulos, $W_m + W_e > 0$, lo que garantiza que la pendiente es estrictamente positiva para cualquier $\\omega$.</p>
</div>


<div class="my-4 p-3 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xs">
  <span class="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-2 text-center">
    Teorema de Reactancia de Foster: Curva X(ω) y Alternancia de Polos/Ceros en jω
  </span>
  <div class="flex justify-center overflow-x-auto py-1">
    <div class="my-4 p-3 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800">
  <div class="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-1.5">
    <span>📈</span> Teorema de Reactancia de Foster y Alternancia de Singularidades en el Plano s
  </div>
  <div class="w-full overflow-x-auto flex justify-center">
    <svg viewBox="0 0 680 220" class="w-full max-w-[680px] h-auto select-none font-sans text-xs" style="min-width: 500px;">
      <!-- PANEL IZQUIERDO: Curva de Reactancia X(w) vs w -->
      <g transform="translate(10, 10)">
        <text x="170" y="12" text-anchor="middle" font-weight="bold" fill="#0284c7" class="dark:fill-sky-400" font-size="10.5">Curva de Reactancia X(ω) [Pendiente dX/dω > 0]</text>
        
        <!-- Ejes -->
        <line x1="30" y1="110" x2="310" y2="110" stroke="#94a3b8" stroke-width="1.5"/>
        <text x="305" y="125" fill="#64748b" font-weight="bold" font-size="9">ω [rad/s]</text>
        <line x1="30" y1="195" x2="30" y2="20" stroke="#94a3b8" stroke-width="1.5"/>
        <text x="12" y="24" fill="#64748b" font-weight="bold" font-size="9">X(ω)</text>

        <!-- Badge de pendiente positiva en zona despejada superior izquierda -->
        <rect x="32" y="28" width="76" height="18" rx="3" fill="#0284c7" fill-opacity="0.12" stroke="#0284c7" stroke-width="0.8"/>
        <text x="70" y="40" text-anchor="middle" font-weight="bold" fill="#0284c7" class="dark:fill-sky-300" font-size="7.5">dX/dω > 0</text>

        <!-- Asíntotas verticales en polos w_p1=115, w_p2=215 -->
        <line x1="115" y1="25" x2="115" y2="190" stroke="#ef4444" stroke-width="1" stroke-dasharray="3,3"/>
        <text x="115" y="202" text-anchor="middle" font-weight="bold" fill="#ef4444" font-size="8">ωp1</text>
        
        <line x1="215" y1="25" x2="215" y2="190" stroke="#ef4444" stroke-width="1" stroke-dasharray="3,3"/>
        <text x="215" y="202" text-anchor="middle" font-weight="bold" fill="#ef4444" font-size="8">ωp2</text>

        <!-- Rama 1: de w=0 a w_p1 -->
        <path d="M 30 110 Q 70 107 90 90 Q 105 70 110 25" fill="none" stroke="#0284c7" stroke-width="2.2"/>
        <circle cx="30" cy="110" r="3.5" fill="#059669"/>
        <text x="34" y="102" fill="#059669" font-weight="bold" font-size="8">ωz1 = 0</text>

        <!-- Rama 2: de -inf a +inf pasando por cero wz2=165 -->
        <path d="M 120 190 Q 125 150 140 130 L 165 110 Q 190 90 205 70 Q 210 50 212 25" fill="none" stroke="#0284c7" stroke-width="2.2"/>
        <circle cx="165" cy="110" r="3.5" fill="#059669"/>
        <text x="165" y="124" text-anchor="middle" fill="#059669" font-weight="bold" font-size="8">ωz2</text>

        <!-- Rama 3: de -inf hacia wz3 / inf -->
        <path d="M 218 190 Q 225 150 240 130 L 265 110 Q 285 90 305 65" fill="none" stroke="#0284c7" stroke-width="2.2"/>
        <circle cx="265" cy="110" r="3.5" fill="#059669"/>
        <text x="265" y="124" text-anchor="middle" fill="#059669" font-weight="bold" font-size="8">ωz3</text>
      </g>

      <!-- SEPARADOR VERTICAL -->
      <line x1="345" y1="20" x2="345" y2="200" stroke="#cbd5e1" class="dark:stroke-slate-700" stroke-width="1" stroke-dasharray="3,3"/>

      <!-- PANEL DERECHO: Plano Complejo s (jω vs σ) -->
      <g transform="translate(365, 10)">
        <text x="145" y="12" text-anchor="middle" font-weight="bold" fill="#059669" class="dark:fill-emerald-400" font-size="10.5">Mapa en el Plano Complejo s = σ + jω</text>

        <!-- Ejes cartesianos -->
        <line x1="20" y1="105" x2="280" y2="105" stroke="#94a3b8" stroke-width="1.5"/>
        <text x="270" y="118" fill="#64748b" font-weight="bold" font-size="9">σ</text>
        <line x1="145" y1="20" x2="145" y2="190" stroke="#94a3b8" stroke-width="1.5"/>
        <text x="150" y="24" fill="#64748b" font-weight="bold" font-size="9">jω</text>

        <!-- Semiplano Izquierdo sombreado -->
        <rect x="20" y="25" width="125" height="165" fill="#059669" fill-opacity="0.04"/>
        <text x="80" y="40" text-anchor="middle" fill="#94a3b8" font-size="8">Semiplano Izq (SPI)</text>

        <!-- Cero en el origen s=0 -->
        <circle cx="145" cy="105" r="4.5" fill="#ffffff" stroke="#059669" stroke-width="2"/>
        <text x="133" y="103" text-anchor="end" font-weight="bold" fill="#059669" font-size="8">z1 (0)</text>

        <!-- Polos en +- jwp1 -->
        <!-- +jwp1 en y=70 -->
        <line x1="141" y1="66" x2="149" y2="74" stroke="#ef4444" stroke-width="2.2"/>
        <line x1="141" y1="74" x2="149" y2="66" stroke="#ef4444" stroke-width="2.2"/>
        <text x="156" y="73" font-weight="bold" fill="#ef4444" font-size="8">+jωp1</text>
        <!-- -jwp1 en y=140 -->
        <line x1="141" y1="136" x2="149" y2="144" stroke="#ef4444" stroke-width="2.2"/>
        <line x1="141" y1="144" x2="149" y2="136" stroke="#ef4444" stroke-width="2.2"/>
        <text x="156" y="143" font-weight="bold" fill="#ef4444" font-size="8">−jωp1</text>

        <!-- Ceros en +- jwz2 -->
        <!-- +jwz2 en y=48 -->
        <circle cx="145" cy="48" r="4.5" fill="#ffffff" stroke="#059669" stroke-width="2"/>
        <text x="156" y="51" font-weight="bold" fill="#059669" font-size="8">+jωz2</text>
        <!-- -jwz2 en y=162 -->
        <circle cx="145" cy="162" r="4.5" fill="#ffffff" stroke="#059669" stroke-width="2"/>
        <text x="156" y="165" font-weight="bold" fill="#059669" font-size="8">−jωz2</text>

        <!-- Polos en +- jwp2 en y=30 e y=180 -->
        <line x1="141" y1="26" x2="149" y2="34" stroke="#ef4444" stroke-width="2.2"/>
        <line x1="141" y1="34" x2="149" y2="26" stroke="#ef4444" stroke-width="2.2"/>
        <text x="156" y="32" font-weight="bold" fill="#ef4444" font-size="8">+jωp2</text>
        <line x1="141" y1="176" x2="149" y2="184" stroke="#ef4444" stroke-width="2.2"/>
        <line x1="141" y1="184" x2="149" y2="176" stroke="#ef4444" stroke-width="2.2"/>
        <text x="156" y="182" font-weight="bold" fill="#ef4444" font-size="8">−jωp2</text>

        <!-- Leyenda alternancia -->
        <rect x="15" y="155" width="115" height="32" rx="3" fill="#f8fafc" class="dark:fill-slate-800" stroke="#cbd5e1" class="dark:stroke-slate-700"/>
        <text x="72" y="168" text-anchor="middle" font-weight="bold" fill="#0f172a" class="dark:fill-white" font-size="7.5">Entrelazado Estricto:</text>
        <text x="72" y="180" text-anchor="middle" fill="#059669" font-size="7.5">0 ≤ ωz1 &lt; ωp1 &lt; ωz2 ...</text>
      </g>
    </svg>
  </div>
</div>
  </div>
</div>


<h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Propiedades Algebraicas Fundamentales de las Inmitancias LC</h5>
<p class="mb-2">De la condición $\\text{Re}\\{Z(j\\omega)\\} = 0$ y del teorema de Foster se desprenden 5 propiedades que caracterizan unívocamente a cualquier dipolo LC:</p>
<ul class="list-disc pl-5 space-y-1.5 text-xs sm:text-sm mb-3">
  <li><strong>Función Impar:</strong> $Z(s)$ es una función impar de $s$: $Z(-s) = -Z(s)$. El numerador es un polinomio par y el denominador impar, o viceversa. Nunca contiene términos pares e impares mezclados en un mismo polinomio.</li>
  <li><strong>Polos y Ceros sobre el Eje Imaginario:</strong> Todas las singularidades residen exclusivamente sobre el eje $j\\omega$, son conjugadas y simples: polos en $s = \\pm j\\omega_{pi}$ y ceros en $s = \\pm j\\omega_{zi}$.</li>
  <li><strong>Entrelazamiento o Alternancia Estricta:</strong> Los polos y ceros se suceden obligatoriamente de forma alternada a lo largo del eje imaginario:
    $$0 \\le \\omega_{z1} < \\omega_{p1} < \\omega_{z2} < \\omega_{p2} < \\dots \\quad \\text{ó} \\quad 0 \\le \\omega_{p1} < \\omega_{z1} < \\omega_{p2} < \\omega_{z2} < \\dots$$
  </li>
  <li><strong>Singularidades en los Extremos:</strong> En el origen ($s = 0$) y en el infinito ($s \\to \\infty$) debe haber <strong>obligatoriamente un polo o un cero</strong>. Nunca una constante finita distinta de cero ni de infinito.</li>
  <li><strong>Residuos Positivos:</strong> Los residuos de $Z(s)$ e $Y(s)$ en todos los polos del eje $j\\omega$ son números reales y estrictamente positivos.</li>
</ul>

<h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Las Cuatro Clases Canónicas de Dipolos LC</h5>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-2 text-xs">
  <div class="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
    <strong class="text-blue-600 dark:text-blue-400">Clase I: Polo en 0 y Polo en $\\infty$</strong><br>
    $Z(s) = K \\frac{(s^2 + \\omega_{z1}^2)(s^2 + \\omega_{z2}^2)}{s (s^2 + \\omega_{p1}^2)}$<br>
    Comportamiento capacitivo en continua ($s \\to 0$) e inductivo en muy alta frecuencia ($s \\to \\infty$).
  </div>
  <div class="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
    <strong class="text-indigo-600 dark:text-indigo-400">Clase II: Polo en 0 y Cero en $\\infty$</strong><br>
    $Z(s) = K \\frac{s^2 + \\omega_{z1}^2}{s (s^2 + \\omega_{p1}^2)}$<br>
    Comportamiento capacitivo tanto en continua ($s \\to 0$) como en alta frecuencia ($s \\to \\infty$).
  </div>
  <div class="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
    <strong class="text-amber-600 dark:text-amber-400">Clase III: Cero en 0 y Polo en $\\infty$</strong><br>
    $Z(s) = K \\frac{s (s^2 + \\omega_{z1}^2)}{s^2 + \\omega_{p1}^2}$<br>
    Comportamiento inductivo tanto en continua ($s \\to 0$) como en alta frecuencia ($s \\to \\infty$).
  </div>
  <div class="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
    <strong class="text-emerald-600 dark:text-emerald-400">Clase IV: Cero en 0 y Cero en $\\infty$</strong><br>
    $Z(s) = K \\frac{s (s^2 + \\omega_{z1}^2)}{(s^2 + \\omega_{p1}^2)(s^2 + \\omega_{p2}^2)}$<br>
    Comportamiento inductivo en continua ($s \\to 0$) y capacitivo en alta frecuencia ($s \\to \\infty$).
  </div>
</div>

          `
        },
        {
          id: 'tc3-u3-foster-1-2-lc',
          titulo: '3.3 Síntesis LC por Formas Canónicas de Foster (Foster I y Foster II)',
          contenido: `
<p class="mb-3">Una síntesis es <strong>canónica</strong> cuando la red resultante emplea el <strong>número mínimo absoluto de componentes reactivos</strong>, el cual es idéntico al grado máximo del polinomio de inmitancia ($n = \\max(\\deg N, \\deg D)$). El método propuesto por Ronald Foster descompone la función analítica mediante una <strong>expansión en fracciones simples</strong> de sus polos sobre el eje imaginario.</p>

<h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">1. Forma Canónica Foster I: Expansión de la Impedancia $Z(s)$</h5>
<p class="mb-2">Se realiza la descomposición en fracciones simples directamente sobre la impedancia $Z(s)$. Dado que los polos complejos en $s = \\pm j\\omega_i$ vienen en pares conjugados, sus términos se agrupan en cocientes de segundo orden:</p>
$$Z(s) = s L_\\infty + \\frac{1}{s C_0} + \\sum_{i=1}^k \\frac{2 k_i s}{s^2 + \\omega_i^2}$$

<div class="p-3 my-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm">
  <div class="font-bold text-blue-600 dark:text-blue-400 mb-1 font-mono">Fórmulas de Cálculo de Residuos y Componentes (Foster I):</div>
  <ul class="list-disc pl-5 space-y-1.5">
    <li><strong>Inductor serie en el infinito ($L_\\infty$):</strong> Existe si $Z(s)$ tiene polo en $s \\to \\infty$ ($\\deg N = \\deg D + 1$):
      $$L_\\infty = \\lim_{s \\to \\infty} \\frac{Z(s)}{s}$$
      Si no hay polo en $\\infty$, $L_\\infty = 0$ (se reemplaza por un cortocircuito).
    </li>
    <li><strong>Capacitor serie en el origen ($C_0$):</strong> Existe si $Z(s)$ tiene polo en $s = 0$:
      $$\\frac{1}{C_0} = k_0 = \\lim_{s \\to 0} [s \\cdot Z(s)] \\implies C_0 = \\frac{1}{k_0}$$
      Si no hay polo en $s=0$, $C_0 \\to \\infty$ (se reemplaza por un cortocircuito).
    </li>
    <li><strong>Celdas antirresonantes LC paralelo en serie ($L_i, C_i$):</strong> Cada polo a frecuencia angular finita $\\omega_i$ aporta un término de impedancia equivalente a un tanque LC en paralelo:
      $$Z_i(s) = \\frac{1}{s C_i + \\frac{1}{s L_i}} = \\frac{\\frac{s}{C_i}}{s^2 + \\frac{1}{L_i C_i}} = \\frac{2 k_i s}{s^2 + \\omega_i^2}$$
      El residuo agrupado $2 k_i$ se calcula como:
      $$2 k_i = \\lim_{s^2 \\to -\\omega_i^2} \\left[ \\frac{s^2 + \\omega_i^2}{s} \\cdot Z(s) \\right]$$
      De donde se despejan inmediatamente los componentes de cada tanque:
      $$\\mathbf{C_i = \\frac{1}{2 k_i}}, \\qquad \\mathbf{L_i = \\frac{2 k_i}{\\omega_i^2}} \\qquad \\left( \\text{verificación: } \\frac{1}{L_i C_i} = \\omega_i^2 \\right)$$
    </li>
  </ul>
</div>


<div class="my-4 p-3 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xs">
  <span class="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-2 text-center">
    Forma Canónica Foster I (LC): Tanques Antirresonantes Paralelos en Serie
  </span>
  <div class="flex justify-center overflow-x-auto py-1">
    <div class="my-4 p-3 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800">
  <div class="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-1.5">
    <span>📐</span> Forma Canónica Foster I (Expansión de Impedancia Z en Fracciones Simples)
  </div>
  <div class="w-full overflow-x-auto flex justify-center">
    <svg viewBox="0 0 680 180" class="w-full max-w-[680px] h-auto select-none font-sans text-xs" style="min-width: 500px;">
      <!-- Bornes de entrada A y B -->
      <circle cx="30" cy="50" r="4" fill="#0284c7"/>
      <text x="18" y="54" font-weight="bold" fill="#0284c7" font-size="11">A</text>
      <circle cx="30" cy="140" r="4" fill="#0284c7"/>
      <text x="18" y="144" font-weight="bold" fill="#0284c7" font-size="11">B</text>

      <!-- Flecha Z(s) -->
      <path d="M 40 75 L 55 95 L 40 115" fill="none" stroke="#0284c7" stroke-width="1.8"/>
      <text x="65" y="99" font-weight="bold" fill="#0284c7" font-size="11">Z(s)</text>

      <!-- Línea inferior de retorno directo (Borne B) -->
      <line x1="30" y1="140" x2="620" y2="140" stroke="#64748b" stroke-width="2"/>
      <circle cx="620" cy="140" r="3.5" fill="#64748b"/>

      <!-- RAMA SERIE SUPERIOR: Elementos en Cascada Serie -->
      <!-- 1. Capacitor serie C0 (polo en s=0) -->
      <line x1="34" y1="50" x2="75" y2="50" stroke="#64748b" stroke-width="1.8"/>
      <line x1="75" y1="38" x2="75" y2="62" stroke="#0284c7" stroke-width="2.5"/>
      <line x1="83" y1="38" x2="83" y2="62" stroke="#0284c7" stroke-width="2.5"/>
      <text x="79" y="30" text-anchor="middle" font-weight="bold" fill="#0284c7" font-size="9.5">C0 = 1/k0</text>
      <text x="79" y="74" text-anchor="middle" fill="#64748b" font-size="7.5">(Polo s=0)</text>

      <!-- 2. Inductor serie L_inf (polo en s=inf) -->
      <line x1="83" y1="50" x2="120" y2="50" stroke="#64748b" stroke-width="1.8"/>
      <path d="M 120 50 Q 128 35 136 50 Q 144 35 152 50 Q 160 35 168 50 Q 176 35 184 50" fill="none" stroke="#059669" stroke-width="2"/>
      <text x="152" y="30" text-anchor="middle" font-weight="bold" fill="#059669" font-size="9.5">L∞ = k∞</text>
      <text x="152" y="74" text-anchor="middle" fill="#64748b" font-size="7.5">(Polo s=∞)</text>

      <line x1="184" y1="50" x2="215" y2="50" stroke="#64748b" stroke-width="1.8"/>
      <circle cx="215" cy="50" r="3.5" fill="#64748b"/>

      <!-- 3. Tanque Paralelo 1 (L1 || C1 en serie) -->
      <!-- Subrama superior C1 -->
      <line x1="215" y1="50" x2="230" y2="25" stroke="#64748b" stroke-width="1.5"/>
      <line x1="230" y1="25" x2="255" y2="25" stroke="#64748b" stroke-width="1.5"/>
      <line x1="255" y1="16" x2="255" y2="34" stroke="#0284c7" stroke-width="2"/>
      <line x1="261" y1="16" x2="261" y2="34" stroke="#0284c7" stroke-width="2"/>
      <text x="258" y="11" text-anchor="middle" font-weight="bold" fill="#0284c7" font-size="8.5">C1 = 1/(2k1)</text>
      <line x1="261" y1="25" x2="290" y2="25" stroke="#64748b" stroke-width="1.5"/>
      <line x1="290" y1="25" x2="305" y2="50" stroke="#64748b" stroke-width="1.5"/>

      <!-- Subrama inferior L1 -->
      <line x1="215" y1="50" x2="230" y2="75" stroke="#64748b" stroke-width="1.5"/>
      <line x1="230" y1="75" x2="245" y2="75" stroke="#64748b" stroke-width="1.5"/>
      <path d="M 245 75 Q 251 63 257 75 Q 263 63 269 75 Q 275 63 281 75" fill="none" stroke="#059669" stroke-width="2"/>
      <text x="263" y="93" text-anchor="middle" font-weight="bold" fill="#059669" font-size="8.5">L1 = 2k1/ω1²</text>
      <line x1="281" y1="75" x2="295" y2="75" stroke="#64748b" stroke-width="1.5"/>
      <line x1="295" y1="75" x2="305" y2="50" stroke="#64748b" stroke-width="1.5"/>
      <circle cx="305" cy="50" r="3.5" fill="#64748b"/>

      <line x1="305" y1="50" x2="340" y2="50" stroke="#64748b" stroke-width="1.8"/>

      <!-- PUNTOS SUSPENSIVOS -->
      <circle cx="355" cy="50" r="2.5" fill="#94a3b8"/>
      <circle cx="365" cy="50" r="2.5" fill="#94a3b8"/>
      <circle cx="375" cy="50" r="2.5" fill="#94a3b8"/>

      <line x1="390" y1="50" x2="420" y2="50" stroke="#64748b" stroke-width="1.8"/>
      <circle cx="420" cy="50" r="3.5" fill="#64748b"/>

      <!-- 4. Tanque Paralelo m (Lm || Cm) -->
      <!-- Subrama superior Cm -->
      <line x1="420" y1="50" x2="435" y2="25" stroke="#64748b" stroke-width="1.5"/>
      <line x1="435" y1="25" x2="460" y2="25" stroke="#64748b" stroke-width="1.5"/>
      <line x1="460" y1="16" x2="460" y2="34" stroke="#0284c7" stroke-width="2"/>
      <line x1="466" y1="16" x2="466" y2="34" stroke="#0284c7" stroke-width="2"/>
      <text x="463" y="11" text-anchor="middle" font-weight="bold" fill="#0284c7" font-size="8.5">Cm = 1/(2km)</text>
      <line x1="466" y1="25" x2="495" y2="25" stroke="#64748b" stroke-width="1.5"/>
      <line x1="495" y1="25" x2="510" y2="50" stroke="#64748b" stroke-width="1.5"/>

      <!-- Subrama inferior Lm -->
      <line x1="420" y1="50" x2="435" y2="75" stroke="#64748b" stroke-width="1.5"/>
      <line x1="435" y1="75" x2="450" y2="75" stroke="#64748b" stroke-width="1.5"/>
      <path d="M 450 75 Q 456 63 462 75 Q 468 63 474 75 Q 480 63 486 75" fill="none" stroke="#059669" stroke-width="2"/>
      <text x="468" y="93" text-anchor="middle" font-weight="bold" fill="#059669" font-size="8.5">Lm = 2km/ωm²</text>
      <line x1="486" y1="75" x2="500" y2="75" stroke="#64748b" stroke-width="1.5"/>
      <line x1="500" y1="75" x2="510" y2="50" stroke="#64748b" stroke-width="1.5"/>
      <circle cx="510" cy="50" r="3.5" fill="#64748b"/>

      <!-- Cierre a la derecha -->
      <line x1="510" y1="50" x2="620" y2="50" stroke="#64748b" stroke-width="1.8"/>
      <circle cx="620" cy="50" r="3.5" fill="#64748b"/>
      <line x1="620" y1="50" x2="620" y2="140" stroke="#64748b" stroke-width="1.8"/>

      <!-- Recuadro síntesis lateral -->
      <rect x="180" y="112" width="410" height="22" rx="3" fill="#f8fafc" class="dark:fill-slate-800" stroke="#cbd5e1" class="dark:stroke-slate-700"/>
      <text x="385" y="127" text-anchor="middle" font-weight="bold" fill="#0284c7" class="dark:fill-sky-400" font-size="8.5">Z(s) = (k0 / s) + k∞·s + Σ [ (2ki·s) / (s² + ωi²) ]  —  Tanques Antirresonantes en Serie</text>
    </svg>
  </div>
</div>
  </div>
</div>


<h5 class="text-sm font-bold text-slate-900 dark:text-white mt-6 mb-2">2. Forma Canónica Foster II: Expansión de la Admitancia $Y(s)$</h5>
<p class="mb-2">La segunda forma canónica de Foster es el dual exacto de Foster I. Se obtiene expandiendo la función de <strong>admitancia de entrada</strong> $Y(s) = \\frac{1}{Z(s)}$ en fracciones simples:</p>
$$Y(s) = s C_\\infty + \\frac{1}{s L_0} + \\sum_{i=1}^m \\frac{2 k'_i s}{s^2 + \\omega_{0i}^2}$$

<div class="p-3 my-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm">
  <div class="font-bold text-indigo-600 dark:text-indigo-400 mb-1 font-mono">Fórmulas de Cálculo de Residuos y Componentes (Foster II):</div>
  <ul class="list-disc pl-5 space-y-1.5">
    <li><strong>Capacitor paralelo en el infinito ($C_\\infty$):</strong> Existe si $Y(s)$ tiene polo en $s \\to \\infty$ (es decir, $Z(s)$ tiene un cero en $\\infty$):
      $$C_\\infty = \\lim_{s \\to \\infty} \\frac{Y(s)}{s}$$
      Si no hay polo en $\\infty$, $C_\\infty = 0$ (circuito abierto).
    </li>
    <li><strong>Inductor paralelo en el origen ($L_0$):</strong> Existe si $Y(s)$ tiene polo en $s = 0$ (es decir, $Z(s)$ tiene un cero en $s=0$):
      $$\\frac{1}{L_0} = k'_0 = \\lim_{s \\to 0} [s \\cdot Y(s)] \\implies L_0 = \\frac{1}{k'_0}$$
      Si no hay polo en $s=0$, $L_0 \\to \\infty$ (circuito abierto).
    </li>
    <li><strong>Ramas resonantes LC serie en paralelo ($L_i, C_i$):</strong> Cada par de polos de admitancia a frecuencia $\\omega_{0i}$ (que son los ceros de impedancia) aporta una admitancia de rama:
      $$Y_i(s) = \\frac{1}{s L_i + \\frac{1}{s C_i}} = \\frac{\\frac{s}{L_i}}{s^2 + \\frac{1}{L_i C_i}} = \\frac{2 k'_i s}{s^2 + \\omega_{0i}^2}$$
      El residuo de admitancia $2 k'_i$ se calcula como:
      $$2 k'_i = \\lim_{s^2 \\to -\\omega_{0i}^2} \\left[ \\frac{s^2 + \\omega_{0i}^2}{s} \\cdot Y(s) \\right]$$
      De donde se deducen los elementos de cada rama serie:
      $$\\mathbf{L_i = \\frac{1}{2 k'_i}}, \\qquad \\mathbf{C_i = \\frac{2 k'_i}{\\omega_{0i}^2}} \\qquad \\left( \\text{verificación: } \\frac{1}{L_i C_i} = \\omega_{0i}^2 \\right)$$
    </li>
  </ul>
</div>


<div class="my-4 p-3 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xs">
  <span class="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-2 text-center">
    Forma Canónica Foster II (LC): Ramas Resonantes Serie Conectadas en Paralelo
  </span>
  <div class="flex justify-center overflow-x-auto py-1">
    <div class="my-4 p-3 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800">
  <div class="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-1.5">
    <span>📐</span> Forma Canónica Foster II (Expansión de Admitancia Y en Fracciones Simples)
  </div>
  <div class="w-full overflow-x-auto flex justify-center">
    <svg viewBox="0 0 680 190" class="w-full max-w-[680px] h-auto select-none font-sans text-xs" style="min-width: 500px;">
      <!-- Riel superior e inferior -->
      <line x1="50" y1="35" x2="570" y2="35" stroke="#64748b" stroke-width="2"/>
      <line x1="50" y1="155" x2="570" y2="155" stroke="#64748b" stroke-width="2"/>

      <!-- Bornes de entrada A y B -->
      <circle cx="50" cy="35" r="4" fill="#6366f1"/>
      <text x="32" y="39" font-weight="bold" fill="#6366f1" font-size="11">A</text>
      <circle cx="50" cy="155" r="4" fill="#6366f1"/>
      <text x="32" y="159" font-weight="bold" fill="#6366f1" font-size="11">B</text>

      <path d="M 60 75 L 75 95 L 60 115" fill="none" stroke="#6366f1" stroke-width="1.8"/>
      <text x="85" y="99" font-weight="bold" fill="#6366f1" font-size="11">Y(s)</text>

      <!-- RAMA 1: Inductor L0 en paralelo (polo en s=0) -->
      <circle cx="150" cy="35" r="3.5" fill="#64748b"/>
      <line x1="150" y1="35" x2="150" y2="60" stroke="#64748b" stroke-width="1.5"/>
      <path d="M 150 60 Q 138 68 150 76 Q 138 84 150 92 Q 138 100 150 108 Q 138 116 150 124" fill="none" stroke="#059669" stroke-width="2"/>
      <line x1="150" y1="124" x2="150" y2="155" stroke="#64748b" stroke-width="1.5"/>
      <circle cx="150" cy="155" r="3.5" fill="#64748b"/>
      <text x="175" y="90" font-weight="bold" fill="#059669" font-size="9">L0 = 1/k0'</text>
      <text x="175" y="103" fill="#64748b" font-size="7.5">(Polo s=0)</text>

      <!-- RAMA 2: Capacitor C_inf en paralelo (polo en s=inf) -->
      <circle cx="270" cy="35" r="3.5" fill="#64748b"/>
      <line x1="270" y1="35" x2="270" y2="88" stroke="#64748b" stroke-width="1.5"/>
      <line x1="258" y1="88" x2="282" y2="88" stroke="#0284c7" stroke-width="2.5"/>
      <line x1="258" y1="94" x2="282" y2="94" stroke="#0284c7" stroke-width="2.5"/>
      <line x1="270" y1="94" x2="270" y2="155" stroke="#64748b" stroke-width="1.5"/>
      <circle cx="270" cy="155" r="3.5" fill="#64748b"/>
      <text x="295" y="89" font-weight="bold" fill="#0284c7" font-size="9">C∞ = k∞'</text>
      <text x="295" y="102" fill="#64748b" font-size="7.5">(Polo s=∞)</text>

      <!-- RAMA 3: Rama Resonante Serie 1 (L1 + C1 en serie) -->
      <circle cx="390" cy="35" r="3.5" fill="#64748b"/>
      <line x1="390" y1="35" x2="390" y2="52" stroke="#64748b" stroke-width="1.5"/>
      <!-- Inductor L1 -->
      <path d="M 390 52 Q 380 58 390 64 Q 380 70 390 76 Q 380 82 390 88" fill="none" stroke="#059669" stroke-width="2"/>
      <text x="412" y="72" font-weight="bold" fill="#059669" font-size="8.5">L1 = 1/(2k1')</text>
      <line x1="390" y1="88" x2="390" y2="108" stroke="#64748b" stroke-width="1.5"/>
      <!-- Capacitor C1 -->
      <line x1="380" y1="108" x2="400" y2="108" stroke="#0284c7" stroke-width="2"/>
      <line x1="380" y1="113" x2="400" y2="113" stroke="#0284c7" stroke-width="2"/>
      <text x="412" y="113" font-weight="bold" fill="#0284c7" font-size="8.5">C1 = 2k1'/ω1²</text>
      <line x1="390" y1="113" x2="390" y2="155" stroke="#64748b" stroke-width="1.5"/>
      <circle cx="390" cy="155" r="3.5" fill="#64748b"/>

      <!-- PUNTOS SUSPENSIVOS -->
      <circle cx="455" cy="95" r="2.5" fill="#94a3b8"/>
      <circle cx="465" cy="95" r="2.5" fill="#94a3b8"/>
      <circle cx="475" cy="95" r="2.5" fill="#94a3b8"/>

      <!-- RAMA 4: Rama Resonante Serie m (Lm + Cm en serie) -->
      <circle cx="530" cy="35" r="3.5" fill="#64748b"/>
      <line x1="530" y1="35" x2="530" y2="52" stroke="#64748b" stroke-width="1.5"/>
      <!-- Inductor Lm -->
      <path d="M 530 52 Q 520 58 530 64 Q 520 70 530 76 Q 520 82 530 88" fill="none" stroke="#059669" stroke-width="2"/>
      <text x="550" y="72" font-weight="bold" fill="#059669" font-size="8.5">Lm = 1/(2km')</text>
      <line x1="530" y1="88" x2="530" y2="108" stroke="#64748b" stroke-width="1.5"/>
      <!-- Capacitor Cm -->
      <line x1="520" y1="108" x2="540" y2="108" stroke="#0284c7" stroke-width="2"/>
      <line x1="520" y1="113" x2="540" y2="113" stroke="#0284c7" stroke-width="2"/>
      <text x="550" y="113" font-weight="bold" fill="#0284c7" font-size="8.5">Cm = 2km'/ωm²</text>
      <line x1="530" y1="113" x2="530" y2="155" stroke="#64748b" stroke-width="1.5"/>
      <circle cx="530" cy="155" r="3.5" fill="#64748b"/>

      <line x1="530" y1="35" x2="570" y2="35" stroke="#64748b" stroke-width="2"/>
      <line x1="530" y1="155" x2="570" y2="155" stroke="#64748b" stroke-width="2"/>

      <rect x="80" y="165" width="480" height="20" rx="3" fill="#f8fafc" class="dark:fill-slate-800" stroke="#cbd5e1" class="dark:stroke-slate-700"/>
      <text x="320" y="179" text-anchor="middle" font-weight="bold" fill="#6366f1" class="dark:fill-indigo-400" font-size="8.5">Y(s) = (k0'/s) + k∞'·s + Σ [ (2ki'·s) / (s² + ωi²) ]  —  Ramas Resonantes Serie en Paralelo</text>
    </svg>
  </div>
</div>
  </div>
</div>


          `
        },
        {
          id: 'tc3-u3-cauer-1-2-lc',
          titulo: '3.4 Síntesis LC por Formas Canónicas de Cauer (Cauer I y Cauer II en Escalera)',
          contenido: `
<p class="mb-3">El matemático alemán <strong>Wilhelm Cauer</strong> concibió en la década de 1920 un método alternativo de síntesis canónica basado en el desarrollo en <strong>fracciones continuas euclídeas</strong>. Mientras que Foster remueve todos los polos en paralelo o serie en un único paso de descomposición, Cauer extrae alternadamente polos en el infinito o en el origen mediante divisiones sucesivas de polinomios, produciendo una estructura circuital en <strong>escalera no disipativa (*ladder network*)</strong> de inductores y capacitores alternados.</p>

<h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">1. Forma Canónica Cauer I: Expansión en el Infinito ($s \\to \\infty$)</h5>
<p class="mb-2">En Cauer I se remueven sucesivamente polos en el infinito. Para ello, los polinomios del numerador y denominador se ordenan en <strong>potencias estrictamente decrecientes de $s$</strong>:</p>
$$Z(s) = \\frac{a_n s^n + a_{n-2} s^{n-2} + \\dots}{b_{n-1} s^{n-1} + b_{n-3} s^{n-3} + \\dots}$$
<p class="mb-2">Al realizar divisiones continuas sucesivas, cada cociente obtenido es un término de primer orden $q_k s$:</p>
$$Z(s) = s L_1 + \\cfrac{1}{s C_2 + \\cfrac{1}{s L_3 + \\cfrac{1}{s C_4 + \\dots}}}$$

<div class="p-3 my-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm">
  <div class="font-bold text-amber-600 dark:text-amber-400 mb-1 font-mono">Algoritmo de División Euclídea Sucesiva en el Infinito:</div>
  <ol class="list-decimal pl-5 space-y-1">
    <li>Si $\\deg(N) > \\deg(D)$, se divide $N(s)$ por $D(s)$: el cociente es un <strong>inductor serie</strong> $L_1 = a_n / b_{n-1}$. El resto $R_1(s)$ pasa a ser el nuevo divisor.</li>
    <li>Se invierte el residuo (pasando a admitancia) y se divide $D(s)$ por $R_1(s)$: el nuevo cociente es un <strong>capacitor paralelo</strong> $C_2$.</li>
    <li>El procedimiento se repite alternando impedancia y admitancia hasta que el resto final sea exactamente cero.</li>
    <li><em>Caso especial:</em> Si $\\deg(N) < \\deg(D)$, el primer elemento serie no existe ($L_1 = 0$). Se invierte inicialmente la función $Y(s) = 1/Z(s)$, comenzando la escalera directamente con un <strong>capacitor en paralelo $C_1$</strong>.</li>
  </ol>
</div>


<div class="my-4 p-3 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xs">
  <span class="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-2 text-center">
    Forma Canónica Cauer I (LC): Red en Escalera con Extracciones en el Infinito (s → ∞)
  </span>
  <div class="flex justify-center overflow-x-auto py-1">
    <div class="my-4 p-3 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800">
  <div class="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-1.5">
    <span>🪜</span> Forma Canónica Cauer I (Red en Escalera LC - Remociones en el Infinito s → ∞)
  </div>
  <div class="w-full overflow-x-auto flex justify-center">
    <svg viewBox="0 0 680 180" class="w-full max-w-[680px] h-auto select-none font-sans text-xs" style="min-width: 500px;">
      <!-- Bornes de entrada -->
      <circle cx="30" cy="40" r="4" fill="#d97706"/>
      <text x="18" y="44" font-weight="bold" fill="#d97706" font-size="11">A</text>
      <circle cx="30" cy="140" r="4" fill="#d97706"/>
      <text x="18" y="144" font-weight="bold" fill="#d97706" font-size="11">B</text>

      <path d="M 40 75 L 55 90 L 40 105" fill="none" stroke="#d97706" stroke-width="1.8"/>
      <text x="65" y="94" font-weight="bold" fill="#d97706" font-size="10.5">Z(s)</text>

      <!-- Riel inferior de referencia (masa) -->
      <line x1="30" y1="140" x2="620" y2="140" stroke="#64748b" stroke-width="2"/>

      <!-- Elemento 1: Inductor serie L1 -->
      <line x1="34" y1="40" x2="85" y2="40" stroke="#64748b" stroke-width="1.8"/>
      <path d="M 85 40 Q 94 25 103 40 Q 112 25 121 40 Q 130 25 139 40 Q 148 25 157 40" fill="none" stroke="#059669" stroke-width="2.2"/>
      <text x="121" y="22" text-anchor="middle" font-weight="bold" fill="#059669" font-size="9.5">L1 = z1</text>
      <text x="121" y="58" text-anchor="middle" fill="#64748b" font-size="7.5">(Serie: s·L1)</text>

      <!-- Nodo 1 -->
      <line x1="157" y1="40" x2="210" y2="40" stroke="#64748b" stroke-width="1.8"/>
      <circle cx="210" cy="40" r="3.5" fill="#64748b"/>

      <!-- Elemento 2: Capacitor paralelo C2 -->
      <line x1="210" y1="40" x2="210" y2="78" stroke="#64748b" stroke-width="1.5"/>
      <line x1="198" y1="78" x2="222" y2="78" stroke="#0284c7" stroke-width="2.2"/>
      <line x1="198" y1="84" x2="222" y2="84" stroke="#0284c7" stroke-width="2.2"/>
      <line x1="210" y1="84" x2="210" y2="140" stroke="#64748b" stroke-width="1.5"/>
      <circle cx="210" cy="140" r="3.5" fill="#64748b"/>
      <text x="238" y="80" font-weight="bold" fill="#0284c7" font-size="9.5">C2 = y2</text>
      <text x="238" y="92" fill="#64748b" font-size="7.5">(Derivación: s·C2)</text>

      <!-- Elemento 3: Inductor serie L3 -->
      <line x1="210" y1="40" x2="310" y2="40" stroke="#64748b" stroke-width="1.8"/>
      <path d="M 310 40 Q 319 25 328 40 Q 337 25 346 40 Q 355 25 364 40 Q 373 25 382 40" fill="none" stroke="#059669" stroke-width="2.2"/>
      <text x="346" y="22" text-anchor="middle" font-weight="bold" fill="#059669" font-size="9.5">L3 = z3</text>
      <text x="346" y="58" text-anchor="middle" fill="#64748b" font-size="7.5">(Serie: s·L3)</text>

      <!-- Nodo 2 -->
      <line x1="382" y1="40" x2="435" y2="40" stroke="#64748b" stroke-width="1.8"/>
      <circle cx="435" cy="40" r="3.5" fill="#64748b"/>

      <!-- Elemento 4: Capacitor paralelo C4 -->
      <line x1="435" y1="40" x2="435" y2="78" stroke="#64748b" stroke-width="1.5"/>
      <line x1="423" y1="78" x2="447" y2="78" stroke="#0284c7" stroke-width="2.2"/>
      <line x1="423" y1="84" x2="447" y2="84" stroke="#0284c7" stroke-width="2.2"/>
      <line x1="435" y1="84" x2="435" y2="140" stroke="#64748b" stroke-width="1.5"/>
      <circle cx="435" cy="140" r="3.5" fill="#64748b"/>
      <text x="462" y="80" font-weight="bold" fill="#0284c7" font-size="9.5">C4 = y4</text>
      <text x="462" y="92" fill="#64748b" font-size="7.5">(Derivación: s·C4)</text>

      <line x1="435" y1="40" x2="510" y2="40" stroke="#64748b" stroke-width="1.8"/>
      <!-- Puntos suspensivos -->
      <circle cx="530" cy="40" r="2.5" fill="#94a3b8"/>
      <circle cx="545" cy="40" r="2.5" fill="#94a3b8"/>
      <circle cx="560" cy="40" r="2.5" fill="#94a3b8"/>

      <line x1="580" y1="40" x2="620" y2="40" stroke="#64748b" stroke-width="1.8"/>
      <line x1="620" y1="40" x2="620" y2="140" stroke="#64748b" stroke-width="1.8"/>

      <rect x="80" y="152" width="510" height="22" rx="3" fill="#f8fafc" class="dark:fill-slate-800" stroke="#cbd5e1" class="dark:stroke-slate-700"/>
      <text x="335" y="166" text-anchor="middle" font-weight="bold" fill="#d97706" font-size="8.5">Divisiones continuas por potencias DECRECIENTES: Z = s·L1 + 1 / ( s·C2 + 1 / ( s·L3 + ... ) )</text>
    </svg>
  </div>
</div>
  </div>
</div>


<h5 class="text-sm font-bold text-slate-900 dark:text-white mt-6 mb-2">2. Forma Canónica Cauer II: Expansión en el Origen ($s \\to 0$)</h5>
<p class="mb-2">En Cauer II se remueven sucesivamente polos en el origen $s = 0$. Para ello, los polinomios del numerador y denominador se ordenan en <strong>potencias estrictamente crecientes de $s$</strong> (de menor a mayor grado):</p>
$$Z(s) = \\frac{a_0 s^0 + a_2 s^2 + a_4 s^4 + \\dots}{b_1 s^1 + b_3 s^3 + b_5 s^5 + \\dots}$$
<p class="mb-2">Al realizar las divisiones sucesivas con polinomios ordenados en potencias crecientes, cada cociente obtenido es un término inversamente proporcional a la frecuencia $\\frac{1}{q_k s}$:</p>
$$Z(s) = \\frac{1}{s C_1} + \\cfrac{1}{\\frac{1}{s L_2} + \\cfrac{1}{\\frac{1}{s C_3} + \\cfrac{1}{\\frac{1}{s L_4} + \\dots}}}$$

<div class="p-3 my-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm">
  <div class="font-bold text-purple-600 dark:text-purple-400 mb-1 font-mono">Topología Resultante en Cauer II:</div>
  <ul class="list-disc pl-5 space-y-1">
    <li>Los cocientes impares en impedancia corresponden a reactancias capacitivas en serie: $\\frac{1}{s C_k} \\implies C_k = \\frac{1}{\\text{cociente}} = \\frac{b_1}{a_0}$.</li>
    <li>Los cocientes pares en admitancia corresponden a susceptancias inductivas en derivación (shunt): $\\frac{1}{s L_k} \\implies L_k = \\frac{1}{\\text{cociente}}$.</li>
    <li>Topología física: <strong>Capacitores en las ramas serie e inductores en las ramas en paralelo</strong> (el inverso topológico de Cauer I).</li>
  </ul>
</div>


<div class="my-4 p-3 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xs">
  <span class="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-2 text-center">
    Forma Canónica Cauer II (LC): Red en Escalera Inversa con Extracciones en el Origen (s → 0)
  </span>
  <div class="flex justify-center overflow-x-auto py-1">
    <div class="my-4 p-3 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800">
  <div class="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-1.5">
    <span>🪜</span> Forma Canónica Cauer II (Red en Escalera LC - Remociones en el Origen s → 0)
  </div>
  <div class="w-full overflow-x-auto flex justify-center">
    <svg viewBox="0 0 680 180" class="w-full max-w-[680px] h-auto select-none font-sans text-xs" style="min-width: 500px;">
      <!-- Bornes de entrada -->
      <circle cx="30" cy="40" r="4" fill="#9333ea"/>
      <text x="18" y="44" font-weight="bold" fill="#9333ea" font-size="11">A</text>
      <circle cx="30" cy="140" r="4" fill="#9333ea"/>
      <text x="18" y="144" font-weight="bold" fill="#9333ea" font-size="11">B</text>

      <path d="M 40 75 L 55 90 L 40 105" fill="none" stroke="#9333ea" stroke-width="1.8"/>
      <text x="65" y="94" font-weight="bold" fill="#9333ea" font-size="10.5">Z(s)</text>

      <!-- Riel inferior de referencia (masa) -->
      <line x1="30" y1="140" x2="620" y2="140" stroke="#64748b" stroke-width="2"/>

      <!-- Elemento 1: Capacitor serie C1 -->
      <line x1="34" y1="40" x2="100" y2="40" stroke="#64748b" stroke-width="1.8"/>
      <line x1="100" y1="28" x2="100" y2="52" stroke="#0284c7" stroke-width="2.5"/>
      <line x1="108" y1="28" x2="108" y2="52" stroke="#0284c7" stroke-width="2.5"/>
      <text x="104" y="20" text-anchor="middle" font-weight="bold" fill="#0284c7" font-size="9.5">C1 = 1/z1</text>
      <text x="104" y="64" text-anchor="middle" fill="#64748b" font-size="7.5">(Serie: 1/(s·C1))</text>

      <!-- Nodo 1 -->
      <line x1="108" y1="40" x2="190" y2="40" stroke="#64748b" stroke-width="1.8"/>
      <circle cx="190" cy="40" r="3.5" fill="#64748b"/>

      <!-- Elemento 2: Inductor paralelo L2 -->
      <line x1="190" y1="40" x2="190" y2="60" stroke="#64748b" stroke-width="1.5"/>
      <path d="M 190 60 Q 180 68 190 76 Q 180 84 190 92 Q 180 100 190 108 Q 180 116 190 124" fill="none" stroke="#059669" stroke-width="2"/>
      <line x1="190" y1="124" x2="190" y2="140" stroke="#64748b" stroke-width="1.5"/>
      <circle cx="190" cy="140" r="3.5" fill="#64748b"/>
      <text x="212" y="85" font-weight="bold" fill="#059669" font-size="9.5">L2 = 1/y2</text>
      <text x="212" y="97" fill="#64748b" font-size="7.5">(Derivación: 1/(s·L2))</text>

      <!-- Elemento 3: Capacitor serie C3 -->
      <line x1="190" y1="40" x2="310" y2="40" stroke="#64748b" stroke-width="1.8"/>
      <line x1="310" y1="28" x2="310" y2="52" stroke="#0284c7" stroke-width="2.5"/>
      <line x1="318" y1="28" x2="318" y2="52" stroke="#0284c7" stroke-width="2.5"/>
      <text x="314" y="20" text-anchor="middle" font-weight="bold" fill="#0284c7" font-size="9.5">C3 = 1/z3</text>
      <text x="314" y="64" text-anchor="middle" fill="#64748b" font-size="7.5">(Serie: 1/(s·C3))</text>

      <!-- Nodo 2 -->
      <line x1="318" y1="40" x2="400" y2="40" stroke="#64748b" stroke-width="1.8"/>
      <circle cx="400" cy="40" r="3.5" fill="#64748b"/>

      <!-- Elemento 4: Inductor paralelo L4 -->
      <line x1="400" y1="40" x2="400" y2="60" stroke="#64748b" stroke-width="1.5"/>
      <path d="M 400 60 Q 390 68 400 76 Q 390 84 400 92 Q 390 100 400 108 Q 390 116 400 124" fill="none" stroke="#059669" stroke-width="2"/>
      <line x1="400" y1="124" x2="400" y2="140" stroke="#64748b" stroke-width="1.5"/>
      <circle cx="400" cy="140" r="3.5" fill="#64748b"/>
      <text x="422" y="85" font-weight="bold" fill="#059669" font-size="9.5">L4 = 1/y4</text>
      <text x="422" y="97" fill="#64748b" font-size="7.5">(Derivación: 1/(s·L4))</text>

      <line x1="400" y1="40" x2="490" y2="40" stroke="#64748b" stroke-width="1.8"/>
      <!-- Puntos suspensivos -->
      <circle cx="515" cy="40" r="2.5" fill="#94a3b8"/>
      <circle cx="530" cy="40" r="2.5" fill="#94a3b8"/>
      <circle cx="545" cy="40" r="2.5" fill="#94a3b8"/>

      <line x1="570" y1="40" x2="620" y2="40" stroke="#64748b" stroke-width="1.8"/>
      <line x1="620" y1="40" x2="620" y2="140" stroke="#64748b" stroke-width="1.8"/>

      <rect x="80" y="152" width="510" height="22" rx="3" fill="#f8fafc" class="dark:fill-slate-800" stroke="#cbd5e1" class="dark:stroke-slate-700"/>
      <text x="335" y="166" text-anchor="middle" font-weight="bold" fill="#9333ea" font-size="8.5">Divisiones continuas por potencias CRECIENTES: Z = (1/s·C1) + 1 / ( (1/s·L2) + 1 / ( (1/s·C3) + ... ) )</text>
    </svg>
  </div>
</div>
  </div>
</div>


          `
        },
        {
          id: 'tc3-u3-sintesis-rc-rl',
          titulo: '3.5 Síntesis de Dipolos Disipativos RC y RL',
          contenido: `
<p class="mb-3">Los <strong>dipolos disipativos</strong> están compuestos por resistencias ideales combinadas con un único tipo de elemento reactivo (exclusivamente resistencias y capacitores en dipolos $RC$, o resistencias e inductores en dipolos $RL$). Al haber disipación activa resistiva, las frecuencias naturales ya no pueden oscilar perpetuamente en el eje imaginario, por lo que todos sus polos y ceros se desplazan enteramente hacia el <strong>eje real negativo $\\sigma < 0$</strong>.</p>

<h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Propiedades Cardinales de Dipolos RC ($Z_{RC}(s)$ e $Y_{RC}(s)$)</h5>
<ul class="list-disc pl-5 space-y-1.5 text-xs sm:text-sm mb-3">
  <li><strong>Polos y Ceros sobre el Eje Real Negativo:</strong> Todas las raíces son números reales, no positivos, simples y se alternan estrictamente a lo largo del semieje $\\sigma \\le 0$.</li>
  <li><strong>Polo Crítico en el Origen para Impedancia:</strong> La singularidad de $Z_{RC}(s)$ más cercana al origen (o en el propio origen $s = 0$) es siempre un <strong>POLO</strong>:
    $$0 \\le \\sigma_{p1} < \\sigma_{z1} < \\sigma_{p2} < \\sigma_{z2} < \\dots$$
  </li>
  <li><strong>Comportamiento Asintótico en el Infinito:</strong> La singularidad más alejada de $Z_{RC}(s)$ hacia $-\\infty$ es un <strong>CERO</strong> o la impedancia converge a una resistencia finita $R_\\infty$: $Z_{RC}(\\infty) = R_\\infty \\ge 0$. Nunca puede tener un polo en el infinito.</li>
  <li><strong>Derivada de Impedancia Estrictamente Negativa:</strong> Sobre el eje real negativo (fuera de los polos), la función de impedancia decrece monótonamente: $\\mathbf{\\frac{d Z_{RC}(\\sigma)}{d\\sigma} < 0}$.</li>
  <li><strong>Signo de los Residuos:</strong> Los residuos de la impedancia $Z_{RC}(s)$ en todos sus polos son <strong>reales y estrictamente positivos</strong> ($k_i > 0$). Por el contrario, los residuos de la admitancia $Y_{RC}(s)$ en sus polos son siempre <strong>negativos</strong>.</li>
</ul>

<div class="grid grid-cols-1 md:grid-cols-2 gap-3 my-3 text-xs sm:text-sm">
  <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
    <div class="font-bold text-blue-600 dark:text-blue-400 font-mono">Foster I RC: Expansión de $Z_{RC}(s)$</div>
    <p>Dado que los residuos de $Z_{RC}(s)$ son positivos, se expande directamente:</p>
    $$Z_{RC}(s) = R_\\infty + \\frac{k_0}{s} + \\sum_{i=1}^k \\frac{k_i}{s + \\sigma_i}$$
    <p class="text-slate-600 dark:text-slate-400">Cada término $\\frac{k_i}{s + \\sigma_i}$ representa una celda $R_i \\parallel C_i$ en serie:<br>
    $$\\mathbf{C_i = \\frac{1}{k_i}}, \\qquad \\mathbf{R_i = \\frac{k_i}{\\sigma_i}} \\quad (\\text{pues } \\sigma_i = \\frac{1}{R_i C_i})$$
    $$R_\\infty = \\lim_{s \\to \\infty} Z(s), \\qquad C_0 = \\frac{1}{\\lim_{s \\to 0} s Z(s)}$$
    </p>
  </div>

  <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
    <div class="font-bold text-indigo-600 dark:text-indigo-400 font-mono">Foster II RC: Expansión de $\\frac{Y_{RC}(s)}{s}$</div>
    <p>Como los residuos de $Y_{RC}(s)$ son negativos, se expande la función auxiliar $\\frac{Y_{RC}(s)}{s}$ (cuyos residuos $k'_i$ son estrictamente positivos):</p>
    $$\\frac{Y_{RC}(s)}{s} = C_\\infty + \\frac{k'_0}{s} + \\sum_{i=1}^m \\frac{k'_i}{s + \\sigma_{pi}}$$
    <p class="text-slate-600 dark:text-slate-400">Multiplicando por $s$, cada término representa una rama $R_i - C_i$ en serie:<br>
    $$Y_{RC}(s) = s C_\\infty + k'_0 + \\sum_{i=1}^m \\frac{k'_i s}{s + \\sigma_{pi}}$$
    $$\\mathbf{C_i = k'_i}, \\qquad \\mathbf{R_i = \\frac{\\sigma_{pi}}{k'_i}}, \\qquad R_0 = \\frac{1}{k'_0}$$
    </p>
  </div>
</div>


<div class="my-4 p-3 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xs">
  <span class="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-2 text-center">
    Síntesis de Dipolos RC: Foster I, Foster II, Cauer I y Alternancia de Singularidades
  </span>
  <div class="flex justify-center overflow-x-auto py-1">
    <div class="my-4 p-3 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800">
  <div class="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-1.5">
    <span>📐</span> Síntesis de Dipolos Disipativos RC: Topologías Canónicas Foster I, Foster II y Cauer I
  </div>
  <div class="w-full overflow-x-auto flex justify-center">
    <svg viewBox="0 0 680 260" class="w-full max-w-[680px] h-auto select-none font-sans text-xs" style="min-width: 520px;">
      <!-- PANEL A: Foster I RC (Arriba izquierda) -->
      <g transform="translate(10, 8)">
        <text x="155" y="14" text-anchor="middle" font-weight="bold" fill="#0284c7" font-size="9.5">A) Foster I RC: R∞ + C0 serie + Tanques (Ri || Ci) en Serie</text>
        
        <circle cx="20" cy="52" r="3.5" fill="#0284c7"/>
        <line x1="24" y1="52" x2="45" y2="52" stroke="#64748b" stroke-width="1.5"/>
        
        <!-- R_inf -->
        <rect x="45" y="44" width="30" height="16" fill="#ffffff" class="dark:fill-slate-800" stroke="#0284c7" stroke-width="1.5" rx="1"/>
        <text x="60" y="56" text-anchor="middle" font-weight="bold" fill="#0284c7" font-size="8">R∞</text>
        <line x1="75" y1="52" x2="95" y2="52" stroke="#64748b" stroke-width="1.5"/>
        
        <!-- C0 serie -->
        <line x1="95" y1="42" x2="95" y2="62" stroke="#0284c7" stroke-width="2"/>
        <line x1="101" y1="42" x2="101" y2="62" stroke="#0284c7" stroke-width="2"/>
        <text x="98" y="36" text-anchor="middle" font-weight="bold" fill="#0284c7" font-size="8">C0</text>
        <line x1="101" y1="52" x2="125" y2="52" stroke="#64748b" stroke-width="1.5"/>
        <circle cx="125" cy="52" r="3" fill="#64748b"/>

        <!-- Tanque paralelo R1 || C1 -->
        <line x1="125" y1="52" x2="135" y2="36" stroke="#64748b" stroke-width="1.2"/>
        <line x1="135" y1="36" x2="145" y2="36" stroke="#64748b" stroke-width="1.2"/>
        <line x1="145" y1="28" x2="145" y2="44" stroke="#0284c7" stroke-width="1.8"/>
        <line x1="150" y1="28" x2="150" y2="44" stroke="#0284c7" stroke-width="1.8"/>
        <text x="147" y="24" text-anchor="middle" fill="#0284c7" font-size="7.5">C1</text>
        <line x1="150" y1="36" x2="160" y2="36" stroke="#64748b" stroke-width="1.2"/>
        <line x1="160" y1="36" x2="170" y2="52" stroke="#64748b" stroke-width="1.2"/>

        <line x1="125" y1="52" x2="135" y2="68" stroke="#64748b" stroke-width="1.2"/>
        <rect x="135" y="60" width="24" height="15" fill="#ffffff" class="dark:fill-slate-800" stroke="#059669" stroke-width="1.5" rx="1"/>
        <text x="147" y="71" text-anchor="middle" font-weight="bold" fill="#059669" font-size="7.5">R1</text>
        <line x1="159" y1="68" x2="170" y2="52" stroke="#64748b" stroke-width="1.2"/>
        <circle cx="170" cy="52" r="3" fill="#64748b"/>

        <line x1="170" y1="52" x2="190" y2="52" stroke="#64748b" stroke-width="1.5"/>
        <circle cx="200" cy="52" r="2" fill="#94a3b8"/>
        <circle cx="208" cy="52" r="2" fill="#94a3b8"/>
        <circle cx="216" cy="52" r="2" fill="#94a3b8"/>

        <line x1="225" y1="52" x2="300" y2="52" stroke="#64748b" stroke-width="1.5"/>
        <circle cx="300" cy="52" r="3.5" fill="#64748b"/>
        <!-- Retorno inferior -->
        <circle cx="20" cy="105" r="3.5" fill="#0284c7"/>
        <line x1="24" y1="105" x2="300" y2="105" stroke="#64748b" stroke-width="1.5"/>
        <circle cx="300" cy="105" r="3.5" fill="#64748b"/>
        <line x1="300" y1="52" x2="300" y2="105" stroke="#64748b" stroke-width="1.5"/>
      </g>

      <!-- SEPARADOR -->
      <line x1="340" y1="10" x2="340" y2="245" stroke="#cbd5e1" class="dark:stroke-slate-700" stroke-width="1" stroke-dasharray="3,3"/>

      <!-- PANEL B: Foster II RC (Arriba derecha) -->
      <g transform="translate(355, 8)">
        <text x="160" y="14" text-anchor="middle" font-weight="bold" fill="#6366f1" font-size="9.5">B) Foster II RC: G0 + C∞ paralelo + Ramas (Ri + Ci) Serie en Paralelo</text>
        
        <!-- Rieles -->
        <circle cx="20" cy="40" r="3.5" fill="#6366f1"/>
        <line x1="24" y1="40" x2="290" y2="40" stroke="#64748b" stroke-width="1.5"/>
        <circle cx="20" cy="105" r="3.5" fill="#6366f1"/>
        <line x1="24" y1="105" x2="290" y2="105" stroke="#64748b" stroke-width="1.5"/>

        <!-- G0 -->
        <circle cx="65" cy="40" r="2.5" fill="#64748b"/>
        <line x1="65" y1="40" x2="65" y2="56" stroke="#64748b" stroke-width="1.2"/>
        <rect x="55" y="56" width="20" height="26" fill="#ffffff" class="dark:fill-slate-800" stroke="#059669" stroke-width="1.5" rx="1"/>
        <text x="65" y="72" text-anchor="middle" font-weight="bold" fill="#059669" font-size="8">R0</text>
        <line x1="65" y1="82" x2="65" y2="105" stroke="#64748b" stroke-width="1.2"/>
        <circle cx="65" cy="105" r="2.5" fill="#64748b"/>

        <!-- C_inf -->
        <circle cx="135" cy="40" r="2.5" fill="#64748b"/>
        <line x1="135" y1="40" x2="135" y2="68" stroke="#64748b" stroke-width="1.2"/>
        <line x1="125" y1="68" x2="145" y2="68" stroke="#0284c7" stroke-width="2"/>
        <line x1="125" y1="74" x2="145" y2="74" stroke="#0284c7" stroke-width="2"/>
        <text x="155" y="73" fill="#0284c7" font-weight="bold" font-size="8">C∞</text>
        <line x1="135" y1="74" x2="135" y2="105" stroke="#64748b" stroke-width="1.2"/>
        <circle cx="135" cy="105" r="2.5" fill="#64748b"/>

        <!-- Rama R1 + C1 serie -->
        <circle cx="215" cy="40" r="2.5" fill="#64748b"/>
        <line x1="215" y1="40" x2="215" y2="52" stroke="#64748b" stroke-width="1.2"/>
        <rect x="206" y="52" width="18" height="18" fill="#ffffff" class="dark:fill-slate-800" stroke="#059669" stroke-width="1.2" rx="1"/>
        <text x="215" y="64" text-anchor="middle" font-weight="bold" fill="#059669" font-size="7">R1</text>
        <line x1="215" y1="70" x2="215" y2="80" stroke="#64748b" stroke-width="1.2"/>
        <line x1="207" y1="80" x2="223" y2="80" stroke="#0284c7" stroke-width="1.8"/>
        <line x1="207" y1="84" x2="223" y2="84" stroke="#0284c7" stroke-width="1.8"/>
        <text x="231" y="84" fill="#0284c7" font-size="7">C1</text>
        <line x1="215" y1="84" x2="215" y2="105" stroke="#64748b" stroke-width="1.2"/>
        <circle cx="215" cy="105" r="2.5" fill="#64748b"/>

        <circle cx="255" cy="72" r="2" fill="#94a3b8"/>
        <circle cx="265" cy="72" r="2" fill="#94a3b8"/>
        <circle cx="275" cy="72" r="2" fill="#94a3b8"/>
      </g>

      <!-- PANEL INFERIOR: Cauer I RC y Mapa de Singularidades en el Eje Real Negativo -->
      <g transform="translate(10, 130)">
        <!-- Cauer I RC a la izquierda -->
        <text x="155" y="14" text-anchor="middle" font-weight="bold" fill="#d97706" font-size="9.5">C) Cauer I RC (Escalera s → ∞)</text>
        <circle cx="20" cy="45" r="3.5" fill="#d97706"/>
        <line x1="24" y1="45" x2="50" y2="45" stroke="#64748b" stroke-width="1.5"/>
        <!-- R1 serie -->
        <rect x="50" y="37" width="28" height="16" fill="#ffffff" class="dark:fill-slate-800" stroke="#059669" stroke-width="1.5" rx="1"/>
        <text x="64" y="49" text-anchor="middle" font-weight="bold" fill="#059669" font-size="8">R1</text>
        <line x1="78" y1="45" x2="115" y2="45" stroke="#64748b" stroke-width="1.5"/>
        <circle cx="115" cy="45" r="2.5" fill="#64748b"/>

        <!-- C2 paralelo -->
        <line x1="115" y1="45" x2="115" y2="65" stroke="#64748b" stroke-width="1.2"/>
        <line x1="105" y1="65" x2="125" y2="65" stroke="#0284c7" stroke-width="1.8"/>
        <line x1="105" y1="70" x2="125" y2="70" stroke="#0284c7" stroke-width="1.8"/>
        <text x="135" y="70" fill="#0284c7" font-weight="bold" font-size="7.5">C2</text>
        <line x1="115" y1="70" x2="115" y2="95" stroke="#64748b" stroke-width="1.2"/>
        <circle cx="115" cy="95" r="2.5" fill="#64748b"/>

        <!-- R3 serie -->
        <line x1="115" y1="45" x2="155" y2="45" stroke="#64748b" stroke-width="1.5"/>
        <rect x="155" y="37" width="28" height="16" fill="#ffffff" class="dark:fill-slate-800" stroke="#059669" stroke-width="1.5" rx="1"/>
        <text x="169" y="49" text-anchor="middle" font-weight="bold" fill="#059669" font-size="8">R3</text>
        <line x1="183" y1="45" x2="220" y2="45" stroke="#64748b" stroke-width="1.5"/>
        <circle cx="220" cy="45" r="2.5" fill="#64748b"/>

        <!-- C4 paralelo -->
        <line x1="220" y1="45" x2="220" y2="65" stroke="#64748b" stroke-width="1.2"/>
        <line x1="210" y1="65" x2="230" y2="65" stroke="#0284c7" stroke-width="1.8"/>
        <line x1="210" y1="70" x2="230" y2="70" stroke="#0284c7" stroke-width="1.8"/>
        <text x="240" y="70" fill="#0284c7" font-weight="bold" font-size="7.5">C4</text>
        <line x1="220" y1="70" x2="220" y2="95" stroke="#64748b" stroke-width="1.2"/>
        <circle cx="220" cy="95" r="2.5" fill="#64748b"/>

        <circle cx="20" cy="95" r="3.5" fill="#d97706"/>
        <line x1="24" y1="95" x2="300" y2="95" stroke="#64748b" stroke-width="1.5"/>
        <circle cx="260" cy="68" r="2" fill="#94a3b8"/>
        <circle cx="270" cy="68" r="2" fill="#94a3b8"/>
        <circle cx="280" cy="68" r="2" fill="#94a3b8"/>
      </g>

      <!-- Singularidades Eje Real Negativo a la derecha -->
      <g transform="translate(365, 130)">
        <text x="145" y="14" text-anchor="middle" font-weight="bold" fill="#059669" font-size="9.5">D) Eje Real Negativo: Alternancia Polo-Cero en Dipolos RC</text>
        
        <!-- Eje real sigma -->
        <line x1="20" y1="60" x2="280" y2="60" stroke="#94a3b8" stroke-width="1.5"/>
        <text x="270" y="74" fill="#64748b" font-weight="bold" font-size="8.5">−σ (s)</text>
        <line x1="250" y1="25" x2="250" y2="92" stroke="#94a3b8" stroke-width="1.5"/>
        <text x="253" y="32" fill="#64748b" font-size="8">jω</text>

        <!-- Origen s=0 (Polo o finito) -->
        <circle cx="250" cy="60" r="4" fill="#ef4444"/>
        <text x="250" y="76" text-anchor="middle" font-weight="bold" fill="#ef4444" font-size="8">s=0 (p0)</text>

        <!-- Cero z1 -->
        <circle cx="205" cy="60" r="4" fill="#ffffff" stroke="#059669" stroke-width="2"/>
        <text x="205" y="76" text-anchor="middle" font-weight="bold" fill="#059669" font-size="8">−z1</text>

        <!-- Polo p1 -->
        <line x1="156" y1="56" x2="164" y2="64" stroke="#ef4444" stroke-width="2"/>
        <line x1="156" y1="64" x2="164" y2="56" stroke="#ef4444" stroke-width="2"/>
        <text x="160" y="76" text-anchor="middle" font-weight="bold" fill="#ef4444" font-size="8">−p1</text>

        <!-- Cero z2 -->
        <circle cx="115" cy="60" r="4" fill="#ffffff" stroke="#059669" stroke-width="2"/>
        <text x="115" y="76" text-anchor="middle" font-weight="bold" fill="#059669" font-size="8">−z2</text>

        <!-- Polo p2 -->
        <line x1="66" y1="56" x2="74" y2="64" stroke="#ef4444" stroke-width="2"/>
        <line x1="66" y1="64" x2="74" y2="56" stroke="#ef4444" stroke-width="2"/>
        <text x="70" y="76" text-anchor="middle" font-weight="bold" fill="#ef4444" font-size="8">−p2</text>

        <rect x="20" y="90" width="250" height="20" rx="3" fill="#059669" fill-opacity="0.08"/>
        <text x="145" y="103" text-anchor="middle" font-weight="bold" fill="#047857" font-size="7.5">RC: Primer singularidad en el origen es un POLO (o valor finito)</text>
      </g>
    </svg>
  </div>
</div>
  </div>
</div>


<h5 class="text-sm font-bold text-slate-900 dark:text-white mt-6 mb-2">Dipolos RL y Teorema de Transformación Dual RC $\\leftrightarrow$ RL</h5>
<p class="mb-2">Existe una relación de transformación directa y unívoca entre las funciones de inmitancia de los dipolos $RC$ y $RL$:</p>
$$Z_{RL}(s) = s \\cdot Z_{RC\\text{-aux}}(s) \\iff \\frac{Z_{RL}(s)}{s} = Z_{RC\\text{-aux}}(s)$$
<div class="p-3 my-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm">
  <ul class="list-disc pl-5 space-y-1">
    <li>En un dipolo $RL$, la singularidad más próxima al origen es siempre un <strong>CERO</strong> (o un cero en $s = 0$).</li>
    <li>En el infinito puede haber un polo o una constante finita: $Z_{RL}(\\infty) \\to \\infty$ ó $R_\\infty$.</li>
    <li>Para sintetizar por <strong>Foster I RL</strong>, se expande en fracciones simples la función auxiliar $\\mathbf{\\frac{Z_{RL}(s)}{s}}$.</li>
    <li>Para sintetizar por <strong>Foster II RL</strong>, se expande en fracciones simples la función de admitancia $\\mathbf{Y_{RL}(s)}$ directamente (cuyos residuos son positivos).</li>
  </ul>
</div>

          `
        },
        {
          id: 'tc3-u3-tabla-resumen',
          titulo: '3.6 Tabla Comparativa Maestra y Formulario de Examen - Síntesis de Dipolos',
          contenido: `
<p class="mb-3">Para dominar las evaluaciones de la cátedra (exámenes parciales y finales de Teoría de Circuitos III), la siguiente tabla resume los criterios de realizabilidad, ubicación de singularidades, derivadas y procedimientos de expansión para cada familia de dipolos:</p>

<div class="overflow-x-auto my-3">
  <table class="w-full text-left text-xs border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden font-mono">
    <thead class="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold uppercase tracking-wider">
      <tr>
        <th class="p-2.5 border-b border-r border-slate-200 dark:border-slate-700">Propiedad / Método</th>
        <th class="p-2.5 border-b border-r border-slate-200 dark:border-slate-700 text-blue-600 dark:text-blue-400">Dipolos LC (Reactivos)</th>
        <th class="p-2.5 border-b border-r border-slate-200 dark:border-slate-700 text-emerald-600 dark:text-emerald-400">Dipolos RC (Disipativos)</th>
        <th class="p-2.5 border-b border-slate-200 dark:border-slate-700 text-amber-600 dark:text-amber-400">Dipolos RL (Disipativos)</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
      <tr class="hover:bg-slate-50 dark:hover:bg-slate-850">
        <td class="p-2.5 font-bold border-r border-slate-200 dark:border-slate-700 font-sans">Lugar de Polos y Ceros</td>
        <td class="p-2.5 border-r border-slate-200 dark:border-slate-700">Eje imaginario $j\\omega$ puro (conjugados)</td>
        <td class="p-2.5 border-r border-slate-200 dark:border-slate-700">Eje real negativo $\\sigma \\le 0$</td>
        <td class="p-2.5">Eje real negativo $\\sigma \\le 0$</td>
      </tr>
      <tr class="hover:bg-slate-50 dark:hover:bg-slate-850">
        <td class="p-2.5 font-bold border-r border-slate-200 dark:border-slate-700 font-sans">Singularidad más cercana a 0</td>
        <td class="p-2.5 border-r border-slate-200 dark:border-slate-700">Polo o Cero en $s = 0$</td>
        <td class="p-2.5 border-r border-slate-200 dark:border-slate-700 text-emerald-600 dark:text-emerald-400 font-bold">Siempre un POLO</td>
        <td class="p-2.5 text-amber-600 dark:text-amber-400 font-bold">Siempre un CERO</td>
      </tr>
      <tr class="hover:bg-slate-50 dark:hover:bg-slate-850">
        <td class="p-2.5 font-bold border-r border-slate-200 dark:border-slate-700 font-sans">Singularidad en el Infinito</td>
        <td class="p-2.5 border-r border-slate-200 dark:border-slate-700">Polo o Cero en $s \\to \\infty$</td>
        <td class="p-2.5 border-r border-slate-200 dark:border-slate-700">Cero o constante $R_\\infty$</td>
        <td class="p-2.5">Polo o constante $R_\\infty$</td>
      </tr>
      <tr class="hover:bg-slate-50 dark:hover:bg-slate-850">
        <td class="p-2.5 font-bold border-r border-slate-200 dark:border-slate-700 font-sans">Signo de Pendientes</td>
        <td class="p-2.5 border-r border-slate-200 dark:border-slate-700">$\\frac{dX}{d\\omega} > 0, \\; \\frac{dB}{d\\omega} > 0$</td>
        <td class="p-2.5 border-r border-slate-200 dark:border-slate-700">$\\frac{dZ_{RC}}{d\\sigma} < 0, \\; \\frac{dY_{RC}}{d\\sigma} > 0$</td>
        <td class="p-2.5">$\\frac{dZ_{RL}}{d\\sigma} > 0, \\; \\frac{dY_{RL}}{d\\sigma} < 0$</td>
      </tr>
      <tr class="hover:bg-slate-50 dark:hover:bg-slate-850">
        <td class="p-2.5 font-bold border-r border-slate-200 dark:border-slate-700 font-sans">Función para Foster I</td>
        <td class="p-2.5 border-r border-slate-200 dark:border-slate-700 font-bold text-blue-600 dark:text-blue-400">Expandir $Z(s)$</td>
        <td class="p-2.5 border-r border-slate-200 dark:border-slate-700 font-bold text-emerald-600 dark:text-emerald-400">Expandir $Z(s)$</td>
        <td class="p-2.5 font-bold text-amber-600 dark:text-amber-400">Expandir $\\frac{Z(s)}{s}$</td>
      </tr>
      <tr class="hover:bg-slate-50 dark:hover:bg-slate-850">
        <td class="p-2.5 font-bold border-r border-slate-200 dark:border-slate-700 font-sans">Función para Foster II</td>
        <td class="p-2.5 border-r border-slate-200 dark:border-slate-700 font-bold text-blue-600 dark:text-blue-400">Expandir $Y(s)$</td>
        <td class="p-2.5 border-r border-slate-200 dark:border-slate-700 font-bold text-emerald-600 dark:text-emerald-400">Expandir $\\frac{Y(s)}{s}$</td>
        <td class="p-2.5 font-bold text-amber-600 dark:text-amber-400">Expandir $Y(s)$</td>
      </tr>
      <tr class="hover:bg-slate-50 dark:hover:bg-slate-850">
        <td class="p-2.5 font-bold border-r border-slate-200 dark:border-slate-700 font-sans">Cauer I ($s \\to \\infty$)</td>
        <td class="p-2.5 border-r border-slate-200 dark:border-slate-700">L serie, C paralelo</td>
        <td class="p-2.5 border-r border-slate-200 dark:border-slate-700">R serie, C paralelo</td>
        <td class="p-2.5">L serie, R paralelo</td>
      </tr>
      <tr class="hover:bg-slate-50 dark:hover:bg-slate-850">
        <td class="p-2.5 font-bold border-r border-slate-200 dark:border-slate-700 font-sans">Cauer II ($s \\to 0$)</td>
        <td class="p-2.5 border-r border-slate-200 dark:border-slate-700">C serie, L paralelo</td>
        <td class="p-2.5 border-r border-slate-200 dark:border-slate-700">C serie, R paralelo</td>
        <td class="p-2.5">R serie, L paralelo</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="p-3.5 my-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-xs sm:text-sm text-blue-950 dark:text-blue-200 space-y-1.5">
  <div class="font-bold flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider">
    <span>✅</span> Protocolo de Verificación Rápida en Examen (Checklist de Seguridad)
  </div>
  <ol class="list-decimal pl-5 space-y-1 text-xs">
    <li><strong>Test Asintótico en Continua ($s \\to 0$):</strong> Reemplazar inductores por cortocircuitos ($0\\,\\Omega$) y capacitores por circuitos abiertos ($\\infty\\,\\Omega$). La impedancia del circuito resultante debe coincidir numéricamente con $\\lim_{s \\to 0} Z(s)$.</li>
    <li><strong>Test Asintótico en Muy Alta Frecuencia ($s \\to \\infty$):</strong> Reemplazar inductores por circuitos abiertos y capacitores por cortocircuitos. La impedancia del circuito resultante debe coincidir exactamente con $\\lim_{s \\to \\infty} Z(s)$.</li>
    <li><strong>Verificación Canónica de Componentes:</strong> La cantidad total de elementos reactivos ($L$ y $C$) en la red sintetizada debe ser exactamente igual al grado del polinomio de mayor orden de la función de inmitancia.</li>
    <li><strong>Condición de Pasividad:</strong> Ningún valor de resistencia, inductancia o capacitancia puede resultar negativo ($R > 0, L > 0, C > 0$). Un valor negativo delata un error de cálculo o que la función original no era Real Positiva (PR).</li>
  </ol>
</div>

<div class="pt-3 flex flex-wrap items-center justify-between gap-3">
  <div class="text-xs text-slate-500 font-mono">
    <span>Teoría de Circuitos III · Cátedra Ing. Márquez / Ing. Cardozo (UTN FRBA)</span>
  </div>
  <button onclick="filtrarUnidad('tc3-u3'); volverAEjercicios();" class="text-xs font-mono text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 font-semibold">
    <span>Practicar ejercicios interactivos de la Unidad 3</span>
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

            <div class="p-3 my-3 rounded-xl bg-emerald-500/10 dark:bg-emerald-950/40 border border-emerald-500/30 text-xs flex items-start gap-2.5">
              <span class="text-base shrink-0">🔗</span>
              <div class="flex-1 min-w-0">
                <div class="font-semibold text-emerald-900 dark:text-emerald-300">
                  Aplicación en Electrónica Aplicada I (Método de Cuadripolos en Realimentación):
                </div>
                <p class="text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                  Para ver la aplicación directa de los parámetros de cuadripolos de dos puertos en la resolución de amplificadores con efectos de carga de la red $\\beta$:
                </p>
                <button 
                  onclick="navegarASeccionTeorica('electronica-aplicada-1', 'u4-metodo-cuadripolos')"
                  class="mt-1.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-[11px] font-medium transition-colors shadow-2xs"
                >
                  <span>📖 Ver Electrónica Aplicada I · Unidad 4 (Método Sistemático de Cuadripolos)</span>
                  <span>→</span>
                </button>
              </div>
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
