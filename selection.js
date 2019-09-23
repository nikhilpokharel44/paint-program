var active = false;
var color = ['black','darkred','red','orange','yellow','green','#40E0D0','indigo'];

var e = document.getElementsByClassName('mainpallets');

  e[0].addEventListener('click',function(){
    pcol=color[0];
  });
  e[1].addEventListener('click',function(){
    pcol=color[1];
  });
  e[2].addEventListener('click',function(){
    pcol=color[2];
  });
  e[3].addEventListener('click',function(){
    pcol=color[3];
  });
  e[4].addEventListener('click',function(){
    pcol=color[4];
  });
  e[5].addEventListener('click',function(){
    pcol=color[5];
  });
  e[6].addEventListener('click',function(){
    pcol=color[6];
  });
  e[7].addEventListener('click',function(){
    pcol=color[7];
  });
