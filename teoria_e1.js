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

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-5 mb-2">Transformación Estrella - Triángulo (Teorema de Kennelly)</h5>
            <p class="mb-2 text-xs sm:text-sm">
              Cuando una red resistiva presenta estructuras en puente (como el Puente de Wheatstone desbalanceado) o configuraciones en malla cerrada, ningún par de resistores se encuentra estrictamente en serie ni en paralelo. El <strong>Teorema de Kennelly</strong> permite convertir una conexión en <strong>Triángulo ($\Delta$)</strong> formada por $R_{AB}, R_{BC}, R_{CA}$ entre tres nodos $A, B, C$ en una conexión equivalente en <strong>Estrella ($Y$)</strong> con resistores $R_A, R_B, R_C$ conectados a un nodo neutro común central (o viceversa), preservando las tensiones y corrientes vistas desde los terminales externos.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2">
              <div class="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-950 dark:text-purple-200 text-xs">
                <span class="font-bold text-xs uppercase tracking-wider block mb-1">📐 Transformación Delta a Estrella ($\Delta \to Y$)</span>
                <p class="text-slate-600 dark:text-slate-400 mb-1">Para obtener las ramas de la estrella conectadas a los terminales $A, B, C$:</p>
                $$R_A = \\frac{R_{AB} \\cdot R_{CA}}{R_{AB} + R_{BC} + R_{CA}}$$
                $$R_B = \\frac{R_{AB} \\cdot R_{BC}}{R_{AB} + R_{BC} + R_{CA}}$$
                $$R_C = \\frac{R_{BC} \\cdot R_{CA}}{R_{AB} + R_{BC} + R_{CA}}$$
                <p class="text-[11px] text-slate-500 mt-1"><strong>Regla mnemotécnica:</strong> Cada resistencia de la estrella es el <em>producto de las dos resistencias adyacentes</em> del triángulo dividido por la <em>suma de las tres resistencias</em> del triángulo.</p>
              </div>

              <div class="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-950 dark:text-purple-200 text-xs">
                <span class="font-bold text-xs uppercase tracking-wider block mb-1">🔄 Transformación Estrella a Delta ($Y \to \Delta$)</span>
                <p class="text-slate-600 dark:text-slate-400 mb-1">Para obtener las ramas del triángulo entre pares de terminales:</p>
                $$R_{AB} = \\frac{R_A R_B + R_B R_C + R_C R_A}{R_C}$$
                $$R_{BC} = \\frac{R_A R_B + R_B R_C + R_C R_A}{R_A}$$
                $$R_{CA} = \\frac{R_A R_B + R_B R_C + R_C R_A}{R_B}$$
                <p class="text-[11px] text-slate-500 mt-1"><strong>Regla mnemotécnica:</strong> Es la <em>suma de los productos cruzados tomados de a pares</em> dividida por la resistencia de la <em>rama opuesta</em> de la estrella.</p>
              </div>
            </div>

            <div class="p-3 my-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
              <strong>Caso Particular Simétrico ($R_{AB} = R_{BC} = R_{CA} = R_\\Delta$):</strong>
              $$\\mathbf{R_Y = \\frac{R_\\Delta}{3}} \\quad \\Longleftrightarrow \\quad \\mathbf{R_\\Delta = 3 \\cdot R_Y}$$
              <span class="text-slate-500">La resistencia equivalente de cada rama de la estrella es exactamente un tercio del valor de cada rama del triángulo.</span>
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
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">Teorema de Kennelly ($\Delta \\to Y$)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$R_A = \\frac{R_{AB} R_{CA}}{\\sum R_\\Delta}$ (simétrico: $R_Y = R_\\Delta / 3$)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans">Redes en puente / no reducibles</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-sans font-semibold">Teorema de Kennelly ($Y \\to \\Delta$)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$R_{AB} = \\frac{\\sum R_i R_j}{R_C}$ (simétrico: $R_\\Delta = 3 R_Y$)</td>
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
                    <text x="90" y="185" text-anchor="middle" fill="#059669" font-size="11" font-weight="bold">E_g ≈ 0 eV</text>
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
                    <text x="90" y="117" text-anchor="middle" fill="#b45309" font-size="10" font-weight="bold">E_g ≈ 1.12 eV (Si)</text>
                    
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
                    <text x="90" y="112" text-anchor="middle" fill="#b91c1c" font-size="10" font-weight="bold">E_g &gt; 5 a 9 eV</text>
                    
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
                    <td class="p-2 border border-slate-200 dark:border-slate-800 font-semibold font-mono">Efecto Térmico ($T \\uparrow$)</td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">
                      <strong>PTC</strong> ($\\rho$ aumenta por mayor dispersión reticular con fonones)
                    </td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">
                      <strong>NTC</strong> ($\\rho$ disminuye exponencialmente por generación térmica de pares $e^--h^+$)
                    </td>
                    <td class="p-2 border border-slate-200 dark:border-slate-800">
                      Permanece aislante hasta la tensión de ruptura dieléctrica
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

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-5 mb-2">Semiconductores Intrínsecos y Dopaje Extrínseco</h5>
            <p class="mb-2 text-xs sm:text-sm">
              En un cristal de silicio puro (<strong>intrínseco</strong>), cada átomo comparte sus 4 electrones de valencia con 4 átomos vecinos mediante enlaces covalentes tetraédricos. A $0\\text{ K}$ todos los electrones están confinados (aislante ideal). A $300\\text{ K}$, la energía térmica excita electrones a la banda de conducción, dejando vacantes en la banda de valencia denominadas <strong>huecos</strong>:
            </p>
            $$n = p = n_i(T) = B \\cdot T^{3/2} \\exp\\left( -\\frac{E_g}{2 k T} \\right)$$
            <p class="mb-2 text-xs sm:text-sm">
              Mediante la técnica de <strong>dopaje</strong> (introducción controlada de impurezas en proporciones de 1 por millón a 1 por mil millones), se controla la conductividad en varios órdenes de magnitud:
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2">
              <div class="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-950 dark:text-cyan-200 text-xs">
                <span class="font-bold uppercase tracking-wider block mb-1">🟦 Semiconductor Tipo N (Donores Pentavalentes)</span>
                <p class="text-slate-600 dark:text-slate-400">
                  Dopado con átomos del Grupo V (Fósforo $\\text{P}$, Arsénico $\\text{As}$, Antimonio $\\text{Sb}$). El quinto electrón no cabe en la red covalente y queda ligado débilmente con una energía de ionización de solo $\\sim 0.05\\text{ eV}$, donándose a la banda de conducción a temperatura ambiente.
                </p>
                <ul class="list-disc pl-4 space-y-0.5 mt-1 text-[11px]">
                  <li><strong>Portadores mayoritarios:</strong> Electrones ($n_n \\approx N_D$).</li>
                  <li><strong>Portadores minoritarios:</strong> Huecos ($p_n = n_i^2 / N_D \\ll n_n$).</li>
                  <li>Iones fijos no móviles en la red: $N_D^+$ (positivos).</li>
                </ul>
              </div>

              <div class="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-950 dark:text-rose-200 text-xs">
                <span class="font-bold uppercase tracking-wider block mb-1">🟥 Semiconductor Tipo P (Aceptores Trivalentes)</span>
                <p class="text-slate-600 dark:text-slate-400">
                  Dopado con átomos del Grupo III (Boro $\\text{B}$, Galio $\\text{Ga}$, Indio $\\text{In}$). Al poseer solo 3 electrones de valencia, dejan un enlace incompleto o vacante que acepta fácilmente un electrón térmico de valencia, creando un hueco móvil.
                </p>
                <ul class="list-disc pl-4 space-y-0.5 mt-1 text-[11px]">
                  <li><strong>Portadores mayoritarios:</strong> Huecos ($p_p \\approx N_A$).</li>
                  <li><strong>Portadores minoritarios:</strong> Electrones ($n_p = n_i^2 / N_A \\ll p_p$).</li>
                  <li>Iones fijos no móviles en la red: $N_A^-$ (negativos).</li>
                </ul>
              </div>
            </div>

            <div class="p-3 my-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
              <strong>Ley de Acción de Masas:</strong> En condiciones de equilibrio térmico a temperatura $T$, el producto de portadores es rigurosamente constante independiente del nivel de dopaje:
              $$\\mathbf{n \\cdot p = n_i^2(T)}$$
            </div>
          `
        },
        {
          id: 'e1-u2-fisica-juntura',
          titulo: '2.2 La Juntura PN en Equilibrio Termodinámico y Formación de la ZCE',
          contenido: `
            <p class="mb-3">Al unir metalúrgicamente un cristal semiconductor tipo P y uno tipo N, surge un marcado gradiente de concentración de portadores que desencadena el nacimiento de la unión o juntura PN.</p>

            <h5 class="text-sm font-bold text-slate-900 dark:text-white mt-4 mb-2">Dinámica de Formación de la Zona de Carga Espacial (ZCE)</h5>
            <ol class="list-decimal pl-5 space-y-1 text-xs sm:text-sm">
              <li><strong>Difusión inicial:</strong> Los huecos mayoritarios del lado P difunden espontáneamente hacia el lado N, y los electrones del lado N difunden hacia el lado P.</li>
              <li><strong>Recombinación y desvelo de iones fijos:</strong> Al cruzar la interfaz, los portadores se recombinan, dejando al descubierto los iones inmóviles de la red cristalina: iones aceptores negativos $N_A^-$ en el lado P y donores positivos $N_D^+$ en el lado N.</li>
              <li><strong>Campo eléctrico interno inducido ($\\vec{\\mathcal{E}}$):</strong> Esta separación de cargas fijas crea una región desprovista de portadores libres denominada <strong>Zona de Carga Espacial (ZCE)</strong> o región de agotamiento. El campo eléctrico $\\vec{\\mathcal{E}}$ apunta desde el lado N ($+$) hacia el lado P ($-$).</li>
              <li><strong>Equilibrio dinámico de corrientes:</strong> El campo $\\vec{\\mathcal{E}}$ ejerce una fuerza que empuja a los huecos hacia P y a los electrones hacia N (corriente de arrastre o *drift*). En equilibrio térmico, la corriente de arrastre equilibra exactamente a la de difusión:
                $$J_{\\text{total}} = J_{\\text{difusión}} + J_{\\text{arrastre}} = 0$$
              </li>
            </ol>

            <div class="p-3.5 my-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-950 dark:text-blue-200 text-xs">
              <h5 class="font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <span>⚡</span> Barrera de Potencial de Contacto Interno ($V_{bi}$ o $V_0$)
              </h5>
              <p>Integrando el campo eléctrico a lo largo de la ZCE se obtiene la barrera de potencial de contacto interno:</p>
              $$\\mathbf{V_0 = V_{bi} = V_T \\ln\\left( \\frac{N_A \\cdot N_D}{n_i^2} \\right)}$$
              <p class="mt-1 text-slate-600 dark:text-slate-400">
                donde $V_T = \\frac{k T}{q} \\approx 25.86\\text{ mV}$ es la tensión térmica a $300\\text{ K}$. Para silicio a temperatura ambiente con dopajes típicos ($10^{16}\\text{ cm}^{-3}$), $V_0 \\approx 0.65\\text{ V} - 0.75\\text{ V}$.
              </p>
            </div>

            <p class="text-xs text-slate-600 dark:text-slate-400">
              <strong>Ancho de la Zona de Agotamiento en Equilibrio ($W_0$):</strong>
              $$W_0 = x_p + x_n = \\sqrt{ \\frac{2 \\varepsilon_s V_0}{q} \\left( \\frac{1}{N_A} + \\frac{1}{N_D} \\right) }$$
              donde $\\varepsilon_s = \\varepsilon_r \\varepsilon_0 \\approx 11.7 \\times 8.85 \\times 10^{-12}\\text{ F/m}$. Nótese por neutralidad de carga ($q N_A x_p = q N_D x_n$) que la ZCE penetra mucho más profundamente en el lado menos dopado.
            </p>
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
                📊 Gráfico Físico: Estados de Polarización de la Juntura PN
              </h6>
              <div class="overflow-x-auto flex justify-center">
                <svg viewBox="0 0 720 280" class="w-full max-w-3xl h-auto font-sans text-xs select-none">
                  <!-- ESTADO 1: EQUILIBRIO (V = 0) -->
                  <g transform="translate(15, 15)">
                    <rect x="0" y="0" width="215" height="250" rx="10" fill="#3b82f6" fill-opacity="0.04" stroke="#64748b" stroke-opacity="0.3" stroke-width="1.2"/>
                    <text x="107" y="22" text-anchor="middle" font-weight="bold" fill="#475569" font-size="11">1. EQUILIBRIO (V_D = 0)</text>
                    <text x="107" y="36" text-anchor="middle" fill="#64748b" font-size="9">Sin polarización externa</text>
                    
                    <!-- Cristal PN -->
                    <rect x="15" y="50" width="90" height="70" fill="#f43f5e" fill-opacity="0.25" stroke="#f43f5e" stroke-width="1.2"/>
                    <text x="35" y="88" fill="#e11d48" font-weight="bold" font-size="14">P</text>
                    <text x="35" y="103" fill="#64748b" font-size="8">Huecos (h⁺)</text>

                    <rect x="105" y="50" width="90" height="70" fill="#06b6d4" fill-opacity="0.25" stroke="#06b6d4" stroke-width="1.2"/>
                    <text x="165" y="88" fill="#0891b2" font-weight="bold" font-size="14">N</text>
                    <text x="155" y="103" fill="#64748b" font-size="8">Electrones (e⁻)</text>

                    <!-- ZCE -->
                    <rect x="75" y="50" width="60" height="70" fill="#cbd5e1" fill-opacity="0.45" stroke="#64748b" stroke-dasharray="2,2"/>
                    <text x="105" y="68" text-anchor="middle" fill="#334155" font-size="8" font-weight="bold">ZCE</text>
                    <text x="88" y="90" text-anchor="middle" fill="#e11d48" font-size="11" font-weight="bold">- -</text>
                    <text x="122" y="90" text-anchor="middle" fill="#0891b2" font-size="11" font-weight="bold">+ +</text>

                    <!-- Campo interno E -->
                    <line x1="125" y1="112" x2="85" y2="112" stroke="#e11d48" stroke-width="2" marker-end="url(#arr-red)"/>
                    <text x="105" y="108" text-anchor="middle" fill="#e11d48" font-size="8" font-weight="bold">E_int (N→P)</text>

                    <!-- Perfil de Barrera -->
                    <path d="M 25 200 L 75 200 Q 105 180 105 160 Q 105 140 185 140" fill="none" stroke="#64748b" stroke-width="2"/>
                    <text x="105" y="180" text-anchor="middle" fill="#475569" font-size="9" font-weight="bold">Barrera V_0 ≈ 0.7V</text>
                    <text x="107" y="232" text-anchor="middle" fill="#059669" font-size="10" font-weight="bold">I_total = 0</text>
                  </g>

                  <!-- ESTADO 2: POLARIZACIÓN DIRECTA (V_D > 0) -->
                  <g transform="translate(250, 15)">
                    <rect x="0" y="0" width="215" height="250" rx="10" fill="#10b981" fill-opacity="0.06" stroke="#10b981" stroke-opacity="0.4" stroke-width="1.5"/>
                    <text x="107" y="22" text-anchor="middle" font-weight="bold" fill="#059669" font-size="11">2. POLARIZACIÓN DIRECTA</text>
                    <text x="107" y="36" text-anchor="middle" fill="#059669" font-size="9">Ánodo (+) a P · Cátodo (-) a N</text>
                    
                    <!-- Cristal PN -->
                    <rect x="15" y="50" width="90" height="70" fill="#f43f5e" fill-opacity="0.25" stroke="#f43f5e" stroke-width="1.2"/>
                    <text x="35" y="88" fill="#e11d48" font-weight="bold" font-size="14">P</text>

                    <rect x="105" y="50" width="90" height="70" fill="#06b6d4" fill-opacity="0.25" stroke="#06b6d4" stroke-width="1.2"/>
                    <text x="165" y="88" fill="#0891b2" font-weight="bold" font-size="14">N</text>

                    <!-- ZCE Angosta -->
                    <rect x="92" y="50" width="26" height="70" fill="#cbd5e1" fill-opacity="0.45" stroke="#10b981" stroke-width="1.5"/>
                    <text x="105" y="65" text-anchor="middle" fill="#059669" font-size="7" font-weight="bold">ZCE Estrecha</text>

                    <!-- Flecha de corriente directa masiva -->
                    <line x1="30" y1="85" x2="180" y2="85" stroke="#10b981" stroke-width="3.5" marker-end="url(#arr-green)"/>
                    <text x="105" y="80" text-anchor="middle" fill="#047857" font-size="9" font-weight="bold">I_D Masiva ➔</text>

                    <!-- Fuente Externa -->
                    <path d="M 15 85 L 5 85 L 5 130 L 205 130 L 205 85 L 195 85" fill="none" stroke="#059669" stroke-width="1.2"/>
                    <text x="105" y="142" text-anchor="middle" fill="#059669" font-size="9" font-weight="bold">+ [ V_D ] -</text>

                    <!-- Perfil de Barrera Reducida -->
                    <path d="M 25 195 L 85 195 Q 105 185 105 175 Q 105 165 185 165" fill="none" stroke="#10b981" stroke-width="2.5"/>
                    <text x="105" y="172" text-anchor="middle" fill="#059669" font-size="9" font-weight="bold">Barrera cae a (V_0 - V_D)</text>
                    <text x="107" y="232" text-anchor="middle" fill="#059669" font-size="10" font-weight="bold">I_D ≈ I_S · e^(V_D / ηV_T)</text>
                  </g>

                  <!-- ESTADO 3: POLARIZACIÓN INVERSA (V_D < 0) -->
                  <g transform="translate(485, 15)">
                    <rect x="0" y="0" width="215" height="250" rx="10" fill="#ef4444" fill-opacity="0.06" stroke="#ef4444" stroke-opacity="0.4" stroke-width="1.5"/>
                    <text x="107" y="22" text-anchor="middle" font-weight="bold" fill="#dc2626" font-size="11">3. POLARIZACIÓN INVERSA</text>
                    <text x="107" y="36" text-anchor="middle" fill="#dc2626" font-size="9">Ánodo (-) a P · Cátodo (+) a N</text>
                    
                    <!-- Cristal PN -->
                    <rect x="15" y="50" width="90" height="70" fill="#f43f5e" fill-opacity="0.25" stroke="#f43f5e" stroke-width="1.2"/>
                    <text x="25" y="88" fill="#e11d48" font-weight="bold" font-size="14">P</text>

                    <rect x="105" y="50" width="90" height="70" fill="#06b6d4" fill-opacity="0.25" stroke="#06b6d4" stroke-width="1.2"/>
                    <text x="175" y="88" fill="#0891b2" font-weight="bold" font-size="14">N</text>

                    <!-- ZCE Ensanchada -->
                    <rect x="55" y="50" width="100" height="70" fill="#cbd5e1" fill-opacity="0.5" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="2,2"/>
                    <text x="105" y="65" text-anchor="middle" fill="#b91c1c" font-size="8" font-weight="bold">ZCE Ensanchada (W &gt; W_0)</text>
                    <text x="75" y="90" text-anchor="middle" fill="#e11d48" font-size="11" font-weight="bold">- - -</text>
                    <text x="135" y="90" text-anchor="middle" fill="#0891b2" font-size="11" font-weight="bold">+ + +</text>

                    <!-- Fuente Inversa -->
                    <path d="M 15 85 L 5 85 L 5 130 L 205 130 L 205 85 L 195 85" fill="none" stroke="#dc2626" stroke-width="1.2"/>
                    <text x="105" y="142" text-anchor="middle" fill="#dc2626" font-size="9" font-weight="bold">- [ V_R ] +</text>

                    <!-- Perfil de Barrera Elevada -->
                    <path d="M 25 215 L 60 215 Q 105 160 105 150 Q 105 125 185 125" fill="none" stroke="#ef4444" stroke-width="2.5"/>
                    <text x="105" y="180" text-anchor="middle" fill="#b91c1c" font-size="9" font-weight="bold">Barrera sube a (V_0 + V_R)</text>
                    <text x="107" y="232" text-anchor="middle" fill="#dc2626" font-size="10" font-weight="bold">I ≈ -I_S (pA a nA)</text>
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
                <svg viewBox="0 0 620 280" class="w-full max-w-xl h-auto font-sans text-xs select-none">
                  <!-- Ejes coordenados -->
                  <line x1="60" y1="160" x2="560" y2="160" stroke="#64748b" stroke-width="1.5"/>
                  <line x1="320" y1="20" x2="320" y2="250" stroke="#64748b" stroke-width="1.5"/>
                  
                  <!-- Etiquetas de ejes -->
                  <text x="565" y="164" fill="#64748b" font-weight="bold" font-size="11">V_D (V)</text>
                  <text x="325" y="25" fill="#64748b" font-weight="bold" font-size="11">I_D (mA)</text>
                  <text x="325" y="245" fill="#64748b" font-size="10">-I_D (μA)</text>
                  <text x="70" y="152" fill="#64748b" font-size="10">-V_D (V)</text>
                  <text x="312" y="174" fill="#64748b" font-size="10">0</text>

                  <!-- Curva Directa -->
                  <!-- De 320,160 sube suavemente hasta 400 (V_gamma) y luego se dispara exponencialmente hacia arriba -->
                  <path d="M 120 162 L 320 160 Q 380 160 410 152 Q 430 135 450 40" fill="none" stroke="#10b981" stroke-width="3"/>
                  
                  <!-- Tensión de umbral V_gamma -->
                  <line x1="410" y1="155" x2="410" y2="165" stroke="#f59e0b" stroke-width="2"/>
                  <text x="410" y="180" text-anchor="middle" fill="#d97706" font-size="10" font-weight="bold">V_γ ≈ 0.7 V</text>
                  <text x="475" y="65" fill="#047857" font-weight="bold" font-size="10">Zona Directa (Conducción)</text>

                  <!-- Curva Inversa -->
                  <!-- Línea horizontal casi pegada al eje con corriente de saturación -I_S -->
                  <line x1="160" y1="162" x2="320" y2="160" stroke="#0ea5e9" stroke-width="2.5"/>
                  <text x="240" y="177" text-anchor="middle" fill="#0284c7" font-size="9" font-weight="bold">-I_S (pA - nA)</text>

                  <!-- Ruptura Zener / Avalancha -->
                  <path d="M 160 162 Q 150 165 148 185 L 148 240" fill="none" stroke="#ef4444" stroke-width="3"/>
                  <line x1="148" y1="155" x2="148" y2="165" stroke="#ef4444" stroke-width="1.5"/>
                  <text x="148" y="148" text-anchor="middle" fill="#dc2626" font-size="10" font-weight="bold">-V_Z (o -V_BR)</text>
                  <text x="110" y="210" text-anchor="end" fill="#dc2626" font-size="9" font-weight="bold">Ruptura (Zener / Avalancha)</text>
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
                <span class="font-bold text-slate-800 dark:text-slate-200">2. Modelo con Tensión Constante ($V_\\gamma$)</span>
                <p class="text-slate-600 dark:text-slate-400 mt-1">En conducción se reemplaza por una fuente ideal de valor fijo $V_D = V_\\gamma \\approx 0.7\\text{ V}$ ($0.3\\text{ V}$ en Ge). Es el modelo estándar para el análisis estático en corriente continua.</p>
              </div>

              <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span class="font-bold text-slate-800 dark:text-slate-200">3. Modelo Lineal por Tramos</span>
                <p class="text-slate-600 dark:text-slate-400 mt-1">Incorpora la resistencia interna del cuerpo semiconductor ($R_B$): $V_D = V_\\gamma + I_D R_B$. Modela con precisión la pendiente en régimen de fuertes corrientes.</p>
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
              <div class="overflow-x-auto flex justify-center py-1">
                <svg viewBox="0 0 680 200" class="w-full max-w-2xl h-auto font-sans text-xs select-none">
                  <!-- Lado Izquierdo: Circuito -->
                  <g transform="translate(10, 15)">
                    <rect x="0" y="0" width="280" height="170" rx="10" fill="#3b82f6" fill-opacity="0.04" stroke="#64748b" stroke-opacity="0.3" stroke-width="1"/>
                    <text x="140" y="18" text-anchor="middle" font-weight="bold" fill="#334155" dark:fill="#cbd5e1" font-size="10">Esquema del Circuito</text>

                    <!-- Fuente AC -->
                    <circle cx="50" cy="85" r="18" fill="none" stroke="#2563eb" stroke-width="1.8"/>
                    <path d="M 40 85 Q 45 77 50 85 Q 55 93 60 85" fill="none" stroke="#2563eb" stroke-width="1.6"/>
                    <text x="50" y="120" text-anchor="middle" fill="#2563eb" font-size="9" font-weight="bold">v_i(t) = V_p·sen(ωt)</text>

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
                    <text x="240" y="104" fill="#475569" font-size="10" font-weight="bold">R_L</text>
                    
                    <line x1="220" y1="120" x2="220" y2="140" stroke="#64748b" stroke-width="1.5"/>
                    <line x1="220" y1="140" x2="50" y2="140" stroke="#64748b" stroke-width="1.5"/>
                    <line x1="50" y1="140" x2="50" y2="103" stroke="#64748b" stroke-width="1.5"/>

                    <!-- Tensión de salida v_o -->
                    <text x="210" y="60" text-anchor="end" fill="#dc2626" font-size="9" font-weight="bold">+</text>
                    <text x="210" y="148" text-anchor="end" fill="#dc2626" font-size="9" font-weight="bold">-</text>
                    <text x="255" y="80" fill="#dc2626" font-size="9" font-weight="bold">v_o(t)</text>
                  </g>

                  <!-- Lado Derecho: Formas de Onda -->
                  <g transform="translate(310, 15)">
                    <rect x="0" y="0" width="360" height="170" rx="10" fill="#3b82f6" fill-opacity="0.04" stroke="#64748b" stroke-opacity="0.3" stroke-width="1"/>
                    <text x="180" y="18" text-anchor="middle" font-weight="bold" fill="#334155" font-size="10">Formas de Onda (Entrada vs Salida)</text>

                    <!-- Eje de tiempo -->
                    <line x1="30" y1="90" x2="330" y2="90" stroke="#94a3b8" stroke-width="1.2"/>
                    <text x="335" y="93" fill="#64748b" font-size="9">t</text>
                    <line x1="40" y1="25" x2="40" y2="155" stroke="#94a3b8" stroke-width="1.2"/>
                    <text x="35" y="30" text-anchor="end" fill="#64748b" font-size="9">v</text>

                    <!-- Onda de Entrada v_i (punteada azul) -->
                    <path d="M 40 90 Q 75 30 110 90 Q 145 150 180 90 Q 215 30 250 90 Q 285 150 320 90" fill="none" stroke="#3b82f6" stroke-width="1.4" stroke-dasharray="3,3"/>
                    <text x="120" y="42" fill="#2563eb" font-size="9">v_i (AC)</text>

                    <!-- Onda de Salida v_o (verde sólida) -->
                    <!-- Semiciclo positivo conduce (amplitud menor por V_D), negativo bloquea a 0 -->
                    <path d="M 40 90 Q 75 40 110 90 L 180 90 Q 215 40 250 90 L 320 90" fill="none" stroke="#10b981" stroke-width="2.5"/>
                    <text x="80" y="32" fill="#047857" font-weight="bold" font-size="10">V_o,pico = V_p - 0.7V</text>

                    <!-- Cota de tensión media V_DC -->
                    <line x1="40" y1="74" x2="320" y2="74" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4,2"/>
                    <text x="270" y="70" fill="#d97706" font-size="9" font-weight="bold">V_DC ≈ 0.318·V_pico</text>
                    <text x="145" y="110" text-anchor="middle" fill="#dc2626" font-size="8">Diodo Bloqueado (0V)</text>
                  </g>
                </svg>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                <div class="p-2.5 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                  <span class="font-bold text-slate-700 dark:text-slate-300 block">Tensión Continua Media ($V_{DC}$):</span>
                  $$V_{DC} = \\frac{V_{o,pico}}{\\pi} \\approx 0.318 \\cdot (V_p - V_\\gamma)$$
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
              <div class="overflow-x-auto flex justify-center py-1">
                <svg viewBox="0 0 680 210" class="w-full max-w-2xl h-auto font-sans text-xs select-none">
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
                      <!-- Secundario -->
                      <path d="M 55 15 C 70 20, 70 30, 55 35 C 70 40, 70 50, 55 55 C 70 60, 70 70, 55 75 C 70 80, 70 90, 55 95" fill="none" stroke="#2563eb" stroke-width="2"/>
                      
                      <!-- Punto Medio a Masa -->
                      <line x1="55" y1="55" x2="110" y2="55" stroke="#64748b" stroke-width="1.5"/>
                      <line x1="110" y1="55" x2="110" y2="120" stroke="#64748b" stroke-width="1.5"/>
                      <!-- Símbolo de Masa -->
                      <line x1="100" y1="120" x2="120" y2="120" stroke="#64748b" stroke-width="2"/>
                      <line x1="104" y1="124" x2="116" y2="124" stroke="#64748b" stroke-width="1.5"/>
                      <line x1="108" y1="128" x2="112" y2="128" stroke="#64748b" stroke-width="1"/>
                      <text x="125" y="60" fill="#64748b" font-size="8">Toma Central (0V)</text>
                    </g>

                    <!-- Rama Superior D1 -->
                    <line x1="85" y1="60" x2="140" y2="60" stroke="#64748b" stroke-width="1.5"/>
                    <g transform="translate(140, 60)">
                      <polygon points="0,-8 14,0 0,8" fill="#10b981" stroke="#059669" stroke-width="1.2"/>
                      <line x1="14" y1="-8" x2="14" y2="8" stroke="#059669" stroke-width="2"/>
                      <text x="7" y="-12" text-anchor="middle" fill="#059669" font-weight="bold" font-size="9">D1</text>
                    </g>
                    <line x1="154" y1="60" x2="220" y2="60" stroke="#64748b" stroke-width="1.5"/>

                    <!-- Rama Inferior D2 -->
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
                    <text x="275" y="130" fill="#475569" font-size="9" font-weight="bold">R_L</text>
                    
                    <!-- Retorno a masa de R_L -->
                    <line x1="260" y1="142" x2="260" y2="155" stroke="#64748b" stroke-width="1.5"/>
                    <line x1="254" y1="155" x2="266" y2="155" stroke="#64748b" stroke-width="1.5"/>
                    <line x1="257" y1="158" x2="263" y2="158" stroke="#64748b" stroke-width="1"/>

                    <text x="248" y="94" fill="#dc2626" font-size="9" font-weight="bold">+</text>
                    <text x="248" y="152" fill="#dc2626" font-size="9" font-weight="bold">-</text>
                    <text x="280" y="95" fill="#dc2626" font-size="9" font-weight="bold">v_o</text>
                  </g>

                  <!-- Formas de Onda -->
                  <g transform="translate(340, 15)">
                    <rect x="0" y="0" width="330" height="180" rx="10" fill="#3b82f6" fill-opacity="0.04" stroke="#64748b" stroke-opacity="0.3" stroke-width="1"/>
                    <text x="165" y="18" text-anchor="middle" font-weight="bold" fill="#334155" font-size="10">Forma de Onda de Salida en Onda Completa</text>

                    <line x1="25" y1="105" x2="305" y2="105" stroke="#94a3b8" stroke-width="1.2"/>
                    <text x="310" y="108" fill="#64748b" font-size="9">t</text>
                    <line x1="35" y1="30" x2="35" y2="160" stroke="#94a3b8" stroke-width="1.2"/>

                    <!-- Semiciclos rectificados: ambos positivos -->
                    <path d="M 35 105 Q 67 45 100 105 Q 132 45 165 105 Q 197 45 230 105 Q 262 45 295 105" fill="none" stroke="#2563eb" stroke-width="2.5"/>
                    <text x="67" y="40" text-anchor="middle" fill="#2563eb" font-weight="bold" font-size="9">D1 conduce</text>
                    <text x="132" y="40" text-anchor="middle" fill="#0891b2" font-weight="bold" font-size="9">D2 conduce</text>
                    <text x="197" y="40" text-anchor="middle" fill="#2563eb" font-weight="bold" font-size="9">D1 conduce</text>
                    <text x="262" y="40" text-anchor="middle" fill="#0891b2" font-weight="bold" font-size="9">D2 conduce</text>

                    <!-- Nivel DC -->
                    <line x1="35" y1="67" x2="295" y2="67" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4,2"/>
                    <text x="210" y="63" fill="#d97706" font-size="9" font-weight="bold">V_DC ≈ 0.636·V_pico</text>

                    <text x="165" y="145" text-anchor="middle" fill="#64748b" font-size="9">Período de rizado T_r = T_red / 2 (100 Hz)</text>
                  </g>
                </svg>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                <div class="p-2.5 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                  <span class="font-bold text-slate-700 dark:text-slate-300 block">Tensión Pico de Salida:</span>
                  $$V_{o,pico} = V_s - V_\\gamma$$
                  <span class="text-[11px] text-slate-500">$V_s$ es la tensión pico de cada mitad del secundario.</span>
                </div>
                <div class="p-2.5 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                  <span class="font-bold text-slate-700 dark:text-slate-300 block">Tensión Continua Media ($V_{DC}$):</span>
                  $$V_{DC} = \\frac{2 V_{o,pico}}{\\pi} \\approx 0.636 \\cdot V_{o,pico}$$
                  <span class="text-[11px] text-slate-500">Duplica el rendimiento del rectificador de media onda.</span>
                </div>
                <div class="p-2.5 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                  <span class="font-bold text-rose-600 dark:text-rose-400 block">Desventaja Crítica: $PIV$ Elevada</span>
                  $$PIV = 2 V_s - V_\\gamma \\approx 2 V_s$$
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
              <div class="overflow-x-auto flex justify-center py-1">
                <svg viewBox="0 0 680 220" class="w-full max-w-2xl h-auto font-sans text-xs select-none">
                  <!-- Esquema del Puente -->
                  <g transform="translate(10, 15)">
                    <rect x="0" y="0" width="340" height="190" rx="10" fill="#3b82f6" fill-opacity="0.04" stroke="#64748b" stroke-opacity="0.3" stroke-width="1"/>
                    <text x="170" y="18" text-anchor="middle" font-weight="bold" fill="#334155" font-size="10">Puente de Diodos de Graetz</text>

                    <!-- Entrada AC -->
                    <circle cx="35" cy="95" r="16" fill="none" stroke="#2563eb" stroke-width="1.8"/>
                    <path d="M 26 95 Q 30 88 35 95 Q 40 102 44 95" fill="none" stroke="#2563eb" stroke-width="1.5"/>
                    <text x="35" y="125" text-anchor="middle" fill="#2563eb" font-size="8" font-weight="bold">v_s(t)</text>

                    <!-- Cables de entrada al puente -->
                    <line x1="51" y1="90" x2="105" y2="90" stroke="#64748b" stroke-width="1.5"/>
                    <line x1="105" y1="90" x2="105" y2="95" stroke="#64748b" stroke-width="1.5"/>

                    <line x1="51" y1="100" x2="80" y2="100" stroke="#64748b" stroke-width="1.5"/>
                    <line x1="80" y1="100" x2="80" y2="165" stroke="#64748b" stroke-width="1.5"/>
                    <line x1="80" y1="165" x2="205" y2="165" stroke="#64748b" stroke-width="1.5"/>
                    <line x1="205" y1="165" x2="205" y2="95" stroke="#64748b" stroke-width="1.5"/>

                    <!-- ROMBO DEL PUENTE (Nodos: Superior (155, 45), Derecho (205, 95), Inferior (155, 145), Izquierdo (105, 95)) -->
                    <!-- D1: Izq a Superior -->
                    <g transform="translate(130, 70) rotate(-45)">
                      <polygon points="0,-7 12,0 0,7" fill="#10b981" stroke="#059669" stroke-width="1"/>
                      <line x1="12" y1="-7" x2="12" y2="7" stroke="#059669" stroke-width="1.5"/>
                    </g>
                    <text x="118" y="60" fill="#059669" font-weight="bold" font-size="8">D1</text>

                    <!-- D3: Inferior a Izq -->
                    <g transform="translate(130, 120) rotate(-135)">
                      <polygon points="0,-7 12,0 0,7" fill="#8b5cf6" stroke="#7c3aed" stroke-width="1"/>
                      <line x1="12" y1="-7" x2="12" y2="7" stroke="#7c3aed" stroke-width="1.5"/>
                    </g>
                    <text x="118" y="145" fill="#7c3aed" font-weight="bold" font-size="8">D3</text>

                    <!-- D4: Derecho a Superior -->
                    <g transform="translate(180, 70) rotate(-135)">
                      <polygon points="0,-7 12,0 0,7" fill="#8b5cf6" stroke="#7c3aed" stroke-width="1"/>
                      <line x1="12" y1="-7" x2="12" y2="7" stroke="#7c3aed" stroke-width="1.5"/>
                    </g>
                    <text x="192" y="60" fill="#7c3aed" font-weight="bold" font-size="8">D4</text>

                    <!-- D2: Inferior a Derecho -->
                    <g transform="translate(180, 120) rotate(-45)">
                      <polygon points="0,-7 12,0 0,7" fill="#10b981" stroke="#059669" stroke-width="1"/>
                      <line x1="12" y1="-7" x2="12" y2="7" stroke="#059669" stroke-width="1.5"/>
                    </g>
                    <text x="192" y="145" fill="#059669" font-weight="bold" font-size="8">D2</text>

                    <!-- Líneas del rombo -->
                    <line x1="105" y1="95" x2="155" y2="45" stroke="#64748b" stroke-width="1.2"/>
                    <line x1="155" y1="45" x2="205" y2="95" stroke="#64748b" stroke-width="1.2"/>
                    <line x1="205" y1="95" x2="155" y2="145" stroke="#64748b" stroke-width="1.2"/>
                    <line x1="155" y1="145" x2="105" y2="95" stroke="#64748b" stroke-width="1.2"/>

                    <!-- Salida DC a la carga R_L -->
                    <!-- Positivo: Nodo superior (155, 45) -->
                    <line x1="155" y1="45" x2="270" y2="45" stroke="#dc2626" stroke-width="1.5"/>
                    <line x1="270" y1="45" x2="270" y2="75" stroke="#dc2626" stroke-width="1.5"/>
                    
                    <rect x="262" y="75" width="16" height="40" fill="#f1f5f9" stroke="#475569" stroke-width="1.4"/>
                    <text x="290" y="98" fill="#475569" font-size="9" font-weight="bold">R_L</text>

                    <!-- Negativo: Nodo inferior (155, 145) -->
                    <line x1="155" y1="145" x2="270" y2="145" stroke="#3b82f6" stroke-width="1.5"/>
                    <line x1="270" y1="145" x2="270" y2="115" stroke="#3b82f6" stroke-width="1.5"/>

                    <text x="255" y="60" fill="#dc2626" font-size="10" font-weight="bold">+</text>
                    <text x="255" y="140" fill="#3b82f6" font-size="10" font-weight="bold">-</text>
                    <text x="295" y="75" fill="#dc2626" font-size="9" font-weight="bold">v_o(t)</text>
                  </g>

                  <!-- Explicación de Conducción en Cuadrante Derecho -->
                  <g transform="translate(370, 15)">
                    <rect x="0" y="0" width="300" height="190" rx="10" fill="#3b82f6" fill-opacity="0.04" stroke="#64748b" stroke-opacity="0.3" stroke-width="1"/>
                    <text x="150" y="20" text-anchor="middle" font-weight="bold" fill="#334155" font-size="10">Dinámica de Conducción por Semiciclos</text>

                    <!-- Semiciclo 1 -->
                    <rect x="15" y="35" width="270" height="65" rx="6" fill="#10b981" fill-opacity="0.08" stroke="#10b981" stroke-opacity="0.4"/>
                    <text x="25" y="52" fill="#047857" font-weight="bold" font-size="9.5">Semiciclo Positivo (v_s &gt; 0):</text>
                    <text x="25" y="68" fill="#334155" font-size="8.5">• Conducen en serie: <strong>D1 y D2</strong>.</text>
                    <text x="25" y="82" fill="#334155" font-size="8.5">• Bloquean en inversa: <strong>D3 y D4</strong>.</text>
                    <text x="25" y="94" fill="#64748b" font-size="8">Camino: Terminal superior ➔ D1 ➔ R_L ➔ D2 ➔ Terminal inferior</text>

                    <!-- Semiciclo 2 -->
                    <rect x="15" y="110" width="270" height="65" rx="6" fill="#8b5cf6" fill-opacity="0.08" stroke="#8b5cf6" stroke-opacity="0.4"/>
                    <text x="25" y="127" fill="#6d28d9" font-weight="bold" font-size="9.5">Semiciclo Negativo (v_s &lt; 0):</text>
                    <text x="25" y="143" fill="#334155" font-size="8.5">• Conducen en serie: <strong>D3 y D4</strong>.</text>
                    <text x="25" y="157" fill="#334155" font-size="8.5">• Bloquean en inversa: <strong>D1 y D2</strong>.</text>
                    <text x="25" y="169" fill="#64748b" font-size="8">Camino: Terminal inferior ➔ D3 ➔ R_L ➔ D4 ➔ Terminal superior</text>
                  </g>
                </svg>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                <div class="p-2.5 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                  <span class="font-bold text-slate-700 dark:text-slate-300 block">Tensión Pico de Salida:</span>
                  $$V_{o,pico} = V_s - 2 V_\\gamma \\approx V_s - 1.4\\text{ V}$$
                  <span class="text-[11px] text-slate-500">Caída debida a dos diodos conduciendo en serie.</span>
                </div>
                <div class="p-2.5 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                  <span class="font-bold text-slate-700 dark:text-slate-300 block">Tensión Continua Media ($V_{DC}$):</span>
                  $$V_{DC} = \\frac{2 V_{o,pico}}{\\pi} \\approx 0.636 \\cdot V_{o,pico}$$
                  <span class="text-[11px] text-slate-500">$f_{rizado} = 2 f_{red} = 100\\text{ Hz}$.</span>
                </div>
                <div class="p-2.5 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                  <span class="font-bold text-emerald-600 dark:text-emerald-400 block">Gran Ventaja: $PIV$ Reducida</span>
                  $$PIV = V_s - V_\\gamma \\approx V_s$$
                  <span class="text-[11px] text-slate-500">Es la mitad que en el rectificador de punto medio.</span>
                </div>
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

              <!-- Gráfico SVG: Rizado Triangular del Filtro Capacitivo -->
              <div class="overflow-x-auto flex justify-center py-1">
                <svg viewBox="0 0 620 180" class="w-full max-w-xl h-auto font-sans text-xs select-none">
                  <rect x="0" y="0" width="620" height="180" rx="10" fill="#3b82f6" fill-opacity="0.04" stroke="#64748b" stroke-opacity="0.3" stroke-width="1"/>
                  <text x="310" y="20" text-anchor="middle" font-weight="bold" fill="#334155" font-size="10">Forma de Onda con Filtro Capacitivo (Rizado Triangular)</text>

                  <!-- Ejes -->
                  <line x1="40" y1="140" x2="580" y2="140" stroke="#94a3b8" stroke-width="1.2"/>
                  <text x="585" y="143" fill="#64748b" font-size="9">t</text>
                  <line x1="50" y1="30" x2="50" y2="150" stroke="#94a3b8" stroke-width="1.2"/>
                  <text x="45" y="32" text-anchor="end" fill="#64748b" font-size="9">v_o</text>

                  <!-- Pulsos de rectificación en puente (línea tenue discontinua) -->
                  <path d="M 50 140 Q 95 40 140 140 Q 185 40 230 140 Q 275 40 320 140 Q 365 40 410 140 Q 455 40 500 140" fill="none" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3,3"/>

                  <!-- Curva Filtrada (roja / ámbar) -->
                  <!-- Carga rápida hasta pico y descarga lineal hasta el siguiente pulso -->
                  <path d="M 50 85 L 95 45 L 220 85 L 230 45 L 355 85 L 365 45 L 490 85 L 500 45" fill="none" stroke="#ef4444" stroke-width="2.5"/>

                  <!-- Cotas de V_pico, V_DC y V_r -->
                  <line x1="50" y1="45" x2="540" y2="45" stroke="#059669" stroke-width="1" stroke-dasharray="2,2"/>
                  <text x="545" y="48" fill="#059669" font-weight="bold" font-size="9">V_pico</text>

                  <line x1="50" y1="65" x2="540" y2="65" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4,2"/>
                  <text x="545" y="68" fill="#d97706" font-weight="bold" font-size="9">V_DC = V_pico - V_r/2</text>

                  <line x1="50" y1="85" x2="540" y2="85" stroke="#64748b" stroke-width="1" stroke-dasharray="2,2"/>
                  <text x="545" y="88" fill="#64748b" font-size="9">V_valle</text>

                  <!-- Flecha de V_r pico a pico -->
                  <line x1="160" y1="47" x2="160" y2="83" stroke="#dc2626" stroke-width="1.8"/>
                  <text x="170" y="68" fill="#dc2626" font-weight="bold" font-size="10">V_r (pp)</text>
                </svg>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div class="p-2.5 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                  <strong>Tensión de Rizado Pico a Pico ($V_r$):</strong>
                  $$V_r = \\frac{I_{DC}}{f_{rizado} \\cdot C} = \\frac{V_{pico}}{f_{rizado} \\cdot R_L \\cdot C}$$
                  <span class="text-[11px] text-slate-500">Para onda completa $f_{rizado} = 100\\text{ Hz}$; para media onda $f_{rizado} = 50\\text{ Hz}$.</span>
                </div>
                <div class="p-2.5 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                  <strong>Tensión Continua Media ($V_{DC}$):</strong>
                  $$V_{DC} = V_{pico} - \\frac{V_r}{2}$$
                  <span class="text-[11px] text-slate-500">Factor de rizado: $\\gamma = \\frac{V_{r,rms}}{V_{DC}} = \\frac{V_r}{2\\sqrt{3} \\cdot V_{DC}}$.</span>
                </div>
              </div>
            </div>

            <!-- ============================================================ -->
            <!-- 5. REGULADOR DE TENSIÓN CON DIODO ZENER -->
            <!-- ============================================================ -->
            <div class="p-4 my-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <div class="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800 pb-2">
                <span class="font-bold text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                  <span>⚡</span> 5. Regulador de Tensión con Diodo Zener
                </span>
                <span class="text-[11px] font-mono text-slate-400">Operación en Ruptura Inversa (V_out = V_Z)</span>
              </div>

              <!-- Gráfico SVG: Circuito Zener y Curva de Regulación V_out vs V_in -->
              <div class="overflow-x-auto flex justify-center py-1">
                <svg viewBox="0 0 680 210" class="w-full max-w-2xl h-auto font-sans text-xs select-none">
                  <!-- Lado Izquierdo: Circuito del Regulador Zener -->
                  <g transform="translate(10, 15)">
                    <rect x="0" y="0" width="310" height="180" rx="10" fill="#3b82f6" fill-opacity="0.04" stroke="#64748b" stroke-opacity="0.3" stroke-width="1"/>
                    <text x="155" y="18" text-anchor="middle" font-weight="bold" fill="#334155" font-size="10">Esquema del Regulador Zener</text>

                    <!-- Fuente V_in -->
                    <circle cx="45" cy="95" r="15" fill="none" stroke="#2563eb" stroke-width="1.8"/>
                    <text x="45" y="92" text-anchor="middle" fill="#2563eb" font-size="8" font-weight="bold">+</text>
                    <text x="45" y="103" text-anchor="middle" fill="#2563eb" font-size="8" font-weight="bold">-</text>
                    <text x="45" y="125" text-anchor="middle" fill="#2563eb" font-size="9" font-weight="bold">V_in (DC)</text>

                    <!-- Resistencia Serie R_s -->
                    <line x1="45" y1="80" x2="45" y2="55" stroke="#64748b" stroke-width="1.5"/>
                    <line x1="45" y1="55" x2="85" y2="55" stroke="#64748b" stroke-width="1.5"/>
                    <rect x="85" y="47" width="35" height="16" fill="#f1f5f9" stroke="#475569" stroke-width="1.5"/>
                    <text x="102" y="38" text-anchor="middle" fill="#475569" font-size="9" font-weight="bold">R_s</text>
                    <line x1="120" y1="55" x2="180" y2="55" stroke="#64748b" stroke-width="1.5"/>

                    <!-- Corriente I_s -->
                    <line x1="60" y1="48" x2="80" y2="48" stroke="#2563eb" stroke-width="1.5" marker-end="url(#arr-blue)"/>
                    <text x="70" y="43" fill="#2563eb" font-size="8" font-weight="bold">I_s</text>

                    <!-- Diodo Zener en Rama Vertical (cátodo arriba, ánodo abajo) -->
                    <line x1="180" y1="55" x2="180" y2="75" stroke="#64748b" stroke-width="1.5"/>
                    <g transform="translate(180, 85)">
                      <!-- Cátodo con alitas Zener arriba -->
                      <path d="M -9 -8 L -6 -8 L 6 -8 L 9 -5" fill="none" stroke="#0284c7" stroke-width="1.8"/>
                      <!-- Triángulo apuntando hacia abajo -->
                      <polygon points="-8,-8 8,-8 0,8" fill="#0ea5e9" stroke="#0284c7" stroke-width="1.2"/>
                      <text x="16" y="2" fill="#0284c7" font-weight="bold" font-size="9">Zener</text>
                      <text x="16" y="14" fill="#0284c7" font-size="8">V_Z</text>
                    </g>
                    <line x1="180" y1="95" x2="180" y2="145" stroke="#64748b" stroke-width="1.5"/>

                    <!-- Corriente I_Z -->
                    <line x1="172" y1="65" x2="172" y2="80" stroke="#0284c7" stroke-width="1.5"/>
                    <text x="166" y="75" text-anchor="end" fill="#0284c7" font-size="8" font-weight="bold">I_Z</text>

                    <!-- Rama de Carga R_L -->
                    <line x1="180" y1="55" x2="260" y2="55" stroke="#64748b" stroke-width="1.5"/>
                    
                    <!-- Corriente I_L -->
                    <line x1="210" y1="48" x2="230" y2="48" stroke="#10b981" stroke-width="1.5"/>
                    <text x="220" y="43" fill="#10b981" font-size="8" font-weight="bold">I_L</text>

                    <line x1="260" y1="55" x2="260" y2="75" stroke="#64748b" stroke-width="1.5"/>
                    <rect x="252" y="75" width="16" height="40" fill="#f1f5f9" stroke="#475569" stroke-width="1.4"/>
                    <text x="278" y="98" fill="#475569" font-size="9" font-weight="bold">R_L</text>
                    <line x1="260" y1="115" x2="260" y2="145" stroke="#64748b" stroke-width="1.5"/>

                    <!-- Retorno común a masa -->
                    <line x1="260" y1="145" x2="45" y2="145" stroke="#64748b" stroke-width="1.5"/>
                    <line x1="45" y1="145" x2="45" y2="110" stroke="#64748b" stroke-width="1.5"/>

                    <text x="250" y="48" fill="#dc2626" font-size="9" font-weight="bold">+</text>
                    <text x="250" y="152" fill="#dc2626" font-size="9" font-weight="bold">-</text>
                    <text x="280" y="60" fill="#dc2626" font-size="9" font-weight="bold">V_out</text>
                  </g>

                  <!-- Lado Derecho: Curva de Transferencia V_out vs V_in -->
                  <g transform="translate(340, 15)">
                    <rect x="0" y="0" width="330" height="180" rx="10" fill="#3b82f6" fill-opacity="0.04" stroke="#64748b" stroke-opacity="0.3" stroke-width="1"/>
                    <text x="165" y="18" text-anchor="middle" font-weight="bold" fill="#334155" font-size="10">Curva de Transferencia V_out vs V_in</text>

                    <!-- Ejes coordenados -->
                    <line x1="35" y1="140" x2="305" y2="140" stroke="#94a3b8" stroke-width="1.2"/>
                    <text x="310" y="143" fill="#64748b" font-size="9">V_in</text>
                    <line x1="45" y1="30" x2="45" y2="150" stroke="#94a3b8" stroke-width="1.2"/>
                    <text x="40" y="32" text-anchor="end" fill="#64748b" font-size="9">V_out</text>

                    <!-- Zona No Regulada (lineal con pendiente R_L / (R_s + R_L)) -->
                    <line x1="45" y1="140" x2="135" y2="75" stroke="#f59e0b" stroke-width="2.2"/>
                    
                    <!-- Zona Regulada (horizontal plana en V_Z) -->
                    <line x1="135" y1="75" x2="295" y2="75" stroke="#059669" stroke-width="3"/>

                    <!-- Puntos de referencia -->
                    <line x1="135" y1="75" x2="135" y2="140" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/>
                    <text x="135" y="153" text-anchor="middle" fill="#d97706" font-size="8.5" font-weight="bold">V_in,min</text>

                    <line x1="45" y1="75" x2="135" y2="75" stroke="#059669" stroke-width="1" stroke-dasharray="3,3"/>
                    <text x="38" y="78" text-anchor="end" fill="#059669" font-weight="bold" font-size="10">V_Z</text>

                    <!-- Etiquetas en el gráfico -->
                    <text x="90" y="115" fill="#d97706" font-size="8">Zener Apagado</text>
                    <text x="210" y="65" text-anchor="middle" fill="#047857" font-weight="bold" font-size="10">Zona Regulada: V_out = V_Z = Cte</text>
                    <text x="210" y="105" text-anchor="middle" fill="#64748b" font-size="8.5">I_s = I_Z + I_L (I_Z absorbe excesos)</text>
                  </g>
                </svg>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div class="p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                  <span class="font-bold text-slate-700 dark:text-slate-300 block mb-1">Cálculo de la Resistencia Serie Límites:</span>
                  <div class="space-y-1">
                    <p><strong>R_s máxima (Garantiza regulación ante mínima entrada y máxima carga):</strong></p>
                    $$R_{s,max} = \\frac{V_{in,min} - V_Z}{I_{L,max} + I_{Z,min}}$$
                    <p class="mt-2"><strong>R_s mínima (Protege al Zener de sobrecalentamiento ante máxima entrada y carga desconectada):</strong></p>
                    $$R_{s,min} = \\frac{V_{in,max} - V_Z}{I_{L,min} + I_{Z,max}}, \\quad \\text{con } I_{Z,max} = \\frac{P_{Z,max}}{V_Z}$$
                  </div>
                </div>

                <div class="p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                  <span class="font-bold text-slate-700 dark:text-slate-300 block mb-1">Potencia Máxima Disipada en el Zener ($P_{Z,max}$):</span>
                  $$P_{Z,max} = V_Z \\cdot I_{Z,max} = V_Z \\left( \\frac{V_{in,max} - V_Z}{R_s} - I_{L,min} \\right)$$
                  <p class="text-slate-500 mt-1 text-[11px]">
                    El caso más exigente térmicamente ocurre cuando la tensión de entrada $V_{in}$ alcanza su valor máximo y la carga se desconecta ($I_L = 0$), forzando a que toda la corriente del circuito atraviese el Zener.
                  </p>
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
                    <td class="p-2 border border-slate-200 dark:border-slate-800">$V_{DC} = \\frac{2 (V_s - 2V_\\gamma)}{\\pi}$</td>
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
