!function(e){e("ul.tabs__caption").on("click","li:not(.is-active)",function(){e(this).addClass("is-active").siblings().removeClass("is-active").closest("div.tabs").find("div.tabs__content").removeClass("is-active").eq(e(this).index()).addClass("is-active")}),e(window).on("load",function(){var i=e(".preloader");i.delay(1e3).fadeOut(function(){e(".page-wrapper").addClass("is-loaded")}),i.delay(350).fadeOut("slow")}),e.validator.addMethod("regex",function(e,i,a){var s=new RegExp(a);return this.optional(i)||s.test(e)},"Некорректно заполнено поле");var i=e("form.contact-form");i.validate({onfocusout:function(a){this.element(a),i.valid()?e(".submit-button").attr("disabled",!1).removeClass("is-disabled"):e(".submit-button").attr("disabled",!0).addClass("is-disabled")},rules:{name:"required",phone:{required:!0,regex:"^[+]7[0-9]{0,9}$"},field:"required"},messages:{name:{required:"Заполните поле"},phone:{required:"Заполните поле",regex:"Введите корректный номер"},field:{required:"Заполните поле"}},submitHandler:function(i){console.log(e(i).serialize())}})}(jQuery);