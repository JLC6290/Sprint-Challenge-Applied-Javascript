/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function createCarousel() {
  const carousel = document.createElement('div'),
    leftButton = document.createElement('div'),
    rightButton = document.createElement('div'),
    img1 = document.createElement('img'),
    img2 = document.createElement('img'),
    img3 = document.createElement('img'),
    img4 = document.createElement('img');

  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');
  img1.src = './assets/carousel/mountains.jpeg';
  img2.src = './assets/carousel/computer.jpeg';
  img3.src = './assets/carousel/trees.jpeg';
  img4.src = './assets/carousel/turntable.jpeg';

  carousel.append(leftButton, img1, img2, img3, img4, rightButton);

  var images = [img1, img2, img3, img4];
  var counter = 0;
  rightButton.addEventListener('click', (event) => {
    if(counter > 3) {
      counter = 0;
      images[3].style.display = 'none';
    }
    images[counter].style.display = 'block';
    if(counter > 0) {images[counter-1].style.display = 'none';}
    counter++;
  })
  leftButton.addEventListener('click', (event) => {
    counter--;
    if(counter < 0) {
      counter = 3;
      images[0].style.display = 'none';
    }
    images[counter].style.display = 'block';
    if(counter < 3) {images[counter+1].style.display = 'none';}
  })

  return carousel;
}

document.querySelector('.carousel-container').append(createCarousel());



// var slideIndex = 1;
// showDivs(slideindex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.querySelectorAll('.carousel img');
//   if(n > x.length) {slideIndex = 1}
//   if(n < 1) {slideIndex = x.length};
//   for(i = 0; i < x.length; i++) {
//     x[i].style.display = 'none';
//   }
//   x[slideIndex-1].style.display = 'block';
// }