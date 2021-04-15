const $logo = document.querySelectorAll('.logo')[0];
const $navBar = document.querySelectorAll('.nav-bar')[0];
const $extLink = document.querySelectorAll('.ext-link')[0];
const $intLink = document.querySelectorAll('.int-link');
const $sectArr = document.querySelectorAll('main section')

window.addEventListener('scroll', toggleNavbar, false)
$extLink.addEventListener('click', openLink, false)


function toggleNavbar(){
  if(window.pageYOffset >= $logo.offsetHeight && $navBar.classList.contains('abs-pos')){
    $navBar.classList.remove('abs-pos');
    $navBar.classList.add('fix-pos');
  } else if (window.pageYOffset < $logo.offsetHeight && $navBar.classList.contains('fix-pos')){
    $navBar.classList.remove('fix-pos');
    $navBar.classList.add('abs-pos');
  }
}

function openLink(){
  window.open('https://www.blogger.com/about/?bpli=1', '_blank')
}

//function scrollToSect(){
  //window.scrollTo(0, $transparenciaSect.offsetTop - $navBar.offsetHeight);
  //window.scrollTo({
    //top: $transparenciaSect.offsetTop - $navBar.offsetHeight,
    //left:0,
    //behavior: 'smooth',
  //});
//}

$intLink.forEach(function(cur, idx) {
  cur.addEventListener('click', function() {
    window.scrollTo({
      top: $sectArr[idx].offsetTop - $navBar.offsetHeight,
      left:0,
      behavior: 'smooth',
    });
  }, false)
})
