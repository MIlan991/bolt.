const openNav = document.querySelector('.menu-icon'); // OPEN NAV BTN
const closeNav = document.querySelector('.close-icon'); // CLOSE NAV BTN
const responsiveMenu = document.querySelector('.reasonsive-menu') // RESPONSIVE NAV
const responsiveLink = document.querySelectorAll('.responsive-nav-link'); // LINKS INSIDE RESPONSIVE NAV


// PRICE OVERFLOW SCROLL POSITION
function myFunction() {
  const element = document.getElementById("slide");
  element.scrollLeft = 420;
}
myFunction()

// OPEN RESPONSIVE NAV
openNav.addEventListener('click', function(){
  responsiveMenu.style.right = "0px";
});

// CLOSE RESPONSIVE NAV
closeNav.addEventListener('click', function(){
  responsiveMenu.style.right = "-187px";
});

// NAVBAR AUTOCLOSE
for (i = 0; i < responsiveLink.length; i++) {
  responsiveLink[i].addEventListener('click', () => {
    responsiveMenu.style.right = "-187px"
  });
}
