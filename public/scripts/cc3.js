$( document ).ready( function(){
  getJokes();
  //event listener
  $( '#addJokeButton' ).on( 'click', function(){
    console.log( 'addJokeButton on click');
    //make joke object
    var objectToSend = {
      jokeQuestion: $('#questionIn').val(),
      punchLine: $('#punchlineIn').val(),
      whoseJoke: $('#whoseJokeIn').val()
    };
    sendJoke(objectToSend);
  }); // end addJokeButton on click
}); // end doc ready

var displayOnDOM = function(array){
  $('#outputDiv').html('');
  for (var i = 0; i < array.length; i++) {
    $('#outputDiv').append('<div class="joke"></div>');
    $el = $('#outputDiv').children().last();
    $el.append('<p>'+ array[i].jokeQuestion +'</p>');
    $el.append('<p>'+ array[i].punchLine +'</p>');
    $el.append('<p>'+ array[i].whoseJoke +'</p>');
  }
}; // end displayOnDOM

var getJokes = function(){
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
}; // end getJokes

var sendJoke = function(object){
  console.log('in sendJoke');
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
}; // end sendJoke
