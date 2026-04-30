/*
 * =========================================================
 *  ANDROVIX-J | PRODUCTOS DINÁMICOS DEL CATÁLOGO
 * =========================================================
 *  Este archivo solo se encarga de:
 *  - Leer productos creados desde administrador.
 *  - Insertarlos en el catálogo.
 *
 *  La lógica del carrito vive en carrito.js.
 * =========================================================
 */

const CLAVE_PRODUCTOS = "androvix_productos";

function obtenerProductosGuardados() {
    const productosGuardados = localStorage.getItem(CLAVE_PRODUCTOS);

    if (!productosGuardados) {
        return [];
    }

    try {
        return JSON.parse(productosGuardados);
    } catch (error) {
        console.error("Error al leer productos desde localStorage:", error);
        return [];
    }
}

function formatearPrecio(precio) {
    return `$ ${Number(precio).toLocaleString("es-CO")}`;
}

function crearCardProducto(producto) {
    return `
        <div class="col-12 col-md-6 col-xl-4">
            <article class="tarjeta-producto">
                <img src="../assets/img/productos/${producto.imagen}" alt="${producto.nombre}">
                <div class="contenido-tarjeta-producto">
                    <span class="categoria-producto">${producto.categoria}</span>
                    <h3 class="nombre-producto">${producto.nombre}</h3>
                    <p class="descripcion-producto">${producto.descripcion}</p>
                    <div class="pie-producto">
                        <span class="precio-producto">${formatearPrecio(producto.precio)}</span>
                        <button class="boton-carrito" type="button">Agregar al carrito</button>
                    </div>
                </div>
            </article>
        </div>
    `;
}

function renderizarProductosDinamicos() {
    const contenedor = document.getElementById("contenedor-productos-catalogo");

    if (!contenedor) {
        return;
    }

    const productos = obtenerProductosGuardados();

    if (productos.length === 0) {
        return;
    }

    contenedor.insertAdjacentHTML("beforeend", productos.map(crearCardProducto).join(""));
}

document.addEventListener("DOMContentLoaded", () => {
    renderizarProductosDinamicos();
});