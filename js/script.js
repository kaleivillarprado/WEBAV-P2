/*menú navegación */
function openMenu(){
    $("#menu > div > ul").css("left", "0");
}

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


/*gráfico barras*/
function cargaGraficoBarras() {
    // Datos para generar el gráfico, hay que definir las etiquetas y
    // los datasets. Hay que definir un color para cada dataset
    var datos = {
        labels: ["2020", "2021", "2022", "2023", "2024"],
        datasets: [{
            label: "Pisos turísticos en Madrid",
            backgroundColor: "#d81e1eff",
            data: [19597,  17400, 15763, 16970, 22435],
        }],
    };

    // Configuración del gráfico. Debe incluir imprescindiblemente el
    // tipo de gráfico y los datos que hemos definido previamente.
    // Se pueden añadir opciones para personalizar el gráfico
    var config = {
        type: "bar",
        data: datos,
        options: {
            scales: {
                x: {
                    border: {
                        color: "black",
                        width: 2
                    },
                    grid: {
                        display: false
                    }
                },
                y: {
                    min: 0,
                    max: 25000,

                    border: {
                        color: "black",
                        width: 2
                    }
                }
            }
        }
    };
    var grafico = $("#barras")[0].getContext("2d");
    new Chart(grafico, config);
}

$(document).ready(function () {
    cargaGraficoBarras();
});