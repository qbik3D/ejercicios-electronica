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
        // ====================================================================
        // SECCIÓN 1.1: FÍSICA, SÍMBOLOS, CANALES N/P Y ECUACIONES
        // ====================================================================
        {
          id: 'e2-u1-fisica-jfet-mosfet',
          titulo: '1.1 Física, Símbolos y Ecuaciones: JFET, D-MOSFET y E-MOSFET (Canales N y P)',
          contenido: `
            <p class="mb-3 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
              A diferencia del transistor bipolar (BJT), que es un dispositivo de inyección de portadores minoritarios controlado por corriente de base ($i_B$), los <strong>transistores de efecto de campo (FET)</strong> son unipolares (la corriente se debe a un único tipo de portador: electrones en canal N o huecos en canal P) y están <strong>controlados por campo eléctrico transversal inducido por tensión</strong> aplicada a la compuerta (Gate). Su compuerta aislada (por juntura PN inversa en JFET o por una capa dieléctrica de $SiO_2$ en MOSFET) absorbe corriente continua prácticamente nula:
            </p>
            $$\\mathbf{I_G \\approx 0 \\implies R_{in} \\ge 10^{9}\\,\\Omega \\text{ (JFET)}, \\quad R_{in} \\ge 10^{12} - 10^{14}\\,\\Omega \\text{ (MOSFET)}}$$

            <!-- 1. LOS TRES GRANDES GRUPOS DE TRANSISTORES FET -->
            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Clasificación Familiar y Principio Físico</h5>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 my-3 text-xs">
              <!-- Tarjeta JFET -->
              <div class="p-3.5 rounded-xl bg-teal-500/10 border border-teal-500/30 text-slate-700 dark:text-slate-300">
                <span class="font-bold text-teal-800 dark:text-teal-300 text-xs uppercase tracking-wider block mb-1">
                  1. JFET (Junction FET)
                </span>
                <p class="text-[11px] leading-relaxed mb-1.5">
                  El canal semiconductor conductor está estrangulado lateralmente por la zona de carga espacial (ZCE) de dos junturas PN polarizadas en inversa.
                </p>
                <ul class="list-disc pl-4 space-y-0.5 text-[11px]">
                  <li><strong>Normally-ON:</strong> Conduce corriente máxima $I_{DSS}$ cuando $V_{GS} = 0$.</li>
                  <li><strong>Canal N:</strong> Portadores electrones. Requiere $V_P < 0$ y $V_P \\le V_{GS} \\le 0$.</li>
                  <li><strong>Canal P:</strong> Portadores huecos. Requiere $V_P > 0$ y $0 \\le V_{GS} \\le V_P$.</li>
                </ul>
              </div>

              <!-- Tarjeta D-MOSFET -->
              <div class="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-slate-700 dark:text-slate-300">
                <span class="font-bold text-blue-800 dark:text-blue-300 text-xs uppercase tracking-wider block mb-1">
                  2. D-MOSFET (Depletion / Agotamiento)
                </span>
                <p class="text-[11px] leading-relaxed mb-1.5">
                  Posee un <strong>canal físico semiconductor preexistente</strong> implantado durante la fabricación. Compuerta aislada por capa vítrea de dióxido de silicio ($SiO_2$).
                </p>
                <ul class="list-disc pl-4 space-y-0.5 text-[11px]">
                  <li><strong>Normally-ON:</strong> Conduce a $V_{GS} = 0$ ($I_D = I_{DSS}$).</li>
                  <li><strong>Modo Deplexión:</strong> Tensión de signo opuesto agota el canal ($I_D < I_{DSS}$).</li>
                  <li><strong>Modo Enriquecimiento:</strong> Tensión del mismo signo inyecta más portadores ($I_D > I_{DSS}$) sin corriente de compuerta ($I_G = 0$).</li>
                </ul>
              </div>

              <!-- Tarjeta E-MOSFET -->
              <div class="p-3.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-slate-700 dark:text-slate-300">
                <span class="font-bold text-indigo-800 dark:text-indigo-300 text-xs uppercase tracking-wider block mb-1">
                  3. E-MOSFET (Enhancement / Enriquecimiento)
                </span>
                <p class="text-[11px] leading-relaxed mb-1.5">
                  <strong>No posee canal físico</strong> a $V_{GS} = 0$ ($I_{DSS} \\approx 0$). Requiere una tensión umbral ($V_{th}$) para inducir una capa de inversión superficial.
                </p>
                <ul class="list-disc pl-4 space-y-0.5 text-[11px]">
                  <li><strong>Normally-OFF:</strong> Totalmente bloqueado en reposo ($I_D = 0$).</li>
                  <li><strong>Canal N:</strong> Requiere $V_{GS} > V_{th} > 0$ para atraer electrones.</li>
                  <li><strong>Canal P:</strong> Requiere $V_{GS} < V_{th} < 0$ (o $V_{SG} > |V_{th}|$).</li>
                  <li>Pilar absoluto de la microelectrónica digital (CMOS) y conmutación de potencia.</li>
                </ul>
              </div>
            </div>

            <!-- DIAGRAMA SVG 1: LOS 6 SÍMBOLOS IEEE Y SUS CURVAS DE TRANSFERENCIA -->
            <div class="my-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span class="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-2 text-center">
                📐 Símbolos Normalizados IEEE y Curvas de Transferencia $I_D$ vs $V_{GS}$
              </span>
              <div class="flex justify-center overflow-x-auto">
                <svg viewBox="0 0 740 310" class="w-full max-w-[740px] text-xs font-sans select-none" style="min-width: 640px;">
                  <!-- Encabezados de Columna -->
                  <text x="125" y="16" text-anchor="middle" font-weight="bold" fill="#0d9488" font-size="11">JFET (Junction FET)</text>
                  <text x="370" y="16" text-anchor="middle" font-weight="bold" fill="#2563eb" font-size="11">D-MOSFET (Deplexión / Agotamiento)</text>
                  <text x="615" y="16" text-anchor="middle" font-weight="bold" fill="#6366f1" font-size="11">E-MOSFET (Enriquecimiento)</text>

                  <!-- Líneas divisorias verticales -->
                  <line x1="245" y1="10" x2="245" y2="300" stroke="#cbd5e1" class="dark:stroke-slate-700" stroke-dasharray="3 3"/>
                  <line x1="495" y1="10" x2="495" y2="300" stroke="#cbd5e1" class="dark:stroke-slate-700" stroke-dasharray="3 3"/>

                  <!-- ================= COLUMNA 1: JFETs ================= -->
                  <!-- (1.1) JFET Canal N -->
                  <g transform="translate(10, 25)">
                    <rect x="0" y="0" width="105" height="115" rx="6" fill="#f8fafc" class="dark:fill-slate-800/40" stroke="#0d9488" stroke-width="1"/>
                    <text x="52" y="14" text-anchor="middle" font-weight="bold" fill="#0d9488" font-size="8.5">Canal N (V<tspan baseline-shift="sub" font-size="70%">P</tspan> &lt; 0)</text>
                    <!-- Símbolo JFET Canal N -->
                    <line x1="55" y1="30" x2="55" y2="85" stroke="#334155" class="dark:stroke-slate-300" stroke-width="3"/>
                    <line x1="55" y1="40" x2="80" y2="40" stroke="#475569" stroke-width="1.5"/>
                    <line x1="80" y1="40" x2="80" y2="25" stroke="#475569" stroke-width="1.5"/>
                    <text x="85" y="27" font-bold fill="#10b981" font-size="8">D</text>
                    <line x1="55" y1="75" x2="80" y2="75" stroke="#475569" stroke-width="1.5"/>
                    <line x1="80" y1="75" x2="80" y2="90" stroke="#475569" stroke-width="1.5"/>
                    <text x="85" y="93" font-bold fill="#3b82f6" font-size="8">S</text>
                    <!-- Compuerta N: flecha ENTRA -->
                    <line x1="20" y1="65" x2="55" y2="65" stroke="#475569" stroke-width="1.5"/>
                    <polygon points="46,65 37,60 37,70" fill="#0d9488"/>
                    <text x="16" y="68" text-anchor="end" font-bold fill="#0d9488" font-size="8">G</text>
                    <text x="52" y="107" text-anchor="middle" font-size="7.5" fill="#64748b">Flecha ENTRA</text>
                  </g>

                  <!-- (1.2) JFET Canal P -->
                  <g transform="translate(125, 25)">
                    <rect x="0" y="0" width="105" height="115" rx="6" fill="#f8fafc" class="dark:fill-slate-800/40" stroke="#0d9488" stroke-width="1"/>
                    <text x="52" y="14" text-anchor="middle" font-weight="bold" fill="#0d9488" font-size="8.5">Canal P (V<tspan baseline-shift="sub" font-size="70%">P</tspan> &gt; 0)</text>
                    <!-- Símbolo JFET Canal P -->
                    <line x1="55" y1="30" x2="55" y2="85" stroke="#334155" class="dark:stroke-slate-300" stroke-width="3"/>
                    <line x1="55" y1="40" x2="80" y2="40" stroke="#475569" stroke-width="1.5"/>
                    <line x1="80" y1="40" x2="80" y2="25" stroke="#475569" stroke-width="1.5"/>
                    <text x="85" y="27" font-bold fill="#10b981" font-size="8">S</text>
                    <line x1="55" y1="75" x2="80" y2="75" stroke="#475569" stroke-width="1.5"/>
                    <line x1="80" y1="75" x2="80" y2="90" stroke="#475569" stroke-width="1.5"/>
                    <text x="85" y="93" font-bold fill="#3b82f6" font-size="8">D</text>
                    <!-- Compuerta P: flecha SALE -->
                    <line x1="20" y1="65" x2="55" y2="65" stroke="#475569" stroke-width="1.5"/>
                    <polygon points="35,65 44,60 44,70" fill="#0d9488"/>
                    <text x="16" y="68" text-anchor="end" font-bold fill="#0d9488" font-size="8">G</text>
                    <text x="52" y="107" text-anchor="middle" font-size="7.5" fill="#64748b">Flecha SALE</text>
                  </g>

                  <!-- Curvas de Transferencia JFET (Inferior) -->
                  <g transform="translate(15, 150)">
                    <rect x="0" y="0" width="215" height="145" rx="6" fill="#f8fafc" class="dark:fill-slate-800/40" stroke="#cbd5e1" class="dark:stroke-slate-700"/>
                    <text x="107" y="14" text-anchor="middle" font-weight="bold" fill="#0d9488" font-size="8.5">Curvas de Shockley (JFET)</text>
                    <!-- Ejes Cartesiano centrado en VGS = 0 -->
                    <line x1="107" y1="130" x2="107" y2="25" stroke="#475569" stroke-width="1.2"/>
                    <text x="107" y="22" text-anchor="middle" font-bold fill="#475569" font-size="7.5">I<tspan baseline-shift="sub" font-size="70%">D</tspan></text>
                    <line x1="15" y1="120" x2="200" y2="120" stroke="#475569" stroke-width="1.2"/>
                    <text x="200" y="130" text-anchor="end" font-bold fill="#475569" font-size="7.5">V<tspan baseline-shift="sub" font-size="70%">GS</tspan></text>
                    <!-- Curva Canal N: en el 2do cuadrante (VGS < 0) -->
                    <path d="M 30,120 Q 60,115 107,45" fill="none" stroke="#0d9488" stroke-width="2"/>
                    <circle cx="30" cy="120" r="2.5" fill="#0d9488"/>
                    <text x="30" y="131" text-anchor="middle" font-bold fill="#0d9488" font-size="7">V<tspan baseline-shift="sub" font-size="70%">P(N)</tspan></text>
                    <circle cx="107" cy="45" r="2.5" fill="#0d9488"/>
                    <text x="112" y="47" text-anchor="start" font-bold fill="#0d9488" font-size="7">I<tspan baseline-shift="sub" font-size="70%">DSS</tspan></text>
                    <!-- Curva Canal P: en el 1er cuadrante (VGS > 0) -->
                    <path d="M 185,120 Q 155,115 107,45" fill="none" stroke="#0f766e" stroke-width="1.8" stroke-dasharray="3 2"/>
                    <circle cx="185" cy="120" r="2.5" fill="#0f766e"/>
                    <text x="185" y="131" text-anchor="middle" font-bold fill="#0f766e" font-size="7">V<tspan baseline-shift="sub" font-size="70%">P(P)</tspan></text>
                    <text x="50" y="70" font-size="7" fill="#0d9488">Canal N</text>
                    <text x="145" y="70" font-size="7" fill="#0f766e">Canal P</text>
                  </g>

                  <!-- ================= COLUMNA 2: D-MOSFETs ================= -->
                  <!-- (2.1) D-MOSFET Canal N -->
                  <g transform="translate(255, 25)">
                    <rect x="0" y="0" width="105" height="115" rx="6" fill="#f8fafc" class="dark:fill-slate-800/40" stroke="#2563eb" stroke-width="1"/>
                    <text x="52" y="14" text-anchor="middle" font-weight="bold" fill="#2563eb" font-size="8.5">Canal N (V<tspan baseline-shift="sub" font-size="70%">P</tspan> &lt; 0)</text>
                    <!-- Símbolo: Barra CONTINUA -->
                    <line x1="45" y1="35" x2="45" y2="85" stroke="#2563eb" stroke-width="2.5"/>
                    <line x1="20" y1="60" x2="45" y2="60" stroke="#2563eb" stroke-width="1.5"/>
                    <text x="16" y="64" text-anchor="end" font-bold fill="#2563eb" font-size="8">G</text>
                    <!-- Barra de canal continua -->
                    <line x1="55" y1="35" x2="55" y2="85" stroke="#334155" class="dark:stroke-slate-300" stroke-width="2.8"/>
                    <line x1="55" y1="40" x2="80" y2="40" stroke="#475569" stroke-width="1.5"/>
                    <line x1="80" y1="40" x2="80" y2="25" stroke="#475569" stroke-width="1.5"/>
                    <text x="85" y="27" font-bold fill="#10b981" font-size="8">D</text>
                    <line x1="55" y1="80" x2="80" y2="80" stroke="#475569" stroke-width="1.5"/>
                    <line x1="80" y1="80" x2="80" y2="90" stroke="#475569" stroke-width="1.5"/>
                    <text x="85" y="93" font-bold fill="#3b82f6" font-size="8">S</text>
                    <!-- Sustrato/Bulk con flecha ENTRA -->
                    <line x1="55" y1="60" x2="80" y2="60" stroke="#475569" stroke-width="1.5"/>
                    <polygon points="57,60 66,55 66,65" fill="#2563eb"/>
                    <line x1="80" y1="60" x2="80" y2="80" stroke="#475569" stroke-width="1.5"/>
                    <text x="52" y="107" text-anchor="middle" font-size="7.5" fill="#64748b">Barra Sólida Continua</text>
                  </g>

                  <!-- (2.2) D-MOSFET Canal P -->
                  <g transform="translate(370, 25)">
                    <rect x="0" y="0" width="105" height="115" rx="6" fill="#f8fafc" class="dark:fill-slate-800/40" stroke="#2563eb" stroke-width="1"/>
                    <text x="52" y="14" text-anchor="middle" font-weight="bold" fill="#2563eb" font-size="8.5">Canal P (V<tspan baseline-shift="sub" font-size="70%">P</tspan> &gt; 0)</text>
                    <line x1="45" y1="35" x2="45" y2="85" stroke="#2563eb" stroke-width="2.5"/>
                    <line x1="20" y1="60" x2="45" y2="60" stroke="#2563eb" stroke-width="1.5"/>
                    <text x="16" y="64" text-anchor="end" font-bold fill="#2563eb" font-size="8">G</text>
                    <line x1="55" y1="35" x2="55" y2="85" stroke="#334155" class="dark:stroke-slate-300" stroke-width="2.8"/>
                    <line x1="55" y1="40" x2="80" y2="40" stroke="#475569" stroke-width="1.5"/>
                    <line x1="80" y1="40" x2="80" y2="25" stroke="#475569" stroke-width="1.5"/>
                    <text x="85" y="27" font-bold fill="#10b981" font-size="8">S</text>
                    <line x1="55" y1="80" x2="80" y2="80" stroke="#475569" stroke-width="1.5"/>
                    <line x1="80" y1="80" x2="80" y2="90" stroke="#475569" stroke-width="1.5"/>
                    <text x="85" y="93" font-bold fill="#3b82f6" font-size="8">D</text>
                    <!-- Sustrato/Bulk con flecha SALE -->
                    <line x1="55" y1="60" x2="80" y2="60" stroke="#475569" stroke-width="1.5"/>
                    <polygon points="76,60 67,55 67,65" fill="#2563eb"/>
                    <line x1="80" y1="60" x2="80" y2="40" stroke="#475569" stroke-width="1.5"/>
                    <text x="52" y="107" text-anchor="middle" font-size="7.5" fill="#64748b">Flecha Sustrato SALE</text>
                  </g>

                  <!-- Curva Transferencia D-MOSFET Canal N (Modo Dual) -->
                  <g transform="translate(260, 150)">
                    <rect x="0" y="0" width="215" height="145" rx="6" fill="#f8fafc" class="dark:fill-slate-800/40" stroke="#cbd5e1" class="dark:stroke-slate-700"/>
                    <text x="107" y="14" text-anchor="middle" font-weight="bold" fill="#2563eb" font-size="8.5">D-MOSFET Canal N: Modo Dual</text>
                    <line x1="90" y1="130" x2="90" y2="25" stroke="#475569" stroke-width="1.2"/>
                    <text x="90" y="22" text-anchor="middle" font-bold fill="#475569" font-size="7.5">I<tspan baseline-shift="sub" font-size="70%">D</tspan></text>
                    <line x1="15" y1="120" x2="200" y2="120" stroke="#475569" stroke-width="1.2"/>
                    <text x="200" y="130" text-anchor="end" font-bold fill="#475569" font-size="7.5">V<tspan baseline-shift="sub" font-size="70%">GS</tspan></text>
                    <!-- Curva extendida: cruza eje Y y sigue subiendo para VGS > 0 -->
                    <path d="M 30,120 Q 60,110 90,65 Q 120,20 155,10" fill="none" stroke="#2563eb" stroke-width="2"/>
                    <circle cx="30" cy="120" r="2.5" fill="#2563eb"/>
                    <text x="30" y="131" text-anchor="middle" font-bold fill="#2563eb" font-size="7">V<tspan baseline-shift="sub" font-size="70%">P</tspan> (&lt;0)</text>
                    <circle cx="90" cy="65" r="2.5" fill="#2563eb"/>
                    <text x="95" y="70" text-anchor="start" font-bold fill="#2563eb" font-size="7">I<tspan baseline-shift="sub" font-size="70%">DSS</tspan></text>
                    <!-- Etiquetas de modo -->
                    <rect x="25" y="45" width="55" height="13" rx="2" fill="#dbeafe" class="dark:fill-blue-950/60"/>
                    <text x="52" y="54" text-anchor="middle" font-weight="bold" fill="#1d4ed8" font-size="6.5">Deplexión (V<tspan baseline-shift="sub" font-size="70%">GS</tspan> &lt; 0)</text>
                    <rect x="110" y="45" width="70" height="13" rx="2" fill="#dbeafe" class="dark:fill-blue-950/60"/>
                    <text x="145" y="54" text-anchor="middle" font-weight="bold" fill="#1d4ed8" font-size="6.5">Enriquecimiento (V<tspan baseline-shift="sub" font-size="70%">GS</tspan> &gt; 0)</text>
                  </g>

                  <!-- ================= COLUMNA 3: E-MOSFETs ================= -->
                  <!-- (3.1) E-MOSFET Canal N -->
                  <g transform="translate(505, 25)">
                    <rect x="0" y="0" width="105" height="115" rx="6" fill="#f8fafc" class="dark:fill-slate-800/40" stroke="#6366f1" stroke-width="1"/>
                    <text x="52" y="14" text-anchor="middle" font-weight="bold" fill="#6366f1" font-size="8.5">Canal N (V<tspan baseline-shift="sub" font-size="70%">th</tspan> &gt; 0)</text>
                    <line x1="45" y1="35" x2="45" y2="85" stroke="#6366f1" stroke-width="2.5"/>
                    <line x1="20" y1="60" x2="45" y2="60" stroke="#6366f1" stroke-width="1.5"/>
                    <text x="16" y="64" text-anchor="end" font-bold fill="#6366f1" font-size="8">G</text>
                    <!-- Canal SEGMENTADO en 3 partes -->
                    <line x1="55" y1="35" x2="55" y2="48" stroke="#334155" class="dark:stroke-slate-300" stroke-width="2.8"/>
                    <line x1="55" y1="54" x2="55" y2="66" stroke="#334155" class="dark:stroke-slate-300" stroke-width="2.8"/>
                    <line x1="55" y1="72" x2="55" y2="85" stroke="#334155" class="dark:stroke-slate-300" stroke-width="2.8"/>
                    <line x1="55" y1="42" x2="80" y2="42" stroke="#475569" stroke-width="1.5"/>
                    <line x1="80" y1="42" x2="80" y2="25" stroke="#475569" stroke-width="1.5"/>
                    <text x="85" y="27" font-bold fill="#10b981" font-size="8">D</text>
                    <line x1="55" y1="78" x2="80" y2="78" stroke="#475569" stroke-width="1.5"/>
                    <line x1="80" y1="78" x2="80" y2="90" stroke="#475569" stroke-width="1.5"/>
                    <text x="85" y="93" font-bold fill="#3b82f6" font-size="8">S</text>
                    <line x1="55" y1="60" x2="80" y2="60" stroke="#475569" stroke-width="1.5"/>
                    <polygon points="57,60 66,55 66,65" fill="#6366f1"/>
                    <line x1="80" y1="60" x2="80" y2="78" stroke="#475569" stroke-width="1.5"/>
                    <text x="52" y="107" text-anchor="middle" font-size="7.5" fill="#64748b">Canal Segmentado (3 partes)</text>
                  </g>

                  <!-- (3.2) E-MOSFET Canal P -->
                  <g transform="translate(620, 25)">
                    <rect x="0" y="0" width="105" height="115" rx="6" fill="#f8fafc" class="dark:fill-slate-800/40" stroke="#6366f1" stroke-width="1"/>
                    <text x="52" y="14" text-anchor="middle" font-weight="bold" fill="#6366f1" font-size="8.5">Canal P (V<tspan baseline-shift="sub" font-size="70%">th</tspan> &lt; 0)</text>
                    <line x1="45" y1="35" x2="45" y2="85" stroke="#6366f1" stroke-width="2.5"/>
                    <line x1="20" y1="60" x2="45" y2="60" stroke="#6366f1" stroke-width="1.5"/>
                    <text x="16" y="64" text-anchor="end" font-bold fill="#6366f1" font-size="8">G</text>
                    <!-- Canal Segmentado P -->
                    <line x1="55" y1="35" x2="55" y2="48" stroke="#334155" class="dark:stroke-slate-300" stroke-width="2.8"/>
                    <line x1="55" y1="54" x2="55" y2="66" stroke="#334155" class="dark:stroke-slate-300" stroke-width="2.8"/>
                    <line x1="55" y1="72" x2="55" y2="85" stroke="#334155" class="dark:stroke-slate-300" stroke-width="2.8"/>
                    <line x1="55" y1="42" x2="80" y2="42" stroke="#475569" stroke-width="1.5"/>
                    <line x1="80" y1="42" x2="80" y2="25" stroke="#475569" stroke-width="1.5"/>
                    <text x="85" y="27" font-bold fill="#10b981" font-size="8">S</text>
                    <line x1="55" y1="78" x2="80" y2="78" stroke="#475569" stroke-width="1.5"/>
                    <line x1="80" y1="78" x2="80" y2="90" stroke="#475569" stroke-width="1.5"/>
                    <text x="85" y="93" font-bold fill="#3b82f6" font-size="8">D</text>
                    <line x1="55" y1="60" x2="80" y2="60" stroke="#475569" stroke-width="1.5"/>
                    <polygon points="76,60 67,55 67,65" fill="#6366f1"/>
                    <line x1="80" y1="60" x2="80" y2="42" stroke="#475569" stroke-width="1.5"/>
                    <text x="52" y="107" text-anchor="middle" font-size="7.5" fill="#64748b">Flecha Sustrato SALE</text>
                  </g>

                  <!-- Curva Transferencia E-MOSFETs (Canal N vs P) -->
                  <g transform="translate(510, 150)">
                    <rect x="0" y="0" width="215" height="145" rx="6" fill="#f8fafc" class="dark:fill-slate-800/40" stroke="#cbd5e1" class="dark:stroke-slate-700"/>
                    <text x="107" y="14" text-anchor="middle" font-weight="bold" fill="#6366f1" font-size="8.5">E-MOSFET: Curvas Cuadráticas</text>
                    <line x1="107" y1="130" x2="107" y2="25" stroke="#475569" stroke-width="1.2"/>
                    <text x="107" y="22" text-anchor="middle" font-bold fill="#475569" font-size="7.5">I<tspan baseline-shift="sub" font-size="70%">D</tspan></text>
                    <line x1="15" y1="120" x2="200" y2="120" stroke="#475569" stroke-width="1.2"/>
                    <text x="200" y="130" text-anchor="end" font-bold fill="#475569" font-size="7.5">V<tspan baseline-shift="sub" font-size="70%">GS</tspan></text>
                    <!-- E-MOSFET Canal N: inactiva hasta V_th > 0 -->
                    <line x1="107" y1="120" x2="145" y2="120" stroke="#6366f1" stroke-width="2.5"/>
                    <path d="M 145,120 Q 165,115 195,45" fill="none" stroke="#6366f1" stroke-width="2"/>
                    <circle cx="145" cy="120" r="2.5" fill="#6366f1"/>
                    <text x="145" y="131" text-anchor="middle" font-bold fill="#6366f1" font-size="7">V<tspan baseline-shift="sub" font-size="70%">th</tspan>(N)</text>
                    <text x="175" y="70" font-size="7" font-weight="bold" fill="#6366f1">Canal N</text>
                    <!-- E-MOSFET Canal P: inactiva hasta V_th < 0 -->
                    <line x1="69" y1="120" x2="107" y2="120" stroke="#4f46e5" stroke-width="2.5"/>
                    <path d="M 69,120 Q 49,115 19,45" fill="none" stroke="#4f46e5" stroke-width="1.8" stroke-dasharray="3 2"/>
                    <circle cx="69" cy="120" r="2.5" fill="#4f46e5"/>
                    <text x="69" y="131" text-anchor="middle" font-bold fill="#4f46e5" font-size="7">V<tspan baseline-shift="sub" font-size="70%">th</tspan>(P)</text>
                    <text x="40" y="70" font-size="7" font-weight="bold" fill="#4f46e5">Canal P</text>
                  </g>
                </svg>
              </div>
            </div>

            <!-- TABLA COMPARATIVA MAESTRA DE LOS 6 DISPOSITIVOS FET -->
            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-6 mb-2">Tabla Maestra de Ecuaciones y Regiones en Saturación</h5>
            <div class="overflow-x-auto my-3">
              <table class="w-full text-xs text-left border-collapse border border-slate-200 dark:border-slate-800">
                <thead>
                  <tr class="bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 font-mono">
                    <th class="p-2 border border-slate-200 dark:border-slate-800">Dispositivo</th>
                    <th class="p-2 border border-slate-200 dark:border-slate-800">Canal</th>
                    <th class="p-2 border border-slate-200 dark:border-slate-800">Parámetros Clave</th>
                    <th class="p-2 border border-slate-200 dark:border-slate-800">Condición Saturación</th>
                    <th class="p-2 border border-slate-200 dark:border-slate-800">Ecuación de Corriente $I_D$</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 dark:divide-slate-800 font-mono text-[11px]">
                  <!-- JFET N -->
                  <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td class="p-2 font-bold text-teal-600 dark:text-teal-400 font-sans">JFET</td>
                    <td class="p-2 font-bold">Canal N</td>
                    <td class="p-2">$I_{DSS} > 0, \\; V_P < 0$</td>
                    <td class="p-2">$V_{DS} \\ge V_{GS} - V_P$</td>
                    <td class="p-2 font-bold">$I_D = I_{DSS} \\left(1 - \\frac{V_{GS}}{V_P}\\right)^2$</td>
                  </tr>
                  <!-- JFET P -->
                  <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td class="p-2 font-bold text-teal-600 dark:text-teal-400 font-sans">JFET</td>
                    <td class="p-2 font-bold">Canal P</td>
                    <td class="p-2">$I_{DSS} > 0, \\; V_P > 0$</td>
                    <td class="p-2">$|V_{DS}| \\ge V_{GS} - V_P$ ($V_{SD} \\ge V_{SG} - V_P$)</td>
                    <td class="p-2 font-bold">$I_D = I_{DSS} \\left(1 - \\frac{V_{GS}}{V_P}\\right)^2$</td>
                  </tr>
                  <!-- D-MOSFET N -->
                  <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td class="p-2 font-bold text-blue-600 dark:text-blue-400 font-sans">D-MOSFET</td>
                    <td class="p-2 font-bold">Canal N</td>
                    <td class="p-2">$I_{DSS} > 0, \\; V_P < 0$</td>
                    <td class="p-2">$V_{DS} \\ge V_{GS} - V_P$</td>
                    <td class="p-2 font-bold">$I_D = I_{DSS} \\left(1 - \\frac{V_{GS}}{V_P}\\right)^2$ (para $V_{GS} \\ge V_P$)</td>
                  </tr>
                  <!-- D-MOSFET P -->
                  <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td class="p-2 font-bold text-blue-600 dark:text-blue-400 font-sans">D-MOSFET</td>
                    <td class="p-2 font-bold">Canal P</td>
                    <td class="p-2">$I_{DSS} > 0, \\; V_P > 0$</td>
                    <td class="p-2">$|V_{DS}| \\ge V_{GS} - V_P$</td>
                    <td class="p-2 font-bold">$I_D = I_{DSS} \\left(1 - \\frac{V_{GS}}{V_P}\\right)^2$</td>
                  </tr>
                  <!-- E-MOSFET N -->
                  <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td class="p-2 font-bold text-indigo-600 dark:text-indigo-400 font-sans">E-MOSFET</td>
                    <td class="p-2 font-bold">Canal N</td>
                    <td class="p-2">$V_{th} > 0, \\; k_n = \\frac{1}{2}\\mu_n C_{ox}\\frac{W}{L}$</td>
                    <td class="p-2">$V_{DS} \\ge V_{GS} - V_{th}$</td>
                    <td class="p-2 font-bold">$I_D = k_n (V_{GS} - V_{th})^2 (1 + \\lambda V_{DS})$</td>
                  </tr>
                  <!-- E-MOSFET P -->
                  <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td class="p-2 font-bold text-indigo-600 dark:text-indigo-400 font-sans">E-MOSFET</td>
                    <td class="p-2 font-bold">Canal P</td>
                    <td class="p-2">$V_{th} < 0, \\; k_p = \\frac{1}{2}\\mu_p C_{ox}\\frac{W}{L}$</td>
                    <td class="p-2">$V_{SD} \\ge V_{SG} - |V_{th}|$</td>
                    <td class="p-2 font-bold">$I_D = k_p (V_{SG} - |V_{th}|)^2 (1 + \\lambda V_{SD})$</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- CURVAS DE SALIDA ID vs VDS Y REGIONES DE OPERACIÓN -->
            <div class="my-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span class="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-2 text-center">
                📈 Curvas Características de Salida ($I_D$ vs $V_{DS}$) y Frontera de Saturación
              </span>
              <div class="flex justify-center overflow-x-auto">
                <svg viewBox="0 0 680 220" class="w-full max-w-[680px] text-xs font-sans select-none" style="min-width: 540px;">
                  <!-- Ejes -->
                  <line x1="70" y1="180" x2="70" y2="20" stroke="#475569" stroke-width="2"/>
                  <polygon points="66,23 70,14 74,23" fill="#475569"/>
                  <text x="63" y="18" text-anchor="end" font-bold fill="#475569" font-size="11">I<tspan baseline-shift="sub" font-size="70%">D</tspan> (mA)</text>

                  <line x1="70" y1="180" x2="640" y2="180" stroke="#475569" stroke-width="2"/>
                  <polygon points="638,176 647,180 638,184" fill="#475569"/>
                  <text x="645" y="196" text-anchor="end" font-bold fill="#475569" font-size="11">V<tspan baseline-shift="sub" font-size="70%">DS</tspan> (V)</text>

                  <!-- Zona Óhmica / Tríodo sombreada -->
                  <path d="M 70,180 Q 150,165 240,40 L 70,40 Z" fill="#3b82f6" fill-opacity="0.08"/>
                  <text x="120" y="70" text-anchor="middle" font-weight="bold" fill="#2563eb" font-size="10">Zona Óhmica / Tríodo</text>
                  <text x="120" y="83" text-anchor="middle" fill="#64748b" font-size="8.5">(Resistencia controlada R<tspan baseline-shift="sub" font-size="70%">DS</tspan>)</text>
                  <text x="120" y="95" text-anchor="middle" fill="#64748b" font-size="8">V<tspan baseline-shift="sub" font-size="70%">DS</tspan> &lt; V<tspan baseline-shift="sub" font-size="70%">GS</tspan> − V<tspan baseline-shift="sub" font-size="70%">th</tspan></text>

                  <!-- Zona de Saturación / Activa -->
                  <text x="440" y="55" text-anchor="middle" font-weight="bold" fill="#059669" font-size="11">Zona de Saturación / Pinch-Off</text>
                  <text x="440" y="68" text-anchor="middle" fill="#64748b" font-size="9">(Fuente de corriente controlada por V<tspan baseline-shift="sub" font-size="70%">GS</tspan>)</text>
                  <text x="440" y="80" text-anchor="middle" fill="#059669" font-weight="bold" font-size="8.5">V<tspan baseline-shift="sub" font-size="70%">DS</tspan> ≥ V<tspan baseline-shift="sub" font-size="70%">GS</tspan> − V<tspan baseline-shift="sub" font-size="70%">th</tspan></text>

                  <!-- Parábola límite de pinch-off -->
                  <path d="M 70,180 Q 150,165 240,40" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="4 3"/>
                  <text x="250" y="45" font-weight="bold" fill="#ef4444" font-size="9">V<tspan baseline-shift="sub" font-size="70%">DS,sat</tspan> = V<tspan baseline-shift="sub" font-size="70%">GS</tspan> − V<tspan baseline-shift="sub" font-size="70%">th</tspan></text>

                  <!-- Curva 1: V_GS = V_th (Corte) -->
                  <line x1="70" y1="180" x2="620" y2="180" stroke="#64748b" stroke-width="3"/>
                  <text x="625" y="177" font-bold fill="#64748b" font-size="8.5">V<tspan baseline-shift="sub" font-size="70%">GS</tspan> ≤ V<tspan baseline-shift="sub" font-size="70%">th</tspan> (Corte, I<tspan baseline-shift="sub" font-size="70%">D</tspan> = 0)</text>

                  <!-- Curva 2: V_GS1 -->
                  <path d="M 70,180 Q 100,160 120,150 L 610,146" fill="none" stroke="#94a3b8" stroke-width="1.6"/>
                  <text x="615" y="148" fill="#64748b" font-size="8.5">V<tspan baseline-shift="sub" font-size="70%">GS1</tspan></text>

                  <!-- Curva 3: V_GS2 -->
                  <path d="M 70,180 Q 120,135 155,115 L 610,108" fill="none" stroke="#94a3b8" stroke-width="1.6"/>
                  <text x="615" y="110" fill="#64748b" font-size="8.5">V<tspan baseline-shift="sub" font-size="70%">GS2</tspan></text>

                  <!-- Curva 4: V_GS3 -->
                  <path d="M 70,180 Q 145,100 195,75 L 610,66" fill="none" stroke="#6366f1" stroke-width="2"/>
                  <text x="615" y="68" font-bold fill="#6366f1" font-size="9">V<tspan baseline-shift="sub" font-size="70%">GS3</tspan> (Punto Q)</text>

                  <!-- Curva 5: V_GS4 -->
                  <path d="M 70,180 Q 170,60 235,38 L 610,27" fill="none" stroke="#94a3b8" stroke-width="1.6"/>
                  <text x="615" y="29" fill="#64748b" font-size="8.5">V<tspan baseline-shift="sub" font-size="70%">GS4</tspan></text>

                  <!-- Pendiente de Efecto Early (λ) -->
                  <line x1="380" y1="70" x2="520" y2="67.5" stroke="#f59e0b" stroke-width="1.3" stroke-dasharray="2 2"/>
                  <text x="460" y="96" text-anchor="middle" font-mono font-bold fill="#d97706" font-size="8">Pendiente = 1/r<tspan baseline-shift="sub" font-size="70%">o</tspan> = λ·I<tspan baseline-shift="sub" font-size="70%">DQ</tspan></text>
                </svg>
              </div>
            </div>
          `
        },

        // ====================================================================
        // SECCIÓN 1.2: MÉTODOS DE POLARIZACIÓN DC Y ANÁLISIS DE CIRCUITOS
        // ====================================================================
        {
          id: 'e2-u1-polarizacion-dc',
          titulo: '1.2 Métodos de Polarización DC y Algoritmo de Análisis de Circuitos FET',
          contenido: `
            <p class="mb-3 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
              Dado que la compuerta no absorbe corriente en continua (<strong>$I_G = 0$</strong>), <strong>la polarización de compuerta está totalmente desacoplada de la corriente de drenaje</strong>: las resistencias de compuerta ($R_G, R_1, R_2$) no sufren ninguna caída producida por el transistor. A continuación se analizan analíticamente las cuatro topologías clásicas de polarización y el algoritmo para resolver cualquier circuito en exámenes.
            </p>

            <!-- DIAGRAMA SVG DE LAS 4 TOPOLOGÍAS DE POLARIZACIÓN -->
            <div class="my-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span class="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-2 text-center">
                🔌 Topologías Clásicas de Polarización en Continua (DC)
              </span>
              <div class="flex justify-center overflow-x-auto">
                <svg viewBox="0 0 740 230" class="w-full max-w-[740px] text-xs font-sans select-none" style="min-width: 640px;">
                  <!-- ================= (a) AUTOPOLARIZACIÓN (JFET) ================= -->
                  <g transform="translate(10, 5)">
                    <rect x="0" y="0" width="165" height="215" rx="8" fill="#f8fafc" class="dark:fill-slate-800/40" stroke="#0d9488" stroke-width="1.2"/>
                    <text x="82" y="15" text-anchor="middle" font-weight="bold" fill="#0d9488" font-size="9.5">(a) Autopolarización</text>
                    <text x="82" y="25" text-anchor="middle" fill="#64748b" font-size="7.5">JFET y D-MOSFET</text>

                    <!-- VDD -->
                    <line x1="30" y1="42" x2="140" y2="42" stroke="#ef4444" stroke-width="1.8"/>
                    <circle cx="105" cy="42" r="2.5" fill="#ef4444"/>
                    <text x="105" y="37" text-anchor="middle" font-bold fill="#ef4444" font-size="8">+V<tspan baseline-shift="sub" font-size="70%">DD</tspan></text>

                    <!-- RD -->
                    <line x1="105" y1="38" x2="105" y2="48" stroke="#64748b" stroke-width="1.3"/>
                    <rect x="98" y="48" width="14" height="22" fill="none" stroke="#10b981" stroke-width="1.4"/>
                    <text x="117" y="62" fill="#10b981" font-size="8">R<tspan baseline-shift="sub" font-size="70%">D</tspan></text>
                    <line x1="105" y1="70" x2="105" y2="80" stroke="#64748b" stroke-width="1.3"/>

                    <!-- JFET Canal N -->
                    <line x1="85" y1="80" x2="85" y2="115" stroke="#334155" class="dark:stroke-slate-300" stroke-width="2.5"/>
                    <line x1="85" y1="86" x2="105" y2="86" stroke="#475569" stroke-width="1.3"/>
                    <line x1="105" y1="80" x2="105" y2="86" stroke="#475569" stroke-width="1.3"/>
                    <line x1="85" y1="108" x2="105" y2="108" stroke="#475569" stroke-width="1.3"/>
                    <line x1="105" y1="108" x2="105" y2="116" stroke="#475569" stroke-width="1.3"/>
                    <!-- Compuerta RG a masa -->
                    <line x1="55" y1="100" x2="85" y2="100" stroke="#475569" stroke-width="1.3"/>
                    <polygon points="76,100 68,96 68,104" fill="#0d9488"/>
                    <line x1="55" y1="100" x2="55" y2="120" stroke="#64748b" stroke-width="1.3"/>
                    <rect x="48" y="120" width="14" height="22" fill="none" stroke="#0d9488" stroke-width="1.4"/>
                    <text x="42" y="133" text-anchor="end" fill="#0d9488" font-size="8">R<tspan baseline-shift="sub" font-size="70%">G</tspan></text>
                    <line x1="55" y1="142" x2="55" y2="155" stroke="#64748b" stroke-width="1.3"/>
                    <line x1="48" y1="155" x2="62" y2="155" stroke="#475569" stroke-width="1.5"/>

                    <!-- RS a masa -->
                    <line x1="105" y1="116" x2="105" y2="122" stroke="#64748b" stroke-width="1.3"/>
                    <rect x="98" y="122" width="14" height="22" fill="none" stroke="#a855f7" stroke-width="1.4"/>
                    <text x="117" y="135" fill="#a855f7" font-size="8">R<tspan baseline-shift="sub" font-size="70%">S</tspan></text>
                    <line x1="105" y1="144" x2="105" y2="155" stroke="#64748b" stroke-width="1.3"/>
                    <line x1="98" y1="155" x2="112" y2="155" stroke="#475569" stroke-width="1.5"/>

                    <!-- Ecuaciones clave -->
                    <rect x="8" y="165" width="149" height="42" rx="4" fill="#0d9488" fill-opacity="0.08" stroke="#0d9488" stroke-opacity="0.3"/>
                    <text x="82" y="178" text-anchor="middle" font-bold fill="#0f766e" font-size="8">V<tspan baseline-shift="sub" font-size="70%">G</tspan> = 0 (I<tspan baseline-shift="sub" font-size="70%">G</tspan> = 0)</text>
                    <text x="82" y="190" text-anchor="middle" font-bold fill="#0f766e" font-size="8.5">V<tspan baseline-shift="sub" font-size="70%">GS</tspan> = −I<tspan baseline-shift="sub" font-size="70%">D</tspan> · R<tspan baseline-shift="sub" font-size="70%">S</tspan></text>
                    <text x="82" y="202" text-anchor="middle" fill="#64748b" font-size="7.5">I<tspan baseline-shift="sub" font-size="70%">D</tspan> = I<tspan baseline-shift="sub" font-size="70%">DSS</tspan> (1 − V<tspan baseline-shift="sub" font-size="70%">GS</tspan>/V<tspan baseline-shift="sub" font-size="70%">P</tspan>)<tspan baseline-shift="super" font-size="70%">2</tspan></text>
                  </g>

                  <!-- ================= (b) DIVISOR RESISTIVO (UNIVERSAL) ================= -->
                  <g transform="translate(190, 5)">
                    <rect x="0" y="0" width="175" height="215" rx="8" fill="#f8fafc" class="dark:fill-slate-800/40" stroke="#3b82f6" stroke-width="1.2"/>
                    <text x="87" y="15" text-anchor="middle" font-weight="bold" fill="#2563eb" font-size="9.5">(b) Divisor Resistivo</text>
                    <text x="87" y="25" text-anchor="middle" fill="#64748b" font-size="7.5">Universal (E-MOSFET, D-MOS, JFET)</text>

                    <!-- VDD -->
                    <line x1="25" y1="42" x2="155" y2="42" stroke="#ef4444" stroke-width="1.8"/>
                    <circle cx="120" cy="42" r="2.5" fill="#ef4444"/>
                    <text x="120" y="37" text-anchor="middle" font-bold fill="#ef4444" font-size="8">+V<tspan baseline-shift="sub" font-size="70%">DD</tspan></text>

                    <!-- Divisor R1 / R2 -->
                    <line x1="45" y1="38" x2="45" y2="48" stroke="#64748b" stroke-width="1.3"/>
                    <rect x="38" y="48" width="14" height="20" fill="none" stroke="#2563eb" stroke-width="1.4"/>
                    <text x="32" y="60" text-anchor="end" fill="#2563eb" font-size="7.5">R<tspan baseline-shift="sub" font-size="70%">1</tspan></text>
                    <line x1="45" y1="68" x2="45" y2="95" stroke="#64748b" stroke-width="1.3"/>
                    <circle cx="45" cy="95" r="2.5" fill="#2563eb"/>

                    <rect x="38" y="105" width="14" height="20" fill="none" stroke="#2563eb" stroke-width="1.4"/>
                    <line x1="45" y1="95" x2="45" y2="105" stroke="#64748b" stroke-width="1.3"/>
                    <text x="32" y="117" text-anchor="end" fill="#2563eb" font-size="7.5">R<tspan baseline-shift="sub" font-size="70%">2</tspan></text>
                    <line x1="45" y1="125" x2="45" y2="155" stroke="#64748b" stroke-width="1.3"/>
                    <line x1="38" y1="155" x2="52" y2="155" stroke="#475569" stroke-width="1.5"/>

                    <!-- MOSFET E-MOS N -->
                    <line x1="45" y1="95" x2="85" y2="95" stroke="#64748b" stroke-width="1.3"/>
                    <line x1="85" y1="80" x2="85" y2="110" stroke="#6366f1" stroke-width="2"/>
                    <line x1="92" y1="80" x2="92" y2="110" stroke="#334155" class="dark:stroke-slate-300" stroke-width="2" stroke-dasharray="3 2"/>

                    <!-- RD y RS -->
                    <rect x="113" y="48" width="14" height="22" fill="none" stroke="#10b981" stroke-width="1.4"/>
                    <line x1="120" y1="38" x2="120" y2="48" stroke="#64748b" stroke-width="1.3"/>
                    <line x1="120" y1="70" x2="120" y2="85" stroke="#64748b" stroke-width="1.3"/>
                    <line x1="92" y1="85" x2="120" y2="85" stroke="#64748b" stroke-width="1.3"/>
                    <text x="132" y="62" fill="#10b981" font-size="8">R<tspan baseline-shift="sub" font-size="70%">D</tspan></text>

                    <line x1="92" y1="105" x2="120" y2="105" stroke="#64748b" stroke-width="1.3"/>
                    <line x1="120" y1="105" x2="120" y2="118" stroke="#64748b" stroke-width="1.3"/>
                    <rect x="113" y="118" width="14" height="22" fill="none" stroke="#a855f7" stroke-width="1.4"/>
                    <text x="132" y="132" fill="#a855f7" font-size="8">R<tspan baseline-shift="sub" font-size="70%">S</tspan></text>
                    <line x1="120" y1="140" x2="120" y2="155" stroke="#64748b" stroke-width="1.3"/>
                    <line x1="113" y1="155" x2="127" y2="155" stroke="#475569" stroke-width="1.5"/>

                    <!-- Ecuaciones -->
                    <rect x="8" y="165" width="159" height="42" rx="4" fill="#3b82f6" fill-opacity="0.08" stroke="#3b82f6" stroke-opacity="0.3"/>
                    <text x="87" y="178" text-anchor="middle" font-bold fill="#1d4ed8" font-size="8">V<tspan baseline-shift="sub" font-size="70%">G</tspan> = V<tspan baseline-shift="sub" font-size="70%">DD</tspan> · R<tspan baseline-shift="sub" font-size="70%">2</tspan> / (R<tspan baseline-shift="sub" font-size="70%">1</tspan> + R<tspan baseline-shift="sub" font-size="70%">2</tspan>)</text>
                    <text x="87" y="190" text-anchor="middle" font-bold fill="#1d4ed8" font-size="8.5">V<tspan baseline-shift="sub" font-size="70%">GS</tspan> = V<tspan baseline-shift="sub" font-size="70%">G</tspan> − I<tspan baseline-shift="sub" font-size="70%">D</tspan> · R<tspan baseline-shift="sub" font-size="70%">S</tspan></text>
                    <text x="87" y="202" text-anchor="middle" fill="#64748b" font-size="7.5">I<tspan baseline-shift="sub" font-size="70%">D</tspan> = k<tspan baseline-shift="sub" font-size="70%">n</tspan> (V<tspan baseline-shift="sub" font-size="70%">GS</tspan> − V<tspan baseline-shift="sub" font-size="70%">th</tspan>)<tspan baseline-shift="super" font-size="70%">2</tspan></text>
                  </g>

                  <!-- ================= (c) REALIMENTACIÓN DE DRENAJE ================= -->
                  <g transform="translate(380, 5)">
                    <rect x="0" y="0" width="170" height="215" rx="8" fill="#f8fafc" class="dark:fill-slate-800/40" stroke="#6366f1" stroke-width="1.2"/>
                    <text x="85" y="16" text-anchor="middle" font-weight="bold" fill="#4f46e5" font-size="9.5">(c) Realim. Drenaje</text>
                    <text x="85" y="27" text-anchor="middle" fill="#64748b" font-size="7.5">Exclusivo E-MOSFET (V<tspan baseline-shift="sub" font-size="70%">th</tspan> &gt; 0)</text>

                    <!-- VDD -->
                    <line x1="30" y1="38" x2="140" y2="38" stroke="#ef4444" stroke-width="1.8"/>
                    <circle cx="115" cy="38" r="2.5" fill="#ef4444"/>
                    <text x="115" y="32" text-anchor="middle" font-bold fill="#ef4444" font-size="8">+V<tspan baseline-shift="sub" font-size="70%">DD</tspan></text>

                    <!-- RD -->
                    <line x1="115" y1="38" x2="115" y2="48" stroke="#64748b" stroke-width="1.3"/>
                    <rect x="108" y="48" width="14" height="22" fill="none" stroke="#10b981" stroke-width="1.4"/>
                    <text x="127" y="62" fill="#10b981" font-size="8">R<tspan baseline-shift="sub" font-size="70%">D</tspan></text>
                    <line x1="115" y1="70" x2="115" y2="82" stroke="#64748b" stroke-width="1.3"/>
                    <circle cx="115" cy="82" r="3" fill="#10b981"/>

                    <!-- Lazo de RG entre Drenaje y Compuerta -->
                    <line x1="115" y1="82" x2="50" y2="82" stroke="#6366f1" stroke-width="1.3"/>
                    <line x1="50" y1="82" x2="50" y2="92" stroke="#6366f1" stroke-width="1.3"/>
                    <rect x="43" y="92" width="14" height="24" fill="none" stroke="#6366f1" stroke-width="1.4"/>
                    <text x="36" y="106" text-anchor="end" fill="#6366f1" font-size="8">R<tspan baseline-shift="sub" font-size="70%">G</tspan></text>
                    <line x1="50" y1="116" x2="50" y2="128" stroke="#6366f1" stroke-width="1.3"/>
                    <line x1="50" y1="128" x2="80" y2="128" stroke="#6366f1" stroke-width="1.3"/>

                    <!-- MOSFET -->
                    <line x1="80" y1="115" x2="80" y2="140" stroke="#6366f1" stroke-width="2"/>
                    <line x1="87" y1="115" x2="87" y2="140" stroke="#334155" class="dark:stroke-slate-300" stroke-width="2" stroke-dasharray="3 2"/>
                    <line x1="87" y1="120" x2="115" y2="120" stroke="#475569" stroke-width="1.3"/>
                    <line x1="115" y1="82" x2="115" y2="120" stroke="#475569" stroke-width="1.3"/>
                    <!-- Fuente S directa a masa -->
                    <line x1="87" y1="135" x2="115" y2="135" stroke="#475569" stroke-width="1.3"/>
                    <line x1="115" y1="135" x2="115" y2="155" stroke="#475569" stroke-width="1.3"/>
                    <line x1="108" y1="155" x2="122" y2="155" stroke="#475569" stroke-width="1.5"/>

                    <!-- Ecuaciones -->
                    <rect x="8" y="165" width="154" height="42" rx="4" fill="#6366f1" fill-opacity="0.08" stroke="#6366f1" stroke-opacity="0.3"/>
                    <text x="85" y="177" text-anchor="middle" font-bold fill="#4f46e5" font-size="8">I<tspan baseline-shift="sub" font-size="70%">G</tspan> = 0 ⇒ V<tspan baseline-shift="sub" font-size="70%">GS</tspan> = V<tspan baseline-shift="sub" font-size="70%">DS</tspan></text>
                    <text x="85" y="189" text-anchor="middle" font-bold fill="#059669" font-size="8">¡Saturación Garantizada!</text>
                    <text x="85" y="201" text-anchor="middle" fill="#64748b" font-size="7.5">V<tspan baseline-shift="sub" font-size="70%">GS</tspan> = V<tspan baseline-shift="sub" font-size="70%">DD</tspan> − I<tspan baseline-shift="sub" font-size="70%">D</tspan> · R<tspan baseline-shift="sub" font-size="70%">D</tspan></text>
                  </g>

                  <!-- ================= (d) POLARIZACIÓN FIJA ================= -->
                  <g transform="translate(565, 5)">
                    <rect x="0" y="0" width="165" height="215" rx="8" fill="#f8fafc" class="dark:fill-slate-800/40" stroke="#f59e0b" stroke-width="1.2"/>
                    <text x="82" y="15" text-anchor="middle" font-weight="bold" fill="#d97706" font-size="9.5">(d) Polarización Fija</text>
                    <text x="82" y="25" text-anchor="middle" fill="#64748b" font-size="7.5">JFET con Fuente Auxiliar</text>

                    <!-- VDD -->
                    <line x1="30" y1="42" x2="140" y2="42" stroke="#ef4444" stroke-width="1.8"/>
                    <circle cx="105" cy="42" r="2.5" fill="#ef4444"/>
                    <text x="105" y="37" text-anchor="middle" font-bold fill="#ef4444" font-size="8">+V<tspan baseline-shift="sub" font-size="70%">DD</tspan></text>

                    <rect x="98" y="48" width="14" height="22" fill="none" stroke="#10b981" stroke-width="1.4"/>
                    <line x1="105" y1="38" x2="105" y2="48" stroke="#64748b" stroke-width="1.3"/>
                    <line x1="105" y1="70" x2="105" y2="85" stroke="#64748b" stroke-width="1.3"/>
                    <text x="117" y="62" fill="#10b981" font-size="8">R<tspan baseline-shift="sub" font-size="70%">D</tspan></text>

                    <line x1="85" y1="80" x2="85" y2="115" stroke="#334155" class="dark:stroke-slate-300" stroke-width="2.5"/>
                    <line x1="85" y1="86" x2="105" y2="86" stroke="#475569" stroke-width="1.3"/>
                    <line x1="105" y1="85" x2="105" y2="86" stroke="#475569" stroke-width="1.3"/>
                    <line x1="85" y1="108" x2="105" y2="108" stroke="#475569" stroke-width="1.3"/>
                    <line x1="105" y1="108" x2="105" y2="155" stroke="#475569" stroke-width="1.3"/>
                    <line x1="98" y1="155" x2="112" y2="155" stroke="#475569" stroke-width="1.5"/>

                    <!-- Rama VGG negativa -->
                    <line x1="55" y1="100" x2="85" y2="100" stroke="#475569" stroke-width="1.3"/>
                    <polygon points="76,100 68,96 68,104" fill="#0d9488"/>
                    <rect x="48" y="115" width="14" height="20" fill="none" stroke="#d97706" stroke-width="1.4"/>
                    <line x1="55" y1="100" x2="55" y2="115" stroke="#64748b" stroke-width="1.3"/>
                    <line x1="55" y1="135" x2="55" y2="145" stroke="#64748b" stroke-width="1.3"/>
                    <text x="42" y="127" text-anchor="end" fill="#d97706" font-size="7.5">R<tspan baseline-shift="sub" font-size="70%">G</tspan></text>
                    <!-- Batería VGG invertida -->
                    <line x1="48" y1="145" x2="62" y2="145" stroke="#475569" stroke-width="2"/>
                    <line x1="51" y1="149" x2="59" y2="149" stroke="#475569" stroke-width="2"/>
                    <line x1="55" y1="149" x2="55" y2="155" stroke="#64748b" stroke-width="1.3"/>
                    <line x1="48" y1="155" x2="62" y2="155" stroke="#475569" stroke-width="1.5"/>
                    <text x="68" y="150" font-bold fill="#d97706" font-size="7.5">−V<tspan baseline-shift="sub" font-size="70%">GG</tspan></text>

                    <!-- Ecuaciones -->
                    <rect x="8" y="165" width="149" height="42" rx="4" fill="#f59e0b" fill-opacity="0.08" stroke="#f59e0b" stroke-opacity="0.3"/>
                    <text x="82" y="178" text-anchor="middle" font-bold fill="#b45309" font-size="8">V<tspan baseline-shift="sub" font-size="70%">GS</tspan> = −V<tspan baseline-shift="sub" font-size="70%">GG</tspan> (Fijo)</text>
                    <text x="82" y="190" text-anchor="middle" font-bold fill="#b45309" font-size="8.5">I<tspan baseline-shift="sub" font-size="70%">D</tspan> = I<tspan baseline-shift="sub" font-size="70%">DSS</tspan> (1 + V<tspan baseline-shift="sub" font-size="70%">GG</tspan>/|V<tspan baseline-shift="sub" font-size="70%">P</tspan>|)<tspan baseline-shift="super" font-size="70%">2</tspan></text>
                    <text x="82" y="202" text-anchor="middle" fill="#64748b" font-size="7.5">Inestable frente a dispersión</text>
                  </g>
                </svg>
              </div>
            </div>

            <!-- DETALLE MATEMÁTICO RIGUROSO DE RESOLUCIÓN POR TOPOLOGÍA -->
            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-6 mb-3">Deducción Analítica y Resolución de Mallas</h5>

            <div class="space-y-4 text-xs">
              <!-- Bloque 1: Autopolarización -->
              <div class="p-3.5 rounded-xl bg-teal-50 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-800">
                <span class="font-bold text-teal-900 dark:text-teal-300 block mb-1 text-xs uppercase tracking-wide">
                  1. Autopolarización (Self-Bias) en JFET Canal N: Resolución Cuadrática
                </span>
                <p class="text-slate-600 dark:text-slate-400 mb-2 leading-relaxed">
                  Al estar la compuerta conectada a masa mediante $R_G$ sin corriente ($I_G = 0$), $V_G = 0\\text{ V}$. La corriente de drenaje atraviesa la resistencia de fuente $R_S$, elevando el potencial de la fuente a $V_S = I_D R_S$. Por tanto:
                </p>
                $$V_{GS} = V_G - V_S = 0 - I_D R_S = -I_D R_S$$
                <p class="my-2">Sustituyendo $V_{GS}$ en la ley cuadrática de Shockley ($I_D = I_{DSS}(1 - V_{GS}/V_P)^2$):</p>
                $$I_D = I_{DSS} \\left( 1 - \\frac{-I_D R_S}{V_P} \\right)^2 = I_{DSS} \\left( 1 + \\frac{R_S}{|V_P|} I_D \\right)^2$$
                <p class="my-2">Desarrollando el binomio al cuadrado y reagrupando en la forma canónica $a I_D^2 + b I_D + c = 0$:</p>
                $$\\mathbf{\\left( \\frac{R_S^2}{V_P^2} \\right) I_D^2 + \\left( \\frac{2 R_S}{|V_P|} - \\frac{1}{I_{DSS}} \\right) I_D + 1 = 0}$$
                <div class="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-teal-300 dark:border-teal-700 my-2">
                  <strong class="text-teal-800 dark:text-teal-300 block mb-0.5">🎯 Criterio de Selección de la Raíz Física:</strong>
                  La ecuación cuadrática arroja dos raíces matemáticas $I_{D1}$ e $I_{D2}$. <strong>La única raíz físicamente válida es aquella que cumple:</strong>
                  $$0 \\le I_D \\le I_{DSS} \\quad \\Longleftrightarrow \\quad V_P \\le V_{GS} \\le 0$$
                  La segunda raíz siempre da $V_{GS} < V_P$ (más allá del corte) y debe descartarse.
                </div>
                <p class="mt-2 text-slate-600 dark:text-slate-400">
                  Una vez hallado $I_{DQ}$, se calcula la malla de salida y se <strong>verifica la condición de saturación</strong>:
                </p>
                $$V_{DSQ} = V_{DD} - I_{DQ} (R_D + R_S) \\ge V_{GSQ} - V_P$$
              </div>

              <!-- Bloque 2: Divisor Resistivo -->
              <div class="p-3.5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
                <span class="font-bold text-blue-900 dark:text-blue-300 block mb-1 text-xs uppercase tracking-wide">
                  2. Polarización por Divisor de Tensión en E-MOSFET: Deducción Analítica
                </span>
                <p class="text-slate-600 dark:text-slate-400 mb-2 leading-relaxed">
                  El divisor $R_1-R_2$ fija la tensión de compuerta Thevenin de manera exacta (al no haber corriente $I_G = 0$):
                </p>
                $$V_G = V_{DD} \\cdot \\frac{R_2}{R_1 + R_2}$$
                <p class="my-2">La tensión compuerta-fuente es: $V_{GS} = V_G - I_D R_S$. En saturación, la corriente del E-MOSFET cumple:</p>
                $$I_D = k_n (V_{GS} - V_{th})^2 = k_n \\left[ (V_G - V_{th}) - I_D R_S \\right]^2$$
                <p class="my-2">Desarrollando la ecuación de segundo grado en $I_D$:</p>
                $$\\mathbf{(k_n R_S^2) I_D^2 - \\left[ 2 k_n R_S (V_G - V_{th}) + 1 \\right] I_D + k_n (V_G - V_{th})^2 = 0}$$
                <p class="text-[11px] text-slate-600 dark:text-slate-400 mt-1">
                  Se escoge la raíz que satisface $V_{GS} > V_{th}$. Luego se verifica la saturación: $V_{DSQ} = V_{DD} - I_{DQ}(R_D + R_S) \\ge V_{GSQ} - V_{th}$.
                </p>
              </div>

              <!-- Bloque 3: Realimentación de Drenaje -->
              <div class="p-3.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-800">
                <span class="font-bold text-indigo-900 dark:text-indigo-300 block mb-1 text-xs uppercase tracking-wide">
                  3. Polarización por Realimentación de Drenaje (Drain-Feedback) en E-MOSFET
                </span>
                <p class="text-slate-600 dark:text-slate-400 mb-2 leading-relaxed">
                  Se conecta un resistor de gran valor $R_G$ ($1\\text{ M}\\Omega - 10\\text{ M}\\Omega$) entre drenaje y compuerta. Como $I_G = 0$, la caída de tensión en $R_G$ es estrictamente cero:
                </p>
                $$\\mathbf{V_{GS} = V_{DS}}$$
                <div class="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 my-2 text-emerald-950 dark:text-emerald-300">
                  <strong class="block mb-0.5">🌟 Teorema de Saturación Garantizada:</strong>
                  Para que un E-MOSFET canal N opere en saturación se exige $V_{DS} \\ge V_{GS} - V_{th}$. Dado que $V_{DS} = V_{GS}$ y por definición física de un E-MOSFET canal N la tensión umbral es positiva ($V_{th} > 0$):
                  $$V_{DS} = V_{GS} > V_{GS} - V_{th} \\quad \\text{¡Se cumple SIEMPRE de forma incondicional!}$$
                  <em>El transistor jamás puede caer en la región óhmica/tríodo en esta topología.</em>
                </div>
                <p class="my-2">La malla de drenaje con $V_S = 0$ resulta: $V_{GS} = V_{DS} = V_{DD} - I_D R_D$. Sustituyendo $I_D = k_n (V_{GS} - V_{th})^2$:</p>
                $$\\mathbf{(k_n R_D) V_{GS}^2 + (1 - 2 k_n R_D V_{th}) V_{GS} + (k_n R_D V_{th}^2 - V_{DD}) = 0}$$
                <p class="text-[11px] text-slate-600 dark:text-slate-400 mt-1">
                  Se resuelve directamente para $V_{GS}$ y se toma la raíz $V_{GS} > V_{th}$.
                </p>
              </div>
            </div>

            <!-- 4. ALGORITMO SISTEMÁTICO DE EXAMEN -->
            <div class="p-4 my-4 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs">
              <h5 class="font-bold text-xs uppercase tracking-wider mb-2 text-slate-900 dark:text-white flex items-center gap-2">
                <span>📋</span> Algoritmo de Examen: Protocolo en 6 Pasos para Resolver Circuitos FET en DC
              </h5>
              <ol class="list-decimal pl-5 space-y-1.5 text-slate-700 dark:text-slate-300">
                <li><strong>Identificar tipo y canal:</strong> ¿JFET ($I_{DSS}, V_P$), D-MOSFET ($I_{DSS}, V_P$) o E-MOSFET ($k, V_{th}$)? ¿Canal N o Canal P?</li>
                <li><strong>Plantear $I_G = 0$:</strong> Calcular la tensión de compuerta $V_G$ con el divisor resistivo ($V_G = V_{DD} \\frac{R_2}{R_1 + R_2}$) o $V_G = 0$ si va a masa por $R_G$.</li>
                <li><strong>Plantear la malla compuerta-fuente:</strong> Expresar $V_{GS} = V_G - I_D R_S$.</li>
                <li><strong>Plantear la ecuación del dispositivo:</strong>
                  <ul class="list-disc pl-4 mt-0.5 space-y-0.5 text-[11px]">
                    <li>JFET / D-MOS: $I_D = I_{DSS}(1 - V_{GS}/V_P)^2$</li>
                    <li>E-MOSFET: $I_D = k_n (V_{GS} - V_{th})^2$</li>
                  </ul>
                </li>
                <li><strong>Resolver la ecuación de 2° grado y seleccionar la raíz física:</strong> Descartar la raíz matemáticamente espuria que ubica al transistor en corte ($V_{GS} < V_P$ o $V_{GS} < V_{th}$).</li>
                <li><strong>Calcular tensiones de nodo y verificar saturación:</strong>
                  $$V_S = I_D R_S, \\quad V_D = V_{DD} - I_D R_D, \\quad V_{DS} = V_D - V_S$$
                  $$\\text{Verificar: } V_{DS} \\ge V_{GS} - V_P \\text{ (JFET/D-MOS)} \\quad \\text{o} \\quad V_{DS} \\ge V_{GS} - V_{th} \\text{ (E-MOS)}$$
                  Si se cumple $\\implies$ Punto $Q$ validado. Si no se cumple $\\implies$ El FET opera en <strong>zona óhmica (tríodo)</strong> y debe recalcularse con $I_D = k_n [2(V_{GS}-V_{th})V_{DS} - V_{DS}^2]$.
                </li>
              </ol>
            </div>
          `
        },

        // ====================================================================
        // SECCIÓN 1.3: MODELOS INCREMENTALES Y CONFIGURACIONES AC
        // ====================================================================
        {
          id: 'e2-u1-polarizacion-pequena-senal',
          titulo: '1.3 Modelos Incrementales de Pequeña Señal (AC) y Configuraciones Básicas',
          contenido: `
            <p class="mb-3 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
              En régimen dinámico de pequeña señal, las variaciones alrededor del punto de reposo $Q$ se modelan linealmente mediante el <strong>circuito equivalente híbrido $\\pi$</strong>. Dado que $I_G = 0$, la entrada de compuerta es un <strong>circuito abierto perfecto</strong> en bajas y medias frecuencias.
            </p>

            <!-- 1. DEDUCCIÓN ANALÍTICA DE PARÁMETROS INCREMENTALES -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3 text-xs">
              <!-- gm -->
              <div class="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-950 dark:text-emerald-200">
                <span class="font-bold text-xs uppercase tracking-wider block mb-1">
                  1. Transconductancia Dinámica ($g_m$)
                </span>
                <p class="text-[11px] text-slate-600 dark:text-slate-400 mb-1">
                  Derivada de la curva de transferencia evaluada en el punto $Q$:
                </p>
                $$g_m = \\left. \\frac{\\partial i_D}{\\partial v_{GS}} \\right|_Q$$
                <div class="mt-1.5 space-y-1 text-[11px] font-mono">
                  <div><strong>JFET / D-MOS:</strong> $g_m = \\frac{2 I_{DSS}}{|V_P|} \\left(1 - \\frac{V_{GSQ}}{V_P}\\right) = \\frac{2}{|V_P|} \\sqrt{I_{DSS} I_{DQ}}$</div>
                  <div><strong>E-MOSFET:</strong> $g_m = 2 k_n (V_{GSQ} - V_{th}) = 2 \\sqrt{k_n I_{DQ}}$</div>
                </div>
              </div>

              <!-- ro / rd -->
              <div class="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-950 dark:text-blue-200">
                <span class="font-bold text-xs uppercase tracking-wider block mb-1">
                  2. Resistencia de Salida ($r_o$ o $r_d$)
                </span>
                <p class="text-[11px] text-slate-600 dark:text-slate-400 mb-1">
                  Modulada por el Efecto Early ($\\lambda = 1/V_A$):
                </p>
                $$r_o = \\left( \\left. \\frac{\\partial i_D}{\\partial v_{DS}} \\right|_Q \\right)^{-1} \\approx \\frac{1}{\\lambda I_{DQ}} = \\frac{V_A}{I_{DQ}}$$
                <p class="text-[11px] text-slate-600 dark:text-slate-400 mt-1">
                  Típicamente $r_o \\approx 20\\text{ k}\\Omega - 100\\text{ k}\\Omega$. Si en el enunciado no se especifica $\\lambda$ o $V_A$, se considera $r_o \\to \\infty$ (abierta).
                </p>
              </div>
            </div>

            <!-- DIAGRAMA SVG MODELO AC Y CONFIGURACIONES -->
            <div class="my-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span class="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-2 text-center">
                📊 Modelo Equivalente de Pequeña Señal (AC) y Configuración Fuente Común
              </span>
              <div class="flex justify-center overflow-x-auto">
                <svg viewBox="0 0 700 210" class="w-full max-w-[700px] text-xs font-sans select-none" style="min-width: 560px;">
                  <defs>
                    <marker id="ac-arr-green" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                      <polygon points="0 0, 6 3, 0 6" fill="#10b981"/>
                    </marker>
                  </defs>

                  <!-- ================= (a) MODELO HÍBRIDO PI GENÉRICO ================= -->
                  <g transform="translate(10, 5)">
                    <rect x="0" y="0" width="310" height="195" rx="8" fill="#f8fafc" class="dark:fill-slate-800/40" stroke="#6366f1" stroke-width="1.2"/>
                    <text x="155" y="18" text-anchor="middle" font-weight="bold" fill="#4f46e5" font-size="10.5">Modelo Incremental Híbrido π</text>

                    <!-- Terminal G -->
                    <circle cx="25" cy="55" r="3.5" fill="#6366f1"/>
                    <text x="15" y="59" font-weight="bold" fill="#6366f1" font-size="10">G</text>
                    <line x1="25" y1="55" x2="65" y2="55" stroke="#475569" stroke-width="1.8"/>
                    <circle cx="65" cy="55" r="3" fill="#6366f1"/>

                    <!-- Tensión v_gs -->
                    <text x="75" y="72" font-weight="bold" fill="#6366f1" font-size="10">+</text>
                    <text x="72" y="92" font-weight="bold" fill="#6366f1" font-size="9.5">v<tspan baseline-shift="sub" font-size="70%">gs</tspan></text>
                    <text x="75" y="108" font-weight="bold" fill="#6366f1" font-size="10">−</text>

                    <!-- Compuerta Abierta -->
                    <circle cx="65" cy="120" r="3" fill="#3b82f6"/>
                    <text x="78" y="136" font-size="8" fill="#64748b">I<tspan baseline-shift="sub" font-size="70%">g</tspan> = 0 (R<tspan baseline-shift="sub" font-size="70%">in</tspan> = ∞)</text>

                    <!-- Barra de Fuente S -->
                    <line x1="25" y1="120" x2="285" y2="120" stroke="#475569" stroke-width="2"/>
                    <circle cx="150" cy="120" r="3.5" fill="#3b82f6"/>
                    <text x="150" y="138" text-anchor="middle" font-weight="bold" fill="#3b82f6" font-size="10">S (Fuente)</text>

                    <!-- Fuente de Corriente gm · vgs -->
                    <line x1="150" y1="55" x2="150" y2="68" stroke="#475569" stroke-width="1.8"/>
                    <circle cx="150" cy="85" r="14" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="1.8"/>
                    <line x1="150" y1="76" x2="150" y2="94" stroke="#10b981" stroke-width="2" marker-end="url(#ac-arr-green)"/>
                    <text x="150" y="112" text-anchor="middle" font-weight="bold" fill="#10b981" font-size="9">g<tspan baseline-shift="sub" font-size="70%">m</tspan> · v<tspan baseline-shift="sub" font-size="70%">gs</tspan></text>
                    <line x1="150" y1="99" x2="150" y2="120" stroke="#475569" stroke-width="1.8"/>

                    <!-- Resistencia ro -->
                    <line x1="150" y1="55" x2="235" y2="55" stroke="#475569" stroke-width="1.8"/>
                    <line x1="235" y1="55" x2="235" y2="68" stroke="#475569" stroke-width="1.8"/>
                    <rect x="226" y="68" width="18" height="28" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="1.6" rx="2"/>
                    <text x="250" y="85" text-anchor="start" font-weight="bold" fill="#10b981" font-size="9">r<tspan baseline-shift="sub" font-size="70%">o</tspan></text>
                    <line x1="235" y1="96" x2="235" y2="120" stroke="#475569" stroke-width="1.8"/>

                    <!-- Terminal D -->
                    <line x1="235" y1="55" x2="285" y2="55" stroke="#475569" stroke-width="2"/>
                    <circle cx="285" cy="55" r="3.5" fill="#10b981"/>
                    <text x="295" y="59" font-weight="bold" fill="#10b981" font-size="10">D</text>

                    <!-- Nota -->
                    <rect x="15" y="152" width="280" height="32" rx="4" fill="#6366f1" fill-opacity="0.08" stroke="#6366f1" stroke-opacity="0.3"/>
                    <text x="155" y="166" text-anchor="middle" font-bold fill="#4f46e5" font-size="8.5">g<tspan baseline-shift="sub" font-size="70%">m</tspan> = 2 √(k<tspan baseline-shift="sub" font-size="70%">n</tspan> · I<tspan baseline-shift="sub" font-size="70%">DQ</tspan>) = 2 I<tspan baseline-shift="sub" font-size="70%">DSS</tspan> / |V<tspan baseline-shift="sub" font-size="70%">P</tspan>| · (1 − V<tspan baseline-shift="sub" font-size="70%">GSQ</tspan>/V<tspan baseline-shift="sub" font-size="70%">P</tspan>)</text>
                    <text x="155" y="178" text-anchor="middle" fill="#64748b" font-size="8">r<tspan baseline-shift="sub" font-size="70%">o</tspan> = 1 / (λ · I<tspan baseline-shift="sub" font-size="70%">DQ</tspan>) = V<tspan baseline-shift="sub" font-size="70%">A</tspan> / I<tspan baseline-shift="sub" font-size="70%">DQ</tspan></text>
                  </g>

                  <!-- ================= (b) FUENTE COMÚN CON CARGA ================= -->
                  <g transform="translate(340, 5)">
                    <rect x="0" y="0" width="350" height="195" rx="8" fill="#f8fafc" class="dark:fill-slate-800/40" stroke="#0d9488" stroke-width="1.2"/>
                    <text x="175" y="18" text-anchor="middle" font-weight="bold" fill="#0d9488" font-size="10.5">Etapa Fuente Común en Pequeña Señal (AC)</text>

                    <!-- vi y RG -->
                    <circle cx="25" cy="80" r="3" fill="#3b82f6"/>
                    <text x="15" y="84" font-weight="bold" fill="#3b82f6" font-size="9.5">v<tspan baseline-shift="sub" font-size="70%">i</tspan></text>
                    <line x1="25" y1="80" x2="55" y2="80" stroke="#475569" stroke-width="1.5"/>
                    <circle cx="55" cy="80" r="2.5" fill="#475569"/>

                    <!-- RG (R1 // R2) -->
                    <line x1="55" y1="80" x2="55" y2="95" stroke="#475569" stroke-width="1.3"/>
                    <rect x="48" y="95" width="14" height="25" fill="#0d9488" fill-opacity="0.2" stroke="#0d9488" stroke-width="1.4"/>
                    <text x="40" y="110" text-anchor="end" font-bold fill="#0d9488" font-size="8">R<tspan baseline-shift="sub" font-size="70%">in</tspan></text>
                    <line x1="55" y1="120" x2="55" y2="135" stroke="#475569" stroke-width="1.3"/>
                    <line x1="48" y1="135" x2="62" y2="135" stroke="#475569" stroke-width="1.5"/>

                    <line x1="55" y1="80" x2="100" y2="80" stroke="#475569" stroke-width="1.5"/>
                    <!-- Transistor Bloque Fuente Común -->
                    <rect x="100" y="60" width="90" height="70" rx="4" fill="#0d9488" fill-opacity="0.1" stroke="#0d9488" stroke-width="1.5"/>
                    <text x="145" y="80" text-anchor="middle" font-weight="bold" fill="#0d9488" font-size="9">FET (FC)</text>
                    <text x="145" y="94" text-anchor="middle" font-mono fill="#0f766e" font-size="8">g<tspan baseline-shift="sub" font-size="70%">m</tspan>, r<tspan baseline-shift="sub" font-size="70%">o</tspan></text>
                    <text x="145" y="108" text-anchor="middle" fill="#64748b" font-size="7.5">S a masa AC</text>

                    <!-- Salida Drenaje -->
                    <line x1="190" y1="80" x2="225" y2="80" stroke="#475569" stroke-width="1.5"/>
                    <circle cx="225" cy="80" r="2.5" fill="#475569"/>

                    <!-- RD en paralelo con RL -->
                    <line x1="225" y1="80" x2="225" y2="95" stroke="#475569" stroke-width="1.3"/>
                    <rect x="218" y="95" width="14" height="25" fill="none" stroke="#10b981" stroke-width="1.4"/>
                    <text x="210" y="110" text-anchor="end" fill="#10b981" font-size="8">R<tspan baseline-shift="sub" font-size="70%">D</tspan></text>
                    <line x1="225" y1="120" x2="225" y2="135" stroke="#475569" stroke-width="1.3"/>
                    <line x1="218" y1="135" x2="232" y2="135" stroke="#475569" stroke-width="1.5"/>

                    <line x1="225" y1="80" x2="275" y2="80" stroke="#475569" stroke-width="1.5"/>
                    <circle cx="275" cy="80" r="2.5" fill="#475569"/>
                    <rect x="268" y="95" width="14" height="25" fill="none" stroke="#10b981" stroke-width="1.4"/>
                    <text x="290" y="110" font-bold fill="#10b981" font-size="8">R<tspan baseline-shift="sub" font-size="70%">L</tspan></text>
                    <line x1="275" y1="80" x2="275" y2="95" stroke="#475569" stroke-width="1.3"/>
                    <line x1="275" y1="120" x2="275" y2="135" stroke="#475569" stroke-width="1.3"/>
                    <line x1="268" y1="135" x2="282" y2="135" stroke="#475569" stroke-width="1.5"/>

                    <!-- vo -->
                    <line x1="275" y1="80" x2="315" y2="80" stroke="#10b981" stroke-width="2"/>
                    <circle cx="315" cy="80" r="3.5" fill="#10b981"/>
                    <text x="325" y="84" font-weight="bold" fill="#10b981" font-size="10">v<tspan baseline-shift="sub" font-size="70%">o</tspan></text>

                    <!-- Fórmulas FC -->
                    <rect x="15" y="148" width="320" height="38" rx="4" fill="#0d9488" fill-opacity="0.08" stroke="#0d9488" stroke-opacity="0.3"/>
                    <text x="175" y="162" text-anchor="middle" font-bold fill="#0f766e" font-size="9">A<tspan baseline-shift="sub" font-size="70%">v</tspan> = −g<tspan baseline-shift="sub" font-size="70%">m</tspan> · (R<tspan baseline-shift="sub" font-size="70%">D</tspan> ∥ R<tspan baseline-shift="sub" font-size="70%">L</tspan> ∥ r<tspan baseline-shift="sub" font-size="70%">o</tspan>)  (Invierte 180°)</text>
                    <text x="175" y="176" text-anchor="middle" fill="#64748b" font-size="8">R<tspan baseline-shift="sub" font-size="70%">in</tspan> = R<tspan baseline-shift="sub" font-size="70%">1</tspan> ∥ R<tspan baseline-shift="sub" font-size="70%">2</tspan> (≈ 1 a 10 MΩ)  ·  R<tspan baseline-shift="sub" font-size="70%">o</tspan> = R<tspan baseline-shift="sub" font-size="70%">D</tspan> ∥ r<tspan baseline-shift="sub" font-size="70%">o</tspan> ≈ R<tspan baseline-shift="sub" font-size="70%">D</tspan></text>
                  </g>
                </svg>
              </div>
            </div>

            <!-- TABLA COMPARATIVA DE LAS 3 CONFIGURACIONES BÁSICAS -->
            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-6 mb-2">Tabla Comparativa de Configuraciones Básicas con FET</h5>
            <div class="overflow-x-auto my-3">
              <table class="w-full text-xs text-left border-collapse border border-slate-200 dark:border-slate-800">
                <thead>
                  <tr class="bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 font-mono">
                    <th class="p-2 border border-slate-200 dark:border-slate-800">Configuración</th>
                    <th class="p-2 border border-slate-200 dark:border-slate-800">Ganancia de Tensión ($A_v$)</th>
                    <th class="p-2 border border-slate-200 dark:border-slate-800">Fase</th>
                    <th class="p-2 border border-slate-200 dark:border-slate-800">Resistencia Entrada ($R_{in}$)</th>
                    <th class="p-2 border border-slate-200 dark:border-slate-800">Resistencia Salida ($R_o$)</th>
                    <th class="p-2 border border-slate-200 dark:border-slate-800">Uso Típico</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 dark:divide-slate-800 font-mono text-[11px]">
                  <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td class="p-2 font-bold text-teal-600 dark:text-teal-400 font-sans">Fuente Común (FC)</td>
                    <td class="p-2 font-bold">$-g_m (R_D \\parallel R_L \\parallel r_o)$</td>
                    <td class="p-2 text-rose-600 dark:text-rose-400 font-bold">$180^{\\circ}$</td>
                    <td class="p-2 font-bold text-emerald-600 dark:text-emerald-400">Muy Alta ($R_1 \\parallel R_2$)</td>
                    <td class="p-2">Media ($R_D \\parallel r_o$)</td>
                    <td class="p-2 font-sans">Amplificación de tensión con alta $R_{in}$</td>
                  </tr>
                  <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td class="p-2 font-bold text-blue-600 dark:text-blue-400 font-sans">Drenaje Común / Seguidor (DC)</td>
                    <td class="p-2 font-bold">$\\frac{g_m(R_S \\parallel R_L)}{1 + g_m(R_S \\parallel R_L)} \\approx 1$</td>
                    <td class="p-2 text-emerald-600 dark:text-emerald-400 font-bold">$0^{\\circ}$</td>
                    <td class="p-2 font-bold text-emerald-600 dark:text-emerald-400">Casi Infinita ($R_1 \\parallel R_2$)</td>
                    <td class="p-2 font-bold text-emerald-600 dark:text-emerald-400">Baja ($R_S \\parallel 1/g_m$)</td>
                    <td class="p-2 font-sans">Buffer / Adaptador de impedancias</td>
                  </tr>
                  <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td class="p-2 font-bold text-indigo-600 dark:text-indigo-400 font-sans">Compuerta Común (CC)</td>
                    <td class="p-2 font-bold">$+g_m (R_D \\parallel R_L)$</td>
                    <td class="p-2 text-emerald-600 dark:text-emerald-400 font-bold">$0^{\\circ}$</td>
                    <td class="p-2 font-bold text-amber-600 dark:text-amber-400">Baja ($1/g_m$)</td>
                    <td class="p-2">Media ($R_D$)</td>
                    <td class="p-2 font-sans">Etapas de RF y Cascode (sin efecto Miller)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Caso de examen: Resistencia RS sin desacoplar -->
            <div class="p-3.5 my-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-xs">
              <span class="font-bold text-purple-900 dark:text-purple-300 block mb-1">
                ⚡ Pregunta de Examen: Resistencia de Fuente Parcial o No Desacoplada ($R_S$)
              </span>
              <p class="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
                Si la resistencia de fuente no tiene capacitor de desacoplo $C_S$ (o sólo una parte $R_{S1}$ queda sin desacoplar), introduce <strong>realimentación negativa de corriente</strong> en alterna, reduciendo la ganancia pero linealizando la respuesta:
              </p>
              $$A_v = \\frac{-g_m (R_D \\parallel R_L)}{1 + g_m R_S} \\approx -\\frac{R_D \\parallel R_L}{R_S} \\quad (\\text{si } g_m R_S \\gg 1)$$
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
                  <text x="120" y="78" text-anchor="middle" fill="#64748b" font-size="9">R<tspan baseline-shift="sub" font-size="70%">in1</tspan> = R<tspan baseline-shift="sub" font-size="70%">G</tspan> ≈ 10 MΩ</text>
                  <text x="120" y="93" text-anchor="middle" fill="#64748b" font-size="9">R<tspan baseline-shift="sub" font-size="70%">o1</tspan> ≈ R<tspan baseline-shift="sub" font-size="70%">D1</tspan></text>
                  <text x="120" y="112" text-anchor="middle" font-weight="bold" fill="#0f766e" font-size="9.5">A<tspan baseline-shift="sub" font-size="70%">v1</tspan> = -g<tspan baseline-shift="sub" font-size="70%">m1</tspan> · (R<tspan baseline-shift="sub" font-size="70%">D1</tspan> ∥ R<tspan baseline-shift="sub" font-size="70%">in2</tspan>)</text>

                  <!-- Entrada vi -->
                  <line x1="5" y1="87" x2="30" y2="87" stroke="#3b82f6" stroke-width="2" marker-end="url(#m-arr-blue)"/>
                  <circle cx="5" cy="87" r="3" fill="#3b82f6"/>
                  <text x="5" y="77" font-weight="bold" fill="#3b82f6" font-size="9.5">v<tspan baseline-shift="sub" font-size="70%">i</tspan></text>

                  <!-- Conexión Inter-etapa con C_c -->
                  <line x1="210" y1="87" x2="260" y2="87" stroke="#475569" stroke-width="2"/>
                  <!-- Capacitor Cc -->
                  <line x1="260" y1="78" x2="260" y2="96" stroke="#475569" stroke-width="2.5"/>
                  <line x1="265" y1="78" x2="265" y2="96" stroke="#475569" stroke-width="2.5"/>
                  <text x="262" y="72" text-anchor="middle" font-weight="bold" fill="#475569" font-size="8.5">C<tspan baseline-shift="sub" font-size="70%">c</tspan></text>
                  <line x1="265" y1="87" x2="315" y2="87" stroke="#475569" stroke-width="2" marker-end="url(#m-arr-blue)"/>
                  <text x="262" y="112" text-anchor="middle" font-size="8" fill="#ef4444" font-weight="bold">Efecto de Carga: R<tspan baseline-shift="sub" font-size="70%">in2</tspan> carga a D1</text>

                  <!-- Bloque Etapa 2: BJT EC -->
                  <rect x="315" y="40" width="180" height="95" rx="8" fill="#6366f1" fill-opacity="0.12" stroke="#6366f1" stroke-width="1.8"/>
                  <text x="405" y="60" text-anchor="middle" font-weight="bold" fill="#6366f1" font-size="11">Etapa 2: BJT (EC)</text>
                  <text x="405" y="78" text-anchor="middle" fill="#64748b" font-size="9">R<tspan baseline-shift="sub" font-size="70%">in2</tspan> = R<tspan baseline-shift="sub" font-size="70%">B2</tspan> ∥ r<tspan baseline-shift="sub" font-size="70%">π2</tspan> ≈ 2 kΩ</text>
                  <text x="405" y="93" text-anchor="middle" fill="#64748b" font-size="9">R<tspan baseline-shift="sub" font-size="70%">o2</tspan> ≈ R<tspan baseline-shift="sub" font-size="70%">C2</tspan></text>
                  <text x="405" y="112" text-anchor="middle" font-weight="bold" fill="#4f46e5" font-size="9.5">A<tspan baseline-shift="sub" font-size="70%">v2</tspan> = -g<tspan baseline-shift="sub" font-size="70%">m2</tspan> · (R<tspan baseline-shift="sub" font-size="70%">C2</tspan> ∥ R<tspan baseline-shift="sub" font-size="70%">L</tspan>)</text>

                  <!-- Salida vo -->
                  <line x1="495" y1="87" x2="550" y2="87" stroke="#10b981" stroke-width="2" marker-end="url(#m-arr-green)"/>
                  <circle cx="555" cy="87" r="3" fill="#10b981"/>
                  <text x="565" y="91" font-weight="bold" fill="#10b981" font-size="10">v<tspan baseline-shift="sub" font-size="70%">o</tspan></text>

                  <!-- Carga RL -->
                  <line x1="555" y1="87" x2="590" y2="87" stroke="#475569" stroke-width="1.5"/>
                  <line x1="590" y1="87" x2="590" y2="97" stroke="#475569" stroke-width="1.5"/>
                  <rect x="582" y="97" width="16" height="26" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="1.5" rx="2"/>
                  <text x="606" y="112" font-size="8.5" fill="#10b981" font-weight="bold">R<tspan baseline-shift="sub" font-size="70%">L</tspan></text>
                  <line x1="590" y1="123" x2="590" y2="135" stroke="#475569" stroke-width="1.5"/>
                  <line x1="582" y1="135" x2="598" y2="135" stroke="#475569" stroke-width="2"/>

                  <!-- Barra de fórmulas total -->
                  <rect x="30" y="148" width="560" height="32" rx="6" fill="#475569" fill-opacity="0.08" stroke="#475569" stroke-opacity="0.2"/>
                  <text x="310" y="168" text-anchor="middle" font-mono font-bold fill="#334155" dark:fill="#cbd5e1" font-size="9.5">A<tspan baseline-shift="sub" font-size="70%">v,total</tspan> = A<tspan baseline-shift="sub" font-size="70%">v1</tspan>(con R<tspan baseline-shift="sub" font-size="70%">in2</tspan>) · A<tspan baseline-shift="sub" font-size="70%">v2</tspan>(con R<tspan baseline-shift="sub" font-size="70%">L</tspan>) = [ -g<tspan baseline-shift="sub" font-size="70%">m1</tspan> (R<tspan baseline-shift="sub" font-size="70%">D1</tspan> ∥ R<tspan baseline-shift="sub" font-size="70%">in2</tspan>) ] · [ -g<tspan baseline-shift="sub" font-size="70%">m2</tspan> (R<tspan baseline-shift="sub" font-size="70%">C2</tspan> ∥ R<tspan baseline-shift="sub" font-size="70%">L</tspan>) ]</text>
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
                    <text x="112" y="176" text-anchor="middle" font-weight="bold" fill="#0369a1" font-size="9.5">β<tspan baseline-shift="sub" font-size="70%">D</tspan> ≈ β<tspan baseline-shift="sub" font-size="70%">1</tspan> · β<tspan baseline-shift="sub" font-size="70%">2</tspan>  (Ganancia enorme)</text>
                    <text x="112" y="192" text-anchor="middle" font-weight="bold" fill="#0369a1" font-size="9.5">V<tspan baseline-shift="sub" font-size="70%">BE,tot</tspan> = V<tspan baseline-shift="sub" font-size="70%">BE1</tspan> + V<tspan baseline-shift="sub" font-size="70%">BE2</tspan> ≈ 1.4 V</text>
                    <text x="112" y="207" text-anchor="middle" fill="#64748b" font-size="8.5">R<tspan baseline-shift="sub" font-size="70%">in</tspan> ≈ β<tspan baseline-shift="sub" font-size="70%">1</tspan> β<tspan baseline-shift="sub" font-size="70%">2</tspan> R<tspan baseline-shift="sub" font-size="70%">E</tspan> · V<tspan baseline-shift="sub" font-size="70%">CE,sat</tspan> ≈ 0.9 V</text>
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
                    <text x="112" y="176" text-anchor="middle" font-weight="bold" fill="#047857" font-size="9.5">β<tspan baseline-shift="sub" font-size="70%">S</tspan> ≈ β<tspan baseline-shift="sub" font-size="70%">1</tspan> · β<tspan baseline-shift="sub" font-size="70%">2</tspan>  (Alta ganancia)</text>
                    <text x="112" y="192" text-anchor="middle" font-weight="bold" fill="#047857" font-size="9.5">V<tspan baseline-shift="sub" font-size="70%">BE,tot</tspan> = V<tspan baseline-shift="sub" font-size="70%">BE1</tspan> ≈ 0.7 V (1 sola caída!)</text>
                    <text x="112" y="207" text-anchor="middle" fill="#64748b" font-size="8.5">Mejor estabilidad térmica · V<tspan baseline-shift="sub" font-size="70%">CE,sat</tspan> ≈ 0.3 V</text>
                  </g>

                  <!-- Divisor vertical -->
                  <line x1="475" y1="15" x2="475" y2="225" stroke="#cbd5e1" stroke-dasharray="3 3"/>

                  <!-- ================= (c) CONFIGURACIÓN CASCODE ================= -->
                  <g transform="translate(485, 0)">
                    <text x="115" y="18" text-anchor="middle" font-weight="bold" fill="#7c3aed" font-size="11">3. Etapa Cascode (EC + BC)</text>

                    <!-- VCC a RC -->
                    <line x1="140" y1="28" x2="140" y2="38" stroke="#475569" stroke-width="1.5"/>
                    <rect x="133" y="38" width="14" height="20" fill="#7c3aed" fill-opacity="0.2" stroke="#7c3aed" stroke-width="1.2" rx="1.5"/>
                    <text x="153" y="52" font-size="7.5" fill="#7c3aed" font-weight="bold">R<tspan baseline-shift="sub" font-size="70%">C</tspan></text>
                    <line x1="140" y1="58" x2="140" y2="68" stroke="#475569" stroke-width="1.5"/>
                    <circle cx="140" cy="68" r="2.5" fill="#10b981"/>
                    <!-- Salida vo -->
                    <line x1="140" y1="68" x2="175" y2="68" stroke="#10b981" stroke-width="1.5"/>
                    <circle cx="175" cy="68" r="3" fill="#10b981"/>
                    <text x="185" y="72" font-weight="bold" fill="#10b981" font-size="9.5">v<tspan baseline-shift="sub" font-size="70%">o</tspan></text>

                    <!-- Q2 Superior (Base Común - Base a masa de AC) -->
                    <line x1="90" y1="72" x2="90" y2="88" stroke="#334155" stroke-width="2.5"/>
                    <line x1="90" y1="74" x2="140" y2="68" stroke="#475569" stroke-width="1.2"/>
                    <line x1="90" y1="86" x2="140" y2="92" stroke="#475569" stroke-width="1.2"/>
                    <polygon points="128,91 140,92 135,84" fill="#ef4444"/>
                    <!-- Base a V_BIAS fija (AC GND) -->
                    <line x1="55" y1="80" x2="90" y2="80" stroke="#7c3aed" stroke-width="1.5"/>
                    <text x="50" y="83" text-anchor="end" font-size="7.5" font-weight="bold" fill="#7c3aed">V<tspan baseline-shift="sub" font-size="70%">BIAS</tspan>(AC GND)</text>

                    <!-- Nodo intermedio (Baja impedancia 1/gm2) -->
                    <line x1="140" y1="92" x2="140" y2="105" stroke="#ef4444" stroke-width="1.8"/>
                    <circle cx="140" cy="99" r="2" fill="#ef4444"/>
                    <text x="146" y="101" font-size="7" fill="#ef4444">R<tspan baseline-shift="sub" font-size="70%">in2</tspan> ≈ 1/g<tspan baseline-shift="sub" font-size="70%">m2</tspan></text>

                    <!-- Q1 Inferior (Emisor Común) -->
                    <line x1="90" y1="108" x2="90" y2="124" stroke="#334155" stroke-width="2.5"/>
                    <line x1="90" y1="110" x2="140" y2="105" stroke="#475569" stroke-width="1.2"/>
                    <line x1="90" y1="122" x2="140" y2="128" stroke="#475569" stroke-width="1.2"/>
                    <polygon points="128,127 140,128 135,120" fill="#ef4444"/>
                    <!-- Entrada vi en Base de Q1 -->
                    <line x1="55" y1="116" x2="90" y2="116" stroke="#3b82f6" stroke-width="1.5"/>
                    <circle cx="55" cy="116" r="3" fill="#3b82f6"/>
                    <text x="45" y="120" text-anchor="end" font-weight="bold" fill="#3b82f6" font-size="9.5">v<tspan baseline-shift="sub" font-size="70%">i</tspan></text>

                    <!-- Emisor Q1 a masa -->
                    <line x1="140" y1="128" x2="140" y2="142" stroke="#475569" stroke-width="1.5"/>
                    <line x1="132" y1="142" x2="148" y2="142" stroke="#475569" stroke-width="2"/>

                    <!-- Fórmulas Cascode -->
                    <rect x="15" y="160" width="205" height="58" rx="6" fill="#7c3aed" fill-opacity="0.08" stroke="#7c3aed" stroke-opacity="0.3"/>
                    <text x="117" y="176" text-anchor="middle" font-weight="bold" fill="#6d28d9" font-size="9.5">A<tspan baseline-shift="sub" font-size="70%">v1</tspan> ≈ -g<tspan baseline-shift="sub" font-size="70%">m1</tspan> · (1/g<tspan baseline-shift="sub" font-size="70%">m2</tspan>) ≈ -1</text>
                    <text x="117" y="192" text-anchor="middle" font-weight="bold" fill="#6d28d9" font-size="9.5">🚀 ¡Anula Efecto Miller (C<tspan baseline-shift="sub" font-size="70%">in,M</tspan> ≈ 2 C<tspan baseline-shift="sub" font-size="70%">c</tspan>b)!</text>
                    <text x="117" y="207" text-anchor="middle" fill="#64748b" font-size="8.5">Ancho de banda altísimo · R<tspan baseline-shift="sub" font-size="70%">o</tspan> ≈ g<tspan baseline-shift="sub" font-size="70%">m2</tspan> r<tspan baseline-shift="sub" font-size="70%">o2</tspan> r<tspan baseline-shift="sub" font-size="70%">o1</tspan></text>
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
                  <text x="340" y="14" text-anchor="middle" font-weight="bold" fill="#ef4444" font-size="10">+V<tspan baseline-shift="sub" font-size="70%">DD</tspan></text>

                  <!-- ================= CARGA ACTIVA PMOS (M3 y M4) ================= -->
                  <!-- M3 PMOS (Conectado como Diodo a la izquierda) -->
                  <line x1="250" y1="20" x2="250" y2="35" stroke="#475569" stroke-width="1.8"/>
                  <rect x="238" y="35" width="24" height="30" fill="#ec4899" fill-opacity="0.15" stroke="#ec4899" stroke-width="1.5" rx="3"/>
                  <text x="250" y="53" text-anchor="middle" font-weight="bold" fill="#db2777" font-size="10">M<tspan baseline-shift="sub" font-size="70%">3</tspan> (P)</text>
                  <line x1="250" y1="65" x2="250" y2="85" stroke="#475569" stroke-width="1.8"/>
                  <circle cx="250" cy="85" r="3" fill="#475569"/>

                  <!-- M4 PMOS (Espejo a la derecha) -->
                  <line x1="430" y1="20" x2="430" y2="35" stroke="#475569" stroke-width="1.8"/>
                  <rect x="418" y="35" width="24" height="30" fill="#ec4899" fill-opacity="0.15" stroke="#ec4899" stroke-width="1.5" rx="3"/>
                  <text x="430" y="53" text-anchor="middle" font-weight="bold" fill="#db2777" font-size="10">M<tspan baseline-shift="sub" font-size="70%">4</tspan> (P)</text>
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
                  <text x="535" y="89" font-weight="bold" fill="#10b981" font-size="11">v<tspan baseline-shift="sub" font-size="70%">o</tspan> (Salida)</text>

                  <!-- ================= PAR DIFERENCIAL NMOS (M1 y M2) ================= -->
                  <!-- M1 NMOS (Izquierda) -->
                  <rect x="238" y="95" width="24" height="30" fill="#3b82f6" fill-opacity="0.15" stroke="#3b82f6" stroke-width="1.5" rx="3"/>
                  <text x="250" y="113" text-anchor="middle" font-weight="bold" fill="#2563eb" font-size="10">M<tspan baseline-shift="sub" font-size="70%">1</tspan> (N)</text>
                  <!-- Entrada v_in1 -->
                  <line x1="160" y1="110" x2="238" y2="110" stroke="#3b82f6" stroke-width="1.8"/>
                  <circle cx="160" cy="110" r="3.5" fill="#3b82f6"/>
                  <text x="145" y="114" text-anchor="end" font-weight="bold" fill="#3b82f6" font-size="10">v<tspan baseline-shift="sub" font-size="70%">in1</tspan> (+)</text>

                  <!-- M2 NMOS (Derecha) -->
                  <rect x="418" y="95" width="24" height="30" fill="#3b82f6" fill-opacity="0.15" stroke="#3b82f6" stroke-width="1.5" rx="3"/>
                  <text x="430" y="113" text-anchor="middle" font-weight="bold" fill="#2563eb" font-size="10">M<tspan baseline-shift="sub" font-size="70%">2</tspan> (N)</text>
                  <!-- Entrada v_in2 -->
                  <line x1="442" y1="110" x2="510" y2="110" stroke="#3b82f6" stroke-width="1.8"/>
                  <circle cx="510" cy="110" r="3.5" fill="#3b82f6"/>
                  <text x="525" y="114" text-anchor="start" font-weight="bold" fill="#3b82f6" font-size="10">v<tspan baseline-shift="sub" font-size="70%">in2</tspan> (-)</text>

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
                  <text x="365" y="182" font-weight="bold" fill="#6366f1" font-size="9.5">I<tspan baseline-shift="sub" font-size="70%">SS</tspan></text>

                  <!-- GND inferior -->
                  <line x1="340" y1="197" x2="340" y2="215" stroke="#475569" stroke-width="1.8"/>
                  <line x1="325" y1="215" x2="355" y2="215" stroke="#475569" stroke-width="2"/>
                  <line x1="331" y1="218" x2="349" y2="218" stroke="#475569" stroke-width="1.5"/>

                  <!-- Etiqueta de ganancia en el lado derecho -->
                  <rect x="15" y="165" width="220" height="48" rx="6" fill="#10b981" fill-opacity="0.08" stroke="#10b981" stroke-opacity="0.3"/>
                  <text x="125" y="183" text-anchor="middle" font-weight="bold" fill="#047857" font-size="9.5">A<tspan baseline-shift="sub" font-size="70%">d</tspan> = -g<tspan baseline-shift="sub" font-size="70%">mN</tspan> · (r<tspan baseline-shift="sub" font-size="70%">oN</tspan> ∥ r<tspan baseline-shift="sub" font-size="70%">oP</tspan>)</text>
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
                  <text x="140" y="73" font-size="9" font-weight="bold" fill="#4f46e5">OA<tspan baseline-shift="sub" font-size="70%">1</tspan></text>

                  <!-- Entrada V1 (+) al terminal no inversor -->
                  <line x1="30" y1="88" x2="120" y2="88" stroke="#3b82f6" stroke-width="1.8"/>
                  <circle cx="30" cy="88" r="3.5" fill="#3b82f6"/>
                  <text x="20" y="92" text-anchor="end" font-weight="bold" fill="#3b82f6" font-size="10.5">V<tspan baseline-shift="sub" font-size="70%">1</tspan></text>

                  <!-- OpAmp 2 Inferior -->
                  <polygon points="120,150 120,210 170,180" fill="#6366f1" fill-opacity="0.15" stroke="#6366f1" stroke-width="1.8"/>
                  <text x="127" y="168" font-weight="bold" fill="#6366f1" font-size="10">+</text>
                  <text x="127" y="198" font-weight="bold" fill="#6366f1" font-size="10">-</text>
                  <text x="140" y="183" font-size="9" font-weight="bold" fill="#4f46e5">OA<tspan baseline-shift="sub" font-size="70%">2</tspan></text>

                  <!-- Entrada V2 (+) al terminal no inversor -->
                  <line x1="30" y1="168" x2="120" y2="168" stroke="#3b82f6" stroke-width="1.8"/>
                  <circle cx="30" cy="168" r="3.5" fill="#3b82f6"/>
                  <text x="20" y="172" text-anchor="end" font-weight="bold" fill="#3b82f6" font-size="10.5">V<tspan baseline-shift="sub" font-size="70%">2</tspan></text>

                  <!-- Lazo de realimentación R1 superior -->
                  <line x1="170" y1="70" x2="190" y2="70" stroke="#475569" stroke-width="1.8"/>
                  <circle cx="190" cy="70" r="2.5" fill="#475569"/>
                  <line x1="190" y1="70" x2="190" y2="30" stroke="#475569" stroke-width="1.5"/>
                  <line x1="190" y1="30" x2="155" y2="30" stroke="#475569" stroke-width="1.5"/>
                  <rect x="135" y="22" width="20" height="16" fill="#6366f1" fill-opacity="0.2" stroke="#6366f1" stroke-width="1.2" rx="1.5"/>
                  <text x="145" y="16" text-anchor="middle" font-size="8" fill="#6366f1" font-weight="bold">R<tspan baseline-shift="sub" font-size="70%">1</tspan></text>
                  <line x1="135" y1="30" x2="95" y2="30" stroke="#475569" stroke-width="1.5"/>
                  <line x1="95" y1="30" x2="95" y2="55" stroke="#475569" stroke-width="1.5"/>
                  <line x1="95" y1="55" x2="120" y2="55" stroke="#475569" stroke-width="1.5"/>
                  <circle cx="95" cy="55" r="2.5" fill="#475569"/>

                  <!-- Resistencia central RG -->
                  <line x1="95" y1="55" x2="95" y2="110" stroke="#ef4444" stroke-width="1.8"/>
                  <rect x="87" y="110" width="16" height="30" fill="#ef4444" fill-opacity="0.25" stroke="#ef4444" stroke-width="1.8" rx="2"/>
                  <text x="75" y="128" text-anchor="end" font-weight="bold" fill="#ef4444" font-size="9.5">R<tspan baseline-shift="sub" font-size="70%">G</tspan></text>
                  <line x1="95" y1="140" x2="95" y2="195" stroke="#ef4444" stroke-width="1.8"/>
                  <circle cx="95" cy="195" r="2.5" fill="#475569"/>

                  <!-- Lazo de realimentación R1 inferior -->
                  <line x1="95" y1="195" x2="120" y2="195" stroke="#475569" stroke-width="1.5"/>
                  <line x1="95" y1="195" x2="95" y2="220" stroke="#475569" stroke-width="1.5"/>
                  <line x1="95" y1="220" x2="135" y2="220" stroke="#475569" stroke-width="1.5"/>
                  <rect x="135" y="212" width="20" height="16" fill="#6366f1" fill-opacity="0.2" stroke="#6366f1" stroke-width="1.2" rx="1.5"/>
                  <text x="145" y="238" text-anchor="middle" font-size="8" fill="#6366f1" font-weight="bold">R<tspan baseline-shift="sub" font-size="70%">1</tspan></text>
                  <line x1="155" y1="220" x2="190" y2="220" stroke="#475569" stroke-width="1.5"/>
                  <line x1="190" y1="220" x2="190" y2="180" stroke="#475569" stroke-width="1.5"/>
                  <circle cx="190" cy="180" r="2.5" fill="#475569"/>
                  <line x1="170" y1="180" x2="190" y2="180" stroke="#475569" stroke-width="1.8"/>

                  <!-- ================= ETAPA 2: RESTADOR DIFERENCIAL (OA3) ================= -->
                  <!-- R3 superior -->
                  <line x1="190" y1="70" x2="230" y2="70" stroke="#475569" stroke-width="1.5"/>
                  <rect x="230" y="62" width="22" height="16" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="1.2" rx="1.5"/>
                  <text x="241" y="56" text-anchor="middle" font-size="8" fill="#10b981" font-weight="bold">R<tspan baseline-shift="sub" font-size="70%">3</tspan></text>
                  <line x1="252" y1="70" x2="290" y2="70" stroke="#475569" stroke-width="1.5"/>
                  <line x1="290" y1="70" x2="290" y2="110" stroke="#475569" stroke-width="1.5"/>
                  <circle cx="290" cy="110" r="2.5" fill="#475569"/>

                  <!-- R3 inferior -->
                  <line x1="190" y1="180" x2="230" y2="180" stroke="#475569" stroke-width="1.5"/>
                  <rect x="230" y="172" width="22" height="16" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="1.2" rx="1.5"/>
                  <text x="241" y="166" text-anchor="middle" font-size="8" fill="#10b981" font-weight="bold">R<tspan baseline-shift="sub" font-size="70%">3</tspan></text>
                  <line x1="252" y1="180" x2="290" y2="180" stroke="#475569" stroke-width="1.5"/>
                  <line x1="290" y1="180" x2="290" y2="140" stroke="#475569" stroke-width="1.5"/>
                  <circle cx="290" cy="140" r="2.5" fill="#475569"/>

                  <!-- OpAmp 3 de salida -->
                  <polygon points="320,95 320,155 370,125" fill="#10b981" fill-opacity="0.15" stroke="#10b981" stroke-width="1.8"/>
                  <text x="327" y="113" font-weight="bold" fill="#10b981" font-size="10">-</text>
                  <text x="327" y="143" font-weight="bold" fill="#10b981" font-size="10">+</text>
                  <text x="340" y="128" font-size="9" font-weight="bold" fill="#059669">OA<tspan baseline-shift="sub" font-size="70%">3</tspan></text>

                  <line x1="290" y1="110" x2="320" y2="110" stroke="#475569" stroke-width="1.5"/>
                  <line x1="290" y1="140" x2="320" y2="140" stroke="#475569" stroke-width="1.5"/>

                  <!-- R4 de realimentación (OA3) -->
                  <line x1="290" y1="110" x2="290" y2="90" stroke="#475569" stroke-width="1.5"/>
                  <line x1="290" y1="90" x2="340" y2="90" stroke="#475569" stroke-width="1.5"/>
                  <rect x="340" y="82" width="22" height="16" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="1.2" rx="1.5"/>
                  <text x="351" y="76" text-anchor="middle" font-size="8" fill="#10b981" font-weight="bold">R<tspan baseline-shift="sub" font-size="70%">4</tspan></text>
                  <line x1="362" y1="90" x2="400" y2="90" stroke="#475569" stroke-width="1.5"/>
                  <line x1="400" y1="90" x2="400" y2="125" stroke="#475569" stroke-width="1.5"/>
                  <circle cx="400" cy="125" r="2.5" fill="#475569"/>

                  <!-- R4 a masa (terminal + OA3) -->
                  <line x1="290" y1="140" x2="290" y2="160" stroke="#475569" stroke-width="1.5"/>
                  <line x1="290" y1="160" x2="340" y2="160" stroke="#475569" stroke-width="1.5"/>
                  <rect x="340" y="152" width="22" height="16" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="1.2" rx="1.5"/>
                  <text x="351" y="178" text-anchor="middle" font-size="8" fill="#10b981" font-weight="bold">R<tspan baseline-shift="sub" font-size="70%">4</tspan></text>
                  <line x1="362" y1="160" x2="380" y2="160" stroke="#475569" stroke-width="1.5"/>
                  <line x1="380" y1="152" x2="380" y2="168" stroke="#475569" stroke-width="2"/>

                  <!-- Salida final Vo -->
                  <line x1="370" y1="125" x2="460" y2="125" stroke="#10b981" stroke-width="2"/>
                  <circle cx="460" cy="125" r="4" fill="#10b981"/>
                  <text x="475" y="129" font-weight="bold" fill="#10b981" font-size="12">V<tspan baseline-shift="sub" font-size="70%">o</tspan></text>

                  <!-- Cuadro de Ganancia y Propiedades -->
                  <rect x="490" y="30" width="195" height="175" rx="8" fill="#047857" fill-opacity="0.08" stroke="#047857" stroke-opacity="0.25"/>
                  <text x="587" y="52" text-anchor="middle" font-weight="bold" fill="#047857" font-size="10.5">Propiedades Cardinales</text>
                  <text x="500" y="75" font-weight="bold" fill="#334155" dark:fill="#cbd5e1" font-size="9">• Impedancia de entrada:</text>
                  <text x="510" y="90" fill="#64748b" font-size="8.5">R<tspan baseline-shift="sub" font-size="70%">in1</tspan>, R<tspan baseline-shift="sub" font-size="70%">in2</tspan> ≈ ∞ (no cargan sensor)</text>
                  <text x="500" y="110" font-weight="bold" fill="#334155" dark:fill="#cbd5e1" font-size="9">• Ajuste de Ganancia:</text>
                  <text x="510" y="125" fill="#ef4444" font-weight="bold" font-size="8.5">¡Solo se modifica R<tspan baseline-shift="sub" font-size="70%">G</tspan>!</text>
                  <text x="500" y="145" font-weight="bold" fill="#334155" dark:fill="#cbd5e1" font-size="9">• Rechazo de Modo Común:</text>
                  <text x="510" y="160" fill="#64748b" font-size="8.5">Etapa 1: A<tspan baseline-shift="sub" font-size="70%">d</tspan> &gt; 1, pero A<tspan baseline-shift="sub" font-size="70%">cm</tspan> = 1</text>
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
