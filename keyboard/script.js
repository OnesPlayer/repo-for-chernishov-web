let name   = document.querySelector('#name');
let price  = document.querySelector('#price')
let amount = document.querySelector('#amount')
let add    = document.querySelector('#add')
let table  = document.querySelector('#table')
let total  = document.querySelector('#total')

add.addEventListener('click', function() {
	let tr = document.createElement('tr');
	
	allowEdit(createCell(tr, name.value, 'name'));
    allowEdit(createCell(tr, price.value, 'price'));
    allowEdit(createCell(tr, amount.value, 'amount'));
	createCell(tr, price.value * amount.value, 'cost');
	createCell(tr, 'удалить', 'remove').onclick = () => {
        table.removeChild(tr)
        recountTotal()
    };
	
	table.appendChild(tr);
    recountTotal()
});

function createCell(tr, value, name) {
    td = document.createElement('td')
    td.textContent = value
    td.classList.add(name)
    tr.appendChild(td)
    return td
}

function recountTotal() {
	let costs = table.querySelectorAll('.cost'), result = document.querySelector('#total')
	let sum = 0
	if (costs) {
		for (const i of costs) {
            sum += +i.textContent
        }
        result.textContent = sum
	}
}

function allowEdit(td) {
	td.addEventListener('dblclick', function() {
		let text = td.textContent
		td.textContent = '';
		
		let input = document.createElement('input');
		input.value = text;
		input.focus();
		td.appendChild(input);
		
		input.addEventListener('keydown', function(event) {
			if (event.key == 'Enter') {
				td.textContent = this.value;

                if (td.classList.contains('price') || td.classList.contains('amount')) {
					if (td.classList.contains('price')) {
                        let cost_td = td.nextElementSibling.nextElementSibling
                        cost_td.textContent = +td.textContent * +td.nextElementSibling.textContent
                    }
                    else {
                        let cost_td = td.nextElementSibling
                        cost_td.textContent = +td.textContent * +td.previousElementSibling.textContent
                    }
                    recountTotal()
				}
			}
		});
	});
}