let classbtnRight = document.querySelector('.btnRight')
let varslides = document.querySelectorAll('img')
let i = 0;
classbtnRight.addEventListener('click', function() {
  ++i;
  if (i >= varslides.length) {
    varslides[i-1].classList.remove('block')
    let i = 0;
    varslides[i].classList.add('block')
  } else {
    varslides[i-1].classList.remove('block')
    varslides[i].classList.add('block')
  }

})