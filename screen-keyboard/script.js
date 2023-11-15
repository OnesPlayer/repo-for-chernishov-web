let div = document.querySelector('div'), inp = document.querySelector('input')
let arr = '123456789qwertyuiopasdfghjklzxcvbnm-'.split('')
let caps = false

for (let i of arr) {
    let p = document.createElement('p')
    p.textContent = i
    p.onclick = () => {
        if (p.textContent == '-') {
            inp.value = inp.value.slice(0, inp.value.length-1)
        }
        else {
            if (caps) {
                inp.value += p.textContent.toUpperCase()
            }
            else {
                inp.value += p.textContent
            }
        }
    }
    div.appendChild(p)
}

let abc = document.createElement('p')
abc.textContent = 'Caps Lock'
abc.onclick = () => {
    if (caps) {
        caps = false
    }
    else {
        caps = true
    }
}
div.appendChild(abc)