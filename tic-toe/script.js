let cells = document.querySelectorAll('#field td');

function isVictory(cells) {
    let combs = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    
    for (let comb of combs) {
		if (
			cells[comb[0]].textContent == cells[comb[1]].textContent &&
			cells[comb[1]].textContent == cells[comb[2]].textContent &&
			cells[comb[0]].textContent != ''
		) {
			return true;
		}
	}
	
	return false;
}

function start(cells) {
    let n = 0
    for (let i of cells) {
        i.onclick = () => {
            i.textContent = ['X', '0'][n % 2];
            i.onclick = 0

            if (isVictory(cells)) {
                if (n%2 == 0) {
                    alert('Выиграли керстики!')
                }
                else {
                    alert('Выиграли нолики!')
                }
            }

            n++
        }
    }
}

start(cells)