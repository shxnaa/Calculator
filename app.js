// Get references to elements
const num1 = document.querySelector('.num1');
const num2 = document.querySelector('.num2');
const selectOp = document.getElementById('selectOp');
const btn = document.getElementById('btn');
const resultDisplay = document.querySelector('.result');

btn.addEventListener('click', function () {
	const val1 = parseFloat(num1.value);
	const val2 = parseFloat(num2.value);
	let result = '';
	switch (selectOp.value) {
		case 'plus':
			result = val1 + val2;
			break;
		case 'min':
			result = val1 - val2;
			break;
		case 'dev':
			result = val2 !== 0 ? val1 / val2 : 'Error: Division by zero';
			break;
		case 'multi':
			result = val1 * val2;
			break;
		default:
			result = 'Invalid operation';
	}
	resultDisplay.textContent = 'Result: ' + result;
});
