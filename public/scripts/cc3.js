console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );

  $.ajax({
    type: 'GET',
    url: '/getJokes',
    success: function(response){
      console.log('get success. response:', response);
      displayOnDOM(response);
    },
    error: function(err){
      console.log('error on GET.', err);
    }
  });

  $( '#addJokeButton' ).on( 'click', function(){
    console.log( 'addJokeButton on click');
    sendJoke();
  }); // end addJokeButton on click
}); // end doc ready

var sendJoke = function(object){
  $.ajax({
    type: 'POST',
    url: '/postJoke',
    data: object,
    success: function(response){
      console.log('post success. Response', response);
      displayOnDOM(response);
    },
    error: function(err){
      console.log('post error:', err);
    }
  });
};

var displayOnDOM = function(array){
  $('#outputDiv').html('');
  for (var i = 0; i < array.length; i++) {
    $('#outputDiv').append('<div class="joke"></div>');
    $el = $('#outputDiv').children().last();
    $el.append('<p>'+ array[i].jokeQuestion +'</p>');
    $el.append('<p>'+ array[i].punchLine +'</p>');
    $el.append('<p>'+ array[i].whoseJoke +'</p>');
  }
};
