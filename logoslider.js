$(document).ready(function(){
    $('.logos').slick({
      slidesToShow: 4, 
      slidesToScroll: 1,
      autoplay: true, 
      autoplaySpeed: 2000, 
      dots: true, 
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          }
        }
      ]
    });
  });
  