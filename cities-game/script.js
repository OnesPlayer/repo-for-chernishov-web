let field = document.querySelector('#field');
let message = document.querySelector('#message');
let cities = {}, n = 0

field.addEventListener('keypress', function(event) {
    if (event.key == 'Enter') {
        if (n ==  0) {
            cities[field.value] = 1
            n++
        }
        else if (field.value[0] == Object.keys(cities)[Object.keys(cities).length - 1][(Object.keys(cities)[Object.keys(cities).length - 1]).length - 1] && !(field.value in cities)) {
            cities[field.value] = 1
            n++
        }
        message.textContent = Object.keys(cities)
    }
})