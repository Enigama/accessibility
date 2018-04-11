//VENDORS
window.$ = window.jQuery = require('jquery');
require('bootstrap-sass');


//require('jquery-parallax.js/parallax.min');

class Application {
  constructor () {
      console.log('application start');

      this.initScrollnav();
      this.initScrollnavfix();
      //this.initreversnav();

  }

    initScrollnavfix(){
      
    }


    initScrollnav(){

      $('.brand-header-disable').css('display','none');
      $('.nav__demor').hide();

      $(window).scroll(function () {

          var winscroll = $(window).scrollTop();

         if(winscroll){

             $('.nav-scroll-top').addClass('nav-scroll-top-active');
             $('.nav-side').addClass('nav-side-scroll');
             

             $('.navbar-header__right').addClass('navbar-header__right_disable');

             $('.brand-header-active').css('display','none');
             $('.brand-header-disable').css('display','block');

             $('.nav__demol').hide();
             $('.nav__demor').show();
                
             $('.nav-pagin').addClass('nav-pagin-scroll');
             $('.pagin__link_md').addClass('pagin__link_md-scroll');
             $('.pagin__link_sm').addClass('pagin__link_sm-scroll');

             $('.header-content').addClass('header-content-scroll');


             if($(window).width() < 768){

                $('.navbar-toggle').addClass('navbar-toggle-scroll');

                $('.nav-pagin-scroll').css('flex-direction','row');
                 $('.nav-pagin-scroll').css('padding-top','0');


             }else {

                 $('.navbar-toggle').removeClass('navbar-toggle-scroll');
             }



         }else {
             $('.nav-scroll-top').removeClass('nav-scroll-top-active');

             $('.nav-side').removeClass('nav-side-scroll');


             $('.brand-header-active').css('display','block');
             $('.brand-header-disable').css('display','none');

             $('.navbar-header__right').removeClass('navbar-header__right_disable');


             $('.nav__demol').show();
             $('.nav__demor').hide();

             $('.nav-pagin').removeClass('nav-pagin-scroll');
             $('.pagin__link_md').removeClass('pagin__link_md-scroll');
             $('.pagin__link_sm').removeClass('pagin__link_sm-scroll');

             $('.header-content').removeClass('header-content-scroll');

             if($(window).width() < 768){

                 $('.nav-pagin').css('flex-direction','column');
             }
             
         }

      });
  }
}

new Application()
