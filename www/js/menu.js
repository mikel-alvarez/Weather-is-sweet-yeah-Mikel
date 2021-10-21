$(function () {
  $("#btnhome").on("click", function () {
    $("#home").show();
    $("#seach").hide();
    $("#location").hide();
  });
  $("#btnseach").on("click", function () {
    $("#home").hide();
    $("#seach").show();
    $("#location").hide();
  });
  $("#btnhome").click();
  $("#btnlocation").on("click", function () {
    $("#home").hide();
    $("#seach").hide();
    $("#location").show();
    geoLocationGet();
  });
});
