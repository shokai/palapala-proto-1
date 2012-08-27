var play = function(){
  display(0);
};

var display = function(i){
  if(!i) i = 0;
  var imgs = $('#imgs img');
  if(i > imgs.length - 1) i = 0;
  if(imgs.length > 0) $('.main img').attr('src', imgs[i].src);
  setTimeout(function(){
    display(i+1);
  }, 200);
};

$(function(){
  $('#camera').change(function(e){
    var reader = new FileReader();
    reader.onload = function(e){
      var img = $('<img>').attr('src', reader.result).attr('width', 160).attr('height', 120);
      $('#imgs').append(img);
    };
    reader.readAsDataURL(e.currentTarget.files[0]);
  });

  play();
});
