

$.ajax ({
	method:"get",
	url:("http://data.fixer.io/api/latest?access_key=7a6637717fc1790c29a2f7ea97a1044e");
	datatype: "json",
});



function convertCurrency(event) {
  if ('type' in event.target && event.target.type === 'button') {
    console.log('handle currency conversion here');
  }
}

document.body.addEventListener('click', convertCurrency);