$(function () {
    clickableCard();
});

function clickableCard() {
    $(document).delegate("div.card-click", "click", function(e) {
      e.stopImmediatePropagation();
      window.location = $(this).find("a").attr("href");
   });
  }