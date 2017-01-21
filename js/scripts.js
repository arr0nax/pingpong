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
    resultarray = []
    for (var i=0;i<number;i++) {
      if ((i+1) % 15 === 0) {
        resultarray[i]=("ping-pong")
        $('.secondrow').append('<img class="imglist" src="img/pingpong.gif">')
      } else if ((i+1) % 5 === 0) {
        resultarray[i]=("pong")
        $('.secondrow').append('<img class="imglist" src="img/clap.gif">')
      } else if ((i+1) % 3 === 0) {
        resultarray[i]=("ping")
        $('.secondrow').append('<img class="imglist" src="img/clap2.gif">')
      } else {
        resultarray[i]=((i+1))
        $('.secondrow').append('<img class="imglist" src="img/gameshow.gif">')
      }
      console.log('image?')
    }
    var array = resultarray.join('<br>')
    $('#list').html(array);
  }

  var bouncearound = function() {
    console.log(bounce);
    if (bounce%2 != 0) {
      $('.arrays').text("ping");
      bounceright();
      bounce = bounce + 1;
    } else {
      $('.arrays').text("pong");
      bounceleft();
      bounce = bounce + 1;
    }
    $('#bouncecount').text(bounce);
  }

  var bounceright = function() {
    $('.arrays').animate({marginLeft: "110vw"},'slow','swing')

  }

  var bounceleft = function(array) {
    $('.arrays').animate({marginLeft: "-10vw"},'slow','swing')
  }

  /////////GLOBAL FUNCTIONS

    $('body').keypress(function(){
      bouncearound();
    })
});
