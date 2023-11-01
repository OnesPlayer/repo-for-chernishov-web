let input = document.querySelector('#input');
let list = document.querySelector('#list');

input.addEventListener('keypress', function(event) {
	if (event.key == 'Enter') {
		let li = document.createElement('li');
		
		let task = document.createElement('span');
		task.classList.add('task');
		task.textContent = this.value;
        task.addEventListener('dblclick', function() {
            let inp = document.createElement('input')
            inp.value = this.textContent
            this.textContent = ''
            let self = this
            inp.addEventListener('keypress', function(event) {
                if (event.key == 'Enter') {
                    self.textContent = this.value
                    self.removeChild(this)
                }
            })
            this.appendChild(inp)
        })
		li.appendChild(task);
		
		let remove = document.createElement('span');
        remove.classList.add('remove');
        remove.textContent = 'удалить';
        remove.onclick = () => {
            list.removeChild(li)
        }
        li.appendChild(remove);
		
		let mark = document.createElement('span');
		mark.classList.add('mark');
		mark.textContent = 'сделано';
        mark.onclick = () => {
            task.classList.toggle('done')
        }
		li.appendChild(mark);
		
		list.appendChild(li);
		
		this.value = '';
	}
});