$("button").click(function () {
  $.getJSON("books.json", function (result) {
    $.each(result, function (i, field) {
      $("#books").append(`<h2> ${i}  ${field.title}</h2>`);
    });
  });
});
