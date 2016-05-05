$(document).ready(function(){
  $.get("http://www.omdbapi.com/?t=rambo", function(data){
    console.log(data);
    for(var key in data){
    $('body').append('<p>' + data[key] + '</p>');
  }


  });
});
