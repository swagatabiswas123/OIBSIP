 var btn = document.getElementById('btn'); var input =  document.getElementById('ip');

btn.addEventListener('click', function(e){
    btn.classList.remove("grey");
   btn.classList.add("movebtn");
    input.classList.remove("smallwidth");
    input.classList.add("maxwidth");
    
  });

var menu = document.getElementById('wd');

var slide = document.getElementById('wd2');

var cross = document.getElementById('cross');


menu.addEventListener('click',function(e){
     wd2.classList.remove("s-wd");
     wd2.classList.add("f-wd");
    
});

cross.addEventListener('click',function(e){
   cross.classList.remove("f-wd");
});
