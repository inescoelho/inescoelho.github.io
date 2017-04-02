/**
 * Created by ines on 30-03-2017.
 */

$(function() {
    $("#navOption").click(function() {
        // remove classes from all
        $("li").removeClass("active");
    });
});

$(function() {
    $("li").click(function() {
        // remove classes from all
        $("li").removeClass("active");
        // add class to the one we clicked
        $(this).addClass("active");
    });
});
