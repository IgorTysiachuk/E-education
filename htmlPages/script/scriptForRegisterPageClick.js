const buttonLogo = document.querySelector('#educationLogoClick')
const startPage = './index.html'

buttonLogo.addEventListener('click', () => {
    console.log(123)
    window.location.href = startPage;
})