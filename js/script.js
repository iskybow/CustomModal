(function($) {

    $(".jsOpenModal").customModal({
        btnOpenModal: '.jsOpenModal',
        modalBlock: '.jsModal',
        customClass: '',
        speedOpenModal: 500,
        btnClose: true,
        overlayClose: true,
        overlayShow: true,
        modalShow: 'fade' // fade (default), top, right, bottom, left
    });

    $(".jsOpenModall").customModal({
        btnOpenModal: '.jsOpenModall',
        modalBlock: '.jsModall',
        customClass: 'custom-class',
        speedOpenModal: 500,
        btnClose: true,
        overlayClose: false,
        overlayShow: true,
        modalShow: 'top' // fade (default), top, right, bottom, left
    });

})(jQuery);