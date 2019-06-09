
if($.trim($(".content-inner").html()).length==0)
  $(".lbl-toggle").remove();



$('.tooltip:empty').remove();
$('.tooltiptext:empty').hide();



if ( $.trim( $('.tooltiptext').text() ) == "")
    $('.tooltip').css({"text-decoration": "none"});


    <!--JS-->

$(document).ready(function() {
    $(".tags").html(function(index, currentHtml) {
        return currentHtml.replace(/ /gi, " | ");
    });
});

changeText = function(text, newText){
  var currentText = $('.tags').html();
    $('.tags').html(currentText.replace(text,newText));
};

changeText = function(text, newText){
  var currentText = $('.tags').html();
    $('.tags').html(currentText.replace(text,newText));
};

window.setTimeout(function(){changeText('Reversicine', '<div class="symbols">&#xf0ec;</div>')}, 0)

changeText = function(text, newText){
  var currentText = $('.tags').html();
    $('.tags').html(currentText.replace(text,newText));
};

window.setTimeout(function(){changeText('::', ' ‣ ')}, 0)

changeText = function(text, newText){
  var currentText = $('.tags').html();
    $('.tags').html(currentText.replace(text,newText));
};
window.setTimeout(function(){changeText('::', ' ‣ ')}, 0)

changeText = function(text, newText){
  var currentText = $('.tags').html();
    $('.tags').html(currentText.replace(text,newText));
};
window.setTimeout(function(){changeText('::', ' ‣ ')}, 0)

