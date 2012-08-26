$(function(){
  console.log('start');
  $('#camera').change(function(e){
    var reader = new FileReader();
    reader.onload = function(e){
      var img = $('<img>').attr('src', reader.result);
      $('#imgs').append(img);
    };
    reader.readAsDataURL(e.currentTarget.files[0]);
  });
});