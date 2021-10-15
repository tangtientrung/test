$(document).ready(function(){
    $("#no").on("mouseover", function () {
        var top = Math.floor((Math.random() * 100) + 1);
        var left = Math.floor((Math.random() * 100) + 1);
        $(this).css("top", top+"%");
        $(this).css("left", left+"%");
        $(this).css("position", "absolute");
    });
    $("#yes").click(function(){
        $("#canvas").css('display','block');
        $(this).css("top", 0);
        $(this).css("left", 0);
        $(this).css("position", "none");
        $('body').css("background", "#000");
        $('.envelope').css("display", "none");
    });
});
