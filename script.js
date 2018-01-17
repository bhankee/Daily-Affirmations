var count = 15;
var fontSize = 14;
var fontFinal = fontSize + 'px';

$('.add').on('click', function(event) {
  event.preventDefault();
  //GRAB VALUE OF TEXT BOX
  var holdText = $('.affirmation').val();
  console.log(holdText);
  //MAKE NEW LI TAG
  var newLi = $('<li class="listItem">').text(holdText);

  if (count == 15) {
    //APPEND LI ONTO UL TAG (CLASS=LIST)
    $('.listGroup').prepend(newLi);
  } else if ($('.affirmation').val()) {
    $('.listItem').css('font-size', fontSize);

    console.log(fontSize);
  } else {
  }
  fontSize += 2;

  $('.affirmation').val('');

  //HOLD COUNT
  if (count > 0) {
    $('.counter').text(count - 1);
    count = count - 1;
  } else {
    $('.counter').text(0);
  }
});

console.log('Cool');
