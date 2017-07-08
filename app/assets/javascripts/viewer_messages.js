$(window).load(function() {
  $("#abire_header").click(function () {
    var collapsed = $("#toolbar_bottom").is(":visible");

    if (collapsed) {
      $("#toolbar_bottom").fadeOut(50);
      $("#toolbar_section").stop().animate({height: "10%"}, 200);
      $("#viewer_section").stop().animate({height: "90%"}, 200);
    } else {
      $("#toolbar_section").stop().animate({height: "20%"}, 200);
      $("#viewer_section").stop().animate({height: "80%"}, 200);
      $("#toolbar_bottom").fadeIn(300);
    }
  });
});
