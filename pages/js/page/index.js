'use strict';
require('base.css');
require('SwiperCss');
require('../../scss/index.scss');
// console.log($);
var Swiper = require('Swiper');
var swiper = new Swiper('.swiper-container', {
    scrollbar: '.swiper-scrollbar',
    direction: 'vertical',
    slidesPerView: 'auto',
    mousewheelControl: true,
    freeMode: true
});
