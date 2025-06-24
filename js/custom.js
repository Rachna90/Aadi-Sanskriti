$('.hero-slider').owlCarousel({
    loop:true,
    margin:0,
     dots: true,
  autoplay: true,
autoplayTimeout:5000,
autoplayHoverPause:false,
center:true,
 touchDrag: true,
  mouseDrag: true,
    smartSpeed: 2000,

    responsive:{
        0:{
            items:1,
         },
        768:{
            items:1,
         },
        1000:{
            items:1
        }
    }
});



 
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });
  
 
  var swiper = new Swiper(".courseSwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
     navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
    grabCursor: true,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      992: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });
  var swiper = new Swiper(".addiSwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
     navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
    grabCursor: true,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      992: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });
  



  
