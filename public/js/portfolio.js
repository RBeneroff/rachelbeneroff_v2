$(function () {
    document.querySelector('meta[name="theme-color"]').setAttribute("content", "#fff");

    clickableCard();
});

function clickableCard() {
    $(document).delegate("div.card-click", "click", function(e) {
      e.stopImmediatePropagation();
      window.location = $(this).find("a").attr("href");
   });
  }
