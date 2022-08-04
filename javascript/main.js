$('.btn-menu').on('click', function () {
    $('#mainnav-mobi').slideToggle(100);
    $(this).toggleClass('active');
    if ('.btn-menu.active') {
        $('.tf-sidebar').slideToggle(100);
        $(this).toggleClass('active');
        $('.sidebar_all').attr('transform','translateX(100px)');
    }
    else {
        $('.tf-sidebar.active').hide();
    }
});


