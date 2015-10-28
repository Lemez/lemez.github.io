$(document).ready(function(){


     $('img.sideimage').on('click',function(){
        $(this).toggleClass("larger");
     });

     $('div.mainimage').on('click',function(){
        $(this).toggleClass("largermain");
     });
      
});