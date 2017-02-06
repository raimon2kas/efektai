$(document).ready(function() {
    $('article').hide().delay(1000).fadeIn(2200);
    $('div.hidden').fadeIn(1000).removeClass('hidden').css({"left":"500px"}).animate({"left":"0px"}, "slow");

});