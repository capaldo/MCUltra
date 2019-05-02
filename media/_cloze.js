$(document).ready(function() {
   str = $('.extra').text();
   if($.trim(str) === "") {
     $('.extra').remove();
   }
});

$(document).ready(function() {
    $(".tags").html(function(index, currentHtml) {
  return currentHtml.replace(/::/gi, " ‣ ");
    });
});

changeText = function(text, newText){
  var currentText = $('.tags').html();
    $('.tags').html(currentText.replace(text,newText));
};
window.setTimeout(function(){changeText('Clozine', '<div class="symbols">&#xf576;</div>')}, 0)
