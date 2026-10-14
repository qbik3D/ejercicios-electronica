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
          titulo: '1.1 Física, Símbolos y Ecuaciones Características de JFET y MOSFET',
          contenido: `
            <p class="mb-3 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
              A diferencia del BJT (dispositivo controlado por corriente en base), los <strong>transistores de efecto de campo (FET)</strong> son dispositivos unipolarmente conducidos por un solo tipo de portador (electrones en canal N o huecos en canal P) y <strong>controlados por tensión</strong> aplicada a la compuerta (Gate). La compuerta aislada presenta una corriente estática prácticamente nula ($I_G \\approx 0$) y una impedancia de entrada casi infinita ($R_{in} \\ge 10^{9}\\,\\Omega$ en JFET, $R_{in} \\ge 10^{12}\\,\\Omega$ en MOSFET).
            </p>

            <!-- DIAGRAMA SVG 1: SÍMBOLOS IEEE Y CURVAS DE TRANSFERENCIA -->
            <div class="my-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span class="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-2 text-center">
                📊 Símbolos IEEE y Curvas Características (JFET vs. MOSFET Enriquecimiento Canal N)
              </span>
              <div class="flex justify-center overflow-x-auto">
                <svg viewBox="0 0 700 240" class="w-full max-w-[700px] text-xs font-sans select-none" style="min-width: 560px;">
                  <!-- ================= (a) JFET CANAL N ================= -->
                  <g transform="translate(15, 0)">
                    <text x="95" y="18" text-anchor="middle" font-weight="bold" fill="#0d9488" font-size="11">JFET Canal N</text>

                    <!-- Símbolo JFET -->
                    <!-- Barra de canal -->
                    <line x1="85" y1="50" x2="85" y2="110" stroke="#334155" stroke-width="3"/>
                    <!-- Terminal Drenaje (D) -->
                    <line x1="85" y1="60" x2="135" y2="60" stroke="#475569" stroke-width="1.8"/>
                    <line x1="135" y1="60" x2="135" y2="35" stroke="#475569" stroke-width="1.8"/>
                    <circle cx="135" cy="35" r="3" fill="#10b981"/>
                    <text x="145" y="38" font-weight="bold" fill="#10b981" font-size="10">D</text>

                    <!-- Terminal Fuente (S) -->
                    <line x1="85" y1="100" x2="135" y2="100" stroke="#475569" stroke-width="1.8"/>
                    <line x1="135" y1="100" x2="135" y2="125" stroke="#475569" stroke-width="1.8"/>
                    <circle cx="135" cy="125" r="3" fill="#3b82f6"/>
                    <text x="145" y="129" font-weight="bold" fill="#3b82f6" font-size="10">S</text>

                    <!-- Terminal Compuerta (G) con flecha hacia adentro -->
                    <line x1="35" y1="95" x2="85" y2="95" stroke="#475569" stroke-width="1.8"/>
                    <polygon points="70,95 60,90 60,100" fill="#0d9488"/>
                    <circle cx="35" cy="95" r="3" fill="#0d9488"/>
                    <text x="25" y="99" text-anchor="end" font-weight="bold" fill="#0d9488" font-size="10">G</text>

                    <!-- Curva de transferencia Shockley JFET -->
                    <g transform="translate(10, 140)">
                      <!-- Ejes -->
                      <line x1="20" y1="75" x2="160" y2="75" stroke="#475569" stroke-width="1.2"/>
                      <line x1="110" y1="75" x2="110" y2="10" stroke="#475569" stroke-width="1.2"/>
                      <text x="110" y="5" text-anchor="middle" font-size="8" fill="#475569" font-weight="bold">I_D</text>
                      <text x="160" y="85" text-anchor="end" font-size="8" fill="#475569">V_GS</text>
                      <!-- Curva parabólica Shockley -->
                      <path d="M 40,75 Q 70,70 110,20" fill="none" stroke="#0d9488" stroke-width="2"/>
                      <circle cx="40" cy="75" r="2.5" fill="#0d9488"/>
                      <text x="40" y="86" text-anchor="middle" font-size="7.5" font-weight="bold" fill="#0d9488">V_P (&lt;0)</text>
                      <circle cx="110" cy="20" r="2.5" fill="#0d9488"/>
                      <text x="122" y="23" text-anchor="start" font-size="7.5" font-weight="bold" fill="#0d9488">I_DSS</text>
                    </g>
                  </g>

                  <!-- Divisor vertical -->
                  <line x1="225" y1="15" x2="225" y2="230" stroke="#cbd5e1" stroke-dasharray="3 3"/>

                  <!-- ================= (b) MOSFET ENRIQUECIMIENTO CANAL N ================= -->
                  <g transform="translate(240, 0)">
                    <text x="105" y="18" text-anchor="middle" font-weight="bold" fill="#6366f1" font-size="11">MOSFET Enriquecimiento (N)</text>

                    <!-- Símbolo MOSFET: Compuerta aislada -->
                    <line x1="75" y1="50" x2="75" y2="110" stroke="#6366f1" stroke-width="2.5"/>
                    <line x1="35" y1="80" x2="75" y2="80" stroke="#6366f1" stroke-width="1.8"/>
                    <circle cx="35" cy="80" r="3" fill="#6366f1"/>
                    <text x="25" y="84" text-anchor="end" font-weight="bold" fill="#6366f1" font-size="10">G</text>

                    <!-- Canal discontinuo (3 segmentos) -->
                    <line x1="85" y1="50" x2="85" y2="64" stroke="#334155" stroke-width="2.5"/>
                    <line x1="85" y1="73" x2="85" y2="87" stroke="#334155" stroke-width="2.5"/>
                    <line x1="85" y1="96" x2="85" y2="110" stroke="#334155" stroke-width="2.5"/>

                    <!-- Drenaje (D) -->
                    <line x1="85" y1="57" x2="140" y2="57" stroke="#475569" stroke-width="1.8"/>
                    <line x1="140" y1="57" x2="140" y2="35" stroke="#475569" stroke-width="1.8"/>
                    <circle cx="140" cy="35" r="3" fill="#10b981"/>
                    <text x="150" y="38" font-weight="bold" fill="#10b981" font-size="10">D</text>

                    <!-- Sustrato Bulk (B) con flecha entrando a canal -->
                    <line x1="85" y1="80" x2="115" y2="80" stroke="#475569" stroke-width="1.8"/>
                    <polygon points="88,80 98,75 98,85" fill="#3b82f6"/>
                    <line x1="115" y1="80" x2="115" y2="103" stroke="#475569" stroke-width="1.8"/>

                    <!-- Fuente (S) unida a Bulk internamente -->
                    <line x1="85" y1="103" x2="140" y2="103" stroke="#475569" stroke-width="1.8"/>
                    <line x1="140" y1="103" x2="140" y2="125" stroke="#475569" stroke-width="1.8"/>
                    <circle cx="140" cy="125" r="3" fill="#3b82f6"/>
                    <text x="150" y="129" font-weight="bold" fill="#3b82f6" font-size="10">S</text>

                    <!-- Curva de transferencia MOSFET Enriquecimiento -->
                    <g transform="translate(10, 140)">
                      <line x1="10" y1="75" x2="170" y2="75" stroke="#475569" stroke-width="1.2"/>
                      <line x1="30" y1="75" x2="30" y2="10" stroke="#475569" stroke-width="1.2"/>
                      <text x="30" y="5" text-anchor="middle" font-size="8" fill="#475569" font-weight="bold">I_D</text>
                      <text x="170" y="85" text-anchor="end" font-size="8" fill="#475569">V_GS</text>
                      <!-- Curva cuadrática nula hasta V_th -->
                      <line x1="10" y1="75" x2="70" y2="75" stroke="#6366f1" stroke-width="2.5"/>
                      <path d="M 70,75 Q 100,70 150,15" fill="none" stroke="#6366f1" stroke-width="2"/>
                      <circle cx="70" cy="75" r="2.5" fill="#6366f1"/>
                      <text x="70" y="86" text-anchor="middle" font-size="7.5" font-weight="bold" fill="#6366f1">V_th (&gt;0)</text>
                      <text x="120" y="30" font-size="7" fill="#6366f1">I_D = k_n(V_GS - V_th)²</text>
                    </g>
                  </g>

                  <!-- Divisor vertical -->
                  <line x1="465" y1="15" x2="465" y2="230" stroke="#cbd5e1" stroke-dasharray="3 3"/>

                  <!-- ================= (c) CURVAS DE SALIDA ID vs VDS ================= -->
                  <g transform="translate(480, 0)">
                    <text x="105" y="18" text-anchor="middle" font-weight="bold" fill="#f59e0b" font-size="11">Curvas de Salida (Tríodo vs Sat)</text>
                    
                    <g transform="translate(10, 30)">
                      <!-- Eje Y: ID -->
                      <line x1="25" y1="170" x2="25" y2="10" stroke="#475569" stroke-width="1.5"/>
                      <text x="20" y="8" text-anchor="end" font-size="8.5" font-weight="bold" fill="#475569">I_D</text>

                      <!-- Eje X: VDS -->
                      <line x1="25" y1="170" x2="200" y2="170" stroke="#475569" stroke-width="1.5"/>
                      <text x="200" y="183" text-anchor="end" font-size="8.5" font-weight="bold" fill="#475569">V_DS</text>

                      <!-- Parábola límite de pinch-off / saturación -->
                      <path d="M 25,170 Q 55,140 85,25" fill="none" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3 2"/>
                      <text x="45" y="55" font-size="7" fill="#ef4444" font-weight="bold" transform="rotate(-65 45,55)">V_DS = V_GS - V_th</text>

                      <!-- Zona Tríodo / Óhmica -->
                      <text x="42" y="150" text-anchor="middle" font-weight="bold" fill="#3b82f6" font-size="8">Zona Óhmica</text>
                      <text x="42" y="160" text-anchor="middle" fill="#64748b" font-size="7">(Resistor controlado)</text>

                      <!-- Zona Saturación / Activa -->
                      <text x="140" y="50" text-anchor="middle" font-weight="bold" fill="#10b981" font-size="8">Zona de Saturación</text>
                      <text x="140" y="60" text-anchor="middle" fill="#64748b" font-size="7">(Fuente de corriente I_D)</text>

                      <!-- Curvas de VGS creciente -->
                      <path d="M 25,170 Q 50,150 70,140 L 190,135" fill="none" stroke="#94a3b8" stroke-width="1.5"/>
                      <text x="192" y="138" font-size="7" fill="#94a3b8">V_GS1</text>

                      <path d="M 25,170 Q 60,110 80,95 L 190,88" fill="none" stroke="#94a3b8" stroke-width="1.5"/>
                      <text x="192" y="91" font-size="7" fill="#94a3b8">V_GS2</text>

                      <path d="M 25,170 Q 70,60 90,45 L 190,38" fill="none" stroke="#f59e0b" stroke-width="1.8"/>
                      <text x="192" y="41" font-size="7" font-weight="bold" fill="#f59e0b">V_GS3</text>
                    </g>
                  </g>
                </svg>
              </div>
            </div>

            <!-- TABLA DE ECUACIONES DE DISPOSITIVOS -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3 text-xs">
              <div class="p-3.5 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-950 dark:text-teal-200">
                <span class="font-bold text-xs uppercase tracking-wider block mb-1">⚡ JFET en Saturación ($V_{DS} \\ge V_{GS} - V_P$)</span>
                $$\\mathbf{I_D = I_{DSS} \\left( 1 - \\frac{V_{GS}}{V_P} \\right)^2}$$
                <p class="text-[11px] text-slate-600 dark:text-slate-400 mt-1">
                  Requiere compuerta polarizada en inversa ($V_P \\le V_{GS} \\le 0$). Si $V_{GS} = V_P$, el canal se estrangula ($I_D = 0$).
                </p>
              </div>
              <div class="p-3.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-950 dark:text-indigo-200">
                <span class="font-bold text-xs uppercase tracking-wider block mb-1">🔲 MOSFET Enriquecimiento en Saturación</span>
                $$\\mathbf{I_D = k_n (V_{GS} - V_{th})^2 (1 + \\lambda V_{DS})}$$
                <p class="text-[11px] text-slate-600 dark:text-slate-400 mt-1">
                  Requiere superar el umbral ($V_{GS} > V_{th}$). El parámetro $\\lambda = 1/V_A$ cuantifica la modulación de longitud de canal (Efecto Early).
                </p>
              </div>
            </div>

            <div class="p-3 my-3 rounded-xl bg-teal-500/10 dark:bg-teal-950/40 border border-teal-500/30 text-xs flex items-start gap-2.5">
              <span class="text-base shrink-0">🔗</span>
              <div class="flex-1 min-w-0">
                <div class="font-semibold text-teal-900 dark:text-teal-300">
                  Concepto Previo de Electrónica I:
                </div>
                <p class="text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                  Para recordar la física de portadores en silicio, dopaje y la barrera de potencial de la juntura PN que gobierna el estrangulamiento del JFET:
                </p>
                <button 
                  onclick="navegarASeccionTeorica('electronica-1', 'e1-u2-fisica-juntura')"
                  class="mt-1.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-mono text-[11px] font-medium transition-colors shadow-2xs"
                >
                  <span>📖 Ver Electrónica I · Unidad 2 (Física de la Juntura PN)</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          `
        },
        {
          id: 'e2-u1-polarizacion-pequena-senal',
          titulo: '1.2 Polarización DC y Modelo de Pequeña Señal FET',
          contenido: `
            <p class="mb-3 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
              Al ser $I_G = 0$, la polarización de compuerta es extremadamente limpia: el divisor resistivo $R_1-R_2$ no sufre caída de carga. La resistencia de fuente $R_S$ provee una potente realimentación negativa de continua para estabilizar el punto $Q$.
            </p>

            <!-- DIAGRAMA SVG 2: ESQUEMA DE POLARIZACIÓN Y MODELO AC -->
            <div class="my-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span class="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-2 text-center">
                🔌 Polarización Fuente Común (DC) vs. Modelo Incremental de Pequeña Señal (AC)
              </span>
              <div class="flex justify-center overflow-x-auto">
                <svg viewBox="0 0 680 230" class="w-full max-w-[680px] text-xs font-sans select-none" style="min-width: 520px;">
                  <defs>
                    <marker id="fet-arr-green" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                      <polygon points="0 0, 6 3, 0 6" fill="#10b981"/>
                    </marker>
                  </defs>

                  <!-- ================= CIRCUITO COMPLETO DC ================= -->
                  <g transform="translate(10, 0)">
                    <text x="135" y="18" text-anchor="middle" font-weight="bold" fill="#0d9488" font-size="11">Circuito Fuente Común (DC + AC)</text>

                    <!-- VDD rail -->
                    <line x1="60" y1="32" x2="190" y2="32" stroke="#475569" stroke-width="1.5"/>
                    <circle cx="130" cy="32" r="3" fill="#ef4444"/>
                    <text x="130" y="26" text-anchor="middle" font-weight="bold" fill="#ef4444" font-size="8.5">+V_DD</text>

                    <!-- Divisor R1 y R2 -->
                    <line x1="75" y1="32" x2="75" y2="42" stroke="#475569" stroke-width="1.2"/>
                    <rect x="68" y="42" width="14" height="24" fill="#0d9488" fill-opacity="0.2" stroke="#0d9488" stroke-width="1.2" rx="1.5"/>
                    <text x="60" y="56" text-anchor="end" font-size="8" fill="#0d9488">R_1</text>
                    <line x1="75" y1="66" x2="75" y2="82" stroke="#475569" stroke-width="1.2"/>
                    <circle cx="75" cy="82" r="2.5" fill="#475569"/>

                    <!-- Entrada vi con C1 -->
                    <line x1="20" y1="82" x2="45" y2="82" stroke="#3b82f6" stroke-width="1.5"/>
                    <line x1="45" y1="75" x2="45" y2="89" stroke="#3b82f6" stroke-width="2"/>
                    <line x1="49" y1="75" x2="49" y2="89" stroke="#3b82f6" stroke-width="2"/>
                    <line x1="49" y1="82" x2="75" y2="82" stroke="#3b82f6" stroke-width="1.5"/>
                    <circle cx="20" cy="82" r="3" fill="#3b82f6"/>
                    <text x="20" y="95" text-anchor="middle" font-weight="bold" fill="#3b82f6" font-size="8.5">v_i</text>

                    <rect x="68" y="82" width="14" height="24" fill="#0d9488" fill-opacity="0.2" stroke="#0d9488" stroke-width="1.2" rx="1.5"/>
                    <text x="60" y="96" text-anchor="end" font-size="8" fill="#0d9488">R_2</text>
                    <line x1="75" y1="106" x2="75" y2="120" stroke="#475569" stroke-width="1.2"/>
                    <line x1="68" y1="120" x2="82" y2="120" stroke="#475569" stroke-width="1.5"/>

                    <line x1="75" y1="82" x2="110" y2="82" stroke="#475569" stroke-width="1.5"/>

                    <!-- MOSFET N -->
                    <line x1="110" y1="70" x2="110" y2="94" stroke="#6366f1" stroke-width="2.5"/>
                    <line x1="117" y1="70" x2="117" y2="94" stroke="#334155" stroke-width="2" stroke-dasharray="4 2"/>

                    <!-- Drenaje RD -->
                    <line x1="165" y1="32" x2="165" y2="42" stroke="#475569" stroke-width="1.2"/>
                    <rect x="158" y="42" width="14" height="24" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="1.2" rx="1.5"/>
                    <text x="178" y="56" text-anchor="start" font-size="8" fill="#10b981">R_D</text>
                    <line x1="165" y1="66" x2="165" y2="76" stroke="#475569" stroke-width="1.2"/>
                    <circle cx="165" cy="76" r="2.5" fill="#10b981"/>
                    <line x1="117" y1="76" x2="165" y2="76" stroke="#475569" stroke-width="1.2"/>

                    <!-- Salida vo con C2 -->
                    <line x1="165" y1="76" x2="195" y2="76" stroke="#10b981" stroke-width="1.5"/>
                    <line x1="195" y1="69" x2="195" y2="83" stroke="#10b981" stroke-width="2"/>
                    <line x1="199" y1="69" x2="199" y2="83" stroke="#10b981" stroke-width="2"/>
                    <line x1="199" y1="76" x2="225" y2="76" stroke="#10b981" stroke-width="1.5"/>
                    <circle cx="225" cy="76" r="3" fill="#10b981"/>
                    <text x="225" y="90" text-anchor="middle" font-weight="bold" fill="#10b981" font-size="8.5">v_o</text>

                    <!-- Fuente RS y CS -->
                    <line x1="117" y1="88" x2="165" y2="88" stroke="#475569" stroke-width="1.2"/>
                    <line x1="165" y1="88" x2="165" y2="98" stroke="#475569" stroke-width="1.2"/>
                    <circle cx="165" cy="98" r="2" fill="#475569"/>

                    <!-- RS -->
                    <line x1="165" y1="98" x2="145" y2="98" stroke="#475569" stroke-width="1.2"/>
                    <line x1="145" y1="98" x2="145" y2="108" stroke="#475569" stroke-width="1.2"/>
                    <rect x="138" y="108" width="14" height="22" fill="#a855f7" fill-opacity="0.2" stroke="#a855f7" stroke-width="1.2" rx="1.5"/>
                    <text x="132" y="121" text-anchor="end" font-size="7.5" fill="#a855f7">R_S</text>
                    <line x1="145" y1="130" x2="145" y2="140" stroke="#475569" stroke-width="1.2"/>

                    <!-- CS (Desacoplo) -->
                    <line x1="165" y1="98" x2="185" y2="98" stroke="#475569" stroke-width="1.2"/>
                    <line x1="185" y1="98" x2="185" y2="114" stroke="#475569" stroke-width="1.2"/>
                    <line x1="178" y1="114" x2="192" y2="114" stroke="#475569" stroke-width="2"/>
                    <line x1="178" y1="118" x2="192" y2="118" stroke="#475569" stroke-width="2"/>
                    <text x="198" y="118" text-anchor="start" font-size="7.5" fill="#64748b">C_S</text>
                    <line x1="185" y1="118" x2="185" y2="140" stroke="#475569" stroke-width="1.2"/>

                    <line x1="145" y1="140" x2="185" y2="140" stroke="#475569" stroke-width="1.5"/>
                    <line x1="157" y1="144" x2="173" y2="144" stroke="#475569" stroke-width="2"/>

                    <!-- Ecuaciones DC -->
                    <rect x="15" y="160" width="230" height="60" rx="6" fill="#0d9488" fill-opacity="0.08" stroke="#0d9488" stroke-opacity="0.3"/>
                    <text x="130" y="176" text-anchor="middle" font-weight="bold" fill="#0f766e" font-size="9">V_G = V_DD · R_2 / (R_1 + R_2)</text>
                    <text x="130" y="192" text-anchor="middle" font-weight="bold" fill="#0f766e" font-size="9">V_GS = V_G - I_D · R_S</text>
                    <text x="130" y="208" text-anchor="middle" fill="#475569" font-size="8.5">Resuelto con: I_D = k_n (V_GS - V_th)²</text>
                  </g>

                  <!-- Divisor vertical -->
                  <line x1="285" y1="15" x2="285" y2="225" stroke="#cbd5e1" stroke-dasharray="3 3"/>

                  <!-- ================= MODELO PEQUEÑA SEÑAL AC ================= -->
                  <g transform="translate(305, 0)">
                    <text x="180" y="18" text-anchor="middle" font-weight="bold" fill="#6366f1" font-size="11">Modelo Incremental de Pequeña Señal (AC)</text>

                    <!-- Terminal Compuerta G (Circuito Abierto!) -->
                    <circle cx="20" cy="55" r="3.5" fill="#6366f1"/>
                    <text x="10" y="59" font-weight="bold" fill="#6366f1" font-size="10">G</text>
                    <line x1="20" y1="55" x2="65" y2="55" stroke="#475569" stroke-width="1.8"/>
                    <circle cx="65" cy="55" r="3" fill="#6366f1"/>

                    <!-- Tensión vgs -->
                    <text x="75" y="70" font-weight="bold" fill="#6366f1" font-size="10">+</text>
                    <text x="73" y="90" font-weight="bold" fill="#6366f1" font-size="9.5">v_gs</text>
                    <text x="75" y="105" font-weight="bold" fill="#6366f1" font-size="10">-</text>

                    <circle cx="65" cy="120" r="3" fill="#3b82f6"/>
                    <text x="78" y="138" font-size="8" fill="#64748b">I_g = 0 (R_in = ∞)</text>

                    <!-- Barra de Fuente (S) -->
                    <line x1="20" y1="120" x2="340" y2="120" stroke="#475569" stroke-width="2"/>
                    <circle cx="180" cy="120" r="3.5" fill="#3b82f6"/>
                    <text x="180" y="140" text-anchor="middle" font-weight="bold" fill="#3b82f6" font-size="10">S (Fuente)</text>

                    <!-- Fuente de Corriente controlada gm · vgs -->
                    <line x1="180" y1="55" x2="180" y2="70" stroke="#475569" stroke-width="1.8"/>
                    <circle cx="180" cy="85" r="14" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="1.8"/>
                    <line x1="180" y1="76" x2="180" y2="94" stroke="#10b981" stroke-width="2" marker-end="url(#fet-arr-green)"/>
                    <text x="180" y="112" text-anchor="middle" font-weight="bold" fill="#10b981" font-size="9">g_m · v_gs</text>
                    <line x1="180" y1="99" x2="180" y2="120" stroke="#475569" stroke-width="1.8"/>

                    <!-- Resistencia dinámica rd / ro -->
                    <line x1="180" y1="55" x2="270" y2="55" stroke="#475569" stroke-width="1.8"/>
                    <line x1="270" y1="55" x2="270" y2="70" stroke="#475569" stroke-width="1.8"/>
                    <rect x="261" y="70" width="18" height="30" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="1.8" rx="2"/>
                    <text x="286" y="88" text-anchor="start" font-weight="bold" fill="#10b981" font-size="9.5">r_d (r_o)</text>
                    <line x1="270" y1="100" x2="270" y2="120" stroke="#475569" stroke-width="1.8"/>

                    <!-- Terminal Drenaje D -->
                    <line x1="270" y1="55" x2="340" y2="55" stroke="#475569" stroke-width="2"/>
                    <circle cx="340" cy="55" r="3.5" fill="#10b981"/>
                    <text x="350" y="59" font-weight="bold" fill="#10b981" font-size="10">D</text>

                    <!-- Fórmulas AC bajo el modelo -->
                    <rect x="15" y="160" width="340" height="60" rx="6" fill="#6366f1" fill-opacity="0.08" stroke="#6366f1" stroke-opacity="0.3"/>
                    <text x="185" y="176" text-anchor="middle" font-weight="bold" fill="#4f46e5" font-size="9.5">g_m = 2 k_n (V_GSQ - V_th) = 2 √(k_n · I_DQ)</text>
                    <text x="185" y="192" text-anchor="middle" font-weight="bold" fill="#4f46e5" font-size="9.5">r_d = r_o = 1 / (λ · I_DQ) = V_A / I_DQ</text>
                    <text x="185" y="208" text-anchor="middle" fill="#475569" font-size="8.5">Fuente Común: A_v = -g_m (R_D ∥ R_L ∥ r_o) · R_in = R_1 ∥ R_2</text>
                  </g>
                </svg>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3 text-xs">
              <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <span class="font-bold text-teal-600 dark:text-teal-400">Fuente Común (FC):</span><br>
                $A_v = -g_m (R_D \\parallel R_L \\parallel r_o)$ (Invierte $180^{\\circ}$)<br>
                $R_{in} = R_1 \\parallel R_2$ (Muy alta, $1-10\\text{ M}\\Omega$)<br>
                $R_o = R_D \\parallel r_o \\approx R_D$
              </div>
              <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <span class="font-bold text-blue-600 dark:text-blue-400">Drenaje Común / Seguidor (DC):</span><br>
                $A_v = \\frac{g_m (R_S \\parallel R_L)}{1 + g_m (R_S \\parallel R_L)} \\approx 1$ (En fase, $0^{\\circ}$)<br>
                $R_{in} = R_1 \\parallel R_2$ (Casi infinita)<br>
                $R_o = R_S \\parallel \\frac{1}{g_m}$ (Baja impedancia de salida)
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
            <p class="mb-3 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
              En una cadena multietapa, las etapas no se pueden analizar en forma aislada: <strong>la impedancia de entrada de la etapa siguiente ($R_{i,k+1}$) actúa como resistencia de carga en paralelo para la etapa precedente ($k$)</strong>. La ganancia total es el producto de las ganancias individuales considerando esta carga mutua:
            </p>

            <!-- DIAGRAMA SVG MULTIETAPA INTERACCIÓN -->
            <div class="my-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span class="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-2 text-center">
                📊 Efecto de Carga Inter-etapa en Cascada (FET Fuente Común → BJT Emisor Común)
              </span>
              <div class="flex justify-center overflow-x-auto">
                <svg viewBox="0 0 680 190" class="w-full max-w-[680px] text-xs font-sans select-none" style="min-width: 520px;">
                  <defs>
                    <marker id="m-arr-blue" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                      <polygon points="0 0, 6 3, 0 6" fill="#3b82f6"/>
                    </marker>
                    <marker id="m-arr-green" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                      <polygon points="0 0, 6 3, 0 6" fill="#10b981"/>
                    </marker>
                  </defs>

                  <!-- Bloque Etapa 1: JFET FC -->
                  <rect x="30" y="40" width="180" height="95" rx="8" fill="#0d9488" fill-opacity="0.12" stroke="#0d9488" stroke-width="1.8"/>
                  <text x="120" y="60" text-anchor="middle" font-weight="bold" fill="#0d9488" font-size="11">Etapa 1: JFET (FC)</text>
                  <text x="120" y="78" text-anchor="middle" fill="#64748b" font-size="9">R_in1 = R_G ≈ 10 MΩ</text>
                  <text x="120" y="93" text-anchor="middle" fill="#64748b" font-size="9">R_o1 ≈ R_D1</text>
                  <text x="120" y="112" text-anchor="middle" font-weight="bold" fill="#0f766e" font-size="9.5">A_v1 = -g_m1 · (R_D1 ∥ R_in2)</text>

                  <!-- Entrada vi -->
                  <line x1="5" y1="87" x2="30" y2="87" stroke="#3b82f6" stroke-width="2" marker-end="url(#m-arr-blue)"/>
                  <circle cx="5" cy="87" r="3" fill="#3b82f6"/>
                  <text x="5" y="77" font-weight="bold" fill="#3b82f6" font-size="9.5">v_i</text>

                  <!-- Conexión Inter-etapa con C_c -->
                  <line x1="210" y1="87" x2="260" y2="87" stroke="#475569" stroke-width="2"/>
                  <!-- Capacitor Cc -->
                  <line x1="260" y1="78" x2="260" y2="96" stroke="#475569" stroke-width="2.5"/>
                  <line x1="265" y1="78" x2="265" y2="96" stroke="#475569" stroke-width="2.5"/>
                  <text x="262" y="72" text-anchor="middle" font-weight="bold" fill="#475569" font-size="8.5">C_c</text>
                  <line x1="265" y1="87" x2="315" y2="87" stroke="#475569" stroke-width="2" marker-end="url(#m-arr-blue)"/>
                  <text x="262" y="112" text-anchor="middle" font-size="8" fill="#ef4444" font-weight="bold">Efecto de Carga: R_in2 carga a D1</text>

                  <!-- Bloque Etapa 2: BJT EC -->
                  <rect x="315" y="40" width="180" height="95" rx="8" fill="#6366f1" fill-opacity="0.12" stroke="#6366f1" stroke-width="1.8"/>
                  <text x="405" y="60" text-anchor="middle" font-weight="bold" fill="#6366f1" font-size="11">Etapa 2: BJT (EC)</text>
                  <text x="405" y="78" text-anchor="middle" fill="#64748b" font-size="9">R_in2 = R_B2 ∥ r_π2 ≈ 2 kΩ</text>
                  <text x="405" y="93" text-anchor="middle" fill="#64748b" font-size="9">R_o2 ≈ R_C2</text>
                  <text x="405" y="112" text-anchor="middle" font-weight="bold" fill="#4f46e5" font-size="9.5">A_v2 = -g_m2 · (R_C2 ∥ R_L)</text>

                  <!-- Salida vo -->
                  <line x1="495" y1="87" x2="550" y2="87" stroke="#10b981" stroke-width="2" marker-end="url(#m-arr-green)"/>
                  <circle cx="555" cy="87" r="3" fill="#10b981"/>
                  <text x="565" y="91" font-weight="bold" fill="#10b981" font-size="10">v_o</text>

                  <!-- Carga RL -->
                  <line x1="555" y1="87" x2="590" y2="87" stroke="#475569" stroke-width="1.5"/>
                  <line x1="590" y1="87" x2="590" y2="97" stroke="#475569" stroke-width="1.5"/>
                  <rect x="582" y="97" width="16" height="26" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="1.5" rx="2"/>
                  <text x="606" y="112" font-size="8.5" fill="#10b981" font-weight="bold">R_L</text>
                  <line x1="590" y1="123" x2="590" y2="135" stroke="#475569" stroke-width="1.5"/>
                  <line x1="582" y1="135" x2="598" y2="135" stroke="#475569" stroke-width="2"/>

                  <!-- Barra de fórmulas total -->
                  <rect x="30" y="148" width="560" height="32" rx="6" fill="#475569" fill-opacity="0.08" stroke="#475569" stroke-opacity="0.2"/>
                  <text x="310" y="168" text-anchor="middle" font-mono font-bold fill="#334155" dark:fill="#cbd5e1" font-size="9.5">A_{v,total} = A_{v1}(con R_in2) · A_{v2}(con R_L) = [ -g_m1 (R_D1 ∥ R_in2) ] · [ -g_m2 (R_C2 ∥ R_L) ]</text>
                </svg>
              </div>
            </div>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Contracción del Ancho de Banda Multietapa</h5>
            <p class="mb-2 text-xs text-slate-600 dark:text-slate-400">
              Al conectar $n$ etapas idénticas en cascada, las frecuencias de corte se reducen debido a la superposición de polos:
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3 text-xs">
              <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <span class="font-bold text-sky-600 dark:text-sky-400 block mb-1">Corte Superior (Contracción $\\omega_H$):</span>
                $$\\mathbf{\\omega_{H,total} = \\omega_H \\sqrt{2^{1/n} - 1}}$$
                <p class="text-[11px] text-slate-500 mt-1">Para $n=2$: $\\omega_{H,tot} \\approx 0.64 \\omega_H$. El ancho de banda cae un $36\\%$.</p>
              </div>
              <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <span class="font-bold text-amber-600 dark:text-amber-400 block mb-1">Corte Inferior (Elevación $\\omega_L$):</span>
                $$\\mathbf{\\omega_{L,total} = \\frac{\\omega_L}{\\sqrt{2^{1/n} - 1}}}$$
                <p class="text-[11px] text-slate-500 mt-1">Para $n=2$: $\\omega_{L,tot} \\approx 1.56 \\omega_L$. La respuesta en graves empeora.</p>
              </div>
            </div>

            <div class="p-3 my-3 rounded-xl bg-emerald-500/10 dark:bg-emerald-950/40 border border-emerald-500/30 text-xs flex items-start gap-2.5">
              <span class="text-base shrink-0">🔗</span>
              <div class="flex-1 min-w-0">
                <div class="font-semibold text-emerald-900 dark:text-emerald-300">
                  Profundización en Electrónica Aplicada I (Realimentación):
                </div>
                <p class="text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                  Para el tratamiento formal del cálculo de impedancias y desensibilización al realimentar etapas multietapa mediante cuadripolos:
                </p>
                <button 
                  onclick="navegarASeccionTeorica('electronica-aplicada-1', 'u4-topologias-impedancias')"
                  class="mt-1.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-[11px] font-medium transition-colors shadow-2xs"
                >
                  <span>📖 Ver Electrónica Aplicada I · Unidad 4 (Topologías e Impedancias)</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          `
        },
        {
          id: 'e2-u2-pares-compuestos-cascode',
          titulo: '2.2 Par Darlington, Par Sziklai y Configuración Cascode',
          contenido: `
            <p class="mb-3 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
              Las etapas compuestas combinan transistores en conexiones especiales para superar las limitaciones intrínsecas de dispositivos individuales (ganancia de corriente, impedancia de entrada y efecto Miller en alta frecuencia):
            </p>

            <!-- DIAGRAMA SVG TRÍPTICO DE PARES COMPUESTOS Y CASCODE -->
            <div class="my-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span class="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-2 text-center">
                ⚡ Esquemáticos de Pares Compuestos y Etapa Cascode
              </span>
              <div class="flex justify-center overflow-x-auto">
                <svg viewBox="0 0 720 230" class="w-full max-w-[720px] text-xs font-sans select-none" style="min-width: 580px;">
                  <!-- ================= (a) PAR DARLINGTON ================= -->
                  <g transform="translate(10, 0)">
                    <text x="110" y="18" text-anchor="middle" font-weight="bold" fill="#0284c7" font-size="11">1. Par Darlington (NPN-NPN)</text>

                    <!-- Colector común arriba -->
                    <line x1="150" y1="30" x2="150" y2="40" stroke="#475569" stroke-width="2"/>
                    <circle cx="150" cy="30" r="3" fill="#10b981"/>
                    <text x="160" y="34" font-weight="bold" fill="#10b981" font-size="10">C</text>
                    
                    <line x1="120" y1="40" x2="165" y2="40" stroke="#475569" stroke-width="1.8"/>

                    <!-- Transistor Q1 (Piloto) -->
                    <line x1="120" y1="40" x2="120" y2="60" stroke="#475569" stroke-width="1.5"/>
                    <line x1="85" y1="60" x2="85" y2="80" stroke="#334155" stroke-width="2.5"/>
                    <!-- Base B1 -->
                    <line x1="45" y1="70" x2="85" y2="70" stroke="#475569" stroke-width="1.8"/>
                    <circle cx="45" cy="70" r="3" fill="#0284c7"/>
                    <text x="35" y="74" text-anchor="end" font-weight="bold" fill="#0284c7" font-size="10">B</text>
                    <line x1="85" y1="63" x2="120" y2="60" stroke="#475569" stroke-width="1.2"/>
                    <line x1="85" y1="77" x2="120" y2="88" stroke="#475569" stroke-width="1.2"/>
                    <polygon points="110,87 120,88 116,80" fill="#ef4444"/>

                    <!-- Emisor de Q1 entra a Base de Q2 -->
                    <line x1="120" y1="88" x2="120" y2="105" stroke="#475569" stroke-width="1.8"/>
                    <line x1="120" y1="105" x2="135" y2="105" stroke="#475569" stroke-width="1.8"/>

                    <!-- Transistor Q2 (Potencia) -->
                    <line x1="165" y1="40" x2="165" y2="95" stroke="#475569" stroke-width="1.5"/>
                    <line x1="135" y1="95" x2="135" y2="115" stroke="#334155" stroke-width="2.5"/>
                    <line x1="135" y1="98" x2="165" y2="95" stroke="#475569" stroke-width="1.2"/>
                    <line x1="135" y1="112" x2="165" y2="125" stroke="#475569" stroke-width="1.2"/>
                    <polygon points="155,124 165,125 161,117" fill="#ef4444"/>

                    <!-- Emisor E2 -->
                    <line x1="165" y1="125" x2="165" y2="145" stroke="#475569" stroke-width="2"/>
                    <circle cx="165" cy="145" r="3" fill="#3b82f6"/>
                    <text x="175" y="149" font-weight="bold" fill="#3b82f6" font-size="10">E</text>

                    <!-- Fórmulas Darlington -->
                    <rect x="15" y="160" width="195" height="58" rx="6" fill="#0284c7" fill-opacity="0.08" stroke="#0284c7" stroke-opacity="0.3"/>
                    <text x="112" y="176" text-anchor="middle" font-weight="bold" fill="#0369a1" font-size="9.5">β_D ≈ β_1 · β_2  (Ganancia enorme)</text>
                    <text x="112" y="192" text-anchor="middle" font-weight="bold" fill="#0369a1" font-size="9.5">V_BE,tot = V_BE1 + V_BE2 ≈ 1.4 V</text>
                    <text x="112" y="207" text-anchor="middle" fill="#64748b" font-size="8.5">R_in ≈ β_1 β_2 R_E · V_CE,sat ≈ 0.9 V</text>
                  </g>

                  <!-- Divisor vertical -->
                  <line x1="235" y1="15" x2="235" y2="225" stroke="#cbd5e1" stroke-dasharray="3 3"/>

                  <!-- ================= (b) PAR SZIKLAI ================= -->
                  <g transform="translate(245, 0)">
                    <text x="110" y="18" text-anchor="middle" font-weight="bold" fill="#059669" font-size="11">2. Par Sziklai (NPN-PNP)</text>

                    <!-- Colector Q1 / Base Q2 -->
                    <!-- Q1 NPN -->
                    <line x1="45" y1="70" x2="85" y2="70" stroke="#475569" stroke-width="1.8"/>
                    <circle cx="45" cy="70" r="3" fill="#059669"/>
                    <text x="35" y="74" text-anchor="end" font-weight="bold" fill="#059669" font-size="10">B</text>
                    
                    <line x1="85" y1="60" x2="85" y2="80" stroke="#334155" stroke-width="2.5"/>
                    <line x1="85" y1="63" x2="120" y2="55" stroke="#475569" stroke-width="1.2"/>
                    <line x1="85" y1="77" x2="120" y2="88" stroke="#475569" stroke-width="1.2"/>
                    <polygon points="110,87 120,88 116,80" fill="#ef4444"/>

                    <!-- Q2 PNP -->
                    <!-- Base de Q2 conectada a Colector de Q1 -->
                    <line x1="120" y1="55" x2="145" y2="55" stroke="#475569" stroke-width="1.8"/>
                    <line x1="145" y1="45" x2="145" y2="65" stroke="#334155" stroke-width="2.5"/>
                    
                    <!-- Emisor de Q2 arriba (Flecha hacia adentro) -->
                    <line x1="145" y1="48" x2="175" y2="40" stroke="#475569" stroke-width="1.2"/>
                    <polygon points="152,49 162,44 160,53" fill="#ef4444"/>
                    <line x1="175" y1="40" x2="175" y2="28" stroke="#475569" stroke-width="2"/>
                    <circle cx="175" cy="28" r="3" fill="#10b981"/>
                    <text x="185" y="32" font-weight="bold" fill="#10b981" font-size="10">C (Out)</text>

                    <!-- Colector de Q2 abajo conectado a Emisor de Q1 -->
                    <line x1="145" y1="62" x2="175" y2="70" stroke="#475569" stroke-width="1.2"/>
                    <line x1="175" y1="70" x2="175" y2="110" stroke="#475569" stroke-width="1.8"/>
                    <line x1="120" y1="88" x2="175" y2="88" stroke="#475569" stroke-width="1.8"/>
                    <circle cx="175" cy="88" r="2.5" fill="#475569"/>

                    <!-- Terminal Emisor conjunto -->
                    <line x1="175" y1="110" x2="175" y2="135" stroke="#475569" stroke-width="2"/>
                    <circle cx="175" cy="135" r="3" fill="#3b82f6"/>
                    <text x="185" y="139" font-weight="bold" fill="#3b82f6" font-size="10">E</text>

                    <!-- Fórmulas Sziklai -->
                    <rect x="15" y="160" width="195" height="58" rx="6" fill="#059669" fill-opacity="0.08" stroke="#059669" stroke-opacity="0.3"/>
                    <text x="112" y="176" text-anchor="middle" font-weight="bold" fill="#047857" font-size="9.5">β_S ≈ β_1 · β_2  (Alta ganancia)</text>
                    <text x="112" y="192" text-anchor="middle" font-weight="bold" fill="#047857" font-size="9.5">V_BE,tot = V_BE1 ≈ 0.7 V (1 sola caída!)</text>
                    <text x="112" y="207" text-anchor="middle" fill="#64748b" font-size="8.5">Mejor estabilidad térmica · V_CE,sat ≈ 0.3 V</text>
                  </g>

                  <!-- Divisor vertical -->
                  <line x1="475" y1="15" x2="475" y2="225" stroke="#cbd5e1" stroke-dasharray="3 3"/>

                  <!-- ================= (c) CONFIGURACIÓN CASCODE ================= -->
                  <g transform="translate(485, 0)">
                    <text x="115" y="18" text-anchor="middle" font-weight="bold" fill="#7c3aed" font-size="11">3. Etapa Cascode (EC + BC)</text>

                    <!-- VCC a RC -->
                    <line x1="140" y1="28" x2="140" y2="38" stroke="#475569" stroke-width="1.5"/>
                    <rect x="133" y="38" width="14" height="20" fill="#7c3aed" fill-opacity="0.2" stroke="#7c3aed" stroke-width="1.2" rx="1.5"/>
                    <text x="153" y="52" font-size="7.5" fill="#7c3aed" font-weight="bold">R_C</text>
                    <line x1="140" y1="58" x2="140" y2="68" stroke="#475569" stroke-width="1.5"/>
                    <circle cx="140" cy="68" r="2.5" fill="#10b981"/>
                    <!-- Salida vo -->
                    <line x1="140" y1="68" x2="175" y2="68" stroke="#10b981" stroke-width="1.5"/>
                    <circle cx="175" cy="68" r="3" fill="#10b981"/>
                    <text x="185" y="72" font-weight="bold" fill="#10b981" font-size="9.5">v_o</text>

                    <!-- Q2 Superior (Base Común - Base a masa de AC) -->
                    <line x1="90" y1="72" x2="90" y2="88" stroke="#334155" stroke-width="2.5"/>
                    <line x1="90" y1="74" x2="140" y2="68" stroke="#475569" stroke-width="1.2"/>
                    <line x1="90" y1="86" x2="140" y2="92" stroke="#475569" stroke-width="1.2"/>
                    <polygon points="128,91 140,92 135,84" fill="#ef4444"/>
                    <!-- Base a V_BIAS fija (AC GND) -->
                    <line x1="55" y1="80" x2="90" y2="80" stroke="#7c3aed" stroke-width="1.5"/>
                    <text x="50" y="83" text-anchor="end" font-size="7.5" font-weight="bold" fill="#7c3aed">V_BIAS(AC GND)</text>

                    <!-- Nodo intermedio (Baja impedancia 1/gm2) -->
                    <line x1="140" y1="92" x2="140" y2="105" stroke="#ef4444" stroke-width="1.8"/>
                    <circle cx="140" cy="99" r="2" fill="#ef4444"/>
                    <text x="146" y="101" font-size="7" fill="#ef4444">R_in2 ≈ 1/g_m2</text>

                    <!-- Q1 Inferior (Emisor Común) -->
                    <line x1="90" y1="108" x2="90" y2="124" stroke="#334155" stroke-width="2.5"/>
                    <line x1="90" y1="110" x2="140" y2="105" stroke="#475569" stroke-width="1.2"/>
                    <line x1="90" y1="122" x2="140" y2="128" stroke="#475569" stroke-width="1.2"/>
                    <polygon points="128,127 140,128 135,120" fill="#ef4444"/>
                    <!-- Entrada vi en Base de Q1 -->
                    <line x1="55" y1="116" x2="90" y2="116" stroke="#3b82f6" stroke-width="1.5"/>
                    <circle cx="55" cy="116" r="3" fill="#3b82f6"/>
                    <text x="45" y="120" text-anchor="end" font-weight="bold" fill="#3b82f6" font-size="9.5">v_i</text>

                    <!-- Emisor Q1 a masa -->
                    <line x1="140" y1="128" x2="140" y2="142" stroke="#475569" stroke-width="1.5"/>
                    <line x1="132" y1="142" x2="148" y2="142" stroke="#475569" stroke-width="2"/>

                    <!-- Fórmulas Cascode -->
                    <rect x="15" y="160" width="205" height="58" rx="6" fill="#7c3aed" fill-opacity="0.08" stroke="#7c3aed" stroke-opacity="0.3"/>
                    <text x="117" y="176" text-anchor="middle" font-weight="bold" fill="#6d28d9" font-size="9.5">A_{v1} ≈ -g_m1 · (1/g_m2) ≈ -1</text>
                    <text x="117" y="192" text-anchor="middle" font-weight="bold" fill="#6d28d9" font-size="9.5">🚀 ¡Anula Efecto Miller (C_in,M ≈ 2 C_cb)!</text>
                    <text x="117" y="207" text-anchor="middle" fill="#64748b" font-size="8.5">Ancho de banda altísimo · R_o ≈ g_m2 r_o2 r_o1</text>
                  </g>
                </svg>
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
            <p class="mb-3 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
              El par diferencial MOS es el corazón de los circuitos integrados analógicos (incluyendo los Op-Amps CMOS). Alimentado por una fuente de corriente de cola $I_{SS}$, rechaza ruidos de modo común y permite un rango lineal muy superior al bipolar.
            </p>

            <!-- DIAGRAMA SVG PAR DIFERENCIAL CMOS CON CARGA ACTIVA -->
            <div class="my-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span class="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-2 text-center">
                🔬 Par Diferencial NMOS con Carga Activa Espejo de Corriente PMOS
              </span>
              <div class="flex justify-center overflow-x-auto">
                <svg viewBox="0 0 680 250" class="w-full max-w-[680px] text-xs font-sans select-none" style="min-width: 520px;">
                  <!-- VDD rail superior -->
                  <line x1="180" y1="20" x2="500" y2="20" stroke="#475569" stroke-width="2"/>
                  <circle cx="340" cy="20" r="3.5" fill="#ef4444"/>
                  <text x="340" y="14" text-anchor="middle" font-weight="bold" fill="#ef4444" font-size="10">+V_DD</text>

                  <!-- ================= CARGA ACTIVA PMOS (M3 y M4) ================= -->
                  <!-- M3 PMOS (Conectado como Diodo a la izquierda) -->
                  <line x1="250" y1="20" x2="250" y2="35" stroke="#475569" stroke-width="1.8"/>
                  <rect x="238" y="35" width="24" height="30" fill="#ec4899" fill-opacity="0.15" stroke="#ec4899" stroke-width="1.5" rx="3"/>
                  <text x="250" y="53" text-anchor="middle" font-weight="bold" fill="#db2777" font-size="10">M_3 (P)</text>
                  <line x1="250" y1="65" x2="250" y2="85" stroke="#475569" stroke-width="1.8"/>
                  <circle cx="250" cy="85" r="3" fill="#475569"/>

                  <!-- M4 PMOS (Espejo a la derecha) -->
                  <line x1="430" y1="20" x2="430" y2="35" stroke="#475569" stroke-width="1.8"/>
                  <rect x="418" y="35" width="24" height="30" fill="#ec4899" fill-opacity="0.15" stroke="#ec4899" stroke-width="1.5" rx="3"/>
                  <text x="430" y="53" text-anchor="middle" font-weight="bold" fill="#db2777" font-size="10">M_4 (P)</text>
                  <line x1="430" y1="65" x2="430" y2="85" stroke="#475569" stroke-width="1.8"/>
                  <circle cx="430" cy="85" r="3" fill="#10b981"/>

                  <!-- Interconexión de Compuertas M3 y M4 + conexión diodo M3 -->
                  <line x1="238" y1="50" x2="215" y2="50" stroke="#ec4899" stroke-width="1.5"/>
                  <line x1="215" y1="50" x2="215" y2="85" stroke="#ec4899" stroke-width="1.5"/>
                  <line x1="215" y1="85" x2="250" y2="85" stroke="#ec4899" stroke-width="1.5"/>
                  <line x1="238" y1="50" x2="418" y2="50" stroke="#ec4899" stroke-width="1.5"/>
                  <text x="340" y="44" text-anchor="middle" font-size="8" fill="#db2777" font-weight="bold">Espejo Activo PMOS</text>

                  <!-- Salida vo en Drenaje de M4 / M2 -->
                  <line x1="430" y1="85" x2="520" y2="85" stroke="#10b981" stroke-width="2"/>
                  <circle cx="520" cy="85" r="4" fill="#10b981"/>
                  <text x="535" y="89" font-weight="bold" fill="#10b981" font-size="11">v_o (Salida)</text>

                  <!-- ================= PAR DIFERENCIAL NMOS (M1 y M2) ================= -->
                  <!-- M1 NMOS (Izquierda) -->
                  <rect x="238" y="95" width="24" height="30" fill="#3b82f6" fill-opacity="0.15" stroke="#3b82f6" stroke-width="1.5" rx="3"/>
                  <text x="250" y="113" text-anchor="middle" font-weight="bold" fill="#2563eb" font-size="10">M_1 (N)</text>
                  <!-- Entrada v_in1 -->
                  <line x1="160" y1="110" x2="238" y2="110" stroke="#3b82f6" stroke-width="1.8"/>
                  <circle cx="160" cy="110" r="3.5" fill="#3b82f6"/>
                  <text x="145" y="114" text-anchor="end" font-weight="bold" fill="#3b82f6" font-size="10">v_in1 (+)</text>

                  <!-- M2 NMOS (Derecha) -->
                  <rect x="418" y="95" width="24" height="30" fill="#3b82f6" fill-opacity="0.15" stroke="#3b82f6" stroke-width="1.5" rx="3"/>
                  <text x="430" y="113" text-anchor="middle" font-weight="bold" fill="#2563eb" font-size="10">M_2 (N)</text>
                  <!-- Entrada v_in2 -->
                  <line x1="442" y1="110" x2="510" y2="110" stroke="#3b82f6" stroke-width="1.8"/>
                  <circle cx="510" cy="110" r="3.5" fill="#3b82f6"/>
                  <text x="525" y="114" text-anchor="start" font-weight="bold" fill="#3b82f6" font-size="10">v_in2 (-)</text>

                  <!-- Conexión de Fuentes acopladas a nodo común S -->
                  <line x1="250" y1="125" x2="250" y2="145" stroke="#475569" stroke-width="1.8"/>
                  <line x1="430" y1="125" x2="430" y2="145" stroke="#475569" stroke-width="1.8"/>
                  <line x1="250" y1="145" x2="430" y2="145" stroke="#475569" stroke-width="2"/>
                  <circle cx="340" cy="145" r="3" fill="#475569"/>

                  <!-- Fuente de Corriente de Cola ISS -->
                  <line x1="340" y1="145" x2="340" y2="160" stroke="#475569" stroke-width="1.8"/>
                  <!-- Doble círculo de fuente de corriente -->
                  <circle cx="340" cy="172" r="11" fill="none" stroke="#6366f1" stroke-width="1.8"/>
                  <circle cx="340" cy="186" r="11" fill="none" stroke="#6366f1" stroke-width="1.8"/>
                  <line x1="340" y1="168" x2="340" y2="190" stroke="#6366f1" stroke-width="1.8" marker-end="url(#m-arr-blue)"/>
                  <text x="365" y="182" font-weight="bold" fill="#6366f1" font-size="9.5">I_SS</text>

                  <!-- GND inferior -->
                  <line x1="340" y1="197" x2="340" y2="215" stroke="#475569" stroke-width="1.8"/>
                  <line x1="325" y1="215" x2="355" y2="215" stroke="#475569" stroke-width="2"/>
                  <line x1="331" y1="218" x2="349" y2="218" stroke="#475569" stroke-width="1.5"/>

                  <!-- Etiqueta de ganancia en el lado derecho -->
                  <rect x="15" y="165" width="220" height="48" rx="6" fill="#10b981" fill-opacity="0.08" stroke="#10b981" stroke-opacity="0.3"/>
                  <text x="125" y="183" text-anchor="middle" font-weight="bold" fill="#047857" font-size="9.5">A_d = -g_mN · (r_oN ∥ r_oP)</text>
                  <text x="125" y="200" text-anchor="middle" fill="#64748b" font-size="8.5">Ganancia &gt; 40 - 50 dB en una sola etapa</text>
                </svg>
              </div>
            </div>

            <div class="p-3.5 my-3 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-950 dark:text-indigo-200 text-xs">
              <strong>Rango Lineal del Par MOS vs BJT:</strong> El par diferencial MOS se mantiene lineal hasta $|v_{id}| \\le \\sqrt{2} (V_{GS} - V_{th})$, lo que típicamente equivale a $200 - 500\\text{ mV}$, notablemente superior a los escasos $50\\text{ mV}$ ($2 V_T$) del BJT.
            </div>

            <div class="p-3 my-3 rounded-xl bg-cyan-500/10 dark:bg-cyan-950/40 border border-cyan-500/30 text-xs flex items-start gap-2.5">
              <span class="text-base shrink-0">🔗</span>
              <div class="flex-1 min-w-0">
                <div class="font-semibold text-cyan-900 dark:text-cyan-300">
                  Fundamento en Electrónica Aplicada I (Par Bipolar y Fuentes Activas):
                </div>
                <p class="text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                  Para la deducción matemática detallada del par diferencial BJT con función tangente hiperbólica $\\tanh$, CMRR analítico y la fuente Widlar:
                </p>
                <button 
                  onclick="navegarASeccionTeorica('electronica-aplicada-1', 'u3-par-diferencial-teoria')"
                  class="mt-1.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-mono text-[11px] font-medium transition-colors shadow-2xs"
                >
                  <span>📖 Ver Electrónica Aplicada I · Unidad 3 (Par Diferencial BJT)</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          `
        },
        {
          id: 'e2-u3-opamp-instrumentacion',
          titulo: '3.2 No Idealidades del Op-Amp y Amplificador de Instrumentación',
          contenido: `
            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-2 mb-2">Parámetros No Ideales del Op-Amp Real</h5>
            <ul class="list-disc pl-5 space-y-1 text-xs sm:text-sm mb-3">
              <li><strong>Tensión de Offset ($V_{OS}$):</strong> Desbalance interno ($1 - 5\\text{ mV}$ en BJT, $5 - 15\\text{ mV}$ en MOS). Origina una tensión de salida continua espuria aún con entradas a masa.</li>
              <li><strong>Corrientes de Polarización ($I_B = \\frac{I_{B1}+I_{B2}}{2}$) y Offset ($I_{OS} = |I_{B1} - I_{B2}|$):</strong> Para anular el error por $I_B$, la resistencia vista por el terminal no inversor debe compensar la del inversor: $R_p = R_1 \\parallel R_2$.</li>
            </ul>

            <!-- DIAGRAMA SVG AMPLIFICADOR DE INSTRUMENTACIÓN (3 OP-AMPS) -->
            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">El Amplificador de Instrumentación Clásico (3 Operacionales)</h5>
            <div class="my-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span class="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-2 text-center">
                📐 Esquemático Completo del Amplificador de Instrumentación
              </span>
              <div class="flex justify-center overflow-x-auto">
                <svg viewBox="0 0 700 250" class="w-full max-w-[700px] text-xs font-sans select-none" style="min-width: 560px;">
                  <!-- ================= ETAPA 1: BUFFER BUFFER CON RG ================= -->
                  <!-- OpAmp 1 Superior -->
                  <polygon points="120,40 120,100 170,70" fill="#6366f1" fill-opacity="0.15" stroke="#6366f1" stroke-width="1.8"/>
                  <text x="127" y="58" font-weight="bold" fill="#6366f1" font-size="10">-</text>
                  <text x="127" y="88" font-weight="bold" fill="#6366f1" font-size="10">+</text>
                  <text x="140" y="73" font-size="9" font-weight="bold" fill="#4f46e5">OA_1</text>

                  <!-- Entrada V1 (+) al terminal no inversor -->
                  <line x1="30" y1="88" x2="120" y2="88" stroke="#3b82f6" stroke-width="1.8"/>
                  <circle cx="30" cy="88" r="3.5" fill="#3b82f6"/>
                  <text x="20" y="92" text-anchor="end" font-weight="bold" fill="#3b82f6" font-size="10.5">V_1</text>

                  <!-- OpAmp 2 Inferior -->
                  <polygon points="120,150 120,210 170,180" fill="#6366f1" fill-opacity="0.15" stroke="#6366f1" stroke-width="1.8"/>
                  <text x="127" y="168" font-weight="bold" fill="#6366f1" font-size="10">+</text>
                  <text x="127" y="198" font-weight="bold" fill="#6366f1" font-size="10">-</text>
                  <text x="140" y="183" font-size="9" font-weight="bold" fill="#4f46e5">OA_2</text>

                  <!-- Entrada V2 (+) al terminal no inversor -->
                  <line x1="30" y1="168" x2="120" y2="168" stroke="#3b82f6" stroke-width="1.8"/>
                  <circle cx="30" cy="168" r="3.5" fill="#3b82f6"/>
                  <text x="20" y="172" text-anchor="end" font-weight="bold" fill="#3b82f6" font-size="10.5">V_2</text>

                  <!-- Lazo de realimentación R1 superior -->
                  <line x1="170" y1="70" x2="190" y2="70" stroke="#475569" stroke-width="1.8"/>
                  <circle cx="190" cy="70" r="2.5" fill="#475569"/>
                  <line x1="190" y1="70" x2="190" y2="30" stroke="#475569" stroke-width="1.5"/>
                  <line x1="190" y1="30" x2="155" y2="30" stroke="#475569" stroke-width="1.5"/>
                  <rect x="135" y="22" width="20" height="16" fill="#6366f1" fill-opacity="0.2" stroke="#6366f1" stroke-width="1.2" rx="1.5"/>
                  <text x="145" y="16" text-anchor="middle" font-size="8" fill="#6366f1" font-weight="bold">R_1</text>
                  <line x1="135" y1="30" x2="95" y2="30" stroke="#475569" stroke-width="1.5"/>
                  <line x1="95" y1="30" x2="95" y2="55" stroke="#475569" stroke-width="1.5"/>
                  <line x1="95" y1="55" x2="120" y2="55" stroke="#475569" stroke-width="1.5"/>
                  <circle cx="95" cy="55" r="2.5" fill="#475569"/>

                  <!-- Resistencia central RG -->
                  <line x1="95" y1="55" x2="95" y2="110" stroke="#ef4444" stroke-width="1.8"/>
                  <rect x="87" y="110" width="16" height="30" fill="#ef4444" fill-opacity="0.25" stroke="#ef4444" stroke-width="1.8" rx="2"/>
                  <text x="75" y="128" text-anchor="end" font-weight="bold" fill="#ef4444" font-size="9.5">R_G</text>
                  <line x1="95" y1="140" x2="95" y2="195" stroke="#ef4444" stroke-width="1.8"/>
                  <circle cx="95" cy="195" r="2.5" fill="#475569"/>

                  <!-- Lazo de realimentación R1 inferior -->
                  <line x1="95" y1="195" x2="120" y2="195" stroke="#475569" stroke-width="1.5"/>
                  <line x1="95" y1="195" x2="95" y2="220" stroke="#475569" stroke-width="1.5"/>
                  <line x1="95" y1="220" x2="135" y2="220" stroke="#475569" stroke-width="1.5"/>
                  <rect x="135" y="212" width="20" height="16" fill="#6366f1" fill-opacity="0.2" stroke="#6366f1" stroke-width="1.2" rx="1.5"/>
                  <text x="145" y="238" text-anchor="middle" font-size="8" fill="#6366f1" font-weight="bold">R_1</text>
                  <line x1="155" y1="220" x2="190" y2="220" stroke="#475569" stroke-width="1.5"/>
                  <line x1="190" y1="220" x2="190" y2="180" stroke="#475569" stroke-width="1.5"/>
                  <circle cx="190" cy="180" r="2.5" fill="#475569"/>
                  <line x1="170" y1="180" x2="190" y2="180" stroke="#475569" stroke-width="1.8"/>

                  <!-- ================= ETAPA 2: RESTADOR DIFERENCIAL (OA3) ================= -->
                  <!-- R3 superior -->
                  <line x1="190" y1="70" x2="230" y2="70" stroke="#475569" stroke-width="1.5"/>
                  <rect x="230" y="62" width="22" height="16" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="1.2" rx="1.5"/>
                  <text x="241" y="56" text-anchor="middle" font-size="8" fill="#10b981" font-weight="bold">R_3</text>
                  <line x1="252" y1="70" x2="290" y2="70" stroke="#475569" stroke-width="1.5"/>
                  <line x1="290" y1="70" x2="290" y2="110" stroke="#475569" stroke-width="1.5"/>
                  <circle cx="290" cy="110" r="2.5" fill="#475569"/>

                  <!-- R3 inferior -->
                  <line x1="190" y1="180" x2="230" y2="180" stroke="#475569" stroke-width="1.5"/>
                  <rect x="230" y="172" width="22" height="16" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="1.2" rx="1.5"/>
                  <text x="241" y="166" text-anchor="middle" font-size="8" fill="#10b981" font-weight="bold">R_3</text>
                  <line x1="252" y1="180" x2="290" y2="180" stroke="#475569" stroke-width="1.5"/>
                  <line x1="290" y1="180" x2="290" y2="140" stroke="#475569" stroke-width="1.5"/>
                  <circle cx="290" cy="140" r="2.5" fill="#475569"/>

                  <!-- OpAmp 3 de salida -->
                  <polygon points="320,95 320,155 370,125" fill="#10b981" fill-opacity="0.15" stroke="#10b981" stroke-width="1.8"/>
                  <text x="327" y="113" font-weight="bold" fill="#10b981" font-size="10">-</text>
                  <text x="327" y="143" font-weight="bold" fill="#10b981" font-size="10">+</text>
                  <text x="340" y="128" font-size="9" font-weight="bold" fill="#059669">OA_3</text>

                  <line x1="290" y1="110" x2="320" y2="110" stroke="#475569" stroke-width="1.5"/>
                  <line x1="290" y1="140" x2="320" y2="140" stroke="#475569" stroke-width="1.5"/>

                  <!-- R4 de realimentación (OA3) -->
                  <line x1="290" y1="110" x2="290" y2="90" stroke="#475569" stroke-width="1.5"/>
                  <line x1="290" y1="90" x2="340" y2="90" stroke="#475569" stroke-width="1.5"/>
                  <rect x="340" y="82" width="22" height="16" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="1.2" rx="1.5"/>
                  <text x="351" y="76" text-anchor="middle" font-size="8" fill="#10b981" font-weight="bold">R_4</text>
                  <line x1="362" y1="90" x2="400" y2="90" stroke="#475569" stroke-width="1.5"/>
                  <line x1="400" y1="90" x2="400" y2="125" stroke="#475569" stroke-width="1.5"/>
                  <circle cx="400" cy="125" r="2.5" fill="#475569"/>

                  <!-- R4 a masa (terminal + OA3) -->
                  <line x1="290" y1="140" x2="290" y2="160" stroke="#475569" stroke-width="1.5"/>
                  <line x1="290" y1="160" x2="340" y2="160" stroke="#475569" stroke-width="1.5"/>
                  <rect x="340" y="152" width="22" height="16" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="1.2" rx="1.5"/>
                  <text x="351" y="178" text-anchor="middle" font-size="8" fill="#10b981" font-weight="bold">R_4</text>
                  <line x1="362" y1="160" x2="380" y2="160" stroke="#475569" stroke-width="1.5"/>
                  <line x1="380" y1="152" x2="380" y2="168" stroke="#475569" stroke-width="2"/>

                  <!-- Salida final Vo -->
                  <line x1="370" y1="125" x2="460" y2="125" stroke="#10b981" stroke-width="2"/>
                  <circle cx="460" cy="125" r="4" fill="#10b981"/>
                  <text x="475" y="129" font-weight="bold" fill="#10b981" font-size="12">V_o</text>

                  <!-- Cuadro de Ganancia y Propiedades -->
                  <rect x="490" y="30" width="195" height="175" rx="8" fill="#047857" fill-opacity="0.08" stroke="#047857" stroke-opacity="0.25"/>
                  <text x="587" y="52" text-anchor="middle" font-weight="bold" fill="#047857" font-size="10.5">Propiedades Cardinales</text>
                  <text x="500" y="75" font-weight="bold" fill="#334155" dark:fill="#cbd5e1" font-size="9">• Impedancia de entrada:</text>
                  <text x="510" y="90" fill="#64748b" font-size="8.5">R_in1, R_in2 ≈ ∞ (no cargan sensor)</text>
                  <text x="500" y="110" font-weight="bold" fill="#334155" dark:fill="#cbd5e1" font-size="9">• Ajuste de Ganancia:</text>
                  <text x="510" y="125" fill="#ef4444" font-weight="bold" font-size="8.5">¡Solo se modifica R_G!</text>
                  <text x="500" y="145" font-weight="bold" fill="#334155" dark:fill="#cbd5e1" font-size="9">• Rechazo de Modo Común:</text>
                  <text x="510" y="160" fill="#64748b" font-size="8.5">Etapa 1: A_d &gt; 1, pero A_cm = 1</text>
                  <text x="510" y="175" font-weight="bold" fill="#047857" font-size="9">CMRR global &gt; 100 - 120 dB</text>
                </svg>
              </div>
            </div>

            <div class="p-4 my-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-950 dark:text-emerald-200">
              <h5 class="font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <span>🎯</span> Ecuación de Ganancia del Amplificador de Instrumentación
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
