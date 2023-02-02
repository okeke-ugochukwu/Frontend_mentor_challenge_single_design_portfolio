var workSlider = document.querySelector('.workSlide-slider');
var leftScrollBtn = document.querySelector('.scollLeft-btn');
var rightScrollBtn = document.querySelector('.scrollRight-btn');

var slide = document.querySelector('.slide-item');

function scrollToMiddle() {
   window.addEventListener('load', () => {
      workSlider.scrollLeft =  (workSlider.scrollWidth - workSlider.clientWidth ) / 2;
   });

}

leftScrollBtn.addEventListener('click', ()=> {
   workSlider.scrollLeft -= slide.clientWidth
})

rightScrollBtn.addEventListener('click', ()=> {
   workSlider.scrollLeft += slide.clientWidth
})

scrollToMiddle();