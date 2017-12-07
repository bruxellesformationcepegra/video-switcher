$(document).keyup(function(e){
  if(e.keyCode==32){
    play();

  }


});

function play(){
  if($('.video1').hasClass('fade')){
    $('.video1').removeClass('fade');
  }else{
$('.video1').addClass('fade');

}

}
