let calendar = document.querySelector('#calendar')
let body = calendar.querySelector('.body')
let prev = calendar.querySelector('.prev')
let next = calendar.querySelector('.next')
let info = document.querySelector('#info')

function range(num) {
	let arr = []
	
	for (let i = 1; i <= num; i++) {
		arr.push(i)
	}
	
	return arr
}

function getLastDay(year, month) {
	let date = new Date(year, month + 1, 0)
	return date.getDate()
}

function getFirstWeekDay(year, month) {
	let date = new Date(year, month, 1)
	
	if (date.getDay() == 0) {
		return 6
	}
    else {
		return date.getDay() - 1
	}
}

function getLastWeekDay(year, month) {
	let date = new Date(year, month + 1, 0)
	
	if (date.getDay() == 0) {
		return 6
	}
    else {
		return date.getDay() - 1
	}
}

function normalize(arr, left, right) {
	for (let i = 0; i < left; i++) {
		arr[i] = ''
	}
	for (let j = 0; j < right; j++) {
		arr.push('')
	}
	
	return arr
}

function chunk(arr, n) {
	let result = []
	let count = Math.ceil(arr.length / n)
	
	for (let i = 0; i < count; i++) {
		let elems = arr.splice(0, n)
		result.push(elems)
	}
	
	return result
}

let date  = new Date()
let year  = date.getFullYear()
let month = date.getMonth()

draw(body, year, month)

function draw(body, year, month) {
	let arr = range(getLastDay(year, month))
	
	let firstWeekDay = getFirstWeekDay(year, month)
	let lastWeekDay  = getLastWeekDay(year, month)
	
	let nums = chunk(normalize(arr, firstWeekDay, 6 - lastWeekDay), 7)
	createTable(body, nums)
}

function createTable(parent, arr) {
	parent.textContent = ''
	let cells = []
	
	for (let sub of arr) {
		let tr = document.createElement('tr')
		
		for (let num of sub) {
			let td = document.createElement('td')
			td.textContent = num
			tr.appendChild(td)
			
			cells.push(td)
		}
		
		parent.appendChild(tr)
	}
	
	return cells
}