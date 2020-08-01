
let openpopBtn = document.querySelector('#reg-popbtn');
let closepopBtn = document.querySelector('.close-btn');
let regPopup = document.querySelector('#reg-popup');
let bodyBig = document.querySelector('body');

openpopBtn.addEventListener('click', () => {
    regPopup.style.display = 'block';
    bodyBig.style.overflow = 'hidden';
    bodyBig.style.height = '100%';
});

closepopBtn.addEventListener('click', () => { 
    regPopup.style.display = 'none';
    bodyBig.style.overflow = 'visible';
    bodyBig.style.height = '100%';
});
