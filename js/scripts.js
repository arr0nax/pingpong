$(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    number = parseInt($('#input').val());
    populator(number);
    $('body').css("background-image", "url(img/clapping1.gif)");
    $('.result').show();

  })
  ////////GLOBAL VARIABLES
  var resultarray = []
  var bounce = 1



  ////////FUNCTIONS
  var populator = function(number) {
    for (var i=0;i<number;i++) {
      if ((i+1) % 15 === 0) {
        resultarray[i]=("ping-pong")
        // $('#list').append("<li>"+"ping-pong"+"</li>")
      } else if ((i+1) % 5 === 0) {
        resultarray[i]=("pong")
        // $('#list').append("<li>"+"pong"+"</li>")
      } else if ((i+1) % 3 === 0) {
        resultarray[i]=("ping")
        // $('#list').append("<li>"+"ping"+"</li>")
      } else {
        resultarray[i]=((i+1))
        // $('#list').append("<li>"+(i+1)+"</li>")
      }
    }
    $('.arrays').append(resultarray);
    var array = resultarray.join('<br/>')
    $('#list2').text(array);
  }

  var bouncearound = function() {
    console.log(bounce);
    if (bounce%2 != 0) {
      bounceright();
      bounce = bounce + 1;
    } else {
      bounceleft();
      bounce = bounce + 1;
    }
    $('#bouncecount').text(bounce);
  }

  var bounceright = function() {
    $('.arrays').animate({marginLeft: "120vw"},'slow')
  }

  var bounceleft = function(array) {
    $('.arrays').animate({marginLeft: "-100vw"},'slow')
  }

  /////////GLOBAL FUNCTIONS

    $('body').keypress(function(){
      bouncearound();
    })
});
