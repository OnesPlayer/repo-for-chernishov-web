"use strict"

// #1 Дан инпут и абзац. По потери фокуса в инпуте запишите значение инпута в конец текста абзаца.

// let inp = document.querySelector('#inp'), p = document.querySelector('#p')

// inp.addEventListener('blur', function() {
// 	p.textContent += inp.value
// })

// #2 Дано несколько инпутов, абзац и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в абзац.

// let inp1 = document.querySelector('#inp1'), inp2 = document.querySelector('#inp2'), butt = document.querySelector('#butt'), p = document.querySelector('#p')

// butt.addEventListener('click', function() {
// 	p.textContent = Number(inp1.value) + Number(inp2.value)
// })

// #3 Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа.

// let inp1 = document.querySelector('#inp1')

// inp1.addEventListener('blur', function() {
// 	let a = inp1.value.split('')
// 	console.log(a)
// 	let sum = 0
// 	for (let i of a) {
// 		sum += Number(i)
// 	}
// 	inp1.value = sum
// })

// #4 Дан инпут. В него вводятся числа через запятую. По потери фокуса найдите среднее арифметическое этих чисел (сумма делить на количество).

// let inp1 = document.querySelector('#inp1')

// inp1.addEventListener('blur', function() {
// 	let a = inp1.value.split(',')
// 	let n = a.length, sum = 0
// 	for (let i of a) {
// 		sum += Number(i)
// 	}
// 	inp1.value = sum/n
// })

// #5 Даны 4 инпута. В первый инпут вводится ФИО через пробел. По потери фокуса запишите фамилию, имя и отчество в остальные 3 инпута.

// let inp1 = document.querySelector('#inp1'), inp2 = document.querySelector('#inp2'), inp3 = document.querySelector('#inp3'), inp4 = document.querySelector('#inp4')

// inp1.addEventListener('blur', function() {
// 	let a = inp1.value.split(' ')
// 	inp2.value = a[0]
// 	inp3.value = a[1]
// 	inp4.value = a[2]
// })

// #6 Дан инпут. В него вводится ФИО через пробел. ФИО вводится с маленькой буквы. Сделайте так, чтобы по потери фокуса инпутом, 
//    введенные фамилия, имя и отчество автоматически стали записанными с большой буквы (в этом же инпуте).

// let inp1 = document.querySelector('#inp1')

// inp1.addEventListener('blur', function() {
// 	let a = inp1.value.split(' ')
// 	for (let i = 0; i < a.length; i++) {
// 		a[i] = a[i].slice(0, 1).toUpperCase() + a[i].slice(1)
// 	}
// 	inp1.value = a.join(' ')
// })

// #7 Дан инпут. В него вводится текст. По потери фокуса узнайте количество слов в этом тексте.

// let inp1 = document.querySelector('#inp1'), p = document.querySelector('#p')

// inp1.addEventListener('blur', function() {
// 	let a = inp1.value.split(' ')
// 	let n = 0
// 	for (const i of a) {
// 		if (i == '') {
// 			n += 1
// 		}
// 	}
// 	if (n == 0) {
// 		p.textContent = `Количество слов: ${a.length}`	
// 	}
// 	else {
// 		p.textContent = `Количество слов: ${a.length - n}`
// 	}
// })

// #8 Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса в этом же инпуте поставьте эту дату в формате 2016-12-31.

// let inp1 = document.querySelector('#inp1')

// inp1.addEventListener('blur', function() {
// 	let a = inp1.value.split('.')
// 	inp1.value = a.join('-')
// })

// #9 Дан инпут. В него вводится слово. По нажатию на кнопку проверьте то, что это слово читается с начала и с конца одинаково (например, мадам).

// let inp1 = document.querySelector('#inp1'), butt1 = document.querySelector('#butt1');

// butt1.addEventListener('click', function() {
// 	if (inp1.value == inp1.value.split('').reverse().join('')) {
// 		alert('Это палиндром')
// 	}
// 	else {
// 		alert('Это не палиндром')
// 	}
// })

// #10 Дан инпут. В него вводится число. Проверьте по потери фокуса, что это число содержит внутри себя цифру 3.

// let inp1 = document.querySelector('#inp1')

// inp1.addEventListener('blur', function() {
// 	let a = inp1.value.split('')
// 	let n = false
// 	for (const i of a) {
// 		if (i == 3) {
// 			n = true
// 			break
// 		}
// 	}
// 	if (n) {
// 		alert('Содержит 3!')
// 	}
// 	else {
// 		alert('Нету 3.')
// 	}
// })

// #11 Даны несколько абзацев и кнопка. По нажатию на кнопку запишите в конец каждого абзаца его порядковый номер.

// let butt1 = document.querySelector('#butt1'), p = document.querySelectorAll('p')

// butt1.addEventListener('click', function() {
// 	for (let i = 0; i < p.length; i++) {
// 		p[i].textContent += ' ' + i
// 	}
// })

// #12 Даны ссылки. Добавьте в конец каждой ссылки ее href в круглых скобках.

// let a = document.querySelectorAll('a'), butt1 = document.querySelector('#butt1')

// butt1.addEventListener('click', function() {
// 	for (let i = 0; i < a.length; i++) {
// 		a[i].textContent += '(' + a[i].href + ')'
// 	}
// })

// #13 Даны ссылки. Если ссылка начинается с http://, то добавьте ей в конец стрелку → (делается так: &rarr;).

// let a = document.querySelectorAll('a'), butt1 = document.querySelector('#butt1')

// butt1.addEventListener('click', function() {
// 	for (let i = 0; i < a.length; i++) {
// 		if (a[i].textContent.startsWith('http:://')) {
// 			a[i].textContent += '→'
// 		}
// 	}
// })

// #14 Даны несколько абзацев с числами. По нажатию на любой абзац запишите в него квадрат числа, которое в нем находится.

// let p = document.querySelectorAll('p')

// let [p1, p2, p3, p4] = p

// function f() {
// 	let n = Number(this.textContent)
// 	this.textContent = n**2
// }
// p1.addEventListener('click', f)
// p2.addEventListener('click', f)
// p3.addEventListener('click', f)
// p4.addEventListener('click', f)

// #15 Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса узнайте день недели (словом), который приходится на эту дату.

// let inp1 = document.querySelector('#inp1')

// inp1.addEventListener('blur', function() {
// 	let date = new Date(inp1.value.split('.')[2], inp1.value.split('.')[1]-1, inp1.value.split('.')[0])
// 	console.log(date)
// 	let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
// 	let day = date.getDay()
// 	inp1.value = days[day]
// })

// #16 Дан инпут. Реализуйте кнопочки +1, -1, которые будут увеличивать или уменьшать на 1 значение инпута. 
//     Сделайте так, чтобы это значение не могло стать меньше нуля.

// let inp1 = document.querySelector('#inp1'), butt1 = document.querySelector('#plus'), butt2 = document.querySelector('#minus')

// butt1.addEventListener('click', function() {
// 	if (inp1.value > 0) {
// 		inp1.value = Number(inp1.value) - 1
// 	}
// })

// butt2.addEventListener('click', function() {
// 	inp1.value = Number(inp1.value) + 1
// })

// #17 Дан инпут. Даны абзацы. Пусть в этот инпут записывается суммарное количество нажатий по этим абзацам.