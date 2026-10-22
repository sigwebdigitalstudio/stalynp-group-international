document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenedor-footer");

    if (contenedor) {
        fetch("footer.html")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("No se pudo cargar el archivo footer.html");
                }
                return response.text();
            })
            .then((data) => {
                contenedor.innerHTML = data;
            })
            .catch((error) => console.error("Error al cargar el footer:", error));
    }
});