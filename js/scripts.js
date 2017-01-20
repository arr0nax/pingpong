$(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    number = parseInt($('#input').val());
    console.log(number);
    populator(number);
    $('body').css("background-image", "url(img/clapping1.gif)");
    $('.result').show();
    bounceright();
  })
  ////////GLOBAL VARIABLES
  var resultarray = []



  ////////FUNCTIONS
  var populator = function(number) {
    for (var i=0;i<number;i++) {
      if ((i+1) % 15 === 0) {
        resultarray[i]=("ping-pong")
        $('#list').append("<li>"+"ping-pong"+"</li>")
      } else if ((i+1) % 5 === 0) {
        resultarray[i]=("pong")
        $('#list').append("<li>"+"pong"+"</li>")
      } else if ((i+1) % 3 === 0) {
        resultarray[i]=("ping")
        $('#list').append("<li>"+"ping"+"</li>")
      } else {
        resultarray[i]=((i+1))
        $('#list').append("<li>"+(i+1)+"</li>")
      }
    }
    $('.arrays').append(resultarray+" ");
  }

  var bounceright = function() {
    $('.arrays').animate({marginLeft: "90vw"},'slow','swing',bounceleft())
  }

  var bounceleft = function(array) {
    $('.arrays').animate({marginRight: "90vw"},'slow','swing',bounceright())
  }

});
