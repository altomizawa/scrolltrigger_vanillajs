import { createCursor, getCoordinates } from './cursorAnimation'

const slide = document.querySelector('.vortex__slide')

const slides = [
  '/assets/images/adam-jicha-arxIJ2pWXXc-unsplash.jpg', '/assets/images/alice-donovan-rouse-yu68fUQDvOI-unsplash.jpg',
  '/assets/images/andy-hermawan-XOEF7sNrSw0-unsplash.jpg',
  '/assets/images/avery-klein-C_dRtsnBOQA-unsplash.jpg',
  '/assets/images/avery-klein-C_dRtsnBOQA-unsplash.jpg',
  '/assets/images/birmingham-museums-trust-_sn71oyTN4o-unsplash.jpg',
  '/assets/images/birmingham-museums-trust-v15kmerLWcA-unsplash.jpg',
  '/assets/images/daniil-silantev-UIcBEy5TDTA-unsplash.jpg',
  '/assets/images/efe-kurnaz-RnCPiXixooY-unsplash.jpg', 
  '/assets/images/fons-heijnsbroek-abstract-art-EPfBNIKZ0W8-unsplash.jpg',
  '/assets/images/hutomo-abrianto-9mPl0Zo7_gQ-unsplash.jpg',
  '/assets/images/imkara-visual-UGWS3abjoKQ-unsplash.jpg',
  '/assets/images/jo-szczepanska-9OKGEVJiTKk-unsplash.jpg',
  '/assets/images/premium_photo-1671019808276-e35ce3aca4de.avif',
  '/assets/images/premium_photo-1680710431350-1adb85d4fe22.avif',
  '/assets/images/rubaitul-azad-4nWYZynLp4k-unsplash.jpg',
  '/assets/images/sangharsh-lohakare-8o_LkMpo8ug-unsplash.jpg',
  '/assets/images/youzi-lin-bcBNBdzcq2k-unsplash.jpg',
  '/assets/images/zach-key-rKE6rXOl14U-unsplash.jpg'
]

const professions = [
  'photographers', 'designers', 'creatives', 'curators', 'everyone', 'artists'
]


function createSlide(position) {
  const vortex = document.querySelector('.vortex')
  const div = document.createElement('div')
  div.classList.add('vortex__slide')
  div.classList.add(position)
  // div.classList.add('vortex__slide-animation')


  // ADD IMAGE
  const image = document.createElement('img')
  image.classList.add('vortex__slide-image')
  image.src = slides[Math.floor(Math.random()*slides.length)]
  div.appendChild(image)

  vortex.appendChild(div)
  
  setTimeout(() => {
    vortex.removeChild(div); // Remove the specific div
  }, 5000); 
}

// CREATE VORTEX EFFECT
const intervalId = setInterval(() => {
  createSlide('vortex__slide_top')
  createSlide('vortex__slide_bottom')
  createSlide('vortex__slide_left')
  createSlide('vortex__slide_right')
  createSlide('vortex__slide_top-left')
  createSlide('vortex__slide_top-right')
  createSlide('vortex__slide_bottom-left')
  createSlide('vortex__slide_bottom-right')
}, 700)

// CREATE CHANGING PROFESSION EFFECT
let index = 0
const profession = document.getElementById('profession')
const professionIntervalId = setInterval(() => {
  profession.style.color = 'black';
  setTimeout(() => {
    profession.textContent = professions[index];
    profession.style.color = 'white'
  },500)
    // Increment or reset the index to cycle through the professions\
    if(index >= professions.length -1) {
      index = 0
    } else {
      index = (index + 1)
    }
}, 2000)

// GO TO SECTION TWO
function gotoSectionTwo() {
  const sectionOne = document.querySelector('.main__hero-section')
  const sectionTwo = document.querySelector('.main__work')
  sectionOne.style.transition= '500ms'
  sectionOne.style.opacity=0
  setTimeout(() => {
    sectionOne.style.display = 'none'
    sectionTwo.style.display = 'flex'
    sectionTwo.style.transition = "500ms ease-in-out"
    sectionTwo.style.opacity = 1
  },500)
}

function gotoSectionOne() {
  const sectionOne = document.querySelector('.main__hero-section')
  const sectionTwo = document.querySelector('.main__work')
  sectionTwo.style.transition= '500ms'
  sectionTwo.style.opacity=0
  setTimeout(() => {
    sectionTwo.style.display = 'none'
    sectionOne.style.display = 'flex'
    sectionOne.style.transition = "500ms ease-in-out"
    sectionOne.style.opacity = 1
  },500)
}

// setTimeout(gotoSectionTwo, 10000)

createCursor();
window.addEventListener('mousemove', getCoordinates)

// TRACK SCROLL POSITION
const main = document.querySelector('.main')
let isSectionTwoActive = false;
let isSectionThreeActive = false;
const trackScroll = () => {
  const windowHeight = window.innerHeight;
  const mainY = main.getBoundingClientRect().top

  // SECTION 1 TO SECTION 2 AND VICE-VERSA
  if (mainY*-1>windowHeight/8 && isSectionTwoActive===false) {
    console.log('activated')
    gotoSectionTwo();
    isSectionTwoActive = true;
  }
  if (mainY*-1< windowHeight/8 && isSectionTwoActive===true) {
    gotoSectionOne();
    isSectionTwoActive = false;
  }
  // SECTION 1 TO SECTION 2 AND VICE-VERSA
  if (mainY*-1>windowHeight && isSectionThreeActive===false) {
    console.log('activated')
    gotoSectionOne();
    isSectionThreeActive = true;
  }
  if (mainY*-1< windowHeight && isSectionThreeActive===true) {
    gotoSectionTwo();
    isSectionThreeActive = false;
  }
}
window.addEventListener('scroll', trackScroll)


// CREATE GRID COLUMN
function createGridThumbnail(columnNumber) {
  const column1 = document.getElementById(`column${columnNumber}`)
  const columnThumbnail = document.createElement('img')
  columnThumbnail.src = slides[Math.floor(Math.random()*slides.length)]
  columnThumbnail.classList.add('main__work-thumbnail')

  if (columnNumber%2 === 0){
    column1.classList.add('main__work-column_top')
  } else {
    column1.classList.add('main__work-column_bottom')
  }
  column1.appendChild(columnThumbnail)
}

function createGrid() {
  for (let i = 0; i < 10; i++) {
    createGridThumbnail(1);
  }
  for (let i = 0; i < 10; i++) {
    createGridThumbnail(2);
  }
  for (let i = 0; i < 10; i++) {
    createGridThumbnail(3);
  }
  for (let i = 0; i < 10; i++) {
    createGridThumbnail(4);
  }
  for (let i = 0; i < 10; i++) {
    createGridThumbnail(5);
  }
}
createGrid();
showWorkTitle();

// WORK TITLE ANIMATION
function showWorkTitle() {
  const title = document.querySelector('.main__work-title')
  console.log(title)
  title.classList.add('main__work-title_active')
}

// HAMBURGER MENU OPEN / CLOSE
let isMenuActive = false;

function switchMobileMenu() {
  const navMenu = document.querySelector('.nav__mobile')
  if(!isMenuActive) {
    navMenu.classList.add('nav__mobile_active')
    isMenuActive = true
  } else {
    navMenu.classList.remove('nav__mobile_active')
    isMenuActive = false
  }
}

const navMenu = document.querySelector('.nav__mobile-hamburger')
navMenu.addEventListener('click' , switchMobileMenu)
