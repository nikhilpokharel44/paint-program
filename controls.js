var radius=10;
var maxradius = 50,
    minradius = 2;
var incr = document.getElementById('increase');
var decr = document.getElementById('decrese');
brushSize();
incrDecrSize();

function incrDecrSize(){
  incr.addEventListener('click',function(){
    radius+=2;
    brushSize();
  });
  decr.addEventListener('click',function(){
    radius-=2;
    brushSize();
  });
}
function brushSize(){
  let size = document.getElementById('radsize')
  size.innerHTML = `<span><center>${radius}</center></span>`;
  if(radius>=maxradius){
    radius=maxradius;
  }
  if(radius<=minradius){
    radius=minradius;
  }
}
