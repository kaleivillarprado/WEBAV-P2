/*menú navegación */
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

function closeMenu(){
    $("#menu > div > ul").css("left", "-100%");
}
function changeOpacity() {
    var scroll = $(window).scrollTop();
    var menu = $("#menu").height();
    var max_scroll = $(window).height() - menu;
    if (scroll <= max_scroll) {
        var opacity = scroll / max_scroll;
        $("#menu").css("background-color", "rgba(255, 0, 0, " + opacity + ")");
    }
}
$(document).ready(function() {
    $(window).on("scroll", function() {
        changeOpacity();
    });
});

/*Modal imagenes*/

function openModal(figura) {
    $("#modal > figure > img").attr("src", $(figura).find("img").attr("src"));
    $("#modal > figure > figcaption").html($(figura).find("figcaption").html());
    $("#modal").css("display", "flex");
}

function closeModal() {
    $("#modal").css("display", "none");
}

/*library load*/
window.onload = function () {
    AOS.init({
        duration: 1500
    });
};