(function($) {

    $(".jsOpenModal").customModal({
        btnOpenModal: '.jsOpenModal',
        modalBlock: '.jsModal',
        speedOpenModal: 400,
        btnClose: true,
        overlayClose: true,
        modalShow: 'top' // fade (default), top, right, bottom, left
    });

    $(".jsOpenModall").customModal({
        btnOpenModal: '.jsOpenModall',
        modalBlock: '.jsModall',
        speedOpenModal: 400,
        btnClose: true,
        overlayClose: true,
        modalShow: 'top' // fade (default), top, right, bottom, left
    });

})(jQuery);