//VENDORS
window.$ = window.jQuery = require('jquery');
require('bootstrap-sass');

//require('jquery-parallax.js/parallax.min');

import AOS from 'aos'

import SmoothScroll from 'smoothscroll-for-websites';
import Rellax from 'rellax';

import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min'
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css'

import 'slick-carousel/slick/slick.min';
import 'slick-carousel/slick/slick-theme.scss';
import 'slick-carousel/slick/slick.scss';


class Application {
  constructor () {
    console.log('application start');

    SmoothScroll();

    this.rellax = new Rellax('.js-rellax-obj')

    this.initScrollY();
    this.initHistoryFull();
    this.initHistory();
    this.initTextCount();
    this.initAnimate();
    this.initMobileMenu();
    this.initEventSlick();
    this.initEvents();

  }

  initScrollY(){
    $('.full-history').mCustomScrollbar({
        axis:"y",
        theme: "dark"
    });
  }

  initTextCount(){
      $(".history__add__text").keyup(function(){
        var count = $('.history__add__text').val();
        $('.text-count').text(count.length +' / 1000');
      });
  }


  initHistory(){
    $('.history__send').css('display', 'none');
    $('.history__chois').css('display', 'none');
    $('.history__text_top').css('display', 'none');


    $('.history__send').on('click', function (event) {
        event.preventDefault();
        $('.history-last').addClass('history-last_disable');
        $('.add-history').removeClass('add-history_disable');
        $('.add-history').addClass('add-history_active');
    });

    $('.simple__social').on('click', function (event) {
      event.preventDefault();
      if ($('.add-history').hasClass('add-history_disable')){

          //$('.history-last').addClass('history-last_disable');
          //$('.add-history').removeClass('add-history_disable');
          //$('.add-history').addClass('add-history_active');

          $('.history__text_top').css('display', 'block');

          $('.simple__social').css('display','none');
          $('.history__send').css('display', 'block');
          $('.history__title__user').css('display', 'block');
          $('.history__title__authorization').css('display', 'none');
          $('.history__chois').css('display', 'block');

          $('.history__confirmations').css('display', 'none');

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
    //AOS.init();

    $(window).on('load', () => {
      setTimeout( () => {
        AOS.init();
      }, 0)
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

      responsive:[{
        breakpoints: 576,
          settings: "unslick",
      }],

      customPaging: function (slider, i) {
          var curslide = i + 1;
          console.log(curslide +'/'+slider.slideCount);

          return '<a class="history__pagin">'+'<span class="currenslide_active">'+ curslide +'</span>' +'<span class="slesh__slide">'+'/'+'</span>'+'<span class="all_slide">' + slider.slideCount +'</span>'+ '</a>';
      },

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
    let $historylast = $('.js-history-last');

      var bt = document.getElementsByClassName('js-show-history');
      var test = document.getElementsByClassName('full__fid');

      for(var i = 0; i < bt.length; i++){
          bt[i].setAttribute('current', i);
          bt[i].onclick = function (event) {
              event.preventDefault();

              let $this = $(this);
              let $fullHistory = $($this.attr('href'));

              var words = $fullHistory.text();
              //console.log(words.length);

              if(words.length <= 270){
                  if (this.innerHTML == 'Скрыть') {
                      test[this.getAttribute('current')].style.display = 'none';
                      this.innerHTML = 'Читать полностью';
                  } else {
                      test[this.getAttribute('current')].style.display = 'block';
                      this.innerHTML = 'Скрыть';
                      //console.log(test[this.getAttribute('current')])
                      console.log(words);
                  }

              }else{
                  $historyLastSlider.css('display','none');
                  $titleSlider.css('display','none');
                  $title.css('display','block');
                  $fullHistory
                      .removeClass('full-history_disable')
                      .addClass('full-history_active');
                  $historylast.addClass('js-history-last_active');
                  $('.history__logo').addClass('full__history__logo');
                  $('.history__more_success').css('display','none');
                  $('.full__fid').css('display','block');
              }
          }
      }


    $('.js-history-back').on('click', function (event) {
      event.preventDefault();
      let $this = $(this);
      $this
        .parents('.full-history')
        .addClass('full-history_disable')
        .removeClass('full-history_active');
      $titleSlider.css('display','block');
      $title.css('display','none');
      $historyLastSlider.css('display','block');
      $historylast.css('width','auto');
      $historylast.removeClass('js-history-last_active');
      $('.history__logo').removeClass('full__history__logo');
      $('.full__fid').css('display','none');

      if($(window).width <= 549){
          $('.history__more_success').css('display','block');
      }

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
