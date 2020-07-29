function addMusic(){
  $.ajax({
    url:'https://flynn.boolean.careers/exercises/api/array/music',
    method:'GET',
    success: function(data, state){
      var success = data['success'];
      var value = data['response'];

      console.log(value);
    },
    error: function(request, state, error){
      console.log('request', request);
      console.log('state', state);
      console.log('error', error);
    }
  });
}

function init(){
  addMusic();
}

$(document).ready(init);
