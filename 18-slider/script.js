const body = document.body
const rightBtn = document.getElementById("right")
const leftBtn = document.getElementById("left")
const slides = document.querySelectorAll(".slide")

let activeIndex = 0

const setBgToBody = () => {
    body.style.backgroundImage = slides[activeIndex].style.backgroundImage
    body.style.backgroundPosition = "center"
    body.style.backgroundSize = 'cover'
}

setBgToBody()

const showSlide = (index) => {
    slides[activeIndex].classList.remove('active')
    slides[index].classList.add('active')
    activeIndex = index
}

const nextSlide = () => {
    let nextIndex = (activeIndex + 1) % slides.length 
    if (activeIndex === (slides.length - 1)) nextIndex = 0
    showSlide(nextIndex)
    setBgToBody()
}

const prevSlide = () => {
    let prevIndex = (activeIndex - 1) % slides.length
    if (activeIndex < 1) {
        prevIndex = slides.length - 1
    } 
    showSlide(prevIndex)
    setBgToBody()
}

leftBtn.addEventListener('click', prevSlide)
rightBtn.addEventListener('click', nextSlide)

