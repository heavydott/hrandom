var $name = $('#name');
var $containerNumber = $('#container-number');
var $in = $('#in');
var $result = $('#result');
var $btn = $('#btn');
var $containerCoin = $('#container-coin');
var $container = $('#container');
var $coin = $('#coin');

// Check if number
function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

// Coin / Number
$name.on('click', function(e) {
	e.preventDefault();
	e.stopPropagation();

	if($containerNumber.css('display') == 'block') {
		$containerNumber.css('display', 'none');
		$containerCoin.css('display', 'block');
		$name.html('NUMBER');
	} else {
		$containerNumber.css('display', 'block');
		$containerCoin.css('display', 'none');
		$name.html('COIN');
	}
});

// Random button event
$btn.on('click', function(e) {
	e.preventDefault();
	e.stopPropagation();

	var data = $in.val();

	if(isNumeric(data)) {
		if((data / 10000000000) < 1) {
			var random;
			var $rand;

			data = parseInt(data, 10);

			random = Math.floor((Math.random() * data) + 1);

			$rand = '<p>' + random + '</p>';

			$result.html($rand);
		} else {
			$result.html('<span>Enter a smaller number</span>');
		}
	} else {
		$result.html('<span>Enter a number</span>');
	}
});

// Heads or tails event
$coin.on('click', function(e) {
	e.preventDefault();
	e.stopPropagation();

	var flip, flipBack;
	var randCoin = Math.floor((Math.random() * 10) + 1);

	$coin.off('click');

	flip = setInterval(function() {
		$coin.addClass('flip');
	}, 100);

	setTimeout(function() {
		flipBack = setInterval(function() {
			$coin.removeClass('flip');
		}, 150);
	}, 100);

	$container.addClass('bigger');

	setTimeout(function() {
		$container.removeClass('bigger');
	}, 1500);

	setTimeout(function() {
		clearInterval(flip);
		clearInterval(flipBack);

		if(randCoin > 5) {
			if(!$coin.hasClass('flip')) {
				$coin.addClass('flip');
			}
		} else {
			if($coin.hasClass('flip')) {
				$coin.removeClass('flip');
			}
		}
	}, 2000);

	setTimeout(function() {
		$coin.on('click', headsOrTails);
	}, 2500);
});

$('.tails').on('click', function(e) {
	e.preventDefault();
	e.stopPropagation();
});

$('.heads').on('click', function(e) {
	e.preventDefault();
	e.stopPropagation();
});