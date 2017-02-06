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

      $('html, body').animate({
         'scrollTop': $target.offset().top
      }, 1000, 'swing');
   });
});
