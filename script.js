const menu = document.getElementById('menu')
const select = document.querySelector('.select')
menu.setAttribute('clicked','0')
menu.addEventListener('click', () => {
    if(menu.getAttribute('clicked') === '0'){
        menu.src = '/images/icon-close.svg'
        menu.setAttribute('clicked', '1')
        select.style.display = 'block'
    } else {
        menu.src = '/images/icon-hamburger.svg'
        menu.setAttribute('clicked', '0')
        select.style.display = 'none'
    }
})