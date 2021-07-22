// $(document).ready(function() {
// Create two variable with the names of the months and days in an array

var DataHora = {
	load: function(){		
	var monthNames = [ "<span>de</span> Janeiro", "<span>de</span> Fevereiro", "<span>de</span> Março", "<span>de</span> Abril", "<span>de</span> Maio", "<span>de</span> Junho", "<span>de</span> Julho", "<span>de</span> Agosto", "<span>de</span> Setembro", "<span>de</span> Outubro", "<span>de</span> Novembro", "<span>de</span> Dezembro" ]; 
	var dayNames= ["Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sábado"];

	// Create a newDate() object
	var newDate = new Date();
	// Extract the current date from Date object
	newDate.setDate(newDate.getDate());
	// Output the day, date, month and year   
	// $('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());
	$('#date span').html(newDate.getDate() + ' ' + monthNames[newDate.getMonth()]);
	$('#day span').html(dayNames[newDate.getDay()]);

	setInterval( function() {
		// Create a newDate() object and extract the seconds of the current time on the visitor's
		var seconds = new Date().getSeconds();
		// Add a leading zero to seconds value
		$("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
		},1000);
		
	setInterval( function() {
		// Create a newDate() object and extract the minutes of the current time on the visitor's
		var minutes = new Date().getMinutes();
		// Add a leading zero to the minutes value
		$("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
	    },1000);
		
	setInterval( function() {
		// Create a newDate() object and extract the hours of the current time on the visitor's
		var hours = new Date().getHours();
		// Add a leading zero to the hours value
		$("#hours").html(( hours < 10 ? "0" : "" ) + hours);
	    }, 1000);	
	}
};
// });
