function changeBg(){
    const image = [
        'url("./Img/1.jpg")',
        'url("./Img/2.jpg")',
        'url("./Img/3.jpg")',
    ]
    
    const showcase = document.getElementById('showcase');
    const bg = image[Math.floor(Math.random() * image.length)];
    showcase.style.backgroundImage = bg;
    showcase.style.transitionDuration = '1s';
}

setInterval(changeBg,2000)



const slides = document.querySelectorAll('.slide');
const leftbtn = document.getElementById('left');
const rightbtn = document.getElementById('right');
let activeSlide=0

rightbtn.addEventListener('click',() => {
    activeSlide++;
    if (activeSlide >= slides.length - 1) {
        activeSlide=0;
    }

    setActiveSlide();
})

leftbtn.addEventListener('click',() =>{
    activeSlide--;
    if(activeSlide < 0) {
        activeSlide = slides.length - 2;
    }

    setActiveSlide();
})

function setActiveSlide() {
    slides.forEach((slide) => slide.classList.remove('active'))

    slides[activeSlide].classList.add('active')
    slides[activeSlide+1].classList.add('active')
  }

  