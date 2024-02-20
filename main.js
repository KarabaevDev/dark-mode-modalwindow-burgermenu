// DARK MODE
const btnDark = document.querySelector('.btn-dark'),
    darkMode = document.querySelector('.dark-mode'),
    lightMode = document.querySelector('.light-mode'),
    body = document.querySelector('.light');
btnDark.addEventListener('click', () => {
    if (body.className === 'light') {
        body.classList.replace("light", "dark")
        lightMode.style.display = 'block'
        lightMode.style.display = 'flex'
        darkMode.style.display = 'none'
    } else {
        body.classList.replace("dark", "light")
        darkMode.style.display = 'block'
        darkMode.style.display = 'flex'
        lightMode.style.display = 'none'
    }


})

// BURGER MENU

const btnMenu = document.querySelector('.btn-menu'),
    btnClose = document.querySelector('.btn-close'),
    burgerMenu = document.querySelector('.burger-menu');

btnMenu.addEventListener('click' , () => {
    burgerMenu.style.display = 'block';
})

btnClose.addEventListener('click' , () => {
    burgerMenu.style.display = 'none';
})

// MODAL WINDOW

const modalOpen = document.querySelector('.modal-open'),
    modalClose = document.querySelector('.modal-close'),
    modalWindow = document.querySelector('.modal-window');

modalOpen.addEventListener('click' , () => {
    modalWindow.style.display = "block"
    modalWindow.style.display = "flex"
})

modalClose.addEventListener('click' , () => {
    modalWindow.style.display = "none"
})