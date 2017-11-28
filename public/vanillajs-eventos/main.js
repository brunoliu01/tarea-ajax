document.addEventListener("DOMContentLoaded", function() {
	console.log("listo!");

	var forms = document.querySelectorAll("form"); // esto es igual a $('form')
	var form = forms[0]; //primera coincidencia

	form.addEventListener("submit", function(event) {
		event.preventDefault();
		var nombre = document.querySelectorAll("#nombre")
		console.log(nombre);
	});

	console.log(form);
});
