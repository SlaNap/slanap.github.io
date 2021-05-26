function kg_off () {
	document.getElementById("kom_green").className = "kg_off";
	document.getElementById("bg2").style.display = "none";
}
function kr_off () {
	document.getElementById("kom_red").className = "kr_off";
	document.getElementById("bg2").style.display = "none";
}

function wlacz_komunikat () {
	document.getElementById("kom_green").className = "kg_on";
	document.getElementById("bg2").style.display = "block";
}


window.onload = function (){
	var menu_button = document.getElementById("menu_button");
	menu_button.onclick = function() {
		if(document.getElementById("menu").style.display == "none"){
 			 document.getElementById("menu").style.display="block";
		} else {
			document.getElementById("menu").style.display = "none";
		}
	}
	
	var login_input = document.getElementById("login_in");
	login_input.onfocus = function() {
		document.getElementById("login").className = "login big";
		document.getElementById("bg2").style.display = "block";
		document.getElementById("button_ok").style.display = "block";
		document.getElementById("body").style.overflow = "hidden";  // wyłączanie suwaków
	}
	
	var haslo_input = document.getElementById("haslo_in");
	haslo_input.onfocus = function() {
		document.getElementById("haslo").className = "haslo big";
		document.getElementById("bg2").style.display = "block";
		document.getElementById("button_ok").style.display = "block";
		document.getElementById("body").style.overflow = "hidden";  // wyłączanie suwaków

	}
	
	var button_ok = document.getElementById("button_ok"); 
	button_ok.onclick = function() {
		document.getElementById("login").className = "login small";
		document.getElementById("haslo").className = "haslo small";
		document.getElementById("bg2").style.display = "none";
		document.getElementById("button_ok").style.display = "none";
		document.getElementById("body").style.overflow = "visible";
	}
	
	wlacz_komunikat ();
}