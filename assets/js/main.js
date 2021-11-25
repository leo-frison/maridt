/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.home__title', {})
sr.reveal('.home__scroll', {delay: 200})
sr.reveal('.home__img', {origin:'right', delay: 400})

/*SCROLL ABOUT*/
sr.reveal('.about__img', {delay: 500})
sr.reveal('.about__subtitle', {delay: 300})
sr.reveal('.about__profession', {delay: 400})
sr.reveal('.about__text', {delay: 500})
sr.reveal('.about__social-icon', {delay: 600, interval: 200})

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__name', {distance: '20px', delay: 50, interval: 100})
sr.reveal('.skills__img', {delay: 400})

/*SCROLL PORTFOLIO*/
sr.reveal('.portfolio__img', {interval: 200})

/*SCROLL CONTACT*/
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', {interval: 200})
sr.reveal('.contact__input', {delay: 400})
sr.reveal('.contact__button', {delay: 600})



//CARROUSEL
const slider = document.querySelector(".slider");
const sliderContent = document.querySelector(".item-wrapper");
const sliderItems = sliderContent.querySelectorAll("img");
const itemCount = sliderItems.length;
const prevBtn = document.querySelector("#previous");
const nextBtn = document.querySelector("#next");
const indicatorWrapper = document.querySelector(".indicator-wrapper");

let currentIndex = 0;

const handleButtonClick = (direction) => {
  if (direction === "left") {
    currentIndex++;

    if (currentIndex > itemCount - 1) {
      currentIndex = 0;
    }
  } else {
    currentIndex--;

    if (currentIndex < 0) {
      currentIndex = itemCount - 1;
    }
  }

  moveSlide();
  styleIndicator();
};

const handleIndicatorClick = (e) => {
  if (!e.target.classList.contains("indicator")) return;

  currentIndex = e.target.dataset.index;

  moveSlide();
  styleIndicator();
};

const initIndicators = () => {
  for (let i = 0; i < itemCount; i++) {
    const indicator = document.createElement("div");
    indicator.classList.add("indicator");
    indicator.dataset.index = i;
    indicatorWrapper.appendChild(indicator);
  }

  styleIndicator();
};

const styleIndicator = () => {
  const indicators = indicatorWrapper.querySelectorAll(".indicator");
  indicators.forEach((indicator) => indicator.classList.remove("current"));
  indicators[currentIndex].classList.add("current");
};

const moveSlide = () => {
  const sliderWidth = slider.clientWidth;
  sliderContent.style.transform = `translateX(-${
    currentIndex * sliderWidth
  }px)`;
};

const addEventListeners = () => {
  prevBtn.addEventListener("click", () => handleButtonClick("left"));
  nextBtn.addEventListener("click", () => handleButtonClick("right"));
  indicatorWrapper.addEventListener("click", handleIndicatorClick);
};

const init = () => {
  addEventListeners();
  initIndicators();
};

init();


