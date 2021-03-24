/* jQuery Pre loader
  -----------------------------------------------*/

/* Preloader */
$(window).on("load", function () {
  var preloaderFadeOutTime = 1500;
  function hidePreloader() {
    var preloader = $(".spinner-wrapper");
    setTimeout(function () {
      preloader.fadeOut(preloaderFadeOutTime);
    }, 1500);
  }
  hidePreloader();
});

/* Navigation Bar
  -----------------------------------------------*/
$(document).ready(function () {
  "use strict";

  // Navbar Sticky

  (function () {
    var docElem = document.documentElement,
      didScroll = false,
      stickynav = 50;
    document.querySelector(".nav-container");
    function init() {
      window.addEventListener(
        "scroll",
        function () {
          if (!didScroll) {
            didScroll = true;
            setTimeout(scrollPage, 50);
          }
        },
        false
      );
    }

    function scrollPage() {
      var sy = scrollY();
      if (sy >= stickynav) {
        $(".nav-container").addClass("sticky");
      } else {
        $(".nav-container").removeClass("sticky");
      }
      didScroll = false;
    }

    function scrollY() {
      return window.pageYOffset || docElem.scrollTop;
    }
    init();
  })();
});

$(document).ready(function () {
  "use strict";

  $(".menu-container").each(function (index) {
    $(this).find(".circle").attr("menu-link", index);
    $(this)
      .find(".list-menu")
      .clone()
      .appendTo("body")
      .attr("menu-link", index);
  });

  $(".menu-container .circle").click(function () {
    var linkedVideo = $("section")
      .closest("body")
      .find('.list-menu[menu-link="' + $(this).attr("menu-link") + '"]');
    linkedVideo.toggleClass("reveal-modal");
  });

  $("section")
    .closest("body")
    .find(".close-iframe")
    .click(function () {
      $(this).closest(".list-menu").toggleClass("reveal-modal");
    });

  /* Contact Form */
  $("#contactForm")
    .validator()
    .on("submit", function (event) {
      if (event.isDefaultPrevented()) {
        // handle the invalid form...
        cformError();
        csubmitMSG(false, "Please fill all fields!");
      } else {
        // everything looks good!
        event.preventDefault();
        csubmitForm();
      }
    });

  function csubmitForm() {
    // initiate variables with form content
    var name = $("#cname").val();
    var email = $("#cemail").val();
    var message = $("#cmessage").val();



  function cformSuccess() {
    $("#contactForm")[0].reset();
    csubmitMSG(true, "Message Submitted!");
    $("input").removeClass("notEmpty"); // resets the field label after submission
    $("textarea").removeClass("notEmpty"); // resets the field label after submission
  }

  function cformError() {
    $("#contactForm")
      .removeClass()
      .addClass("shake animated")
      .one(
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
        function () {
          $(this).removeClass();
        }
      );
  }

  function csubmitMSG(valid, msg) {
    if (valid) {
      var msgClasses = "h5 text-center fadeInUp animated";
    } else {
      var msgClasses = "h5 text-center fadeInUp animated";
    }
    $("#cmsgSubmit").removeClass().addClass(msgClasses).text(msg);
  }

  /* wow
  -------------------------------*/
  new WOW({ mobile: true }).init();
});
