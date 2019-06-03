document.getElementById('singUpNavigator').onclick = function(){
	document.getElementById	('titleLogin').innerHTML = "ثبت نام";
	document.getElementById	('subTitleLogin').innerHTML = "از اینکه داری به جمع ریحونیا می پیوندی خیلی خوشحالیم";
	
	document.getElementById('divOfLogin').style.display = "none";
	document.getElementById('divOfRegister').style.display = "block";

	document.getElementById	('rememberLogin').style.display = "none";
}

document.getElementById('logInNavigator').onclick = function(){
	document.getElementById	('titleLogin').innerHTML = "ورود";
	document.getElementById	('subTitleLogin').innerHTML = "ایمیل و یا شماره تلقن خود را وارد کنید";
	
	document.getElementById('divOfRegister').style.display = "none";
	document.getElementById('divOfLogin').style.display = "block";

	document.getElementById	('rememberLogin').style.display = "block";
}
