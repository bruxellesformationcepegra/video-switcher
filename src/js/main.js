var $b = $(".b");
var $space = $("img");
$("body").keydown(function(e)
{
  if(e.which === 32)
  {
    $b.css("z-index", 5);
    $space.addClass("down");
  }
});

$("body").keyup(function(e)
{
  if(e.which === 32)
  {
    $b.css("z-index", 0);
    $space.removeClass("down");
  }
});
