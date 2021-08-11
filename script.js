const share = document.querySelector('.share')
const footer = document.querySelector('footer')

share.addEventListener('click', () => {
    footer.classList.toggle('active')
})