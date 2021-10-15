function getWheatherdia1() {
  var url =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    $("#city").val() +
    "&appid=cb5bc5de9d0c7381673d98645fd1a28f";
  $.ajax({
    url: url,
    type: "GET",
  }).done(function (response) {
    var result = "";
    var tiempo = response.weather[0];
    result +=
      "<div class='card'><div class='row g-0'><div class='col-5 col-sm-4'>";
    result += getImg(tiempo.main);
    result +=
      "</div><div class='col-7 col-sm-8'><div class='card-body'><h1 class='card-title'>" +
      tiempo.main +
      "</h1></div></div></div>";

    $("#result").html(result);
  });
}
function getWheatherdia5() {
  var url =
    "http://api.openweathermap.org/data/2.5/forecast?q=" +
    $("#city").val() +
    "&appid=cb5bc5de9d0c7381673d98645fd1a28f";
  $.ajax({
    url: url,
    type: "GET",
  }).done(function (resultado) {
    var result = "<ul class='list-group'>";
    var tiempo = resultado.list;

    for (let index = 4; index < tiempo.length; index += 8) {
      result += "<li class='list-group'>";
      result +=
        "<div class='card'><div class='row g-0'><div class='col-5 col-sm-4'>";
      result += getImg(tiempo[index].weather[0].main);
      result +=
        "</div><div class='col-7 col-sm-8'><div class='card-body'><h1 class='card-title'>" +
        tiempo[index].weather[0].main +
        "</h1></div></div></div></li>";
    }
    result += "</ul>";
    $("#result").html(result);
  });
}
function getImg(nombre) {
  switch (nombre) {
    case "Thunderstorm":
      resultado =
        "<img src='http://openweathermap.org/img/wn/11d@2x.png' class='img-fluid' alt='Thunderstorm'>";
      break;
    case "Drizzle":
      resultado =
        "<img src='http://openweathermap.org/img/wn/09d@2x.png' alt='Drizzle'>";
      break;
    case "Rain":
      resultado =
        "<img src='http://openweathermap.org/img/wn/10d@2x.png' alt='Rain'>";
      break;
    case "Snow":
      resultado =
        "<img src='http://openweathermap.org/img/wn/13d@2x.png' alt='Snow'>";
      break;
    case "Clear":
      resultado =
        "<img src='http://openweathermap.org/img/wn/01d@2x.png' alt='Clear'>";
      break;
    case "Clouds":
      resultado =
        "<img src='http://openweathermap.org/img/wn/04d@2x.png' alt='Clouds'>";
      break;

    default:
      resultado = "";
      break;
  }
  return resultado;
}
$(function () {
  $("#dia1").on("click", function () {
    getWheatherdia1();
    $("#dia1").addClass("active");
    $("#dia5").removeClass("active");
  });
  $("#dia5").on("click", function () {
    getWheatherdia5();
    $("#dia1").removeClass("active");
    $("#dia5").addClass("active");
  });
});
