let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
  if( document.getElementById("dark").innerHTML=="Dark")
  {
    document.getElementById("dark").innerHTML="Light";
    document.getElementById("dark").style.backgroundColor="white";
  }
  else{
    document.getElementById("dark").innerHTML="Dark";
    document.getElementById("dark").style.backgroundColor="#0dcaf0";
  }
   
   
}

function myFunction1(){
  if( document.getElementById("more").innerHTML=="MORE")
  {
    document.getElementById("more").innerHTML="LESS";
  }
  else{
    document.getElementById("more").innerHTML="MORE";
  }
}




