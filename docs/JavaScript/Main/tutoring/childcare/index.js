$(document).ready(function(){$("#section1 .container").animate({opacity:"0.99"},1296),$(".container--gallery").magnificPopup({delegate:"a",type:"image",mainClass:"mfp-with-zoom mfp-img-mobile",image:{verticalFit:!0},gallery:{enabled:!0},zoom:{enabled:!0,duration:230,opener:function(a){return a.find("img")}}})});function videoChange(){"https://pdedu.cdn.neminis.net/Images/Main/tutoring/childcare/03.jpg"==document.getElementsByTagName("img")[0].src&&(document.getElementsByTagName("figure")[0].innerHTML="<video controls autoplay width=100% class='mfp-img' style='max-height: 768px;'><source src='https://cname-1.resources.ga/videos/2019/%E5%B7%A5%E4%BC%9A%E7%88%B1%E5%BF%83%E6%89%98%E7%AE%A1.mp4' type='video/mp4'><source src='https://1.misc.cdn.neminis.net/videos/2019/%E5%B7%A5%E4%BC%9A%E7%88%B1%E5%BF%83%E6%89%98%E7%AE%A1.mp4' type='video/mp4'></video><figcaption><div class='mfp-bottom-bar'><div class='mfp-title'></div><div class='mfp-counter'>3 of 10</div></div></figcaption>")}window.setInterval(function(){videoChange()},1e3);var contents=$(".section1");$(window).on("scroll",function(){var a=$(this).scrollTop();a>=contents.eq(1).offset().top-$(window).height()/1.32&&($("#section2 span").addClass("show"),$("#section2 li").addClass("show")),a>=contents.eq(2).offset().top-$(window).height()/1.32&&($("#section3 span").addClass("show"),$("#section3 li").addClass("show"))});
/* Copyright 2020 PI. All rights reserved. */