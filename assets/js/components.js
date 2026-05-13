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

        contenedor.innerHTML = await respuesta.text();
    } catch (error) {
        console.error(`Error cargando componente ${rutaComponente}:`, error);
    }
}

function actualizarIconoUsuario() {
    const icono = document.getElementById("icono-usuario");
    if (!icono) return;

    const sesion = sessionStorage.getItem("androvix_sesion");

    if (sesion) {
        icono.setAttribute("aria-label", "Cerrar sesión");
        icono.querySelector("i").className = "fa-solid fa-right-from-bracket";
        icono.addEventListener("click", (e) => {
            e.preventDefault();
            sessionStorage.removeItem("androvix_sesion");
            window.location.href = "login.html";
        });
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    await cargarComponente("contenedor-navbar", "../componentes/navbar.html");
    actualizarIconoUsuario();
    cargarComponente("contenedor-footer", "../componentes/footer.html");
});
