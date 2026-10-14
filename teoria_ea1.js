// ==========================================================================
// MANUAL TEÓRICO COMPLETO Y EXHAUSTIVO - ELECTRÓNICA APLICADA I (CÓDIGO 3708)
// Cátedra: Ing. Pablo González Galli / Ing. Adrián Martínez (UTN FRBA)
// Preparación integral para Examen Parcial y Final
// ==========================================================================

const MANUAL_TEORIA_EA1 = {
  materiaId: 'electronica-aplicada-1',
  codigo: '3708',
  nombre: 'Electrónica Aplicada I',
  titulo: 'Manual y Compendio Teórico de Sistemas Analógicos y Amplificación Lineal',
  subtitulo: 'Cátedra: Ing. Pablo González Galli / Ing. Adrián Martínez - UTN FRBA',
  descripcion: 'Fundamentos físicos, deducciones analíticas formales paso a paso, modelos circuitales, reglas de diseño de cátedra y formularios de examen para las 4 unidades temáticas.',
  
  unidades: [
    // ========================================================================
    // UNIDAD 1: SEÑALES FUERTES Y GRAN SEÑAL
    // ========================================================================
    {
      id: 'ea1-u1',
      numero: 1,
      titulo: 'Unidad 1: Amplificación con Transistores en Gran Señal y Rango Dinámico',
      icono: '📈',
      badgeColor: 'border-amber-500/40 bg-amber-950/40 text-amber-300',
      introduccion: 'Esta unidad analiza el comportamiento del transistor bipolar (BJT) cuando las señales aplicadas son de gran amplitud, provocando que las hipótesis lineales de pequeña señal dejen de ser válidas. Se estudian la alinealidad exponencial, la distorsión armónica, el trazado de las rectas de carga estática y dinámica, la condición rigurosa de máxima excursión simétrica y la estabilidad térmica del punto de reposo.',
      secciones: [
        {
          id: 'u1-alinealidad',
          titulo: '1.1 Física del BJT en Gran Señal, Alinealidad y Distorsión Armónica',
          contenido: `
            <p class="mb-3">En el análisis de pequeña señal se asume que la excursión de tensión base-emisor es infinitesimalmente pequeña ($v_{be} \\ll V_T$), lo que permite linealizar la curva característica del transistor mediante la transconductancia incremental $g_m = I_{CQ}/V_T$. Sin embargo, en amplificadores de tensión con señales fuertes y etapas de salida, las variaciones de $v_{be}$ son comparables o superiores a la tensión térmica $V_T \\approx 25\\text{ mV}$ (a $300\\text{ K}$), haciendo que la alinealidad exponencial intrínseca de la juntura base-emisor domine la respuesta.</p>

            <div class="p-3.5 my-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200">
              <h5 class="font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <span>⚡</span> Ecuación Fundamental de Gran Señal
              </h5>
              <p class="text-xs">Para un transistor NPN en zona activa directa:</p>
              $$i_C(t) = I_S \\exp\\left( \\frac{v_{BE}(t)}{V_T} \\right) = I_S \\exp\\left( \\frac{V_{BEQ} + v_{be}(t)}{V_T} \\right) = I_{CQ} \\cdot \\exp\\left( \\frac{v_{be}(t)}{V_T} \\right)$$
              <p class="text-xs mt-1">donde $I_{CQ} = I_S e^{V_{BEQ}/V_T}$ es la corriente de reposo estática en continua.</p>
            </div>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Deducción de la Distorsión Armónica ante Excitación Senoidal</h5>
            <p class="mb-2">Si se excita la base con una señal senoidal pura $v_{be}(t) = \\hat{V}_{be} \\cos(\\omega t)$, desarrollando la exponencial en serie de potencias (Serie de Taylor) para amplitudes moderadas ($x = \\frac{\\hat{V}_{be}}{V_T} < 1$):</p>
            $$e^u = 1 + u + \\frac{u^2}{2!} + \\frac{u^3}{3!} + \\dots$$
            $$i_C(t) \\approx I_{CQ} \\left[ 1 + \\frac{\\hat{V}_{be}}{V_T}\\cos(\\omega t) + \\frac{1}{2} \\left( \\frac{\\hat{V}_{be}}{V_T} \\right)^2 \\cos^2(\\omega t) + \\dots \\right]$$
            <p class="my-2">Aplicando la identidad trigonométrica $\\cos^2(\\omega t) = \\frac{1 + \\cos(2\\omega t)}{2}$:</p>
            $$i_C(t) \\approx I_{CQ} \\left[ \\left( 1 + \\frac{1}{4} \\frac{\\hat{V}_{be}^2}{V_T^2} \\right) + \\frac{\\hat{V}_{be}}{V_T} \\cos(\\omega t) + \\frac{1}{4} \\frac{\\hat{V}_{be}^2}{V_T^2} \\cos(2\\omega t) \\right]$$

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Componentes de la Corriente de Salida</h5>
            <ol class="list-decimal pl-5 space-y-1.5 text-xs sm:text-sm">
              <li><strong>Desplazamiento del punto de reposo DC (Rectificación):</strong> $\\Delta I_C = I_{CQ} \\frac{\\hat{V}_{be}^2}{4 V_T^2}$. La corriente media en continua aumenta al aplicar señal debido a la asimetría de la exponencial.</li>
              <li><strong>Componente Fundamental ($f_0$):</strong> $\\hat{I}_{c1} = I_{CQ} \\frac{\\hat{V}_{be}}{V_T} = g_m \\hat{V}_{be}$ (coincide con la predicción de pequeña señal).</li>
              <li><strong>Segundo Armónico ($2 f_0$):</strong> $\\hat{I}_{c2} = I_{CQ} \\frac{\\hat{V}_{be}^2}{4 V_T^2}$.</li>
            </ol>

            <div class="p-3.5 my-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-900 dark:text-blue-200">
              <h5 class="font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <span>📐</span> Distorsión de Segundo Armónico ($HD_2$) y Límite de Pequeña Señal
              </h5>
              <p class="text-xs">El factor de distorsión de segundo armónico se define como la relación de amplitudes:</p>
              $$HD_2 = \\frac{\\hat{I}_{c2}}{\\hat{I}_{c1}} = \\frac{I_{CQ} \\frac{\\hat{V}_{be}^2}{4 V_T^2}}{I_{CQ} \\frac{\\hat{V}_{be}}{V_T}} = \\frac{1}{4} \\frac{\\hat{V}_{be}}{V_T}$$
              <p class="text-xs mt-2">Para $V_T = 25\\text{ mV}$, si se desea que $HD_2 \\le 5\\%$ ($0.05$):</p>
              $$\\hat{V}_{be} \\le 4 \\times 0.05 \\times 25\\text{ mV} = 5\\text{ mV}$$
              <p class="text-xs mt-1"><strong>Conclusión de examen:</strong> Para tensiones $\\hat{V}_{be} > 5\\text{ mV}$ sin realimentación local, la distorsión supera el $5\\%$ y el circuito opera inevitablemente en régimen de gran señal.</p>
            </div>

            <p class="mt-3">La <strong>Distorsión Armónica Total ($THD$)</strong> se calcula como:</p>
            $$THD = \\frac{\\sqrt{\\hat{V}_2^2 + \\hat{V}_3^2 + \\hat{V}_4^2 + \\dots}}{\\hat{V}_1} \\approx \\sqrt{HD_2^2 + HD_3^2}$$

            <div class="p-3 my-3 rounded-xl bg-blue-500/10 dark:bg-blue-950/40 border border-blue-500/30 text-xs flex items-start gap-2.5">
              <span class="text-base shrink-0">🔗</span>
              <div class="flex-1 min-w-0">
                <div class="font-semibold text-blue-900 dark:text-blue-300">
                  Concepto Previo de Electrónica I:
                </div>
                <p class="text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                  Para repasar los parámetros lineales de pequeña señal del BJT ($g_m, r_\\pi, r_e, h_{fe}$) y su validez incremental:
                </p>
                <button 
                  onclick="navegarASeccionTeorica('electronica-1', 'e1-u4-parametros-hibridos-pi')"
                  class="mt-1.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-mono text-[11px] font-medium transition-colors shadow-2xs"
                >
                  <span>📖 Ver Electrónica I · Unidad 4 (Modelo Híbrido Pi)</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          `
        },
        {
          id: 'u1-rectas-carga',
          titulo: '1.2 Rectas de Carga Estática (DC) y Dinámica (AC)',
          contenido: `
            <!-- 1. IDENTIFICACIÓN DE LA TOPOLOGÍA DE ESTUDIO -->
            <p class="mb-3 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
              Para analizar con rigor las rectas de carga estática y dinámica en Electrónica Aplicada I, se toma como <strong>topología canónica de referencia</strong> el <strong>Amplificador en Emisor Común (EC) con Polarización por Divisor Resistivo y Carga Acoplada por Capacidad</strong>.
            </p>

            <div class="p-3.5 my-3 rounded-xl bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-xs space-y-2">
              <strong class="text-slate-800 dark:text-slate-200 block font-semibold flex items-center gap-1.5">
                <span>🔌</span> Componentes de la Topología y Doble Comportamiento (DC vs. AC):
              </strong>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-[11px]">
                <div class="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span class="font-bold text-indigo-600 dark:text-indigo-400 block mb-0.5">1. Red de Polarización (DC)</span>
                  El divisor $R_1 - R_2$ fija el potencial de base $V_B$, mientras que $R_C$ y $R_E$ fijan el punto de reposo $Q(V_{CEQ}, I_{CQ})$ en la zona activa.
                </div>
                <div class="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span class="font-bold text-emerald-600 dark:text-emerald-400 block mb-0.5">2. Capacitores de Acoplo ($C_1, C_2$)</span>
                  Aíslan la continua entre etapas ($X_C \to \infty$ en DC) pero transfieren íntegramente la señal alterna hacia la carga $R_L$ ($X_C \approx 0$ en AC).
                </div>
                <div class="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span class="font-bold text-amber-600 dark:text-amber-400 block mb-0.5">3. Capacitor de Emisor ($C_E$)</span>
                  Mantiene la estabilidad térmica en DC mediante $R_E$, pero cortocircuita el emisor a masa en AC para maximizar la ganancia de tensión ($A_v$).
                </div>
              </div>
            </div>

            <!-- DIAGRAMA SVG TRÍPTICO: CIRCUITO COMPLETO, EQUIVALENTE DC Y EQUIVALENTE AC -->
            <div class="my-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span class="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-2 text-center">
                📐 Topología de Estudio: Decomposición Circuital en Continua (DC) y Alterna (AC)
              </span>
              <div class="flex justify-center overflow-x-auto">
                <svg viewBox="0 0 760 265" class="w-full max-w-[760px] text-xs font-sans select-none" style="min-width: 620px;">
                  <!-- ================= (a) CIRCUITO COMPLETO DE EMISOR COMÚN ================= -->
                  <g transform="translate(10, 0)">
                    <text x="115" y="16" text-anchor="middle" font-weight="bold" fill="#6366f1" font-size="11">(a) Circuito Completo (EC)</text>

                    <!-- Rail VCC -->
                    <line x1="40" y1="28" x2="155" y2="28" stroke="#475569" stroke-width="1.5"/>
                    <circle cx="95" cy="28" r="3" fill="#ef4444"/>
                    <text x="95" y="21" text-anchor="middle" font-weight="bold" fill="#ef4444" font-size="9.5">+<tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">CC</tspan></text>

                    <!-- R1 -->
                    <line x1="55" y1="28" x2="55" y2="40" stroke="#475569" stroke-width="1.3"/>
                    <rect x="47" y="40" width="16" height="24" fill="#6366f1" fill-opacity="0.2" stroke="#6366f1" stroke-width="1.3" rx="2"/>
                    <text x="40" y="54" text-anchor="end" font-weight="bold" fill="#6366f1" font-size="8.5"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">1</tspan></text>
                    <line x1="55" y1="64" x2="55" y2="82" stroke="#475569" stroke-width="1.3"/>
                    <circle cx="55" cy="82" r="2.5" fill="#475569"/>

                    <!-- Entrada vs con C1 -->
                    <circle cx="15" cy="82" r="3" fill="#3b82f6"/>
                    <text x="15" y="96" text-anchor="middle" font-weight="bold" fill="#3b82f6" font-size="9"><tspan font-style="italic">v</tspan><tspan font-size="75%" dy="2">s</tspan></text>
                    <line x1="15" y1="82" x2="28" y2="82" stroke="#3b82f6" stroke-width="1.3"/>
                    <!-- C1 -->
                    <line x1="28" y1="75" x2="28" y2="89" stroke="#3b82f6" stroke-width="2"/>
                    <line x1="32" y1="75" x2="32" y2="89" stroke="#3b82f6" stroke-width="2"/>
                    <text x="30" y="70" text-anchor="middle" font-weight="bold" fill="#3b82f6" font-size="7.5"><tspan font-style="italic">C</tspan><tspan font-size="75%" dy="2">1</tspan></text>
                    <line x1="32" y1="82" x2="55" y2="82" stroke="#3b82f6" stroke-width="1.3"/>

                    <!-- R2 -->
                    <rect x="47" y="82" width="16" height="24" fill="#6366f1" fill-opacity="0.2" stroke="#6366f1" stroke-width="1.3" rx="2"/>
                    <text x="40" y="96" text-anchor="end" font-weight="bold" fill="#6366f1" font-size="8.5"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">2</tspan></text>
                    <line x1="55" y1="106" x2="55" y2="120" stroke="#475569" stroke-width="1.3"/>
                    <line x1="47" y1="120" x2="63" y2="120" stroke="#475569" stroke-width="1.8"/>

                    <!-- Base a Transistor -->
                    <line x1="55" y1="82" x2="115" y2="82" stroke="#475569" stroke-width="1.5"/>

                    <!-- Transistor NPN -->
                    <circle cx="123" cy="82" r="15" fill="none" stroke="#64748b" stroke-width="1.2" stroke-opacity="0.5"/>
                    <line x1="115" y1="70" x2="115" y2="94" stroke="#334155" stroke-width="3" stroke-linecap="round"/>
                    <line x1="115" y1="76" x2="133" y2="66" stroke="#475569" stroke-width="1.8"/>
                    <line x1="115" y1="88" x2="133" y2="98" stroke="#475569" stroke-width="1.8"/>
                    <polygon points="132,97.5 123,93 126,88" fill="#ef4444"/>

                    <!-- Colector: RC y Acoplo C2 a RL -->
                    <line x1="133" y1="28" x2="133" y2="38" stroke="#475569" stroke-width="1.3"/>
                    <rect x="125" y="38" width="16" height="24" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="1.3" rx="2"/>
                    <text x="145" y="52" text-anchor="start" font-weight="bold" fill="#10b981" font-size="8.5"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">C</tspan></text>
                    <line x1="133" y1="62" x2="133" y2="66" stroke="#475569" stroke-width="1.5"/>
                    <circle cx="133" cy="66" r="2.5" fill="#10b981"/>

                    <!-- Capacitor C2 y Carga RL -->
                    <line x1="133" y1="66" x2="160" y2="66" stroke="#10b981" stroke-width="1.3"/>
                    <line x1="160" y1="59" x2="160" y2="73" stroke="#10b981" stroke-width="2"/>
                    <line x1="164" y1="59" x2="164" y2="73" stroke="#10b981" stroke-width="2"/>
                    <text x="162" y="54" text-anchor="middle" font-weight="bold" fill="#10b981" font-size="7.5"><tspan font-style="italic">C</tspan><tspan font-size="75%" dy="2">2</tspan></text>
                    <line x1="164" y1="66" x2="190" y2="66" stroke="#10b981" stroke-width="1.3"/>
                    <circle cx="190" cy="66" r="2.5" fill="#10b981"/>
                    <text x="202" y="66" font-weight="bold" fill="#10b981" font-size="8.5"><tspan font-style="italic">v</tspan><tspan font-size="75%" dy="2">o</tspan></text>

                    <!-- Resistor RL a masa -->
                    <line x1="190" y1="66" x2="190" y2="76" stroke="#475569" stroke-width="1.3"/>
                    <rect x="182" y="76" width="16" height="24" fill="#059669" fill-opacity="0.2" stroke="#059669" stroke-width="1.3" rx="2"/>
                    <text x="202" y="90" text-anchor="start" font-weight="bold" fill="#059669" font-size="8.5"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">L</tspan></text>
                    <line x1="190" y1="100" x2="190" y2="120" stroke="#475569" stroke-width="1.3"/>
                    <line x1="182" y1="120" x2="198" y2="120" stroke="#475569" stroke-width="1.8"/>

                    <!-- Emisor: RE || CE -->
                    <line x1="133" y1="98" x2="133" y2="112" stroke="#475569" stroke-width="1.3"/>
                    <circle cx="133" cy="112" r="2.5" fill="#475569"/>
                    
                    <!-- Rama RE -->
                    <line x1="133" y1="112" x2="115" y2="112" stroke="#475569" stroke-width="1.3"/>
                    <line x1="115" y1="112" x2="115" y2="122" stroke="#475569" stroke-width="1.3"/>
                    <rect x="107" y="122" width="16" height="22" fill="#a855f7" fill-opacity="0.2" stroke="#a855f7" stroke-width="1.3" rx="2"/>
                    <text x="101" y="135" text-anchor="end" font-weight="bold" fill="#a855f7" font-size="8"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">E</tspan></text>
                    <line x1="115" y1="144" x2="115" y2="154" stroke="#475569" stroke-width="1.3"/>

                    <!-- Rama CE -->
                    <line x1="133" y1="112" x2="150" y2="112" stroke="#475569" stroke-width="1.3"/>
                    <line x1="150" y1="112" x2="150" y2="126" stroke="#475569" stroke-width="1.3"/>
                    <line x1="144" y1="126" x2="156" y2="126" stroke="#475569" stroke-width="2"/>
                    <line x1="144" y1="130" x2="156" y2="130" stroke="#475569" stroke-width="2"/>
                    <text x="162" y="130" text-anchor="start" font-weight="bold" fill="#64748b" font-size="8"><tspan font-style="italic">C</tspan><tspan font-size="75%" dy="2">E</tspan></text>
                    <line x1="150" y1="130" x2="150" y2="154" stroke="#475569" stroke-width="1.3"/>

                    <!-- Masa de emisor -->
                    <line x1="115" y1="154" x2="150" y2="154" stroke="#475569" stroke-width="1.5"/>
                    <line x1="125" y1="158" x2="140" y2="158" stroke="#475569" stroke-width="2"/>

                    <!-- Badge inferior -->
                    <rect x="10" y="174" width="210" height="78" rx="6" fill="#6366f1" fill-opacity="0.08" stroke="#6366f1" stroke-opacity="0.3"/>
                    <text x="115" y="191" text-anchor="middle" font-weight="bold" fill="#4f46e5" font-size="9.5">Topología Emisor Común (EC)</text>
                    <text x="115" y="206" text-anchor="middle" fill="#475569" font-size="8.5">• <tspan font-style="italic">C</tspan><tspan font-size="75%" dy="1.5">1</tspan>, <tspan font-style="italic">C</tspan><tspan font-size="75%" dy="1.5">2</tspan>: Bloqueo DC / Acoplo AC</text>
                    <text x="115" y="220" text-anchor="middle" fill="#475569" font-size="8.5">• <tspan font-style="italic">C</tspan><tspan font-size="75%" dy="1.5">E</tspan>: Desacopla <tspan font-style="italic">R</tspan><tspan font-size="75%" dy="1.5">E</tspan> a masa en AC</text>
                    <text x="115" y="238" text-anchor="middle" font-weight="bold" fill="#6366f1" font-size="8.5">Circuito físico original</text>
                  </g>

                  <!-- Divisor vertical -->
                  <line x1="245" y1="15" x2="245" y2="255" stroke="#cbd5e1" stroke-dasharray="3 3"/>

                  <!-- ================= (b) CIRCUITO EQUIVALENTE EN CONTINUA (DC) ================= -->
                  <g transform="translate(255, 0)">
                    <text x="115" y="16" text-anchor="middle" font-weight="bold" fill="#ef4444" font-size="11">(b) Malla Colector-Emisor (DC)</text>

                    <!-- Resaltado de la Malla C-E en DC con fondo suave -->
                    <path d="M 133 28 L 133 162 L 105 162" fill="none" stroke="#ef4444" stroke-width="6" stroke-opacity="0.12" stroke-linecap="round"/>

                    <!-- Rail VCC -->
                    <line x1="40" y1="28" x2="155" y2="28" stroke="#475569" stroke-width="1.5"/>
                    <circle cx="95" cy="28" r="3" fill="#ef4444"/>
                    <text x="95" y="21" text-anchor="middle" font-weight="bold" fill="#ef4444" font-size="9.5">+<tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">CC</tspan></text>

                    <!-- R1 -->
                    <line x1="55" y1="28" x2="55" y2="40" stroke="#475569" stroke-width="1.3"/>
                    <rect x="47" y="40" width="16" height="24" fill="#64748b" fill-opacity="0.2" stroke="#64748b" stroke-width="1.3" rx="2"/>
                    <text x="40" y="54" text-anchor="end" font-weight="bold" fill="#64748b" font-size="8.5"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">1</tspan></text>
                    <line x1="55" y1="64" x2="55" y2="82" stroke="#475569" stroke-width="1.3"/>
                    <circle cx="55" cy="82" r="2.5" fill="#475569"/>

                    <!-- C1 ABIERTO (Sin conexión a vs) -->
                    <text x="22" y="80" text-anchor="middle" font-bold fill="#94a3b8" font-size="8">C<tspan font-size="75%" dy="1.5">1</tspan> Abierto</text>
                    <line x1="22" y1="84" x2="35" y2="84" stroke="#94a3b8" stroke-width="1" stroke-dasharray="2 2"/>

                    <!-- R2 -->
                    <rect x="47" y="82" width="16" height="24" fill="#64748b" fill-opacity="0.2" stroke="#64748b" stroke-width="1.3" rx="2"/>
                    <text x="40" y="96" text-anchor="end" font-weight="bold" fill="#64748b" font-size="8.5"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">2</tspan></text>
                    <line x1="55" y1="106" x2="55" y2="120" stroke="#475569" stroke-width="1.3"/>
                    <line x1="47" y1="120" x2="63" y2="120" stroke="#475569" stroke-width="1.8"/>

                    <!-- Base a Transistor -->
                    <line x1="55" y1="82" x2="115" y2="82" stroke="#475569" stroke-width="1.5"/>

                    <!-- Transistor NPN -->
                    <circle cx="123" cy="82" r="15" fill="none" stroke="#64748b" stroke-width="1.2" stroke-opacity="0.5"/>
                    <line x1="115" y1="70" x2="115" y2="94" stroke="#334155" stroke-width="3" stroke-linecap="round"/>
                    <line x1="115" y1="76" x2="133" y2="66" stroke="#ef4444" stroke-width="2"/>
                    <line x1="115" y1="88" x2="133" y2="98" stroke="#ef4444" stroke-width="2"/>
                    <polygon points="132,97.5 123,93 126,88" fill="#ef4444"/>

                    <!-- Tensión VCE -->
                    <text x="145" y="84" font-weight="bold" fill="#ef4444" font-size="9"><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">CE</tspan></text>

                    <!-- Colector: RC y MALLA DC -->
                    <line x1="133" y1="28" x2="133" y2="38" stroke="#ef4444" stroke-width="2"/>
                    <!-- Flecha corriente IC -->
                    <polygon points="130,34 133,39 136,34" fill="#ef4444"/>
                    <text x="122" y="36" text-anchor="end" font-weight="bold" fill="#ef4444" font-size="8.5"><tspan font-style="italic">I</tspan><tspan font-size="75%" dy="1.5">C</tspan></text>

                    <rect x="125" y="38" width="16" height="24" fill="#ef4444" fill-opacity="0.2" stroke="#ef4444" stroke-width="1.8" rx="2"/>
                    <text x="145" y="52" text-anchor="start" font-weight="bold" fill="#ef4444" font-size="9"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">C</tspan></text>
                    <line x1="133" y1="62" x2="133" y2="66" stroke="#ef4444" stroke-width="2"/>
                    <circle cx="133" cy="66" r="2.5" fill="#ef4444"/>

                    <!-- C2 ABIERTO: RL desconectada -->
                    <line x1="133" y1="66" x2="155" y2="66" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="2 2"/>
                    <text x="162" y="62" text-anchor="start" font-bold fill="#94a3b8" font-size="7.5">C<tspan font-size="75%" dy="1.5">2</tspan> Abierto</text>
                    <text x="162" y="73" text-anchor="start" fill="#94a3b8" font-size="7.5">(R<tspan font-size="75%" dy="1.5">L</tspan> aislada)</text>

                    <!-- Emisor DC: CE ABIERTO, Toda la corriente fluye por RE -->
                    <line x1="133" y1="98" x2="133" y2="114" stroke="#ef4444" stroke-width="2"/>
                    <polygon points="130,107 133,112 136,107" fill="#ef4444"/>
                    <text x="145" y="110" font-weight="bold" fill="#ef4444" font-size="8.5"><tspan font-style="italic">I</tspan><tspan font-size="75%" dy="1.5">E</tspan> ≈ <tspan font-style="italic">I</tspan><tspan font-size="75%" dy="1.5">C</tspan></text>

                    <rect x="125" y="114" width="16" height="26" fill="#ef4444" fill-opacity="0.2" stroke="#ef4444" stroke-width="1.8" rx="2"/>
                    <text x="145" y="130" text-anchor="start" font-weight="bold" fill="#ef4444" font-size="9"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">E</tspan></text>
                    <line x1="133" y1="140" x2="133" y2="152" stroke="#ef4444" stroke-width="2"/>
                    <line x1="123" y1="152" x2="143" y2="152" stroke="#475569" stroke-width="2"/>

                    <!-- Badge inferior DC -->
                    <rect x="10" y="174" width="210" height="78" rx="6" fill="#ef4444" fill-opacity="0.08" stroke="#ef4444" stroke-opacity="0.3"/>
                    <text x="115" y="191" text-anchor="middle" font-weight="bold" fill="#dc2626" font-size="9.5">Malla Colector-Emisor en DC</text>
                    <text x="115" y="206" text-anchor="middle" font-mono font-bold fill="#ef4444" font-size="9"><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="1.5">CC</tspan> = <tspan font-style="italic">V</tspan><tspan font-size="75%" dy="1.5">CE</tspan> + <tspan font-style="italic">I</tspan><tspan font-size="75%" dy="1.5">C</tspan>(<tspan font-style="italic">R</tspan><tspan font-size="75%" dy="1.5">C</tspan> + <tspan font-style="italic">R</tspan><tspan font-size="75%" dy="1.5">E</tspan>)</text>
                    <text x="115" y="221" text-anchor="middle" font-mono font-bold fill="#0f172a" dark:fill="#f8fafc" font-size="9"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="1.5">dc</tspan> = <tspan font-style="italic">R</tspan><tspan font-size="75%" dy="1.5">C</tspan> + <tspan font-style="italic">R</tspan><tspan font-size="75%" dy="1.5">E</tspan></text>
                    <text x="115" y="238" text-anchor="middle" font-weight="bold" fill="#dc2626" font-size="8.5">Pendiente DC: −1/<tspan font-style="italic">R</tspan><tspan font-size="75%" dy="1.5">dc</tspan></text>
                  </g>

                  <!-- Divisor vertical -->
                  <line x1="500" y1="15" x2="500" y2="255" stroke="#cbd5e1" stroke-dasharray="3 3"/>

                  <!-- ================= (c) CIRCUITO EQUIVALENTE EN ALTERNA (AC) ================= -->
                  <g transform="translate(510, 0)">
                    <text x="115" y="16" text-anchor="middle" font-weight="bold" fill="#10b981" font-size="11">(c) Malla Dinámica de Salida (AC)</text>

                    <!-- VCC es Masa AC -->
                    <line x1="85" y1="28" x2="145" y2="28" stroke="#10b981" stroke-width="2"/>
                    <line x1="105" y1="24" x2="125" y2="24" stroke="#10b981" stroke-width="1.5"/>
                    <text x="115" y="16" text-anchor="middle" font-weight="bold" fill="#10b981" font-size="8.5">+<tspan font-style="italic">V</tspan><tspan font-size="75%" dy="1.5">CC</tspan> → Masa AC (0 V)</text>

                    <!-- Entrada vi a Base -->
                    <circle cx="20" cy="82" r="3" fill="#3b82f6"/>
                    <text x="10" y="86" font-weight="bold" fill="#3b82f6" font-size="9"><tspan font-style="italic">v</tspan><tspan font-size="75%" dy="2">i</tspan></text>
                    <line x1="20" y1="82" x2="55" y2="82" stroke="#3b82f6" stroke-width="1.5"/>
                    <circle cx="55" cy="82" r="2.5" fill="#3b82f6"/>

                    <!-- RB = R1 || R2 a masa AC -->
                    <line x1="55" y1="82" x2="55" y2="92" stroke="#475569" stroke-width="1.3"/>
                    <rect x="47" y="92" width="16" height="24" fill="#6366f1" fill-opacity="0.2" stroke="#6366f1" stroke-width="1.3" rx="2"/>
                    <text x="40" y="106" text-anchor="end" font-weight="bold" fill="#6366f1" font-size="8"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="1.5">B</tspan></text>
                    <line x1="55" y1="116" x2="55" y2="128" stroke="#475569" stroke-width="1.3"/>
                    <line x1="47" y1="128" x2="63" y2="128" stroke="#475569" stroke-width="1.8"/>

                    <line x1="55" y1="82" x2="105" y2="82" stroke="#475569" stroke-width="1.5"/>

                    <!-- Transistor NPN en AC -->
                    <circle cx="113" cy="82" r="15" fill="none" stroke="#64748b" stroke-width="1.2" stroke-opacity="0.5"/>
                    <line x1="105" y1="70" x2="105" y2="94" stroke="#334155" stroke-width="3" stroke-linecap="round"/>
                    <line x1="105" y1="76" x2="123" y2="66" stroke="#10b981" stroke-width="2"/>
                    <line x1="105" y1="88" x2="123" y2="98" stroke="#10b981" stroke-width="2"/>
                    <polygon points="122,97.5 113,93 116,88" fill="#ef4444"/>

                    <!-- Emisor conectado directo a masa por CE (RE cortocircuitada) -->
                    <line x1="123" y1="98" x2="123" y2="128" stroke="#10b981" stroke-width="2"/>
                    <circle cx="123" cy="128" r="2.5" fill="#10b981"/>
                    <line x1="113" y1="128" x2="133" y2="128" stroke="#475569" stroke-width="2"/>
                    <text x="123" y="142" text-anchor="middle" font-bold fill="#10b981" font-size="8">Emisor a Masa (<tspan font-style="italic">r</tspan><tspan font-size="75%" dy="1.5">E</tspan> = 0)</text>

                    <!-- Colector AC: RC y RL en PARALELO a Masa AC -->
                    <circle cx="123" cy="66" r="2.5" fill="#10b981"/>
                    <line x1="123" y1="66" x2="175" y2="66" stroke="#10b981" stroke-width="2"/>
                    
                    <!-- Rama 1: RC a masa AC (arriba) -->
                    <line x1="140" y1="66" x2="140" y2="52" stroke="#10b981" stroke-width="1.8"/>
                    <rect x="132" y="32" width="16" height="20" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="1.5" rx="2"/>
                    <text x="124" y="45" text-anchor="end" font-weight="bold" fill="#10b981" font-size="8.5"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="1.5">C</tspan></text>
                    <line x1="140" y1="32" x2="140" y2="28" stroke="#10b981" stroke-width="1.8"/>

                    <!-- Rama 2: RL a masa AC (a través de C2 cortocircuitado) -->
                    <line x1="175" y1="66" x2="175" y2="52" stroke="#059669" stroke-width="1.8"/>
                    <rect x="167" y="32" width="16" height="20" fill="#059669" fill-opacity="0.2" stroke="#059669" stroke-width="1.5" rx="2"/>
                    <text x="191" y="45" text-anchor="start" font-weight="bold" fill="#059669" font-size="8.5"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="1.5">L</tspan></text>
                    <line x1="175" y1="32" x2="175" y2="28" stroke="#059669" stroke-width="1.8"/>

                    <!-- Salida vo -->
                    <line x1="175" y1="66" x2="205" y2="66" stroke="#10b981" stroke-width="1.5"/>
                    <circle cx="205" cy="66" r="3" fill="#10b981"/>
                    <text x="216" y="70" font-weight="bold" fill="#10b981" font-size="9.5"><tspan font-style="italic">v</tspan><tspan font-size="75%" dy="2">o</tspan></text>
                    <text x="160" y="80" text-anchor="middle" font-bold fill="#047857" font-size="8.5"><tspan font-style="italic">r</tspan><tspan font-size="75%" dy="1.5">ac</tspan> = <tspan font-style="italic">R</tspan><tspan font-size="75%" dy="1.5">C</tspan> ∥ <tspan font-style="italic">R</tspan><tspan font-size="75%" dy="1.5">L</tspan></text>

                    <!-- Flecha corriente ic -->
                    <polygon points="120,56 123,50 126,56" fill="#10b981"/>
                    <text x="114" y="55" font-weight="bold" fill="#10b981" font-size="8.5"><tspan font-style="italic">i</tspan><tspan font-size="75%" dy="1.5">c</tspan></text>

                    <!-- Badge inferior AC -->
                    <rect x="10" y="174" width="210" height="78" rx="6" fill="#10b981" fill-opacity="0.08" stroke="#10b981" stroke-opacity="0.3"/>
                    <text x="115" y="191" text-anchor="middle" font-weight="bold" fill="#047857" font-size="9.5">Malla de Señal en AC</text>
                    <text x="115" y="206" text-anchor="middle" font-mono font-bold fill="#10b981" font-size="9"><tspan font-style="italic">v</tspan><tspan font-size="75%" dy="1.5">ce</tspan> = −<tspan font-style="italic">i</tspan><tspan font-size="75%" dy="1.5">c</tspan> · (<tspan font-style="italic">R</tspan><tspan font-size="75%" dy="1.5">C</tspan> ∥ <tspan font-style="italic">R</tspan><tspan font-size="75%" dy="1.5">L</tspan>)</text>
                    <text x="115" y="221" text-anchor="middle" font-mono font-bold fill="#0f172a" dark:fill="#f8fafc" font-size="9"><tspan font-style="italic">r</tspan><tspan font-size="75%" dy="1.5">ac</tspan> = <tspan font-style="italic">R</tspan><tspan font-size="75%" dy="1.5">C</tspan> ∥ <tspan font-style="italic">R</tspan><tspan font-size="75%" dy="1.5">L</tspan> &lt; <tspan font-style="italic">R</tspan><tspan font-size="75%" dy="1.5">dc</tspan></text>
                    <text x="115" y="238" text-anchor="middle" font-weight="bold" fill="#047857" font-size="8.5">Pendiente AC: −1/<tspan font-style="italic">r</tspan><tspan font-size="75%" dy="1.5">ac</tspan> (Más empinada)</text>
                  </g>
                </svg>
              </div>
            </div>

            <!-- 2. ANÁLISIS DE LA RECTA ESTÁTICA DC -->
            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">1. Recta de Carga Estática (DC)</h5>
            <p class="mb-2 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
              En régimen de corriente continua (DC), todos los capacitores se encuentran en estado estacionario y operan como <strong>circuitos abiertos ideales</strong> ($X_C = \frac{1}{\omega C} \to \infty$). Como consecuencia directa (ver figura b):
            </p>
            <ul class="list-disc pl-5 space-y-1 text-xs text-slate-600 dark:text-slate-400 mb-2">
              <li>El generador de señal $v_s$ queda desacoplado por $C_1$.</li>
              <li>La resistencia de carga externa $R_L$ queda aislada por $C_2$, por lo que <em>no drena corriente estática de la fuente</em> ($I_{RL,dc} = 0$).</li>
              <li>El capacitor $C_E$ está abierto, forzando a que toda la corriente estática de emisor atraviese $R_E$.</li>
            </ul>

            <p class="my-2 text-xs text-slate-700 dark:text-slate-300">
              Aplicando la <strong>Ley de Tensiones de Kirchhoff (KVL)</strong> a lo largo de la <strong>malla Colector-Emisor en continua</strong> (desde $+V_{CC}$ pasando por $R_C$, la juntura C-E del BJT y $R_E$ hasta masa):
            </p>
            $$V_{CC} - I_C R_C - V_{CE} - I_E R_E = 0 \implies V_{CC} = V_{CE} + I_C R_C + I_E R_E$$
            <p class="my-1 text-xs text-slate-700 dark:text-slate-300">
              Dado que $I_E = \frac{\beta + 1}{\beta} I_C \approx I_C$, agrupamos los términos resistivos definiendo la <strong>resistencia estática total de continua ($R_{dc}$)</strong>:
            </p>
            $$\mathbf{R_{dc} = R_C + R_E}$$
            $$V_{CC} \approx V_{CE} + I_C (R_C + R_E) = V_{CE} + I_C R_{dc}$$
            <p class="my-2 text-xs text-slate-700 dark:text-slate-300">
              Despejando la corriente de colector $i_C$ en función de la tensión $v_{CE}$ para graficar en el plano $(v_{CE}, i_C)$:
            </p>
            $$\mathbf{i_C = -\frac{1}{R_{dc}} v_{CE} + \frac{V_{CC}}{R_{dc}}}$$

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs my-2 font-mono">
              <div class="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <span class="text-slate-500 font-sans block text-[10px]">Corte eje de abscisas ($i_C = 0$):</span>
                <strong>$v_{CE} = V_{CC}$</strong>
                <span class="text-[10px] text-slate-500 font-sans block mt-0.5">Tensión a circuito abierto</span>
              </div>
              <div class="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <span class="text-slate-500 font-sans block text-[10px]">Corte eje de ordenadas ($v_{CE} = 0$):</span>
                <strong>$i_C = \frac{V_{CC}}{R_{dc}}$</strong>
                <span class="text-[10px] text-slate-500 font-sans block mt-0.5">Corriente de cortocircuito DC</span>
              </div>
              <div class="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <span class="text-slate-500 font-sans block text-[10px]">Pendiente de la recta:</span>
                <strong>$m_{dc} = -\frac{1}{R_{dc}}$</strong>
                <span class="text-[10px] text-slate-500 font-sans block mt-0.5">Inclinación estática</span>
              </div>
            </div>

            <!-- 3. ANÁLISIS DE LA RECTA DINÁMICA AC -->
            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-5 mb-2">2. Recta de Carga Dinámica (AC) y Cálculo Riguroso de $r_{ac}$</h5>
            <p class="mb-2 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
              En la banda de paso de media frecuencia del amplificador, los capacitores presentan reactancias despreciables y se comportan como <strong>cortocircuitos ideales</strong> ($X_C \approx 0$). Asimismo, la fuente ideal de continua $V_{CC}$ no tiene variación temporal, por lo que actúa como <strong>masa dinámica (AC Ground)</strong>. Analizando el circuito equivalente en alterna (ver figura c):
            </p>
            <ul class="list-disc pl-5 space-y-1.5 text-xs text-slate-600 dark:text-slate-400 mb-2">
              <li>
                <strong>En el colector:</strong> La resistencia de polarización $R_C$ está conectada entre colector y masa AC. A su vez, la resistencia de carga $R_L$ queda conectada a través de $C_2$ (cortocircuito) entre colector y masa AC. Por tanto, <strong>$R_C$ y $R_L$ quedan en estricto paralelo dinámico</strong>:
                $$R_C \parallel R_L = \frac{R_C \cdot R_L}{R_C + R_L}$$
              </li>
              <li>
                <strong>En el emisor:</strong> El capacitor $C_E$ deriva toda la corriente alternada directamente a masa, cortocircuitando la resistencia $R_E$. La resistencia incremental de emisor es nula ($r_E = 0$).
              </li>
            </ul>

            <div class="p-3 my-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-xs">
              <strong class="text-emerald-800 dark:text-emerald-300 block mb-1">
                Fórmula Fundamental de la Resistencia Dinámica de Alterna ($r_{ac}$):
              </strong>
              $$\mathbf{r_{ac} = R_C \parallel R_L = \frac{R_C \cdot R_L}{R_C + R_L}}$$
              <p class="text-slate-600 dark:text-slate-400 text-[11px] mt-1 leading-relaxed">
                Esta es la resistencia total que "siente" la corriente incremental de colector $i_c$ al circular por la malla de salida en alterna.
              </p>
            </div>

            <!-- Caso especial de examen: Desacoplo parcial -->
            <div class="p-3 my-3 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 text-xs space-y-1.5">
              <strong class="text-purple-800 dark:text-purple-300 flex items-center gap-1.5 font-bold">
                <span>⚡</span> Caso Típico de Examen: Resistencia de Emisor Parcialmente Desacoplada ($R_{E1} + R_{E2}$)
              </strong>
              <p class="text-slate-600 dark:text-slate-400 leading-relaxed text-[11px]">
                En muchas aplicaciones prácticas de cátedra, para linealizar la etapa y reducir la distorsión armónica sin perder excesiva ganancia, la resistencia de emisor se divide en dos: $R_E = R_{E1} + R_{E2}$, donde <strong>únicamente $R_{E2}$ está en paralelo con $C_E$</strong>, mientras que $R_{E1}$ permanece en serie con el emisor en AC:
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-center font-mono my-1 text-[11px]">
                <div class="p-1.5 rounded bg-white dark:bg-slate-900 border border-purple-100 dark:border-purple-900">
                  <span class="text-slate-500 font-sans block text-[10px]">En Continua (DC):</span>
                  $$R_{dc} = R_C + R_{E1} + R_{E2}$$
                </div>
                <div class="p-1.5 rounded bg-white dark:bg-slate-900 border border-purple-100 dark:border-purple-900">
                  <span class="text-slate-500 font-sans block text-[10px]">En Alterna (AC):</span>
                  $$\mathbf{r_{ac} = (R_C \parallel R_L) + R_{E1}}$$
                </div>
              </div>
            </div>

            <p class="my-2 text-xs text-slate-700 dark:text-slate-300">
              La relación de Ohm incremental para la malla de salida de alterna establece que la variación de tensión $v_{ce}$ responde a la corriente incremental $i_c$:
            </p>
            $$v_{ce} = -i_c \cdot r_{ac} \implies i_c = -\frac{1}{r_{ac}} v_{ce}$$
            <p class="text-xs text-slate-500 dark:text-slate-400 italic">
              (El signo negativo proviene de que un aumento de corriente $i_c$ incrementa la caída en $r_{ac}$, haciendo caer el potencial instantáneo de colector $v_{ce}$).
            </p>
            <p class="my-2 text-xs text-slate-700 dark:text-slate-300">
              Como las variables totales son la superposición del punto de reposo y la señal incremental ($i_C = I_{CQ} + i_c$ y $v_{CE} = V_{CEQ} + v_{ce}$):
            </p>
            $$(i_C - I_{CQ}) = -\frac{1}{r_{ac}} (v_{CE} - V_{CEQ})$$
            <p class="my-2 text-xs text-slate-700 dark:text-slate-300">
              Reordenando en la forma explícita de recta $i_C = m_{ac} v_{CE} + b$:
            </p>
            $$\mathbf{i_C = -\frac{1}{r_{ac}} v_{CE} + \left( I_{CQ} + \frac{V_{CEQ}}{r_{ac}} \right)}$$

            <!-- 4. COMPARACIÓN DE PENDIENTES -->
            <div class="p-3 my-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-xs space-y-1.5">
              <strong class="text-amber-800 dark:text-amber-300 flex items-center gap-1.5 font-bold">
                <span>🔍</span> ¿Por qué la Recta Dinámica es SIEMPRE más empinada que la Estática?
              </strong>
              <p class="text-slate-600 dark:text-slate-400 leading-relaxed text-[11px]">
                Dado que el paralelo de dos resistencias es siempre menor que cualquiera de ellas ($R_C \parallel R_L < R_C$), y en DC se suma $R_E$:
              </p>
              <div class="text-center font-mono my-1 font-bold text-amber-900 dark:text-amber-200 text-xs">
                $$r_{ac} = R_C \parallel R_L < R_C < R_C + R_E = R_{dc} \implies \mathbf{r_{ac} < R_{dc}}$$
              </div>
              <p class="text-slate-600 dark:text-slate-400 leading-relaxed text-[11px]">
                Al invertir las resistencias para obtener las pendientes de las rectas:
              </p>
              <div class="text-center font-mono my-1 font-bold text-rose-600 dark:text-rose-400 text-xs">
                $$\left| -\frac{1}{r_{ac}} \right| > \left| -\frac{1}{R_{dc}} \right| \implies \mathbf{|m_{ac}| > |m_{dc}|}$$
              </div>
              <p class="text-slate-600 dark:text-slate-400 text-[11px]">
                <strong>Conclusión física:</strong> La recta dinámica es más vertical (empinada). Por ello, cuando la señal oscila alrededor del punto de reposo $Q$, la tensión instantánea $v_{CE}$ alcanza el corte o la saturación mucho antes de lo que sugeriría la recta estática de continua, como se aprecia claramente en el plano $(v_{CE}, i_C)$ a continuación:
              </p>
            </div>
            <!-- DIAGRAMA SVG RECTAS DE CARGA ESTÁTICA Y DINÁMICA -->
            <div class="my-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span class="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-2 text-center">
                📈 Recta de Carga Estática (DC) vs. Recta de Carga Dinámica (AC) y Punto Q
              </span>
              <div class="flex justify-center overflow-x-auto">
                <svg viewBox="0 0 680 270" class="w-full max-w-[680px] text-xs font-sans select-none" style="min-width: 520px;">
                  <defs>
                    <marker id="ea1-arr-green" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                      <polygon points="0 0, 6 3, 0 6" fill="#10b981"/>
                    </marker>
                  </defs>

                  <!-- Ejes Cartesianos -->
                  <!-- Eje Y: i_C -->
                  <line x1="80" y1="230" x2="80" y2="22" stroke="#475569" stroke-width="2"/>
                  <polygon points="76,24 80,16 84,24" fill="#475569"/>
                  <text x="75" y="16" text-anchor="end" font-weight="bold" fill="#475569" font-size="11"><tspan font-style="italic">i</tspan><tspan font-size="75%" dy="2">C</tspan><tspan font-size="100%" dy="-2"> (mA)</tspan></text>

                  <!-- Eje X: v_CE -->
                  <line x1="80" y1="230" x2="650" y2="230" stroke="#475569" stroke-width="2"/>
                  <polygon points="648,226 657,230 648,234" fill="#475569"/>
                  <text x="655" y="246" text-anchor="end" font-weight="bold" fill="#475569" font-size="11"><tspan font-style="italic">v</tspan><tspan font-size="75%" dy="2">CE</tspan><tspan font-size="100%" dy="-2"> (V)</tspan></text>

                  <!-- Zona de saturación (V_CE,sat en x = 115) -->
                  <rect x="80" y="25" width="35" height="205" fill="#f59e0b" fill-opacity="0.12"/>
                  <line x1="115" y1="230" x2="115" y2="25" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3 2"/>
                  <text x="115" y="246" text-anchor="middle" font-weight="bold" fill="#d97706" font-size="9"><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">CE,sat</tspan></text>

                  <!-- Zona de corte (Franja inferior) -->
                  <rect x="80" y="224" width="560" height="6" fill="#64748b" fill-opacity="0.25"/>

                  <!-- RECTA DE CARGA ESTÁTICA DC: Pasa exactamente por (80, 47.5), Q(315, 135) y (570, 230) -->
                  <line x1="80" y1="47.5" x2="570" y2="230" stroke="#64748b" stroke-width="2" stroke-dasharray="4 3"/>
                  <text x="500" y="196" text-anchor="start" font-weight="bold" fill="#64748b" font-size="9.5">Recta DC (Pendiente −1/<tspan font-style="italic">R</tspan><tspan font-size="75%" dy="1.5">dc</tspan>)</text>
                  <!-- V_CC corte con el eje X -->
                  <circle cx="570" cy="230" r="4" fill="#64748b"/>
                  <text x="570" y="246" text-anchor="middle" font-weight="bold" fill="#64748b" font-size="9.5"><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">CC</tspan></text>
                  <!-- V_CC / R_dc corte con el eje Y -->
                  <circle cx="80" cy="47.5" r="4" fill="#64748b"/>
                  <text x="72" y="51" text-anchor="end" font-weight="bold" fill="#64748b" font-size="8.5"><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="1.5">CC</tspan> / <tspan font-style="italic">R</tspan><tspan font-size="75%" dy="1.5">dc</tspan></text>

                  <!-- RECTA DE CARGA DINÁMICA AC: Pasa exactamente por (95, 30.5), sat(115, 40), Q(315, 135) y corte(515, 230) -->
                  <line x1="95" y1="30.5" x2="515" y2="230" stroke="#ef4444" stroke-width="2.5"/>
                  <text x="210" y="55" text-anchor="start" font-weight="bold" fill="#ef4444" font-size="10">Recta Dinámica AC (Pendiente −1/<tspan font-style="italic">r</tspan><tspan font-size="75%" dy="1.5">ac</tspan>)</text>
                  <!-- Corte de la recta AC con el eje X -->
                  <circle cx="515" cy="230" r="3.5" fill="#ef4444"/>
                  <text x="515" y="246" text-anchor="middle" font-mono font-bold fill="#ef4444" font-size="8.5"><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="1.5">CEQ</tspan> + <tspan font-style="italic">I</tspan><tspan font-size="75%" dy="1.5">CQ</tspan><tspan font-style="italic">r</tspan><tspan font-size="75%" dy="1.5">ac</tspan></text>

                  <!-- Punto Q Óptimo (Intersección Exacta de Ambas Rectas) -->
                  <g>
                    <circle cx="315" cy="135" r="6" fill="#ef4444"/>
                    <circle cx="315" cy="135" r="2.5" fill="#ffffff"/>
                    <text x="325" y="130" font-weight="bold" fill="#ef4444" font-size="11">Punto Q (<tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">CEQ</tspan>, <tspan font-style="italic">I</tspan><tspan font-size="75%" dy="2">CQ</tspan>)</text>

                    <!-- Proyecciones punteadas a los ejes -->
                    <line x1="315" y1="135" x2="80" y2="135" stroke="#ef4444" stroke-width="1.2" stroke-dasharray="3 3"/>
                    <text x="72" y="138" text-anchor="end" font-weight="bold" fill="#ef4444" font-size="9.5"><tspan font-style="italic">I</tspan><tspan font-size="75%" dy="2">CQ,opt</tspan></text>

                    <line x1="315" y1="135" x2="315" y2="230" stroke="#ef4444" stroke-width="1.2" stroke-dasharray="3 3"/>
                    <text x="315" y="246" text-anchor="middle" font-weight="bold" fill="#ef4444" font-size="9.5"><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">CEQ,opt</tspan></text>
                  </g>

                  <!-- Excursiones Simétricas: Exactamente centradas en x = 315 (Δx = 200 a izquierda y 200 a derecha) -->
                  <line x1="115" y1="210" x2="515" y2="210" stroke="#10b981" stroke-width="2" marker-start="url(#ea1-arr-green)" marker-end="url(#ea1-arr-green)"/>
                  <text x="315" y="204" text-anchor="middle" font-weight="bold" fill="#047857" font-size="9">Excursión Dinámica Simétrica Máxima (Δ<tspan font-style="italic">v</tspan><tspan font-size="75%" dy="1.5">o</tspan> = <tspan font-style="italic">I</tspan><tspan font-size="75%" dy="1.5">CQ</tspan>·<tspan font-style="italic">r</tspan><tspan font-size="75%" dy="1.5">ac</tspan> = <tspan font-style="italic">V</tspan><tspan font-size="75%" dy="1.5">CEQ</tspan> − <tspan font-style="italic">V</tspan><tspan font-size="75%" dy="1.5">CE,sat</tspan>)</text>
                </svg>
              </div>
            </div>
          `
        },
        {
          id: 'u1-excursion-maxima',
          titulo: '1.3 Límites Físicos y Máxima Excursión Simétrica sin Recorte',
          contenido: `
            <p class="mb-3">El rango dinámico sin recorte está limitado físicamente por los dos extremos no lineales del transistor: el <strong>corte</strong> ($i_C \\to 0$) y la <strong>saturación</strong> ($v_{CE} \\to V_{CE,sat}$).</p>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Excursión Máxima hacia Cada Límite</h5>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
              <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                <span class="text-xs font-mono font-semibold text-rose-500 uppercase tracking-wide">1. Límite por Corte</span>
                <p class="text-xs mt-1">Ocurre cuando la corriente instantánea se anula ($i_C = 0$):</p>
                $$\\Delta i_{C,corte} = I_{CQ}$$
                <p class="text-xs">La tensión de salida máxima antes del recorte hacia corte es:</p>
                $$\\Delta v_{CE,corte} = \\Delta i_{C,corte} \\cdot r_{ac} = I_{CQ} \\cdot r_{ac}$$
              </div>

              <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                <span class="text-xs font-mono font-semibold text-amber-500 uppercase tracking-wide">2. Límite por Saturación</span>
                <p class="text-xs mt-1">Ocurre cuando la tensión alcanza $V_{CE,sat} \\approx 0.1\\text{ V} - 0.3\\text{ V}$:</p>
                $$\\Delta v_{CE,sat} = V_{CEQ} - V_{CE,sat}$$
                <p class="text-xs">La corriente máxima antes de entrar a saturación es:</p>
                $$\\Delta i_{C,sat} = \\frac{V_{CEQ} - V_{CE,sat}}{r_{ac}}$$
              </div>
            </div>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Deducción del Punto Q Óptimo para Máxima Excursión Simétrica</h5>
            <p class="mb-2">Para aprovechar al máximo el rango dinámico sin que la senoidal recorte prematuramente en un solo semiciclo, la excursión máxima hacia corte debe igualar exactamente a la excursión hacia saturación:</p>
            $$\\Delta v_{CE,corte} = \\Delta v_{CE,sat} \\implies I_{CQ} \\cdot r_{ac} = V_{CEQ} - V_{CE,sat}$$
            <p class="my-2">Por otra parte, el punto $Q$ debe pertenecer a la recta estática de continua:</p>
            $$V_{CEQ} = V_{CC} - I_{CQ} R_{dc}$$
            <p class="my-2">Sustituyendo $V_{CEQ}$ en la igualdad de excursiones:</p>
            $$I_{CQ} \\cdot r_{ac} = (V_{CC} - I_{CQ} R_{dc}) - V_{CE,sat}$$
            $$I_{CQ} (R_{dc} + r_{ac}) = V_{CC} - V_{CE,sat}$$

            <div class="p-4 my-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-950 dark:text-emerald-200">
              <h5 class="font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <span>🎯</span> Fórmulas de Oro para Máxima Excursión Simétrica
              </h5>
              $$\\mathbf{I_{CQ,opt} = \\frac{V_{CC} - V_{CE,sat}}{R_{dc} + r_{ac}}}$$
              $$\\mathbf{V_{CEQ,opt} = V_{CE,sat} + I_{CQ,opt} \\cdot r_{ac} = \\frac{V_{CC} r_{ac} + V_{CE,sat} R_{dc}}{R_{dc} + r_{ac}}}$$
              <p class="text-xs mt-2">La amplitud pico máxima simétrica de señal obtenible sin recorte es:</p>
              $$\\mathbf{\\hat{v}_{o,max} = I_{CQ,opt} \\cdot r_{ac} = V_{CEQ,opt} - V_{CE,sat}}$$
              $$\\mathbf{V_{opp,max} = 2 \\cdot \\hat{v}_{o,max} = 2 I_{CQ,opt} r_{ac}}$$
            </div>

            <div class="p-3.5 my-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-950 dark:text-rose-200">
              <h5 class="font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <span>⚠️</span> Trampa Clásica de Examen: Diagnóstico de Recorte Asimétrico
              </h5>
              <ul class="list-disc pl-5 space-y-1 text-xs">
                <li><strong>Si $I_{CQ} > I_{CQ,opt}$:</strong> El punto Q está demasiado alto. La tensión $V_{CEQ}$ es baja y queda cerca de la saturación. <em>El circuito recorta primero por saturación</em>. La excursión simétrica máxima queda limitada por $\\hat{v}_{o,max} = V_{CEQ} - V_{CE,sat} < I_{CQ} r_{ac}$.</li>
                <li><strong>Si $I_{CQ} < I_{CQ,opt}$:</strong> El punto Q está demasiado bajo. La corriente $I_{CQ}$ es pequeña y queda cerca del corte. <em>El circuito recorta primero por corte</em>. La excursión simétrica máxima queda limitada por $\\hat{v}_{o,max} = I_{CQ} r_{ac} < V_{CEQ} - V_{CE,sat}$.</li>
              </ul>
            </div>
          `
        },
        {
          id: 'u1-estabilidad-polarizacion',
          titulo: '1.4 Estabilidad Térmica de Polarización y Factores de Sensibilidad',
          contenido: `
            <p class="mb-3">El punto de reposo $Q(I_{CQ}, V_{CEQ})$ está sujeto a fuertes variaciones causadas por la temperatura ambiente y el autocalentamiento por disipación de potencia. En transistores de silicio existen tres parámetros fuertemente termodependientes:</p>
            <ol class="list-decimal pl-5 space-y-1 text-xs sm:text-sm mb-3">
              <li><strong>Corriente inversa de saturación de la juntura $CB$ ($I_{CBO}$):</strong> Se duplica aproximadamente cada $10^\\circ\\text{C}$ de incremento térmico.</li>
              <li><strong>Tensión umbral base-emisor ($V_{BE}$):</strong> Varía a razón de $\\frac{\\partial V_{BE}}{\\partial T} \\approx -2.0\\text{ mV/}^\\circ\\text{C}$ a $-2.5\\text{ mV/}^\\circ\\text{C}$.</li>
              <li><strong>Ganancia de corriente ($\\beta$ o $h_{FE}$):</strong> Aumenta con la temperatura con un coeficiente de $+0.5\\%/^\\circ\\text{C}$ a $+1.0\\%/^\\circ\\text{C}$.</li>
            </ol>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Circuito Universal de Polarización (Divisor Resistivo con $R_E$)</h5>
            <p class="mb-2">Aplicando el equivalente Thévenin a la base:</p>
            $$V_{BB} = V_{CC} \\frac{R_2}{R_1 + R_2}, \\quad R_B = R_1 \\parallel R_2 = \\frac{R_1 R_2}{R_1 + R_2}$$
            <p class="my-2">Ecuación de la malla de entrada:</p>
            $$V_{BB} = I_B R_B + V_{BE} + I_E R_E$$
            <p class="my-2">Relación de corrientes en el BJT incluyendo la corriente de fuga $I_{CBO}$:</p>
            $$I_C = \\beta I_B + (1+\\beta) I_{CBO} \\implies I_B = \\frac{I_C - (1+\\beta)I_{CBO}}{\\beta}$$
            $$I_E = I_C + I_B \\approx I_C$$
            <p class="my-2">Sustituyendo $I_B$ en la ecuación de la malla y despejando $I_C$:</p>
            $$\\mathbf{I_C = \\frac{\\beta (V_{BB} - V_{BE}) + (1+\\beta)(R_B + R_E) I_{CBO}}{R_B + (1+\\beta) R_E}}$$

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Deducción de los Factores de Estabilidad (Sensibilidad)</h5>
            <p class="mb-2">La variación total de corriente de colector se expresa como el diferencial total:</p>
            $$\\Delta I_C \\approx S(I_{CBO}) \\cdot \\Delta I_{CBO} + S(V_{BE}) \\cdot \\Delta V_{BE} + S(\\beta) \\cdot \\Delta \\beta$$

            <div class="space-y-3 my-3">
              <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span class="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">1. Factor $S(I_{CBO}) = \\frac{\\partial I_C}{\\partial I_{CBO}}$</span>
                $$S(I_{CBO}) = (1+\\beta) \\frac{R_B + R_E}{R_B + (1+\\beta)R_E} = (1+\\beta) \\frac{1 + \\frac{R_B}{R_E}}{1 + \\beta + \\frac{R_B}{R_E}}$$
                <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  • Si $R_B / R_E \\to 0$: $S(I_{CBO}) \\to 1$ (estabilidad ideal).<br>
                  • Si $R_B / R_E \\to \\infty$: $S(I_{CBO}) \\to 1+\\beta$ (peor caso, polarización por corriente de base fija).
                </p>
              </div>

              <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span class="text-xs font-mono font-bold text-purple-600 dark:text-purple-400">2. Factor $S(V_{BE}) = \\frac{\\partial I_C}{\\partial V_{BE}}$</span>
                $$S(V_{BE}) = \\frac{-\\beta}{R_B + (1+\\beta)R_E} \\approx \\frac{-1}{R_E + \\frac{R_B}{\\beta}}$$
                <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Nótese el signo negativo: dado que $\\Delta V_{BE} < 0$ al aumentar la temperatura, el término $S(V_{BE}) \\Delta V_{BE} > 0$ tiende a incrementar $I_C$. Una resistencia $R_E$ grande atenúa este efecto.
                </p>
              </div>

              <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span class="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">3. Factor $S(\\beta) = \\frac{\\partial I_C}{\\partial \\beta}$</span>
                $$S(\\beta) = \\frac{I_{C1}(1 + R_B/R_E)}{(1+\\beta_1 + R_B/R_E)(1+\\beta_2 + R_B/R_E)}$$
              </div>
            </div>

            <div class="p-3.5 my-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-950 dark:text-amber-200">
              <h5 class="font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <span>📏</span> Criterios de Diseño Práctico de Cátedra (UTN FRBA)
              </h5>
              <ol class="list-decimal pl-5 space-y-1 text-xs">
                <li><strong>Condición de baja sensibilidad a $\\beta$:</strong> $R_B \\le 0.1 \\cdot (1+\\beta) R_E$.</li>
                <li><strong>Corriente de sangrador del divisor:</strong> $I_{div} = \\frac{V_{CC}}{R_1 + R_2} \\ge 10 \\cdot I_{BQ}$.</li>
                <li><strong>Tensión de polarización en el emisor:</strong> $V_E = I_{EQ} R_E \\ge 1.0\\text{ V}$ (típicamente entre $0.1 V_{CC}$ y $0.2 V_{CC}$).</li>
              </ol>
            </div>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Embalamiento Térmico (Thermal Runaway)</h5>
            <p class="mb-2">El embalamiento térmico es un proceso regenerativo acumulativo:</p>
            $$T_j \\uparrow \\implies V_{BE} \\downarrow, I_{CBO} \\uparrow \\implies I_C \\uparrow \\implies P_D = V_{CE} I_C \\uparrow \\implies T_j \\uparrow$$
            <p class="my-2">Para evitar la destrucción térmica del semiconductor, la velocidad a la que se genera calor debe ser menor que la velocidad a la que el sistema térmico lo disipa al ambiente:</p>
            $$\\frac{\\partial P_D}{\\partial T_j} < \\frac{1}{\\theta_{ja}}$$
            <p class="text-xs text-slate-600 dark:text-slate-400">Como $P_D = V_{CE} I_C = [V_{CC} - I_C(R_C + R_E)] I_C$, el punto crítico ocurre cuando $V_{CE} < V_{CC}/2$, donde un aumento de $I_C$ reduce la potencia disipada y estabiliza intrínsecamente el circuito.</p>

            <div class="p-3 my-3 rounded-xl bg-purple-500/10 dark:bg-purple-950/40 border border-purple-500/30 text-xs flex items-start gap-2.5">
              <span class="text-base shrink-0">🔗</span>
              <div class="flex-1 min-w-0">
                <div class="font-semibold text-purple-900 dark:text-purple-300">
                  Fundamento Previo de Electrónica I:
                </div>
                <p class="text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                  Para repasar el cálculo estático de mallas, divisor resistivo ($V_{BB}, R_B$) y ubicación del punto Q en continua:
                </p>
                <button 
                  onclick="navegarASeccionTeorica('electronica-1', 'e1-u3-circuitos-polarizacion')"
                  class="mt-1.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-mono text-[11px] font-medium transition-colors shadow-2xs"
                >
                  <span>📖 Ver Electrónica I · Unidad 3 (Polarización DC del BJT)</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          `
        },
        {
          id: 'u1-formulario',
          titulo: '1.5 Formulario de Examen y Síntesis - Unidad 1',
          contenido: `
            <div class="overflow-x-auto my-3">
              <table class="w-full text-xs text-left border-collapse border border-slate-200 dark:border-slate-800">
                <thead>
                  <tr class="bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 font-mono">
                    <th class="p-2.5 border border-slate-200 dark:border-slate-800">Parámetro / Concepto</th>
                    <th class="p-2.5 border border-slate-200 dark:border-slate-800">Expresión Analítica</th>
                    <th class="p-2.5 border border-slate-200 dark:border-slate-800">Observaciones Clave</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 dark:divide-slate-800 font-mono">
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">Resistencia DC ($R_{dc}$)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$R_C + R_E$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">Capacitores abiertos</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">Resistencia AC ($r_{ac}$)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$R_C \\parallel R_L$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">Emisor desacoplado por $C_E$</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">Corriente Óptima $I_{CQ}$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$\\frac{V_{CC} - V_{CE,sat}}{R_{dc} + r_{ac}}$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">Máxima excursión simétrica</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">Tensión Óptima $V_{CEQ}$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$V_{CE,sat} + I_{CQ,opt} r_{ac}$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">Centro de la recta dinámica</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">Amplitud Pico $\\hat{v}_{o,max}$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$I_{CQ,opt} \\cdot r_{ac}$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">$V_{opp} = 2 \\hat{v}_{o,max}$</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">Distorsión 2do Armónico</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$HD_2 = \\frac{1}{4} \\frac{\\hat{V}_{be}}{V_T}$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">$\\le 5\\%$ si $\\hat{V}_{be} \\le 5\\text{ mV}$</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">Sensibilidad $S(I_{CO})$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$(1+\\beta) \\frac{1 + R_B/R_E}{1 + \\beta + R_B/R_E}$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">Ideal $S \\to 1$ si $R_B \\ll R_E$</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">Sensibilidad $S(V_{BE})$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$\\frac{-\\beta}{R_B + (1+\\beta)R_E}$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">$\\partial V_{BE}/\\partial T \\approx -2\\text{ mV/}^\\circ\\text{C}$</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="pt-2 flex justify-end">
              <button onclick="filtrarUnidad('ea1-u1'); volverAEjercicios();" class="text-xs font-mono text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1">
                <span>Practicar ejercicios guiados de la Unidad 1</span>
                <span>→</span>
              </button>
            </div>
          `
        }
      ]
    },

    // ========================================================================
    // UNIDAD 2: POTENCIA, BALANCE ENERGÉTICO Y TÉRMICA
    // ========================================================================
    {
      id: 'ea1-u2',
      numero: 2,
      titulo: 'Unidad 2: Balance Energético, Clases de Potencia y Rendimiento Térmico',
      icono: '🔥',
      badgeColor: 'border-rose-500/40 bg-rose-950/40 text-rose-300',
      introduccion: 'En esta unidad se profundiza en las etapas amplificadoras de potencia destinadas a entregar cantidades apreciables de energía a una carga (e.g. parlante, actuador, antena). Se analizan el ángulo de conducción, los balances energéticos de Clase A, Clase B y Clase AB, la deducción del punto de máxima disipación en transistores complementarios, la distorsión de cruce con polarización por multiplicador Vbe, y el dimensionamiento riguroso de disipadores mediante la ley de Ohm térmica.',
      secciones: [
        {
          id: 'u2-clases-potencia',
          titulo: '2.1 Clasificación de Amplificadores por Ángulo de Conducción',
          contenido: `
            <p class="mb-3">El <strong>ángulo de conducción ($2\\theta$)</strong> se define como la porción angular de un ciclo senoidal completo ($360^\\circ$ o $2\\pi\\text{ rad}$) durante la cual el dispositivo activo conduce corriente de salida no nula:</p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
              <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span class="text-xs font-mono font-bold text-amber-500">Clase A ($2\\theta = 360^\\circ = 2\\pi$)</span>
                <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  El transistor conduce ininterrumpidamente durante todo el ciclo. Punto Q centrado en la zona activa. Mínima distorsión armónica, pero consumo estático permanente y bajísimo rendimiento energético ($\le 25\\%$ con carga resistiva).
                </p>
              </div>

              <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span class="text-xs font-mono font-bold text-blue-500">Clase B ($2\\theta = 180^\\circ = \\pi$)</span>
                <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Cada transistor conduce exactamente durante un semiciclo. Polarizado en el umbral del corte ($I_{CQ} = 0$). Alto rendimiento teórico ($\le 78.5\\%$), pero presenta distorsión de cruce por cero (crossover).
                </p>
              </div>

              <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span class="text-xs font-mono font-bold text-emerald-500">Clase AB ($180^\\circ < 2\\theta < 360^\\circ$)</span>
                <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Conduce durante algo más de medio ciclo gracias a una pequeña corriente de reposo $I_{CQ}$ que elimina la distorsión de cruce conservando rendimientos entre $65\\%$ y $75\\%$. Es el estándar absoluto en audio analógico.
                </p>
              </div>

              <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span class="text-xs font-mono font-bold text-purple-500">Clase C ($2\\theta < 180^\\circ$) y Clase D</span>
                <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  <strong>Clase C:</strong> Conduce pulsos breves (< 180°), requiere circuito tanque LC sintonizado para reconstruir la senoidal (usado en transmisores de RF, $\eta > 85\\%$).<br>
                  <strong>Clase D:</strong> Conmutación PWM pura (transistores como llaves), rendimientos $\eta > 90\\%$.
                </p>
              </div>
            </div>
          `
        },
        {
          id: 'u2-clase-a-balance',
          titulo: '2.2 Balance Energético Exhaustivo en Amplificadores Clase A',
          contenido: `
            <p class="mb-3">Considérese un amplificador Clase A en emisor común con carga resistiva en colector $R_C = R_L$ alimentado con tensión $V_{CC}$ y corriente de reposo $I_{CQ}$.</p>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">1. Potencia Continua Suministrada por la Fuente ($P_{DC}$)</h5>
            <p class="mb-2">Como el punto Q es estático y la señal de entrada senoidal tiene valor medio nulo, la corriente media consumida de la fuente es constante e igual a $I_{CQ}$:</p>
            $$P_{DC} = V_{CC} \\cdot I_{CQ} = \\text{constante (independiente del nivel de señal)}$$

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">2. Potencia de Señal Entregada a la Carga ($P_{ac}$)</h5>
            <p class="mb-2">Para una tensión de salida senoidal de amplitud pico $\\hat{V}_o$ sobre la carga $R_L$:</p>
            $$P_{ac} = \\frac{1}{2} \\hat{V}_o \\hat{I}_o = \\frac{\\hat{V}_o^2}{2 R_L}$$
            <p class="my-2">En el caso de máxima excursión simétrica sin recorte (despreciando $V_{CE,sat}$):</p>
            $$\\hat{V}_{o,max} = \\frac{V_{CC}}{2}, \\quad I_{CQ} = \\frac{V_{CC}}{2 R_L}$$
            $$P_{ac,max} = \\frac{(V_{CC}/2)^2}{2 R_L} = \\frac{V_{CC}^2}{8 R_L} = \\frac{1}{4} V_{CC} I_{CQ}$$

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">3. Rendimiento del Colector ($\\eta$)</h5>
            $$\\eta = \\frac{P_{ac}}{P_{DC}} = \\frac{\\frac{1}{4} V_{CC} I_{CQ}}{V_{CC} I_{CQ}} = \\mathbf{\\frac{1}{4} = 25\\%}$$
            <p class="text-xs text-slate-500 italic mt-1">Con acoplamiento por transformador o choque inductivo ideal, la excursión de colector alcanza $2 V_{CC}$, elevando el rendimiento teórico máximo al $\\mathbf{50\\%}$.</p>

            <div class="p-3.5 my-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-950 dark:text-rose-200">
              <h5 class="font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <span>🔥</span> ¡Peligro de Examen! Disipación Interna en Clase A
              </h5>
              <p class="text-xs">Por el principio de conservación de la energía, la potencia disipada por el transistor es la diferencia entre la potencia continua que entra y la potencia de señal que sale hacia la carga:</p>
              $$P_D = P_{DC} - P_{ac} = V_{CC} I_{CQ} - P_{ac}$$
              <ul class="list-disc pl-5 space-y-1 text-xs mt-2">
                <li><strong>En reposo / silencio (sin señal, $P_{ac} = 0$):</strong> El transistor disipa el $100\\%$ de la energía suministrada:
                  $$\\mathbf{P_{D,max} = P_{DC} = V_{CC} I_{CQ}}$$
                </li>
                <li><strong>A máxima señal ($P_{ac} = P_{ac,max}$):</strong> El transistor disipa sólo $P_D = 0.75 P_{DC}$.</li>
                <li><strong>Conclusión:</strong> En Clase A el transistor se calienta al máximo en silencio y <em>se enfría</em> cuando suena a máxima potencia. El disipador térmico debe dimensionarse obligatoriamente para la condición de silencio.</li>
              </ul>
            </div>
          `
        },
        {
          id: 'u2-clase-b-balance',
          titulo: '2.3 Amplificador Clase B Push-Pull (Simetría Complementaria)',
          contenido: `
            <p class="mb-3">La etapa de salida push-pull complementaria utiliza un transistor NPN ($Q_1$) y un PNP ($Q_2$) conectados en emisor seguidor hacia la carga $R_L$, alimentados con fuentes partidas $\\pm V_{CC}$ (o fuente simple con capacitor de desacoplo de salida):</p>
            <ul class="list-disc pl-5 space-y-1 text-xs sm:text-sm mb-3">
              <li>Semiciclo positivo ($v_i > 0$): $Q_1$ conduce, $Q_2$ está en corte.</li>
              <li>Semiciclo negativo ($v_i < 0$): $Q_2$ conduce, $Q_1$ está en corte.</li>
            </ul>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">1. Potencia Continua Suministrada ($P_{DC}$)</h5>
            <p class="mb-2">La corriente en cada transistor son pulsos de media onda senoidal con valor pico $\\hat{I}_c = \\frac{\\hat{V}_o}{R_L}$. La corriente media tomada de cada una de las fuentes $\\pm V_{CC}$ es:</p>
            $$I_{DC} = \\frac{1}{T} \\int_0^{T/2} \\hat{I}_c \\sin(\\omega t) dt = \\frac{\\hat{I}_c}{\\pi} = \\frac{\\hat{V}_o}{\\pi R_L}$$
            <p class="my-2">La potencia continua total suministrada por ambas fuentes es:</p>
            $$\\mathbf{P_{DC} = 2 \\cdot V_{CC} \\cdot I_{DC} = \\frac{2}{\\pi} V_{CC} \\hat{I}_c = \\frac{2}{\\pi} \\frac{V_{CC} \\hat{V}_o}{R_L}}$$

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">2. Potencia de Señal en la Carga ($P_{ac}$)</h5>
            $$\\mathbf{P_{ac} = \\frac{\\hat{V}_o^2}{2 R_L}}$$

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">3. Rendimiento Energético ($\\eta$)</h5>
            $$\\eta = \\frac{P_{ac}}{P_{DC}} = \\frac{\\frac{\\hat{V}_o^2}{2 R_L}}{\\frac{2}{\\pi} \\frac{V_{CC} \\hat{V}_o}{R_L}} = \\mathbf{\\frac{\\pi}{4} \\frac{\\hat{V}_o}{V_{CC}} \\approx 0.7854 \\frac{\\hat{V}_o}{V_{CC}}}$$
            <p class="my-2">A máxima excursión de salida ($\\hat{V}_o = V_{CC}$):</p>
            $$\\mathbf{\\eta_{max} = \\frac{\\pi}{4} \\approx 78.54\\%}$$
            <!-- DIAGRAMA SVG PUSH-PULL CLASE B Y DISTORSIÓN DE CRUCE -->
            <div class="my-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span class="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-2 text-center">
                ⚡ Etapa de Salida Push-Pull Clase B y Distorsión de Cruce por Cero (Dead-Zone)
              </span>
              <div class="flex justify-center overflow-x-auto">
                <svg viewBox="0 0 680 220" class="w-full max-w-[680px] text-xs font-sans select-none" style="min-width: 520px;">
                  <!-- ================= CIRCUITO PUSH PULL CLASE B ================= -->
                  <g transform="translate(10, 0)">
                    <text x="130" y="18" text-anchor="middle" font-weight="bold" fill="#ef4444" font-size="11">Esquema Clase B Complementario</text>

                    <!-- +VCC Superior -->
                    <line x1="130" y1="28" x2="130" y2="40" stroke="#475569" stroke-width="2"/>
                    <circle cx="130" cy="28" r="3.5" fill="#ef4444"/>
                    <text x="142" y="32" font-weight="bold" fill="#ef4444" font-size="10">+V_CC</text>

                    <!-- Q1 NPN (Conduce semiciclo positivo) -->
                    <line x1="130" y1="40" x2="130" y2="60" stroke="#475569" stroke-width="1.8"/>
                    <line x1="95" y1="60" x2="95" y2="82" stroke="#334155" stroke-width="3"/>
                    <line x1="95" y1="64" x2="130" y2="60" stroke="#475569" stroke-width="1.5"/>
                    <line x1="95" y1="78" x2="130" y2="90" stroke="#475569" stroke-width="1.5"/>
                    <polygon points="120,89 130,90 125,81" fill="#ef4444"/>
                    <text x="75" y="72" font-weight="bold" fill="#6366f1" font-size="10">Q_1 (NPN)</text>

                    <!-- Entrada vi unida a ambas bases -->
                    <line x1="45" y1="73" x2="95" y2="73" stroke="#3b82f6" stroke-width="1.8"/>
                    <line x1="45" y1="73" x2="45" y2="137" stroke="#3b82f6" stroke-width="1.8"/>
                    <line x1="45" y1="137" x2="95" y2="137" stroke="#3b82f6" stroke-width="1.8"/>
                    <!-- Terminal vi -->
                    <line x1="15" y1="105" x2="45" y2="105" stroke="#3b82f6" stroke-width="2"/>
                    <circle cx="15" cy="105" r="3.5" fill="#3b82f6"/>
                    <text x="10" y="100" text-anchor="end" font-weight="bold" fill="#3b82f6" font-size="10.5">v_i (In)</text>

                    <!-- Nodo de salida común (Emisores unidos) -->
                    <line x1="130" y1="90" x2="130" y2="120" stroke="#475569" stroke-width="2"/>
                    <circle cx="130" cy="105" r="3" fill="#10b981"/>

                    <!-- Carga RL hacia la derecha -->
                    <line x1="130" y1="105" x2="190" y2="105" stroke="#10b981" stroke-width="2"/>
                    <rect x="190" y="97" width="26" height="16" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="1.5" rx="2"/>
                    <text x="203" y="91" text-anchor="middle" font-size="9" fill="#10b981" font-weight="bold">R_L</text>
                    <line x1="216" y1="105" x2="240" y2="105" stroke="#475569" stroke-width="1.5"/>
                    <line x1="240" y1="97" x2="240" y2="113" stroke="#475569" stroke-width="2"/>
                    <circle cx="170" cy="105" r="3" fill="#10b981"/>
                    <text x="170" y="95" text-anchor="middle" font-weight="bold" fill="#10b981" font-size="10">v_o</text>

                    <!-- Q2 PNP (Conduce semiciclo negativo) -->
                    <line x1="95" y1="128" x2="95" y2="150" stroke="#334155" stroke-width="3"/>
                    <line x1="95" y1="132" x2="130" y2="120" stroke="#475569" stroke-width="1.5"/>
                    <polygon points="112,128 122,123 120,132" fill="#ef4444"/>
                    <line x1="95" y1="146" x2="130" y2="150" stroke="#475569" stroke-width="1.5"/>
                    <line x1="130" y1="150" x2="130" y2="170" stroke="#475569" stroke-width="1.8"/>
                    <text x="75" y="148" font-weight="bold" fill="#6366f1" font-size="10">Q_2 (PNP)</text>

                    <!-- -VCC Inferior -->
                    <line x1="130" y1="170" x2="130" y2="182" stroke="#475569" stroke-width="2"/>
                    <circle cx="130" cy="182" r="3.5" fill="#ef4444"/>
                    <text x="142" y="186" font-weight="bold" fill="#ef4444" font-size="10">-V_CC</text>
                  </g>

                  <!-- Divisor vertical -->
                  <line x1="285" y1="15" x2="285" y2="210" stroke="#cbd5e1" stroke-dasharray="3 3"/>

                  <!-- ================= FORMA DE ONDA: DISTORSIÓN DE CRUCE ================= -->
                  <g transform="translate(305, 0)">
                    <text x="175" y="18" text-anchor="middle" font-weight="bold" fill="#ef4444" font-size="11">Distorsión de Cruce por Cero (V_BE = 0)</text>

                    <!-- Ejes Cartesiano -->
                    <!-- Eje Y: vo -->
                    <line x1="30" y1="110" x2="330" y2="110" stroke="#475569" stroke-width="1.5"/>
                    <text x="335" y="114" font-size="9" fill="#475569">t</text>
                    <!-- Eje X: t -->
                    <line x1="50" y1="20" x2="50" y2="200" stroke="#475569" stroke-width="1.5"/>
                    <text x="45" y="16" text-anchor="end" font-weight="bold" fill="#475569" font-size="9.5">v_o(t)</text>

                    <!-- Zona muerta delimitada por líneas punteadas -->
                    <line x1="45" y1="95" x2="330" y2="95" stroke="#ef4444" stroke-width="1" stroke-dasharray="2 2"/>
                    <text x="40" y="98" text-anchor="end" fill="#ef4444" font-size="8">+0.6 V</text>
                    <line x1="45" y1="125" x2="330" y2="125" stroke="#ef4444" stroke-width="1" stroke-dasharray="2 2"/>
                    <text x="40" y="128" text-anchor="end" fill="#ef4444" font-size="8">-0.6 V</text>
                    <rect x="50" y="95" width="280" height="30" fill="#ef4444" fill-opacity="0.08"/>
                    <text x="280" y="106" font-size="8" fill="#ef4444" font-weight="bold">Zona Muerta (|v_i| &lt; 0.6V)</text>

                    <!-- Señal distorsionada (con descansos planos en el cruce de cero) -->
                    <!-- Semiciclo positivo: empieza tarde en x=85, pico en x=120 (y=40), cae en x=155 -->
                    <!-- Tramo plano de x=155 a x=185 en y=110! -->
                    <!-- Semiciclo negativo: empieza en x=185, pico en x=220 (y=180), sube a y=110 en x=255 -->
                    <!-- Tramo plano de x=255 a x=285 en y=110! -->
                    <path d="M 50,110 L 80,110 Q 120,20 155,110 L 190,110 Q 225,200 260,110 L 290,110" fill="none" stroke="#ef4444" stroke-width="2.5"/>

                    <text x="120" y="32" text-anchor="middle" font-weight="bold" fill="#2563eb" font-size="8.5">Conduce Q_1</text>
                    <text x="225" y="195" text-anchor="middle" font-weight="bold" fill="#2563eb" font-size="8.5">Conduce Q_2</text>
                    <text x="172" y="122" text-anchor="middle" font-weight="bold" fill="#dc2626" font-size="8.5">Q1 y Q2 en CORTE</text>
                  </g>
                </svg>
              </div>
            </div>
          `
        },
        {
          id: 'u2-clase-b-max-disipacion',
          titulo: '2.4 Deducción del Punto de Máxima Disipación en Clase B (Tema Estrella de Examen)',
          contenido: `
            <p class="mb-3">A diferencia de la Clase A (donde la máxima disipación es en reposo) y de la intuición ingenieril ingenua (que pensaría que disipa más a máxima señal), <strong>en Clase B la máxima disipación térmica ocurre a un nivel intermedio de señal</strong>.</p>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Deducción Paso a Paso</h5>
            <p class="mb-2">La potencia disipada internamente en el conjunto de ambos transistores es:</p>
            $$P_{D,total}(\\hat{V}_o) = P_{DC} - P_{ac} = \\frac{2}{\\pi} \\frac{V_{CC} \\hat{V}_o}{R_L} - \\frac{\\hat{V}_o^2}{2 R_L}$$
            <p class="my-2">Para encontrar la amplitud de salida $\\hat{V}_o$ que maximiza la disipación, derivamos $P_{D,total}$ respecto de $\\hat{V}_o$ e igualamos a cero:</p>
            $$\\frac{dP_{D,total}}{d\\hat{V}_o} = \\frac{2 V_{CC}}{\\pi R_L} - \\frac{\\hat{V}_o}{R_L} = 0$$
            <p class="my-2">Despejando el nivel de tensión crítico:</p>
            $$\\mathbf{\\hat{V}_{o(P_{D,max})} = \\frac{2}{\\pi} V_{CC} \\approx 0.6366 \\, V_{CC}}$$

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Cálculo de la Potencia Máxima Disipada</h5>
            <p class="mb-2">Sustituyendo $\\hat{V}_o = \\frac{2}{\\pi} V_{CC}$ en la ecuación de disipación total:</p>
            $$P_{D,max(total)} = \\frac{2}{\\pi} \\frac{V_{CC} \\left( \\frac{2}{\\pi} V_{CC} \\right)}{R_L} - \\frac{\\left( \\frac{2}{\\pi} V_{CC} \\right)^2}{2 R_L} = \\frac{4 V_{CC}^2}{\\pi^2 R_L} - \\frac{2 V_{CC}^2}{\\pi^2 R_L} = \\mathbf{\\frac{2 V_{CC}^2}{\\pi^2 R_L}}$$

            <div class="p-4 my-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-950 dark:text-emerald-200">
              <h5 class="font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <span>🎯</span> Potencia Máxima por Transistor ($P_{D,max(Q)}$)
              </h5>
              <p class="text-xs">Como la potencia total se reparte equitativamente entre los dos transistores complementarios:</p>
              $$\\mathbf{P_{D,max(Q)} = \\frac{P_{D,max(total)}}{2} = \\frac{V_{CC}^2}{\\pi^2 R_L} \\approx 0.1013 \\frac{V_{CC}^2}{R_L} \\approx \\frac{1}{10} \\frac{V_{CC}^2}{R_L}}$$
              <p class="text-xs mt-2">Relación con la potencia máxima entregada a la carga ($P_{ac,max} = \\frac{V_{CC}^2}{2 R_L}$):</p>
              $$\\mathbf{P_{D,max(Q)} = \\frac{2}{\\pi^2} P_{ac,max} \\approx 0.2026 \\, P_{ac,max} \\approx \\frac{1}{5} P_{ac,max}}$$
              <p class="text-xs mt-2 font-semibold">Criterio vital de diseño: Cada transistor debe ser capaz de disipar al menos el 20% de la potencia máxima de salida del amplificador, dimensionando el disipador para $\\hat{V}_o \\approx 0.64 V_{CC}$ y NUNCA para $\\hat{V}_o = V_{CC}$.</p>
            </div>
          `
        },
        {
          id: 'u2-crossover-vbe',
          titulo: '2.5 Distorsión de Cruce y Polarización Clase AB con Multiplicador Vbe',
          contenido: `
            <p class="mb-3 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
              Para eliminar por completo la distorsión de cruce, se polarizan las bases con una pequeña tensión continua $V_{BB} \\approx 2 V_{BE} \\approx 1.2\\text{ V} - 1.4\\text{ V}$, fijando una corriente de reposo pequeña ($I_{CQ} \\approx 10 - 50\\text{ mA}$). Esto convierte la etapa en <strong>Clase AB</strong>.
            </p>

            <!-- DIAGRAMA SVG MULTIPLICADOR DE VBE Y CLASE AB -->
            <div class="my-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span class="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-2 text-center">
                ❄️ Etapa Clase AB con Multiplicador de $V_{BE}$ y Compensación Térmica
              </span>
              <div class="flex justify-center overflow-x-auto">
                <svg viewBox="0 0 680 230" class="w-full max-w-[680px] text-xs font-sans select-none" style="min-width: 520px;">
                  <!-- ================= CIRCUITO MULTIPLICADOR VBE ================= -->
                  <g transform="translate(15, 0)">
                    <text x="135" y="18" text-anchor="middle" font-weight="bold" fill="#0284c7" font-size="11">Polarización Clase AB con Multiplicador</text>

                    <!-- +VCC -->
                    <line x1="85" y1="28" x2="85" y2="40" stroke="#475569" stroke-width="1.8"/>
                    <circle cx="85" cy="28" r="3" fill="#ef4444"/>
                    <text x="95" y="32" font-weight="bold" fill="#ef4444" font-size="9">+V_CC</text>

                    <!-- Fuente de corriente / Resistencia de polarización I_BIAS -->
                    <line x1="85" y1="40" x2="85" y2="55" stroke="#475569" stroke-width="1.5"/>
                    <circle cx="85" cy="62" r="7" fill="none" stroke="#6366f1" stroke-width="1.5"/>
                    <line x1="85" y1="58" x2="85" y2="66" stroke="#6366f1" stroke-width="1.5"/>
                    <line x1="85" y1="69" x2="85" y2="80" stroke="#475569" stroke-width="1.5"/>
                    <circle cx="85" cy="80" r="3" fill="#6366f1"/>
                    <text x="75" y="83" text-anchor="end" font-weight="bold" fill="#6366f1" font-size="9">Base Q_1</text>

                    <!-- Transistor Multiplicador Qm -->
                    <line x1="85" y1="80" x2="85" y2="92" stroke="#475569" stroke-width="1.5"/>
                    <!-- R1 del multiplicador -->
                    <line x1="85" y1="80" x2="135" y2="80" stroke="#475569" stroke-width="1.5"/>
                    <line x1="135" y1="80" x2="135" y2="88" stroke="#475569" stroke-width="1.2"/>
                    <rect x="127" y="88" width="16" height="20" fill="#0284c7" fill-opacity="0.2" stroke="#0284c7" stroke-width="1.2" rx="1.5"/>
                    <text x="150" y="102" font-size="8" fill="#0284c7" font-weight="bold">R_1</text>
                    <line x1="135" y1="108" x2="135" y2="118" stroke="#475569" stroke-width="1.2"/>
                    <circle cx="135" cy="118" r="2.5" fill="#475569"/>

                    <!-- Base de Qm -->
                    <line x1="135" y1="118" x2="110" y2="118" stroke="#475569" stroke-width="1.5"/>
                    <line x1="110" y1="106" x2="110" y2="130" stroke="#334155" stroke-width="2.5"/>
                    <!-- Colector de Qm conectado a nodo superior -->
                    <line x1="110" y1="110" x2="85" y2="92" stroke="#475569" stroke-width="1.5"/>
                    <circle cx="85" cy="92" r="2" fill="#475569"/>
                    <!-- Emisor de Qm conectado a nodo inferior -->
                    <line x1="110" y1="126" x2="85" y2="145" stroke="#475569" stroke-width="1.5"/>
                    <polygon points="96,137 86,144 94,146" fill="#ef4444"/>
                    <circle cx="85" cy="145" r="2" fill="#475569"/>
                    <text x="96" y="112" font-size="8" fill="#334155" font-weight="bold">Q_m</text>

                    <!-- R2 del multiplicador -->
                    <line x1="135" y1="118" x2="135" y2="128" stroke="#475569" stroke-width="1.2"/>
                    <rect x="127" y="128" width="16" height="20" fill="#0284c7" fill-opacity="0.2" stroke="#0284c7" stroke-width="1.2" rx="1.5"/>
                    <text x="150" y="142" font-size="8" fill="#0284c7" font-weight="bold">R_2</text>
                    <line x1="135" y1="148" x2="135" y2="155" stroke="#475569" stroke-width="1.2"/>
                    <line x1="135" y1="155" x2="85" y2="155" stroke="#475569" stroke-width="1.5"/>

                    <!-- Nodo inferior: Base Q2 -->
                    <line x1="85" y1="145" x2="85" y2="155" stroke="#475569" stroke-width="1.5"/>
                    <circle cx="85" cy="155" r="3" fill="#6366f1"/>
                    <text x="75" y="159" text-anchor="end" font-weight="bold" fill="#6366f1" font-size="9">Base Q_2</text>

                    <!-- Fuente inferior a -VCC -->
                    <line x1="85" y1="155" x2="85" y2="170" stroke="#475569" stroke-width="1.5"/>
                    <circle cx="85" cy="177" r="7" fill="none" stroke="#6366f1" stroke-width="1.5"/>
                    <line x1="85" y1="173" x2="85" y2="181" stroke="#6366f1" stroke-width="1.5"/>
                    <line x1="85" y1="184" x2="85" y2="195" stroke="#475569" stroke-width="1.8"/>
                    <circle cx="85" cy="195" r="3.5" fill="#ef4444"/>
                    <text x="95" y="199" font-weight="bold" fill="#ef4444" font-size="9">-V_CC</text>

                    <!-- Tensión VBB generada -->
                    <line x1="175" y1="80" x2="175" y2="155" stroke="#0284c7" stroke-width="1.8" marker-start="url(#fet-arr-green)" marker-end="url(#fet-arr-green)"/>
                    <text x="185" y="122" font-weight="bold" fill="#0284c7" font-size="10">V_BB ≈ 2 V_BE</text>
                  </g>

                  <!-- Divisor vertical -->
                  <line x1="285" y1="15" x2="285" y2="210" stroke="#cbd5e1" stroke-dasharray="3 3"/>

                  <!-- ================= RESULTADO: FORMA DE ONDA LIMPIA EN CLASE AB ================= -->
                  <g transform="translate(305, 0)">
                    <text x="175" y="18" text-anchor="middle" font-weight="bold" fill="#10b981" font-size="11">Salida Limpia en Clase AB (Sin Distorsión)</text>

                    <!-- Ejes Cartesiano -->
                    <line x1="30" y1="110" x2="330" y2="110" stroke="#475569" stroke-width="1.5"/>
                    <text x="335" y="114" font-size="9" fill="#475569">t</text>
                    <line x1="50" y1="20" x2="50" y2="200" stroke="#475569" stroke-width="1.5"/>
                    <text x="45" y="16" text-anchor="end" font-weight="bold" fill="#475569" font-size="9.5">v_o(t)</text>

                    <!-- Senoidal pura continua y suave sin recortes ni descansos -->
                    <path d="M 50,110 Q 110,15 170,110 Q 230,205 290,110" fill="none" stroke="#10b981" stroke-width="2.5"/>

                    <!-- Badges y explicación de estabilidad -->
                    <rect x="55" y="150" width="280" height="52" rx="6" fill="#10b981" fill-opacity="0.08" stroke="#10b981" stroke-opacity="0.3"/>
                    <text x="195" y="167" text-anchor="middle" font-weight="bold" fill="#047857" font-size="9.5">V_{CE,m} = V_{BEm} · (1 + R_1 / R_2)</text>
                    <text x="195" y="183" text-anchor="middle" font-weight="bold" fill="#047857" font-size="9">❄️ Compensación Térmica: dV_{CE,m}/dT = -4 mV/°C</text>
                    <text x="195" y="196" text-anchor="middle" fill="#64748b" font-size="8">Qm montado en el disipador previene embalamiento térmico</text>
                  </g>
                </svg>
              </div>
            </div>

            <div class="p-3.5 my-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-950 dark:text-blue-200">
              <h5 class="font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <span>❄️</span> Compensación Térmica Automática
              </h5>
              <p class="text-xs">Derivando respecto a la temperatura:</p>
              $$\\frac{dV_{CE,m}}{dT} = \\left( 1 + \\frac{R_1}{R_2} \\right) \\frac{dV_{BEm}}{dT}$$
              <p class="text-xs mt-1">Si se ajusta para $V_{CE,m} \\approx 2 V_{BE}$ ($R_1 = R_2$), el coeficiente térmico del multiplicador es $\\approx 2 \\times (-2\\text{ mV/}^\\circ\\text{C}) = -4\\text{ mV/}^\\circ\\text{C}$, compensando exactamente la caída térmica de las dos junturas de los transistores de potencia cuando $Q_m$ se monta físicamente sobre el mismo disipador.</p>
            </div>

            <p class="text-xs sm:text-sm mt-3">Para mayor estabilidad contra el embalamiento térmico, se añaden pequeñas resistencias degenerativas de emisor ($R_E \\approx 0.22\\,\\Omega - 0.47\\,\\Omega$) en los transistores de potencia, proveyendo una fuerte realimentación negativa local.</p>

            <div class="p-3 my-3 rounded-xl bg-sky-500/10 dark:bg-sky-950/40 border border-sky-500/30 text-xs flex items-start gap-2.5">
              <span class="text-base shrink-0">🔗</span>
              <div class="flex-1 min-w-0">
                <div class="font-semibold text-sky-900 dark:text-sky-300">
                  Ampliación en Electrónica II (Pares Compuestos de Potencia):
                </div>
                <p class="text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                  Para etapas de salida de audio y potencia con transistores compuestos (Par Darlington y Par Sziklai / Realimentado) para multiplicar la ganancia de corriente $\\beta_{total} \\approx \\beta_1 \\beta_2$:
                </p>
                <button 
                  onclick="navegarASeccionTeorica('electronica-2', 'e2-u2-pares-compuestos-cascode')"
                  class="mt-1.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-mono text-[11px] font-medium transition-colors shadow-2xs"
                >
                  <span>📖 Ver Electrónica II · Unidad 2 (Pares Darlington y Sziklai)</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          `
        },
        {
          id: 'u2-disipadores-termodinamica',
          titulo: '2.6 Termodinámica de Semiconductores y Dimensionamiento de Disipadores',
          contenido: `
            <p class="mb-3">La potencia eléctrica disipada como calor en la juntura colector-base debe evacuarse hacia el medio ambiente para no superar la temperatura máxima admisible del silicio ($T_{j,max} \\approx 150^\\circ\\text{C} - 175^\\circ\\text{C}$; límite de seguridad de cátedra: $\\le 125^\\circ\\text{C}$).</p>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">La Ley de Ohm Térmica</h5>
            <p class="mb-2">Existe una analogía matemática exacta entre la conducción eléctrica y la propagación de calor por conducción y convección en régimen estacionario:</p>
            <ul class="list-disc pl-5 space-y-1 text-xs sm:text-sm mb-3">
              <li>Diferencia de temperatura $\\Delta T$ [$^\\circ\\text{C}$ o $\\text{K}$] $\\longleftrightarrow$ Diferencia de potencial $\\Delta V$ [$\\text{V}$].</li>
              <li>Flujo calórico de disipación $P_D$ [$\\text{W}$] $\\longleftrightarrow$ Corriente eléctrica $I$ [$\\text{A}$].</li>
              <li>Resistencia térmica $\\theta$ [$^\\circ\\text{C/W}$] $\\longleftrightarrow$ Resistencia eléctrica $R$ [$\\Omega$].</li>
            </ul>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Circuito Equivalente Térmico en Serie</h5>
            $$T_j - T_a = P_D \\cdot \\theta_{ja} = P_D \\cdot (\\theta_{jc} + \\theta_{cs} + \\theta_{sa})$$
            <div class="space-y-2 text-xs sm:text-sm my-3">
              <p>• <strong>$\\theta_{jc}$ (Juntura a Cápsula):</strong> Depende del encapsulado y tamaño del chip; provisto por el fabricante en la hoja de datos (TO-220 $\\approx 1.5 - 3^\\circ\\text{C/W}$; TO-3 $\\approx 0.8 - 1.5^\\circ\\text{C/W}$).</p>
              <p>• <strong>$\\theta_{cs}$ (Cápsula a Disipador):</strong> Depende del contacto físico y aislación eléctrica:</p>
              <ul class="list-disc pl-6 space-y-0.5 text-xs text-slate-600 dark:text-slate-400">
                <li>Contacto directo con grasa siliconada: $\\approx 0.1 - 0.2^\\circ\\text{C/W}$.</li>
                <li>Aislador de mica con grasa siliconada en ambas caras: $\\approx 0.5 - 1.0^\\circ\\text{C/W}$.</li>
                <li>Almohadilla Sil-Pad sin grasa: $\\approx 0.8 - 1.5^\\circ\\text{C/W}$.</li>
              </ul>
              <p>• <strong>$\\theta_{sa}$ (Disipador a Ambiente):</strong> Es la resistencia térmica que debe tener el perfil de aluminio comercial a seleccionar.</p>
            </div>

            <div class="p-4 my-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-950 dark:text-amber-200">
              <h5 class="font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <span>📐</span> Ecuación de Diseño del Disipador
              </h5>
              $$\\mathbf{\\theta_{sa} \\le \\frac{T_{j,max} - T_{a,max}}{P_{D,max}} - (\\theta_{jc} + \\theta_{cs})}$$
              <p class="text-xs mt-1">Si $\\theta_{sa} \\le 0$, el componente no puede disipar esa potencia ni siquiera con un disipador infinito; es obligatorio usar convección forzada (cooler) o cambiar de cápsula.</p>
            </div>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Curva de Desclasificación (Derating Factor) y Área SOA</h5>
            <p class="text-xs sm:text-sm mb-2">La potencia nominal de un transistor $P_{D,max}$ se especifica para $T_C = 25^\\circ\\text{C}$. Para cualquier temperatura mayor, la potencia admisible se reduce linealmente:</p>
            $$P_{D,adm}(T_C) = \\frac{T_{j,max} - T_C}{\\theta_{jc}}$$
            <p class="text-xs text-slate-600 dark:text-slate-400">El Área de Operación Segura (SOA) limita la corriente por electromigración de hilos ($I_{C,max}$), la potencia por calentamiento continuo, la segunda ruptura por concentración de avalancha (*second breakdown*), y la tensión de ruptura colector-emisor ($V_{CEO}$).</p>
          `
        },
        {
          id: 'u2-formulario',
          titulo: '2.7 Formulario de Examen y Síntesis - Unidad 2',
          contenido: `
            <div class="overflow-x-auto my-3">
              <table class="w-full text-xs text-left border-collapse border border-slate-200 dark:border-slate-800">
                <thead>
                  <tr class="bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 font-mono">
                    <th class="p-2.5 border border-slate-200 dark:border-slate-800">Concepto</th>
                    <th class="p-2.5 border border-slate-200 dark:border-slate-800">Clase A Resistiva</th>
                    <th class="p-2.5 border border-slate-200 dark:border-slate-800">Clase B Push-Pull</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 dark:divide-slate-800 font-mono">
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">Ángulo de Conducción</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$360^\\circ$ ($2\\pi$)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$180^\\circ$ ($\\pi$) por rama</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">Potencia Continua $P_{DC}$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$V_{CC} I_{CQ}$ (constante)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$\\frac{2}{\\pi} \\frac{V_{CC} \\hat{V}_o}{R_L}$</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">Potencia de Señal $P_{ac}$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$\\frac{\\hat{V}_o^2}{2 R_L}$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$\\frac{\\hat{V}_o^2}{2 R_L}$</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">Rendimiento Máximo $\\eta$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$25\\%$ ($50\\%$ con trafo)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$\\frac{\\pi}{4} \\approx 78.54\\%$</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">Condición de $P_{D,max}$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">Silencio / Reposo ($\\hat{V}_o = 0$)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$\\hat{V}_o = \\frac{2}{\\pi} V_{CC} \\approx 0.637 V_{CC}$</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">Disipación $P_{D,max}$ por transistor</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$V_{CC} I_{CQ}$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$\\frac{V_{CC}^2}{\\pi^2 R_L} \\approx 0.101 \\frac{V_{CC}^2}{R_L}$</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">Ley Térmica Básica</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800" colspan="2">$\\theta_{sa} \\le \\frac{T_{j,max} - T_{a,max}}{P_{D,max}} - (\\theta_{jc} + \\theta_{cs})$</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="pt-2 flex justify-end">
              <button onclick="filtrarUnidad('ea1-u2'); volverAEjercicios();" class="text-xs font-mono text-rose-600 dark:text-rose-400 hover:underline flex items-center gap-1">
                <span>Practicar ejercicios guiados de la Unidad 2</span>
                <span>→</span>
              </button>
            </div>
          `
        }
      ]
    },

    // ========================================================================
    // UNIDAD 3: CIRCUITOS INTEGRADOS LINEALES Y DIFERENCIAL
    // ========================================================================
    {
      id: 'ea1-u3',
      numero: 3,
      titulo: 'Unidad 3: Circuitos Integrados Lineales, Par Diferencial y Fuentes Activas',
      icono: '🔬',
      badgeColor: 'border-cyan-500/40 bg-cyan-950/40 text-cyan-300',
      introduccion: 'Esta unidad cubre los bloques constitutivos fundamentales de la microelectrónica analógica y del amplificador operacional monolítico: el par diferencial BJT, su respuesta en gran y pequeña señal, el rechazo de modo común (CMRR), fuentes y espejos de corriente activos (simple, Wilson y Widlar), cargas activas con conversión diferencial-asimétrica, y la arquitectura interna de tres etapas del estándar uA741.',
      secciones: [
        {
          id: 'u3-par-diferencial-teoria',
          titulo: '3.1 El Amplificador Par Diferencial BJT: Gran Señal y Función tanh',
          contenido: `
            <p class="mb-3">El par diferencial es la etapa de entrada universal de casi todos los amplificadores operacionales y circuitos integrados analógicos. Sus virtudes cardinales son: acoplamiento directo en continua sin capacitores, rechazo de perturbaciones de modo común (ruido de fuente e interferencias de masa), y altísima estabilidad frente a derivas térmicas debido al apareamiento monolítico de los transistores integrados a micrones de distancia.</p>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Análisis de Gran Señal</h5>
            <p class="mb-2">Sean dos transistores idénticos $Q_1, Q_2$ con emisores unidos y alimentados por una fuente de corriente continua de cola $I_{EE}$:</p>
            $$v_{id} = v_1 - v_2 = v_{BE1} - v_{BE2}$$
            $$\\frac{i_{C1}}{i_{C2}} = \\frac{I_S e^{v_{BE1}/V_T}}{I_S e^{v_{BE2}/V_T}} = e^{(v_{BE1} - v_{BE2})/V_T} = e^{v_{id}/V_T}$$
            <p class="my-2">Por ley de corrientes en el nodo de emisor:</p>
            $$i_{C1} + i_{C2} \\approx I_{EE}$$
            <p class="my-2">Combinando ambas ecuaciones algebraicas:</p>
            $$\\mathbf{i_{C1} = \\frac{I_{EE}}{1 + e^{-v_{id}/V_T}}}, \\quad \\mathbf{i_{C2} = \\frac{I_{EE}}{1 + e^{v_{id}/V_T}}}$$

            <!-- ================= SVG: PAR DIFERENCIAL BJT Y CURVAS TANH ================= -->
            <div class="my-4 p-3.5 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800">
              <div class="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2.5 flex items-center gap-1.5">
                <span>🔬</span> Esquemático del Par Diferencial BJT y Característica de Transferencia en Gran Señal
              </div>
              <div class="w-full overflow-x-auto flex justify-center">
                <svg viewBox="0 0 680 250" class="w-full max-w-[680px] h-auto select-none font-sans text-xs" style="min-width: 480px;">
                  <defs>
                    <marker id="dp-arr-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                      <path d="M 0 2 L 8 5 L 0 8 z" fill="#0284c7"/>
                    </marker>
                    <marker id="dp-arr-purple" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                      <path d="M 0 2 L 8 5 L 0 8 z" fill="#8b5cf6"/>
                    </marker>
                    <marker id="dp-arr-gray" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                      <path d="M 0 2 L 8 5 L 0 8 z" fill="#64748b"/>
                    </marker>
                  </defs>

                  <!-- ================= PANEL IZQUIERDO: CIRCUITO PAR DIFERENCIAL ================= -->
                  <g transform="translate(15, 0)">
                    <text x="135" y="18" text-anchor="middle" font-weight="bold" fill="#0284c7" font-size="11">Topología Básica con Carga Resistiva</text>

                    <!-- Riel +VCC superior -->
                    <line x1="30" y1="28" x2="240" y2="28" stroke="#ef4444" stroke-width="1.8"/>
                    <circle cx="135" cy="28" r="3" fill="#ef4444"/>
                    <text x="135" y="22" text-anchor="middle" font-weight="bold" fill="#ef4444" font-size="9.5">+V_CC</text>

                    <!-- Rama Izquierda: RC1 y Transistor Q1 -->
                    <line x1="75" y1="28" x2="75" y2="40" stroke="#475569" stroke-width="1.5"/>
                    <rect x="67" y="40" width="16" height="26" fill="#0284c7" fill-opacity="0.15" stroke="#0284c7" stroke-width="1.3" rx="2"/>
                    <text x="57" y="56" text-anchor="end" font-weight="bold" fill="#0284c7" font-size="9">R_C</text>
                    <line x1="75" y1="66" x2="75" y2="84" stroke="#475569" stroke-width="1.5"/>
                    <circle cx="75" cy="84" r="3" fill="#0284c7"/>

                    <!-- Salida vo1 -->
                    <line x1="75" y1="84" x2="35" y2="84" stroke="#0284c7" stroke-width="1.5"/>
                    <circle cx="35" cy="84" r="2.5" fill="none" stroke="#0284c7" stroke-width="1.5"/>
                    <text x="28" y="87" text-anchor="end" font-weight="bold" fill="#0284c7" font-size="9.5">v_{o1}</text>

                    <!-- Transistor Q1 (NPN) -->
                    <!-- Barra de Base -->
                    <line x1="62" y1="102" x2="62" y2="126" stroke="#1e293b" stroke-width="2.2"/>
                    <!-- Terminal Base -->
                    <line x1="25" y1="114" x2="62" y2="114" stroke="#475569" stroke-width="1.5"/>
                    <circle cx="25" cy="114" r="2.5" fill="none" stroke="#6366f1" stroke-width="1.5"/>
                    <text x="18" y="117" text-anchor="end" font-weight="bold" fill="#6366f1" font-size="9.5">v_1 (+)</text>
                    <!-- Colector -->
                    <line x1="62" y1="107" x2="75" y2="95" stroke="#1e293b" stroke-width="1.5"/>
                    <line x1="75" y1="95" x2="75" y2="84" stroke="#1e293b" stroke-width="1.5"/>
                    <!-- Emisor -->
                    <line x1="62" y1="121" x2="75" y2="133" stroke="#1e293b" stroke-width="1.5"/>
                    <line x1="75" y1="133" x2="75" y2="148" stroke="#1e293b" stroke-width="1.5"/>
                    <!-- Flecha de emisor NPN -->
                    <polygon points="72,130 77,135 69,135" fill="#1e293b"/>
                    <text x="83" y="116" font-weight="bold" fill="#1e293b" font-size="9.5">Q_1</text>

                    <!-- Rama Derecha: RC2 y Transistor Q2 -->
                    <line x1="195" y1="28" x2="195" y2="40" stroke="#475569" stroke-width="1.5"/>
                    <rect x="187" y="40" width="16" height="26" fill="#8b5cf6" fill-opacity="0.15" stroke="#8b5cf6" stroke-width="1.3" rx="2"/>
                    <text x="213" y="56" font-weight="bold" fill="#8b5cf6" font-size="9">R_C</text>
                    <line x1="195" y1="66" x2="195" y2="84" stroke="#475569" stroke-width="1.5"/>
                    <circle cx="195" cy="84" r="3" fill="#8b5cf6"/>

                    <!-- Salida vo2 -->
                    <line x1="195" y1="84" x2="235" y2="84" stroke="#8b5cf6" stroke-width="1.5"/>
                    <circle cx="235" cy="84" r="2.5" fill="none" stroke="#8b5cf6" stroke-width="1.5"/>
                    <text x="242" y="87" font-weight="bold" fill="#8b5cf6" font-size="9.5">v_{o2}</text>

                    <!-- Salida Diferencial vod -->
                    <path d="M 78,74 Q 135,62 192,74" fill="none" stroke="#10b981" stroke-width="1.2" stroke-dasharray="3 2"/>
                    <text x="135" y="66" text-anchor="middle" font-weight="bold" fill="#10b981" font-size="8.5">v_{od} = v_{o1} - v_{o2}</text>

                    <!-- Transistor Q2 (NPN) -->
                    <!-- Barra de Base -->
                    <line x1="208" y1="102" x2="208" y2="126" stroke="#1e293b" stroke-width="2.2"/>
                    <!-- Terminal Base -->
                    <line x1="208" y1="114" x2="245" y2="114" stroke="#475569" stroke-width="1.5"/>
                    <circle cx="245" cy="114" r="2.5" fill="none" stroke="#6366f1" stroke-width="1.5"/>
                    <text x="252" y="117" font-weight="bold" fill="#6366f1" font-size="9.5">v_2 (-)</text>
                    <!-- Colector -->
                    <line x1="208" y1="107" x2="195" y2="95" stroke="#1e293b" stroke-width="1.5"/>
                    <line x1="195" y1="95" x2="195" y2="84" stroke="#1e293b" stroke-width="1.5"/>
                    <!-- Emisor -->
                    <line x1="208" y1="121" x2="195" y2="133" stroke="#1e293b" stroke-width="1.5"/>
                    <line x1="195" y1="133" x2="195" y2="148" stroke="#1e293b" stroke-width="1.5"/>
                    <!-- Flecha de emisor NPN -->
                    <polygon points="198,130 193,135 201,135" fill="#1e293b"/>
                    <text x="178" y="116" font-weight="bold" fill="#1e293b" font-size="9.5">Q_2</text>

                    <!-- Conexión común de Emisores -->
                    <line x1="75" y1="148" x2="195" y2="148" stroke="#475569" stroke-width="1.8"/>
                    <circle cx="135" cy="148" r="3" fill="#475569"/>
                    <text x="135" y="142" text-anchor="middle" font-size="8" fill="#64748b">Nodo E</text>

                    <!-- Fuente de Corriente de Cola IEE -->
                    <line x1="135" y1="148" x2="135" y2="162" stroke="#475569" stroke-width="1.5"/>
                    <circle cx="135" cy="172" r="9" fill="none" stroke="#0ea5e9" stroke-width="1.5"/>
                    <circle cx="135" cy="186" r="9" fill="none" stroke="#0ea5e9" stroke-width="1.5"/>
                    <line x1="135" y1="167" x2="135" y2="177" stroke="#0ea5e9" stroke-width="1.5" marker-end="url(#dp-arr-blue)"/>
                    <text x="156" y="182" font-weight="bold" fill="#0ea5e9" font-size="9.5">I_{EE}</text>

                    <!-- Riel Inferior -VEE -->
                    <line x1="135" y1="195" x2="135" y2="215" stroke="#475569" stroke-width="1.5"/>
                    <line x1="100" y1="215" x2="170" y2="215" stroke="#6366f1" stroke-width="1.8"/>
                    <circle cx="135" cy="215" r="3" fill="#6366f1"/>
                    <text x="135" y="228" text-anchor="middle" font-weight="bold" fill="#6366f1" font-size="9.5">-V_{EE}</text>
                  </g>

                  <!-- Divisor vertical -->
                  <line x1="295" y1="15" x2="295" y2="235" stroke="#cbd5e1" stroke-dasharray="3 3"/>

                  <!-- ================= PANEL DERECHO: CURVAS TANH EN GRAN SEÑAL ================= -->
                  <g transform="translate(315, 0)">
                    <text x="175" y="18" text-anchor="middle" font-weight="bold" fill="#0f172a" font-size="11">Transferencia en Gran Señal: i_{C1}, i_{C2} vs v_{id}</text>

                    <!-- Zona Lineal Sombreada (-2VT a +2VT) -->
                    <rect x="135" y="42" width="80" height="150" fill="#10b981" fill-opacity="0.1" stroke="#10b981" stroke-width="1" stroke-dasharray="3 2" rx="4"/>
                    <text x="175" y="38" text-anchor="middle" font-weight="bold" fill="#047857" font-size="8.5">Zona Lineal (|v_{id}| ≤ 2V_T ≈ 50 mV)</text>

                    <!-- Ejes Cartesiano -->
                    <!-- Eje Horizontal: vid -->
                    <line x1="30" y1="117" x2="325" y2="117" stroke="#475569" stroke-width="1.3"/>
                    <text x="330" y="121" font-size="8.5" fill="#475569" font-weight="bold">v_{id}</text>

                    <!-- Eje Vertical: iC en vid = 0 -->
                    <line x1="175" y1="42" x2="175" y2="198" stroke="#475569" stroke-width="1.3"/>
                    <text x="170" y="38" text-anchor="end" font-weight="bold" fill="#475569" font-size="9">i_C</text>

                    <!-- Límites de Saturación: IEE y 0 -->
                    <line x1="30" y1="52" x2="320" y2="52" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 3"/>
                    <text x="25" y="55" text-anchor="end" font-weight="bold" fill="#475569" font-size="8.5">I_{EE}</text>

                    <text x="165" y="125" text-anchor="end" font-weight="bold" fill="#64748b" font-size="8">I_{EE}/2</text>
                    <circle cx="175" cy="117" r="2.5" fill="#475569"/>

                    <!-- Marcas en el eje X: -4VT, -2VT, +2VT, +4VT -->
                    <line x1="95" y1="114" x2="95" y2="120" stroke="#475569" stroke-width="1.2"/>
                    <text x="95" y="129" text-anchor="middle" font-size="7.5" fill="#64748b">-4V_T</text>

                    <line x1="135" y1="114" x2="135" y2="120" stroke="#047857" stroke-width="1.5"/>
                    <text x="135" y="129" text-anchor="middle" font-size="7.5" font-weight="bold" fill="#047857">-2V_T</text>

                    <line x1="215" y1="114" x2="215" y2="120" stroke="#047857" stroke-width="1.5"/>
                    <text x="215" y="129" text-anchor="middle" font-size="7.5" font-weight="bold" fill="#047857">+2V_T</text>

                    <line x1="255" y1="114" x2="255" y2="120" stroke="#475569" stroke-width="1.2"/>
                    <text x="255" y="129" text-anchor="middle" font-size="7.5" fill="#64748b">+4V_T</text>

                    <!-- Tangente en el origen: g_md = IEE / (2 VT) -->
                    <line x1="140" y1="150" x2="210" y2="84" stroke="#10b981" stroke-width="1.5" stroke-dasharray="4 2"/>
                    <text x="220" y="80" font-size="8" fill="#047857" font-weight="bold">Pendiente: g_m = I_{EE}/2V_T</text>

                    <!-- Curva i_C1 (Azul / Cyan): función logística creciente -->
                    <path d="M 40,181 C 95,181 135,160 175,117 C 215,74 255,53 310,53" fill="none" stroke="#0284c7" stroke-width="2.5"/>
                    <text x="313" y="50" font-weight="bold" fill="#0284c7" font-size="9.5">i_{C1}</text>

                    <!-- Curva i_C2 (Púrpura): función logística decreciente -->
                    <path d="M 40,53 C 95,53 135,74 175,117 C 215,160 255,181 310,181" fill="none" stroke="#8b5cf6" stroke-width="2.5"/>
                    <text x="313" y="185" font-weight="bold" fill="#8b5cf6" font-size="9.5">i_{C2}</text>

                    <!-- Etiquetas de Conmutación ECL -->
                    <text x="45" y="70" font-size="8" fill="#8b5cf6">← Q_2 conduce toda I_{EE}</text>
                    <text x="235" y="165" font-size="8" fill="#0284c7">Q_1 conduce toda I_{EE} →</text>

                    <!-- Badge inferior de conclusión -->
                    <rect x="40" y="202" width="270" height="24" rx="5" fill="#0284c7" fill-opacity="0.08" stroke="#0284c7" stroke-opacity="0.3"/>
                    <text x="175" y="218" text-anchor="middle" font-weight="bold" fill="#0369a1" font-size="9">i_{C1} - i_{C2} = I_{EE} · \\tanh(v_{id} / 2V_T)</text>
                  </g>
                </svg>
              </div>
            </div>

            <div class="p-3.5 my-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-950 dark:text-cyan-200">
              <h5 class="font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <span>📐</span> Corriente Diferencial y Transconductancia
              </h5>
              <p class="text-xs">Restando ambas corrientes colectoras:</p>
              $$\\mathbf{i_{C1} - i_{C2} = I_{EE} \\tanh\\left( \\frac{v_{id}}{2 V_T} \\right)}$$
              <ul class="list-disc pl-5 space-y-1 text-xs mt-2">
                <li><strong>Rango dinámico lineal:</strong> La función tangente hiperbólica es lineal sólo para $|v_{id}| \\le 2 V_T \\approx 50\\text{ mV}$.</li>
                <li><strong>Conmutación de corriente:</strong> Para $|v_{id}| > 4 V_T \\approx 100\\text{ mV}$, toda la corriente $I_{EE}$ se desvía a una sola rama (funciona como comparador o compuerta ECL).</li>
                <li><strong>Transconductancia incremental de reposo ($v_{id} = 0$):</strong>
                  $$g_{md} = \\left. \\frac{d(i_{C1}-i_{C2})}{dv_{id}} \\right|_{v_{id}=0} = \\frac{I_{EE}}{2 V_T} = g_m$$
                </li>
              </ul>
            </div>

            <div class="p-3 my-3 rounded-xl bg-teal-500/10 dark:bg-teal-950/40 border border-teal-500/30 text-xs flex items-start gap-2.5">
              <span class="text-base shrink-0">🔗</span>
              <div class="flex-1 min-w-0">
                <div class="font-semibold text-teal-900 dark:text-teal-300">
                  Comparativa con Electrónica II (Par Diferencial MOS):
                </div>
                <p class="text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                  Para contrastar el rango lineal del par bipolar frente al par con transistores de efecto de campo MOSFET (donde el rango es $\\Delta V_{in} \\le \\sqrt{2}(V_{GS}-V_{th})$) y cargas activas CMOS:
                </p>
                <button 
                  onclick="navegarASeccionTeorica('electronica-2', 'e2-u3-par-diferencial-mos')"
                  class="mt-1.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-mono text-[11px] font-medium transition-colors shadow-2xs"
                >
                  <span>📖 Ver Electrónica II · Unidad 3 (Par Diferencial MOS y Cargas CMOS)</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          `
        },
        {
          id: 'u3-pequena-senal-cmrr',
          titulo: '3.2 Análisis Modal de Pequeña Señal y CMRR',
          contenido: `
            <p class="mb-3">Cualquier par de tensiones de entrada $(v_1, v_2)$ se descompone en modo diferencial $v_d$ y modo común $v_c$:</p>
            $$v_d = v_1 - v_2, \\quad v_c = \\frac{v_1 + v_2}{2}$$

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">1. Modo Diferencial ($v_1 = +v_d/2$, $v_2 = -v_d/2$)</h5>
            <p class="mb-2">Por perfecta antisimetría, la corriente que sube en una rama es idéntica a la que baja en la otra ($i_{e1} = -i_{e2}$). Por lo tanto, por la fuente de cola no circula corriente de señal de alterna.</p>
            <p class="mb-2">El nodo común de emisor se comporta como una <strong>Masa Virtual de Alterna ($v_e = 0$)</strong>.</p>
            <ul class="list-disc pl-5 space-y-1 text-xs sm:text-sm mb-2">
              <li><strong>Ganancia Diferencial con Salida Balanceada ($v_{o1} - v_{o2}$):</strong>
                $$A_{dd} = \\frac{v_{o1} - v_{o2}}{v_d} = -g_m R_C = -\\frac{R_C}{r_e}$$
              </li>
              <li><strong>Ganancia Diferencial con Salida Asimétrica (unipolar $v_{o1}$):</strong>
                $$A_d = \\frac{v_{o1}}{v_d} = -\\frac{1}{2} g_m R_C = -\\frac{R_C}{2 r_e}$$
              </li>
              <li><strong>Resistencia de Entrada Diferencial:</strong>
                $$R_{id} = 2 r_\\pi = 2 (1+\\beta) r_e$$
              </li>
            </ul>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">2. Modo Común ($v_1 = v_2 = v_c$)</h5>
            <p class="mb-2">Ambas entradas varían al unísono. La corriente total que atraviesa la resistencia incremental de la fuente de cola $R_{EE}$ es el doble ($2 i_e$). En el medio circuito común, la resistencia efectiva de emisor es $2 R_{EE}$:</p>
            <ul class="list-disc pl-5 space-y-1 text-xs sm:text-sm mb-2">
              <li><strong>Ganancia en Modo Común (Salida Asimétrica):</strong>
                $$A_c = \\frac{v_{oc}}{v_c} = -\\frac{g_m R_C}{1 + g_m (2 R_{EE})} \\approx -\\frac{R_C}{2 R_{EE}}$$
              </li>
              <li><strong>Resistencia de Entrada en Modo Común:</strong>
                $$R_{ic} \\approx 2 (1+\\beta) R_{EE}$$
              </li>
            </ul>

            <div class="p-4 my-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-950 dark:text-emerald-200">
              <h5 class="font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <span>🎯</span> Relación de Rechazo de Modo Común (CMRR)
              </h5>
              $$\\mathbf{\\text{CMRR} = \\left| \\frac{A_d}{A_c} \\right| \\approx \\frac{\\frac{1}{2} g_m R_C}{\\frac{R_C}{2 R_{EE}}} = g_m \\cdot R_{EE} = \\frac{I_{EE} \\cdot R_{EE}}{2 V_T}}$$
              $$\\mathbf{\\text{CMRR}_{dB} = 20 \\log_{10}(\\text{CMRR})}$$
              <p class="text-xs mt-2"><strong>Deducción fundamental:</strong> Para que el CMRR tienda a infinito, la resistencia dinámica de la fuente de emisor $R_{EE}$ debe tender a infinito. Esto demuestra la necesidad ineludible de reemplazar resistores pasivos por <em>fuentes de corriente activas</em> en circuitos integrados.</p>
            </div>
          `
        },
        {
          id: 'u3-fuentes-activas-widlar',
          titulo: '3.3 Fuentes y Espejos de Corriente Activos: Espejo Simple, Wilson y Fuente Widlar',
          contenido: `
            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-2 mb-2">1. Espejo de Corriente BJT Simple</h5>
            <p class="mb-2">Un transistor $Q_1$ conectado como diodo y un transistor $Q_2$ con bases unidas. La corriente de referencia es $I_{ref} = \\frac{V_{CC} - V_{EE} - V_{BE}}{R}$:</p>
            $$I_{ref} = I_{C1} + 2 I_B = I_o + \\frac{2 I_o}{\\beta} \\implies \\mathbf{I_o = \\frac{I_{ref}}{1 + \\frac{2}{\\beta}}}$$
            <p class="text-xs text-slate-600 dark:text-slate-400">Error por corrientes de base: $\\approx 2/\\beta$ (un $2\\%$ para $\\beta = 100$). Resistencia de salida: $r_{out} = r_{o2} = V_A / I_o$.</p>

            <!-- ================= SVG: COMPARATIVA DE FUENTES Y ESPEJOS ACTIVOS ================= -->
            <div class="my-4 p-3.5 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800">
              <div class="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2.5 flex items-center gap-1.5">
                <span>⚡</span> Espejos y Fuentes de Corriente Activas: Simple, Widlar y Wilson
              </div>
              <div class="w-full overflow-x-auto flex justify-center">
                <svg viewBox="0 0 760 255" class="w-full max-w-[760px] h-auto select-none font-sans text-xs" style="min-width: 580px;">
                  <defs>
                    <marker id="cs-arr-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                      <path d="M 0 2 L 8 5 L 0 8 z" fill="#0284c7"/>
                    </marker>
                    <marker id="cs-arr-amber" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                      <path d="M 0 2 L 8 5 L 0 8 z" fill="#d97706"/>
                    </marker>
                    <marker id="cs-arr-purple" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                      <path d="M 0 2 L 8 5 L 0 8 z" fill="#8b5cf6"/>
                    </marker>
                  </defs>

                  <!-- ================= 1. ESPEJO SIMPLE ================= -->
                  <g transform="translate(10, 0)">
                    <rect x="0" y="8" width="235" height="238" rx="8" fill="#0284c7" fill-opacity="0.04" stroke="#0284c7" stroke-opacity="0.3"/>
                    <text x="117" y="26" text-anchor="middle" font-weight="bold" fill="#0284c7" font-size="11">1. Espejo Simple</text>

                    <!-- Riel +VCC -->
                    <line x1="30" y1="38" x2="90" y2="38" stroke="#ef4444" stroke-width="1.6"/>
                    <circle cx="60" cy="38" r="2.5" fill="#ef4444"/>
                    <text x="60" y="33" text-anchor="middle" font-weight="bold" fill="#ef4444" font-size="8.5">+V_CC</text>

                    <!-- Resistor R de Referencia -->
                    <line x1="60" y1="38" x2="60" y2="48" stroke="#475569" stroke-width="1.3"/>
                    <rect x="53" y="48" width="14" height="22" fill="#0284c7" fill-opacity="0.2" stroke="#0284c7" stroke-width="1.2" rx="1.5"/>
                    <text x="44" y="62" font-size="8" font-weight="bold" fill="#0284c7">R</text>
                    <line x1="60" y1="70" x2="60" y2="82" stroke="#475569" stroke-width="1.3"/>
                    <!-- Flecha Iref -->
                    <line x1="72" y1="52" x2="72" y2="68" stroke="#0284c7" stroke-width="1.2" marker-end="url(#cs-arr-blue)"/>
                    <text x="76" y="62" font-size="8" font-weight="bold" fill="#0284c7">I_{ref}</text>

                    <!-- Nodo colector Q1 y diodo-conexión -->
                    <circle cx="60" cy="85" r="2.5" fill="#475569"/>
                    <line x1="60" y1="85" x2="60" y2="108" stroke="#475569" stroke-width="1.3"/>
                    <!-- Cortocircuito base-colector (Diodo) -->
                    <line x1="60" y1="85" x2="40" y2="85" stroke="#475569" stroke-width="1.3"/>
                    <line x1="40" y1="85" x2="40" y2="120" stroke="#475569" stroke-width="1.3"/>
                    <line x1="40" y1="120" x2="49" y2="120" stroke="#475569" stroke-width="1.3"/>

                    <!-- Transistor Q1 (NPN diodo) -->
                    <line x1="49" y1="110" x2="49" y2="130" stroke="#1e293b" stroke-width="2"/>
                    <line x1="49" y1="114" x2="60" y2="105" stroke="#1e293b" stroke-width="1.3"/>
                    <line x1="49" y1="126" x2="60" y2="135" stroke="#1e293b" stroke-width="1.3"/>
                    <polygon points="57,133 62,136 55,138" fill="#1e293b"/>
                    <line x1="60" y1="135" x2="60" y2="155" stroke="#475569" stroke-width="1.3"/>
                    <text x="68" y="122" font-weight="bold" fill="#1e293b" font-size="8.5">Q_1</text>

                    <!-- Línea de bases compartidas -->
                    <line x1="49" y1="120" x2="160" y2="120" stroke="#475569" stroke-width="1.5"/>

                    <!-- Transistor Q2 (NPN salida) -->
                    <line x1="160" y1="110" x2="160" y2="130" stroke="#1e293b" stroke-width="2"/>
                    <line x1="160" y1="114" x2="170" y2="105" stroke="#1e293b" stroke-width="1.3"/>
                    <line x1="160" y1="126" x2="170" y2="135" stroke="#1e293b" stroke-width="1.3"/>
                    <polygon points="167,133 172,136 165,138" fill="#1e293b"/>
                    <line x1="170" y1="135" x2="170" y2="155" stroke="#475569" stroke-width="1.3"/>
                    <text x="145" y="122" font-weight="bold" fill="#1e293b" font-size="8.5">Q_2</text>

                    <!-- Colector Q2: Salida Io -->
                    <line x1="170" y1="105" x2="170" y2="48" stroke="#475569" stroke-width="1.3"/>
                    <circle cx="170" cy="48" r="2.5" fill="none" stroke="#0284c7" stroke-width="1.4"/>
                    <line x1="182" y1="52" x2="182" y2="68" stroke="#0284c7" stroke-width="1.2" marker-end="url(#cs-arr-blue)"/>
                    <text x="187" y="62" font-size="8" font-weight="bold" fill="#0284c7">I_o</text>

                    <!-- Masa de Emisores -->
                    <line x1="45" y1="155" x2="185" y2="155" stroke="#475569" stroke-width="1.5"/>
                    <line x1="115" y1="155" x2="115" y2="165" stroke="#475569" stroke-width="1.3"/>
                    <line x1="105" y1="165" x2="125" y2="165" stroke="#475569" stroke-width="1.5"/>
                    <line x1="109" y1="168" x2="121" y2="168" stroke="#475569" stroke-width="1.2"/>
                    <line x1="112" y1="171" x2="118" y2="171" stroke="#475569" stroke-width="1"/>

                    <!-- Badges inferiores -->
                    <rect x="8" y="180" width="219" height="58" rx="4" fill="#ffffff" fill-opacity="0.8" dark:fill="#0f172a" stroke="#0284c7" stroke-opacity="0.2"/>
                    <text x="117" y="195" text-anchor="middle" font-weight="bold" fill="#0369a1" font-size="8.5">I_o = I_{ref} / (1 + 2/β)</text>
                    <text x="117" y="210" text-anchor="middle" fill="#64748b" font-size="8">Error por corriente de base: ≈ 2%</text>
                    <text x="117" y="224" text-anchor="middle" font-weight="bold" fill="#475569" font-size="8">r_{out} = r_{o2} = V_A / I_o</text>
                  </g>

                  <!-- ================= 2. FUENTE WIDLAR ================= -->
                  <g transform="translate(262, 0)">
                    <rect x="0" y="8" width="235" height="238" rx="8" fill="#d97706" fill-opacity="0.04" stroke="#d97706" stroke-opacity="0.3"/>
                    <text x="117" y="26" text-anchor="middle" font-weight="bold" fill="#d97706" font-size="11">2. Fuente Widlar (RE en Q2)</text>

                    <!-- Riel +VCC -->
                    <line x1="30" y1="38" x2="90" y2="38" stroke="#ef4444" stroke-width="1.6"/>
                    <circle cx="60" cy="38" r="2.5" fill="#ef4444"/>
                    <text x="60" y="33" text-anchor="middle" font-weight="bold" fill="#ef4444" font-size="8.5">+V_CC</text>

                    <!-- Resistor R de Referencia -->
                    <line x1="60" y1="38" x2="60" y2="48" stroke="#475569" stroke-width="1.3"/>
                    <rect x="53" y="48" width="14" height="22" fill="#d97706" fill-opacity="0.2" stroke="#d97706" stroke-width="1.2" rx="1.5"/>
                    <text x="44" y="62" font-size="8" font-weight="bold" fill="#d97706">R</text>
                    <line x1="60" y1="70" x2="60" y2="82" stroke="#475569" stroke-width="1.3"/>
                    <line x1="72" y1="52" x2="72" y2="68" stroke="#d97706" stroke-width="1.2" marker-end="url(#cs-arr-amber)"/>
                    <text x="76" y="62" font-size="8" font-weight="bold" fill="#d97706">I_{ref}</text>

                    <!-- Diodo Q1 -->
                    <circle cx="60" cy="85" r="2.5" fill="#475569"/>
                    <line x1="60" y1="85" x2="60" y2="108" stroke="#475569" stroke-width="1.3"/>
                    <line x1="60" y1="85" x2="40" y2="85" stroke="#475569" stroke-width="1.3"/>
                    <line x1="40" y1="85" x2="40" y2="120" stroke="#475569" stroke-width="1.3"/>
                    <line x1="40" y1="120" x2="49" y2="120" stroke="#475569" stroke-width="1.3"/>

                    <!-- Transistor Q1 (NPN) -->
                    <line x1="49" y1="110" x2="49" y2="130" stroke="#1e293b" stroke-width="2"/>
                    <line x1="49" y1="114" x2="60" y2="105" stroke="#1e293b" stroke-width="1.3"/>
                    <line x1="49" y1="126" x2="60" y2="135" stroke="#1e293b" stroke-width="1.3"/>
                    <polygon points="57,133 62,136 55,138" fill="#1e293b"/>
                    <!-- Emisor Q1 a GND directo -->
                    <line x1="60" y1="135" x2="60" y2="155" stroke="#475569" stroke-width="1.3"/>
                    <text x="68" y="122" font-weight="bold" fill="#1e293b" font-size="8.5">Q_1</text>

                    <!-- Bases unidas -->
                    <line x1="49" y1="120" x2="160" y2="120" stroke="#475569" stroke-width="1.5"/>

                    <!-- Transistor Q2 (NPN) -->
                    <line x1="160" y1="110" x2="160" y2="130" stroke="#1e293b" stroke-width="2"/>
                    <line x1="160" y1="114" x2="170" y2="105" stroke="#1e293b" stroke-width="1.3"/>
                    <line x1="160" y1="126" x2="170" y2="135" stroke="#1e293b" stroke-width="1.3"/>
                    <polygon points="167,133 172,136 165,138" fill="#1e293b"/>
                    <text x="145" y="122" font-weight="bold" fill="#1e293b" font-size="8.5">Q_2</text>

                    <!-- Salida Io reducida (microamperes) -->
                    <line x1="170" y1="105" x2="170" y2="48" stroke="#475569" stroke-width="1.3"/>
                    <circle cx="170" cy="48" r="2.5" fill="none" stroke="#d97706" stroke-width="1.4"/>
                    <line x1="182" y1="52" x2="182" y2="68" stroke="#d97706" stroke-width="1.2" marker-end="url(#cs-arr-amber)"/>
                    <text x="187" y="62" font-size="8" font-weight="bold" fill="#d97706">I_o (μA)</text>

                    <!-- Resistencia degenerativa RE en el emisor de Q2 -->
                    <line x1="170" y1="135" x2="170" y2="141" stroke="#475569" stroke-width="1.3"/>
                    <rect x="163" y="141" width="14" height="15" fill="#f59e0b" fill-opacity="0.3" stroke="#d97706" stroke-width="1.3" rx="1.5"/>
                    <text x="183" y="152" font-size="8.5" font-weight="bold" fill="#b45309">R_E</text>
                    <line x1="170" y1="156" x2="170" y2="162" stroke="#475569" stroke-width="1.3"/>

                    <!-- Masa de Emisores -->
                    <line x1="45" y1="162" x2="185" y2="162" stroke="#475569" stroke-width="1.5"/>
                    <line x1="60" y1="155" x2="60" y2="162" stroke="#475569" stroke-width="1.3"/>
                    <line x1="115" y1="162" x2="115" y2="169" stroke="#475569" stroke-width="1.3"/>
                    <line x1="105" y1="169" x2="125" y2="169" stroke="#475569" stroke-width="1.5"/>
                    <line x1="109" y1="172" x2="121" y2="172" stroke="#475569" stroke-width="1.2"/>

                    <!-- Badges inferiores -->
                    <rect x="8" y="180" width="219" height="58" rx="4" fill="#ffffff" fill-opacity="0.8" dark:fill="#0f172a" stroke="#d97706" stroke-opacity="0.2"/>
                    <text x="117" y="195" text-anchor="middle" font-weight="bold" fill="#b45309" font-size="8.5">R_E = (V_T / I_o) · ln(I_{ref} / I_o)</text>
                    <text x="117" y="210" text-anchor="middle" fill="#64748b" font-size="8">Ahorro &gt;99% de área en Silicio</text>
                    <text x="117" y="224" text-anchor="middle" font-weight="bold" fill="#475569" font-size="8">r_{out} ≈ r_{o2}[1 + g_{m2}(R_E || r_{\pi2})]</text>
                  </g>

                  <!-- ================= 3. ESPEJO WILSON ================= -->
                  <g transform="translate(515, 0)">
                    <rect x="0" y="8" width="235" height="238" rx="8" fill="#8b5cf6" fill-opacity="0.04" stroke="#8b5cf6" stroke-opacity="0.3"/>
                    <text x="117" y="26" text-anchor="middle" font-weight="bold" fill="#8b5cf6" font-size="11">3. Espejo Wilson (3 BJTs)</text>

                    <!-- Riel +VCC -->
                    <line x1="30" y1="38" x2="90" y2="38" stroke="#ef4444" stroke-width="1.6"/>
                    <circle cx="60" cy="38" r="2.5" fill="#ef4444"/>
                    <text x="60" y="33" text-anchor="middle" font-weight="bold" fill="#ef4444" font-size="8.5">+V_CC</text>

                    <!-- Resistor R de Referencia -->
                    <line x1="60" y1="38" x2="60" y2="48" stroke="#475569" stroke-width="1.3"/>
                    <rect x="53" y="48" width="14" height="22" fill="#8b5cf6" fill-opacity="0.2" stroke="#8b5cf6" stroke-width="1.2" rx="1.5"/>
                    <text x="44" y="62" font-size="8" font-weight="bold" fill="#8b5cf6">R</text>
                    <line x1="60" y1="70" x2="60" y2="82" stroke="#475569" stroke-width="1.3"/>
                    <line x1="72" y1="52" x2="72" y2="68" stroke="#8b5cf6" stroke-width="1.2" marker-end="url(#cs-arr-purple)"/>
                    <text x="76" y="62" font-size="8" font-weight="bold" fill="#8b5cf6">I_{ref}</text>

                    <!-- Transistor Q3 (NPN arriba de Q2) -->
                    <!-- Conexión de colector Q1 a base Q3 -->
                    <line x1="60" y1="82" x2="148" y2="82" stroke="#475569" stroke-width="1.3"/>
                    <circle cx="60" cy="82" r="2.5" fill="#475569"/>
                    <line x1="60" y1="82" x2="60" y2="110" stroke="#475569" stroke-width="1.3"/>

                    <line x1="148" y1="72" x2="148" y2="92" stroke="#1e293b" stroke-width="2"/>
                    <line x1="148" y1="76" x2="160" y2="68" stroke="#1e293b" stroke-width="1.3"/>
                    <line x1="148" y1="88" x2="160" y2="96" stroke="#1e293b" stroke-width="1.3"/>
                    <polygon points="157,94 162,97 155,99" fill="#1e293b"/>
                    <text x="168" y="84" font-weight="bold" fill="#1e293b" font-size="8.5">Q_3</text>

                    <!-- Colector Q3: Salida Io -->
                    <line x1="160" y1="68" x2="160" y2="48" stroke="#475569" stroke-width="1.3"/>
                    <circle cx="160" cy="48" r="2.5" fill="none" stroke="#8b5cf6" stroke-width="1.4"/>
                    <line x1="172" y1="52" x2="172" y2="68" stroke="#8b5cf6" stroke-width="1.2" marker-end="url(#cs-arr-purple)"/>
                    <text x="177" y="62" font-size="8" font-weight="bold" fill="#8b5cf6">I_o</text>

                    <!-- Realimentación: Emisor Q3 a Colector Q2 y a Bases Q1-Q2 -->
                    <line x1="160" y1="96" x2="160" y2="110" stroke="#475569" stroke-width="1.3"/>
                    <circle cx="160" cy="110" r="2.5" fill="#8b5cf6"/>
                    <line x1="160" y1="110" x2="95" y2="110" stroke="#475569" stroke-width="1.3"/>
                    <line x1="95" y1="110" x2="95" y2="135" stroke="#475569" stroke-width="1.3"/>
                    <line x1="49" y1="135" x2="150" y2="135" stroke="#475569" stroke-width="1.4"/>

                    <!-- Transistor Q1 (NPN abajo izquierda) -->
                    <line x1="49" y1="125" x2="49" y2="145" stroke="#1e293b" stroke-width="2"/>
                    <line x1="49" y1="129" x2="60" y2="120" stroke="#1e293b" stroke-width="1.3"/>
                    <line x1="60" y1="120" x2="60" y2="110" stroke="#475569" stroke-width="1.3"/>
                    <line x1="49" y1="141" x2="60" y2="150" stroke="#1e293b" stroke-width="1.3"/>
                    <polygon points="57,148 62,151 55,153" fill="#1e293b"/>
                    <line x1="60" y1="150" x2="60" y2="162" stroke="#475569" stroke-width="1.3"/>
                    <text x="68" y="137" font-weight="bold" fill="#1e293b" font-size="8.5">Q_1</text>

                    <!-- Transistor Q2 (NPN abajo derecha) -->
                    <line x1="150" y1="125" x2="150" y2="145" stroke="#1e293b" stroke-width="2"/>
                    <line x1="150" y1="129" x2="160" y2="120" stroke="#1e293b" stroke-width="1.3"/>
                    <line x1="160" y1="120" x2="160" y2="110" stroke="#475569" stroke-width="1.3"/>
                    <line x1="150" y1="141" x2="160" y2="150" stroke="#1e293b" stroke-width="1.3"/>
                    <polygon points="157,148 162,151 155,153" fill="#1e293b"/>
                    <line x1="160" y1="150" x2="160" y2="162" stroke="#475569" stroke-width="1.3"/>
                    <text x="170" y="137" font-weight="bold" fill="#1e293b" font-size="8.5">Q_2</text>

                    <!-- Masa de Emisores -->
                    <line x1="45" y1="162" x2="185" y2="162" stroke="#475569" stroke-width="1.5"/>
                    <line x1="115" y1="162" x2="115" y2="169" stroke="#475569" stroke-width="1.3"/>
                    <line x1="105" y1="169" x2="125" y2="169" stroke="#475569" stroke-width="1.5"/>
                    <line x1="109" y1="172" x2="121" y2="172" stroke="#475569" stroke-width="1.2"/>

                    <!-- Badges inferiores -->
                    <rect x="8" y="180" width="219" height="58" rx="4" fill="#ffffff" fill-opacity="0.8" dark:fill="#0f172a" stroke="#8b5cf6" stroke-opacity="0.2"/>
                    <text x="117" y="195" text-anchor="middle" font-weight="bold" fill="#6d28d9" font-size="8.5">I_o = I_{ref} · (1 - 2/β²)</text>
                    <text x="117" y="210" text-anchor="middle" fill="#64748b" font-size="8">Realimentación interna suprime error base</text>
                    <text x="117" y="224" text-anchor="middle" font-weight="bold" fill="#475569" font-size="8">r_{out} ≈ (β · r_o) / 2  (Megaohms)</text>
                  </g>
                </svg>
              </div>
            </div>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">2. Espejo Wilson (3 Transistores)</h5>
            <p class="mb-2">Añade realimentación interna negativa para reducir drásticamente el error de corriente de base a $\\mathbf{2/\\beta^2}$ (un $0.02\\%$ para $\\beta = 100$) e incrementa la impedancia dinámica de salida a:</p>
            $$\\mathbf{r_{out} \\approx \\frac{\\beta \\cdot r_o}{2}}$$

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">3. Fuente de Corriente Widlar (Pregunta Clásica de Examen)</h5>
            <p class="mb-2">En circuitos integrados se requiere generar corrientes muy pequeñas ($I_o \\approx 5 - 20\\,\\mu\\text{A}$) para polarizar etapas de entrada con bajo consumo y alto $R_i$. En un espejo simple se necesitaría un resistor de megaohms que ocuparía un área enorme de silicio.</p>
            <p class="mb-2">Bob Widlar resolvió esto insertando una resistencia de emisor $R_E$ <em>únicamente en el transistor de salida $Q_2$</em>:</p>
            $$V_{BE1} = V_{BE2} + I_{E2} R_E \\approx V_{BE2} + I_o R_E$$
            $$V_{BE1} - V_{BE2} = V_T \\ln\\left( \\frac{I_{ref}}{I_o} \\right)$$

            <div class="p-4 my-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-950 dark:text-cyan-200">
              <h5 class="font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <span>⚡</span> Ecuación Trascendente Fundamental de Widlar
              </h5>
              $$\\mathbf{R_E = \\frac{V_T}{I_o} \\ln\\left( \\frac{I_{ref}}{I_o} \\right)}$$
              <p class="text-xs mt-2"><strong>Ejemplo de impacto:</strong> Para $I_{ref} = 1\\text{ mA}$ e $I_o = 10\\,\\mu\\text{A}$ ($V_T = 25\\text{ mV}$):</p>
              $$R_E = \\frac{25\\text{ mV}}{10\\,\\mu\\text{A}} \\ln(100) = 2.5\\text{ k}\\Omega \\times 4.605 = \\mathbf{11.5\\text{ k}\\Omega}$$
              <p class="text-xs mt-1">¡Se obtiene una corriente de $10\\,\\mu\\text{A}$ con un resistor de apenas $11.5\\text{ k}\\Omega$ en lugar de $1.5\\text{ M}\\Omega$, ahorrando más del $99\\%$ de área en silicio!</p>
            </div>
          `
        },
        {
          id: 'u3-carga-activa-opamp',
          titulo: '3.4 Par Diferencial con Carga Activa y Arquitectura del uA741',
          contenido: `
            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-2 mb-2">Par Diferencial con Carga Activa (Espejo PNP)</h5>
            <p class="mb-2">Al reemplazar los resistores pasivos $R_C$ por un espejo de corriente activo PNP ($Q_3, Q_4$):</p>
            <ol class="list-decimal pl-5 space-y-1 text-xs sm:text-sm mb-3">
              <li>El espejo copia la corriente de señal $i_{c1} = g_m \\frac{v_d}{2}$ del lado izquierdo hacia el nodo de salida derecho: $i_{c4} = i_{c1}$.</li>
              <li>Por la rama derecha circula $i_{c2} = -g_m \\frac{v_d}{2}$.</li>
              <li>En el nodo unipolar de salida se suman en contrafase:
                $$i_o = i_{c4} - i_{c2} = g_m \\frac{v_d}{2} - \\left( -g_m \\frac{v_d}{2} \\right) = \\mathbf{g_m \\cdot v_d}$$
              </li>
              <li><strong>Ventaja colosal:</strong> Se convierte de señal diferencial a asimétrica sin perder el factor 2 de ganancia.</li>
            </ol>
            <p class="my-2">La impedancia de salida del nodo es el paralelo de las resistencias Early $R_o = r_{o2} \\parallel r_{o4}$, logrando una ganancia descomunal en una sola etapa:</p>
            $$\\mathbf{A_d = -g_m (r_{o2} \\parallel r_{o4}) = -\\frac{V_A}{2 V_T} \\approx 1000 \\text{ a } 5000 \\quad (60\\text{ dB} - 74\\text{ dB})}$$

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Arquitectura Interna del Amplificador Operacional (uA741)</h5>
            <ul class="list-disc pl-5 space-y-1.5 text-xs sm:text-sm my-2">
              <li><strong>Etapa 1 (Entrada Diferencial):</strong> Par diferencial de transistores apareados polarizados por fuente Widlar ($I_C \\approx 10\\,\\mu\\text{A}$) con carga activa de espejo de corriente y corrimiento de nivel PNP. Proporciona muy alta impedancia ($R_i \\approx 2\\text{ M}\\Omega$) y alto CMRR.</li>
              <li><strong>Etapa 2 (Ganancia de Tensión Intermedia):</strong> Emisor común o Darlington con carga activa de alta impedancia dinámica. Aloja el <em>capacitor de compensación Miller ($C_c \\approx 30\\text{ pF}$)</em> para crear el polo dominante que estabiliza el lazo cerrado.</li>
              <li><strong>Etapa 3 (Etapa de Potencia de Salida):</strong> Seguidor complementario Clase AB con polarización por multiplicador $V_{BE}$, baja resistencia de salida ($R_o \\approx 75\\,\\Omega$) y limitador de corriente contra cortocircuito.</li>
            </ul>
            <div class="p-3 my-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs">
              <strong>Slew Rate (SR):</strong> Velocidad máxima de cambio de tensión en bornes del capacitor compensador:
              $$SR = \\left. \\frac{dv_o}{dt} \\right|_{max} = \\frac{I_{EE}}{C_c} = \\frac{20\\,\\mu\\text{A}}{30\\text{ pF}} \\approx 0.67\\text{ V/}\\mu\\text{s}$$
            </div>
          `
        },
        {
          id: 'u3-formulario',
          titulo: '3.5 Formulario de Examen y Síntesis - Unidad 3',
          contenido: `
            <div class="overflow-x-auto my-3">
              <table class="w-full text-xs text-left border-collapse border border-slate-200 dark:border-slate-800">
                <thead>
                  <tr class="bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 font-mono">
                    <th class="p-2.5 border border-slate-200 dark:border-slate-800">Parámetro</th>
                    <th class="p-2.5 border border-slate-200 dark:border-slate-800">Expresión Analítica</th>
                    <th class="p-2.5 border border-slate-200 dark:border-slate-800">Detalle Clave</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 dark:divide-slate-800 font-mono">
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">Ganancia Diferencial Balanceada</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$A_{dd} = -g_m R_C$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">Tomada entre ambos colectores</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">Ganancia Diferencial Asimétrica</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$A_d = -\\frac{1}{2} g_m R_C$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">Tomada en un solo colector</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">Ganancia en Modo Común</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$A_c \\approx -\\frac{R_C}{2 R_{EE}}$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">Medio circuito con $2 R_{EE}$</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">CMRR</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$g_m R_{EE} = \\frac{I_{EE} R_{EE}}{2 V_T}$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">$\\text{CMRR}_{dB} = 20 \\log_{10}(\\text{CMRR})$</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">Resistencia Entrada Diferencial</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$R_{id} = 2 r_\\pi = 2(1+\\beta)r_e$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">Masa virtual en emisor</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">Ecuación Fuente Widlar</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$R_E = \\frac{V_T}{I_o} \\ln\\left( \\frac{I_{ref}}{I_o} \\right)$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">Genera microamperes en CI</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">Carga Activa PNP</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$A_d = -g_m (r_{o2} \\parallel r_{o4})$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">Ganancia unipolar $\\ge 1000$</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="pt-2 flex justify-end">
              <button onclick="filtrarUnidad('ea1-u3'); volverAEjercicios();" class="text-xs font-mono text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1">
                <span>Practicar ejercicios guiados de la Unidad 3</span>
                <span>→</span>
              </button>
            </div>
          `
        }
      ]
    },

    // ========================================================================
    // UNIDAD 4: AMPLIFICADORES REALIMENTADOS NEGATIVAMENTE
    // ========================================================================
    {
      id: 'ea1-u4',
      numero: 4,
      titulo: 'Unidad 4: Amplificadores Realimentados Negativamente',
      icono: '🔁',
      badgeColor: 'border-emerald-500/40 bg-emerald-950/40 text-emerald-300',
      introduccion: 'La realimentación negativa es la técnica de diseño más potente de la ingeniería electrónica. En esta unidad se deducen rigurosamente la ecuación canónica de Black, las propiedades de desensibilización, extensión de ancho de banda (conservación del GBW), reducción de distorsión no lineal, la clasificación sistemática de las cuatro topologías básicas, el método analítico de cuadripolos con efectos de carga de la red beta, y los criterios de estabilidad de Barkhausen y márgenes de fase y ganancia.',
      secciones: [
        {
          id: 'u4-teoria-black',
          titulo: '4.1 Teoría General de Realimentación Negativa (Álgebra de Black)',
          contenido: `
            <p class="mb-3">El sistema realimentado canónico consta de un comparador/mezclador que genera la señal de error $x_i = x_s - x_f$, un amplificador básico de lazo abierto $A$ ($x_o = A x_i$), y una red pasiva de realimentación $\\beta$ que muestrea la salida ($x_f = \\beta x_o$):</p>
            $$x_o = A x_i = A (x_s - x_f) = A (x_s - \\beta x_o)$$
            $$x_o (1 + A \\beta) = A x_s$$

            <!-- ================= SVG: DIAGRAMA EN BLOQUES CANÓNICO DE BLACK ================= -->
            <div class="my-4 p-3.5 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800">
              <div class="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2.5 flex items-center gap-1.5">
                <span>🔁</span> Diagrama en Bloques Canónico de un Sistema Realimentado (Álgebra de Black)
              </div>
              <div class="w-full overflow-x-auto flex justify-center">
                <svg viewBox="0 0 680 230" class="w-full max-w-[680px] h-auto select-none font-sans text-xs" style="min-width: 480px;">
                  <defs>
                    <marker id="fb-arr-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                      <path d="M 0 2 L 8 5 L 0 8 z" fill="#0284c7"/>
                    </marker>
                    <marker id="fb-arr-green" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                      <path d="M 0 2 L 8 5 L 0 8 z" fill="#10b981"/>
                    </marker>
                    <marker id="fb-arr-slate" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                      <path d="M 0 2 L 8 5 L 0 8 z" fill="#475569"/>
                    </marker>
                  </defs>

                  <!-- ================= BLOQUE DEL LAZO DE CONTROL ================= -->
                  <!-- Entrada xs(t) -->
                  <circle cx="35" cy="65" r="3" fill="#6366f1"/>
                  <text x="35" y="52" text-anchor="middle" font-weight="bold" fill="#6366f1" font-size="10.5">x_s(t)</text>
                  <line x1="38" y1="65" x2="92" y2="65" stroke="#6366f1" stroke-width="1.8" marker-end="url(#fb-arr-slate)"/>
                  <text x="65" y="60" text-anchor="middle" font-size="7.5" fill="#64748b">Fuente</text>

                  <!-- Sumador / Comparador Sigma -->
                  <circle cx="106" cy="65" r="14" fill="#ffffff" stroke="#475569" stroke-width="1.8"/>
                  <line x1="98" y1="65" x2="114" y2="65" stroke="#475569" stroke-width="1.2"/>
                  <line x1="106" y1="57" x2="106" y2="73" stroke="#475569" stroke-width="1.2"/>
                  <!-- Signos del sumador -->
                  <text x="96" y="58" font-weight="bold" fill="#10b981" font-size="9.5">+</text>
                  <text x="110" y="86" font-weight="bold" fill="#ef4444" font-size="10.5">−</text>

                  <!-- Señal de Error xi -->
                  <line x1="120" y1="65" x2="175" y2="65" stroke="#0284c7" stroke-width="1.8" marker-end="url(#fb-arr-blue)"/>
                  <text x="147" y="55" text-anchor="middle" font-weight="bold" fill="#0284c7" font-size="9">x_i</text>
                  <text x="147" y="78" text-anchor="middle" font-size="7.5" fill="#64748b">Error = x_s - x_f</text>

                  <!-- Bloque Amplificador Directo A -->
                  <rect x="178" y="38" width="134" height="54" rx="7" fill="#0284c7" fill-opacity="0.12" stroke="#0284c7" stroke-width="1.8"/>
                  <text x="245" y="60" text-anchor="middle" font-weight="bold" fill="#0284c7" font-size="11">Amplificador A</text>
                  <text x="245" y="76" text-anchor="middle" fill="#0369a1" font-size="8.5">x_o = A · x_i (Directo)</text>

                  <!-- Salida directa hacia el nodo de muestreo y carga -->
                  <line x1="312" y1="65" x2="375" y2="65" stroke="#0284c7" stroke-width="1.8"/>
                  <circle cx="375" cy="65" r="3.5" fill="#0284c7"/>
                  <line x1="375" y1="65" x2="435" y2="65" stroke="#0284c7" stroke-width="1.8" marker-end="url(#fb-arr-blue)"/>
                  <circle cx="440" cy="65" r="3" fill="#0284c7"/>
                  <text x="440" y="52" text-anchor="middle" font-weight="bold" fill="#0284c7" font-size="10.5">x_o(t)</text>
                  <text x="410" y="78" text-anchor="middle" font-size="7.5" fill="#64748b">Salida</text>

                  <!-- Camino de realimentación: desde nodo de muestreo hacia abajo -->
                  <line x1="375" y1="65" x2="375" y2="155" stroke="#10b981" stroke-width="1.8"/>
                  <line x1="375" y1="155" x2="318" y2="155" stroke="#10b981" stroke-width="1.8" marker-end="url(#fb-arr-green)"/>
                  <text x="350" y="145" text-anchor="middle" font-size="7.5" fill="#10b981">Muestreo</text>

                  <!-- Bloque Red Beta -->
                  <rect x="178" y="128" width="134" height="54" rx="7" fill="#10b981" fill-opacity="0.12" stroke="#10b981" stroke-width="1.8"/>
                  <text x="245" y="150" text-anchor="middle" font-weight="bold" fill="#047857" font-size="11">Red Beta (β)</text>
                  <text x="245" y="166" text-anchor="middle" fill="#047857" font-size="8.5">x_f = β · x_o (Pasiva)</text>

                  <!-- Retorno al comparador -->
                  <line x1="178" y1="155" x2="106" y2="155" stroke="#10b981" stroke-width="1.8"/>
                  <line x1="106" y1="155" x2="106" y2="85" stroke="#10b981" stroke-width="1.8" marker-end="url(#fb-arr-green)"/>
                  <text x="96" y="120" text-anchor="end" font-weight="bold" fill="#10b981" font-size="9">x_f(t)</text>

                  <!-- ================= TARJETA DERECHA: ECUACIONES CANÓNICAS ================= -->
                  <g transform="translate(470, 20)">
                    <rect x="0" y="0" width="195" height="190" rx="9" fill="#0f172a" fill-opacity="0.04" dark:fill="#ffffff" dark:fill-opacity="0.04" stroke="#10b981" stroke-opacity="0.4" stroke-width="1.4"/>
                    <text x="97" y="24" text-anchor="middle" font-weight="bold" fill="#047857" font-size="10.5">Álgebra Fundamental de Black</text>
                    <line x1="15" y1="32" x2="180" y2="32" stroke="#10b981" stroke-opacity="0.2"/>

                    <!-- Ganancia de lazo cerrado -->
                    <text x="97" y="52" text-anchor="middle" font-weight="bold" fill="#0284c7" font-size="11">A_f = A / (1 + A·β)</text>
                    <text x="97" y="67" text-anchor="middle" fill="#64748b" font-size="8">Ganancia a Lazo Cerrado</text>

                    <!-- Ganancia de Lazo T -->
                    <text x="97" y="92" text-anchor="middle" font-weight="bold" fill="#8b5cf6" font-size="10.5">T = A · β  (Ganancia de Lazo)</text>
                    <text x="97" y="106" text-anchor="middle" fill="#64748b" font-size="8">Factor de desensibilización: (1 + T)</text>

                    <!-- Límite Asintótico -->
                    <rect x="12" y="118" width="171" height="58" rx="5" fill="#10b981" fill-opacity="0.12" stroke="#10b981" stroke-opacity="0.4"/>
                    <text x="97" y="134" text-anchor="middle" font-weight="bold" fill="#047857" font-size="9.5">Si T &gt;&gt; 1  ⟹  A_f ≈ 1 / β</text>
                    <text x="97" y="150" text-anchor="middle" fill="#047857" font-size="8">¡Insensible al envejecimiento</text>
                    <text x="97" y="162" text-anchor="middle" fill="#047857" font-size="8">y deriva térmica de los transistores!</text>
                  </g>
                </svg>
              </div>
            </div>

            <div class="p-4 my-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-950 dark:text-emerald-200">
              <h5 class="font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <span>🎯</span> Ecuación Fundamental de Lazo Cerrado
              </h5>
              $$\\mathbf{A_f = \\frac{x_o}{x_s} = \\frac{A}{1 + A \\beta} = \\frac{A}{1 + T}}$$
              <ul class="list-disc pl-5 space-y-1 text-xs mt-2">
                <li>$\\mathbf{T = A \\beta}$: <strong>Ganancia de Lazo (Loop Gain)</strong>.</li>
                <li>$\\mathbf{1 + T = 1 + A\\beta}$: <strong>Factor de Desensibilización</strong> (o cantidad de realimentación). Expresado en decibelios: $N = 20 \\log_{10}(1+T)\\text{ dB}$.</li>
                <li><strong>Hipótesis de realimentación profunda ($T \\gg 1$):</strong>
                  $$A_f \\approx \\frac{A}{A\\beta} = \\mathbf{\\frac{1}{\\beta}}$$
                  La función de transferencia global se vuelve completamente independiente de los transistores y queda dictada exclusivamente por resistores pasivos de alta precisión.
                </li>
              </ul>
            </div>

            <div class="p-3 my-3 rounded-xl bg-indigo-500/10 dark:bg-indigo-950/40 border border-indigo-500/30 text-xs flex items-start gap-2.5">
              <span class="text-base shrink-0">🔗</span>
              <div class="flex-1 min-w-0">
                <div class="font-semibold text-indigo-900 dark:text-indigo-300">
                  Fundamento Matemático de Teoría de Circuitos III:
                </div>
                <p class="text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                  Para profundizar en el plano complejo $s$, la estabilidad de Hurwitz de funciones de red y los diagramas de Bode de lazo abierto $T(s)$:
                </p>
                <button 
                  onclick="navegarASeccionTeorica('circuitos-3', 'tc3-u1-funciones-red')"
                  class="mt-1.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-[11px] font-medium transition-colors shadow-2xs"
                >
                  <span>📖 Ver Teoría de Circuitos III · Unidad 1 (Funciones de Red y Estabilidad)</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          `
        },
        {
          id: 'u4-propiedades-realimentacion',
          titulo: '4.2 Propiedades Cardinales de la Realimentación Negativa',
          contenido: `
            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-2 mb-2">1. Desensibilización de la Ganancia</h5>
            <p class="mb-2">Diferenciando logarítmicamente la expresión de lazo cerrado:</p>
            $$\\ln(A_f) = \\ln(A) - \\ln(1 + A\\beta)$$
            $$\\frac{dA_f}{A_f} = \\frac{dA}{A} - \\frac{\\beta dA}{1 + A\\beta} = \\frac{dA}{A} \\left( 1 - \\frac{A\\beta}{1 + A\\beta} \\right) = \\mathbf{\\frac{1}{1 + T} \\frac{dA}{A}}$$
            <p class="text-xs text-slate-600 dark:text-slate-400">Si $T = 99$, una variación del $50\\%$ en la ganancia interna de los transistores se traduce en un cambio de apenas el $0.5\\%$ en la salida.</p>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">2. Extensión del Ancho de Banda y Producto Ganancia-Ancho de Banda (GBW)</h5>
            <p class="mb-2">Para un amplificador con respuesta paso-bajo y frecuencia de corte superior $\\omega_H$ ($A(s) = \\frac{A_0}{1 + s/\\omega_H}$):</p>
            $$A_f(s) = \\frac{\\frac{A_0}{1 + s/\\omega_H}}{1 + \\beta \\frac{A_0}{1 + s/\\omega_H}} = \\frac{A_0}{(1 + A_0\\beta) + s/\\omega_H} = \\mathbf{\\frac{\\frac{A_0}{1 + T_0}}{1 + \\frac{s}{\\omega_H (1 + T_0)}}}$$
            <ul class="list-disc pl-5 space-y-1 text-xs sm:text-sm my-2">
              <li>Ganancia a bajas frecuencias: $A_{f0} = \\frac{A_0}{1 + T_0}$.</li>
              <li>Frecuencia de corte superior a lazo cerrado: $\\mathbf{\\omega_{Hf} = \\omega_H (1 + T_0)}$.</li>
              <li>Frecuencia de corte inferior (si es paso-alto): $\\mathbf{\\omega_{Lf} = \\frac{\\omega_L}{1 + T_0}}$.</li>
            </ul>
            <div class="p-3 my-2 rounded-xl bg-blue-500/10 border border-blue-500/30 text-xs">
              <strong>Invarianza del Producto GBW:</strong>
              $$\\mathbf{\\text{GBW} = A_{f0} \\cdot \\omega_{Hf} = \\left( \\frac{A_0}{1+T_0} \\right) [\\omega_H(1+T_0)] = A_0 \\cdot \\omega_H = \\text{constante}}$$
              Se intercambia ganancia por ancho de banda en una relación exactamente 1 a 1.
            </div>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">3. Reducción de Distorsión No Lineal</h5>
            <p class="text-xs sm:text-sm">Si una etapa intermedia introduce distorsión armónica o ruido $D$ dentro del lazo cerrado:</p>
            $$D_f = \\frac{D}{1 + T}$$
          `
        },
        {
          id: 'u4-topologias-impedancias',
          titulo: '4.3 Las Cuatro Topologías Básicas y Regla Mnemotécnica de Impedancias',
          contenido: `
            <p class="mb-3">La realimentación se clasifica según la magnitud muestreada a la salida y la magnitud inyectada al comparador de entrada:</p>

            <!-- ================= SVG: LAS 4 TOPOLOGÍAS DE REALIMENTACIÓN ================= -->
            <div class="my-4 p-3.5 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800">
              <div class="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2.5 flex items-center gap-1.5">
                <span>🔀</span> Las Cuatro Topologías Canónicas de Realimentación y Comportamiento de Impedancias
              </div>
              <div class="w-full overflow-x-auto flex justify-center">
                <svg viewBox="0 0 760 260" class="w-full max-w-[760px] h-auto select-none font-sans text-xs" style="min-width: 580px;">
                  <!-- ================= 1. TENSIÓN - SERIE (SERIE-SHUNT) ================= -->
                  <g transform="translate(10, 0)">
                    <rect x="0" y="8" width="175" height="244" rx="8" fill="#2563eb" fill-opacity="0.05" stroke="#2563eb" stroke-opacity="0.35"/>
                    <rect x="0" y="8" width="175" height="24" rx="8" fill="#2563eb" fill-opacity="0.15"/>
                    <text x="87" y="24" text-anchor="middle" font-weight="bold" fill="#1d4ed8" font-size="9.5">1. Tensión - Serie</text>
                    <text x="87" y="42" text-anchor="middle" font-size="8" fill="#64748b">Serie - Shunt (VCVS)</text>

                    <!-- Mini Bloque A y Beta -->
                    <rect x="52" y="52" width="70" height="28" rx="4" fill="#2563eb" fill-opacity="0.2" stroke="#2563eb" stroke-width="1.2"/>
                    <text x="87" y="69" text-anchor="middle" font-weight="bold" fill="#1d4ed8" font-size="9">Amp A_v</text>

                    <rect x="52" y="102" width="70" height="24" rx="4" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="1.2"/>
                    <text x="87" y="117" text-anchor="middle" font-weight="bold" fill="#047857" font-size="8.5">Red β_v</text>

                    <!-- Malla Serie de Entrada -->
                    <!-- Entrada vs -->
                    <circle cx="20" cy="66" r="6" fill="none" stroke="#6366f1" stroke-width="1.3"/>
                    <text x="20" y="69" text-anchor="middle" font-size="6.5" font-weight="bold" fill="#6366f1">v_s</text>
                    <line x1="20" y1="60" x2="20" y2="56" stroke="#475569" stroke-width="1.2"/>
                    <line x1="20" y1="56" x2="52" y2="56" stroke="#475569" stroke-width="1.2"/>
                    <line x1="20" y1="72" x2="20" y2="114" stroke="#475569" stroke-width="1.2"/>
                    <line x1="20" y1="114" x2="52" y2="114" stroke="#475569" stroke-width="1.2"/>
                    <line x1="52" y1="76" x2="38" y2="76" stroke="#475569" stroke-width="1.2"/>
                    <line x1="38" y1="76" x2="38" y2="106" stroke="#475569" stroke-width="1.2"/>
                    <line x1="38" y1="106" x2="52" y2="106" stroke="#475569" stroke-width="1.2"/>
                    <text x="28" y="93" font-size="7" font-weight="bold" fill="#2563eb">Malla</text>

                    <!-- Muestreo Shunt de Salida -->
                    <line x1="122" y1="60" x2="155" y2="60" stroke="#475569" stroke-width="1.2"/>
                    <circle cx="140" cy="60" r="2" fill="#2563eb"/>
                    <line x1="140" y1="60" x2="140" y2="110" stroke="#475569" stroke-width="1.2"/>
                    <line x1="140" y1="110" x2="122" y2="110" stroke="#475569" stroke-width="1.2"/>
                    <line x1="122" y1="72" x2="155" y2="72" stroke="#475569" stroke-width="1.2"/>
                    <circle cx="148" cy="72" r="2" fill="#2563eb"/>
                    <line x1="148" y1="72" x2="148" y2="120" stroke="#475569" stroke-width="1.2"/>
                    <line x1="148" y1="120" x2="122" y2="120" stroke="#475569" stroke-width="1.2"/>
                    <text x="160" y="68" font-size="7.5" font-weight="bold" fill="#2563eb">v_o</text>

                    <!-- Resumen de Impedancias -->
                    <rect x="6" y="136" width="163" height="106" rx="5" fill="#ffffff" fill-opacity="0.9" dark:fill="#0f172a" stroke="#2563eb" stroke-opacity="0.2"/>
                    <text x="87" y="152" text-anchor="middle" font-weight="bold" fill="#1d4ed8" font-size="8.5">Mezcla SERIE (Tensión)</text>
                    <text x="87" y="167" text-anchor="middle" font-weight="bold" fill="#047857" font-size="9.5">R_{if} = R_i(1+T) ⟶ ∞</text>
                    <line x1="20" y1="174" x2="155" y2="174" stroke="#e2e8f0"/>
                    <text x="87" y="189" text-anchor="middle" font-weight="bold" fill="#1d4ed8" font-size="8.5">Muestreo SHUNT (Tensión)</text>
                    <text x="87" y="204" text-anchor="middle" font-weight="bold" fill="#2563eb" font-size="9.5">R_{of} = R_o / (1+T) ⟶ 0</text>
                    <text x="87" y="222" text-anchor="middle" fill="#64748b" font-size="7.5">Amp. de Tensión Ideal</text>
                  </g>

                  <!-- ================= 2. CORRIENTE - SERIE (SERIE-SERIE) ================= -->
                  <g transform="translate(195, 0)">
                    <rect x="0" y="8" width="175" height="244" rx="8" fill="#9333ea" fill-opacity="0.05" stroke="#9333ea" stroke-opacity="0.35"/>
                    <rect x="0" y="8" width="175" height="24" rx="8" fill="#9333ea" fill-opacity="0.15"/>
                    <text x="87" y="24" text-anchor="middle" font-weight="bold" fill="#7e22ce" font-size="9.5">2. Corriente - Serie</text>
                    <text x="87" y="42" text-anchor="middle" font-size="8" fill="#64748b">Serie - Serie (VCCS)</text>

                    <!-- Mini Bloque A y Beta -->
                    <rect x="52" y="52" width="70" height="28" rx="4" fill="#9333ea" fill-opacity="0.2" stroke="#9333ea" stroke-width="1.2"/>
                    <text x="87" y="69" text-anchor="middle" font-weight="bold" fill="#7e22ce" font-size="9">Amp G_m</text>

                    <rect x="52" y="102" width="70" height="24" rx="4" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="1.2"/>
                    <text x="87" y="117" text-anchor="middle" font-weight="bold" fill="#047857" font-size="8.5">Red β_z</text>

                    <!-- Malla Serie de Entrada -->
                    <circle cx="20" cy="66" r="6" fill="none" stroke="#6366f1" stroke-width="1.3"/>
                    <text x="20" y="69" text-anchor="middle" font-size="6.5" font-weight="bold" fill="#6366f1">v_s</text>
                    <line x1="20" y1="60" x2="20" y2="56" stroke="#475569" stroke-width="1.2"/>
                    <line x1="20" y1="56" x2="52" y2="56" stroke="#475569" stroke-width="1.2"/>
                    <line x1="20" y1="72" x2="20" y2="114" stroke="#475569" stroke-width="1.2"/>
                    <line x1="20" y1="114" x2="52" y2="114" stroke="#475569" stroke-width="1.2"/>
                    <line x1="52" y1="76" x2="38" y2="76" stroke="#475569" stroke-width="1.2"/>
                    <line x1="38" y1="76" x2="38" y2="106" stroke="#475569" stroke-width="1.2"/>
                    <line x1="38" y1="106" x2="52" y2="106" stroke="#475569" stroke-width="1.2"/>

                    <!-- Muestreo SERIE de Salida -->
                    <line x1="122" y1="60" x2="155" y2="60" stroke="#475569" stroke-width="1.2"/>
                    <line x1="155" y1="60" x2="155" y2="114" stroke="#475569" stroke-width="1.2"/>
                    <line x1="155" y1="114" x2="122" y2="114" stroke="#475569" stroke-width="1.2"/>
                    <line x1="122" y1="106" x2="138" y2="106" stroke="#475569" stroke-width="1.2"/>
                    <line x1="138" y1="106" x2="138" y2="72" stroke="#475569" stroke-width="1.2"/>
                    <line x1="138" y1="72" x2="122" y2="72" stroke="#475569" stroke-width="1.2"/>
                    <text x="160" y="88" font-size="7.5" font-weight="bold" fill="#7e22ce">i_o</text>

                    <!-- Resumen de Impedancias -->
                    <rect x="6" y="136" width="163" height="106" rx="5" fill="#ffffff" fill-opacity="0.9" dark:fill="#0f172a" stroke="#9333ea" stroke-opacity="0.2"/>
                    <text x="87" y="152" text-anchor="middle" font-weight="bold" fill="#7e22ce" font-size="8.5">Mezcla SERIE (Tensión)</text>
                    <text x="87" y="167" text-anchor="middle" font-weight="bold" fill="#047857" font-size="9.5">R_{if} = R_i(1+T) ⟶ ∞</text>
                    <line x1="20" y1="174" x2="155" y2="174" stroke="#e2e8f0"/>
                    <text x="87" y="189" text-anchor="middle" font-weight="bold" fill="#7e22ce" font-size="8.5">Muestreo SERIE (Corriente)</text>
                    <text x="87" y="204" text-anchor="middle" font-weight="bold" fill="#047857" font-size="9.5">R_{of} = R_o(1+T) ⟶ ∞</text>
                    <text x="87" y="222" text-anchor="middle" fill="#64748b" font-size="7.5">Amp. Transconductancia</text>
                  </g>

                  <!-- ================= 3. TENSIÓN - PARALELO (SHUNT-SHUNT) ================= -->
                  <g transform="translate(380, 0)">
                    <rect x="0" y="8" width="175" height="244" rx="8" fill="#d97706" fill-opacity="0.05" stroke="#d97706" stroke-opacity="0.35"/>
                    <rect x="0" y="8" width="175" height="24" rx="8" fill="#d97706" fill-opacity="0.15"/>
                    <text x="87" y="24" text-anchor="middle" font-weight="bold" fill="#b45309" font-size="9.5">3. Tensión - Paralelo</text>
                    <text x="87" y="42" text-anchor="middle" font-size="8" fill="#64748b">Shunt - Shunt (CCVS)</text>

                    <!-- Mini Bloque A y Beta -->
                    <rect x="52" y="52" width="70" height="28" rx="4" fill="#d97706" fill-opacity="0.2" stroke="#d97706" stroke-width="1.2"/>
                    <text x="87" y="69" text-anchor="middle" font-weight="bold" fill="#b45309" font-size="9">Amp R_m</text>

                    <rect x="52" y="102" width="70" height="24" rx="4" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="1.2"/>
                    <text x="87" y="117" text-anchor="middle" font-weight="bold" fill="#047857" font-size="8.5">Red β_y</text>

                    <!-- Nodo Paralelo de Entrada (Shunt) -->
                    <circle cx="20" cy="66" r="6" fill="none" stroke="#6366f1" stroke-width="1.3"/>
                    <text x="20" y="69" text-anchor="middle" font-size="6.5" font-weight="bold" fill="#6366f1">i_s</text>
                    <line x1="20" y1="60" x2="20" y2="56" stroke="#475569" stroke-width="1.2"/>
                    <line x1="20" y1="56" x2="52" y2="56" stroke="#475569" stroke-width="1.2"/>
                    <circle cx="36" cy="56" r="2" fill="#d97706"/>
                    <line x1="36" y1="56" x2="36" y2="106" stroke="#475569" stroke-width="1.2"/>
                    <line x1="36" y1="106" x2="52" y2="106" stroke="#475569" stroke-width="1.2"/>

                    <line x1="20" y1="72" x2="20" y2="76" stroke="#475569" stroke-width="1.2"/>
                    <line x1="20" y1="76" x2="52" y2="76" stroke="#475569" stroke-width="1.2"/>
                    <circle cx="44" cy="76" r="2" fill="#d97706"/>
                    <line x1="44" y1="76" x2="44" y2="114" stroke="#475569" stroke-width="1.2"/>
                    <line x1="44" y1="114" x2="52" y2="114" stroke="#475569" stroke-width="1.2"/>

                    <!-- Muestreo Shunt de Salida -->
                    <line x1="122" y1="60" x2="155" y2="60" stroke="#475569" stroke-width="1.2"/>
                    <circle cx="140" cy="60" r="2" fill="#d97706"/>
                    <line x1="140" y1="60" x2="140" y2="110" stroke="#475569" stroke-width="1.2"/>
                    <line x1="140" y1="110" x2="122" y2="110" stroke="#475569" stroke-width="1.2"/>
                    <line x1="122" y1="72" x2="155" y2="72" stroke="#475569" stroke-width="1.2"/>
                    <circle cx="148" cy="72" r="2" fill="#d97706"/>
                    <line x1="148" y1="72" x2="148" y2="120" stroke="#475569" stroke-width="1.2"/>
                    <line x1="148" y1="120" x2="122" y2="120" stroke="#475569" stroke-width="1.2"/>
                    <text x="160" y="68" font-size="7.5" font-weight="bold" fill="#d97706">v_o</text>

                    <!-- Resumen de Impedancias -->
                    <rect x="6" y="136" width="163" height="106" rx="5" fill="#ffffff" fill-opacity="0.9" dark:fill="#0f172a" stroke="#d97706" stroke-opacity="0.2"/>
                    <text x="87" y="152" text-anchor="middle" font-weight="bold" fill="#b45309" font-size="8.5">Mezcla PARALELO (Corriente)</text>
                    <text x="87" y="167" text-anchor="middle" font-weight="bold" fill="#2563eb" font-size="9.5">R_{if} = R_i / (1+T) ⟶ 0</text>
                    <line x1="20" y1="174" x2="155" y2="174" stroke="#e2e8f0"/>
                    <text x="87" y="189" text-anchor="middle" font-weight="bold" fill="#b45309" font-size="8.5">Muestreo SHUNT (Tensión)</text>
                    <text x="87" y="204" text-anchor="middle" font-weight="bold" fill="#2563eb" font-size="9.5">R_{of} = R_o / (1+T) ⟶ 0</text>
                    <text x="87" y="222" text-anchor="middle" fill="#64748b" font-size="7.5">Amp. Transresistencia</text>
                  </g>

                  <!-- ================= 4. CORRIENTE - PARALELO (SHUNT-SERIE) ================= -->
                  <g transform="translate(565, 0)">
                    <rect x="0" y="8" width="175" height="244" rx="8" fill="#e11d48" fill-opacity="0.05" stroke="#e11d48" stroke-opacity="0.35"/>
                    <rect x="0" y="8" width="175" height="24" rx="8" fill="#e11d48" fill-opacity="0.15"/>
                    <text x="87" y="24" text-anchor="middle" font-weight="bold" fill="#be123c" font-size="9.5">4. Corriente - Paralelo</text>
                    <text x="87" y="42" text-anchor="middle" font-size="8" fill="#64748b">Shunt - Serie (CCCS)</text>

                    <!-- Mini Bloque A y Beta -->
                    <rect x="52" y="52" width="70" height="28" rx="4" fill="#e11d48" fill-opacity="0.2" stroke="#e11d48" stroke-width="1.2"/>
                    <text x="87" y="69" text-anchor="middle" font-weight="bold" fill="#be123c" font-size="9">Amp A_i</text>

                    <rect x="52" y="102" width="70" height="24" rx="4" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="1.2"/>
                    <text x="87" y="117" text-anchor="middle" font-weight="bold" fill="#047857" font-size="8.5">Red β_i</text>

                    <!-- Nodo Paralelo de Entrada (Shunt) -->
                    <circle cx="20" cy="66" r="6" fill="none" stroke="#6366f1" stroke-width="1.3"/>
                    <text x="20" y="69" text-anchor="middle" font-size="6.5" font-weight="bold" fill="#6366f1">i_s</text>
                    <line x1="20" y1="60" x2="20" y2="56" stroke="#475569" stroke-width="1.2"/>
                    <line x1="20" y1="56" x2="52" y2="56" stroke="#475569" stroke-width="1.2"/>
                    <circle cx="36" cy="56" r="2" fill="#e11d48"/>
                    <line x1="36" y1="56" x2="36" y2="106" stroke="#475569" stroke-width="1.2"/>
                    <line x1="36" y1="106" x2="52" y2="106" stroke="#475569" stroke-width="1.2"/>

                    <line x1="20" y1="72" x2="20" y2="76" stroke="#475569" stroke-width="1.2"/>
                    <line x1="20" y1="76" x2="52" y2="76" stroke="#475569" stroke-width="1.2"/>
                    <circle cx="44" cy="76" r="2" fill="#e11d48"/>
                    <line x1="44" y1="76" x2="44" y2="114" stroke="#475569" stroke-width="1.2"/>
                    <line x1="44" y1="114" x2="52" y2="114" stroke="#475569" stroke-width="1.2"/>

                    <!-- Muestreo SERIE de Salida -->
                    <line x1="122" y1="60" x2="155" y2="60" stroke="#475569" stroke-width="1.2"/>
                    <line x1="155" y1="60" x2="155" y2="114" stroke="#475569" stroke-width="1.2"/>
                    <line x1="155" y1="114" x2="122" y2="114" stroke="#475569" stroke-width="1.2"/>
                    <line x1="122" y1="106" x2="138" y2="106" stroke="#475569" stroke-width="1.2"/>
                    <line x1="138" y1="106" x2="138" y2="72" stroke="#475569" stroke-width="1.2"/>
                    <line x1="138" y1="72" x2="122" y2="72" stroke="#475569" stroke-width="1.2"/>
                    <text x="160" y="88" font-size="7.5" font-weight="bold" fill="#be123c">i_o</text>

                    <!-- Resumen de Impedancias -->
                    <rect x="6" y="136" width="163" height="106" rx="5" fill="#ffffff" fill-opacity="0.9" dark:fill="#0f172a" stroke="#e11d48" stroke-opacity="0.2"/>
                    <text x="87" y="152" text-anchor="middle" font-weight="bold" fill="#be123c" font-size="8.5">Mezcla PARALELO (Corriente)</text>
                    <text x="87" y="167" text-anchor="middle" font-weight="bold" fill="#2563eb" font-size="9.5">R_{if} = R_i / (1+T) ⟶ 0</text>
                    <line x1="20" y1="174" x2="155" y2="174" stroke="#e2e8f0"/>
                    <text x="87" y="189" text-anchor="middle" font-weight="bold" fill="#be123c" font-size="8.5">Muestreo SERIE (Corriente)</text>
                    <text x="87" y="204" text-anchor="middle" font-weight="bold" fill="#047857" font-size="9.5">R_{of} = R_o(1+T) ⟶ ∞</text>
                    <text x="87" y="222" text-anchor="middle" fill="#64748b" font-size="7.5">Amp. de Corriente Ideal</text>
                  </g>
                </svg>
              </div>
            </div>

            <div class="overflow-x-auto my-3">
              <table class="w-full text-xs text-left border-collapse border border-slate-200 dark:border-slate-800">
                <thead>
                  <tr class="bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 font-mono">
                    <th class="p-2 border border-slate-200 dark:border-slate-800">Topología</th>
                    <th class="p-2 border border-slate-200 dark:border-slate-800">Tipo de Amplificador</th>
                    <th class="p-2 border border-slate-200 dark:border-slate-800">Ganancia $A_f$</th>
                    <th class="p-2 border border-slate-200 dark:border-slate-800">Entrada $R_{if}$</th>
                    <th class="p-2 border border-slate-200 dark:border-slate-800">Salida $R_{of}$</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 dark:divide-slate-800 font-mono text-[11px]">
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-bold text-blue-600 dark:text-blue-400">1. Tensión - Serie<br><span class="font-normal text-[10px] text-slate-500">(Serie - Shunt)</span></td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">Tensión ($A_v = v_o/v_i$)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$A_{vf} = \\frac{A_v}{1 + A_v \\beta_v}$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 text-emerald-600 font-bold">$R_i (1+T) \\to \\infty$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 text-blue-600 font-bold">$\\frac{R_o}{1+T} \\to 0$</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-bold text-purple-600 dark:text-purple-400">2. Corriente - Serie<br><span class="font-normal text-[10px] text-slate-500">(Serie - Serie)</span></td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">Transconductancia ($G_m = i_o/v_i$)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$G_{mf} = \\frac{G_m}{1 + G_m \\beta_z}$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 text-emerald-600 font-bold">$R_i (1+T) \\to \\infty$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 text-emerald-600 font-bold">$R_o (1+T) \\to \\infty$</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-bold text-amber-600 dark:text-amber-400">3. Tensión - Paralelo<br><span class="font-normal text-[10px] text-slate-500">(Shunt - Shunt)</span></td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">Transresistencia ($R_m = v_o/i_i$)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$R_{mf} = \\frac{R_m}{1 + R_m \\beta_y}$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 text-blue-600 font-bold">$\\frac{R_i}{1+T} \\to 0$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 text-blue-600 font-bold">$\\frac{R_o}{1+T} \\to 0$</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-bold text-rose-600 dark:text-rose-400">4. Corriente - Paralelo<br><span class="font-normal text-[10px] text-slate-500">(Shunt - Serie)</span></td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">Corriente ($A_i = i_o/i_i$)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$A_{if} = \\frac{A_i}{1 + A_i \\beta_i}$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 text-blue-600 font-bold">$\\frac{R_i}{1+T} \\to 0$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 text-emerald-600 font-bold">$R_o (1+T) \\to \\infty$</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="p-3.5 my-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <h5 class="font-bold text-xs uppercase tracking-wider mb-1 text-slate-900 dark:text-white flex items-center gap-1.5">
                <span>💡</span> Regla Mnemotécnica Infalible para el Examen
              </h5>
              <ul class="list-disc pl-5 space-y-1 text-xs">
                <li><strong>Entrada SERIE:</strong> Compara tensiones en una malla. Desea capturar toda la tensión del generador sin cargarlo $\implies$ Ideal $R_i = \\infty$ $\implies$ <em>Multiplica por $(1+T)$</em>.</li>
                <li><strong>Entrada PARALELO (Shunt):</strong> Compara corrientes en un nodo. Desea absorber toda la corriente del generador $\implies$ Ideal $R_i = 0$ $\implies$ <em>Divide por $(1+T)$</em>.</li>
                <li><strong>Salida TENSIÓN (Shunt):</strong> Fuente de tensión ideal. Mantiene constante la tensión independiente de la carga $\implies$ Ideal $R_o = 0$ $\implies$ <em>Divide por $(1+T)$</em>.</li>
                <li><strong>Salida CORRIENTE (Serie):</strong> Fuente de corriente ideal. Mantiene constante la corriente independiente de la carga $\implies$ Ideal $R_o = \\infty$ $\implies$ <em>Multiplica por $(1+T)$</em>.</li>
              </ul>
            </div>
          `
        },
        {
          id: 'u4-metodo-cuadripolos',
          titulo: '4.4 Método Sistemático de Cuadripolos con Efectos de Carga de la Red Beta',
          contenido: `
            <p class="mb-3">En circuitos prácticos con componentes discretos, los resistores de la red $\\beta$ cargan pasivamente tanto a la entrada como a la salida del amplificador $A$. Para resolver estos problemas en el parcial sin cometer errores:</p>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-3 mb-2">Algoritmo de Resolución en 5 Pasos</h5>
            <ol class="list-decimal pl-5 space-y-2 text-xs sm:text-sm">
              <li><strong>Paso 1 (Identificar topología):</strong>
                <ul class="list-disc pl-5 mt-1 space-y-0.5 text-xs text-slate-600 dark:text-slate-400">
                  <li>¿Muestreo de salida?: Si haciendo $R_L = 0$ (cortocircuito) la señal realimentada se anula $\implies$ Muestreo de TENSIÓN. Si haciendo $R_L = \\infty$ (abierto) se anula $\implies$ Muestreo de CORRIENTE.</li>
                  <li>¿Mezcla de entrada?: Si la realimentación entra a la base/emisor restando tensiones de malla $\implies$ SERIE. Si entra al mismo nodo dividiendo corrientes $\implies$ PARALELO.</li>
                </ul>
              </li>
              <li><strong>Paso 2 (Determinar el factor $\\beta$):</strong> Plantear la relación $\\beta = x_f / x_o$ apagando la entrada del amplificador.</li>
              <li><strong>Paso 3 (Construir el circuito cargado $A'$):</strong> Desconectar la realimentación pero <em>mantener los efectos de carga</em> que $\\beta$ le produce al circuito:
                <div class="p-2.5 my-1.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
                  • <em>Carga a la entrada:</em> Si muestreo es tensión $\\to$ hacer $v_o = 0$ (cortocircuitar salida). Si muestreo es corriente $\\to$ hacer $i_o = 0$ (abrir salida).<br>
                  • <em>Carga a la salida:</em> Si mezcla es serie $\\to$ hacer $i_i = 0$ (abrir entrada). Si mezcla es paralelo $\\to$ hacer $v_i = 0$ (cortocircuitar entrada).
                </div>
              </li>
              <li><strong>Paso 4 (Resolver pequeña señal de $A'$):</strong> Calcular la ganancia $A$ ($A_v$, $G_m$, $R_m$ o $A_i$), la resistencia $R_i$ y la resistencia $R_o$ del circuito cargado.</li>
              <li><strong>Paso 5 (Calcular parámetros a lazo cerrado):</strong>
                $$T = A \\cdot \\beta, \\quad A_f = \\frac{A}{1 + T}$$
                $$R_{if} = R_i (1+T) \\text{ o } \\frac{R_i}{1+T}, \\quad R_{of} = \\frac{R_o}{1+T} \\text{ o } R_o (1+T)$$
              </li>
            </ol>
          `
        },
        {
          id: 'u4-estabilidad-frecuencia',
          titulo: '4.5 Estabilidad en Lazo Cerrado y Compensación en Frecuencia',
          contenido: `
            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-2 mb-2">Criterio de Oscilación de Barkhausen</h5>
            <p class="mb-2">A frecuencias elevadas, las capacidades intrínsecas del transistor introducen polos que retrasan la fase de la señal. Si a una frecuencia $\\omega_{180}$ el desfase del lazo alcanza $-180^\\circ$:</p>
            $$T(j\\omega_{180}) = A(j\\omega_{180}) \\cdot \\beta = -|T| = |T| e^{-j 180^\\circ}$$
            <p class="my-2">Al sumarse al signo negativo del comparador ($-180^\\circ$), el desfase neto es $-360^\\circ$ ($0^\\circ$), convirtiendo la realimentación negativa en <strong>realimentación positiva pura</strong>.</p>
            <p class="my-1">Si a esa frecuencia $\\mathbf{|T(j\\omega_{180})| \\ge 1}$ ($0\\text{ dB}$), el circuito es inestable y oscila espontáneamente.</p>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Márgenes de Estabilidad</h5>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
              <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <span class="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">Margen de Fase (PM)</span>
                $$PM = 180^\\circ + \\arg[T(j\\omega_t)]$$
                <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">donde $\\omega_t$ es la frecuencia donde $|T(j\\omega_t)| = 1$ ($0\\text{ dB}$).</p>
                <p class="text-xs font-semibold mt-1">• Criterio de cátedra: $\\mathbf{PM \\ge 45^\\circ}$ (óptimo: $60^\\circ$ sin ringing).</p>
              </div>

              <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <span class="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">Margen de Ganancia (GM)</span>
                $$GM = -20 \\log_{10}|T(j\\omega_{180})|\\text{ dB}$$
                <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Atenuación respecto a $0\\text{ dB}$ cuando la fase cruza $-180^\\circ$.</p>
                <p class="text-xs font-semibold mt-1">• Criterio de cátedra: $\\mathbf{GM \\ge 6\\text{ dB} - 10\\text{ dB}}$.</p>
              </div>
            </div>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Compensación por Polo Dominante (Efecto Miller)</h5>
            <p class="text-xs sm:text-sm">Consiste en conectar un pequeño capacitor $C_c$ entre la entrada y salida de una etapa inversora intermedia. Por efecto Miller, la capacidad vista a la entrada se multiplica por $(1 + |A_v|)$, desplazando el primer polo hacia frecuencias muy bajas ($\\omega_{p1}' \\ll \\omega_{p1}$) y empujando el segundo polo hacia frecuencias más altas (<em>pole splitting</em>). Esto garantiza que la curva cruce los $0\\text{ dB}$ con una pendiente suave de $-20\\text{ dB/déc}$ mucho antes de que otros polos aporten desfase, logrando $PM > 60^\\circ$.</p>
          `
        },
        {
          id: 'u4-formulario',
          titulo: '4.6 Formulario de Examen y Síntesis - Unidad 4',
          contenido: `
            <div class="overflow-x-auto my-3">
              <table class="w-full text-xs text-left border-collapse border border-slate-200 dark:border-slate-800">
                <thead>
                  <tr class="bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 font-mono">
                    <th class="p-2.5 border border-slate-200 dark:border-slate-800">Ecuación</th>
                    <th class="p-2.5 border border-slate-200 dark:border-slate-800">Expresión</th>
                    <th class="p-2.5 border border-slate-200 dark:border-slate-800">Significado</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 dark:divide-slate-800 font-mono">
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">Ganancia Lazo Cerrado</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$A_f = \\frac{A}{1 + A\\beta} = \\frac{A}{1+T}$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">Ecuación de Black ($T \\gg 1 \\implies A_f \\approx 1/\\beta$)</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">Sensibilidad</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$\\frac{dA_f}{A_f} = \\frac{1}{1+T} \\frac{dA}{A}$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">Inmunidad ante variaciones de componentes</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">Ancho de Banda Superior</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$\\omega_{Hf} = \\omega_H (1+T)$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">Se ensancha por $(1+T)$</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">Producto GBW</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$A_{f0} \\cdot \\omega_{Hf} = A_0 \\cdot \\omega_H$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">Invariante de lazo cerrado</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">Reducción de Distorsión</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$D_f = \\frac{D}{1+T}$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">Atenúa armónicos no lineales</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">Margen de Fase</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$PM = 180^\\circ + \\arg[T(j\\omega_t)]$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">Estabilidad si $PM \\ge 45^\\circ$</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="pt-2 flex justify-end">
              <button onclick="filtrarUnidad('ea1-u4'); volverAEjercicios();" class="text-xs font-mono text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1">
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

// Registro en el objeto global de compendios teóricos
if (typeof MANUALES_TEORIA === 'undefined') {
  var MANUALES_TEORIA = {};
}
MANUALES_TEORIA['electronica-aplicada-1'] = MANUAL_TEORIA_EA1;
