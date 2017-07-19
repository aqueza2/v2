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

  $("#rm_one").click(function() {
    $("#card_two").addClass("hidden");
    $("#card_three").addClass("hidden");
    $(".card_text").css({marginLeft: "0%", marginRight: "0%", textAlign: "center"})
    $("#card_one").css({width: "90%"});
    $("#rm_one").addClass("hidden");
    $("#rl_one").removeClass("hidden");

    // remove text with ellipses and add full text
    $("#a_before").addClass("hidden");
    $("#a_after").removeClass("hidden");
  });

  $("#rl_one").click(function() {
    $("#card_two").removeClass("hidden");
    $("#card_three").removeClass("hidden");
    $("#card_one").removeAttr( 'style' );
    $(".card_text").removeAttr( 'style' );
    $("#rm_one").removeClass("hidden");
    $("#rl_one").addClass("hidden");

    // remove text with ellipses and add full text
    $("#a_before").removeClass("hidden");
    $("#a_after").addClass("hidden");
  });

  /* --------------------------------------------------------------- */

  $("#rm_two").click(function() {
    $("#card_one").addClass("hidden");
    $("#card_three").addClass("hidden");
    $(".card_text").css({marginLeft: "0%", marginRight: "0%", textAlign: "center"})
    $("#card_two").css({width: "90%"});
    $("#rm_two").addClass("hidden");
    $("#rl_two").removeClass("hidden");

    // remove text with ellipses and add full text
    $("#b_before").addClass("hidden");
    $("#b_after").removeClass("hidden");
  });

  $("#rl_two").click(function() {
    $("#card_one").removeClass("hidden");
    $("#card_three").removeClass("hidden");
    $("#card_two").removeAttr( 'style' );
    $(".card_text").removeAttr( 'style' );
    $("#rm_two").removeClass("hidden");
    $("#rl_two").addClass("hidden");

    // remove text with ellipses and add full text
    $("#b_before").removeClass("hidden");
    $("#b_after").addClass("hidden");
  });

  /* --------------------------------------------------------------- */

  $("#rm_three").click(function() {
    $("#card_one").addClass("hidden");
    $("#card_two").addClass("hidden");
    $(".card_text").css({marginLeft: "0%", marginRight: "0%", textAlign: "center"})
    $("#card_three").css({width: "90%"});
    $("#rm_three").addClass("hidden");
    $("#rl_three").removeClass("hidden");

    // remove text with ellipses and add full text
    $("#c_before").addClass("hidden");
    $("#c_after").removeClass("hidden");
  });

  $("#rl_three").click(function() {
    $("#card_one").removeClass("hidden");
    $("#card_two").removeClass("hidden");
    $("#card_three").removeAttr( 'style' );
    $(".card_text").removeAttr( 'style' );
    $("#rm_three").removeClass("hidden");
    $("#rl_three").addClass("hidden");

    // remove text with ellipses and add full text
    $("#c_after").addClass("hidden");
    $("#c_before").removeClass("hidden");
  });

//if form for registering does not work, check this function (the id might conflict with the class)
  $("#register").click(function() {
    $("#registerBack").removeClass("hidden");
  });

  $("#registerBack").click(function() {
    $("#registerBack").addClass("hidden");
  });
});
