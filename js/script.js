
  // Menu Fixed
  let main_menu = document.querySelector('.main_menu')

  window.addEventListener('scroll', ()=>{
    let scrolling = this.scrollY
  
    if(scrolling > 100){
      main_menu.classList.add('fixed_menu')
    }
    else{
      main_menu.classList.remove('fixed_menu')
    }
  })

// }}}}} Start Card Slider {{{{{{{{{
  $('.card_row').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows:false,
          dots: true,
          dotsClass:true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

