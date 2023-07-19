  $(document).ready(function(){
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });


      $('.main').hide(1);

      $('.shoesin').mousemove(function(){
          $('.main').fadeIn(100);
      })

      $('.shoesin').mouseout(function(){
          $('.main').fadeOut(100);
      })

      $('.main').mousemove(function(){
          $('.main').show(100);
      })

      $('.shoesin').mouseout(function(){
          $('.main').fadeOut(100);
      })

          
    
  });









