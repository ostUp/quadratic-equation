const button = document.getElementById('btn')

button.addEventListener('click', () => {
	const res1 = document.getElementById('res1')
	const res2 = document.getElementById('res2')

	let a = document.querySelector('#input1').value
	let b = document.querySelector('#input2').value
	let c = document.querySelector('#input3').value
	let discriminant = (b * b - 4 * a * c)
	document.getElementById('dis').value = discriminant

	if (discriminant > 0) {
		res1.value = (-b + Math.sqrt(discriminant)) / (2 * a).toFixed(2)
		res2.value = (-b - Math.sqrt(discriminant)) / (2 * a).toFixed(2)
	} else if (discriminant < 0) {
		res1.value = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2)
		res2.value = (-b / (2 * a)).toFixed(2)
	} else if (discriminant == 0) {
		res1.value = -b / (2 * a).toFixed(2)
		res2.value = -b / (2 * a).toFixed(2)
	} else if (isNaN(discriminant) === true) {
		confirm('Введи всьо нормально! Ok?)')
	}
})
