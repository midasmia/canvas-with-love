var WINDOW_WIDTH = 1024;
var WINDOW_HEIGHT = 768;
var RADIUS = 5;
var MARGIN_TOP = 30;
var MARGIN_LEFT = 30;


var curShowTimeSeconds;


window.onload = function(){

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    canvas.width = WINDOW_WIDTH;
    canvas.height = WINDOW_HEIGHT;

   curShowTimeSeconds = getCurrentShowTimeSeconds()
    setInterval(
        function(){
            render( context );
            update();
        }
        ,
        50
    );
}


function getCurrentShowTimeSeconds() {
    var curTime = new Date();
    var ret = curTime.getTime();
    ret = Math.round( ret/1000 )

    return ret >= 0 ? ret : 0;
}

function update(){

    var nextShowTimeSeconds = getCurrentShowTimeSeconds();

    var nextHours = parseInt( nextShowTimeSeconds / 3600);
    var nextMinutes = parseInt( (nextShowTimeSeconds - nextHours * 3600)/60 );
    var nextSeconds = nextShowTimeSeconds % 60;

    var curHours = parseInt( curShowTimeSeconds / 3600);
    var curMinutes = parseInt( (curShowTimeSeconds - curHours * 3600)/60 );
    var curSeconds = curShowTimeSeconds % 60;

    if( nextSeconds != curSeconds ){

        curShowTimeSeconds = nextShowTimeSeconds;
    }
}

function render(cxt){
    cxt.clearRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT);
    cxt.save();
    
    var myDate = new Date();
    var hours = myDate.getHours();
    var minutes = myDate.getMinutes();
    var seconds = myDate.getSeconds();


    renderDigit( MARGIN_LEFT + (RADIUS + 1) , MARGIN_TOP , 0 , cxt );
    renderDigit( MARGIN_LEFT + 22*(RADIUS + 1) , MARGIN_TOP , 1, cxt );
    renderDigit( MARGIN_LEFT + 47*(RADIUS + 1) , MARGIN_TOP , 2, cxt );
    renderDigit( MARGIN_LEFT + 72*(RADIUS + 1) , MARGIN_TOP , 3, cxt );
    renderDigit( MARGIN_LEFT + 94*(RADIUS + 1) , MARGIN_TOP , 4, cxt );
    renderDigit( MARGIN_LEFT + 116*(RADIUS + 1) , MARGIN_TOP , 5, cxt );

    renderData( MARGIN_LEFT+50*(RADIUS+1)  , MARGIN_TOP+250 , parseInt(hours/10) , cxt )
    renderData( MARGIN_LEFT + 65*(RADIUS+1) , MARGIN_TOP+250  , parseInt(hours%10) , cxt )
    renderData( MARGIN_LEFT + 80*(RADIUS + 1) , MARGIN_TOP+250  , 10 , cxt )
    renderData( MARGIN_LEFT + 89*(RADIUS+1) , MARGIN_TOP+250 , parseInt(minutes/10) , cxt);
    renderData( MARGIN_LEFT + 104*(RADIUS+1) , MARGIN_TOP+250  , parseInt(minutes%10) , cxt);
    renderData( MARGIN_LEFT + 119*(RADIUS+1) , MARGIN_TOP+250 , 10 , cxt);
    renderData( MARGIN_LEFT + 128*(RADIUS+1) , MARGIN_TOP+250  , parseInt(seconds/10) , cxt);
    renderData( MARGIN_LEFT + 143*(RADIUS+1) , MARGIN_TOP+250  , parseInt(seconds%10) , cxt);
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

function renderData(x, y, num, cxt){
    
    cxt.fillStyle = "#bbb";

    for( var i=0;i<data[num].length;i++)
        for ( var j=0;j<data[num][i].length; j++)
        if(data[num][i][j]==1){
            cxt.beginPath();
            cxt.arc(x+j*2*(RADIUS+1)+(RADIUS+1), y+i*2*(RADIUS+1)+(RADIUS+1), RADIUS, 0, 2*Math.PI);
            cxt.closePath();

            cxt.fill();
            cxt.restore();

        }
}