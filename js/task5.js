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


//elements DOM
const buttonTask5 = document.getElementById('buttonTask5')
const errorMessageTask5 = document.getElementById('errorMessageTask5')
const htmlResultTask5 = document.getElementById('resultTask5')
//button's behavior
buttonTask5.addEventListener('click', getPicture)

//functions
function getPicture(e) {
	e.preventDefault();
	let valuePage = document.getElementById('inputPageTask5').value;
	let valueLimit = document.getElementById('inputLimitTask5').value;

	if(valuePage > 0 && valuePage <=10 &&
		valueLimit > 0 && valueLimit <=10){
		useRequest(`https://picsum.photos/v2/list?page=${valuePage}&limit=${valueLimit}`, htmlResultTask5, showResult)
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

function useRequest(url, template, callback) {
	fetch(url)
		.then(response => response.json())
		.then((data) => {
			localStorage.setItem('temporaryJson', JSON.stringify(data));
			return callback(data, template)})
		.catch(() => console.log('error'))
}

function showResult(result, template){
	template.innerHTML = '';
	result.forEach (elem => {
		let jsonResult = `
			<div class="result__box">
				<img class="result__image" src="${elem.download_url}" width="500px">
				<p class="result__author">${elem.author}</p>
			</div>`;
			template.innerHTML += jsonResult
	})
}

showPreviousData(htmlResultTask5, showResult)
function showPreviousData(template, func){
	let previousJson = localStorage.getItem('temporaryJson')
	if (previousJson) {
		func(JSON.parse(previousJson), template)
	}
}
