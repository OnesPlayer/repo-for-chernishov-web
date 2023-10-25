const colors = ['first', 'second', 'third']

function create_table() {
    let n = Math.floor(Math.random() * colors.length)
    return colors[n]
}

let inp1 = document.querySelector('#inp1'), inp2 = document.querySelector('#inp2'), but = document.querySelector('#butt1'), table = document.querySelector('#field')

but.onclick = () => {
    let counter = 0
    let counter2 = 0

    for (let i = 0; i < +inp1.value; i++) {
        let tr = document.createElement('tr')

        for (let j = 0; j < +inp2.value; j++) {
            let td = document.createElement('td')
            td.classList.add(create_table())
            td.onclick = () => {
                counter++
                let n = td.classList[0]
                switch (n) {
                    case 'first': {
                        td.classList.remove('first')
                        td.classList.add('second')
                        break
                    }
                    case 'second': {
                        td.classList.remove('second')
                        td.classList.add('third')
                        break
                    }
                    case 'third': {
                        td.classList.remove('third')
                        td.classList.add('first')
                        break
                    }
                }

                for (let k of table.children) {
                    for (let l of k.children) {
                        if (td.classList[0] == l.classList[0]) {
                            counter2++
                        }
                    }
                }
                if (counter2 == (+inp1.value * +inp2.value)) {
                    alert(`Вы выиграли! Ходов: ${counter} \n Минимальное кол-во ходов: ${win_turns}`)
                    document.location.href = 'index.html'
                }
                else {
                    counter2 = 0
                }
            }

            tr.appendChild(td)
        }

        table.appendChild(tr)
    }
    but.onclick = ''

    let first_c = 0, second_c = 0, third_c = 0, win_turns = 0
    for (let i of table.children) {
        for (let j of i.children) {
            switch (j.classList[0]) {
                case 'first': {
                    first_c++
                    break
                }
                case 'second': {
                    second_c++
                    break
                }
                case 'third': {
                    third_c++
                    break
                }
            }
        }
    }
    let arr = [first_c, second_c, third_c]
    let max = Math.max.apply(null, arr)
    if (first_c == max) {
        win_turns = second_c*2 + third_c
    }
    else if (second_c == max) {
        win_turns = third_c*2 + first_c
    }
    else {
        win_turns = first_c*2 + second_c
    }
}
