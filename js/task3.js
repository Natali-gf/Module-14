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
	let value = document.getElementById('input').value

	if(value > 0 && value <=10){
		useRequest(`https://picsum.photos/v2/list?limit=${value}`, showResult)
		if (!errorMessage.classList.contains('hidden')){
			errorMessage.classList.add('hidden')
		}
	} else {
		errorMessage.classList.remove('hidden')
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
	htmlResult.innerHTML = '';
	result.forEach (elem => {
		let jsonResult = `
			<div class="result__box">
				<img class="result__image" src="${elem.download_url}" width="500px">
				<p class="result__author">${elem.author}</p>
			</div>`;
		htmlResult.innerHTML += jsonResult
	})
}
