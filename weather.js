let city = "Kharkiv";
const server =
  "https://api.openweathermap.org/data/2.5/weather?q=" +
  city +
  "&APPID=89ea4480f451ffd24b79617df1ba2bb0";
$("#weather_button").click(function () {
  $.getJSON(server, function (result) {
    //   $.each(result, function (i, field) {
    //     $("#books").append(`<h2> ${i}  ${field.title}</h2>`);
    //   });
    console.log(result);
    console.log(result.weather[0].main + " " + result.weather[0].description);
    console.log(result.coord.lat + " " + result.coord.lon);
  });
});
