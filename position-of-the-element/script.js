$(".a").on("mouseover", function () {
  let pos = $(".a").getBoundingClientRect();
  $(".output").html("X : " + pos.x + "Y : " + pos.y);
});
