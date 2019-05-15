// Navbar scroll
$(window).scroll(function () {
    if ($(window).scrollTop() > 45) {
        $('.navbar').addClass('navbar--scrolled');
    } else {
        $('.navbar').removeClass('navbar--scrolled');
    }
});

// Enable tooltips
$(function() {
    $('[data-toggle="tooltip"]').tooltip();
})


function Parallax() {
	scrollPos = $(this).scrollTop();
    vh = $(window).height(); // get viewport height

	$('#parallax-hero').css({
		'transform': "translateY("+(scrollPos/3)+"px)",
		'opacity': 1-(scrollPos/450)
	});

    if (scrollPos > vh) {
        $('#parallax-hero').css({
            'transform': 'translateY(200px)',
            'opacity': '0'
        });
    }
}

$(window).scroll(function() {
	Parallax();
});
