
let lastScroll = 0;

$(window).scroll((event)=> {
	let st = $(this).scrollTop();
	if (st === 0) {
		$('nav').removeClass('solidBrah');
	} else if (st > lastScroll) {
		$('nav').addClass('solidBrah');
	}
	lastScroll = st;
});

let numberOfResponses =  $('#hidden').text();
numberOfResponses = parseInt(numberOfResponses);
localStorage.setItem('answer', JSON.stringify(numberOfResponses));