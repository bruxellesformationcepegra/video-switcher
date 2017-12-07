document.body.keydown(function(e) {
  if(e.keyCode == 32){
    $(".video2").addClass('off');
  }
});
document.body.keyup(function(e) {
  if(e.keyCode == 32){
    $(".video2").removeClass('off');
  }
});
