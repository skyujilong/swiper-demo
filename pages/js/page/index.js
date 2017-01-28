'use strict';
require('base.css');
require('SwiperCss');
require('../../scss/index.scss');
// console.log($);
var Swiper = require('Swiper');
var swiper1 = new Swiper('#swiper1', {
    scrollbar: '.swiper-scrollbar',
    direction: 'vertical',
    slidesPerView: 'auto',
    mousewheelControl: true,
    freeMode: true
});

var swiper2 = new Swiper('#swiper2', {
    scrollbar: '.swiper-scrollbar',
    direction: 'vertical',
    slidesPerView: 'auto',
    mousewheelControl: true,
    freeMode: true,
    onTap: function(swiper,event){
        //TODO 通过绑定的 tap事件进行分发点击事件。
        //event.target 然后判断对应的className之类的方式
        console.log(swiper);
        console.log(event);
    }
});
