$(function () {
  $("#btnhome").on("click", function () {
    $("#home").show();
    $("#seach").hide();
  });
  $("#btnseach").on("click", function () {
    $("#home").hide();
    $("#seach").show();
  });
  $("#btnhome").click();
});
