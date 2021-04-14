const $navBar = document.querySelectorAll('.nav-bar')[0];
window.addEventListener('scroll', toggleNavbar, false)

function toggleNavbar(){
  if(window.pageYOffset >= 160){
    $navBar.classList.remove('abs-pos');
    $navBar.classList.add('fix-pos');
  } else if (window.pageYOffset < 160){
    $navBar.classList.remove('fix-pos');
    $navBar.classList.add('abs-pos');
  }
}