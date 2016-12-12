$( document ).ready( function(){
  init();
}); // end doc ready

var init = function(){
  console.log('in init');
  getJokes();
  $( '#addJokeButton' ).on( 'click', makeAndSubmitJoke);
}; // end init

var displayOnDOM = function(array){
  $('#outputDiv').html('');
  for (var i = 0; i < array.length; i++) {
    $('#outputDiv').append('<div class="col-sm-4"></div>');
    $wrapper = $('#outputDiv').children().last();
    $wrapper.append('<div class="joke"></div>');
    $el = $wrapper.children().last();
    $el.append('<p><span class="indicator">Q: </span>'+ array[i].jokeQuestion +'</p>');
    $el.append('<p><span class="indicator">A: </span>'+ array[i].punchLine +'</p>');
    $el.append('<p><span class="indicator">&rarr; </span>'+ array[i].whoseJoke +'</p>');
  } // end for
}; // end displayOnDOM

var getJokes = function(){
  console.log('in getJokes');
  $.ajax({
    type: 'GET',
    url: '/getJokes',
    success: function(response){
      console.log('get success. response:', response);
      displayOnDOM(response);
    }, // end success
    error: function(err){
      console.log('error on GET.', err);
    } // end error
  }); // end ajax GET
}; // end getJokes

var makeAndSubmitJoke = function(){
  console.log('in makeAndSubmitJoke');
  //clear input values
  $('input').val('');
  //make joke object
  var objectToSend = {
    jokeQuestion: $('#questionIn').val(),
    punchLine: $('#punchlineIn').val(),
    whoseJoke: $('#whoseJokeIn').val()
  }; // end objectToSend
  sendJoke(objectToSend);
}; // end makeAndSubmitJoke

var sendJoke = function(object){
  console.log('in sendJoke');
  $.ajax({
    type: 'POST',
    url: '/postJoke',
    data: object,
    success: function(response){
      console.log('post success. Response', response);
      displayOnDOM(response);
    }, // end success
    error: function(err){
      console.log('post error:', err);
    } // end error
  }); // end ajax POST
}; // end sendJoke
