const modalReason = document.querySelectorAll(".display-delete");
for (var i = 0; i < modalReason.length; i++) {
    modalReason[i].addEventListener('click',
    function() {
        document.querySelector(".modal-reason").style.display = 'flex';
    });
}

document.querySelector(".modal-close-application").addEventListener('click',
function() {
    document.querySelector(".modal-application").style.display = 'none';
});

document.querySelector(".modal-close-reason").addEventListener('click',
function() {
    document.querySelector(".modal-reason").style.display = 'none';
});

function toggleMenu() {
    var menuToggle = document.querySelector('.toggle');
    var navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}