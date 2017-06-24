$(window).load(function() {
  var ScrollPos = 0;
  $("#listings_list").scroll(function () {
      var CurScrollPos = $(this).scrollTop();
      if (CurScrollPos > ScrollPos) {
        //scroll down
        $("#toolbar_bottom").hide();
        $("#toolbar_section").css({height: "10%"});
        $("#listings_section").css({height: "90%"});
      } else {
        //scroll up
        $("#toolbar_section").removeAttr("style");
        $("#toolbar_bottom").fadeIn(500);
        $("#listings_section").removeAttr("style");
      }
      ScrollPos = CurScrollPos;
  });

  $("#toolbar_search").click(function() {
      $("#toolbar_search").addClass("hidden");
      $("#search_input").removeClass("hidden");
      $("#search_input").stop().animate({width: 250}, 500 );
      $("#search_input").focus();
  });

  $("#search_input").blur(function() {
    $("#search_input").stop().animate({width: 0}, 500 );
    setTimeout(function() {
      $("#search_input").addClass("hidden");
      $("#toolbar_search").removeClass("hidden");
    }, 400);
  });

  $("#menu").click(function() {
    $("#nav_drawer_section").removeClass("hidden");
    $("#nav_drawer").stop().animate({left: 0}, 500 );
  });

  $("#nav_drawer_section").click(function() {
    $("#nav_drawer").stop().animate({left: "-25%"}, 400 );
    setTimeout(function() {
      $("#nav_drawer_section").addClass("hidden");
    }, 500);
  });

  $(".viewMore").click(function() {
    var view = $(this).data("view");
    var id = $(this).data("id");
    var clicked = $(this).data("viewed");
    var id_listing_map = id + "_listing_map";
    var lat = $(this).data("lat");
    var lng = $(this).data("lng");
    var id_listing = "#" + id + "_listing";
    var id_listing_top = "#" + id + "_listing_top";
    var id_listing_bottom = "#" + id + "_listing_bottom";
    var id_listing_menu = "#" + id + "_listing_menu";

    if (view == "reduce") {
      alert(view)
      $(this).html("View Less");
      $(id_listing).css({height : "100%"});
      $(id_listing_top).css({height : "42%"});
      $(id_listing_bottom).removeClass("hidden");
      $(id_listing_bottom).stop().animate({height: "40%"}, 200 );
      $(id_listing_bottom).css({height : "40%", top : "5%"});
      $(id_listing_menu).css({height : "8%", top : "10%"});
      if (clicked == "0") {
        var myCenter = new google.maps.LatLng(lat, lng);
        var mapCanvas = document.getElementById(id_listing_map);
        var mapOptions = {center: myCenter, zoom: 5, clickableIcons: false, streetViewControl: false, disableDefaultUI: true, mapTypeId: google.maps.MapTypeId.ROADMAP};
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var marker = new google.maps.Marker({position:myCenter});
        marker.setMap(map);
        setTimeout(function() {
          google.maps.event.trigger(map, 'resize');
        }, 1000);
      }
      $(this).data("view", "expand");
      $(this).data("viewed", "1");
    } else if (view == "expand") {
      $(this).data("view", "reduce");
      $(this).html("View More");
      $(id_listing).removeAttr("style");
      $(id_listing_top).removeAttr("style");
      $(id_listing_menu).removeAttr("style");
      $(id_listing_bottom).stop().animate({height: "0%"}, 200);
      setTimeout(function() {
        $(id_listing_bottom).addClass("hidden");
        $(id_listing_bottom).removeAttr("style");
      }, 500);
    };
  });

  $(".bookmark").click(function() {
    var id = $(this).data("id");
    var bookmarked = $(this).data("bookmarked");

    if (bookmarked == "1") {
      $(this).data("bookmarked", "0");
      $(this).removeAttr("style");
    } else {
      $(this).css({color : "#4BA173"});
      $(this).data("bookmarked", "1");
    }
  });

  $(".star").mouseenter(function() {
    var id = $(this).data("id");
    var star_index = $(this).data("star-index");
    var star_one = $("#" + id + "_star_one");
    var star_two = $("#" + id + "_star_two");
    var star_three = $("#" + id + "_star_three");
    var star_four = $("#" + id + "_star_four");
    var star_five = $("#" + id + "_star_five");

    star_one.removeAttr("style");
    star_two.removeAttr("style");
    star_three.removeAttr("style");
    star_four.removeAttr("style");
    star_five.removeAttr("style");

    switch (star_index) {
      case 1:
        star_one.css({color : "yellow"});
        break;
      case 2:
        star_one.css({color : "yellow"});
        star_two.css({color : "yellow"});
        break;
      case 3:
        star_one.css({color : "yellow"});
        star_two.css({color : "yellow"});
        star_three.css({color: "yellow"});
        break;
      case 4:
        star_one.css({color : "yellow"});
        star_two.css({color : "yellow"});
        star_three.css({color: "yellow"});
        star_four.css({color: "yellow"});
        break;
      case 5:
        star_one.css({color : "yellow"});
        star_two.css({color : "yellow"});
        star_three.css({color: "yellow"});
        star_four.css({color: "yellow"});
        star_five.css({color: "yellow"});
        break;
    };
  });

  $(".star").mouseleave(function() {
    var id = $(this).data("id");
    var star_index = $(this).data("star-index");
    var star_one = $("#" + id + "_star_one");
    var star_two = $("#" + id + "_star_two");
    var star_three = $("#" + id + "_star_three");
    var star_four = $("#" + id + "_star_four");
    var star_five = $("#" + id + "_star_five");

    star_one.removeAttr("style");
    star_two.removeAttr("style");
    star_three.removeAttr("style");
    star_four.removeAttr("style");
    star_five.removeAttr("style");
  });

  $(".star").click(function(e) {
    var id = $(this).data("id");
    var star_index = $(this).data("star-index");
    var star_one = $("#" + id + "_star_one");
    var star_two = $("#" + id + "_star_two");
    var star_three = $("#" + id + "_star_three");
    var star_four = $("#" + id + "_star_four");
    var star_five = $("#" + id + "_star_five");

    switch (star_index) {
      case 1:
        star_one.addClass("starred");
        star_two.removeClass("starred");
        star_three.removeClass("starred");
        star_four.removeClass("starred");
        star_five.removeClass("starred");
        e.stopPropagation();
        break;
      case 2:
        star_one.addClass("starred");
        star_two.addClass("starred");
        star_three.removeClass("starred");
        star_four.removeClass("starred");
        star_five.removeClass("starred");
        e.stopPropagation();
        break;
      case 3:
        star_one.addClass("starred");
        star_two.addClass("starred");
        star_three.addClass("starred");
        star_four.removeClass("starred");
        star_five.removeClass("starred");
        e.stopPropagation();
        break;
      case 4:
        star_one.addClass("starred");
        star_two.addClass("starred");
        star_three.addClass("starred");
        star_four.addClass("starred");
        star_five.removeClass("starred");
        e.stopPropagation();
        break;
      case 5:
        star_one.addClass("starred");
        star_two.addClass("starred");
        star_three.addClass("starred");
        star_four.addClass("starred");
        star_five.addClass("starred");
        e.stopPropagation();
        break;
    };
  });

  $(".rate").click(function() {
    var id = $(this).data("id");
    var star_one = $("#" + id + "_star_one");
    var star_two = $("#" + id + "_star_two");
    var star_three = $("#" + id + "_star_three");
    var star_four = $("#" + id + "_star_four");
    var star_five = $("#" + id + "_star_five");

    star_one.removeClass("starred");
    star_two.removeClass("starred");
    star_three.removeClass("starred");
    star_four.removeClass("starred");
    star_five.removeClass("starred");
  });

  $(".call").mouseenter(function() {
    var phone_number = $(this).data("tel");
    $(this).html(phone_number);
  });

  $(".call").mouseleave(function() {
    var phone_number = $(this).data("tel");
    $(this).html("<i class='material-icons call_icon'>&#xE0B0;</i>");
  });

  $(".email").click(function() {
    var email = $(this).data("email");
    window.location.href = "mailto:" + email + "?subject=Subject&body=message%20goes%20here";
  });

  $(".email").mouseenter(function() {
    var email = $(this).data("email");
    $(this).html(email);
  });

  $(".email").mouseleave(function() {
    var email = $(this).data("email");
    $(this).html("<i class='material-icons email_icon'>&#xE0BE;</i>");
  });
});

function getMap(id, lat, lng) {
  var myCenter = new google.maps.LatLng(lat, lng);
  var mapCanvas = document.getElementById(id);
  var mapOptions = {center: myCenter, zoom: 5, clickableIcons: false, streetViewControl: false, disableDefaultUI: true, mapTypeId: google.maps.MapTypeId.ROADMAP};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);
  setTimeout(function() {
    google.maps.event.trigger(map, 'resize');
  }, 1000);
};
