//? Solution

//elements DOM
const button = document.getElementById('button')
const errorMessage = document.getElementById('errorMessage')
const htmlResult = document.getElementById('result')
//button's behavior
button.addEventListener('click', getPicture)

//functions
function getPicture(e) {
	e.preventDefault();
	let valuePage = document.getElementById('inputPage').value;
	let valueLimit = document.getElementById('inputLimit').value;

	if(valuePage > 0 && valuePage <=10 &&
		valueLimit > 0 && valueLimit <=10){
		useRequest(`https://picsum.photos/v2/list?page=${valuePage}&limit=${valueLimit}`, htmlResult, showResult)
		if (!errorMessage.classList.contains('hidden')){
			errorMessage.classList.add('hidden')
		}
	} else if(valuePage > 0 && valuePage <=10) {
		errorMessage.classList.remove('hidden')
		errorMessage.textContent = '! Error, limit out of range from 1 to 10'
	} else if(valueLimit > 0 && valueLimit <=10) {
		errorMessage.classList.remove('hidden')
		errorMessage.textContent = '! Error, page number out of range 1 to 10'
	} else {
		errorMessage.classList.remove('hidden')
		errorMessage.textContent = '! Error, page number and limit out of range 1 to 10'
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

showPreviousData(htmlResult, showResult)
function showPreviousData(template, func){
	let previousJson = localStorage.getItem('temporaryJson')
	if (previousJson) {
		func(JSON.parse(previousJson), template)
	}
}
