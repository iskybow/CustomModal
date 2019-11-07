(function($) {
    $.fn.customModal = function(options) {
        var config = $.extend({}, {
            btnOpenModal: '',
            modalBlock: '',
            speedOpenModal: 400,
            btnClose: true,
            overlayClose: true,
            modalShow: 'fade'
        }, options);

        return this.each(function() {
            let modalBlock = $(options.modalBlock);
            let cloneModalBlock = $(modalBlock).clone();
            $(modalBlock).remove();
            $('body').append(
                '<div class="custom-modal">' +
                '<div class="custom-modal__overlay jsCustomModalClose"></div>' +
                '<div class="custom-modal__content">' +
                '<button class="custom-modal__close jsCustomModalClose"></button>' +
                '</div>' +
                '</div>'
            );
            $('.custom-modal__content').append($(cloneModalBlock));

            if(options.btnClose == false) {
                $('.custom-modal__close').hide();
            }

            if(options.overlayClose == false) {
                $('.custom-modal__overlay').hide();
            }

            // if(options.modalShow == 'fade') {
            //     console.log(options.modalShow);
            //
            //     $('.custom-modal__content')
            //
            // }

            $(options.btnOpenModal).click(function () {
                $(options.modalBlock).closest($('.custom-modal')).fadeIn(options.speedOpenModal);
                $('body').css({'overflow': 'hidden'});
            });

            $('.jsCustomModalClose').click(function () {
                $(this).closest('.custom-modal').fadeOut(options.speedOpenModal);
                $('body').css({'overflow': 'visible'});
            });

        });
    };
})(jQuery);