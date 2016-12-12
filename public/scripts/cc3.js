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
  }); // end addJokeButton on click

  $.ajax({
    type: 'POST',
    url: '/postJoke',
    data: {
      jokeQuestion: "why did the chicken?",
      punchLine: "idk",
      whoseJoke: 'me'
    },
    success: function(response){
      console.log('post success. Response', response);
    },
    error: function(err){
      console.log('post error:', err);
    }
  });


}); // end doc ready

var displayOnDOM = function(array){
  for (var i = 0; i < array.length; i++) {
    $('#outputDiv').append('<div class="joke"></div>');
    $el = $('#outputDiv').children().last();
    $el.append('<p>'+ array[i].jokeQuestion +'</p>');
    $el.append('<p>'+ array[i].punchLine +'</p>');
    $el.append('<p>'+ array[i].whoseJoke +'</p>');
  }
};
