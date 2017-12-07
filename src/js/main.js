//
//   $("body").keydown(function(event){
//     if ( event.which == 32 ) {
//      event.preventDefault();
//      $("video").attr("src", "medias/video2.mp4");
//     }
// });
//
// $("body").keyup(fonction(event){
//
// });
//
//
// Code du prof
$("body").keydown(function(e){
 32 == e.keyCode && ($(".premium").addClass("hide"), $("img").addClass("hidden"))
 });
 $("body").keyup(function(e){
  32 == e.keyCode && ($(".premium").removeClass("hide"), $("img").removeClass("hidden"))
  });
