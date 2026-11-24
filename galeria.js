document.addEventListener("DOMContentLoaded", () => {

    const filtros = document.querySelectorAll(".filtro");
    const tarjetas = document.querySelectorAll(".tarjeta");
    const contador = document.getElementById("contador-galeria");

    filtros.forEach(filtro => {

        filtro.addEventListener("click", () => {

            filtros.forEach(btn => {
                btn.classList.remove("seleccionado");
            });

            filtro.classList.add("seleccionado");

            const provinciaSeleccionada = filtro.dataset.filtro;
            let cantidad = 0;

            tarjetas.forEach(tarjeta => {

                const provincia = tarjeta.dataset.provincia;

                if (
                    provinciaSeleccionada === "todos" ||
                    provincia === provinciaSeleccionada
                ) {
                    tarjeta.style.display = "flex";
                    cantidad++;
                } else {
                    tarjeta.style.display = "none";
                }

            });

            contador.textContent = `Mostrando ${cantidad} imágenes`;

        });

    });

});