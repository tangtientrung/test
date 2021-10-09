$(document).ready(function(){
  $("#no").click(function(){
    var top = Math.floor((Math.random() * 100) + 1);
    var left = Math.floor((Math.random() * 100) + 1);
    $(this).css("top", top+"%");
    $(this).css("left", left+"%");
  });
});
