$(document).ready(function(){
  $("form#fortune_teller").submit(function(event) {

  $("#good-responses").show();
  var userResponses=0;
  $("input:checkbox[name=good-fortune]:checked").each(function() {
    var goodLuck = $(this).val();
    // userResponses.push(goodLuck);
    $("#good-responses").append(goodLuck + "<br>");
  });

  $("#bad-responses").show();
  $("input:checkbox[name=bad-fortune]:checked").each(function() {
    var badLuck = $(this).val();
    $("#bad-responses").append(badLuck + "<br>");
    userResponses+=1;
  });
  console.log(userResponses);
   if (userResponses > 2) {
     alert("yay!");
   }
  $("#fortune_teller").hide();
  event.preventDefault();
  });
});

 // if (userResponses > 4) {
 //   goodLuck = "yay!";
 // }
 // if else {
 //   $("#bad-responses").text(badLuck)
 // }
