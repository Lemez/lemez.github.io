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