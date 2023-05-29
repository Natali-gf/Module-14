// Задание 5.

// Написать код приложения, интерфейс которого состоит из двух input и кнопки. В input можно ввести любое число.

// Заголовок первого input — «номер страницы».
// Заголовок второго input — «лимит».
// Заголовок кнопки — «запрос».
// При клике на кнопку происходит следующее:

// Если число в первом input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Номер страницы вне диапазона от 1 до 10»;
// Если число во втором input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Лимит вне диапазона от 1 до 10»;
// Если и первый, и второй input не в диапазонах или не являются числами — выводить ниже текст «Номер страницы и лимит вне диапазона от 1 до 10»;
// Если числа попадают в диапазон от 1 до 10 — сделать запрос по URL https://picsum.photos/v2/list?page=1&limit=10, где GET-параметр page — это число из первого input, а GET-параметр limit — это введённое число второго input.
// Пример. Если пользователь ввёл 5 и 7, то запрос будет вида https://picsum.photos/v2/list?page=5&limit=7.
// После получения данных вывести список картинок на экран.

// Если пользователь перезагрузил страницу, то ему должны показываться картинки из последнего успешно выполненного запроса (использовать localStorage).

//? Решение


const buttonTask5 = document.getElementById('buttonTask5')
const errorMessageTask5 = document.getElementById('errorMessageTask5')
const htmlResultTask5 = document.getElementById('resultTask5')

buttonTask5.addEventListener('click', getPicture)

function getPicture(e) {
	e.preventDefault();
	let valuePage = document.getElementById('inputPageTask5').value;
	let valueLimit = document.getElementById('inputLimitTask5').value

	if(valuePage > 0 && valuePage <=10 &&
		valueLimit > 0 && valueLimit <=10){
		useRequest(`https://picsum.photos/v2/list?page=${valuePage}&limit=${valueLimit}`, showResult)
		if (!errorMessageTask5.classList.contains('hidden')){
			errorMessageTask5.classList.add('hidden')
		}
	} else if(valuePage > 0 && valuePage <=10) {
		errorMessageTask5.classList.remove('hidden')
		errorMessageTask5.textContent = '! Ошибка, лимит вне диапазона от 1 до 10'
	} else if(valueLimit > 0 && valueLimit <=10) {
		errorMessageTask5.classList.remove('hidden')
		errorMessageTask5.textContent = '! Ошибка, номер страницы вне диапазона от 1 до 10'
	} else {
		errorMessageTask5.classList.remove('hidden')
		errorMessageTask5.textContent = '! Ошибка, номер страницы и лимит вне диапазона от 1 до 10'
	}

}
useRequest()
function useRequest(url, callback) {
	fetch('https://picsum.photos/v2/list?page=1&limit=10')
		.then((response) => response)
		.then((data) => { callback(data); console.log(data)})
		.catch(() => console.log('error'))
}

function showResult(result){
	htmlResultTask5.innerHTML = '';
		let resultImage = `
			<div class="result__box">
				<img class="result__image_task4" src="${result.url}">
			</div>`;
		htmlResultTask5.innerHTML = resultImage
}
