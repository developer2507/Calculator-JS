const display = document.querySelector('.screen');

const btnValue = document.querySelectorAll('span');


for(let ittem of btnValue){

	ittem.addEventListener('click', (e) => {

		display.innerText += e.target.innerText;

		if (e.target.innerText == 'C') {
			display.innerText = '';
		}

		if(e.target.innerText == '='){

			try{
				display.innerText = eval(display.innerText.slice(0,-1));
			}
			catch{
				display.innerText = 'Error';
			}
		}
	});
}