document.addEventListener("DOMContentLoaded", () => {

    const filtros = document.querySelectorAll(".filtro");
    const tarjetas = document.querySelectorAll(".tarjeta");
    const contador = document.getElementById("contador-lugares");

    filtros.forEach(filtro => {

        filtro.addEventListener("click", () => {

            filtros.forEach(btn => {
                btn.classList.remove("seleccionado");
            });

            filtro.classList.add("seleccionado");

            const provinciaSeleccionada = filtro.dataset.filtro;
            let cantidad = 0;

            tarjetas.forEach(tarjeta => {

                const provinciaTarjeta = tarjeta.dataset.provincia;

                if (
                    provinciaSeleccionada === "todos" ||
                    provinciaTarjeta === provinciaSeleccionada
                ) {
                    tarjeta.style.display = "flex";
                    cantidad++;
                } else {
                    tarjeta.style.display = "none";
                }

                // Cerrar detalles al cambiar de filtro
                const detalle = tarjeta.querySelector(".detalle-extra");
                const boton = tarjeta.querySelector(".boton-detalle");

                detalle.hidden = true;
                boton.textContent = "Ver más";
                boton.setAttribute("aria-expanded", "false");

            });

            contador.textContent = `Mostrando ${cantidad} lugares`;

        });

    });

    // BOTONES VER MÁS Y VER MENOS

    document.querySelectorAll(".boton-detalle").forEach(boton => {

        boton.addEventListener("click", () => {

            const tarjeta = boton.closest(".tarjeta");
            const detalle = tarjeta.querySelector(".detalle-extra");

            const abierto = !detalle.hidden;

            detalle.hidden = abierto;
            boton.textContent = abierto ? "Ver más" : "Ver menos";
            boton.setAttribute("aria-expanded", String(!abierto));

        });

    });

});