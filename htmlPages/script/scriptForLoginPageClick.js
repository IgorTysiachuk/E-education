const buttonLogo = document.querySelector('#educationLogoClick')
const startPage = './index.html'
const checkerButton = document.querySelector('#checked')
const typeForCheck = document.querySelector('#typeForCheck')

buttonLogo.addEventListener('click', () => {
    window.location.href = startPage;
})

let OnOff = false
const creatingChecker = () => {
    if(OnOff) {
        checkerButton.style.opacity = "1"
        typeForCheck.type = "text"
    } else {
        checkerButton.style.opacity = "0"
        typeForCheck.type = "password"
    }
}
checkerButton.addEventListener('click', () => {
    if(checkerButton.style.opacity == "1") {
        OnOff = false
        creatingChecker()
    } else {
        OnOff = true
        creatingChecker()
    }
})
creatingChecker()
