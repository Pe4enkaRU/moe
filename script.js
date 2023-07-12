let btns = document.querySelectorAll('#period');
let money = document.querySelectorAll('#price');


for (let i = 0; i < btns.length; i++) {
	btns[i].onclick = function(){

		for (let x = 0; x < btns.length; x++) 
		{
			btns[x].classList.remove('active')
		}

		if (btns[i].classList.contains('active') === false ) 
		{ 
			btns[i].classList.add("active");	
		} 
	}	
}

for (let y = 0; y < money.length; y++) {
	money[y].onclick = function(){

		for (let x = 0; x < money.length; x++) 
		{
			money[x].classList.remove('active')
		}

		if (money[y].classList.contains('active') === false ) 
		{ 
			money[y].classList.add("active");	
		} 
	}
}