//VENDORS
window.$ = window.jQuery = require('jquery');
require('bootstrap-sass');
import AOS from 'aos'


import 'slick-carousel/slick/slick.min';
import 'slick-carousel/slick/slick-theme.scss';
import 'slick-carousel/slick/slick.scss';


class Application {
  constructor () {
    console.log('application start');


    this.initHistoryFull();
    this.initHistory();
    this.initTextCount();
    this.initAnimate();
    this.initMobileMenu();
    this.initEventSlick();
    this.initEvents();

  }

  initTextCount(){
      $(".history__add__text").keyup(function(){
        var count = $('.history__add__text').val();
        $('.text-count').text(count.length +' / 1000');
      });
  }


  initHistory(){
    $('.history__disable').css('display', 'none');
    $('.history__send').on('click', function (event) {
      event.preventDefault();

      if ($('.add-history').hasClass('add-history_disable')){

          $('.history-last').addClass('history-last_disable');
          $('.add-history').removeClass('add-history_disable');
          $('.add-history').addClass('add-history_active');

          $('.history__send').css('display', 'none');
          $('.history__title__user').css('display', 'none');
          $('.history__title__authorization').css('display', 'block');
          //$('.history__chois').css('display', 'none');

          $('.history__disable').css('display', 'block');


      }
    });


    $('.simple__btn_success').on('click', function (event) {
      event.preventDefault();

      $('.add-history').removeClass('add-history_active');
      $('.add-history').addClass('add-history_disable');
      $('.history-last').removeClass('history-last_disable');

        $('.history__send').removeClass('history__send_disable');
        $('.history__chois').removeClass('history__chois_disable');

      console.log('WARNING, no send your histtory');
    })

  }


  initAnimate(){
    AOS.init();

    $(window).on('load', () => {
      setTimeout( () => AOS.refresh(true), 0 )
    })
  }

  initMobileMenu(){
    $('.btn-gamb').on('click', function () {
        //if($('.mobile-menu').hasClass('mobile-menu-active')){
           /* $('.mobile-menu').removeClass('mobile-menu-active');
            $('.btn-gamb').removeClass('btn-gamb-active');
            $('.btn-cencel').removeClass('btn-cencel-active');
            $('.mobile-menu-content').removeClass('mobile-menu-content-active');*/
        //}else {
            $('.mobile-menu').removeClass('mobile-menu-disable');
            $('.mobile-menu').addClass('mobile-menu-active');
            $('.btn-gamb').addClass('btn-gamb-destroy');
            $('.btn-cencel').addClass('btn-cencel-active');
            $('.mobile-menu-content').addClass('mobile-menu-content-active');

        //}
    });
    $('.btn-cencel').on('click', function () {
        $('.mobile-menu').removeClass('mobile-menu-active');
        $('.mobile-menu').addClass('mobile-menu-disable');
        $('.btn-gamb').removeClass('btn-gamb-destroy');
        $('.btn-cencel').removeClass('btn-cencel-active');
        $('.mobile-menu-content').removeClass('mobile-menu-content-active');
    });

  }


  initEventSlick () {

    $('.history-last-slider').slick({
      dots: true,

      slidesToShow: 1,
      slidesToScroll: 1,

      prevArrow: '<a href="#" class="history__prev"></a>',
      nextArrow: '<a href="#" class="history__next"></a>',

      customPaging: function (slider, i) {
        var curslide = i + 1;
        return '<a class="history__pagin">' + curslide + '</a>'
      },

      responsive: [{
          breakpoint: 576,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
          }

      }],

    });

    $('.footer-slider').slick({
        dots: true,
        slidesToShow: 1,


    });
  }


  initHistoryFull(){

    let $historyLastSlider = $('.history-last-slider');
    let $titleSlider = $('.js-history-title-all');
    let $title = $('.js-history-title');

    $('.js-show-history').on('click', function (event) {
      event.preventDefault();
      let $this = $(this);
      let $fullHistory = $($this.attr('href'))
      $historyLastSlider.hide()
      $titleSlider.hide()
      $title.show();
      $fullHistory
        .removeClass('full-history_disable')
        .addClass('full-history_active');
    });

    $('.js-history-back').on('click', function (event) {
      event.preventDefault();
      let $this = $(this);
      $this
        .parents('.full-history')
        .addClass('full-history_disable')
        .removeClass('full-history_active');
      $titleSlider.show()
      $title.hide()
      $historyLastSlider.show()
    });

  }

  initEvents () {

    /*var btns = document.getElementsByClassName('whatch__full')
    var full = document.getElementsByClassName('full__fid')

    for (var i = 0; i < btns.length; i++) {
      btns[i].setAttribute('current', i)
      btns[i].onclick = function () {
        event.preventDefault()
        if (this.innerHTML == 'Скрыть') {
          full[this.getAttribute('current')].style.display = 'none'
          this.innerHTML = 'Читать полностью'
        } else {
          full[this.getAttribute('current')].style.display = 'block'
          this.innerHTML = 'Скрыть'
        }
      }
    }*/


    var currTime = getTime()
    var hour = 0,
      minutes = 0,
      seconds = 0
    calcValues()

    var int = setInterval(calcValues, 1000);

    function calcValues () {
      var currTime = getTime()
//---------------------------------------
      if (currTime.hours != hour) {
        $('.counter .to_h').
          addClass('hide_h').
          removeClass('to_h').
          addClass('from_h').
          removeClass('hide_h').
          addClass('n_h').
          find('span:not(.shadow_h)').
          each(function (i, el) {
            $(el).text(currTime.hours)
          })
        $('.counter .from_h:not(.n_h)').
          addClass('hide_h').
          addClass('to_h').
          removeClass('from_h').
          removeClass('hide_h').
          find('span:not(.shadow_h)').
          each(function (i, el) {
            $(el).text(hour)
          })
        $('.counter .n_h').removeClass('n_h')
        hour = currTime.hours
        console.log('hours')
      }
//----------------------------------------------------------
      if (currTime.minutes != minutes) {
        $('.counter .to_m').
          addClass('hide_m').
          removeClass('to_m').
          addClass('from_m').
          removeClass('hide_m').
          addClass('n_m').
          find('span:not(.shadow_m)').
          each(function (i, el) {
            $(el).text(currTime.minutes)
          })
        $('.counter .from_m:not(.n_m)').
          addClass('hide_m').
          addClass('to_m').
          removeClass('from_m').
          removeClass('hide_m').
          find('span:not(.shadow_m)').
          each(function (i, el) {
            $(el).text(minutes)
          })
        $('.counter .n_m').removeClass('n_m')
        minutes = currTime.minutes
        console.log('minutes')
      }
//----------------------------------------------------------
      if (currTime.seconds != seconds) {
        $('.counter .to').
          addClass('hide').
          removeClass('to').
          addClass('from').
          removeClass('hide').
          addClass('n').
          find('span:not(.shadow)').
          each(function (i, el) {
            $(el).text(currTime.seconds)
          })
        $('.counter .from:not(.n)').
          addClass('hide').
          addClass('to').
          removeClass('from').
          removeClass('hide').
          find('span:not(.shadow)').
          each(function (i, el) {
            $(el).text(seconds)
          })
        $('.counter .n').removeClass('n')
        seconds = currTime.seconds
        console.log('second')
      }
    }

    function getTime () {
      var date = new Date(Date.now())
      return {
        hours: getHour(date),
        minutes: getMin(date),
        seconds: getSec(date),
      }
    }

    function getHour (date) {
      var hur = 24 - date.getHours()

      if (hur) {
        hur--
        if (hur < 0) {
          hur--
          hur = 23

        }
      } else if (hur == 24) {
        hur--
      }
      var h = hur < 10 ? '0' + hur : hur
      return (h)
    }

    /*---------------------------------------------------------------------------------------*/
    function getMin (date) {
      var min = 60 - date.getMinutes()

      if (min) {
        min--
        if (min < 0) {
          min--
          min = 59

        }
      } else if (min == 60) {
        min--
      }
      var m = min < 10 ? '0' + min : min
      return (m)
    }

    function getSec (date) {
      var sec = 60 - date.getSeconds()
      if (sec) {
        sec--
        if (sec < 0) {
          sec = 59
        }
      } else if (sec == 60) {
        sec = 0
      }
      return (sec < 10 ? '0' + sec : sec)
    }
  }
}

new Application()
