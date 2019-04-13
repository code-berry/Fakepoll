// Initialize your variables, sir!
var slider = $('#myRange');
var output = $('.count');
var val = slider.value;
var user_res, user_ques;

// onload function, had trouble with storing objects
// so I made sure it was being run on the pageload
window.onload = function() {
	output.text(val);
	slider.on('input', function () {
		val = this.value;
		$('.count').text(val + ' totally real responses.');
	});
};

// integer number ui
(function() {
	window.inputNumber = function(el) {
	// initialize variables, find min and max from html
    var min = el.attr('min') || false;
    var max = el.attr('max') || false;
    var els = {};
    
    // using prev() and next()
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

// run inputNumber()
inputNumber($('.input-number'));

// listener for the "go" button
$('#startapp').on('click', function() {
	// show proper content
	setTimeout(function() {
		$('#main-inner').fadeOut();
	}, 300);
	setTimeout(function() {
		$('#input-panel').fadeIn();
	}, 550);
	// get initial input from user
	user_res = $('#myRange')[0].value;
	user_ques = $('.input-number')[0].value;
});

$('body').css('background-color', 'black');

// function initInput() {
// 	user_res = $('#myRange')[0].value;
// 	user_ques = $('.input-number')[0].value;
// }
