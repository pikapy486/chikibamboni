let is_cours_open=false;


function start(argument) {

	if (is_cours_open==false) {
		document.getElementById("courses").style.height="2000px";
		document.getElementById('f').innerHTML="закрыть курсы";
	}

	if (is_cours_open==true) {
		document.getElementById("courses").style.height="0px";
		document.getElementById("f").innerHTML="показать курсы"
	}

	is_cours_open=!is_cours_open


}