document.addEventListener("DOMContentLoaded", function() {
	console.log("listo!");

	var form = document.querySelectorAll("form"); // esto es igual a $('form')
	
	form[0].addEventListener("submit", function() {
		event.preventDefault();
		console.log("enviando");
	});

	console.log(form);
});