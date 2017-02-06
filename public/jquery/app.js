$(document).ready(function(){
   if (jQuery) {
      console.log('jQuery loaded!');
   } else {
      console.log("jQuey doesn't load");
   }
});


$(document).ready(function() {
   $('a[href^="#"]').on('click', function(e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      //scroll and show hash
      $('html, body').animate({
         'scrollTop': $target.offset().top
      }, 1000, 'swing', function() {
         window.location.hash = target;
      });

   });
});
