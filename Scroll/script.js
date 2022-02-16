$(".common").on("scroll", function () {
  $(".display").html(
    "Left of the  Paragraph are:" +
      $(".common").scrollLeft() +
      ", Top is :" +
      $(".common").scrollTop()
  );
});
