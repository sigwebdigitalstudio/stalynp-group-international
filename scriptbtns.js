document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenedor-botones");

    if (contenedor) {
        fetch("btn_redess.html")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("No se pudo cargar el archivo btn_redes.html");
                }
                return response.text();
            })
            .then((data) => {
                contenedor.innerHTML = data;
            })
            .catch((error) => console.error("Error al cargar botones flotantes:", error));
    }
});