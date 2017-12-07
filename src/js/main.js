$("body").keydown(function(e) {
    32 == e.keyCode && ($("video:nth-of-type(1)").addClass("hide"), $("img").addClass("hidden"));
}), $("body").keyup(function(e) {
    32 == e.keyCode && ($("video:nth-of-type(1)").removeClass("hide"), $("img").removeClass("hidden"));
});
