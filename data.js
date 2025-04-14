// Simula una base de datos en memoria
const productos = [];

export function guardarProducto(nombre) {
  productos.push(nombre);
}

export function listarProductos() {
  return productos;
}
