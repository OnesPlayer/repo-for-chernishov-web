"use strict"

// #464 
// let parent = document.querySelector('#parent');
// let arr = [1, 2, 3, 4, 5];

// for (let elem of arr) {
// 	let p = document.createElement('p');
// 	p.textContent = elem;
	
//  p.onclick = () => {p.textContent = +(p.textContent) + 1}
// 	parent.appendChild(p);
// }


// #465
// let parent = document.querySelector('#elem');
// let arr = ['first', 'second', 'third', 'fourth', 'fifth'];

// for (let elem of arr) {
// 	let li = document.createElement('li');
// 	li.textContent = elem;
	
//     li.onclick = () => {alert(li.textContent)}
//     li.addEventListener('click', f1)
//     function f1() {this.textContent += '!'; this.removeEventListener('click', f1)}
// 	parent.appendChild(li);
// }


// #466
// let table = document.querySelector('#table');

// for (let i = 0; i < 10; i++) {
// 	let tr = document.createElement('tr');
	
// 	for (let i = 0; i < 5; i++) {
// 		let td = document.createElement('td');
//      td.textContent = 'x'
// 		tr.appendChild(td);
// 	}
	
// 	table.appendChild(tr);
// }
// #466.4
// let inp = document.querySelectorAll('input'), table = document.querySelector('#table'), b = document.querySelector('#butt')
// let [inp1, inp2] = inp

// b.onclick = () => {
//     for (let i = 0; i < +(inp1.value); i++) {
//         console.log(i)
//         let tr = document.createElement('tr')
    
//         for (let j = 0; j < +(inp2.value); j++) {
//             let td = document.createElement('td')
//             td.textContent = 'x'
//             tr.appendChild(td)
//         }
        
//        table.appendChild(tr)
//     }
// }


// #467.1
// let table = document.querySelector('#table')
// let k = 1

// for (let i = 0; i < 5; i++) {
// 	let tr = document.createElement('tr')
	
// 	for (let i = 0; i < 5; i++) {
// 		let td = document.createElement('td')
		
// 		td.textContent = k
// 		k++
		
// 		tr.appendChild(td);
// 	}
	
// 	table.appendChild(tr);
// }
// #467.2
// let table = document.querySelector('#table')
// let k = 2

// for (let i = 0; i < 5; i++) {
// 	let tr = document.createElement('tr')
	
// 	for (let i = 0; i < 5; i++) {
// 		let td = document.createElement('td')
		
// 		td.textContent = k
// 		k += 2
		
// 		tr.appendChild(td);
// 	}
	
// 	table.appendChild(tr);
// }


// #468.1
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
// let table = document.querySelector('#table');

// for (let subArr of arr) {
// 	let tr = document.createElement('tr');
	
// 	for (let elem of subArr) {
// 		let td = document.createElement('td');
// 		td.textContent = elem;
// 		tr.appendChild(td);
// 	}
	
// 	table.appendChild(tr);
// }
// #468.2 
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
// let table = document.querySelector('#table');

// for (let subArr of arr) {
// 	let tr = document.createElement('tr');
	
// 	for (let elem of subArr) {
// 		let td = document.createElement('td');
// 		td.textContent = (+elem)**2;
// 		tr.appendChild(td);
// 	}
	
// 	table.appendChild(tr);
// }


// #469.1
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let table = document.getElementById('table')

// for (let employer of employees) {
// 	let tr = document.createElement('tr')
	
// 	let td1 = document.createElement('td')
// 	td1.textContent = employer.name
// 	tr.appendChild(td1)
	
// 	let td2 = document.createElement('td')
// 	td2.textContent = employer.age
// 	tr.appendChild(td2)
	
// 	let td3 = document.createElement('td')
// 	td3.textContent = employer.salary
// 	tr.appendChild(td3)
	
// 	table.appendChild(tr)
// }