"use strict"
// #1 Сделайте функцию, которая параметром будет принимать массив и возвращать сумму его элементов.
function f_1 (arr) {
    let sum = 0
    for (let i of arr) {
        sum += i
    }
    return sum
}
let a = [5, 1, 433, 7, 634, 44]
console.log('f_1: ' + String(f_1(a)))

// #2 Сделайте функцию, которая параметром будет принимать число и возвращать массив его делителей.
function f_2 (num) {
    let sum = []
    for (let j = num; j >= 2; j--) {
        if (num%j == 0) {
            sum.push(j)
        }
    }
    return sum
}
let b = 245
console.log('f_2: ' + String(f_2(b)))

// #3 Сделайте функцию, которая параметром будет принимать строку и возвращать массив ее символов.
function f_3 (str) {
    let arr = []
    for (let i = 0; i < str.length; i++) {
        arr.push(str[i])
    }
    return arr
}
let c = 'sdfknzxc'
console.log('f_3: ' + String(f_3(c)))

// #4 Сделайте функцию, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке.
function f_4 (str) {
    let arr = []
    for (let i = str.length-1; i >= 0; i--) {
        arr.push(str[i])
    }
    return arr.join('')
}
let d = 'abcdefg'
console.log('f_4: ' + String(f_4(d)))

// #5 Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву этой строки.
function f_5 (str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1)
}
let e = 'osdfqwer'
console.log('f_5: ' + String(f_5(e)))

// #6 Сделайте функцию, которая параметром будет принимать строку и делать заглавной 
//    первую букву каждого слова этой строки.
function f_6 (str) {
    if (str.split(' ').length > 1) {
        let arr = str.split(' ')
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1)
        }
        return arr.join(' ')
    }
    return str.slice(0, 1).toUpperCase() + str.slice(1)
}
let f = 'lorem ipsum dolor'
console.log('f_6: ' + String(f_6(f)))

// #7 Сделайте функцию, заполняющую массив целыми числами от 1 до заданного.
function f_7(num) {
    let arr = []
    for (let i = 1; i <= num; i++) {
        arr.push(i)
    }
    return arr
}
let g = 16
console.log('f_7: ' + String(f_7(g)))

// #8 Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр.
function f_8(num) {
    let str = String(num), sum = 0
    if (str[0] == '-') {
        sum += -(Number(str[1]))
        for (let i = 2; i < str.length; i++) {
            sum += Number(str[i])
        }
    }
    else {
        for (let j = 0; j < str.length; j++) {
            sum += Number(str[j])
        }
    }
    return sum
}
let h = -9375    
console.log('f_8: ' + String(f_8(h)))

// #9 Сделайте функцию, которая параметром будет год и проверять, високосный он или нет.
function f_9(year) {
    if (year%4 == 0 && (year%100 != 0 || year%400 == 0)) {
        return true
    }
    else {
        return false
    }
}
let o = 2025
console.log('f_9: ' + String(f_9(o)))

// #10 Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.
function f_10(secs) {
    return `Суток: ${secs/60/60/24}`
}
let p = 36000000
console.log('f_10: ' + String(f_10(p)))

// #11 Сделайте функцию, которая будет возвращать случайный элемент из массива.
function f_11(arr) {
    let a = Math.floor(Math.random() * (arr.length-1 + 1));
    return arr[a]
}
let q = [14, 'fadsf', 91234, [123, 123]]
console.log('f_11: ' + String(f_11(q)))

// #12 Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.
function f_12(num) {
    let f = 0
    for (let i = num; i > 0; i--) {
        if (num%i == 0) {
            f++ 
        }
    }
    if (f <= 2) {
        return true
    }
    return false
}
let w = 12
console.log('f_12: ' + String(f_12(w)))