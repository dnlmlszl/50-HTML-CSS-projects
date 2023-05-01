const panels = document.querySelectorAll('.panel')
console.log(panels);

/* SOLUTION ONE */
// let activeIndex = 0
// panels[activeIndex].classList.add('active')

// const createClickHandler = (index) => {
//     return function () {
//         panels[activeIndex].classList.remove('active')

//         activeIndex = index
//         panels[activeIndex].classList.add('active')
//     }
// }
// for (let i = 0; i < panels.length; i++) {
//     panels[i].addEventListener('click', createClickHandler(i))
// }

/* SOLUTION TWO */
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach((panel, index) => {
        panel.classList.remove('active')
    })
}