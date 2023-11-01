// // #1 Дан абзац и кнопка. По нажатию на кнопку найдите сумму чисел от 1 до 100 и запишите результат в абзац.
// let p1 = document.querySelector('#p1'), butt1 = document.querySelector('#butt1')

// butt1.addEventListener('click', function() {
//     let sum = 0
//     for(let i = 0;i < 101; i++){
//         sum += i
//     }
//     p1.textContent = sum
// })

// //#2 Дана кнопка и два инпута. В инпуты вводятся числа. По нажатию на кнопку найдите сумму введенных чисел.
// let butt1 = document.querySelector('#butt1'), inp = document.querySelectorAll('input')
// let [inp1, inp2] = inp

// butt1.addEventListener('click', function() {
//     alert((inp1.value)+Number(inp2.value))
// })

// //#3 Даны абзацы, кнопка и див. По нажатию на кнопку найдите количество абзацев и выведите это значение в див.
// let p = document.querySelectorAll('p'), butt1 = document.querySelector('#butt1'), div1 = document.querySelector('#div1')

// butt1.addEventListener('click', function() {
//     div1.textContent = p.length
// })

// //#4 Дана кнопка и инпут. В инпут вводится строка. По нажатию на кнопку определите, сколько символов в введенной строке.
// let butt1 = document.querySelector('#butt1'), inp1 = document.querySelector('#inp1')

// butt1.addEventListener('click', function() {
//     let a = inp1.value.split('')
//     let sum = a.length
//     alert(sum)
// })

// //#5 Дан инпут, абзац и кнопка. В инпут вводится число. По клику на кнопку выведите в абзац факториал этого числа.
// let inp1 = document.querySelector('#inp1'), p1 = document.querySelector('#p1'), butt1 = document.querySelector('#butt1')

// butt1.addEventListener('click', function() {
//     let fact = 1
//     for(let i = Number(inp1.value);i > 1; i--){
//         fact *= i
//     }
//     p1.textContent = fact
// })