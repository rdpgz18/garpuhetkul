      $(document).ready(function () {
            $(".menu-toggle").click(function () {
                $('nav').toggleClass('active');
            })
        })
        //slides
  var a=-100;
  setInterval(function(){
   if (a!=0) {
    slide = document.getElementById('slide');
    slide.style="margin-left:"+a+"%;transition: 1s ease-in;";
    if (a== -300) {
     a=0;
    }else{
     a=a+-100;
    }
    return a;

   }else{
    slide = document.getElementById('slide');
    slide.style="margin-left:"+a+"%;";
    if (a== -300) {
     a=0;
    }else{
     a=a+-100;
    }
    return a;
   }

  }, 2000);