$(function(){
    'use strict';

    
$('.navi').on('mouseenter',increasing);
$('.navi').on('mouseleave',reducing);

function increasing(){
    $(this).animate({'width':'16rem'});    
    $('.navi  p a').fadeTo(1000, 1);    
}
function reducing(){
    $(this).animate({'width':'7rem'});    
    $('.navi  p a').fadeTo(500, 0);     
}


//////////////////////////////////////////


$('#1').click(function (){
    $('#page1').css('display','block');
    $('#page2').css('display','none');
    $('#page3').css('display','none');
    $('#page4').css('display','none');
    $('#page5').css('display','none');

});

$('#2').click(function (){
    $('#page1').css('display','none');
    $('#page2').css('display','block');
    $('#page3').css('display','none');
    $('#page4').css('display','none');
    $('#page5').css('display','none');

});

$('#3').click(function (){
    $('#page1').css('display','none');
    $('#page2').css('display','none');
    $('#page3').css('display','block');
    $('#page4').css('display','none');
    $('#page5').css('display','none');

});

$('#4').click(function (){
    $('#page1').css('display','none');
    $('#page2').css('display','none');
    $('#page3').css('display','none');
    $('#page4').css('display','block');
    $('#page5').css('display','none');

});

$('#5').click(function (){
    $('#page1').css('display','none');
    $('#page2').css('display','none');
    $('#page3').css('display','none');
    $('#page4').css('display','none');
    $('#page5').css('display','block');

});




// function tab1(){
// // var iframe = $('.page');/
// // iframe.attr('src', 'google.com');//
// // }
// $(this).attr('display','block')
// }






});