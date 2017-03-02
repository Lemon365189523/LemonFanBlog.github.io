/**
 * Created by Macx on 2017/3/1.
 */

//$(document).ready(function(){
//
//
//});

;$(function () {
    'use strict';

    var sidebar = $('#sidebar'),
        mask = $('.mask'),
        sidebar_trigger = $('#sidebar_trigger'),
        backButton = $('#back-to-top');

    function showSideBar() {
        mask.fadeIn();
        sidebar.animate({'right': 0});
    }

    function hideSideBar() {
        mask.fadeOut();
        sidebar.animate({'right': -sidebar.width()});
    }

    sidebar_trigger.on('click', showSideBar);
    mask.on('click', hideSideBar);

    backButton.on('click',function(){
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });

    $(window).on('scroll',function(){
        if($(window).scrollTop() > $(window).height())
        {
            backButton.fadeIn();
        }
        else
        {
            backButton.fadeOut();
        }
    })

    $(window).trigger('scroll');
})
