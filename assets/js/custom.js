(function($) {
  var toggle = document.getElementById("menu-toggle");
  var menu = document.getElementById("menu");
  var close = document.getElementById("menu-close");

  if (toggle && menu) {
    toggle.addEventListener("click", function() {
      menu.classList.toggle("open");
    });
  }

  if (close && menu) {
    close.addEventListener("click", function() {
      menu.classList.remove("open");
    });
  }

  $(window).on("resize", function() {
    if ($(window).width() < 846) {
      $(".main-menu a").off("click").on("click", function() {
        if (menu) menu.classList.remove("open");
      });
    }
  });

  $(".hover").mouseleave(function() {
    $(this).removeClass("hover");
  });

  $(".isotope-wrapper").each(function() {
    var $isotope = $(".isotope-box", this);
    var $filterCheckboxes = $('input[type="radio"]', this);

    var filter = function() {
      var type = $filterCheckboxes.filter(":checked").data("type") || "*";
      if (type !== "*") type = '[data-type="' + type + '"]';
      $isotope.isotope({ filter: type });
    };

    $isotope.isotope({
      itemSelector: ".isotope-item",
      layoutMode: "masonry"
    });

    $(this).on("change", filter);
    filter();
  });

  if (typeof lightbox !== "undefined") {
    lightbox.option({
      resizeDuration: 200,
      wrapAround: true
    });
  }
})(jQuery);