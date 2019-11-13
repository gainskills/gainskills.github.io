/*!
* Clean Blog v1.0.0 (http://startbootstrap.com)
* Copyright 2015 Start Bootstrap
* Licensed under Apache 2.0 (https://github.com/IronSummitMedia/startbootstrap/blob/gh-pages/LICENSE)
*/$(function(){$("[data-toggle='tooltip']").tooltip();});$(document).ready(function(){$("table").wrap("<div class='table-responsive'></div>");$("table").addClass("table");});jQuery(document).ready(function($){var MQL=1170;if($(window).width()>MQL){var headerHeight=$('.navbar-custom').height();$(window).on('scroll',{previousTop:0},function(){var currentTop=$(window).scrollTop();if(currentTop<this.previousTop){if(currentTop>0&&$('.navbar-custom').hasClass('is-fixed')){$('.navbar-custom').addClass('is-visible');}else{$('.navbar-custom').removeClass('is-visible is-fixed');}}else{$('.navbar-custom').removeClass('is-visible');if(currentTop>headerHeight&&!$('.navbar-custom').hasClass('is-fixed'))$('.navbar-custom').addClass('is-fixed');}
this.previousTop=currentTop;});}});