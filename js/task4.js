//? Solution

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
		.then((data) => callback(data))
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
