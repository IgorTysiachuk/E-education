const buttonsOnStartPage = {
    logo: document.querySelector('#educationLogoClick'),
    register: document.querySelector('#headerRegisterButton'),
    login: document.querySelector('#headerLoginButton'),
}
const windowsOnStartPage = {
    startPage: './index.html',
    loginPage: './loginPage.html',
    registerPage: './registerPage.html',
}
const listenerClickOnStartPage = (logo, register, login) => {
    const linksOnStartPage = (startPage, loginPage, registerPage) => {
        logo.addEventListener('click', () => {
            window.location.href = startPage;
        })
        register.addEventListener('click', () => {
            window.location.href = registerPage;
        })
        login.addEventListener('click', () => {
            window.location.href = loginPage;
        })
    }
    linksOnStartPage(windowsOnStartPage.startPage, windowsOnStartPage.loginPage, windowsOnStartPage.registerPage)
}
listenerClickOnStartPage(buttonsOnStartPage.logo, buttonsOnStartPage.register, buttonsOnStartPage.login)
