const stars = document.querySelector('#stars')
const moon = document.querySelector('#moon')
const mountainsBehind = document.querySelector('#mountains_behind')
const mountainsFront = document.querySelector('#mountains_front')
const text = document.querySelector('#text')
const btn = document.querySelector("#btn")

function parallax() {
    window.addEventListener("scroll", function () {
        let value = window.scrollY
        stars.style.left = `${value * 0.25}px`
        console.log("RROLOU", value)
    })
}

parallax()

