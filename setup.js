//variable for all the objects
var pcol='black';
//Global variable declaration
var clicked = false;
var mousepos ={
    x: undefined,
    y: undefined
};

//canvas startUp
c = document.getElementById('mainCanvas');
ctx = c.getContext('2d');
c.width = window.innerWidth;
c.height = window.innerHeight;
drawingSection();


//for drawingSection
function drawingSection(){
    ctx.fillStyle = '#fff';
    ctx.fillRect(320,60,c.width,c.height);
    }

    //Event Listeners for drawing in mainCanvas
    window.addEventListener('mousedown',function(evt){
      clicked = true;
      mousepos.x = evt.x;
      mousepos.y = evt.y;
      brush(radius);

    });

    window.addEventListener('mousemove',function(evt){
          if(clicked){
          mousepos.x = evt.x;
          mousepos.y = evt.y;
          brush(radius);
          }
    });

    window.addEventListener('mouseup',function(){
      clicked = false;
      ctx.beginPath();
    });

//For using brush
function brush(radius){
    ctx.lineTo(mousepos.x,mousepos.y);
    ctx.strokeStyle = pcol;
    ctx.stroke();
    ctx.lineWidth = 2*radius;
    ctx.beginPath();
    ctx.fillStyle = pcol;
    ctx.arc(mousepos.x,mousepos.y,radius,0,Math.PI*2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(mousepos.x,mousepos.y);
}
