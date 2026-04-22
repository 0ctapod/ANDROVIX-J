async function cargarComponente(idContenedor, rutaComponente) {
    const contenedor = document.getElementById(idContenedor);

    if (!contenedor) {
        return;
    }

    try {
        const respuesta = await fetch(rutaComponente);

        if (!respuesta.ok) {
            throw new Error(`No se pudo cargar ${rutaComponente}`);
        }

        const html = await respuesta.text();
        contenedor.innerHTML = html;
    } catch (error) {
        console.error(`Error cargando componente ${rutaComponente}:`, error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    cargarComponente("contenedor-navbar", "../componentes/navbar.html");
    cargarComponente("contenedor-footer", "../componentes/footer.html");
});
