$( document ).ready(function() { 



//PAUSE VIDEO ON CLOSE MODAL
var video1  = $('#video1')[0];
var video2  = $('#video2')[0];
var video3  = $('#video3')[0];
var video4  = $('#video4')[0];

function stopVideo(){
  video1.pause();
  video1.currentTime = 0;
  video2.pause();
  video2.currentTime = 0;
  video3.pause();
  video3.currentTime = 0;
  video4.pause();
  video4.currentTime = 0;
}

  $("#overlay1").on('click', function(){
    stopVideo();
  });
  $("#overlay2").on('click', function(){
    stopVideo();
  });
  $("#overlay3").on('click', function(){
    stopVideo();
  });
  $("#overlay4").on('click', function(){
    stopVideo();
  });

  //MODAL SCRIPT



  //Modal1
  var $modal1 = $('.modal'),
      $overlay1 = $('.overlay1'),
      $showModal1 = $('.show-modal1'),
      $close1 = $('.close');

      
  $showModal1.on('click', function(e){
    e.preventDefault();
    $overlay1.show();
    $vid.show();
  });

  $close1.on('click', function(){
    $overlay1.hide();
    $vid.hide();
  });

  $overlay1.on('click', function(e) {
    if (e.target !== this) return;
    $overlay1.hide();
    $vid.hide();
  });

  //Modal2
  var $modal2 = $('.modal'),
      $overlay2 = $('.overlay2'),
      $showModal2 = $('.show-modal2'),
      $vid = $('.videosm'),
      $close2 = $('.close');
      
  $showModal2.on('click', function(e){
    e.preventDefault();
    $overlay2.show();
    $vid.show();
  });

  $close2.on('click', function(){
    $overlay2.hide();
    $vid.hide();
  });

  $overlay2.on('click', function(e) {
    if (e.target !== this) return;
    $overlay2.hide();
    $vid.hide();
  });

  //Modal3
  var $modal3 = $('.modal'),
      $overlay3 = $('.overlay3'),
      $showModal3 = $('.show-modal3'),
      $vid = $('.videosm'),
      $close3 = $('.close');
      
  $showModal3.on('click', function(e){
    e.preventDefault();
    $overlay3.show();
    $vid.show();
  });

  $close3.on('click', function(){
    $overlay3.hide();
    $vid.hide();
  });

  $overlay3.on('click', function(e) {
    if (e.target !== this) return;
    $overlay3.hide();
    $vid.hide();
  });

  //Modal4
  var $modal4 = $('.modal'),
      $overlay4 = $('.overlay4'),
      $showModal4 = $('.show-modal4'),
      $vid = $('.videosm'),
      $close4 = $('.close');
      
  $showModal4.on('click', function(e){
    e.preventDefault();
    $overlay4.show();
    $vid.show();
  });

  $close4.on('click', function(){
    $overlay4.hide();
    $vid.hide();
  });

  $overlay4.on('click', function(e) {
    if (e.target !== this) return;
    $overlay4.hide();
    $vid.hide();
  });

  //Hide Video in screens less wide than 500px
  var $frame = $('video source');
  var vidsrc = $frame.attr('src');

  if ($(window).width() < 500) {
    $frame.remove(); 
  } else {
    $frame.attr('src', vidsrc);
  }


});   