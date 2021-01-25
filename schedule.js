const modalReason = document.querySelectorAll(".display-delete");
for (var i = 0; i < modalReason.length; i++) {
    modalReason[i].addEventListener('click',
    function() {
        document.querySelector(".modal-reason").style.display = 'flex';
    });
}

// document.querySelector(".modal-close-application").addEventListener('click',
// function() {
//     document.querySelector(".modal-application").style.display = 'none';
// });

document.querySelector(".modal-close-reason").addEventListener('click',
function() {
    document.querySelector(".modal-reason").style.display = 'none';
});


// HEADER BEHAVIOR
let menuToggle = document.querySelector('.navigation-toggle');
let rightTab = document.querySelector('.right-header-tab');
let darkBackground = document.querySelector('.dark-background');

let headerLogo = document.querySelector('.header-logo');
let leftTab = document.querySelector('.left-header-tab');

headerLogo.addEventListener('click', () => {
  if (leftTab.classList.contains('active')) {
    leftTab.classList.remove('active');
    darkBackground.classList.remove('active');
    headerLogo.classList.remove('active');
    rightTab.classList.remove('active');
  }
  else {
    leftTab.classList.add('active');
    darkBackground.classList.add('active');
    headerLogo.classList.add('active');
  }
});

darkBackground.addEventListener('click', () => {
  leftTab.classList.remove('active');
  darkBackground.classList.remove('active');
  headerLogo.classList.remove('active');

  rightTab.classList.remove('active');
});

menuToggle.addEventListener('click', () => {
  rightTab.classList.add('active');
  darkBackground.classList.add('active');
});

// ERRORS
let error = document.querySelector(".error");
let error_text = document.querySelector(".error-text");
let errorClose = document.querySelector('.error-circle');
let errorBox = document.querySelector('.error');

for (let i = 0; i < errorClose.length; i++) {
    errorClose[i].addEventListener('click', () => {
        errorBox[i].style.display = "none";
    });
}