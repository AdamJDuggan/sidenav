$(document).ready(function () {
    if (window.matchMedia('(max-width: 800px)').matches) {

        $('#sidebar-wrapper').removeClass('visible')
        $('#wrapper').removeClass('visible');

        $('#sidebar-btn').click(function () {

            $('#sidebar-wrapper').toggleClass('visible');
            $('#wrapper').toggleClass('visible');
        });
    } else {
        $('#sidebar-btn').click(function () {

            $('#sidebar-wrapper').toggleClass('visible');
            $('#wrapper').toggleClass('visible');
        });
    }
});