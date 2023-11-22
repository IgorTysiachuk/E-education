const buttonLogo = document.querySelector('#educationLogoClick')
const startPage = './index.html'

buttonLogo.addEventListener('click', () => {
    window.location.href = startPage;
})