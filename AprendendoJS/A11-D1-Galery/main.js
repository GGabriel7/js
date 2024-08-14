const displayedImg = document.querySelector('.displayedImg') 
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('.dark');
const overlay = document.querySelector('.overlay');

btn.addEventListener('click', () => {
    overlay.classList.toggle('darken')
})

thumbBar.addEventListener('click', (event) => {
    if (event.target.getAttribute('alt')) {
        displayedImg.src = `images/pic${event.target.getAttribute('alt')}.jpg`
    }
})