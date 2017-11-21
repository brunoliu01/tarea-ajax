$(document).ready(function () {
	$('#btn').on("click", function(e) {
		e.preventDefault();
		var nombre = $('#nombre').val();
		var sexo = $('input[name="gender"]:checked').val();
		var mensaje = $('#textA').val();
		var hobbie = $('input[name="hobbies"]:checked');
		var hobbies = new Array();

		for (var i = 0; i < hobbie.length; i++) {
			var temp = hobbie[i];
			hobbies.push(temp.value);
		}
		var params = {
			'nombre':nombre,
			'sexo': sexo,
			'mensaje': mensaje,
			'hobbies': hobbies
		}

		$.get('/find', params)
			.done(function(data) {
				console.log(data.data);
			});

		$.post('/find', params)
			.done(function(data) {
				console.log(data.data);
			});
	});
});