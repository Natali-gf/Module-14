// Задание 4

// Напишите код приложения, интерфейс которого представляет собой input и кнопку. В input можно ввести любое число. При клике на кнопку происходит следующее:

// Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
// Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по URL https://picsum.photos/v2/list?limit=10, где get-параметр limit — это введённое число.
// Пример. Если пользователь ввёл 5, то запрос будет вида: https://picsum.photos/v2/list?limit=5.
// После получения данных вывести ниже картинки на экран.
//! У меня не открывалась ссылка-пример, поэтому результат я отобразила на своё усмотрение.

//? Решение


// const button = document.querySelector('.task3__button')
// const errorMessage = document.querySelector('.task3__error')
// const htmlResult = document.querySelector('.task3__result')

// button.addEventListener('click', getPicture)

// function getPicture(e) {
// 	e.preventDefault();
// 	let value = document.querySelector('.task3__input').value
// console.log(errorMessage.classList.contains('hidden'));
// 	if(value > 0 && value <=10){
// 		useRequest('https://picsum.photos/v2/list?limit=10', showResult, value)
// 		if (!errorMessage.classList.contains('hidden')){
// 			errorMessage.classList.add('hidden')
// 		}
// 	} else {
// 		errorMessage.classList.remove('hidden')
// 	}

// }

// // useRequest('https://picsum.photos/v2/list?limit=10', showResult, value)
// function useRequest(url, callback, number) {
// 	const xhr = new XMLHttpRequest();

// 	xhr.open('GET', url, true);

// 	xhr.onload = function(){
// 		if(xhr.status !=200){
// 			console.log('Status:', xhr.status);
// 		} else {
// 			const result = JSON.parse(xhr.response);
// 			console.log(result);
// 			if (callback) {
// 				callback(result, number)
// 			}
// 		}
// 	}
// 	xhr.onerror = function(){
// 		console.log('Error. Status:', xhr.status);
// 	}
// 	xhr.send()
// }

// function showResult(result, number){
// 	console.log(result[number]);
// 	let jsonResult = `
// 			<div class="result__container">
// 				<img class="result__image" src="${result[--number].download_url}" width="500px">
// 				<p class="result__author">${result[--number].author}</p>
// 			</div>`
// 		htmlResult.innerHTML = jsonResult
// }

// function useRequest(url, callback, number) {
	// const xhr2 = new XMLHttpRequest();

	// xhr2.open('GET', 'https://picsum.photos/', true);

	// xhr2.onload = function(){
	// 	if(xhr2.status !=200){
	// 		console.log('Status:', xhr2.status);
	// 	} else {
	// 		const result = JSON.parse(xhr2.response);
	// 		console.log(result);

	// 	}
	// }
	// xhr2.onerror = function(){
	// 	console.log('Error. Status:', xhr2.status);
	// }
	// xhr2.send()

