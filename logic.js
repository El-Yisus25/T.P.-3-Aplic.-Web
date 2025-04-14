import { guardarProducto, listarProductos } from './data.js';

export function agregarProducto(nombre) {
  // Podrías agregar validaciones aquí si quisieras reglas de negocio
  guardarProducto(nombre);
}

export function obtenerProductos() {
  return listarProductos();
}
