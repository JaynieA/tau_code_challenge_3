console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );

  $.ajax({
    type: 'GET',
    url: '/getJokes',
    success: function(response){
      console.log('get success. response:', response);
      for (var i = 0; i < response.length; i++) {
        console.log(response[i].jokeQuestion);
        console.log(response[i].punchLine);
        console.log(response[i].whoseJoke);
      }
    },
    error: function(err){
      console.log('error on GET.', err);
    }
  });

  $( '#addJokeButton' ).on( 'click', function(){
    console.log( 'addJokeButton on click');
  }); // end addJokeButton on click


}); // end doc ready
