changeText = function(text, newText){
  var currentText = $('.tags').html();
    $('.tags').html(currentText.replace(text,newText));
};

window.setTimeout(function(){changeText('imgQAE', '<div class="symbols">&#xf7eb;</div>')}, 0)

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

$(document).ready(function() {
    $(".tags").html(function(index, currentHtml) {
	return currentHtml.replace(/ /gi, " | ");
    });
});
