function transitionImage(c, n) {
  var fimage = $("#ss_one");
  var simage = $("#ss_two");
  var timage = $("#ss_three");

  if (c == 0) {
    fimage.removeClass("fadeIn");
    fimage.addClass("fadeOut");
    fimage.addClass("hidden");
  } else if (c == 1) {
    simage.removeClass("fadeIn");
    simage.addClass("fadeOut");
    simage.addClass("hidden");
  } else if (c == 2) {
    timage.removeClass("fadeIn");
    timage.addClass("fadeOut");
    timage.addClass("hidden");
  }

  if (n == 0) {
    fimage.removeClass("fadeOut");
    fimage.removeClass("hidden");
    fimage.addClass("fadeIn");
    $(".abire_motto").html("Connect with Nationwide Building Professionals");
  } else if (n == 1) {
    simage.removeClass("fadeOut");
    simage.removeClass("hidden");
    simage.addClass("fadeIn");
    $(".abire_motto").html("Connect with Nationwide Community Members");
  } else if (n == 2) {
    timage.removeClass("fadeOut");
    timage.removeClass("hidden");
    timage.addClass("fadeIn");
    $(".abire_motto").html("Build Rise Grow Together");
  }
}

function slideshow() {
  if ($("#sc_one").hasClass("filled")) {
    $("#sc_one").removeClass("filled");
    $("#sc_two").addClass("filled");
    $("#sc_three").removeClass("filled");
    transitionImage(0,1);
  } else if ($("#sc_two").hasClass("filled")) {
    $("#sc_one").removeClass("filled");
    $("#sc_two").removeClass("filled");
    $("#sc_three").addClass("filled");
    transitionImage(1,2);
  } else if ($("#sc_three").hasClass("filled")) {
    $("#sc_one").addClass("filled");
    $("#sc_two").removeClass("filled");
    $("#sc_three").removeClass("filled");
    transitionImage(2,0);
  }
}

$(window).load(function() {
  var interval = setInterval(slideshow, 5000);

  $(".active").click(function() {
    var id = this.id;
    var current_id = $(".filled").attr("id");

    if (id == "sc_one") {
      id = 0;
    } else if (id == "sc_two") {
      id = 1;
    } else if (id == "sc_three") {
      id = 2;
    }

    if (current_id == "sc_one") {
      current_id = 0;
      $("#sc_one").removeClass("filled");
      $("#sc_two").addClass("filled");
      $("#sc_three").removeClass("filled");
    } else if (current_id == "sc_two") {
      current_id = 1;
      $("#sc_one").removeClass("filled");
      $("#sc_two").removeClass("filled");
      $("#sc_three").addClass("filled");
    } else if (current_id == "sc_three") {
      $("#sc_one").addClass("filled");
      $("#sc_two").removeClass("filled");
      $("#sc_three").removeClass("filled");
      current_id = 2;
    }
    transitionImage(current_id, id);
    clearInterval(interval);
  });

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

  $(".read_more").click(function() {
    $(".about_us").removeClass("collapse");
    $(".about_us").addClass("expand");
    $(".read_more").addClass("hidden");
    $(".read_less").removeClass("hidden");

    // remove text with ellipses and add full text
    $("#a_before").addClass("hidden");
    $("#a_after").removeClass("hidden");
  });

  $(".read_less").click(function() {
    $(".about_us").removeClass("expand");
    $(".about_us").addClass("collapse");
    $(".read_less").addClass("hidden");
    $(".read_more").removeClass("hidden");

    // remove text with ellipses and add full text
    $("#a_after").addClass("hidden");
    $("#a_before").removeClass("hidden");
  });

  $("#register").click(function() {
    $("#registerBack").removeClass("hidden");
  });

  $("#registerBack").click(function() {
    $("#registerBack").addClass("hidden");
  });
});
