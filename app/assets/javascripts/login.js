$('.ripple').on('click', function (event) {
  var $div = $('<div/>'),
      btnOffset = $(this).offset(),
      xPos = event.pageX - btnOffset.left,
      yPos = event.pageY - btnOffset.top;



  $div.addClass('ripple-effect');
  var $ripple = $(".ripple-effect");

  $ripple.css("height", $(this).height());
  $ripple.css("width", $(this).height());
  $div
    .css({
      top: yPos - ($ripple.height()/2),
      left: xPos - ($ripple.width()/2),
      background: $(this).data("ripple-color")
    })
    .appendTo($(this));

  window.setTimeout(function(){
    $div.remove();
  }, 2000);
});

$(window).load(function() {
  $("#registerButton").click(function() {
    $("#registerBack").removeClass("hidden");
  });

  $("#registerBack").click(function() {
    $("#registerBack").addClass("hidden");
  });
});

$(document).on('turbolinks:load', function() {
  $("#registerButton").click(function() {
    $("#registerBack").removeClass("hidden");
  });

  $("#registerBack").click(function() {
    $("#registerBack").addClass("hidden");
  });
});
