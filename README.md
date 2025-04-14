# Aplicación 3-Tier con HTML y JavaScript

### UTILIZAR UN SERVIDOR LOCAL PARA QUE FUNCIONE CORRECTAMENTE

### Capas en el código:

- **Presentación (UI):** `index.html`
  - Maneja la interacción con el usuario, muestra los productos y captura inputs.
  
- **Lógica de negocio:** `logic.js`
  - Define las operaciones que puede hacer el sistema (agregar, obtener).
  - Aplica validaciones o reglas si fuera necesario.

- **Acceso a datos:** `data.js`
  - Contiene y maneja la "base de datos" (un array en memoria).
  - Se encarga de almacenar y recuperar productos.

---

### Ventajas respecto a la versión monolítica:

- **Separación clara de responsabilidades:** cada archivo tiene un propósito específico.
- **Mejor mantenibilidad:** puedes modificar la lógica o la UI sin tocar todo el código.
- **Reutilización:** puedes usar la capa lógica o de datos en otros contextos fácilmente.
- **Escalabilidad:** puedes migrar la capa de datos a una base real sin cambiar el resto.
