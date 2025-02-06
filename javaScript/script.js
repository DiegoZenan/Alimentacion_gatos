document.addEventListener("DOMContentLoaded", () => {
    const imagen = document.querySelector(".contenedor1 .imagen1");

    let offsetX, offsetY, isDragging = false;

    imagen.addEventListener("mousedown", (e) => {
        isDragging = true;
        offsetX = e.clientX - imagen.getBoundingClientRect().left;
        offsetY = e.clientY - imagen.getBoundingClientRect().top;
        imagen.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        const contenedor = document.querySelector(".contenedor1");
        const contenedorRect = contenedor.getBoundingClientRect();

        let newX = e.clientX - offsetX;
        let newY = e.clientY - offsetY;

        // Restringe la imagen dentro del contenedor1
        newX = Math.max(contenedorRect.left, Math.min(newX, contenedorRect.right - imagen.clientWidth));
        newY = Math.max(contenedorRect.top, Math.min(newY, contenedorRect.bottom - imagen.clientHeight));

        imagen.style.left = `${newX - contenedorRect.left}px`;
        imagen.style.top = `${newY - contenedorRect.top}px`;
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        imagen.style.cursor = "grab";
    });
});
