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
      introduccion: 'Esta unidad establece los pilares del análisis circuital en régimen estacionario de continua. Se desarrollan las convenciones de signos de tensión y corriente en componentes pasivos y activos, la Ley de Ohm, las asociaciones serie, paralelo y la transformación de Kennelly (estrella-triángulo), los divisores de tensión y corriente con efecto de carga, las leyes de Kirchhoff, los métodos sistemáticos de nodos y mallas, y los teoremas de Thévenin, Norton, Millman, Superposición y Máxima Transferencia de Potencia.',
      secciones: [
        {
          id: 'e1-u1-convencion-asociacion',
          titulo: '1.1 Convención de Signos Pasiva, Ley de Ohm, Asociación y Teorema de Kennelly',
          contenido: `
            <p class="mb-3">El análisis riguroso de cualquier red eléctrica requiere establecer inequívocamente el sentido de referencia de las corrientes y las polaridades de las caídas de tensión sobre cada elemento de circuito.</p>

            <div class="p-4 my-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-slate-800 dark:text-blue-100">
              <h5 class="font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5 text-blue-700 dark:text-blue-300">
                <span>⚡</span> Convención de Signos para Bipolos Pasivos (Receptores)
              </h5>
              <p class="text-xs sm:text-sm mt-1">
                En un componente pasivo (como una resistencia $R$), la corriente de referencia <strong>entra por el terminal de mayor potencial relativo (signo $+$)</strong> y sale por el de menor potencial (signo $-$).
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3 text-xs">
                <div class="p-2.5 rounded-lg bg-white/70 dark:bg-slate-900/80 border border-blue-200 dark:border-blue-900">
                  <span class="font-bold text-blue-600 dark:text-blue-400">Ley de Ohm con Convención Pasiva:</span>
                  $$V_{AB} = V_A - V_B = + I \\cdot R$$
                  <p class="text-slate-600 dark:text-slate-400 mt-1">
                    Donde la corriente $I$ fluye desde el nodo $A$ ($+$) hacia el nodo $B$ ($-$). La tensión $V_{AB}$ representa la caída de potencial positiva en el sentido del flujo de corriente.
                  </p>
                </div>
                <div class="p-2.5 rounded-lg bg-white/70 dark:bg-slate-900/80 border border-blue-200 dark:border-blue-900">
                  <span class="font-bold text-blue-600 dark:text-blue-400">Potencia Disipada (Efecto Joule):</span>
                  $$P = V \\cdot I = I^2 R = \\frac{V^2}{R} \\ge 0$$
                  <p class="text-slate-600 dark:text-slate-400 mt-1">
                    La potencia sobre una resistencia real es <strong>siempre estrictamente positiva</strong> ($P > 0$ con $I \\neq 0$), lo que indica que el elemento <em>absorbe y disipa energía eléctrica en forma de calor</em>, jamás la suministra.
                  </p>
                </div>
              </div>
            </div>

            <!-- Gráfico SVG: Convención de Signos Pasiva sobre una Resistencia -->
            <div class="my-4 p-4 rounded-2xl bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
              <h6 class="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2 text-center">
                📊 Gráfico: Convención de Signos Pasiva — Sentido de Corriente y Caída de Tensión (R)
              </h6>
              <div class="overflow-x-auto flex justify-center py-1">
                <svg viewBox="0 0 580 215" class="w-full max-w-xl h-auto font-sans text-xs select-none">
                  <!-- Tarjeta Principal Contenedora -->
                  <rect x="10" y="8" width="560" height="200" rx="10" fill="#3b82f6" fill-opacity="0.04" stroke="#3b82f6" stroke-opacity="0.35" stroke-width="1.2"/>
                  <text x="290" y="24" text-anchor="middle" font-weight="bold" fill="#2563eb" font-size="11">Convención de Signos Pasiva Estándar (Receptores)</text>
                  <text x="290" y="38" text-anchor="middle" fill="#64748b" font-size="8.5">La corriente I entra siempre por el terminal de mayor potencial (+) y sale por el (-)</text>

                  <!-- SECCIÓN IZQUIERDA: Componente Resistencia y Bornes -->
                  <!-- Caída de Tensión V_AB (Flecha de sentido único opuesta a la corriente) -->
                  <text x="160" y="53" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="10">V<tspan baseline-shift="sub" font-size="70%">AB</tspan> = V<tspan baseline-shift="sub" font-size="70%">A</tspan> - V<tspan baseline-shift="sub" font-size="70%">B</tspan> &gt; 0 (Caída de tensión)</text>
                  <line x1="75" y1="62" x2="245" y2="62" stroke="#ef4444" stroke-width="1.8"/>
                  <polygon points="75,58 65,62 75,66" fill="#ef4444"/>

                  <!-- Terminal A (+) -->
                  <text x="50" y="86" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="11">A (+)</text>
                  <circle cx="50" cy="100" r="4.5" fill="#ef4444"/>

                  <!-- Cable conductor hacia R -->
                  <line x1="50" y1="100" x2="105" y2="100" stroke="#64748b" stroke-width="2"/>

                  <!-- Símbolo de Resistencia R (Zigzag) -->
                  <text x="160" y="80" text-anchor="middle" fill="#334155" font-weight="bold" font-size="12">R</text>
                  <path d="M 105 100 L 113 90 L 129 110 L 145 90 L 161 110 L 177 90 L 193 110 L 207 90 L 215 100" fill="none" stroke="#334155" stroke-width="2.4"/>

                  <!-- Cable conductor a Terminal B (-) -->
                  <line x1="215" y1="100" x2="270" y2="100" stroke="#64748b" stroke-width="2"/>
                  <circle cx="270" cy="100" r="4.5" fill="#3b82f6"/>
                  <text x="270" y="86" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="11">B (-)</text>

                  <!-- Flecha de Corriente I (hacia la derecha, entrando por +) -->
                  <line x1="60" y1="124" x2="120" y2="124" stroke="#2563eb" stroke-width="2.2"/>
                  <polygon points="120,120 128,124 120,128" fill="#2563eb"/>
                  <text x="90" y="139" text-anchor="middle" fill="#2563eb" font-weight="bold" font-size="10">I ➔ (Entra por +)</text>

                  <!-- SECCIÓN DERECHA: Fórmulas y Principios -->
                  <!-- Cuadro 1: Ley de Ohm con espaciado amplio -->
                  <rect x="310" y="48" width="245" height="52" rx="6" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
                  <text x="322" y="63" font-weight="bold" fill="#1e40af" font-size="9.5">Ley de Ohm (Convención Pasiva):</text>
                  <text x="322" y="78" font-weight="bold" fill="#2563eb" font-size="11">V<tspan baseline-shift="sub" font-size="70%">AB</tspan> = + I · R</text>
                  <text x="322" y="94" fill="#64748b" font-size="8">Signo (+): la corriente entra por el borne (+)</text>

                  <!-- Cuadro 2: Potencia disipada con espaciado amplio -->
                  <rect x="310" y="106" width="245" height="52" rx="6" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1"/>
                  <text x="322" y="121" font-weight="bold" fill="#166534" font-size="9.5">Potencia Disipada (Efecto Joule):</text>
                  <text x="322" y="136" font-weight="bold" fill="#059669" font-size="11">P = V · I = I² · R &gt; 0</text>
                  <text x="322" y="151" fill="#15803d" font-size="8">El componente siempre absorbe energía.</text>

                  <!-- Banner Inferior Mnemotécnico -->
                  <rect x="25" y="170" width="530" height="24" rx="4" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
                  <text x="290" y="186" text-anchor="middle" fill="#334155" font-weight="600" font-size="8.5">⚡ Regla estándar: La corriente ingresa siempre por el polo positivo (+) y egresa por el negativo (-)</text>
                </svg>
              </div>
            </div>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-5 mb-2">Asociación de Resistencias en Serie</h5>
            <p class="mb-2 text-xs sm:text-sm">
              Dos o más resistores se encuentran conectados en <strong>serie</strong> cuando están conectados secuencialmente compartiendo un único nodo exclusivo sin bifurcaciones. Por lo tanto, <strong>por todos ellos circula exactamente la misma corriente</strong>:
            </p>
            $$I_1 = I_2 = \\dots = I_n = I$$
            <p class="mb-2 text-xs sm:text-sm">
              Aplicando la Ley de Tensiones de Kirchhoff (LTK), la tensión total es la suma de las caídas parciales:
            </p>
            $$V_{total} = V_1 + V_2 + \\dots + V_n = I R_1 + I R_2 + \\dots + I R_n = I \\left( \\sum_{k=1}^n R_k \\right)$$
            <div class="p-3 my-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span class="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">Resistencia Equivalente Serie:</span>
              $$R_{eq,serie} = \\sum_{k=1}^n R_k = R_1 + R_2 + \\dots + R_n$$
              <p class="text-xs text-slate-500 mt-1"><strong>Propiedad fundamental:</strong> $R_{eq,serie}$ es siempre <em>estrictamente mayor</em> que la mayor de las resistencias individuales ($R_{eq} > \\max(R_i)$).</p>
            </div>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-5 mb-2">Asociación de Resistencias en Paralelo</h5>
            <p class="mb-2 text-xs sm:text-sm">
              Dos o más resistores se encuentran conectados en <strong>paralelo</strong> cuando sus terminales están unidos directamente a los mismos dos nodos de la red. En consecuencia, <strong>todos soportan exactamente la misma diferencia de potencial</strong>:
            </p>
            $$V_1 = V_2 = \\dots = V_n = V$$
            <p class="mb-2 text-xs sm:text-sm">
              Aplicando la Ley de Corrientes de Kirchhoff (LCK) en uno de los nodos comunes, la corriente total entrante es la suma de las corrientes de rama:
            </p>
            $$I_{total} = I_1 + I_2 + \\dots + I_n = \\frac{V}{R_1} + \\frac{V}{R_2} + \\dots + \\frac{V}{R_n} = V \\sum_{k=1}^n \\frac{1}{R_k} = V \\sum_{k=1}^n G_k$$
            <p class="text-xs text-slate-600 dark:text-slate-400 mb-2">
              donde $G_k = \\frac{1}{R_k}$ es la <strong>conductancia</strong> de la rama (medida en Siemens, $\\text{S} = \\Omega^{-1}$).
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2">
              <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span class="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">Caso General ($n$ ramas):</span>
                $$\\frac{1}{R_{eq,paralelo}} = \\sum_{k=1}^n \\frac{1}{R_k} \\implies R_{eq} = \\frac{1}{\\sum_{k=1}^n \\frac{1}{R_k}}$$
                <p class="text-xs text-slate-500 mt-1">En conductancias: $G_{eq} = G_1 + G_2 + \\dots + G_n$.</p>
              </div>

              <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span class="text-xs font-mono font-bold text-teal-600 dark:text-teal-400">Regla Rápida (2 ramas $R_1 \\parallel R_2$):</span>
                $$R_{eq} = \\frac{R_1 \\cdot R_2}{R_1 + R_2} \\quad \\text{(\"producto sobre la suma\")}$$
                <p class="text-xs text-slate-500 mt-1">Para $N$ resistencias iguales de valor $R$: $R_{eq} = \\frac{R}{N}$.</p>
              </div>
            </div>
            <p class="text-xs text-slate-500 mt-1"><strong>Propiedad fundamental:</strong> $R_{eq,paralelo}$ es siempre <em>estrictamente menor</em> que la menor de las resistencias individuales ($R_{eq} < \\min(R_i)$). Si una resistencia es mucho menor que la otra ($R_1 \\ll R_2$), entonces $R_1 \\parallel R_2 \\approx R_1$.</p>

            <!-- Gráfico SVG: Asociación de Resistores en Serie y en Paralelo -->
            <div class="my-4 p-4 rounded-2xl bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
              <h6 class="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2 text-center">
                📊 Gráfico: Asociación de Resistores en Serie vs en Paralelo
              </h6>
              <div class="overflow-x-auto flex justify-center py-1">
                <svg viewBox="0 0 680 235" class="w-full max-w-3xl h-auto font-sans text-xs select-none">
                  <!-- Panel 1: Conexión Serie -->
                  <g transform="translate(15, 8)">
                    <rect x="0" y="0" width="310" height="215" rx="10" fill="#3b82f6" fill-opacity="0.04" stroke="#3b82f6" stroke-opacity="0.4" stroke-width="1.2"/>
                    <text x="155" y="18" text-anchor="middle" font-weight="bold" fill="#2563eb" font-size="11">Asociación en Serie (Misma Corriente I)</text>
                    <text x="155" y="30" text-anchor="middle" fill="#64748b" font-size="8.5">Los resistores comparten la misma corriente I en un único lazo</text>

                    <!-- Terminal A (+) -->
                    <circle cx="25" cy="72" r="4" fill="#ef4444"/>
                    <text x="25" y="60" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="10.5">A (+)</text>

                    <!-- Corriente I -->
                    <line x1="28" y1="88" x2="54" y2="88" stroke="#2563eb" stroke-width="1.8"/>
                    <polygon points="54,85 60,88 54,91" fill="#2563eb"/>
                    <text x="41" y="99" text-anchor="middle" fill="#2563eb" font-weight="bold" font-size="8.5">I ➔</text>

                    <!-- Conector y R1 -->
                    <line x1="25" y1="72" x2="52" y2="72" stroke="#64748b" stroke-width="2"/>
                    <path d="M 52 72 L 57 64 L 65 80 L 73 64 L 81 80 L 89 64 L 94 72" stroke="#334155" stroke-width="2" fill="none"/>
                    <text x="73" y="58" text-anchor="middle" fill="#334155" font-weight="bold" font-size="10.5">R₁</text>

                    <!-- Conector intermedio y R2 -->
                    <line x1="94" y1="72" x2="122" y2="72" stroke="#64748b" stroke-width="2"/>
                    <path d="M 122 72 L 127 64 L 135 80 L 143 64 L 151 80 L 159 64 L 164 72" stroke="#334155" stroke-width="2" fill="none"/>
                    <text x="143" y="58" text-anchor="middle" fill="#334155" font-weight="bold" font-size="10.5">R₂</text>

                    <!-- Conector intermedio y R3 -->
                    <line x1="164" y1="72" x2="192" y2="72" stroke="#64748b" stroke-width="2"/>
                    <path d="M 192 72 L 197 64 L 205 80 L 213 64 L 221 80 L 229 64 L 234 72" stroke="#334155" stroke-width="2" fill="none"/>
                    <text x="213" y="58" text-anchor="middle" fill="#334155" font-weight="bold" font-size="10.5">R₃</text>

                    <!-- Conector a Terminal B (-) -->
                    <line x1="234" y1="72" x2="285" y2="72" stroke="#64748b" stroke-width="2"/>
                    <circle cx="285" cy="72" r="4" fill="#3b82f6"/>
                    <text x="285" y="60" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="10.5">B (-)</text>

                    <!-- Cotas de tensiones parciales V1, V2, V3 (sentido único del borne - al +) -->
                    <path d="M 52 44 L 94 44" stroke="#059669" stroke-width="1.2" fill="none"/>
                    <polygon points="56,41 50,44 56,47" fill="#059669"/>
                    <text x="73" y="40" text-anchor="middle" fill="#059669" font-weight="bold" font-size="8.5">V₁ = I·R₁</text>

                    <path d="M 122 44 L 164 44" stroke="#059669" stroke-width="1.2" fill="none"/>
                    <polygon points="126,41 120,44 126,47" fill="#059669"/>
                    <text x="143" y="40" text-anchor="middle" fill="#059669" font-weight="bold" font-size="8.5">V₂ = I·R₂</text>

                    <path d="M 192 44 L 234 44" stroke="#059669" stroke-width="1.2" fill="none"/>
                    <polygon points="196,41 190,44 196,47" fill="#059669"/>
                    <text x="213" y="40" text-anchor="middle" fill="#059669" font-weight="bold" font-size="8.5">V₃ = I·R₃</text>

                    <!-- Cota total de tensión V_total (sentido único de B(-) hacia A(+)) -->
                    <path d="M 27 106 L 283 106" stroke="#ef4444" stroke-width="1.3" fill="none"/>
                    <polygon points="32,103 26,106 32,109" fill="#ef4444"/>
                    <text x="155" y="102" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="9">V<tspan baseline-shift="sub" font-size="70%">total</tspan> = V₁ + V₂ + V₃</text>

                    <!-- Circuito equivalente simplificado -->
                    <line x1="25" y1="135" x2="105" y2="135" stroke="#64748b" stroke-width="1.8"/>
                    <circle cx="25" cy="135" r="3.5" fill="#ef4444"/>
                    <path d="M 105 135 L 112 127 L 122 143 L 132 127 L 142 143 L 152 127 L 162 143 L 169 135" stroke="#2563eb" stroke-width="2.2" fill="none"/>
                    <line x1="169" y1="135" x2="285" y2="135" stroke="#64748b" stroke-width="1.8"/>
                    <circle cx="285" cy="135" r="3.5" fill="#3b82f6"/>
                    <text x="137" y="122" text-anchor="middle" fill="#2563eb" font-weight="bold" font-size="10">R<tspan baseline-shift="sub" font-size="70%">eq</tspan> = R₁ + R₂ + R₃</text>

                    <!-- Cuadro resumen de propiedad -->
                    <rect x="15" y="158" width="280" height="44" rx="6" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
                    <text x="155" y="174" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="9.5">R<tspan baseline-shift="sub" font-size="70%">eq</tspan> = R₁ + R₂ + ... + Rₙ = Σ Rₖ</text>
                    <text x="155" y="189" text-anchor="middle" fill="#047857" font-size="8.5">Propiedad: R<tspan baseline-shift="sub" font-size="70%">eq</tspan> &gt; max(Rᵢ) — La resistencia neta aumenta</text>
                  </g>

                  <!-- Panel 2: Conexión Paralelo -->
                  <g transform="translate(350, 8)">
                    <rect x="0" y="0" width="315" height="215" rx="10" fill="#10b981" fill-opacity="0.04" stroke="#10b981" stroke-opacity="0.4" stroke-width="1.2"/>
                    <text x="157" y="18" text-anchor="middle" font-weight="bold" fill="#059669" font-size="11">Asociación en Paralelo (Misma Tensión V)</text>
                    <text x="157" y="30" text-anchor="middle" fill="#64748b" font-size="8.5">Misma tensión V entre bornes | I<tspan baseline-shift="sub" font-size="70%">total</tspan> = I₁ + I₂ + I₃</text>

                    <!-- Terminal A (+) y Riel superior -->
                    <circle cx="25" cy="52" r="4" fill="#ef4444"/>
                    <text x="14" y="48" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="10">A(+)</text>
                    <line x1="25" y1="52" x2="280" y2="52" stroke="#64748b" stroke-width="2"/>

                    <!-- Corriente total entrante -->
                    <line x1="30" y1="40" x2="65" y2="40" stroke="#059669" stroke-width="2"/>
                    <polygon points="65,37 72,40 65,43" fill="#059669"/>
                    <text x="48" y="34" text-anchor="middle" fill="#059669" font-weight="bold" font-size="9">I<tspan baseline-shift="sub" font-size="70%">total</tspan> ➔</text>

                    <!-- Terminal B (-) y Riel inferior -->
                    <circle cx="25" cy="136" r="4" fill="#3b82f6"/>
                    <text x="14" y="142" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="10">B(-)</text>
                    <line x1="25" y1="136" x2="280" y2="136" stroke="#64748b" stroke-width="2"/>

                    <!-- Cota de Tensión Común V (sentido único de B(-) hacia A(+)) -->
                    <line x1="36" y1="60" x2="36" y2="128" stroke="#ef4444" stroke-width="1.3"/>
                    <polygon points="33,65 36,59 39,65" fill="#ef4444"/>
                    <text x="46" y="96" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="10">V</text>

                    <!-- Rama 1: R1 -->
                    <circle cx="95" cy="52" r="2.5" fill="#334155"/>
                    <!-- Indicador vectorial de corriente I1 -->
                    <line x1="80" y1="60" x2="80" y2="75" stroke="#0284c7" stroke-width="1.8"/>
                    <polygon points="77,75 83,75 80,81" fill="#0284c7"/>
                    <text x="73" y="70" text-anchor="end" fill="#0284c7" font-weight="bold" font-size="9.5">I₁</text>
                    <!-- Conductor y zigzag R1 -->
                    <line x1="95" y1="52" x2="95" y2="68" stroke="#64748b" stroke-width="1.8"/>
                    <path d="M 95 68 L 89 74 L 101 82 L 89 90 L 101 98 L 89 106 L 95 112" stroke="#334155" stroke-width="2" fill="none"/>
                    <line x1="95" y1="112" x2="95" y2="136" stroke="#64748b" stroke-width="1.8"/>
                    <circle cx="95" cy="136" r="2.5" fill="#334155"/>
                    <text x="110" y="92" text-anchor="start" fill="#334155" font-weight="bold" font-size="10.5">R₁</text>

                    <!-- Rama 2: R2 -->
                    <circle cx="170" cy="52" r="2.5" fill="#334155"/>
                    <!-- Indicador vectorial de corriente I2 -->
                    <line x1="155" y1="60" x2="155" y2="75" stroke="#0284c7" stroke-width="1.8"/>
                    <polygon points="152,75 158,75 155,81" fill="#0284c7"/>
                    <text x="148" y="70" text-anchor="end" fill="#0284c7" font-weight="bold" font-size="9.5">I₂</text>
                    <!-- Conductor y zigzag R2 -->
                    <line x1="170" y1="52" x2="170" y2="68" stroke="#64748b" stroke-width="1.8"/>
                    <path d="M 170 68 L 164 74 L 176 82 L 164 90 L 176 98 L 164 106 L 170 112" stroke="#334155" stroke-width="2" fill="none"/>
                    <line x1="170" y1="112" x2="170" y2="136" stroke="#64748b" stroke-width="1.8"/>
                    <circle cx="170" cy="136" r="2.5" fill="#334155"/>
                    <text x="185" y="92" text-anchor="start" fill="#334155" font-weight="bold" font-size="10.5">R₂</text>

                    <!-- Rama 3: R3 -->
                    <circle cx="245" cy="52" r="2.5" fill="#334155"/>
                    <!-- Indicador vectorial de corriente I3 -->
                    <line x1="230" y1="60" x2="230" y2="75" stroke="#0284c7" stroke-width="1.8"/>
                    <polygon points="227,75 233,75 230,81" fill="#0284c7"/>
                    <text x="223" y="70" text-anchor="end" fill="#0284c7" font-weight="bold" font-size="9.5">I₃</text>
                    <!-- Conductor y zigzag R3 -->
                    <line x1="245" y1="52" x2="245" y2="68" stroke="#64748b" stroke-width="1.8"/>
                    <path d="M 245 68 L 239 74 L 251 82 L 239 90 L 251 98 L 239 106 L 245 112" stroke="#334155" stroke-width="2" fill="none"/>
                    <line x1="245" y1="112" x2="245" y2="136" stroke="#64748b" stroke-width="1.8"/>
                    <circle cx="245" cy="136" r="2.5" fill="#334155"/>
                    <text x="260" y="92" text-anchor="start" fill="#334155" font-weight="bold" font-size="10.5">R₃</text>

                    <!-- Regla de 2 ramas y equivalente -->
                    <rect x="15" y="148" width="285" height="58" rx="6" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1"/>
                    <text x="157" y="165" text-anchor="middle" fill="#065f46" font-weight="bold" font-size="9.5">1/R<tspan baseline-shift="sub" font-size="70%">eq</tspan> = 1/R₁ + 1/R₂ + ... + 1/Rₙ</text>
                    <text x="157" y="182" text-anchor="middle" fill="#047857" font-size="8.5">2 Ramas: R<tspan baseline-shift="sub" font-size="70%">eq</tspan> = (R₁ · R₂) / (R₁ + R₂) ("producto / suma")</text>
                    <text x="157" y="198" text-anchor="middle" fill="#065f46" font-size="8">Propiedad: R<tspan baseline-shift="sub" font-size="70%">eq</tspan> &lt; min(Rᵢ) — La resistencia neta disminuye</text>
                  </g>
                </svg>
              </div>
            </div>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-5 mb-2">Transformación Estrella - Triángulo (Teorema de Kennelly)</h5>
            <p class="mb-2 text-xs sm:text-sm">
              Cuando una red resistiva presenta estructuras en puente (como el Puente de Wheatstone desbalanceado) o configuraciones en malla cerrada, ningún par de resistores se encuentra estrictamente en serie ni en paralelo. El <strong>Teorema de Kennelly</strong> permite convertir una conexión en <strong>Triángulo (Δ)</strong> formada por $R_{AB}, R_{BC}, R_{CA}$ entre tres nodos $A, B, C$ en una conexión equivalente en <strong>Estrella (Y)</strong> con resistores $R_A, R_B, R_C$ conectados a un nodo neutro común central (o viceversa), preservando las tensiones y corrientes vistas desde los terminales externos.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2">
              <div class="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-950 dark:text-purple-200 text-xs">
                <span class="font-bold text-xs uppercase tracking-wider block mb-1">📐 Transformación Delta a Estrella (Δ ➔ Y)</span>
                <p class="text-slate-600 dark:text-slate-400 mb-1">Para obtener las ramas de la estrella conectadas a los terminales $A, B, C$:</p>
                $$R_A = \\frac{R_{AB} \\cdot R_{CA}}{R_{AB} + R_{BC} + R_{CA}}$$
                $$R_B = \\frac{R_{AB} \\cdot R_{BC}}{R_{AB} + R_{BC} + R_{CA}}$$
                $$R_C = \\frac{R_{BC} \\cdot R_{CA}}{R_{AB} + R_{BC} + R_{CA}}$$
                <p class="text-[11px] text-slate-500 mt-1"><strong>Regla mnemotécnica:</strong> Cada resistencia de la estrella es el <em>producto de las dos resistencias adyacentes</em> del triángulo dividido por la <em>suma de las tres resistencias</em> del triángulo.</p>
              </div>

              <div class="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-950 dark:text-purple-200 text-xs">
                <span class="font-bold text-xs uppercase tracking-wider block mb-1">🔄 Transformación Estrella a Delta (Y ➔ Δ)</span>
                <p class="text-slate-600 dark:text-slate-400 mb-1">Para obtener las ramas del triángulo entre pares de terminales:</p>
                $$R_{AB} = \\frac{R_A R_B + R_B R_C + R_C R_A}{R_C}$$
                $$R_{BC} = \\frac{R_A R_B + R_B R_C + R_C R_A}{R_A}$$
                $$R_{CA} = \\frac{R_A R_B + R_B R_C + R_C R_A}{R_B}$$
                <p class="text-[11px] text-slate-500 mt-1"><strong>Regla mnemotécnica:</strong> Es la <em>suma de los productos cruzados tomados de a pares</em> dividida por la resistencia de la <em>rama opuesta</em> de la estrella.</p>
              </div>
            </div>

            <div class="p-3 my-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
              <strong>Caso Particular Simétrico ($R_{AB} = R_{BC} = R_{CA} = R_{\\Delta}$):</strong>
              $$\\mathbf{R_Y = \\frac{R_{\\Delta}}{3}} \\quad \\Longleftrightarrow \\quad \\mathbf{R_{\\Delta} = 3 \\cdot R_Y}$$
              <span class="text-slate-500">La resistencia equivalente de cada rama de la estrella es exactamente un tercio del valor de cada rama del triángulo.</span>
            </div>

            <!-- Gráfico SVG: Transformación de Kennelly Delta <-> Estrella -->
            <div class="my-4 p-4 rounded-2xl bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
              <h6 class="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2 text-center">
                📊 Gráfico: Teorema de Kennelly — Equivalencia Triángulo (Δ) y Estrella (Y)
              </h6>
              <div class="overflow-x-auto flex justify-center py-1">
                <svg viewBox="0 0 760 235" class="w-full max-w-4xl h-auto font-sans text-xs select-none">
                  <!-- Lado Izquierdo: Configuración Triángulo (Delta) -->
                  <g transform="translate(10, 8)">
                    <rect x="0" y="0" width="255" height="218" rx="10" fill="#a855f7" fill-opacity="0.04" stroke="#a855f7" stroke-opacity="0.35" stroke-width="1.2"/>
                    <text x="127" y="18" text-anchor="middle" font-weight="bold" fill="#7e22ce" font-size="11">Conexión Triángulo (Δ)</text>
                    <text x="127" y="30" text-anchor="middle" fill="#64748b" font-size="8.5">Ramas externas entre nodos A, B y C</text>

                    <!-- Lado A-B: R_AB (Rotado a 128.8° a lo largo de la rama) -->
                    <g transform="translate(87, 110) rotate(128.8)">
                      <line x1="-71.8" y1="0" x2="-26" y2="0" stroke="#64748b" stroke-width="2"/>
                      <path d="M -26 0 L -21 -7 L -13 7 L -5 -7 L 3 7 L 11 -7 L 19 7 L 26 0" stroke="#7e22ce" stroke-width="2.2" fill="none"/>
                      <line x1="26" y1="0" x2="71.8" y2="0" stroke="#64748b" stroke-width="2"/>
                    </g>
                    <rect x="34" y="99" width="38" height="20" rx="4" fill="#f3e8ff" stroke="#d8b4fe" stroke-width="1"/>
                    <text x="53" y="113" text-anchor="middle" fill="#6b21a8" font-weight="bold" font-size="10">R<tspan baseline-shift="sub" font-size="70%">AB</tspan></text>

                    <!-- Lado A-C: R_CA (Rotado a 51.2° a lo largo de la rama) -->
                    <g transform="translate(177, 110) rotate(51.2)">
                      <line x1="-71.8" y1="0" x2="-26" y2="0" stroke="#64748b" stroke-width="2"/>
                      <path d="M -26 0 L -21 -7 L -13 7 L -5 -7 L 3 7 L 11 -7 L 19 7 L 26 0" stroke="#7e22ce" stroke-width="2.2" fill="none"/>
                      <line x1="26" y1="0" x2="71.8" y2="0" stroke="#64748b" stroke-width="2"/>
                    </g>
                    <rect x="193" y="99" width="38" height="20" rx="4" fill="#f3e8ff" stroke="#d8b4fe" stroke-width="1"/>
                    <text x="212" y="113" text-anchor="middle" fill="#6b21a8" font-weight="bold" font-size="10">R<tspan baseline-shift="sub" font-size="70%">CA</tspan></text>

                    <!-- Lado B-C: R_BC (Base horizontal) -->
                    <line x1="42" y1="166" x2="104" y2="166" stroke="#64748b" stroke-width="2"/>
                    <path d="M 104 166 L 109 159 L 117 173 L 125 159 L 133 173 L 141 159 L 149 173 L 156 166" stroke="#7e22ce" stroke-width="2.2" fill="none"/>
                    <line x1="156" y1="166" x2="222" y2="166" stroke="#64748b" stroke-width="2"/>
                    <rect x="113" y="177" width="38" height="20" rx="4" fill="#f3e8ff" stroke="#d8b4fe" stroke-width="1"/>
                    <text x="132" y="191" text-anchor="middle" fill="#6b21a8" font-weight="bold" font-size="10">R<tspan baseline-shift="sub" font-size="70%">BC</tspan></text>

                    <!-- Nodo A (Arriba) -->
                    <circle cx="132" cy="54" r="5" fill="#ef4444"/>
                    <text x="132" y="44" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="10.5">Nodo A</text>

                    <!-- Nodo B (Abajo Izquierda) -->
                    <circle cx="42" cy="166" r="5" fill="#3b82f6"/>
                    <text x="42" y="184" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="10.5">Nodo B</text>

                    <!-- Nodo C (Abajo Derecha) -->
                    <circle cx="222" cy="166" r="5" fill="#10b981"/>
                    <text x="222" y="184" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="10.5">Nodo C</text>
                  </g>

                  <!-- Panel Central: Conversión Bidireccional con Fórmulas Claras -->
                  <g transform="translate(272, 8)">
                    <rect x="0" y="0" width="216" height="218" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
                    <text x="108" y="16" text-anchor="middle" font-weight="bold" fill="#334155" font-size="10.5">Fórmulas de Transformación</text>

                    <!-- Cuadro 1: Delta a Estrella (Δ -> Y) -->
                    <rect x="6" y="22" width="204" height="66" rx="6" fill="#f3e8ff" stroke="#d8b4fe" stroke-width="1"/>
                    <text x="108" y="34" text-anchor="middle" font-weight="bold" fill="#6b21a8" font-size="9.5">Δ ➔ Y  (Ejemplo: Rama R<tspan baseline-shift="sub" font-size="70%">A</tspan>)</text>
                    <text x="14" y="55" text-anchor="start" font-weight="bold" fill="#581c87" font-size="10">R<tspan baseline-shift="sub" font-size="70%">A</tspan> =</text>
                    <!-- Numerador -->
                    <text x="115" y="48" text-anchor="middle" font-weight="bold" fill="#6b21a8" font-size="9.5">R<tspan baseline-shift="sub" font-size="70%">AB</tspan> · R<tspan baseline-shift="sub" font-size="70%">CA</tspan></text>
                    <!-- Barra de fracción -->
                    <line x1="42" y1="52" x2="194" y2="52" stroke="#7e22ce" stroke-width="1.3"/>
                    <!-- Denominador -->
                    <text x="115" y="64" text-anchor="middle" font-weight="bold" fill="#6b21a8" font-size="9">R<tspan baseline-shift="sub" font-size="70%">AB</tspan> + R<tspan baseline-shift="sub" font-size="70%">BC</tspan> + R<tspan baseline-shift="sub" font-size="70%">CA</tspan></text>
                    <text x="108" y="79" text-anchor="middle" fill="#7e22ce" font-size="7.5" font-style="italic">Producto adyacentes / Suma de las 3</text>

                    <!-- Cuadro 2: Estrella a Delta (Y -> Δ) -->
                    <rect x="6" y="93" width="204" height="66" rx="6" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
                    <text x="108" y="105" text-anchor="middle" font-weight="bold" fill="#1d4ed8" font-size="9.5">Y ➔ Δ  (Ejemplo: Lado R<tspan baseline-shift="sub" font-size="70%">AB</tspan>)</text>
                    <text x="14" y="126" text-anchor="start" font-weight="bold" fill="#1e3a8a" font-size="10">R<tspan baseline-shift="sub" font-size="70%">AB</tspan> =</text>
                    <!-- Numerador -->
                    <text x="122" y="119" text-anchor="middle" font-weight="bold" fill="#1d4ed8" font-size="8">R<tspan baseline-shift="sub" font-size="70%">A</tspan>R<tspan baseline-shift="sub" font-size="70%">B</tspan> + R<tspan baseline-shift="sub" font-size="70%">B</tspan>R<tspan baseline-shift="sub" font-size="70%">C</tspan> + R<tspan baseline-shift="sub" font-size="70%">C</tspan>R<tspan baseline-shift="sub" font-size="70%">A</tspan></text>
                    <!-- Barra de fracción -->
                    <line x1="46" y1="123" x2="198" y2="123" stroke="#2563eb" stroke-width="1.3"/>
                    <!-- Denominador -->
                    <text x="122" y="135" text-anchor="middle" font-weight="bold" fill="#1d4ed8" font-size="8.5">R<tspan baseline-shift="sub" font-size="70%">C</tspan>  (rama opuesta a AB)</text>
                    <text x="108" y="150" text-anchor="middle" fill="#2563eb" font-size="7.5" font-style="italic">Suma prod. pares / Rama opuesta</text>

                    <!-- Cuadro 3: Caso Simétrico -->
                    <rect x="6" y="163" width="204" height="50" rx="6" fill="#fef3c7" stroke="#fde68a" stroke-width="1"/>
                    <text x="108" y="176" text-anchor="middle" font-weight="bold" fill="#92400e" font-size="9">Caso Simétrico (Ramas Iguales)</text>
                    <text x="108" y="191" text-anchor="middle" font-weight="bold" fill="#b45309" font-size="10">R<tspan baseline-shift="sub" font-size="70%">Y</tspan> = R<tspan baseline-shift="sub" font-size="70%">Δ</tspan> / 3  ⟺  R<tspan baseline-shift="sub" font-size="70%">Δ</tspan> = 3 · R<tspan baseline-shift="sub" font-size="70%">Y</tspan></text>
                    <text x="108" y="206" text-anchor="middle" fill="#78350f" font-size="7.5">Cada rama de estrella vale 1/3 del triángulo</text>
                  </g>

                  <!-- Lado Derecho: Configuración Estrella (Wye) -->
                  <g transform="translate(495, 8)">
                    <rect x="0" y="0" width="255" height="218" rx="10" fill="#2563eb" fill-opacity="0.04" stroke="#2563eb" stroke-opacity="0.35" stroke-width="1.2"/>
                    <text x="127" y="18" text-anchor="middle" font-weight="bold" fill="#1d4ed8" font-size="11">Conexión Estrella (Y)</text>
                    <text x="127" y="30" text-anchor="middle" fill="#64748b" font-size="8.5">Ramas unidas al nodo neutro central N</text>

                    <!-- Rama A a N: R_A (Vertical) -->
                    <line x1="132" y1="54" x2="132" y2="70" stroke="#64748b" stroke-width="2"/>
                    <path d="M 132 70 L 126 76 L 138 84 L 126 92 L 138 100 L 126 106 L 132 112" stroke="#2563eb" stroke-width="2.2" fill="none"/>
                    <line x1="132" y1="112" x2="132" y2="126" stroke="#64748b" stroke-width="2"/>
                    <rect x="144" y="81" width="30" height="20" rx="4" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
                    <text x="159" y="95" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="10">R<tspan baseline-shift="sub" font-size="70%">A</tspan></text>

                    <!-- Rama B a N: R_B (Rotada a 156.0° a lo largo de la rama) -->
                    <g transform="translate(87, 146) rotate(156.0)">
                      <line x1="-49.2" y1="0" x2="-22" y2="0" stroke="#64748b" stroke-width="2"/>
                      <path d="M -22 0 L -17 -6 L -10 6 L -3 -6 L 4 6 L 11 -6 L 17 6 L 22 0" stroke="#2563eb" stroke-width="2.2" fill="none"/>
                      <line x1="22" y1="0" x2="49.2" y2="0" stroke="#64748b" stroke-width="2"/>
                    </g>
                    <rect x="72" y="159" width="30" height="20" rx="4" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
                    <text x="87" y="173" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="10">R<tspan baseline-shift="sub" font-size="70%">B</tspan></text>

                    <!-- Rama C a N: R_C (Rotada a 24.0° a lo largo de la rama) -->
                    <g transform="translate(177, 146) rotate(24.0)">
                      <line x1="-49.2" y1="0" x2="-22" y2="0" stroke="#64748b" stroke-width="2"/>
                      <path d="M -22 0 L -17 -6 L -10 6 L -3 -6 L 4 6 L 11 -6 L 17 6 L 22 0" stroke="#2563eb" stroke-width="2.2" fill="none"/>
                      <line x1="22" y1="0" x2="49.2" y2="0" stroke="#64748b" stroke-width="2"/>
                    </g>
                    <rect x="162" y="159" width="30" height="20" rx="4" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
                    <text x="177" y="173" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="10">R<tspan baseline-shift="sub" font-size="70%">C</tspan></text>

                    <!-- Nodo Central Neutro N -->
                    <circle cx="132" cy="126" r="4.5" fill="#64748b"/>
                    <text x="144" y="124" text-anchor="start" fill="#475569" font-weight="bold" font-size="9.5">N (Neutro)</text>

                    <!-- Nodo A (Arriba) -->
                    <circle cx="132" cy="54" r="5" fill="#ef4444"/>
                    <text x="132" y="44" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="10.5">Nodo A</text>

                    <!-- Nodo B (Abajo Izquierda) -->
                    <circle cx="42" cy="166" r="5" fill="#3b82f6"/>
                    <text x="42" y="184" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="10.5">Nodo B</text>

                    <!-- Nodo C (Abajo Derecha) -->
                    <circle cx="222" cy="166" r="5" fill="#10b981"/>
                    <text x="222" y="184" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="10.5">Nodo C</text>
                  </g>
                </svg>
              </div>
            </div>
          `
        },
        {
          id: 'e1-u1-divisores-tension-corriente',
          titulo: '1.2 Divisores de Tensión y Divisores de Corriente: Deducción y Efecto de Carga',
          contenido: `
            <p class="mb-3">Los divisores de tensión y corriente son configuraciones circuitales elementales de uso ubicuo en polarización de transistores, atenuadores, redes de muestreo y adaptación de señales.</p>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">1. Divisor de Tensión Resistivo</h5>
            <p class="mb-2 text-xs sm:text-sm">
              Considérese una serie de $n$ resistencias conectadas a una tensión total de entrada $V_{in}$. Como la corriente circulante por la malla es:
            </p>
            $$I = \\frac{V_{in}}{R_{eq}} = \\frac{V_{in}}{\\sum_{k=1}^n R_k}$$
            <p class="mb-2 text-xs sm:text-sm">
              La caída de tensión en cualquier resistor individual $R_x$ se deduce multiplicando dicha corriente por $R_x$:
            </p>
            $$V_{Rx} = I \\cdot R_x = V_{in} \\cdot \\frac{R_x}{\\sum_{k=1}^n R_k}$$

            <div class="p-3.5 my-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-950 dark:text-blue-200">
              <h5 class="font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <span>📐</span> Caso Canónico: Divisor de 2 Resistencias ($R_1$ y $R_2$)
              </h5>
              <p class="text-xs">Midiendo la tensión de salida $V_{out}$ sobre la resistencia inferior $R_2$ en circuito abierto (sin carga conectada):</p>
              $$\\mathbf{V_{out,vacio} = V_{in} \\cdot \\frac{R_2}{R_1 + R_2}}$$
              <p class="text-xs mt-1">Análogamente, la caída de tensión sobre la resistencia superior $R_1$ es:</p>
              $$V_{R1} = V_{in} \\cdot \\frac{R_1}{R_1 + R_2} = V_{in} - V_{out}$$
            </div>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Efecto de Carga (Loading Effect) en el Divisor de Tensión</h5>
            <p class="mb-2 text-xs sm:text-sm">
              En aplicaciones prácticas (como alimentar la base de un transistor BJT o conectar un instrumento de medición), se conecta una carga resistiva $R_L$ en paralelo con $R_2$. La resistencia efectiva del tramo inferior se reduce a $R_2' = R_2 \\parallel R_L$:
            </p>
            $$R_2' = R_2 \\parallel R_L = \\frac{R_2 \\cdot R_L}{R_2 + R_L} < R_2$$
            <p class="mb-2 text-xs sm:text-sm">
              La nueva tensión real bajo carga es estrictamente menor que la de circuito abierto:
            </p>
            $$V_{out,cargado} = V_{in} \\cdot \\frac{R_2 \\parallel R_L}{R_1 + (R_2 \\parallel R_L)} < V_{out,vacio}$$

            <div class="p-3.5 my-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-950 dark:text-amber-200 text-xs">
              <span class="font-bold uppercase tracking-wider block mb-1">⚠️ Criterio de Divisor Rígido (Carga Despreciable)</span>
              Para que el divisor de tensión no se altere significativamente ante la conexión de la carga ($V_{out,cargado} \\approx V_{out,vacio}$ con error menor al $10\\%$), debe verificarse la condición de diseño:
              $$\\mathbf{R_L \\gg R_2} \\quad (R_L \\ge 10 \\cdot R_2) \\quad \\Longleftrightarrow \\quad I_{\\text{divisor}} \\ge 10 \\cdot I_{\\text{carga}}$$
              <p class="mt-1 text-slate-600 dark:text-slate-400">
                Este criterio es fundamental en el diseño de la polarización por divisor resistivo del transistor BJT (estudiado en la Unidad 3), donde la corriente de base $I_B$ no debe alterar la tensión de reposo fijada en la base.
              </p>
            </div>

            <!-- Gráfico SVG: Divisor de Tensión en Vacío vs con Carga -->
            <div class="my-4 p-4 rounded-2xl bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
              <h6 class="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2 text-center">
                📊 Gráfico: Divisor de Tensión — En Vacío vs Efecto de Carga (Loading Effect)
              </h6>
              <div class="overflow-x-auto flex justify-center py-1">
                <svg viewBox="0 0 680 230" class="w-full max-w-3xl h-auto font-sans text-xs select-none">
                  <!-- Panel Izquierdo: Divisor en Vacío -->
                  <g transform="translate(15, 8)">
                    <rect x="0" y="0" width="310" height="214" rx="10" fill="#3b82f6" fill-opacity="0.04" stroke="#3b82f6" stroke-opacity="0.4" stroke-width="1.2"/>
                    <text x="155" y="18" text-anchor="middle" font-weight="bold" fill="#2563eb" font-size="11">Divisor de Tensión en Vacío</text>
                    <text x="155" y="30" text-anchor="middle" fill="#64748b" font-size="8.5">Sin carga conectada: I<tspan baseline-shift="sub" font-size="70%">L</tspan> = 0 | Corriente pura de rama</text>

                    <!-- Borne Vin (+) y conductor superior -->
                    <circle cx="30" cy="50" r="4" fill="#ef4444"/>
                    <text x="30" y="40" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="10">V<tspan baseline-shift="sub" font-size="70%">in</tspan> (+)</text>
                    <line x1="30" y1="50" x2="120" y2="50" stroke="#64748b" stroke-width="2"/>

                    <!-- Flecha corriente Vin -->
                    <line x1="42" y1="62" x2="75" y2="62" stroke="#2563eb" stroke-width="1.8"/>
                    <polygon points="75,59 81,62 75,65" fill="#2563eb"/>
                    <text x="58" y="74" text-anchor="middle" fill="#2563eb" font-weight="bold" font-size="8.5">I ➔</text>

                    <!-- Resistor R1 (vertical) -->
                    <line x1="120" y1="50" x2="120" y2="60" stroke="#64748b" stroke-width="2"/>
                    <path d="M 120 60 L 114 66 L 126 74 L 114 82 L 126 90 L 114 96 L 120 100" stroke="#334155" stroke-width="2.2" fill="none"/>
                    <line x1="120" y1="100" x2="120" y2="104" stroke="#64748b" stroke-width="2"/>
                    <text x="136" y="80" text-anchor="start" fill="#334155" font-weight="bold" font-size="10.5">R₁</text>

                    <!-- Nodo intermedio -->
                    <circle cx="120" cy="104" r="3.5" fill="#334155"/>

                    <!-- Resistor R2 (vertical) -->
                    <line x1="120" y1="104" x2="120" y2="108" stroke="#64748b" stroke-width="2"/>
                    <path d="M 120 108 L 114 114 L 126 122 L 114 130 L 126 138 L 114 144 L 120 148" stroke="#334155" stroke-width="2.2" fill="none"/>
                    <line x1="120" y1="148" x2="120" y2="152" stroke="#64748b" stroke-width="2"/>
                    <text x="136" y="128" text-anchor="start" fill="#334155" font-weight="bold" font-size="10.5">R₂</text>

                    <!-- Riel inferior GND -->
                    <line x1="30" y1="152" x2="255" y2="152" stroke="#64748b" stroke-width="2"/>
                    <circle cx="30" cy="152" r="4" fill="#3b82f6"/>
                    <text x="30" y="164" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="9.5">GND (-)</text>

                    <!-- Terminales de salida A y B en vacío -->
                    <line x1="120" y1="104" x2="255" y2="104" stroke="#64748b" stroke-width="1.8"/>
                    <circle cx="255" cy="104" r="4" fill="#ef4444"/>
                    <text x="267" y="108" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="10">A (+)</text>

                    <circle cx="255" cy="152" r="4" fill="#3b82f6"/>
                    <text x="267" y="156" text-anchor="start" fill="#3b82f6" font-weight="bold" font-size="10">B (-)</text>

                    <!-- Cota Vout vacío (sentido único de B(-) hacia A(+)) -->
                    <line x1="215" y1="110" x2="215" y2="146" stroke="#059669" stroke-width="1.4"/>
                    <polygon points="212,115 215,109 218,115" fill="#059669"/>
                    <text x="205" y="132" text-anchor="end" fill="#059669" font-weight="bold" font-size="9">V<tspan baseline-shift="sub" font-size="70%">out,vacío</tspan></text>

                    <!-- Cuadro fórmula -->
                    <rect x="15" y="164" width="280" height="44" rx="6" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
                    <text x="155" y="179" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="9.5">V<tspan baseline-shift="sub" font-size="70%">out</tspan> = V<tspan baseline-shift="sub" font-size="70%">in</tspan> · R₂ / (R₁ + R₂)</text>
                    <text x="155" y="197" text-anchor="middle" fill="#64748b" font-size="8.5">I<tspan baseline-shift="sub" font-size="70%">vacío</tspan> = V<tspan baseline-shift="sub" font-size="70%">in</tspan> / (R₁ + R₂)</text>
                  </g>

                  <!-- Panel Derecho: Divisor con Carga (Efecto de Carga) -->
                  <g transform="translate(350, 8)">
                    <rect x="0" y="0" width="315" height="214" rx="10" fill="#f59e0b" fill-opacity="0.04" stroke="#f59e0b" stroke-opacity="0.4" stroke-width="1.2"/>
                    <text x="157" y="18" text-anchor="middle" font-weight="bold" fill="#b45309" font-size="11">Efecto de Carga (Loading Effect)</text>
                    <text x="157" y="30" text-anchor="middle" fill="#64748b" font-size="8.5">Carga R<tspan baseline-shift="sub" font-size="70%">L</tspan> conectada: R₂' = R₂ ∥ R<tspan baseline-shift="sub" font-size="70%">L</tspan> &lt; R₂</text>

                    <!-- Borne Vin (+) -->
                    <circle cx="25" cy="50" r="4" fill="#ef4444"/>
                    <text x="25" y="40" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="10">V<tspan baseline-shift="sub" font-size="70%">in</tspan> (+)</text>
                    <line x1="25" y1="50" x2="95" y2="50" stroke="#64748b" stroke-width="2"/>

                    <!-- Resistor R1 -->
                    <line x1="95" y1="50" x2="95" y2="60" stroke="#64748b" stroke-width="2"/>
                    <path d="M 95 60 L 89 66 L 101 74 L 89 82 L 101 90 L 89 96 L 95 100" stroke="#334155" stroke-width="2.2" fill="none"/>
                    <line x1="95" y1="100" x2="95" y2="104" stroke="#64748b" stroke-width="2"/>
                    <text x="110" y="80" text-anchor="start" fill="#334155" font-weight="bold" font-size="10.5">R₁</text>

                    <!-- Nodo intermedio de bifurcación -->
                    <circle cx="95" cy="104" r="3.5" fill="#ef4444"/>

                    <!-- Resistor R2 -->
                    <line x1="95" y1="104" x2="95" y2="108" stroke="#64748b" stroke-width="2"/>
                    <path d="M 95 108 L 89 114 L 101 122 L 89 130 L 101 138 L 89 144 L 95 148" stroke="#334155" stroke-width="2.2" fill="none"/>
                    <line x1="95" y1="148" x2="95" y2="152" stroke="#64748b" stroke-width="2"/>
                    <text x="108" y="128" text-anchor="start" fill="#334155" font-weight="bold" font-size="10.5">R₂</text>
                    <!-- Indicador vectorial de corriente por R2 -->
                    <line x1="80" y1="112" x2="80" y2="128" stroke="#b45309" stroke-width="1.8"/>
                    <polygon points="77,128 83,128 80,134" fill="#b45309"/>
                    <text x="74" y="123" text-anchor="end" fill="#b45309" font-weight="bold" font-size="8.5">I<tspan baseline-shift="sub" font-size="70%">R2</tspan></text>

                    <!-- Riel inferior GND -->
                    <line x1="25" y1="152" x2="270" y2="152" stroke="#64748b" stroke-width="2"/>
                    <circle cx="25" cy="152" r="4" fill="#3b82f6"/>
                    <text x="25" y="164" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="9.5">GND (-)</text>
                    <circle cx="95" cy="152" r="2.5" fill="#64748b"/>

                    <!-- Conexión a Carga R_L -->
                    <line x1="95" y1="104" x2="175" y2="104" stroke="#ef4444" stroke-width="2"/>
                    <circle cx="175" cy="104" r="3.5" fill="#ef4444"/>

                    <!-- Flecha corriente de carga I_L -->
                    <line x1="120" y1="94" x2="150" y2="94" stroke="#dc2626" stroke-width="1.8"/>
                    <polygon points="150,91 156,94 150,97" fill="#dc2626"/>
                    <text x="135" y="89" text-anchor="middle" fill="#dc2626" font-weight="bold" font-size="8.5">I<tspan baseline-shift="sub" font-size="70%">L</tspan> ➔</text>

                    <!-- Resistor de Carga R_L (en x=175) -->
                    <line x1="175" y1="104" x2="175" y2="108" stroke="#dc2626" stroke-width="2"/>
                    <path d="M 175 108 L 169 114 L 181 122 L 169 130 L 181 138 L 169 144 L 175 148" stroke="#dc2626" stroke-width="2.2" fill="none"/>
                    <line x1="175" y1="148" x2="175" y2="152" stroke="#dc2626" stroke-width="2"/>
                    <circle cx="175" cy="152" r="3" fill="#64748b"/>
                    <!-- Etiqueta RL: ubicada claramente a la derecha del resistor -->
                    <text x="188" y="128" text-anchor="start" fill="#dc2626" font-weight="bold" font-size="11">R<tspan baseline-shift="sub" font-size="70%">L</tspan></text>

                    <!-- Terminales A y B -->
                    <line x1="175" y1="104" x2="270" y2="104" stroke="#64748b" stroke-width="1.8"/>
                    <circle cx="270" cy="104" r="4" fill="#ef4444"/>
                    <text x="281" y="108" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="10">A</text>

                    <circle cx="270" cy="152" r="4" fill="#3b82f6"/>
                    <text x="281" y="156" text-anchor="start" fill="#3b82f6" font-weight="bold" font-size="10">B</text>

                    <!-- Cota Vout cargado (sentido único de B(-) hacia A(+)) -->
                    <line x1="235" y1="110" x2="235" y2="146" stroke="#b45309" stroke-width="1.4"/>
                    <polygon points="232,115 235,109 238,115" fill="#b45309"/>
                    <text x="244" y="132" text-anchor="start" fill="#b45309" font-weight="bold" font-size="8.5">V<tspan baseline-shift="sub" font-size="70%">out,carg</tspan></text>

                    <!-- Cuadro resumen de carga -->
                    <rect x="15" y="164" width="285" height="44" rx="6" fill="#fef3c7" stroke="#fde68a" stroke-width="1"/>
                    <text x="157" y="179" text-anchor="middle" fill="#92400e" font-weight="bold" font-size="9.5">V<tspan baseline-shift="sub" font-size="70%">out,carg</tspan> &lt; V<tspan baseline-shift="sub" font-size="70%">out,vacío</tspan> (Caída por carga)</text>
                    <text x="157" y="197" text-anchor="middle" fill="#b45309" font-size="8.5">Criterio: R<tspan baseline-shift="sub" font-size="70%">L</tspan> ≥ 10 · R₂ ⟹ caída &lt; 10%</text>
                  </g>
                </svg>
              </div>
            </div>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-5 mb-2">2. Divisor de Corriente</h5>
            <p class="mb-2 text-xs sm:text-sm">
              Considérese una corriente total entrante $I_{in}$ inyectada hacia un conjunto de $n$ ramas en paralelo con resistencias $R_1, R_2, \\dots, R_n$ (conductancias $G_1, G_2, \\dots, G_n$). Como la tensión en bornes del paralelo es idéntica para todas las ramas:
            </p>
            $$V = \\frac{I_{in}}{G_{eq}} = \\frac{I_{in}}{\\sum_{k=1}^n G_k}$$
            <p class="mb-2 text-xs sm:text-sm">
              La corriente que ingresa por una rama individual cualquiera $x$ es proporcional a su conductancia relativa:
            </p>
            $$I_{Rx} = V \\cdot G_x = I_{in} \\cdot \\frac{G_x}{\\sum_{k=1}^n G_k} = I_{in} \\cdot \\frac{\\frac{1}{R_x}}{\\sum_{k=1}^n \\frac{1}{R_k}}$$

            <div class="p-3.5 my-3 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-950 dark:text-indigo-200">
              <h5 class="font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <span>🔄</span> Caso Fundamental: Divisor de 2 Ramas ($R_1$ y $R_2$ en paralelo)
              </h5>
              <p class="text-xs">Desarrollando algebraicamente para dos ramas:</p>
              $$I_1 = I_{in} \\cdot \\frac{\\frac{1}{R_1}}{\\frac{1}{R_1} + \\frac{1}{R_2}} = \\mathbf{I_{in} \\cdot \\frac{R_2}{R_1 + R_2}}$$
              $$I_2 = I_{in} \\cdot \\frac{\\frac{1}{R_2}}{\\frac{1}{R_1} + \\frac{1}{R_2}} = \\mathbf{I_{in} \\cdot \\frac{R_1}{R_1 + R_2}}$$
              <p class="text-xs mt-2 text-slate-700 dark:text-slate-300">
                <strong>Regla Mnemotécnica Esencial:</strong> En un divisor de 2 ramas, la corriente por una rama es directamente proporcional al valor de la resistencia de la <em>otra rama</em> en el numerador. A menor resistencia de la rama, mayor proporción de corriente desvía hacia sí.
              </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs mt-3">
              <div class="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span class="font-bold text-slate-700 dark:text-slate-300">Ramas Simétricas ($R_1 = R_2$):</span>
                <p class="mt-1">$I_1 = I_2 = \\frac{I_{in}}{2}$. La corriente se reparte equitativamente en partes iguales.</p>
              </div>
              <div class="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span class="font-bold text-slate-700 dark:text-slate-300">Cortocircuito en Rama 1 ($R_1 = 0$):</span>
                <p class="mt-1">$I_1 = I_{in}$, $I_2 = 0$. Toda la corriente toma el camino de resistencia nula.</p>
              </div>
              <div class="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span class="font-bold text-slate-700 dark:text-slate-300">Circuito Abierto en Rama 2 ($R_2 \\to \\infty$):</span>
                <p class="mt-1">$I_1 = I_{in}$, $I_2 = 0$. Ninguna corriente puede atravesar la rama abierta.</p>
              </div>
            </div>

            <!-- Gráfico SVG: Divisor de Corriente -->
            <div class="my-4 p-4 rounded-2xl bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
              <h6 class="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2 text-center">
                📊 Gráfico: Divisor de Corriente — Reparto Inversamente Proporcional a la Resistencia
              </h6>
              <div class="overflow-x-auto flex justify-center py-1">
                <svg viewBox="0 0 680 220" class="w-full max-w-3xl h-auto font-sans text-xs select-none">
                  <!-- Panel Izquierdo: Esquema del Divisor de Corriente -->
                  <g transform="translate(15, 10)">
                    <rect x="0" y="0" width="350" height="200" rx="10" fill="#6366f1" fill-opacity="0.04" stroke="#6366f1" stroke-opacity="0.4" stroke-width="1.2"/>
                    <text x="175" y="16" text-anchor="middle" font-weight="bold" fill="#4f46e5" font-size="11">Divisor de Corriente (2 Ramas en Paralelo)</text>
                    <text x="175" y="27" text-anchor="middle" fill="#64748b" font-size="8.5">I<tspan baseline-shift="sub" font-size="70%">in</tspan> = I₁ + I₂ | Misma caída V entre nodos comunes</text>

                    <!-- Corriente de entrada I_in -->
                    <line x1="25" y1="57" x2="70" y2="57" stroke="#4f46e5" stroke-width="2.2"/>
                    <polygon points="52,53 60,57 52,61" fill="#4f46e5"/>
                    <text x="42" y="48" text-anchor="middle" fill="#4f46e5" font-weight="bold" font-size="9.5">I<tspan baseline-shift="sub" font-size="70%">in</tspan> ➔</text>

                    <!-- Nodo superior de bifurcación -->
                    <line x1="70" y1="57" x2="190" y2="57" stroke="#64748b" stroke-width="2"/>
                    <polygon points="115,54 121,57 115,60" fill="#4f46e5"/>
                    <circle cx="130" cy="57" r="4.5" fill="#4f46e5"/>
                    <text x="130" y="47" text-anchor="middle" fill="#4f46e5" font-weight="bold" font-size="9">Nodo Sup (+)</text>

                    <!-- Bifurcación Rama 1 (Izquierda) -->
                    <line x1="70" y1="57" x2="70" y2="68" stroke="#64748b" stroke-width="2"/>
                    <line x1="60" y1="64" x2="60" y2="80" stroke="#059669" stroke-width="1.8"/>
                    <polygon points="57,80 60,86 63,80" fill="#059669"/>
                    <text x="50" y="74" text-anchor="end" fill="#059669" font-weight="bold" font-size="9">I₁</text>
                    <path d="M 70 68 L 64 74 L 76 82 L 64 90 L 76 98 L 64 106 L 70 112" stroke="#334155" stroke-width="2.2" fill="none"/>
                    <line x1="70" y1="112" x2="70" y2="144" stroke="#64748b" stroke-width="2"/>
                    <text x="88" y="92" text-anchor="start" fill="#334155" font-weight="bold" font-size="10.5">R₁</text>

                    <!-- Bifurcación Rama 2 (Derecha) -->
                    <line x1="190" y1="57" x2="190" y2="68" stroke="#64748b" stroke-width="2"/>
                    <line x1="180" y1="64" x2="180" y2="80" stroke="#059669" stroke-width="1.8"/>
                    <polygon points="177,80 180,86 183,80" fill="#059669"/>
                    <text x="170" y="74" text-anchor="end" fill="#059669" font-weight="bold" font-size="9">I₂</text>
                    <path d="M 190 68 L 184 74 L 196 82 L 184 90 L 196 98 L 184 106 L 190 112" stroke="#334155" stroke-width="2.2" fill="none"/>
                    <line x1="190" y1="112" x2="190" y2="144" stroke="#64748b" stroke-width="2"/>
                    <text x="208" y="92" text-anchor="start" fill="#334155" font-weight="bold" font-size="10.5">R₂</text>

                    <!-- Nodo inferior de recombinación -->
                    <line x1="70" y1="144" x2="190" y2="144" stroke="#64748b" stroke-width="2"/>
                    <circle cx="130" cy="144" r="4.5" fill="#4f46e5"/>
                    <text x="130" y="158" text-anchor="middle" fill="#4f46e5" font-weight="bold" font-size="9">Nodo Inf (-)</text>

                    <!-- Corriente de salida reunida -->
                    <line x1="190" y1="144" x2="245" y2="144" stroke="#4f46e5" stroke-width="2.2"/>
                    <polygon points="245,140 253,144 245,148" fill="#4f46e5"/>
                    <text x="218" y="136" text-anchor="middle" fill="#4f46e5" font-weight="bold" font-size="9.5">I<tspan baseline-shift="sub" font-size="70%">in</tspan> ➔</text>

                    <!-- Cuadro fórmula mnemotécnica con barra de fracción horizontal -->
                    <rect x="232" y="46" width="112" height="82" rx="6" fill="#e0e7ff" stroke="#c7d2fe" stroke-width="1"/>
                    <text x="288" y="59" text-anchor="middle" fill="#3730a3" font-weight="bold" font-size="8.5">Fórmulas:</text>

                    <!-- Ecuación I1 con raya de fracción -->
                    <text x="236" y="77" fill="#1e1b4b" font-weight="bold" font-size="8.5">I₁ = I<tspan baseline-shift="sub" font-size="70%">in</tspan> ·</text>
                    <text x="306" y="71" text-anchor="middle" fill="#1e1b4b" font-weight="bold" font-size="8">R₂</text>
                    <line x1="274" y1="74" x2="338" y2="74" stroke="#1e1b4b" stroke-width="1.2"/>
                    <text x="306" y="83" text-anchor="middle" fill="#1e1b4b" font-weight="bold" font-size="8">R₁ + R₂</text>

                    <!-- Ecuación I2 con raya de fracción -->
                    <text x="236" y="101" fill="#1e1b4b" font-weight="bold" font-size="8.5">I₂ = I<tspan baseline-shift="sub" font-size="70%">in</tspan> ·</text>
                    <text x="306" y="95" text-anchor="middle" fill="#1e1b4b" font-weight="bold" font-size="8">R₁</text>
                    <line x1="274" y1="98" x2="338" y2="98" stroke="#1e1b4b" stroke-width="1.2"/>
                    <text x="306" y="107" text-anchor="middle" fill="#1e1b4b" font-weight="bold" font-size="8">R₁ + R₂</text>

                    <text x="288" y="122" text-anchor="middle" fill="#047857" font-weight="bold" font-size="7.5">Resistencia opuesta</text>

                    <!-- Cota de tensión común V (sentido único del nodo (-) al (+)) -->
                    <line x1="15" y1="138" x2="15" y2="63" stroke="#ef4444" stroke-width="1.2"/>
                    <polygon points="12,68 15,62 18,68" fill="#ef4444"/>
                    <text x="22" y="102" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="8.5">V</text>

                    <rect x="15" y="167" width="320" height="24" rx="5" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
                    <text x="175" y="183" text-anchor="middle" fill="#334155" font-size="8.5">Principio: La rama de menor resistencia desvía mayor corriente</text>
                  </g>

                  <!-- Panel Derecho: Casos Particulares y Límites -->
                  <g transform="translate(380, 10)">
                    <rect x="0" y="0" width="285" height="200" rx="10" fill="#f8fafc" dark:fill="#0f172a" stroke="#cbd5e1" stroke-width="1"/>
                    <text x="142" y="18" text-anchor="middle" font-weight="bold" fill="#334155" font-size="10.5">Casos Particulares Clave</text>

                    <!-- Caso 1: R1 = R2 -->
                    <rect x="12" y="27" width="260" height="49" rx="6" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
                    <text x="22" y="41" font-weight="bold" fill="#1e40af" font-size="9">1. Ramas Iguales (R₁ = R₂):</text>
                    <text x="22" y="56" fill="#2563eb" font-weight="bold" font-size="9">I₁ = I₂ = I<tspan baseline-shift="sub" font-size="70%">in</tspan> / 2</text>
                    <text x="22" y="70" fill="#64748b" font-size="7.5">Reparto perfectamente simétrico y equitativo.</text>

                    <!-- Caso 2: R1 << R2 -->
                    <rect x="12" y="83" width="260" height="49" rx="6" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1"/>
                    <text x="22" y="97" font-weight="bold" fill="#065f46" font-size="9">2. Disparidad Severa (R₁ &lt;&lt; R₂):</text>
                    <text x="22" y="112" fill="#059669" font-weight="bold" font-size="9">I₁ ≈ I<tspan baseline-shift="sub" font-size="70%">in</tspan>  |  I₂ ≈ 0</text>
                    <text x="22" y="126" fill="#64748b" font-size="7.5">Casi la totalidad de corriente fluye por R₁.</text>

                    <!-- Caso 3: Cortocircuito R1 = 0 -->
                    <rect x="12" y="139" width="260" height="49" rx="6" fill="#fef2f2" stroke="#fecaca" stroke-width="1"/>
                    <text x="22" y="153" font-weight="bold" fill="#991b1b" font-size="9">3. Cortocircuito (R₁ = 0):</text>
                    <text x="22" y="168" fill="#dc2626" font-weight="bold" font-size="9">I₁ = I<tspan baseline-shift="sub" font-size="70%">in</tspan>  |  I₂ ≈ 0</text>
                    <text x="22" y="182" fill="#64748b" font-size="7.5">Todo el flujo elude la rama con resistencia R₂.</text>
                  </g>
                </svg>
              </div>
            </div>
          `
        },
        {
          id: 'e1-u1-leyes-fundamentales',
          titulo: '1.3 Leyes de Kirchhoff y Métodos Sistemáticos de Nodos y Mallas',
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
          titulo: '1.4 Teoremas de Red: Thévenin, Norton, Millman y Máxima Transferencia',
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

            <!-- Gráfico SVG: Equivalentes de Thévenin y Norton y Dualidad -->
            <div class="my-4 p-4 rounded-2xl bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
              <h6 class="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2 text-center">
                📊 Gráfico: Teoremas de Thévenin y Norton — Equivalencia y Dualidad de Redes
              </h6>
              <div class="overflow-x-auto flex justify-center py-1">
                <svg viewBox="0 0 680 205" class="w-full max-w-3xl h-auto font-sans text-xs select-none">
                  <!-- Bloque 1: Red Lineal Original -->
                  <g transform="translate(10, 10)">
                    <rect x="0" y="0" width="180" height="185" rx="10" fill="#f8fafc" dark:fill="#0f172a" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="4 3"/>
                    <text x="90" y="20" text-anchor="middle" font-weight="bold" fill="#334155" font-size="10.5">Red Lineal Activa</text>
                    <text x="90" y="32" text-anchor="middle" fill="#64748b" font-size="8">Fuentes dep/indep + R</text>

                    <!-- Icono interno estilizado de red -->
                    <rect x="25" y="48" width="130" height="70" rx="6" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="1"/>
                    <text x="90" y="78" text-anchor="middle" fill="#475569" font-weight="bold" font-size="9">Circuito Complejo</text>
                    <text x="90" y="92" text-anchor="middle" fill="#64748b" font-size="7.5">N nodos y M mallas</text>

                    <!-- Bornes de salida A y B -->
                    <line x1="155" y1="65" x2="195" y2="65" stroke="#64748b" stroke-width="2"/>
                    <circle cx="195" cy="65" r="4" fill="#ef4444"/>
                    <text x="195" y="54" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="9.5">A</text>

                    <line x1="155" y1="105" x2="195" y2="105" stroke="#64748b" stroke-width="2"/>
                    <circle cx="195" cy="105" r="4" fill="#3b82f6"/>
                    <text x="195" y="120" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="9.5">B</text>

                    <rect x="15" y="130" width="150" height="46" rx="5" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
                    <text x="90" y="144" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="8.5">Parámetros:</text>
                    <text x="90" y="158" text-anchor="middle" fill="#2563eb" font-size="8">V<tspan baseline-shift="sub" font-size="70%">oc</tspan> = V<tspan baseline-shift="sub" font-size="70%">AB</tspan> (ca)</text>
                    <text x="90" y="171" text-anchor="middle" fill="#2563eb" font-size="8">I<tspan baseline-shift="sub" font-size="70%">sc</tspan> = I<tspan baseline-shift="sub" font-size="70%">AB</tspan> (cc)</text>
                  </g>

                  <!-- Flecha de simplificación -->
                  <g transform="translate(205, 90)">
                    <line x1="0" y1="0" x2="18" y2="0" stroke="#2563eb" stroke-width="2.2"/>
                    <polygon points="18,-4 25,0 18,4" fill="#2563eb"/>
                  </g>

                  <!-- Bloque 2: Equivalente de Thévenin -->
                  <g transform="translate(235, 10)">
                    <rect x="0" y="0" width="205" height="185" rx="10" fill="#3b82f6" fill-opacity="0.04" stroke="#3b82f6" stroke-opacity="0.4" stroke-width="1.2"/>
                    <text x="102" y="20" text-anchor="middle" font-weight="bold" fill="#2563eb" font-size="11">Equivalente de Thévenin</text>
                    <text x="102" y="32" text-anchor="middle" fill="#64748b" font-size="8.5">Fuente de tensión en serie con R<tspan baseline-shift="sub" font-size="70%">th</tspan></text>

                    <!-- Fuente de tensión V_th -->
                    <circle cx="42" cy="85" r="16" fill="#eff6ff" stroke="#2563eb" stroke-width="1.8"/>
                    <text x="42" y="81" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="10">+</text>
                    <text x="42" y="94" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="10">-</text>
                    <text x="18" y="88" text-anchor="end" fill="#2563eb" font-weight="bold" font-size="9.5">V<tspan baseline-shift="sub" font-size="70%">th</tspan></text>

                    <!-- Cable y Resistor R_th en serie -->
                    <line x1="42" y1="69" x2="42" y2="55" stroke="#64748b" stroke-width="2"/>
                    <line x1="42" y1="55" x2="75" y2="55" stroke="#64748b" stroke-width="2"/>
                    <path d="M 75 55 L 80 47 L 88 63 L 96 47 L 104 63 L 112 47 L 117 55" stroke="#334155" stroke-width="2" fill="none"/>
                    <line x1="117" y1="55" x2="185" y2="55" stroke="#64748b" stroke-width="2"/>
                    <text x="96" y="40" text-anchor="middle" fill="#334155" font-weight="bold" font-size="9.5">R<tspan baseline-shift="sub" font-size="70%">th</tspan></text>

                    <!-- Cable inferior a B -->
                    <line x1="42" y1="101" x2="42" y2="125" stroke="#64748b" stroke-width="2"/>
                    <line x1="42" y1="125" x2="185" y2="125" stroke="#64748b" stroke-width="2"/>

                    <!-- Terminales A y B -->
                    <circle cx="185" cy="55" r="4" fill="#ef4444"/>
                    <text x="195" y="58" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="9.5">A</text>

                    <circle cx="185" cy="125" r="4" fill="#3b82f6"/>
                    <text x="195" y="128" text-anchor="start" fill="#3b82f6" font-weight="bold" font-size="9.5">B</text>

                    <!-- Fórmulas -->
                    <rect x="15" y="134" width="175" height="42" rx="5" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
                    <text x="102" y="149" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="8.5">V<tspan baseline-shift="sub" font-size="70%">th</tspan> = V<tspan baseline-shift="sub" font-size="70%">AB,ca</tspan>  (Vacío)</text>
                    <text x="102" y="166" text-anchor="middle" fill="#2563eb" font-size="8">R<tspan baseline-shift="sub" font-size="70%">th</tspan> = V<tspan baseline-shift="sub" font-size="70%">oc</tspan> / I<tspan baseline-shift="sub" font-size="70%">sc</tspan> = R<tspan baseline-shift="sub" font-size="70%">in,pasiva</tspan></text>
                  </g>

                  <!-- Flecha de conversión Thévenin <-> Norton -->
                  <g transform="translate(448, 85)">
                    <line x1="0" y1="0" x2="14" y2="0" stroke="#059669" stroke-width="2"/>
                    <polygon points="14,-3 20,0 14,3" fill="#059669"/>
                    <line x1="20" y1="12" x2="6" y2="12" stroke="#059669" stroke-width="2"/>
                    <polygon points="6,9 0,12 6,15" fill="#059669"/>
                    <text x="10" y="-5" text-anchor="middle" fill="#059669" font-weight="bold" font-size="7">Dual</text>
                  </g>

                  <!-- Bloque 3: Equivalente de Norton -->
                  <g transform="translate(475, 10)">
                    <rect x="0" y="0" width="195" height="185" rx="10" fill="#059669" fill-opacity="0.04" stroke="#059669" stroke-opacity="0.4" stroke-width="1.2"/>
                    <text x="97" y="20" text-anchor="middle" font-weight="bold" fill="#059669" font-size="11">Equivalente de Norton</text>
                    <text x="97" y="32" text-anchor="middle" fill="#64748b" font-size="8.5">Fuente de corriente || R<tspan baseline-shift="sub" font-size="70%">N</tspan></text>

                    <!-- Fuente de corriente I_N -->
                    <circle cx="40" cy="90" r="16" fill="#ecfdf5" stroke="#059669" stroke-width="1.8"/>
                    <line x1="40" y1="99" x2="40" y2="81" stroke="#059669" stroke-width="2"/>
                    <polygon points="36,83 40,76 44,83" fill="#059669"/>
                    <text x="18" y="93" text-anchor="end" fill="#059669" font-weight="bold" font-size="9">I<tspan baseline-shift="sub" font-size="70%">N</tspan></text>

                    <!-- Riel superior -->
                    <line x1="40" y1="74" x2="40" y2="55" stroke="#64748b" stroke-width="2"/>
                    <line x1="40" y1="55" x2="175" y2="55" stroke="#64748b" stroke-width="2"/>

                    <!-- Resistor R_N en paralelo -->
                    <circle cx="110" cy="55" r="3" fill="#334155"/>
                    <line x1="110" y1="55" x2="110" y2="67" stroke="#64748b" stroke-width="2"/>
                    <path d="M 110 67 L 104 73 L 116 81 L 104 89 L 116 97 L 104 105 L 110 111" stroke="#334155" stroke-width="2" fill="none"/>
                    <line x1="110" y1="111" x2="110" y2="125" stroke="#64748b" stroke-width="2"/>
                    <circle cx="110" cy="125" r="3" fill="#334155"/>
                    <text x="126" y="93" text-anchor="start" fill="#334155" font-weight="bold" font-size="9.5">R<tspan baseline-shift="sub" font-size="70%">N</tspan></text>

                    <!-- Riel inferior a B -->
                    <line x1="40" y1="106" x2="40" y2="125" stroke="#64748b" stroke-width="2"/>
                    <line x1="40" y1="125" x2="175" y2="125" stroke="#64748b" stroke-width="2"/>

                    <!-- Terminales A y B -->
                    <circle cx="175" cy="55" r="4" fill="#ef4444"/>
                    <text x="185" y="58" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="9.5">A</text>

                    <circle cx="175" cy="125" r="4" fill="#3b82f6"/>
                    <text x="185" y="128" text-anchor="start" fill="#3b82f6" font-weight="bold" font-size="9.5">B</text>

                    <!-- Fórmulas -->
                    <rect x="15" y="134" width="165" height="42" rx="5" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1"/>
                    <text x="97" y="149" text-anchor="middle" fill="#065f46" font-weight="bold" font-size="8.5">I<tspan baseline-shift="sub" font-size="70%">N</tspan> = I<tspan baseline-shift="sub" font-size="70%">sc</tspan> = V<tspan baseline-shift="sub" font-size="70%">th</tspan> / R<tspan baseline-shift="sub" font-size="70%">th</tspan></text>
                    <text x="97" y="166" text-anchor="middle" fill="#047857" font-size="8">R<tspan baseline-shift="sub" font-size="70%">N</tspan> = R<tspan baseline-shift="sub" font-size="70%">th</tspan></text>
                  </g>
                </svg>
              </div>
            </div>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-5 mb-2">Teorema de Millman (Generadores en Paralelo)</h5>
            <p class="mb-2 text-xs sm:text-sm">
              El <strong>Teorema de Millman</strong> es un método analítico directo de resolución en un único paso para circuitos que constan de múltiples ramas en paralelo conectadas entre dos nodos esenciales comunes $A$ y $B$. Cada rama $k$ puede contener un generador de tensión ideal $E_k$ en serie con una resistencia interna $R_k$, un generador de corriente independiente $I_{sj}$, o ser una rama resistiva pasiva $R_p$.
            </p>

            <div class="p-4 my-3 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-950 dark:text-teal-200 text-xs">
              <h5 class="font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5 text-teal-700 dark:text-teal-300">
                <span>⚡</span> Fórmula Fundamental de Millman para la Tensión Nodal $V_{AB}$
              </h5>
              <p class="mt-1">
                Aplicando la Ley de Corrientes de Kirchhoff (LCK) en el nodo $A$, la diferencia de potencial directa entre los dos nodos comunes ($V_{AB} = V_A - V_B$) se calcula como:
              </p>
              $$\\mathbf{V_{AB} = \\frac{\\sum_{k=1}^N \\pm \\frac{E_k}{R_k} + \\sum_{j=1}^M \\pm I_{sj}}{\\sum_{k=1}^N \\frac{1}{R_k} + \\sum_{p=1}^P \\frac{1}{R_p}} = \\frac{\\sum \\pm E_k G_k + \\sum \\pm I_{sj}}{\\sum G_{\\text{total}}}}$$

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3 text-xs">
                <div class="p-2.5 rounded-lg bg-white/70 dark:bg-slate-900/80 border border-teal-200 dark:border-teal-900">
                  <span class="font-bold text-teal-700 dark:text-teal-300">Regla de Signos en el Numerador:</span>
                  <ul class="list-disc pl-4 space-y-1 mt-1 text-[11px] text-slate-700 dark:text-slate-300">
                    <li>$+E_k$ si el borne positivo de la fuente apunta hacia el nodo $A$.</li>
                    <li>$-E_k$ si el borne positivo de la fuente apunta hacia el nodo $B$.</li>
                    <li>$+I_{sj}$ si la fuente de corriente inyecta carga hacia el nodo $A$; $-I_{sj}$ si extrae carga de $A$.</li>
                    <li>Las ramas puramente resistivas ($E_p = 0$) aportan $0$ al numerador.</li>
                  </ul>
                </div>
                <div class="p-2.5 rounded-lg bg-white/70 dark:bg-slate-900/80 border border-teal-200 dark:border-teal-900">
                  <span class="font-bold text-teal-700 dark:text-teal-300">Resistencia Equivalente de Millman:</span>
                  $$R_{M} = R_{th} = \\frac{1}{\\sum G_{\\text{total}}} = \\frac{1}{\\sum_{k=1}^N \\frac{1}{R_k} + \\sum_{p=1}^P \\frac{1}{R_p}}$$
                  <p class="mt-1 text-[11px] text-slate-700 dark:text-slate-300">
                    El circuito visto desde los terminales $A$ y $B$ equivale a una fuente de Thévenin con $V_{th} = V_{AB}$ en serie con $R_{th} = R_M$.
                  </p>
                </div>
              </div>
            </div>

            <p class="text-xs text-slate-600 dark:text-slate-400 mb-3">
              <strong>Aplicaciones directas en Electrónica:</strong> Redes de polarización de transistores alimentadas desde múltiples carriles de tensión, sumadores pasivos analógicos de señales, redes de ponderación resistiva R-2R en conversores D/A y referencias estabilizadas con diodos.
            </p>

            <!-- Gráfico SVG: Teorema de Millman (Múltiples Ramas a Equivalente Thévenin) -->
            <div class="my-4 p-4 rounded-2xl bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
              <h6 class="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2 text-center">
                📊 Gráfico: Teorema de Millman — Reducción de Múltiples Generadores en Paralelo
              </h6>
              <div class="overflow-x-auto flex justify-center py-1">
                <svg viewBox="0 0 680 248" class="w-full max-w-3xl h-auto font-sans text-xs select-none">
                  <!-- Panel Izquierdo: Circuito Multirrama entre A y B -->
                  <g transform="translate(10, 10)">
                    <rect x="0" y="0" width="375" height="232" rx="10" fill="#0d9488" fill-opacity="0.04" stroke="#0d9488" stroke-opacity="0.35" stroke-width="1.2"/>
                    <text x="187" y="18" text-anchor="middle" font-weight="bold" fill="#0f766e" font-size="11">Circuito Multirrama en Paralelo (Nodos A y B)</text>
                    <text x="187" y="30" text-anchor="middle" fill="#64748b" font-size="8.5">Fuentes de tensión serie, fuentes de corriente y ramas pasivas</text>

                    <!-- Riel superior Nodo A -->
                    <line x1="25" y1="50" x2="335" y2="50" stroke="#64748b" stroke-width="2"/>
                    <circle cx="335" cy="50" r="4" fill="#ef4444"/>
                    <text x="347" y="54" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="10">A (+)</text>

                    <!-- Riel inferior Nodo B -->
                    <line x1="25" y1="150" x2="335" y2="150" stroke="#64748b" stroke-width="2"/>
                    <circle cx="335" cy="150" r="4" fill="#3b82f6"/>
                    <text x="347" y="154" text-anchor="start" fill="#3b82f6" font-weight="bold" font-size="10">B (-)</text>

                    <!-- Rama 1: E1 (+) hacia A en serie con R1 -->
                    <circle cx="65" cy="50" r="2.5" fill="#334155"/>
                    <line x1="65" y1="50" x2="65" y2="60" stroke="#64748b" stroke-width="1.8"/>
                    <path d="M 65 60 L 60 65 L 70 71 L 60 77 L 70 83 L 60 89 L 65 94" stroke="#334155" stroke-width="2" fill="none"/>
                    <line x1="65" y1="94" x2="65" y2="104" stroke="#64748b" stroke-width="1.8"/>
                    <circle cx="65" cy="116" r="12" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
                    <text x="65" y="113" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="9">+</text>
                    <text x="65" y="123" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="9">-</text>
                    <line x1="65" y1="128" x2="65" y2="150" stroke="#64748b" stroke-width="1.8"/>
                    <circle cx="65" cy="150" r="2.5" fill="#334155"/>
                    <text x="78" y="78" text-anchor="start" fill="#334155" font-weight="bold" font-size="8.5">R1</text>
                    <text x="80" y="119" text-anchor="start" fill="#2563eb" font-weight="bold" font-size="8.5">E1</text>
                    <text x="48" y="90" text-anchor="end" fill="#059669" font-size="7.5">⬆ +E1/R1</text>

                    <!-- Rama 2: E2 (-) hacia A en serie con R2 (polaridad invertida) -->
                    <circle cx="145" cy="50" r="2.5" fill="#334155"/>
                    <line x1="145" y1="50" x2="145" y2="60" stroke="#64748b" stroke-width="1.8"/>
                    <path d="M 145 60 L 140 65 L 150 71 L 140 77 L 150 83 L 140 89 L 145 94" stroke="#334155" stroke-width="2" fill="none"/>
                    <line x1="145" y1="94" x2="145" y2="104" stroke="#64748b" stroke-width="1.8"/>
                    <circle cx="145" cy="116" r="12" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/>
                    <text x="145" y="113" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="9">-</text>
                    <text x="145" y="123" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="9">+</text>
                    <line x1="145" y1="128" x2="145" y2="150" stroke="#64748b" stroke-width="1.8"/>
                    <circle cx="145" cy="150" r="2.5" fill="#334155"/>
                    <text x="158" y="78" text-anchor="start" fill="#334155" font-weight="bold" font-size="8.5">R2</text>
                    <text x="160" y="119" text-anchor="start" fill="#dc2626" font-weight="bold" font-size="8.5">E2</text>
                    <text x="128" y="90" text-anchor="end" fill="#dc2626" font-size="7.5">⬇ -E2/R2</text>

                    <!-- Rama 3: Fuente de corriente Is3 inyectando hacia A -->
                    <circle cx="225" cy="50" r="2.5" fill="#334155"/>
                    <line x1="225" y1="50" x2="225" y2="85" stroke="#64748b" stroke-width="1.8"/>
                    <circle cx="225" cy="100" r="15" fill="#ecfdf5" stroke="#059669" stroke-width="1.5"/>
                    <line x1="225" y1="108" x2="225" y2="92" stroke="#059669" stroke-width="2"/>
                    <polygon points="221,94 225,87 229,94" fill="#059669"/>
                    <line x1="225" y1="115" x2="225" y2="150" stroke="#64748b" stroke-width="1.8"/>
                    <circle cx="225" cy="150" r="2.5" fill="#334155"/>
                    <text x="243" y="103" text-anchor="start" fill="#059669" font-weight="bold" font-size="9">Is3</text>
                    <text x="208" y="103" text-anchor="end" fill="#059669" font-size="7.5">⬆ +Is3</text>

                    <!-- Rama 4: Resistencia Pasiva Rp -->
                    <circle cx="295" cy="50" r="2.5" fill="#334155"/>
                    <line x1="295" y1="50" x2="295" y2="80" stroke="#64748b" stroke-width="1.8"/>
                    <path d="M 295 80 L 289 86 L 301 94 L 289 102 L 301 110 L 289 118 L 295 124" stroke="#334155" stroke-width="2" fill="none"/>
                    <line x1="295" y1="124" x2="295" y2="150" stroke="#64748b" stroke-width="1.8"/>
                    <circle cx="295" cy="150" r="2.5" fill="#334155"/>
                    <text x="308" y="99" text-anchor="start" fill="#334155" font-weight="bold" font-size="8.5">Rp</text>
                    <text x="308" y="112" text-anchor="start" fill="#64748b" font-size="7.5">(sin fuente)</text>

                    <!-- Cuadro resumen de fórmula Millman en formato fraccionario elegante -->
                    <rect x="10" y="152" width="355" height="72" rx="6" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1"/>
                    
                    <!-- Miembro izquierdo -->
                    <text x="18" y="183" text-anchor="start" fill="#166534" font-weight="bold" font-size="10.5">V<tspan baseline-shift="sub" font-size="70%">AB</tspan> =</text>

                    <!-- Barra principal de fracción -->
                    <line x1="60" y1="180" x2="272" y2="180" stroke="#166534" stroke-width="1.5"/>

                    <!-- Numerador: Términos de corrientes -->
                    <!-- + E1/R1 -->
                    <text x="76" y="173" text-anchor="middle" fill="#059669" font-weight="bold" font-size="9.5">+</text>
                    <text x="102" y="167" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="8.5">E<tspan baseline-shift="sub" font-size="70%">1</tspan></text>
                    <line x1="90" y1="170" x2="114" y2="170" stroke="#166534" stroke-width="1"/>
                    <text x="102" y="177" text-anchor="middle" fill="#334155" font-weight="bold" font-size="8">R<tspan baseline-shift="sub" font-size="70%">1</tspan></text>

                    <!-- - E2/R2 -->
                    <text x="136" y="173" text-anchor="middle" fill="#dc2626" font-weight="bold" font-size="10.5">−</text>
                    <text x="164" y="167" text-anchor="middle" fill="#dc2626" font-weight="bold" font-size="8.5">E<tspan baseline-shift="sub" font-size="70%">2</tspan></text>
                    <line x1="152" y1="170" x2="176" y2="170" stroke="#166534" stroke-width="1"/>
                    <text x="164" y="177" text-anchor="middle" fill="#334155" font-weight="bold" font-size="8">R<tspan baseline-shift="sub" font-size="70%">2</tspan></text>

                    <!-- + Is3 -->
                    <text x="198" y="173" text-anchor="middle" fill="#059669" font-weight="bold" font-size="9.5">+</text>
                    <text x="228" y="173" text-anchor="middle" fill="#059669" font-weight="bold" font-size="9">I<tspan baseline-shift="sub" font-size="70%">s3</tspan></text>

                    <!-- Denominador: Suma de conductancias 1/R -->
                    <!-- 1/R1 -->
                    <text x="102" y="189" text-anchor="middle" fill="#166534" font-weight="bold" font-size="8">1</text>
                    <line x1="90" y1="192" x2="114" y2="192" stroke="#166534" stroke-width="1"/>
                    <text x="102" y="200" text-anchor="middle" fill="#334155" font-weight="bold" font-size="8">R<tspan baseline-shift="sub" font-size="70%">1</tspan></text>

                    <!-- + -->
                    <text x="136" y="195" text-anchor="middle" fill="#166534" font-weight="bold" font-size="9.5">+</text>

                    <!-- 1/R2 -->
                    <text x="164" y="189" text-anchor="middle" fill="#166534" font-weight="bold" font-size="8">1</text>
                    <line x1="152" y1="192" x2="176" y2="192" stroke="#166534" stroke-width="1"/>
                    <text x="164" y="200" text-anchor="middle" fill="#334155" font-weight="bold" font-size="8">R<tspan baseline-shift="sub" font-size="70%">2</tspan></text>

                    <!-- + -->
                    <text x="198" y="195" text-anchor="middle" fill="#166534" font-weight="bold" font-size="9.5">+</text>

                    <!-- 1/Rp -->
                    <text x="228" y="189" text-anchor="middle" fill="#166534" font-weight="bold" font-size="8">1</text>
                    <line x1="216" y1="192" x2="240" y2="192" stroke="#166534" stroke-width="1"/>
                    <text x="228" y="200" text-anchor="middle" fill="#334155" font-weight="bold" font-size="8">R<tspan baseline-shift="sub" font-size="70%">p</tspan></text>

                    <!-- Equivalencia compacta con sumatorias = Σ I / Σ G -->
                    <text x="288" y="183" text-anchor="middle" fill="#166534" font-weight="bold" font-size="10">=</text>
                    <text x="322" y="173" text-anchor="middle" fill="#0f766e" font-weight="bold" font-size="8.5">Σ ±I<tspan baseline-shift="sub" font-size="70%">k</tspan></text>
                    <line x1="300" y1="180" x2="344" y2="180" stroke="#0f766e" stroke-width="1.3"/>
                    <text x="322" y="195" text-anchor="middle" fill="#0f766e" font-weight="bold" font-size="8.5">Σ G<tspan baseline-shift="sub" font-size="70%">k</tspan></text>

                    <!-- Aclaración mnemotécnica de signos -->
                    <text x="187" y="216" text-anchor="middle" fill="#059669" font-size="7.5">Signo (+): la corriente/fuente apunta a A  |  Signo (-): apunta a B</text>
                  </g>

                  <!-- Flecha de conversión de Millman -->
                  <g transform="translate(390, 100)">
                    <line x1="0" y1="0" x2="16" y2="0" stroke="#0d9488" stroke-width="2.2"/>
                    <polygon points="16,-4 23,0 16,4" fill="#0d9488"/>
                  </g>

                  <!-- Panel Derecho: Equivalente Thévenin Único de Millman -->
                  <g transform="translate(420, 10)">
                    <rect x="0" y="0" width="250" height="232" rx="10" fill="#0d9488" fill-opacity="0.05" stroke="#0d9488" stroke-opacity="0.4" stroke-width="1.2"/>
                    <text x="125" y="18" text-anchor="middle" font-weight="bold" fill="#0f766e" font-size="11">Equivalente Thévenin (Millman)</text>
                    <text x="125" y="30" text-anchor="middle" fill="#64748b" font-size="8.5">Rama serie única entre A y B</text>

                    <!-- Fuente V_AB (Thévenin) -->
                    <circle cx="45" cy="100" r="16" fill="#ccfbf1" stroke="#0f766e" stroke-width="2"/>
                    <text x="45" y="96" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="10">+</text>
                    <text x="45" y="109" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="10">-</text>
                    <text x="45" y="132" text-anchor="middle" fill="#0f766e" font-weight="bold" font-size="9">V<tspan baseline-shift="sub" font-size="70%">AB</tspan> = V<tspan baseline-shift="sub" font-size="70%">th</tspan></text>

                    <!-- Conexión superior y Resistor R_M -->
                    <line x1="45" y1="84" x2="45" y2="60" stroke="#64748b" stroke-width="2"/>
                    <line x1="45" y1="60" x2="90" y2="60" stroke="#64748b" stroke-width="2"/>
                    <path d="M 90 60 L 96 52 L 106 68 L 116 52 L 126 68 L 136 52 L 142 60" stroke="#0f766e" stroke-width="2.2" fill="none"/>
                    <line x1="142" y1="60" x2="225" y2="60" stroke="#64748b" stroke-width="2"/>
                    <text x="116" y="44" text-anchor="middle" fill="#0f766e" font-weight="bold" font-size="10">R<tspan baseline-shift="sub" font-size="70%">M</tspan> (R<tspan baseline-shift="sub" font-size="70%">th</tspan>)</text>

                    <!-- Conexión inferior a B -->
                    <line x1="45" y1="116" x2="45" y2="140" stroke="#64748b" stroke-width="2"/>
                    <line x1="45" y1="140" x2="225" y2="140" stroke="#64748b" stroke-width="2"/>

                    <!-- Bornes A y B -->
                    <circle cx="225" cy="60" r="4" fill="#ef4444"/>
                    <text x="237" y="63" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="9.5">A</text>

                    <circle cx="225" cy="140" r="4" fill="#3b82f6"/>
                    <text x="237" y="143" text-anchor="start" fill="#3b82f6" font-weight="bold" font-size="9.5">B</text>

                    <!-- Cota de tensión V_AB (sentido único de B(-) hacia A(+)) -->
                    <line x1="205" y1="66" x2="205" y2="134" stroke="#0f766e" stroke-width="1.3"/>
                    <polygon points="202,71 205,65 208,71" fill="#0f766e"/>
                    <text x="195" y="103" text-anchor="end" fill="#0f766e" font-weight="bold" font-size="8.5">V<tspan baseline-shift="sub" font-size="70%">AB</tspan></text>

                    <!-- Cuadro Thévenin equivalente sin slashes -->
                    <rect x="12" y="152" width="226" height="72" rx="6" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1"/>
                    
                    <text x="18" y="183" text-anchor="start" fill="#166534" font-weight="bold" font-size="9.5">R<tspan baseline-shift="sub" font-size="70%">M</tspan> = R<tspan baseline-shift="sub" font-size="70%">th</tspan> =</text>

                    <!-- Barra de fracción principal de RM -->
                    <line x1="82" y1="180" x2="228" y2="180" stroke="#166534" stroke-width="1.5"/>

                    <!-- Numerador 1 -->
                    <text x="155" y="173" text-anchor="middle" fill="#166534" font-weight="bold" font-size="10">1</text>

                    <!-- Denominador con fracciones 1/R1 + 1/R2 + 1/Rp -->
                    <!-- 1/R1 -->
                    <text x="106" y="189" text-anchor="middle" fill="#166534" font-weight="bold" font-size="8">1</text>
                    <line x1="96" y1="192" x2="116" y2="192" stroke="#166534" stroke-width="1"/>
                    <text x="106" y="200" text-anchor="middle" fill="#334155" font-weight="bold" font-size="8">R<tspan baseline-shift="sub" font-size="70%">1</tspan></text>

                    <!-- + -->
                    <text x="131" y="195" text-anchor="middle" fill="#166534" font-weight="bold" font-size="9">+</text>

                    <!-- 1/R2 -->
                    <text x="155" y="189" text-anchor="middle" fill="#166534" font-weight="bold" font-size="8">1</text>
                    <line x1="145" y1="192" x2="165" y2="192" stroke="#166534" stroke-width="1"/>
                    <text x="155" y="200" text-anchor="middle" fill="#334155" font-weight="bold" font-size="8">R<tspan baseline-shift="sub" font-size="70%">2</tspan></text>

                    <!-- + -->
                    <text x="179" y="195" text-anchor="middle" fill="#166534" font-weight="bold" font-size="9">+</text>

                    <!-- 1/Rp -->
                    <text x="203" y="189" text-anchor="middle" fill="#166534" font-weight="bold" font-size="8">1</text>
                    <line x1="193" y1="192" x2="213" y2="192" stroke="#166534" stroke-width="1"/>
                    <text x="203" y="200" text-anchor="middle" fill="#334155" font-weight="bold" font-size="8">R<tspan baseline-shift="sub" font-size="70%">p</tspan></text>

                    <!-- Resumen equivalente -->
                    <text x="125" y="216" text-anchor="middle" fill="#059669" font-size="7.5">Resistencia equivalente Thévenin: R<tspan baseline-shift="sub" font-size="70%">M</tspan> = 1 / Σ G<tspan baseline-shift="sub" font-size="70%">k</tspan></text>
                  </g>
                </svg>
              </div>
            </div>

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

            <!-- Gráfico SVG: Máxima Transferencia de Potencia (Circuito y Curva Característica) -->
            <div class="my-4 p-4 rounded-2xl bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
              <h6 class="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2 text-center">
                📊 Gráfico: Máxima Transferencia de Potencia — Circuito Adaptado y Curva P_L vs R_L
              </h6>
              <div class="overflow-x-auto flex justify-center py-1">
                <svg viewBox="0 0 680 230" class="w-full max-w-3xl h-auto font-sans text-xs select-none">
                  <!-- Panel Izquierdo: Circuito Adaptador Thévenin - Carga R_L -->
                  <g transform="translate(15, 10)">
                    <rect x="0" y="0" width="285" height="210" rx="10" fill="#3b82f6" fill-opacity="0.04" stroke="#3b82f6" stroke-opacity="0.4" stroke-width="1.2"/>
                    <text x="142" y="18" text-anchor="middle" font-weight="bold" fill="#2563eb" font-size="11">Circuito: Generador y Carga R<tspan baseline-shift="sub" font-size="70%">L</tspan></text>
                    <text x="142" y="30" text-anchor="middle" fill="#64748b" font-size="8.5">Generador Thévenin (V<tspan baseline-shift="sub" font-size="70%">th</tspan>, R<tspan baseline-shift="sub" font-size="70%">th</tspan>) + Carga Variable R<tspan baseline-shift="sub" font-size="70%">L</tspan></text>

                    <!-- Fuente V_th -->
                    <circle cx="40" cy="100" r="15" fill="#eff6ff" stroke="#2563eb" stroke-width="1.8"/>
                    <text x="40" y="96" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="9">+</text>
                    <text x="40" y="108" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="9">-</text>
                    <text x="18" y="104" text-anchor="end" fill="#2563eb" font-weight="bold" font-size="9.5">V<tspan baseline-shift="sub" font-size="70%">th</tspan></text>

                    <!-- Conexión a R_th -->
                    <line x1="40" y1="85" x2="40" y2="60" stroke="#64748b" stroke-width="2"/>
                    <line x1="40" y1="60" x2="80" y2="60" stroke="#64748b" stroke-width="2"/>

                    <!-- Resistor R_th -->
                    <path d="M 80 60 L 86 52 L 96 68 L 106 52 L 116 68 L 126 52 L 132 60" stroke="#334155" stroke-width="2" fill="none"/>
                    <line x1="132" y1="60" x2="195" y2="60" stroke="#64748b" stroke-width="2"/>
                    <text x="106" y="44" text-anchor="middle" fill="#334155" font-weight="bold" font-size="9.5">R<tspan baseline-shift="sub" font-size="70%">th</tspan></text>

                    <!-- Flecha de corriente de carga I_L -->
                    <line x1="145" y1="52" x2="175" y2="52" stroke="#2563eb" stroke-width="1.8"/>
                    <polygon points="175,49 181,52 175,55" fill="#2563eb"/>
                    <text x="160" y="44" text-anchor="middle" fill="#2563eb" font-weight="bold" font-size="8">I<tspan baseline-shift="sub" font-size="70%">L</tspan> ➔</text>

                    <!-- Conexión inferior -->
                    <line x1="40" y1="115" x2="40" y2="140" stroke="#64748b" stroke-width="2"/>
                    <line x1="40" y1="140" x2="195" y2="140" stroke="#64748b" stroke-width="2"/>

                    <!-- Bornes A y B -->
                    <circle cx="195" cy="60" r="3.5" fill="#ef4444"/>
                    <text x="195" y="48" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="9">A</text>

                    <circle cx="195" cy="140" r="3.5" fill="#3b82f6"/>
                    <text x="195" y="152" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="9">B</text>

                    <!-- Resistor de Carga Variable R_L -->
                    <line x1="195" y1="60" x2="235" y2="60" stroke="#64748b" stroke-width="2"/>
                    <line x1="235" y1="60" x2="235" y2="72" stroke="#64748b" stroke-width="2"/>
                    <path d="M 235 72 L 229 78 L 241 86 L 229 94 L 241 102 L 229 110 L 235 116" stroke="#d97706" stroke-width="2.2" fill="none"/>
                    <line x1="235" y1="116" x2="235" y2="140" stroke="#64748b" stroke-width="2"/>
                    <line x1="195" y1="140" x2="235" y2="140" stroke="#64748b" stroke-width="2"/>

                    <!-- Flecha de reóstato / carga variable -->
                    <line x1="215" y1="120" x2="255" y2="68" stroke="#d97706" stroke-width="1.8"/>
                    <polygon points="250,67 257,65 255,73" fill="#d97706"/>
                    <text x="256" y="98" text-anchor="start" fill="#d97706" font-weight="bold" font-size="10.5">R<tspan baseline-shift="sub" font-size="70%">L</tspan></text>

                    <!-- Cuadro fórmula óptima -->
                    <rect x="15" y="158" width="255" height="42" rx="6" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
                    <text x="142" y="172" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="9.5">Condición Óptima: R<tspan baseline-shift="sub" font-size="70%">L</tspan> = R<tspan baseline-shift="sub" font-size="70%">th</tspan></text>
                    <text x="142" y="188" text-anchor="middle" fill="#047857" font-size="8.5">P<tspan baseline-shift="sub" font-size="70%">L,max</tspan> = V<tspan baseline-shift="sub" font-size="70%">th</tspan>² / (4 · R<tspan baseline-shift="sub" font-size="70%">th</tspan>)  |  η = 50%</text>
                  </g>

                  <!-- Panel Derecho: Curva Gráfica P_L(R_L) y Rendimiento η -->
                  <g transform="translate(315, 10)">
                    <rect x="0" y="0" width="350" height="210" rx="10" fill="#f8fafc" dark:fill="#0f172a" stroke="#cbd5e1" stroke-width="1"/>
                    <text x="175" y="18" text-anchor="middle" font-weight="bold" fill="#334155" font-size="11">Curva Característica P<tspan baseline-shift="sub" font-size="70%">L</tspan> vs R<tspan baseline-shift="sub" font-size="70%">L</tspan></text>
                    <text x="175" y="30" text-anchor="middle" fill="#64748b" font-size="8.5">Pico de potencia transferida vs Rendimiento energético η</text>

                    <!-- Ejes Cartesianos -->
                    <!-- Eje Y (Potencia P_L) -->
                    <line x1="45" y1="165" x2="45" y2="45" stroke="#64748b" stroke-width="1.5"/>
                    <polygon points="42,48 45,40 48,48" fill="#64748b"/>
                    <text x="35" y="46" text-anchor="end" fill="#1e40af" font-weight="bold" font-size="8.5">P<tspan baseline-shift="sub" font-size="70%">L</tspan> (W)</text>

                    <!-- Eje X (Resistencia R_L) -->
                    <line x1="45" y1="165" x2="330" y2="165" stroke="#64748b" stroke-width="1.5"/>
                    <polygon points="325,162 333,165 325,168" fill="#64748b"/>
                    <text x="325" y="180" text-anchor="end" fill="#64748b" font-weight="bold" font-size="8.5">R<tspan baseline-shift="sub" font-size="70%">L</tspan> (Ω) ➔</text>

                    <!-- Marcas en Eje X -->
                    <text x="45" y="177" text-anchor="middle" fill="#64748b" font-size="8">0 (cc)</text>

                    <!-- Marca R_L = R_th -->
                    <line x1="140" y1="163" x2="140" y2="167" stroke="#64748b" stroke-width="1.5"/>
                    <text x="140" y="178" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="8.5">R<tspan baseline-shift="sub" font-size="70%">th</tspan></text>

                    <!-- Marca 2·R_th y 3·R_th -->
                    <line x1="215" y1="163" x2="215" y2="167" stroke="#64748b" stroke-width="1.5"/>
                    <text x="215" y="178" text-anchor="middle" fill="#64748b" font-size="7.5">2·R<tspan baseline-shift="sub" font-size="70%">th</tspan></text>

                    <line x1="285" y1="163" x2="285" y2="167" stroke="#64748b" stroke-width="1.5"/>
                    <text x="285" y="178" text-anchor="middle" fill="#64748b" font-size="7.5">3·R<tspan baseline-shift="sub" font-size="70%">th</tspan></text>

                    <!-- Marca P_L,max en Eje Y -->
                    <line x1="43" y1="65" x2="47" y2="65" stroke="#1e40af" stroke-width="1.5"/>
                    <text x="40" y="68" text-anchor="end" fill="#1e40af" font-weight="bold" font-size="8">P<tspan baseline-shift="sub" font-size="70%">L,max</tspan></text>

                    <!-- Líneas Guía al Pico -->
                    <line x1="45" y1="65" x2="140" y2="65" stroke="#3b82f6" stroke-width="1.2" stroke-dasharray="3 3"/>
                    <line x1="140" y1="65" x2="140" y2="165" stroke="#3b82f6" stroke-width="1.2" stroke-dasharray="3 3"/>

                    <!-- Curva de Rendimiento η(%) (Ámbar discontinuous) -->
                    <path d="M 45 165 Q 90 145, 140 120 T 240 85 T 320 72" stroke="#d97706" stroke-width="1.5" stroke-dasharray="4 2" fill="none"/>
                    <circle cx="140" cy="120" r="3" fill="#d97706"/>
                    <text x="148" y="123" text-anchor="start" fill="#d97706" font-weight="bold" font-size="7.5">η = 50%</text>
                    <text x="315" y="65" text-anchor="end" fill="#d97706" font-size="7">η → 100% (ca)</text>

                    <!-- Curva de Potencia P_L(R_L) (Azul campana) -->
                    <path d="M 45 165 C 75 140, 105 70, 140 65 C 180 72, 230 115, 320 145" stroke="#2563eb" stroke-width="2.5" fill="none"/>
                    <circle cx="140" cy="65" r="4.5" fill="#2563eb"/>

                    <!-- Etiqueta del Pico Máximo -->
                    <rect x="110" y="42" width="135" height="20" rx="4" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
                    <text x="177" y="55" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="8">P<tspan baseline-shift="sub" font-size="70%">max</tspan> = V<tspan baseline-shift="sub" font-size="70%">th</tspan>² / (4·R<tspan baseline-shift="sub" font-size="70%">th</tspan>)</text>

                    <!-- Leyenda inferior -->
                    <rect x="25" y="186" width="300" height="18" rx="4" fill="#f1f5f9" stroke="#e2e8f0" stroke-width="1"/>
                    <text x="175" y="198" text-anchor="middle" fill="#475569" font-size="7.5">Azul: Potencia P<tspan baseline-shift="sub" font-size="70%">L</tspan> (pico en R<tspan baseline-shift="sub" font-size="70%">th</tspan>) | Ámbar: Rendimiento η = R<tspan baseline-shift="sub" font-size="70%">L</tspan> / (R<tspan baseline-shift="sub" font-size="70%">th</tspan> + R<tspan baseline-shift="sub" font-size="70%">L</tspan>)</text>
                  </g>
                </svg>
              </div>
            </div>
          `
        },
        {
          id: 'e1-u1-formulario',
          titulo: '1.5 Formulario de Examen y Guía de Resolución Rápida - Unidad 1',
          contenido: `
            <div class="overflow-x-auto my-3">
              <table class="w-full text-xs text-left border-collapse border border-slate-200 dark:border-slate-800">
                <thead>
                  <tr class="bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 font-mono">
                    <th class="p-2 border border-slate-200 dark:border-slate-800">Ley / Configuración</th>
                    <th class="p-2 border border-slate-200 dark:border-slate-800">Fórmula de Cálculo</th>
                    <th class="p-2 border border-slate-200 dark:border-slate-800">Condición / Hipótesis</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 dark:divide-slate-800 font-mono">
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">Ley de Ohm (Convención Pasiva)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$V = + I \\cdot R \\quad (P = I^2 R)$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">Corriente ingresa por borne $(+)$</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">Asociación Serie</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$R_{eq} = \\sum R_k$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">Misma corriente ($R_{eq} > \\max R_i$)</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">Asociación Paralelo (2 ramas)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$R_{eq} = \\frac{R_1 R_2}{R_1 + R_2}$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">Misma tensión ($R_{eq} < \\min R_i$)</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">Teorema de Kennelly (Δ ➔ Y)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$R_A = \\frac{R_{AB} R_{CA}}{\\sum R_{\\Delta}}$ (simétrico: $R_Y = R_{\\Delta} / 3$)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">Redes en puente / no reducibles</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">Teorema de Kennelly (Y ➔ Δ)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$R_{AB} = \\frac{\\sum R_i R_j}{R_C}$ (simétrico: $R_{\\Delta} = 3 R_Y$)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">Conversión a triángulo</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">Divisor de Tensión (en vacío)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$V_{out} = V_{in} \\frac{R_2}{R_1 + R_2}$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">Sobre $R_2$ sin carga conectada</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">Divisor de Tensión (con carga $R_L$)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$V_{out} = V_{in} \\frac{R_2 \\parallel R_L}{R_1 + (R_2 \\parallel R_L)}$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">Divisor rígido si $R_L \\ge 10 R_2$</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">Divisor de Corriente (2 ramas)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$I_1 = I_{in} \\frac{R_2}{R_1 + R_2}, \\; I_2 = I_{in} \\frac{R_1}{R_1 + R_2}$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">Ramas en paralelo</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">Teorema de Millman</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$V_{AB} = \\frac{\\sum \\pm E_k / R_k + \\sum \\pm I_s}{\\sum 1 / R_k}$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">$N$ ramas en paralelo entre dos nodos</td>
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
      introduccion: 'Esta unidad abarca la teoría de bandas de energía y clasificación de materiales (conductores, aislantes y semiconductores), la física de semiconductores de silicio intrínsecos y extrínsecos (tipo P y N), la formación de la zona de carga espacial en la juntura PN, el análisis gráfico y microscópico de la polarización directa e inversa, la ecuación de Shockley, los modelos del diodo, y las aplicaciones en rectificadores, filtros capacitivos y reguladores Zener.',
      secciones: [
        {
          id: 'e1-u2-tipos-materiales',
          titulo: '2.1 Estructura Atómica, Teoría de Bandas y Clasificación de Materiales',
          contenido: `
            <p class="mb-3">Las propiedades de conducción eléctrica de los sólidos se explican mediante la <strong>teoría cuántica de bandas de energía</strong>. En un átomo aislado, los electrones ocupan niveles discretos de energía. Al agruparse trillones de átomos en una red cristalina sólida periódica, el principio de exclusión de Pauli hace que los niveles electrónicos de valencia se desdoblen en rangos continuos de energías permitidas separados por intervalos prohibidos.</p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 my-3 text-xs">
              <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span class="font-bold text-blue-600 dark:text-blue-400 block mb-1 uppercase tracking-wider text-[11px]">Banda de Valencia (BV)</span>
                <p class="text-slate-600 dark:text-slate-400">
                  Rango de energías ocupado por los electrones más externos ligados a los enlaces químicos covalentes. Sus electrones no tienen libertad de desplazamiento a menos que reciban energía adicional para saltar a la banda superior.
                </p>
              </div>

              <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span class="font-bold text-amber-600 dark:text-amber-400 block mb-1 uppercase tracking-wider text-[11px]">Banda Prohibida (*Bandgap* $E_g$)</span>
                <p class="text-slate-600 dark:text-slate-400">
                  Brecha de energía intermedia ($E_g = E_C - E_V$) en la cual no pueden existir estados cuánticos electrónicos estables en un cristal puro perfecto.
                </p>
              </div>

              <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span class="font-bold text-emerald-600 dark:text-emerald-400 block mb-1 uppercase tracking-wider text-[11px]">Banda de Conducción (BC)</span>
                <p class="text-slate-600 dark:text-slate-400">
                  Banda energética superior en la que los electrones se hallan deslocalizados (libres de los enlaces individuales). Ante la presencia de un campo eléctrico externo $\\vec{\\mathcal{E}}$, adquieren velocidad de deriva y transportan corriente eléctrica.
                </p>
              </div>
            </div>

            <!-- Gráfico SVG: Diagrama de Bandas de Energía de Materiales -->
            <div class="my-4 p-4 rounded-2xl bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
              <h6 class="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-3 text-center">
                📊 Diagrama Comparativo de Bandas de Energía ($E_g$)
              </h6>
              <div class="overflow-x-auto flex justify-center">
                <svg viewBox="0 0 680 250" class="w-full max-w-2xl h-auto font-sans text-xs select-none">
                  <!-- Fondo sutil de cuadrícula -->
                  <rect width="680" height="250" fill="transparent"/>

                  <!-- Columna 1: Conductor -->
                  <g transform="translate(30, 20)">
                    <rect x="0" y="0" width="180" height="200" rx="12" fill="#3b82f6" fill-opacity="0.06" stroke="#3b82f6" stroke-opacity="0.3" stroke-width="1.5"/>
                    <text x="90" y="24" text-anchor="middle" font-weight="bold" fill="#2563eb" font-size="12">1. CONDUCTOR</text>
                    <text x="90" y="38" text-anchor="middle" fill="#64748b" font-size="10">(Cobre, Plata, Oro)</text>
                    
                    <!-- Banda Conducción -->
                    <rect x="25" y="55" width="130" height="55" rx="6" fill="#8b5cf6" fill-opacity="0.25" stroke="#8b5cf6" stroke-width="1.5"/>
                    <text x="90" y="85" text-anchor="middle" fill="#7c3aed" font-size="11" font-weight="600">Banda Conducción</text>
                    
                    <!-- Zona de Superposición -->
                    <rect x="25" y="95" width="130" height="30" fill="#3b82f6" fill-opacity="0.4" stroke="#2563eb" stroke-dasharray="3,3"/>
                    <text x="90" y="113" text-anchor="middle" fill="#1d4ed8" font-size="9" font-weight="bold">Superposición (Overlap)</text>
                    
                    <!-- Banda Valencia -->
                    <rect x="25" y="110" width="130" height="55" rx="6" fill="#3b82f6" fill-opacity="0.25" stroke="#3b82f6" stroke-width="1.5"/>
                    <text x="90" y="145" text-anchor="middle" fill="#2563eb" font-size="11" font-weight="600">Banda Valencia</text>

                    <!-- Etiqueta Gap -->
                    <text x="90" y="185" text-anchor="middle" fill="#059669" font-size="11" font-weight="bold">E<tspan baseline-shift="sub" font-size="70%">g</tspan> ≈ 0 eV</text>
                  </g>

                  <!-- Columna 2: Semiconductor -->
                  <g transform="translate(250, 20)">
                    <rect x="0" y="0" width="180" height="200" rx="12" fill="#10b981" fill-opacity="0.06" stroke="#10b981" stroke-opacity="0.3" stroke-width="1.5"/>
                    <text x="90" y="24" text-anchor="middle" font-weight="bold" fill="#059669" font-size="12">2. SEMICONDUCTOR</text>
                    <text x="90" y="38" text-anchor="middle" fill="#64748b" font-size="10">(Silicio, Germanio, GaAs)</text>
                    
                    <!-- Banda Conducción -->
                    <rect x="25" y="55" width="130" height="42" rx="6" fill="#8b5cf6" fill-opacity="0.25" stroke="#8b5cf6" stroke-width="1.5"/>
                    <text x="90" y="80" text-anchor="middle" fill="#7c3aed" font-size="11" font-weight="600">Banda Conducción</text>
                    
                    <!-- Gap Intermedio -->
                    <line x1="90" y1="97" x2="90" y2="128" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
                    <rect x="40" y="103" width="100" height="20" rx="4" fill="#fef3c7" stroke="#f59e0b" stroke-width="1"/>
                    <text x="90" y="117" text-anchor="middle" fill="#b45309" font-size="10" font-weight="bold">E<tspan baseline-shift="sub" font-size="70%">g</tspan> ≈ 1.12 eV (Si)</text>
                    
                    <!-- Banda Valencia -->
                    <rect x="25" y="128" width="130" height="42" rx="6" fill="#3b82f6" fill-opacity="0.25" stroke="#3b82f6" stroke-width="1.5"/>
                    <text x="90" y="153" text-anchor="middle" fill="#2563eb" font-size="11" font-weight="600">Banda Valencia</text>

                    <text x="90" y="185" text-anchor="middle" fill="#047857" font-size="10" font-weight="medium">Gap moderado (excitación térmica)</text>
                  </g>

                  <!-- Columna 3: Aislante -->
                  <g transform="translate(470, 20)">
                    <rect x="0" y="0" width="180" height="200" rx="12" fill="#ef4444" fill-opacity="0.06" stroke="#ef4444" stroke-opacity="0.3" stroke-width="1.5"/>
                    <text x="90" y="24" text-anchor="middle" font-weight="bold" fill="#dc2626" font-size="12">3. AISLANTE</text>
                    <text x="90" y="38" text-anchor="middle" fill="#64748b" font-size="10">(SiO2, Vidrio, Diamante)</text>
                    
                    <!-- Banda Conducción Vacía -->
                    <rect x="25" y="55" width="130" height="35" rx="6" fill="#94a3b8" fill-opacity="0.2" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
                    <text x="90" y="77" text-anchor="middle" fill="#64748b" font-size="10">BC Vacía (Sin e⁻)</text>
                    
                    <!-- Gap Enorme -->
                    <rect x="35" y="97" width="110" height="22" rx="4" fill="#fee2e2" stroke="#ef4444" stroke-width="1"/>
                    <text x="90" y="112" text-anchor="middle" fill="#b91c1c" font-size="10" font-weight="bold">E<tspan baseline-shift="sub" font-size="70%">g</tspan> &gt; 5 a 9 eV</text>
                    
                    <!-- Banda Valencia Llena -->
                    <rect x="25" y="135" width="130" height="35" rx="6" fill="#3b82f6" fill-opacity="0.25" stroke="#3b82f6" stroke-width="1.5"/>
                    <text x="90" y="157" text-anchor="middle" fill="#2563eb" font-size="10" font-weight="600">BV Completa (e⁻ fijos)</text>

                    <text x="90" y="185" text-anchor="middle" fill="#b91c1c" font-size="10" font-weight="medium">Gap inaccesible a 300 K</text>
                  </g>
                </svg>
              </div>
            </div>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Tabla Comparativa Fundamental de Propiedades Eléctricas</h5>
            <div class="overflow-x-auto my-2">
              <table class="w-full text-xs text-left border-collapse border border-slate-200 dark:border-slate-800">
                <thead>
                  <tr class="bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 font-mono">
                    <th class="p-2 border border-slate-200 dark:border-slate-800">Parámetro / Propiedad</th>
                    <th class="p-2 border border-slate-200 dark:border-slate-800">Conductor (Metal)</th>
                    <th class="p-2 border border-slate-200 dark:border-slate-800">Semiconductor (Silicio)</th>
                    <th class="p-2 border border-slate-200 dark:border-slate-800">Aislante (Dieléctrico)</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 dark:divide-slate-800 font-sans">
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-semibold font-mono">Banda Prohibida ($E_g$)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$E_g \\approx 0\\text{ eV}$ (superpuestas)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$1.12\\text{ eV}$ (Si), $0.67\\text{ eV}$ (Ge)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$E_g > 5 - 9\\text{ eV}$</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-semibold font-mono">Resistividad ($\\rho$)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-mono">$\\sim 10^{-8}\\,\\Omega\\cdot\\text{m}$ (muy baja)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-mono">$10^{-3} - 10^3\\,\\Omega\\cdot\\text{m}$ (modulable)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-mono">$> 10^{12}\\,\\Omega\\cdot\\text{m}$ (altísima)</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-semibold font-mono">Densidad Portadores ($n$)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-mono">$\\sim 10^{28}\\,\\text{m}^{-3}$ (abundancia fija)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-mono">$n_i \\approx 1.5 \\times 10^{16}\\,\\text{m}^{-3}$ a $300\\text{ K}$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-mono">$\\approx 0$ a temperatura ambiente</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-semibold font-mono">Efecto con el Calor ($T \\uparrow$)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">
                      <strong>PTC:</strong> A mayor calor, aumenta su resistencia (los átomos vibran más y chocan a los electrones).
                    </td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">
                      <strong>NTC:</strong> A mayor calor, <strong>baja</strong> su resistencia (el calor libera más electrones y huecos).
                    </td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">
                      Permanece aislante (salvo que se supere la tensión de ruptura dieléctrica).
                    </td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-semibold font-mono">Portadores de Carga</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">Únicamente electrones libres</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">Electrones libres y <strong>huecos</strong> ($h^+$)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">Sin portadores móviles disponibles</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-5 mb-2">Semiconductores Puros (Intrínsecos) y Dopaje</h5>
            <p class="mb-2 text-xs sm:text-sm">
              El silicio puro tiene 4 electrones en su última capa. A temperatura ambiente casi no tiene electrones libres, por lo que conduce muy poco. Para que sirva en circuitos, se le agregan pequeñísimas cantidades de impurezas en un proceso llamado <strong>dopaje</strong>. Así nacen dos tipos de materiales:
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2">
              <div class="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-950 dark:text-cyan-200 text-xs">
                <span class="font-bold uppercase tracking-wider block mb-1">🟦 Semiconductor Tipo N (Negativo)</span>
                <p class="text-slate-600 dark:text-slate-400">
                  Se dopa con elementos como <strong>Fósforo (P)</strong> o <strong>Arsénico (As)</strong> que tienen 5 electrones. Ese quinto electrón sobra y queda libre para moverse fácilmente.
                </p>
                <ul class="list-disc pl-4 space-y-0.5 mt-1.5 text-[11px]">
                  <li><strong>Portadores mayoritarios:</strong> Electrones libres (cargas negativas).</li>
                  <li><strong>Portadores minoritarios:</strong> Huecos (casi ninguno).</li>
                  <li>Al ceder su electrón libre, queda un átomo fijo con carga positiva en la red ($N_D^+$).</li>
                </ul>
              </div>

              <div class="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-950 dark:text-rose-200 text-xs">
                <span class="font-bold uppercase tracking-wider block mb-1">🟥 Semiconductor Tipo P (Positivo)</span>
                <p class="text-slate-600 dark:text-slate-400">
                  Se dopa con elementos como <strong>Boro (B)</strong> que tienen solo 3 electrones. Queda un espacio vacío o "hueco" con ganas de atrapar un electrón.
                </p>
                <ul class="list-disc pl-4 space-y-0.5 mt-1.5 text-[11px]">
                  <li><strong>Portadores mayoritarios:</strong> Huecos (actúan como cargas positivas móviles).</li>
                  <li><strong>Portadores minoritarios:</strong> Electrones libres (casi ninguno).</li>
                  <li>Al atrapar un electrón, queda un átomo fijo con carga negativa en la red ($N_A^-$).</li>
                </ul>
              </div>
            </div>

            <div class="p-3 my-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
              <span class="font-bold text-slate-800 dark:text-slate-200 block mb-1">⚖️ Ley de Acción de Masas (Equilibrio de portadores):</span>
              <p class="text-slate-600 dark:text-slate-400">
                A una temperatura dada, si aumentás la cantidad de electrones ($n$), disminuyen los huecos ($p$), y viceversa. Su producto siempre es un valor constante:
              </p>
              $$\\mathbf{n \\cdot p = n_i^2}$$
              <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                <strong>En criollo:</strong> En un material tipo N mandan los electrones y los huecos casi no existen; en el tipo P mandan los huecos y los electrones casi no existen.
              </p>
            </div>
          `
        },
        {
          id: 'e1-u2-fisica-juntura',
          titulo: '2.2 La Juntura PN y la Barrera de Potencial (¿Cómo nace un diodo?)',
          contenido: `
            <p class="mb-3 text-xs sm:text-sm">
              Un diodo semiconductor se forma simplemente uniendo un cristal <strong>tipo P</strong> con uno <strong>tipo N</strong>. Al juntarlos, ocurre un proceso natural que crea la barrera interna de conducción:
            </p>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">¿Cómo se forma la Zona de Agotamiento? (Paso a paso para entenderlo fácil)</h5>
            
            <div class="space-y-2.5 text-xs sm:text-sm">
              <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span class="font-bold text-blue-600 dark:text-blue-400">1. Atracción inicial en la frontera:</span>
                <p class="text-slate-600 dark:text-slate-400 mt-0.5">
                  En el lado N sobran electrones y en el lado P sobran huecos. En el instante en que se tocan, los electrones más cercanos al borde saltan naturalmente al lado P para llenar los huecos vecinos.
                </p>
              </div>

              <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span class="font-bold text-blue-600 dark:text-blue-400">2. Queda una "tierra de nadie" (Zona de Agotamiento o ZCE):</span>
                <p class="text-slate-600 dark:text-slate-400 mt-0.5">
                  Al saltar los electrones, en el lado N quedan átomos fijos con carga positiva, y en el lado P quedan átomos fijos con carga negativa. Justo en el medio queda una franja angosta donde <strong>ya no quedan cargas libres</strong>: quedó desierta ("agotada").
                </p>
              </div>

              <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span class="font-bold text-blue-600 dark:text-blue-400">3. Se crea un "muro eléctrico" que frena el paso (Equilibrio):</span>
                <p class="text-slate-600 dark:text-slate-400 mt-0.5">
                  Esos átomos fijos cargados crean un campo eléctrico interno que empuja hacia atrás a los electrones que quieran seguir pasando. Se alcanza un equilibrio automático donde nadie más puede cruzar solo: la corriente total es <strong>cero</strong> ($I = 0$).
                </p>
              </div>
            </div>

            <!-- Recuadro explicativo de los 0.7V -->
            <div class="p-3.5 my-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs">
              <h5 class="font-bold text-xs uppercase tracking-wider mb-1.5 flex items-center gap-1.5 text-amber-800 dark:text-amber-300">
                <span>⚡</span> ¿De dónde salen los famosos 0.7 V del diodo? (Barrera de Potencial V₀)
              </h5>
              <p class="text-slate-700 dark:text-slate-300 mb-2">
                Ese "muro eléctrico" interno equivale a una pequeña batería interna que se opone al paso de corriente. Para que el diodo empiece a conducir, una fuente externa debe vencer esta tensión:
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 my-2 font-mono">
                <div class="p-2 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-amber-500/20 text-center">
                  <span class="text-slate-500 dark:text-slate-400 block text-[11px]">Diodo de Silicio (Si)</span>
                  <span class="text-base font-bold text-amber-600 dark:text-amber-400">V₀ ≈ 0.6 V a 0.7 V</span>
                </div>
                <div class="p-2 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-amber-500/20 text-center">
                  <span class="text-slate-500 dark:text-slate-400 block text-[11px]">Diodo de Germanio (Ge)</span>
                  <span class="text-base font-bold text-amber-600 dark:text-amber-400">V₀ ≈ 0.2 V a 0.3 V</span>
                </div>
              </div>
              <p class="text-[11px] text-slate-600 dark:text-slate-400 mt-1.5">
                💡 <strong>Lo que necesitás para los ejercicios:</strong> Este es el origen físico del famoso valor <strong>V<sub>D</sub> ≈ 0.7 V</strong> que usamos como caída de tensión en todos los análisis y ejercicios prácticos de circuitos con diodos.
              </p>
            </div>

            <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
              <span class="font-bold text-slate-800 dark:text-slate-200 block mb-1">¿Qué significa esto para el funcionamiento del diodo?</span>
              <ul class="list-disc pl-4 space-y-1 text-slate-600 dark:text-slate-400">
                <li><strong>En reposo (sin conectar):</strong> La barrera de <strong>0.7 V</strong> frena todo flujo → corriente nula (I = 0).</li>
                <li><strong>En directa (+ a P, − a N):</strong> Si la fuente supera los <strong>0.7 V</strong>, vence el muro y la corriente fluye libremente (diodo conduciendo).</li>
                <li><strong>En inversa (+ a N, − a P):</strong> La fuente refuerza el muro e impide el paso de corriente (diodo bloqueado).</li>
              </ul>
            </div>
          `
        },
        {
          id: 'e1-u2-polarizacion-juntura',
          titulo: '2.3 Polarización de la Juntura PN (Directa e Inversa) y Curva Característica I-V',
          contenido: `
            <p class="mb-3">La aplicación de una diferencia de potencial externa $V_D$ altera radicalmente la altura de la barrera de potencial y el ancho de la ZCE, transformando la juntura en una válvula eléctrica unidireccional.</p>

            <!-- Gráfico SVG Integral de Polarización Directa vs Inversa -->
            <div class="my-4 p-4 rounded-2xl bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
              <h6 class="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2 text-center">
                📊 Gráfico Físico: Estados de Polarización de la Juntura PN y Comportamiento del Muro
              </h6>
              <div class="overflow-x-auto flex justify-center">
                <svg viewBox="0 0 720 280" class="w-full max-w-3xl h-auto font-sans text-xs select-none">
                  <defs>
                    <marker id="arr-red-p" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                      <path d="M 0 0 L 6 3 L 0 6 z" fill="#ef4444"/>
                    </marker>
                    <marker id="arr-green-p" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                      <path d="M 0 0 L 6 3 L 0 6 z" fill="#10b981"/>
                    </marker>
                  </defs>

                  <!-- ESTADO 1: EQUILIBRIO (V_D = 0) -->
                  <g transform="translate(15, 12)">
                    <rect x="0" y="0" width="215" height="256" rx="10" fill="#3b82f6" fill-opacity="0.04" stroke="#64748b" stroke-opacity="0.3" stroke-width="1.2"/>
                    <text x="107" y="20" text-anchor="middle" font-weight="bold" fill="#475569" font-size="10.5">1. EQUILIBRIO (V<tspan baseline-shift="sub" font-size="70%">D</tspan> = 0)</text>
                    <text x="107" y="33" text-anchor="middle" fill="#64748b" font-size="8.5">Sin polarización externa</text>
                    
                    <!-- Cristal PN -->
                    <rect x="15" y="44" width="90" height="64" fill="#f43f5e" fill-opacity="0.22" stroke="#f43f5e" stroke-width="1.2"/>
                    <text x="35" y="68" fill="#e11d48" font-weight="bold" font-size="13">P</text>
                    <text x="35" y="82" fill="#64748b" font-size="7.5">Huecos (h⁺)</text>

                    <rect x="105" y="44" width="90" height="64" fill="#06b6d4" fill-opacity="0.22" stroke="#06b6d4" stroke-width="1.2"/>
                    <text x="165" y="68" fill="#0891b2" font-weight="bold" font-size="13">N</text>
                    <text x="165" y="82" fill="#64748b" font-size="7.5">Electrones (e⁻)</text>

                    <!-- ZCE -->
                    <rect x="75" y="44" width="60" height="64" fill="#cbd5e1" fill-opacity="0.5" stroke="#64748b" stroke-dasharray="2,2"/>
                    <text x="105" y="58" text-anchor="middle" fill="#334155" font-size="7.5" font-weight="bold">ZCE</text>
                    <text x="88" y="76" text-anchor="middle" fill="#e11d48" font-size="10" font-weight="bold">- -</text>
                    <text x="122" y="76" text-anchor="middle" fill="#0891b2" font-size="10" font-weight="bold">+ +</text>

                    <!-- Campo interno E -->
                    <line x1="122" y1="94" x2="88" y2="94" stroke="#e11d48" stroke-width="1.6" marker-end="url(#arr-red-p)"/>
                    <text x="105" y="91" text-anchor="middle" fill="#e11d48" font-size="7" font-weight="bold">E<tspan baseline-shift="sub" font-size="70%">int</tspan> (N→P)</text>

                    <!-- Divisoria hacia sección muro -->
                    <line x1="15" y1="120" x2="200" y2="120" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3,3"/>

                    <!-- Perfil de Barrera / Muro -->
                    <text x="107" y="135" text-anchor="middle" font-weight="bold" fill="#334155" font-size="9">Muro de Potencial (Barrera)</text>
                    <path d="M 25 190 L 75 190 Q 105 175 105 160 Q 105 148 185 148" fill="none" stroke="#2563eb" stroke-width="2.2"/>
                    <path d="M 25 198 L 25 190 L 75 190 Q 105 175 105 160 Q 105 148 185 148 L 185 198 Z" fill="#3b82f6" fill-opacity="0.08"/>

                    <!-- Cota de altura del muro -->
                    <line x1="105" y1="150" x2="105" y2="188" stroke="#ef4444" stroke-width="1.3" marker-start="url(#arr-red-p)" marker-end="url(#arr-red-p)"/>
                    <rect x="42" y="162" width="126" height="16" rx="4" fill="#ffffff" fill-opacity="0.92" stroke="#bfdbfe" stroke-width="0.8"/>
                    <text x="105" y="173" text-anchor="middle" fill="#1e40af" font-size="8" font-weight="bold">Altura = V<tspan baseline-shift="sub" font-size="70%">0</tspan> ≈ 0.7 V</text>

                    <text x="107" y="218" text-anchor="middle" fill="#64748b" font-size="8">Frena el paso libre de cargas</text>
                    <text x="107" y="238" text-anchor="middle" fill="#059669" font-size="9.5" font-weight="bold">I<tspan baseline-shift="sub" font-size="70%">total</tspan> = 0 (Equilibrio)</text>
                  </g>

                  <!-- ESTADO 2: POLARIZACIÓN DIRECTA (V_D > 0) -->
                  <g transform="translate(250, 12)">
                    <rect x="0" y="0" width="215" height="256" rx="10" fill="#10b981" fill-opacity="0.06" stroke="#10b981" stroke-opacity="0.4" stroke-width="1.4"/>
                    <text x="107" y="20" text-anchor="middle" font-weight="bold" fill="#059669" font-size="10.5">2. POLARIZACIÓN DIRECTA (V<tspan baseline-shift="sub" font-size="70%">D</tspan> &gt; 0)</text>
                    <text x="107" y="33" text-anchor="middle" fill="#059669" font-size="8.5">Ánodo (+) a P · Cátodo (-) a N</text>
                    
                    <!-- Cristal PN -->
                    <rect x="15" y="44" width="90" height="64" fill="#f43f5e" fill-opacity="0.22" stroke="#f43f5e" stroke-width="1.2"/>
                    <text x="35" y="65" fill="#e11d48" font-weight="bold" font-size="13">P</text>

                    <rect x="105" y="44" width="90" height="64" fill="#06b6d4" fill-opacity="0.22" stroke="#06b6d4" stroke-width="1.2"/>
                    <text x="170" y="65" fill="#0891b2" font-weight="bold" font-size="13">N</text>

                    <!-- ZCE Angosta -->
                    <rect x="94" y="44" width="22" height="64" fill="#cbd5e1" fill-opacity="0.5" stroke="#10b981" stroke-width="1.4"/>
                    <text x="105" y="56" text-anchor="middle" fill="#059669" font-size="7" font-weight="bold">ZCE Estrecha</text>

                    <!-- Flecha de corriente directa masiva -->
                    <line x1="22" y1="80" x2="185" y2="80" stroke="#10b981" stroke-width="3" marker-end="url(#arr-green-p)"/>
                    <text x="105" y="93" text-anchor="middle" fill="#047857" font-size="8.5" font-weight="bold">I<tspan baseline-shift="sub" font-size="70%">D</tspan> Masiva ➔</text>

                    <!-- Fuente Externa -->
                    <path d="M 15 76 L 6 76 L 6 114 L 204 114 L 204 76 L 195 76" fill="none" stroke="#059669" stroke-width="1.2"/>
                    <rect x="75" y="106" width="60" height="15" rx="3" fill="#ffffff" fill-opacity="0.95" stroke="#86efac" stroke-width="0.8"/>
                    <text x="105" y="117" text-anchor="middle" fill="#047857" font-size="8.5" font-weight="bold">+ [ V<tspan baseline-shift="sub" font-size="70%">D</tspan> ] -</text>

                    <!-- Divisoria hacia sección muro -->
                    <line x1="15" y1="126" x2="200" y2="126" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3,3"/>

                    <!-- Perfil de Barrera / Muro Reducido -->
                    <text x="107" y="139" text-anchor="middle" font-weight="bold" fill="#059669" font-size="9">Muro Aplanado (Superado)</text>
                    <path d="M 25 178 L 75 178 Q 105 172 105 168 Q 105 164 185 164" fill="none" stroke="#10b981" stroke-width="2.2"/>
                    <path d="M 25 198 L 25 178 L 75 178 Q 105 172 105 168 Q 105 164 185 164 L 185 198 Z" fill="#10b981" fill-opacity="0.08"/>

                    <!-- Indicación de paso libre -->
                    <line x1="45" y1="154" x2="165" y2="154" stroke="#10b981" stroke-width="1.8" marker-end="url(#arr-green-p)"/>
                    <rect x="36" y="166" width="138" height="16" rx="4" fill="#ffffff" fill-opacity="0.92" stroke="#86efac" stroke-width="0.8"/>
                    <text x="105" y="177" text-anchor="middle" fill="#047857" font-size="8" font-weight="bold">Muro cae: (V<tspan baseline-shift="sub" font-size="70%">0</tspan> - V<tspan baseline-shift="sub" font-size="70%">D</tspan>) ≈ 0 V</text>

                    <text x="107" y="218" text-anchor="middle" fill="#059669" font-size="8">Paso libre para portadores</text>
                    <text x="107" y="238" text-anchor="middle" fill="#047857" font-size="9.5" font-weight="bold">I<tspan baseline-shift="sub" font-size="70%">D</tspan> fluye intensamente</text>
                  </g>

                  <!-- ESTADO 3: POLARIZACIÓN INVERSA (V_D < 0) -->
                  <g transform="translate(485, 12)">
                    <rect x="0" y="0" width="215" height="256" rx="10" fill="#ef4444" fill-opacity="0.06" stroke="#ef4444" stroke-opacity="0.4" stroke-width="1.4"/>
                    <text x="107" y="20" text-anchor="middle" font-weight="bold" fill="#dc2626" font-size="10.5">3. POLARIZACIÓN INVERSA (V<tspan baseline-shift="sub" font-size="70%">D</tspan> &lt; 0)</text>
                    <text x="107" y="33" text-anchor="middle" fill="#dc2626" font-size="8.5">Ánodo (-) a P · Cátodo (+) a N</text>
                    
                    <!-- Cristal PN -->
                    <rect x="15" y="44" width="90" height="64" fill="#f43f5e" fill-opacity="0.22" stroke="#f43f5e" stroke-width="1.2"/>
                    <text x="28" y="68" fill="#e11d48" font-weight="bold" font-size="13">P</text>

                    <rect x="105" y="44" width="90" height="64" fill="#06b6d4" fill-opacity="0.22" stroke="#06b6d4" stroke-width="1.2"/>
                    <text x="175" y="68" fill="#0891b2" font-weight="bold" font-size="13">N</text>

                    <!-- ZCE Ensanchada -->
                    <rect x="55" y="44" width="100" height="64" fill="#cbd5e1" fill-opacity="0.5" stroke="#ef4444" stroke-width="1.4" stroke-dasharray="2,2"/>
                    <text x="105" y="56" text-anchor="middle" fill="#b91c1c" font-size="7.5" font-weight="bold">ZCE Ensanchada (W &gt; W<tspan baseline-shift="sub" font-size="70%">0</tspan>)</text>
                    <text x="75" y="76" text-anchor="middle" fill="#e11d48" font-size="10" font-weight="bold">- - -</text>
                    <text x="135" y="76" text-anchor="middle" fill="#0891b2" font-size="10" font-weight="bold">+ + +</text>

                    <!-- Fuente Inversa -->
                    <path d="M 15 76 L 6 76 L 6 114 L 204 114 L 204 76 L 195 76" fill="none" stroke="#dc2626" stroke-width="1.2"/>
                    <rect x="75" y="106" width="60" height="15" rx="3" fill="#ffffff" fill-opacity="0.95" stroke="#fca5a5" stroke-width="0.8"/>
                    <text x="105" y="117" text-anchor="middle" fill="#dc2626" font-size="8.5" font-weight="bold">- [ V<tspan baseline-shift="sub" font-size="70%">R</tspan> ] +</text>

                    <!-- Divisoria hacia sección muro -->
                    <line x1="15" y1="126" x2="200" y2="126" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3,3"/>

                    <!-- Perfil de Barrera / Muro Elevado -->
                    <text x="107" y="139" text-anchor="middle" font-weight="bold" fill="#dc2626" font-size="9">Muro de Potencial (Altísimo)</text>
                    <path d="M 25 204 L 55 204 Q 105 168 105 152 Q 105 136 185 136" fill="none" stroke="#ef4444" stroke-width="2.2"/>
                    <path d="M 25 210 L 25 204 L 55 204 Q 105 168 105 152 Q 105 136 185 136 L 185 210 Z" fill="#ef4444" fill-opacity="0.08"/>

                    <!-- Cota de altura del muro elevado -->
                    <line x1="105" y1="138" x2="105" y2="202" stroke="#ef4444" stroke-width="1.3" marker-start="url(#arr-red-p)" marker-end="url(#arr-red-p)"/>
                    <rect x="36" y="162" width="138" height="16" rx="4" fill="#ffffff" fill-opacity="0.92" stroke="#fca5a5" stroke-width="0.8"/>
                    <text x="105" y="173" text-anchor="middle" fill="#b91c1c" font-size="8" font-weight="bold">Muro sube: V<tspan baseline-shift="sub" font-size="70%">0</tspan> + V<tspan baseline-shift="sub" font-size="70%">R</tspan> &gt;&gt; 0.7 V</text>

                    <text x="107" y="218" text-anchor="middle" fill="#dc2626" font-size="8">Imposible cruzar para portadores</text>
                    <text x="107" y="238" text-anchor="middle" fill="#dc2626" font-size="9.5" font-weight="bold">I ≈ -I<tspan baseline-shift="sub" font-size="70%">S</tspan> ≈ 0 (Corriente nula)</text>
                  </g>
                </svg>
              </div>
            </div>

            <!-- Gráfico SVG: Curva Característica I-V del Diodo -->
            <div class="my-4 p-4 rounded-2xl bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
              <h6 class="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2 text-center">
                📈 Curva Característica I-V del Diodo de Silicio
              </h6>
              <div class="overflow-x-auto flex justify-center">
                <svg viewBox="0 0 660 280" class="w-full max-w-xl h-auto font-sans text-xs select-none">
                  <!-- Ejes coordenados -->
                  <line x1="40" y1="155" x2="620" y2="155" stroke="#64748b" stroke-width="1.5"/>
                  <line x1="330" y1="20" x2="330" y2="255" stroke="#64748b" stroke-width="1.5"/>
                  
                  <!-- Etiquetas de ejes con subíndices formateados -->
                  <text x="625" y="159" fill="#64748b" font-weight="bold" font-size="11">V<tspan baseline-shift="sub" font-size="70%">D</tspan> (V)</text>
                  <text x="335" y="25" fill="#64748b" font-weight="bold" font-size="11">I<tspan baseline-shift="sub" font-size="70%">D</tspan> (mA)</text>
                  <text x="335" y="255" fill="#64748b" font-size="10">-I<tspan baseline-shift="sub" font-size="70%">D</tspan> (μA)</text>
                  <text x="48" y="147" fill="#64748b" font-size="10">-V<tspan baseline-shift="sub" font-size="70%">D</tspan> (V)</text>
                  <text x="320" y="170" fill="#64748b" font-size="10">0</text>

                  <!-- Curva Directa -->
                  <path d="M 170 157 L 330 155 Q 390 155 410 148 Q 435 132 460 38" fill="none" stroke="#10b981" stroke-width="3"/>
                  
                  <!-- Tensión de umbral V_gamma -->
                  <line x1="410" y1="150" x2="410" y2="160" stroke="#f59e0b" stroke-width="2"/>
                  <text x="410" y="175" text-anchor="middle" fill="#d97706" font-size="10" font-weight="bold">V<tspan baseline-shift="sub" font-size="70%">γ</tspan> ≈ 0.7 V</text>
                  <text x="475" y="62" fill="#047857" font-weight="bold" font-size="10">Zona Directa (Conducción)</text>

                  <!-- Curva Inversa -->
                  <line x1="170" y1="157" x2="330" y2="155" stroke="#0ea5e9" stroke-width="2.5"/>
                  <text x="250" y="172" text-anchor="middle" fill="#0284c7" font-size="8.5" font-weight="bold">-I<tspan baseline-shift="sub" font-size="70%">S</tspan> (fuga pA - nA)</text>

                  <!-- Ruptura Zener / Avalancha (Posicionada para no cortarse jamás) -->
                  <path d="M 170 157 Q 162 160 160 175 L 160 245" fill="none" stroke="#ef4444" stroke-width="3"/>
                  <line x1="160" y1="150" x2="160" y2="160" stroke="#ef4444" stroke-width="1.5"/>
                  <text x="160" y="145" text-anchor="middle" fill="#dc2626" font-size="9.5" font-weight="bold">-V<tspan baseline-shift="sub" font-size="70%">Z</tspan> (o -V<tspan baseline-shift="sub" font-size="70%">BR</tspan>)</text>
                  <text x="150" y="208" text-anchor="end" fill="#dc2626" font-size="9.5" font-weight="bold">Zona de Ruptura</text>
                  <text x="150" y="222" text-anchor="end" fill="#dc2626" font-size="8.5">(Zener / Avalancha)</text>
                </svg>
              </div>
            </div>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Mecanismos Físicos de Ruptura en Polarización Inversa</h5>
            <p class="mb-2 text-xs sm:text-sm">Si se incrementa la tensión inversa más allá de un valor crítico $|V_D| > V_{BR}$, el diodo entra en régimen de conducción intensa y controlada (siempre que la corriente se limite externamente):</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2 text-xs">
              <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span class="font-bold text-purple-600 dark:text-purple-400 block mb-1">Efecto Zener (Efecto Túnel Cuántico)</span>
                <p class="text-slate-600 dark:text-slate-400">
                  Ocurre en junturas con <strong>altísimo dopaje</strong> ($N_A, N_D > 10^{18}\\text{ cm}^{-3}$), donde la ZCE es extremadamente angosta ($W < 10\\text{ nm}$). El campo eléctrico interno supera los $10^6\\text{ V/cm}$, permitiendo a los electrones de la banda de valencia cruzar directamente por efecto túnel mecánico-cuántico a la banda de conducción.
                </p>
                <p class="text-slate-500 mt-1 font-mono text-[11px]">Predomina para $V_Z < 5\\text{ V}$ · Coeficiente térmico negativo ($-mV/^{\\circ}\\text{C}$).</p>
              </div>

              <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span class="font-bold text-rose-600 dark:text-rose-400 block mb-1">Efecto Avalancha (Ionización por Impacto)</span>
                <p class="text-slate-600 dark:text-slate-400">
                  Ocurre en junturas con <strong>dopaje moderado o bajo</strong>. Los escasos portadores minoritarios son acelerados por el intenso campo eléctrico adquiriendo alta energía cinética; al colisionar con átomos de la red cristalina, rompen enlaces covalentes liberando nuevos pares $e^--h^+$, los cuales se aceleran y repiten el proceso en cascada exponencial.
                </p>
                <p class="text-slate-500 mt-1 font-mono text-[11px]">Predomina para $V_{BR} > 6\\text{ V}$ · Coeficiente térmico positivo ($+mV/^{\\circ}\\text{C}$).</p>
              </div>
            </div>
            <p class="text-xs text-slate-500 mt-1">
              <em>Dato de diseño:</em> Alrededor de $V_Z \\approx 5.6\\text{ V}$, el coeficiente negativo Zener se anula exactamente con el positivo de avalancha, obteniéndose diodos zener de referencia con estabilidad térmica óptima ($TC \\approx 0$).
            </p>
          `
        },
        {
          id: 'e1-u2-ecuacion-shockley-modelos',
          titulo: '2.4 Ecuación de Shockley, Modelos del Diodo y Efectos Capacitivos',
          contenido: `
            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-2 mb-2">Ecuación Característica de Shockley</h5>
            $$I_D = I_S \\left( e^{\\frac{V_D}{\\eta V_T}} - 1 \\right)$$
            <ul class="list-disc pl-5 space-y-1 text-xs sm:text-sm mb-3">
              <li>$I_S$: Corriente inversa de saturación (típicamente $10^{-15}\\text{ A}$ a $10^{-12}\\text{ A}$ en silicio). Se duplica aproximadamente cada $10^{\\circ}\\text{C}$ de incremento de temperatura.</li>
              <li>$\\eta$: Factor de emisión o idealidad ($\\eta \\approx 1$ para silicio en corrientes medias gobernadas por difusión; $\\eta \\approx 2$ para corrientes muy bajas gobernadas por recombinación en la ZCE).</li>
              <li>$V_T = \\frac{k T}{q} \\approx 25.86\\text{ mV}$ a $300\\text{ K}$ ($26\\text{ mV}$ en cálculos manuales de examen).</li>
              <li><strong>Sensibilidad Térmica en Directa:</strong> Para una corriente $I_D$ fija, la tensión directa disminuye linealmente a razón de:
                $$\\frac{d V_D}{d T} \\approx -2\\text{ mV}/^{\\circ}\\text{C}$$
              </li>
            </ul>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Modelos Circuitales del Diodo</h5>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2 text-xs">
              <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span class="font-bold text-slate-800 dark:text-slate-200">1. Diodo Ideal (Interruptor)</span>
                <p class="text-slate-600 dark:text-slate-400 mt-1">Conduce como cortocircuito ($V_D = 0$) si $I_D > 0$; bloquea como circuito abierto ($I_D = 0$) si $V_D < 0$. Se utiliza en estimaciones preliminares y fuentes de alta tensión.</p>
              </div>

              <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span class="font-bold text-slate-800 dark:text-slate-200">2. Modelo con Tensión Constante ($V_{\\gamma}$)</span>
                <p class="text-slate-600 dark:text-slate-400 mt-1">En conducción se reemplaza por una fuente ideal de valor fijo $V_D = V_{\\gamma} \\approx 0.7\\text{ V}$ ($0.3\\text{ V}$ en Ge). Es el modelo estándar para el análisis estático en corriente continua.</p>
              </div>

              <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span class="font-bold text-slate-800 dark:text-slate-200">3. Modelo Lineal por Tramos</span>
                <p class="text-slate-600 dark:text-slate-400 mt-1">Incorpora la resistencia interna del cuerpo semiconductor ($R_B$): $V_D = V_{\\gamma} + I_D R_B$. Modela con precisión la pendiente en régimen de fuertes corrientes.</p>
              </div>

              <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span class="font-bold text-blue-600 dark:text-blue-400">4. Modelo Incremental de Pequeña Señal ($r_d$)</span>
                <p class="text-slate-600 dark:text-slate-400 mt-1">Derivando la curva en el punto de reposo $Q(V_{DQ}, I_{DQ})$:
                  $$r_d = \\left( \\left. \\frac{dI_D}{dV_D} \\right|_Q \\right)^{-1} = \\frac{\\eta V_T}{I_{DQ} + I_S} \\approx \\mathbf{\\frac{\\eta V_T}{I_{DQ}}}$$
                  Para $I_{DQ} = 1\\text{ mA}$ y $\\eta = 1$: $r_d \\approx 26\\,\\Omega$.
                </p>
              </div>
            </div>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Efectos Capacitivos de la Juntura ($C_j$ y $C_d$)</h5>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2 text-xs">
              <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span class="font-bold text-cyan-600 dark:text-cyan-400">Capacitancia de Unión o Transición ($C_j$ o $C_T$)</span>
                <p class="mt-1 text-slate-600 dark:text-slate-400">
                  <strong>Dominante en polarización inversa ($V_D < 0$).</strong> Se debe a la variación de carga espacial de los iones fijos inmóviles con la tensión aplicada:
                  $$C_j = \\frac{\\varepsilon_s A}{W} = \\frac{C_{j0}}{\\left( 1 + \\frac{V_R}{V_0} \\right)^m}$$
                  donde $m = 1/2$ para junturas abruptas y $m = 1/3$ para graduales. Esta capacitancia dependiente de la tensión se aprovecha comercialmente en los <strong>diodos Varicap</strong> para sintonizadores de RF.
                </p>
              </div>

              <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span class="font-bold text-emerald-600 dark:text-emerald-400">Capacitancia de Difusión ($C_d$)</span>
                <p class="mt-1 text-slate-600 dark:text-slate-400">
                  <strong>Dominante en polarización directa ($V_D > 0$).</strong> Se origina por la acumulación de portadores minoritarios inyectados en las zonas neutras adyacentes a la ZCE:
                  $$C_d = \\frac{\\tau_T \\cdot I_{DQ}}{\\eta V_T}$$
                  donde $\\tau_T$ es el tiempo de tránsito medio. Es directamente proporcional a la corriente continua $I_D$, siendo muy superior a $C_j$ y limitando la velocidad de conmutación del diodo (tiempo de recuperación inversa $t_{rr}$).
                </p>
              </div>
            </div>
          `
        },
        {
          id: 'e1-u2-rectificadores-zener',
          titulo: '2.5 Circuitos con Diodos: Rectificadores (Media Onda y Onda Completa), Filtros y Regulador Zener',
          contenido: `
            <p class="mb-3">La propiedad del diodo de conducir corriente en un solo sentido permite transformar señales alternas en continuas (rectificación) y estabilizar tensiones frente a variaciones de entrada y carga.</p>

            <!-- ============================================================ -->
            <!-- 1. RECTIFICADOR DE MEDIA ONDA (1 DIODO) -->
            <!-- ============================================================ -->
            <div class="p-4 my-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <div class="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800 pb-2">
                <span class="font-bold text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <span>⚡</span> 1. Rectificador de Media Onda (1 Diodo)
                </span>
                <span class="text-[11px] font-mono text-slate-400">1 Diodo · f_rizado = f_red</span>
              </div>

              <!-- Gráfico SVG: Circuito y Formas de Onda de Media Onda -->
              <div class="overflow-x-auto py-1">
                <svg viewBox="0 0 680 200" class="w-full max-w-2xl mx-auto h-auto font-sans text-xs select-none block">
                  <!-- Lado Izquierdo: Circuito -->
                  <g transform="translate(10, 15)">
                    <rect x="0" y="0" width="280" height="170" rx="10" fill="#3b82f6" fill-opacity="0.04" stroke="#64748b" stroke-opacity="0.3" stroke-width="1"/>
                    <text x="140" y="18" text-anchor="middle" font-weight="bold" fill="#334155" dark:fill="#cbd5e1" font-size="10">Esquema del Circuito</text>

                    <!-- Fuente AC -->
                    <circle cx="50" cy="85" r="18" fill="none" stroke="#2563eb" stroke-width="1.8"/>
                    <path d="M 40 85 Q 45 77 50 85 Q 55 93 60 85" fill="none" stroke="#2563eb" stroke-width="1.6"/>
                    <text x="50" y="120" text-anchor="middle" fill="#2563eb" font-size="9" font-weight="bold">v<tspan baseline-shift="sub" font-size="70%">i</tspan>(t) = V<tspan baseline-shift="sub" font-size="70%">p</tspan>·sen(ωt)</text>

                    <!-- Cables y Diodo -->
                    <line x1="50" y1="67" x2="110" y2="67" stroke="#64748b" stroke-width="1.5"/>
                    
                    <!-- Símbolo Diodo D -->
                    <g transform="translate(110, 67)">
                      <!-- Triángulo -->
                      <polygon points="0,-10 16,0 0,10" fill="#10b981" stroke="#059669" stroke-width="1.2"/>
                      <!-- Barra cátodo -->
                      <line x1="16" y1="-10" x2="16" y2="10" stroke="#059669" stroke-width="2"/>
                      <text x="8" y="-14" text-anchor="middle" fill="#059669" font-weight="bold" font-size="10">D</text>
                    </g>
                    
                    <line x1="126" y1="67" x2="220" y2="67" stroke="#64748b" stroke-width="1.5"/>
                    <line x1="220" y1="67" x2="220" y2="80" stroke="#64748b" stroke-width="1.5"/>

                    <!-- Resistencia Carga R_L -->
                    <rect x="212" y="80" width="16" height="40" fill="#f1f5f9" stroke="#475569" stroke-width="1.5"/>
                    <text x="240" y="104" fill="#475569" font-size="10" font-weight="bold">R<tspan baseline-shift="sub" font-size="70%">L</tspan></text>
                    
                    <line x1="220" y1="120" x2="220" y2="140" stroke="#64748b" stroke-width="1.5"/>
                    <line x1="220" y1="140" x2="50" y2="140" stroke="#64748b" stroke-width="1.5"/>
                    <line x1="50" y1="140" x2="50" y2="103" stroke="#64748b" stroke-width="1.5"/>

                    <!-- Tensión de salida v_o -->
                    <text x="210" y="60" text-anchor="end" fill="#dc2626" font-size="9" font-weight="bold">+</text>
                    <text x="210" y="148" text-anchor="end" fill="#dc2626" font-size="9" font-weight="bold">-</text>
                    <text x="255" y="80" fill="#dc2626" font-size="9" font-weight="bold">v<tspan baseline-shift="sub" font-size="70%">o</tspan>(t)</text>
                  </g>

                  <!-- Lado Derecho: Formas de Onda -->
                  <g transform="translate(310, 15)">
                    <rect x="0" y="0" width="360" height="170" rx="10" fill="#3b82f6" fill-opacity="0.04" stroke="#64748b" stroke-opacity="0.3" stroke-width="1"/>
                    <text x="180" y="18" text-anchor="middle" font-weight="bold" fill="#334155" font-size="10">Formas de Onda (Entrada vs Salida con Umbral V<tspan baseline-shift="sub" font-size="70%">γ</tspan> = 0.7V)</text>

                    <!-- Eje de tiempo -->
                    <line x1="30" y1="90" x2="330" y2="90" stroke="#94a3b8" stroke-width="1.2"/>
                    <text x="335" y="93" fill="#64748b" font-size="9">t</text>
                    <line x1="40" y1="25" x2="40" y2="155" stroke="#94a3b8" stroke-width="1.2"/>
                    <text x="35" y="30" text-anchor="end" fill="#64748b" font-size="9">v</text>

                    <!-- Línea de cota umbral 0.7V -->
                    <line x1="40" y1="83" x2="320" y2="83" stroke="#cbd5e1" stroke-width="0.9" stroke-dasharray="2,2"/>
                    <text x="36" y="85" text-anchor="end" fill="#64748b" font-size="7">0.7V</text>

                    <!-- Onda de Entrada v_i (punteada azul) -->
                    <path d="M 40 90 Q 75 22 110 90 Q 145 158 180 90 Q 215 22 250 90 Q 285 158 320 90" fill="none" stroke="#3b82f6" stroke-width="1.4" stroke-dasharray="3,3"/>
                    <text x="122" y="34" text-anchor="start" fill="#2563eb" font-weight="bold" font-size="9">v<tspan baseline-shift="sub" font-size="70%">i</tspan> (Entrada AC)</text>

                    <!-- Onda de Salida v_o (verde sólida): No cruza en 0, enciende con retraso en 0.7V y apaga antes -->
                    <path d="M 40 90 L 48 90 Q 75 36 102 90 L 188 90 Q 215 36 242 90 L 320 90" fill="none" stroke="#10b981" stroke-width="2.5"/>
                    <text x="75" y="47" text-anchor="middle" fill="#047857" font-weight="bold" font-size="9.5">V<tspan baseline-shift="sub" font-size="70%">o,pico</tspan> = V<tspan baseline-shift="sub" font-size="70%">p</tspan> - 0.7 V</text>

                    <!-- Cota de tensión media V_DC (etiqueta sobre la línea, sin interferencia) -->
                    <line x1="40" y1="74" x2="320" y2="74" stroke="#f59e0b" stroke-width="1.4" stroke-dasharray="4,2"/>
                    <text x="325" y="68" text-anchor="end" fill="#d97706" font-size="8.5" font-weight="bold">V<tspan baseline-shift="sub" font-size="70%">DC</tspan> ≈ 0.318 · V<tspan baseline-shift="sub" font-size="70%">o,pico</tspan></text>
                    <text x="145" y="112" text-anchor="middle" fill="#dc2626" font-size="8">Diodo Bloqueado (v<tspan baseline-shift="sub" font-size="70%">o</tspan> = 0 V)</text>

                    <!-- Banner explicativo del desfase de cruce por cero -->
                    <rect x="20" y="146" width="320" height="18" rx="4" fill="#f8fafc" stroke="#e2e8f0" stroke-width="0.8"/>
                    <text x="180" y="158" text-anchor="middle" fill="#334155" font-size="7.5">⚡ Conduce solo si v<tspan baseline-shift="sub" font-size="70%">i</tspan> &gt; 0.7 V: arranca con retraso y corta antes del cruce por cero</text>
                  </g>
                </svg>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                <div class="p-2.5 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                  <span class="font-bold text-slate-700 dark:text-slate-300 block">Tensión Continua Media ($V_{DC}$):</span>
                  $$V_{DC} = \\frac{V_{o,pico}}{\\pi} \\approx 0.318 \\cdot (V_p - V_{\\gamma})$$
                </div>
                <div class="p-2.5 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                  <span class="font-bold text-slate-700 dark:text-slate-300 block">Tensión Inversa Pico ($PIV$):</span>
                  $$PIV = V_p$$
                  <span class="text-[11px] text-slate-500">Tensión máxima inversa que soporta el diodo en el semiciclo negativo.</span>
                </div>
                <div class="p-2.5 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                  <span class="font-bold text-slate-700 dark:text-slate-300 block">Frecuencia de Rizado:</span>
                  $$f_{rizado} = f_{red} = 50\\text{ Hz}$$
                  <span class="text-[11px] text-slate-500">Un único pulso por cada período completo de la red.</span>
                </div>
              </div>
            </div>

            <!-- ============================================================ -->
            <!-- 2. RECTIFICADOR DE ONDA COMPLETA CON TOMA CENTRAL (2 DIODOS) -->
            <!-- ============================================================ -->
            <div class="p-4 my-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <div class="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800 pb-2">
                <span class="font-bold text-xs font-mono text-blue-600 dark:text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
                  <span>⚡</span> 2. Rectificador con Transformador con Toma Central (2 Diodos)
                </span>
                <span class="text-[11px] font-mono text-slate-400">2 Diodos · f_rizado = 2·f_red · PIV = 2·V_s</span>
              </div>

              <!-- Gráfico SVG: Circuito y Formas de Onda Toma Central -->
              <div class="overflow-x-auto py-1">
                <svg viewBox="0 0 680 210" class="w-full max-w-2xl mx-auto h-auto font-sans text-xs select-none block">
                  <!-- Esquema Circuital -->
                  <g transform="translate(10, 15)">
                    <rect x="0" y="0" width="310" height="180" rx="10" fill="#3b82f6" fill-opacity="0.04" stroke="#64748b" stroke-opacity="0.3" stroke-width="1"/>
                    <text x="155" y="18" text-anchor="middle" font-weight="bold" fill="#334155" font-size="10">Transformador con Punto Medio (2 Diodos)</text>

                    <!-- Transformador: Primario y Secundario -->
                    <g transform="translate(30, 45)">
                      <!-- Núcleo de hierro -->
                      <line x1="38" y1="10" x2="38" y2="100" stroke="#94a3b8" stroke-width="2"/>
                      <line x1="42" y1="10" x2="42" y2="100" stroke="#94a3b8" stroke-width="2"/>

                      <!-- Primario -->
                      <path d="M 25 15 C 10 20, 10 30, 25 35 C 10 40, 10 50, 25 55 C 10 60, 10 70, 25 75 C 10 80, 10 90, 25 95" fill="none" stroke="#2563eb" stroke-width="2"/>
                      <!-- Secundario (4 espiras con punto medio en y=55) -->
                      <path d="M 55 15 C 70 20, 70 30, 55 35 C 70 40, 70 50, 55 55 C 70 60, 70 70, 55 75 C 70 80, 70 90, 55 95" fill="none" stroke="#2563eb" stroke-width="2"/>
                    </g>

                    <!-- Conexión de Toma Central a Masa (Ubicada en x=115, y=100, sin interferir con D2) -->
                    <circle cx="85" cy="100" r="2.5" fill="#334155"/>
                    <line x1="85" y1="100" x2="115" y2="100" stroke="#64748b" stroke-width="1.8"/>
                    <line x1="115" y1="100" x2="115" y2="108" stroke="#64748b" stroke-width="1.5"/>
                    <!-- Símbolo de Masa de la Toma Central -->
                    <line x1="107" y1="108" x2="123" y2="108" stroke="#64748b" stroke-width="2"/>
                    <line x1="110" y1="111" x2="120" y2="111" stroke="#64748b" stroke-width="1.5"/>
                    <line x1="113" y1="114" x2="117" y2="114" stroke="#64748b" stroke-width="1"/>
                    <text x="128" y="103" text-anchor="start" fill="#2563eb" font-weight="bold" font-size="8.5">Toma Central (0V)</text>
                    <text x="128" y="114" text-anchor="start" fill="#64748b" font-size="7.5">Referencia de Masa</text>

                    <!-- Rama Superior D1 -->
                    <line x1="85" y1="60" x2="140" y2="60" stroke="#64748b" stroke-width="1.5"/>
                    <g transform="translate(140, 60)">
                      <polygon points="0,-8 14,0 0,8" fill="#10b981" stroke="#059669" stroke-width="1.2"/>
                      <line x1="14" y1="-8" x2="14" y2="8" stroke="#059669" stroke-width="2"/>
                      <text x="7" y="-12" text-anchor="middle" fill="#059669" font-weight="bold" font-size="9">D1</text>
                    </g>
                    <line x1="154" y1="60" x2="220" y2="60" stroke="#64748b" stroke-width="1.5"/>

                    <!-- Rama Inferior D2 (Completamente despejada, sin cables de masa cruzando) -->
                    <line x1="85" y1="140" x2="140" y2="140" stroke="#64748b" stroke-width="1.5"/>
                    <g transform="translate(140, 140)">
                      <polygon points="0,-8 14,0 0,8" fill="#10b981" stroke="#059669" stroke-width="1.2"/>
                      <line x1="14" y1="-8" x2="14" y2="8" stroke="#059669" stroke-width="2"/>
                      <text x="7" y="18" text-anchor="middle" fill="#059669" font-weight="bold" font-size="9">D2</text>
                    </g>
                    <line x1="154" y1="140" x2="220" y2="140" stroke="#64748b" stroke-width="1.5"/>

                    <!-- Nodo común de cátodos y carga R_L -->
                    <line x1="220" y1="60" x2="220" y2="140" stroke="#64748b" stroke-width="1.5"/>
                    <line x1="220" y1="100" x2="260" y2="100" stroke="#64748b" stroke-width="1.5"/>
                    <line x1="260" y1="100" x2="260" y2="110" stroke="#64748b" stroke-width="1.5"/>
                    <rect x="253" y="110" width="14" height="32" fill="#f1f5f9" stroke="#475569" stroke-width="1.2"/>
                    <text x="275" y="130" fill="#475569" font-size="9" font-weight="bold">R<tspan baseline-shift="sub" font-size="70%">L</tspan></text>
                    
                    <!-- Retorno a masa de R_L -->
                    <line x1="260" y1="142" x2="260" y2="155" stroke="#64748b" stroke-width="1.5"/>
                    <line x1="254" y1="155" x2="266" y2="155" stroke="#64748b" stroke-width="1.5"/>
                    <line x1="257" y1="158" x2="263" y2="158" stroke="#64748b" stroke-width="1"/>

                    <text x="248" y="94" fill="#dc2626" font-size="9" font-weight="bold">+</text>
                    <text x="248" y="152" fill="#dc2626" font-size="9" font-weight="bold">-</text>
                    <text x="280" y="95" fill="#dc2626" font-size="9" font-weight="bold">v<tspan baseline-shift="sub" font-size="70%">o</tspan></text>
                  </g>

                  <!-- Formas de Onda -->
                  <g transform="translate(340, 15)">
                    <rect x="0" y="0" width="330" height="180" rx="10" fill="#3b82f6" fill-opacity="0.04" stroke="#64748b" stroke-opacity="0.3" stroke-width="1"/>
                    <text x="165" y="18" text-anchor="middle" font-weight="bold" fill="#334155" font-size="10">Forma de Onda de Salida en Onda Completa</text>

                    <!-- Ejes coordenados -->
                    <line x1="25" y1="110" x2="305" y2="110" stroke="#94a3b8" stroke-width="1.2"/>
                    <text x="310" y="113" fill="#64748b" font-size="9">t</text>
                    <line x1="35" y1="28" x2="35" y2="140" stroke="#94a3b8" stroke-width="1.2"/>
                    <text x="35" y="24" text-anchor="middle" fill="#64748b" font-size="9">v<tspan baseline-shift="sub" font-size="70%">o</tspan></text>

                    <!-- Cotas en el eje vertical -->
                    <line x1="31" y1="60" x2="35" y2="60" stroke="#2563eb" stroke-width="1.2"/>
                    <text x="29" y="63" text-anchor="end" fill="#2563eb" font-weight="bold" font-size="8">V<tspan baseline-shift="sub" font-size="70%">o,p</tspan></text>

                    <line x1="31" y1="78" x2="35" y2="78" stroke="#f59e0b" stroke-width="1.2"/>
                    <text x="29" y="81" text-anchor="end" fill="#d97706" font-weight="bold" font-size="8">V<tspan baseline-shift="sub" font-size="70%">DC</tspan></text>

                    <text x="29" y="113" text-anchor="end" fill="#64748b" font-size="8">0</text>

                    <!-- Semiciclos rectificados: ambos positivos (amplitud 50 px, pico en y=60) -->
                    <path d="M 35 110 Q 67.5 10 100 110 Q 132.5 10 165 110 Q 197.5 10 230 110 Q 262.5 10 295 110" fill="none" stroke="#2563eb" stroke-width="2.5"/>
                    <text x="67.5" y="48" text-anchor="middle" fill="#2563eb" font-weight="bold" font-size="8.5">D<tspan baseline-shift="sub" font-size="70%">1</tspan> conduce</text>
                    <text x="132.5" y="48" text-anchor="middle" fill="#0891b2" font-weight="bold" font-size="8.5">D<tspan baseline-shift="sub" font-size="70%">2</tspan> conduce</text>
                    <text x="197.5" y="48" text-anchor="middle" fill="#2563eb" font-weight="bold" font-size="8.5">D<tspan baseline-shift="sub" font-size="70%">1</tspan> conduce</text>
                    <text x="262.5" y="48" text-anchor="middle" fill="#0891b2" font-weight="bold" font-size="8.5">D<tspan baseline-shift="sub" font-size="70%">2</tspan> conduce</text>

                    <!-- Nivel DC: V_DC = (2/pi) * V_pico ≈ 0.636 * 50 = 31.8 px -> y = 110 - 32 = 78 -->
                    <line x1="35" y1="78" x2="295" y2="78" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4,2"/>
                    <text x="295" y="73" text-anchor="end" fill="#d97706" font-size="8.5" font-weight="bold">V<tspan baseline-shift="sub" font-size="70%">DC</tspan> ≈ 0.636 · V<tspan baseline-shift="sub" font-size="70%">pico</tspan></text>

                    <text x="165" y="148" text-anchor="middle" fill="#64748b" font-size="9">Período de rizado T<tspan baseline-shift="sub" font-size="70%">r</tspan> = T<tspan baseline-shift="sub" font-size="70%">red</tspan> / 2 (100 Hz)</text>
                  </g>
                </svg>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                <div class="p-2.5 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                  <span class="font-bold text-slate-700 dark:text-slate-300 block">Tensión Pico de Salida:</span>
                  $$V_{o,pico} = V_s - V_{\\gamma}$$
                  <span class="text-[11px] text-slate-500">$V_s$ es la tensión pico de cada mitad del secundario.</span>
                </div>
                <div class="p-2.5 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                  <span class="font-bold text-slate-700 dark:text-slate-300 block">Tensión Continua Media ($V_{DC}$):</span>
                  $$V_{DC} = \\frac{2 V_{o,pico}}{\\pi} \\approx 0.636 \\cdot V_{o,pico}$$
                  <span class="text-[11px] text-slate-500">Duplica el rendimiento del rectificador de media onda.</span>
                </div>
                <div class="p-2.5 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                  <span class="font-bold text-rose-600 dark:text-rose-400 block">Desventaja Crítica: $PIV$ Elevada</span>
                  $$PIV = 2 V_s - V_{\\gamma} \\approx 2 V_s$$
                  <span class="text-[11px] text-slate-500">Cada diodo debe soportar el doble de la tensión de salida cuando bloquea.</span>
                </div>
              </div>
            </div>

            <!-- ============================================================ -->
            <!-- 3. RECTIFICADOR EN PUENTE DE GRAETZ (4 DIODOS) -->
            <!-- ============================================================ -->
            <div class="p-4 my-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <div class="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800 pb-2">
                <span class="font-bold text-xs font-mono text-purple-600 dark:text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
                  <span>⚡</span> 3. Rectificador de Onda Completa en Puente de Graetz (4 Diodos)
                </span>
                <span class="text-[11px] font-mono text-slate-400">4 Diodos · PIV = V_s (óptima) · Sin toma central</span>
              </div>

              <!-- Gráfico SVG: Puente de Graetz y Flujo de Corriente -->
              <div class="overflow-x-auto py-1">
                <svg viewBox="0 0 680 215" class="w-full max-w-2xl mx-auto h-auto font-sans text-xs select-none block">
                  <!-- Esquema del Puente -->
                  <g transform="translate(10, 15)">
                    <rect x="0" y="0" width="335" height="185" rx="10" fill="#3b82f6" fill-opacity="0.04" stroke="#64748b" stroke-opacity="0.3" stroke-width="1"/>
                    <text x="167" y="18" text-anchor="middle" font-weight="bold" fill="#334155" font-size="10">Puente de Diodos de Graetz</text>

                    <!-- Entrada AC con terminales independientes superior e inferior -->
                    <circle cx="45" cy="95" r="14" fill="#eff6ff" stroke="#2563eb" stroke-width="1.8"/>
                    <path d="M 37 95 Q 41 89 45 95 Q 49 101 53 95" fill="none" stroke="#2563eb" stroke-width="1.5"/>
                    <text x="24" y="98" text-anchor="end" fill="#2563eb" font-size="8.5" font-weight="bold">v<tspan baseline-shift="sub" font-size="70%">s</tspan>(t)</text>

                    <!-- Terminal Superior (+) e Inferior (-) -->
                    <circle cx="45" cy="81" r="2.2" fill="#2563eb"/>
                    <text x="35" y="80" text-anchor="end" font-weight="bold" fill="#ef4444" font-size="8.5">+</text>

                    <circle cx="45" cy="109" r="2.2" fill="#2563eb"/>
                    <text x="35" y="115" text-anchor="end" font-weight="bold" fill="#3b82f6" font-size="8.5">−</text>

                    <!-- Conexión Superior: sale por arriba y entra TOTALMENTE RECTA y horizontal a la esquina izquierda (110, 95) -->
                    <line x1="45" y1="81" x2="45" y2="65" stroke="#64748b" stroke-width="1.6"/>
                    <line x1="45" y1="65" x2="80" y2="65" stroke="#64748b" stroke-width="1.6"/>
                    <line x1="80" y1="65" x2="80" y2="95" stroke="#64748b" stroke-width="1.6"/>
                    <line x1="80" y1="95" x2="110" y2="95" stroke="#64748b" stroke-width="1.6"/>
                    <circle cx="110" cy="95" r="3" fill="#64748b"/>

                    <!-- Conexión Inferior: sale por abajo, corre a y=160 y sube recta a la esquina derecha (200, 95) -->
                    <line x1="45" y1="109" x2="45" y2="160" stroke="#64748b" stroke-width="1.6"/>
                    <line x1="45" y1="160" x2="200" y2="160" stroke="#64748b" stroke-width="1.6"/>
                    <line x1="200" y1="160" x2="200" y2="95" stroke="#64748b" stroke-width="1.6"/>
                    <circle cx="200" cy="95" r="3" fill="#64748b"/>

                    <!-- ROMBO DEL PUENTE (Nodos: Superior (155, 50), Derecho (200, 95), Inferior (155, 140), Izquierdo (110, 95)) -->
                    <!-- D1: Izq a Superior -->
                    <g transform="translate(132.5, 72.5) rotate(-45)">
                      <polygon points="0,-7 12,0 0,7" fill="#10b981" stroke="#059669" stroke-width="1"/>
                      <line x1="12" y1="-7" x2="12" y2="7" stroke="#059669" stroke-width="1.5"/>
                    </g>
                    <text x="118" y="60" fill="#059669" font-weight="bold" font-size="8.5">D1</text>

                    <!-- D3: Inferior a Izq -->
                    <g transform="translate(132.5, 117.5) rotate(-135)">
                      <polygon points="0,-7 12,0 0,7" fill="#8b5cf6" stroke="#7c3aed" stroke-width="1"/>
                      <line x1="12" y1="-7" x2="12" y2="7" stroke="#7c3aed" stroke-width="1.5"/>
                    </g>
                    <text x="118" y="142" fill="#7c3aed" font-weight="bold" font-size="8.5">D3</text>

                    <!-- D4: Derecho a Superior -->
                    <g transform="translate(177.5, 72.5) rotate(-135)">
                      <polygon points="0,-7 12,0 0,7" fill="#8b5cf6" stroke="#7c3aed" stroke-width="1"/>
                      <line x1="12" y1="-7" x2="12" y2="7" stroke="#7c3aed" stroke-width="1.5"/>
                    </g>
                    <text x="190" y="60" fill="#7c3aed" font-weight="bold" font-size="8.5">D4</text>

                    <!-- D2: Inferior a Derecho -->
                    <g transform="translate(177.5, 117.5) rotate(-45)">
                      <polygon points="0,-7 12,0 0,7" fill="#10b981" stroke="#059669" stroke-width="1"/>
                      <line x1="12" y1="-7" x2="12" y2="7" stroke="#059669" stroke-width="1.5"/>
                    </g>
                    <text x="182" y="128" fill="#059669" font-weight="bold" font-size="8.5">D2</text>

                    <!-- Líneas del rombo -->
                    <line x1="110" y1="95" x2="155" y2="50" stroke="#64748b" stroke-width="1.2"/>
                    <line x1="155" y1="50" x2="200" y2="95" stroke="#64748b" stroke-width="1.2"/>
                    <line x1="200" y1="95" x2="155" y2="140" stroke="#64748b" stroke-width="1.2"/>
                    <line x1="155" y1="140" x2="110" y2="95" stroke="#64748b" stroke-width="1.2"/>

                    <!-- Nodos superior e inferior del puente -->
                    <circle cx="155" cy="50" r="3" fill="#dc2626"/>
                    <circle cx="155" cy="140" r="3" fill="#3b82f6"/>

                    <!-- Salida DC a la carga R_L -->
                    <!-- Positivo: Nodo superior (155, 50) -->
                    <line x1="155" y1="50" x2="265" y2="50" stroke="#dc2626" stroke-width="1.5"/>
                    <line x1="265" y1="50" x2="265" y2="75" stroke="#dc2626" stroke-width="1.5"/>
                    
                    <rect x="257" y="75" width="16" height="40" fill="#f1f5f9" stroke="#475569" stroke-width="1.4"/>
                    <text x="285" y="98" fill="#475569" font-size="9" font-weight="bold">R<tspan baseline-shift="sub" font-size="70%">L</tspan></text>

                    <!-- Negativo: Nodo inferior (155, 140) -->
                    <line x1="155" y1="140" x2="265" y2="140" stroke="#3b82f6" stroke-width="1.5"/>
                    <line x1="265" y1="140" x2="265" y2="115" stroke="#3b82f6" stroke-width="1.5"/>

                    <text x="250" y="65" fill="#dc2626" font-size="10" font-weight="bold">+</text>
                    <text x="250" y="135" fill="#3b82f6" font-size="10" font-weight="bold">-</text>
                    <text x="288" y="75" fill="#dc2626" font-size="9" font-weight="bold">v<tspan baseline-shift="sub" font-size="70%">o</tspan>(t)</text>
                  </g>

                  <!-- Explicación de Conducción en Cuadrante Derecho -->
                  <g transform="translate(355, 15)">
                    <rect x="0" y="0" width="315" height="185" rx="10" fill="#3b82f6" fill-opacity="0.04" stroke="#64748b" stroke-opacity="0.3" stroke-width="1"/>
                    <text x="157" y="20" text-anchor="middle" font-weight="bold" fill="#334155" font-size="10">Dinámica de Conducción por Semiciclos</text>

                    <!-- Semiciclo 1 -->
                    <rect x="12" y="32" width="290" height="68" rx="6" fill="#10b981" fill-opacity="0.08" stroke="#10b981" stroke-opacity="0.4"/>
                    <text x="22" y="49" fill="#047857" font-weight="bold" font-size="9.5">Semiciclo Positivo (v<tspan baseline-shift="sub" font-size="70%">s</tspan> &gt; 0):</text>
                    <text x="22" y="65" fill="#334155" font-size="8.5">• Conducen en serie: <tspan font-weight="bold" fill="#047857">D1 y D2</tspan></text>
                    <text x="22" y="79" fill="#334155" font-size="8.5">• Bloquean en inversa: <tspan font-weight="bold" fill="#64748b">D3 y D4</tspan></text>
                    <text x="22" y="92" fill="#047857" font-size="8">Malla: V<tspan baseline-shift="sub" font-size="70%">s</tspan>(+) ➔ D1 ➔ R<tspan baseline-shift="sub" font-size="70%">L</tspan> ➔ D2 ➔ V<tspan baseline-shift="sub" font-size="70%">s</tspan>(-)</text>

                    <!-- Semiciclo 2 -->
                    <rect x="12" y="106" width="290" height="68" rx="6" fill="#8b5cf6" fill-opacity="0.08" stroke="#8b5cf6" stroke-opacity="0.4"/>
                    <text x="22" y="123" fill="#6d28d9" font-weight="bold" font-size="9.5">Semiciclo Negativo (v<tspan baseline-shift="sub" font-size="70%">s</tspan> &lt; 0):</text>
                    <text x="22" y="139" fill="#334155" font-size="8.5">• Conducen en serie: <tspan font-weight="bold" fill="#6d28d9">D3 y D4</tspan></text>
                    <text x="22" y="153" fill="#334155" font-size="8.5">• Bloquean en inversa: <tspan font-weight="bold" fill="#64748b">D1 y D2</tspan></text>
                    <text x="22" y="166" fill="#6d28d9" font-size="8">Malla: V<tspan baseline-shift="sub" font-size="70%">s</tspan>(-) ➔ D3 ➔ R<tspan baseline-shift="sub" font-size="70%">L</tspan> ➔ D4 ➔ V<tspan baseline-shift="sub" font-size="70%">s</tspan>(+)</text>
                  </g>
                </svg>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                <div class="p-2.5 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                  <span class="font-bold text-slate-700 dark:text-slate-300 block">Tensión Pico de Salida:</span>
                  $$V_{o,pico} = V_s - 2 V_{\\gamma} \\approx V_s - 1.4\\text{ V}$$
                  <span class="text-[11px] text-slate-500">Caída debida a dos diodos conduciendo en serie.</span>
                </div>
                <div class="p-2.5 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                  <span class="font-bold text-slate-700 dark:text-slate-300 block">Tensión Continua Media ($V_{DC}$):</span>
                  $$V_{DC} = \\frac{2 V_{o,pico}}{\\pi} \\approx 0.636 \\cdot V_{o,pico}$$
                  <span class="text-[11px] text-slate-500">$f_{rizado} = 2 f_{red} = 100\\text{ Hz}$.</span>
                </div>
                <div class="p-2.5 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                  <span class="font-bold text-emerald-600 dark:text-emerald-400 block">Gran Ventaja: $PIV$ Reducida</span>
                  $$PIV = V_s - V_{\\gamma} \\approx V_s$$
                  <span class="text-[11px] text-slate-500">Es la mitad que en el rectificador de punto medio.</span>
                </div>
              </div>

              <!-- Deducción analítica y cálculo de la PIV -->
              <div class="p-3.5 rounded-xl bg-emerald-500/10 dark:bg-emerald-950/30 border border-emerald-500/30 text-xs text-slate-800 dark:text-slate-200">
                <h5 class="font-bold text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400">
                  <span>📐</span> ¿Cómo se Deduce y Analiza la PIV (Peak Inverse Voltage) en el Puente?
                </h5>
                <p class="mb-2">
                  La <strong>Tensión Inversa de Pico (PIV)</strong> es la máxima diferencia de potencial en polarización inversa que debe soportar cada diodo apagado (en corte) sin sufrir ruptura por avalancha. Analicemos el circuito paso a paso:
                </p>
                <ol class="list-decimal pl-5 space-y-1.5 mb-2.5">
                  <li>
                    <strong>Durante el semiciclo positivo ($v_s(t) = +V_s$):</strong>
                    Los diodos $D_1$ y $D_2$ entran en conducción directa ($V_{D1} = V_{D2} = V_{\\gamma} \\approx 0.7\\text{ V}$), mientras que $D_3$ y $D_4$ permanecen en corte (OFF).
                  </li>
                  <li>
                    <strong>Malla de Kirchhoff para el diodo bloqueado $D_3$:</strong>
                    El cátodo de $D_3$ está conectado directamente al terminal superior del generador ($+V_s$) a través del nodo con el ánodo de $D_1$. Por su parte, el ánodo de $D_3$ se conecta al terminal negativo de la carga ($R_L$), que a su vez se conecta al terminal inferior del generador a través del diodo en conducción $D_2$ ($V_{D2} = V_{\\gamma}$).
                    <br>
                    Observando la malla cerrada formada por $D_3$, $D_1$ y la carga $R_L$:
                    $$V_{inv, D3} = V_{\\text{cátodo}} - V_{\\text{ánodo}} = V_{o,pico} + V_{D1}$$
                    Sustituyendo $V_{o,pico} = V_s - 2V_{\\gamma}$:
                    $$V_{inv, D3} = (V_s - 2V_{\\gamma}) + V_{\\gamma} = \\mathbf{V_s - V_{\\gamma} \\approx V_s}$$
                  </li>
                  <li>
                    <strong>Malla de Kirchhoff para el diodo bloqueado $D_4$:</strong>
                    Su cátodo se encuentra al potencial positivo de la carga ($V_{o,pico}$) y su ánodo al terminal inferior de $v_s$ (a través de $D_2$). De manera idéntica:
                    $$V_{inv, D4} = V_{o,pico} + V_{D2} = \\mathbf{V_s - V_{\\gamma} \\approx V_s}$$
                  </li>
                </ol>
                <div class="p-2.5 rounded-lg bg-white/70 dark:bg-slate-900/60 border border-emerald-500/20 text-slate-700 dark:text-slate-300">
                  <strong>Comparativa Crucial con el Rectificador de Punto Medio:</strong>
                  En el transformador de toma central, el diodo en corte ve la suma de <em>ambos semi-bobinados</em> en serie ($\\text{PIV} = 2V_s - V_{\\gamma} \\approx \\mathbf{2V_s}$). En el <strong>Puente de Graetz</strong>, en cambio, la tensión inversa se distribuye en dos ramas paralelas, por lo que <strong>cada diodo soporta únicamente el pico de una sola fuente ($\\text{PIV} \\approx V_s$)</strong>. Esto reduce a la mitad el requerimiento de $V_{RRM}$ de los diodos en el diseño comercial.
                </div>
              </div>

              <!-- Ventaja económica e industrial frente a toma central -->
              <div class="p-3 rounded-xl bg-purple-50/70 dark:bg-purple-950/30 border border-purple-200/80 dark:border-purple-800/60 text-xs">
                <div class="flex items-center gap-2 font-bold text-purple-700 dark:text-purple-300 mb-1">
                  <span>💡</span>
                  <span>Ventaja Económica y Constructiva Clave:</span>
                </div>
                <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                  El puente de 4 diodos <strong>elimina por completo la necesidad de un transformador con toma central (punto medio)</strong>. Emplear un transformador estándar de 2 terminales y agregar únicamente <strong>2 diodos más</strong> resulta <strong>mucho más económico, liviano y compacto</strong>: los diodos adicionales son componentes discretos de silicio de bajísimo costo, mientras que un transformador con toma central requiere un bobinado secundario con el doble de espiras y cobre. Además, los diodos en puente soportan solo la mitad de tensión inversa ($PIV \\approx V_s$ frente a $2V_s$), convirtiendo a esta topología en el estándar indiscutido de la industria.
                </p>
              </div>
            </div>

            <!-- ============================================================ -->
            <!-- 4. FILTRO CAPACITIVO Y RIZADO -->
            <!-- ============================================================ -->
            <div class="p-4 my-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <span class="font-bold text-xs font-mono text-amber-600 dark:text-amber-400 uppercase tracking-wider block">
                ⚡ 4. Filtro por Capacitor y Tensión de Rizado ($V_r$)
              </span>
              <p class="text-xs text-slate-600 dark:text-slate-400">
                Al conectar un capacitor electrolítico $C$ en paralelo con $R_L$, este se carga con rapidez hasta el pico de tensión $V_{pico}$ a través de los diodos en conducción. Cuando la tensión del secundario desciende por debajo de la tensión almacenada, los diodos se apagan y el capacitor se descarga lentamente sobre $R_L$ con constante de tiempo $\\tau = R_L C \\gg T$, reduciendo drásticamente las variaciones de tensión.
              </p>

              <!-- Aclaración de la dinámica física del rizado -->
              <div class="p-3 my-1.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-xs text-blue-950 dark:text-blue-200">
                <span class="font-bold flex items-center gap-1.5 text-blue-700 dark:text-blue-300 mb-1">
                  <span>💡</span> Dinámica Física del Rizado y Ángulo de Conducción:
                </span>
                <p>
                  Mientras la tensión rectificada senoidal cae por debajo de la tensión del capacitor, los diodos se apagan (en corte) y el capacitor se descarga lentamente hacia la carga $R_L$. En el <strong>instante exacto en que la onda rectificada creciente intercepta la tensión del capacitor</strong> ($v_{rect}(t) = v_C(t)$), los diodos vuelven a polarizarse en directa y comienzan a conducir. Ese punto de coincidencia es exactamente la <strong>tensión valle ($V_{valle}$)</strong>: a partir de ese milisegundo el capacitor <em>no puede seguir bajando</em>, sino que es recargado de inmediato siguiendo la subida de la onda senoidal hasta la cresta $V_{pico}$.
                </p>
              </div>

              <!-- Comparativa Gráfica: Media Onda vs Onda Completa con Filtro -->
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 py-1">
                <!-- Gráfico 1: Media Onda con Filtro -->
                <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                  <div class="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 mb-1.5 flex items-center justify-between">
                    <span>1. Filtro en Media Onda ($f_r = 50\\text{ Hz}$)</span>
                    <span class="text-[10px] font-mono text-slate-500">$T_r = 20\\text{ ms}$ · Rizado 2× mayor</span>
                  </div>
                  <div class="overflow-x-auto py-1">
                    <svg viewBox="0 0 350 190" class="w-full max-w-md mx-auto h-auto font-sans text-xs select-none block">
                      <rect x="0" y="0" width="350" height="190" rx="8" fill="#3b82f6" fill-opacity="0.03" stroke="#64748b" stroke-opacity="0.25" stroke-width="1"/>

                      <!-- Ejes -->
                      <line x1="25" y1="145" x2="315" y2="145" stroke="#94a3b8" stroke-width="1.2"/>
                      <text x="320" y="148" fill="#64748b" font-size="8.5"><tspan font-style="italic">t</tspan></text>
                      <line x1="35" y1="20" x2="35" y2="155" stroke="#94a3b8" stroke-width="1.2"/>
                      <text x="35" y="15" text-anchor="middle" fill="#64748b" font-size="8.5"><tspan font-style="italic">v</tspan><tspan font-size="75%" dy="2">o</tspan></text>
                      <text x="30" y="148" text-anchor="end" fill="#64748b" font-size="7.5">0</text>

                      <!-- Cotas horizontales -->
                      <line x1="35" y1="40" x2="275" y2="40" stroke="#059669" stroke-width="1" stroke-dasharray="2,2"/>
                      <text x="278" y="43" fill="#059669" font-weight="bold" font-size="8"><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">pico</tspan></text>

                      <line x1="35" y1="75" x2="275" y2="75" stroke="#f59e0b" stroke-width="1.4" stroke-dasharray="4,2"/>
                      <text x="278" y="77" fill="#d97706" font-weight="bold" font-size="7.5"><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">DC</tspan><tspan font-size="100%" dy="-2"> = </tspan><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">pico</tspan><tspan font-size="100%" dy="-2"> − (</tspan><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">r</tspan><tspan font-size="100%" dy="-2"> / 2)</tspan></text>

                      <line x1="35" y1="110" x2="275" y2="110" stroke="#64748b" stroke-width="1" stroke-dasharray="2,2"/>
                      <text x="278" y="113" fill="#64748b" font-size="8"><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">valle</tspan></text>

                      <!-- Pulsos rectificados en Media Onda (solo 1 por ciclo, punteado gris) -->
                      <path d="M 35 145 Q 64 -65 92.5 145 L 150 145 Q 179 -65 207.5 145 L 265 145" fill="none" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3,3"/>

                      <!-- Curva de tensión del capacitor:
                           - Subida: coincide idéntica con la forma redondeada senoidal (Q 52 40 64 40 y Q 167 40 179 40)
                           - Caída: recta pura desde V_pico hasta V_valle (L 155 110) en la próxima onda -->
                      <path d="M 40 110 Q 52 40 64 40 L 155 110 Q 167 40 179 40 L 265 80" fill="none" stroke="#ef4444" stroke-width="2.2"/>

                      <!-- Cota de V_r (2x mayor) -->
                      <line x1="115" y1="42" x2="115" y2="108" stroke="#dc2626" stroke-width="1.6"/>
                      <polygon points="112,46 115,40 118,46" fill="#dc2626"/>
                      <polygon points="112,104 115,110 118,104" fill="#dc2626"/>
                      <text x="120" y="78" fill="#dc2626" font-weight="bold" font-size="8"><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">r</tspan><tspan font-size="100%" dy="-2"> (2× mayor)</tspan></text>

                      <!-- Período de rizado Tr = 20 ms (Distancia exacta entre picos) -->
                      <line x1="64" y1="40" x2="64" y2="158" stroke="#059669" stroke-width="0.8" stroke-dasharray="2,2" opacity="0.6"/>
                      <line x1="179" y1="40" x2="179" y2="158" stroke="#059669" stroke-width="0.8" stroke-dasharray="2,2" opacity="0.6"/>
                      <line x1="64" y1="155" x2="179" y2="155" stroke="#059669" stroke-width="1.4"/>
                      <polygon points="68,153 64,155 68,157" fill="#059669"/>
                      <polygon points="175,153 179,155 175,157" fill="#059669"/>
                      <text x="121" y="168" text-anchor="middle" fill="#047857" font-weight="bold" font-size="8.5"><tspan font-style="italic">T</tspan><tspan font-size="75%" dy="2">r</tspan><tspan font-size="100%" dy="-2"> = </tspan><tspan font-style="italic">T</tspan><tspan font-size="75%" dy="2">red</tspan><tspan font-size="100%" dy="-2"> = 1 / 50 Hz = 20 ms</tspan></text>
                      <text x="121" y="180" text-anchor="middle" fill="#64748b" font-size="7.5">Distancia entre picos (1 ciclo de descarga completo)</text>
                    </svg>
                  </div>
                </div>

                <!-- Gráfico 2: Onda Completa con Filtro -->
                <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                  <div class="text-[11px] font-bold text-blue-700 dark:text-blue-400 mb-1.5 flex items-center justify-between">
                    <span>2. Filtro en Onda Completa ($f_r = 100\\text{ Hz}$)</span>
                    <span class="text-[10px] font-mono text-slate-500">$T_r = 10\\text{ ms}$ · Rizado mitad (50%)</span>
                  </div>
                  <div class="overflow-x-auto py-1">
                    <svg viewBox="0 0 350 190" class="w-full max-w-md mx-auto h-auto font-sans text-xs select-none block">
                      <rect x="0" y="0" width="350" height="190" rx="8" fill="#3b82f6" fill-opacity="0.03" stroke="#64748b" stroke-opacity="0.25" stroke-width="1"/>

                      <!-- Ejes -->
                      <line x1="25" y1="145" x2="315" y2="145" stroke="#94a3b8" stroke-width="1.2"/>
                      <text x="320" y="148" fill="#64748b" font-size="8.5"><tspan font-style="italic">t</tspan></text>
                      <line x1="35" y1="20" x2="35" y2="155" stroke="#94a3b8" stroke-width="1.2"/>
                      <text x="35" y="15" text-anchor="middle" fill="#64748b" font-size="8.5"><tspan font-style="italic">v</tspan><tspan font-size="75%" dy="2">o</tspan></text>
                      <text x="30" y="148" text-anchor="end" fill="#64748b" font-size="7.5">0</text>

                      <!-- Cotas horizontales -->
                      <line x1="35" y1="40" x2="275" y2="40" stroke="#059669" stroke-width="1" stroke-dasharray="2,2"/>
                      <text x="278" y="43" fill="#059669" font-weight="bold" font-size="8"><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">pico</tspan></text>

                      <line x1="35" y1="57" x2="275" y2="57" stroke="#f59e0b" stroke-width="1.4" stroke-dasharray="4,2"/>
                      <text x="278" y="60" fill="#d97706" font-weight="bold" font-size="7.5"><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">DC</tspan><tspan font-size="100%" dy="-2"> = </tspan><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">pico</tspan><tspan font-size="100%" dy="-2"> − (</tspan><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">r</tspan><tspan font-size="100%" dy="-2"> / 2)</tspan></text>

                      <line x1="35" y1="75" x2="275" y2="75" stroke="#64748b" stroke-width="1" stroke-dasharray="2,2"/>
                      <text x="278" y="78" fill="#64748b" font-size="8"><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">valle</tspan></text>

                      <!-- Pulsos rectificados en Onda Completa (2 por ciclo, punteado gris) -->
                      <path d="M 35 145 Q 64 -65 92.5 145 Q 121 -65 150 145 Q 179 -65 207.5 145 Q 236 -65 265 145" fill="none" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3,3"/>

                      <!-- Curva de tensión del capacitor:
                           - Subida: coincide idéntica con la forma redondeada senoidal (Q ... 40)
                           - Caída: rectas puras desde cada cresta hasta el valle en la siguiente onda -->
                      <path d="M 47 75 Q 56 40 64 40 L 105 75 Q 113 40 121 40 L 162 75 Q 170 40 179 40 L 220 75 Q 228 40 236 40 L 265 64" fill="none" stroke="#ef4444" stroke-width="2.2"/>

                      <!-- Cota de V_r (mitad que en media onda) -->
                      <line x1="145" y1="42" x2="145" y2="73" stroke="#dc2626" stroke-width="1.6"/>
                      <polygon points="142,46 145,40 148,46" fill="#dc2626"/>
                      <polygon points="142,69 145,75 148,69" fill="#dc2626"/>
                      <text x="150" y="60" fill="#dc2626" font-weight="bold" font-size="8"><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">r</tspan></text>

                      <!-- Período de rizado Tr = 10 ms (Distancia exacta entre picos) -->
                      <line x1="121" y1="40" x2="121" y2="158" stroke="#2563eb" stroke-width="0.8" stroke-dasharray="2,2" opacity="0.6"/>
                      <line x1="179" y1="40" x2="179" y2="158" stroke="#2563eb" stroke-width="0.8" stroke-dasharray="2,2" opacity="0.6"/>
                      <line x1="121" y1="155" x2="179" y2="155" stroke="#2563eb" stroke-width="1.4"/>
                      <polygon points="125,153 121,155 125,157" fill="#2563eb"/>
                      <polygon points="175,153 179,155 175,157" fill="#2563eb"/>
                      <text x="150" y="168" text-anchor="middle" fill="#1d4ed8" font-weight="bold" font-size="8.5"><tspan font-style="italic">T</tspan><tspan font-size="75%" dy="2">r</tspan><tspan font-size="100%" dy="-2"> = </tspan><tspan font-style="italic">T</tspan><tspan font-size="75%" dy="2">red</tspan><tspan font-size="100%" dy="-2"> / 2 = 1 / 100 Hz = 10 ms</tspan></text>
                      <text x="150" y="180" text-anchor="middle" fill="#64748b" font-size="7.5">Distancia entre picos (medio ciclo, 2 crestas por ciclo)</text>
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Explicación pedagógica detallada del Período de Rizado Tr -->
              <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-800 dark:text-slate-200">
                <h5 class="font-bold text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5 text-indigo-700 dark:text-indigo-400">
                  <span>⏱️</span> ¿Cómo se Deduce y Calcula el Período de Rizado ($T_r$)?
                </h5>
                <p class="mb-2 text-slate-600 dark:text-slate-400">
                  El <strong>período de rizado ($T_r$)</strong> es el <strong>tiempo que transcurre entre dos recargas consecutivas del capacitor</strong> (la distancia temporal entre dos crestas sucesivas en los gráficos superiores). Durante ese intervalo, los diodos están apagados y el capacitor debe alimentar solo a la carga $R_L$, descargándose en línea recta:
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5 my-2">
                  <div class="p-2.5 rounded-lg bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
                    <span class="font-bold text-emerald-800 dark:text-emerald-300 block mb-1">1. En Rectificador de Media Onda:</span>
                    <p class="text-[11px] text-slate-600 dark:text-slate-400">
                      Hay únicamente <strong>1 cresta por cada ciclo completo de red</strong> ($f_{red} = 50\\text{ Hz}$):
                    </p>
                    $$T_r = T_{red} = \\frac{1}{f_{red}} = \\frac{1}{50\\text{ Hz}} = \\mathbf{20\\text{ ms}} \\implies f_r = 50\\text{ Hz}$$
                    <p class="text-[11px] text-slate-600 dark:text-slate-400 mt-1">
                      El capacitor tiene que esperar $20\\text{ ms}$ completos antes de volver a recargarse $\\implies$ <strong>sufre una descarga y rizado $V_r$ el doble de grande</strong>.
                    </p>
                  </div>

                  <div class="p-2.5 rounded-lg bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800">
                    <span class="font-bold text-blue-800 dark:text-blue-300 block mb-1">2. En Rectificador de Onda Completa:</span>
                    <p class="text-[11px] text-slate-600 dark:text-slate-400">
                      Al rectificarse ambos semiciclos, aparecen <strong>2 crestas por cada ciclo de red</strong>:
                    </p>
                    $$T_r = \\frac{T_{red}}{2} = \\frac{1}{2 \\cdot f_{red}} = \\frac{1}{100\\text{ Hz}} = \\mathbf{10\\text{ ms}} \\implies f_r = 100\\text{ Hz}$$
                    <p class="text-[11px] text-slate-600 dark:text-slate-400 mt-1">
                      El capacitor solo se descarga durante $10\\text{ ms}$ antes de que llegue la siguiente cresta $\\implies$ <strong>el rizado $V_r$ se reduce al 50%</strong>.
                    </p>
                  </div>
                </div>
                <div class="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-[11px] text-amber-950 dark:text-amber-200 mt-2">
                  <strong>Ecuación Fundamental que une $T_r$ con $V_r$:</strong>
                  Por conservación de carga $\\Delta Q = I_{DC} \\cdot T_r = C \\cdot V_r$, despejando el rizado pico a pico obtenemos:
                  $$\\mathbf{V_r = \\frac{I_{DC} \\cdot T_r}{C} = \\frac{I_{DC}}{f_r \\cdot C}}$$
                  Demuestra con total claridad matemática por qué al reducir a la mitad el período de descarga $T_r$ (onda completa), el rizado $V_r$ cae a la mitad.
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div class="p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                  <span class="font-bold text-slate-800 dark:text-slate-200 block mb-1">Tensión de Rizado Pico a Pico ($V_r$):</span>
                  $$V_r = \\frac{I_{DC}}{f_{rizado} \\cdot C} = \\frac{V_{pico}}{f_{rizado} \\cdot R_L \\cdot C}$$
                  <ul class="list-disc pl-4 space-y-1.5 text-[11px] text-slate-600 dark:text-slate-400 mt-2">
                    <li><strong>Media Onda ($f_{rizado} = 50\\text{ Hz}$):</strong> $V_r^{(MO)} = \\frac{I_{DC}}{50 \\cdot C}$. El capacitor se descarga durante casi el período completo ($20\\text{ ms}$).</li>
                    <li><strong>Onda Completa ($f_{rizado} = 100\\text{ Hz}$):</strong> $V_r^{(OC)} = \\frac{I_{DC}}{100 \\cdot C} = \\frac{V_r^{(MO)}}{2}$. Al recargarse el doble de veces por segundo ($10\\text{ ms}$), el rizado se reduce a la <strong>mitad</strong>.</li>
                  </ul>
                </div>
                <div class="p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                  <span class="font-bold text-slate-800 dark:text-slate-200 block mb-1">Tensión Continua Media ($V_{DC}$):</span>
                  $$V_{DC} = V_{pico} - \\frac{V_r}{2} = \\frac{V_{pico} + V_{valle}}{2}$$
                  <div class="text-[11px] text-slate-600 dark:text-slate-400 mt-2 space-y-1">
                    <p class="leading-relaxed">
                      💡 <strong>¿Por qué suma ($+$) y no resta?</strong> Porque $V_{DC}$ es el <strong>promedio aritmético</strong> (punto medio del rizado). Dado que el rizado pico a pico es la diferencia $V_r = V_{pico} - V_{valle}$, al sustituir:
                    </p>
                    <div class="font-mono text-[10.5px] text-center bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-1.5 rounded-lg my-1">
                      $$V_{DC} = V_{pico} - \\frac{V_{pico} - V_{valle}}{2} = \\frac{2V_{pico} - V_{pico} + V_{valle}}{2} = \\mathbf{\\frac{V_{pico} + V_{valle}}{2}}$$
                    </div>
                    <p class="text-[10px] text-slate-500 italic">
                      Nota: La resta $\\frac{V_{pico} - V_{valle}}{2}$ correspondería únicamente a la semiamplitud del rizado $\\frac{V_r}{2}$ (oscilación alterna), no al nivel medio de continua.
                    </p>
                  </div>
                  <div class="text-[11px] text-slate-500 mt-2.5 pt-2 border-t border-slate-200 dark:border-slate-700">
                    <strong>Factor de rizado:</strong> $\\gamma = \\frac{V_{r,rms}}{V_{DC}} = \\frac{V_r}{2\\sqrt{3} \\cdot V_{DC}}$ (asumiendo rizado triangular donde $V_{r,rms} = \\frac{V_r}{2\\sqrt{3}}$).
                  </div>
                </div>
              </div>
            </div>

            <!-- ============================================================ -->
            <!-- 5. REGULADOR DE TENSIÓN CON DIODO ZENER -->
            <!-- ============================================================ -->
            <div class="p-4 my-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <div class="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800 pb-2">
                <span class="font-bold text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                  <span>⚡</span> 5. Regulador de Tensión en Derivación con Diodo Zener
                </span>
                <span class="text-[11px] font-mono text-slate-400">Ruptura Inversa · $V_{out} = V_Z$ · $I_s = I_Z + I_L$</span>
              </div>

              <!-- Fundamento Teórico -->
              <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                El diodo Zener se conecta <strong>en paralelo (shunt)</strong> con la carga $R_L$ y polarizado en <strong>inversa</strong> (cátodo al terminal positivo y ánodo a masa). Al operar en su zona de ruptura ($V \\ge V_Z$), la tensión entre sus terminales permanece prácticamente constante ante amplias variaciones de corriente. La corriente entregada por la fuente se reparte según la LKC: <strong>$I_s = I_Z + I_L$</strong>. El Zener actúa como un amortiguador de corriente: absorbe los excesos de energía para estabilizar la tensión de salida exactamente en $V_{out} = V_Z$.
              </p>

              <!-- Gráfico SVG: Circuito Zener (Símbolo IEEE Correcto) y Curva V_out vs V_in -->
              <!-- Gráfico SVG: Circuito Zener (Símbolo IEEE Correcto) y Curva V_out vs V_in -->
              <div class="overflow-x-auto py-1">
                <svg viewBox="0 0 680 215" class="w-full max-w-2xl mx-auto h-auto font-sans text-xs select-none block">
                  <!-- Lado Izquierdo: Circuito del Regulador Zener -->
                  <g transform="translate(10, 15)">
                    <rect x="0" y="0" width="315" height="185" rx="10" fill="#3b82f6" fill-opacity="0.04" stroke="#64748b" stroke-opacity="0.3" stroke-width="1"/>
                    <text x="157" y="18" text-anchor="middle" font-weight="bold" fill="#334155" font-size="10">Esquema del Regulador Zener Shunt</text>

                    <!-- Fuente V_in -->
                    <circle cx="45" cy="95" r="15" fill="none" stroke="#2563eb" stroke-width="1.8"/>
                    <text x="45" y="92" text-anchor="middle" fill="#2563eb" font-size="8" font-weight="bold">+</text>
                    <text x="45" y="103" text-anchor="middle" fill="#2563eb" font-size="8" font-weight="bold">-</text>
                    <text x="45" y="125" text-anchor="middle" fill="#2563eb" font-size="9" font-weight="bold"><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">in</tspan><tspan font-size="100%" dy="-2"> (DC)</tspan></text>

                    <!-- Resistencia Serie R_s -->
                    <line x1="45" y1="80" x2="45" y2="55" stroke="#64748b" stroke-width="1.5"/>
                    <line x1="45" y1="55" x2="85" y2="55" stroke="#64748b" stroke-width="1.5"/>
                    <rect x="85" y="47" width="35" height="16" fill="#f1f5f9" stroke="#475569" stroke-width="1.5"/>
                    <text x="102" y="38" text-anchor="middle" fill="#475569" font-size="9" font-weight="bold"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">s</tspan></text>
                    <line x1="120" y1="55" x2="180" y2="55" stroke="#64748b" stroke-width="1.5"/>

                    <!-- Corriente I_s -->
                    <line x1="58" y1="47" x2="78" y2="47" stroke="#2563eb" stroke-width="1.5"/>
                    <polygon points="76,44 81,47 76,50" fill="#2563eb"/>
                    <text x="68" y="42" fill="#2563eb" font-size="8" font-weight="bold"><tspan font-style="italic">I</tspan><tspan font-size="75%" dy="2">s</tspan></text>

                    <!-- Diodo Zener en Rama Vertical (Símbolo IEEE Correcto: Cátodo arriba con alas en Z, Ánodo abajo) -->
                    <line x1="180" y1="55" x2="180" y2="78" stroke="#64748b" stroke-width="1.5"/>
                    
                    <!-- Símbolo Zener centrado en (180, 92) -->
                    <g transform="translate(180, 92)">
                      <!-- Cátodo con alas Zener en Z en la parte superior -->
                      <path d="M -9 -4 L -6 -8 L 6 -8 L 9 -12" fill="none" stroke="#0284c7" stroke-width="2"/>
                      <!-- Triángulo apuntando hacia el cátodo (arriba) -->
                      <polygon points="0,-8 -7,5 7,5" fill="#0ea5e9" stroke="#0284c7" stroke-width="1.3"/>
                      
                      <text x="15" y="-1" fill="#0284c7" font-weight="bold" font-size="9">Zener</text>
                      <text x="15" y="11" fill="#0284c7" font-size="8"><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">Z</tspan></text>
                    </g>

                    <line x1="180" y1="97" x2="180" y2="145" stroke="#64748b" stroke-width="1.5"/>

                    <!-- Flecha Corriente inversa I_Z (hacia abajo, entrando al cátodo) -->
                    <line x1="168" y1="67" x2="168" y2="82" stroke="#0284c7" stroke-width="1.5"/>
                    <polygon points="165,80 168,85 171,80" fill="#0284c7"/>
                    <text x="162" y="76" text-anchor="end" fill="#0284c7" font-size="8" font-weight="bold"><tspan font-style="italic">I</tspan><tspan font-size="75%" dy="2">Z</tspan></text>

                    <!-- Rama de Carga R_L -->
                    <line x1="180" y1="55" x2="260" y2="55" stroke="#64748b" stroke-width="1.5"/>
                    
                    <!-- Corriente I_L -->
                    <line x1="210" y1="47" x2="230" y2="47" stroke="#10b981" stroke-width="1.5"/>
                    <polygon points="228,44 233,47 228,50" fill="#10b981"/>
                    <text x="220" y="42" fill="#10b981" font-size="8" font-weight="bold"><tspan font-style="italic">I</tspan><tspan font-size="75%" dy="2">L</tspan></text>

                    <line x1="260" y1="55" x2="260" y2="75" stroke="#64748b" stroke-width="1.5"/>
                    <rect x="252" y="75" width="16" height="40" fill="#f1f5f9" stroke="#475569" stroke-width="1.4"/>
                    <text x="278" y="98" fill="#475569" font-size="9" font-weight="bold"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">L</tspan></text>
                    <line x1="260" y1="115" x2="260" y2="145" stroke="#64748b" stroke-width="1.5"/>

                    <!-- Retorno común a masa -->
                    <line x1="260" y1="145" x2="45" y2="145" stroke="#64748b" stroke-width="1.5"/>
                    <line x1="45" y1="145" x2="45" y2="110" stroke="#64748b" stroke-width="1.5"/>

                    <text x="250" y="48" fill="#dc2626" font-size="9" font-weight="bold">+</text>
                    <text x="250" y="152" fill="#dc2626" font-size="9" font-weight="bold">-</text>
                    <text x="280" y="60" fill="#dc2626" font-size="9" font-weight="bold"><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">out</tspan></text>
                  </g>

                  <!-- Lado Derecho: Curva de Transferencia V_out vs V_in y Rangos Operativos -->
                  <g transform="translate(345, 15)">
                    <rect x="0" y="0" width="325" height="185" rx="10" fill="#3b82f6" fill-opacity="0.04" stroke="#64748b" stroke-opacity="0.3" stroke-width="1"/>
                    <text x="162" y="18" text-anchor="middle" font-weight="bold" fill="#334155" font-size="10">Curva de Transferencia <tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">out</tspan><tspan font-size="100%" dy="-2"> vs </tspan><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">in</tspan></text>

                    <!-- Ejes coordenados -->
                    <line x1="35" y1="140" x2="300" y2="140" stroke="#94a3b8" stroke-width="1.2"/>
                    <text x="305" y="143" fill="#64748b" font-size="9"><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">in</tspan></text>
                    <line x1="45" y1="30" x2="45" y2="150" stroke="#94a3b8" stroke-width="1.2"/>
                    <text x="40" y="32" text-anchor="end" fill="#64748b" font-size="9"><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">out</tspan></text>

                    <!-- Zona No Regulada (lineal con pendiente R_L / (R_s + R_L)) -->
                    <line x1="45" y1="140" x2="130" y2="75" stroke="#f59e0b" stroke-width="2.2"/>
                    
                    <!-- Zona Regulada (horizontal plana en V_Z) -->
                    <line x1="130" y1="75" x2="270" y2="75" stroke="#059669" stroke-width="3"/>

                    <!-- Zona de Destrucción Térmica (más allá de V_in,max) -->
                    <line x1="270" y1="75" x2="295" y2="75" stroke="#dc2626" stroke-width="2" stroke-dasharray="3,2"/>

                    <!-- Puntos de referencia -->
                    <line x1="130" y1="75" x2="130" y2="140" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/>
                    <text x="130" y="152" text-anchor="middle" fill="#d97706" font-size="8" font-weight="bold"><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">in,min</tspan></text>
                    <text x="130" y="162" text-anchor="middle" fill="#b45309" font-size="7">(<tspan font-style="italic">I</tspan><tspan font-size="75%" dy="1.5">Z</tspan><tspan font-size="100%" dy="-1.5"> = </tspan><tspan font-style="italic">I</tspan><tspan font-size="75%" dy="1.5">ZK</tspan>)</text>

                    <line x1="270" y1="75" x2="270" y2="140" stroke="#ef4444" stroke-width="1" stroke-dasharray="3,3"/>
                    <text x="270" y="152" text-anchor="middle" fill="#dc2626" font-size="8" font-weight="bold"><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">in,max</tspan></text>
                    <text x="270" y="162" text-anchor="middle" fill="#b91c1c" font-size="7">(<tspan font-style="italic">I</tspan><tspan font-size="75%" dy="1.5">Z</tspan><tspan font-size="100%" dy="-1.5"> = </tspan><tspan font-style="italic">I</tspan><tspan font-size="75%" dy="1.5">Z,max</tspan>)</text>

                    <line x1="45" y1="75" x2="130" y2="75" stroke="#059669" stroke-width="1" stroke-dasharray="3,3"/>
                    <text x="38" y="78" text-anchor="end" fill="#059669" font-weight="bold" font-size="9.5"><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">Z</tspan></text>

                    <!-- Etiquetas descriptivas -->
                    <text x="85" y="112" fill="#d97706" font-size="7.5" font-weight="bold">Zener Apagado</text>
                    <text x="85" y="122" fill="#64748b" font-size="7"><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="1.5">out</tspan><tspan font-size="100%" dy="-1.5"> &lt; </tspan><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="1.5">Z</tspan><tspan font-size="100%" dy="-1.5"> (Divisor)</tspan></text>

                    <text x="200" y="65" text-anchor="middle" fill="#047857" font-weight="bold" font-size="9.5">Zona Regulada: <tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">out</tspan><tspan font-size="100%" dy="-2"> = </tspan><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">Z</tspan></text>
                    <text x="200" y="95" text-anchor="middle" fill="#64748b" font-size="8"><tspan font-style="italic">I</tspan><tspan font-size="75%" dy="1.5">s</tspan><tspan font-size="100%" dy="-1.5"> = </tspan><tspan font-style="italic">I</tspan><tspan font-size="75%" dy="1.5">Z</tspan><tspan font-size="100%" dy="-1.5"> + </tspan><tspan font-style="italic">I</tspan><tspan font-size="75%" dy="1.5">L</tspan><tspan font-size="100%" dy="-1.5"> (Zener absorbe excesos)</tspan></text>

                    <text x="282" y="68" fill="#dc2626" font-size="7" font-weight="bold">¡Peligro <tspan font-style="italic">P</tspan><tspan font-size="75%" dy="1.5">Z,max</tspan>!</text>
                  </g>
                </svg>
              </div>

              <!-- CUADRO CONCEPTUAL: PARÁMETROS CRÍTICOS DEL ZENER (IZK, IZT, IZ,max) -->
              <div class="p-3.5 rounded-2xl bg-cyan-500/10 dark:bg-cyan-950/40 border border-cyan-500/30 text-xs space-y-2.5">
                <div class="flex items-center gap-2 font-bold text-cyan-800 dark:text-cyan-300 text-xs uppercase tracking-wider">
                  <span>📌</span> Parámetros Críticos del Diodo Zener en Catálogos ($I_{ZK}$, $I_{ZT}$, $I_{Z,max}$):
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-[11px]">
                  <!-- IZK -->
                  <div class="p-3 rounded-xl bg-white/90 dark:bg-slate-800/90 border border-amber-300 dark:border-amber-700/60 space-y-1.5 shadow-sm">
                    <span class="font-bold text-amber-700 dark:text-amber-400 block font-mono text-xs">
                      $I_{ZK}$ (Knee Current / Corriente de Codo):
                    </span>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Es la <strong>corriente inversa mínima imprescindible</strong> que debe atravesar al diodo para entrar y mantenerse dentro de la zona de ruptura ("rodilla" de la curva).
                    </p>
                    <div class="p-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-[10.5px] font-semibold text-amber-900 dark:text-amber-300">
                      🛑 <strong>Condición de Regulación:</strong> Si $I_Z < I_{ZK}$, el Zener se <em>apaga</em>, sale de ruptura y deja de regular: $V_{out}$ se desploma.
                    </div>
                    <span class="text-[10px] text-slate-500 block">Valor típico: $0.25\\text{ mA} \\sim 1\\text{ mA}$ (o 5-10% de $I_{ZT}$).</span>
                  </div>

                  <!-- IZT -->
                  <div class="p-3 rounded-xl bg-white/90 dark:bg-slate-800/90 border border-blue-300 dark:border-blue-700/60 space-y-1.5 shadow-sm">
                    <span class="font-bold text-blue-700 dark:text-blue-400 block font-mono text-xs">
                      $I_{ZT}$ (Test Current / Corriente Nominal):
                    </span>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Punto de trabajo nominal fijado por el fabricante en la hoja de datos para certificar la tensión $V_Z$ especificada.
                    </p>
                    <div class="p-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-[10.5px] text-blue-900 dark:text-blue-300">
                      🎯 Se ubica en la zona más vertical de la curva, donde la resistencia dinámica $Z_{ZT}$ es mínima y la regulación es óptima.
                    </div>
                    <span class="text-[10px] text-slate-500 block">Valor típico: $5\\text{ mA} \\sim 25\\text{ mA}$.</span>
                  </div>

                  <!-- IZ,max -->
                  <div class="p-3 rounded-xl bg-white/90 dark:bg-slate-800/90 border border-red-300 dark:border-red-700/60 space-y-1.5 shadow-sm">
                    <span class="font-bold text-red-600 dark:text-red-400 block font-mono text-xs">
                      $I_{Z,max}$ (Corriente Máxima Térmica):
                    </span>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Límite superior absoluto de corriente fijado por la potencia máxima de disipación admisible del encapsulado:
                    </p>
                    <div class="text-center font-mono font-bold text-red-600 dark:text-red-400 my-0.5">
                      $$I_{Z,max} = \\frac{P_{Z,max}}{V_Z}$$
                    </div>
                    <div class="p-1.5 rounded-lg bg-red-500/10 border border-red-500/30 text-[10.5px] font-semibold text-red-900 dark:text-red-300">
                      🔥 <strong>Límite de Destrucción:</strong> Si $I_Z > I_{Z,max}$, la juntura se quema irreversiblemente por sobrecalentamiento.
                    </div>
                  </div>
                </div>
              </div>

              <!-- ANÁLISIS DE SENSIBILIDAD DINÁMICA: CÓMO AFECTA CADA CAMBIO -->
              <div class="mt-3 space-y-3">
                <span class="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                  🔍 Dinámica del Circuito: ¿Cómo afecta la variación de cada parámetro?
                </span>

                <!-- 1. Variación de Vin -->
                <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2">
                  <div class="flex flex-wrap items-center justify-between gap-1 border-b border-slate-100 dark:border-slate-700/60 pb-1.5">
                    <div class="font-bold text-blue-700 dark:text-blue-400 flex items-center gap-1.5 text-xs">
                      <span class="px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 font-mono text-[10px]">CASO 1</span>
                      Variación de la Tensión de Entrada ($V_{in}$) — Regulación de Línea
                    </div>
                    <span class="text-[10px] font-mono text-slate-500 bg-slate-100 dark:bg-slate-700/50 px-2 py-0.5 rounded">
                      Carga fija: $I_L = \\frac{V_Z}{R_L} = \\text{cte}$
                    </span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs pt-1">
                    <div class="p-2.5 rounded-lg bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/80 dark:border-blue-900/50 space-y-1">
                      <span class="font-bold text-blue-800 dark:text-blue-300 block text-[11px]">
                        🔺 Si $V_{in}$ sube (↑, Aumento de tensión en la fuente):
                      </span>
                      <p class="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                        La corriente de entrada $I_s = \\frac{V_{in} - V_Z}{R_s}$ sube. Como la carga $I_L$ es fija, <strong>todo el exceso de corriente entra forzosamente al Zener</strong> ($I_Z$ sube).
                      </p>
                      <div class="text-[10.5px] text-amber-800 dark:text-amber-300 font-medium bg-amber-500/10 p-1 rounded mt-1">
                        ⚠️ <em>Riesgo:</em> Si $V_{in} > V_{in,max}$, se supera $I_{Z,max}$ y el Zener se quema por sobrepotencia térmica ($P_Z > P_{Z,max}$).
                      </div>
                    </div>

                    <div class="p-2.5 rounded-lg bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/80 dark:border-blue-900/50 space-y-1">
                      <span class="font-bold text-blue-800 dark:text-blue-300 block text-[11px]">
                        🔻 Si $V_{in}$ baja (↓, Descenso de tensión en la fuente):
                      </span>
                      <p class="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                        La corriente $I_s$ cae y el Zener reduce su absorción ($I_Z$ baja) para cederle la corriente a la carga.
                      </p>
                      <div class="text-[10.5px] text-rose-800 dark:text-rose-300 font-medium bg-rose-500/10 p-1 rounded mt-1">
                        🛑 <em>Riesgo:</em> Si $V_{in} < V_{in,min}$, la corriente cae por debajo del codo ($I_Z < I_{ZK}$); el Zener <strong>se apaga</strong> y $V_{out}$ se desploma.
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 2. Variación de RL -->
                <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2">
                  <div class="flex flex-wrap items-center justify-between gap-1 border-b border-slate-100 dark:border-slate-700/60 pb-1.5">
                    <div class="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5 text-xs">
                      <span class="px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 font-mono text-[10px]">CASO 2</span>
                      Variación de la Resistencia de Carga ($R_L$) — Regulación de Carga
                    </div>
                    <span class="text-[10px] font-mono text-slate-500 bg-slate-100 dark:bg-slate-700/50 px-2 py-0.5 rounded">
                      Fuente fija: $I_s = \\frac{V_{in} - V_Z}{R_s} = \\text{cte}$
                    </span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs pt-1">
                    <div class="p-2.5 rounded-lg bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-900/50 space-y-1">
                      <span class="font-bold text-emerald-800 dark:text-emerald-300 block text-[11px]">
                        🔺 Si $R_L$ sube (↑, Menor consumo de la carga, $I_L$ baja):
                      </span>
                      <p class="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                        Al requerir la carga menos corriente, el excedente se deriva automáticamente al Zener ($I_Z = I_s - I_L$ sube).
                      </p>
                      <div class="text-[10.5px] text-amber-800 dark:text-amber-300 font-medium bg-amber-500/10 p-1 rounded mt-1">
                        ⚠️ <em>Peor caso de potencia:</em> Si $R_L \\to \\infty$ (carga desconectada, $I_L = 0$), toda la corriente entra al Zener ($I_Z = I_s$). Debe verificarse que $I_s \\le I_{Z,max}$.
                      </div>
                    </div>

                    <div class="p-2.5 rounded-lg bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-900/50 space-y-1">
                      <span class="font-bold text-emerald-800 dark:text-emerald-300 block text-[11px]">
                        🔻 Si $R_L$ baja (↓, Mayor consumo de la carga, $I_L$ sube):
                      </span>
                      <p class="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                        La carga "drena" más corriente del nodo, quitándosela al Zener ($I_Z = I_s - I_L$ baja).
                      </p>
                      <div class="text-[10.5px] text-rose-800 dark:text-rose-300 font-medium bg-rose-500/10 p-1 rounded mt-1">
                        🛑 <em>Riesgo:</em> Si $R_L < R_{L,min}$, el Zener se queda sin su corriente mínima ($I_Z < I_{ZK}$), sale de ruptura y la salida colapsa.
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 3. Selección de Rs -->
                <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2">
                  <div class="flex flex-wrap items-center justify-between gap-1 border-b border-slate-100 dark:border-slate-700/60 pb-1.5">
                    <div class="font-bold text-purple-700 dark:text-purple-400 flex items-center gap-1.5 text-xs">
                      <span class="px-1.5 py-0.5 rounded bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-300 font-mono text-[10px]">CASO 3</span>
                      Criterio de Selección de la Resistencia Serie ($R_s$) — Margen Seguro
                    </div>
                    <span class="text-[10px] font-mono text-purple-600 dark:text-purple-300 bg-purple-100 dark:bg-purple-950/50 px-2 py-0.5 rounded font-bold">
                      Ventana admisible: $R_{s,min} \\le R_s \\le R_{s,max}$
                    </span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs pt-1">
                    <div class="p-2.5 rounded-lg bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200/80 dark:border-purple-900/50 space-y-1">
                      <span class="font-bold text-purple-800 dark:text-purple-300 block text-[11px]">
                        🔴 Si $R_s < R_{s,min}$ (Resistencia demasiado pequeña):
                      </span>
                      <p class="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                        Permite el paso de una corriente total excesiva desde la fuente. Ante máxima entrada $V_{in,max}$ y carga desconectada ($I_L = 0$), el Zener absorberá toda la corriente y superará $I_{Z,max}$, <strong>quemándose por sobrecalentamiento</strong>.
                      </p>
                    </div>

                    <div class="p-2.5 rounded-lg bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200/80 dark:border-purple-900/50 space-y-1">
                      <span class="font-bold text-purple-800 dark:text-purple-300 block text-[11px]">
                        🟠 Si $R_s > R_{s,max}$ (Resistencia demasiado grande):
                      </span>
                      <p class="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                        Estrangula y limita la corriente en exceso. Ante mínima entrada $V_{in,min}$ y máxima demanda de carga $I_{L,max}$, no queda suficiente corriente para polarizar al Zener ($I_Z < I_{ZK}$), <strong>perdiéndose la regulación</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- FÓRMULAS DE DISEÑO DE EXAMEN -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                <div class="p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                  <span class="font-bold text-slate-700 dark:text-slate-300 block mb-1">Cálculo de los Límites de $R_s$:</span>
                  <div class="space-y-1.5">
                    <p><strong>1. $R_s$ máxima (Garantiza regulación ante mínima entrada y máxima carga):</strong></p>
                    $$R_{s,max} = \\frac{V_{in,min} - V_Z}{I_{L,max} + I_{ZK}}$$
                    <p class="mt-2"><strong>2. $R_s$ mínima (Protege al Zener de sobrecalentamiento con máxima entrada y sin carga):</strong></p>
                    $$R_{s,min} = \\frac{V_{in,max} - V_Z}{I_{Z,max}} = \\frac{V_{in,max} - V_Z}{P_{Z,max} / V_Z}$$
                  </div>
                </div>

                <div class="p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                  <span class="font-bold text-slate-700 dark:text-slate-300 block mb-1">Resistencia de Carga Mínima y Potencia:</span>
                  <div class="space-y-1.5">
                    <p><strong>Carga mínima admisible ($R_{L,min}$ antes de perder regulación):</strong></p>
                    $$R_{L,min} = \\frac{V_Z}{I_{s} - I_{ZK}} = \\frac{V_Z}{\\frac{V_{in} - V_Z}{R_s} - I_{ZK}}$$
                    <p class="mt-2"><strong>Potencia máxima disipada en el Zener ($P_{Z,max}$):</strong></p>
                    $$P_{Z,disipada} = V_Z \\cdot I_Z = V_Z \\left( \\frac{V_{in,max} - V_Z}{R_s} - I_{L,min} \\right) \\le P_{Z,max}$$
                    <span class="text-[11px] text-slate-500 block">El peor caso térmico siempre ocurre a circuito abierto ($I_L = 0$) y máxima entrada $V_{in,max}$.</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- ============================================================ -->
            <!-- 6. CIRCUITOS RECORTADORES Y FIJADORES -->
            <!-- ============================================================ -->
            <div class="p-3.5 my-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span class="text-xs font-mono font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider block mb-1">
                ⚡ 6. Circuitos Recortadores (Clippers) y Fijadores (Clampers)
              </span>
              <p class="text-xs text-slate-600 dark:text-slate-400">
                <strong>Recortadores (Clippers):</strong> Redes compuestas por diodos y fuentes DC de polarización que eliminan porciones de una forma de onda que superan o caen por debajo de un umbral predeterminado, utilizándose para protección de entradas de microcontroladores y conformación de pulsos.<br>
                <strong>Fijadores de nivel (Clampers):</strong> Redes con diodo, capacitor y resistor que desplazan verticalmente toda la forma de onda sumándole una componente continua pura, sin distorsionar su amplitud pico a pico (restauración del nivel DC en señales de video y comunicaciones).
              </p>
            </div>
          `
        },
        {
          id: 'e1-u2-formulario-diodos',
          titulo: '2.6 Formulario de Examen - Unidad 2',
          contenido: `
            <div class="overflow-x-auto my-3">
              <table class="w-full text-xs text-left border-collapse border border-slate-200 dark:border-slate-800">
                <thead>
                  <tr class="bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 font-mono">
                    <th class="p-2 border border-slate-200 dark:border-slate-800">Circuito / Concepto</th>
                    <th class="p-2 border border-slate-200 dark:border-slate-800">Fórmula de Cálculo</th>
                    <th class="p-2 border border-slate-200 dark:border-slate-800">Parámetros Clave de Examen</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 dark:divide-slate-800 font-mono">
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">Rectificador Media Onda</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$V_{DC} = \\frac{V_{pico}}{\\pi} \\approx 0.318 V_p$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">$PIV = V_p$ · $f_{rizado} = f_{red}$ (50 Hz)</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">Rectificador Toma Central (2 Diodos)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$V_{DC} = \\frac{2 V_{pico}}{\\pi} \\approx 0.636 V_s$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">$PIV = 2 V_s$ · $f_{rizado} = 2 f_{red}$ (100 Hz)</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">Puente de Graetz (4 Diodos)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$V_{DC} = \\frac{2 (V_s - 2V_{\\gamma})}{\\pi}$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">$PIV = V_s$ (óptima) · $f_{rizado} = 100\\text{ Hz}$</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">Rizado con Filtro por Capacitor</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$V_r = \\frac{I_{DC}}{f_{rizado} C} = \\frac{V_{pico}}{f_{rizado} R_L C}$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">$V_{DC} = V_{pico} - \\frac{V_r}{2}$ (Rizado triangular)</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">Regulador Zener ($R_s$ Máxima)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$R_{s,max} = \\frac{V_{in,min} - V_Z}{I_{L,max} + I_{Z,min}}$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">Condición de peor caso para mantener $I_Z \\ge I_{Z,min}$</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">Potencia Máxima Zener ($P_{Z,max}$)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$P_{Z,max} = V_Z \\cdot I_{Z,max}$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">Ocurre con $V_{in,max}$ y sin carga ($I_L = 0$)</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">Ecuación de Shockley</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$I_D = I_S (e^{V_D / \\eta V_T} - 1)$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">$V_T \\approx 26\\text{ mV}$ · $\\Delta V_D/\\Delta T \\approx -2\\text{ mV}/^{\\circ}\\text{C}$</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">Resistencia Dinámica Incremental</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$r_d = \\frac{\\eta V_T}{I_{DQ}}$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">$r_d \\approx 26\\,\\Omega$ a $I_{DQ} = 1\\text{ mA}$ ($\\eta = 1$)</td>
                  </tr>
                </tbody>
              </table>
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
          titulo: '3.1 Principio de Operación, Estructura Física y Regiones de Trabajo',
          contenido: `
            <!-- 1. PRINCIPIO FÍSICO DE OPERACIÓN -->
            <div class="p-3.5 mb-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-slate-800 dark:text-slate-200">
              <span class="text-xs font-mono font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider block mb-1">
                🔬 Estructura Interna y Mecanismo de Transporte
              </span>
              <p class="text-xs leading-relaxed mb-2">
                El <strong>Transistor Bipolar de Juntura (BJT)</strong> está formado por tres capas semiconductoras alternadas ($N$-$P$-$N$ o $P$-$N$-$P$) con un diseño fuertemente asimétrico que hace posible la acción transistorizada:
              </p>
              <ul class="text-xs space-y-1.5 list-disc list-inside text-slate-700 dark:text-slate-300">
                <li><strong>Emisor ($N^+$):</strong> Región fuertemente dopada. Su único objetivo es inyectar una avalancha masiva de electrones mayoritarios hacia la base.</li>
                <li><strong>Base ($P$):</strong> Región <em>extremadamente delgada</em> ($W_B \\ll L_n$, ancho mucho menor que la longitud de difusión) y muy poco dopada. Al tener tan pocos huecos y un espesor microscópico, más del <strong>98% a 99%</strong> de los electrones inyectados la cruzan por difusión sin recombinarse.</li>
                <li><strong>Colector ($N$):</strong> Región de dopado moderado y <em>gran área física</em> (para disipar calor). Su función es recolectar todos los electrones que logran atravesar la base.</li>
              </ul>
            </div>

            <!-- PARADOJA DE LA JUNTURA BC EN INVERSA -->
            <div class="p-3 mb-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-950 dark:text-amber-200 text-xs">
              <strong>💡 La paradoja del Colector en Zona Activa: ¿Por qué conduce si $J_{BC}$ está en polarización inversa?</strong>
              <p class="mt-1 leading-relaxed text-slate-700 dark:text-slate-300">
                Una juntura PN polarizada en inversa bloquea por completo a sus portadores mayoritarios, pero <strong>acelera violentamente a los portadores minoritarios</strong> que alcanzan su zona de carga espacial. Los electrones inyectados por el emisor entran a la base como <em>minoritarios</em>. Debido a que la base es casi nula ($W_B \\ll L_n$), llegan al borde de la juntura $J_{BC}$ donde el intenso campo eléctrico inverso los "succiona" y catapulta hacia el colector. Así, la corriente $I_C$ queda comandada casi al 100% por el emisor ($I_C = \\alpha I_E$), mientras que la corriente de base $I_B$ es solo el minúsculo residuo recombinado (~1%).
              </p>
            </div>

            <!-- 2. DIAGRAMA SVG DUAL: ESTRUCTURA FÍSICA vs SÍMBOLO ESQUEMÁTICO -->
            <div class="my-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span class="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-2 text-center">
                📊 Estructura Física NPN vs. Símbolo Circuital y Convenios de Corriente
              </span>
              <div class="flex justify-center overflow-x-auto">
                <svg viewBox="0 0 680 255" class="w-full max-w-[680px] text-xs font-sans select-none" style="min-width: 520px;">
                  <defs>
                    <marker id="bjt-arr-blue" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                      <polygon points="0 0, 6 3, 0 6" fill="#3b82f6"/>
                    </marker>
                    <marker id="bjt-arr-red" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                      <polygon points="0 0, 6 3, 0 6" fill="#ef4444"/>
                    </marker>
                    <marker id="bjt-arr-green" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                      <polygon points="0 0, 6 3, 0 6" fill="#10b981"/>
                    </marker>
                    <marker id="bjt-arr-amber" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                      <polygon points="0 0, 6 3, 0 6" fill="#f59e0b"/>
                    </marker>
                    <marker id="bjt-arr-slate" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                      <polygon points="0 0, 6 3, 0 6" fill="#64748b"/>
                    </marker>
                    <marker id="bjt-arr-indigo" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                      <polygon points="0 0, 6 3, 0 6" fill="#6366f1"/>
                    </marker>
                  </defs>

                  <!-- ================= PARTE IZQUIERDA: FÍSICA NPN ================= -->
                  <g>
                    <!-- Título Física -->
                    <text x="160" y="16" text-anchor="middle" font-weight="bold" fill="#6366f1" font-size="11.5">Física del Semiconductor (NPN en ZAD)</text>

                    <!-- Junturas indicadas arriba de los bloques (con líneas guía para evitar superposición con I_B) -->
                    <line x1="105" y1="38" x2="105" y2="55" stroke="#94a3b8" stroke-width="1" stroke-dasharray="2 2"/>
                    <text x="100" y="47" text-anchor="end" fill="#64748b" font-size="8">J<tspan font-size="70%" dy="1.5">BE</tspan><tspan font-size="100%" dy="-1.5"> (Directa)</tspan></text>

                    <line x1="160" y1="38" x2="160" y2="55" stroke="#94a3b8" stroke-width="1" stroke-dasharray="2 2"/>
                    <text x="166" y="47" text-anchor="start" fill="#64748b" font-size="8">J<tspan font-size="70%" dy="1.5">BC</tspan><tspan font-size="100%" dy="-1.5"> (Inversa)</tspan></text>

                    <!-- Emisor N+ -->
                    <rect x="25" y="55" width="80" height="125" rx="3" fill="#3b82f6" fill-opacity="0.12" stroke="#3b82f6" stroke-width="2"/>
                    <text x="65" y="78" text-anchor="middle" font-weight="bold" fill="#3b82f6" font-size="11">Emisor (N⁺)</text>
                    <text x="65" y="93" text-anchor="middle" fill="#64748b" font-size="8.5">Dopado muy alto</text>
                    <text x="65" y="106" text-anchor="middle" fill="#64748b" font-size="8.5">Inyección masiva</text>
                    <text x="65" y="158" text-anchor="middle" font-weight="bold" fill="#2563eb" font-size="13">e⁻ e⁻ e⁻</text>

                    <!-- Base P (Estrecha pero con ancho suficiente: 55px) -->
                    <rect x="105" y="55" width="55" height="125" rx="2" fill="#ec4899" fill-opacity="0.14" stroke="#ec4899" stroke-width="2"/>
                    <text x="132" y="75" text-anchor="middle" font-weight="bold" fill="#db2777" font-size="10.5">Base (P)</text>
                    <text x="132" y="89" text-anchor="middle" fill="#94a3b8" font-size="8">Muy fina</text>
                    <text x="132" y="102" text-anchor="middle" fill="#94a3b8" font-size="8"><tspan font-style="italic">W</tspan><tspan font-size="70%" dy="1.5">B</tspan><tspan font-size="100%" dy="-1.5"> ≪ </tspan><tspan font-style="italic">L</tspan><tspan font-size="70%" dy="1.5">n</tspan></text>
                    <text x="132" y="168" text-anchor="middle" font-weight="bold" fill="#db2777" font-size="9">h⁺ (~1%)</text>

                    <!-- Colector N -->
                    <rect x="160" y="55" width="135" height="125" rx="3" fill="#10b981" fill-opacity="0.12" stroke="#10b981" stroke-width="2"/>
                    <text x="227" y="78" text-anchor="middle" font-weight="bold" fill="#10b981" font-size="11">Colector (N)</text>
                    <text x="227" y="93" text-anchor="middle" fill="#64748b" font-size="8.5">Dopado moderado</text>
                    <text x="227" y="106" text-anchor="middle" fill="#64748b" font-size="8.5">Gran área de disipación</text>
                    <text x="227" y="158" text-anchor="middle" font-weight="bold" fill="#059669" font-size="10">Recolección de e⁻ (~99%)</text>

                    <!-- Flujo principal de electrones (Flecha ámbar, despejada) -->
                    <line x1="72" y1="130" x2="192" y2="130" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="4 2" marker-end="url(#bjt-arr-amber)"/>
                    <text x="132" y="123" text-anchor="middle" fill="#d97706" font-size="7.5" font-weight="bold">Difusión ~99% de e⁻</text>

                    <!-- Terminal Base B (Arriba, centrado y despejado) -->
                    <line x1="132" y1="55" x2="132" y2="33" stroke="#ec4899" stroke-width="2"/>
                    <circle cx="132" cy="33" r="3.5" fill="#ec4899"/>
                    <text x="132" y="25" text-anchor="middle" font-weight="bold" fill="#db2777" font-size="11">B</text>
                    <!-- Flecha I_B entrando a base -->
                    <line x1="142" y1="30" x2="142" y2="48" stroke="#ef4444" stroke-width="1.6" marker-end="url(#bjt-arr-red)"/>
                    <text x="146" y="41" text-anchor="start" font-weight="bold" fill="#ef4444" font-size="8.5"><tspan font-style="italic">I</tspan><tspan font-size="75%" dy="2">B</tspan></text>

                    <!-- Terminal Emisor E (Abajo) -->
                    <line x1="65" y1="180" x2="65" y2="218" stroke="#3b82f6" stroke-width="2.5"/>
                    <circle cx="65" cy="218" r="3.5" fill="#3b82f6"/>
                    <text x="65" y="234" text-anchor="middle" font-weight="bold" fill="#3b82f6" font-size="11">E</text>
                    <line x1="80" y1="188" x2="80" y2="212" stroke="#3b82f6" stroke-width="1.6" marker-end="url(#bjt-arr-blue)"/>
                    <text x="86" y="203" text-anchor="start" font-weight="bold" fill="#3b82f6" font-size="9"><tspan font-style="italic">I</tspan><tspan font-size="75%" dy="2">E</tspan></text>

                    <!-- Terminal Colector C (Abajo) -->
                    <line x1="227" y1="180" x2="227" y2="218" stroke="#10b981" stroke-width="2.5"/>
                    <circle cx="227" cy="218" r="3.5" fill="#10b981"/>
                    <text x="227" y="234" text-anchor="middle" font-weight="bold" fill="#10b981" font-size="11">C</text>
                    <line x1="242" y1="212" x2="242" y2="188" stroke="#10b981" stroke-width="1.6" marker-end="url(#bjt-arr-green)"/>
                    <text x="248" y="203" text-anchor="start" font-weight="bold" fill="#10b981" font-size="9"><tspan font-style="italic">I</tspan><tspan font-size="75%" dy="2">C</tspan></text>
                  </g>

                  <!-- Divisor vertical -->
                  <line x1="325" y1="20" x2="325" y2="245" stroke="#cbd5e1" stroke-dasharray="3 3" stroke-width="1"/>

                  <!-- ================= PARTE DERECHA: SÍMBOLO NPN ================= -->
                  <g transform="translate(340, 0)">
                    <!-- Título Símbolo -->
                    <text x="160" y="16" text-anchor="middle" font-weight="bold" fill="#6366f1" font-size="11.5">Símbolo Esquemático NPN (IEEE)</text>

                    <!-- Transistor NPN Línea Base -->
                    <line x1="140" y1="80" x2="140" y2="145" stroke="#334155" stroke-width="3.5" stroke-linecap="round"/>

                    <!-- Terminal Base -->
                    <line x1="75" y1="112" x2="140" y2="112" stroke="#475569" stroke-width="2"/>
                    <circle cx="75" cy="112" r="3.5" fill="#ec4899"/>
                    <text x="63" y="116" text-anchor="end" font-weight="bold" fill="#db2777" font-size="12">B</text>

                    <!-- Colector (Rama superior, sin colisionar con el título) -->
                    <line x1="140" y1="95" x2="195" y2="60" stroke="#475569" stroke-width="2"/>
                    <line x1="195" y1="60" x2="195" y2="38" stroke="#475569" stroke-width="2"/>
                    <circle cx="195" cy="38" r="3.5" fill="#10b981"/>
                    <text x="183" y="42" text-anchor="end" font-weight="bold" fill="#059669" font-size="12">C</text>

                    <!-- Emisor (Rama inferior con flecha hacia afuera) -->
                    <line x1="140" y1="130" x2="195" y2="165" stroke="#475569" stroke-width="2"/>
                    <!-- Flecha saliente NPN normalizada -->
                    <polygon points="182,161 195,165 188,150" fill="#ef4444"/>
                    <line x1="195" y1="165" x2="195" y2="218" stroke="#475569" stroke-width="2"/>
                    <circle cx="195" cy="218" r="3.5" fill="#3b82f6"/>
                    <text x="195" y="235" text-anchor="middle" font-weight="bold" fill="#2563eb" font-size="12">E</text>

                    <!-- Corrientes con flechas únicas y limpias -->
                    <!-- I_B entrando a base -->
                    <line x1="88" y1="102" x2="122" y2="102" stroke="#ef4444" stroke-width="2" marker-end="url(#bjt-arr-red)"/>
                    <text x="105" y="96" text-anchor="middle" font-weight="bold" fill="#ef4444" font-size="9.5"><tspan font-style="italic">I</tspan><tspan font-size="75%" dy="2">B</tspan></text>

                    <!-- I_C bajando a colector -->
                    <line x1="210" y1="44" x2="210" y2="72" stroke="#10b981" stroke-width="2" marker-end="url(#bjt-arr-green)"/>
                    <text x="218" y="60" text-anchor="start" font-weight="bold" fill="#059669" font-size="9.5"><tspan font-style="italic">I</tspan><tspan font-size="75%" dy="2">C</tspan></text>

                    <!-- I_E saliendo de emisor -->
                    <line x1="210" y1="175" x2="210" y2="205" stroke="#3b82f6" stroke-width="2" marker-end="url(#bjt-arr-blue)"/>
                    <text x="218" y="192" text-anchor="start" font-weight="bold" fill="#2563eb" font-size="9.5"><tspan font-style="italic">I</tspan><tspan font-size="75%" dy="2">E</tspan></text>

                    <!-- Tensión V_BE (Base-Emisor): de (-) Emisor a (+) Base -->
                    <text x="75" y="142" font-size="8.5" font-weight="bold" fill="#db2777">(+)</text>
                    <text x="175" y="210" font-size="8.5" font-weight="bold" fill="#2563eb">(−)</text>
                    <path d="M 170 198 Q 105 185 85 136" fill="none" stroke="#6366f1" stroke-width="1.4" stroke-dasharray="3 3" marker-end="url(#bjt-arr-indigo)"/>
                    <text x="122" y="180" text-anchor="middle" font-weight="bold" fill="#4f46e5" font-size="9.5"><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">BE</tspan><tspan font-size="100%" dy="-2"> ≈ 0.7 V</tspan></text>

                    <!-- Tensión V_CE (Colector-Emisor): de (-) Emisor a (+) Colector (flecha apuntando hacia arriba (+)) -->
                    <line x1="248" y1="204" x2="248" y2="48" stroke="#64748b" stroke-width="1.3" stroke-dasharray="3 3" marker-end="url(#bjt-arr-slate)"/>
                    <text x="248" y="38" text-anchor="middle" font-weight="bold" fill="#059669" font-size="8.5">(+)</text>
                    <text x="248" y="218" text-anchor="middle" font-weight="bold" fill="#2563eb" font-size="8.5">(−)</text>
                    <text x="258" y="125" text-anchor="start" font-weight="bold" fill="#334155" dark:fill="#cbd5e1" font-size="10"><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">CE</tspan></text>
                  </g>
                </svg>
              </div>
            </div>

            <!-- 3. RELACIONES FUNDAMENTALES DE CORRIENTE -->
            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Relaciones Cuantitativas Fundamentales (ZAD)</h5>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400 block mb-1">Ley de Kirchhoff de Corrientes (KCL)</span>
                $$I_E = I_C + I_B$$
                <p class="text-[11px] text-slate-600 dark:text-slate-400 mt-1">
                  La corriente de emisor es siempre la suma de la corriente de colector y de base, aplicable en <em>todas</em> las regiones.
                </p>
              </div>
              <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400 block mb-1">Ganancia de Corriente ($\\beta$ o $h_{FE}$)</span>
                $$I_C = \\beta I_B \\implies I_E = (1 + \\beta) I_B$$
                <p class="text-[11px] text-slate-600 dark:text-slate-400 mt-1">
                  En Activa Directa, una pequeña $I_B$ modula una gran $I_C$. Típicamente $\\beta \\in [50, 300]$ y posee gran dispersión térmica.
                </p>
              </div>
              <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 sm:col-span-2">
                <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400 block mb-1">Factor Alfa ($\\alpha$) y Conversión $\\alpha \\leftrightarrow \\beta$</span>
                $$\\alpha = \\frac{I_C}{I_E} = \\frac{\\beta}{1 + \\beta} \\approx 0.980 \\sim 0.998, \\qquad \\beta = \\frac{\\alpha}{1 - \\alpha}$$
                <p class="text-[11px] text-slate-600 dark:text-slate-400 mt-1">
                  $\\alpha$ representa la fracción de portadores inyectados por el emisor que llegan efectivamente al colector sin recombinarse en la base.
                </p>
              </div>
            </div>

            <!-- 4. TABLA COMPARATIVA DE LAS 4 REGIONES DE OPERACIÓN -->
            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Las 4 Regiones de Operación del BJT</h5>
            <p class="text-xs text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">
              El transistor BJT contiene dos junturas PN ($J_{BE}$ y $J_{BC}$). Dependiendo de si cada una se polariza en directa o en inversa, el dispositivo adopta <strong>cuatro modelos circuitales equivalentes totalmente distintos</strong>:
            </p>

            <!-- TARJETAS CON CIRCUITOS EQUIVALENTES DE LAS 4 REGIONES -->
            <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 my-3">
              <!-- REGION 1: CORTE -->
              <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-red-500/30 flex flex-col justify-between shadow-2xs">
                <div>
                  <div class="flex items-center justify-between gap-1 mb-1.5">
                    <span class="font-bold text-xs text-red-600 dark:text-red-400">1. Región de Corte</span>
                    <span class="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20">Llave OFF</span>
                  </div>
                  <div class="text-[11px] text-slate-500 dark:text-slate-400 mb-2 space-y-0.5">
                    <div>• Juntura BE: <strong class="text-slate-700 dark:text-slate-200">Inversa</strong> ($V_{BE} < 0.5\\text{ V}$)</div>
                    <div>• Juntura BC: <strong class="text-slate-700 dark:text-slate-200">Inversa</strong> ($V_{BC} \\le 0$)</div>
                  </div>
                  <!-- SVG Circuito Corte -->
                  <div class="py-1">
                    <svg viewBox="0 0 220 155" class="w-full h-auto text-xs font-sans select-none block">
                      <rect x="0" y="0" width="220" height="155" rx="8" fill="#ef4444" fill-opacity="0.04" stroke="#ef4444" stroke-opacity="0.25" stroke-width="1"/>
                      
                      <!-- Terminal B (Izquierda) -->
                      <line x1="25" y1="95" x2="60" y2="95" stroke="#475569" stroke-width="1.8"/>
                      <circle cx="25" cy="95" r="3.5" fill="#ec4899"/>
                      <text x="18" y="98" text-anchor="end" font-weight="bold" fill="#ec4899" font-size="10">B</text>
                      
                      <!-- Circuito abierto B -->
                      <circle cx="60" cy="95" r="2.5" fill="#ef4444"/>
                      <circle cx="75" cy="95" r="2.5" fill="#ef4444"/>
                      <text x="50" y="85" text-anchor="middle" font-weight="bold" fill="#ef4444" font-size="8.5">I<tspan baseline-shift="sub" font-size="70%">B</tspan> = 0</text>

                      <!-- Terminal C (Arriba) -->
                      <line x1="155" y1="18" x2="155" y2="48" stroke="#475569" stroke-width="1.8"/>
                      <circle cx="155" cy="18" r="3.5" fill="#10b981"/>
                      <text x="155" y="11" text-anchor="middle" font-weight="bold" fill="#10b981" font-size="10">C</text>
                      <text x="165" y="38" font-weight="bold" fill="#ef4444" font-size="8.5">I<tspan baseline-shift="sub" font-size="70%">C</tspan> = 0</text>

                      <!-- Interruptor C-E Abierto -->
                      <circle cx="155" cy="48" r="2.5" fill="#475569"/>
                      <!-- Cuchilla de interruptor abierta -->
                      <line x1="155" y1="88" x2="138" y2="52" stroke="#ef4444" stroke-width="2.2" stroke-linecap="round"/>
                      <circle cx="155" cy="88" r="2.5" fill="#475569"/>

                      <!-- Terminal E (Abajo) -->
                      <line x1="155" y1="88" x2="155" y2="138" stroke="#475569" stroke-width="1.8"/>
                      <circle cx="155" cy="138" r="3.5" fill="#3b82f6"/>
                      <text x="155" y="151" text-anchor="middle" font-weight="bold" fill="#3b82f6" font-size="10">E</text>
                      <text x="165" y="125" font-weight="bold" fill="#ef4444" font-size="8.5">I<tspan baseline-shift="sub" font-size="70%">E</tspan> = 0</text>

                      <!-- Badge Central -->
                      <rect x="58" y="55" width="72" height="20" rx="4" fill="#ef4444" fill-opacity="0.12" stroke="#ef4444" stroke-width="1"/>
                      <text x="94" y="68" text-anchor="middle" font-weight="bold" fill="#dc2626" font-size="8">C-E ABIERTO</text>

                      <!-- Cota V_CE exterior -->
                      <text x="210" y="72" text-anchor="end" font-weight="bold" fill="#64748b" font-size="8">V<tspan baseline-shift="sub" font-size="70%">CE</tspan> = V<tspan baseline-shift="sub" font-size="70%">CC</tspan></text>
                    </svg>
                  </div>
                </div>
                <div class="mt-2 pt-1.5 border-t border-slate-100 dark:border-slate-800 text-[10.5px] text-slate-600 dark:text-slate-400">
                  <strong class="text-red-600 dark:text-red-400">Comportamiento:</strong> Llave abierta sin conducción. Tensión $V_{CE}$ máxima fijada por la fuente externa.
                </div>
              </div>

              <!-- REGION 2: ACTIVA DIRECTA (ZAD) -->
              <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-emerald-500/30 flex flex-col justify-between shadow-2xs">
                <div>
                  <div class="flex items-center justify-between gap-1 mb-1.5">
                    <span class="font-bold text-xs text-emerald-600 dark:text-emerald-400">2. Activa Directa (ZAD)</span>
                    <span class="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">Lineal</span>
                  </div>
                  <div class="text-[11px] text-slate-500 dark:text-slate-400 mb-2 space-y-0.5">
                    <div>• Juntura BE: <strong class="text-emerald-600 dark:text-emerald-400">Directa</strong> ($V_{BE} \\approx 0.7\\text{ V}$)</div>
                    <div>• Juntura BC: <strong class="text-slate-700 dark:text-slate-200">Inversa</strong> ($V_{BC} \\le 0$)</div>
                  </div>
                  <!-- SVG Circuito ZAD -->
                  <div class="py-1">
                    <svg viewBox="0 0 220 155" class="w-full h-auto text-xs font-sans select-none block">
                      <rect x="0" y="0" width="220" height="155" rx="8" fill="#10b981" fill-opacity="0.04" stroke="#10b981" stroke-opacity="0.25" stroke-width="1"/>

                      <!-- Terminal B (Izquierda) -->
                      <line x1="25" y1="95" x2="60" y2="95" stroke="#475569" stroke-width="1.8"/>
                      <circle cx="25" cy="95" r="3.5" fill="#ec4899"/>
                      <text x="18" y="98" text-anchor="end" font-weight="bold" fill="#ec4899" font-size="10">B</text>
                      <!-- Flecha I_B -->
                      <line x1="32" y1="88" x2="52" y2="88" stroke="#ef4444" stroke-width="1.6"/>
                      <polygon points="50,85 55,88 50,91" fill="#ef4444"/>
                      <text x="42" y="81" text-anchor="middle" font-weight="bold" fill="#ef4444" font-size="8">I<tspan baseline-shift="sub" font-size="70%">B</tspan></text>

                      <!-- Diodo B-E en Directa (0.7V) -->
                      <line x1="60" y1="95" x2="60" y2="105" stroke="#475569" stroke-width="1.6"/>
                      <polygon points="53,105 67,105 60,116" fill="#6366f1"/>
                      <line x1="53" y1="116" x2="67" y2="116" stroke="#6366f1" stroke-width="1.8"/>
                      <line x1="60" y1="116" x2="60" y2="138" stroke="#475569" stroke-width="1.6"/>
                      <line x1="60" y1="138" x2="155" y2="138" stroke="#475569" stroke-width="1.6"/>
                      <text x="73" y="114" font-weight="bold" fill="#6366f1" font-size="8">0.7 V</text>

                      <!-- Terminal C (Arriba) -->
                      <line x1="155" y1="18" x2="155" y2="48" stroke="#475569" stroke-width="1.8"/>
                      <circle cx="155" cy="18" r="3.5" fill="#10b981"/>
                      <text x="155" y="11" text-anchor="middle" font-weight="bold" fill="#10b981" font-size="10">C</text>
                      <!-- Flecha I_C -->
                      <line x1="168" y1="24" x2="168" y2="42" stroke="#10b981" stroke-width="1.6"/>
                      <polygon points="165,40 168,45 171,40" fill="#10b981"/>
                      <text x="175" y="36" font-weight="bold" fill="#10b981" font-size="8">I<tspan baseline-shift="sub" font-size="70%">C</tspan></text>

                      <!-- Fuente de Corriente Controlada (Rombo) -->
                      <polygon points="155,52 172,68 155,84 138,68" fill="#10b981" fill-opacity="0.18" stroke="#10b981" stroke-width="1.8"/>
                      <!-- Flecha interior hacia abajo -->
                      <line x1="155" y1="59" x2="155" y2="76" stroke="#10b981" stroke-width="1.8"/>
                      <polygon points="152,74 155,79 158,74" fill="#10b981"/>
                      <text x="132" y="70" text-anchor="end" font-weight="bold" fill="#047857" font-size="8.5">β · I<tspan baseline-shift="sub" font-size="70%">B</tspan></text>

                      <!-- Conexión a Emitter -->
                      <line x1="155" y1="84" x2="155" y2="138" stroke="#475569" stroke-width="1.8"/>
                      <circle cx="155" cy="138" r="2.5" fill="#475569"/>
                      <line x1="155" y1="138" x2="155" y2="148" stroke="#475569" stroke-width="1.8"/>
                      <circle cx="155" cy="148" r="3.5" fill="#3b82f6"/>
                      <text x="165" y="151" font-weight="bold" fill="#3b82f6" font-size="10">E</text>

                      <text x="210" y="72" text-anchor="end" font-weight="bold" fill="#64748b" font-size="7.5">V<tspan baseline-shift="sub" font-size="70%">CE</tspan> &gt; 0.2V</text>
                    </svg>
                  </div>
                </div>
                <div class="mt-2 pt-1.5 border-t border-slate-100 dark:border-slate-800 text-[10.5px] text-slate-600 dark:text-slate-400">
                  <strong class="text-emerald-600 dark:text-emerald-400">Comportamiento:</strong> Fuente de corriente comandada por base ($I_C = \\beta I_B$). Base para amplificadores analógicos lineales.
                </div>
              </div>

              <!-- REGION 3: SATURACIÓN -->
              <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-amber-500/30 flex flex-col justify-between shadow-2xs">
                <div>
                  <div class="flex items-center justify-between gap-1 mb-1.5">
                    <span class="font-bold text-xs text-amber-600 dark:text-amber-400">3. Saturación</span>
                    <span class="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">Llave ON</span>
                  </div>
                  <div class="text-[11px] text-slate-500 dark:text-slate-400 mb-2 space-y-0.5">
                    <div>• Juntura BE: <strong class="text-amber-600 dark:text-amber-400">Directa</strong> ($V_{BE} \\approx 0.7 - 0.8\\text{ V}$)</div>
                    <div>• Juntura BC: <strong class="text-amber-600 dark:text-amber-400">Directa</strong> ($V_{BC} > 0.4\\text{ V}$)</div>
                  </div>
                  <!-- SVG Circuito Saturación -->
                  <div class="py-1">
                    <svg viewBox="0 0 220 155" class="w-full h-auto text-xs font-sans select-none block">
                      <rect x="0" y="0" width="220" height="155" rx="8" fill="#f59e0b" fill-opacity="0.04" stroke="#f59e0b" stroke-opacity="0.25" stroke-width="1"/>

                      <!-- Terminal B (Izquierda) -->
                      <line x1="25" y1="95" x2="60" y2="95" stroke="#475569" stroke-width="1.8"/>
                      <circle cx="25" cy="95" r="3.5" fill="#ec4899"/>
                      <text x="18" y="98" text-anchor="end" font-weight="bold" fill="#ec4899" font-size="10">B</text>
                      <text x="42" y="85" text-anchor="middle" font-weight="bold" fill="#ef4444" font-size="8">I<tspan baseline-shift="sub" font-size="70%">B</tspan> (alta)</text>

                      <!-- Batería V_BE,sat -->
                      <line x1="60" y1="95" x2="60" y2="105" stroke="#475569" stroke-width="1.6"/>
                      <line x1="51" y1="105" x2="69" y2="105" stroke="#d97706" stroke-width="2"/>
                      <line x1="55" y1="111" x2="65" y2="111" stroke="#d97706" stroke-width="1.5"/>
                      <line x1="60" y1="111" x2="60" y2="138" stroke="#475569" stroke-width="1.6"/>
                      <line x1="60" y1="138" x2="155" y2="138" stroke="#475569" stroke-width="1.6"/>
                      <text x="73" y="110" font-weight="bold" fill="#d97706" font-size="7.5">0.7 V</text>

                      <!-- Terminal C (Arriba) -->
                      <line x1="155" y1="18" x2="155" y2="52" stroke="#475569" stroke-width="1.8"/>
                      <circle cx="155" cy="18" r="3.5" fill="#10b981"/>
                      <text x="155" y="11" text-anchor="middle" font-weight="bold" fill="#10b981" font-size="10">C</text>
                      <text x="165" y="34" font-weight="bold" fill="#d97706" font-size="8">I<tspan baseline-shift="sub" font-size="70%">C,sat</tspan></text>

                      <!-- Batería fija V_CE,sat = 0.2V (Casi cortocircuito) -->
                      <line x1="145" y1="58" x2="165" y2="58" stroke="#d97706" stroke-width="2.5"/>
                      <line x1="149" y1="65" x2="161" y2="65" stroke="#d97706" stroke-width="1.8"/>
                      <line x1="155" y1="52" x2="155" y2="58" stroke="#475569" stroke-width="1.8"/>
                      <line x1="155" y1="65" x2="155" y2="138" stroke="#475569" stroke-width="1.8"/>

                      <rect x="75" y="52" width="64" height="20" rx="4" fill="#f59e0b" fill-opacity="0.12" stroke="#f59e0b" stroke-width="1"/>
                      <text x="107" y="65" text-anchor="middle" font-weight="bold" fill="#b45309" font-size="8">V<tspan baseline-shift="sub" font-size="70%">CE,sat</tspan> ≈ 0.2V</text>

                      <!-- Terminal E (Abajo) -->
                      <circle cx="155" cy="138" r="2.5" fill="#475569"/>
                      <line x1="155" y1="138" x2="155" y2="148" stroke="#475569" stroke-width="1.8"/>
                      <circle cx="155" cy="148" r="3.5" fill="#3b82f6"/>
                      <text x="165" y="151" font-weight="bold" fill="#3b82f6" font-size="10">E</text>

                      <text x="110" y="86" text-anchor="middle" font-weight="bold" fill="#dc2626" font-size="7.5">I<tspan baseline-shift="sub" font-size="70%">C</tspan> &lt; β · I<tspan baseline-shift="sub" font-size="70%">B</tspan></text>
                      <text x="110" y="96" text-anchor="middle" fill="#64748b" font-size="7">(β<tspan baseline-shift="sub" font-size="70%">forzado</tspan> &lt; β)</text>
                    </svg>
                  </div>
                </div>
                <div class="mt-2 pt-1.5 border-t border-slate-100 dark:border-slate-800 text-[10.5px] text-slate-600 dark:text-slate-400">
                  <strong class="text-amber-600 dark:text-amber-400">Comportamiento:</strong> Llave cerrada ($V_{CE} \\approx 0.2\\text{ V}$). La corriente de colector queda acotada únicamente por la carga externa.
                </div>
              </div>

              <!-- REGION 4: ACTIVA INVERSA (ZAI) -->
              <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-purple-500/30 flex flex-col justify-between shadow-2xs">
                <div>
                  <div class="flex items-center justify-between gap-1 mb-1.5">
                    <span class="font-bold text-xs text-purple-600 dark:text-purple-400">4. Activa Inversa (ZAI)</span>
                    <span class="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">Degradada</span>
                  </div>
                  <div class="text-[11px] text-slate-500 dark:text-slate-400 mb-2 space-y-0.5">
                    <div>• Juntura BE: <strong class="text-slate-700 dark:text-slate-200">Inversa</strong> ($V_{BE} \\le 0$)</div>
                    <div>• Juntura BC: <strong class="text-purple-600 dark:text-purple-400">Directa</strong> ($V_{BC} \\approx 0.7\\text{ V}$)</div>
                  </div>
                  <!-- SVG Circuito ZAI -->
                  <div class="py-1">
                    <svg viewBox="0 0 220 155" class="w-full h-auto text-xs font-sans select-none block">
                      <rect x="0" y="0" width="220" height="155" rx="8" fill="#8b5cf6" fill-opacity="0.04" stroke="#8b5cf6" stroke-opacity="0.25" stroke-width="1"/>

                      <!-- Terminal B (Izquierda) -->
                      <line x1="25" y1="65" x2="60" y2="65" stroke="#475569" stroke-width="1.8"/>
                      <circle cx="25" cy="65" r="3.5" fill="#ec4899"/>
                      <text x="18" y="68" text-anchor="end" font-weight="bold" fill="#ec4899" font-size="10">B</text>
                      <text x="42" y="55" text-anchor="middle" font-weight="bold" fill="#ef4444" font-size="8">I<tspan baseline-shift="sub" font-size="70%">B</tspan></text>

                      <!-- Diodo B-C en Directa (hacia arriba a Colector) -->
                      <line x1="60" y1="65" x2="60" y2="40" stroke="#475569" stroke-width="1.6"/>
                      <polygon points="53,40 67,40 60,28" fill="#8b5cf6"/>
                      <line x1="53" y1="28" x2="67" y2="28" stroke="#8b5cf6" stroke-width="1.8"/>
                      <line x1="60" y1="28" x2="60" y2="18" stroke="#475569" stroke-width="1.6"/>
                      <line x1="60" y1="18" x2="155" y2="18" stroke="#475569" stroke-width="1.6"/>
                      <text x="73" y="38" font-weight="bold" fill="#8b5cf6" font-size="7.5">0.7 V</text>

                      <!-- Terminal C (Arriba, emisor invertido) -->
                      <circle cx="155" cy="18" r="3.5" fill="#10b981"/>
                      <text x="165" y="16" font-weight="bold" fill="#10b981" font-size="8.5">C (Inyector)</text>

                      <!-- Fuente de Corriente Controlada Inversa -->
                      <line x1="155" y1="18" x2="155" y2="52" stroke="#475569" stroke-width="1.8"/>
                      <polygon points="155,52 172,68 155,84 138,68" fill="#8b5cf6" fill-opacity="0.18" stroke="#8b5cf6" stroke-width="1.8"/>
                      <!-- Flecha hacia abajo -->
                      <line x1="155" y1="59" x2="155" y2="76" stroke="#8b5cf6" stroke-width="1.8"/>
                      <polygon points="152,74 155,79 158,74" fill="#8b5cf6"/>
                      <text x="132" y="70" text-anchor="end" font-weight="bold" fill="#7c3aed" font-size="8">β<tspan baseline-shift="sub" font-size="70%">R</tspan> · I<tspan baseline-shift="sub" font-size="70%">B</tspan></text>

                      <!-- Terminal E (Abajo, recolector invertido) -->
                      <line x1="155" y1="84" x2="155" y2="138" stroke="#475569" stroke-width="1.8"/>
                      <circle cx="155" cy="138" r="3.5" fill="#3b82f6"/>
                      <text x="165" y="142" font-weight="bold" fill="#3b82f6" font-size="8.5">E (Recolector)</text>

                      <!-- Badge Ganancia Pobre -->
                      <rect x="25" y="110" width="100" height="26" rx="4" fill="#8b5cf6" fill-opacity="0.12" stroke="#8b5cf6" stroke-width="1"/>
                      <text x="75" y="122" text-anchor="middle" font-weight="bold" fill="#6d28d9" font-size="7.5">Ganancia Degradada:</text>
                      <text x="75" y="131" text-anchor="middle" font-bold fill="#6d28d9" font-size="7.5">β<tspan baseline-shift="sub" font-size="70%">R</tspan> ≈ 0.05 ~ 0.5</text>
                    </svg>
                  </div>
                </div>
                <div class="mt-2 pt-1.5 border-t border-slate-100 dark:border-slate-800 text-[10.5px] text-slate-600 dark:text-slate-400">
                  <strong class="text-purple-600 dark:text-purple-400">Comportamiento:</strong> <strong>Sin uso práctico:</strong> los terminales C y E intercambian funciones, pero con pésima ganancia ($\\beta_R \\approx 0.05 \\sim 0.5$) por la asimetría de dopado y área.
                </div>
              </div>
            </div>

            <div class="overflow-x-auto my-3">
              <table class="w-full text-xs text-left border-collapse border border-slate-200 dark:border-slate-800">
                <thead>
                  <tr class="bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 font-mono">
                    <th class="p-2 border border-slate-200 dark:border-slate-800">Región</th>
                    <th class="p-2 border border-slate-200 dark:border-slate-800">Juntura BE</th>
                    <th class="p-2 border border-slate-200 dark:border-slate-800">Juntura BC</th>
                    <th class="p-2 border border-slate-200 dark:border-slate-800">Condición Eléctrica</th>
                    <th class="p-2 border border-slate-200 dark:border-slate-800">Modelo Circuital</th>
                    <th class="p-2 border border-slate-200 dark:border-slate-800">Aplicación Práctica</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
                  <tr class="bg-red-500/5">
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-bold text-red-600 dark:text-red-400">Corte</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">Inversa ($V_{BE} < 0.5\\text{ V}$)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">Inversa ($V_{BC} \\le 0$)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-mono">$I_B = 0, \\; I_C = 0$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">Circuito Abierto (C-E abierto)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">Llave abierta en conmutación digital ('0' lógico).</td>
                  </tr>
                  <tr class="bg-emerald-500/5">
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-bold text-emerald-600 dark:text-emerald-400">Activa Directa (ZAD)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">Directa ($V_{BE} \\approx 0.7\\text{ V}$)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">Inversa ($V_{BC} \\le 0$)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-mono">$I_C = \\beta I_B$, $V_{CE} > 0.2\\text{ V}$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">Fuente de corriente controlada ($I_C = \\beta I_B$)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">Amplificación lineal de audio, RF e instrumentación.</td>
                  </tr>
                  <tr class="bg-amber-500/5">
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-bold text-amber-600 dark:text-amber-400">Saturación</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">Directa ($V_{BE} \\approx 0.7\\text{ V}$)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">Directa ($V_{BC} > 0.4\\text{ V}$)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-mono">$V_{CE} = V_{CE,sat} \\approx 0.2\\text{ V}$, $I_C < \\beta I_B$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">Batería fija $V_{CE,sat} \\approx 0.2\\text{ V}$ (casi cortocircuito)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">Llave cerrada en conmutación ('1' lógico, relés).</td>
                  </tr>
                  <tr class="bg-slate-500/5 opacity-80">
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-bold text-slate-500">Activa Inversa (ZAI)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">Inversa ($V_{BE} \\le 0$)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">Directa ($V_{BC} \\approx 0.7\\text{ V}$)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-mono">$\\beta_R \\ll 1$ (muy baja ganancia)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">Fuente controlada invertida ineficiente</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans"><strong class="text-rose-500 dark:text-rose-400">Sin uso práctico</strong> en circuitos discretos (desaconsejada; $\\beta_R < 1$ por asimetría física de dopado y área). Solo de interés histórico en compuertas TTL integradas.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- 5. ALGORITMO PARA DETERMINAR LA REGIÓN DE OPERACIÓN EN DC -->
            <div class="p-3.5 my-3 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-slate-800 dark:text-slate-200">
              <span class="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block mb-2">
                🎯 Algoritmo para determinar la Región de Operación en DC
              </span>
              <ol class="text-xs space-y-2 list-decimal list-inside text-slate-700 dark:text-slate-300 leading-relaxed">
                <li>
                  <strong>Paso 1 (Hipótesis ZAD):</strong> Suponer que el transistor opera en <em>Zona Activa Directa</em>. Asignar $V_{BE} = 0.7\\text{ V}$ y $I_C = \\beta I_B$.
                </li>
                <li>
                  <strong>Paso 2 (Malla de Entrada B-E):</strong> Escribir la ecuación de la malla de entrada y despejar $I_B$:
                  <br>
                  <span class="font-mono text-purple-600 dark:text-purple-300 pl-4">▸ Si $I_B \\le 0$</span> $\\implies$ <strong>¡Suposición falsa!</strong> El BJT está en <strong>CORTE</strong> ($I_B = 0, \\, I_C = 0, \\, V_{BE} < 0.7\\text{ V}$).
                  <br>
                  <span class="font-mono text-emerald-600 dark:text-emerald-400 pl-4">▸ Si $I_B > 0$</span> $\\implies$ Avanzar al Paso 3.
                </li>
                <li>
                  <strong>Paso 3 (Malla de Salida C-E):</strong> Con $I_C = \\beta I_B$, resolver la malla del colector para hallar $V_{CE}$:
                  <br>
                  <span class="font-mono text-emerald-600 dark:text-emerald-400 pl-4">▸ Si $V_{CE} > V_{CE,sat}$ ($> 0.2\\text{ V}$)</span> $\\implies$ <strong>¡Confirmado ZAD!</strong> El punto $Q(I_C, V_{CE})$ es correcto.
                  <br>
                  <span class="font-mono text-amber-600 dark:text-amber-400 pl-4">▸ Si $V_{CE} \\le V_{CE,sat}$ ($< 0.2\\text{ V}$)</span> $\\implies$ <strong>¡Suposición falsa!</strong> El BJT está en <strong>SATURACIÓN</strong>.
                </li>
                <li>
                  <strong>Paso 4 (Recalcular en Saturación si corresponde):</strong> Fijar $V_{CE} = V_{CE,sat} = 0.2\\text{ V}$. Recalcular la corriente real de colector $I_{C,sat}$ a partir de la malla de salida. Verificar que la ganancia forzada cumpla $\\beta_{forzado} = \\frac{I_{C,sat}}{I_B} < \\beta$.
                </li>
              </ol>
            </div>
          `
        },
        {
          id: 'e1-u3-circuitos-polarizacion',
          titulo: '3.2 Polarización DC de BJT: Topologías Circuitales y Recta de Carga',
          contenido: `
            <!-- 1. INTRODUCCIÓN A LA POLARIZACIÓN DC -->
            <div class="p-3.5 mb-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-slate-800 dark:text-slate-200">
              <span class="text-xs font-mono font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider block mb-1">
                🎯 El Objetivo de la Polarización Continua (DC)
              </span>
              <p class="text-xs leading-relaxed mb-2">
                Polarizar un BJT consiste en establecer un <strong>punto de reposo o trabajo $Q(I_{CQ}, V_{CEQ})$</strong> en el centro de la Zona Activa Directa (ZAD) para que una señal alterna de entrada pueda amplificarse sin distorsión simétrica ni recortes por saturación o corte.
              </p>
              <p class="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                <strong>El desafío térmico:</strong> Los transistores reales sufren grandes variaciones por temperatura y dispersión de fabricación: el parámetro $\\beta$ varía entre $50$ y $300$ para un mismo modelo, $V_{BE}$ disminuye aproximadamente $-2\\text{ mV}/^{\\circ}\\text{C}$, y la corriente de fuga $I_{CO}$ se duplica cada $10^{\\circ}\\text{C}$. Un buen circuito de polarización debe ser <em>inmune a estas variaciones</em>.
              </p>
            </div>

            <!-- 2. DIAGRAMA SVG COMPARATIVO DE TOPOLOGÍAS BÁSICAS -->
            <div class="my-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span class="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-2 text-center">
                🔌 Topologías Clásicas de Polarización de Base y Colector
              </span>
              <div class="flex justify-center overflow-x-auto">
                <svg viewBox="0 0 740 250" class="w-full max-w-[740px] text-xs font-sans select-none" style="min-width: 600px;">
                  <!-- ================= (a) POLARIZACIÓN FIJA ================= -->
                  <g transform="translate(10, 0)">
                    <text x="110" y="16" text-anchor="middle" font-weight="bold" fill="#ef4444" font-size="11.5">(a) Polarización Fija</text>
                    
                    <!-- Terminal +VBB (Base) -->
                    <circle cx="55" cy="36" r="2.5" fill="#3b82f6"/>
                    <text x="55" y="27" text-anchor="middle" font-weight="bold" fill="#3b82f6" font-size="9.5">+<tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">BB</tspan></text>

                    <!-- Rama Base RB (IEEE zig-zag) -->
                    <line x1="55" y1="36" x2="55" y2="46" stroke="#475569" stroke-width="1.5"/>
                    <path d="M 55 46 L 55 48.5 L 50 52 L 60 56 L 50 60 L 60 64 L 50 68 L 60 72 L 55 75.5 L 55 78" fill="none" stroke="#3b82f6" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
                    <text x="44" y="65" text-anchor="end" font-weight="bold" fill="#3b82f6" font-size="10"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">B</tspan></text>
                    <line x1="55" y1="78" x2="55" y2="110" stroke="#475569" stroke-width="1.5"/>
                    <line x1="55" y1="110" x2="132" y2="110" stroke="#475569" stroke-width="1.5"/>
                    <!-- Flecha corriente IB -->
                    <polygon points="96,107 104,110 96,113" fill="#3b82f6"/>
                    <text x="100" y="103" text-anchor="middle" font-weight="bold" fill="#3b82f6" font-size="8.5"><tspan font-style="italic">I</tspan><tspan font-size="75%" dy="1.5">B</tspan></text>

                    <!-- Terminal +VCC (Colector) -->
                    <circle cx="150" cy="36" r="2.5" fill="#ef4444"/>
                    <text x="150" y="27" text-anchor="middle" font-weight="bold" fill="#ef4444" font-size="9.5">+<tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">CC</tspan></text>

                    <!-- Rama Colector RC (IEEE zig-zag) -->
                    <line x1="150" y1="36" x2="150" y2="46" stroke="#475569" stroke-width="1.5"/>
                    <path d="M 150 46 L 150 48.5 L 145 52 L 155 56 L 145 60 L 155 64 L 145 68 L 155 72 L 150 75.5 L 150 78" fill="none" stroke="#10b981" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
                    <text x="162" y="65" text-anchor="start" font-weight="bold" fill="#10b981" font-size="10"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">C</tspan></text>
                    <line x1="150" y1="78" x2="150" y2="93" stroke="#475569" stroke-width="1.5"/>
                    <!-- Flecha corriente IC -->
                    <polygon points="147,82 150,88 153,82" fill="#10b981"/>
                    <text x="160" y="86" text-anchor="start" font-weight="bold" fill="#10b981" font-size="8.5"><tspan font-style="italic">I</tspan><tspan font-size="75%" dy="1.5">C</tspan></text>

                    <!-- Transistor NPN (Símbolo IEEE 315) -->
                    <line x1="132" y1="96" x2="132" y2="124" stroke="#334155" stroke-width="2.8" stroke-linecap="round"/>
                    <line x1="132" y1="103" x2="150" y2="93" stroke="#475569" stroke-width="1.8"/>
                    <line x1="132" y1="117" x2="150" y2="127" stroke="#475569" stroke-width="1.8"/>
                    <polygon points="149,126 139,122 143,116" fill="#ef4444"/>

                    <!-- Emisor a tierra directa (IEEE ground) -->
                    <line x1="150" y1="127" x2="150" y2="160" stroke="#475569" stroke-width="1.5"/>
                    <line x1="140" y1="160" x2="160" y2="160" stroke="#475569" stroke-width="2"/>
                    <line x1="144" y1="164" x2="156" y2="164" stroke="#475569" stroke-width="1.5"/>
                    <line x1="148" y1="168" x2="152" y2="168" stroke="#475569" stroke-width="1"/>

                    <!-- Ecuaciones y advertencia -->
                    <rect x="15" y="174" width="195" height="66" rx="6" fill="#ef4444" fill-opacity="0.08" stroke="#ef4444" stroke-opacity="0.3"/>
                    <text x="112" y="190" text-anchor="middle" font-weight="bold" fill="#ef4444" font-size="9.5"><tspan font-style="italic">I</tspan><tspan font-size="75%" dy="2">B</tspan><tspan font-size="100%" dy="-2"> = (</tspan><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">BB</tspan><tspan font-size="100%" dy="-2"> − 0.7) / </tspan><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">B</tspan></text>
                    <text x="112" y="205" text-anchor="middle" fill="#475569" font-size="9"><tspan font-style="italic">I</tspan><tspan font-size="75%" dy="2">C</tspan><tspan font-size="100%" dy="-2"> = β · </tspan><tspan font-style="italic">I</tspan><tspan font-size="75%" dy="2">B</tspan><tspan font-size="100%" dy="-2"> | </tspan><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">CE</tspan><tspan font-size="100%" dy="-2"> = </tspan><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">CC</tspan><tspan font-size="100%" dy="-2"> − </tspan><tspan font-style="italic">I</tspan><tspan font-size="75%" dy="2">C</tspan><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">C</tspan></text>
                    <text x="112" y="223" text-anchor="middle" font-weight="bold" fill="#dc2626" font-size="8.5">⚠️ Inestable: Δβ mueve Q a saturación</text>
                  </g>

                  <!-- Divisor vertical -->
                  <line x1="235" y1="15" x2="235" y2="242" stroke="#cbd5e1" stroke-dasharray="3 3"/>

                  <!-- ================= (b) REALIMENTACIÓN DE COLECTOR ================= -->
                  <g transform="translate(245, 0)">
                    <text x="115" y="16" text-anchor="middle" font-weight="bold" fill="#3b82f6" font-size="11.5">(b) Feedback de Colector</text>

                    <!-- Terminal +VCC -->
                    <circle cx="150" cy="36" r="2.5" fill="#3b82f6"/>
                    <text x="150" y="27" text-anchor="middle" font-weight="bold" fill="#3b82f6" font-size="9.5">+<tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">CC</tspan></text>
                    <line x1="150" y1="36" x2="150" y2="46" stroke="#475569" stroke-width="1.5"/>

                    <!-- RC (IEEE zig-zag) -->
                    <path d="M 150 46 L 150 48.5 L 145 52 L 155 56 L 145 60 L 155 64 L 145 68 L 155 72 L 150 75.5 L 150 78" fill="none" stroke="#10b981" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
                    <text x="162" y="65" text-anchor="start" font-weight="bold" fill="#10b981" font-size="10"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">C</tspan></text>
                    <line x1="150" y1="78" x2="150" y2="93" stroke="#475569" stroke-width="1.5"/>
                    <circle cx="150" cy="82" r="2.8" fill="#3b82f6"/>
                    <text x="162" y="85" text-anchor="start" font-weight="bold" fill="#3b82f6" font-size="8.5"><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="1.5">C</tspan></text>

                    <!-- Feedback de Colector a Base (RB horizontal IEEE) -->
                    <line x1="150" y1="82" x2="130" y2="82" stroke="#475569" stroke-width="1.5"/>
                    <path d="M 130 82 L 127 82 L 123 77 L 118 87 L 113 77 L 108 87 L 103 77 L 98 87 L 94 82 L 90 82" fill="none" stroke="#3b82f6" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
                    <text x="110.5" y="73" text-anchor="middle" font-weight="bold" fill="#3b82f6" font-size="10"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">B</tspan></text>
                    <line x1="90" y1="82" x2="55" y2="82" stroke="#475569" stroke-width="1.5"/>
                    <line x1="55" y1="82" x2="55" y2="110" stroke="#475569" stroke-width="1.5"/>
                    <line x1="55" y1="110" x2="132" y2="110" stroke="#475569" stroke-width="1.5"/>
                    <!-- Flecha corriente IB -->
                    <polygon points="96,107 104,110 96,113" fill="#3b82f6"/>
                    <text x="100" y="103" text-anchor="middle" font-weight="bold" fill="#3b82f6" font-size="8.5"><tspan font-style="italic">I</tspan><tspan font-size="75%" dy="1.5">B</tspan></text>

                    <!-- Transistor NPN (Símbolo IEEE 315) -->
                    <line x1="132" y1="96" x2="132" y2="124" stroke="#334155" stroke-width="2.8" stroke-linecap="round"/>
                    <line x1="132" y1="103" x2="150" y2="93" stroke="#475569" stroke-width="1.8"/>
                    <line x1="132" y1="117" x2="150" y2="127" stroke="#475569" stroke-width="1.8"/>
                    <polygon points="149,126 139,122 143,116" fill="#ef4444"/>

                    <!-- Emisor RE (IEEE zig-zag) y tierra -->
                    <line x1="150" y1="127" x2="150" y2="134" stroke="#475569" stroke-width="1.5"/>
                    <path d="M 150 134 L 150 136 L 145 139.5 L 155 143.5 L 145 147.5 L 155 151.5 L 150 154 L 150 156" fill="none" stroke="#a855f7" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
                    <text x="162" y="147" text-anchor="start" font-weight="bold" fill="#a855f7" font-size="9.5"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">E</tspan></text>
                    <line x1="150" y1="156" x2="150" y2="160" stroke="#475569" stroke-width="1.5"/>
                    <line x1="140" y1="160" x2="160" y2="160" stroke="#475569" stroke-width="2"/>
                    <line x1="144" y1="164" x2="156" y2="164" stroke="#475569" stroke-width="1.5"/>
                    <line x1="148" y1="168" x2="152" y2="168" stroke="#475569" stroke-width="1"/>

                    <!-- Ecuaciones y badge -->
                    <rect x="15" y="174" width="200" height="66" rx="6" fill="#3b82f6" fill-opacity="0.08" stroke="#3b82f6" stroke-opacity="0.3"/>
                    <text x="115" y="191" text-anchor="middle" font-weight="bold" fill="#2563eb" font-size="9"><tspan font-style="italic">I</tspan><tspan font-size="75%" dy="2">B</tspan><tspan font-size="100%" dy="-2"> = (</tspan><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">C</tspan><tspan font-size="100%" dy="-2"> − 0.7) / </tspan><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">B</tspan></text>
                    <text x="115" y="206" text-anchor="middle" fill="#475569" font-size="8.5">Si <tspan font-style="italic">I</tspan><tspan font-size="75%" dy="1.5">C</tspan><tspan font-size="100%" dy="-1.5"> ↑ ⇒ </tspan><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="1.5">C</tspan><tspan font-size="100%" dy="-1.5"> ↓ ⇒ </tspan><tspan font-style="italic">I</tspan><tspan font-size="75%" dy="1.5">B</tspan><tspan font-size="100%" dy="-1.5"> ↓ ⇒ </tspan><tspan font-style="italic">I</tspan><tspan font-size="75%" dy="1.5">C</tspan><tspan font-size="100%" dy="-1.5"> ↓</tspan></text>
                    <text x="115" y="224" text-anchor="middle" font-weight="bold" fill="#1d4ed8" font-size="8.5">🛡️ Realimentación Negativa de Tensión</text>
                  </g>

                  <!-- Divisor vertical -->
                  <line x1="480" y1="15" x2="480" y2="242" stroke="#cbd5e1" stroke-dasharray="3 3"/>

                  <!-- ================= (c) DIVISOR RESISTIVO UNIVERSAL ================= -->
                  <g transform="translate(490, 0)">
                    <text x="115" y="16" text-anchor="middle" font-weight="bold" fill="#10b981" font-size="11.5">(c) Divisor Universal (Thévenin)</text>

                    <!-- VCC rail -->
                    <line x1="55" y1="36" x2="150" y2="36" stroke="#475569" stroke-width="1.6"/>
                    <circle cx="102.5" cy="36" r="2.5" fill="#10b981"/>
                    <text x="102.5" y="27" text-anchor="middle" font-weight="bold" fill="#10b981" font-size="9.5">+<tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">CC</tspan></text>

                    <!-- Divisor R1 (IEEE zig-zag) -->
                    <line x1="55" y1="36" x2="55" y2="46" stroke="#475569" stroke-width="1.5"/>
                    <path d="M 55 46 L 55 48.5 L 50 52 L 60 56 L 50 60 L 60 64 L 50 68 L 60 72 L 55 75.5 L 55 78" fill="none" stroke="#10b981" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
                    <text x="44" y="65" text-anchor="end" font-weight="bold" fill="#10b981" font-size="10"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">1</tspan></text>
                    <line x1="55" y1="78" x2="55" y2="110" stroke="#475569" stroke-width="1.5"/>
                    <circle cx="55" cy="110" r="2.8" fill="#10b981"/>
                    <text x="44" y="106" text-anchor="end" font-weight="bold" fill="#10b981" font-size="8.5"><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="1.5">B</tspan></text>

                    <!-- Divisor R2 (IEEE zig-zag) -->
                    <line x1="55" y1="110" x2="55" y2="120" stroke="#475569" stroke-width="1.5"/>
                    <path d="M 55 120 L 55 122.5 L 50 126 L 60 130 L 50 134 L 60 138 L 50 142 L 60 146 L 55 149.5 L 55 152" fill="none" stroke="#10b981" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
                    <text x="44" y="139" text-anchor="end" font-weight="bold" fill="#10b981" font-size="10"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">2</tspan></text>
                    <line x1="55" y1="152" x2="55" y2="160" stroke="#475569" stroke-width="1.5"/>
                    <line x1="45" y1="160" x2="65" y2="160" stroke="#475569" stroke-width="2"/>
                    <line x1="49" y1="164" x2="61" y2="164" stroke="#475569" stroke-width="1.5"/>
                    <line x1="53" y1="168" x2="57" y2="168" stroke="#475569" stroke-width="1"/>

                    <!-- Conexión a Base -->
                    <line x1="55" y1="110" x2="132" y2="110" stroke="#475569" stroke-width="1.5"/>
                    <polygon points="96,107 104,110 96,113" fill="#10b981"/>

                    <!-- Rama RC (IEEE zig-zag) -->
                    <line x1="150" y1="36" x2="150" y2="46" stroke="#475569" stroke-width="1.5"/>
                    <path d="M 150 46 L 150 48.5 L 145 52 L 155 56 L 145 60 L 155 64 L 145 68 L 155 72 L 150 75.5 L 150 78" fill="none" stroke="#10b981" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
                    <text x="162" y="65" text-anchor="start" font-weight="bold" fill="#10b981" font-size="10"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">C</tspan></text>
                    <line x1="150" y1="78" x2="150" y2="93" stroke="#475569" stroke-width="1.5"/>

                    <!-- Transistor NPN (Símbolo IEEE 315) -->
                    <line x1="132" y1="96" x2="132" y2="124" stroke="#334155" stroke-width="2.8" stroke-linecap="round"/>
                    <line x1="132" y1="103" x2="150" y2="93" stroke="#475569" stroke-width="1.8"/>
                    <line x1="132" y1="117" x2="150" y2="127" stroke="#475569" stroke-width="1.8"/>
                    <polygon points="149,126 139,122 143,116" fill="#ef4444"/>

                    <!-- Rama RE (IEEE zig-zag) y GND -->
                    <line x1="150" y1="127" x2="150" y2="134" stroke="#475569" stroke-width="1.5"/>
                    <path d="M 150 134 L 150 136 L 145 139.5 L 155 143.5 L 145 147.5 L 155 151.5 L 150 154 L 150 156" fill="none" stroke="#a855f7" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
                    <text x="162" y="147" text-anchor="start" font-weight="bold" fill="#a855f7" font-size="9.5"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">E</tspan></text>
                    <line x1="150" y1="156" x2="150" y2="160" stroke="#475569" stroke-width="1.5"/>
                    <line x1="140" y1="160" x2="160" y2="160" stroke="#475569" stroke-width="2"/>
                    <line x1="144" y1="164" x2="156" y2="164" stroke="#475569" stroke-width="1.5"/>
                    <line x1="148" y1="168" x2="152" y2="168" stroke="#475569" stroke-width="1"/>

                    <!-- Ecuaciones y badge -->
                    <rect x="15" y="174" width="200" height="66" rx="6" fill="#10b981" fill-opacity="0.08" stroke="#10b981" stroke-opacity="0.3"/>
                    <text x="115" y="191" text-anchor="middle" font-weight="bold" fill="#059669" font-size="9"><tspan font-style="italic">I</tspan><tspan font-size="75%" dy="2">CQ</tspan><tspan font-size="100%" dy="-2"> ≈ (</tspan><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">BB</tspan><tspan font-size="100%" dy="-2"> − 0.7) / </tspan><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">E</tspan></text>
                    <text x="115" y="206" text-anchor="middle" fill="#475569" font-size="8.5">Si <tspan font-style="italic">R</tspan><tspan font-size="75%" dy="1.5">B</tspan><tspan font-size="100%" dy="-1.5"> ≤ 0.1·(1+β)</tspan><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="1.5">E</tspan></text>
                    <text x="115" y="224" text-anchor="middle" font-weight="bold" fill="#047857" font-size="8.5">⭐ Inmune a β (Estándar de Diseño)</text>
                  </g>
                </svg>
              </div>
            </div>

            <!-- EXPLICACIÓN COMPARATIVA DE LAS 3 TOPOLOGÍAS -->
            <div class="my-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div class="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2.5">
                <span class="text-base">⚖️</span>
                <h5 class="text-sm font-bold text-slate-900 dark:text-white">
                  Comparativa Crítica: Estabilidad del Punto $Q$ frente a Dispersión de $\\beta$ y Temperatura
                </h5>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs">
                <!-- 1. Polarización Fija -->
                <div class="p-3.5 rounded-xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 flex flex-col justify-between">
                  <div>
                    <div class="flex items-center justify-between gap-1 mb-2">
                      <span class="font-bold text-rose-700 dark:text-rose-400 text-xs">1. Polarización Fija (Fuentes $V_{BB}$ y $V_{CC}$)</span>
                      <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-100 dark:bg-rose-900/60 text-rose-700 dark:text-rose-300">❌ Inestable</span>
                    </div>
                    <p class="text-slate-600 dark:text-slate-400 mb-2 leading-relaxed">
                      <strong>¿Por qué es inestable?</strong> Se alimenta la base mediante una fuente fija $V_{BB}$ a través de $R_B$ y el colector con $V_{CC}$. La corriente de base queda rígidamente fijada sin importar qué ocurra en el transistor:
                    </p>
                    <div class="p-1.5 rounded bg-white/80 dark:bg-slate-900/80 border border-rose-100 dark:border-rose-900/30 text-center font-mono my-1.5">
                      $$I_B = \\frac{V_{BB} - V_{BE}}{R_B} = \\text{cte}$$
                    </div>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Al no haber resistencia en emisor ni realimentación, $I_C$ depende directamente del factor $\\beta$:
                    </p>
                    <div class="p-1.5 rounded bg-white/80 dark:bg-slate-900/80 border border-rose-100 dark:border-rose-900/30 text-center font-mono my-1.5">
                      $$I_C = \\beta \\cdot I_B \\implies \\frac{\\Delta I_C}{I_C} = \\frac{\\Delta \\beta}{\\beta}$$
                    </div>
                  </div>
                  <div class="mt-2.5 p-2 rounded-lg bg-rose-100/70 dark:bg-rose-900/40 text-[11px] text-rose-900 dark:text-rose-200">
                    <strong>Consecuencia:</strong> La dispersión de $\\beta$ entre transistores (ej. 100 a 300, $+200\\%$) o el aumento térmico ($\\approx +0.5\\%/^{\\circ}\\text{C}$) multiplican $I_C$, colapsando $V_{CE} = V_{CC} - I_C R_C$ hasta la <strong>saturación</strong>. <em>(Nota: Si se alimenta todo con una única fuente compartida, $V_{BB} = V_{CC}$).</em>
                  </div>
                </div>

                <!-- 2. Realimentación de Colector -->
                <div class="p-3.5 rounded-xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40 flex flex-col justify-between">
                  <div>
                    <div class="flex items-center justify-between gap-1 mb-2">
                      <span class="font-bold text-blue-700 dark:text-blue-400 text-xs">2. Feedback de Colector</span>
                      <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300">🛡️ Auto-estabilizante</span>
                    </div>
                    <p class="text-slate-600 dark:text-slate-400 mb-2 leading-relaxed">
                      <strong>¿Cómo mejora con feedback?</strong> La resistencia $R_B$ se conecta al <em>colector</em> ($V_C$) en lugar de $V_{CC}$, cerrando un lazo de <strong>realimentación negativa de tensión</strong>:
                    </p>
                    <div class="p-1.5 rounded bg-white/80 dark:bg-slate-900/80 border border-blue-100 dark:border-blue-900/30 text-center font-mono my-1.5">
                      $$I_B = \\frac{V_C - V_{BE}}{R_B} = \\frac{V_{CC} - (I_C + I_B) R_C - V_{BE}}{R_B}$$
                    </div>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Si $\\beta$ o la temperatura intentan subir $I_C$, la caída en $R_C$ hace caer $V_C$, estrangulando la corriente inyectada a la base:
                    </p>
                    <div class="p-1.5 rounded bg-blue-100/50 dark:bg-blue-900/30 text-center font-bold text-blue-800 dark:text-blue-300 my-1.5 text-[11px]">
                      $\\beta \\uparrow \\;\\implies\\; I_C \\uparrow \\;\\implies\\; V_C \\downarrow \\;\\implies\\; I_B \\downarrow \\;\\implies\\; I_C \\downarrow$
                    </div>
                  </div>
                  <div class="mt-2.5 p-2 rounded-lg bg-blue-100/70 dark:bg-blue-900/40 text-[11px] text-blue-900 dark:text-blue-200">
                    <strong>Balance:</strong> El circuito se autorregula dinámicamente frente a perturbaciones térmicas y dispersión de $\\beta$. Sin embargo, la realimentación también actúa en señal alterna (CA), reduciendo la ganancia $A_v$ a menos que se use desacoplo.
                  </div>
                </div>

                <!-- 3. Divisor Universal con RE -->
                <div class="p-3.5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 flex flex-col justify-between">
                  <div>
                    <div class="flex items-center justify-between gap-1 mb-2">
                      <span class="font-bold text-emerald-700 dark:text-emerald-400 text-xs">3. Divisor Universal con $R_E$</span>
                      <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300">⭐ Estándar de Oro</span>
                    </div>
                    <p class="text-slate-600 dark:text-slate-400 mb-2 leading-relaxed">
                      <strong>¿Por qué es la más utilizada?</strong> El divisor $R_1 - R_2$ fija un potencial de base constante ($V_B \\approx V_{CC}\\frac{R_2}{R_1+R_2}$), mientras que $R_E$ absorbe las variaciones térmicas:
                    </p>
                    <div class="p-1.5 rounded bg-white/80 dark:bg-slate-900/80 border border-emerald-100 dark:border-emerald-900/30 text-center font-mono my-1.5">
                      $$I_{CQ} = \\frac{V_{BB} - V_{BE}}{\\frac{R_{TH}}{\\beta+1} + R_E} \\xrightarrow{R_{TH} \\ll \\beta R_E} \\mathbf{\\frac{V_{BB} - V_{BE}}{R_E}}$$
                    </div>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Al cumplirse el criterio de divisor rígido ($R_{TH} \\le 0.1\\beta R_E$), el término dependiente de $\\beta$ se vuelve <strong>despreciable</strong> frente a $R_E$.
                    </p>
                  </div>
                  <div class="mt-2.5 p-2 rounded-lg bg-emerald-100/70 dark:bg-emerald-900/40 text-[11px] text-emerald-900 dark:text-emerald-200">
                    <strong>Ventajas definitivas:</strong> El punto $Q$ depende únicamente de componentes pasivos estables ($R_1, R_2, R_E$). Permite intercambiar cualquier BJT en fabricación en masa sin desajustes y desacoplar $R_E$ con un capacitor $C_E$ para máxima ganancia en CA.
                  </div>
                </div>
              </div>
            </div>

            <!-- 3. ANÁLISIS DETALLADO DEL DIVISOR UNIVERSAL Y TEOREMA DE THÉVENIN -->
            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Resolución Analítica: Teorema de Thévenin en la Base</h5>
            <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div class="flex justify-center overflow-x-auto">
                <svg viewBox="0 0 740 215" class="w-full max-w-[740px] text-xs font-sans select-none" style="min-width: 600px;">
                  <!-- ================= LADO IZQUIERDO: DIVISOR ORIGINAL ================= -->
                  <g transform="translate(15, 0)">
                    <text x="105" y="18" text-anchor="middle" font-weight="bold" fill="#64748b" font-size="11">Circuito Original con Divisor</text>
                    
                    <!-- Terminal +VCC -->
                    <circle cx="70" cy="38" r="2.5" fill="#ef4444"/>
                    <text x="70" y="29" text-anchor="middle" font-weight="bold" fill="#ef4444" font-size="9.5">+<tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">CC</tspan></text>
                    <line x1="70" y1="38" x2="70" y2="48" stroke="#475569" stroke-width="1.5"/>

                    <!-- R1 (IEEE zig-zag) -->
                    <path d="M 70 48 L 70 50.5 L 65 54 L 75 58 L 65 62 L 75 66 L 65 70 L 75 74 L 70 77.5 L 70 80" fill="none" stroke="#10b981" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
                    <text x="58" y="66" text-anchor="end" font-weight="bold" fill="#10b981" font-size="10"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">1</tspan></text>
                    <line x1="70" y1="80" x2="70" y2="110" stroke="#475569" stroke-width="1.5"/>

                    <!-- Nodo a Base -->
                    <circle cx="70" cy="110" r="3" fill="#6366f1"/>
                    <line x1="70" y1="110" x2="138" y2="110" stroke="#6366f1" stroke-width="1.8"/>
                    <polygon points="144,110 136,106 136,114" fill="#6366f1"/>
                    <text x="148" y="113.5" text-anchor="start" font-weight="bold" fill="#6366f1" font-size="9.5">a Base (B)</text>

                    <!-- R2 (IEEE zig-zag) -->
                    <line x1="70" y1="110" x2="70" y2="122" stroke="#475569" stroke-width="1.5"/>
                    <path d="M 70 122 L 70 124.5 L 65 128 L 75 132 L 65 136 L 75 140 L 65 144 L 75 148 L 70 151.5 L 70 154" fill="none" stroke="#10b981" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
                    <text x="58" y="140" text-anchor="end" font-weight="bold" fill="#10b981" font-size="10"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">2</tspan></text>
                    <line x1="70" y1="154" x2="70" y2="170" stroke="#475569" stroke-width="1.5"/>

                    <!-- GND (IEEE Std 315) -->
                    <line x1="60" y1="170" x2="80" y2="170" stroke="#475569" stroke-width="2"/>
                    <line x1="64" y1="174" x2="76" y2="174" stroke="#475569" stroke-width="1.5"/>
                    <line x1="68" y1="178" x2="72" y2="178" stroke="#475569" stroke-width="1"/>
                  </g>

                  <!-- ================= CENTRO: TEOREMA DE THÉVENIN ================= -->
                  <g transform="translate(235, 0)">
                    <rect x="0" y="34" width="220" height="146" rx="8" fill="#6366f1" fill-opacity="0.08" stroke="#6366f1" stroke-opacity="0.35" stroke-width="1.4"/>
                    <text x="110" y="56" text-anchor="middle" font-weight="bold" fill="#4f46e5" font-size="11">Teorema de Thévenin</text>
                    <line x1="30" y1="64" x2="190" y2="64" stroke="#6366f1" stroke-opacity="0.25" stroke-width="1"/>
                    
                    <!-- VBB / VTH -->
                    <text x="110" y="85" text-anchor="middle" font-weight="bold" fill="#1e293b" class="dark:fill-slate-100" font-size="9.5"><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">BB</tspan><tspan font-size="100%" dy="-2"> = </tspan><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">CC</tspan><tspan font-size="100%" dy="-2"> · </tspan><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">2</tspan><tspan font-size="100%" dy="-2"> / (</tspan><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">1</tspan><tspan font-size="100%" dy="-2"> + </tspan><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">2</tspan><tspan font-size="100%" dy="-2">)</tspan></text>
                    
                    <!-- RB / RTH -->
                    <text x="110" y="112" text-anchor="middle" font-weight="bold" fill="#1e293b" class="dark:fill-slate-100" font-size="9.5"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">B</tspan><tspan font-size="100%" dy="-2"> = </tspan><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">1</tspan><tspan font-size="100%" dy="-2"> ∥ </tspan><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">2</tspan><tspan font-size="100%" dy="-2"> = (</tspan><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">1</tspan><tspan font-size="100%" dy="-2"> · </tspan><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">2</tspan><tspan font-size="100%" dy="-2">) / (</tspan><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">1</tspan><tspan font-size="100%" dy="-2"> + </tspan><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">2</tspan><tspan font-size="100%" dy="-2">)</tspan></text>
                    
                    <text x="110" y="137" text-anchor="middle" fill="#64748b" font-size="8.5">Visto desde el terminal de Base a masa</text>
                    
                    <rect x="25" y="150" width="170" height="20" rx="4" fill="#6366f1" fill-opacity="0.15"/>
                    <text x="110" y="163.5" text-anchor="middle" font-weight="bold" fill="#4338ca" class="dark:fill-indigo-300" font-size="8.5">Circuito Equivalente Monomalla ➔</text>
                  </g>

                  <!-- ================= LADO DERECHO: CIRCUITO EQUIVALENTE THÉVENIN ================= -->
                  <g transform="translate(480, 0)">
                    <text x="125" y="18" text-anchor="middle" font-weight="bold" fill="#10b981" font-size="11">Circuito Equivalente Thévenin</text>
                    
                    <!-- Terminal +VCC -->
                    <circle cx="185" cy="38" r="2.5" fill="#ef4444"/>
                    <text x="185" y="29" text-anchor="middle" font-weight="bold" fill="#ef4444" font-size="9.5">+<tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">CC</tspan></text>
                    <line x1="185" y1="38" x2="185" y2="48" stroke="#475569" stroke-width="1.5"/>

                    <!-- RC (IEEE zig-zag) -->
                    <path d="M 185 48 L 185 50.5 L 180 54 L 190 58 L 180 62 L 190 66 L 180 70 L 190 74 L 185 77.5 L 185 80" fill="none" stroke="#10b981" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
                    <text x="197" y="66" text-anchor="start" font-weight="bold" fill="#10b981" font-size="10"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">C</tspan></text>
                    <line x1="185" y1="80" x2="185" y2="93" stroke="#475569" stroke-width="1.5"/>
                    <!-- Flecha corriente IC -->
                    <polygon points="182,83 185,89 188,83" fill="#10b981"/>
                    <text x="195" y="87" text-anchor="start" font-weight="bold" fill="#10b981" font-size="8.5"><tspan font-style="italic">I</tspan><tspan font-size="75%" dy="1.5">C</tspan></text>

                    <!-- Transistor NPN (Símbolo IEEE 315) -->
                    <line x1="167" y1="96" x2="167" y2="124" stroke="#334155" stroke-width="2.8" stroke-linecap="round"/>
                    <line x1="167" y1="103" x2="185" y2="93" stroke="#475569" stroke-width="1.8"/>
                    <line x1="167" y1="117" x2="185" y2="127" stroke="#475569" stroke-width="1.8"/>
                    <polygon points="184,126 174,122 178,116" fill="#ef4444"/>

                    <!-- RE (IEEE zig-zag) y GND -->
                    <line x1="185" y1="127" x2="185" y2="134" stroke="#475569" stroke-width="1.5"/>
                    <path d="M 185 134 L 185 136 L 180 139.5 L 190 143.5 L 180 147.5 L 190 151.5 L 185 154 L 185 156" fill="none" stroke="#a855f7" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
                    <text x="197" y="147" text-anchor="start" font-weight="bold" fill="#a855f7" font-size="9.5"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">E</tspan></text>
                    <line x1="185" y1="156" x2="185" y2="170" stroke="#475569" stroke-width="1.5"/>
                    <line x1="175" y1="170" x2="195" y2="170" stroke="#475569" stroke-width="2"/>
                    <line x1="179" y1="174" x2="191" y2="174" stroke="#475569" stroke-width="1.5"/>
                    <line x1="183" y1="178" x2="187" y2="178" stroke="#475569" stroke-width="1"/>

                    <!-- Malla de Base Thévenin -->
                    <!-- Fuente VBB (IEEE independent voltage source) -->
                    <circle cx="50" cy="110" r="13" fill="#6366f1" fill-opacity="0.12" stroke="#6366f1" stroke-width="1.8"/>
                    <text x="56" y="113" text-anchor="middle" font-weight="bold" fill="#6366f1" font-size="9">+</text>
                    <text x="44" y="113" text-anchor="middle" font-weight="bold" fill="#6366f1" font-size="9">−</text>
                    <text x="50" y="91" text-anchor="middle" font-weight="bold" fill="#6366f1" font-size="9.5"><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">BB</tspan></text>
                    <line x1="50" y1="123" x2="50" y2="170" stroke="#475569" stroke-width="1.5"/>
                    <line x1="40" y1="170" x2="60" y2="170" stroke="#475569" stroke-width="2"/>
                    <line x1="44" y1="174" x2="56" y2="174" stroke="#475569" stroke-width="1.5"/>
                    <line x1="48" y1="178" x2="52" y2="178" stroke="#475569" stroke-width="1"/>

                    <!-- RB horizontal (IEEE zig-zag) -->
                    <line x1="50" y1="110" x2="95" y2="110" stroke="#475569" stroke-width="1.5"/>
                    <path d="M 95 110 L 98 110 L 102 105 L 107 115 L 112 105 L 117 115 L 122 105 L 127 115 L 131 110 L 135 110" fill="none" stroke="#6366f1" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
                    <text x="115" y="99" text-anchor="middle" font-weight="bold" fill="#6366f1" font-size="10"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">B</tspan></text>
                    <line x1="135" y1="110" x2="167" y2="110" stroke="#475569" stroke-width="1.5"/>
                    <!-- Flecha corriente IB -->
                    <polygon points="152,107 160,110 152,113" fill="#6366f1"/>
                    <text x="156" y="103" text-anchor="middle" font-weight="bold" fill="#6366f1" font-size="8.5"><tspan font-style="italic">I</tspan><tspan font-size="75%" dy="1.5">B</tspan></text>
                  </g>
                </svg>
              </div>
            </div>

            <!-- Ecuaciones de resolución -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3 text-xs">
              <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <strong class="text-indigo-600 dark:text-indigo-400 block mb-1">Malla de Entrada (B-E):</strong>
                $$V_{BB} = I_B R_B + V_{BE} + I_E R_E$$
                $$V_{BB} = I_B [R_B + (1+\\beta)R_E] + V_{BE}$$
                $$\\mathbf{I_B = \\frac{V_{BB} - V_{BE}}{R_B + (1+\\beta)R_E}}$$
              </div>
              <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <strong class="text-emerald-600 dark:text-emerald-400 block mb-1">Malla de Salida (C-E):</strong>
                $$V_{CC} = I_C R_C + V_{CE} + I_E R_E$$
                $$V_{CEQ} = V_{CC} - I_{CQ}\\left( R_C + \\frac{1+\\beta}{\\beta} R_E \\right)$$
                $$\\mathbf{V_{CEQ} \\approx V_{CC} - I_{CQ}(R_C + R_E)}$$
              </div>
            </div>

            <!-- Criterio de Diseño para Inmunidad Térmica y a beta -->
            <div class="my-4 p-4 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-purple-50/50 to-pink-50/30 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/10 border border-indigo-200 dark:border-indigo-800/60 shadow-sm text-xs text-slate-700 dark:text-slate-300 space-y-3.5">
              
              <div class="flex items-center gap-2 border-b border-indigo-200 dark:border-indigo-800/60 pb-2">
                <span class="text-base">⭐</span>
                <h5 class="text-sm font-bold text-indigo-950 dark:text-indigo-200">
                  Criterio de Diseño: Inmunidad frente a Dispersión de $\\beta$ y Deriva Térmica
                </h5>
              </div>

              <!-- 1. El problema físico -->
              <p>
                En la práctica, un circuito de polarización debe resolver dos problemas críticos inherentes al transistor BJT:
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                <div class="p-2.5 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                  <div class="font-bold text-slate-800 dark:text-slate-200 mb-1 flex items-center gap-1.5">
                    <span class="w-2 h-2 rounded-full bg-amber-500 inline-block"></span>
                    1. Dispersión de Fabricación de $\\beta$
                  </div>
                  <p class="text-slate-600 dark:text-slate-400">
                    Transistores con la misma referencia comercial (ej. <em>2N2222</em>) presentan valores de $\\beta$ que oscilan entre <strong>100 y 300</strong> (hasta un 200% de tolerancia). El punto $Q$ no puede depender de qué transistor aleatorio se monte en la placa.
                  </p>
                </div>
                <div class="p-2.5 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                  <div class="font-bold text-slate-800 dark:text-slate-200 mb-1 flex items-center gap-1.5">
                    <span class="w-2 h-2 rounded-full bg-rose-500 inline-block"></span>
                    2. Sensibilidad a la Temperatura ($T$)
                  </div>
                  <p class="text-slate-600 dark:text-slate-400">
                    Al calentarse el transistor: $\\beta$ aumenta ($\\approx +0.5\\%/^{\\circ}\\text{C}$), $V_{BE}$ decrece ($\\approx -2\\,\\text{mV}/^{\\circ}\\text{C}$) y la corriente de fuga $I_{CBO}$ se duplica cada $10^{\\circ}\\text{C}$. Sin compensación, esto desvía $I_C$ hacia la saturación o embalamiento térmico.
                  </p>
                </div>
              </div>

              <!-- 2. Deducción matemática: ¿Cómo se elimina beta? -->
              <div class="p-3 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-indigo-100 dark:border-indigo-900/50">
                <span class="font-bold text-indigo-700 dark:text-indigo-300 block mb-1">
                  📐 Deducción Matemática: ¿Cómo logramos que $I_C$ no dependa de $\\beta$?
                </span>
                <p class="mb-2 text-slate-600 dark:text-slate-400">
                  Partiendo de la ecuación de malla de entrada Thévenin ($I_B = \\frac{V_{BB} - V_{BE}}{R_B + (1+\\beta)R_E}$) y calculando la corriente de colector $I_C = \\beta I_B$:
                </p>
                <div class="bg-indigo-50/50 dark:bg-indigo-950/30 p-2.5 rounded-lg font-mono text-center my-2 border border-indigo-200/50 dark:border-indigo-800/40">
                  $$I_{CQ} = \\beta \\cdot \\frac{V_{BB} - V_{BE}}{R_B + (1+\\beta)R_E} = \\frac{V_{BB} - V_{BE}}{\\frac{R_B}{\\beta} + \\left(\\frac{1+\\beta}{\\beta}\\right) R_E} \\approx \\frac{V_{BB} - V_{BE}}{\\mathbf{\\frac{R_B}{\\beta}} + R_E}$$
                </div>
                <p class="mt-2 text-slate-600 dark:text-slate-400">
                  Observa el denominador: contiene dos términos resistivos, $\\frac{R_B}{\\beta}$ y $R_E$. Si forzamos a que el término que contiene a $\\beta$ sea <strong>completamente despreciable</strong> frente a $R_E$:
                </p>
                <div class="flex items-center justify-center gap-2 my-2 text-sm font-bold text-indigo-600 dark:text-indigo-400">
                  $$\\frac{R_B}{\\beta} \\ll R_E \\iff \\mathbf{R_B \\le 0.1 \\cdot \\beta R_E} \\quad \\text{(Regla del } 10\\% \\text{)}$$
                </div>
                <p class="text-slate-600 dark:text-slate-400">
                  Bajo esta condición, $\\frac{R_B}{\\beta} \\approx 0$, por lo que la fórmula se simplifica:
                </p>
                <div class="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-700/60 text-center font-bold text-emerald-800 dark:text-emerald-300 my-1">
                  $$\\mathbf{I_{CQ} \\approx \\frac{V_{BB} - V_{BE}}{R_E}} \\qquad \\text{¡Totalmente independiente de } \\beta\\text{!}$$
                </div>
                <p class="text-slate-500 dark:text-slate-400 text-[11px] mt-1">
                  Dado que $V_{BB}$ y $R_E$ se fijan mediante resistencias comerciales de alta precisión (1% o 5%), el punto de reposo $I_{CQ}$ permanece inalterado aunque cambiemos el transistor o varíe su $\\beta$.
                </p>
              </div>

              <!-- 3. Mecanismo Físico: Inmunidad Térmica (Lazo de Realimentación Negativa) -->
              <div class="p-3 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-purple-100 dark:border-purple-900/50">
                <span class="font-bold text-purple-700 dark:text-purple-300 block mb-1">
                  🛡️ Mecanismo Físico: ¿Por qué es Inmune a la Temperatura? (Realimentación Negativa DC)
                </span>
                <p class="mb-2 text-slate-600 dark:text-slate-400">
                  Gracias a la resistencia de emisor $R_E$ y a que el divisor fija rígidamente la tensión de base $V_B \\approx V_{BB}$, el circuito forma un <strong>lazo cerrado de autorregulación</strong>:
                </p>

                <!-- Flujograma -->
                <div class="grid grid-cols-1 sm:grid-cols-5 gap-2 text-center my-3 font-mono text-[11px]">
                  <div class="p-2 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 flex flex-col justify-center items-center">
                    <span class="text-rose-600 dark:text-rose-400 font-bold">1. Perturbación</span>
                    <span class="mt-1 font-bold text-rose-700 dark:text-rose-300">$T \\uparrow$</span>
                    <span class="text-[10px] text-slate-500">Tiende a subir $I_C$</span>
                  </div>
                  <div class="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 flex flex-col justify-center items-center">
                    <span class="text-amber-600 dark:text-amber-400 font-bold">2. Sube $V_E$</span>
                    <span class="mt-1 font-bold text-amber-700 dark:text-amber-300">$V_E = I_E R_E \\uparrow$</span>
                    <span class="text-[10px] text-slate-500">Emisor sube de potencial</span>
                  </div>
                  <div class="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 flex flex-col justify-center items-center">
                    <span class="text-indigo-600 dark:text-indigo-400 font-bold">3. Cae $V_{BE}$</span>
                    <span class="mt-1 font-bold text-indigo-700 dark:text-indigo-300">$V_{BE} = V_B - V_E \\downarrow$</span>
                    <span class="text-[10px] text-slate-500">Porque $V_B$ está anclado</span>
                  </div>
                  <div class="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 flex flex-col justify-center items-center">
                    <span class="text-blue-600 dark:text-blue-400 font-bold">4. Freno en Base</span>
                    <span class="mt-1 font-bold text-blue-700 dark:text-blue-300">$I_B \\downarrow$</span>
                    <span class="text-[10px] text-slate-500">Cae exponencialmente</span>
                  </div>
                  <div class="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex flex-col justify-center items-center">
                    <span class="text-emerald-600 dark:text-emerald-400 font-bold">5. Resultado</span>
                    <span class="mt-1 font-bold text-emerald-700 dark:text-emerald-300">$I_C \\downarrow \\approx \\text{Cte}$</span>
                    <span class="text-[10px] text-slate-500">Punto Q estabilizado</span>
                  </div>
                </div>

                <p class="text-slate-600 dark:text-slate-400 text-xs">
                  Cualquier intento térmico de elevar $I_C$ provoca que el emisor "se levante" en tensión ($V_E \\uparrow$), lo que estrangula la tensión neta base-emisor ($V_{BE} = V_B - V_E$), reduciendo la inyección de portadores y restaurando $I_C$ a su valor nominal.
                </p>
              </div>

              <!-- 4. Las 2 Reglas Prácticas de Diseño -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div class="p-3 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
                  <div class="font-bold text-indigo-700 dark:text-indigo-400 mb-1">
                    📌 Regla 1: Rigidez del Divisor (Corriente de Sangrado)
                  </div>
                  <p class="text-slate-600 dark:text-slate-400 mb-1">
                    Para que la base actúe como una fuente de tensión casi ideal y la corriente $I_B$ no altere el divisor:
                  </p>
                  <div class="font-mono text-center p-1.5 rounded bg-slate-50 dark:bg-slate-800 font-bold text-indigo-600 dark:text-indigo-300">
                    $$I_{\\text{divisor}} \\ge 10 \\cdot I_B \\iff R_B \\le 0.1 \\cdot \\beta R_E$$
                  </div>
                  <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                    La corriente que fluye por $R_1$ y $R_2$ debe ser al menos 10 veces mayor que la corriente que se desvía hacia la base ($I_B$).
                  </p>
                </div>

                <div class="p-3 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
                  <div class="font-bold text-emerald-700 dark:text-emerald-400 mb-1">
                    📌 Regla 2: Amplitud de $V_E$ frente a Deriva de $V_{BE}$
                  </div>
                  <p class="text-slate-600 dark:text-slate-400 mb-1">
                    La juntura $V_{BE}$ varía térmicamente unos $-2\\,\\text{mV}/^{\\circ}\\text{C}$ (apenas $\\sim 0.1\\,\\text{V}$ en todo el rango). Para que esa variación sea imperceptible:
                  </p>
                  <div class="font-mono text-center p-1.5 rounded bg-slate-50 dark:bg-slate-800 font-bold text-emerald-600 dark:text-emerald-300">
                    $$V_E \\ge 1\\,\\text{V} \\quad \\text{o} \\quad V_E \\approx (0.1 \\sim 0.2) \\cdot V_{CC}$$
                  </div>
                  <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                    Si $V_E \\ge 1\\,\\text{V}$, una variación térmica $\\Delta V_{BE} = 0.1\\,\\text{V}$ solo provocará un cambio menor al $10\\%$ en $I_{CQ} = \\frac{V_E}{R_E}$.
                  </p>
                </div>
              </div>

              <!-- 5. ¿Por qué no hacer R_B arbitrariamente pequeña? (Trade-off) -->
              <div class="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200 text-xs">
                <strong>⚖️ El Compromiso del Diseñador (¿Por qué exactamente el 10%?):</strong>
                <p class="mt-1">
                  Si quisiéramos "inmunidad infinita", podríamos hacer $R_1$ y $R_2$ extremadamente pequeños ($R_B \\to 0$). Sin embargo, esto causaría dos graves problemas:
                  <br>
                  1. <strong>Desperdicio de potencia:</strong> El divisor consumiría una corriente estática enorme de la fuente $V_{CC}$.
                  <br>
                  2. <strong>Degradación de impedancia de entrada:</strong> En pequeña señal (AC), la impedancia de entrada del amplificador es $Z_{\\text{in}} = R_1 \\parallel R_2 \\parallel Z_{\\text{base}}$. Si $R_1 \\parallel R_2$ es minúsculo, $Z_{\\text{in}}$ se desplomaría y atenuaría drásticamente la señal del generador.
                  <br>
                  Por ello, <strong>la regla del 10% ($R_B \\approx 0.1 \\cdot \\beta R_E$)</strong> es el estándar de la industria que brinda perfecta estabilidad sin castigar la señal ni el consumo.
                </p>
              </div>

            </div>

            <!-- 4. RECTA DE CARGA ESTÁTICA Y PUNTO Q -->
            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Recta de Carga Estática (DC) y Máxima Excursión Simétrica</h5>
            <p class="text-xs text-slate-600 dark:text-slate-400 mb-2">
              La recta de carga representa gráficamente todos los posibles pares $(V_{CE}, I_C)$ que permite el circuito exterior de colector y emisor. Para garantizar que la señal no sufra distorsión no lineal al aproximarse al corte de la juntura base-emisor, se define una <strong>corriente mínima $I_{C,\\text{min}}$</strong> (límite inferior de la excursión lineal, impidiendo que el BJT se adentre en la zona de codo o corte):
            </p>

            <div class="my-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span class="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-2 text-center">
                📈 Curvas Características $I_C$ vs $V_{CE}$ y Recta de Carga DC
              </span>
              <div class="flex justify-center overflow-x-auto">
                <svg viewBox="0 0 680 270" class="w-full max-w-[680px] text-xs font-sans select-none" style="min-width: 520px;">
                  <defs>
                    <marker id="dc-arr-green" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                      <polygon points="0,1 6,3 0,5" fill="#10b981"/>
                    </marker>
                    <marker id="dc-arr-green-rev" markerWidth="6" markerHeight="6" refX="1" refY="3" orient="auto">
                      <polygon points="6,1 0,3 6,5" fill="#10b981"/>
                    </marker>
                  </defs>

                  <!-- Ejes Cartesiano -->
                  <!-- Eje Y: I_C -->
                  <line x1="80" y1="230" x2="80" y2="25" stroke="#475569" stroke-width="2"/>
                  <polygon points="76,27 80,18 84,27" fill="#475569"/>
                  <text x="75" y="18" text-anchor="end" font-weight="bold" fill="#475569" font-size="11"><tspan font-style="italic">I</tspan><tspan font-size="75%" dy="2.5" font-style="normal">C</tspan><tspan font-size="100%" dy="-2.5" font-style="normal"> (mA)</tspan></text>

                  <!-- Eje X: V_CE -->
                  <line x1="80" y1="230" x2="650" y2="230" stroke="#475569" stroke-width="2"/>
                  <polygon points="648,226 657,230 648,234" fill="#475569"/>
                  <text x="655" y="247" text-anchor="end" font-weight="bold" fill="#475569" font-size="11"><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2.5" font-style="normal">CE</tspan><tspan font-size="100%" dy="-2.5" font-style="normal"> (V)</tspan></text>

                  <!-- Región de Saturación (Franja vertical izquierda) -->
                  <rect x="80" y="25" width="45" height="205" fill="#f59e0b" fill-opacity="0.12"/>
                  <line x1="125" y1="25" x2="125" y2="230" stroke="#f59e0b" stroke-width="1" stroke-dasharray="2 2" stroke-opacity="0.5"/>
                  <text x="102" y="38" text-anchor="middle" font-weight="bold" fill="#d97706" font-size="8.5">Saturación</text>
                  <text x="102" y="48" text-anchor="middle" fill="#d97706" font-size="8">(<tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">CE</tspan><tspan font-size="100%" dy="-2"> &lt; 0.2 V)</tspan></text>

                  <!-- Región de Corte (Franja horizontal inferior limitada por I_C,min) -->
                  <rect x="80" y="213" width="560" height="17" fill="#64748b" fill-opacity="0.2"/>
                  <line x1="80" y1="213" x2="505" y2="213" stroke="#64748b" stroke-width="1.3" stroke-dasharray="3 2"/>
                  <text x="72" y="216" text-anchor="end" font-weight="bold" fill="#64748b" font-size="9"><tspan font-style="italic">I</tspan><tspan font-size="75%" dy="2">C,min</tspan></text>
                  <text x="440" y="224" text-anchor="middle" font-weight="bold" fill="#64748b" font-size="8.5">Región de Corte (<tspan font-style="italic">i</tspan><tspan font-size="75%" dy="2">C</tspan><tspan font-size="100%" dy="-2"> ≤ </tspan><tspan font-style="italic">I</tspan><tspan font-size="75%" dy="2">C,min</tspan><tspan font-size="100%" dy="-2">)</tspan></text>

                  <!-- Familia de curvas de salida I_C vs V_CE -->
                  <!-- Curva 1: I_B1 = 10 uA -->
                  <path d="M 80,230 C 86,218 102,203 125,203 L 315,200 L 610,195" fill="none" stroke="#94a3b8" stroke-width="1.5"/>
                  <text x="615" y="197" text-anchor="start" fill="#94a3b8" font-size="8.5"><tspan font-style="italic">I</tspan><tspan font-size="75%" dy="2">B1</tspan><tspan font-size="100%" dy="-2"> = 10 µA</tspan></text>

                  <!-- Curva 2: I_B2 = 20 uA -->
                  <path d="M 80,230 C 86,195 102,173 125,173 L 315,170 L 610,165" fill="none" stroke="#94a3b8" stroke-width="1.5"/>
                  <text x="615" y="167" text-anchor="start" fill="#94a3b8" font-size="8.5"><tspan font-style="italic">I</tspan><tspan font-size="75%" dy="2">B2</tspan><tspan font-size="100%" dy="-2"> = 20 µA</tspan></text>

                  <!-- Curva 3: I_B3 = 30 uA (Punto Q) -->
                  <path d="M 80,230 C 86,165 102,143 125,143 L 315,140 L 610,135" fill="none" stroke="#6366f1" stroke-width="2.2"/>
                  <text x="615" y="137" text-anchor="start" font-weight="bold" fill="#6366f1" font-size="9"><tspan font-style="italic">I</tspan><tspan font-size="75%" dy="2">BQ</tspan><tspan font-size="100%" dy="-2"> = 30 µA</tspan></text>

                  <!-- Curva 4: I_B4 = 40 uA -->
                  <path d="M 80,230 C 86,135 102,113 125,113 L 315,110 L 610,105" fill="none" stroke="#94a3b8" stroke-width="1.5"/>
                  <text x="615" y="107" text-anchor="start" fill="#94a3b8" font-size="8.5"><tspan font-style="italic">I</tspan><tspan font-size="75%" dy="2">B4</tspan><tspan font-size="100%" dy="-2"> = 40 µA</tspan></text>

                  <!-- Curva 5: I_B5 = 50 uA -->
                  <path d="M 80,230 C 86,105 102,83 125,83 L 315,80 L 610,75" fill="none" stroke="#94a3b8" stroke-width="1.5"/>
                  <text x="615" y="77" text-anchor="start" fill="#94a3b8" font-size="8.5"><tspan font-style="italic">I</tspan><tspan font-size="75%" dy="2">B5</tspan><tspan font-size="100%" dy="-2"> = 50 µA</tspan></text>

                  <!-- Recta de Carga Estática (DC Load Line) -->
                  <line x1="80" y1="50" x2="550" y2="230" stroke="#ef4444" stroke-width="2.5"/>
                  <text x="390" y="88" text-anchor="start" font-weight="bold" fill="#ef4444" font-size="10">Recta de Carga Estática (DC)</text>

                  <!-- Tramo de Excursión Simétrica sobre la Recta de Carga -->
                  <line x1="125" y1="67" x2="505" y2="213" stroke="#10b981" stroke-width="5" stroke-linecap="round" stroke-opacity="0.65"/>

                  <!-- Extremos de la Recta de Carga -->
                  <!-- Saturación extrema (0, V_CC / (R_C + R_E)) -->
                  <circle cx="80" cy="50" r="4.5" fill="#ef4444"/>
                  <text x="72" y="54" text-anchor="end" font-weight="bold" fill="#ef4444" font-size="9"><tspan font-style="italic">I</tspan><tspan font-size="75%" dy="2">C,sat</tspan><tspan font-size="100%" dy="-2"> = </tspan><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">CC</tspan><tspan font-size="100%" dy="-2"> / (</tspan><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">C</tspan><tspan font-size="100%" dy="-2"> + </tspan><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">E</tspan><tspan font-size="100%" dy="-2">)</tspan></text>

                  <!-- Corte extremo (V_CC, 0) -->
                  <circle cx="550" cy="230" r="4.5" fill="#ef4444"/>
                  <text x="550" y="247" text-anchor="middle" font-weight="bold" fill="#ef4444" font-size="9.5"><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">CC</tspan><tspan font-size="100%" dy="-2"> (Corte)</tspan></text>

                  <!-- Límite de Corte Práctico V_CE,corte a I_C = I_C,min -->
                  <circle cx="505" cy="213" r="3.5" fill="#10b981"/>
                  <line x1="505" y1="213" x2="505" y2="230" stroke="#10b981" stroke-width="1.2" stroke-dasharray="3 3"/>
                  <text x="505" y="247" text-anchor="middle" font-weight="bold" fill="#10b981" font-size="9"><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">CE,corte</tspan></text>

                  <!-- Punto Q de trabajo: Intersección EXACTA de Curva 3 con Recta de Carga -->
                  <g>
                    <!-- Línea punteada a Eje Y: I_CQ -->
                    <line x1="315" y1="140" x2="80" y2="140" stroke="#ef4444" stroke-width="1.2" stroke-dasharray="3 3"/>
                    <text x="72" y="144" text-anchor="end" font-weight="bold" fill="#ef4444" font-size="10"><tspan font-style="italic">I</tspan><tspan font-size="75%" dy="2">CQ</tspan></text>

                    <!-- Línea punteada a Eje X: V_CEQ -->
                    <line x1="315" y1="140" x2="315" y2="230" stroke="#ef4444" stroke-width="1.2" stroke-dasharray="3 3"/>
                    <text x="315" y="247" text-anchor="middle" font-weight="bold" fill="#ef4444" font-size="9.5"><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">CEQ</tspan><tspan font-size="100%" dy="-2"> ≈ </tspan><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">CC</tspan><tspan font-size="100%" dy="-2"> / 2</tspan></text>

                    <!-- Círculo Punto Q -->
                    <circle cx="315" cy="140" r="5.5" fill="#ef4444"/>
                    <circle cx="315" cy="140" r="2" fill="#ffffff"/>
                    <text x="328" y="133" font-weight="bold" fill="#ef4444" font-size="11">Punto Q (<tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">CEQ</tspan><tspan font-size="100%" dy="-2">, </tspan><tspan font-style="italic">I</tspan><tspan font-size="75%" dy="2">CQ</tspan><tspan font-size="100%" dy="-2">)</tspan></text>
                  </g>

                  <!-- Guías verticales verdes de límites de excursión -->
                  <line x1="125" y1="67" x2="125" y2="208" stroke="#10b981" stroke-width="1" stroke-dasharray="3 3" stroke-opacity="0.6"/>
                  <line x1="505" y1="205" x2="505" y2="208" stroke="#10b981" stroke-width="1" stroke-dasharray="3 3" stroke-opacity="0.6"/>

                  <!-- Flecha de máxima excursión simétrica sin distorsión -->
                  <line x1="125" y1="202" x2="505" y2="202" stroke="#10b981" stroke-width="2" marker-start="url(#dc-arr-green-rev)" marker-end="url(#dc-arr-green)"/>
                  <text x="315" y="196" text-anchor="middle" font-weight="bold" fill="#059669" font-size="9">Máxima Excursión Simétrica: Δ<tspan font-style="italic">v</tspan><tspan font-size="75%" dy="2">ce,p</tspan><tspan font-size="100%" dy="-2"> = </tspan><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">CEQ</tspan><tspan font-size="100%" dy="-2"> − </tspan><tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">CE,sat</tspan><tspan font-size="100%" dy="-2"> = (</tspan><tspan font-style="italic">I</tspan><tspan font-size="75%" dy="2">CQ</tspan><tspan font-size="100%" dy="-2"> − </tspan><tspan font-style="italic">I</tspan><tspan font-size="75%" dy="2">C,min</tspan><tspan font-size="100%" dy="-2">)·</tspan><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">dc</tspan></text>
                </svg>
              </div>
            </div>

            <div class="p-3 my-3 rounded-xl bg-amber-500/10 dark:bg-amber-950/40 border border-amber-500/30 text-xs flex items-start gap-2.5">
              <span class="text-base shrink-0">🔗</span>
              <div class="flex-1 min-w-0">
                <div class="font-semibold text-amber-900 dark:text-amber-300">
                  Ampliación en Electrónica Aplicada I (Gran Señal y Máxima Excursión):
                </div>
                <p class="text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                  Para el dimensionamiento del punto Q para máxima excursión simétrica sin recorte con carga dinámica $R_L$ acoplada y distorsión armónica:
                </p>
                <button 
                  onclick="navegarASeccionTeorica('electronica-aplicada-1', 'u1-excursion-maxima')"
                  class="mt-1.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-mono text-[11px] font-medium transition-colors shadow-2xs"
                >
                  <span>📖 Ver Electrónica Aplicada I · Unidad 1 (Máxima Excursión Simétrica)</span>
                  <span>→</span>
                </button>
              </div>
            </div>
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
          titulo: '4.1 Modelos de Pequeña Señal: Cuadripolos de 2 Puertos, Parámetros h e Híbrido Pi',
          contenido: `
            <!-- 1. INTRODUCCIÓN A PEQUEÑA SEÑAL -->
            <div class="p-3.5 mb-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-slate-800 dark:text-slate-200">
              <span class="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider block mb-1">
                📶 Principio de Superposición y Linealización Dinámica
              </span>
              <p class="text-xs leading-relaxed mb-2">
                Para amplitudes de señal alterna suficientemente pequeñas ($v_{be} < V_T \\approx 26\\text{ mV}$), la respuesta no lineal exponencial del transistor se aproxima por su tangente en el punto de reposo $Q(I_{CQ}, V_{CEQ})$.
              </p>
              <p class="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                El análisis se desacopla en dos fases independientes:
                <strong>1) Análisis DC:</strong> Fuentes de señal en cero, capacitores en circuito abierto $\\implies$ se calcula el punto $Q$.
                <strong>2) Análisis AC:</strong> Fuentes DC a masa (tierra de alterna), capacitores en cortocircuito $\\implies$ el BJT se reemplaza por su modelo lineal equivalente.
              </p>
            </div>

            <!-- 2. DIAGRAMA SVG CUADRIPOLO DE 2 PUERTOS Y PARÁMETROS H -->
            <div class="my-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span class="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-2 text-center">
                📦 Red Lineal de 2 Puertos (Cuadripolo) y Modelo de Parámetros Híbridos [h]
              </span>
              <div class="flex justify-center overflow-x-auto">
                <svg viewBox="0 0 680 190" class="w-full max-w-[680px] text-xs font-sans select-none" style="min-width: 520px;">
                  <defs>
                    <marker id="ac-arr-blue" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                      <polygon points="0 0, 6 3, 0 6" fill="#3b82f6"/>
                    </marker>
                    <marker id="ac-arr-green" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                      <polygon points="0 0, 6 3, 0 6" fill="#10b981"/>
                    </marker>
                  </defs>

                  <!-- ================= PARTE IZQUIERDA: CAJA NEGRA 2 PUERTOS ================= -->
                  <g transform="translate(10, 0)">
                    <text x="110" y="20" text-anchor="middle" font-weight="bold" fill="#6366f1" font-size="11">Cuadripolo General</text>
                    
                    <!-- Caja Cuadripolo -->
                    <rect x="55" y="45" width="110" height="90" rx="8" fill="#6366f1" fill-opacity="0.12" stroke="#6366f1" stroke-width="2"/>
                    <text x="110" y="85" text-anchor="middle" font-weight="bold" fill="#4f46e5" font-size="10.5">BJT en ZAD</text>
                    <text x="110" y="100" text-anchor="middle" fill="#64748b" font-size="8.5">[Matriz h]</text>

                    <!-- Puerto 1 (Entrada) -->
                    <!-- Terminal 1 Superior -->
                    <line x1="15" y1="60" x2="55" y2="60" stroke="#475569" stroke-width="2"/>
                    <circle cx="15" cy="60" r="3.5" fill="#3b82f6"/>
                    <!-- Corriente i1 -->
                    <line x1="22" y1="52" x2="45" y2="52" stroke="#3b82f6" stroke-width="1.8" marker-end="url(#ac-arr-blue)"/>
                    <text x="33" y="46" text-anchor="middle" font-weight="bold" fill="#3b82f6" font-size="9.5"><tspan font-style="italic">i</tspan><tspan font-size="75%" dy="2">1</tspan></text>
                    
                    <!-- Terminal 1' Inferior -->
                    <line x1="15" y1="120" x2="55" y2="120" stroke="#475569" stroke-width="2"/>
                    <circle cx="15" cy="120" r="3.5" fill="#3b82f6"/>
                    <text x="8" y="94" text-anchor="middle" font-weight="bold" fill="#3b82f6" font-size="10.5"><tspan font-style="italic">v</tspan><tspan font-size="75%" dy="2">1</tspan></text>
                    <text x="15" y="74" text-anchor="middle" fill="#3b82f6" font-size="9">+</text>
                    <text x="15" y="112" text-anchor="middle" fill="#3b82f6" font-size="9">-</text>

                    <!-- Puerto 2 (Salida) -->
                    <!-- Terminal 2 Superior -->
                    <line x1="165" y1="60" x2="205" y2="60" stroke="#475569" stroke-width="2"/>
                    <circle cx="205" cy="60" r="3.5" fill="#10b981"/>
                    <!-- Corriente i2 -->
                    <line x1="198" y1="52" x2="175" y2="52" stroke="#10b981" stroke-width="1.8" marker-end="url(#ac-arr-green)"/>
                    <text x="186" y="46" text-anchor="middle" font-weight="bold" fill="#10b981" font-size="9.5"><tspan font-style="italic">i</tspan><tspan font-size="75%" dy="2">2</tspan></text>

                    <!-- Terminal 2' Inferior -->
                    <line x1="165" y1="120" x2="205" y2="120" stroke="#475569" stroke-width="2"/>
                    <circle cx="205" cy="120" r="3.5" fill="#10b981"/>
                    <text x="213" y="94" text-anchor="middle" font-weight="bold" fill="#10b981" font-size="10.5"><tspan font-style="italic">v</tspan><tspan font-size="75%" dy="2">2</tspan></text>
                    <text x="205" y="74" text-anchor="middle" fill="#10b981" font-size="9">+</text>
                    <text x="205" y="112" text-anchor="middle" fill="#10b981" font-size="9">-</text>

                    <!-- Ecuaciones bajo caja -->
                    <text x="110" y="155" text-anchor="middle" font-bold fill="#334155" dark:fill="#cbd5e1" font-size="9"><tspan font-style="italic">v</tspan><tspan font-size="75%" dy="2">1</tspan><tspan font-size="100%" dy="-2"> = </tspan><tspan font-style="italic">h</tspan><tspan font-size="75%" dy="2">i</tspan><tspan font-size="100%" dy="-2"> · </tspan><tspan font-style="italic">i</tspan><tspan font-size="75%" dy="2">1</tspan><tspan font-size="100%" dy="-2"> + </tspan><tspan font-style="italic">h</tspan><tspan font-size="75%" dy="2">r</tspan><tspan font-size="100%" dy="-2"> · </tspan><tspan font-style="italic">v</tspan><tspan font-size="75%" dy="2">2</tspan></text>
                    <text x="110" y="171" text-anchor="middle" font-bold fill="#334155" dark:fill="#cbd5e1" font-size="9"><tspan font-style="italic">i</tspan><tspan font-size="75%" dy="2">2</tspan><tspan font-size="100%" dy="-2"> = </tspan><tspan font-style="italic">h</tspan><tspan font-size="75%" dy="2">f</tspan><tspan font-size="100%" dy="-2"> · </tspan><tspan font-style="italic">i</tspan><tspan font-size="75%" dy="2">1</tspan><tspan font-size="100%" dy="-2"> + </tspan><tspan font-style="italic">h</tspan><tspan font-size="75%" dy="2">o</tspan><tspan font-size="100%" dy="-2"> · </tspan><tspan font-style="italic">v</tspan><tspan font-size="75%" dy="2">2</tspan></text>
                  </g>

                  <!-- Divisor vertical -->
                  <line x1="245" y1="20" x2="245" y2="180" stroke="#cbd5e1" stroke-dasharray="3 3"/>

                  <!-- ================= PARTE DERECHA: CIRCUITO EQUIVALENTE H ================= -->
                  <g transform="translate(265, 0)">
                    <text x="200" y="20" text-anchor="middle" font-weight="bold" fill="#10b981" font-size="11">Circuito Equivalente de Parámetros [h]</text>

                    <!-- Malla de Entrada -->
                    <circle cx="20" cy="55" r="3" fill="#3b82f6"/>
                    <line x1="20" y1="55" x2="45" y2="55" stroke="#475569" stroke-width="1.8"/>
                    
                    <!-- Resistencia h_i -->
                    <rect x="45" y="47" width="28" height="16" fill="#3b82f6" fill-opacity="0.2" stroke="#3b82f6" stroke-width="1.5" rx="2"/>
                    <text x="59" y="40" text-anchor="middle" font-weight="bold" fill="#3b82f6" font-size="9.5"><tspan font-style="italic">h</tspan><tspan font-size="75%" dy="2">ie</tspan><tspan font-size="100%" dy="-2"> (</tspan><tspan font-style="italic">h</tspan><tspan font-size="75%" dy="2">i</tspan><tspan font-size="100%" dy="-2">)</tspan></text>
                    <line x1="73" y1="55" x2="95" y2="55" stroke="#475569" stroke-width="1.8"/>

                    <!-- Fuente de tensión controlada h_re · v_2 -->
                    <circle cx="112" cy="55" r="14" fill="#6366f1" fill-opacity="0.15" stroke="#6366f1" stroke-width="1.5"/>
                    <text x="112" y="49" text-anchor="middle" font-weight="bold" fill="#6366f1" font-size="8">-</text>
                    <text x="112" y="65" text-anchor="middle" font-weight="bold" fill="#6366f1" font-size="8">+</text>
                    <text x="112" y="81" text-anchor="middle" font-weight="bold" fill="#6366f1" font-size="9"><tspan font-style="italic">h</tspan><tspan font-size="75%" dy="2">re</tspan><tspan font-size="100%" dy="-2"> · </tspan><tspan font-style="italic">v</tspan><tspan font-size="75%" dy="2">2</tspan></text>
                    <line x1="126" y1="55" x2="155" y2="55" stroke="#475569" stroke-width="1.8"/>
                    <line x1="155" y1="55" x2="155" y2="125" stroke="#475569" stroke-width="1.8"/>

                    <!-- Barra de referencia común (Emisor E) -->
                    <line x1="20" y1="125" x2="380" y2="125" stroke="#475569" stroke-width="2"/>
                    <circle cx="20" cy="125" r="3" fill="#3b82f6"/>
                    <circle cx="380" cy="125" r="3" fill="#10b981"/>
                    <text x="200" y="142" text-anchor="middle" font-weight="bold" fill="#475569" font-size="9.5">Terminal Común (Emisor E)</text>

                    <!-- Malla de Salida -->
                    <line x1="240" y1="125" x2="240" y2="55" stroke="#475569" stroke-width="1.8"/>
                    <line x1="240" y1="55" x2="380" y2="55" stroke="#475569" stroke-width="1.8"/>
                    <circle cx="380" cy="55" r="3" fill="#10b981"/>

                    <!-- Fuente de corriente controlada h_fe · i_b -->
                    <!-- Rombo -->
                    <polygon points="240,43 252,55 240,67 228,55" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="1.5"/>
                    <line x1="240" y1="48" x2="240" y2="62" stroke="#10b981" stroke-width="1.5" marker-end="url(#ac-arr-green)"/>
                    <text x="240" y="81" text-anchor="middle" font-weight="bold" fill="#10b981" font-size="9"><tspan font-style="italic">h</tspan><tspan font-size="75%" dy="2">fe</tspan><tspan font-size="100%" dy="-2"> · </tspan><tspan font-style="italic">i</tspan><tspan font-size="75%" dy="2">b</tspan></text>

                    <!-- Resistencia de salida 1 / h_oe en paralelo -->
                    <line x1="315" y1="55" x2="315" y2="65" stroke="#475569" stroke-width="1.8"/>
                    <rect x="307" y="65" width="16" height="30" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="1.5" rx="2"/>
                    <text x="332" y="82" text-anchor="start" font-weight="bold" fill="#10b981" font-size="9">1/<tspan font-style="italic">h</tspan><tspan font-size="75%" dy="2">oe</tspan><tspan font-size="100%" dy="-2"> (</tspan><tspan font-style="italic">r</tspan><tspan font-size="75%" dy="2">o</tspan><tspan font-size="100%" dy="-2">)</tspan></text>
                    <line x1="315" y1="95" x2="315" y2="125" stroke="#475569" stroke-width="1.8"/>

                    <text x="200" y="170" text-anchor="middle" fill="#64748b" font-size="9">En baja frecuencia: <tspan font-style="italic" font-weight="bold">h</tspan><tspan font-size="75%" dy="2" font-weight="bold">re</tspan><tspan font-size="100%" dy="-2"> ≈ 0 (aislación inversa total)</tspan></text>
                  </g>
                </svg>
              </div>
            </div>

            <!-- EXPLICACIÓN DETALLADA DE LOS PARÁMETROS HÍBRIDOS EN EMISOR COMÚN -->
            <div class="my-4 p-4 rounded-2xl bg-gradient-to-br from-slate-50 via-indigo-50/40 to-slate-50 dark:from-slate-900 dark:via-indigo-950/20 dark:to-slate-900 border border-indigo-200 dark:border-indigo-800/60 shadow-sm text-xs text-slate-700 dark:text-slate-300 space-y-3.5">
              
              <div class="flex items-center gap-2 border-b border-indigo-200 dark:border-indigo-800/60 pb-2">
                <span class="text-base">🔍</span>
                <h5 class="text-sm font-bold text-indigo-950 dark:text-indigo-200">
                  Significado Físico de los Parámetros Híbridos $[h]$ en Configuración Emisor Común (EC)
                </h5>
              </div>

              <!-- ¿Por qué híbridos y por qué la "e"? -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                <div class="p-2.5 rounded-lg bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                  <strong class="text-indigo-600 dark:text-indigo-400 block mb-1">
                    1. ¿Por qué se denominan «Híbridos»?
                  </strong>
                  <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Porque <strong>combinan unidades dimensionales distintas</strong> (uno es resistencia en $\\Omega$, otro admitancia en $\\text{S}$, y dos son relaciones adimensionales) y porque se miden bajo <strong>condiciones duales mixtas</strong>: cortocircuito en salida ($v_2 = 0$) y circuito abierto en entrada ($i_1 = 0$), las condiciones más estables y fáciles de implementar en laboratorio para transistores.
                  </p>
                </div>

                <div class="p-2.5 rounded-lg bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                  <strong class="text-purple-600 dark:text-purple-400 block mb-1">
                    2. Nomenclatura del Subíndice: ¿Qué significa la letra «e»?
                  </strong>
                  <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                    El <strong>primer subíndice</strong> indica la función del parámetro: <strong>i</strong> (<em>input</em>), <strong>r</strong> (<em>reverse</em>), <strong>f</strong> (<em>forward</em>), <strong>o</strong> (<em>output</em>).
                    <br>
                    El <strong>segundo subíndice</strong> identifica el terminal común puesto a masa de alterna:
                    la <strong>«e»</strong> corresponde a <strong>Emisor Común (EC)</strong>:
                    $$v_1 = v_{be}, \\quad i_1 = i_b, \\quad v_2 = v_{ce}, \\quad i_2 = i_c$$
                    <span class="text-[11px] text-slate-500">
                      (Si el terminal común fuera la Base se usaría «b»: $h_{ib}, h_{fb}$; y si fuera el Colector, «c»: $h_{ic}, h_{fc}$).
                    </span>
                  </p>
                </div>
              </div>

              <!-- Las 4 Ecuaciones y tarjetas explicativas -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                
                <!-- h_ie -->
                <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-blue-200 dark:border-blue-900/60 shadow-2xs">
                  <div class="flex items-center justify-between mb-1">
                    <span class="font-bold text-blue-700 dark:text-blue-400 text-xs">$h_{ie}$ · Impedancia de Entrada</span>
                    <span class="font-mono text-[10px] px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold">[$\\Omega$]</span>
                  </div>
                  <div class="my-1.5 text-center font-mono text-xs">
                    $$h_{ie} = \\left. \\frac{v_{be}}{i_b} \\right|_{v_{ce} = 0} = (1+\\beta) r_e \\equiv r_{\\pi}$$
                  </div>
                  <p class="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
                    Resistencia dinámica que presenta la juntura Base-Emisor en directa vista desde la base cuando el colector está cortocircuitado en AC ($v_{ce} = 0$).
                    <br>
                    <strong>Valor típico:</strong> $1\\text{ k}\\Omega \\sim 5\\text{ k}\\Omega$ (ej. $2.6\\text{ k}\\Omega$ a $I_C = 1\\text{ mA}$, $\\beta=100$).
                  </p>
                </div>

                <!-- h_re -->
                <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-indigo-200 dark:border-indigo-900/60 shadow-2xs">
                  <div class="flex items-center justify-between mb-1">
                    <span class="font-bold text-indigo-700 dark:text-indigo-400 text-xs">$h_{re}$ · Transferencia Inversa de Tensión</span>
                    <span class="font-mono text-[10px] px-1.5 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold">[V/V]</span>
                  </div>
                  <div class="my-1.5 text-center font-mono text-xs">
                    $$h_{re} = \\left. \\frac{v_{be}}{v_{ce}} \\right|_{i_b = 0} \\quad (\\text{adimensional})$$
                  </div>
                  <p class="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
                    Representa la realimentación interna: cuánta tensión de colector ($v_{ce}$) se refleja hacia la base debido a la modulación de ancho de base (Efecto Early) con la base abierta en AC ($i_b=0$).
                    <br>
                    <strong>Valor típico:</strong> Muy pequeño ($10^{-4} \\sim 10^{-5}$). En baja frecuencia <strong>se desprecia ($h_{re} \\approx 0$)</strong>.
                  </p>
                </div>

                <!-- h_fe -->
                <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-emerald-200 dark:border-emerald-900/60 shadow-2xs">
                  <div class="flex items-center justify-between mb-1">
                    <span class="font-bold text-emerald-700 dark:text-emerald-400 text-xs">$h_{fe}$ · Ganancia Directa de Corriente</span>
                    <span class="font-mono text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold">[A/A]</span>
                  </div>
                  <div class="my-1.5 text-center font-mono text-xs">
                    $$h_{fe} = \\left. \\frac{i_c}{i_b} \\right|_{v_{ce} = 0} = \\beta_{ac} \\quad (\\text{adimensional})$$
                  </div>
                  <p class="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
                    Es el factor de amplificación de corriente en pequeña señal. En las hojas de datos de los fabricantes (<em>datasheets</em>) se reporta exactamente como <strong>$h_{fe}$</strong> (minúsculas para AC, y $h_{FE}$ para DC).
                    <br>
                    <strong>Valor típico:</strong> $50 \\sim 400$ (típicamente $100-200$).
                  </p>
                </div>

                <!-- h_oe -->
                <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-amber-200 dark:border-amber-900/60 shadow-2xs">
                  <div class="flex items-center justify-between mb-1">
                    <span class="font-bold text-amber-700 dark:text-amber-400 text-xs">$h_{oe}$ · Admitancia de Salida</span>
                    <span class="font-mono text-[10px] px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 font-bold">[$\\text{S} = \\Omega^{-1}$]</span>
                  </div>
                  <div class="my-1.5 text-center font-mono text-xs">
                    $$h_{oe} = \\left. \\frac{i_c}{v_{ce}} \\right|_{i_b = 0} \\implies r_o = \\frac{1}{h_{oe}} \\approx \\frac{V_A}{I_{CQ}}$$
                  </div>
                  <p class="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
                    Conductancia dinámica entre colector y emisor con la base en circuito abierto AC. Su inversa ($1/h_{oe}$) es la resistencia de salida $r_o$ debida a la tensión Early ($V_A$).
                    <br>
                    <strong>Valor típico:</strong> $10 \\sim 50\\ \\mu\\text{S}$ ($r_o \\approx 20\\text{ k}\\Omega \\sim 100\\text{ k}\\Omega$). Suele despreciarse ($h_{oe} \\approx 0$).
                  </p>
                </div>

              </div>

              <!-- Tabla de equivalencias rápidas con Híbrido pi -->
              <div class="p-2.5 rounded-lg bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/50 text-[11px]">
                <strong class="text-indigo-900 dark:text-indigo-200 block mb-1">
                  🔄 Puente Directo: Parámetros $[h]$ de Fabricante $\\longleftrightarrow$ Modelo Híbrido $\\pi$:
                </strong>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center font-mono font-bold mt-1 text-slate-800 dark:text-slate-200">
                  <div class="p-1 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    $h_{ie} \\equiv r_{\\pi}$
                  </div>
                  <div class="p-1 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    $h_{fe} \\equiv \\beta = g_m r_{\\pi}$
                  </div>
                  <div class="p-1 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    $h_{re} \\approx 0$
                  </div>
                  <div class="p-1 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    $\\frac{1}{h_{oe}} \\equiv r_o$
                  </div>
                </div>
              </div>

            </div>

            <!-- 3. DIAGRAMA SVG MODELO HÍBRIDO PI DEL BJT -->
            <div class="my-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span class="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-2 text-center">
                🔲 Modelo Híbrido $\\pi$ (Transconductancia $g_m$) del BJT
              </span>
              <div class="flex justify-center overflow-x-auto">
                <svg viewBox="0 0 680 195" class="w-full max-w-[680px] text-xs font-sans select-none" style="min-width: 520px;">
                  <!-- Terminal Base B -->
                  <circle cx="50" cy="55" r="4.5" fill="#ec4899"/>
                  <text x="35" y="59" text-anchor="end" font-weight="bold" fill="#ec4899" font-size="12">B</text>
                  
                  <!-- Corriente i_b -->
                  <line x1="60" y1="46" x2="105" y2="46" stroke="#ef4444" stroke-width="2" marker-end="url(#bjt-arr-red)"/>
                  <text x="82" y="38" text-anchor="middle" font-weight="bold" fill="#ef4444" font-size="10"><tspan font-style="italic">i</tspan><tspan font-size="75%" dy="2">b</tspan></text>
                  <line x1="50" y1="55" x2="140" y2="55" stroke="#475569" stroke-width="2"/>

                  <!-- Resistencia r_pi -->
                  <line x1="140" y1="55" x2="140" y2="68" stroke="#475569" stroke-width="1.8"/>
                  <rect x="131" y="68" width="18" height="34" fill="#3b82f6" fill-opacity="0.2" stroke="#3b82f6" stroke-width="1.8" rx="2"/>
                  <text x="118" y="87" text-anchor="end" font-weight="bold" fill="#3b82f6" font-size="11"><tspan font-style="italic">r</tspan><tspan font-size="75%" dy="2">π</tspan></text>
                  <line x1="140" y1="102" x2="140" y2="145" stroke="#475569" stroke-width="1.8"/>

                  <!-- Tensión de control v_be -->
                  <text x="165" y="70" font-weight="bold" fill="#6366f1" font-size="10">+</text>
                  <text x="163" y="90" font-weight="bold" fill="#6366f1" font-size="10"><tspan font-style="italic">v</tspan><tspan font-size="75%" dy="2">be</tspan></text>
                  <text x="166" y="105" font-weight="bold" fill="#6366f1" font-size="10">-</text>

                  <!-- Barra de Emisor (E) -->
                  <line x1="50" y1="145" x2="630" y2="145" stroke="#475569" stroke-width="2.5"/>
                  <circle cx="340" cy="145" r="4.5" fill="#3b82f6"/>
                  <text x="340" y="165" text-anchor="middle" font-weight="bold" fill="#3b82f6" font-size="12">E (Emisor)</text>

                  <!-- Fuente de Corriente de Transconductancia gm · vbe -->
                  <line x1="400" y1="55" x2="400" y2="70" stroke="#475569" stroke-width="1.8"/>
                  <circle cx="400" cy="85" r="15" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="1.8"/>
                  <line x1="400" y1="76" x2="400" y2="94" stroke="#10b981" stroke-width="2" marker-end="url(#ac-arr-green)"/>
                  <text x="400" y="113" text-anchor="middle" font-weight="bold" fill="#10b981" font-size="10"><tspan font-style="italic">g</tspan><tspan font-size="75%" dy="2">m</tspan><tspan font-size="100%" dy="-2"> · </tspan><tspan font-style="italic">v</tspan><tspan font-size="75%" dy="2">be</tspan></text>
                  <text x="400" y="124" text-anchor="middle" fill="#64748b" font-size="8.5">(= β · <tspan font-style="italic">i</tspan><tspan font-size="75%" dy="2">b</tspan><tspan font-size="100%" dy="-2">)</tspan></text>
                  <line x1="400" y1="100" x2="400" y2="145" stroke="#475569" stroke-width="1.8"/>

                  <!-- Resistencia dinámica de salida r_o (Efecto Early) -->
                  <line x1="400" y1="55" x2="520" y2="55" stroke="#475569" stroke-width="1.8"/>
                  <line x1="520" y1="55" x2="520" y2="68" stroke="#475569" stroke-width="1.8"/>
                  <rect x="511" y="68" width="18" height="34" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="1.8" rx="2"/>
                  <text x="540" y="87" text-anchor="start" font-weight="bold" fill="#10b981" font-size="11"><tspan font-style="italic">r</tspan><tspan font-size="75%" dy="2">o</tspan></text>
                  <text x="540" y="100" text-anchor="start" fill="#64748b" font-size="8.5">(<tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">A</tspan><tspan font-size="100%" dy="-2"> / </tspan><tspan font-style="italic">I</tspan><tspan font-size="75%" dy="2">CQ</tspan><tspan font-size="100%" dy="-2">)</tspan></text>
                  <line x1="520" y1="102" x2="520" y2="145" stroke="#475569" stroke-width="1.8"/>

                  <!-- Terminal Colector C -->
                  <line x1="520" y1="55" x2="630" y2="55" stroke="#475569" stroke-width="2"/>
                  <circle cx="630" cy="55" r="4.5" fill="#10b981"/>
                  <text x="645" y="59" text-anchor="start" font-weight="bold" fill="#10b981" font-size="12">C</text>

                  <!-- Corriente i_c -->
                  <line x1="615" y1="46" x2="570" y2="46" stroke="#10b981" stroke-width="2" marker-end="url(#ac-arr-green)"/>
                  <text x="592" y="38" text-anchor="middle" font-weight="bold" fill="#10b981" font-size="10"><tspan font-style="italic">i</tspan><tspan font-size="75%" dy="2">c</tspan></text>
                </svg>
              </div>
            </div>

            <!-- 4. FÓRMULAS DE DEDUCCIÓN DE PARÁMETROS INTRÍNSECOS -->
            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Cálculo Numérico de Parámetros a partir del Punto Q</h5>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3 text-xs">
              <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <span class="font-bold text-emerald-600 dark:text-emerald-400 block mb-1">Transconductancia ($g_m$):</span>
                $$g_m = \\left. \\frac{\\partial i_C}{\\partial v_{BE}} \\right|_Q = \\frac{I_{CQ}}{V_T} \\approx \\frac{I_{CQ}}{26\\text{ mV}}$$
                <p class="text-[11px] text-slate-600 dark:text-slate-400 mt-1">
                  Mide la sensibilidad de corriente de colector ante variaciones de tensión base-emisor. A $1\\text{ mA}$, $g_m \\approx 38.5\\text{ mA/V}$.
                </p>
              </div>
              <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <span class="font-bold text-indigo-600 dark:text-indigo-400 block mb-1">Resistencia de Entrada de Base ($r_{\\pi}$ o $h_{ie}$):</span>
                $$r_{\\pi} = \\frac{\\beta}{g_m} = \\frac{\\beta V_T}{I_{CQ}} = (1+\\beta) r_e$$
                <p class="text-[11px] text-slate-600 dark:text-slate-400 mt-1">
                  Resistencia dinámica que presenta la juntura Base-Emisor vista desde la base. Con $\\beta=100$ y $I_C=1\\text{ mA}$, $r_{\\pi} \\approx 2.6\\text{ k}\\Omega$.
                </p>
              </div>
              <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <span class="font-bold text-purple-600 dark:text-purple-400 block mb-1">Resistencia Dinámica de Emisor ($r_e$):</span>
                $$r_e = \\frac{\\alpha}{g_m} \\approx \\frac{V_T}{I_{EQ}} \\approx \\frac{26\\text{ mV}}{I_{EQ}}$$
                <p class="text-[11px] text-slate-600 dark:text-slate-400 mt-1">
                  Resistencia que presenta el transistor vista directamente desde el terminal de emisor. Típicamente entre $5\\,\\Omega$ y $50\\,\\Omega$.
                </p>
              </div>
              <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <span class="font-bold text-amber-600 dark:text-amber-400 block mb-1">Resistencia de Salida Early ($r_o$ o $1/h_{oe}$):</span>
                $$r_o = \\frac{V_A + V_{CEQ}}{I_{CQ}} \\approx \\frac{V_A}{I_{CQ}}$$
                <p class="text-[11px] text-slate-600 dark:text-slate-400 mt-1">
                  Debida a la modulación de ancho de base (Efecto Early, $V_A \\approx 50-100\\text{ V}$). Típicamente entre $50\\text{ k}\\Omega$ y $200\\text{ k}\\Omega$.
                </p>
              </div>
            </div>
          `
        },
        {
          id: 'e1-u4-configuraciones-comparativa',
          titulo: '4.2 Configuraciones Básicas: Emisor Común (EC), Colector Común (CC) y Base Común (BC)',
          contenido: `
            <!-- 1. INTRODUCCIÓN A LAS CONFIGURACIONES -->
            <p class="mb-3 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
              Dado que el transistor BJT tiene tres terminales (Base, Colector y Emisor) y una red de amplificación requiere dos puertos (entrada y salida, 4 terminales en total), <strong>un terminal debe ser común a la entrada y a la salida</strong> desde el punto de vista de la señal alterna (AC). Según cuál sea este terminal compartido a masa dinámica, surgen las tres topologías fundamentales de amplificación:
            </p>

            <!-- 2. DIAGRAMA SVG TRÍPTICO DE CIRCUITOS COMPLETOS (EC, CC, BC) -->
            <div class="my-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span class="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-2 text-center">
                🔌 Esquemáticos Circuitales Completos (Polarización DC + Acoplos AC)
              </span>
              <div class="flex justify-center overflow-x-auto">
                <svg viewBox="0 0 720 270" class="w-full max-w-[720px] text-xs font-sans select-none" style="min-width: 600px;">
    
              <!-- ================= 1A. EMISOR COMÚN CON CE (DESACOPLADO) ================= -->
              <div class="p-4 rounded-xl bg-indigo-50/40 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-900/40 space-y-3">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <h6 class="text-xs font-bold text-indigo-900 dark:text-indigo-300 flex items-center gap-2">
                    <span class="px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 font-mono text-[10px]">CASO 1A</span>
                    Emisor Común con Desacoplo (con $C_E$) — Circuito Completo y Modelo Dinámico AC
                  </h6>
                  <span class="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 font-semibold">Inversor de Fase (180°) · Máxima Ganancia de Tensión</span>
                </div>

                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  <strong>Paso al modelo de pequeña señal:</strong> En alterna (AC), las fuentes DC se pasivan ($V_{CC} \\to \\text{GND}$) y los condensadores se cortocircuitan ($X_C \\approx 0$). Al cortocircuitar $C_E$, la resistencia de polarización de emisor $R_E$ queda puenteada ($R_E \\parallel 0 = 0\\,\\Omega$), conectando el <strong>terminal de Emisor (E) directamente a la masa dinámica (Tierra AC)</strong>.
                </p>

                <!-- Circuito Completo vs Modelo AC (Caso 1A con CE) -->
                <div class="p-2 rounded-lg bg-white dark:bg-slate-900 border border-indigo-100 dark:border-indigo-900/30 flex justify-center overflow-x-auto">
                  <svg viewBox="0 0 720 205" class="w-full max-w-[720px] text-xs font-sans select-none" style="min-width: 600px;">
                    <!-- ================= PANEL IZQUIERDO: CIRCUITO INICIAL CON CE ================= -->
                    <g transform="translate(10, 0)">
                      <rect x="0" y="5" width="310" height="195" rx="8" fill="#6366f1" fill-opacity="0.03" stroke="#6366f1" stroke-opacity="0.25" stroke-width="1"/>
                      <text x="155" y="19" text-anchor="middle" font-weight="bold" fill="#4338ca" font-size="9.5">1. Circuito Esquemático Completo (con C<tspan baseline-shift="sub" font-size="70%">E</tspan>)</text>

                      <!-- VCC rail -->
                      <line x1="40" y1="30" x2="160" y2="30" stroke="#475569" stroke-width="1.4"/>
                      <circle cx="105" cy="30" r="2.5" fill="#ef4444"/>
                      <text x="105" y="24" text-anchor="middle" font-weight="bold" fill="#ef4444" font-size="8.5">+V<tspan baseline-shift="sub" font-size="70%">CC</tspan></text>

                      <!-- R1 IEEE zig-zag -->
                      <line x1="50" y1="30" x2="50" y2="38" stroke="#475569" stroke-width="1.2"/>
                      <path d="M 50,38 L 50,40 L 46,43 L 54,46 L 46,49 L 54,52 L 46,55 L 50,57 L 50,59" fill="none" stroke="#6366f1" stroke-width="1.5" stroke-linejoin="round"/>
                      <text x="39" y="50" text-anchor="end" font-size="8" font-weight="bold" fill="#6366f1">R<tspan baseline-shift="sub" font-size="70%">1</tspan></text>
                      <line x1="50" y1="59" x2="50" y2="78" stroke="#475569" stroke-width="1.2"/>
                      <circle cx="50" cy="78" r="2" fill="#475569"/>

                      <!-- Entrada vi con C1 -->
                      <circle cx="12" cy="78" r="2.5" fill="#3b82f6"/>
                      <text x="12" y="90" text-anchor="middle" font-size="8" font-weight="bold" fill="#3b82f6">v<tspan baseline-shift="sub" font-size="70%">i</tspan></text>
                      <line x1="12" y1="78" x2="24" y2="78" stroke="#3b82f6" stroke-width="1.2"/>
                      <!-- C1 -->
                      <line x1="24" y1="71" x2="24" y2="85" stroke="#3b82f6" stroke-width="1.6" stroke-linecap="round"/>
                      <line x1="28" y1="71" x2="28" y2="85" stroke="#3b82f6" stroke-width="1.6" stroke-linecap="round"/>
                      <text x="26" y="67" text-anchor="middle" font-size="7.5" font-weight="bold" fill="#3b82f6">C<tspan baseline-shift="sub" font-size="70%">1</tspan></text>
                      <line x1="28" y1="78" x2="50" y2="78" stroke="#3b82f6" stroke-width="1.2"/>

                      <!-- R2 IEEE zig-zag -->
                      <path d="M 50,78 L 50,80 L 46,83 L 54,86 L 46,89 L 54,92 L 46,95 L 50,97 L 50,99" fill="none" stroke="#6366f1" stroke-width="1.5" stroke-linejoin="round"/>
                      <text x="39" y="91" text-anchor="end" font-size="8" font-weight="bold" fill="#6366f1">R<tspan baseline-shift="sub" font-size="70%">2</tspan></text>
                      <line x1="50" y1="99" x2="50" y2="155" stroke="#475569" stroke-width="1.2"/>

                      <!-- Conexión a Base -->
                      <line x1="50" y1="78" x2="92" y2="78" stroke="#475569" stroke-width="1.4"/>
                      <circle cx="92" cy="78" r="2" fill="#6366f1"/>
                      <text x="82" y="73" text-anchor="middle" font-size="7.5" font-weight="bold" fill="#6366f1">B</text>

                      <!-- Transistor NPN (IEEE 315) -->
                      <line x1="92" y1="68" x2="92" y2="88" stroke="#334155" stroke-width="2.6" stroke-linecap="round"/>
                      <line x1="92" y1="72" x2="110" y2="62" stroke="#475569" stroke-width="1.5"/>
                      <line x1="92" y1="84" x2="110" y2="94" stroke="#475569" stroke-width="1.5"/>
                      <polygon points="109,93.5 101,89 104,84" fill="#ef4444"/>

                      <!-- Colector RC y C2 -->
                      <line x1="110" y1="30" x2="110" y2="38" stroke="#475569" stroke-width="1.2"/>
                      <path d="M 110,38 L 110,40 L 106,43 L 114,46 L 106,49 L 114,52 L 106,55 L 110,57 L 110,59" fill="none" stroke="#10b981" stroke-width="1.5" stroke-linejoin="round"/>
                      <text x="122" y="50" text-anchor="start" font-size="8" font-weight="bold" fill="#10b981">R<tspan baseline-shift="sub" font-size="70%">C</tspan></text>
                      <line x1="110" y1="59" x2="110" y2="62" stroke="#475569" stroke-width="1.4"/>
                      <circle cx="110" cy="62" r="2" fill="#10b981"/>
                      <text x="117" y="65" text-anchor="start" font-size="7.5" font-weight="bold" fill="#10b981">C</text>

                      <!-- Salida C2 y Carga RL -->
                      <line x1="110" y1="62" x2="135" y2="62" stroke="#10b981" stroke-width="1.2"/>
                      <line x1="135" y1="55" x2="135" y2="69" stroke="#10b981" stroke-width="1.6" stroke-linecap="round"/>
                      <line x1="139" y1="55" x2="139" y2="69" stroke="#10b981" stroke-width="1.6" stroke-linecap="round"/>
                      <text x="137" y="51" text-anchor="middle" font-size="7.5" font-weight="bold" fill="#10b981">C<tspan baseline-shift="sub" font-size="70%">2</tspan></text>
                      <line x1="139" y1="62" x2="165" y2="62" stroke="#10b981" stroke-width="1.2"/>
                      <circle cx="165" cy="62" r="2" fill="#10b981"/>

                      <!-- RL -->
                      <path d="M 165,62 L 165,65 L 161,68 L 169,71 L 161,74 L 169,77 L 161,80 L 165,82 L 165,85" fill="none" stroke="#059669" stroke-width="1.5" stroke-linejoin="round"/>
                      <text x="175" y="75" text-anchor="start" font-size="8" font-weight="bold" fill="#059669">R<tspan baseline-shift="sub" font-size="70%">L</tspan></text>
                      <line x1="165" y1="85" x2="165" y2="155" stroke="#475569" stroke-width="1.2"/>

                      <!-- Terminal vo -->
                      <line x1="165" y1="62" x2="190" y2="62" stroke="#10b981" stroke-width="1.2"/>
                      <circle cx="190" cy="62" r="2.5" fill="#10b981"/>
                      <text x="190" y="53" text-anchor="middle" font-size="8" font-weight="bold" fill="#10b981">v<tspan baseline-shift="sub" font-size="70%">o</tspan></text>

                      <!-- Emisor con RE || CE -->
                      <line x1="110" y1="94" x2="110" y2="108" stroke="#475569" stroke-width="1.4"/>
                      <circle cx="110" cy="108" r="2" fill="#475569"/>
                      <text x="96" y="104" text-anchor="middle" font-size="7.5" font-weight="bold" fill="#475569">E</text>

                      <!-- RE a la izquierda -->
                      <line x1="110" y1="108" x2="95" y2="108" stroke="#475569" stroke-width="1.2"/>
                      <path d="M 95,108 L 95,110 L 91,113 L 99,116 L 91,119 L 99,122 L 91,125 L 95,127 L 95,130" fill="none" stroke="#a855f7" stroke-width="1.5" stroke-linejoin="round"/>
                      <text x="86" y="122" text-anchor="end" font-size="8" font-weight="bold" fill="#a855f7">R<tspan baseline-shift="sub" font-size="70%">E</tspan></text>
                      <line x1="95" y1="130" x2="95" y2="155" stroke="#475569" stroke-width="1.2"/>

                      <!-- CE a la derecha -->
                      <line x1="110" y1="108" x2="125" y2="108" stroke="#475569" stroke-width="1.2"/>
                      <line x1="125" y1="108" x2="125" y2="117" stroke="#475569" stroke-width="1.2"/>
                      <line x1="118" y1="117" x2="132" y2="117" stroke="#3b82f6" stroke-width="1.6" stroke-linecap="round"/>
                      <line x1="118" y1="121" x2="132" y2="121" stroke="#3b82f6" stroke-width="1.6" stroke-linecap="round"/>
                      <text x="138" y="121" text-anchor="start" font-size="8" font-weight="bold" fill="#3b82f6">C<tspan baseline-shift="sub" font-size="70%">E</tspan></text>
                      <line x1="125" y1="121" x2="125" y2="155" stroke="#475569" stroke-width="1.2"/>

                      <!-- Masa Común DC -->
                      <line x1="40" y1="155" x2="175" y2="155" stroke="#475569" stroke-width="1.6"/>
                      <line x1="100" y1="159" x2="115" y2="159" stroke="#475569" stroke-width="1.5"/>
                      <line x1="104" y1="162" x2="111" y2="162" stroke="#475569" stroke-width="1"/>

                      <!-- Nota al pie del panel -->
                      <rect x="15" y="170" width="280" height="22" rx="4" fill="#3b82f6" fill-opacity="0.1" stroke="#3b82f6" stroke-opacity="0.3"/>
                      <text x="155" y="184" text-anchor="middle" font-size="8" font-weight="bold" fill="#1d4ed8">⚡ En AC: C<tspan baseline-shift="sub" font-size="70%">E</tspan> cortocircuita a R<tspan baseline-shift="sub" font-size="70%">E</tspan> (Emisor va a GND)</text>
                    </g>

                    <!-- ================= FLECHA DE CONVERSIÓN CENTRAL ================= -->
                    <g transform="translate(325, 65)">
                      <rect x="0" y="0" width="55" height="70" rx="5" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
                      <text x="27" y="13" text-anchor="middle" font-size="7.5" font-weight="bold" fill="#475569">V<tspan baseline-shift="sub" font-size="70%">CC</tspan> → 0</text>
                      <text x="27" y="26" text-anchor="middle" font-size="7.5" font-weight="bold" fill="#3b82f6">C<tspan baseline-shift="sub" font-size="70%">1</tspan>,C<tspan baseline-shift="sub" font-size="70%">2</tspan> → cc</text>
                      <text x="27" y="39" text-anchor="middle" font-size="7.5" font-weight="bold" fill="#ef4444">C<tspan baseline-shift="sub" font-size="70%">E</tspan> → cc</text>
                      <line x1="10" y1="52" x2="38" y2="52" stroke="#6366f1" stroke-width="2"/>
                      <polygon points="38,48 47,52 38,56" fill="#6366f1"/>
                      <text x="27" y="64" text-anchor="middle" font-size="6.5" font-weight="bold" fill="#6366f1">MODELO AC</text>
                    </g>

                    <!-- ================= PANEL DERECHO: MODELO AC CON EMISOR A MASA ================= -->
                    <g transform="translate(385, 0)">
                      <rect x="0" y="5" width="325" height="195" rx="8" fill="#10b981" fill-opacity="0.03" stroke="#10b981" stroke-opacity="0.25" stroke-width="1"/>
                      <text x="162" y="19" text-anchor="middle" font-weight="bold" fill="#047857" font-size="9.5">2. Modelo Equivalente Dinámico AC (Emisor a Masa)</text>

                      <!-- Terminal entrada vi -->
                      <circle cx="15" cy="55" r="2.5" fill="#3b82f6"/>
                      <text x="15" y="46" text-anchor="middle" font-weight="bold" fill="#3b82f6" font-size="8.5">v<tspan baseline-shift="sub" font-size="70%">i</tspan></text>
                      <line x1="15" y1="55" x2="45" y2="55" stroke="#3b82f6" stroke-width="1.3"/>
                      <polygon points="32,52 38,55 32,58" fill="#3b82f6"/>
                      <text x="35" y="47" text-anchor="middle" font-size="7.5" font-weight="bold" fill="#3b82f6">i<tspan baseline-shift="sub" font-size="70%">i</tspan></text>

                      <!-- RB = R1 || R2 -->
                      <line x1="45" y1="55" x2="45" y2="65" stroke="#475569" stroke-width="1.3"/>
                      <rect x="39" y="65" width="12" height="24" fill="#6366f1" fill-opacity="0.2" stroke="#6366f1" stroke-width="1.4" rx="2"/>
                      <text x="33" y="79" text-anchor="end" font-weight="bold" fill="#6366f1" font-size="8">R<tspan baseline-shift="sub" font-size="70%">B</tspan></text>
                      <line x1="45" y1="89" x2="45" y2="135" stroke="#475569" stroke-width="1.3"/>

                      <!-- Hacia Base -->
                      <line x1="45" y1="55" x2="95" y2="55" stroke="#475569" stroke-width="1.3"/>
                      <polygon points="72,52 78,55 72,58" fill="#6366f1"/>
                      <text x="75" y="47" text-anchor="middle" font-size="7.5" font-weight="bold" fill="#6366f1">i<tspan baseline-shift="sub" font-size="70%">b</tspan></text>
                      <circle cx="95" cy="55" r="2.5" fill="#6366f1"/>
                      <text x="95" y="46" text-anchor="middle" font-weight="bold" fill="#6366f1" font-size="8">Base (B)</text>

                      <!-- Resistencia r_pi -->
                      <line x1="95" y1="55" x2="95" y2="65" stroke="#475569" stroke-width="1.3"/>
                      <rect x="88" y="65" width="14" height="26" fill="#3b82f6" fill-opacity="0.2" stroke="#3b82f6" stroke-width="1.4" rx="2"/>
                      <text x="82" y="80" text-anchor="end" font-weight="bold" fill="#3b82f6" font-size="8.5">r<tspan baseline-shift="sub" font-size="70%">π</tspan></text>
                      <text x="108" y="80" text-anchor="start" font-weight="bold" fill="#ef4444" font-size="7.5">+ v<tspan baseline-shift="sub" font-size="70%">be</tspan> −</text>
                      <line x1="95" y1="91" x2="95" y2="135" stroke="#475569" stroke-width="1.3"/>

                      <!-- Nodo Emisor a Masa -->
                      <circle cx="95" cy="135" r="2" fill="#475569"/>
                      <text x="95" y="148" text-anchor="middle" font-weight="bold" fill="#475569" font-size="7.5">Emisor E (GND)</text>

                      <!-- Fuente gm · vbe en Colector -->
                      <circle cx="190" cy="55" r="2.5" fill="#10b981"/>
                      <text x="190" y="46" text-anchor="middle" font-weight="bold" fill="#10b981" font-size="8">Colector (C)</text>
                      <circle cx="190" cy="78" r="12" fill="#10b981" fill-opacity="0.15" stroke="#10b981" stroke-width="1.4"/>
                      <line x1="190" y1="70" x2="190" y2="86" stroke="#10b981" stroke-width="1.6"/>
                      <polygon points="187,84 190,89 193,84" fill="#10b981"/>
                      <text x="207" y="81" text-anchor="start" font-weight="bold" fill="#10b981" font-size="8">g<tspan baseline-shift="sub" font-size="70%">m</tspan>v<tspan baseline-shift="sub" font-size="70%">be</tspan> = βi<tspan baseline-shift="sub" font-size="70%">b</tspan></text>
                      <line x1="190" y1="55" x2="190" y2="66" stroke="#475569" stroke-width="1.3"/>
                      <line x1="190" y1="90" x2="190" y2="135" stroke="#475569" stroke-width="1.3"/>

                      <!-- RC y RL en paralelo -->
                      <line x1="190" y1="55" x2="280" y2="55" stroke="#475569" stroke-width="1.3"/>

                      <!-- RC -->
                      <line x1="240" y1="55" x2="240" y2="65" stroke="#475569" stroke-width="1.3"/>
                      <rect x="234" y="65" width="12" height="24" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="1.4" rx="2"/>
                      <text x="228" y="79" text-anchor="end" font-weight="bold" fill="#10b981" font-size="8">R<tspan baseline-shift="sub" font-size="70%">C</tspan></text>
                      <line x1="240" y1="89" x2="240" y2="135" stroke="#475569" stroke-width="1.3"/>

                      <!-- RL -->
                      <line x1="275" y1="55" x2="275" y2="65" stroke="#475569" stroke-width="1.3"/>
                      <rect x="269" y="65" width="12" height="24" fill="#059669" fill-opacity="0.2" stroke="#059669" stroke-width="1.4" rx="2"/>
                      <text x="286" y="79" text-anchor="start" font-weight="bold" fill="#059669" font-size="8">R<tspan baseline-shift="sub" font-size="70%">L</tspan></text>
                      <line x1="275" y1="89" x2="275" y2="135" stroke="#475569" stroke-width="1.3"/>

                      <!-- Salida vo -->
                      <line x1="275" y1="55" x2="310" y2="55" stroke="#10b981" stroke-width="1.3"/>
                      <circle cx="310" cy="55" r="2.5" fill="#10b981"/>
                      <text x="310" y="46" text-anchor="middle" font-weight="bold" fill="#10b981" font-size="8.5">v<tspan baseline-shift="sub" font-size="70%">o</tspan></text>
                      <polygon points="292,52 298,55 292,58" fill="#10b981"/>
                      <text x="295" y="47" text-anchor="middle" font-size="7.5" font-weight="bold" fill="#10b981">i<tspan baseline-shift="sub" font-size="70%">o</tspan></text>

                      <!-- Masa AC -->
                      <line x1="25" y1="135" x2="310" y2="135" stroke="#475569" stroke-width="1.8"/>
                      <line x1="160" y1="139" x2="180" y2="139" stroke="#475569" stroke-width="1.5"/>
                      <line x1="165" y1="142" x2="175" y2="142" stroke="#475569" stroke-width="1"/>

                      <!-- Nota al pie del panel -->
                      <rect x="15" y="170" width="295" height="22" rx="4" fill="#10b981" fill-opacity="0.1" stroke="#10b981" stroke-opacity="0.3"/>
                      <text x="162" y="184" text-anchor="middle" font-size="8" font-weight="bold" fill="#047857">✅ Ganancia Máxima: A<tspan baseline-shift="sub" font-size="70%">v</tspan> ≈ −g<tspan baseline-shift="sub" font-size="70%">m</tspan>(R<tspan baseline-shift="sub" font-size="70%">C</tspan> ∥ R<tspan baseline-shift="sub" font-size="70%">L</tspan>) ≈ −(R<tspan baseline-shift="sub" font-size="70%">C</tspan> ∥ R<tspan baseline-shift="sub" font-size="70%">L</tspan>) / r<tspan baseline-shift="sub" font-size="70%">e</tspan></text>
                    </g>
                  </svg>
                </div>

                <!-- 4 Parámetros Dinámicos EC con CE -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <!-- 1. Ri -->
                  <div class="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <span class="font-bold text-indigo-700 dark:text-indigo-400 block">📥 1. Impedancia de Entrada ($R_i$)</span>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                      El emisor se encuentra conectado a masa AC mediante $C_E$. Por lo tanto, la tensión de entrada $v_i$ recae íntegramente sobre la resistencia interna de juntura $r_{\\pi} = \\beta r_e$:
                    </p>
                    <div class="p-1.5 rounded bg-slate-50 dark:bg-slate-800 text-center font-mono text-[11px]">
                      $$v_i = v_{be} = i_b r_{\\pi} \\implies R_{ib} = \\frac{v_i}{i_b} = r_{\\pi}$$
                    </div>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Incluyendo el divisor resistivo de polarización $R_B = R_1 \\parallel R_2$:
                    </p>
                    <div class="p-1 rounded bg-indigo-50 dark:bg-indigo-950/40 text-center font-bold text-indigo-900 dark:text-indigo-200 font-mono text-[11px]">
                      $$R_i = R_B \\parallel r_{\\pi} \\qquad (\\text{Moderada: } 1\\sim 5\\text{ k}\\Omega)$$
                    </div>
                  </div>

                  <!-- 2. Av -->
                  <div class="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <span class="font-bold text-emerald-700 dark:text-emerald-400 block">⚡ 2. Ganancia de Tensión ($A_v$)</span>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                      La corriente de colector $g_m v_{be}$ fluye hacia masa, drenando corriente de la carga en paralelo $R_L' = R_C \\parallel R_L$:
                    </p>
                    <div class="p-1.5 rounded bg-slate-50 dark:bg-slate-800 text-center font-mono text-[11px]">
                      $$v_o = -i_c (R_C \\parallel R_L) = -g_m v_{be} (R_C \\parallel R_L)$$
                    </div>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Dado que $v_{be} = v_i$, la ganancia de tensión resulta:
                    </p>
                    <div class="p-1 rounded bg-emerald-50 dark:bg-emerald-950/40 text-center font-bold text-emerald-900 dark:text-emerald-200 font-mono text-[11px]">
                      $$A_v = \\frac{v_o}{v_i} = -g_m (R_C \\parallel R_L) = -\\frac{\\beta (R_C \\parallel R_L)}{r_{\\pi}} \\approx -\\frac{R_C \\parallel R_L}{r_e}$$
                    </div>
                    <p class="text-[11px] text-slate-500 dark:text-slate-400">
                      <em>El signo '−' representa el desfase de $180^{\\circ}$ entre entrada y salida. Es la configuración de mayor ganancia de tensión ($|A_v| \\sim 100-300$), pero sensible a la temperatura por depender fuertemente de $r_e$.</em>
                    </p>
                  </div>

                  <!-- 3. Ai -->
                  <div class="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <span class="font-bold text-blue-700 dark:text-blue-400 block">🔄 3. Ganancia de Corriente ($A_i$)</span>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Relacionando la corriente de carga $i_o$ con la corriente entregada por la fuente $i_i$:
                    </p>
                    <div class="p-1.5 rounded bg-slate-50 dark:bg-slate-800 text-center font-mono text-[11px]">
                      $$A_i = \\frac{i_o}{i_i} = \\frac{v_o / R_L}{v_i / R_i} = A_v \\cdot \\frac{R_i}{R_L}$$
                    </div>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Resolviendo los divisores de corriente en la base y en el colector:
                    </p>
                    <div class="p-1 rounded bg-blue-50 dark:bg-blue-950/40 text-center font-bold text-blue-900 dark:text-blue-200 font-mono text-[11px]">
                      $$A_i = -\\beta \\cdot \\left(\\frac{R_B}{R_B + r_{\\pi}}\\right) \\cdot \\left(\\frac{R_C}{R_C + R_L}\\right) \\approx -\\beta$$
                    </div>
                    <p class="text-[11px] text-slate-500 dark:text-slate-400">
                      Elevada ganancia de corriente, del orden de magnitud del parámetro $\\beta$ del transistor ($50\\sim 300$).
                    </p>
                  </div>

                  <!-- 4. Ro -->
                  <div class="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <span class="font-bold text-purple-700 dark:text-purple-400 block">📤 4. Impedancia de Salida ($R_o$)</span>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Anulando la fuente de excitación ($v_s = 0$), se tiene $v_i = 0 \\implies v_{be} = 0 \\implies g_m v_{be} = 0$ (fuente dependiente abierta):
                    </p>
                    <div class="p-1.5 rounded bg-slate-50 dark:bg-slate-800 text-center font-mono text-[11px]">
                      $$R_o = \\left.\\frac{v_x}{i_x}\\right|_{v_s=0} = R_C \\parallel r_o \\approx R_C$$
                    </div>
                    <div class="p-1 rounded bg-purple-50 dark:bg-purple-950/40 text-center font-bold text-purple-900 dark:text-purple-200 font-mono text-[11px]">
                      $$R_o \\approx R_C \\qquad (\\text{Moderada/Alta: } 1\\sim 10\\text{ k}\\Omega)$$
                    </div>
                    <p class="text-[11px] text-slate-500 dark:text-slate-400">
                      Determinada casi con exclusividad por el valor de la resistencia de colector $R_C$.
                    </p>
                  </div>
                </div>
              </div>

              <!-- ================= 1B. EMISOR COMÚN SIN CE (CON RE / DEGENERACIÓN) ================= -->
              <div class="p-4 rounded-xl bg-sky-50/40 dark:bg-sky-950/20 border border-sky-200 dark:border-sky-900/40 space-y-3">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <h6 class="text-xs font-bold text-sky-900 dark:text-sky-300 flex items-center gap-2">
                    <span class="px-2 py-0.5 rounded bg-sky-100 dark:bg-sky-900/60 text-sky-700 dark:text-sky-300 font-mono text-[10px]">CASO 1B</span>
                    Emisor Común sin Desacoplo (sin $C_E$ / Degeneración de Emisor con $R_E$)
                  </h6>
                  <span class="text-[11px] font-mono text-sky-600 dark:text-sky-400 font-semibold">Inversor (180°) · Ganancia Estable · Mayor $R_i$</span>
                </div>

                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  <strong>Paso al modelo de pequeña señal:</strong> Al <strong>no existir capacitor de desacoplo $C_E$</strong>, la resistencia de emisor $R_E$ permanece activa en alterna entre el terminal de Emisor y la Tierra AC. Por el emisor confluyen la corriente de base $i_b$ y la de colector $\\beta i_b$, circulando por $R_E$ la corriente total $i_e = (1+\\beta)i_b$. Esto introduce una <strong>realimentación negativa serie de corriente</strong> que estabiliza la ganancia y eleva enormemente la impedancia de entrada.
                </p>

                <!-- Circuito Completo vs Modelo AC (Caso 1B sin CE) -->
                <div class="p-2 rounded-lg bg-white dark:bg-slate-900 border border-sky-100 dark:border-sky-900/30 flex justify-center overflow-x-auto">
                  <svg viewBox="0 0 720 215" class="w-full max-w-[720px] text-xs font-sans select-none" style="min-width: 600px;">
                    <!-- ================= PANEL IZQUIERDO: CIRCUITO COMPLETO SIN CE ================= -->
                    <g transform="translate(10, 0)">
                      <rect x="0" y="5" width="310" height="205" rx="8" fill="#0284c7" fill-opacity="0.03" stroke="#0284c7" stroke-opacity="0.25" stroke-width="1"/>
                      <text x="155" y="19" text-anchor="middle" font-weight="bold" fill="#0369a1" font-size="9.5">1. Circuito Esquemático Completo (¡SIN C<tspan baseline-shift="sub" font-size="70%">E</tspan>!)</text>

                      <!-- VCC rail -->
                      <line x1="40" y1="30" x2="160" y2="30" stroke="#475569" stroke-width="1.4"/>
                      <circle cx="105" cy="30" r="2.5" fill="#ef4444"/>
                      <text x="105" y="24" text-anchor="middle" font-weight="bold" fill="#ef4444" font-size="8.5">+V<tspan baseline-shift="sub" font-size="70%">CC</tspan></text>

                      <!-- R1 IEEE zig-zag -->
                      <line x1="50" y1="30" x2="50" y2="38" stroke="#475569" stroke-width="1.2"/>
                      <path d="M 50,38 L 50,40 L 46,43 L 54,46 L 46,49 L 54,52 L 46,55 L 50,57 L 50,59" fill="none" stroke="#0284c7" stroke-width="1.5" stroke-linejoin="round"/>
                      <text x="39" y="50" text-anchor="end" font-size="8" font-weight="bold" fill="#0284c7">R<tspan baseline-shift="sub" font-size="70%">1</tspan></text>
                      <line x1="50" y1="59" x2="50" y2="78" stroke="#475569" stroke-width="1.2"/>
                      <circle cx="50" cy="78" r="2" fill="#475569"/>

                      <!-- Entrada vi con C1 -->
                      <circle cx="12" cy="78" r="2.5" fill="#3b82f6"/>
                      <text x="12" y="90" text-anchor="middle" font-size="8" font-weight="bold" fill="#3b82f6">v<tspan baseline-shift="sub" font-size="70%">i</tspan></text>
                      <line x1="12" y1="78" x2="24" y2="78" stroke="#3b82f6" stroke-width="1.2"/>
                      <!-- C1 -->
                      <line x1="24" y1="71" x2="24" y2="85" stroke="#3b82f6" stroke-width="1.6" stroke-linecap="round"/>
                      <line x1="28" y1="71" x2="28" y2="85" stroke="#3b82f6" stroke-width="1.6" stroke-linecap="round"/>
                      <text x="26" y="67" text-anchor="middle" font-size="7.5" font-weight="bold" fill="#3b82f6">C<tspan baseline-shift="sub" font-size="70%">1</tspan></text>
                      <line x1="28" y1="78" x2="50" y2="78" stroke="#3b82f6" stroke-width="1.2"/>

                      <!-- R2 IEEE zig-zag -->
                      <path d="M 50,78 L 50,80 L 46,83 L 54,86 L 46,89 L 54,92 L 46,95 L 50,97 L 50,99" fill="none" stroke="#0284c7" stroke-width="1.5" stroke-linejoin="round"/>
                      <text x="39" y="91" text-anchor="end" font-size="8" font-weight="bold" fill="#0284c7">R<tspan baseline-shift="sub" font-size="70%">2</tspan></text>
                      <line x1="50" y1="99" x2="50" y2="160" stroke="#475569" stroke-width="1.2"/>

                      <!-- Conexión a Base -->
                      <line x1="50" y1="78" x2="92" y2="78" stroke="#475569" stroke-width="1.4"/>
                      <circle cx="92" cy="78" r="2" fill="#0284c7"/>
                      <text x="82" y="73" text-anchor="middle" font-size="7.5" font-weight="bold" fill="#0284c7">B</text>

                      <!-- Transistor NPN (IEEE 315) -->
                      <line x1="92" y1="68" x2="92" y2="88" stroke="#334155" stroke-width="2.6" stroke-linecap="round"/>
                      <line x1="92" y1="72" x2="110" y2="62" stroke="#475569" stroke-width="1.5"/>
                      <line x1="92" y1="84" x2="110" y2="94" stroke="#475569" stroke-width="1.5"/>
                      <polygon points="109,93.5 101,89 104,84" fill="#ef4444"/>

                      <!-- Colector RC y C2 -->
                      <line x1="110" y1="30" x2="110" y2="38" stroke="#475569" stroke-width="1.2"/>
                      <path d="M 110,38 L 110,40 L 106,43 L 114,46 L 106,49 L 114,52 L 106,55 L 110,57 L 110,59" fill="none" stroke="#10b981" stroke-width="1.5" stroke-linejoin="round"/>
                      <text x="122" y="50" text-anchor="start" font-size="8" font-weight="bold" fill="#10b981">R<tspan baseline-shift="sub" font-size="70%">C</tspan></text>
                      <line x1="110" y1="59" x2="110" y2="62" stroke="#475569" stroke-width="1.4"/>
                      <circle cx="110" cy="62" r="2" fill="#10b981"/>
                      <text x="117" y="65" text-anchor="start" font-size="7.5" font-weight="bold" fill="#10b981">C</text>

                      <!-- Salida C2 y Carga RL -->
                      <line x1="110" y1="62" x2="135" y2="62" stroke="#10b981" stroke-width="1.2"/>
                      <line x1="135" y1="55" x2="135" y2="69" stroke="#10b981" stroke-width="1.6" stroke-linecap="round"/>
                      <line x1="139" y1="55" x2="139" y2="69" stroke="#10b981" stroke-width="1.6" stroke-linecap="round"/>
                      <text x="137" y="51" text-anchor="middle" font-size="7.5" font-weight="bold" fill="#10b981">C<tspan baseline-shift="sub" font-size="70%">2</tspan></text>
                      <line x1="139" y1="62" x2="165" y2="62" stroke="#10b981" stroke-width="1.2"/>
                      <circle cx="165" cy="62" r="2" fill="#10b981"/>

                      <!-- RL -->
                      <path d="M 165,62 L 165,65 L 161,68 L 169,71 L 161,74 L 169,77 L 161,80 L 165,82 L 165,85" fill="none" stroke="#059669" stroke-width="1.5" stroke-linejoin="round"/>
                      <text x="175" y="75" text-anchor="start" font-size="8" font-weight="bold" fill="#059669">R<tspan baseline-shift="sub" font-size="70%">L</tspan></text>
                      <line x1="165" y1="85" x2="165" y2="160" stroke="#475569" stroke-width="1.2"/>

                      <!-- Terminal vo -->
                      <line x1="165" y1="62" x2="190" y2="62" stroke="#10b981" stroke-width="1.2"/>
                      <circle cx="190" cy="62" r="2.5" fill="#10b981"/>
                      <text x="190" y="53" text-anchor="middle" font-size="8" font-weight="bold" fill="#10b981">v<tspan baseline-shift="sub" font-size="70%">o</tspan></text>

                      <!-- Emisor ÚNICAMENTE con RE (SIN CE) -->
                      <line x1="110" y1="94" x2="110" y2="110" stroke="#475569" stroke-width="1.4"/>
                      <circle cx="110" cy="110" r="2" fill="#d97706"/>
                      <text x="119" y="112" text-anchor="start" font-size="7.5" font-weight="bold" fill="#d97706">E</text>

                      <!-- RE en rama única directa a masa -->
                      <path d="M 110,110 L 110,114 L 105,118 L 115,123 L 105,128 L 115,133 L 105,138 L 110,141 L 110,145" fill="none" stroke="#d97706" stroke-width="1.8" stroke-linejoin="round"/>
                      <text x="122" y="130" text-anchor="start" font-size="8.5" font-weight="bold" fill="#d97706">R<tspan baseline-shift="sub" font-size="70%">E</tspan></text>
                      <line x1="110" y1="145" x2="110" y2="160" stroke="#475569" stroke-width="1.4"/>

                      <!-- Masa Común DC -->
                      <line x1="40" y1="160" x2="175" y2="160" stroke="#475569" stroke-width="1.6"/>
                      <line x1="100" y1="164" x2="115" y2="164" stroke="#475569" stroke-width="1.5"/>
                      <line x1="104" y1="167" x2="111" y2="167" stroke="#475569" stroke-width="1"/>

                      <!-- Nota al pie del panel -->
                      <rect x="15" y="177" width="280" height="23" rx="4" fill="#f59e0b" fill-opacity="0.12" stroke="#f59e0b" stroke-opacity="0.4"/>
                      <text x="155" y="191" text-anchor="middle" font-size="8" font-weight="bold" fill="#b45309">⚠️ ¡Sin C<tspan baseline-shift="sub" font-size="70%">E</tspan>! R<tspan baseline-shift="sub" font-size="70%">E</tspan> queda presente en señal (Degeneración)</text>
                    </g>

                    <!-- ================= FLECHA DE CONVERSIÓN CENTRAL ================= -->
                    <g transform="translate(325, 65)">
                      <rect x="0" y="0" width="55" height="78" rx="5" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
                      <text x="27" y="13" text-anchor="middle" font-size="7.5" font-weight="bold" fill="#475569">V<tspan baseline-shift="sub" font-size="70%">CC</tspan> → 0</text>
                      <text x="27" y="26" text-anchor="middle" font-size="7.5" font-weight="bold" fill="#3b82f6">C<tspan baseline-shift="sub" font-size="70%">1</tspan>,C<tspan baseline-shift="sub" font-size="70%">2</tspan> → cc</text>
                      <text x="27" y="39" text-anchor="middle" font-size="7.5" font-weight="bold" fill="#d97706">¡NO hay C<tspan baseline-shift="sub" font-size="70%">E</tspan>!</text>
                      <text x="27" y="50" text-anchor="middle" font-size="7" font-weight="bold" fill="#d97706">R<tspan baseline-shift="sub" font-size="70%">E</tspan> en serie</text>
                      <line x1="10" y1="60" x2="38" y2="60" stroke="#0284c7" stroke-width="2"/>
                      <polygon points="38,56 47,60 38,64" fill="#0284c7"/>
                      <text x="27" y="72" text-anchor="middle" font-size="6.5" font-weight="bold" fill="#0284c7">MODELO AC</text>
                    </g>

                    <!-- ================= PANEL DERECHO: MODELO AC CON RE DE EMISOR ================= -->
                    <g transform="translate(385, 0)">
                      <rect x="0" y="5" width="325" height="205" rx="8" fill="#0284c7" fill-opacity="0.03" stroke="#0284c7" stroke-opacity="0.25" stroke-width="1"/>
                      <text x="162" y="19" text-anchor="middle" font-weight="bold" fill="#0369a1" font-size="9.5">2. Modelo Dinámico AC con Resistencia R<tspan baseline-shift="sub" font-size="70%">E</tspan> de Emisor</text>

                      <!-- Terminal entrada vi -->
                      <circle cx="15" cy="50" r="2.5" fill="#3b82f6"/>
                      <text x="15" y="41" text-anchor="middle" font-weight="bold" fill="#3b82f6" font-size="8.5">v<tspan baseline-shift="sub" font-size="70%">i</tspan></text>
                      <line x1="15" y1="50" x2="45" y2="50" stroke="#3b82f6" stroke-width="1.3"/>
                      <polygon points="32,47 38,50 32,53" fill="#3b82f6"/>
                      <text x="35" y="42" text-anchor="middle" font-size="7.5" font-weight="bold" fill="#3b82f6">i<tspan baseline-shift="sub" font-size="70%">i</tspan></text>

                      <!-- RB = R1 || R2 a masa -->
                      <line x1="45" y1="50" x2="45" y2="60" stroke="#475569" stroke-width="1.3"/>
                      <rect x="39" y="60" width="12" height="24" fill="#0284c7" fill-opacity="0.2" stroke="#0284c7" stroke-width="1.4" rx="2"/>
                      <text x="33" y="74" text-anchor="end" font-weight="bold" fill="#0284c7" font-size="8">R<tspan baseline-shift="sub" font-size="70%">B</tspan></text>
                      <line x1="45" y1="84" x2="45" y2="150" stroke="#475569" stroke-width="1.3"/>

                      <!-- Conexión a Base B -->
                      <line x1="45" y1="50" x2="85" y2="50" stroke="#475569" stroke-width="1.3"/>
                      <polygon points="68,47 74,50 68,53" fill="#0284c7"/>
                      <text x="71" y="42" text-anchor="middle" font-size="7.5" font-weight="bold" fill="#0284c7">i<tspan baseline-shift="sub" font-size="70%">b</tspan></text>
                      <circle cx="85" cy="50" r="2.5" fill="#0284c7"/>
                      <text x="85" y="41" text-anchor="middle" font-weight="bold" fill="#0284c7" font-size="8">Base (B)</text>

                      <!-- Resistencia r_pi entre Base (B) y Emisor (E) -->
                      <line x1="85" y1="50" x2="85" y2="60" stroke="#475569" stroke-width="1.3"/>
                      <rect x="78" y="60" width="14" height="24" fill="#3b82f6" fill-opacity="0.2" stroke="#3b82f6" stroke-width="1.4" rx="2"/>
                      <text x="73" y="74" text-anchor="end" font-weight="bold" fill="#3b82f6" font-size="8.5">r<tspan baseline-shift="sub" font-size="70%">π</tspan></text>
                      <text x="96" y="74" text-anchor="start" font-weight="bold" fill="#ef4444" font-size="7">+ v<tspan baseline-shift="sub" font-size="70%">be</tspan> −</text>
                      <line x1="85" y1="84" x2="85" y2="95" stroke="#475569" stroke-width="1.4"/>

                      <!-- NODO DE EMISOR (E) ELEVADO RESPECTO A TIERRA -->
                      <circle cx="85" cy="95" r="3" fill="#d97706"/>
                      <text x="70" y="98" text-anchor="end" font-weight="bold" fill="#d97706" font-size="8">Emisor (E)</text>

                      <!-- Resistencia RE entre Emisor (E) y Masa AC -->
                      <line x1="85" y1="95" x2="85" y2="105" stroke="#475569" stroke-width="1.3"/>
                      <polygon points="82,101 85,106 88,101" fill="#d97706"/>
                      <text x="76" y="112" text-anchor="end" font-weight="bold" fill="#d97706" font-size="7.5">i<tspan baseline-shift="sub" font-size="70%">e</tspan>=(1+β)i<tspan baseline-shift="sub" font-size="70%">b</tspan></text>
                      <rect x="78" y="106" width="14" height="24" fill="#d97706" fill-opacity="0.2" stroke="#d97706" stroke-width="1.4" rx="2"/>
                      <text x="98" y="120" text-anchor="start" font-weight="bold" fill="#d97706" font-size="8.5">R<tspan baseline-shift="sub" font-size="70%">E</tspan></text>
                      <line x1="85" y1="130" x2="85" y2="150" stroke="#475569" stroke-width="1.3"/>

                      <!-- Colector C y Fuente controlada -->
                      <circle cx="180" cy="50" r="2.5" fill="#10b981"/>
                      <text x="180" y="41" text-anchor="middle" font-weight="bold" fill="#10b981" font-size="8">Colector (C)</text>
                      
                      <!-- Fuente gm vbe / beta ib apuntando hacia Emisor -->
                      <line x1="180" y1="50" x2="180" y2="60" stroke="#475569" stroke-width="1.3"/>
                      <circle cx="180" cy="72" r="12" fill="#10b981" fill-opacity="0.15" stroke="#10b981" stroke-width="1.4"/>
                      <line x1="180" y1="64" x2="180" y2="80" stroke="#10b981" stroke-width="1.6"/>
                      <polygon points="177,78 180,83 183,78" fill="#10b981"/>
                      <text x="197" y="75" text-anchor="start" font-weight="bold" fill="#10b981" font-size="8">g<tspan baseline-shift="sub" font-size="70%">m</tspan>v<tspan baseline-shift="sub" font-size="70%">be</tspan> = βi<tspan baseline-shift="sub" font-size="70%">b</tspan></text>
                      
                      <!-- Retorno de la fuente dependiente al NODO DE EMISOR (E) -->
                      <line x1="180" y1="84" x2="180" y2="95" stroke="#475569" stroke-width="1.3"/>
                      <line x1="180" y1="95" x2="85" y2="95" stroke="#475569" stroke-width="1.4"/>
                      <polygon points="120,92 114,95 120,98" fill="#10b981"/>

                      <!-- Carga RC || RL desde Colector a Masa -->
                      <line x1="180" y1="50" x2="280" y2="50" stroke="#475569" stroke-width="1.3"/>

                      <!-- RC -->
                      <line x1="240" y1="50" x2="240" y2="62" stroke="#475569" stroke-width="1.3"/>
                      <rect x="234" y="62" width="12" height="24" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="1.4" rx="2"/>
                      <text x="228" y="76" text-anchor="end" font-weight="bold" fill="#10b981" font-size="8">R<tspan baseline-shift="sub" font-size="70%">C</tspan></text>
                      <line x1="240" y1="86" x2="240" y2="150" stroke="#475569" stroke-width="1.3"/>

                      <!-- RL -->
                      <line x1="275" y1="50" x2="275" y2="62" stroke="#475569" stroke-width="1.3"/>
                      <rect x="269" y="62" width="12" height="24" fill="#059669" fill-opacity="0.2" stroke="#059669" stroke-width="1.4" rx="2"/>
                      <text x="286" y="76" text-anchor="start" font-weight="bold" fill="#059669" font-size="8">R<tspan baseline-shift="sub" font-size="70%">L</tspan></text>
                      <line x1="275" y1="86" x2="275" y2="150" stroke="#475569" stroke-width="1.3"/>

                      <!-- Salida vo -->
                      <line x1="275" y1="50" x2="310" y2="50" stroke="#10b981" stroke-width="1.3"/>
                      <circle cx="310" cy="50" r="2.5" fill="#10b981"/>
                      <text x="310" y="41" text-anchor="middle" font-weight="bold" fill="#10b981" font-size="8.5">v<tspan baseline-shift="sub" font-size="70%">o</tspan></text>
                      <polygon points="292,47 298,50 292,53" fill="#10b981"/>
                      <text x="295" y="42" text-anchor="middle" font-size="7.5" font-weight="bold" fill="#10b981">i<tspan baseline-shift="sub" font-size="70%">o</tspan></text>

                      <!-- Masa AC -->
                      <line x1="25" y1="150" x2="310" y2="150" stroke="#475569" stroke-width="1.8"/>
                      <line x1="160" y1="154" x2="180" y2="154" stroke="#475569" stroke-width="1.5"/>
                      <line x1="165" y1="157" x2="175" y2="157" stroke="#475569" stroke-width="1"/>

                      <!-- Nota al pie del panel -->
                      <rect x="15" y="177" width="295" height="23" rx="4" fill="#0284c7" fill-opacity="0.1" stroke="#0284c7" stroke-opacity="0.3"/>
                      <text x="162" y="191" text-anchor="middle" font-size="8" font-weight="bold" fill="#0369a1">🛡️ Ganancia Estable: A<tspan baseline-shift="sub" font-size="70%">v</tspan> ≈ −(R<tspan baseline-shift="sub" font-size="70%">C</tspan> ∥ R<tspan baseline-shift="sub" font-size="70%">L</tspan>) / R<tspan baseline-shift="sub" font-size="70%">E</tspan> (Inmune a β y Temp.)</text>
                    </g>
                  </svg>
                </div>

                <!-- 4 Parámetros Dinámicos EC sin CE -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <!-- 1. Ri -->
                  <div class="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <span class="font-bold text-sky-700 dark:text-sky-400 block">📥 1. Impedancia de Entrada ($R_i$) — Efecto de Reflexión</span>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Planteando la ley de Kirchhoff de tensiones en la malla de base-emisor hacia masa:
                    </p>
                    <div class="p-1.5 rounded bg-slate-50 dark:bg-slate-800 text-center font-mono text-[11px]">
                      $$v_i = v_{be} + v_e = i_b r_{\\pi} + i_e R_E = i_b [r_{\\pi} + (1+\\beta) R_E]$$
                    </div>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                      La resistencia de emisor se ve reflejada en la base <strong>multiplicada por $(1+\\beta)$</strong>:
                    </p>
                    <div class="p-1 rounded bg-sky-50 dark:bg-sky-950/40 text-center font-bold text-sky-900 dark:text-sky-200 font-mono text-[11px]">
                      $$R_{ib} = \\frac{v_i}{i_b} = r_{\\pi} + (1+\\beta) R_E \\approx \\beta(r_e + R_E)$$
                      $$R_i = R_B \\parallel R_{ib} = (R_1 \\parallel R_2) \\parallel [r_{\\pi} + (1+\\beta) R_E] \\qquad (\\text{Alta: } 10\\sim 60\\text{ k}\\Omega)$$
                    </div>
                    <p class="text-[11px] text-slate-500 dark:text-slate-400">
                      <em>Efecto beneficioso:</em> Aumenta sustancialmente $R_i$, reduciendo el efecto de carga sobre la etapa o generador previo ($R_s$).
                    </p>
                  </div>

                  <!-- 2. Av -->
                  <div class="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <span class="font-bold text-emerald-700 dark:text-emerald-400 block">⚡ 2. Ganancia de Tensión ($A_v$) — Estabilizada</span>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                      La tensión de salida en colector es $v_o = -i_c (R_C \\parallel R_L) = -\\beta i_b (R_C \\parallel R_L)$. Relacionando con $v_i$:
                    </p>
                    <div class="p-1.5 rounded bg-slate-50 dark:bg-slate-800 text-center font-mono text-[11px]">
                      $$A_v = \\frac{v_o}{v_i} = \\frac{-\\beta (R_C \\parallel R_L)}{r_{\\pi} + (1+\\beta) R_E} = -\\frac{R_C \\parallel R_L}{\\frac{r_{\\pi}}{\\beta} + \\frac{1+\\beta}{\\beta} R_E} \\approx -\\frac{R_C \\parallel R_L}{r_e + R_E}$$
                    </div>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Como habitualmente $R_E \\gg r_e$ (ejemplo: $1\\text{ k}\\Omega \\gg 25\\,\\Omega$):
                    </p>
                    <div class="p-1 rounded bg-emerald-50 dark:bg-emerald-950/40 text-center font-bold text-emerald-900 dark:text-emerald-200 font-mono text-[11px]">
                      $$A_v \\approx -\\frac{R_C \\parallel R_L}{R_E} \\qquad (\\text{Inmune a } \\beta \\text{ y a la temperatura})$$
                    </div>
                    <p class="text-[11px] text-slate-500 dark:text-slate-400">
                      <em>Conclusión magistral:</em> Se sacrifica amplitud de ganancia ($|A_v| \\sim 5-20$), pero a cambio la ganancia queda fijada con altísima precisión por el cociente de dos resistencias externas pasivas. Mantiene el desfase de $180^{\\circ}$.
                    </p>
                  </div>

                  <!-- 3. Ai -->
                  <div class="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <span class="font-bold text-blue-700 dark:text-blue-400 block">🔄 3. Ganancia de Corriente ($A_i$)</span>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Mediante la fórmula general de cuadripolos y divisores de corriente:
                    </p>
                    <div class="p-1.5 rounded bg-slate-50 dark:bg-slate-800 text-center font-mono text-[11px]">
                      $$A_i = \\frac{i_o}{i_i} = A_v \\cdot \\frac{R_i}{R_L} = -\\beta \\cdot \\left(\\frac{R_B}{R_B + R_{ib}}\\right) \\cdot \\left(\\frac{R_C}{R_C + R_L}\\right)$$
                    </div>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Como $R_{ib}$ es considerablemente mayor que $r_{\\pi}$, una mayor fracción de corriente se desvía por el divisor de polarización $R_B$:
                    </p>
                    <div class="p-1 rounded bg-blue-50 dark:bg-blue-950/40 text-center font-bold text-blue-900 dark:text-blue-200 font-mono text-[11px]">
                      $$A_i \\approx -\\beta \\cdot \\frac{R_B}{R_B + \\beta R_E} \\cdot \\frac{R_C}{R_C + R_L}$$
                    </div>
                    <p class="text-[11px] text-slate-500 dark:text-slate-400">
                      Ganancia de corriente moderada-alta, reducida respecto al caso con $C_E$ por la mayor oposición de entrada de la base.
                    </p>
                  </div>

                  <!-- 4. Ro -->
                  <div class="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <span class="font-bold text-purple-700 dark:text-purple-400 block">📤 4. Impedancia de Salida ($R_o$)</span>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Pasivando la entrada ($v_s = 0$), la resistencia de salida es la resistencia de colector en paralelo con la impedancia de colector del transistor:
                    </p>
                    <div class="p-1.5 rounded bg-slate-50 dark:bg-slate-800 text-center font-mono text-[11px]">
                      $$R_{out,bjt} \\approx r_o \\left[1 + g_m (R_E \\parallel r_{\\pi})\\right] \\gg R_C$$
                    </div>
                    <div class="p-1 rounded bg-purple-50 dark:bg-purple-950/40 text-center font-bold text-purple-900 dark:text-purple-200 font-mono text-[11px]">
                      $$R_o = R_C \\parallel R_{out,bjt} \\approx R_C \\qquad (\\text{Moderada/Alta: } 1\\sim 10\\text{ k}\\Omega)$$
                    </div>
                    <p class="text-[11px] text-slate-500 dark:text-slate-400">
                      La presencia de $R_E$ aumenta la resistencia intrínseca de colector, haciendo al transistor una fuente de corriente aún más ideal, quedando $R_o \\approx R_C$.
                    </p>
                  </div>
                </div>
              </div>

              <!-- ================= TABLA COMPARATIVA: EC CON CE VS EC SIN CE ================= -->
              <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2">
                <span class="font-mono font-bold text-xs text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                  <span>⚖️</span> Comparativa Directa: Emisor Común CON $C_E$ vs. SIN $C_E$ (Degeneración)
                </span>
                <div class="overflow-x-auto">
                  <table class="w-full text-[11px] text-left border-collapse border border-slate-300 dark:border-slate-700">
                    <thead>
                      <tr class="bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white font-mono">
                        <th class="p-1.5 border border-slate-300 dark:border-slate-700">Parámetro</th>
                        <th class="p-1.5 border border-slate-300 dark:border-slate-700 text-indigo-700 dark:text-indigo-300">EC con $C_E$ (Desacoplado)</th>
                        <th class="p-1.5 border border-slate-300 dark:border-slate-700 text-sky-700 dark:text-sky-300">EC sin $C_E$ (con $R_E$)</th>
                        <th class="p-1.5 border border-slate-300 dark:border-slate-700">Efecto / Trade-off</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-200 dark:divide-slate-700 font-sans">
                      <tr>
                        <td class="p-1.5 font-bold font-mono">Impedancia Entrada ($R_i$)</td>
                        <td class="p-1.5 font-mono text-indigo-900 dark:text-indigo-200">$R_B \\parallel r_{\\pi}$ (1 ~ 5 k$\\Omega$)</td>
                        <td class="p-1.5 font-mono text-sky-900 dark:text-sky-200">$R_B \\parallel [r_{\\pi} + (1+\\beta)R_E]$ (10 ~ 60 k$\\Omega$)</td>
                        <td class="p-1.5 text-slate-600 dark:text-slate-400"><strong>Aumenta fuertemente</strong> (menor efecto de carga)</td>
                      </tr>
                      <tr>
                        <td class="p-1.5 font-bold font-mono">Ganancia Tensión ($A_v$)</td>
                        <td class="p-1.5 font-mono text-indigo-900 dark:text-indigo-200">$-g_m(R_C \\parallel R_L) \\approx -\\frac{R_C \\parallel R_L}{r_e}$ (Alta: -100 ~ -300)</td>
                        <td class="p-1.5 font-mono text-sky-900 dark:text-sky-200">$\\approx -\\frac{R_C \\parallel R_L}{R_E}$ (Baja/Media: -5 ~ -25)</td>
                        <td class="p-1.5 text-slate-600 dark:text-slate-400"><strong>Se estabiliza</strong> frente a $\\beta$ y Temp. ($T$)</td>
                      </tr>
                      <tr>
                        <td class="p-1.5 font-bold font-mono">Desfase $(\\Delta\\phi)$</td>
                        <td class="p-1.5 font-mono text-indigo-900 dark:text-indigo-200">$180^{\\circ}$ (Inversor)</td>
                        <td class="p-1.5 font-mono text-sky-900 dark:text-sky-200">$180^{\\circ}$ (Inversor)</td>
                        <td class="p-1.5 text-slate-600 dark:text-slate-400">Idéntico comportamiento de inversión</td>
                      </tr>
                      <tr>
                        <td class="p-1.5 font-bold font-mono">Linealidad y Distorsión</td>
                        <td class="p-1.5 text-slate-600 dark:text-slate-400">Menor (limitada a excursiones de $\\pm 5-10\\text{ mV}$)</td>
                        <td class="p-1.5 text-slate-600 dark:text-slate-400"><strong>Muy superior</strong> (permite excursiones de $\\pm 100-500\\text{ mV}$)</td>
                        <td class="p-1.5 text-slate-600 dark:text-slate-400">Menor distorsión armónica por realimentación</td>
                      </tr>
                      <tr>
                        <td class="p-1.5 font-bold font-mono">Ancho de Banda ($BW$)</td>
                        <td class="p-1.5 text-slate-600 dark:text-slate-400">Estándar (limitado por efecto Miller)</td>
                        <td class="p-1.5 text-slate-600 dark:text-slate-400"><strong>Mayor</strong> (producto $A_v \\cdot BW = \\text{cte}$)</td>
                        <td class="p-1.5 text-slate-600 dark:text-slate-400">Mayor respuesta en alta frecuencia</td>
                      </tr>
                      <tr>
                        <td class="p-1.5 font-bold font-mono">Impedancia Salida ($R_o$)</td>
                        <td class="p-1.5 font-mono text-indigo-900 dark:text-indigo-200">$\\approx R_C$ (1 ~ 10 k$\\Omega$)</td>
                        <td class="p-1.5 font-mono text-sky-900 dark:text-sky-200">$\\approx R_C$ (1 ~ 10 k$\\Omega$)</td>
                        <td class="p-1.5 text-slate-600 dark:text-slate-400">Sin cambios apreciables fijada por $R_C$</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <!-- ================= 2. COLECTOR COMÚN (CC) ================= -->
                  <g transform="translate(245, 0)">
                    <text x="115" y="16" text-anchor="middle" font-weight="bold" fill="#10b981" font-size="11">2. Colector Común (CC / Seguidor)</text>

                    <!-- VCC rail directo a Colector -->
                    <line x1="50" y1="28" x2="150" y2="28" stroke="#475569" stroke-width="1.5"/>
                    <circle cx="105" cy="28" r="3" fill="#10b981"/>
                    <text x="105" y="22" text-anchor="middle" font-weight="bold" fill="#10b981" font-size="9">+<tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">CC</tspan> (Masa AC)</text>

                    <!-- Divisor Base R1 y R2 (IEEE zig-zag) -->
                    <line x1="60" y1="28" x2="60" y2="38" stroke="#475569" stroke-width="1.3"/>
                    <path d="M 60,38 L 60,40 L 55.5,43.5 L 64.5,47 L 55.5,50.5 L 64.5,54 L 55.5,57.5 L 60,60 L 60,62" fill="none" stroke="#10b981" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/>
                    <text x="47" y="52" text-anchor="end" font-size="8.5" font-weight="bold" fill="#10b981"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">1</tspan></text>
                    <line x1="60" y1="62" x2="60" y2="82" stroke="#475569" stroke-width="1.3"/>
                    <circle cx="60" cy="82" r="2.5" fill="#475569"/>

                    <!-- Entrada vi con C1 -->
                    <line x1="15" y1="82" x2="28" y2="82" stroke="#3b82f6" stroke-width="1.5"/>
                    <line x1="28" y1="74" x2="28" y2="90" stroke="#3b82f6" stroke-width="1.8" stroke-linecap="round"/>
                    <line x1="32" y1="74" x2="32" y2="90" stroke="#3b82f6" stroke-width="1.8" stroke-linecap="round"/>
                    <text x="30" y="69" text-anchor="middle" font-size="8" font-weight="bold" fill="#3b82f6"><tspan font-style="italic">C</tspan><tspan font-size="75%" dy="2">1</tspan></text>
                    <line x1="32" y1="82" x2="60" y2="82" stroke="#3b82f6" stroke-width="1.5"/>
                    <circle cx="15" cy="82" r="3" fill="#3b82f6"/>
                    <text x="15" y="96" text-anchor="middle" font-weight="bold" fill="#3b82f6" font-size="9"><tspan font-style="italic">v</tspan><tspan font-size="75%" dy="2">i</tspan></text>

                    <!-- R2 (IEEE zig-zag) -->
                    <path d="M 60,82 L 60,84 L 55.5,87.5 L 64.5,91 L 55.5,94.5 L 64.5,98 L 55.5,101.5 L 60,104 L 60,106" fill="none" stroke="#10b981" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/>
                    <text x="47" y="96" text-anchor="end" font-size="8.5" font-weight="bold" fill="#10b981"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">2</tspan></text>
                    <line x1="60" y1="106" x2="60" y2="120" stroke="#475569" stroke-width="1.3"/>
                    <line x1="52" y1="120" x2="68" y2="120" stroke="#475569" stroke-width="1.8"/>
                    <line x1="55" y1="123.5" x2="65" y2="123.5" stroke="#475569" stroke-width="1.4"/>
                    <line x1="58" y1="127" x2="62" y2="127" stroke="#475569" stroke-width="1"/>

                    <line x1="60" y1="82" x2="122" y2="82" stroke="#475569" stroke-width="1.5"/>

                    <!-- Transistor NPN (Símbolo IEEE 315) -->
                    <line x1="122" y1="70" x2="122" y2="94" stroke="#334155" stroke-width="2.8" stroke-linecap="round"/>
                    <line x1="122" y1="76" x2="140" y2="66" stroke="#475569" stroke-width="1.8"/>
                    <line x1="122" y1="88" x2="140" y2="98" stroke="#475569" stroke-width="1.8"/>
                    <polygon points="139,97.5 130,93 133,88" fill="#ef4444"/>

                    <!-- Colector conectado directo a VCC (Sin RC!) -->
                    <line x1="140" y1="28" x2="140" y2="66" stroke="#475569" stroke-width="1.8"/>

                    <!-- SALIDA TOMADA DEL EMISOR -->
                    <line x1="140" y1="98" x2="140" y2="114" stroke="#475569" stroke-width="1.5"/>
                    <circle cx="140" cy="114" r="3" fill="#10b981"/>

                    <!-- Capacitor C2 y Salida vo desde Emisor -->
                    <line x1="140" y1="114" x2="168" y2="114" stroke="#10b981" stroke-width="1.5"/>
                    <line x1="168" y1="106" x2="168" y2="122" stroke="#10b981" stroke-width="1.8" stroke-linecap="round"/>
                    <line x1="172" y1="106" x2="172" y2="122" stroke="#10b981" stroke-width="1.8" stroke-linecap="round"/>
                    <text x="170" y="101" text-anchor="middle" font-size="8" font-weight="bold" fill="#10b981"><tspan font-style="italic">C</tspan><tspan font-size="75%" dy="2">2</tspan></text>
                    <line x1="172" y1="114" x2="198" y2="114" stroke="#10b981" stroke-width="1.5"/>
                    <circle cx="198" cy="114" r="3" fill="#10b981"/>
                    <text x="198" y="128" text-anchor="middle" font-weight="bold" fill="#10b981" font-size="9"><tspan font-style="italic">v</tspan><tspan font-size="75%" dy="2">o</tspan></text>

                    <!-- Resistencia RE (IEEE zig-zag) de Emisor a GND -->
                    <line x1="140" y1="114" x2="140" y2="122" stroke="#475569" stroke-width="1.3"/>
                    <path d="M 140,122 L 140,124 L 135.5,127.5 L 144.5,131 L 135.5,134.5 L 144.5,138 L 135.5,141.5 L 140,144 L 140,146" fill="none" stroke="#a855f7" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/>
                    <text x="151" y="136" text-anchor="start" font-size="8.5" font-weight="bold" fill="#a855f7"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">E</tspan></text>
                    <line x1="140" y1="146" x2="140" y2="156" stroke="#475569" stroke-width="1.3"/>
                    <line x1="132" y1="156" x2="148" y2="156" stroke="#475569" stroke-width="2"/>
                    <line x1="136" y1="159.5" x2="144" y2="159.5" stroke="#475569" stroke-width="1.5"/>
                    <line x1="138.5" y1="163" x2="141.5" y2="163" stroke="#475569" stroke-width="1"/>

                    <!-- Resumen característico -->
                    <rect x="10" y="178" width="210" height="74" rx="7" fill="#10b981" fill-opacity="0.08" stroke="#10b981" stroke-opacity="0.3"/>
                    <text x="115" y="195" text-anchor="middle" font-weight="bold" fill="#059669" font-size="9.5"><tspan font-style="italic">A</tspan><tspan font-size="75%" dy="2">v</tspan><tspan font-size="100%" dy="-2"> &lt; 1  (≈ +0.99, Sin inversión 0°)</tspan></text>
                    <text x="115" y="211" text-anchor="middle" fill="#475569" font-size="8.5"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">i</tspan><tspan font-size="100%" dy="-2"> = </tspan><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">B</tspan><tspan font-size="100%" dy="-2"> ∥ [</tspan><tspan font-style="italic">r</tspan><tspan font-size="75%" dy="2">π</tspan><tspan font-size="100%" dy="-2"> + (1+β)</tspan><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">L</tspan><tspan font-size="100%" dy="-2">'] (Altísima)</tspan></text>
                    <text x="115" y="226" text-anchor="middle" fill="#475569" font-size="8.5"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">o</tspan><tspan font-size="100%" dy="-2"> = </tspan><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">E</tspan><tspan font-size="100%" dy="-2"> ∥ [(</tspan><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">s</tspan><tspan font-size="100%" dy="-2">' + </tspan><tspan font-style="italic">r</tspan><tspan font-size="75%" dy="2">π</tspan><tspan font-size="100%" dy="-2">)/(1+β)] (Bajísima)</tspan></text>
                    <text x="115" y="242" text-anchor="middle" font-weight="bold" fill="#047857" font-size="8.5">🛡️ Adaptador de Impedancias / Buffer</text>
                  </g>

                  <!-- Divisor vertical -->
                  <line x1="475" y1="15" x2="475" y2="255" stroke="#cbd5e1" stroke-dasharray="3 3"/>

                  <!-- ================= 3. BASE COMÚN (BC) ================= -->
                  <g transform="translate(485, 0)">
                    <text x="115" y="16" text-anchor="middle" font-weight="bold" fill="#f59e0b" font-size="11">3. Base Común (BC)</text>

                    <!-- VCC rail a RC -->
                    <line x1="140" y1="28" x2="140" y2="38" stroke="#475569" stroke-width="1.3"/>
                    <circle cx="140" cy="28" r="3" fill="#f59e0b"/>
                    <text x="140" y="22" text-anchor="middle" font-weight="bold" fill="#f59e0b" font-size="9">+<tspan font-style="italic">V</tspan><tspan font-size="75%" dy="2">CC</tspan></text>

                    <!-- RC (IEEE zig-zag) y Salida en Colector -->
                    <path d="M 140,38 L 140,40 L 135.5,43.5 L 144.5,47 L 135.5,50.5 L 144.5,54 L 135.5,57.5 L 140,60 L 140,62" fill="none" stroke="#10b981" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/>
                    <text x="151" y="52" text-anchor="start" font-size="8.5" font-weight="bold" fill="#10b981"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">C</tspan></text>
                    <line x1="140" y1="62" x2="140" y2="66" stroke="#475569" stroke-width="1.5"/>
                    <circle cx="140" cy="66" r="2.5" fill="#10b981"/>

                    <!-- Capacitor C2 y Salida vo -->
                    <line x1="140" y1="66" x2="168" y2="66" stroke="#10b981" stroke-width="1.5"/>
                    <line x1="168" y1="58" x2="168" y2="74" stroke="#10b981" stroke-width="1.8" stroke-linecap="round"/>
                    <line x1="172" y1="58" x2="172" y2="74" stroke="#10b981" stroke-width="1.8" stroke-linecap="round"/>
                    <text x="170" y="53" text-anchor="middle" font-size="8" font-weight="bold" fill="#10b981"><tspan font-style="italic">C</tspan><tspan font-size="75%" dy="2">2</tspan></text>
                    <line x1="172" y1="66" x2="198" y2="66" stroke="#10b981" stroke-width="1.5"/>
                    <circle cx="198" cy="66" r="3" fill="#10b981"/>
                    <text x="198" y="80" text-anchor="middle" font-weight="bold" fill="#10b981" font-size="9"><tspan font-style="italic">v</tspan><tspan font-size="75%" dy="2">o</tspan></text>

                    <!-- Transistor NPN (Símbolo IEEE 315) -->
                    <line x1="122" y1="70" x2="122" y2="94" stroke="#334155" stroke-width="2.8" stroke-linecap="round"/>
                    <line x1="122" y1="76" x2="140" y2="66" stroke="#475569" stroke-width="1.8"/>
                    <line x1="122" y1="88" x2="140" y2="98" stroke="#475569" stroke-width="1.8"/>
                    <polygon points="139,97.5 130,93 133,88" fill="#ef4444"/>

                    <!-- Base conectada a capacitor CB a MASA (Base Común en AC) -->
                    <line x1="122" y1="82" x2="60" y2="82" stroke="#475569" stroke-width="1.5"/>
                    <circle cx="60" cy="82" r="2.5" fill="#6366f1"/>
                    <line x1="60" y1="82" x2="60" y2="92" stroke="#475569" stroke-width="1.3"/>
                    <!-- CB -->
                    <line x1="52" y1="92" x2="68" y2="92" stroke="#6366f1" stroke-width="1.8" stroke-linecap="round"/>
                    <line x1="52" y1="96" x2="68" y2="96" stroke="#6366f1" stroke-width="1.8" stroke-linecap="round"/>
                    <text x="46" y="96" text-anchor="end" font-size="8" font-weight="bold" fill="#6366f1"><tspan font-style="italic">C</tspan><tspan font-size="75%" dy="2">B</tspan></text>
                    <line x1="60" y1="96" x2="60" y2="108" stroke="#475569" stroke-width="1.3"/>
                    <line x1="52" y1="108" x2="68" y2="108" stroke="#475569" stroke-width="1.8"/>
                    <line x1="55" y1="111.5" x2="65" y2="111.5" stroke="#475569" stroke-width="1.4"/>
                    <line x1="58" y1="115" x2="62" y2="115" stroke="#475569" stroke-width="1"/>

                    <!-- ENTRADA APLICADA EN EL EMISOR -->
                    <line x1="140" y1="98" x2="140" y2="114" stroke="#475569" stroke-width="1.5"/>
                    <circle cx="140" cy="114" r="3" fill="#3b82f6"/>

                    <!-- Entrada vi con C1 al Emisor -->
                    <line x1="140" y1="114" x2="168" y2="114" stroke="#3b82f6" stroke-width="1.5"/>
                    <line x1="168" y1="106" x2="168" y2="122" stroke="#3b82f6" stroke-width="1.8" stroke-linecap="round"/>
                    <line x1="172" y1="106" x2="172" y2="122" stroke="#3b82f6" stroke-width="1.8" stroke-linecap="round"/>
                    <text x="170" y="101" text-anchor="middle" font-size="8" font-weight="bold" fill="#3b82f6"><tspan font-style="italic">C</tspan><tspan font-size="75%" dy="2">1</tspan></text>
                    <line x1="172" y1="114" x2="198" y2="114" stroke="#3b82f6" stroke-width="1.5"/>
                    <circle cx="198" cy="114" r="3" fill="#3b82f6"/>
                    <text x="198" y="128" text-anchor="middle" font-weight="bold" fill="#3b82f6" font-size="9"><tspan font-style="italic">v</tspan><tspan font-size="75%" dy="2">i</tspan></text>

                    <!-- Resistencia RE (IEEE zig-zag) de polarización -->
                    <line x1="140" y1="114" x2="140" y2="122" stroke="#475569" stroke-width="1.3"/>
                    <path d="M 140,122 L 140,124 L 135.5,127.5 L 144.5,131 L 135.5,134.5 L 144.5,138 L 135.5,141.5 L 140,144 L 140,146" fill="none" stroke="#a855f7" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/>
                    <text x="129" y="136" text-anchor="end" font-size="8.5" font-weight="bold" fill="#a855f7"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">E</tspan></text>
                    <line x1="140" y1="146" x2="140" y2="156" stroke="#475569" stroke-width="1.3"/>
                    <line x1="132" y1="156" x2="148" y2="156" stroke="#475569" stroke-width="2"/>
                    <line x1="136" y1="159.5" x2="144" y2="159.5" stroke="#475569" stroke-width="1.5"/>
                    <line x1="138.5" y1="163" x2="141.5" y2="163" stroke="#475569" stroke-width="1"/>

                    <!-- Resumen característico -->
                    <rect x="10" y="178" width="210" height="74" rx="7" fill="#f59e0b" fill-opacity="0.08" stroke="#f59e0b" stroke-opacity="0.3"/>
                    <text x="115" y="195" text-anchor="middle" font-weight="bold" fill="#d97706" font-size="9.5"><tspan font-style="italic">A</tspan><tspan font-size="75%" dy="2">v</tspan><tspan font-size="100%" dy="-2"> = +</tspan><tspan font-style="italic">g</tspan><tspan font-size="75%" dy="2">m</tspan><tspan font-size="100%" dy="-2"> (</tspan><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">C</tspan><tspan font-size="100%" dy="-2"> ∥ </tspan><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">L</tspan><tspan font-size="100%" dy="-2">) (En Fase)</tspan></text>
                    <text x="115" y="211" text-anchor="middle" fill="#475569" font-size="8.5"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">i</tspan><tspan font-size="100%" dy="-2"> = </tspan><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">E</tspan><tspan font-size="100%" dy="-2"> ∥ </tspan><tspan font-style="italic">r</tspan><tspan font-size="75%" dy="2">e</tspan><tspan font-size="100%" dy="-2"> ≈ 25 Ω (Muy baja)</tspan></text>
                    <text x="115" y="226" text-anchor="middle" fill="#475569" font-size="8.5"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">o</tspan><tspan font-size="100%" dy="-2"> = </tspan><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">C</tspan><tspan font-size="100%" dy="-2"> ∥ </tspan><tspan font-style="italic">r</tspan><tspan font-size="75%" dy="2">o</tspan><tspan font-size="100%" dy="-2"> ≈ </tspan><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">C</tspan></text>
                    <text x="115" y="242" text-anchor="middle" font-weight="bold" fill="#b45309" font-size="8.5">🚀 Radiofrecuencia (Sin Efecto Miller)</text>
                  </g>
                </svg>
              </div>
            </div>

            <!-- 3. MODELOS EQUIVALENTES AC COMPARATIVOS -->
            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Circuitos Equivalentes de Pequeña Señal en AC</h5>
            <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div class="flex justify-center overflow-x-auto">
                <svg viewBox="0 0 720 185" class="w-full max-w-[720px] text-xs font-sans select-none" style="min-width: 600px;">
                  <!-- ================= AC EC ================= -->
                  <g transform="translate(10, 0)">
                    <text x="110" y="18" text-anchor="middle" font-weight="bold" fill="#6366f1" font-size="10.5">AC: Emisor a Masa</text>
                    
                    <circle cx="20" cy="50" r="3" fill="#3b82f6"/>
                    <text x="10" y="54" font-weight="bold" fill="#3b82f6" font-size="9.5"><tspan font-style="italic">v</tspan><tspan font-size="75%" dy="2">i</tspan></text>
                    <line x1="20" y1="50" x2="40" y2="50" stroke="#475569" stroke-width="1.5"/>

                    <!-- r_pi (IEEE zig-zag horizontal) -->
                    <path d="M 40,50 L 42,50 L 45.5,45.5 L 49,54.5 L 52.5,45.5 L 56,54.5 L 59.5,45.5 L 63,54.5 L 66.5,50 L 72,50" fill="none" stroke="#3b82f6" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
                    <text x="56" y="38" text-anchor="middle" font-weight="bold" fill="#3b82f6" font-size="9"><tspan font-style="italic">r</tspan><tspan font-size="75%" dy="2">π</tspan></text>
                    <line x1="72" y1="50" x2="90" y2="50" stroke="#475569" stroke-width="1.5"/>
                    <line x1="90" y1="50" x2="90" y2="118" stroke="#475569" stroke-width="1.5"/>
                    <circle cx="90" cy="118" r="2.5" fill="#475569"/>

                    <!-- Fuente dependiente de corriente gm · vbe (IEEE Rombo / Diamond) -->
                    <polygon points="130,37 143,50 130,63 117,50" fill="none" stroke="#10b981" stroke-width="1.8" stroke-linejoin="round"/>
                    <line x1="130" y1="43" x2="130" y2="57" stroke="#10b981" stroke-width="1.6"/>
                    <polygon points="130,59 126,53 134,53" fill="#10b981"/>
                    <text x="130" y="75" text-anchor="middle" font-weight="bold" fill="#10b981" font-size="8.5"><tspan font-style="italic">g</tspan><tspan font-size="75%" dy="2">m</tspan><tspan font-size="100%" dy="-2"> · </tspan><tspan font-style="italic">v</tspan><tspan font-size="75%" dy="2">i</tspan></text>
                    <line x1="130" y1="63" x2="130" y2="118" stroke="#475569" stroke-width="1.5"/>
                    <circle cx="130" cy="118" r="2.5" fill="#475569"/>

                    <!-- Carga equivalente R_C || R_L (IEEE zig-zag vertical) -->
                    <line x1="130" y1="37" x2="185" y2="37" stroke="#475569" stroke-width="1.5"/>
                    <circle cx="185" cy="37" r="2.5" fill="#10b981"/>
                    <line x1="185" y1="37" x2="185" y2="46" stroke="#475569" stroke-width="1.5"/>
                    <path d="M 185,46 L 185,48 L 180.5,51.5 L 189.5,55 L 180.5,58.5 L 189.5,62 L 180.5,65.5 L 189.5,69 L 185,72 L 185,76" fill="none" stroke="#10b981" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
                    <text x="198" y="64" text-anchor="start" font-weight="bold" fill="#10b981" font-size="8.5"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">C</tspan><tspan font-size="100%" dy="-2"> ∥ </tspan><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">L</tspan></text>
                    <line x1="185" y1="76" x2="185" y2="118" stroke="#475569" stroke-width="1.5"/>
                    <circle cx="185" cy="118" r="2.5" fill="#475569"/>

                    <!-- Terminal de salida vo -->
                    <circle cx="210" cy="37" r="3" fill="#10b981"/>
                    <text x="210" y="28" text-anchor="middle" font-weight="bold" fill="#10b981" font-size="9.5"><tspan font-style="italic">v</tspan><tspan font-size="75%" dy="2">o</tspan></text>
                    <line x1="185" y1="37" x2="210" y2="37" stroke="#10b981" stroke-width="1.5"/>

                    <!-- Bus de masa IEEE -->
                    <line x1="20" y1="118" x2="210" y2="118" stroke="#475569" stroke-width="1.8"/>
                    <line x1="102" y1="122" x2="118" y2="122" stroke="#475569" stroke-width="1.8"/>
                    <line x1="106" y1="125.5" x2="114" y2="125.5" stroke="#475569" stroke-width="1.3"/>
                    <line x1="108.5" y1="129" x2="111.5" y2="129" stroke="#475569" stroke-width="1"/>

                    <text x="110" y="146" text-anchor="middle" font-bold fill="#ef4444" font-size="9"><tspan font-style="italic">v</tspan><tspan font-size="75%" dy="2">o</tspan><tspan font-size="100%" dy="-2"> = −</tspan><tspan font-style="italic">g</tspan><tspan font-size="75%" dy="2">m</tspan><tspan font-size="100%" dy="-2"> (</tspan><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">C</tspan><tspan font-size="100%" dy="-2"> ∥ </tspan><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">L</tspan><tspan font-size="100%" dy="-2">) </tspan><tspan font-style="italic">v</tspan><tspan font-size="75%" dy="2">i</tspan></text>
                    <text x="110" y="161" text-anchor="middle" fill="#64748b" font-size="8">Signo '−' = Desfase 180°</text>
                  </g>

                  <!-- Divisor vertical -->
                  <line x1="240" y1="15" x2="240" y2="175" stroke="#cbd5e1" stroke-dasharray="3 3"/>

                  <!-- ================= AC CC ================= -->
                  <g transform="translate(250, 0)">
                    <text x="110" y="18" text-anchor="middle" font-weight="bold" fill="#10b981" font-size="10.5">AC: Colector a Masa</text>

                    <circle cx="20" cy="45" r="3" fill="#3b82f6"/>
                    <text x="10" y="49" font-weight="bold" fill="#3b82f6" font-size="9.5"><tspan font-style="italic">v</tspan><tspan font-size="75%" dy="2">i</tspan></text>
                    <line x1="20" y1="45" x2="46" y2="45" stroke="#475569" stroke-width="1.5"/>

                    <!-- Divisor resistivo r_pi (IEEE zig-zag horizontal) -->
                    <path d="M 46,45 L 48,45 L 51.5,40.5 L 55,49.5 L 58.5,40.5 L 62,49.5 L 65.5,40.5 L 69,49.5 L 72.5,45 L 78,45" fill="none" stroke="#3b82f6" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
                    <text x="62" y="33" text-anchor="middle" font-weight="bold" fill="#3b82f6" font-size="9"><tspan font-style="italic">r</tspan><tspan font-size="75%" dy="2">π</tspan></text>

                    <line x1="78" y1="45" x2="110" y2="45" stroke="#475569" stroke-width="1.5"/>
                    <circle cx="110" cy="45" r="3" fill="#10b981"/>
                    <line x1="110" y1="45" x2="190" y2="45" stroke="#10b981" stroke-width="1.5"/>
                    <circle cx="190" cy="45" r="3" fill="#10b981"/>
                    <text x="190" y="35" text-anchor="middle" font-weight="bold" fill="#10b981" font-size="9.5"><tspan font-style="italic">v</tspan><tspan font-size="75%" dy="2">o</tspan></text>

                    <!-- Resistencia reflejada al emisor (IEEE zig-zag vertical) -->
                    <line x1="110" y1="45" x2="110" y2="52" stroke="#475569" stroke-width="1.5"/>
                    <path d="M 110,52 L 110,54 L 105.5,57.5 L 114.5,61 L 105.5,64.5 L 114.5,68 L 105.5,71.5 L 114.5,75 L 110,78 L 110,82" fill="none" stroke="#10b981" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
                    <text x="122" y="69" text-anchor="start" font-weight="bold" fill="#10b981" font-size="8.5">(1+β) <tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">L</tspan><tspan font-size="100%" dy="-2">'</tspan></text>
                    <line x1="110" y1="82" x2="110" y2="118" stroke="#475569" stroke-width="1.5"/>
                    <circle cx="110" cy="118" r="2.5" fill="#475569"/>

                    <!-- Bus de masa IEEE -->
                    <line x1="20" y1="118" x2="200" y2="118" stroke="#475569" stroke-width="1.8"/>
                    <line x1="102" y1="122" x2="118" y2="122" stroke="#475569" stroke-width="1.8"/>
                    <line x1="106" y1="125.5" x2="114" y2="125.5" stroke="#475569" stroke-width="1.3"/>
                    <line x1="108.5" y1="129" x2="111.5" y2="129" stroke="#475569" stroke-width="1"/>

                    <text x="110" y="146" text-anchor="middle" font-bold fill="#059669" font-size="9"><tspan font-style="italic">v</tspan><tspan font-size="75%" dy="2">o</tspan><tspan font-size="100%" dy="-2"> ≈ </tspan><tspan font-style="italic">v</tspan><tspan font-size="75%" dy="2">i</tspan><tspan font-size="100%" dy="-2">  (</tspan><tspan font-style="italic">A</tspan><tspan font-size="75%" dy="2">v</tspan><tspan font-size="100%" dy="-2"> ≈ +0.99)</tspan></text>
                    <text x="110" y="161" text-anchor="middle" fill="#64748b" font-size="8">La tensión sigue a la entrada</text>
                  </g>

                  <!-- Divisor vertical -->
                  <line x1="480" y1="15" x2="480" y2="175" stroke="#cbd5e1" stroke-dasharray="3 3"/>

                  <!-- ================= AC BC ================= -->
                  <g transform="translate(490, 0)">
                    <text x="110" y="18" text-anchor="middle" font-weight="bold" fill="#f59e0b" font-size="10.5">AC: Base a Masa</text>

                    <circle cx="20" cy="50" r="3" fill="#3b82f6"/>
                    <text x="10" y="54" font-weight="bold" fill="#3b82f6" font-size="9.5"><tspan font-style="italic">v</tspan><tspan font-size="75%" dy="2">i</tspan></text>
                    <line x1="20" y1="50" x2="50" y2="50" stroke="#475569" stroke-width="1.5"/>
                    <circle cx="50" cy="50" r="2.8" fill="#3b82f6"/>

                    <!-- r_e a masa (IEEE zig-zag vertical) -->
                    <line x1="50" y1="50" x2="50" y2="56" stroke="#475569" stroke-width="1.5"/>
                    <path d="M 50,56 L 50,58 L 45.5,61.5 L 54.5,65 L 45.5,68.5 L 54.5,72 L 45.5,75.5 L 54.5,79 L 50,82 L 50,86" fill="none" stroke="#3b82f6" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
                    <text x="37" y="73" text-anchor="end" font-weight="bold" fill="#3b82f6" font-size="9"><tspan font-style="italic">r</tspan><tspan font-size="75%" dy="2">e</tspan></text>
                    <line x1="50" y1="86" x2="50" y2="118" stroke="#475569" stroke-width="1.5"/>
                    <circle cx="50" cy="118" r="2.5" fill="#475569"/>

                    <!-- Conexión a fuente dependiente -->
                    <line x1="50" y1="50" x2="110" y2="50" stroke="#475569" stroke-width="1.5"/>
                    <line x1="110" y1="50" x2="110" y2="63" stroke="#475569" stroke-width="1.5"/>

                    <!-- Fuente dependiente hacia salida (IEEE Rombo / Diamond) -->
                    <polygon points="110,37 123,50 110,63 97,50" fill="none" stroke="#f59e0b" stroke-width="1.8" stroke-linejoin="round"/>
                    <line x1="110" y1="57" x2="110" y2="43" stroke="#f59e0b" stroke-width="1.6"/>
                    <polygon points="110,41 106,47 114,47" fill="#f59e0b"/>
                    <text x="110" y="75" text-anchor="middle" font-weight="bold" fill="#d97706" font-size="8.5"><tspan font-style="italic">g</tspan><tspan font-size="75%" dy="2">m</tspan><tspan font-size="100%" dy="-2"> · </tspan><tspan font-style="italic">v</tspan><tspan font-size="75%" dy="2">i</tspan></text>

                    <!-- Resistencia de carga (IEEE zig-zag vertical) -->
                    <line x1="110" y1="37" x2="170" y2="37" stroke="#475569" stroke-width="1.5"/>
                    <circle cx="170" cy="37" r="2.5" fill="#10b981"/>
                    <line x1="170" y1="37" x2="170" y2="46" stroke="#475569" stroke-width="1.5"/>
                    <path d="M 170,46 L 170,48 L 165.5,51.5 L 174.5,55 L 165.5,58.5 L 174.5,62 L 165.5,65.5 L 174.5,69 L 170,72 L 170,76" fill="none" stroke="#10b981" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
                    <text x="183" y="64" text-anchor="start" font-weight="bold" fill="#10b981" font-size="8.5"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">C</tspan><tspan font-size="100%" dy="-2"> ∥ </tspan><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">L</tspan></text>
                    <line x1="170" y1="76" x2="170" y2="118" stroke="#475569" stroke-width="1.5"/>
                    <circle cx="170" cy="118" r="2.5" fill="#475569"/>

                    <!-- Terminal de salida vo -->
                    <circle cx="200" cy="37" r="3" fill="#10b981"/>
                    <text x="200" y="28" text-anchor="middle" font-weight="bold" fill="#10b981" font-size="9.5"><tspan font-style="italic">v</tspan><tspan font-size="75%" dy="2">o</tspan></text>
                    <line x1="170" y1="37" x2="200" y2="37" stroke="#10b981" stroke-width="1.5"/>

                    <!-- Bus de masa IEEE -->
                    <line x1="20" y1="118" x2="200" y2="118" stroke="#475569" stroke-width="1.8"/>
                    <line x1="102" y1="122" x2="118" y2="122" stroke="#475569" stroke-width="1.8"/>
                    <line x1="106" y1="125.5" x2="114" y2="125.5" stroke="#475569" stroke-width="1.3"/>
                    <line x1="108.5" y1="129" x2="111.5" y2="129" stroke="#475569" stroke-width="1"/>

                    <text x="110" y="146" text-anchor="middle" font-bold fill="#d97706" font-size="9"><tspan font-style="italic">v</tspan><tspan font-size="75%" dy="2">o</tspan><tspan font-size="100%" dy="-2"> = +</tspan><tspan font-style="italic">g</tspan><tspan font-size="75%" dy="2">m</tspan><tspan font-size="100%" dy="-2"> (</tspan><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">C</tspan><tspan font-size="100%" dy="-2"> ∥ </tspan><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">L</tspan><tspan font-size="100%" dy="-2">) </tspan><tspan font-style="italic">v</tspan><tspan font-size="75%" dy="2">i</tspan></text>
                    <text x="110" y="161" text-anchor="middle" fill="#64748b" font-size="8">En Fase (0°) · Sin Miller</text>
                  </g>
                </svg>
              </div>
            </div>

            <!-- 4. TABLA COMPARATIVA MAESTRA -->
            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Tabla Comparativa Maestra de Parámetros Dinámicos</h5>
            <div class="overflow-x-auto my-3">
              <table class="w-full text-xs text-left border-collapse border border-slate-200 dark:border-slate-800">
                <thead>
                  <tr class="bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 font-mono">
                    <th class="p-2 border border-slate-200 dark:border-slate-800">Configuración</th>
                    <th class="p-2 border border-slate-200 dark:border-slate-800">Ganancia Tensión $A_v$</th>
                    <th class="p-2 border border-slate-200 dark:border-slate-800">Ganancia Corriente $A_i$</th>
                    <th class="p-2 border border-slate-200 dark:border-slate-800">Impedancia Entrada $R_i$</th>
                    <th class="p-2 border border-slate-200 dark:border-slate-800">Impedancia Salida $R_o$</th>
                    <th class="p-2 border border-slate-200 dark:border-slate-800">Desfase</th>
                    <th class="p-2 border border-slate-200 dark:border-slate-800">Aplicación Predominante</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 dark:divide-slate-800 font-mono text-[11px]">
                  <tr class="bg-indigo-500/5">
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-bold text-indigo-600 dark:text-indigo-400">Emisor Común (EC) con $C_E$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$-g_m (R_C \\parallel R_L)$ (Alta, $50-500$)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$\\approx -\\beta$ (Alta)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$R_B \\parallel r_{\\pi}$ (Media, $1-5\\text{ k}\\Omega$)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$R_C \\parallel r_o \\approx R_C$ (Media)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans text-red-500 font-bold">$180^{\\circ}$ (Invierte)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">Etapa amplificadora de tensión y potencia principal de propósito general.</td>
                  </tr>
                  <tr class="bg-indigo-500/5">
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-bold text-indigo-600 dark:text-indigo-400">Emisor Común (EC) sin $C_E$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$-\\frac{R_C \\parallel R_L}{R_E + r_e} \\approx -\\frac{R_C}{R_E}$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$\\approx -\\beta$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$R_B \\parallel [r_{\\pi} + (1+\\beta)R_E]$ (Alta)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$R_C$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans text-red-500 font-bold">$180^{\\circ}$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">Ganancia linealizada inmune a variaciones térmicas y dispersión de transistores.</td>
                  </tr>
                  <tr class="bg-emerald-500/5">
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-bold text-emerald-600 dark:text-emerald-400">Colector Común (CC)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800"><span class="font-bold text-emerald-600 dark:text-emerald-400">$A_v < 1$</span> (Siempre $< 1$, $\\approx 0.98 \\sim 0.99$)<br>$\\frac{R_L'}{r_e + R_L'} = \\frac{(1+\\beta)R_L'}{r_{\\pi} + (1+\\beta)R_L'}$</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$\\approx 1 + \\beta$ (Muy alta)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$R_B \\parallel [r_{\\pi} + (1+\\beta)R_L']$ (Muy alta, $50-500\\text{ k}\\Omega$)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$R_E \\parallel \\left( \\frac{R_s' + r_{\\pi}}{1+\\beta} \\right)$ (Muy baja, $\\sim 5-25\\,\\Omega$)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans text-emerald-500 font-bold">$0^{\\circ}$ (En Fase)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">Buffer / Seguidor de tensión ($A_v < 1$ pero $A_i \\gg 1$); adaptación entre fuente de alta $Z$ y carga de baja $Z$.</td>
                  </tr>
                  <tr class="bg-amber-500/5">
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-bold text-amber-600 dark:text-amber-400">Base Común (BC)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$+g_m (R_C \\parallel R_L)$ (Alta, idéntica a EC)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$\\approx -\\alpha \\approx -0.99$ ($< 1$)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$R_E \\parallel r_e \\approx r_e$ (Muy baja, $\\sim 20-50\\,\\Omega$)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$R_C$ (Alta)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans text-emerald-500 font-bold">$0^{\\circ}$ (En Fase)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">Preamplificador de RF, sintonizadores UHF/VHF y circuitos cascode (sin efecto Miller).</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- 5. GUÍA PRÁCTICA DE CÁLCULO: DEDUCCIÓN PASO A PASO DE PARÁMETROS DINÁMICOS -->
            <div class="mt-6 mb-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div class="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
                <span class="text-xl">📐</span>
                <div>
                  <h5 class="text-sm font-bold text-slate-900 dark:text-white">
                    Guía de Cálculo: Deducción Rigurosa de $A_v$, $A_i$, $R_i$ y $R_o$ en cada Configuración
                  </h5>
                  <p class="text-[11px] text-slate-500 dark:text-slate-400">
                    Procedimiento analítico con circuitos equivalentes de pequeña señal en corriente alterna (AC).
                  </p>
                </div>
              </div>

              <!-- METODOLOGÍA GENERAL DE DOS PUERTOS -->
              <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/70 text-xs">
                <strong class="text-slate-800 dark:text-slate-200 block mb-1.5 flex items-center gap-1.5">
                  <span class="w-2 h-2 rounded-full bg-indigo-500 inline-block"></span>
                  Metodología Universal de Pequeña Señal (Modelo de Cuadripolo)
                </strong>
                <p class="text-slate-600 dark:text-slate-400 mb-2 leading-relaxed">
                  Para obtener las ecuaciones dinámicas: <strong>1)</strong> Cortocircuitar condensadores de acoplo y desacoplo ($X_C \\approx 0$). <strong>2)</strong> Pasivar fuentes DC ($V_{CC} \\to \\text{GND}$). <strong>3)</strong> Sustituir el BJT por su modelo lineal ($r_{\\pi} = \\beta r_e$, $g_m = I_{CQ}/V_T \\approx 40 \\cdot I_{CQ}$, $r_e = V_T/I_{EQ} \\approx 25\\,\\text{mV}/I_E$).
                </p>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center font-mono text-[11px]">
                  <div class="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <span class="text-indigo-600 dark:text-indigo-400 font-bold block">1. Impedancia Entrada</span>
                    $$R_i = \\left.\\frac{v_i}{i_i}\\right|_{\\text{con } R_L}$$
                  </div>
                  <div class="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <span class="text-emerald-600 dark:text-emerald-400 font-bold block">2. Ganancia Tensión</span>
                    $$A_v = \\frac{v_o}{v_i}$$
                  </div>
                  <div class="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <span class="text-blue-600 dark:text-blue-400 font-bold block">3. Ganancia Corriente</span>
                    $$A_i = \\frac{i_o}{i_i} = A_v \\frac{R_i}{R_L}$$
                  </div>
                  <div class="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <span class="text-purple-600 dark:text-purple-400 font-bold block">4. Impedancia Salida</span>
                    $$R_o = \\left.\\frac{v_x}{i_x}\\right|_{v_s=0,\\, R_L \\to \\infty}$$
                  </div>
                </div>
              </div>

              <!-- ================= 1. EMISOR COMÚN (EC) ================= -->
              <div class="p-4 rounded-xl bg-indigo-50/40 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-900/40 space-y-3">
                <div class="flex items-center justify-between">
                  <h6 class="text-xs font-bold text-indigo-900 dark:text-indigo-300 flex items-center gap-2">
                    <span class="px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 font-mono text-[10px]">CASO 1</span>
                    Emisor Común (EC) — Circuito y Deducción de Parámetros
                  </h6>
                  <span class="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 font-semibold">Inversor de Fase (180°) · Alta Ganancia</span>
                </div>

                <!-- Circuito AC de EC -->
                <div class="p-2 rounded-lg bg-white dark:bg-slate-900 border border-indigo-100 dark:border-indigo-900/30 flex justify-center overflow-x-auto">
                  <svg viewBox="0 0 640 165" class="w-full max-w-[640px] text-xs font-sans select-none" style="min-width: 540px;">
                    <!-- Terminal entrada vi -->
                    <circle cx="25" cy="45" r="3" fill="#3b82f6"/>
                    <text x="15" y="49" font-weight="bold" fill="#3b82f6" font-size="10"><tspan font-style="italic">v</tspan><tspan font-size="75%" dy="2">i</tspan></text>
                    <line x1="25" y1="45" x2="60" y2="45" stroke="#3b82f6" stroke-width="1.5"/>
                    <polygon points="48,42 56,45 48,48" fill="#3b82f6"/>
                    <text x="50" y="38" text-anchor="middle" font-weight="bold" fill="#3b82f6" font-size="8.5"><tspan font-style="italic">i</tspan><tspan font-size="75%" dy="1.5">i</tspan></text>

                    <!-- Resistencia RB a masa -->
                    <line x1="60" y1="45" x2="60" y2="55" stroke="#475569" stroke-width="1.5"/>
                    <rect x="52" y="55" width="16" height="26" fill="#6366f1" fill-opacity="0.2" stroke="#6366f1" stroke-width="1.5" rx="2"/>
                    <text x="44" y="72" text-anchor="end" font-weight="bold" fill="#6366f1" font-size="9"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">B</tspan></text>
                    <line x1="60" y1="81" x2="60" y2="120" stroke="#475569" stroke-width="1.5"/>

                    <!-- Conexión hacia la base -->
                    <line x1="60" y1="45" x2="130" y2="45" stroke="#475569" stroke-width="1.5"/>
                    <polygon points="100,42 108,45 100,48" fill="#6366f1"/>
                    <text x="104" y="38" text-anchor="middle" font-weight="bold" fill="#6366f1" font-size="8.5"><tspan font-style="italic">i</tspan><tspan font-size="75%" dy="1.5">b</tspan></text>
                    <circle cx="130" cy="45" r="3" fill="#6366f1"/>
                    <text x="130" y="35" text-anchor="middle" font-weight="bold" fill="#6366f1" font-size="9">Base (B)</text>

                    <!-- Resistencia r_pi a Emisor (Masa) -->
                    <line x1="130" y1="45" x2="130" y2="55" stroke="#475569" stroke-width="1.5"/>
                    <rect x="121" y="55" width="18" height="28" fill="#3b82f6" fill-opacity="0.2" stroke="#3b82f6" stroke-width="1.5" rx="2"/>
                    <text x="112" y="73" text-anchor="end" font-weight="bold" fill="#3b82f6" font-size="9.5"><tspan font-style="italic">r</tspan><tspan font-size="75%" dy="2">π</tspan></text>
                    <text x="145" y="73" text-anchor="start" font-weight="bold" fill="#ef4444" font-size="8.5">+ <tspan font-style="italic">v</tspan><tspan font-size="75%" dy="1.5">be</tspan> −</text>
                    <line x1="130" y1="83" x2="130" y2="120" stroke="#475569" stroke-width="1.5"/>

                    <!-- Nodo de Emisor a masa -->
                    <circle cx="130" cy="120" r="2.5" fill="#475569"/>
                    <text x="130" y="138" text-anchor="middle" font-weight="bold" fill="#475569" font-size="8.5">Emisor (E = Masa AC con <tspan font-style="italic">C</tspan><tspan font-size="75%" dy="1.5">E</tspan>)</text>

                    <!-- Fuente dependiente gm · vbe en Colector -->
                    <circle cx="280" cy="45" r="3" fill="#10b981"/>
                    <text x="280" y="35" text-anchor="middle" font-weight="bold" fill="#10b981" font-size="9">Colector (C)</text>
                    <circle cx="280" cy="72" r="14" fill="#10b981" fill-opacity="0.15" stroke="#10b981" stroke-width="1.5"/>
                    <line x1="280" y1="63" x2="280" y2="81" stroke="#10b981" stroke-width="1.8"/>
                    <polygon points="276,79 280,85 284,79" fill="#10b981"/>
                    <text x="302" y="76" text-anchor="start" font-weight="bold" fill="#10b981" font-size="9"><tspan font-style="italic">g</tspan><tspan font-size="75%" dy="1.5">m</tspan> <tspan font-style="italic">v</tspan><tspan font-size="75%" dy="1.5">be</tspan> = β <tspan font-style="italic">i</tspan><tspan font-size="75%" dy="1.5">b</tspan></text>
                    <line x1="280" y1="45" x2="280" y2="58" stroke="#475569" stroke-width="1.5"/>
                    <line x1="280" y1="86" x2="280" y2="120" stroke="#475569" stroke-width="1.5"/>

                    <!-- Carga RC en paralelo con RL -->
                    <line x1="280" y1="45" x2="440" y2="45" stroke="#475569" stroke-width="1.5"/>
                    <!-- RC -->
                    <line x1="390" y1="45" x2="390" y2="55" stroke="#475569" stroke-width="1.5"/>
                    <rect x="382" y="55" width="16" height="28" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="1.5" rx="2"/>
                    <text x="374" y="73" text-anchor="end" font-weight="bold" fill="#10b981" font-size="9"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">C</tspan></text>
                    <line x1="390" y1="83" x2="390" y2="120" stroke="#475569" stroke-width="1.5"/>

                    <!-- RL -->
                    <line x1="450" y1="45" x2="450" y2="55" stroke="#475569" stroke-width="1.5"/>
                    <rect x="442" y="55" width="16" height="28" fill="#059669" fill-opacity="0.2" stroke="#059669" stroke-width="1.5" rx="2"/>
                    <text x="466" y="73" text-anchor="start" font-weight="bold" fill="#059669" font-size="9"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">L</tspan></text>
                    <line x1="450" y1="83" x2="450" y2="120" stroke="#475569" stroke-width="1.5"/>

                    <!-- Terminal vo -->
                    <line x1="450" y1="45" x2="520" y2="45" stroke="#10b981" stroke-width="1.5"/>
                    <circle cx="520" cy="45" r="3" fill="#10b981"/>
                    <text x="532" y="49" font-weight="bold" fill="#10b981" font-size="10"><tspan font-style="italic">v</tspan><tspan font-size="75%" dy="2">o</tspan></text>
                    <polygon points="480,42 488,45 480,48" fill="#10b981"/>
                    <text x="484" y="38" text-anchor="middle" font-weight="bold" fill="#10b981" font-size="8.5"><tspan font-style="italic">i</tspan><tspan font-size="75%" dy="1.5">o</tspan></text>

                    <!-- Línea de Masa Común AC -->
                    <line x1="30" y1="120" x2="520" y2="120" stroke="#475569" stroke-width="2"/>
                    <line x1="260" y1="124" x2="290" y2="124" stroke="#475569" stroke-width="2"/>
                    <line x1="268" y1="127" x2="282" y2="127" stroke="#475569" stroke-width="1.5"/>
                  </svg>
                </div>

                <!-- 4 Parámetros Dinámicos EC -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <!-- 1. Ri -->
                  <div class="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <span class="font-bold text-indigo-700 dark:text-indigo-400 block">📥 1. Impedancia de Entrada ($R_i$)</span>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                      La tensión $v_i$ cae íntegramente sobre la resistencia interna de base $r_{\\pi} = \\beta r_e$:
                    </p>
                    <div class="p-1.5 rounded bg-slate-50 dark:bg-slate-800 text-center font-mono text-[11px]">
                      $$v_i = v_{be} = i_b r_{\\pi} \\implies R_{ib} = \\frac{v_i}{i_b} = r_{\\pi}$$
                    </div>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Incluyendo el divisor de polarización $R_B = R_1 \\parallel R_2$:
                    </p>
                    <div class="p-1 rounded bg-indigo-50 dark:bg-indigo-950/40 text-center font-bold text-indigo-900 dark:text-indigo-200 font-mono text-[11px]">
                      $$R_i = R_B \\parallel r_{\\pi} \\qquad \\text{(Con } C_E\\text{, media: } 1\\sim 5\\text{ k}\\Omega\\text{)}$$
                    </div>
                    <p class="text-[11px] text-slate-500 dark:text-slate-400">
                      <em>Variante sin $C_E$:</em> $R_i = R_B \\parallel [r_{\\pi} + (1+\\beta)R_E] \\approx R_B \\parallel [\\beta(r_e + R_E)]$.
                    </p>
                  </div>

                  <!-- 2. Av -->
                  <div class="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <span class="font-bold text-emerald-700 dark:text-emerald-400 block">⚡ 2. Ganancia de Tensión ($A_v$)</span>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                      La corriente de colector $g_m v_{be}$ fluye hacia masa, drenando corriente de la carga $R_L' = R_C \\parallel R_L$:
                    </p>
                    <div class="p-1.5 rounded bg-slate-50 dark:bg-slate-800 text-center font-mono text-[11px]">
                      $$v_o = -i_c (R_C \\parallel R_L) = -g_m v_{be} (R_C \\parallel R_L)$$
                    </div>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Como $v_{be} = v_i$, dividiendo directamente:
                    </p>
                    <div class="p-1 rounded bg-emerald-50 dark:bg-emerald-950/40 text-center font-bold text-emerald-900 dark:text-emerald-200 font-mono text-[11px]">
                      $$A_v = \\frac{v_o}{v_i} = -g_m (R_C \\parallel R_L) = -\\frac{\\beta (R_C \\parallel R_L)}{r_{\\pi}} \\approx -\\frac{R_C \\parallel R_L}{r_e}$$
                    </div>
                    <p class="text-[11px] text-slate-500 dark:text-slate-400">
                      <em>El signo '−' indica desfase de $180^{\\circ}$. Sin $C_E$: $A_v \\approx -\\frac{R_C \\parallel R_L}{R_E}$.</em>
                    </p>
                  </div>

                  <!-- 3. Ai -->
                  <div class="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <span class="font-bold text-blue-700 dark:text-blue-400 block">🔄 3. Ganancia de Corriente ($A_i$)</span>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                      A través de la relación fundamental entre ganancias y resistencias de puerto:
                    </p>
                    <div class="p-1.5 rounded bg-slate-50 dark:bg-slate-800 text-center font-mono text-[11px]">
                      $$A_i = \\frac{i_o}{i_i} = \\frac{v_o / R_L}{v_i / R_i} = A_v \\cdot \\frac{R_i}{R_L}$$
                    </div>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Analizando los divisores de corriente en base ($i_b$) y colector ($i_o$):
                    </p>
                    <div class="p-1 rounded bg-blue-50 dark:bg-blue-950/40 text-center font-bold text-blue-900 dark:text-blue-200 font-mono text-[11px]">
                      $$A_i = -\\beta \\cdot \\left(\\frac{R_B}{R_B + r_{\\pi}}\\right) \\cdot \\left(\\frac{R_C}{R_C + R_L}\\right) \\approx -\\beta$$
                    </div>
                    <p class="text-[11px] text-slate-500 dark:text-slate-400">
                      Elevada ganancia de corriente (orden de magnitud $\\beta \\approx 100\\sim 300$).
                    </p>
                  </div>

                  <!-- 4. Ro -->
                  <div class="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <span class="font-bold text-purple-700 dark:text-purple-400 block">📤 4. Impedancia de Salida ($R_o$)</span>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Se anula la fuente de entrada ($v_s = 0$). Como no hay señal en base:
                    </p>
                    <div class="p-1.5 rounded bg-slate-50 dark:bg-slate-800 text-center font-mono text-[11px]">
                      $$v_i = 0 \\implies v_{be} = 0 \\implies g_m v_{be} = 0 \\quad \\text{(Fuente abierta)}$$
                    </div>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Aplicando una fuente de prueba $v_x$ en colector (sin carga $R_L$):
                    </p>
                    <div class="p-1 rounded bg-purple-50 dark:bg-purple-950/40 text-center font-bold text-purple-900 dark:text-purple-200 font-mono text-[11px]">
                      $$R_o = \\left.\\frac{v_x}{i_x}\\right|_{v_s=0} = R_C \\parallel r_o \\approx R_C \\qquad \\text{(Moderada, } 1\\sim 10\\text{ k}\\Omega\\text{)}$$
                    </div>
                    <p class="text-[11px] text-slate-500 dark:text-slate-400">
                      Determinada casi exclusivamente por la resistencia de colector $R_C$.
                    </p>
                  </div>
                </div>
              </div>

              <!-- ================= 2. COLECTOR COMÚN (CC) ================= -->
              <div class="p-4 rounded-xl bg-emerald-50/40 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 space-y-3">
                <div class="flex items-center justify-between">
                  <h6 class="text-xs font-bold text-emerald-900 dark:text-emerald-300 flex items-center gap-2">
                    <span class="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 font-mono text-[10px]">CASO 2</span>
                    Colector Común (CC / Seguidor de Emisor) — Circuito y Deducción
                  </h6>
                  <span class="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">Buffer · $A_v < 1$ (Sin desfase) · $R_i$ Alta, $R_o$ Baja</span>
                </div>

                <!-- Circuito AC de CC con fuente de prueba Ro -->
                <div class="p-2 rounded-lg bg-white dark:bg-slate-900 border border-emerald-100 dark:border-emerald-900/30 flex justify-center overflow-x-auto">
                  <svg viewBox="0 0 640 170" class="w-full max-w-[640px] text-xs font-sans select-none" style="min-width: 540px;">
                    <!-- Lado Izquierdo: Circuito normal de señal -->
                    <g transform="translate(0, 0)">
                      <text x="140" y="16" text-anchor="middle" font-weight="bold" fill="#059669" font-size="10">Cálculo de <tspan font-style="italic">R</tspan><tspan font-size="75%" dy="1.5">i</tspan> y <tspan font-style="italic">A</tspan><tspan font-size="75%" dy="1.5">v</tspan> (Entrada en Base, Salida en Emisor)</text>
                      
                      <!-- Entrada vi -->
                      <circle cx="25" cy="45" r="3" fill="#3b82f6"/>
                      <text x="15" y="49" font-weight="bold" fill="#3b82f6" font-size="10"><tspan font-style="italic">v</tspan><tspan font-size="75%" dy="2">i</tspan></text>
                      <line x1="25" y1="45" x2="65" y2="45" stroke="#3b82f6" stroke-width="1.5"/>
                      
                      <!-- r_pi -->
                      <rect x="65" y="37" width="22" height="16" fill="#3b82f6" fill-opacity="0.2" stroke="#3b82f6" stroke-width="1.5" rx="2"/>
                      <text x="76" y="30" text-anchor="middle" font-weight="bold" fill="#3b82f6" font-size="9"><tspan font-style="italic">r</tspan><tspan font-size="75%" dy="2">π</tspan></text>
                      <polygon points="50,42 58,45 50,48" fill="#3b82f6"/>
                      <text x="54" y="38" text-anchor="middle" font-weight="bold" fill="#3b82f6" font-size="8"><tspan font-style="italic">i</tspan><tspan font-size="75%" dy="1.5">b</tspan></text>

                      <!-- Nodo de Emisor -->
                      <line x1="87" y1="45" x2="135" y2="45" stroke="#475569" stroke-width="1.5"/>
                      <circle cx="135" cy="45" r="3" fill="#10b981"/>
                      <text x="135" y="35" text-anchor="middle" font-weight="bold" fill="#10b981" font-size="9">Emisor</text>

                      <!-- Corriente de emisor hacia abajo -->
                      <line x1="135" y1="45" x2="135" y2="60" stroke="#475569" stroke-width="1.5"/>
                      <polygon points="132,54 135,62 138,54" fill="#10b981"/>
                      <text x="145" y="58" font-weight="bold" fill="#10b981" font-size="8"><tspan font-style="italic">i</tspan><tspan font-size="75%" dy="1.5">e</tspan> = (1+β)<tspan font-style="italic">i</tspan><tspan font-size="75%" dy="1.5">b</tspan></text>

                      <!-- Carga equivalente RL' = RE || RL -->
                      <rect x="124" y="62" width="22" height="32" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="1.5" rx="2"/>
                      <text x="154" y="80" text-anchor="start" font-weight="bold" fill="#10b981" font-size="8.5"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">L</tspan><tspan font-size="100%" dy="-2">' = </tspan><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">E</tspan><tspan font-size="100%" dy="-2"> ∥ </tspan><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">L</tspan></text>
                      <line x1="135" y1="94" x2="135" y2="125" stroke="#475569" stroke-width="1.5"/>

                      <!-- Salida vo tomada en emisor -->
                      <line x1="135" y1="45" x2="220" y2="45" stroke="#10b981" stroke-width="1.5"/>
                      <circle cx="220" cy="45" r="3" fill="#10b981"/>
                      <text x="232" y="49" font-weight="bold" fill="#10b981" font-size="10"><tspan font-style="italic">v</tspan><tspan font-size="75%" dy="2">o</tspan></text>
                      <text x="180" y="38" text-anchor="middle" font-weight="bold" fill="#059669" font-size="8.5"><tspan font-style="italic">v</tspan><tspan font-size="75%" dy="1.5">o</tspan> = (1+β)<tspan font-style="italic">i</tspan><tspan font-size="75%" dy="1.5">b</tspan><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="1.5">L</tspan>'</text>

                      <!-- Masa AC -->
                      <line x1="20" y1="125" x2="240" y2="125" stroke="#475569" stroke-width="2"/>
                      <line x1="120" y1="129" x2="150" y2="129" stroke="#475569" stroke-width="2"/>
                    </g>

                    <!-- Divisor central -->
                    <line x1="270" y1="15" x2="270" y2="150" stroke="#cbd5e1" stroke-dasharray="3 3"/>

                    <!-- Lado Derecho: Test de Impedancia de Salida Ro -->
                    <g transform="translate(285, 0)">
                      <text x="170" y="16" text-anchor="middle" font-weight="bold" fill="#7c3aed" font-size="10">Cálculo de <tspan font-style="italic">R</tspan><tspan font-size="75%" dy="1.5">o</tspan> (Generador de Prueba <tspan font-style="italic">v</tspan><tspan font-size="75%" dy="1.5">x</tspan> en Emisor)</text>

                      <!-- Resistencia de fuente Rs' en base a masa (vs = 0) -->
                      <line x1="25" y1="125" x2="25" y2="85" stroke="#475569" stroke-width="1.5"/>
                      <rect x="17" y="55" width="16" height="30" fill="#6366f1" fill-opacity="0.2" stroke="#6366f1" stroke-width="1.5" rx="2"/>
                      <text x="9" y="73" text-anchor="end" font-weight="bold" fill="#6366f1" font-size="8.5"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="1.5">s</tspan>' = <tspan font-style="italic">R</tspan><tspan font-size="75%" dy="1.5">s</tspan>∥<tspan font-style="italic">R</tspan><tspan font-size="75%" dy="1.5">B</tspan></text>
                      <line x1="25" y1="55" x2="25" y2="45" stroke="#475569" stroke-width="1.5"/>
                      <line x1="25" y1="45" x2="65" y2="45" stroke="#475569" stroke-width="1.5"/>

                      <!-- r_pi -->
                      <rect x="65" y="37" width="22" height="16" fill="#3b82f6" fill-opacity="0.2" stroke="#3b82f6" stroke-width="1.5" rx="2"/>
                      <text x="76" y="30" text-anchor="middle" font-weight="bold" fill="#3b82f6" font-size="9"><tspan font-style="italic">r</tspan><tspan font-size="75%" dy="2">π</tspan></text>
                      <line x1="87" y1="45" x2="140" y2="45" stroke="#475569" stroke-width="1.5"/>

                      <!-- Nodo Emisor con fuente de prueba vx -->
                      <circle cx="140" cy="45" r="3" fill="#7c3aed"/>
                      <text x="140" y="35" text-anchor="middle" font-weight="bold" fill="#7c3aed" font-size="9">Emisor</text>

                      <!-- Resistencia RE de polarización a masa -->
                      <line x1="140" y1="45" x2="140" y2="60" stroke="#475569" stroke-width="1.5"/>
                      <rect x="132" y="60" width="16" height="30" fill="#a855f7" fill-opacity="0.2" stroke="#a855f7" stroke-width="1.5" rx="2"/>
                      <text x="124" y="77" text-anchor="end" font-weight="bold" fill="#a855f7" font-size="8.5"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="1.5">E</tspan></text>
                      <line x1="140" y1="90" x2="140" y2="125" stroke="#475569" stroke-width="1.5"/>

                      <!-- Fuente vx conectada inyectando ix -->
                      <line x1="140" y1="45" x2="220" y2="45" stroke="#7c3aed" stroke-width="1.5"/>
                      <circle cx="240" cy="45" r="14" fill="#7c3aed" fill-opacity="0.15" stroke="#7c3aed" stroke-width="1.5"/>
                      <text x="240" y="49" text-anchor="middle" font-weight="bold" fill="#7c3aed" font-size="9.5"><tspan font-style="italic">v</tspan><tspan font-size="75%" dy="2">x</tspan></text>
                      <polygon points="185,42 175,45 185,48" fill="#7c3aed"/>
                      <text x="180" y="38" text-anchor="middle" font-weight="bold" fill="#7c3aed" font-size="8.5"><tspan font-style="italic">i</tspan><tspan font-size="75%" dy="1.5">x</tspan></text>
                      <line x1="240" y1="59" x2="240" y2="125" stroke="#475569" stroke-width="1.5"/>

                      <!-- Masa AC -->
                      <line x1="10" y1="125" x2="310" y2="125" stroke="#475569" stroke-width="2"/>
                      <line x1="140" y1="129" x2="170" y2="129" stroke="#475569" stroke-width="2"/>
                      <text x="170" y="148" text-anchor="middle" font-mono font-bold fill="#7c3aed" font-size="8.5"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="1.5">o</tspan> = <tspan font-style="italic">R</tspan><tspan font-size="75%" dy="1.5">E</tspan> ∥ [(<tspan font-style="italic">R</tspan><tspan font-size="75%" dy="1.5">s</tspan>' + <tspan font-style="italic">r</tspan><tspan font-size="75%" dy="1.5">π</tspan>)/(1+β)]</text>
                    </g>
                  </svg>
                </div>

                <!-- 4 Parámetros Dinámicos CC -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <!-- 1. Ri -->
                  <div class="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <span class="font-bold text-emerald-700 dark:text-emerald-400 block">📥 1. Impedancia de Entrada ($R_i$) — Reflexión a Base</span>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Escribiendo la ecuación de malla entre base y masa pasando por el emisor ($i_e = (1+\\beta)i_b$):
                    </p>
                    <div class="p-1.5 rounded bg-slate-50 dark:bg-slate-800 text-center font-mono text-[11px]">
                      $$v_i = i_b r_{\\pi} + i_e R_L' = i_b [r_{\\pi} + (1+\\beta)R_L']$$
                    </div>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                      La carga del emisor se multiplica por $(1+\\beta)$ vista desde la base:
                    </p>
                    <div class="p-1 rounded bg-emerald-50 dark:bg-emerald-950/40 text-center font-bold text-emerald-900 dark:text-emerald-200 font-mono text-[11px]">
                      $$R_i = R_B \\parallel [r_{\\pi} + (1+\\beta)(R_E \\parallel R_L)] \\qquad \\text{(Altísima: } 50\\sim 500\\text{ k}\\Omega\\text{)}$$
                    </div>
                    <p class="text-[11px] text-slate-500 dark:text-slate-400">
                      <em>Efecto Buffer:</em> No carga a la etapa previa (evita caída de tensión en $R_s$).
                    </p>
                  </div>

                  <!-- 2. Av -->
                  <div class="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <span class="font-bold text-emerald-700 dark:text-emerald-400 block">⚡ 2. Ganancia de Tensión ($A_v$) — Seguidor</span>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                      La tensión de salida es la tensión de emisor $v_o = (1+\\beta) i_b R_L'$:
                    </p>
                    <div class="p-1.5 rounded bg-slate-50 dark:bg-slate-800 text-center font-mono text-[11px]">
                      $$A_v = \\frac{v_o}{v_i} = \\frac{(1+\\beta) R_L'}{r_{\\pi} + (1+\\beta) R_L'} = \\frac{R_L'}{\\frac{r_{\\pi}}{1+\\beta} + R_L'} = \\frac{R_L'}{r_e + R_L'}$$
                    </div>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Como habitualmente $R_L' = R_E \\parallel R_L \\gg r_e$ (ej. $1\\text{ k}\\Omega \\gg 25\\,\\Omega$):
                    </p>
                    <div class="p-1 rounded bg-emerald-50 dark:bg-emerald-950/40 text-center font-bold text-emerald-900 dark:text-emerald-200 font-mono text-[11px]">
                      $$A_v < 1 \\qquad (A_v \\approx +0.98 \\sim +0.99 \\approx 1, \\quad \\text{Fase } 0^{\\circ})$$
                    </div>
                    <p class="text-[11px] text-slate-500 dark:text-slate-400">
                      La salida copia fielmente a la entrada en amplitud y fase (sin inversión).
                    </p>
                  </div>

                  <!-- 3. Ai -->
                  <div class="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <span class="font-bold text-blue-700 dark:text-blue-400 block">🔄 3. Ganancia de Corriente ($A_i$) — Gran Amplificación</span>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Aunque no amplifica tensión ($A_v < 1$), amplifica enormemente la corriente:
                    </p>
                    <div class="p-1.5 rounded bg-slate-50 dark:bg-slate-800 text-center font-mono text-[11px]">
                      $$A_i = \\frac{i_o}{i_i} = A_v \\cdot \\frac{R_i}{R_L} \\approx 1 \\cdot \\frac{R_i}{R_L} \\gg 1$$
                    </div>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                      A nivel de transistor intrínseco, la corriente de emisor es $(1+\\beta)i_b$:
                    </p>
                    <div class="p-1 rounded bg-blue-50 dark:bg-blue-950/40 text-center font-bold text-blue-900 dark:text-blue-200 font-mono text-[11px]">
                      $$A_i \\approx +(1+\\beta) \\qquad (\\text{Típicamente } 50\\sim 200)$$
                    </div>
                    <p class="text-[11px] text-slate-500 dark:text-slate-400">
                      Capaz de suministrar gran corriente a cargas de baja impedancia sin distorsión.
                    </p>
                  </div>

                  <!-- 4. Ro -->
                  <div class="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <span class="font-bold text-purple-700 dark:text-purple-400 block">📤 4. Impedancia de Salida ($R_o$) — Reflexión a Emisor</span>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Con $v_s = 0$, la base ve $R_s' = R_s \\parallel R_B$. Inyectando $v_x$ en emisor, la corriente de base es $i_b = -v_x / (R_s' + r_{\\pi})$. Por LCK:
                    </p>
                    <div class="p-1.5 rounded bg-slate-50 dark:bg-slate-800 text-center font-mono text-[11px]">
                      $$i_x = \\frac{v_x}{R_E} - (1+\\beta)i_b = v_x \\left[ \\frac{1}{R_E} + \\frac{1+\\beta}{R_s' + r_{\\pi}} \\right]$$
                    </div>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Toda impedancia conectada en la base se ve <strong>dividida entre $(1+\\beta)$</strong>:
                    </p>
                    <div class="p-1 rounded bg-purple-50 dark:bg-purple-950/40 text-center font-bold text-purple-900 dark:text-purple-200 font-mono text-[11px]">
                      $$R_o = R_E \\parallel \\left( \\frac{R_s' + r_{\\pi}}{1+\\beta} \\right) = R_E \\parallel \\left( r_e + \\frac{R_s'}{1+\\beta} \\right) \\quad (\\text{Bajísima: } 5\\sim 25\\,\\Omega)$$
                    </div>
                    <p class="text-[11px] text-slate-500 dark:text-slate-400">
                      Ideal como etapa de salida para manejar altavoces o cables coaxiales.
                    </p>
                  </div>
                </div>
              </div>

              <!-- ================= 3. BASE COMÚN (BC) ================= -->
              <div class="p-4 rounded-xl bg-amber-50/40 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 space-y-3">
                <div class="flex items-center justify-between">
                  <h6 class="text-xs font-bold text-amber-900 dark:text-amber-300 flex items-center gap-2">
                    <span class="px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900/60 text-amber-700 dark:text-amber-300 font-mono text-[10px]">CASO 3</span>
                    Base Común (BC) — Circuito y Deducción de Parámetros
                  </h6>
                  <span class="text-[11px] font-mono text-amber-600 dark:text-amber-400 font-semibold">Radiofrecuencia (Sin Miller) · $R_i$ Muy Baja · $A_v$ Alta (No invierte)</span>
                </div>

                <!-- Circuito AC de BC (Modelo en T) -->
                <div class="p-2 rounded-lg bg-white dark:bg-slate-900 border border-amber-100 dark:border-amber-900/30 flex justify-center overflow-x-auto">
                  <svg viewBox="0 0 640 165" class="w-full max-w-[640px] text-xs font-sans select-none" style="min-width: 540px;">
                    <!-- Entrada en Emisor vi -->
                    <circle cx="25" cy="45" r="3" fill="#3b82f6"/>
                    <text x="15" y="49" font-weight="bold" fill="#3b82f6" font-size="10"><tspan font-style="italic">v</tspan><tspan font-size="75%" dy="2">i</tspan></text>
                    <line x1="25" y1="45" x2="60" y2="45" stroke="#3b82f6" stroke-width="1.5"/>
                    <polygon points="48,42 56,45 48,48" fill="#3b82f6"/>
                    <text x="52" y="38" text-anchor="middle" font-weight="bold" fill="#3b82f6" font-size="8.5"><tspan font-style="italic">i</tspan><tspan font-size="75%" dy="1.5">e</tspan></text>

                    <!-- RE de polarización a masa -->
                    <line x1="60" y1="45" x2="60" y2="55" stroke="#475569" stroke-width="1.5"/>
                    <rect x="52" y="55" width="16" height="26" fill="#a855f7" fill-opacity="0.2" stroke="#a855f7" stroke-width="1.5" rx="2"/>
                    <text x="44" y="72" text-anchor="end" font-weight="bold" fill="#a855f7" font-size="9"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">E</tspan></text>
                    <line x1="60" y1="81" x2="60" y2="120" stroke="#475569" stroke-width="1.5"/>

                    <!-- Nodo de Emisor -->
                    <line x1="60" y1="45" x2="130" y2="45" stroke="#475569" stroke-width="1.5"/>
                    <circle cx="130" cy="45" r="3" fill="#f59e0b"/>
                    <text x="130" y="35" text-anchor="middle" font-weight="bold" fill="#f59e0b" font-size="9">Emisor</text>

                    <!-- Resistencia interna re hacia Base (Masa) -->
                    <line x1="130" y1="45" x2="130" y2="55" stroke="#475569" stroke-width="1.5"/>
                    <rect x="122" y="55" width="16" height="28" fill="#3b82f6" fill-opacity="0.2" stroke="#3b82f6" stroke-width="1.5" rx="2"/>
                    <text x="114" y="73" text-anchor="end" font-weight="bold" fill="#3b82f6" font-size="9.5"><tspan font-style="italic">r</tspan><tspan font-size="75%" dy="2">e</tspan></text>
                    <line x1="130" y1="83" x2="130" y2="120" stroke="#475569" stroke-width="1.5"/>

                    <!-- Nodo Base a Masa AC (con CB) -->
                    <circle cx="130" cy="120" r="3" fill="#6366f1"/>
                    <text x="130" y="138" text-anchor="middle" font-weight="bold" fill="#6366f1" font-size="8.5">Base (Masa AC con <tspan font-style="italic">C</tspan><tspan font-size="75%" dy="1.5">B</tspan>)</text>

                    <!-- Fuente dependiente de Colector alpha · ie hacia arriba -->
                    <circle cx="280" cy="45" r="3" fill="#10b981"/>
                    <text x="280" y="35" text-anchor="middle" font-weight="bold" fill="#10b981" font-size="9">Colector</text>
                    <circle cx="280" cy="72" r="14" fill="#f59e0b" fill-opacity="0.15" stroke="#f59e0b" stroke-width="1.5"/>
                    <line x1="280" y1="81" x2="280" y2="63" stroke="#f59e0b" stroke-width="1.8"/>
                    <polygon points="276,65 280,59 284,65" fill="#f59e0b"/>
                    <text x="302" y="76" text-anchor="start" font-weight="bold" fill="#d97706" font-size="9">α <tspan font-style="italic">i</tspan><tspan font-size="75%" dy="1.5">e</tspan> = <tspan font-style="italic">g</tspan><tspan font-size="75%" dy="1.5">m</tspan> <tspan font-style="italic">v</tspan><tspan font-size="75%" dy="1.5">i</tspan></text>
                    <line x1="280" y1="45" x2="280" y2="58" stroke="#475569" stroke-width="1.5"/>
                    <line x1="280" y1="86" x2="280" y2="120" stroke="#475569" stroke-width="1.5"/>

                    <!-- Carga RC en paralelo con RL -->
                    <line x1="280" y1="45" x2="440" y2="45" stroke="#475569" stroke-width="1.5"/>
                    <!-- RC -->
                    <line x1="390" y1="45" x2="390" y2="55" stroke="#475569" stroke-width="1.5"/>
                    <rect x="382" y="55" width="16" height="28" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="1.5" rx="2"/>
                    <text x="374" y="73" text-anchor="end" font-weight="bold" fill="#10b981" font-size="9"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">C</tspan></text>
                    <line x1="390" y1="83" x2="390" y2="120" stroke="#475569" stroke-width="1.5"/>

                    <!-- RL -->
                    <line x1="450" y1="45" x2="450" y2="55" stroke="#475569" stroke-width="1.5"/>
                    <rect x="442" y="55" width="16" height="28" fill="#059669" fill-opacity="0.2" stroke="#059669" stroke-width="1.5" rx="2"/>
                    <text x="466" y="73" text-anchor="start" font-weight="bold" fill="#059669" font-size="9"><tspan font-style="italic">R</tspan><tspan font-size="75%" dy="2">L</tspan></text>
                    <line x1="450" y1="83" x2="450" y2="120" stroke="#475569" stroke-width="1.5"/>

                    <!-- Salida vo -->
                    <line x1="450" y1="45" x2="520" y2="45" stroke="#10b981" stroke-width="1.5"/>
                    <circle cx="520" cy="45" r="3" fill="#10b981"/>
                    <text x="532" y="49" font-weight="bold" fill="#10b981" font-size="10"><tspan font-style="italic">v</tspan><tspan font-size="75%" dy="2">o</tspan></text>
                    <text x="485" y="38" text-anchor="middle" font-weight="bold" fill="#059669" font-size="8.5"><tspan font-style="italic">v</tspan><tspan font-size="75%" dy="1.5">o</tspan> &gt; 0 (En fase)</text>

                    <!-- Masa Común -->
                    <line x1="30" y1="120" x2="520" y2="120" stroke="#475569" stroke-width="2"/>
                    <line x1="260" y1="124" x2="290" y2="124" stroke="#475569" stroke-width="2"/>
                    <line x1="268" y1="127" x2="282" y2="127" stroke="#475569" stroke-width="1.5"/>
                  </svg>
                </div>

                <!-- 4 Parámetros Dinámicos BC -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <!-- 1. Ri -->
                  <div class="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <span class="font-bold text-amber-700 dark:text-amber-400 block">📥 1. Impedancia de Entrada ($R_i$) — Muy Baja</span>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Con la base a masa ($v_b = 0$), la señal de entrada se aplica al emisor ($v_e = v_i$). Por tanto, $v_{be} = -v_i$:
                    </p>
                    <div class="p-1.5 rounded bg-slate-50 dark:bg-slate-800 text-center font-mono text-[11px]">
                      $$i_e = \\frac{-v_{be}}{r_e} = \\frac{v_i}{r_e} \\implies R_{ie} = \\frac{v_i}{i_e} = r_e = \\frac{V_T}{I_{EQ}}$$
                    </div>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                      En paralelo con la resistencia de polarización $R_E$:
                    </p>
                    <div class="p-1 rounded bg-amber-50 dark:bg-amber-950/40 text-center font-bold text-amber-900 dark:text-amber-200 font-mono text-[11px]">
                      $$R_i = R_E \\parallel r_e \\approx r_e \\qquad (\\text{Muy baja: } 15\\sim 50\\,\\Omega)$$
                    </div>
                    <p class="text-[11px] text-slate-500 dark:text-slate-400">
                      Excelente adaptación a fuentes de baja impedancia (antenas de RF de 50 o 75 $\\Omega$).
                    </p>
                  </div>

                  <!-- 2. Av -->
                  <div class="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <span class="font-bold text-amber-700 dark:text-amber-400 block">⚡ 2. Ganancia de Tensión ($A_v$) — En Fase ($0^{\\circ}$)</span>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                      La corriente de colector $\\alpha i_e$ entra hacia el nodo de salida, desarrollando tensión positiva sobre $R_L' = R_C \\parallel R_L$:
                    </p>
                    <div class="p-1.5 rounded bg-slate-50 dark:bg-slate-800 text-center font-mono text-[11px]">
                      $$v_o = +\\alpha i_e (R_C \\parallel R_L) = +\\alpha \\left(\\frac{v_i}{r_e}\\right)(R_C \\parallel R_L)$$
                    </div>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Dividiendo entre $v_i$, con $\\alpha \\approx 1$ y $g_m = \\alpha / r_e$:
                    </p>
                    <div class="p-1 rounded bg-amber-50 dark:bg-amber-950/40 text-center font-bold text-amber-900 dark:text-amber-200 font-mono text-[11px]">
                      $$A_v = \\frac{v_o}{v_i} = +\\frac{\\alpha (R_C \\parallel R_L)}{r_e} \\approx +g_m (R_C \\parallel R_L) \\quad (\\text{Fase } 0^{\\circ})$$
                    </div>
                    <p class="text-[11px] text-slate-500 dark:text-slate-400">
                      <strong>Misma magnitud elevada que el EC</strong>, pero con fase directa (no invierte).
                    </p>
                  </div>

                  <!-- 3. Ai -->
                  <div class="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <span class="font-bold text-blue-700 dark:text-blue-400 block">🔄 3. Ganancia de Corriente ($A_i$) — Sin Amplificación</span>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Casi toda la corriente inyectada por el emisor es recolectada por el colector:
                    </p>
                    <div class="p-1.5 rounded bg-slate-50 dark:bg-slate-800 text-center font-mono text-[11px]">
                      $$i_c = \\alpha i_e = \\frac{\\beta}{\\beta + 1} i_e \\approx 0.99 \\cdot i_e$$
                    </div>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Teniendo en cuenta el sentido de salida hacia la carga:
                    </p>
                    <div class="p-1 rounded bg-blue-50 dark:bg-blue-950/40 text-center font-bold text-blue-900 dark:text-blue-200 font-mono text-[11px]">
                      $$A_i = \\frac{i_o}{i_i} \\approx -\\alpha \\approx -0.99 \\approx -1 \\qquad (|A_i| \\le 1)$$
                    </div>
                    <p class="text-[11px] text-slate-500 dark:text-slate-400">
                      No amplifica corriente; funciona como un <strong>buffer de corriente</strong> ideal.
                    </p>
                  </div>

                  <!-- 4. Ro -->
                  <div class="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <span class="font-bold text-purple-700 dark:text-purple-400 block">📤 4. Impedancia de Salida ($R_o$) — Alta</span>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Apagando la fuente de entrada ($v_s = 0$), $v_i = 0 \\implies i_e = 0 \\implies \\alpha i_e = 0$:
                    </p>
                    <div class="p-1.5 rounded bg-slate-50 dark:bg-slate-800 text-center font-mono text-[11px]">
                      $$i_e = 0 \\implies \\alpha i_e = 0 \\quad \\text{(Fuente dependiente abierta)}$$
                    </div>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Mirando desde el terminal de colector hacia el circuito:
                    </p>
                    <div class="p-1 rounded bg-purple-50 dark:bg-purple-950/40 text-center font-bold text-purple-900 dark:text-purple-200 font-mono text-[11px]">
                      $$R_o = \\left.\\frac{v_x}{i_x}\\right|_{v_s=0} = R_C \\parallel r_o \\approx R_C \\qquad (\\text{Alta: } 1\\sim 10\\text{ k}\\Omega)$$
                    </div>
                    <p class="text-[11px] text-slate-500 dark:text-slate-400">
                      Excelente fuente de corriente para acoplar con etapas en cascada (Cascode).
                    </p>
                  </div>
                </div>
              </div>
            </div>
              <span class="text-base shrink-0">🔗</span>
              <div class="flex-1 min-w-0">
                <div class="font-semibold text-teal-900 dark:text-teal-300">
                  Ampliación en Electrónica II (Transistores de Efecto de Campo FET):
                </div>
                <p class="text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                  Para contrastar estas configuraciones BJT con etapas equivalentes en transistores unipolares JFET y MOSFET (Fuente Común y Drenaje Común / Seguidor de fuente) con impedancia de entrada casi infinita ($I_G \\approx 0$):
                </p>
                <button 
                  onclick="navegarASeccionTeorica('electronica-2', 'e2-u1-fisica-jfet-mosfet')"
                  class="mt-1.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-mono text-[11px] font-medium transition-colors shadow-2xs"
                >
                  <span>📖 Ver Electrónica II · Unidad 1 (Transistores JFET y MOSFET)</span>
                  <span>→</span>
                </button>
              </div>
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
