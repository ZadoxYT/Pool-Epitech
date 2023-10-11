document.addEventListener('DOMContentLoaded', function() {
    new Splide('#latest-creations-carousel', {
      type: 'loop',
      perPage: 3, 
      autoplay: true,
      interval: 5000,
      focus: 'center',
      gap: '1rem',
      padding: {
        left: '1rem',
        right: '1rem',
      },
      slideFocus : true,
      breakpoints: {
        768: {
          perPage: 2,
        },
        576: {
          perPage: 1, 
        }
      }
    }).mount();
  });