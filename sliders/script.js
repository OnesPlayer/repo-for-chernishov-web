// let texts = ['text1', 'text2', 'text3'], n = 0
// let div = document.querySelector('#slider')

// setInterval(() => {
//     div.textContent = texts[n]
//     n++
//     if (n == 3) {n = 0}
// }, 1000)

// let n = 0, texts = ['text1', 'text2', 'text3']
// let div = document.querySelector('#slider'), left = document.querySelector('#left'), right = document.querySelector('#right')

// left.addEventListener('click', function() {
// 	if (n > 0) {
//         n--
//         div.textContent = texts[n]
//     }
// })
// right.addEventListener('click', function() {
//     if (n < texts.length - 1) {
//         n++
//         div.textContent = texts[n]
//     }
// })

let n = 0, imgs = ['1.jpg', '2.jpg', '3.jpg']
let slider = document.querySelector('#slider'), left = document.querySelector('#left'), right = document.querySelector('#right')

left.addEventListener('click', function() {
	if (n > 0) {
        n--
        slider.src = imgs[n]
    }
})
right.addEventListener('click', function() {
    if (n < imgs.length - 1) {
        n++
        slider.src = imgs[n]
    }
})