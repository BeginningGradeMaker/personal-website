const recentsSlide = document.querySelector('.recents-slide');
const recentsImages = document.querySelectorAll('.recents-slide img');

//Buttons
const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');

//Counter
let count = 1;
const size = recentsImages[0].clientWidth;
recentsSlide.style.transform = 'translateX(' + (-960 * count) + 'px)';

//Button Listeners

nextButton.addEventListener('click', ()=> {
  if (count >= recentsImages.length - 1) return;
  recentsSlide.style.transition = "transform 0.4s ease-in-out";
  count++;
  recentsSlide.style.transform = 'translateX(' + (-960 * count) + 'px)';
});

prevButton.addEventListener('click', ()=> {
  if (count <= 0) return;
  recentsSlide.style.transition = "transform 0.4s ease-in-out";
  count--;
  recentsSlide.style.transform = 'translateX(' + (-960 * count) + 'px)';
});

recentsSlide.addEventListener('transitionend', ()=> {
  if (recentsImages[count].id === 'lastClone') {
    recentsSlide.style.transition = 'none';
    count = recentsImages.length - 2;
    recentsSlide.style.transform = 'translateX(' + (-960 * count) + 'px)';
  }
  if (recentsImages[count].id === 'firstClone') {
    recentsSlide.style.transition = 'none';
    count = recentsImages.length - count;
    recentsSlide.style.transform = 'translateX(' + (-960 * count) + 'px)';
  }
})