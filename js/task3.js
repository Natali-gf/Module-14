// Задание 3

// Напишите код приложения, интерфейс которого представляет собой input и кнопку. В input можно ввести любое число. При клике на кнопку происходит следующее:

// Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
// Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по URL https://picsum.photos/v2/list?limit=10, где get-параметр limit — это введённое число.
// Пример. Если пользователь ввёл 5, то запрос будет вида: https://picsum.photos/v2/list?limit=5.
// После получения данных вывести ниже картинки на экран.

//? Решение

//elements DOM
const buttonTask3 = document.getElementById('buttonTask3')
const errorMessageTask3 = document.getElementById('errorTask3')
const htmlResultTask3 = document.getElementById('resultTask3')
//button's behavior
buttonTask3.addEventListener('click', getPicture)
//functions
function getPicture(e) {
	e.preventDefault();
	let value = document.getElementById('inputTask3').value

	if(value > 0 && value <=10){
		useRequest(`https://picsum.photos/v2/list?limit=${value}`, showResult)
		if (!errorMessageTask3.classList.contains('hidden')){
			errorMessageTask3.classList.add('hidden')
		}
	} else {
		errorMessageTask3.classList.remove('hidden')
	}

}

function useRequest(url, callback) {
	const xhr = new XMLHttpRequest();

	xhr.open('GET', url, true);

	xhr.onload = function(){
		if(xhr.status !=200){
			console.log('Status:', xhr.status);
		} else {
			const result = JSON.parse(xhr.response);
			if (callback) {
				callback(result)
			}
		}
	}
	xhr.onerror = function(){
		console.log('Error. Status:', xhr.status);
	}
	xhr.send()
}

function showResult(result){
	htmlResultTask3.innerHTML = '';
	result.forEach (elem => {
		let jsonResult = `
			<div class="result__box">
				<img class="result__image" src="${elem.download_url}" width="500px">
				<p class="result__author">${elem.author}</p>
			</div>`;
		htmlResultTask3.innerHTML += jsonResult
	})
}
