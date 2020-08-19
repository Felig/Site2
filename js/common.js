$(document).ready(function() {

	$(".auth_buttons").click(function() {
		$(this).next().slideToggle();
	});
	$(".main_mnu_button").click(function() {
		$(".maian_mnu ul").slideToggle();
	});

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$(".scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 3,
		
	});
	owl.on(".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function() {
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function() {
		owl.trigger("owl.prev");
	});


	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#callback").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("#callback").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});


	//Настройка прелоудера
	$(".preloader").delay(500).fadeOut('slow');



	//Эффект Паралакс
	$(window).scroll(function() {
		var st=$(this).scrollTop();

		$(".zzz").css({
		"transform" : "translate(0%, "+ st/5 +"%"
		});

	});


});


//Кнопка "Наверх"
	$(window).scroll(function() {
		if ($(this).scrollTop() > 500) {
			if ($('#upbutton').is(':hidden')) {
				$('#upbutton').css({opacity : 1}).fadeIn('slow');
			}
		} else { $('#upbutton').stop(true, false).fadeOut('fast'); }
	});
	$('#upbutton').click(function() {
		$('html, body').stop().animate({scrollTop : 0}, 500);
	});





// скрипт для игры-слайдера

	var tim;
	window.onload = function() { // запуск слайдера после загрузки документа
		slider.init();
	};
	var slider = {
		slides: 4, //количество слайдов
		frame:0, // текущий кадр для отображения - номер картинки 
		slidesq: 4, //количество слайдов
		frameq:0, // текущий кадр для отображения - номер картинки 
		slidesw: 4, //количество слайдов
		framew:0, // текущий кадр для отображения - номер картинки 

		set: function(image) { // установка нужного смещения картинки фона 
			document.getElementById("scr").style.backgroundPositionX = -image*250+"px";
		},
		bet: function(image) { 	
			document.getElementById("scr1").style.backgroundPositionX = -image*250+"px";
		},
		zet: function(image) { 
			document.getElementById("scr2").style.backgroundPositionX = -image*250+"px";
		},
		init: function() { // запуск слайдера с картинкой с нулевым индексом
			this.set(0);
		},
		left: function() { // крутим на один кадр влево
			this.frame--;
			if(this.frame < 0) this.frame = this.slides-1; 
			this.set(this.frame);
		},
		right: function() { // крутим на один кадр вправо

			this.frame++;
			if(this.frame == this.slides) this.frame = 0; //дошли до конца - переходим в начало
			this.set(this.frame);		
		},
		leftq: function() { // крутим на один кадр влево
			this.frameq--;
			if(this.frameq < 0) this.frameq = this.slidesq-1; 
			this.bet(this.frameq);
		},
		rightq: function() { // крутим на один кадр вправо
			this.frameq++;
			if(this.frameq == this.slidesq) this.frameq = 0; //дошли до конца - переходим в начало
			this.bet(this.frameq);		
		},
		leftw: function() { // крутим на один кадр влево
			this.framew--;
			if(this.framew < 0) this.framew = this.slidesw-1; 
			this.zet(this.framew);
		},
		rightw: function() { // крутим на один кадр вправо
			this.framew++;
			if(this.framew == this.slidesw) this.framew = 0; //дошли до конца - переходим в начало
			this.zet(this.framew);		
		},
		};


	
	
	//доступ: аудио
	var Bird_song = document.getElementsByTagName("audio")[0];
	var Bird_img = document.getElementsByTagName("img")[9];
	
	var Be_song = document.getElementsByTagName("audio")[1];
	var Be_img = document.getElementsByTagName("img")[10];
	
	var Gav_song = document.getElementsByTagName("audio")[2];
	var Gav_img = document.getElementsByTagName("img")[11];
	
	var Mu_song = document.getElementsByTagName("audio")[3];
	var Mu_img = document.getElementsByTagName("img")[12];
	
	var Murr_song = document.getElementsByTagName("audio")[4];
	var Murr_img = document.getElementsByTagName("img")[13];
	
		
	// Птичка
	Bird_img.addEventListener("click", function (){
	if (Bird_song.paused == true)
	{
		Bird_img.style = "filter: drop-shadow(0px 0px 15px green)";
		Bird_img.title = "Выключить";
		Bird_song.play();
	}
	else
	{
		Bird_img.style = "filter: drop-shadow(0px 0px 3px blue)";
		Bird_img.title = "Включить";
		Bird_song.pause();
	}
	}
	,false);
	
	
	// Барашек
	Be_img.addEventListener("click", function (){
	if (Be_song.paused == true)
	{
		Be_img.style = "filter: drop-shadow(0px 0px 15px green)";
		Be_img.title = "Выключить";
		Be_song.play();	
	}
	else
	{
		Be_img.style = "filter: drop-shadow(0px 0px 3px blue)";
		Be_img.title = "Включить";
		Be_song.pause();
	}
	}
	,false);
	
	
	// Собачка
	Gav_img.addEventListener("click", function (){
	if (Gav_song.paused == true)
	{
		Gav_img.style = "filter: drop-shadow(0px 0px 15px green)";
		Gav_img.title = "Выключить";
		Gav_song.play();	
	}
	else
	{
		Gav_img.style = "filter: drop-shadow(0px 0px 3px blue)";
		Gav_img.title = "Включить";
		Gav_song.pause();
	}
	}
	,false);
	
	
	// Коровка
	Mu_img.addEventListener("click", function (){
	if (Mu_song.paused == true)
	{
		Mu_img.style = "filter: drop-shadow(0px 0px 15px green)";
		Mu_img.title = "Выключить";
		Mu_song.play();	
	}
	else
	{
		Mu_img.style = "filter: drop-shadow(0px 0px 3px blue)";
		Mu_img.title = "Включить";
		Mu_song.pause();
	}
	}
	,false);
	
	
	// Котик
	Murr_img.addEventListener("click", function (){
	if (Murr_song.paused == true)
	{
		Murr_img.style = "filter: drop-shadow(0px 0px 15px green)";
		Murr_img.title = "Выключить";
		Murr_song.play();	
	}
	else
	{
		Murr_img.style = "filter: drop-shadow(0px 0px 3px blue)";
		Murr_img.title = "Включить";
		Murr_song.pause();
	}
	}
	,false);
	

	



