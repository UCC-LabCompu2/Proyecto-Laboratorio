function init()
{
    var canvas = document.getElementById("canvas");
    canvas.width = canvas.width;
    var ancho = canvas.width;
    var largo = canvas.height;
    if (canvas.getContext)
    {
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "#add8e6";
        ctx.fillRect(ancho / 2 - 50, 50, 100, largo - 100);    //material
        ctx.beginPath();
        ctx.moveTo(150, largo / 2);
        ctx.lineTo(ancho / 2 + 50, largo / 2);  //recta normal
        ctx.setLineDash([5, 5]);
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.closePath();
        ctx.fill();
        ctx.font = "12px sans-serif ";
        ctx.fillStyle = "black";
        ctx.fillText("θ1", ancho / 2 - 100, largo / 2 - 5);
        ctx.fillText("θ2", ancho / 2 - 20, largo / 2 + 15);
    }
}

var pos3;

function snell(n1, tita1, n2)
{
    var tita2 = Math.asin((n1 * Math.sin(tita1)) / n2);

    return tita2;
}

var tita1;
var tita2;
var tita3;
var tita4;
var xFinal = 0;
var interval;

function rayo()
{
    var canvas = document.getElementById("canvas");
    var ancho = canvas.width;
    var largo = canvas.height;
    if (canvas.getContext)
    {
        var ctx = canvas.getContext("2d");
        var x1;
        var y1;
        var x2;
        var y2;

        var limite0 = (ancho / 2) - 150;
        var limite1 = ancho / 2 - 50;
        var limite2 = ancho / 2 + 50;
        var limite3 = ancho / 2 + 150;
        ctx.setLineDash([]);

        if (xFinal + 150 <= limite1)
        {
            x1 = 0;
            x2 = xFinal;
            y1 = 100 * Math.tan(tita1);
            y2 = (100 - xFinal) * Math.tan(tita1);

            ctx.beginPath();
            ctx.moveTo(x1 + limite0, largo / 2 - y1);
            ctx.lineTo(x2 + limite0, largo / 2 - y2);
            if (document.getElementById("color").value == "Rojo")
                ctx.strokeStyle = "red";
            if (document.getElementById("color").value == "Verde")
                ctx.strokeStyle = "green";
            if (document.getElementById("color").value == "Azul")
                ctx.strokeStyle = "blue";
            ctx.stroke();

            x = 100;


        }

        if (xFinal + 150 >= ancho / 2 - 50 && xFinal + 150 <= ancho / 2 + 50)
        {
            var x1 = 0;
            var x2 = xFinal - 100;
            var y1 = 0;
            var y2 = x2 * Math.tan(tita2);

            y = x * Math.tan(tita2);
            ctx.beginPath();
            ctx.moveTo(x1 + limite1, largo / 2 - y1);
            ctx.lineTo(x2 + limite1, y2 + largo / 2);
            if (document.getElementById("color").value == "Rojo")
                ctx.strokeStyle = "red";
            if (document.getElementById("color").value == "Verde")
                ctx.strokeStyle = "green";
            if (document.getElementById("color").value == "Azul")
                ctx.strokeStyle = "blue";
            ctx.stroke();
        }


        if (xFinal + 150 >= ancho / 2 + 50 && xFinal + 150 <= ancho / 2 + 150)
        {
            var x1 = 0;
            var x2 = xFinal - 200;
            var y1 = 100 * Math.tan(tita2);
            var y2 = y1 + x2 * Math.tan(tita4);

            ctx.beginPath();
            ctx.moveTo(x1 + limite2, y1 + largo / 2);
            ctx.lineTo(x2 + limite2, y2 + largo / 2);
            if (document.getElementById("color").value == "Rojo")
                ctx.strokeStyle = "red";
            if (document.getElementById("color").value == "Verde")
                ctx.strokeStyle = "green";
            if (document.getElementById("color").value == "Azul")
                ctx.strokeStyle = "blue";
            ctx.stroke();


            ctx.beginPath();                    //normal2
            ctx.moveTo(x + ancho / 2 - 150, y + largo / 2);
            ctx.lineTo(x + ancho / 2 + 100, y + largo / 2);
            ctx.setLineDash([5, 5]);
            ctx.strokeStyle = "grey";
            ctx.stroke();

            pos3 = y + largo / 2;
            if (xFinal == 200)
            {
                ctx.fillText("θ3", ancho / 2, pos3 - 5);
                ctx.fillText("θ4", ancho / 2 + 80, pos3 + 15);
            }

        }
        xFinal++;
    }
}


function animar()
{
    var canvas = document.getElementById("canvas");
    var ancho = canvas.width;
    xFinal = 0;

    interval = setInterval(rayo, 1000 / 60);
}


function calcular()
{
    var n2;

    if (document.getElementById("material").value == "Vidrio")
        n2 = 1.5;
    else if (document.getElementById("material").value == "Agua")
        n2 = 1.33;
    else if (document.getElementById("material").value == "Cristal")
        n2 = 2;
    else if (document.getElementById("material").value == "Diamante")
        n2 = 2.42;
    else
        n2 = document.getElementById("indice").value;


    var n1 = 1;

    tita1 = document.getElementById("angulo").value;

    tita1 = transformarDec2Rad(tita1);
    tita2 = snell(n1, tita1, n2);

    tita3 = tita2;

    tita4 = snell(n2, tita3, n1);

    rayo(tita1, tita2, tita3, tita4);

    document.getElementById("tita1").innerHTML = transformarRad2Dec(tita1);
    document.getElementById("tita2").innerHTML = transformarRad2Dec(tita2);
    document.getElementById("tita3").innerHTML = transformarRad2Dec(tita3);
    document.getElementById("tita4").innerHTML = transformarRad2Dec(tita4);
    animar();

}

function transformarDec2Rad(dec)
{
    rad = dec * Math.PI / 180;
    return rad
}

function transformarRad2Dec(rad)
{
    dec = (Math.round((rad * 180 / Math.PI) * 1000)) / 1000;

    return dec;
    dec
}

function alerta()
{
    alert("Bienvenido! para poder calcular los angulos resultantes debe ingresar los datos requeridos");
}

function alerta2()
{
    alert("Este programa web fue diseñado por estudiantes de ingenieria para calcular y ver como cambian" +
        " los angulos de la luz al pasar de un medio  a otro");
}

//onload = init;