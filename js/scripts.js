$(document).ready(function() {

  var divCount = $("div.term").length;
  var originalId = "";
  var divTerm="";
  var i = 0;
  for (i = 0; i < divCount; i++) {
    originalId = "t" + i.toString();

    $("div.term").attr('id', originalId);
    continue;
  }

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
