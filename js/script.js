var WINDOW_WIDTH = 1024;
var WINDOW_HEIGHT = 768;
var RADIUS = 5;
var MARGIN_TOP = 30;
var MARGIN_LEFT = 30;

window.onload = function(){

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    canvas.width = WINDOW_WIDTH;
    canvas.height = WINDOW_HEIGHT;

    render(context);
}

function render(cxt){
    renderDigit( MARGIN_LEFT + (RADIUS + 1) , MARGIN_TOP , 0 , cxt );
    renderDigit( MARGIN_LEFT + 22*(RADIUS + 1) , MARGIN_TOP , 1, cxt );
    renderDigit( MARGIN_LEFT + 47*(RADIUS + 1) , MARGIN_TOP , 2, cxt );
    renderDigit( MARGIN_LEFT + 72*(RADIUS + 1) , MARGIN_TOP , 3, cxt );
    renderDigit( MARGIN_LEFT + 94*(RADIUS + 1) , MARGIN_TOP , 4, cxt );
    renderDigit( MARGIN_LEFT + 116*(RADIUS + 1) , MARGIN_TOP , 5, cxt );
}

function renderDigit(x, y, num, cxt){
    cxt.fillStyle = "rgb(0,102,153)";

    for( var i=0;i<digit[num].length;i++)
        for ( var j=0;j<digit[num][i].length; j++)
        if(digit[num][i][j]==1){
            cxt.beginPath();
            cxt.arc(x+j*2*(RADIUS+1)+(RADIUS+1), y+i*2*(RADIUS+1)+(RADIUS+1), RADIUS, 0, 2*Math.PI);
            cxt.closePath();

            cxt.fill();
        }
}