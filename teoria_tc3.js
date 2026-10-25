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
    // UNIDAD 1: FUNCIONES DE RED, TRANSFORMADA DE LAPLACE Y NORMALIZACIÓN
    // ========================================================================
    {
      id: 'tc3-u1',
      numero: 1,
      titulo: 'Unidad 1: Funciones de Red, Aproximaciones y Normalización',
      icono: '📊',
      badgeColor: 'border-cyan-500/40 bg-cyan-950/40 text-cyan-300',
      introduccion: 'Esta unidad fundamenta el análisis de redes en el plano complejo s de Laplace. Se desarrollan las condiciones de Hurwitz, la descomposición operacional en parte par e impar, los métodos de reconstrucción de funciones (Gewertz y fase), las aproximaciones clásicas de filtros analógicos (Butterworth y Chebyshev), las técnicas de normalización y el retardo de grupo.',
      secciones: [
        {
          id: 'tc3-u1-funciones-red',
          titulo: '1.1 Funciones de Red de 1 y 2 Puertos en el Plano Complejo s',
          contenido: `
<p class="mb-3">Una <strong>función de red $H(s)$</strong> relaciona la transformada de Laplace de una respuesta $Y(s)$ con la de una excitación $X(s)$, asumiendo condiciones iniciales nulas en una red lineal e invariante en el tiempo (LTI):</p>
$$H(s) = \\frac{Y(s)}{X(s)} = \\frac{N(s)}{D(s)} = K \\frac{(s - z_1)(s - z_2)\\dots(s - z_m)}{(s - p_1)(s - p_2)\\dots(s - p_n)}$$

<ul class="list-disc pl-5 space-y-1 text-xs sm:text-sm mb-3">
  <li><strong>Funciones de Excitación o Inmitancia (1 puerto):</strong> Relacionan tensión y corriente en el mismo par de terminales: Impedancia de entrada $Z(s) = V(s)/I(s)$ o Admitancia de entrada $Y(s) = I(s)/V(s)$.</li>
  <li><strong>Funciones de Transferencia (2 puertos / Cuadripolos):</strong> Relacionan magnitudes de puertos distintos:
    Transferencia de tensión $T_v(s) = V_2(s)/V_1(s)$, de corriente $T_i(s) = I_2(s)/I_1(s)$, transimpedancia $Z_{21}(s) = V_2(s)/I_1(s)$ o transadmitancia $Y_{21}(s) = I_2(s)/V_1(s)$.
  </li>
</ul>

<h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Estabilidad Asintótica y Polinomios de Hurwitz</h5>
<p class="mb-2">Para que una red física pasiva o activa sea asintóticamente estable (su respuesta impulsional tienda a cero cuando $t \\to \\infty$), todos los polos de su función de transferencia deben residir estrictamente en el <strong>semiplano izquierdo abierto (SPI)</strong>: $\\text{Re}\\{p_k\\} < 0$. El denominador $D(s)$ debe ser un <strong>polinomio de Hurwitz estricto</strong>.</p>
<div class="p-3 my-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm">
  <span class="font-bold text-blue-600 dark:text-blue-400 font-mono">Criterio de Cocientes Continuados de Hurwitz:</span> Se divide la parte par $m(s)$ por la parte impar $n(s)$ de $D(s)$. Si todos los cocientes euclídeos son de la forma $q_k s$ con coeficientes reales estrictamente positivos ($q_k > 0$) y no hay cancelación prematura, el polinomio es estrictamente de Hurwitz.
</div>

          `
        },
        {
          id: 'tc3-u1-partes-reconstruccion',
          titulo: '1.2 Partes de Funciones de Red, Régimen Armónico y Métodos de Reconstrucción',
          contenido: `
<p class="mb-3">En el análisis espectral y la síntesis de filtros analógicos, frecuentemente se conoce únicamente una propiedad en régimen permanente de la red (por ejemplo, su curva de atenuación, su parte real resistiva o su curva de fase) y se requiere determinar la función de red racional compleja completa $F(s) = P(s)/Q(s)$. Para ello, se descompone la función en sus <strong>partes par e impar operacionales</strong>.</p>

<h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Descomposición Polinomial y Operacional</h5>
<p class="mb-2">Sea una función racional con coeficientes reales $F(s) = \\frac{P(s)}{Q(s)}$. Se descompone el numerador y denominador en sus potencias pares e impares de la variable compleja $s$:</p>
$$P(s) = m_1(s) + n_1(s), \\qquad Q(s) = m_2(s) + n_2(s)$$
<p class="text-xs text-slate-600 dark:text-slate-400 mb-2">donde $m_1(-s) = m_1(s)$ y $m_2(-s) = m_2(s)$ (polinomios pares), mientras que $n_1(-s) = -n_1(s)$ y $n_2(-s) = -n_2(s)$ (polinomios impares). Multiplicando numerador y denominador por el conjugado par $Q(-s) = m_2(s) - n_2(s)$:</p>
$$F(s) = \\frac{(m_1 + n_1)(m_2 - n_2)}{(m_2 + n_2)(m_2 - n_2)} = \\frac{(m_1 m_2 - n_1 n_2) + (n_1 m_2 - m_1 n_2)}{m_2^2(s) - n_2^2(s)} = \\mathbf{M(s) + N(s)}$$

<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3 text-xs sm:text-sm">
  <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
    <div class="font-bold text-blue-600 dark:text-blue-400 font-mono mb-1">Parte Par Operacional M(s)</div>
    $$M(s) = \\frac{F(s) + F(-s)}{2} = \\frac{m_1 m_2 - n_1 n_2}{m_2^2 - n_2^2} = \\frac{m_1 m_2 - n_1 n_2}{Q(s) Q(-s)}$$
    <p class="text-slate-500 text-xs mt-1">Es una función par de $s$: $M(-s) = M(s)$. Sus singularidades son simétricas respecto del eje $j\\omega$.</p>
  </div>
  <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
    <div class="font-bold text-indigo-600 dark:text-indigo-400 font-mono mb-1">Parte Impar Operacional N(s)</div>
    $$N(s) = \\frac{F(s) - F(-s)}{2} = \\frac{n_1 m_2 - m_1 n_2}{m_2^2 - n_2^2} = \\frac{n_1 m_2 - m_1 n_2}{Q(s) Q(-s)}$$
    <p class="text-slate-500 text-xs mt-1">Es una función impar de $s$: $N(-s) = -N(s)$. Se anula en el origen si no tiene polo.</p>
  </div>
</div>


<div class="my-4 p-3 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xs">
  <span class="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-2 text-center">
    📐 Arquitectura Operacional de una Función de Red: Descomposición Par / Impar y Reconstrucción
  </span>
  <div class="flex justify-center overflow-x-auto py-1">
    <svg class="w-full h-auto max-w-4xl mx-auto select-none" viewBox="0 0 900 300" xmlns="http://www.w3.org/2000/svg">
  <!-- Marco contenedor -->
  <rect x="10" y="10" width="880" height="280" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>

  <!-- Título principal -->
  <text x="450" y="32" font-size="13" font-family="system-ui, sans-serif" font-weight="bold" fill="#0f172a" text-anchor="middle">
    Arquitectura Operacional de una Función de Red: Descomposición Par / Impar y Reconstrucción
  </text>

  <!-- FILA SUPERIOR: ANÁLISIS DIRECTO -->

  <!-- Paso 1: Función de Red Racional F(s) -->
  <g transform="translate(30, 50)">
    <rect x="0" y="0" width="235" height="100" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.8"/>
    <text x="117" y="22" font-size="11" font-family="system-ui, sans-serif" font-weight="bold" fill="#1d4ed8" text-anchor="middle">
      1. Función de Red Racional F(s)
    </text>
    <text x="117" y="44" font-size="12" font-family="monospace" font-weight="bold" fill="#0f172a" text-anchor="middle">
      F(s) = P(s) / Q(s)
    </text>
    <text x="117" y="66" font-size="10" font-family="system-ui, sans-serif" fill="#334155" text-anchor="middle">
      P(s) = m₁ + n₁,   Q(s) = m₂ + n₂
    </text>
    <text x="117" y="84" font-size="9" font-family="system-ui, sans-serif" fill="#64748b" text-anchor="middle">
      m: potencias pares,   n: potencias impares
    </text>
  </g>

  <!-- Flecha 1 a 2 -->
  <line x1="265" y1="100" x2="310" y2="100" stroke="#64748b" stroke-width="2"/>
  <polygon points="317,100 308,95 308,105" fill="#64748b"/>

  <!-- Paso 2: Descomposición Operacional M(s) + N(s) -->
  <g transform="translate(320, 50)">
    <rect x="0" y="0" width="275" height="100" rx="8" fill="#f5f3ff" stroke="#8b5cf6" stroke-width="1.8"/>
    <text x="137" y="22" font-size="11" font-family="system-ui, sans-serif" font-weight="bold" fill="#6d28d9" text-anchor="middle">
      2. Descomposición Operacional
    </text>
    <text x="137" y="42" font-size="11.5" font-family="monospace" font-weight="bold" fill="#0f172a" text-anchor="middle">
      F(s) = M(s) + N(s)
    </text>
    <text x="137" y="62" font-size="9.5" font-family="monospace" fill="#334155" text-anchor="middle">
      Par: M(s) = [m₁m₂ - n₁n₂] / (m₂² - n₂²)
    </text>
    <text x="137" y="77" font-size="9.5" font-family="monospace" fill="#334155" text-anchor="middle">
      Impar: N(s) = [n₁m₂ - m₁n₂] / (m₂² - n₂²)
    </text>
    <text x="137" y="92" font-size="8.5" font-family="system-ui, sans-serif" fill="#7c3aed" text-anchor="middle">
      Propiedad par/impar: M(-s) = M(s),   N(-s) = -N(s)
    </text>
  </g>

  <!-- Flecha 2 a 3 -->
  <line x1="595" y1="100" x2="635" y2="100" stroke="#64748b" stroke-width="2"/>
  <polygon points="642,100 633,95 633,105" fill="#64748b"/>

  <!-- Paso 3: Régimen Armónico (s = jw) -->
  <g transform="translate(645, 50)">
    <rect x="0" y="0" width="225" height="100" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.8"/>
    <text x="112" y="22" font-size="11" font-family="system-ui, sans-serif" font-weight="bold" fill="#047857" text-anchor="middle">
      3. Régimen Armónico (s = jω)
    </text>
    <text x="112" y="44" font-size="10.5" font-family="monospace" font-weight="bold" fill="#065f46" text-anchor="middle">
      s = jω (Eje Imaginario)
    </text>
    <text x="112" y="63" font-size="10" font-family="monospace" font-weight="bold" fill="#0f172a" text-anchor="middle">
      Re[F(jω)] = M(jω)
    </text>
    <text x="112" y="78" font-size="10" font-family="monospace" font-weight="bold" fill="#0f172a" text-anchor="middle">
      j·Im[F(jω)] = N(jω)
    </text>
    <text x="112" y="93" font-size="9" font-family="system-ui, sans-serif" fill="#059669" text-anchor="middle">
      Módulo: |F(jω)|² = M²(jω) - N²(jω)
    </text>
  </g>

  <!-- FLECHAS DE RETORNO / RECONSTRUCCIÓN INVERSA -->
  <!-- Camino hacia Reconstrucción Real (Ámbar) -->
  <path d="M 720,150 L 720,165 Q 720,175 700,175 L 260,175 Q 240,175 240,183" fill="none" stroke="#d97706" stroke-width="1.8" stroke-dasharray="4,3"/>
  <polygon points="240,188 236,180 244,180" fill="#d97706"/>

  <!-- Camino hacia Reconstrucción Fase (Rosa) -->
  <path d="M 790,150 L 790,165 Q 790,175 770,175 L 685,175 Q 675,175 675,183" fill="none" stroke="#db2777" stroke-width="1.8" stroke-dasharray="4,3"/>
  <polygon points="675,188 671,180 679,180" fill="#db2777"/>

  <!-- FILA INFERIOR: MÉTODOS DE RECONSTRUCCIÓN -->

  <!-- Paso 4: Reconstrucción desde Parte Real -->
  <g transform="translate(30, 190)">
    <rect x="0" y="0" width="410" height="88" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.8"/>
    <text x="205" y="20" font-size="11" font-family="system-ui, sans-serif" font-weight="bold" fill="#b45309" text-anchor="middle">
      Reconstrucción a partir de Re[F(jω)] o M(s)
    </text>
    <text x="205" y="42" font-size="10.5" font-family="monospace" font-weight="bold" fill="#0f172a" text-anchor="middle">
      F(s) = 2 · [Fracciones de M(s) con polos en Re{s} &lt; 0] + M(∞)
    </text>
    <text x="205" y="60" font-size="9.5" font-family="system-ui, sans-serif" fill="#78350f" text-anchor="middle">
      Método de Gewertz (sistema de ecuaciones) / Fracciones simples en SPI
    </text>
    <text x="205" y="75" font-size="9" font-family="system-ui, sans-serif" fill="#92400e" text-anchor="middle">
      Factorización espectral: Q(s)·Q(-s) sin polos sobre el eje jω
    </text>
  </g>

  <!-- Paso 5: Reconstrucción desde Fase -->
  <g transform="translate(460, 190)">
    <rect x="0" y="0" width="410" height="88" rx="8" fill="#fdf2f8" stroke="#ec4899" stroke-width="1.8"/>
    <text x="205" y="20" font-size="11" font-family="system-ui, sans-serif" font-weight="bold" fill="#be185d" text-anchor="middle">
      Reconstrucción a partir de la Fase φ(ω)
    </text>
    <text x="205" y="40" font-size="10" font-family="monospace" font-weight="bold" fill="#0f172a" text-anchor="middle">
      j·tan φ(ω) = N(jω) / M(jω) = [n₁m₂ - m₁n₂] / [m₁m₂ - n₁n₂]
    </text>
    <text x="205" y="58" font-size="9.5" font-family="monospace" fill="#831843" text-anchor="middle">
      exp(j·2φ) = [1 + j tan φ] / [1 - j tan φ] = [P(s)·Q(-s)] / [P(-s)·Q(s)]
    </text>
    <text x="205" y="75" font-size="9" font-family="system-ui, sans-serif" fill="#9d174d" text-anchor="middle">
      Estabilidad física: asigna estrictamente los polos a Q(s) en Re{s} &lt; 0
    </text>
  </g>
</svg>
  </div>
</div>


<h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Propiedades en Régimen Permanente Sinusoidal ($s = j\\omega$)</h5>
<p class="mb-2">Al sustituir $s = j\\omega$ (frecuencia angular real), dado que los coeficientes son reales, se cumple que $F(-j\\omega) = [F(j\\omega)]^*$. Las partes operacionales se transforman directamente en la parte real e imaginaria de la respuesta:</p>
$$\\mathbf{M(j\\omega) = \\text{Re}[F(j\\omega)] = A(\\omega)}, \\qquad \\mathbf{N(j\\omega) = j \\cdot \\text{Im}[F(j\\omega)] = j B(\\omega)}$$

<ul class="list-disc pl-5 space-y-1.5 text-xs sm:text-sm mb-3">
  <li><strong>Módulo al cuadrado:</strong> $|F(j\\omega)|^2 = F(j\\omega) F(-j\\omega) = [M(s)^2 - N(s)^2]_{s=j\\omega} = A^2(\\omega) + B^2(\\omega)$.</li>
  <li><strong>Función par espectral:</strong> Se define $S(s) = F(s) F(-s) = M^2(s) - N^2(s)$. Sus ceros y polos presentan simetría cuadrantal. Conocer $S(s)$ permite recuperar $F(s)$ mediante <em>factorización espectral</em> seleccionando únicamente los polos del semiplano izquierdo.</li>
  <li><strong>Fase y tangente angular:</strong>
    $$\\frac{F(j\\omega)}{F(-j\\omega)} = e^{j 2\\phi(\\omega)} = \\frac{1 + j \\tan \\phi}{1 - j \\tan \\phi} \\implies \\mathbf{j \\tan \\phi(\\omega) = \\left. \\frac{N(s)}{M(s)} \\right|_{s=j\\omega} = \\left. \\frac{n_1 m_2 - m_1 n_2}{m_1 m_2 - n_1 n_2} \\right|_{s=j\\omega}}$$
  </li>
</ul>

<h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Métodos de Reconstrucción de la Función de Red Completa</h5>
<div class="space-y-2.5 my-3 text-xs sm:text-sm">
  <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
    <span class="font-bold text-emerald-600 dark:text-emerald-400 font-mono">1. Reconstrucción desde la Parte Real o Parte Par M(s) (Método de Fracciones Simples y Gewertz)</span>
    <p class="mt-1">Si $F(s)$ es estrictamente propia y asintóticamente estable (todos sus polos en $\\text{Re}\\{s\\} < 0$, sin polos en $j\\omega$):</p>
    $$M(s) = \\frac{1}{2} F(s) + \\frac{1}{2} F(-s)$$
    <p class="text-slate-600 dark:text-slate-400 mt-1">Al expandir $M(s)$ en fracciones simples, los polos con parte real negativa provienen exclusivamente de $F(s)$, mientras que los polos con parte real positiva provienen de $F(-s)$. Por lo tanto:</p>
    $$\\mathbf{F(s) = 2 \\times \\left[ \\text{fracciones simples de } M(s) \\text{ asociadas a los polos en el SPI} \\right]}$$
    <p class="text-slate-500 text-xs mt-1"><em>Ejemplo de la cátedra:</em> Sea $M(s) = \\frac{1}{1 - s^2} = \\frac{1/2}{s + 1} - \\frac{1/2}{s - 1}$. El polo en el SPI es $s = -1$ con residuo $1/2$. Multiplicando por 2: $F(s) = 2 \\left( \\frac{1/2}{s + 1} \\right) = \\frac{1}{s + 1}$, que corresponde a una impedancia realizada por un paralelo $R = 1\\,\\Omega$ y $C = 1\\text{ F}$.</p>
  </div>

  <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
    <span class="font-bold text-amber-600 dark:text-amber-400 font-mono">2. Reconstrucción desde la Fase φ(ω)</span>
    <p class="mt-1">Definiendo $T(s) = N(s)/M(s)$, en el eje imaginario $T(j\\omega) = j \\tan \\phi(\\omega)$. Formando la expresión auxiliar:</p>
    $$1 + T(s) = 1 + \\frac{n_1 m_2 - m_1 n_2}{m_1 m_2 - n_1 n_2} = \\frac{P(s) Q(-s)}{m_1 m_2 - n_1 n_2}$$
    <p class="text-slate-600 dark:text-slate-400 mt-1">El numerador reducido aporta todos los ceros de $P(s) Q(-s)$. Asignando las raíces del SPI a $Q(s)$ (por estabilidad) y las raíces restantes según hipótesis de fase mínima a $P(s)$, se reconstruye $F(s)$ salvo una constante de ganancia positiva.</p>
  </div>
</div>

          `
        },
        {
          id: 'tc3-u1-aproximaciones-filtros',
          titulo: '1.3 Teoría de Aproximaciones y Diseño de Filtros (Butterworth y Chebyshev)',
          contenido: `
<p class="mb-3">El diseño clásico de filtros analógicos consiste en sintetizar una función de transferencia racional $H(s) = V_2(s)/V_1(s)$ cuya respuesta de módulo en frecuencia $|H(j\\omega)|$ satisfaga una <strong>plantilla de atenuación o tolerancia normalizada</strong> impuesta por las especificaciones del sistema.</p>

<h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Plantilla Normalizada y los 6 Pasos del Diseño de Filtros</h5>
<p class="mb-2">La plantilla de un filtro pasa-bajos define cuatro parámetros críticos:</p>
<ul class="list-disc pl-5 space-y-1 text-xs sm:text-sm mb-3">
  <li>$\\omega_p$: Frecuencia angular de corte de la banda de paso (en rad/s).</li>
  <li>$\\omega_s$: Frecuencia angular inicial de la banda de rechazo ($\\omega_s > \\omega_p$). El cociente $k = \\omega_s / \\omega_p > 1$ es el <em>factor de selectividad</em>.</li>
  <li>$\\alpha_p$: Atenuación o riple máximo tolerable en la banda de paso (típicamente $0.5\\text{ dB}$ a $3\\text{ dB}$).</li>
  <li>$\\alpha_s$: Atenuación mínima requerida en la banda de rechazo (típicamente $\\ge 20\\text{ dB}$ a $60\\text{ dB}$).</li>
</ul>

<div class="p-3 my-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm">
  <span class="font-bold text-blue-600 dark:text-blue-400 font-mono">Flujo de Diseño Metodológico:</span><br>
  1. <strong>Especificaciones</strong> $(\\omega_p, \\omega_s, \\alpha_p, \\alpha_s) \\implies$ 
  2. <strong>Normalización</strong> (llevar $\\Omega_p = 1$, $R_0 = 1\\,\\Omega$) $\\implies$ 
  3. <strong>Aproximación</strong> (determinar orden $n$ y función $|H(j\\omega)|^2$) $\\implies$ 
  4. <strong>Función de Red $H(s)$</strong> (factorización y selección de polos en SPI) $\\implies$ 
  5. <strong>Síntesis Circuital</strong> (escalera LC o celdas activas) $\\implies$ 
  6. <strong>Desnormalización</strong> en frecuencia e impedancia.
</div>


<div class="my-4 p-3 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xs">
  <span class="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-2 text-center">
    📐 Plantilla de Tolerancia, Aproximación de Butterworth y Chebyshev Tipo I
  </span>
  <div class="flex justify-center overflow-x-auto py-1">
    <svg class="w-full h-auto max-w-4xl mx-auto select-none" viewBox="0 0 860 320" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradPass" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#10b981" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#10b981" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="gradStop" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ef4444" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#ef4444" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="gradTrans" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.20"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <rect x="10" y="10" width="840" height="300" rx="12" fill="#0f172a" fill-opacity="0.03" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,4"/>

  <!-- Ejes coordenados -->
  <line x1="80" y1="260" x2="80" y2="35" stroke="#475569" stroke-width="2"/>
  <polygon points="80,28 76,40 84,40" fill="#475569"/>
  <text x="80" y="24" font-size="12" font-family="system-ui, sans-serif" font-weight="bold" fill="#334155" text-anchor="middle">|H(jω)|</text>

  <line x1="75" y1="260" x2="800" y2="260" stroke="#475569" stroke-width="2"/>
  <polygon points="808,260 796,256 796,264" fill="#475569"/>
  <text x="815" y="264" font-size="12" font-family="system-ui, sans-serif" font-weight="bold" fill="#334155">ω [rad/s]</text>

  <!-- Zonas de la plantilla -->
  <rect x="80" y="60" width="200" height="200" fill="url(#gradPass)"/>
  <rect x="280" y="60" width="160" height="200" fill="url(#gradTrans)"/>
  <rect x="440" y="60" width="320" height="200" fill="url(#gradStop)"/>

  <!-- Límites de atenuación horizontal -->
  <line x1="75" y1="65" x2="280" y2="65" stroke="#059669" stroke-width="1.5" stroke-dasharray="3,3"/>
  <text x="70" y="69" font-size="11" font-family="monospace" font-weight="bold" fill="#059669" text-anchor="end">1.0 (0 dB)</text>

  <line x1="75" y1="95" x2="280" y2="95" stroke="#059669" stroke-width="1.5" stroke-dasharray="3,3"/>
  <text x="70" y="99" font-size="11" font-family="monospace" font-weight="bold" fill="#059669" text-anchor="end">α_p (Riple)</text>

  <line x1="440" y1="220" x2="760" y2="220" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3"/>
  <text x="765" y="224" font-size="11" font-family="monospace" font-weight="bold" fill="#dc2626">α_s (Mínima)</text>

  <!-- Frecuencias críticas -->
  <line x1="280" y1="60" x2="280" y2="265" stroke="#059669" stroke-width="1.5" stroke-dasharray="4,4"/>
  <text x="280" y="280" font-size="12" font-family="system-ui, sans-serif" font-weight="bold" fill="#059669" text-anchor="middle">ω_p (Banda Paso)</text>

  <line x1="440" y1="60" x2="440" y2="265" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,4"/>
  <text x="440" y="280" font-size="12" font-family="system-ui, sans-serif" font-weight="bold" fill="#dc2626" text-anchor="middle">ω_s (Banda Rechazo)</text>

  <text x="180" y="50" font-size="11" font-family="system-ui, sans-serif" font-weight="bold" fill="#059669" text-anchor="middle">BANDA DE PASO</text>
  <text x="360" y="50" font-size="11" font-family="system-ui, sans-serif" font-weight="bold" fill="#d97706" text-anchor="middle">TRANSICIÓN</text>
  <text x="600" y="50" font-size="11" font-family="system-ui, sans-serif" font-weight="bold" fill="#dc2626" text-anchor="middle">BANDA DE RECHAZO</text>

  <!-- Curva Butterworth -->
  <path d="M 80,65 C 160,65 240,75 280,95 C 330,125 390,210 440,230 C 500,248 650,256 750,257" fill="none" stroke="#2563eb" stroke-width="2.8"/>

  <!-- Curva Chebyshev -->
  <path d="M 80,65 C 100,65 115,95 135,95 C 155,95 170,65 190,65 C 210,65 225,95 245,95 C 260,95 272,70 280,95 C 310,165 370,235 440,245 C 500,252 650,256 750,257" fill="none" stroke="#9333ea" stroke-width="2.8"/>

  <!-- Leyenda -->
  <g transform="translate(560, 85)">
    <rect x="0" y="0" width="230" height="75" rx="8" fill="#ffffff" fill-opacity="0.9" stroke="#cbd5e1" stroke-width="1.2"/>
    <line x1="15" y1="24" x2="45" y2="24" stroke="#2563eb" stroke-width="3"/>
    <text x="55" y="28" font-size="11" font-family="system-ui, sans-serif" font-weight="bold" fill="#1e293b">Butterworth (Máx. Plana)</text>
    <line x1="15" y1="52" x2="45" y2="52" stroke="#9333ea" stroke-width="3"/>
    <text x="55" y="56" font-size="11" font-family="system-ui, sans-serif" font-weight="bold" fill="#1e293b">Chebyshev I (Equirriple)</text>
  </g>
</svg>
  </div>
</div>


<h5 class="text-sm font-bold text-slate-900 dark:text-white mt-6 mb-2">1. Aproximación de Butterworth (Máximamente Plana)</h5>
<p class="mb-2">La aproximación de Stephen Butterworth se basa en anular la mayor cantidad posible de derivadas de la magnitud en el origen ($\\omega = 0$). Su función de pérdida cuadrática es puramente monótona decreciente:</p>
$$\\mathbf{|H(j\\omega)|^2 = \\frac{1}{1 + \\left( \\frac{\\omega}{\\omega_c} \\right)^{2n}}}$$
<ul class="list-disc pl-5 space-y-1 text-xs sm:text-sm mb-3">
  <li>A la frecuencia de corte $\\omega = \\omega_c$: $|H(j\\omega_c)|^2 = 1/2 \\implies |H(j\\omega_c)|_{\\text{dB}} = -3.01\\text{ dB}$.</li>
  <li>En alta frecuencia ($\\omega \\gg \\omega_c$): la atenuación decae a razón de $\\mathbf{-20n\\text{ dB/década}}$ (o $-6n\\text{ dB/octava}$).</li>
  <li><strong>Cálculo del orden mínimo $n$:</strong>
    $$n \\ge \\frac{\\log_{10} \\left( \\frac{10^{0.1 \\alpha_s} - 1}{10^{0.1 \\alpha_p} - 1} \\right)}{2 \\log_{10} \\left( \\frac{\\omega_s}{\\omega_p} \\right)}$$
  </li>
  <li><strong>Polos normalizados:</strong> Los $2n$ polos de $|H(s)|^2 = H(s)H(-s)$ están equiespaciados sobre la circunferencia unitaria del plano complejo. Para estabilidad, se seleccionan los $n$ polos del semiplano izquierdo:
    $$s_k = -\\sin\\left( \\frac{2k - 1}{2n} \\pi \\right) + j \\cos\\left( \\frac{2k - 1}{2n} \\pi \\right), \\qquad k = 1, 2, \\dots, n$$
  </li>
</ul>

<div class="overflow-x-auto my-3">
  <table class="w-full text-left text-xs border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden font-mono">
    <thead class="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold uppercase">
      <tr>
        <th class="p-2 border-b border-r border-slate-200 dark:border-slate-700">Orden n</th>
        <th class="p-2 border-b border-slate-200 dark:border-slate-700">Denominador Normalizado Factorizado B_n(s) (ω_c = 1)</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
      <tr><td class="p-2 font-bold border-r border-slate-200 dark:border-slate-700">1</td><td class="p-2">$s + 1$</td></tr>
      <tr><td class="p-2 font-bold border-r border-slate-200 dark:border-slate-700">2</td><td class="p-2">$s^2 + \\sqrt{2}s + 1 = s^2 + 1.4142s + 1$</td></tr>
      <tr><td class="p-2 font-bold border-r border-slate-200 dark:border-slate-700">3</td><td class="p-2">$(s + 1)(s^2 + s + 1)$</td></tr>
      <tr><td class="p-2 font-bold border-r border-slate-200 dark:border-slate-700">4</td><td class="p-2">$(s^2 + 0.7654s + 1)(s^2 + 1.8478s + 1)$</td></tr>
      <tr><td class="p-2 font-bold border-r border-slate-200 dark:border-slate-700">5</td><td class="p-2">$(s + 1)(s^2 + 0.6180s + 1)(s^2 + 1.6180s + 1)$</td></tr>
    </tbody>
  </table>
</div>

<h5 class="text-sm font-bold text-slate-900 dark:text-white mt-6 mb-2">2. Aproximación de Chebyshev Tipo I (Equirriple)</h5>
<p class="mb-2">La aproximación de Pafnuti Chebyshev distribuye el error de forma óptima tolerando un riple uniforme $\\alpha_p$ en la banda de paso a cambio de lograr una pendiente de corte mucho más abrupta en la banda de transición que Butterworth para un mismo orden $n$:</p>
$$\\mathbf{|H(j\\omega)|^2 = \\frac{1}{1 + \\epsilon^2 T_n^2\\left( \\frac{\\omega}{\\omega_p} \\right)}}, \\qquad \\epsilon = \\sqrt{10^{0.1 \\alpha_p} - 1}$$
<ul class="list-disc pl-5 space-y-1 text-xs sm:text-sm mb-3">
  <li>$T_n(\\omega)$ son los <strong>polinomios ortogonales de Chebyshev</strong> de primera especie:
    $$T_n(\\omega) = \\begin{cases} \\cos(n \\arccos \\omega) & |\\omega| \\le 1 \\quad (\\text{Banda de paso}) \\\\ \\cosh(n \\operatorname{arcosh} \\omega) & |\\omega| > 1 \\quad (\\text{Banda de rechazo}) \\end{cases}$$
  </li>
  <li><strong>Relación de Recurrencia Fundamental:</strong>
    $$T_0(\\omega) = 1, \\quad T_1(\\omega) = \\omega \\implies \\mathbf{T_n(\\omega) = 2\\omega T_{n-1}(\\omega) - T_{n-2}(\\omega)}$$
    $$T_2(\\omega) = 2\\omega^2 - 1, \\quad T_3(\\omega) = 4\\omega^3 - 3\\omega, \\quad T_4(\\omega) = 8\\omega^4 - 8\\omega^2 + 1, \\quad T_5(\\omega) = 16\\omega^5 - 20\\omega^3 + 5\\omega$$
  </li>
  <li><strong>Cálculo del orden mínimo de Chebyshev:</strong>
    $$n \\ge \\frac{\\operatorname{arcosh}\\left( \\sqrt{\\frac{10^{0.1 \\alpha_s} - 1}{10^{0.1 \\alpha_p} - 1}} \\right)}{\\operatorname{arcosh}\\left( \\frac{\\omega_s}{\\omega_p} \\right)}$$
    donde $\\operatorname{arcosh}(x) = \\ln\\left(x + \\sqrt{x^2 - 1}\\right)$.
  </li>
</ul>

          `
        },
        {
          id: 'tc3-u1-normalizacion-retardo',
          titulo: '1.4 Normalización y Desnormalización de Redes y Retardo de Grupo',
          contenido: `
<h5 class="text-sm font-bold text-slate-900 dark:text-white mt-2 mb-2">Escalas de Normalización de Impedancia y Frecuencia</h5>
<p class="mb-2">Para evitar operar con números astronómicos o infinitesimales (faradios, nanohenrios, megaohmios) durante el diseño algebraico, se eligen una <strong>pulsación de referencia $\\omega_0$</strong> [rad/s] (donde $\\omega_0 = 2\\pi f_0$) y una <strong>resistencia de referencia $R_0$</strong> [$\\Omega$]. Los dos factores de escala fundamentales son:</p>

<div class="p-3 my-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-950 dark:text-cyan-200 text-xs sm:text-sm">
  <span class="font-bold font-mono">Factores de Escala Universales:</span>
  $$\\mathbf{k_f = \\omega_0 = 2\\pi f_0} \\quad \\text{[rad/s]}, \\qquad \\mathbf{k_z = R_0} \\quad [\\Omega]$$
  <ul class="list-disc pl-5 mt-2 space-y-1 text-xs">
    <li><strong>Frecuencia normalizada adimensional:</strong> $\\Omega = \\frac{\\omega}{\\omega_0} = \\frac{\\omega}{k_f}$ (donde $\\Omega = 1$ corresponde a la pulsación de referencia o corte).</li>
    <li><strong>Variable compleja $s$ normalizada:</strong> $s_n = \\frac{s}{\\omega_0} = \\frac{s}{k_f}$.</li>
    <li><strong>Impedancia normalizada:</strong> $z_n(s_n) = \\frac{Z(s)}{R_0} = \\frac{Z(s)}{k_z}$.</li>
  </ul>
</div>

<div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 my-3 text-xs">
  <div class="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
    <strong class="text-blue-600 dark:text-blue-400">Resistencia:</strong><br>
    Valor normalizado: $r_n = \\frac{R}{R_0}$<br>
    <span class="font-bold text-slate-900 dark:text-white mt-1 block">$\\mathbf{R = r_n \\cdot R_0 = r_n \\cdot k_z}$</span>
  </div>
  <div class="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
    <strong class="text-emerald-600 dark:text-emerald-400">Inductor:</strong><br>
    Valor normalizado: $l_n = \\frac{L \\cdot \\omega_0}{R_0} = \\frac{L \\cdot k_f}{k_z}$<br>
    <span class="font-bold text-slate-900 dark:text-white mt-1 block">$\\mathbf{L = l_n \\frac{R_0}{\\omega_0} = l_n \\frac{k_z}{k_f}}$</span>
  </div>
  <div class="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
    <strong class="text-purple-600 dark:text-purple-400">Capacitor:</strong><br>
    Valor normalizado: $c_n = C \\cdot \\omega_0 \\cdot R_0 = C \\cdot k_f \\cdot k_z$<br>
    <span class="font-bold text-slate-900 dark:text-white mt-1 block">$\\mathbf{C = \\frac{c_n}{\\omega_0 R_0} = \\frac{c_n}{k_f k_z}}$</span>
  </div>
</div>

<h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Retardo de Grupo (Group Delay)</h5>
<p class="mb-2">El retardo de grupo $\\tau_g(\\omega)$ cuantifica la demora temporal experimentada por la envolvente de una señal modulada al atravesar la red:</p>
$$\\mathbf{\\tau_g(\\omega) = -\\frac{d\\phi(\\omega)}{d\\omega}}$$
<p class="text-xs text-slate-600 dark:text-slate-400">Si $\\tau_g(\\omega)$ es constante en la banda de paso, la fase $\\phi(\\omega)$ es estrictamente lineal y la señal no experimenta distorsión de fase (propiedad optimizada por la aproximación de Bessel/Thomson mediante polinomios de Bessel).</p>
<div class="pt-2 flex justify-end">
  <button onclick="filtrarUnidad('tc3-u1'); volverAEjercicios();" class="text-xs font-mono text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1 font-semibold">
    <span>Practicar ejercicios interactivos de la Unidad 1</span>
    <span>→</span>
  </button>
</div>

          `
        },
        {
          id: 'tc3-u1-modos-frecuenciales-bode-nyquist',
          titulo: '1.5 Modos de Representación Frecuencial: Diagramas de Bode Asintóticos y Polares de Nyquist',
          contenido: `
<p class="mb-3">En el análisis y diseño de redes lineales, la respuesta en régimen permanente ante excitaciones senoidales se describe mediante la <strong>función de respuesta en frecuencia</strong> $H(j\\omega) = |H(j\\omega)| e^{j \\phi(\\omega)}$. Para representar y predecir el comportamiento dinámico a lo largo de amplios rangos espectrales, se utilizan dos representaciones gráficas fundamentales: los <strong>Diagramas Logarítmicos de Bode</strong> y los <strong>Gráficos Polares de Nyquist</strong>.</p>

<div class="p-4 my-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-950 dark:text-cyan-200">
  <h5 class="font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
    <span>📊</span> Fundamento de la Escala Logarítmica de Bode
  </h5>
  <p class="text-xs">Al descomponer una función racional $H(s)$ factorizada en polos y ceros:
  $$H(s) = K \\cdot \\frac{\\prod (1 + s/z_i)}{\\prod (1 + s/p_k)}$$
  Al calcular su logaritmo decimal y multiplicar por $20$, los productos y cocientes de factores se transforman en <strong>sumas y restas algebraicas de trazas independientes</strong>:
  $$\\mathbf{|H(j\\omega)|_{\\text{dB}} = 20\\log_{10}|K| + \\sum 20\\log_{10}|1 + j\\omega/z_i| - \\sum 20\\log_{10}|1 + j\\omega/p_k|}$$
  $$\\mathbf{\\phi(\\omega) = \\arg(K) + \\sum \\arctan(\\omega/z_i) - \\sum \\arctan(\\omega/p_k)}$$
  </p>
</div>


<div class="my-4 p-3 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xs">
  <span class="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-2 text-center">
    📐 Diagrama de Bode de Magnitud y Fase: Trazas Asintóticas y Curvas Exactas
  </span>
  <div class="flex justify-center overflow-x-auto py-1">
    <svg class="w-full h-auto max-w-4xl mx-auto select-none" viewBox="0 0 860 300" xmlns="http://www.w3.org/2000/svg">
  <!-- Marco general -->
  <rect x="10" y="10" width="840" height="280" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
  <text x="430" y="28" font-size="12" font-family="system-ui, sans-serif" font-weight="bold" fill="#0f172a" text-anchor="middle">
    Diagrama de Bode de Magnitud y Fase: Polo Simple H(s) = 1 / (1 + s/ω₀)
  </text>

  <!-- PANEL IZQUIERDO: Magnitud |H(jw)|dB -->
  <g transform="translate(25, 40)">
    <rect x="0" y="0" width="385" height="230" rx="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/>
    <text x="192" y="18" font-size="11" font-family="system-ui, sans-serif" font-weight="bold" fill="#1e40af" text-anchor="middle">
      Curva de Magnitud [dB] vs Pulsación Logarítmica
    </text>

    <!-- Ejes coordenados -->
    <line x1="50" y1="60" x2="360" y2="60" stroke="#475569" stroke-width="1.5"/>
    <line x1="50" y1="210" x2="50" y2="40" stroke="#475569" stroke-width="1.5"/>
    <text x="40" y="64" font-size="10" font-family="monospace" font-weight="bold" fill="#059669">0 dB</text>
    <text x="40" y="125" font-size="10" font-family="monospace" fill="#dc2626">-20 dB</text>
    <text x="40" y="185" font-size="10" font-family="monospace" fill="#dc2626">-40 dB</text>
    <text x="365" y="64" font-size="10" font-family="monospace" fill="#0f172a">ω</text>

    <!-- Marcas de frecuencia: 0.1w0 (x=110), w0 (x=190), 10w0 (x=270), 100w0 (x=350) -->
    <line x1="110" y1="57" x2="110" y2="63" stroke="#475569" stroke-width="1.5"/>
    <text x="110" y="75" font-size="9.5" font-family="monospace" fill="#475569" text-anchor="middle">0.1ω₀</text>

    <line x1="190" y1="45" x2="190" y2="200" stroke="#94a3b8" stroke-width="1" stroke-dasharray="2,2"/>
    <text x="190" y="75" font-size="10" font-family="monospace" font-weight="bold" fill="#2563eb" text-anchor="middle">ω₀ (Corte)</text>

    <line x1="270" y1="57" x2="270" y2="63" stroke="#475569" stroke-width="1.5"/>
    <text x="270" y="75" font-size="9.5" font-family="monospace" fill="#475569" text-anchor="middle">10ω₀</text>

    <!-- Asintota ideal (Verde trazo punteado): 0 dB hasta w0, luego pendiente -20 dB/dec -->
    <line x1="50" y1="60" x2="190" y2="60" stroke="#059669" stroke-width="2" stroke-dasharray="4,4"/>
    <line x1="190" y1="60" x2="270" y2="120" stroke="#059669" stroke-width="2" stroke-dasharray="4,4"/>
    <line x1="270" y1="120" x2="350" y2="180" stroke="#059669" stroke-width="2" stroke-dasharray="4,4"/>
    <text x="280" y="105" font-size="9.5" font-family="monospace" font-weight="bold" fill="#059669">-20 dB/década</text>

    <!-- Curva real continua (Azul) -->
    <path d="M 50,60 C 120,60 160,63 190,69 C 220,78 250,110 270,123 C 310,150 335,170 355,182" fill="none" stroke="#2563eb" stroke-width="2.6"/>

    <!-- Error exacto a w0: -3.01 dB -->
    <line x1="190" y1="60" x2="190" y2="69" stroke="#dc2626" stroke-width="2"/>
    <circle cx="190" cy="69" r="3.5" fill="#dc2626"/>
    <text x="200" y="55" font-size="9.5" font-family="monospace" font-weight="bold" fill="#dc2626">Error: -3 dB</text>

    <rect x="15" y="195" width="355" height="25" rx="4" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1"/>
    <text x="192" y="211" font-size="9.5" font-family="system-ui, sans-serif" fill="#334155" text-anchor="middle">
      Atenuación exacta: |H(jω₀)| = 1/√2 ⟹ 20 log₁₀(1/√2) = -3.01 dB
    </text>
  </g>

  <!-- PANEL DERECHO: Fase phi(w) en grados -->
  <g transform="translate(435, 40)">
    <rect x="0" y="0" width="395" height="230" rx="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/>
    <text x="197" y="18" font-size="11" font-family="system-ui, sans-serif" font-weight="bold" fill="#7c3aed" text-anchor="middle">
      Curva de Fase [Grados] vs Pulsación Logarítmica
    </text>

    <!-- Ejes coordenados -->
    <line x1="50" y1="60" x2="370" y2="60" stroke="#475569" stroke-width="1.5"/>
    <line x1="50" y1="210" x2="50" y2="40" stroke="#475569" stroke-width="1.5"/>
    <text x="40" y="64" font-size="10" font-family="monospace" font-weight="bold" fill="#059669">0°</text>
    <text x="40" y="125" font-size="10" font-family="monospace" fill="#2563eb">-45°</text>
    <text x="40" y="185" font-size="10" font-family="monospace" fill="#dc2626">-90°</text>
    <text x="375" y="64" font-size="10" font-family="monospace" fill="#0f172a">ω</text>

    <!-- Marcas de frecuencia -->
    <line x1="110" y1="45" x2="110" y2="200" stroke="#94a3b8" stroke-width="1" stroke-dasharray="2,2"/>
    <text x="110" y="52" font-size="9.5" font-family="monospace" fill="#475569" text-anchor="middle">0.1ω₀</text>

    <line x1="190" y1="45" x2="190" y2="200" stroke="#94a3b8" stroke-width="1" stroke-dasharray="2,2"/>
    <text x="190" y="52" font-size="10" font-family="monospace" font-weight="bold" fill="#2563eb" text-anchor="middle">ω₀</text>

    <line x1="270" y1="45" x2="270" y2="200" stroke="#94a3b8" stroke-width="1" stroke-dasharray="2,2"/>
    <text x="270" y="52" font-size="9.5" font-family="monospace" fill="#475569" text-anchor="middle">10ω₀</text>

    <!-- Asintota ideal de fase (Verde trazo punteado): 0° hasta 0.1w0, rampa a -90° en 10w0 (-45°/dec) -->
    <line x1="50" y1="60" x2="110" y2="60" stroke="#059669" stroke-width="2" stroke-dasharray="4,4"/>
    <line x1="110" y1="60" x2="270" y2="180" stroke="#059669" stroke-width="2" stroke-dasharray="4,4"/>
    <line x1="270" y1="180" x2="360" y2="180" stroke="#059669" stroke-width="2" stroke-dasharray="4,4"/>
    <text x="240" y="105" font-size="9.5" font-family="monospace" font-weight="bold" fill="#059669">-45°/década</text>

    <!-- Curva real continua de fase phi(w) = -arctan(w/w0) (Purpura) -->
    <path d="M 50,60 C 90,61 110,65 140,85 C 165,102 175,115 190,120 C 205,125 215,138 240,155 C 270,175 290,179 360,180" fill="none" stroke="#9333ea" stroke-width="2.6"/>

    <!-- Punto exacto a w0: -45° -->
    <circle cx="190" cy="120" r="4" fill="#2563eb"/>
    <text x="200" y="130" font-size="10" font-family="monospace" font-weight="bold" fill="#2563eb">Exacto: -45°</text>

    <rect x="15" y="195" width="365" height="25" rx="4" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1"/>
    <text x="197" y="211" font-size="9.5" font-family="system-ui, sans-serif" fill="#334155" text-anchor="middle">
      Fase exacta: φ(ω₀) = -arctan(1) = -45.0° (en 0.1ω₀: -5.7°, en 10ω₀: -84.3°)
    </text>
  </g>
</svg>
  </div>
</div>


<h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">1. Factores Elementales y Trazas Asintóticas de Bode</h5>
<div class="overflow-x-auto my-3">
  <table class="w-full text-xs text-left border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
    <thead class="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
      <tr>
        <th class="p-2 border-b">Factor Canónico</th>
        <th class="p-2 border-b">Asíntota de Magnitud [dB]</th>
        <th class="p-2 border-b">Asíntota de Fase [°]</th>
        <th class="p-2 border-b">Corrección Exacta en $\\omega_0$</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-200 dark:divide-slate-800 font-mono text-[11px]">
      <tr>
        <td class="p-2 font-bold text-blue-600 dark:text-blue-400">Ganancia $K$</td>
        <td class="p-2">$20\\log_{10}|K|$ (plana)</td>
        <td class="p-2">$0^\\circ$ ($K>0$) ó $-180^\\circ$ ($K<0$)</td>
        <td class="p-2">Exacta (0 dB, 0°)</td>
      </tr>
      <tr>
        <td class="p-2 font-bold text-red-600 dark:text-red-400">Polo en origen $\\frac{1}{s}$</td>
        <td class="p-2">$-20\\text{ dB/década}$ (cruza 0 dB en $\\omega=1$)</td>
        <td class="p-2">$-90^\\circ$ (constante)</td>
        <td class="p-2">Exacta en todo $\\omega$</td>
      </tr>
      <tr>
        <td class="p-2 font-bold text-emerald-600 dark:text-emerald-400">Cero en origen $s$</td>
        <td class="p-2">$+20\\text{ dB/década}$ (cruza 0 dB en $\\omega=1$)</td>
        <td class="p-2">$+90^\\circ$ (constante)</td>
        <td class="p-2">Exacta en todo $\\omega$</td>
      </tr>
      <tr>
        <td class="p-2 font-bold text-amber-600 dark:text-amber-400">Polo simple $\\frac{1}{1 + s/\\omega_0}$</td>
        <td class="p-2">$0\\text{ dB}$ ($\\omega < \\omega_0$), $-20\\text{ dB/déc}$ ($\\omega > \\omega_0$)</td>
        <td class="p-2">$0^\\circ$ ($\\le 0.1\\omega_0$), rampa $-45^\\circ/\\text{déc}$, $-90^\\circ$ ($\\ge 10\\omega_0$)</td>
        <td class="p-2 text-rose-600 font-bold">$-3.01\\text{ dB}$, $-45.0^\\circ$</td>
      </tr>
      <tr>
        <td class="p-2 font-bold text-cyan-600 dark:text-cyan-400">Cero simple $1 + s/\\omega_z$</td>
        <td class="p-2">$0\\text{ dB}$ ($\\omega < \\omega_z$), $+20\\text{ dB/déc}$ ($\\omega > \\omega_z$)</td>
        <td class="p-2">$0^\\circ$ ($\\le 0.1\\omega_z$), rampa $+45^\\circ/\\text{déc}$, $+90^\\circ$ ($\\ge 10\\omega_z$)</td>
        <td class="p-2 text-emerald-600 font-bold">$+3.01\\text{ dB}$, $+45.0^\\circ$</td>
      </tr>
      <tr>
        <td class="p-2 font-bold text-purple-600 dark:text-purple-400">Factor 2° orden $\\frac{1}{1 + \\frac{s}{Q\\omega_0} + \\frac{s^2}{\\omega_0^2}}$</td>
        <td class="p-2">$0\\text{ dB}$ ($\\omega < \\omega_0$), $-40\\text{ dB/déc}$ ($\\omega > \\omega_0$)</td>
        <td class="p-2">$0^\\circ \\to -180^\\circ$, $-90^\\circ$ en $\\omega_0$</td>
        <td class="p-2">Pico: $M_r = \\frac{Q}{\\sqrt{1 - 1/(4Q^2)}}$</td>
      </tr>
    </tbody>
  </table>
</div>

<h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">2. Corrección de Error entre Trazas Asintóticas y Curvas Reales</h5>
<p class="mb-2 text-xs sm:text-sm">Las asíntotas lineales de Bode son aproximaciones prácticas. La función analítica exacta para un polo simple $H(j\\omega) = \\frac{1}{1 + j\\omega/\\omega_0}$ posee un desvío conocido:</p>
<ul class="list-disc pl-5 space-y-1 text-xs mb-3">
  <li><strong>En la pulsación de corte ($\\omega = \\omega_0$):</strong> La atenuación real es $|H(j\\omega_0)| = \\frac{1}{\\sqrt{1 + 1}} = \\frac{1}{\\sqrt{2}} \\implies 20\\log_{10}(1/\\sqrt{2}) = -3.0103\\text{ dB}$. La asíntota predice $0\\text{ dB}$, por lo que el error es exactamente de $\\mathbf{-3\\text{ dB}}$.</li>
  <li><strong>Una octava por debajo ($\\omega = 0.5\\omega_0$) y por encima ($\\omega = 2\\omega_0$):</strong> El error respecto a la asíntota es de $\\mathbf{-0.97\\text{ dB}} \\approx -1\\text{ dB}$.</li>
  <li><strong>Una década por debajo ($\\omega = 0.1\\omega_0$) y por encima ($\\omega = 10\\omega_0$):</strong> El error de módulo es despreciable: $-0.043\\text{ dB}$.</li>
  <li><strong>Desvío de fase:</strong> En $\\omega = \\omega_0$ la fase es exactamente $-45^\\circ$. En los vértices de la rampa ($0.1\\omega_0$ y $10\\omega_0$), la fase real es $-\\arctan(0.1) = -5.71^\\circ$ y $-\\arctan(10) = -84.29^\\circ$, dando un error máximo de $\\mathbf{5.71^\\circ}$.</li>
</ul>

<h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">3. Gráficos Polares de Nyquist y Márgenes de Estabilidad</h5>
<p class="mb-2 text-xs sm:text-sm">El <strong>Diagrama Polar o Gráfico de Nyquist</strong> traza el lugar geométrico del vector complejo $H(j\\omega) = \\text{Re}[H(j\\omega)] + j \\text{Im}[H(j\\omega)]$ en el plano complejo al variar $\\omega$ de $0$ a $+\\infty$:</p>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3 my-3">
  <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs">
    <span class="font-bold text-cyan-600 dark:text-cyan-400 block mb-1">Morfología Polar</span>
    <ul class="list-disc pl-4 space-y-1 text-slate-600 dark:text-slate-300">
      <li><strong>Polo simple:</strong> Semicírculo en el 4to cuadrante con diámetro unitario sobre el eje real entre $(1, 0)$ en $\\omega=0$ y el origen $(0,0)$ cuando $\\omega \\to \\infty$.</li>
      <li><strong>Segundo orden subamortiguado:</strong> Sale de $(1,0)$, cruza el eje imaginario negativo en $\\omega_0$ en el punto $(0, -jQ)$ y entra tangencialmente al origen formando un lazo circular ensanchado.</li>
    </ul>
  </div>
  <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs">
    <span class="font-bold text-amber-600 dark:text-amber-400 block mb-1">Márgenes de Estabilidad Relativa</span>
    <ul class="list-disc pl-4 space-y-1 text-slate-600 dark:text-slate-300">
      <li><strong>Margen de Ganancia ($MG$):</strong> Inverso de la magnitud $|G(j\\omega_{180})|$ en la pulsación donde la fase cruza $-180^\\circ$: $MG = \\frac{1}{|G(j\\omega_{180})|}$ ($MG_{\\text{dB}} = -20\\log_{10}|G(j\\omega_{180})|$).</li>
      <li><strong>Margen de Fase ($MF$):</strong> Desfase remanente respecto a $-180^\\circ$ en la pulsación de cruce de ganancia $\\omega_c$ donde $|G(j\\omega_c)| = 1$ (0 dB): $\\mathbf{MF = 180^\\circ + \\phi(\\omega_c)}$.</li>
    </ul>
  </div>
</div>

          `
        }
      ]
    },

    // ========================================================================
    // UNIDAD 2: REDES ACTIVAS CON OPERACIONALES, GIC, FDNR Y CAPACITORES CONMUTADOS
    // ========================================================================
    {
      id: 'tc3-u2',
      numero: 2,
      titulo: 'Unidad 2: Redes Activas con Operacionales, GIC, FDNR y Capacitores Conmutados',
      icono: '⚡',
      badgeColor: 'border-amber-500/40 bg-amber-950/40 text-amber-300',
      introduccion: 'Esta unidad abarca el estudio exhaustivo de las redes activas basadas en amplificadores operacionales: desde los modelos reales y las topologías lineales básicas (inversor, no inversor, instrumentación, derivador, integrador, OTA, rotadores de fase y conversores de impedancia negativa), hasta la síntesis de componentes que no existen en la naturaleza (inductores con GIC de Antoniou, elemento FDNR de Bruton) y filtros integrados por Capacitores Conmutados.',
      secciones: [
        {
          id: 'tc3-u2-opamp-modelos-topologias-lineales',
          titulo: '2.1 El Amplificador Operacional: Modelos y Topologías Lineales Fundamentales',
          contenido: `
<p class="mb-3">El <strong>amplificador operacional (Op-Amp)</strong> es el bloque activo central en la síntesis de filtros activos y convertidores de inmitancia. Se analiza primero bajo el modelo ideal y posteriormente incorporando sus restricciones dinámicas y no linealidades de continua.</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-3 my-3">
  <div class="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-950 dark:text-blue-200 text-xs">
    <h6 class="font-bold text-xs uppercase tracking-wider mb-1">Modelo Ideal (Reglas de Oro)</h6>
    <ul class="list-disc pl-4 space-y-1">
      <li>Ganancia a lazo abierto infinita: $A_{OL} \\to \\infty$.</li>
      <li>Impedancia de entrada infinita: $R_{in} \\to \\infty \\implies I^+ = I^- = 0$.</li>
      <li>Impedancia de salida nula: $R_{out} \\to 0$.</li>
      <li>Ancho de banda infinito: $BW \\to \\infty$.</li>
      <li>Rechazo de modo común infinito: $\\text{CMRR} \\to \\infty$.</li>
      <li><strong>Principio de Cortocircuito Virtual:</strong> Con realimentación negativa estable, el lazo fuerza $V^+ - V^- = 0 \\implies V^- = V^+$.</li>
    </ul>
  </div>

  <div class="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-950 dark:text-amber-200 text-xs">
    <h6 class="font-bold text-xs uppercase tracking-wider mb-1">Limitaciones del Op-Amp Real</h6>
    <ul class="list-disc pl-4 space-y-1">
      <li><strong>Respuesta de 1 polo:</strong> $A_{OL}(s) = \\frac{A_0}{1 + s/\\omega_b}$ con $GBW = A_0 \\cdot \\omega_b = \\omega_t$.</li>
      <li><strong>Tensión y Corriente de Offset:</strong> Tensión de desbalance de entrada $V_{OS}$ y corrientes de polarización $I_B = (I_B^+ + I_B^-)/2$, $I_{OS} = |I_B^+ - I_B^-|$.</li>
      <li><strong>Slew Rate ($SR$):</strong> Máxima tasa de variación de la tensión de salida: $SR = \\max|dv_o/dt|$ [$\\text{V}/\\mu\\text{s}$]. Limita la amplitud a alta frecuencia sin distorsión senoidal a $f_{\\max} = \\frac{SR}{2\\pi V_p}$.</li>
    </ul>
  </div>
</div>



<div class="my-4 p-3 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xs">
  <span class="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-3 text-center">
    📐 Topologías Lineales con Op-Amp e Instrumentación INA de 3 Op-Amps
  </span>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
    <!-- PANEL 1: INVERSOR -->
    <div class="p-3 rounded-xl bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-2xs">
      <h6 class="text-xs font-bold text-slate-800 dark:text-slate-200 text-center mb-2">Amplificador Inversor</h6>
      <div class="flex justify-center items-center py-1">
        <svg class="w-full h-auto max-w-[240px] mx-auto select-none" viewBox="0 0 250 155" xmlns="http://www.w3.org/2000/svg">
  <!-- Entrada Vin -->
  <circle cx="20" cy="85" r="3.5" fill="#2563eb"/>
  <text x="20" y="74" font-size="11" font-family="monospace" font-weight="bold" fill="#2563eb" text-anchor="middle">V_in</text>
  <line x1="20" y1="85" x2="45" y2="85" stroke="#334155" stroke-width="1.8"/>

  <!-- R1 -->
  <rect x="45" y="78" width="35" height="14" fill="#ffffff" stroke="#334155" stroke-width="1.8"/>
  <text x="62.5" y="72" font-size="10" font-family="monospace" font-weight="bold" fill="#0f172a" text-anchor="middle">R₁</text>
  <line x1="80" y1="85" x2="105" y2="85" stroke="#334155" stroke-width="1.8"/>

  <!-- Nodo inversor (-) -->
  <circle cx="105" cy="85" r="3.5" fill="#334155"/>
  <line x1="105" y1="85" x2="130" y2="85" stroke="#334155" stroke-width="1.8"/>

  <!-- Op-Amp -->
  <polygon points="130,65 130,135 185,100" fill="#ffffff" stroke="#0f172a" stroke-width="1.8"/>
  <text x="135" y="89" font-size="12" font-family="monospace" font-weight="bold" fill="#0f172a">−</text>
  <text x="135" y="123" font-size="12" font-family="monospace" font-weight="bold" fill="#0f172a">+</text>

  <!-- Terminal (+) a masa -->
  <line x1="130" y1="118" x2="105" y2="118" stroke="#334155" stroke-width="1.8"/>
  <line x1="105" y1="118" x2="105" y2="138" stroke="#334155" stroke-width="1.8"/>
  <line x1="95" y1="138" x2="115" y2="138" stroke="#334155" stroke-width="1.8"/>
  <line x1="98" y1="142" x2="112" y2="142" stroke="#334155" stroke-width="1.4"/>
  <line x1="102" y1="146" x2="108" y2="146" stroke="#334155" stroke-width="1.2"/>

  <!-- Lazo de realimentacion con Rf -->
  <line x1="105" y1="85" x2="105" y2="40" stroke="#334155" stroke-width="1.8"/>
  <line x1="105" y1="40" x2="125" y2="40" stroke="#334155" stroke-width="1.8"/>
  <rect x="125" y="33" width="35" height="14" fill="#ffffff" stroke="#334155" stroke-width="1.8"/>
  <text x="142.5" y="27" font-size="10" font-family="monospace" font-weight="bold" fill="#0f172a" text-anchor="middle">R_f</text>
  <line x1="160" y1="40" x2="200" y2="40" stroke="#334155" stroke-width="1.8"/>
  <line x1="200" y1="40" x2="200" y2="100" stroke="#334155" stroke-width="1.8"/>

  <!-- Salida Vo -->
  <line x1="185" y1="100" x2="230" y2="100" stroke="#334155" stroke-width="1.8"/>
  <circle cx="200" cy="100" r="3.5" fill="#334155"/>
  <circle cx="230" cy="100" r="3.5" fill="#059669"/>
  <text x="230" y="89" font-size="11" font-family="monospace" font-weight="bold" fill="#059669" text-anchor="middle">V_o</text>
</svg>
      </div>
      <div class="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-center mt-2">
        $$\\mathbf{\\frac{V_o}{V_{in}} = - \\frac{R_f}{R_1}}$$
        <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-1">$R_{in} = R_1, \\quad R_{out} \\approx 0$</p>
      </div>
    </div>

    <!-- PANEL 2: NO INVERSOR -->
    <div class="p-3 rounded-xl bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-2xs">
      <h6 class="text-xs font-bold text-slate-800 dark:text-slate-200 text-center mb-2">Amplificador No Inversor</h6>
      <div class="flex justify-center items-center py-1">
        <svg class="w-full h-auto max-w-[240px] mx-auto select-none" viewBox="0 0 250 155" xmlns="http://www.w3.org/2000/svg">
  <!-- Entrada Vin directa al terminal (+) en la pista inferior -->
  <circle cx="20" cy="118" r="3.5" fill="#2563eb"/>
  <text x="20" y="107" font-size="11" font-family="monospace" font-weight="bold" fill="#2563eb" text-anchor="middle">V_in</text>
  <line x1="20" y1="118" x2="130" y2="118" stroke="#334155" stroke-width="1.8"/>

  <!-- Op-Amp -->
  <polygon points="130,65 130,135 185,100" fill="#ffffff" stroke="#0f172a" stroke-width="1.8"/>
  <text x="135" y="89" font-size="12" font-family="monospace" font-weight="bold" fill="#0f172a">−</text>
  <text x="135" y="123" font-size="12" font-family="monospace" font-weight="bold" fill="#0f172a">+</text>

  <!-- Conexión desde (-) hacia el divisor en la pista superior -->
  <line x1="130" y1="85" x2="95" y2="85" stroke="#334155" stroke-width="1.8"/>
  <line x1="95" y1="85" x2="95" y2="40" stroke="#334155" stroke-width="1.8"/>
  <circle cx="95" cy="40" r="3.5" fill="#334155"/>

  <!-- Rama izquierda: R1 hacia masa en la parte superior (NUNCA cruza Vin) -->
  <line x1="95" y1="40" x2="80" y2="40" stroke="#334155" stroke-width="1.8"/>
  <rect x="45" y="33" width="35" height="14" fill="#ffffff" stroke="#334155" stroke-width="1.8"/>
  <text x="62.5" y="27" font-size="10" font-family="monospace" font-weight="bold" fill="#0f172a" text-anchor="middle">R₁</text>
  <line x1="45" y1="40" x2="25" y2="40" stroke="#334155" stroke-width="1.8"/>
  <line x1="25" y1="40" x2="25" y2="58" stroke="#334155" stroke-width="1.8"/>
  <line x1="17" y1="58" x2="33" y2="58" stroke="#334155" stroke-width="1.8"/>
  <line x1="20" y1="62" x2="30" y2="62" stroke="#334155" stroke-width="1.4"/>
  <line x1="23" y1="66" x2="27" y2="66" stroke="#334155" stroke-width="1.2"/>

  <!-- Rama derecha: Rf hacia la salida -->
  <line x1="95" y1="40" x2="125" y2="40" stroke="#334155" stroke-width="1.8"/>
  <rect x="125" y="33" width="35" height="14" fill="#ffffff" stroke="#334155" stroke-width="1.8"/>
  <text x="142.5" y="27" font-size="10" font-family="monospace" font-weight="bold" fill="#0f172a" text-anchor="middle">R_f</text>
  <line x1="160" y1="40" x2="200" y2="40" stroke="#334155" stroke-width="1.8"/>
  <line x1="200" y1="40" x2="200" y2="100" stroke="#334155" stroke-width="1.8"/>

  <!-- Salida Vo -->
  <line x1="185" y1="100" x2="230" y2="100" stroke="#334155" stroke-width="1.8"/>
  <circle cx="200" cy="100" r="3.5" fill="#334155"/>
  <circle cx="230" cy="100" r="3.5" fill="#059669"/>
  <text x="230" y="89" font-size="11" font-family="monospace" font-weight="bold" fill="#059669" text-anchor="middle">V_o</text>
</svg>
      </div>
      <div class="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-center mt-2">
        $$\\mathbf{\\frac{V_o}{V_{in}} = 1 + \\frac{R_f}{R_1}}$$
        <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Buffer si $R_f = 0, R_1 \\to \\infty \\implies V_o = V_{in}$</p>
      </div>
    </div>

    <!-- PANEL 3: INA DE 3 OP-AMPS -->
    <div class="p-3 rounded-xl bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-2xs">
      <h6 class="text-xs font-bold text-slate-800 dark:text-slate-200 text-center mb-2">Amplificador de Instrumentación (INA)</h6>
      <div class="flex justify-center items-center py-1">
        <svg class="w-full h-auto max-w-[240px] mx-auto select-none" viewBox="0 0 250 155" xmlns="http://www.w3.org/2000/svg">
  <!-- Entradas diferenciales V1 y V2 -->
  <circle cx="15" cy="45" r="3.5" fill="#2563eb"/>
  <text x="15" y="34" font-size="10" font-family="monospace" font-weight="bold" fill="#2563eb" text-anchor="middle">V₁</text>
  <line x1="15" y1="45" x2="35" y2="45" stroke="#334155" stroke-width="1.8"/>

  <circle cx="15" cy="130" r="3.5" fill="#2563eb"/>
  <text x="15" y="145" font-size="10" font-family="monospace" font-weight="bold" fill="#2563eb" text-anchor="middle">V₂</text>
  <line x1="15" y1="130" x2="35" y2="130" stroke="#334155" stroke-width="1.8"/>

  <!-- Bloques buffers OA1 y OA2 -->
  <rect x="35" y="30" width="45" height="30" rx="4" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="57.5" y="49" font-size="10" font-family="monospace" font-weight="bold" fill="#1d4ed8" text-anchor="middle">OA₁</text>

  <rect x="35" y="115" width="45" height="30" rx="4" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="57.5" y="134" font-size="10" font-family="monospace" font-weight="bold" fill="#1d4ed8" text-anchor="middle">OA₂</text>

  <!-- Resistencia Rg entre OA1 y OA2 -->
  <line x1="57.5" y1="60" x2="57.5" y2="73" stroke="#334155" stroke-width="1.5"/>
  <rect x="50.5" y="73" width="14" height="28" fill="#ffffff" stroke="#dc2626" stroke-width="1.5"/>
  <text x="36" y="91" font-size="10" font-family="monospace" font-weight="bold" fill="#dc2626">R_G</text>
  <line x1="57.5" y1="101" x2="57.5" y2="115" stroke="#334155" stroke-width="1.5"/>

  <!-- Líneas hacia OA3 -->
  <line x1="80" y1="45" x2="130" y2="73" stroke="#334155" stroke-width="1.5"/>
  <line x1="80" y1="130" x2="130" y2="103" stroke="#334155" stroke-width="1.5"/>

  <!-- Bloque OA3 Diferencial -->
  <polygon points="130,58 130,118 185,88" fill="#f8fafc" stroke="#0f172a" stroke-width="1.8"/>
  <text x="150" y="92" font-size="10" font-family="monospace" font-weight="bold" fill="#0f172a">OA₃</text>

  <!-- Salida Vo -->
  <line x1="185" y1="88" x2="230" y2="88" stroke="#334155" stroke-width="1.8"/>
  <circle cx="230" cy="88" r="3.5" fill="#059669"/>
  <text x="230" y="78" font-size="11" font-family="monospace" font-weight="bold" fill="#059669" text-anchor="middle">V_o</text>
</svg>
      </div>
      <div class="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-center mt-2">
        $$\\mathbf{V_o = \\left( 1 + \\frac{2R}{R_G} \\right) \\frac{R_4}{R_3} (V_2 - V_1)}$$
        <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-1">$\\text{CMRR} > 100\\text{ dB}, \\quad R_{in} \\to \\infty$</p>
      </div>
    </div>
  </div>
</div>



<h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">1. Análisis Sistemático de Topologías Lineales Fundamentales</h5>
<div class="space-y-3 my-3">
  <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm">
    <span class="font-bold text-blue-600 dark:text-blue-400 font-mono">A. Amplificador Inversor:</span>
    La señal entra por $R_1$ al terminal inversor ($-$), y el terminal $(+)$ está conectado a masa ($V^+ = 0$). Por cortocircuito virtual, $V^- = 0$ (<strong>masa virtual</strong>).
    $$I_{in} = \\frac{V_{in} - 0}{R_1} = - I_f = - \\frac{0 - V_o}{R_f} \\implies \\mathbf{\\frac{V_o}{V_{in}} = - \\frac{R_f}{R_1}}$$
    Impedancia de entrada: $\\mathbf{R_{in} = R_1}$ (carga a la fuente de excitación).
  </div>

  <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm">
    <span class="font-bold text-indigo-600 dark:text-indigo-400 font-mono">B. Amplificador No Inversor y Buffer Seguidor:</span>
    La señal ingresa directamente al terminal $(+)$ ($V^+ = V_{in}$). El divisor de tensión formado por $R_1$ y $R_f$ fija la tensión en el borne $(-)$ a $V^- = V_o \\frac{R_1}{R_1 + R_f}$. Igualando $V^- = V^+$:
    $$\\mathbf{\\frac{V_o}{V_{in}} = 1 + \\frac{R_f}{R_1}}$$
    Impedancia de entrada colosal: $\\mathbf{R_{in} \\approx R_{in,op} (1 + T) \\to \\infty}$. Si $R_f = 0$ y $R_1 = \\infty$, se obtiene el <strong>Seguidor de Tensión (Buffer)</strong> con $\\mathbf{V_o = V_{in}}$, ideal para desacoplar impedancias entre etapas en cascada sin introducir atenuación.
  </div>

  <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm">
    <span class="font-bold text-purple-600 dark:text-purple-400 font-mono">C. Amplificador Diferencial (Restador):</span>
    Aplica una tensión $V_1$ al terminal inversor vía $R_1$ con realimentación $R_2$, y $V_2$ al terminal no inversor vía un divisor $R_3-R_4$. Por superposición:
    $$V_o = -\\frac{R_2}{R_1} V_1 + \\left(1 + \\frac{R_2}{R_1}\\right) \\left(\\frac{R_4}{R_3 + R_4}\\right) V_2$$
    Si se cumple la condición de apareamiento exacto $\\mathbf{\\frac{R_2}{R_1} = \\frac{R_4}{R_3}}$:
    $$\\mathbf{V_o = \\frac{R_2}{R_1} (V_2 - V_1)}$$
    La tensión en modo común $V_{cm} = (V_1+V_2)/2$ se anula por completo en la salida ($A_{cm} = 0$).
  </div>

  <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm">
    <span class="font-bold text-rose-600 dark:text-rose-400 font-mono">D. Amplificador de Instrumentación Clásico de 3 Op-Amps (INA):</span>
    Resuelve la baja impedancia de entrada y la sensibilidad de apareamiento del restador simple mediante una etapa de entrada diferencial simétrica con dos op-amps y resistencia de ganancia flotante $R_G$:
    $$\\mathbf{V_o = \\left( 1 + \\frac{2R}{R_G} \\right) \\cdot \\frac{R_4}{R_3} \\cdot (V_2 - V_1)}$$
    <ul class="list-disc pl-5 mt-2 space-y-1 text-xs">
      <li><strong>Impedancia de entrada infinita</strong> en ambos terminales (la señal ve las puertas de los Op-Amps de entrada).</li>
      <li><strong>Ajuste de ganancia con un solo componente:</strong> Variando únicamente la resistencia pasiva flotante $R_G$ se modula la ganancia diferencial sin degradar el $\\text{CMRR}$ de la etapa de salida.</li>
      <li>Rechazo de modo común extraordinario: $\\mathbf{\\text{CMRR} > 100\\text{ dB} - 120\\text{ dB}}$.</li>
    </ul>
  </div>
</div>

          `
        },
        {
          id: 'tc3-u2-circuitos-lineales-rotadores-fase-allpass',
          titulo: '2.2 Circuitos de Procesamiento Lineal y Rotadores de Fase (All-Pass de 1° y 2° Orden)',
          contenido: `
<p class="mb-3">Los circuitos lineales operacionales no solo realizan amplificación estática, sino operaciones de <strong>cálculo integro-diferencial</strong> y transformaciones de fase independientes de la amplitud (<strong>filtros pasa-todo o rotadores de fase</strong>).</p>

<h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">1. Integradores y Derivadores: Ideal vs Práctico Compensado</h5>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3 my-3">
  <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-xs">
    <span class="font-bold text-blue-600 dark:text-blue-400 block mb-1">Integrador de Miller</span>
    <p class="mb-1"><strong>Ideal:</strong> Capacitor $C$ en la realimentación: $H(s) = -\\frac{1}{s R C}$. Posee polo en $s=0$ (ganancia infinita en continua $\\to$ satura ante mínimas tensiones de offset $V_{OS}$).</p>
    <p><strong>Compensado (Práctico):</strong> Se coloca una resistencia $R_f$ en paralelo con $C$.
    $$\\mathbf{H(s) = - \\frac{R_f / R_1}{1 + s R_f C}}$$
    Limita la ganancia en continua a $-R_f/R_1$. Para $\\omega \\gg \\frac{1}{R_f C}$ se comporta como un integrador puro con desfasaje de $+90^\\circ$ relativo a la inversión.</p>
  </div>

  <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-xs">
    <span class="font-bold text-amber-600 dark:text-amber-400 block mb-1">Derivador Activo</span>
    <p class="mb-1"><strong>Ideal:</strong> Capacitor $C$ en serie a la entrada: $H(s) = -s R_f C$. Posee un cero en el origen: su ganancia crece $+20\\text{ dB/déc}$ indefinidamente, amplificando el ruido de alta frecuencia y volviendo el sistema inestable.</p>
    <p><strong>Estabilizado en HF:</strong> Se agrega $R_1$ en serie con $C$ y $C_f$ en paralelo con $R_f$. Opera como derivador en la banda útil $\\omega < 1/(R_1 C)$ y como atenuador en alta frecuencia.</p>
  </div>
</div>

<h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">2. Amplificador Operacional de Transconductancia (OTA)</h5>
<p class="mb-2 text-xs sm:text-sm">El <strong>OTA (Operational Transconductance Amplifier)</strong> entrega una <strong>corriente de salida</strong> proporcional a la tensión diferencial entre sus entradas:
$$\\mathbf{I_{out} = g_m (V^+ - V^-)}$$
A diferencia del Op-Amp estándar, la transconductancia $g_m$ es modulable dinámicamente mediante una corriente de polarización auxiliar externa $I_{ABC}$ (Amplifier Bias Current):
$$g_m = \\frac{I_{ABC}}{2 V_T} \\quad (V_T \\approx 26\\text{ mV a } 300\\text{ K})$$
El OTA permite construir filtros analógicos continuos integrados en silicio (<strong>filtros $G_m\\text{-}C$</strong>) cuya frecuencia de corte se sintoniza electrónicamente mediante software o tensión, prescindiendo por completo de resistores de difusión.</p>



<div class="my-4 p-3 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xs">
  <span class="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-3 text-center">
    📐 Conversor de Impedancia Negativa (INIC) y Rotador de Fase (All-Pass)
  </span>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
    <!-- PANEL IZQUIERDO: INIC -->
    <div class="p-3 rounded-xl bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-2xs">
      <h6 class="text-xs font-bold text-slate-800 dark:text-slate-200 text-center mb-2">Conversor de Impedancia Negativa (INIC)</h6>
      <div class="flex justify-center items-center py-1">
        <svg class="w-full h-auto max-w-[340px] mx-auto select-none" viewBox="0 0 340 160" xmlns="http://www.w3.org/2000/svg">
  <!-- Op-Amp central -->
  <polygon points="150,60 150,130 205,95" fill="#ffffff" stroke="#0f172a" stroke-width="1.8"/>
  <text x="155" y="84" font-size="12" font-family="monospace" font-weight="bold" fill="#0f172a">−</text>
  <text x="155" y="118" font-size="12" font-family="monospace" font-weight="bold" fill="#0f172a">+</text>

  <!-- Salida Vo y nodo común de realimentación -->
  <line x1="205" y1="95" x2="230" y2="95" stroke="#334155" stroke-width="1.8"/>
  <circle cx="230" cy="95" r="3.5" fill="#334155"/>
  <line x1="230" y1="95" x2="260" y2="95" stroke="#334155" stroke-width="1.8"/>
  <text x="260" y="90" font-size="10" font-family="monospace" fill="#64748b">V_o</text>

  <!-- Lazo superior: realimentación negativa a (-) con Ra y carga ZL -->
  <line x1="230" y1="95" x2="230" y2="45" stroke="#334155" stroke-width="1.8"/>
  <line x1="230" y1="45" x2="195" y2="45" stroke="#334155" stroke-width="1.8"/>
  <!-- Ra -->
  <rect x="160" y="38" width="35" height="14" fill="#ffffff" stroke="#334155" stroke-width="1.8"/>
  <text x="177.5" y="32" font-size="10" font-family="monospace" font-weight="bold" fill="#0f172a" text-anchor="middle">R_a</text>
  <line x1="160" y1="45" x2="125" y2="45" stroke="#334155" stroke-width="1.8"/>
  <circle cx="125" cy="45" r="3.5" fill="#334155"/>
  <line x1="125" y1="45" x2="125" y2="80" stroke="#334155" stroke-width="1.8"/>
  <line x1="125" y1="80" x2="150" y2="80" stroke="#334155" stroke-width="1.8"/>

  <!-- Carga ZL conectada desde el nodo (-) hacia masa en el cuadrante superior izquierdo -->
  <line x1="125" y1="45" x2="90" y2="45" stroke="#334155" stroke-width="1.8"/>
  <rect x="55" y="38" width="35" height="14" fill="#ffffff" stroke="#9333ea" stroke-width="1.8"/>
  <text x="72.5" y="32" font-size="10" font-family="monospace" font-weight="bold" fill="#9333ea" text-anchor="middle">Z_L</text>
  <line x1="55" y1="45" x2="35" y2="45" stroke="#334155" stroke-width="1.8"/>
  <line x1="35" y1="45" x2="35" y2="60" stroke="#334155" stroke-width="1.8"/>
  <line x1="27" y1="60" x2="43" y2="60" stroke="#334155" stroke-width="1.8"/>
  <line x1="30" y1="64" x2="40" y2="64" stroke="#334155" stroke-width="1.4"/>
  <line x1="33" y1="68" x2="37" y2="68" stroke="#334155" stroke-width="1.2"/>

  <!-- Lazo inferior: realimentación positiva a (+) con Rb y entrada Zin -->
  <line x1="230" y1="95" x2="230" y2="140" stroke="#334155" stroke-width="1.8"/>
  <line x1="230" y1="140" x2="195" y2="140" stroke="#334155" stroke-width="1.8"/>
  <!-- Rb -->
  <rect x="160" y="133" width="35" height="14" fill="#ffffff" stroke="#334155" stroke-width="1.8"/>
  <text x="177.5" y="127" font-size="10" font-family="monospace" font-weight="bold" fill="#0f172a" text-anchor="middle">R_b</text>
  <line x1="160" y1="140" x2="125" y2="140" stroke="#334155" stroke-width="1.8"/>
  <circle cx="125" cy="140" r="3.5" fill="#334155"/>
  <line x1="125" y1="140" x2="125" y2="115" stroke="#334155" stroke-width="1.8"/>
  <line x1="125" y1="115" x2="150" y2="115" stroke="#334155" stroke-width="1.8"/>

  <!-- Borne de entrada Zin -->
  <line x1="125" y1="140" x2="35" y2="140" stroke="#334155" stroke-width="1.8"/>
  <circle cx="35" cy="140" r="3.5" fill="#2563eb"/>
  <text x="35" y="129" font-size="11" font-family="monospace" font-weight="bold" fill="#2563eb" text-anchor="middle">Z_in</text>
</svg>
      </div>
      <div class="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-center mt-2">
        $$\\mathbf{Z_{in}(s) = - \\frac{R_b}{R_a} Z_L(s) \\implies R_{in} = - R_L \\quad (\\text{si } R_a = R_b)}$$
      </div>
    </div>

    <!-- PANEL DERECHO: ALL-PASS -->
    <div class="p-3 rounded-xl bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-2xs">
      <h6 class="text-xs font-bold text-slate-800 dark:text-slate-200 text-center mb-2">Rotador de Fase (Filtro Pasa-Todo / All-Pass de 1° Orden)</h6>
      <div class="flex justify-center items-center py-1">
        <svg class="w-full h-auto max-w-[340px] mx-auto select-none" viewBox="0 0 340 160" xmlns="http://www.w3.org/2000/svg">
  <!-- Entrada Vin bifurcada -->
  <circle cx="20" cy="95" r="3.5" fill="#2563eb"/>
  <text x="20" y="84" font-size="11" font-family="monospace" font-weight="bold" fill="#2563eb" text-anchor="middle">V_in</text>
  <line x1="20" y1="95" x2="50" y2="95" stroke="#334155" stroke-width="1.8"/>
  <circle cx="50" cy="95" r="3.5" fill="#334155"/>

  <!-- Rama superior: R hacia terminal (-) -->
  <line x1="50" y1="95" x2="50" y2="60" stroke="#334155" stroke-width="1.8"/>
  <line x1="50" y1="60" x2="75" y2="60" stroke="#334155" stroke-width="1.8"/>
  <rect x="75" y="53" width="35" height="14" fill="#ffffff" stroke="#334155" stroke-width="1.8"/>
  <text x="92.5" y="47" font-size="10" font-family="monospace" font-weight="bold" fill="#0f172a" text-anchor="middle">R</text>
  <line x1="110" y1="60" x2="145" y2="60" stroke="#334155" stroke-width="1.8"/>

  <!-- Realimentacion R hacia salida -->
  <circle cx="145" cy="60" r="3.5" fill="#334155"/>
  <line x1="145" y1="60" x2="145" y2="35" stroke="#334155" stroke-width="1.8"/>
  <line x1="145" y1="35" x2="175" y2="35" stroke="#334155" stroke-width="1.8"/>
  <rect x="175" y="28" width="35" height="14" fill="#ffffff" stroke="#334155" stroke-width="1.8"/>
  <text x="192.5" y="22" font-size="10" font-family="monospace" font-weight="bold" fill="#0f172a" text-anchor="middle">R</text>
  <line x1="210" y1="35" x2="250" y2="35" stroke="#334155" stroke-width="1.8"/>
  <line x1="250" y1="35" x2="250" y2="95" stroke="#334155" stroke-width="1.8"/>

  <!-- Rama inferior: Red C - R0 al terminal (+) -->
  <line x1="50" y1="95" x2="50" y2="125" stroke="#334155" stroke-width="1.8"/>
  <line x1="50" y1="125" x2="80" y2="125" stroke="#334155" stroke-width="1.8"/>
  <!-- Capacitor C -->
  <line x1="80" y1="117" x2="80" y2="133" stroke="#334155" stroke-width="2"/>
  <line x1="86" y1="117" x2="86" y2="133" stroke="#334155" stroke-width="2"/>
  <text x="83" y="110" font-size="10" font-family="monospace" font-weight="bold" fill="#0f172a" text-anchor="middle">C</text>
  <line x1="86" y1="125" x2="125" y2="125" stroke="#334155" stroke-width="1.8"/>

  <!-- Resistencia R0 a masa -->
  <circle cx="125" cy="125" r="3.5" fill="#334155"/>
  <line x1="125" y1="125" x2="125" y2="138" stroke="#334155" stroke-width="1.8"/>
  <line x1="117" y1="138" x2="133" y2="138" stroke="#334155" stroke-width="1.8"/>
  <line x1="120" y1="142" x2="130" y2="142" stroke="#334155" stroke-width="1.4"/>
  <line x1="123" y1="146" x2="127" y2="146" stroke="#334155" stroke-width="1.2"/>
  <text x="145" y="140" font-size="10" font-family="monospace" font-weight="bold" fill="#0f172a">R₀</text>

  <!-- Op-Amp -->
  <polygon points="170,65 170,125 220,95" fill="#ffffff" stroke="#0f172a" stroke-width="1.8"/>
  <line x1="145" y1="60" x2="170" y2="80" stroke="#334155" stroke-width="1.8"/>
  <line x1="125" y1="125" x2="170" y2="110" stroke="#334155" stroke-width="1.8"/>
  <text x="175" y="84" font-size="11" font-family="monospace" font-weight="bold" fill="#0f172a">−</text>
  <text x="175" y="114" font-size="11" font-family="monospace" font-weight="bold" fill="#0f172a">+</text>

  <!-- Salida Vo -->
  <line x1="220" y1="95" x2="280" y2="95" stroke="#334155" stroke-width="1.8"/>
  <circle cx="250" cy="95" r="3.5" fill="#334155"/>
  <circle cx="280" cy="95" r="3.5" fill="#059669"/>
  <text x="280" y="85" font-size="11" font-family="monospace" font-weight="bold" fill="#059669" text-anchor="middle">V_o</text>
</svg>
      </div>
      <div class="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-center mt-2">
        $$\\mathbf{H(s) = \\frac{s - \\omega_0}{s + \\omega_0} = \\frac{s - 1/(R_0 C)}{s + 1/(R_0 C)}}$$
        <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-1">$\\mathbf{|H(j\\omega)| \\equiv 1}, \\qquad \\mathbf{\\phi(\\omega) = -2\\arctan(\\omega R_0 C)}$</p>
      </div>
    </div>
  </div>
</div>



<h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">3. Rotadores de Fase (Filtros Pasa-Todo / All-Pass)</h5>
<p class="mb-2 text-xs sm:text-sm">Un <strong>rotador de fase</strong> o filtro pasa-todo tiene la propiedad cardinal de mantener una <strong>ganancia de módulo rigurosamente unitaria y plana ($|H(j\\omega)| = 1 = 0\\text{ dB}$)</strong> para cualquier pulsación $\\omega$, al mismo tiempo que produce una rotación de fase monótona controlada:</p>

<div class="space-y-3 my-3">
  <div class="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-950 dark:text-purple-200 text-xs sm:text-sm">
    <h6 class="font-bold text-xs uppercase tracking-wider mb-1">Rotador de Fase de 1° Orden</h6>
    $$H(s) = \\frac{s - \\omega_0}{s + \\omega_0} = \\frac{s - 1/(R_0 C)}{s + 1/(R_0 C)}$$
    Posee un cero en el semiplano derecho en $s = +\\omega_0$ y un polo simétrico en el semiplano izquierdo en $s = -\\omega_0$.
    $$\\mathbf{|H(j\\omega)| = \\left| \\frac{j\\omega - \\omega_0}{j\\omega + \\omega_0} \\right| = \\frac{\\sqrt{\\omega^2 + \\omega_0^2}}{\\sqrt{\\omega^2 + \\omega_0^2}} \\equiv 1 \\quad (0\\text{ dB})}$$
    $$\\mathbf{\\phi(\\omega) = \\pi - 2\\arctan\\left(\\frac{\\omega}{\\omega_0}\\right) = -2\\arctan(\\omega R_0 C)}$$
    La fase rota suavemente desde $0^\\circ$ (en $\\omega = 0$), pasando por exactamente $\\mathbf{-90^\\circ}$ en $\\omega = \\omega_0$, hasta alcanzar $-180^\\circ$ cuando $\\omega \\to \\infty$.
  </div>

  <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm">
    <h6 class="font-bold text-xs uppercase tracking-wider mb-1">Rotador de Fase de 2° Orden y Ecualización de Retardo</h6>
    $$H(s) = \\frac{s^2 - \\frac{\\omega_0}{Q}s + \\omega_0^2}{s^2 + \\frac{\\omega_0}{Q}s + \\omega_0^2}$$
    Proporciona una rotación de fase continua de $\\mathbf{360^\\circ}$ (desde $0^\\circ$ hasta $-360^\\circ$), cruzando $-180^\\circ$ en $\\omega = \\omega_0$.
    <p class="mt-2 text-xs text-slate-600 dark:text-slate-300"><strong>Aplicación Cardinal:</strong> Ecualización de retardo de grupo $\\tau_g(\\omega) = -d\\phi/d\\omega$ en sistemas de telecomunicaciones, telefonía y audio digital. Permite aplanar el retardo temporal en la banda pasante sin alterar la atenuación espectral del canal.</p>
  </div>
</div>

          `
        },
        {
          id: 'tc3-u2-nic-giradores-simuladores-inductancia',
          titulo: '2.3 Conversores de Impedancia Negativa (NIC), Giradores (GYR) y Simuladores de Inductancia',
          contenido: `
<p class="mb-3">En la síntesis activa de redes, se emplean componentes multipuerto que transforman o invierten la naturaleza de una impedancia pasiva conectada en sus bornes de carga. Los más notables son el <strong>Conversor de Impedancia Negativa (NIC)</strong> y el <strong>Girador de Tellegen (GYR)</strong>.</p>

<h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">1. Conversor de Impedancia Negativa (NIC)</h5>
<p class="mb-2 text-xs sm:text-sm">Un <strong>NIC (Negative Impedance Converter)</strong> es un cuadripolo lineal activo que refleja en sus terminales de entrada el negativo proporcional de la impedancia de carga conectada en el puerto 2:</p>
$$\\mathbf{Z_{in}(s) = - k \\cdot Z_L(s)}$$
Existen dos variedades fundamentales según la variable invertida:
<div class="grid grid-cols-1 md:grid-cols-2 gap-3 my-3">
  <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-xs">
    <span class="font-bold text-blue-600 dark:text-blue-400 block mb-1">INIC (Inversión de Corriente)</span>
    Invierte el sentido relativo de la corriente manteniendo igual tensión:
    $$V_1 = V_2, \\quad I_1 = - k I_2 \\implies [T] = \\begin{bmatrix} 1 & 0 \\\\ 0 & -k \\end{bmatrix}$$
    Implementado con Op-Amp, si $R_a = R_b$, se obtiene rigurosamente $\\mathbf{Z_{in} = - Z_L}$.
  </div>
  <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-xs">
    <span class="font-bold text-indigo-600 dark:text-indigo-400 block mb-1">VNIC (Inversión de Tensión)</span>
    Invierte el signo de la tensión manteniendo el sentido de corriente:
    $$V_1 = -k V_2, \\quad I_1 = I_2 \\implies [T] = \\begin{bmatrix} -k & 0 \\\\ 0 & 1 \\end{bmatrix}$$
  </div>
</div>
<div class="p-3 my-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-950 dark:text-amber-200">
  <span class="font-bold font-mono">Criterio de Estabilidad OCS vs SCS:</span> Por contener realimentación positiva y negativa simultáneas, un NIC posee un puerto <strong>estable a circuito abierto (OCS - Open Circuit Stable)</strong> y otro <strong>estable a cortocircuito (SCS - Short Circuit Stable)</strong>. Para garantizar estabilidad asintótica, la impedancia conectada en el puerto OCS debe ser mayor que la del puerto SCS, asegurando que el lazo de realimentación negativa predomine sobre el positivo.
</div>

<h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">2. El Girador de Tellegen (GYR)</h5>
<p class="mb-2 text-xs sm:text-sm">Propuesto por Bernard Tellegen en 1948, el <strong>girador</strong> es un cuadripolo no recíproco lineal ($y_{12} = -y_{21}$) con matrices constitutivas:</p>
$$[y] = \\begin{bmatrix} 0 & g \\\\ -g & 0 \\end{bmatrix}, \\quad [z] = \\begin{bmatrix} 0 & -R_g \\\\ R_g & 0 \\end{bmatrix}$$
donde $g = 1/R_g$ es la conductancia de giración y $R_g$ la resistencia de giración.
<div class="p-4 my-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-950 dark:text-emerald-200 text-xs sm:text-sm">
  <h6 class="font-bold text-xs uppercase tracking-wider mb-1">Propiedad de Inversión de Impedancia del Girador</h6>
  $$\\mathbf{Z_{in}(s) = \\frac{R_g^2}{Z_L(s)} = R_g^2 \\cdot Y_L(s)}$$
  Si se conecta como carga un <strong>capacitor puro</strong> $Z_L(s) = \\frac{1}{s C}$:
  $$\\mathbf{Z_{in}(s) = R_g^2 \\cdot (s C) = s \\cdot (R_g^2 C) \\equiv s L_{eq}}$$
  El circuito simula con exactitud un <strong>inductor puro a masa sin ninguna bobina magnética</strong> de inductancia $\\mathbf{L_{eq} = R_g^2 C}$.
</div>

<h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">3. Circuitos Simuladores de Inductancia Activa (Riordan y Prescott)</h5>
<p class="mb-2 text-xs sm:text-sm">Para prescindir de bobinas voluminosas y con pérdidas en frecuencias de audio y telecomunicaciones, se emplean dos topologías célebres:</p>
<ul class="list-disc pl-5 space-y-1 text-xs">
  <li><strong>Simulador de Riordan:</strong> Utiliza dos amplificadores operacionales, cuatro resistencias y un capacitor. Implementa un girador activo de alta estabilidad térmica que simula inductancias referidas a masa con factores de calidad $Q > 500$.</li>
  <li><strong>Simulador de Prescott:</strong> Estructura activa diseñada específicamente para simular <strong>inductores flotantes</strong> (ninguno de sus bornes está unido a la masa de referencia), indispensable para reemplazar inductores serie en filtros escalera pasivos en PI o T.</li>
</ul>

          `
        },
        {
          id: 'tc3-u2-gic-antoniou',
          titulo: '2.4 El Convertidor de Inmitancia Generalizado (GIC de Antoniou)',
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
          titulo: '2.5 El Elemento D de Bruton (FDNR) y Transformación de Bruton',
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
        },
        {
          id: 'tc3-u2-capacitores-conmutados',
          titulo: '2.6 Filtros de Capacitores Conmutados (Switched Capacitor Circuits)',
          contenido: `
<p class="mb-3">En el diseño de circuitos integrados analógicos en tecnología MOS/CMOS (VLSI y LSI), la integración de resistencias convencionales presenta severas limitaciones: ocupan un área superficial de silicio desproporcionadamente grande y sufren desviaciones de tolerancia de hasta el $\\pm 20\\%-30\\%$ debido a variaciones térmicas y del proceso litográfico. En cambio, los capacitores integrados de óxido-polisilicio ocupan un área mínima y, lo más importante, <strong>la razón entre dos capacidades integradas $\\frac{C_1}{C_2}$ se controla con una precisión superior al $0.1\\%$</strong>.</p>

<h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Principio de Simulación de Resistencia mediante Conmutación de Carga</h5>
<p class="mb-2">Considérese un capacitor $C_R$ conectado a una llave inversora periódica que conmuta entre dos fuentes de tensión continuas $E_1$ y $E_2$ a una frecuencia de reloj de conmutación $f_c = 1/T$ ($f_c \\gg f_{\\text{señal}}$):</p>
<ul class="list-disc pl-5 space-y-1 text-xs sm:text-sm mb-3">
  <li>En la fase 1 ($\\phi_1$ cerrada): el capacitor se carga a la tensión $E_1$, almacenando $Q_1 = C_R E_1$.</li>
  <li>En la fase 2 ($\\phi_2$ cerrada): el capacitor se conmuta a la tensión $E_2$, pasando a almacenar $Q_2 = C_R E_2$.</li>
  <li>La carga neta transferida en cada ciclo completo $T$ es:
    $$\\Delta Q = Q_2 - Q_1 = C_R (E_2 - E_1)$$
  </li>
  <li>La corriente media transferida durante el período $T$ es:
    $$I = \\frac{\\Delta Q}{T} = f_c \\cdot C_R \\cdot (E_2 - E_1)$$
  </li>
</ul>

<div class="p-4 my-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-950 dark:text-emerald-200">
  <h5 class="font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
    <span>📐</span> Resistencia Equivalente Simulada por Capacitor Conmutado
  </h5>
  $$\\mathbf{R_{eq} = \\frac{E_2 - E_1}{I} = \\frac{1}{f_c \\cdot C_R}}$$
  <p class="text-xs mt-1">El valor de resistencia depende exclusivamente de la inversa de la frecuencia de reloj $f_c$ y del capacitor $C_R$. ¡Una frecuencia de reloj de cuarzo de alta precisión fija el valor resistivo con exactitud absoluta!</p>
</div>


<div class="my-4 p-3 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xs">
  <span class="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-2 text-center">
    📐 Filtros de Capacitores Conmutados (Switched Capacitors): Resistencia Equivalente e Integrador SC
  </span>
  <div class="flex justify-center overflow-x-auto py-1">
    <svg class="w-full h-auto max-w-4xl mx-auto select-none" viewBox="0 0 860 300" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(15, 10)">
    <rect x="0" y="0" width="395" height="280" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
    <text x="197" y="24" font-size="12" font-family="system-ui, sans-serif" font-weight="bold" fill="#0f172a" text-anchor="middle">
      Simulación de Resistencia por Capacitor Conmutado
    </text>

    <!-- Fuente E1 -->
    <circle cx="50" cy="120" r="15" fill="#ffffff" stroke="#2563eb" stroke-width="2"/>
    <text x="50" y="117" font-size="12" font-family="monospace" font-weight="bold" fill="#2563eb" text-anchor="middle">+</text>
    <text x="50" y="130" font-size="12" font-family="monospace" font-weight="bold" fill="#2563eb" text-anchor="middle">-</text>
    <text x="50" y="152" font-size="12" font-family="system-ui, sans-serif" font-weight="bold" fill="#1e293b" text-anchor="middle">E₁</text>
    <line x1="50" y1="135" x2="50" y2="175" stroke="#334155" stroke-width="2"/>
    <line x1="40" y1="175" x2="60" y2="175" stroke="#334155" stroke-width="2"/>

    <line x1="50" y1="105" x2="50" y2="70" stroke="#334155" stroke-width="2"/>
    <line x1="50" y1="70" x2="110" y2="70" stroke="#334155" stroke-width="2"/>
    <circle cx="110" cy="70" r="3" fill="#334155"/>
    <text x="110" y="60" font-size="11" font-family="monospace" font-weight="bold" fill="#2563eb" text-anchor="middle">1 (φ₁)</text>

    <circle cx="170" cy="70" r="3" fill="#334155"/>
    <text x="170" y="60" font-size="11" font-family="monospace" font-weight="bold" fill="#9333ea" text-anchor="middle">2 (φ₂)</text>
    <line x1="170" y1="70" x2="230" y2="70" stroke="#334155" stroke-width="2"/>
    <line x1="230" y1="70" x2="230" y2="105" stroke="#334155" stroke-width="2"/>

    <circle cx="140" cy="100" r="3.5" fill="#dc2626"/>
    <line x1="140" y1="100" x2="115" y2="74" stroke="#dc2626" stroke-width="2.5"/>
    <path d="M 120,80 Q 140,75 160,80" fill="none" stroke="#64748b" stroke-width="1.5" stroke-dasharray="2,2"/>

    <line x1="140" y1="100" x2="140" y2="135" stroke="#334155" stroke-width="2"/>
    <line x1="125" y1="135" x2="155" y2="135" stroke="#334155" stroke-width="2.5"/>
    <line x1="125" y1="142" x2="155" y2="142" stroke="#334155" stroke-width="2.5"/>
    <line x1="140" y1="142" x2="140" y2="175" stroke="#334155" stroke-width="2"/>
    <line x1="130" y1="175" x2="150" y2="175" stroke="#334155" stroke-width="2"/>
    <text x="165" y="142" font-size="12" font-family="system-ui, sans-serif" font-weight="bold" fill="#0f172a">C_R</text>

    <circle cx="230" cy="120" r="15" fill="#ffffff" stroke="#9333ea" stroke-width="2"/>
    <text x="230" y="117" font-size="12" font-family="monospace" font-weight="bold" fill="#9333ea" text-anchor="middle">+</text>
    <text x="230" y="130" font-size="12" font-family="monospace" font-weight="bold" fill="#9333ea" text-anchor="middle">-</text>
    <text x="230" y="152" font-size="12" font-family="system-ui, sans-serif" font-weight="bold" fill="#1e293b" text-anchor="middle">E₂</text>
    <line x1="230" y1="135" x2="230" y2="175" stroke="#334155" stroke-width="2"/>
    <line x1="220" y1="175" x2="240" y2="175" stroke="#334155" stroke-width="2"/>

    <rect x="25" y="200" width="345" height="65" rx="6" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1"/>
    <text x="197" y="222" font-size="12" font-family="system-ui, sans-serif" font-weight="bold" fill="#0f172a" text-anchor="middle">
      I = f_c · C_R · (E₂ - E₁)  ⟹  R_eq = 1 / (f_c · C_R)
    </text>
    <text x="197" y="245" font-size="11" font-family="system-ui, sans-serif" fill="#475569" text-anchor="middle">
      Reloj bifásico no solapado (f_c = 1/T con fases φ₁ y φ₂)
    </text>
  </g>

  <g transform="translate(435, 10)">
    <rect x="0" y="0" width="410" height="280" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
    <text x="205" y="24" font-size="12" font-family="system-ui, sans-serif" font-weight="bold" fill="#0f172a" text-anchor="middle">
      Integrador Inversor SC con Amplificador Operacional
    </text>

    <circle cx="40" cy="115" r="13" fill="#ffffff" stroke="#2563eb" stroke-width="2"/>
    <text x="40" y="120" font-size="11" font-family="system-ui, sans-serif" font-weight="bold" fill="#2563eb" text-anchor="middle">E₁</text>
    <line x1="40" y1="128" x2="40" y2="155" stroke="#334155" stroke-width="2"/>
    <line x1="30" y1="155" x2="50" y2="155" stroke="#334155" stroke-width="2"/>

    <line x1="40" y1="102" x2="40" y2="80" stroke="#334155" stroke-width="2"/>
    <line x1="40" y1="80" x2="80" y2="80" stroke="#334155" stroke-width="2"/>
    <circle cx="80" cy="80" r="3" fill="#334155"/>
    <circle cx="140" cy="80" r="3" fill="#334155"/>

    <circle cx="110" cy="110" r="3.5" fill="#dc2626"/>
    <line x1="110" y1="110" x2="85" y2="84" stroke="#dc2626" stroke-width="2.2"/>
    <line x1="110" y1="110" x2="110" y2="135" stroke="#334155" stroke-width="2"/>
    <line x1="95" y1="135" x2="125" y2="135" stroke="#334155" stroke-width="2.5"/>
    <line x1="95" y1="142" x2="125" y2="142" stroke="#334155" stroke-width="2.5"/>
    <line x1="110" y1="142" x2="110" y2="165" stroke="#334155" stroke-width="2"/>
    <line x1="100" y1="165" x2="120" y2="165" stroke="#334155" stroke-width="2"/>
    <text x="135" y="142" font-size="11" font-family="system-ui, sans-serif" font-weight="bold" fill="#0f172a">C₁</text>

    <line x1="140" y1="80" x2="190" y2="80" stroke="#334155" stroke-width="2"/>
    <line x1="190" y1="80" x2="190" y2="105" stroke="#334155" stroke-width="2"/>

    <polygon points="210,90 210,150 265,120" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>
    <line x1="190" y1="105" x2="210" y2="105" stroke="#334155" stroke-width="2"/>
    <text x="215" y="109" font-size="12" font-family="monospace" font-weight="bold" fill="#0f172a">-</text>
    <line x1="190" y1="135" x2="210" y2="135" stroke="#334155" stroke-width="2"/>
    <line x1="190" y1="135" x2="190" y2="155" stroke="#334155" stroke-width="2"/>
    <line x1="180" y1="155" x2="200" y2="155" stroke="#334155" stroke-width="2"/>
    <text x="215" y="139" font-size="12" font-family="monospace" font-weight="bold" fill="#0f172a">+</text>

    <circle cx="200" cy="105" r="3" fill="#334155"/>
    <line x1="200" y1="105" x2="200" y2="55" stroke="#334155" stroke-width="2"/>
    <line x1="200" y1="55" x2="230" y2="55" stroke="#334155" stroke-width="2"/>
    <line x1="230" y1="45" x2="230" y2="65" stroke="#334155" stroke-width="2.5"/>
    <line x1="237" y1="45" x2="237" y2="65" stroke="#334155" stroke-width="2.5"/>
    <line x1="237" y1="55" x2="290" y2="55" stroke="#334155" stroke-width="2"/>
    <line x1="290" y1="55" x2="290" y2="120" stroke="#334155" stroke-width="2"/>
    <text x="233" y="40" font-size="11" font-family="system-ui, sans-serif" font-weight="bold" fill="#0f172a" text-anchor="middle">C₂</text>

    <line x1="265" y1="120" x2="330" y2="120" stroke="#334155" stroke-width="2"/>
    <circle cx="290" cy="120" r="3" fill="#334155"/>
    <circle cx="330" cy="120" r="3.5" fill="#059669"/>
    <text x="345" y="124" font-size="12" font-family="system-ui, sans-serif" font-weight="bold" fill="#059669">E₂</text>

    <rect x="25" y="200" width="360" height="65" rx="6" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1"/>
    <text x="205" y="222" font-size="12" font-family="system-ui, sans-serif" font-weight="bold" fill="#0f172a" text-anchor="middle">
      E₂(s) / E₁(s) = - f_c · (C₁ / C₂) · (1 / s)
    </text>
    <text x="205" y="245" font-size="11" font-family="system-ui, sans-serif" fill="#475569" text-anchor="middle">
      La constante de tiempo depende de la razón de áreas C₁/C₂ (precisión &lt; 0.1%)
    </text>
  </g>
</svg>
  </div>
</div>


<h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Reloj Bifásico no Solapado y Capacidades Parásitas</h5>
<p class="mb-2">Las llaves se implementan con transistores MOSFET conducidos por dos fases de reloj no solapadas ($\\phi_1$ y $\\phi_2$) para impedir que ambas llaves conduzcan simultáneamente provocando un cortocircuito entre $E_1$ y $E_2$. Además, la estructura física de los capacitores MOS posee capacidades parásitas hacia el sustrato ($C_P$ en la placa superior y $C_B$ en la placa inferior). Para evitar que alteren la transferencia, se emplean <strong>topologías insensibles a capacidades parásitas</strong>, donde los terminales del capacitor conmutado se conectan alternadamente a masa virtual o a fuentes de baja impedancia.</p>

<h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Bloques Analógicos con Amplificador Operacional y Capacitores Conmutados</h5>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3 my-3 text-xs sm:text-sm">
  <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
    <div class="font-bold text-blue-600 dark:text-blue-400 font-mono">1. Integrador Inversor Puro SC</div>
    <p>Reemplazando la resistencia de entrada de un integrador Miller clásico por el capacitor conmutado $C_1$ ($R_{eq} = 1/(f_c C_1)$):</p>
    $$\\mathbf{\\frac{E_2(s)}{E_1(s)} = -\\frac{1}{s R_{eq} C_2} = -f_c \\left( \\frac{C_1}{C_2} \\right) \\frac{1}{s}}$$
    <p class="text-slate-500 text-xs">La constante de tiempo $\\tau = \\frac{1}{f_c} \\frac{C_2}{C_1}$ depende de la razón de capacidades $C_2/C_1$, inmune a la temperatura.</p>
  </div>

  <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
    <div class="font-bold text-indigo-600 dark:text-indigo-400 font-mono">2. Integrador Inversor con Pérdidas (Pasa-Bajos)</div>
    <p>Agregando un capacitor conmutado $C_3$ en paralelo con el capacitor de realimentación $C_2$ ($R_{eq3} = 1/(f_c C_3)$):</p>
    $$\\mathbf{\\frac{E_2(s)}{E_1(s)} = -\\frac{f_c \\frac{C_1}{C_2}}{s + f_c \\frac{C_3}{C_2}}}$$
    <p class="text-slate-500 text-xs">Polo a frecuencia angular $\\omega_0 = f_c \\frac{C_3}{C_2}$ y ganancia estática $A_0 = -\\frac{C_1}{C_3}$.</p>
  </div>
</div>
<div class="pt-2 flex justify-end">
  <button onclick="filtrarUnidad('tc3-u2'); volverAEjercicios();" class="text-xs font-mono text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1 font-semibold">
    <span>Practicar ejercicios interactivos de la Unidad 2</span>
    <span>→</span>
  </button>
</div>

          `
        }
      ]
    },

    // ========================================================================
    // UNIDAD 3: SÍNTESIS DE DIPOLOS PASIVOS (FOSTER, CAUER, BRUNE Y BOTT-DUFFIN)
    // ========================================================================
    {
      id: 'tc3-u3',
      numero: 3,
      titulo: 'Unidad 3: Síntesis de Dipolos Pasivos (Foster, Cauer, Brune y Bott-Duffin)',
      icono: '🔄',
      badgeColor: 'border-emerald-500/40 bg-emerald-950/40 text-emerald-300',
      introduccion: 'Esta unidad enseña a sintetizar dipolos pasivos a partir de una función de inmitancia positiva real (PR). Se estudian los dipolos reactivos puros LC (teorema de Foster), los dipolos disipativos RC y RL, las funciones mínimas con el Preámbulo de Foster, y los métodos generales de Brune (con transformador acoplado) y Bott-Duffin (transformerless con función de Richard).',
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

          
<h5 class="text-sm font-bold text-slate-900 dark:text-white mt-6 mb-2">Comportamiento Asintótico a Frecuencias Extremas (Bajas y Altas)</h5>
<p class="mb-2">Para una función de excitación cuadrática general $Z(s) = \\frac{a_2 s^2 + a_1 s + a_0}{b_2 s^2 + b_1 s + b_0}$, el comportamiento en los límites de frecuencia determina la naturaleza física de los componentes terminales de la red:</p>

<div class="overflow-x-auto my-3">
  <table class="w-full text-left text-xs border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden font-mono">
    <thead class="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold uppercase">
      <tr>
        <th class="p-2 border-b border-r border-slate-200 dark:border-slate-700">Tipo de Impedancia</th>
        <th class="p-2 border-b border-r border-slate-200 dark:border-slate-700">Modelo Matemático Z(s)</th>
        <th class="p-2 border-b border-r border-slate-200 dark:border-slate-700 text-blue-600 dark:text-blue-400">Bajas Frecuencias (s → 0)</th>
        <th class="p-2 border-b border-slate-200 dark:border-slate-700 text-purple-600 dark:text-purple-400">Altas Frecuencias (s → ∞)</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
      <tr><td class="p-2 font-bold border-r border-slate-200 dark:border-slate-700 font-sans">R - R</td><td class="p-2">$\\frac{a_2 s^2 + a_1 s + a_0}{b_2 s^2 + b_1 s + b_0}$</td><td class="p-2">$Z(0) = a_0 / b_0$ (Resistivo)</td><td class="p-2">$Z(\\infty) = a_2 / b_2$ (Resistivo)</td></tr>
      <tr><td class="p-2 font-bold border-r border-slate-200 dark:border-slate-700 font-sans">R - L</td><td class="p-2">$\\frac{a_2 s^2 + a_1 s + a_0}{b_1 s + b_0}$</td><td class="p-2">$Z(0) = a_0 / b_0$ (Resistivo)</td><td class="p-2">$Z(\\infty) = \\frac{a_2}{b_1} s$ (Inductivo)</td></tr>
      <tr><td class="p-2 font-bold border-r border-slate-200 dark:border-slate-700 font-sans">R - C</td><td class="p-2">$\\frac{a_1 s + a_0}{b_2 s^2 + b_1 s + b_0}$</td><td class="p-2">$Z(0) = a_0 / b_0$ (Resistivo)</td><td class="p-2">$Z(\\infty) = \\frac{a_1}{b_2 s}$ (Capacitivo)</td></tr>
      <tr><td class="p-2 font-bold border-r border-slate-200 dark:border-slate-700 font-sans">L - R</td><td class="p-2">$\\frac{a_2 s^2 + a_1 s}{b_2 s^2 + b_1 s + b_0}$</td><td class="p-2">$Z(0) = \\frac{a_1}{b_0} s$ (Inductivo)</td><td class="p-2">$Z(\\infty) = a_2 / b_2$ (Resistivo)</td></tr>
      <tr><td class="p-2 font-bold border-r border-slate-200 dark:border-slate-700 font-sans">L - L</td><td class="p-2">$\\frac{a_1 s}{b_0}$</td><td class="p-2">$Z(0) = \\frac{a_1}{b_0} s$ (Inductivo)</td><td class="p-2">$Z(\\infty) = \\frac{a_1}{b_0} s$ (Inductivo)</td></tr>
      <tr><td class="p-2 font-bold border-r border-slate-200 dark:border-slate-700 font-sans">L - C</td><td class="p-2">$\\frac{a_1 s}{b_2 s^2 + b_0}$</td><td class="p-2">$Z(0) = \\frac{a_1}{b_0} s$ (Inductivo)</td><td class="p-2">$Z(\\infty) = \\frac{a_1}{b_2 s}$ (Capacitivo)</td></tr>
      <tr><td class="p-2 font-bold border-r border-slate-200 dark:border-slate-700 font-sans">C - R</td><td class="p-2">$\\frac{a_2 s^2 + a_1 s + a_0}{b_2 s^2 + b_1 s}$</td><td class="p-2">$Z(0) = \\frac{a_0}{b_1 s}$ (Capacitivo)</td><td class="p-2">$Z(\\infty) = a_2 / b_2$ (Resistivo)</td></tr>
      <tr><td class="p-2 font-bold border-r border-slate-200 dark:border-slate-700 font-sans">C - L</td><td class="p-2">$\\frac{a_2 s^2 + a_1 s + a_0}{b_1 s}$</td><td class="p-2">$Z(0) = \\frac{a_0}{b_1 s}$ (Capacitivo)</td><td class="p-2">$Z(\\infty) = \\frac{a_2}{b_1} s$ (Inductivo)</td></tr>
      <tr><td class="p-2 font-bold border-r border-slate-200 dark:border-slate-700 font-sans">C - C</td><td class="p-2">$\\frac{a_0}{b_1 s}$</td><td class="p-2">$Z(0) = \\frac{a_0}{b_1 s}$ (Capacitivo)</td><td class="p-2">$Z(\\infty) = \\frac{a_0}{b_1 s}$ (Capacitivo)</td></tr>
    </tbody>
  </table>
</div>

<h5 class="text-sm font-bold text-slate-900 dark:text-white mt-6 mb-2">Criterio Angular de Brune y Ejemplos de Test de Hurwitz</h5>
<div class="p-3 my-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm">
  <span class="font-bold text-blue-600 dark:text-blue-400 font-mono">Condición Angular de Brune:</span> Para toda función Real Positiva $F(s)$, el argumento angular de la función no puede exceder al argumento de la variable compleja en el semiplano derecho:
  $$\\mathbf{|\\operatorname{Arg} F(s)| \\le |\\operatorname{Arg} s| \\qquad \\text{para } |\\operatorname{Arg} s| \\le \\frac{\\pi}{2}}$$
</div>

<p class="text-xs sm:text-sm mt-2"><em>Ejemplos de ensayo de Polinomios de Hurwitz de la cátedra:</em></p>
<ul class="list-disc pl-5 space-y-1 text-xs sm:text-sm">
  <li>$A(s) = 8s^4 + 6s^3 + 10s^2 + 3s + 2$: Hurwitz estricto (cocientes euclídeos $m/n$ estrictamente positivos).</li>
  <li>$B(s) = s^6 + 4s^5 + 6s^4 + 12s^3 + 11s^2 + 8s + 6$: Hurwitz estricto (todos los polos en SPI).</li>
  <li>$C(s) = s^4 + 6s^2 + 25$: Polinomio par puro con raíces en $\\pm 1 \\pm j2$ (no es Hurwitz estricto, raíces en el semiplano derecho).</li>
  <li>$D(s) = s^3 + s^2 + s + 2$: No es de Hurwitz (la división euclídea arroja cocientes con signos negativos).</li>
</ul>
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
    📐 Teorema de Reactancia de Foster: Curva X(ω) y Alternancia de Polos/Ceros en jω
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
    📐 Forma Canónica Foster I (LC): Tanques Antirresonantes Paralelos en Serie
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
    📐 Forma Canónica Foster II (LC): Ramas Resonantes Serie Conectadas en Paralelo
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


          
<h5 class="text-sm font-bold text-slate-900 dark:text-white mt-6 mb-2">El Enfoque de Remociones Totales Sucesivas y Migración de Ceros</h5>
<p class="mb-2">En lugar de expandir todos los términos simultáneamente, la síntesis de Foster I puede ejecutarse mediante una <strong>secuencia iterativa de sustracciones de impedancia polo a polo</strong>:</p>
<ol class="list-decimal pl-5 space-y-1.5 text-xs sm:text-sm mb-3">
  <li><strong>Remoción del polo en el origen:</strong> Si $Z(s)$ tiene polo en $s = 0$, se sustrae $Z_2(s) = Z(s) - \\frac{k_0}{s}$, materializando el capacitor serie $C_0 = 1/k_0$.</li>
  <li><strong>Efecto en los ceros restantes:</strong> Al restar una reactancia capacitiva negativa, <em>todos los ceros de $Z_2(s)$ se desplazan estrictamente hacia las frecuencias más bajas</em>, acercándose al polo removido.</li>
  <li><strong>Remoción de tanques antirresonantes:</strong> Se sustrae $Z_4(s) = Z_2(s) - \\frac{2 k_i s}{s^2 + \\omega_i^2}$, materializando el tanque paralelo $L_i \\parallel C_i$.</li>
  <li><strong>Remoción del polo en el infinito:</strong> La impedancia residual final resulta puramente inductiva: $Z_j(s) = s L_\\infty$.</li>
</ol>


<div class="my-4 p-3 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xs">
  <span class="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-2 text-center">
    📐 Concepto de Remoción Total de Polos y Migración de Ceros (Ejemplo Canónico Foster I)
  </span>
  <div class="flex justify-center overflow-x-auto py-1">
    <svg class="w-full h-auto max-w-4xl mx-auto select-none" viewBox="0 0 860 300" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="840" height="280" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
  <text x="430" y="30" font-size="12" font-family="system-ui, sans-serif" font-weight="bold" fill="#0f172a" text-anchor="middle">
    Concepto de Remoción Total de Polos y Migración de Ceros (Ejemplo Canónico Foster I)
  </text>
  <text x="430" y="46" font-size="10.5" font-family="monospace" fill="#475569" text-anchor="middle">
    Z(s) = (s⁴ + 4s² + 3) / (s³ + 2s) = (s² + 1)(s² + 3) / [s(s² + 2)]
  </text>

  <!-- Eje superior: Valores de pulsación ω -->
  <!-- w = 0 (x=160), w = 1 (x=300), w = sqrt(2)~1.414 (x=410), w = sqrt(3)~1.732 (x=530), w = inf (x=720) -->
  <line x1="100" y1="75" x2="760" y2="75" stroke="#94a3b8" stroke-width="1" stroke-dasharray="2,2"/>
  <text x="160" y="68" font-size="11" font-family="monospace" font-weight="bold" fill="#0f172a" text-anchor="middle">ω = 0</text>
  <text x="300" y="68" font-size="11" font-family="monospace" font-weight="bold" fill="#2563eb" text-anchor="middle">ω = 1</text>
  <text x="410" y="68" font-size="11" font-family="monospace" font-weight="bold" fill="#dc2626" text-anchor="middle">ω = √2</text>
  <text x="530" y="68" font-size="11" font-family="monospace" font-weight="bold" fill="#2563eb" text-anchor="middle">ω = √3</text>
  <text x="720" y="68" font-size="11" font-family="monospace" font-weight="bold" fill="#dc2626" text-anchor="middle">ω → ∞</text>

  <!-- Línea 1: Z(s) completa -->
  <g transform="translate(0, 95)">
    <text x="75" y="5" font-size="11" font-family="monospace" font-weight="bold" fill="#0f172a" text-anchor="end">Z(s):</text>
    <line x1="100" y1="0" x2="760" y2="0" stroke="#475569" stroke-width="2"/>
    <!-- Polo en 0 (Cruz roja) -->
    <path d="M 154,-6 L 166,6 M 154,6 L 166,-6" stroke="#dc2626" stroke-width="2.5"/>
    <!-- Cero en 1 (Círculo azul) -->
    <circle cx="300" cy="0" r="5" fill="#ffffff" stroke="#2563eb" stroke-width="2.2"/>
    <!-- Polo en sqrt(2) (Cruz roja) -->
    <path d="M 404,-6 L 416,6 M 404,6 L 416,-6" stroke="#dc2626" stroke-width="2.5"/>
    <!-- Cero en sqrt(3) (Círculo azul) -->
    <circle cx="530" cy="0" r="5" fill="#ffffff" stroke="#2563eb" stroke-width="2.2"/>
    <!-- Polo en inf (Cruz roja) -->
    <path d="M 714,-6 L 726,6 M 714,6 L 726,-6" stroke="#dc2626" stroke-width="2.5"/>
    <text x="770" y="4" font-size="10" font-family="system-ui, sans-serif" fill="#64748b">Estado inicial</text>
  </g>

  <!-- Flecha de remocion 1: Sustraccion de k0/s -->
  <path d="M 160,105 Q 160,135 220,135" fill="none" stroke="#d97706" stroke-width="1.8" stroke-dasharray="3,3"/>
  <polygon points="225,135 217,131 217,139" fill="#d97706"/>
  <text x="245" y="130" font-size="10" font-family="monospace" font-weight="bold" fill="#d97706">
    - (3/2)/s (Capacitor C₀ = 2/3 F)
  </text>

  <!-- Línea 2: Z2(s) tras remover polo en s=0 -->
  <g transform="translate(0, 155)">
    <text x="75" y="5" font-size="11" font-family="monospace" font-weight="bold" fill="#0f172a" text-anchor="end">Z₂(s):</text>
    <line x1="100" y1="0" x2="760" y2="0" stroke="#475569" stroke-width="2"/>
    <!-- En w=0 ahora hay un cero trasladado -->
    <circle cx="160" cy="0" r="5" fill="#ffffff" stroke="#059669" stroke-width="2.2"/>
    <text x="160" y="16" font-size="9" font-family="monospace" fill="#059669" text-anchor="middle">cero en 0</text>
    <!-- Cero migrado a sqrt(3/2) ~ 1.22 (x = 350) -->
    <circle cx="360" cy="0" r="5" fill="#ffffff" stroke="#2563eb" stroke-width="2.2"/>
    <!-- Flecha curvada mostrando migracion de cero desde 1 hacia sqrt(3/2) -->
    <path d="M 305,-8 Q 330,-18 355,-8" fill="none" stroke="#2563eb" stroke-width="1.5"/>
    <polygon points="358,-7 350,-12 354,-5" fill="#2563eb"/>
    <text x="360" y="-18" font-size="9.5" font-family="monospace" font-weight="bold" fill="#2563eb" text-anchor="middle">ω = √(3/2)</text>
    <!-- Polo en sqrt(2) intacto -->
    <path d="M 404,-6 L 416,6 M 404,6 L 416,-6" stroke="#dc2626" stroke-width="2.5"/>
    <!-- Polo en inf intacto -->
    <path d="M 714,-6 L 726,6 M 714,6 L 726,-6" stroke="#dc2626" stroke-width="2.5"/>
    <text x="770" y="4" font-size="10" font-family="system-ui, sans-serif" fill="#64748b">Polo en 0 eliminado</text>
  </g>

  <!-- Flecha de remocion 2: Sustraccion de tanque LC paralelo -->
  <path d="M 410,165 Q 410,195 470,195" fill="none" stroke="#d97706" stroke-width="1.8" stroke-dasharray="3,3"/>
  <polygon points="475,195 467,191 467,199" fill="#d97706"/>
  <text x="495" y="190" font-size="10" font-family="monospace" font-weight="bold" fill="#d97706">
    - (1/2 s)/(s² + 2) (Tanque: L = 1/4 H, C = 2 F)
  </text>

  <!-- Línea 3: Z4(s) tras remover tanque en sqrt(2) -->
  <g transform="translate(0, 215)">
    <text x="75" y="5" font-size="11" font-family="monospace" font-weight="bold" fill="#0f172a" text-anchor="end">Z₄(s):</text>
    <line x1="100" y1="0" x2="760" y2="0" stroke="#475569" stroke-width="2"/>
    <!-- Cero en 0 -->
    <circle cx="160" cy="0" r="5" fill="#ffffff" stroke="#059669" stroke-width="2.2"/>
    <!-- Polo en inf restante -->
    <path d="M 714,-6 L 726,6 M 714,6 L 726,-6" stroke="#dc2626" stroke-width="2.5"/>
    <text x="440" y="-8" font-size="10" font-family="monospace" font-weight="bold" fill="#0f172a" text-anchor="middle">
      Z₄(s) = s  ⟹  Inductor serie L_∞ = 1 H
    </text>
    <text x="770" y="4" font-size="10" font-family="system-ui, sans-serif" fill="#64748b">Red sintetizada</text>
  </g>

  <!-- Cuadro inferior de conclusion -->
  <rect x="25" y="245" width="810" height="35" rx="5" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1"/>
  <text x="430" y="267" font-size="10.5" font-family="system-ui, sans-serif" font-weight="bold" fill="#0f172a" text-anchor="middle">
    Conclusión física: Al sustraer un polo, los ceros se desplazan estrictamente hacia la frecuencia del polo removido (migración monotónica).
  </text>
</svg>
  </div>
</div>


<div class="p-3 my-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm">
  <span class="font-bold text-emerald-600 dark:text-emerald-400 font-mono">Ejemplo Canónico Resuelto Paso a Paso (Cátedra TC3):</span>
  $$Z(s) = \\frac{s^4 + 4s^2 + 3}{s^3 + 2s} = \\frac{(s^2 + 1)(s^2 + 3)}{s(s^2 + 2)}$$
  <ul class="list-disc pl-5 mt-1 space-y-1">
    <li>Polo en el origen: $k_0 = \\lim_{s \\to 0} s Z(s) = \\frac{3}{2} \\implies \\mathbf{C_0 = \\frac{2}{3}\\text{ F}}$.</li>
    <li>Polo en $\\omega_2 = \\sqrt{2}$: $2k_2 = \\lim_{s^2 \\to -2} \\frac{s^2 + 2}{s} Z(s) = \\frac{(-2+1)(-2+3)}{-2} = \\frac{1}{2} \\implies \\mathbf{C_2 = 2\\text{ F}}, \\; \\mathbf{L_2 = \\frac{2 k_2}{\\omega_2^2} = \\frac{1/2}{2} = \\frac{1}{4}\\text{ H}}$.</li>
    <li>Polo en el infinito: $k_\\infty = \\lim_{s \\to \\infty} \\frac{Z(s)}{s} = 1 \\implies \\mathbf{L_\\infty = 1\\text{ H}}$.</li>
    <li>Red resultante: Capacitor serie de $2/3\\text{ F}$, tanque paralelo en serie ($L=1/4\\text{ H}, C=2\\text{ F}$), e inductor serie de $1\\text{ H}$.</li>
  </ul>
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
    📐 Forma Canónica Cauer I (LC): Red en Escalera con Extracciones en el Infinito (s → ∞)
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
    📐 Forma Canónica Cauer II (LC): Red en Escalera Inversa con Extracciones en el Origen (s → 0)
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


          
<div class="p-3 my-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-950 dark:text-cyan-200">
  <h6 class="font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
    <span>🔍</span> Remoción Total vs. Remoción Parcial de Polos y Dipolos No Canónicos
  </h6>
  <p class="text-xs mb-2">En la síntesis canónica de Foster y Cauer se efectúa la <strong>remoción total</strong> de un polo en $s = j\\omega_i$, sustrayendo todo su residuo $k_i = \\lim_{s \\to j\\omega_i} \\frac{s^2 + \\omega_i^2}{s} Z(s)$, lo que deja a la función remanente sin ningún polo en esa frecuencia y con el menor grado polinómico posible (red canónica con número mínimo estricto de componentes).</p>
  <p class="text-xs mb-2">Por el contrario, en una <strong>Remoción Parcial de Polo</strong>, se sustrae únicamente una fracción del residuo $0 < k_i' < k_i$ (o en $\\omega = \\infty$ una inductancia menor $L' < L_\\infty$, o en $\\omega = 0$ una capacidad menor):
  $$Z_{rem}(s) = Z(s) - \\frac{2 k_i' s}{s^2 + \\omega_i^2}$$
  El residuo remanente $k_i - k_i' > 0$ garantiza que $Z_{rem}(s)$ <strong>siga siendo una Función Real Positiva (PR)</strong>.</p>
  <p class="text-xs"><strong>Objetivo Cardinal:</strong> Al restar $k_i'$, la curva de reactancia o susceptancia desciende de forma controlada, <strong>forzando a que la función remanente tenga un cero de transmisión en una pulsación arbitraria prefijada $\\omega_z$</strong>: $Z_{rem}(j\\omega_z) = 0$. Luego, al invertir $Y_{rem}(s) = 1/Z_{rem}(s)$, aparece un polo en $\\omega_z$ que se remueve totalmente como un tanque resonante serie LC. Este proceso engendra <strong>dipolos no canónicos</strong> (con más componentes que el grado mínimo), indispensables para satisfacer ceros de atenuación específicos y absorber capacidades parásitas de montaje.</p>
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
    📐 Síntesis de Dipolos RC: Foster I, Foster II, Cauer I y Alternancia de Singularidades
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

          

<div class="my-4 p-3 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xs">
  <span class="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-2 text-center">
    📐 Comportamiento de Dipolos RC y RL en el Semieje Real Negativo y Reglas Cardinales
  </span>
  <div class="flex justify-center overflow-x-auto py-1">
    <svg class="w-full h-auto max-w-4xl mx-auto select-none" viewBox="0 0 860 280" xmlns="http://www.w3.org/2000/svg">
  <!-- PANEL IZQUIERDO: Curva de Impedancia RC en el semieje real negativo sigma -->
  <g transform="translate(15, 10)">
    <rect x="0" y="0" width="405" height="260" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
    <text x="202" y="22" font-size="11.5" font-family="system-ui, sans-serif" font-weight="bold" fill="#0f172a" text-anchor="middle">
      Dipolo RC: Impedancia Z_RC(σ) sobre el Semieje Real Negativo
    </text>

    <!-- Ejes coordenados -->
    <!-- Eje Y: Z_RC(s) en s = sigma -->
    <line x1="330" y1="230" x2="330" y2="40" stroke="#475569" stroke-width="2"/>
    <polygon points="330,34 326,44 334,44" fill="#475569"/>
    <text x="340" y="45" font-size="11" font-family="monospace" font-weight="bold" fill="#0f172a">Z_RC(σ)</text>
    <text x="330" y="242" font-size="10" font-family="monospace" fill="#64748b" text-anchor="middle">σ = 0</text>

    <!-- Eje X: sigma < 0 -->
    <line x1="30" y1="150" x2="370" y2="150" stroke="#475569" stroke-width="2"/>
    <polygon points="375,150 367,146 367,154" fill="#475569"/>
    <text x="40" y="142" font-size="11" font-family="monospace" font-weight="bold" fill="#475569">-σ</text>

    <!-- Asintota horizontal Z(inf) = R_inf -->
    <line x1="30" y1="110" x2="330" y2="110" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3,3"/>
    <text x="35" y="105" font-size="10" font-family="monospace" fill="#059669">R_∞ = Z(∞)</text>

    <!-- Asintota vertical de polo en -sigma_p1 (ej. x=230) -->
    <line x1="230" y1="45" x2="230" y2="230" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,3"/>
    <path d="M 225,145 L 235,155 M 225,155 L 235,145" stroke="#dc2626" stroke-width="2"/>
    <text x="230" y="168" font-size="10" font-family="monospace" font-weight="bold" fill="#dc2626" text-anchor="middle">-σ_p1</text>

    <!-- Cero en -sigma_z1 (ej. x=130) -->
    <circle cx="130" cy="150" r="4.5" fill="#ffffff" stroke="#2563eb" stroke-width="2.2"/>
    <text x="130" y="168" font-size="10" font-family="monospace" font-weight="bold" fill="#2563eb" text-anchor="middle">-σ_z1</text>

    <!-- Polo en el origen sigma=0 si es capacitivo en DC -->
    <path d="M 325,145 L 335,155 M 325,155 L 335,145" stroke="#dc2626" stroke-width="2.2"/>

    <!-- Rama 1: de 0 a polo 1 (cae monotónicamente hacia -infinito) -->
    <path d="M 328,55 C 320,110 280,140 236,225" fill="none" stroke="#2563eb" stroke-width="2.4"/>

    <!-- Rama 2: de +infinito en el polo 1 pasando por el cero hacia R_inf -->
    <path d="M 224,55 C 210,120 170,145 130,150 C 90,155 50,115 35,112" fill="none" stroke="#2563eb" stroke-width="2.4"/>

    <!-- Cuadro resumen de propiedad derivada -->
    <rect x="25" y="195" width="180" height="45" rx="5" fill="#eff6ff" stroke="#93c5fd" stroke-width="1"/>
    <text x="115" y="214" font-size="11" font-family="monospace" font-weight="bold" fill="#1e40af" text-anchor="middle">
      dZ_RC(σ) / dσ &lt; 0
    </text>
    <text x="115" y="230" font-size="9.5" font-family="system-ui, sans-serif" fill="#1e3a8a" text-anchor="middle">
      Pendiente estrictamente negativa
    </text>
  </g>

  <!-- PANEL DERECHO: Resumen de Reglas de Dipolos Disipativos RC vs RL -->
  <g transform="translate(435, 10)">
    <rect x="0" y="0" width="410" height="260" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
    <text x="205" y="22" font-size="11.5" font-family="system-ui, sans-serif" font-weight="bold" fill="#0f172a" text-anchor="middle">
      Reglas Cardinales de Singularidades (Cátedra TC3)
    </text>

    <g transform="translate(15, 40)">
      <rect x="0" y="0" width="380" height="85" rx="6" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1"/>
      <text x="15" y="18" font-size="11" font-family="system-ui, sans-serif" font-weight="bold" fill="#1e40af">
        1. Para Impedancias RC ó Admitancias RL:
      </text>
      <text x="15" y="36" font-size="10" font-family="system-ui, sans-serif" fill="#334155">
        • La singularidad más próxima al origen es siempre un <strong style="fill:#dc2626;">POLO</strong> (o en σ = 0).
      </text>
      <text x="15" y="52" font-size="10" font-family="system-ui, sans-serif" fill="#334155">
        • En el infinito tiende a un CERO o a una constante finita: Z(0) &gt; Z(∞).
      </text>
      <text x="15" y="68" font-size="10" font-family="monospace" font-weight="bold" fill="#047857">
        Foster I: Expandir Z_RC(s) directamente (residuos reales y positivos).
      </text>
    </g>

    <g transform="translate(15, 140)">
      <rect x="0" y="0" width="380" height="85" rx="6" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1"/>
      <text x="15" y="18" font-size="11" font-family="system-ui, sans-serif" font-weight="bold" fill="#92400e">
        2. Para Admitancias RC ó Impedancias RL:
      </text>
      <text x="15" y="36" font-size="10" font-family="system-ui, sans-serif" fill="#334155">
        • La singularidad más próxima al origen es siempre un <strong style="fill:#2563eb;">CERO</strong> (o en σ = 0).
      </text>
      <text x="15" y="52" font-size="10" font-family="system-ui, sans-serif" fill="#334155">
        • En el infinito tiende a un POLO o a una constante finita: Y(0) &lt; Y(∞).
      </text>
      <text x="15" y="68" font-size="10" font-family="monospace" font-weight="bold" fill="#7c3aed">
        Foster II: Expandir Y_RC(s)/s (para garantizar residuos positivos).
      </text>
    </g>

    <text x="205" y="245" font-size="10" font-family="monospace" font-weight="bold" fill="#0f172a" text-anchor="middle">
      Dualidad exacta: Z_RL(s) = s · Z_RC(s) | Y_RC(s) = s · Y_RL(s)
    </text>
  </g>
</svg>
  </div>
</div>


<h5 class="text-sm font-bold text-slate-900 dark:text-white mt-6 mb-2">Las Conclusiones Cardinales de la Cátedra para Dipolos RC y RL</h5>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3 my-3 text-xs sm:text-sm">
  <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
    <div class="font-bold text-blue-600 dark:text-blue-400 font-mono">Reglas para Impedancias RC / Admitancias RL</div>
    <ol class="list-decimal pl-5 space-y-1">
      <li>Función racional cociente de polinomios en $s$.</li>
      <li>Polos y ceros simples alternados en el semieje real negativo: $\\mathbf{\\frac{\\partial Z_{RC}}{\\partial \\sigma} < 0}$ y $\\mathbf{\\frac{\\partial Y_{RL}}{\\partial \\sigma} < 0}$ para $-\\infty < \\sigma < 0$.</li>
      <li>En continua (CC): exhibe un polo (comportamiento capacitivo) o valor real (resistivo) para $Z_{RC}$.</li>
      <li>En CC: exhibe un polo (comportamiento inductivo) o valor real (resistivo) para $Y_{RL}$.</li>
      <li>En alta frecuencia: valor real (resistivo) o un cero (capacitivo/inductivo).</li>
      <li>Diferencia de grados de potencias extremas: $-1$ o $0$.</li>
      <li><strong>La primera singularidad más próxima al origen es obligatoriamente un POLO:</strong><br>
        $$\\mathbf{Z_{RC}(0) > Z_{RC}(\\infty)}, \\qquad \\mathbf{Y_{RL}(0) > Y_{RL}(\\infty)}$$
      </li>
    </ol>
  </div>

  <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
    <div class="font-bold text-indigo-600 dark:text-indigo-400 font-mono">Reglas para Admitancias RC / Impedancias RL</div>
    <ol class="list-decimal pl-5 space-y-1">
      <li>Función racional cociente de polinomios en $s$.</li>
      <li>Polos y ceros simples alternados en el semieje real negativo: $\\mathbf{\\frac{\\partial Y_{RC}}{\\partial \\sigma} < 0}$ y $\\mathbf{\\frac{\\partial Z_{RL}}{\\partial \\sigma} < 0}$.</li>
      <li>En continua (CC): exhibe un cero (capacitivo/inductivo) o valor real (resistivo).</li>
      <li>En alta frecuencia: valor real o un polo (capacitivo/inductivo).</li>
      <li>Diferencia de grados de potencias extremas: $+1$ o $0$.</li>
      <li><strong>La primera singularidad más próxima al origen es obligatoriamente un CERO:</strong><br>
        $$\\mathbf{Y_{RC}(0) < Y_{RC}(\\infty)}, \\qquad \\mathbf{Z_{RL}(0) < Z_{RL}(\\infty)}$$
      </li>
      <li>Para Foster II RC se expande $\\mathbf{\\frac{Y_{RC}(s)}{s}}$ asegurando residuos positivos.</li>
    </ol>
  </div>
</div>

<div class="p-3.5 my-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm">
  <span class="font-bold text-emerald-950 dark:text-emerald-300 font-mono">Ejemplo Resuelto en Clase: Síntesis de Dipolo RC</span>
  $$Z(s) = \\frac{s^2 + 4s + 3}{s^2 + 2s} = \\frac{(s+1)(s+3)}{s(s+2)}$$
  <p class="mt-1">Polo en $s=0$, cero en $s=-1$, polo en $s=-2$, cero en $s=-3$. Se verifica la alternancia en el semieje negativo y polo más próximo al origen.</p>
  <ul class="list-disc pl-5 mt-1 space-y-1">
    <li><strong>Por Foster I RC:</strong><br>
      $$Z(s) = Z(\\infty) + \\frac{k_0}{s} + \\frac{k_1}{s + 2} = 1 + \\frac{3/2}{s} + \\frac{1/2}{s + 2}$$
      Elementos: Resistencia serie $R_\\infty = 1\\,\\Omega$, capacitor serie $C_0 = 1/k_0 = \\mathbf{2/3\\text{ F}}$, y celda paralela $R_1 \\parallel C_1$ con $C_1 = 1/k_1 = \\mathbf{2\\text{ F}}$ y $R_1 = k_1 / \\sigma_1 = (1/2)/2 = \\mathbf{1/4\\,\\Omega}$.
    </li>
    <li><strong>Por Foster II RC:</strong><br>
      $$\\frac{Y(s)}{s} = \\frac{s + 2}{(s+1)(s+3)} = \\frac{1/2}{s+1} + \\frac{1/2}{s+3} \\implies Y(s) = \\frac{1/2 s}{s+1} + \\frac{1/2 s}{s+3}$$
      Elementos: Dos ramas serie $R-C$ conectadas en paralelo: rama 1 ($C_a = 1/2\\text{ F}, R_a = 2\\,\\Omega$) en paralelo con rama 2 ($C_b = 1/2\\text{ F}, R_b = 6\\,\\Omega$).
    </li>
  </ul>
</div>
`
        },
        {
          id: 'tc3-u3-funciones-minimas-preambulo',
          titulo: '3.6 Funciones Mínimas y Preámbulo de Foster',
          contenido: `
<p class="mb-3">Cuando una función de inmitancia positiva real (PR) contiene resistencias, inductores y capacitores simultáneamente ($RLC$), ya no se puede sintetizar directamente mediante los métodos de Foster o Cauer convencionales. Otto Brune demostró que el procedimiento general requiere identificar si la función posee singularidades en el eje imaginario o si se trata de una <strong>función mínima</strong>.</p>

<h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Clasificación Estricta de Funciones de Excitación</h5>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-3 text-xs sm:text-sm">
  <div class="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
    <strong class="text-blue-600 dark:text-blue-400 font-mono">Mínima Reactancia:</strong><br>
    $Z(s)$ <strong>no tiene polos sobre el eje imaginario $j\\omega$</strong> (ni en el origen $s=0$ ni en el infinito $s \\to \\infty$).
  </div>
  <div class="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
    <strong class="text-indigo-600 dark:text-indigo-400 font-mono">Mínima Susceptancia:</strong><br>
    $Y(s)$ <strong>no tiene polos sobre el eje imaginario $j\\omega$</strong> (es decir, $Z(s)$ no tiene ceros sobre $j\\omega$).
  </div>
  <div class="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
    <strong class="text-amber-600 dark:text-amber-400 font-mono">Mínima Resistencia:</strong><br>
    Existe al menos una frecuencia finita $\\omega_i$ donde la parte real se anula:<br>
    $\\mathbf{\\text{Re}[Z(j\\omega_i)] = 0}$.
  </div>
  <div class="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
    <strong class="text-emerald-600 dark:text-emerald-400 font-mono">Función Mínima (Completa):</strong><br>
    Una inmitancia es <strong>FUNCIÓN MÍNIMA</strong> si es de <strong>mínima parte real y de mínima parte imaginaria simultáneamente</strong>.
  </div>
</div>

<h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">El Preámbulo de Foster</h5>
<p class="mb-2">El <strong>Preámbulo de Foster</strong> es el algoritmo previo que <em>transforma cualquier función PR que no sea de mínima parte imaginaria en una función que sí lo sea</em>. Consiste en remover de manera ordenada todos los polos y ceros que residan sobre el eje $j\\omega$:</p>

<ol class="list-decimal pl-5 space-y-1.5 text-xs sm:text-sm mb-3">
  <li><strong>Detección de ceros/polos sobre $j\\omega$ (Terminación Abrupta):</strong> Se toma el numerador o denominador y se realiza la división euclídea entre su parte par y su parte impar. Si la división termina abruptamente con resto cero, el último divisor no nulo contiene exactamente las raíces sobre el eje imaginario $\\mathbf{(s^2 + \\omega_i^2)}$.</li>
  <li><strong>Remoción de polos de impedancia:</strong> Si $Z(s)$ tiene un polo en $s = \\pm j\\omega_i$, se calcula su residuo $2k_i$ y se resta un tanque LC paralelo en serie:
    $$Z_2(s) = Z(s) - \\frac{2 k_i s}{s^2 + \\omega_i^2} \\qquad \\left( C_i = \\frac{1}{2 k_i}, \\quad L_i = \\frac{2 k_i}{\\omega_i^2} \\right)$$
  </li>
  <li><strong>Remoción de polos de admitancia:</strong> Si la función posee ceros en $j\\omega$, se invierte a admitancia $Y(s) = 1/Z(s)$ (donde pasan a ser polos) y se remueve una rama resonante LC serie conectada en paralelo:
    $$Y_2(s) = Y(s) - \\frac{2 k'_i s}{s^2 + \\omega_i^2} \\qquad \\left( L_i = \\frac{1}{2 k'_i}, \\quad C_i = \\frac{2 k'_i}{\\omega_i^2} \\right)$$
  </li>
  <li>El proceso concluye cuando la función residual no posee ninguna singularidad sobre el eje $j\\omega$, quedando lista para el método de Brune o Bott-Duffin.</li>
</ol>

          `
        },
        {
          id: 'tc3-u3-metodo-brune',
          titulo: '3.7 Síntesis de Funciones Mínimas por el Método de Brune',
          contenido: `
<p class="mb-3">Propuesto por Otto Brune en su tesis doctoral de 1931 en el MIT, este método es la primera técnica matemática universal capaz de sintetizar <strong>cualquier función Real Positiva (PR) arbitraria</strong>. Se aplica sobre una <strong>función mínima</strong> obtenida tras el Preámbulo de Foster.</p>

<h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">El Algoritmo Clásico de Brune Paso a Paso</h5>
<ol class="list-decimal pl-5 space-y-2 text-xs sm:text-sm mb-3">
  <li><strong>Extracción de la Resistencia Mínima ($R_{min}$):</strong> Se evalúa la parte real $\\text{Re}[Z(j\\omega)] = \\left. \\frac{m_1 m_2 - n_1 n_2}{m_2^2 - n_2^2} \\right|_{s=j\\omega}$ y se busca su mínimo absoluto derivando respecto a $\\omega$. Sea $R_{min} = \\min_{\\omega} \\text{Re}[Z(j\\omega)]$ en la pulsación $\\omega_0$. Se sustrae en serie:
    $$Z_2(s) = Z(s) - R_{min} \\implies \\text{Re}[Z_2(j\\omega_0)] = 0$$
  </li>
  <li><strong>Evaluación de la Reactancia en $\\omega_0$:</strong> En la frecuencia del mínimo $\\omega_0$, como $\\text{Re}[Z_2(j\\omega_0)] = 0$, la impedancia es puramente reactiva: $Z_2(j\\omega_0) = j X_0$.
    <ul>
      <li>Si $X_0 < 0$ (reactancia capacitiva negativa, caso fundamental): Se extrae un <strong>inductor serie de valor negativo</strong>:
        $$\\mathbf{L_1 = \\frac{X_0}{\\omega_0} < 0}$$
      </li>
    </ul>
  </li>
  <li><strong>Creación y Remoción de Ceros en $j\\omega$:</strong> Al sustraer el inductor negativo, la nueva impedancia:
    $$Z_4(s) = Z_2(s) - s L_1 = Z_2(s) + s |L_1|$$
    satisface obligatoriamente $Z_4(j\\omega_0) = j X_0 - j \\omega_0 L_1 = j X_0 - j X_0 = 0$. ¡Posee un par de ceros sobre el eje imaginario en $s = \\pm j\\omega_0$!
  </li>
  <li><strong>Remoción del Polo de Admitancia:</strong> Invirtiendo $Y_4(s) = 1/Z_4(s)$, el par de ceros se convierte en polos en $\\pm j\\omega_0$. Se remueve el polo como una <strong>rama resonante LC serie en derivación</strong> ($L_2, C_2$ con $L_2 C_2 = 1/\\omega_0^2$):
    $$Y_6(s) = Y_4(s) - \\frac{2 k_2 s}{s^2 + \\omega_0^2} \\implies Z_6(s) = \\frac{1}{Y_6(s)} = s L_3 + R_L$$
  </li>
</ol>


<div class="my-4 p-3 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xs">
  <span class="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-2 text-center">
    📐 Síntesis de Funciones Mínimas: Método de Brune (k=1) vs Método de Bott-Duffin (Transformerless)
  </span>
  <div class="flex justify-center overflow-x-auto py-1">
    <svg class="w-full h-auto max-w-4xl mx-auto select-none" viewBox="0 0 860 320" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(15, 10)">
    <rect x="0" y="0" width="405" height="300" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
    <text x="202" y="24" font-size="12" font-family="system-ui, sans-serif" font-weight="bold" fill="#0f172a" text-anchor="middle">
      Método de Brune: Inductor Negativo y Transformador (k = 1)
    </text>

    <circle cx="25" cy="80" r="3.5" fill="#2563eb"/>
    <circle cx="25" cy="230" r="3.5" fill="#2563eb"/>
    <text x="35" y="75" font-size="11" font-family="monospace" font-weight="bold" fill="#2563eb">Z_in</text>

    <line x1="25" y1="80" x2="65" y2="80" stroke="#334155" stroke-width="2"/>
    <rect x="65" y="73" width="35" height="14" fill="#ffffff" stroke="#334155" stroke-width="1.8"/>
    <text x="82" y="66" font-size="10" font-family="system-ui, sans-serif" font-weight="bold" fill="#0f172a" text-anchor="middle">R_min</text>
    <line x1="100" y1="80" x2="135" y2="80" stroke="#334155" stroke-width="2"/>

    <rect x="135" y="48" width="160" height="150" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.2" stroke-dasharray="3,3"/>
    <text x="215" y="64" font-size="10" font-family="system-ui, sans-serif" font-weight="bold" fill="#1d4ed8" text-anchor="middle">
      Transformador Ideal (k = 1)
    </text>

    <path d="M 140,95 Q 148,82 156,95 Q 164,82 172,95 Q 180,82 188,95" fill="none" stroke="#dc2626" stroke-width="2"/>
    <text x="164" y="80" font-size="10" font-family="monospace" font-weight="bold" fill="#dc2626" text-anchor="middle">L₁ &lt; 0</text>

    <circle cx="205" cy="95" r="3" fill="#334155"/>
    <line x1="188" y1="95" x2="205" y2="95" stroke="#334155" stroke-width="2"/>
    <line x1="205" y1="95" x2="225" y2="95" stroke="#334155" stroke-width="2"/>

    <path d="M 225,95 Q 233,82 241,95 Q 249,82 257,95 Q 265,82 273,95" fill="none" stroke="#2563eb" stroke-width="2"/>
    <text x="249" y="80" font-size="10" font-family="monospace" font-weight="bold" fill="#2563eb" text-anchor="middle">L₃ &gt; 0</text>
    <line x1="273" y1="95" x2="295" y2="95" stroke="#334155" stroke-width="2"/>

    <line x1="205" y1="95" x2="205" y2="115" stroke="#334155" stroke-width="2"/>
    <path d="M 205,115 Q 192,123 205,131 Q 192,139 205,147 Q 192,155 205,163" fill="none" stroke="#2563eb" stroke-width="2"/>
    <text x="225" y="142" font-size="10" font-family="monospace" font-weight="bold" fill="#2563eb">L₂</text>
    <line x1="205" y1="163" x2="205" y2="180" stroke="#334155" stroke-width="2"/>
    <line x1="195" y1="180" x2="215" y2="180" stroke="#334155" stroke-width="2"/>
    <line x1="195" y1="186" x2="215" y2="186" stroke="#334155" stroke-width="2"/>
    <line x1="205" y1="186" x2="205" y2="230" stroke="#334155" stroke-width="2"/>
    <text x="225" y="186" font-size="10" font-family="monospace" font-weight="bold" fill="#2563eb">C₂</text>

    <line x1="295" y1="95" x2="335" y2="95" stroke="#334155" stroke-width="2"/>
    <line x1="335" y1="95" x2="335" y2="140" stroke="#334155" stroke-width="2"/>
    <rect x="328" y="140" width="14" height="35" fill="#ffffff" stroke="#334155" stroke-width="1.8"/>
    <text x="352" y="160" font-size="10" font-family="monospace" font-weight="bold" fill="#0f172a">R_L</text>
    <line x1="335" y1="175" x2="335" y2="230" stroke="#334155" stroke-width="2"/>

    <line x1="25" y1="230" x2="335" y2="230" stroke="#334155" stroke-width="2"/>
    <circle cx="205" cy="230" r="3" fill="#334155"/>

    <rect x="15" y="245" width="375" height="45" rx="5" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1"/>
    <text x="202" y="262" font-size="10.5" font-family="system-ui, sans-serif" font-weight="bold" fill="#0f172a" text-anchor="middle">
      L_p = L₁ + L₂,  L_s = L₂ + L₃,  M = L₂ = √(L_p · L_s) ⟹ k = 1
    </text>
    <text x="202" y="278" font-size="10" font-family="system-ui, sans-serif" fill="#475569" text-anchor="middle">
      La inductancia negativa física queda absorbida en el acoplamiento magnético.
    </text>
  </g>

  <g transform="translate(435, 10)">
    <rect x="0" y="0" width="410" height="300" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
    <text x="205" y="24" font-size="12" font-family="system-ui, sans-serif" font-weight="bold" fill="#0f172a" text-anchor="middle">
      Método de Bott-Duffin: Síntesis Sin Transformadores (Richard)
    </text>

    <circle cx="25" cy="90" r="3.5" fill="#9333ea"/>
    <circle cx="25" cy="230" r="3.5" fill="#9333ea"/>
    <text x="35" y="85" font-size="11" font-family="monospace" font-weight="bold" fill="#9333ea">Z_in</text>

    <line x1="25" y1="90" x2="70" y2="90" stroke="#334155" stroke-width="2"/>
    <circle cx="70" cy="90" r="3" fill="#334155"/>
    <line x1="70" y1="65" x2="70" y2="115" stroke="#334155" stroke-width="2"/>

    <line x1="70" y1="65" x2="110" y2="65" stroke="#334155" stroke-width="2"/>
    <line x1="110" y1="57" x2="110" y2="73" stroke="#334155" stroke-width="2.2"/>
    <line x1="117" y1="57" x2="117" y2="73" stroke="#334155" stroke-width="2.2"/>
    <line x1="117" y1="65" x2="155" y2="65" stroke="#334155" stroke-width="2"/>
    <text x="113" y="52" font-size="10" font-family="monospace" font-weight="bold" fill="#0f172a" text-anchor="middle">C₀ = 1/(k·Z(k))</text>

    <line x1="70" y1="115" x2="95" y2="115" stroke="#334155" stroke-width="2"/>
    <rect x="95" y="106" width="40" height="18" fill="#ffffff" stroke="#9333ea" stroke-width="1.8"/>
    <text x="115" y="119" font-size="10" font-family="monospace" font-weight="bold" fill="#9333ea" text-anchor="middle">Z_A(s)</text>
    <line x1="135" y1="115" x2="155" y2="115" stroke="#334155" stroke-width="2"/>

    <line x1="155" y1="65" x2="155" y2="115" stroke="#334155" stroke-width="2"/>
    <circle cx="155" cy="90" r="3" fill="#334155"/>
    <line x1="155" y1="90" x2="200" y2="90" stroke="#334155" stroke-width="2"/>

    <circle cx="200" cy="90" r="3" fill="#334155"/>
    <line x1="200" y1="65" x2="200" y2="115" stroke="#334155" stroke-width="2"/>

    <line x1="200" y1="65" x2="220" y2="65" stroke="#334155" stroke-width="2"/>
    <path d="M 220,65 Q 228,52 236,65 Q 244,52 252,65 Q 260,52 268,65" fill="none" stroke="#2563eb" stroke-width="2"/>
    <line x1="268" y1="65" x2="290" y2="65" stroke="#334155" stroke-width="2"/>
    <text x="244" y="52" font-size="10" font-family="monospace" font-weight="bold" fill="#0f172a" text-anchor="middle">L₀ = Z(k)/k</text>

    <line x1="200" y1="115" x2="225" y2="115" stroke="#334155" stroke-width="2"/>
    <rect x="225" y="106" width="40" height="18" fill="#ffffff" stroke="#9333ea" stroke-width="1.8"/>
    <text x="245" y="119" font-size="10" font-family="monospace" font-weight="bold" fill="#9333ea" text-anchor="middle">Z_B(s)</text>
    <line x1="265" y1="115" x2="290" y2="115" stroke="#334155" stroke-width="2"/>

    <line x1="290" y1="65" x2="290" y2="115" stroke="#334155" stroke-width="2"/>
    <circle cx="290" cy="90" r="3" fill="#334155"/>
    <line x1="290" y1="90" x2="340" y2="90" stroke="#334155" stroke-width="2"/>

    <line x1="340" y1="90" x2="340" y2="230" stroke="#334155" stroke-width="2"/>
    <line x1="25" y1="230" x2="340" y2="230" stroke="#334155" stroke-width="2"/>

    <rect x="15" y="245" width="380" height="45" rx="5" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1"/>
    <text x="205" y="262" font-size="10.5" font-family="system-ui, sans-serif" font-weight="bold" fill="#0f172a" text-anchor="middle">
      Función de Richard: R(s) = [k·Z(s) - s·Z(k)] / [k·Z(k) - s·Z(s)]
    </text>
    <text x="205" y="278" font-size="10" font-family="system-ui, sans-serif" fill="#475569" text-anchor="middle">
      Se elige k &gt; 0 tal que R(±jω₀) = 0. Reduce el grado en 2 unidades sin transformadores.
    </text>
  </g>
</svg>
  </div>
</div>


<h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Materialización Física: Transformador con Acoplamiento Perfecto (k = 1)</h5>
<p class="mb-2">La red resultante contiene una T inductiva con $L_1 < 0$ serie, $L_2 > 0$ en derivación y $L_3 > 0$ serie. Aunque no se puede adquirir un inductor negativo individual, Brune demostró que esta T inductiva equivale exactamente a un <strong>par de bobinas acopladas magnéticamente con acoplamiento perfecto</strong> ($k = 1$):</p>
$$\\mathbf{L_p = L_1 + L_2 > 0}, \\qquad \\mathbf{L_s = L_2 + L_3 > 0}, \\qquad \\mathbf{M = L_2 > 0}$$
$$\\mathbf{k = \\frac{M}{\\sqrt{L_p \\cdot L_s}} = \\frac{L_2}{\\sqrt{(L_1 + L_2)(L_2 + L_3)}} \\equiv 1}$$
<p class="text-xs text-slate-600 dark:text-slate-400">El acoplamiento magnético estricto absorbe la inductancia negativa virtual, dando un transformador real perfectamente realizable con bobinado primario $L_p$, secundario $L_s$ e inductancia mutua $M$.</p>

          `
        },
        {
          id: 'tc3-u3-metodo-bott-duffin',
          titulo: '3.8 Síntesis de Funciones Mínimas por el Método de Bott-Duffin (Transformerless)',
          contenido: `
<p class="mb-3">El método de Brune requería inexorablemente un transformador con acoplamiento magnético perfecto ($k=1$), el cual en altas frecuencias presenta pérdidas en el núcleo, capacidades parásitas inter-bobinado y volumen indeseado. En 1949, <strong>Raoul Bott y Richard J. Duffin</strong> sorprendieron a la comunidad académica al demostrar que <strong>toda función Real Positiva puede sintetizarse sin inductancias mutuas ni transformadores (red transformerless)</strong>.</p>

<h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">El Teorema de Richard</h5>
<p class="mb-2">El método se fundamenta en el teorema postulado por Paul I. Richard (1947). Para cualquier función real positiva $Z(s)$ y cualquier número real estrictamente positivo $k > 0$, la <strong>función de Richard $R(s)$</strong>:</p>
$$\\mathbf{R(s) = \\frac{k \\cdot Z(s) - s \\cdot Z(k)}{k \\cdot Z(k) - s \\cdot Z(s)}}$$
<p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-2">es también una función Real Positiva (PR). Despejando algebraicamente $Z(s)$ de la ecuación de Richard, se obtiene una descomposición idéntica a la suma de dos impedancias en paralelo:</p>
$$Z(s) = \\cfrac{1}{\\cfrac{s}{k Z(k)} + \\cfrac{1}{Z(k) R(s)}} + \\cfrac{1}{\\cfrac{k}{s Z(k)} + \\cfrac{R(s)}{Z(k)}}$$

<div class="p-3.5 my-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-950 dark:text-purple-200 text-xs sm:text-sm">
  <div class="font-bold font-mono mb-1">Topología Canónica de Bott-Duffin:</div>
  Consta de dos bloques en serie, cada uno compuesto por dos ramas en paralelo:
  <ul class="list-disc pl-5 mt-1 space-y-1">
    <li><strong>Bloque 1:</strong> Un capacitor $C_0 = \\frac{1}{k Z(k)}$ en paralelo con la impedancia $Z_A(s) = Z(k) R(s)$.</li>
    <li><strong>Bloque 2:</strong> Un inductor $L_0 = \\frac{Z(k)}{k}$ en paralelo con la impedancia $Z_B(s) = \\frac{Z(k)}{R(s)}$.</li>
  </ul>
</div>

<h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Elección de la Constante de Richard k</h5>
<p class="mb-2">Para que el procedimiento reduzca el grado de la función en 2 unidades, se elige el valor de $k$ de modo que la función de Richard $R(s)$ tenga un par de ceros sobre el eje imaginario a la frecuencia $\\omega_0$ del mínimo de resistencia (donde $\\text{Re}[Z(j\\omega_0)] = 0$ y $Z(j\\omega_0) = j\\omega_0 L_0$ ó $1/(j\\omega_0 C_0)$):</p>
$$k Z(k) = \\frac{1}{C_0} \\quad (\\text{si es capacitivo}) \\qquad \\text{ó} \\qquad \\mathbf{Z(k) - k L_0 = 0} \\quad (\\text{si es inductivo})$$
<p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Esta ecuación polinomial siempre posee al menos una raíz real positiva $k > 0$. Al calcular $R(s)$ con dicho $k$, los factores $(s^2 + \\omega_0^2)$ se cancelan en el numerador y denominador, reduciendo el grado en 2 unidades y permitiendo sintetizar $Z_A(s)$ y $Z_B(s)$ por etapas elementales hasta agotar la red <em>sin un solo transformador</em>.</p>

          `
        },
        {
          id: 'tc3-u3-metodo-miyata',
          titulo: '3.9 Síntesis Sistemática de Funciones Mínimas por el Método de Miyata',
          contenido: `
<p class="mb-3">El <strong>Método de Akira Miyata (1955)</strong> constituye uno de los hitos más elegantes de la teoría de síntesis de redes. Proporciona una solución sistemática para sintetizar funciones PR mínimas (que carecen de ceros y polos sobre el eje $j\\omega$ y tienen parte real mínima no nula) <strong>sin recurrir a transformadores ideales ni inductancias mutuamente acopladas</strong> (evitando la principal desventaja de Brune) y <strong>sin multiplicar artificiosamente el grado del circuito</strong> (evitando el inflado polinómico exponencial de Bott-Duffin).</p>

<div class="p-4 my-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-950 dark:text-emerald-200">
  <h5 class="font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
    <span>📜</span> Condición Estricta de Aplicabilidad de Miyata
  </h5>
  <p class="text-xs">Sea una impedancia Real Positiva $Z(s) = \\frac{P(s)}{Q(s)}$ cuyo denominador $Q(s)$ es estrictamente de Hurwitz. Su parte real evaluada sobre el eje imaginario $s = j\\omega$ es:
  $$\\text{Re}[Z(j\\omega)] = \\frac{A(\\omega^2)}{B(\\omega^2)} = \\frac{a_0 + a_2 \\omega^2 + a_4 \\omega^4 + \\dots + a_{2n}\\omega^{2n}}{B(\\omega^2)}$$
  El Teorema de Miyata establece que si todos los coeficientes del polinomio par del numerador son <strong>estrictamente no negativos</strong>:
  $$\\mathbf{a_{2k} \\ge 0 \\quad \\forall k \\in \\{0, 1, 2, \\dots, n\\}}$$
  entonces $Z(s)$ puede sintetizarse como la <strong>conexión en serie de $n+1$ redes en escalera LC puras sin acoplamiento magnético, cada una terminada en un resistor pasivo positivo $R_k$</strong>.</p>
</div>

<h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">1. Algoritmo Constructivo de Descomposición de Miyata</h5>
<div class="space-y-3 my-3">
  <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm">
    <span class="font-bold text-blue-600 dark:text-blue-400 font-mono">Paso 1: Desglose de la Parte Real</span>
    Se descompone la función parte real en la suma de $n+1$ fracciones elementales:
    $$\\text{Re}[Z(j\\omega)] = \\sum_{k=0}^n \\text{Re}[Z_k(j\\omega)] = \\frac{a_0}{B(\\omega^2)} + \\frac{a_2 \\omega^2}{B(\\omega^2)} + \\dots + \\frac{a_{2n}\\omega^{2n}}{B(\\omega^2)}$$
  </div>

  <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm">
    <span class="font-bold text-indigo-600 dark:text-indigo-400 font-mono">Paso 2: Reconstrucción de cada Sub-Impedancia $Z_k(s)$</span>
    A partir de la descomposición de Hurwitz del denominador $Q(s) = m(s) + n(s)$ donde $B(\\omega^2) = m^2 - n^2|_{s=j\\omega}$:
    $$\\text{Ev}[Z_k(s)] = \\frac{a_{2k} (-s^2)^k}{m^2(s) - n^2(s)}$$
    Se reconstruye analíticamente cada $Z_k(s) = \\frac{m_k(s) + n_k(s)}{m(s) + n(s)}$ aplicando el método de Gewertz o expansión algebraica directa. Cada $Z_k(s)$ es por construcción una función Real Positiva PR.
  </div>

  <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm">
    <span class="font-bold text-emerald-600 dark:text-emerald-400 font-mono">Paso 3: Síntesis en Escalera Canónica de cada Rama</span>
    Cada sub-impedancia $Z_k(s)$ tiene una propiedad topológica formidable:
    <ul class="list-disc pl-5 mt-1 space-y-1 text-xs">
      <li><strong>Término $Z_0(s)$ (con numerador $a_0$):</strong> Posee todos sus ceros de transmisión agrupados en $\\mathbf{\\omega = \\infty}$. Se sintetiza directamente mediante divisiones sucesivas continuadas tipo <strong>Cauer I</strong> (inductores en serie y capacitores en paralelo), terminando en un resistor $R_0 = a_0 / B(0)$.</li>
      <li><strong>Término $Z_n(s)$ (con numerador $a_{2n}\\omega^{2n}$):</strong> Posee todos sus ceros de transmisión concentrados en $\\mathbf{\\omega = 0}$. Se sintetiza directamente mediante divisiones sucesivas tipo <strong>Cauer II</strong> (capacitores en serie e inductores en paralelo), terminando en un resistor $R_n$.</li>
      <li><strong>Términos intermedios $Z_k(s)$ (con $\\omega^{2k}$):</strong> Poseen ceros de transmisión compartidos entre $\\omega=0$ y $\\omega=\\infty$. Se alternan extracciones de Cauer I y Cauer II.</li>
    </ul>
  </div>
</div>

<div class="p-3 my-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs">
  <span class="font-bold text-slate-800 dark:text-slate-200 font-mono">Topología Final:</span> La impedancia total $Z(s)$ resulta de conectar las ramas resultantes en serie:
  $$\\mathbf{Z(s) = Z_0(s) + Z_1(s) + \\dots + Z_n(s)}$$
  Es una red enteramente pasiva, recíproca, sin transformadores ni acoplamientos mutuos, con un número de elementos notablemente inferior al de Bott-Duffin.
</div>

          `
        },
        {
          id: 'tc3-u3-tabla-resumen',
          titulo: '3.10 Tabla Comparativa Maestra y Formulario de Examen - Síntesis de Dipolos',
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
      titulo: 'Unidad 4: Análisis de Cuadripolos, Interconexiones y MAI',
      icono: '🔲',
      badgeColor: 'border-rose-500/40 bg-rose-950/40 text-rose-300',
      introduccion: 'Esta unidad desarrolla la teoría completa de redes de dos puertos (cuadripolos), sus seis matrices de parámetros características ([z], [y], [T], [T\'], [h], [g]), las reglas de interconexión con el ensayo de validez de Brune, el teorema de bisección de Bartlett para redes simétricas, y el método nodal más potente: la Matriz de Admitancia Indefinida (MAI) de Puckett.',
      secciones: [
        {
          id: 'tc3-u4-cuadripolos-fundamentos-matrices',
          titulo: '4.1 Fundamentos de Redes de Dos Puertos (Cuadripolos) y las 6 Matrices Características',
          contenido: `
<p class="mb-3">Un <strong>cuadripolo o red de dos puertos</strong> es un circuito de cuatro terminales agrupados en dos pares (puerto de entrada 1-1' y puerto de salida 2-2') que satisface rigurosamente la <strong>condición de corriente de puerto</strong>: la corriente que ingresa por el terminal superior es exactamente idéntica a la que sale por el terminal inferior homólogo ($I_1 = I'_1$ e $I_2 = I'_2$).</p>

<h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Clasificación Cardinal de los Cuadripolos</h5>
<ul class="list-disc pl-5 space-y-1 text-xs sm:text-sm mb-3">
  <li><strong>Pasivos / Activos:</strong> Según contengan únicamente elementos $R, L, C$ o incluyan fuentes controladas y amplificadores operacionales.</li>
  <li><strong>Lineales / No lineales:</strong> Si satisfacen el principio de superposición para cualquier nivel de excitación.</li>
  <li><strong>Bilaterales (Recíprocos) / Unilaterales:</strong> En redes recíprocas, la transferencia en sentido directo es idéntica a la transferencia en sentido inverso ($z_{12} = z_{21}$, $y_{12} = y_{21}$, $AD - BC = 1$). Las fuentes controladas convierten al cuadripolo en no recíproco.</li>
  <li><strong>Simétricos / Asimétricos:</strong> Un cuadripolo es simétrico si sus puertos pueden intercambiarse sin alterar las tensiones ni corrientes externas ($z_{11} = z_{22}$, $y_{11} = y_{22}$, $A = D$).</li>
</ul>

<h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Los Tres Problemas de la Teoría de Cuadripolos</h5>
<div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 my-3 text-xs">
  <div class="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
    <strong>a) Problema de la Transferencia:</strong><br>
    Determinar la respuesta en el puerto 2 cuando se excita el puerto 1 con una fuente conocida.
  </div>
  <div class="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
    <strong>b) Problema de la Transmisión:</strong><br>
    Calcular las condiciones de entrada requeridas en el puerto 1 para generar una salida especificada en el puerto 2.
  </div>
  <div class="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
    <strong>c) Problema de la Inserción:</strong><br>
    Evaluar la pérdida de potencia o cambio de tensión producido al intercalar el cuadripolo entre una fuente con impedancia interna y una carga.
  </div>
</div>

<h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Las 6 Matrices de Parámetros Características</h5>
<p class="mb-2">Relacionando las cuatro variables terminales ($V_1, V_2, I_1, I_2$), existen $\\binom{4}{2} = 6$ combinaciones matemáticas posibles:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-3 my-3 text-xs sm:text-sm font-mono">
  <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
    <div class="font-bold text-blue-600 dark:text-blue-400 font-sans">1. Matriz de Impedancia [z]</div>
    $$\\begin{bmatrix} V_1 \\\\ V_2 \\end{bmatrix} = \\begin{bmatrix} z_{11} & z_{12} \\\\ z_{21} & z_{22} \\end{bmatrix} \\begin{bmatrix} I_1 \\\\ I_2 \\end{bmatrix}$$
    <span class="text-slate-500 font-sans text-xs">Variables indep: $I_1, I_2$ (ensayos en circuito abierto: $I_k = 0$).</span>
  </div>

  <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
    <div class="font-bold text-indigo-600 dark:text-indigo-400 font-sans">2. Matriz de Admitancia [y]</div>
    $$\\begin{bmatrix} I_1 \\\\ I_2 \\end{bmatrix} = \\begin{bmatrix} y_{11} & y_{12} \\\\ y_{21} & y_{22} \\end{bmatrix} \\begin{bmatrix} V_1 \\\\ V_2 \\end{bmatrix}$$
    <span class="text-slate-500 font-sans text-xs">Variables indep: $V_1, V_2$ (ensayos en cortocircuito: $V_k = 0$).</span>
  </div>

  <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
    <div class="font-bold text-emerald-600 dark:text-emerald-400 font-sans">3. Matriz de Transmisión o Cadena [T] (ABCD)</div>
    $$\\begin{bmatrix} V_1 \\\\ I_1 \\end{bmatrix} = \\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix} \\begin{bmatrix} V_2 \\\\ -I_2 \\end{bmatrix}$$
    <span class="text-slate-500 font-sans text-xs">Relaciona magnitudes de entrada en función de la salida. $\\det[T] = AD - BC = 1$ en redes recíprocas.</span>
  </div>

  <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
    <div class="font-bold text-amber-600 dark:text-amber-400 font-sans">4. Matriz de Transmisión Inversa [T'] (A'B'C'D')</div>
    $$\\begin{bmatrix} V_2 \\\\ I_2 \\end{bmatrix} = \\begin{bmatrix} A' & B' \\\\ C' & D' \\end{bmatrix} \\begin{bmatrix} V_1 \\\\ -I_1 \\end{bmatrix}$$
    <span class="text-slate-500 font-sans text-xs">Relaciona magnitudes de salida en función de la entrada.</span>
  </div>

  <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
    <div class="font-bold text-purple-600 dark:text-purple-400 font-sans">5. Matriz de Parámetros Híbridos [h]</div>
    $$\\begin{bmatrix} V_1 \\\\ I_2 \\end{bmatrix} = \\begin{bmatrix} h_{11} & h_{12} \\\\ h_{21} & h_{22} \\end{bmatrix} \\begin{bmatrix} I_1 \\\\ V_2 \\end{bmatrix}$$
    <span class="text-slate-500 font-sans text-xs">Ampliamente utilizada en transistores BJT ($h_{ie}, h_{re}, h_{fe}, h_{oe}$).</span>
  </div>

  <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
    <div class="font-bold text-rose-600 dark:text-rose-400 font-sans">6. Matriz de Híbridos Inversos [g]</div>
    $$\\begin{bmatrix} I_1 \\\\ V_2 \\end{bmatrix} = \\begin{bmatrix} g_{11} & g_{12} \\\\ g_{21} & g_{22} \\end{bmatrix} \\begin{bmatrix} V_1 \\\\ I_2 \\end{bmatrix}$$
    <span class="text-slate-500 font-sans text-xs">Dual de la matriz híbrida [h].</span>
  </div>
</div>

          
<h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">3. Cuadripolos Cargados: Inmitancias Operacionales y Funciones de Transferencia</h5>
<p class="mb-2 text-xs sm:text-sm">En aplicaciones prácticas, una red de dos puertos opera conectada a un generador real con impedancia interna $Z_g(s)$ en el puerto 1 y una carga pasiva $Z_L(s)$ en el puerto 2. Empleando la <strong>matriz de transmisión $[T]$</strong> ($A, B, C, D$):</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-3 my-3">
  <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-xs">
    <span class="font-bold text-blue-600 dark:text-blue-400 block mb-1">Impedancias de Entrada y Salida</span>
    <ul class="list-disc pl-4 space-y-1">
      <li><strong>Impedancia de entrada ante carga $Z_L$:</strong>
      $$\\mathbf{Z_{in}(s) = \\frac{V_1}{I_1} = \\frac{A Z_L + B}{C Z_L + D}}$$</li>
      <li><strong>Impedancia de salida ante generador $Z_g$:</strong>
      $$\\mathbf{Z_{out}(s) = \\frac{D Z_g + B}{C Z_g + A}}$$</li>
    </ul>
  </div>

  <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-xs">
    <span class="font-bold text-emerald-600 dark:text-emerald-400 block mb-1">Ganancias Operacionales con Carga</span>
    <ul class="list-disc pl-4 space-y-1">
      <li><strong>Ganancia de tensión $A_v(s) = \\frac{V_2}{V_1}$:</strong>
      $$\\mathbf{A_v(s) = \\frac{Z_L}{A Z_L + B}}$$</li>
      <li><strong>Ganancia de corriente $A_i(s) = \\frac{I_2}{I_1}$:</strong>
      $$\\mathbf{A_i(s) = \\frac{-1}{C Z_L + D}}$$</li>
      <li><strong>Transimpedancia $Z_{21}(s) = \\frac{V_2}{I_1} = \\frac{Z_L}{C Z_L + D}$</strong></li>
    </ul>
  </div>
</div>

<h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">4. Gráficos de Flujo de Señal (SFG) y Regla de Mason en Cuadripolos</h5>
<p class="mb-2 text-xs sm:text-sm">El <strong>Gráfico de Flujo de Señal (SFG - Signal Flow Graph)</strong> representa visualmente las ecuaciones algebraicas de los cuadripolos interconectados mediante nodos (variables de tensión y corriente) y ramas dirigidas (transmitancias). Permite resolver transferencias globales en sistemas multietapa con realimentaciones complejas aplicando la célebre <strong>Fórmula de Ganancia de Mason</strong>:</p>
$$\\mathbf{T = \\frac{\\sum_k P_k \\Delta_k}{\\Delta}}$$
donde $P_k$ es la transmitancia del $k$-ésimo camino directo desde la entrada a la salida, $\\Delta = 1 - \\sum L_i + \\sum L_i L_j - \\dots$ es el determinante del grafo calculado a partir de todos los lazos cerrados disjuntos, y $\\Delta_k$ es el cofactor del camino $P_k$ (determinante del subgrafo que no toca al camino $P_k$).
`
        },
        {
          id: 'tc3-u4-interconexion-ensayo-brune',
          titulo: '4.2 Interconexión de Cuadripolos, Precauciones y Ensayo de Brune',
          contenido: `
<p class="mb-3">Para analizar o sintetizar sistemas complejos de dos puertos, los cuadripolos elementales se interconectan según cinco topologías matriciales canónicas:</p>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 my-3 text-xs sm:text-sm font-mono">
  <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
    <strong class="text-blue-600 dark:text-blue-400 font-sans">Conexión Serie:</strong><br>
    $$\\mathbf{[Z] = [Z_A] + [Z_B]}$$
    $I_1 = I_{1a} = I_{1b}$, $V_1 = V_{1a} + V_{1b}$.
  </div>
  <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
    <strong class="text-indigo-600 dark:text-indigo-400 font-sans">Conexión Paralelo:</strong><br>
    $$\\mathbf{[Y] = [Y_A] + [Y_B]}$$
    $V_1 = V_{1a} = V_{1b}$, $I_1 = I_{1a} + I_{1b}$.
  </div>
  <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
    <strong class="text-emerald-600 dark:text-emerald-400 font-sans">Conexión en Cascada:</strong><br>
    $$\\mathbf{[T] = [T_A] \\times [T_B]}$$
    El producto de matrices no es conmutativo ($[T_A][T_B] \\ne [T_B][T_A]$).
  </div>
  <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
    <strong class="text-purple-600 dark:text-purple-400 font-sans">Conexión Serie-Paralelo:</strong><br>
    $$\\mathbf{[H] = [H_A] + [H_B]}$$
    Entrada serie, salida paralelo.
  </div>
  <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
    <strong class="text-amber-600 dark:text-amber-400 font-sans">Conexión Paralelo-Serie:</strong><br>
    $$\\mathbf{[G] = [G_A] + [G_B]}$$
    Entrada paralelo, salida serie.
  </div>
</div>


<div class="my-4 p-3 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xs">
  <span class="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-2 text-center">
    📐 Red de 2 Puertos, Matrices Características, Interconexión y Ensayo de Brune (Aislamiento 1:1)
  </span>
  <div class="flex justify-center overflow-x-auto py-1">
    <svg class="w-full h-auto max-w-4xl mx-auto select-none" viewBox="0 0 860 310" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(15, 10)">
    <rect x="0" y="0" width="395" height="290" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
    <text x="197" y="24" font-size="12" font-family="system-ui, sans-serif" font-weight="bold" fill="#0f172a" text-anchor="middle">
      Cuadripolo (Red de 2 Puertos) y Condición de Corriente
    </text>

    <rect x="130" y="70" width="135" height="110" rx="8" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>
    <text x="197" y="130" font-size="13" font-family="system-ui, sans-serif" font-weight="bold" fill="#0f172a" text-anchor="middle">
      Cuadripolo
    </text>
    <text x="197" y="148" font-size="10" font-family="monospace" fill="#475569" text-anchor="middle">
      [Z], [Y], [T], [h]
    </text>

    <line x1="40" y1="95" x2="130" y2="95" stroke="#334155" stroke-width="2"/>
    <circle cx="40" cy="95" r="3.5" fill="#2563eb"/>
    <line x1="40" y1="155" x2="130" y2="155" stroke="#334155" stroke-width="2"/>
    <circle cx="40" cy="155" r="3.5" fill="#2563eb"/>

    <line x1="55" y1="83" x2="85" y2="83" stroke="#dc2626" stroke-width="2"/>
    <polygon points="88,83 80,79 80,87" fill="#dc2626"/>
    <text x="70" y="77" font-size="11" font-family="monospace" font-weight="bold" fill="#dc2626">I₁</text>

    <line x1="85" y1="167" x2="55" y2="167" stroke="#dc2626" stroke-width="2"/>
    <polygon points="52,167 60,163 60,171" fill="#dc2626"/>
    <text x="70" y="180" font-size="11" font-family="monospace" font-weight="bold" fill="#dc2626">I'₁ = I₁</text>

    <path d="M 40,145 Q 32,125 40,105" fill="none" stroke="#2563eb" stroke-width="1.8"/>
    <polygon points="40,105 35,113 43,113" fill="#2563eb"/>
    <text x="25" y="128" font-size="12" font-family="system-ui, sans-serif" font-weight="bold" fill="#2563eb">V₁</text>

    <line x1="265" y1="95" x2="355" y2="95" stroke="#334155" stroke-width="2"/>
    <circle cx="355" cy="95" r="3.5" fill="#059669"/>
    <line x1="265" y1="155" x2="355" y2="155" stroke="#334155" stroke-width="2"/>
    <circle cx="355" cy="155" r="3.5" fill="#059669"/>

    <line x1="340" y1="83" x2="310" y2="83" stroke="#d97706" stroke-width="2"/>
    <polygon points="307,83 315,79 315,87" fill="#d97706"/>
    <text x="325" y="77" font-size="11" font-family="monospace" font-weight="bold" fill="#d97706">I₂</text>

    <line x1="310" y1="167" x2="340" y2="167" stroke="#d97706" stroke-width="2"/>
    <polygon points="343,167 335,163 335,171" fill="#d97706"/>
    <text x="325" y="180" font-size="11" font-family="monospace" font-weight="bold" fill="#d97706">I'₂ = I₂</text>

    <path d="M 355,145 Q 363,125 355,105" fill="none" stroke="#059669" stroke-width="1.8"/>
    <polygon points="355,105 351,113 360,113" fill="#059669"/>
    <text x="372" y="128" font-size="12" font-family="system-ui, sans-serif" font-weight="bold" fill="#059669">V₂</text>

    <rect x="15" y="200" width="365" height="75" rx="6" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1"/>
    <text x="197" y="220" font-size="10.5" font-family="monospace" font-weight="bold" fill="#0f172a" text-anchor="middle">
      [V] = [z]·[I]   |   [I] = [y]·[V]   |   [V₁ I₁]ᵀ = [T]·[V₂ -I₂]ᵀ
    </text>
    <text x="197" y="240" font-size="10" font-family="system-ui, sans-serif" fill="#475569" text-anchor="middle">
      Reciprocidad: z₁₂ = z₂₁, y₁₂ = y₂₁, det[T] = AD - BC = 1
    </text>
    <text x="197" y="258" font-size="10" font-family="system-ui, sans-serif" fill="#475569" text-anchor="middle">
      Simetría: z₁₁ = z₂₂, y₁₁ = y₂₂, A = D
    </text>
  </g>

  <g transform="translate(435, 10)">
    <rect x="0" y="0" width="410" height="290" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
    <text x="205" y="24" font-size="12" font-family="system-ui, sans-serif" font-weight="bold" fill="#0f172a" text-anchor="middle">
      Interconexión y Ensayo de Brune (Aislamiento 1:1)
    </text>

    <rect x="120" y="55" width="110" height="55" rx="6" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/>
    <text x="175" y="87" font-size="12" font-family="system-ui, sans-serif" font-weight="bold" fill="#1e40af" text-anchor="middle">
      Cuadripolo [A]
    </text>

    <rect x="120" y="145" width="110" height="55" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/>
    <text x="175" y="177" font-size="12" font-family="system-ui, sans-serif" font-weight="bold" fill="#92400e" text-anchor="middle">
      Cuadripolo [B]
    </text>

    <circle cx="35" cy="80" r="3" fill="#2563eb"/>
    <circle cx="35" cy="180" r="3" fill="#2563eb"/>
    <line x1="35" y1="80" x2="80" y2="80" stroke="#334155" stroke-width="2"/>
    <line x1="35" y1="180" x2="80" y2="180" stroke="#334155" stroke-width="2"/>
    <circle cx="80" cy="80" r="3" fill="#334155"/>
    <circle cx="80" cy="180" r="3" fill="#334155"/>
    <line x1="80" y1="65" x2="80" y2="160" stroke="#334155" stroke-width="2"/>
    <line x1="80" y1="65" x2="120" y2="65" stroke="#334155" stroke-width="2"/>
    <line x1="80" y1="160" x2="120" y2="160" stroke="#334155" stroke-width="2"/>

    <line x1="230" y1="70" x2="260" y2="70" stroke="#334155" stroke-width="2"/>
    <line x1="230" y1="95" x2="260" y2="95" stroke="#334155" stroke-width="2"/>
    <path d="M 260,65 Q 272,72 260,82 Q 272,90 260,100" fill="none" stroke="#059669" stroke-width="2.5"/>
    <line x1="275" y1="63" x2="275" y2="102" stroke="#64748b" stroke-width="1.8"/>
    <line x1="279" y1="63" x2="279" y2="102" stroke="#64748b" stroke-width="1.8"/>
    <path d="M 294,65 Q 282,72 294,82 Q 282,90 294,100" fill="none" stroke="#059669" stroke-width="2.5"/>
    <text x="277" y="55" font-size="10" font-family="monospace" font-weight="bold" fill="#059669" text-anchor="middle">1:1</text>
    <line x1="294" y1="70" x2="335" y2="70" stroke="#334155" stroke-width="2"/>
    <line x1="294" y1="95" x2="335" y2="95" stroke="#334155" stroke-width="2"/>

    <line x1="230" y1="160" x2="335" y2="160" stroke="#334155" stroke-width="2"/>
    <line x1="230" y1="185" x2="335" y2="185" stroke="#334155" stroke-width="2"/>

    <line x1="335" y1="70" x2="335" y2="160" stroke="#334155" stroke-width="2"/>
    <line x1="335" y1="95" x2="335" y2="185" stroke="#334155" stroke-width="2"/>
    <line x1="335" y1="80" x2="375" y2="80" stroke="#334155" stroke-width="2"/>
    <line x1="335" y1="180" x2="375" y2="180" stroke="#334155" stroke-width="2"/>
    <circle cx="375" cy="80" r="3.5" fill="#059669"/>
    <circle cx="375" cy="180" r="3.5" fill="#059669"/>

    <rect x="15" y="215" width="380" height="65" rx="6" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1"/>
    <text x="205" y="235" font-size="10.5" font-family="system-ui, sans-serif" font-weight="bold" fill="#0f172a" text-anchor="middle">
      Condición de Brune: V_test = 0 en los terminales de unión
    </text>
    <text x="205" y="252" font-size="10" font-family="system-ui, sans-serif" fill="#475569" text-anchor="middle">
      Si existe camino de corriente parásito entre redes, la relación matricial se invalida.
    </text>
    <text x="205" y="268" font-size="10" font-family="system-ui, sans-serif" fill="#059669" font-weight="bold" text-anchor="middle">
      Solución universal: Transformador ideal de aislamiento 1:1 en un puerto.
    </text>
  </g>
</svg>
  </div>
</div>


<h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Precauciones en la Interconexión y el Ensayo de Brune</h5>
<div class="p-4 my-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-950 dark:text-rose-200 text-xs sm:text-sm">
  <h5 class="font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5 font-sans">
    <span>⚠️</span> Criterio de Validez de Interconexión (Ensayo de Brune)
  </h5>
  <p class="mb-2">La suma directa de matrices ($[Z] = [Z_A] + [Z_B]$ o $[Y] = [Y_A] + [Y_B]$) es matemáticamente válida <strong>si y solo si la interconexión física NO genera corrientes de lazo circulantes entre los dos cuadripolos</strong> que rompan la condición de puerto ($I_k \\ne I'_k$).</p>
  <ul class="list-disc pl-5 space-y-1">
    <li><strong>Procedimiento del Ensayo de Brune (Conexión Paralelo):</strong> Se unen los bornes superiores de entrada y salida de $[A]$ y $[B]$. Se mide la tensión entre los bornes inferiores que se planea unir. Si $\\mathbf{V_{test} = 0}$, la unión no alterará las corrientes y la suma matricial $[Y] = [Y_A] + [Y_B]$ es estrictamente exacta.</li>
    <li><strong>Procedimiento para Conexión Serie:</strong> Se conectan las entradas en serie y se mide la tensión de circuito abierto en los bornes de salida a interconectar antes de cerrarlos. Debe resultar cero.</li>
    <li><strong>Solución Universal de Desacoplo:</strong> Si $V_{test} \\ne 0$ (como ocurre típicamente al interconectar filtros en T puenteada o Doble T), la interconexión se vuelve físicamente válida insertando un <strong>transformador ideal de aislamiento con relación 1:1</strong> en uno de los puertos. Esto anula toda corriente de retorno parásita sin alterar la función de transferencia del sistema.</li>
  </ul>
</div>

          `
        },
        {
          id: 'tc3-u4-topologias-bartlett',
          titulo: '4.3 Topologías Clásicas de Cuadripolos, Circuitos Equivalentes y Teorema de Bartlett',
          contenido: `
<p class="mb-3">En el diseño de filtros pasivos, ecualizadores y atenuadores se utilizan topologías canónicas normalizadas:</p>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 text-xs">
  <div class="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
    <strong class="text-blue-600 dark:text-blue-400">Red en L:</strong><br>
    Una rama serie y una rama en derivación (shunt).
  </div>
  <div class="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
    <strong class="text-indigo-600 dark:text-indigo-400">Red en T (Estrella):</strong><br>
    Dos ramas serie longitudinales y una derivación central.
  </div>
  <div class="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
    <strong class="text-emerald-600 dark:text-emerald-400">Red en Π (Triángulo):</strong><br>
    Una rama serie y dos ramas shunt en los extremos.
  </div>
  <div class="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
    <strong class="text-purple-600 dark:text-purple-400">Celosía o Puente (Lattice):</strong><br>
    Cuadripolo balanceado y simétrico de fase no mínima.
  </div>
</div>

<h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Teorema de Bisección de Bartlett para Cuadripolos Simétricos</h5>
<p class="mb-2">El <strong>Teorema de Bisección de Bartlett (1927)</strong> permite transformar cualquier cuadripolo recíproco, simétrico y balanceado de topología arbitraria en una <strong>red en celosía simétrica equivalente (*lattice network*)</strong>:</p>
$$\\mathbf{Z_a = Z_{cc\\text{-medio}}}, \\qquad \\mathbf{Z_b = Z_{ca\\text{-medio}}}$$
<p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-3">donde $Z_{cc\\text{-medio}}$ es la impedancia de entrada vista desde el puerto 1 cuando el plano de simetría geométrico del circuito se cortocircuita a tierra, y $Z_{ca\\text{-medio}}$ es la impedancia vista cuando el plano de simetría se deja en circuito abierto. Los parámetros de impedancia del cuadripolo completo resultan inmediatamente:</p>
$$z_{11} = z_{22} = \\frac{Z_b + Z_a}{2}, \\qquad z_{12} = z_{21} = \\frac{Z_b - Z_a}{2}$$

          `
        },
        {
          id: 'tc3-u4-mai-propiedades',
          titulo: '4.4 Fundamentos y Propiedades Cardinales de la MAI (Puckett)',
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
          titulo: '4.5 Cálculo de Transferencias e Inmitancias mediante la MAI',
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
