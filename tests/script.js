// #1
// button.addEventListener('click', function() {
//     for (let i of inputs) {
//         if (i.value == i.dataset.right) {
//             i.classList.add('right')
//             i.classList.remove('wrong')
//         }
//         else {
//             i.classList.add('wrong')
//             i.classList.remove('right')
//         }
//     }
// })

// #2
// button.addEventListener('click', function() {
//     for (let i = 0; i < inputs.length; i++) {
//         if (inputs[i].value in answers) {
//             console.log(answers[inputs[i].value], i)
//             if (i + 1 == answers[inputs[i].value]) {
//                 inputs[i].classList.add('right')
//                 inputs[i].classList.remove('wrong')
//             }
//         }
//         else {
//             inputs[i].classList.remove('right')
//             inputs[i].classList.add('wrong')
//         }
//     }
// })

// #3
// button = document.querySelector('#button'), div = document.querySelector('#test')
// let answersQuestions = {
//     'вопрос 1?': 'ответ 1',
//     'вопрос 2?': 'ответ 2',
//     'вопрос 3?': 'ответ 3'
// }
// let n = 0, arr_inp = []

// for (let i in answersQuestions) {
//     let p = document.createElement('p')
//     let inp = document.createElement('input')
//     inp.id = 'inp' + n
//     p.textContent = i
//     div.appendChild(p)
//     div.appendChild(inp)
//     n++
//     arr_inp.push(inp)
// }

// button.addEventListener('click', function() {
//     n = 0
//     for (let j of arr_inp) {
//         if (j.value == Object.values(answersQuestions)[n]) {
//             j.classList.add('right')
//             j.classList.remove('wrong')
//         }
//         else {
//             j.classList.add('wrong')
//             j.classList.remove('right')
//         }
//         n++
//     }
// })