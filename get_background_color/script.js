$(".common").click(function () {
  let colorClicked = $(this).css("background-color");
  $(".result").html("<h1>The Color is " + colorClicked + "</h1>");
});
