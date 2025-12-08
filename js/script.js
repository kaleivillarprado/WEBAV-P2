const sidebar = document.getElementById("sidebar");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

openBtn.onclick = () => {
    sidebar.classList.add("active");
};

closeBtn.onclick = () => {
    sidebar.classList.remove("active");
};

// Close sidebar when clicking outside (optional)
document.addEventListener("click", (e) => {
    if (!sidebar.contains(e.target) && !openBtn.contains(e.target)) {
        sidebar.classList.remove("active");
    }
});
/**
 * Cierra el menú
 */
function closeMenu(){
    $("#menu > div > ul").css("left", "-100%");
}


/**
 * Abre la ventana modal mostrando la imagen y el pie de foto del elemento figure pasado como parámetro.
 * @param figura Elemento figure sobre el que se ha hecho clic
 */
function openModal(figura) {
    $("#modal > figure > img").attr("src", $(figura).find("img").attr("src"));
    $("#modal > figure > figcaption").html($(figura).find("figcaption").html());
    $("#modal").css("display", "flex");
}


/**
 * Busca el elemento con id "modal" y lo oculta estableciendo su estilo de display a "none"
 */
function closeModal() {
    $("#modal").css("display", "none");
}


/**
 * Cambia la opacidad del menú según la posición del scroll
 */
function changeOpacity() {
    var scroll = $(window).scrollTop();
    var menu = $("#menu").height();
    var max_scroll = $(window).height() - menu;
    if (scroll <= max_scroll) {
        var opacity = scroll / max_scroll;
        $("#menu").css("background-color", "rgba(0, 0, 0, " + opacity + ")");
    }
}


/**
 * Detecta el evento scroll en la ventana del navegador y llama a la función changeOpacity
 */
$(document).ready(function() {
    $(window).on("scroll", function() {
        changeOpacity();
    });
});