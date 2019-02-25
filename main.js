var slider = $('#myRange');
var output = $('.count');
var val = slider.value;
var user_res, user_ques;

window.onload = function() {
	output.text(val);

	slider.on('input', function () {
		val = this.value;
		$('.count').text(val + ' totally real responses.');
	});
};

(function() {
	window.inputNumber = function(el) {
    var min = el.attr('min') || false;
    var max = el.attr('max') || false;

    var els = {};

    els.dec = el.prev();
    els.inc = el.next();

    el.each(function() {
      init($(this));
    });

    function init(el) {

      els.dec.on('click', decrement);
      els.inc.on('click', increment);

      function decrement() {
        var value = el[0].value;
        value--;
        if(!min || value >= min) {
          el[0].value = value;
        }
      }

      function increment() {
        var value = el[0].value;
        value++;
        if(!max || value <= max) {
          el[0].value = value++;
        }
      }
    }
  }
})();

inputNumber($('.input-number'));


$('#startapp').on('click', function() {
	setTimeout(function() {
		$('#main-inner').fadeOut();
	}, 300);
	setTimeout(function() {
		$('#input-panel').fadeIn();
	}, 550);
	initInput();
});

function initInput() {
	user_res = $('#myRange')[0].value;
	user_ques = $('.input-number')[0].value;
	var current = 0;
	var $panel = $('#input-panel');
	while (current < user_ques) {
		// var new_panel = $panel.clone();
		// $('#main-bg').append(new_panel);
		current++;
	}
}
