// adding the left margin as it not workign from the css directly
// so this will add top margin to centre image vertically \
// later adds the left margin to have spaces between the boxes

$(window).on("load", function() {
    $('.destination__card__edited img').each(function() {
        var containerHeight = $('.destination__card__edited').height();
        var imageHeight = $(this).height();
        var marginTop = (containerHeight - imageHeight) / 2;
        $(this).css('margin-top', marginTop + 'px');
        
        // Can adjust this value as needed
    });
});
