const buttonLogo = document.querySelector('#educationLogoClick')
const startPage = './index.html'

const blockForRole = document.querySelectorAll('#blockForRole')
const pointForRole = document.querySelectorAll('#pointForRole')
buttonLogo.addEventListener('click', () => {
    window.location.href = startPage;
})

let chosenRole = 0 // 1 - student  2 - teacher  3 - owner  0 - nobody in this life(

const renderingRole = () => {
    pointForRole.forEach((item) => {
        item.innerHTML = ``
    })
    blockForRole.forEach((item) => {
        item.classList.remove('choosen')
    })
    pointForRole[chosenRole-1].innerHTML = `<div class="register_block_second_category_block1_top_point_into"></div>`
    blockForRole[chosenRole-1].classList.add('choosen')
}

blockForRole.forEach((item, index) => {
    item.addEventListener('click', () => {
        chosenRole = index+1
        renderingRole()
    })
})
