var $in = $('#in');
var $result = $('#result');
var $btn = $('#btn');

function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

$btn.on('click', function() {
	var data = $in.val();

	if(isNumeric(data)) {
		var random;
		var $rand;

		data = parseInt(data, 10);

		random = Math.floor((Math.random() * data) + 1);

		$rand = '<p>' + random + '</p>';

		$result.html($rand);
	}
});