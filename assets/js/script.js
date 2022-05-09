const menuList = document.querySelector('.section-top__nav-bottom__nenu');

window.addEventListener('click', (e) => {
    if(e.target.className === 'burger-btn'){
        menuList.classList.toggle('active');
    };
});