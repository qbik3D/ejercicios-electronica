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
      introduccion: 'Esta unidad establece los pilares del análisis circuital en régimen estacionario de continua. Se desarrollan las convenciones de signos de tensión y corriente en componentes pasivos y activos, la Ley de Ohm, las asociaciones serie y paralelo, los divisores de tensión y corriente con efecto de carga, las leyes de Kirchhoff, los métodos sistemáticos de nodos y mallas, y los teoremas de Thévenin, Norton, Superposición y Máxima Transferencia de Potencia.',
      secciones: [
        {
          id: 'e1-u1-convencion-asociacion',
          titulo: '1.1 Convención de Signos Pasiva, Ley de Ohm y Asociación de Resistencias',
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
                    Donde $I$ fluye de $A$ hacia $B$. Si arbitrariamente se define $I$ en sentido opuesto (entrando por el borne $-$), la relación matemática adquiere signo negativo: $V_{AB} = - I \\cdot R$.
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

            <div class="p-3 my-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-950 dark:text-amber-200 text-xs">
              <strong>Contraste con Bipolos Activos (Generadores / Fuentes):</strong> En una fuente independiente ideal que entrega potencia al resto del circuito, la corriente suministrada <em>sale por el borne positivo</em> ($+$), verificando $P_{\\text{suministrada}} = V_s \\cdot I_s > 0$. Si una fuente recibe corriente ingresando por su borne positivo (por ejemplo, una batería en recarga), se comporta temporalmente como receptor pasivo.
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
          titulo: '1.4 Teoremas de Thévenin, Norton y Máxima Transferencia de Potencia',
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

            <div class="p-3 my-3 rounded-xl bg-teal-500/10 dark:bg-teal-950/40 border border-teal-500/30 text-xs flex items-start gap-2.5">
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
