(() => {
  document.querySelector('.navbar__logo').addEventListener('mouseenter', displayRest);
  document.querySelector('.navbar__logo').addEventListener('mouseleave', removeRest);
  document.querySelector('.toggle').addEventListener('click',displayNav);
  document.addEventListener('DOMContentLoaded', () => {
    displayLogo();
    progressScroll();
  });
})();

const restText = document.querySelector('.navbar__title--hidden');
const hiText = document.querySelector('tspan');
const moon = document.querySelector('#moon');
const lineHi = document.querySelector('#line-hi');


function displayRest(){
  restText.classList.add('active');
}

function removeRest(){
  restText.classList.remove('active');
}

function displayNav(){
  //console.log('working');
  let nav = document.querySelector('.navbar__nav');
  nav.classList.toggle('open');

  document.querySelector('.toggle__line--top').classList.toggle('open');
  document.querySelector('.toggle__line--middle').classList.toggle('open');
  document.querySelector('.toggle__line--bottom').classList.toggle('open');
}

function displayLogo() {
  let path = document.querySelector('#trace-girl');
  let length = path.getTotalLength();
  // console.log(length)
  path.style.strokeDasharray = length + ' ' + length;
  path.style.strokeDashoffset = length;

}

function progressScroll(){
  let loadingBar = document.getElementById('loading-bar');
  let scrollToTop = document.querySelector('#scroll-to-top');

  let incrementWidth = function(){ //closure
    loadingBar.style.width = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100 + '%'; 
  
    if(window.scrollY > 300){
      scrollToTop.style.display = 'block';
    } else {
      scrollToTop.style.display = 'none';
    }
  };

  document.addEventListener('scroll', incrementWidth)

  setTimeout(() => {
    window.addEventListener('load', () => {
      loadingBar.style.width = '100%'
      setTimeout(() => {
        loadingBar.style.display = 'none'
      }, 300)
    })
  }, 2000)

  scrollToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })
}
