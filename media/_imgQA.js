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

changeText = function(text, newText){
  var currentText = $('.tags').html();

    $('.tags').html(currentText.replace(text,newText));
};

window.setTimeout(function(){changeText('::', ' ‣ ')}, 0)

window.setTimeout(function(){changeText('MCAT::HighYield', '<div class="symbols">&#xf005;</div>')}, 0)


window.setTimeout(function(){changeText('ImageQA', '<div class="symbols">&#xf7ec;</div>')}, 0)

$(document).ready(function() {
    $(".tags").html(function(index, currentHtml) {
        return currentHtml.replace(/ /gi, " | ");
    });
});
