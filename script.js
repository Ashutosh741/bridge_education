const reqarr = [1,2,3,4,5,6,7,8];
console.log(typeof(reqarr))

// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     responsiveClass:true,
//     responsive:{
//         0:{
//             items:1,
//             nav:true
//         },
//         600:{
//             items:3,
//             nav:false
//         },
//         1000:{
//             items:5,
//             nav:true,
//             loop:false
//         }
//     }
// })

// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel();
//   });


// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// })


// document.getElementById('playVid').onclick = function () {
//     document.getElementById('video').play();
// };


// Function to handle the click event for leftSlider
function handleLeftSliderClick() {
    const currentSlider = document.querySelector('.currentCircle');
    const smallCircles = document.querySelectorAll('.smallCircle');
  
    // Move currentSlider to left
    currentSlider.classList.remove('currentCircle');
    currentSlider.classList.add('smallCircle');
  
    // Move last smallCircle to current position
    smallCircles[smallCircles.length - 1].classList.remove('smallCircle');
    smallCircles[smallCircles.length - 1].classList.add('currentCircle');
    console.log("hyy")
  }
  
  // Function to handle the click event for rightSlider
  function handleRightSliderClick() {
    const currentSlider = document.querySelector('.currentCircle');
    const smallCircles = document.querySelectorAll('.smallCircle');
  
    // Move currentSlider to right
    currentSlider.classList.remove('currentCircle');
    currentSlider.classList.add('smallCircle');
  
    // Move first smallCircle to current position
    smallCircles[0].classList.remove('smallCircle');
    smallCircles[0].classList.add('currentCircle');
    console.log("hello")
  }
  
  // Add event listeners to leftSlider and rightSlider
  const leftSlider = document.querySelector('.bigCircle.position-relative');
  const rightSlider = document.querySelectorAll('.bigCircle.position-relative')[1];
  
  leftSlider.addEventListener('click', handleLeftSliderClick);
  rightSlider.addEventListener('click', handleRightSliderClick);
  