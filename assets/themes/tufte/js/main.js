$(document).ready(function(){

     $('img.sideimage').on('click',function(){
        $(this).toggleClass("larger");
     });

     $('div.mainimage').on('click',function(){
        $(this).toggleClass("largermain");
     });

     $('span#tagpage_all_button').on('click',function(){
        if ($(this).attr('class')=='tagpage-active') {
            $('div.all-buttons span').removeClass('tagpage-active');
            $('div.index').hide();
            $('div.allindexstories div').hide();
            $(this).removeClass('tagpage-active'); 
        } else {
           $('div.all-buttons span').removeClass('tagpage-active').addClass('tagpage-active');
            $('div.index').show();
            $('div.allindexstories div').show();
            $(this).addClass('tagpage-active'); 
        }  
        console.log($(this).css('class'));
     });

     $('span#tagpage-categories-button').on('click',function(){
        $(this).toggleClass('tagpage-active');
        $('div#tagpage-categories-list').toggle();
        $('div#tagpage-categories').toggle();
     });
     $('span#tagpage-artists-button').on('click',function(){
        $(this).toggleClass('tagpage-active');
        $('div#tagpage-artists-list, div#tagpage-artists').toggle();
     });
     $('span#tagpage-topics-button').on('click',function(){
        $(this).toggleClass('tagpage-active');
        $('div#tagpage-topics-list, div#tagpage-topics').toggle();
     });
     $('span#tagpage-sources-button').on('click',function(){
        $(this).toggleClass('tagpage-active');
        $('div#tagpage-sources-list, div#tagpage-sources').toggle();
     });
     $('span#tagpage-genres-button').on('click',function(){
        $(this).toggleClass('tagpage-active');
        $('div#tagpage-genres-list, div#tagpage-genres').toggle();
     });

     $("input[type='submit']").on('click',function(){
        var provider = "http://formspree.io/";
        var p2 = "mai";
        var p3 = "l.c";
        var digit = 7 + 2;
        var p4 = "om";
        var p1 = "@g";
        var thename = provider.concat("lemez").concat(digit.toString()).concat(p1).concat(p2).concat(p3).concat(p4);
        $('form').attr('action', thename);
        });

      

     // var _0x6af8=["\x63\x6C\x69\x63\x6B","\x68\x74\x74\x70\x3A\x2F\x2F\x66\x6F\x72\x6D\x73\x70\x72\x65\x65\x2E\x69\x6F\x2F","\x6D\x61\x69","\x6C\x2E\x63","\x6F\x6D","\x40\x67","\x63\x6F\x6E\x63\x61\x74","\x6C\x65\x6D\x65\x7A","\x61\x63\x74\x69\x6F\x6E","\x61\x74\x74\x72","\x66\x6F\x72\x6D","\x6F\x6E","\x69\x6E\x70\x75\x74\x5B\x74\x79\x70\x65\x3D\x27\x73\x75\x62\x6D\x69\x74\x27\x5D"];$(_0x6af8[12])[_0x6af8[11]](_0x6af8[0],function(){var _0xeae4x1=_0x6af8[1];var _0xeae4x2=_0x6af8[2];var _0xeae4x3=_0x6af8[3];var _0xeae4x4=7+2;var _0xeae4x5=_0x6af8[4];var _0xeae4x6=_0x6af8[5];var _0xeae4x7=_0xeae4x1[_0x6af8[6]](_0x6af8[7])[_0x6af8[6]](_0xeae4x4.toString())[_0x6af8[6]](_0xeae4x6)[_0x6af8[6]](_0xeae4x2)[_0x6af8[6]](_0xeae4x3)[_0x6af8[6]](_0xeae4x5);$(_0x6af8[10])[_0x6af8[9]](_0x6af8[8],_0xeae4x7);});
     
    // var pathname = window.location.pathname;
    // var gitname = 'jonascii.png';
    // var imgs = $('div.all_page_links a img.allnote');
    // var divs = $('div.all_page_links');
    // console.log(imgs.length);
    // for (var i = 0; i<imgs.length;i++){
    //    var image = imgs[i];
    //    var div = divs[i];
    //    var divHeight = parseInt($(div).css('height'));
    //    var imageHeight = parseInt($(image).css('height'));
    //    var margin = (divHeight - imageHeight)/5;
    //    console.log(margin);
    //    if (margin>30) {$(image).css('paddingTop',margin)};
    // }
    // if (pathname=='/a/tech.html') {
    // 	  var current = $('img.navpic').attr('src');
    // 	  var newpath = current.replace('LL.jpg', gitname);
    // 	  $('img.navpic').attr('src', newpath)
    //                  .css('width', '50')
    // 					.css('height', '50');
    // }
});