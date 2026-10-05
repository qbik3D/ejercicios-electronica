# ⚡ Plataforma Interactiva de Ejercicios de Ingeniería Electrónica
Desarrollada por [Qbik - Soluciones de Ingeniería Electrónica](https://qbik.com.ar)

Plataforma educativa web interactiva modular diseñada para estudiantes y docentes de **Ingeniería Electrónica**. Permite ejercitar y afianzar conceptos teóricos mediante **resolución guiada paso a paso**, **validación numérica con tolerancia**, **pistas progresivas multinivel** y **diagramas circuitales vectoriales SchemDraw**.

---

## 🏛️ Asignaturas Incluidas

### 1. ⚡ Electrónica I (Asignatura [3703]) - 32 Ejercicios (66 pasos)
- **Unidad 1: Circuitos en Corriente Continua (CC)** (15 ejercicios): Ley de Ohm, divisores de tensión/corriente, leyes de Kirchhoff (LTK y LCK), análisis de mallas y nodos, teoremas de Thévenin, Norton, Superposición y Máxima Transferencia de Potencia.
- **Unidad 2: Diodos y Aplicaciones** (9 ejercicios): Modelos DC (conducción/corte), rectificadores de media onda y puente de Graetz con filtro capacitivo, pequeña señal y resistencia dinámica $r_d$, diodos Zener.
- **Unidad 3: Transistores Bipolares (BJT)** (8 ejercicios): Polarización por divisor resistivo y por realimentación de colector, rectas de carga estática/dinámica, etapas Emisor Común y Colector Común (Seguidor Emisor), etapa Cascode.

### 2. 📐 Teoría de Circuitos III (Asignatura [3709]) - 30 Ejercicios (79 pasos)
*Cátedra: Ing. Marcelo Márquez / Ing. Germán Cardozo*
- **Unidad 1: Funciones de Red, Normalización y Bode** (9 ejercicios): Funciones de transferencia $H(s)$, descomposición en partes par $Ev\{F(s)\}$ e impar $Od\{F(s)\}$, partes real e imaginaria sobre el eje $j\omega$, evaluación de una función a partir de su parte real (Método de Gewertz), polinomios de Hurwitz y test de fracciones continuadas, normalización y desnormalización de impedancia y frecuencia ($k_z, k_f$), desnormalización a filtros en escalera de orden superior y transformaciones de frecuencia (pasa-bajos a pasa-altos).
- **Unidad 2: Redes Activas con AO, GIC y FDNR** (5 ejercicios): Convertidor Generalizado de Impedancia (GIC de Antoniou) para inductores simulados, simulador de inductancia activa con 1 AO, transformación de Bruton $1/s$ y elemento $D$ (FDNR), convertidor de impedancia negativa (INIC).
- **Unidad 3: Síntesis de Dipolos y Real Realidad Positiva** (6 ejercicios): Condición de función Real Positiva (PR) en el eje imaginario, síntesis canónica LC por Foster I y II, síntesis canónica LC por Cauer I y Cauer II (remociones en $s=\infty$ y $s=0$), síntesis de dipolos RC con pérdidas.
- **Unidad 4: Cuadripolos y Matriz de Admitancia Indefinida (MAI)** (5 ejercicios): Parámetros Z e Y a circuito abierto y cortocircuito, propiedades de la MAI (suma nula por filas/columnas), aplicación de la MAI a redes con amplificador operacional ideal, filtro notch en doble T, teorema de bisección de Bartlett para redes simétricas.
- **Unidad 5: Teoría Imagen y Parámetros S** (5 ejercicios): Impedancia imagen $Z_I$ y constante de transferencia $\theta$, atenuador adaptado en $\Pi$, coeficiente de reflexión $\Gamma$, ROE (VSWR) y Return Loss ($RL$), unidades de transmisión (Neper y Decibel), transformador de cuarto de onda $(\lambda/4)$ para adaptación de impedancias.

---

## 🚀 Publicación en GitHub Pages

Para publicar este proyecto online de forma 100% gratuita con **GitHub Pages**:

1. **Crear repositorio en GitHub:**
   - Ingresa a [GitHub](https://github.com) con tu cuenta (ej. `qbik3D`).
   - Crea un nuevo repositorio público (por ejemplo, `ejercicios-electronica` o `catedra-interactiva`).

2. **Subir los archivos:**
   ```bash
   git init -b main
   git add .
   git commit -m "Initial commit: Plataforma interactiva de ejercicios para Ingeniería Electrónica"
   git remote add origin https://github.com/qbik3D/ejercicios-electronica.git
   git push -u origin main
   ```

3. **Activar GitHub Pages:**
   - En tu repositorio de GitHub, haz clic en **Settings** (Configuración) -> **Pages** (en el menú lateral izquierdo).
   - En **Build and deployment** > **Source**, selecciona `Deploy from a branch`.
   - En **Branch**, selecciona `main` y la carpeta `/ (root)`.
   - Haz clic en **Save** (Guardar).

4. **¡Listo!** En 1-2 minutos tu plataforma estará online en:
   `https://qbik3D.github.io/ejercicios-electronica/`

---

## 💻 Uso Local (Sin Internet ni Instaladores)

Simplemente abre el archivo `index.html` con cualquier navegador web moderno (Google Chrome, Edge, Firefox, Brave, Safari). No requiere Node.js, Python ni servidores locales.

---

## 🛠️ Tecnologías Empleadas

- **HTML5 + CSS3 + Tailwind CSS:** Interfaz adaptable (responsive), moderna y en modo oscuro.
- **KaTeX:** Motor matemático de alto rendimiento para renderizado de fórmulas LaTeX.
- **SchemDraw (Python):** Generación de esquemas vectoriales SVG normalizados bajo estándares IEEE/IEC sin solapamientos de texto.
- **JavaScript Vanilla Modular:**
  - `materias.js`: Configuración modular de asignaturas y unidades.
  - `ejercicios.js`: Banco de ejercicios para Electrónica I.
  - `ejercicios_tc3.js`: Banco de ejercicios para Teoría de Circuitos III.
  - `app.js`: Lógica de validación con tolerancia de redondeo, stepper, pistas multinivel e interfaz.

---

Desarrollado y mantenido por **[Qbik](https://qbik.com.ar)** — Buenos Aires, Argentina.
