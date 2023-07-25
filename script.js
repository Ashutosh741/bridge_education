
// function handleLeftSliderClick() {
//     const currentSlider = document.querySelector('.currentCircle');
//     const smallCircles = document.querySelectorAll('.smallCircle');
  
//     // Move currentSlider to left
//     currentSlider.classList.remove('currentCircle');
//     currentSlider.classList.add('smallCircle');
  
//     // Move last smallCircle to current position
//     smallCircles[smallCircles.length - 1].classList.remove('smallCircle');
//     smallCircles[smallCircles.length - 1].classList.add('currentCircle');
//     console.log("hyy")
//     console.log("aisa kya hai bhai",smallCircles[smallCircles.length - 1])
//   }
  
//   // Function to handle the click event for rightSlider
//   function handleRightSliderClick() {
//     const currentSlider = document.querySelector('.currentCircle');
//     const smallCircles = document.querySelectorAll('.smallCircle')[1];
  
//     // Move currentSlider to right
//     currentSlider.classList.remove('currentCircle');
//     currentSlider.classList.add('smallCircle');
  
//     // Move first smallCircle to current position
//     smallCircles[0].classList.remove('smallCircle');
//     smallCircles[0].classList.add('currentCircle');
//     console.log("hello")
//   }
  
//   // Add event listeners to leftSlider and rightSlider
//   const leftSlider = document.querySelector('.bigCircle.position-relative');
//   const rightSlider = document.querySelectorAll('.bigCircle.position-relative');
  
//   leftSlider.addEventListener('click', handleLeftSliderClick);
//   rightSlider.addEventListener('click', handleRightSliderClick);
  

//   function showContent(circleId) {
//     const currentCircle = document.getElementById(circleId);
//     const allCircles = document.querySelectorAll('.smallCircle, .currentCircle');
  
//     allCircles.forEach(circle => {
//       if (circle === currentCircle) {
//         circle.style.display = 'block'; // Show the clicked circle's content
//       } else {
//         circle.style.display = 'none';  // Hide other circle's content
//       }
//     });
//   }
  

  

console.log("hello connected")


// $('.slider').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
// });
	


$('.slider').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
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



$('.processSlider').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
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