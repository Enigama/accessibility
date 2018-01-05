//VENDORS
window.$ = window.jQuery = require('jquery');
require('bootstrap-sass');

import 'slick-carousel/slick/slick.min'
import 'slick-carousel/slick/slick-theme.scss'
import 'slick-carousel/slick/slick.scss'

class Application{
    constructor(){
        console.log('application start');

        this.initEventSlick();
        this.initEvents();
    }

    initEventSlick(){

        $('.history-last-slider').slick({
            dots: true,
            prevArrow: '<a href="#" class="history__prev"></a>',
            nextArrow: '<a href="#" class="history__next"></a>',

            customPaging: function (slider, i)
            {
                var curslide = i +1;
                return '<a class="history__pagin">'+curslide+'</a>';
            },
        });


        $('.footer-slider').slick({
            dots: true
            //variableWidth: false,

        });
    }

    initEvents(){

        var btns = document.getElementsByClassName("whatch__full");
        var full = document.getElementsByClassName("full__fid");

        for(var i = 0; i < btns.length; i++){
            btns[i].setAttribute("current", i);
            btns[i].onclick = function(){
                event.preventDefault();
                if(this.innerHTML == "Скрыть"){
                    full[this.getAttribute("current")].style.display = "none";
                    this.innerHTML = "Читать полностью";
                }else{
                    full[this.getAttribute("current")].style.display = "block";
                    this.innerHTML = "Скрыть";
                }
            };
        }
            /*$('.whatch__full').on('click', function (event) {
                event.preventDefault();
                console.log(event);
                if(!$('.full__fid').hasClass('full__fid-visible')){
                    //event.preventDefault();
                    $('.full__fid').addClass('full__fid-visible');
                }else {
                    //event.preventDefault();
                    $('.full__fid').removeClass('full__fid-visible');
                }
            });*/





        calcValues();
        var int = setInterval(calcValues, 1000);

//---------------------------------------
        function calcValues() {
            $('.counter .to_h')
                .addClass('hide_h')
                .removeClass('to_h')
                .addClass('from_h')
                .removeClass('hide_h')
                .addClass('n_h')
                .find('span:not(.shadow_h)').each(function (i, el) {
                $(el).text(getHour(true));
            });
            $('.counter .from_h:not(.n_h)')
                .addClass('hide_h')
                .addClass('to_h')
                .removeClass('from_h')
                .removeClass('hide_h')
                .find('span:not(.shadow_h)').each(function (i, el) {
                $(el).text(getHour(false));
            });
            $('.counter .n_h').removeClass('n_h');
//----------------------------------------------------------
            $('.counter .to_m')
                .addClass('hide_m')
                .removeClass('to_m')
                .addClass('from_m')
                .removeClass('hide_m')
                .addClass('n_m')
                .find('span:not(.shadow_m)').each(function (i, el) {
                $(el).text(getMin(true));
            });
            $('.counter .from_m:not(.n_m)')
                .addClass('hide_m')
                .addClass('to_m')
                .removeClass('from_m')
                .removeClass('hide_m')
                .find('span:not(.shadow_m)').each(function (i, el) {
                $(el).text(getMin(false));
            });
            $('.counter .n_m').removeClass('n_m');
//----------------------------------------------------------
            $('.counter .to')
                .addClass('hide')
                .removeClass('to')
                .addClass('from')
                .removeClass('hide')
                .addClass('n')
                .find('span:not(.shadow)').each(function (i, el) {
                $(el).text(getSec(true));
            });
            $('.counter .from:not(.n)')
                .addClass('hide')
                .addClass('to')
                .removeClass('from')
                .removeClass('hide')
                .find('span:not(.shadow)').each(function (i, el) {
                $(el).text(getSec(false));
            });
            $('.counter .n').removeClass('n');
        }
        function getHour(hur) {
            var d = new Date();
            var hur = 24-d.getHours();

            if (hur) {
                hur--;
                if (hur < 0) {
                    hur--;
                    hur = 23;

                }
            } else if( hur == 24) {
                hur--;
            }
            var h = hur < 10 ? '0' + hur : hur
            return (h);
        }
        /*---------------------------------------------------------------------------------------*/
        function getMin(min) {
            var d = new Date();
            var min = 60-d.getMinutes();

            if (min) {
                min--;
                if (min < 0) {
                    min--;
                    min = 59;

                }
            } else if( min == 60) {
                min--;
            }
            var m = min < 10 ? '0' + min : min
            return (m);
        }
        function getSec(next) {
            var d = new Date();
            var sec = 60-d.getSeconds();
            if (next) {
                sec--;
                if (sec < 0) {
                    sec = 59;
                }
            } else if(sec == 60) {
                sec = 0;
            }
            return (sec < 10 ? '0' + sec : sec);
        }
    }
}

new Application();
