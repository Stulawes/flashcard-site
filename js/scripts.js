$(document).ready(function() {

  $('div.term').attr('id', function(n) {
    return 't' + (n+1);
  });

  $(".term").click(function() {
    var id = $(this).attr('id');
    var destination = "#" + id + " p";
    alert(destination);
    $(destination).slideDown();
  });
  $(".definition").click(function() {
    $(".definition").slideUp();
  });
})
