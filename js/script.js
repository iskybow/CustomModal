(function($) {

    $(".jsOpenModal").customModal({
        btnOpenModal: '.jsOpenModal', // button class to open modal
        modalBlock: '.jsModal', // block class
        customClass: 'custom-class', // set custom class to customize your modal
        speedOpenModal: 500, // set open and close modal animate
        btnClose: true, // show or hide modal close button
        overlayClose: false, // close or not by overlay
        overlayShow: true, // show or hide modal overlay
        modalShow: 'top' // fade (default), top, right, bottom, left
    });

    $(".jsOpenModall").customModal({
        btnOpenModal: '.jsOpenModall', // button class to open modal
        modalBlock: '.jsModall', // block class
        customClass: 'custom-class', // set custom class to customize your modal
        speedOpenModal: 500, // set open and close modal animate
        btnClose: true, // show or hide modal close button
        overlayClose: false, // close or not by overlay
        overlayShow: true, // show or hide modal overlay
        modalShow: 'top' // fade (default), top, right, bottom, left
    });

})(jQuery);