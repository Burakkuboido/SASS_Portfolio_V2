const homeMenu = document.querySelector('.home');
const arrow = document.querySelector('.arrow');

let showHome = false;

arrow.addEventListener('click', toggleHome);

function toggleHome() {
    if(!showHome) {
        homeMenu.classList.add('open');
        arrow.classList.add('open_visible');

        showHome = true;
    } else {
        homeMenu.classList.remove('open');
        arrow.classList.remove('open_visible');

        showHome = false;
    }
}

var cards = document.querySelectorAll('.education__cards');

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});