$('.single-item').slick();

//back to the top button
// Only enable if the document has a long scroll bar
// Note the window height + offset
if ( ($(window).height() + 100) < $(document).height() ) {
    $('#back-to-top-button').removeClass('hidden').affix({
        // how far to scroll down before link "slides" into view
        offset: {top:100}
    });
}
$('#backToTopBtn').click(function(){
    $('html,body').animate({scrollTop:0},'slow');return false;
});
