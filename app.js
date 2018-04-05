
$(document).ready(function() {


const api = "http://data.fixer.io/api/latest?access_key=7a6637717fc1790c29a2f7ea97a1044e"
	
		$.get(api, function(response) {
			console.log(response);

			$("input[type=button]").on("click", function(event){
					console.log(event);

					countryCurrency = $(this).val();

					response.rates[countryCurrency];

					let monies = $("input[type=text]").val();
					let eurMonies = monies / response.rates["USD"];
					let lastMonies = eurMonies * response.rates[countryCurrency];

					$("#output_amount").append("<p>" + lastMonies + "" + countryCurrency + ".<p>");

			});

	});

});	








// function convertCurrency(event) {
//   if ('type' in event.target && event.target.type === 'button') {
//     console.log('handle currency conversion here');
//   }



// }


// });
// document.body.addEventListener('click', convertCurrency);

