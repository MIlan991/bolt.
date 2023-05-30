const rememberMeCheck = document.querySelector('.checkbox-remember-me');
const rememberMeOn = document.querySelector('.remember-me-on')
const rememberMeOff = document.querySelector('.remember-me-off')

const openNav = document.querySelector('.menu-icon'); // OPEN NAV BTN
const closeNav = document.querySelector('.close-icon'); // CLOSE NAV BTN
const responsiveMenu = document.querySelector('.reasonsive-menu') // RESPONSIVE NAV
const responsiveLink = document.querySelectorAll('.responsive-nav-link'); // LINKS INSIDE RESPONSIVE NAV
const submitBtnLogIn = document.querySelector('.btn-log-in')

submitBtnLogIn.addEventListener('click', submitLogIn); // SUBMIT LOG IN
// SUBMIT LOG IN
function submitLogIn(){
  return true;
}

// CHECK-BOX "Remember me" on login.html
rememberMeCheck.addEventListener('click', function(){
    if (rememberMeCheck.checked === true){
        rememberMeOn.style.display = "block";
        rememberMeOff.style.display = "none";
    } else {
        rememberMeOn.style.display = "none";
        rememberMeOff.style.display = "block";
    }
});

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