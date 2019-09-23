var active = true;

e[8].addEventListener('click',function(){
  var choice = prompt('enter your color choice NOTE:can include rgba() or hexavalue');
  pcol = choice;
  e[8].style.background = choice;
});
e[8].innerHTML = '<p>?</p>'
