$(document).ready(function() {

  $('div.term').attr('id', function(n) {
    return 't' + (n+1);
  });

  $(".term h3").click(function() {
    var id = $(this).parent().attr("id");
    var destination = "#" + id + " p";
    alert(destination);
    $(destination).slideDown();
  });
  $("p").click(function() {
    var id = $(this).parent().attr("id");
    var destination = "#" + id + " p";
    alert(destination);
    $(destination).slideUp();
  });
})
