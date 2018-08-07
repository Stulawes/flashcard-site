$(document).ready(function() {

  function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
  }

  $('div.term').attr('id', function(n) {
    return 't' + (n+1);
  });

  $(".term h3").click(function() {
    var id = $(this).parent().attr("id");
    var destination = "#" + id + " p";
    $(destination).css("background-color",getRandomColor());
    $(destination).show("200ms");
  });
  $("p").click(function() {
    var id = $(this).parent().attr("id");
    var destination = "#" + id + " p";

    $(destination).toggle("200ms");
  });


})
