$(document).ready(function(){


     $('img.sideimage').on('click',function(){
        $(this).toggleClass("larger");
     });

     $('div.mainimage').on('click',function(){
        $(this).toggleClass("largermain");
     });

     var pathname = window.location.pathname;
     var gitname = 'jonascii.png';

     //  var imgs = $('div.all_page_links a img.allnote');
     //  var divs = $('div.all_page_links');
     //  console.log(imgs.length);

     //  for (var i = 0; i<imgs.length;i++){
     //    var image = imgs[i];
     //    var div = divs[i];

     //    var divHeight = parseInt($(div).css('height'));
     //    var imageHeight = parseInt($(image).css('height'));
     //    var margin = (divHeight - imageHeight)/5;
     //    console.log(margin);
     //    if (margin>30) {$(image).css('paddingTop',margin)};
     // }

     

    // if (pathname=='/a/tech.html') or {
    // 	var current = $('img.navpic').attr('src');
    // 	var newpath = current.replace('LL.jpg', gitname);
    // 	$('img.navpic').attr('src', newpath)
    //                     .css('width', '50')
    // 					.css('height', '50');

    // }

     

     

});