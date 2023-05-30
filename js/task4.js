// Задание 4

// Напишите код приложения, интерфейс которого представляет собой 2 input и кнопку submit. В input можно ввести любое число.

// При клике на кнопку происходит следующее:

// Если оба числа не попадают в диапазон от 100 до 300 или введено не число — выводить ниже текст «одно из чисел вне диапазона от 100 до 300»;
// Если числа попадают в диапазон от 100 до 300 — сделать запрос c помощью fetch по URL https://picsum.photos/200/300, где первое число — ширина картинки, второе — высота.
// Пример. Если пользователь ввёл 150 и 200, то запрос будет вида https://picsum.photos/150/200.
// После получения данных вывести ниже картинку на экран.

//? Решение

//elements DOM
const button = document.getElementById('button')
const errorMessage = document.getElementById('error')
const htmlResult = document.getElementById('result')
//button's behavior
button.addEventListener('click', getPicture)
//functions
function getPicture(e) {
	e.preventDefault();
	let valueWidth = document.getElementById('inputWidth').value;
	let valueHeight = document.getElementById('inputHeight').value

	if(valueWidth >= 100 && valueWidth <=300 &&
		valueHeight >= 100 && valueHeight <=300){
		useRequest(`https://picsum.photos/${valueWidth}/${valueHeight}`, showResult)
		if (!errorMessage.classList.contains('hidden')){
			errorMessage.classList.add('hidden')
		}
	} else {
		errorMessage.classList.remove('hidden')
	}
}

function useRequest(url, callback) {
	fetch(url)
		.then((response) => response)
		.then((data) => callback(data)) //json invalid, невозможно распарсить с этого сайта
		.catch(() => console.log('error'))
}

function showResult(result){
	htmlResult.innerHTML = '';
		let resultImage = `
			<div class="result__box">
				<img class="result__image_task4" src="${result.url}">
			</div>`;
		htmlResult.innerHTML = resultImage
}
