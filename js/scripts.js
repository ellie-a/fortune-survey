$(document).ready(function(){
  $("form#fortune_teller").submit(function(event) {

  $("#good-responses").show();

  $("input:checkbox[name=good-fortune]:checked").each(function() {
    var goodLuck = $(this).val();
    $("#good-responses").append(goodLuck + "<br>");
  });

  $("#bad-responses").show();
  $("input:checkbox[name=bad-fortune]:checked").each(function() {
    var badLuck = $(this).val();
    $("#bad-responses").append(badLuck + "<br>");
  });
  $("#fortune_teller").hide();
  event.preventDefault();
  });
});
