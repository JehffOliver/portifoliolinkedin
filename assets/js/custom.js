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

  $(".main-menu a").on("click", function() {
    if ($(window).width() < 846 && menu) {
      menu.classList.remove("open");
    }
  });

  if ($(".isotope-wrapper").length && $.fn.isotope) {
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
  }

  if (typeof lightbox !== "undefined") {
    lightbox.option({
      resizeDuration: 200,
      wrapAround: true
    });
  }
})(jQuery);