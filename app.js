$(document).ready(function () {

    $(".ask").hide();
    $(".ques").hide();
    $(".btns").hide();
    $("#robot-face").click(function () {
      // $("#inner-faqs").show(2000);
      $("#ask").delay(2000).fadeIn(3000);
      $("#ques1").delay(4000).fadeIn(3000);
      $("#ques2").delay(6000).fadeIn(3000);
      $("#ques3").delay(8000).fadeIn(3000);
      $("#ques4").delay(10000).fadeIn(3000);
      $("#btns").delay(12000).fadeIn(3000);
    });
    $("#minimize").click(function () {
      $("#inner-container").fadeOut(2000);
      $(".robot-face2").show(3000);
    })
    $(".static-face").click(function (){
      $(".inner-faqs").fadeIn(2000);
      $(".static-faqs").hide();
    })
    $(".robot-face2").click(function(){
      $(".inner-container").show(1000);
      $(".robot-face2").hide(2000);
    });
  });