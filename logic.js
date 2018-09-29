var currentGif; var pausedGif; var animatedGif; var stillGif;
$.each(currentGif, function(index, value) {
    animatedGif= value.images.original.url;
    pausedGif = value.images.original.still.url;
    var thisRating = value.rating;
    if(thisRating == ''){

    }
    var rating = $('<h5>').html('Rated: '+thisRating).addClass('ratingStyle');
    stillGif= $('<img>').attr('data-animated', animatedGif).attr('data-paused', pausedGif).attr('src', pausedGif);
    var fullGifDisplay = $('<button>').append(rating, stillGif);
    $('.display').append(fullGifDisplay);
});

$(document).on('mouseover','.playOnHover', function(){
  $(this).attr('src', $(this).data('animated'));
});

$(document).on('mouseleave','.playOnHover', function(){
  $(this).attr('src', $(this). data('paused'));

});

$('#addShow').on('click', function(){
  var newShow = $('#newShowInput').val().trim();
  showTitle.push(newShow);
  createButtons();
  return false;
});

createButtons();