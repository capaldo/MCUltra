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

var config = {
    startOnLoad:true,
    theme: 'dark',
    flowchart:{
            useMaxWidth:false,
            htmlLabels:true
        }
};
mermaid.initialize(config);
window.mermaid.init(undefined, document.querySelectorAll('.mermaid'));
