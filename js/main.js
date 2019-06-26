;(function($){
    $(function(){
        $('a[href^="#"]').on('click', function (event) {
            event.preventDefault();
            var sc = $(this).attr("href"),
                dn = $(sc).offset().top;
            $('html, body').animate({scrollTop: dn}, 1400);
        });
        $('.slider-1').slick({
            autoplay: true,
            arrows: false,
            slideToScroll: 1,
            slidesToShow: 1,
            dots: true,
            asNavFor: '.slider-2'
        });
        $('.slider-2').slick({
            autoplay: true,
            centerMode: true,
            slideToScroll: 1,
            slidesToShow: 3,
            focusOnSelect: true,
            asNavFor: '.slider-1',
        });
        var rowS6 = $('#rowS6');
        function winResize () {
            if($(this).width() < 766) {
                rowS6.removeClass('justify-content-around');
                rowS6.addClass('flex-column');
            }
            else {
                rowS6.removeClass('flex-column');
                rowS6.addClass('justify-content-around');
            }
        }
        winResize();
        $(window).on('resize', function () {
            winResize();
        });
        var remain_bv   = 60768;
        function parseTime_bv(timestamp){
            if (timestamp < 0) timestamp = 0;

            var day = Math.floor( (timestamp/60/60) / 24);
            var hour = Math.floor(timestamp/60/60);
            var mins = Math.floor((timestamp - hour*60*60)/60);
            var secs = Math.floor(timestamp - hour*60*60 - mins*60);
            var left_hour = Math.floor( (timestamp - day*24*60*60) / 60 / 60 );

            $('span.afss_day_bv').text(day);
            $('span.afss_hours_bv').text(left_hour);

            if(String(mins).length > 1)
                $('span.afss_mins_bv').text(mins);
            else
                $('span.afss_mins_bv').text("0" + mins);
            if(String(secs).length > 1)
                $('span.afss_secs_bv').text(secs);
            else
                $('span.afss_secs_bv').text("0" + secs);

        }

        $(document).ready(function(){
            setInterval(function(){
                remain_bv = remain_bv - 1;
                parseTime_bv(remain_bv);
                if(remain_bv <= 0){
                    alert('Акция завершена');
                }
            }, 1000);
        });
        var skidka = $('#skidka');
            var sp = $('.timer span');
            var div = $('.timer');
            var zach = $('#zach');
            var newPrice = $('#newPrice');
            var zach2 = $('.zach2');
            $(skidka).on('click', function () {
                div.css('display', 'block');
                zach.css('color', 'rgba(23, 4, 8, 0.44)');
                zach2.css('color', 'rgba(23, 4, 8, 0.44)');
                div.css('background-image', 'linear-gradient(to right, #34b32e, #29c066)');
                sp.css('color', '#ffffff');
                newPrice.css('display', 'inline-block');
                // window.getComputedStyle(
                //     document.querySelector('.zach'), ':before'
                // ).getPropertyValue('opacity');
                var styleElem = document.head.appendChild(document.createElement("style"));

                styleElem.innerHTML = ".zach:before {opacity: 1;}";
            });
            $(skidka).on('mouseleave', function () {
                sp.css('color', '#F37A1F');
                div.css('background-image', 'none')
        })
    });
})(jQuery);