/**
 * Created by Macx on 2017/3/1.
 */


;$(function () {
    // 'use strict';
    // 获取元素
    var sidebar = $('#sidebar'),
        mask = $('.mask'),
        sidebar_trigger = $('#sidebar_trigger'),
        backButton = $('#back-to-top'),
        moreButton = $('#more_a'),
        header = $('.main-wrapper header'),
        aboutmeButton = $('#aboutme_button');

    // 显示侧边栏动画
    function showSideBar() {
        mask.fadeIn();
        sidebar.animate({'right': 0});
    }
    // 隐藏侧边栏动画
    function hideSideBar() {
        mask.fadeOut();
        sidebar.animate({'right': -sidebar.width()});
    }
    //点击侧边栏
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

    //更多按钮 滑动
    moreButton.on('click',  function(event) {
        $('html, body').animate({
            scrollTop: header.height(),
            },400);
        
    });

    //跳转关于我
    aboutmeButton.on('click', function(){
        $(window).attr('location','about_me.html');
    });

})
