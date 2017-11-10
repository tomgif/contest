(function($) {

	//tabs
	//http://dimox.name/universal-jquery-tabs-script/
	$('ul.tabs__caption').on('click', 'li:not(.is-active)', function() {

		$(this).addClass('is-active')
			.siblings()
			.removeClass('is-active')
			.closest('div.tabs')
			.find('div.tabs__content')
			.removeClass('is-active')
			.eq($(this).index())
			.addClass('is-active');
	});

	//preloader
	$(window).on('load', function () {
	    var $preloader = $('.preloader');
	    $preloader.delay(1000).fadeOut(function() {
	    	$('.page-wrapper').addClass('is-loaded')
	    });
	    $preloader.delay(350).fadeOut('slow');
	});

	//form validation
	$.validator.addMethod(
	    "regex",
	    function(value, element, regexp) {
	        var re = new RegExp(regexp);
	        return this.optional(element) || re.test(value);
	    },
	    "Некорректно заполнено поле"
	);

	var form = $('form.contact-form')

	form.validate({
        onfocusout: function(element) {
			this.element(element);

			if (form.valid()) {
				$('.submit-button').attr('disabled', false).removeClass('is-disabled');
			} else {
				$('.submit-button').attr('disabled', true).addClass('is-disabled');
			}
        },
		rules: {
			name: 'required',
			phone: {
				required: true,
				regex: '^[+]7[0-9]{0,9}$'
			},
			field: 'required'
		},
		messages: {
			name: {
				required: 'Заполните поле'
			},
			phone: {
				required: 'Заполните поле',
				regex: 'Введите корректный номер'
			},
			field: {
				required: 'Заполните поле'
			}
		},
		submitHandler: function(form) {
			console.log($(form).serialize())
		}
	});
})(jQuery);