(function($) {
    $.fn.customModal = function(options) {
        var config = $.extend({}, {
            btnOpenModal: '',
            modalBlock: '',
            customClass: '',
            speedOpenModal: 500,
            btnClose: true,
            overlayClose: true,
            overlayShow: true,
            modalShow: 'fade'
        }, options);

        return this.each(function() {
            let modalBlock = $(options.modalBlock);
            let modalName = options.modalBlock.slice(1);
            let cloneModalBlock = $(modalBlock).clone();
            $(modalBlock).remove();

            $('body').append(
                '<div class="custom-modal">' +
                '<div class="custom-modal__overlay jsCustomModalCloseOverlay_' + modalName + '"></div>' +
                '<div class="custom-modal__content ' + options.customClass + ' jsAddContent' + modalName + '">' +
                '<button class="custom-modal__close jsCustomModalClose_' + modalName + '"></button>' +
                '</div>' +
                '</div>'
            );
            $('.jsAddContent' + modalName).append($(cloneModalBlock));

            if(options.btnClose === false) {
                $('.jsCustomModalClose_' + modalName).hide();
            }

            if(options.overlayShow === false) {
                $('.jsCustomModalCloseOverlay_' + modalName).hide();
            }

            function showOptions() {
                switch (options.modalShow) {
                    case 'fade':
                        $('.jsAddContent' + modalName).css({
                            'top': '50%',
                            'left': '50%',
                            'transform': 'translate(-50%,-50%)'
                        });
                        break;
                    case 'top':
                        $('.jsAddContent' + modalName).css({
                            'top': '-50%',
                            'left': '50%',
                            'transform': 'translateX(-50%)'
                        });
                        break;
                    case 'right':
                        $('.jsAddContent' + modalName).css({
                            'top': '50%',
                            'right': '-50%',
                            'transform': 'translateY(-50%)'
                        });
                        break;
                    case 'bottom':
                        $('.jsAddContent' + modalName).css({
                            'bottom': '-50%',
                            'left': '50%',
                            'transform': 'translateX(-50%)'
                        });
                        break;
                    case 'left':
                        $('.jsAddContent' + modalName).css({
                            'top': '50%',
                            'left': '-50%',
                            'transform': 'translateX(-50%)'
                        });
                        break;
                }
            }
            showOptions();

            function showOpen() {
                switch (options.modalShow) {
                    case 'top':
                        $('.jsAddContent' + modalName).animate({ "top": "50%" }, options.speedOpenModal).css({
                            'transform': 'translate(-50%,-50%)'
                        });
                        break;
                    case 'right':
                        $('.jsAddContent' + modalName).animate({ "right": "50%" }, options.speedOpenModal).css({
                            'transform': 'translate(50%,-50%)'
                        });
                        break;
                    case 'bottom':
                        $('.jsAddContent' + modalName).animate({ "bottom": "50%" }, options.speedOpenModal).css({
                            'transform': 'translate(-50%,50%)'
                        });
                        break;
                    case 'left':
                        $('.jsAddContent' + modalName).animate({ "left": "50%" }, options.speedOpenModal).css({
                            'transform': 'translate(-50%,-50%)'
                        });
                        break;
                }
            }

            $(options.btnOpenModal).click(function () {
                $(options.modalBlock).closest($('.custom-modal')).fadeIn(options.speedOpenModal);
                $('body').css({'overflow': 'hidden'});
                showOpen();
            });

            $('.jsCustomModalClose_' + modalName).click(function () {
                $(this).closest('.custom-modal').fadeOut(options.speedOpenModal);
                $('body').css({'overflow': 'visible'});
                showOptions();
            });

            if(options.overlayClose === true) {
                $('.jsCustomModalCloseOverlay_' + modalName).click(function () {
                    $(this).closest('.custom-modal').fadeOut(options.speedOpenModal);
                    $('body').css({'overflow': 'visible'});
                    showOptions();
                });
            }

        });
    };
})(jQuery);