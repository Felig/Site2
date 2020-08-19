			
/*Функция для страницы "price.html". Нужна для сопостовления выделенных пользователем
 форм и выдачи соответствующе результата в виде цифры в итоговой форме. 
*/
			function calc()
			{
				var sum = 0;
				var view = 'd'; // default
				
				var dl = document.getElementsByName("dl");
				for (var i = 0; i < dl.length; i++)  {
					if  (dl[i].checked) {var n = i;}
					
					if(n == 1){view = 's';}
					if(n == 2){view = 'k';}
				}
				
				var color = document.getElementsByName("color")[0];
				if (color.checked){
					var q = document.getElementsByName(view+'1')[0].value;
					sum = sum + Number(q);
				}
				var cut = document.getElementsByName("cut")[0];
				if (cut.checked){
					q = document.getElementsByName(view+'2')[0].value;
					sum = sum + Number(q);
				}
				var fler = document.getElementsByName("fler")[0];
				if (fler.checked){
					q = document.getElementsByName(view+'3')[0].value;
					sum = sum + Number(q);
				}
				
				document.getElementById('itog').value = sum; }



/*Эта функция отвечает за правильность 
введенной в формы информации, 
она объединяет в себе действие других функций,
 указанных ниже, которые привязаны 
каждая к своей форме, соответсвенно 
(имя, фамилия, телефон, возраст и email)*/
			function validate(forma)
			{
				x = document.getElementsByTagName("span");
				for (var i=x.length-1; i>=0; i--)
				{
					x[i].parentNode.removeChild(x[i]);
					console.log(i)
				}
				console.log(forma.ima)
				var ima = isFullText(forma.ima);
				var family = isFullText(forma.family);
				var tell = isNumb(forma.tell);
				var age = isCorrect(forma.age);
				var mail = validateEmail(forma.mail);
				return ima && family && tell && age && mail;}
			
			

//	Проверка на текст для форм ИМЯ и ФАМИЛИЯ
			function isFullText(text)
			{text.style.backgroundColor = "white";
		if (text.value == "")
		{
			var item = document.createElement("span");
			item.innerHTML = " Поле не должно быть пустым";
			text.style.backgroundColor = "pink";
			text.parentNode.appendChild(item);
			return false;
		}
		var pattern = /^[a-zа-я]+$/i;
		if (!pattern.test(text.value))
		{
			var item = document.createElement("span");
			item.innerHTML = " Недопустимый символ(ы)";
			text.style.backgroundColor = "pink";
			text.parentNode.appendChild(item);
			return false;
		}
	return true;
	}
	

//Проверка на число для формы ТЕЛЕФОН
	function isNumb(text)
	{text.style.backgroundColor = "white";
		//console.log(text);
		if (text.value == "")
		{
			var item = document.createElement("span");
			item.innerHTML = " Поле не должно быть пустым";
			text.style.backgroundColor = "pink";
			text.parentNode.appendChild(item);
			return false;
		}
		
		var pattern = /^[/+0-9]+$/i;
		if (!pattern.test(text.value))
		{
			var item = document.createElement("span");
			item.innerHTML = " Недопустимый символ(ы)";
			text.style.backgroundColor = "pink";
			text.parentNode.appendChild(item);
			return false;
		}
	return true;}
	
// Проверка корректности введенного ВОЗРАСТА	
	function isCorrect(text)
	{ text.style.backgroundColor = "white";
	var num = +text.value;
	console.log(num)
	if (isNaN(num) || num<=6 || num>120)
	{
		var item = document.createElement("span");
		item.innerHTML = " Возраст должен быть более 6 и менее 120 лет, в поле можно вводить только цифры";
		text.parentNode.appendChild(item);
		text.style.backgroundColor = "pink";
		return false;
	}
	return true;
	
}

// Пооверка на корректность введенного EMAIL
function validateEmail(mail)
{
	var pattern = /^\w+@\w+\.[a-z]{2,3}$/i;
	mail.style.backgroundColor = "white";
		//console.log(mail);
		if (!pattern.test(mail.value))
		{
			var item = document.createElement("span");
			item.innerHTML = " Некорректный е-mail";
			mail.style.backgroundColor = "pink";
			mail.parentNode.appendChild(item);
			return false;
		}
		return true;
	}