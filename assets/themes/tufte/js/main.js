$(document).ready(function(){


     $('img.sideimage').on('click',function(){
        $(this).toggleClass("larger");
     });

     $('div.mainimage').on('click',function(){
        $(this).toggleClass("largermain");
     });

     var pathname = window.location.pathname;
     var gitname = 'github.png';

    if (pathname=='/tech.html') {
    	var current = $('img.navpic').attr('src');
    	var newpath = current.replace('LL.jpg', gitname);
    	$('img.navpic').attr('src', newpath)
    					.css('height', '50');

    }

     

     

});