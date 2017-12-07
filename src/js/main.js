$('button').click(function(){
  $('.hero__video-bg:nth-of-type(2)').fadeToggle();
});

$('body').keyup(function(e){
   if(e.keyCode == 32){
        // user has pressed space
       $('.hero__video-bg:nth-of-type(2)').fadeToggle();
   }
});
