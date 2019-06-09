$(document).ready(function() {
    $(".tags").html(function(index, currentHtml) {
	return currentHtml.replace(/ /gi, " | ");
    });
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
window.setTimeout(function(){changeText('Basicine', '<div class="symbols">&#xfb37;</div>')}, 0)

$(".lbl-toggle").each(function(i, val) {
if ($.trim($(".content-inner").html()).length==0)
  $(".lbl-toggle").remove();
});

if ( $.trim( $('.tooltiptext').text() ) == "")
    $('.tooltip').css({"text-decoration": "none"});

$(".tooltip").each(function(i, val) {
    if ($(".tooltip").text().trim() === "") {
	$(".tooltip").remove();
    }
});

$(".tooltiptext").each(function(i, val) {
    if ($(".tooltiptext").text().trim() === "") {
	$(".tooltiptext").remove();
    }
});

$(".back").each(function(i, val) {
if ($.trim($(".back").html()).length==0)
    $(".back").remove();
});

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
