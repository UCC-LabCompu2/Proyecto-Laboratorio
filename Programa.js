/**
 * Created by ignacioachaval on 2/6/16.
 */



function init() {
    var canvas = document.getElementById("canvas");
    canvas.width = canvas.width;
    var ancho = canvas.width;
    var largo = canvas.height;
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "#add8e6";
        ctx.beginPath();
        ctx.fillRect(ancho / 2 - 50, largo / 2 - 50, 100, 100);
        ctx.moveTo(150, largo / 2);
        ctx.lineTo(ancho / 2 - 50, largo / 2);
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.closePath();

        ctx.fill();
    }
}
function snell(n1, tita1, n2) {
    var tita2 = Math.asin((n1 * Math.sin(tita1)) / n2);

    return tita2;
}

function rayo(tita1, tita2, tita3, tita4) {
    var canvas = document.getElementById("canvas");
    var ancho = canvas.width;
    var largo = canvas.height;
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        var x = (ancho / 2) - 150;
        var y = x * Math.tan(tita1);

        ctx.beginPath();

        ctx.strokeStyle = "red";
        ctx.moveTo(x, largo / 2 - y);
        ctx.lineTo(ancho / 2 - 50, largo / 2);
        ctx.stroke();


        x = 100;
        y = x * Math.tan(tita2);

        ctx.beginPath();

        ctx.moveTo(ancho / 2 - 50, largo / 2);
        ctx.lineTo(ancho / 2 + 50, y + largo / 2);
        ctx.strokeStyle = "red";
        ctx.stroke();

        ctx.moveTo(ancho / 2 + 50, y + largo / 2);
        k = y;
        x = 100;
        y = x * Math.tan(tita4);

        ctx.lineTo(x + ancho / 2 + 50, y + largo / 2 + k);
        ctx.strokeStyle = "red";

        ctx.stroke();

    }
}

function calcular() {
    var n2 = document.getElementById("indice").value;

    var n1 = 1;

    var tita1 = document.getElementById("angulo").value;

    tita1 = transformarDec2Rad(tita1);
    var tita2 = snell(n1, tita1, n2);

    var tita3 = tita2;

    var tita4 = snell(n2, tita3, n1);

    rayo(tita1, tita2, tita3, tita4);

    document.getElementById("tita1").innerHTML = transformarRad2Dec(tita1);
    document.getElementById("tita2").innerHTML = transformarRad2Dec(tita2);
    document.getElementById("tita3").innerHTML = transformarRad2Dec(tita3);
    document.getElementById("tita4").innerHTML = transformarRad2Dec(tita4);


}

function transformarDec2Rad(dec) {
    rad = dec * Math.PI / 180;
    return rad
}

function transformarRad2Dec(rad) {
    dec = rad * 180 / Math.PI;
    return dec;
}

function alerta() {
    alert("Bienvenido! para poder calcular los angulos resultantes debe ingresar los datos requeridos");
}

function alerta2() {
    alert("Este programa web fue diseñado por estudiantes de ingenieria para calcular y ver como cambian" +
        " los angulos de la luz al pasar de un medio  a otro");
}

//onload = init;