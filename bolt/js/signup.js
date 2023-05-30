const agreeCheck = document.querySelector('.agree-check'); //CHECKBOX AGREE TERMS
const agreeTermsOn = document.querySelector('.agree-check-on') // AGREE TERMS CHECKED IMG
const agreeTermsOff = document.querySelector('.agree-check-off') // AGREE TERMS NOT CHECKED IMG

const submitBtnSignUp = document.querySelector('.btn-submit') // SUBMIT BUTTON SIGN UP
const conditionsText = document.querySelector('.check-p'); // PLEASE CONFIRM CONDITION TEXT SIGN UP

const openNav = document.querySelector('.menu-icon'); // OPEN NAV BTN
const closeNav = document.querySelector('.close-icon'); // CLOSE NAV BTN
const responsiveMenu = document.querySelector('.reasonsive-menu') // RESPONSIVE NAV
const responsiveLink = document.querySelectorAll('.responsive-nav-link'); // LINKS INSIDE RESPONSIVE NAV

submitBtnSignUp.addEventListener('click', submitSignUp); // SUBMIT SIGN UP FORMS

// SUBMIT SIGN UP FUNCTION
function submitSignUp(){
  console.log('false')
  if(agreeCheck.checked == false){
    conditionsText.style.color = "red";
    agreeTermsOff.style.filter = "invert(20%) sepia(86%) saturate(7499%) hue-rotate(359deg) brightness(112%) contrast(122%)"
    return false;
  }else{
    console.log('true')
      conditionsText.style.color = "#666666";
      return true;
  }
};

// AGREE TERMS CHECKBOX
agreeCheck.addEventListener('click', function(){
    if(agreeCheck.checked === true){
        agreeTermsOn.style.display = "block";
        agreeTermsOff.style.display = "none";
    }else{
        agreeTermsOn.style.display = "none";
        agreeTermsOff.style.display = "block";
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