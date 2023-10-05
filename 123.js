function func(num) {
    return num**2
}

function test(arr) {
	for (let i = 0; i < arr.length; i++) {
		arr[i] = func(i);
	}
	
	return arr;
}

const ar = [1, 2, 3, 4]
ar[0] = 2
console.log(test(ar))