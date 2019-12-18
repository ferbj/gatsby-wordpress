import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import "./animate.css";
import "./astra.css";

import "./bootstrap.min.css";
import "./dashicons.css";
import "./font-awesome.css";
import "./foundation/foundation-icons.css";
import MainMenu from "./MainMenu";

import "./style.css";

const GlobalStyles = createGlobalStyle`
<style id='astra-theme-css-inline-css' type='text/css' media='all'>
html{font-size:93.75%;}a,.page-title{color:#d94948;}a:hover,a:focus{color:#ffffff;}body,button,input,select,textarea{font-family:'Montserrat',sans-serif;font-weight:400;font-size:15px !important;font-size:1rem !important;text-transform:none !important;}blockquote{border-color:rgba(217,73,72,0.15);}h1,.entry-content h1,h2,.entry-content h2,h3,.entry-content h3,h4,.entry-content h4,h5,.entry-content h5,h6,.entry-content h6,.site-title,.site-title a{font-family:'Montserrat' !important,sans-serif !important;font-weight:700 !important;}.site-title{font-size:28px !important;font-size:1.8666666666667rem;}header .site-logo-img .custom-logo-link img{max-width:93px;}.astra-logo-svg{width:93px;}.ast-archive-description .ast-archive-title{font-size:40px;font-size:2.6666666666667rem;}.site-header .site-description{font-size:15px !important;font-size:1rem;}.entry-title{font-size:30px;font-size:2rem;}.comment-reply-title{font-size:24px !important;font-size:1.6rem;}.ast-comment-list #cancel-comment-reply-link{font-size:15px;font-size:1rem;}h1,.entry-content h1{font-size:70px !important;font-size:4.6666666666667rem !important;}h2,.entry-content h2{font-size:34px !important;font-size:2.2666666666667rem;}h3,.entry-content h3{font-size:23px !important;font-size:1.5333333333333rem;}h4,.entry-content h4{font-size:16px !important;font-size:1.0666666666667rem;}h5,.entry-content h5{font-size:14px !important;font-size:0.93333333333333rem;}h6,.entry-content h6{font-size:12px !important;font-size:0.8rem;}.ast-single-post .entry-title,.page-title{font-size:30px !important;font-size:2rem;}#secondary,#secondary button,#secondary input,#secondary select,#secondary textarea{font-size:15px !important;font-size:1rem;}::selection{background-color:#d94948;color:#ffffff;}body,h1,.entry-title a,.entry-content h1,h2,.entry-content h2,h3,.entry-content h3,h4,.entry-content h4,h5,.entry-content h5,h6,.entry-content h6{color:rgba(1,22,39,0.75) !important;}.tagcloud a:hover,.tagcloud a:focus,.tagcloud a.current-item{color:#ffffff;border-color:#d94948;background-color:#d94948;}.main-header-menu a,.ast-header-custom-item a{color:rgba(1,22,39,0.75) !important;}.main-header-menu li:hover > a,.main-header-menu li:hover > .ast-menu-toggle,.main-header-menu .ast-masthead-custom-menu-items a:hover,.main-header-menu li.focus > a,.main-header-menu li.focus > .ast-menu-toggle,.main-header-menu .current-menu-item > a,.main-header-menu .current-menu-ancestor > a,.main-header-menu .current_page_item > a,.main-header-menu .current-menu-item > .ast-menu-toggle,.main-header-menu .current-menu-ancestor > .ast-menu-toggle,.main-header-menu .current_page_item > .ast-menu-toggle{color:#d94948;}input:focus,input[type="text"]:focus,input[type="email"]:focus,input[type="url"]:focus,input[type="password"]:focus,input[type="reset"]:focus,input[type="search"]:focus,textarea:focus{border-color:#d94948;}input[type="radio"]:checked,input[type=reset],input[type="checkbox"]:checked,input[type="checkbox"]:hover:checked,input[type="checkbox"]:focus:checked,input[type=range]::-webkit-slider-thumb{border-color:#d94948;background-color:#d94948;box-shadow:none;}.site-footer a:hover + .post-count,.site-footer a:focus + .post-count{background:#d94948;border-color:#d94948;}.ast-small-footer{color:rgba(255,255,255,0.5);}.ast-small-footer > .ast-footer-overlay{background-color:rgba(68,102,38,0);}.ast-small-footer a{color:#ffffff;}.ast-small-footer a:hover{color:#dd3333;}.footer-adv .footer-adv-overlay{border-top-style:solid;border-top-color:#7a7a7a;}.footer-adv{color:#afafaf;}.footer-adv a:hover,.footer-adv .no-widget-text a:hover,.footer-adv a:focus,.footer-adv .no-widget-text a:focus{color:#dd0202;}.footer-adv-overlay{background-color:#011627;}.ast-comment-meta{line-height:1.666666667;font-size:12px;font-size:0.8rem;}.single .nav-links .nav-previous,.single .nav-links .nav-next,.single .ast-author-details .author-title,.ast-comment-meta{color:#d94948;}.menu-toggle,button,.ast-button,.button,input#submit,input[type="button"],input[type="submit"],input[type="reset"]{border-radius:100px;padding:6px 20px;color:#ffffff;border-color:#d94948;background-color:#d94948;}button:focus,.menu-toggle:hover,button:hover,.ast-button:hover,.button:hover,input[type=reset]:hover,input[type=reset]:focus,input#submit:hover,input#submit:focus,input[type="button"]:hover,input[type="button"]:focus,input[type="submit"]:hover,input[type="submit"]:focus{color:#ffffff;border-color:rgba(217,73,72,0.85);background-color:rgba(217,73,72,0.85);}.entry-meta,.entry-meta *{line-height:1.45;color:#d94948;}.entry-meta a:hover,.entry-meta a:hover *,.entry-meta a:focus,.entry-meta a:focus *{color:#ffffff;}blockquote,blockquote a{color:#006f00;}.ast-404-layout-1 .ast-404-text{font-size:200px;font-size:13.333333333333rem;}.widget-title{font-size:21px;font-size:1.4rem;color:rgba(1,22,39,0.75);}#cat option,.secondary .calendar_wrap thead a,.secondary .calendar_wrap thead a:visited{color:#d94948;}.secondary .calendar_wrap #today,.ast-progress-val span{background:#d94948;}.secondary a:hover + .post-count,.secondary a:focus + .post-count{background:#d94948;border-color:#d94948;}.calendar_wrap #today > a{color:#ffffff;}.ast-pagination a,.page-links .page-link,.single .post-navigation a{color:#d94948;}.ast-pagination a:hover,.ast-pagination a:focus,.ast-pagination > span:hover:not(.dots),.ast-pagination > span.current,.page-links > .page-link,.page-links .page-link:hover,.post-navigation a:hover{color:#ffffff;}.ast-header-break-point .ast-mobile-menu-buttons-minimal.menu-toggle{background:transparent;color:#ffffff;}.ast-header-break-point .ast-mobile-menu-buttons-outline.menu-toggle{background:transparent;border:1px solid #ffffff;color:#ffffff;}.ast-header-break-point .ast-mobile-menu-buttons-fill.menu-toggle{background:#ffffff;color:#000000;}.ast-header-break-point .main-header-bar .ast-button-wrap .menu-toggle{border-radius:0px;}@media (min-width:545px){.ast-page-builder-template .comments-area,.single.ast-page-builder-template .entry-header,.single.ast-page-builder-template .post-navigation{max-width:1210px;margin-left:auto;margin-right:auto;}}@media (max-width:768px){.ast-archive-description .ast-archive-title{font-size:40px;}.entry-title{font-size:30px;}h1,.entry-content h1{font-size:70px;}h2,.entry-content h2{font-size:40px;}h3,.entry-content h3{font-size:23px;}h4,.entry-content h4{font-size:18px;font-size:1.2rem;}h5,.entry-content h5{font-size:16px;font-size:1.0666666666667rem;}h6,.entry-content h6{font-size:14px;font-size:0.93333333333333rem;}.ast-single-post .entry-title,.page-title{font-size:30px;}}@media (max-width:544px){.ast-archive-description .ast-archive-title{font-size:40px;}.entry-title{font-size:30px;}h1,.entry-content h1{font-size:33px;}h2,.entry-content h2{font-size:25px;}h3,.entry-content h3{font-size:20px;}h4,.entry-content h4{font-size:14px;font-size:0.93333333333333rem;}h5,.entry-content h5{font-size:13px;font-size:0.86666666666667rem;}h6,.entry-content h6{font-size:12px;font-size:0.8rem;}.ast-single-post .entry-title,.page-title{font-size:30px;}.ast-header-break-point .site-branding img,.ast-header-break-point #masthead .site-logo-img .custom-logo-link img{max-width:74px;}.astra-logo-svg{width:74px;}.ast-header-break-point .site-logo-img .custom-mobile-logo-link img{max-width:74px;}}@media (max-width:768px){html{font-size:85.5%;}}@media (max-width:544px){html{font-size:85.5%;}}@media (min-width:769px){.ast-container{max-width:1210px;}}@font-face {font-family: "Astra";src: url( http://dev-prueba-builders.pantheonsite.io/wp-content/themes/astra/assets/fonts/astra.woff) format("woff"),url( http://dev-prueba-builders.pantheonsite.io/wp-content/themes/astra/assets/fonts/astra.ttf) format("truetype"),url( http://dev-prueba-builders.pantheonsite.io/wp-content/themes/astra/assets/fonts/astra.svg#astra) format("svg");font-weight: normal;font-style: normal;}@media (max-width:921px) {.main-header-bar .main-header-bar-navigation{display:none;}}.ast-desktop .main-header-menu.submenu-with-border .sub-menu,.ast-desktop .main-header-menu.submenu-with-border .children,.ast-desktop .main-header-menu.submenu-with-border .astra-full-megamenu-wrapper{border-color:#d94948;}.ast-desktop .main-header-menu.submenu-with-border .sub-menu,.ast-desktop .main-header-menu.submenu-with-border .children{border-top-width:2px;border-right-width:0px;border-left-width:0px;border-bottom-width:0px;border-style:solid;}.ast-desktop .main-header-menu.submenu-with-border .sub-menu .sub-menu,.ast-desktop .main-header-menu.submenu-with-border .children .children{top:-2px;}.ast-desktop .main-header-menu.submenu-with-border .sub-menu a,.ast-desktop .main-header-menu.submenu-with-border .children a{border-bottom-width:0px;border-style:solid;border-color:#eaeaea;}@media (min-width:769px){.main-header-menu .sub-menu li.ast-left-align-sub-menu:hover > ul,.main-header-menu .sub-menu li.ast-left-align-sub-menu.focus > ul{margin-left:-0px;}}.ast-small-footer{border-top-style:solid;border-top-width:0;border-top-color:#7a7a7a;}@media (max-width:920px){.ast-404-layout-1 .ast-404-text{font-size:100px;font-size:6.6666666666667rem;}}
.ast-header-break-point .site-header{border-bottom-width:0;}@media (min-width:769px){.main-header-bar{border-bottom-width:0;}}.main-header-menu .menu-item, .main-header-bar .ast-masthead-custom-menu-items{-js-display:flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;}.main-header-menu > .menu-item > a{height:100%;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-js-display:flex;display:flex;}.ast-primary-menu-disabled .main-header-bar .ast-masthead-custom-menu-items{flex:unset;}
#masthead .ast-container, .ast-header-breadcrumb .ast-container{max-width:100%;padding-left:35px;padding-right:35px;}@media (max-width:921px){#masthead .ast-container, .ast-header-breadcrumb .ast-container{padding-left:20px;padding-right:20px;}}#masthead .ast-container,.ast-header-breadcrumb .ast-container{max-width:100%;padding-left:35px;padding-right:35px;}@media (max-width:921px){#masthead .ast-container,.ast-header-breadcrumb .ast-container{padding-left:20px;padding-right:20px;}}
@media (min-width:769px){.ast-theme-transparent-header #masthead{position:absolute;left:0;right:0;}.ast-theme-transparent-header .main-header-bar, .ast-theme-transparent-header.ast-header-break-point .main-header-bar{background:none;}body.elementor-editor-active.ast-theme-transparent-header #masthead, .fl-builder-edit .ast-theme-transparent-header #masthead, body.vc_editor.ast-theme-transparent-header #masthead{z-index:0;}.ast-header-break-point.ast-replace-site-logo-transparent.ast-theme-transparent-header .custom-mobile-logo-link{display:none;}.ast-header-break-point.ast-replace-site-logo-transparent.ast-theme-transparent-header .transparent-custom-logo{display:inline-block;}.ast-theme-transparent-header .ast-above-header{background-image:none;background-color:transparent;}.ast-theme-transparent-header .ast-below-header{background-image:none;background-color:transparent;}}.ast-theme-transparent-header .site-title a, .ast-theme-transparent-header .site-title a:focus, .ast-theme-transparent-header .site-title a:hover, .ast-theme-transparent-header .site-title a:visited{color:#ffffff;}.ast-theme-transparent-header .site-header .site-description{color:#ffffff;}.ast-theme-transparent-header .main-header-menu, .ast-theme-transparent-header .main-header-menu a, .ast-theme-transparent-header .ast-masthead-custom-menu-items, .ast-theme-transparent-header .ast-masthead-custom-menu-items a,.ast-theme-transparent-header .main-header-menu li > .ast-menu-toggle, .ast-theme-transparent-header .main-header-menu li > .ast-menu-toggle{color:rgba(255,255,255,0.75) !important;}.ast-theme-transparent-header .main-header-menu li:hover > a, .ast-theme-transparent-header .main-header-menu li:hover > .ast-menu-toggle, .ast-theme-transparent-header .main-header-menu .ast-masthead-custom-menu-items a:hover, .ast-theme-transparent-header .main-header-menu .focus > a, .ast-theme-transparent-header .main-header-menu .focus > .ast-menu-toggle, .ast-theme-transparent-header .main-header-menu .current-menu-item > a, .ast-theme-transparent-header .main-header-menu .current-menu-ancestor > a, .ast-theme-transparent-header .main-header-menu .current_page_item > a, .ast-theme-transparent-header .main-header-menu .current-menu-item > .ast-menu-toggle, .ast-theme-transparent-header .main-header-menu .current-menu-ancestor > .ast-menu-toggle, .ast-theme-transparent-header .main-header-menu .current_page_item > .ast-menu-toggle{color:#ffffff;}@media (max-width:768px){.ast-theme-transparent-header #masthead{position:absolute;left:0;right:0;}.ast-theme-transparent-header .main-header-bar, .ast-theme-transparent-header.ast-header-break-point .main-header-bar{background:none;}body.elementor-editor-active.ast-theme-transparent-header #masthead, .fl-builder-edit .ast-theme-transparent-header #masthead, body.vc_editor.ast-theme-transparent-header #masthead{z-index:0;}.ast-header-break-point.ast-replace-site-logo-transparent.ast-theme-transparent-header .custom-mobile-logo-link{display:none;}.ast-header-break-point.ast-replace-site-logo-transparent.ast-theme-transparent-header .transparent-custom-logo{display:inline-block;}.ast-theme-transparent-header .ast-above-header{background-image:none;background-color:transparent;}.ast-theme-transparent-header .ast-below-header{background-image:none;background-color:transparent;}}@media (max-width:768px){.ast-theme-transparent-header .site-title a, .ast-theme-transparent-header .site-title a:focus, .ast-theme-transparent-header .site-title a:hover, .ast-theme-transparent-header .site-title a:visited{color:#ffffff;}.ast-theme-transparent-header .site-header .site-title a:hover{color:rgba(255,255,255,0.75);}.ast-theme-transparent-header .site-header .site-description{color:#ffffff;}.ast-theme-transparent-header .main-header-menu, .ast-theme-transparent-header.ast-header-break-point .main-header-menu{background-color:#f9f8f8;}.ast-theme-transparent-header .main-header-menu, .ast-theme-transparent-header .main-header-menu a, .ast-theme-transparent-header .ast-masthead-custom-menu-items, .ast-theme-transparent-header .ast-masthead-custom-menu-items a,.ast-theme-transparent-header .main-header-menu li > .ast-menu-toggle, .ast-theme-transparent-header .main-header-menu li > .ast-menu-toggle{color:rgba(1,22,39,0.75) !important;}.ast-theme-transparent-header .main-header-menu li:hover > a, .ast-theme-transparent-header .main-header-menu li:hover > .ast-menu-toggle, .ast-theme-transparent-header .main-header-menu .ast-masthead-custom-menu-items a:hover, .ast-theme-transparent-header .main-header-menu .focus > a, .ast-theme-transparent-header .main-header-menu .focus > .ast-menu-toggle, .ast-theme-transparent-header .main-header-menu .current-menu-item > a, .ast-theme-transparent-header .main-header-menu .current-menu-ancestor > a, .ast-theme-transparent-header .main-header-menu .current_page_item > a, .ast-theme-transparent-header .main-header-menu .current-menu-item > .ast-menu-toggle, .ast-theme-transparent-header .main-header-menu .current-menu-ancestor > .ast-menu-toggle, .ast-theme-transparent-header .main-header-menu .current_page_item > .ast-menu-toggle{color:#011627;}}.ast-theme-transparent-header .main-header-bar, .ast-theme-transparent-header .site-header{border-bottom-width:0;}
.ast-breadcrumbs .trail-browse, .ast-breadcrumbs .trail-items, .ast-breadcrumbs .trail-items li{display:inline-block;margin:0;padding:0;border:none;background:inherit;text-indent:0;}.ast-breadcrumbs .trail-browse{font-size:inherit;font-style:inherit;font-weight:inherit;color:inherit;}.ast-breadcrumbs .trail-items{list-style:none;}.trail-items li::after{padding:0 0.3em;content:"»";}.trail-items li:last-of-type::after{display:none;}
  
  body{
  	@import url('https://fonts.googleapis.com/css?family=Montserrat%3A400%2C%2C700&ver=1.8.1');
  	 .fl-builder-content *,.fl-builder-content *:before,.fl-builder-content *:after {-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;}.fl-row:before,.fl-row:after,.fl-row-content:before,.fl-row-content:after,.fl-col-group:before,.fl-col-group:after,.fl-col:before,.fl-col:after,.fl-module:before,.fl-module:after,.fl-module-content:before,.fl-module-content:after {display: table;content: " ";}.fl-row:after,.fl-row-content:after,.fl-col-group:after,.fl-col:after,.fl-module:after,.fl-module-content:after {clear: both;}.fl-row,.fl-row-content,.fl-col-group,.fl-col,.fl-module,.fl-module-content {zoom:1;}.fl-clear {clear: both;}.fl-clearfix:before,.fl-clearfix:after {display: table;content: " ";}.fl-clearfix:after {clear: both;}.fl-clearfix {zoom:1;}.fl-visible-medium,.fl-visible-medium-mobile,.fl-visible-mobile,.fl-col-group .fl-visible-medium.fl-col,.fl-col-group .fl-visible-medium-mobile.fl-col,.fl-col-group .fl-visible-mobile.fl-col {display: none;}.fl-row,.fl-row-content {margin-left: auto;margin-right: auto;}.fl-row-content-wrap {position: relative;}.fl-builder-mobile .fl-row-bg-photo .fl-row-content-wrap {background-attachment: scroll;}.fl-row-bg-video,.fl-row-bg-video .fl-row-content {position: relative;}.fl-row-bg-video .fl-bg-video {bottom: 0;left: 0;overflow: hidden;position: absolute;right: 0;top: 0;}.fl-row-bg-video .fl-bg-video video {bottom: 0;left: 0px;max-width: none;position: absolute;right: 0;top: 0px;}.fl-row-bg-video .fl-bg-video iframe {pointer-events: none;width: 100vw;height: 56.25vw; max-width: none;min-height: 100vh;min-width: 177.77vh; position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%); -webkit-transform: translate(-50%, -50%); }.fl-bg-video-fallback {background-position: 50% 50%;background-repeat: no-repeat;background-size: cover;bottom: 0px;left: 0px;position: absolute;right: 0px;top: 0px;}.fl-row-bg-slideshow,.fl-row-bg-slideshow .fl-row-content {position: relative;}.fl-row .fl-bg-slideshow {bottom: 0;left: 0;overflow: hidden;position: absolute;right: 0;top: 0;z-index: 0;}.fl-builder-edit .fl-row .fl-bg-slideshow * {bottom: 0;height: auto;left: 0;position: absolute;right: 0;top: 0;}.fl-row-bg-overlay .fl-row-content-wrap:after {border-radius: inherit;content: '';display: block;position: absolute;top: 0;right: 0;bottom: 0;left: 0;z-index: 0;}.fl-row-bg-overlay .fl-row-content {position: relative;z-index: 1;}.fl-row-full-height .fl-row-content-wrap,.fl-row-custom-height .fl-row-content-wrap {display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex;min-height: 100vh;}.fl-row-custom-height .fl-row-content-wrap {min-height: 0;}.fl-builder-edit .fl-row-full-height .fl-row-content-wrap {min-height: calc( 100vh - 48px );}.fl-row-full-height .fl-row-content,.fl-row-custom-height .fl-row-content {-webkit-box-flex: 1 1 auto; -moz-box-flex: 1 1 auto;-webkit-flex: 1 1 auto;-ms-flex: 1 1 auto;flex: 1 1 auto;}.fl-row-full-height .fl-row-full-width.fl-row-content,.fl-row-custom-height .fl-row-full-width.fl-row-content {max-width: 100%;width: 100%;}.fl-builder-ie-11 .fl-row.fl-row-full-height:not(.fl-visible-medium):not(.fl-visible-medium-mobile):not(.fl-visible-mobile),.fl-builder-ie-11 .fl-row.fl-row-custom-height:not(.fl-visible-medium):not(.fl-visible-medium-mobile):not(.fl-visible-mobile) {display: flex;flex-direction: column;height: 100%;}.fl-builder-ie-11 .fl-row-full-height .fl-row-content-wrap,.fl-builder-ie-11 .fl-row-custom-height .fl-row-content-wrap {height: auto;}.fl-builder-ie-11 .fl-row-full-height .fl-row-content,.fl-builder-ie-11 .fl-row-custom-height .fl-row-content {flex: 0 0 auto;flex-basis: 100%;margin: 0;}.fl-builder-ie-11 .fl-row-full-height.fl-row-align-top .fl-row-content,.fl-builder-ie-11 .fl-row-full-height.fl-row-align-bottom .fl-row-content,.fl-builder-ie-11 .fl-row-custom-height.fl-row-align-top .fl-row-content,.fl-builder-ie-11 .fl-row-custom-height.fl-row-align-bottom .fl-row-content {margin: 0 auto;}.fl-builder-ie-11 .fl-row-full-height.fl-row-align-center .fl-col-group:not(.fl-col-group-equal-height),.fl-builder-ie-11 .fl-row-custom-height.fl-row-align-center .fl-col-group:not(.fl-col-group-equal-height) {display: flex;align-items: center;justify-content: center;-webkit-align-items: center;-webkit-box-align: center;-webkit-box-pack: center;-webkit-justify-content: center;-ms-flex-align: center;-ms-flex-pack: center;}.fl-row-full-height.fl-row-align-center .fl-row-content-wrap,.fl-row-custom-height.fl-row-align-center .fl-row-content-wrap {align-items: center;justify-content: center;-webkit-align-items: center;-webkit-box-align: center;-webkit-box-pack: center;-webkit-justify-content: center;-ms-flex-align: center;-ms-flex-pack: center;}.fl-row-full-height.fl-row-align-bottom .fl-row-content-wrap,.fl-row-custom-height.fl-row-align-bottom .fl-row-content-wrap {align-items: flex-end;justify-content: flex-end;-webkit-align-items: flex-end;-webkit-justify-content: flex-end;-webkit-box-align: end;-webkit-box-pack: end;-ms-flex-align: end;-ms-flex-pack: end;}.fl-builder-ie-11 .fl-row-full-height.fl-row-align-bottom .fl-row-content-wrap,.fl-builder-ie-11 .fl-row-custom-height.fl-row-align-bottom .fl-row-content-wrap {justify-content: flex-start;-webkit-justify-content: flex-start;}@media all and (device-width: 768px) and (device-height: 1024px) and (orientation:portrait){.fl-row-full-height .fl-row-content-wrap{min-height: 1024px;}}@media all and (device-width: 1024px) and (device-height: 768px) and (orientation:landscape){.fl-row-full-height .fl-row-content-wrap{min-height: 768px;}}@media screen and (device-aspect-ratio: 40/71) {.fl-row-full-height .fl-row-content-wrap {min-height: 500px;}}.fl-col-group-equal-height,.fl-col-group-equal-height .fl-col,.fl-col-group-equal-height .fl-col-content{display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex;}.fl-col-group-equal-height{-webkit-flex-wrap: wrap;-ms-flex-wrap: wrap;flex-wrap: wrap;}.fl-col-group-equal-height.fl-col-group-has-child-loading {-webkit-flex-wrap: nowrap;-ms-flex-wrap: nowrap;flex-wrap: nowrap;}.fl-col-group-equal-height .fl-col,.fl-col-group-equal-height .fl-col-content{-webkit-box-flex: 1 1 auto; -moz-box-flex: 1 1 auto;-webkit-flex: 1 1 auto;-ms-flex: 1 1 auto;flex: 1 1 auto;}.fl-col-group-equal-height .fl-col-content{-webkit-box-orient: vertical; -webkit-box-direction: normal;-webkit-flex-direction: column;-ms-flex-direction: column;flex-direction: column; flex-shrink: 1; min-width: 1px; max-width: 100%;width: 100%;}.fl-col-group-equal-height:before,.fl-col-group-equal-height .fl-col:before,.fl-col-group-equal-height .fl-col-content:before,.fl-col-group-equal-height:after,.fl-col-group-equal-height .fl-col:after,.fl-col-group-equal-height .fl-col-content:after{content: none;}.fl-col-group-equal-height.fl-col-group-align-center .fl-col-content {align-items: center;justify-content: center;-webkit-align-items: center;-webkit-box-align: center;-webkit-box-pack: center;-webkit-justify-content: center;-ms-flex-align: center;-ms-flex-pack: center;}.fl-col-group-equal-height.fl-col-group-align-bottom .fl-col-content {justify-content: flex-end;-webkit-justify-content: flex-end;-webkit-box-align: end;-webkit-box-pack: end;-ms-flex-pack: end;}.fl-col-group-equal-height.fl-col-group-align-center .fl-module,.fl-col-group-equal-height.fl-col-group-align-center .fl-col-group {width: 100%;}.fl-builder-ie-11 .fl-col-group-equal-height,.fl-builder-ie-11 .fl-col-group-equal-height .fl-col,.fl-builder-ie-11 .fl-col-group-equal-height .fl-col-content,.fl-builder-ie-11 .fl-col-group-equal-height .fl-module,.fl-col-group-equal-height.fl-col-group-align-center .fl-col-group {min-height: 1px;}.fl-col {float: left;min-height: 1px;}.fl-col-bg-overlay .fl-col-content {position: relative;}.fl-col-bg-overlay .fl-col-content:after {border-radius: inherit;content: '';display: block;position: absolute;top: 0;right: 0;bottom: 0;left: 0;z-index: 0;}.fl-col-bg-overlay .fl-module {position: relative;z-index: 2;}.fl-module img {max-width: 100%;}.fl-builder-module-template {margin: 0 auto;max-width: 1100px;padding: 20px;}.fl-builder-content a.fl-button,.fl-builder-content a.fl-button:visited {border-radius: 4px;-moz-border-radius: 4px;-webkit-border-radius: 4px;display: inline-block;font-size: 16px;font-weight: normal;line-height: 18px;padding: 12px 24px;text-decoration: none;text-shadow: none;}.fl-builder-content .fl-button:hover {text-decoration: none;}.fl-builder-content .fl-button:active {position: relative;top: 1px;}.fl-builder-content .fl-button-width-full .fl-button {display: block;text-align: center;}.fl-builder-content .fl-button-width-custom .fl-button {display: inline-block;text-align: center;max-width: 100%;}.fl-builder-content .fl-button-left {text-align: left;}.fl-builder-content .fl-button-center {text-align: center;}.fl-builder-content .fl-button-right {text-align: right;}.fl-builder-content .fl-button i {font-size: 1.3em;height: auto;margin-right:8px;vertical-align: middle;width: auto;}.fl-builder-content .fl-button i.fl-button-icon-after {margin-left: 8px;margin-right: 0;}.fl-builder-content .fl-button-has-icon .fl-button-text {vertical-align: middle;}.fl-icon-wrap {display: inline-block;}.fl-icon {display: table-cell;vertical-align: middle;}.fl-icon a {text-decoration: none;}.fl-icon i {float: left;height: auto;width: auto;}.fl-icon i:before {border: none; height: auto;width: auto;}.fl-icon-text {display: table-cell;text-align: left;padding-left: 15px;vertical-align: middle;}.fl-icon-text-empty {display: none;}.fl-icon-text *:last-child {margin: 0; padding: 0;}.fl-icon-text a {text-decoration: none;}.fl-icon-text span {display: block;}.fl-icon-text span.mce-edit-focus {min-width: 1px;}.fl-photo {line-height: 0;position: relative;}.fl-photo-align-left {text-align: left;}.fl-photo-align-center {text-align: center;}.fl-photo-align-right {text-align: right;}.fl-photo-content {display: inline-block;line-height: 0;position: relative;max-width: 100%;}.fl-photo-img-svg {width: 100%;}.fl-photo-content img {display: inline;height: auto;max-width: 100%;}.fl-photo-crop-circle img {-webkit-border-radius: 100%;-moz-border-radius: 100%;border-radius: 100%;}.fl-photo-caption {font-size: 13px;line-height: 18px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}.fl-photo-caption-below {padding-bottom: 20px;padding-top: 10px;}.fl-photo-caption-hover {background: rgba(0,0,0,0.7);bottom: 0;color: #fff;left: 0;opacity: 0;filter: alpha(opacity = 0);padding: 10px 15px;position: absolute;right: 0;-webkit-transition:opacity 0.3s ease-in;-moz-transition:opacity 0.3s ease-in;transition:opacity 0.3s ease-in;}.fl-photo-content:hover .fl-photo-caption-hover {opacity: 100;filter: alpha(opacity = 100);}.fl-builder-pagination,.fl-builder-pagination-load-more {padding: 40px 0;}.fl-builder-pagination ul.page-numbers {list-style: none;margin: 0;padding: 0;text-align: center;}.fl-builder-pagination li {display: inline-block;list-style: none;margin: 0;padding: 0;}.fl-builder-pagination li a.page-numbers,.fl-builder-pagination li span.page-numbers {border: 1px solid #e6e6e6;display: inline-block;padding: 5px 10px;margin: 0 0 5px;}.fl-builder-pagination li a.page-numbers:hover,.fl-builder-pagination li span.current {background: #f5f5f5;text-decoration: none;}.fl-slideshow,.fl-slideshow * {-webkit-box-sizing: content-box;-moz-box-sizing: content-box;box-sizing: content-box;}.fl-slideshow .fl-slideshow-image img {max-width: none;}.fl-slideshow-social {line-height: 0;}.fl-slideshow-social * {margin: 0;}.fl-builder-content .bx-wrapper .bx-viewport {background: transparent;border: none;box-shadow: none;-moz-box-shadow: none;-webkit-box-shadow: none;left: 0;}.mfp-wrap button.mfp-arrow,.mfp-wrap button.mfp-arrow:active,.mfp-wrap button.mfp-arrow:hover,.mfp-wrap button.mfp-arrow:focus {background: transparent;border: none !important;outline: none;position: absolute;top: 50%;box-shadow: none !important;-moz-box-shadow: none !important;-webkit-box-shadow: none !important;}.mfp-wrap .mfp-close,.mfp-wrap .mfp-close:active,.mfp-wrap .mfp-close:hover,.mfp-wrap .mfp-close:focus {background: transparent !important;border: none !important;outline: none;position: absolute;top: 0;box-shadow: none !important;-moz-box-shadow: none !important;-webkit-box-shadow: none !important;}.admin-bar .mfp-wrap .mfp-close,.admin-bar .mfp-wrap .mfp-close:active,.admin-bar .mfp-wrap .mfp-close:hover,.admin-bar .mfp-wrap .mfp-close:focus {top: 32px!important;}img.mfp-img {padding: 0;}.mfp-counter {display: none;}.mfp-wrap .mfp-preloader.fa {font-size: 30px;}.fl-form-field {margin-bottom: 15px;}.fl-form-field input.fl-form-error {border-color: #DD6420;}.fl-form-error-message {clear: both;color: #DD6420;display: none;padding-top: 8px;font-size: 12px;font-weight: lighter;}.fl-form-button-disabled {opacity: 0.5;}.fl-animation {opacity: 0;}.fl-builder-preview .fl-animation,.fl-builder-edit .fl-animation,.fl-animated {opacity: 1;}.fl-animated {animation-fill-mode: both;-webkit-animation-fill-mode: both;}.fl-button.fl-button-icon-animation i {width: 0 !important;opacity: 0;-ms-filter: "alpha(opacity=0)";transition: all 0.2s ease-out;-webkit-transition: all 0.2s ease-out;}.fl-button.fl-button-icon-animation:hover i {opacity: 1! important;-ms-filter: "alpha(opacity=100)";}.fl-button.fl-button-icon-animation i.fl-button-icon-after {margin-left: 0px !important;}.fl-button.fl-button-icon-animation:hover i.fl-button-icon-after {margin-left: 10px !important;}.fl-button.fl-button-icon-animation i.fl-button-icon-before {margin-right: 0 !important;}.fl-button.fl-button-icon-animation:hover i.fl-button-icon-before {margin-right: 20px !important;margin-left: -10px;}.single:not(.woocommerce).single-fl-builder-template .fl-content {width: 100%;}.fl-builder-layer {position: absolute;top:0;left:0;right: 0;bottom: 0;z-index: 0;pointer-events: none;overflow: hidden;}.fl-builder-shape-layer {z-index: 0;}.fl-builder-shape-layer.fl-builder-bottom-edge-layer {z-index: 1;}.fl-row-bg-overlay .fl-builder-shape-layer {z-index: 1;}.fl-row-bg-overlay .fl-builder-shape-layer.fl-builder-bottom-edge-layer {z-index: 2;}.fl-row-has-layers .fl-row-content {z-index: 1;}.fl-row-bg-overlay .fl-row-content {z-index: 2;}.fl-builder-layer > * {display: block;position: absolute;top:0;left:0;width: 100%;}.fl-builder-layer + .fl-row-content {position: relative;}.fl-builder-layer .fl-shape {fill: #aaa;stroke: none;stroke-width: 0;width:100%;}.fl-builder-content a.fl-button,.fl-builder-content a.fl-button:visited {background: #fafafa;border: 1px solid #ccc;color: #333;}.fl-builder-content a.fl-button *,.fl-builder-content a.fl-button:visited * {color: #333;}.fl-row-content-wrap { margin: 0px; }.fl-row-content-wrap { padding: 20px; }.fl-row-fixed-width { max-width: 1200px; }.fl-module-content { margin: 20px; }@media (max-width: 992px) { .fl-visible-desktop,.fl-visible-mobile,.fl-col-group .fl-visible-desktop.fl-col,.fl-col-group .fl-visible-mobile.fl-col {display: none;}.fl-visible-desktop-medium,.fl-visible-medium,.fl-visible-medium-mobile,.fl-col-group .fl-visible-desktop-medium.fl-col,.fl-col-group .fl-visible-medium.fl-col,.fl-col-group .fl-visible-medium-mobile.fl-col {display: block;} }@media (max-width: 768px) { .fl-visible-desktop,.fl-visible-desktop-medium,.fl-visible-medium,.fl-col-group .fl-visible-desktop.fl-col,.fl-col-group .fl-visible-desktop-medium.fl-col,.fl-col-group .fl-visible-medium.fl-col {display: none;}.fl-visible-medium-mobile,.fl-visible-mobile,.fl-col-group .fl-visible-medium-mobile.fl-col,.fl-col-group .fl-visible-mobile.fl-col {display: block;}.fl-row-content-wrap {background-attachment: scroll !important;}.fl-row-bg-parallax .fl-row-content-wrap {background-attachment: scroll !important;background-position: center center !important;}.fl-col-group.fl-col-group-equal-height {display: block;}.fl-col-group.fl-col-group-equal-height.fl-col-group-custom-width {display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex;}.fl-col-group.fl-col-group-responsive-reversed {display: -webkit-box;display: -moz-box;display: -ms-flexbox;display: -moz-flex;display: -webkit-flex;display: flex;flex-flow: row wrap;-ms-box-orient: horizontal;-webkit-flex-flow: row wrap;}.fl-col-group.fl-col-group-responsive-reversed .fl-col {-webkit-box-flex: 0 0 100%; -moz-box-flex: 0 0 100%;-webkit-flex: 0 0 100%;-ms-flex: 0 0 100%;flex: 0 0 100%;max-width: 100%;}.fl-col-group-responsive-reversed .fl-col:nth-of-type(1) {-webkit-box-ordinal-group: 12; -moz-box-ordinal-group: 12;-ms-flex-order: 12;-webkit-order: 12; order: 12;}.fl-col-group-responsive-reversed .fl-col:nth-of-type(2) {-webkit-box-ordinal-group: 11;-moz-box-ordinal-group: 11;-ms-flex-order: 11;-webkit-order: 11;order: 11;}.fl-col-group-responsive-reversed .fl-col:nth-of-type(3) {-webkit-box-ordinal-group: 10;-moz-box-ordinal-group: 10;-ms-flex-order: 10;-webkit-order: 10;order: 10;}.fl-col-group-responsive-reversed .fl-col:nth-of-type(4) {-webkit-box-ordinal-group: 9;-moz-box-ordinal-group: 9;-ms-flex-order: 9;-webkit-order: 9;order: 9;}.fl-col-group-responsive-reversed .fl-col:nth-of-type(5) {-webkit-box-ordinal-group: 8;-moz-box-ordinal-group: 8;-ms-flex-order: 8;-webkit-order: 8;order: 8;}.fl-col-group-responsive-reversed .fl-col:nth-of-type(6) {-webkit-box-ordinal-group: 7;-moz-box-ordinal-group: 7;-ms-flex-order: 7;-webkit-order: 7;order: 7;}.fl-col-group-responsive-reversed .fl-col:nth-of-type(7) {-webkit-box-ordinal-group: 6;-moz-box-ordinal-group: 6;-ms-flex-order: 6;-webkit-order: 6;order: 6;}.fl-col-group-responsive-reversed .fl-col:nth-of-type(8) {-webkit-box-ordinal-group: 5;-moz-box-ordinal-group: 5;-ms-flex-order: 5;-webkit-order: 5;order: 5;}.fl-col-group-responsive-reversed .fl-col:nth-of-type(9) {-webkit-box-ordinal-group: 4;-moz-box-ordinal-group: 4;-ms-flex-order: 4;-webkit-order: 4;order: 4;}.fl-col-group-responsive-reversed .fl-col:nth-of-type(10) {-webkit-box-ordinal-group: 3;-moz-box-ordinal-group: 3;-ms-flex-order: 3;-webkit-order: 3;order: 3;}.fl-col-group-responsive-reversed .fl-col:nth-of-type(11) {-webkit-box-ordinal-group: 2;-moz-box-ordinal-group: 2;-ms-flex-order: 2;-webkit-order: 2;order: 2;}.fl-col-group-responsive-reversed .fl-col:nth-of-type(12) {-webkit-box-ordinal-group: 1;-moz-box-ordinal-group: 1;-ms-flex-order: 1;-webkit-order: 1;order: 1;}.fl-col {clear: both;float: none;margin-left: auto;margin-right: auto;width: auto !important;}.fl-col-small {max-width: 400px;}.fl-block-col-resize {display:none;}.fl-row[data-node] .fl-row-content-wrap {margin: 0;padding-left: 0;padding-right: 0;}.fl-row[data-node] .fl-bg-video,.fl-row[data-node] .fl-bg-slideshow {left: 0;right: 0;}.fl-col[data-node] .fl-col-content {margin: 0;padding-left: 0;padding-right: 0;} }.page .fl-post-header, .single-fl-builder-template .fl-post-header { display:none; }.fl-node-5c076b4a5c528 .fl-bg-video-audio {display: none;cursor: pointer;position: absolute;bottom: 20px;right: 20px;z-index: 5;width: 20px;}.fl-node-5c076b4a5c528 .fl-bg-video-audio .fl-audio-control {font-size: 20px;}.fl-node-5c076b4a5c528 .fl-bg-video-audio .fa-times {font-size: 10px;vertical-align: middle;position: absolute;top: 5px;left: 11px;bottom: 0;}.fl-node-5c076b4a5c528 > .fl-row-content-wrap {background-color: #011627;background-image: url(http://dev-prueba-builders.pantheonsite.io/wp-content/uploads/2018/11/bg-02-free-img.jpg);background-repeat: no-repeat;background-position: center center;background-attachment: scroll;background-size: cover;}.fl-node-5c076b4a5c528 > .fl-row-content-wrap:after {background-color: rgba(1,22,39,0.5);}.fl-node-5c076b4a5c528 .fl-row-content {max-width: 950;}@media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c076b4a5c528 > .fl-row-content-wrap {padding-top:320px;padding-right:0px;padding-bottom:0px;padding-left:0px;}@media ( max-width: 992px ) { .fl-node-5c076b4a5c528.fl-row > .fl-row-content-wrap {padding-top:200px;padding-right:25px;padding-left:25px;}}@media ( max-width: 768px ) { .fl-node-5c076b4a5c528.fl-row > .fl-row-content-wrap {padding-top:150px;padding-right:20px;padding-bottom:0px;padding-left:20px;}}.fl-node-5c07676adfb25 .fl-bg-video-audio {display: none;cursor: pointer;position: absolute;bottom: 20px;right: 20px;z-index: 5;width: 20px;}.fl-node-5c07676adfb25 .fl-bg-video-audio .fl-audio-control {font-size: 20px;}.fl-node-5c07676adfb25 .fl-bg-video-audio .fa-times {font-size: 10px;vertical-align: middle;position: absolute;top: 5px;left: 11px;bottom: 0;}.fl-node-5c07676adfb25 > .fl-row-content-wrap {background-repeat: no-repeat;background-position: center center;background-attachment: scroll;background-size: cover;}.fl-node-5c07676adfb25.fl-row-fixed-width, .fl-node-5c07676adfb25 .fl-row-fixed-width {max-width: 900;}@media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c07676adfb25 > .fl-row-content-wrap {padding-top:120px;padding-right:0px;padding-bottom:120px;padding-left:0px;}@media ( max-width: 992px ) { .fl-node-5c07676adfb25.fl-row > .fl-row-content-wrap {padding-top:70px;padding-right:20px;padding-bottom:70px;padding-left:20px;}}@media ( max-width: 768px ) { .fl-node-5c07676adfb25.fl-row > .fl-row-content-wrap {padding-top:50px;padding-right:20px;padding-bottom:50px;padding-left:20px;}}.fl-node-5c07613d3e892 .fl-bg-video-audio {display: none;cursor: pointer;position: absolute;bottom: 20px;right: 20px;z-index: 5;width: 20px;}.fl-node-5c07613d3e892 .fl-bg-video-audio .fl-audio-control {font-size: 20px;}.fl-node-5c07613d3e892 .fl-bg-video-audio .fa-times {font-size: 10px;vertical-align: middle;position: absolute;top: 5px;left: 11px;bottom: 0;}.fl-node-5c07613d3e892 > .fl-row-content-wrap {background-color: #011627;background-image: url(http://dev-prueba-builders.pantheonsite.io/wp-content/uploads/2018/11/bg-09-free-img.jpg);background-repeat: no-repeat;background-position: center center;background-attachment: fixed;background-size: cover;}.fl-node-5c07613d3e892 > .fl-row-content-wrap:after {background-color: rgba(1,22,39,0.8);}.fl-node-5c07613d3e892 .fl-row-content {max-width: 1216;}@media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c07613d3e892 > .fl-row-content-wrap {padding-top:100px;padding-right:0px;padding-bottom:100px;padding-left:0px;}@media ( max-width: 992px ) { .fl-node-5c07613d3e892.fl-row > .fl-row-content-wrap {padding-top:70px;padding-right:25px;padding-bottom:70px;padding-left:25px;}}@media ( max-width: 768px ) { .fl-node-5c07613d3e892.fl-row > .fl-row-content-wrap {padding-top:70px;padding-right:20px;padding-bottom:70px;padding-left:20px;}}.fl-node-5c0772a54061b .fl-bg-video-audio {display: none;cursor: pointer;position: absolute;bottom: 20px;right: 20px;z-index: 5;width: 20px;}.fl-node-5c0772a54061b .fl-bg-video-audio .fl-audio-control {font-size: 20px;}.fl-node-5c0772a54061b .fl-bg-video-audio .fa-times {font-size: 10px;vertical-align: middle;position: absolute;top: 5px;left: 11px;bottom: 0;}.fl-node-5c0772a54061b > .fl-row-content-wrap {border-top-width: 1px;border-right-width: 0px;border-bottom-width: 1px;border-left-width: 0px;}@media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c0772a54061b > .fl-row-content-wrap {padding-top:120px;padding-right:0px;padding-bottom:120px;padding-left:0px;}@media ( max-width: 992px ) { .fl-node-5c0772a54061b.fl-row > .fl-row-content-wrap {padding-top:65px;padding-right:15px;padding-bottom:65px;padding-left:15px;}}@media ( max-width: 768px ) { .fl-node-5c0772a54061b.fl-row > .fl-row-content-wrap {padding-top:60px;padding-right:20px;padding-bottom:60px;padding-left:20px;}}.fl-node-5c078577ccfc2 .fl-bg-video-audio {display: none;cursor: pointer;position: absolute;bottom: 20px;right: 20px;z-index: 5;width: 20px;}.fl-node-5c078577ccfc2 .fl-bg-video-audio .fl-audio-control {font-size: 20px;}.fl-node-5c078577ccfc2 .fl-bg-video-audio .fa-times {font-size: 10px;vertical-align: middle;position: absolute;top: 5px;left: 11px;bottom: 0;}.fl-node-5c078577ccfc2 > .fl-row-content-wrap {background-color: #F9F8F8;}@media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c078577ccfc2 > .fl-row-content-wrap {padding-top:40px;padding-right:0px;padding-bottom:40px;padding-left:0px;}@media ( max-width: 768px ) { .fl-node-5c078577ccfc2.fl-row > .fl-row-content-wrap {padding-top:40px;padding-bottom:40px;}}.fl-node-5c07c57137c60 .fl-bg-video-audio {display: none;cursor: pointer;position: absolute;bottom: 20px;right: 20px;z-index: 5;width: 20px;}.fl-node-5c07c57137c60 .fl-bg-video-audio .fl-audio-control {font-size: 20px;}.fl-node-5c07c57137c60 .fl-bg-video-audio .fa-times {font-size: 10px;vertical-align: middle;position: absolute;top: 5px;left: 11px;bottom: 0;}.fl-node-5c07c57137c60 > .fl-row-content-wrap:after {background-color: rgba(1,22,39,0.8);}.fl-node-5c07c57137c60 > .fl-row-content-wrap {background-image: url(http://dev-prueba-builders.pantheonsite.io/wp-content/uploads/2018/11/bg-10-free-img.jpg);background-repeat: no-repeat;background-position: center center;background-attachment: scroll;background-size: cover;}@media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c07c57137c60 > .fl-row-content-wrap {margin-bottom:-100px;} .fl-node-5c07c57137c60 > .fl-row-content-wrap {padding-top:90px;padding-right:00px;padding-bottom:80px;padding-left:0px;}@media ( max-width: 768px ) { .fl-node-5c07c57137c60.fl-row > .fl-row-content-wrap {padding-top:30px;padding-right:20px;padding-bottom:00px;padding-left:20px;}}.fl-node-5c076b4a5c6d3 {width: 100%;}@media(max-width: 992px) {}@media(max-width: 768px) {}.fl-node-5c07676adfcaa {width: 100%;}@media(max-width: 992px) {}@media(max-width: 768px) {}.fl-node-5c076ba3b786f {width: 46.96%;}@media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c076ba3b786f > .fl-col-content {padding-right:100px;}@media ( max-width: 992px ) { .fl-node-5c076ba3b786f.fl-col > .fl-col-content {padding-right:0px;}}.fl-node-5c076ba3b7873 {width: 53.04%;}@media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c076ba3b7873 > .fl-col-content {padding-left:75px;}@media ( max-width: 992px ) { .fl-node-5c076ba3b7873.fl-col > .fl-col-content {padding-left:30px;}}@media ( max-width: 768px ) { .fl-node-5c076ba3b7873.fl-col > .fl-col-content {padding-top:15px;padding-left:0px;}}.fl-node-5c0772a540621 {width: 33.33%;}.fl-node-5c0772a540621 > .fl-col-content {border-top-width: 1px;border-right-width: 1px;border-bottom-width: 1px;border-left-width: 1px;}@media(max-width: 992px) {}@media(max-width: 768px) {}.fl-node-5c0772a540627 {width: 33.33%;}@media(max-width: 992px) {}@media(max-width: 768px) {}.fl-node-5c0772a540626 {width: 33.33%;}@media(max-width: 992px) {}@media(max-width: 768px) {}.fl-node-5c078577ccfbc {width: 100%;}@media(max-width: 992px) {}@media(max-width: 768px) {}.fl-node-5c078577ccfbe {width: 68.42%;}@media(max-width: 992px) {}@media(max-width: 768px) {}.fl-node-5c078577ccfbf {width: 31.58%;}@media(max-width: 992px) {}@media(max-width: 768px) {}.fl-node-5c07c57137c56 {width: 100%;}@media(max-width: 992px) {}@media(max-width: 768px) {}.fl-node-5c07c57137c5a {width: 39.25%;}@media(max-width: 992px) {}@media(max-width: 768px) {}.fl-node-5c07c57137c5b {width: 30.42%;}@media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c07c57137c5b > .fl-col-content {padding-left:70px;}.fl-node-5c07c57137c5c {width: 30.33%;}@media(max-width: 992px) {}@media(max-width: 768px) {}.uabb-heading-wrapper .uabb-heading {padding: 0;margin: 0;}.uabb-heading-wrapper .uabb-heading a {text-decoration: none;}.uabb-heading-wrapper .uabb-subheading * {margin: 0;}.uabb-heading-align-left .uabb-heading,.uabb-heading-align-left .uabb-subheading,.uabb-heading-align-left .uabb-subheading * {text-align: left;}.uabb-heading-align-center .uabb-heading,.uabb-heading-align-center .uabb-subheading,.uabb-heading-align-center .uabb-subheading * {text-align: center;}.uabb-heading-align-right .uabb-heading,.uabb-heading-align-right .uabb-subheading,.uabb-heading-align-right .uabb-subheading * {text-align: right;}.uabb-module-content .uabb-text-editor *:not(a) {color: inherit;}.uabb-module-content .uabb-text-editor *:not(i) {font-family: inherit;}.uabb-module-content .uabb-text-editor *:not(h1):not(h2):not(h3):not(h4):not(h5):not(h6) {font-size: inherit;line-height: inherit;}.uabb-module-content .uabb-text-editor *:not(h1):not(h2):not(h3):not(h4):not(h5):not(h6):not(strong):not(b) {font-weight: inherit;}.uabb-heading a,.uabb-heading a:hover,.uabb-heading a:focus,.uabb-heading a:active {text-decoration: none;}.fl-node-5c07b29110b33 .uabb-heading {margin-top: 0px;margin-bottom: 15px;}.fl-node-5c07b29110b33 .uabb-subheading {margin-top: 15px;margin-bottom: 0px;}.fl-node-5c07b29110b33 .fl-module-content.fl-node-content .uabb-heading,.fl-node-5c07b29110b33 .fl-module-content.fl-node-content .uabb-heading .uabb-heading-text,.fl-node-5c07b29110b33 .fl-module-content.fl-node-content .uabb-heading * {color:#ffffff;}.fl-node-5c07b29110b33 .fl-module-content.fl-node-content .uabb-module-content .uabb-text-editor {color: rgba(1,22,39,0.75);}.fl-node-5c07b29110b33 .uabb-separator-parent {line-height: 0;text-align: center;}.fl-node-5c07b29110b33 .uabb-image-outter-wrap {width: 50px;}@media ( max-width: 992px ) {.fl-node-5c07b29110b33 .uabb-responsive-medsmall .uabb-side-left,.fl-node-5c07b29110b33 .uabb-responsive-medsmall .uabb-side-right {width: 20%;}.fl-node-5c07b29110b33 .uabb-responsive-medsmall .uabb-divider-content h3 {white-space: normal;}}@media ( max-width: 768px ) {.fl-node-5c07b29110b33 .uabb-responsive-mobile .uabb-side-left,.fl-node-5c07b29110b33 .uabb-responsive-mobile .uabb-side-right,.fl-node-5c07b29110b33 .uabb-responsive-medsmall .uabb-side-left,.fl-node-5c07b29110b33 .uabb-responsive-medsmall .uabb-side-right {width: 10%;}.fl-node-5c07b29110b33 .uabb-responsive-mobile .uabb-divider-content h3 {white-space: normal;}.fl-node-5c07b29110b33 .uabb-heading,.fl-node-5c07b29110b33 .uabb-subheading,.fl-node-5c07b29110b33 .uabb-subheading * {text-align: center;}}@media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c07b29110b33 > .fl-module-content {margin-top:0px;margin-bottom:-10px;}@media (max-width: 768px) { .fl-node-5c07b29110b33 > .fl-module-content { margin-bottom:20px; } }.fl-module-heading .fl-heading {padding: 0 !important;margin: 0 !important;}.fl-row .fl-col .fl-node-5c076b4a5c6d5 h5.fl-heading a,.fl-row .fl-col .fl-node-5c076b4a5c6d5 h5.fl-heading .fl-heading-text,.fl-row .fl-col .fl-node-5c076b4a5c6d5 h5.fl-heading .fl-heading-text *,.fl-node-5c076b4a5c6d5 h5.fl-heading .fl-heading-text {color: #ffffff;}.fl-node-5c076b4a5c6d5.fl-module-heading .fl-heading {line-height: 1.4;text-align: center;}@media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c076b4a5c6d5 > .fl-module-content {margin-top:0px;margin-bottom:20px;}@media ( max-width: 768px ) { .fl-node-5c076b4a5c6d5.fl-module > .fl-module-content {margin-bottom:10px;}}.fl-node-5c07b1ecec059 .uabb-heading {margin-top: 0px;margin-bottom: 15px;}.fl-node-5c07b1ecec059 .uabb-subheading {margin-top: 15px;margin-bottom: 0px;}.fl-node-5c07b1ecec059 .fl-module-content.fl-node-content .uabb-heading,.fl-node-5c07b1ecec059 .fl-module-content.fl-node-content .uabb-heading .uabb-heading-text,.fl-node-5c07b1ecec059 .fl-module-content.fl-node-content .uabb-heading * {color:#ffffff;}.fl-node-5c07b1ecec059 .fl-module-content.fl-node-content .uabb-module-content .uabb-text-editor {color: rgba(1,22,39,0.75);}.fl-node-5c07b1ecec059 .uabb-separator-parent {line-height: 0;text-align: center;}.fl-node-5c07b1ecec059 .uabb-image-outter-wrap {width: 50px;}@media ( max-width: 992px ) {.fl-node-5c07b1ecec059 .uabb-responsive-medsmall .uabb-side-left,.fl-node-5c07b1ecec059 .uabb-responsive-medsmall .uabb-side-right {width: 20%;}.fl-node-5c07b1ecec059 .uabb-responsive-medsmall .uabb-divider-content h3 {white-space: normal;}}@media ( max-width: 768px ) {.fl-node-5c07b1ecec059 .uabb-responsive-mobile .uabb-side-left,.fl-node-5c07b1ecec059 .uabb-responsive-mobile .uabb-side-right,.fl-node-5c07b1ecec059 .uabb-responsive-medsmall .uabb-side-left,.fl-node-5c07b1ecec059 .uabb-responsive-medsmall .uabb-side-right {width: 10%;}.fl-node-5c07b1ecec059 .uabb-responsive-mobile .uabb-divider-content h3 {white-space: normal;}.fl-node-5c07b1ecec059 .uabb-heading,.fl-node-5c07b1ecec059 .uabb-subheading,.fl-node-5c07b1ecec059 .uabb-subheading * {text-align: center;}}@media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c07b1ecec059 > .fl-module-content {margin-top:0px;margin-bottom:0px;}.fl-node-5c076b4a5c6d7 .uabb-creative-button-wrap a,.fl-node-5c076b4a5c6d7 .uabb-creative-button-wrap a:visited {padding-top: 0px;padding-bottom: 0px;padding-left: 0px;padding-right: 0px;border-radius: 100px;-moz-border-radius: 100px;-webkit-border-radius: 100px;width: 170px;min-height: 45px;display: -webkit-inline-box;display: -ms-inline-flexbox;display: inline-flex;-webkit-box-align: center;-ms-flex-align: center;align-items: center;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;background: #d94948;border: 1px solid #d94948;}html.internet-explorer .fl-node-5c076b4a5c6d7 .uabb-creative-button-wrap a,html.internet-explorer .fl-node-5c076b4a5c6d7 .uabb-creative-button-wrap a:visited {line-height: 45px;}.fl-node-5c076b4a5c6d7 .uabb-creative-flat-btn.uabb-animate_from_top-btn:hover .uabb-button-text {-webkit-transform: translateY(95px); -moz-transform: translateY(95px); -ms-transform: translateY(95px); -o-transform: translateY(95px); transform: translateY(95px);}.fl-node-5c076b4a5c6d7 .uabb-creative-flat-btn.uabb-animate_from_bottom-btn:hover .uabb-button-text {-webkit-transform: translateY(-95px); -moz-transform: translateY(-95px); -ms-transform: translateY(-95px); -o-transform: translateY(-95px); transform: translateY(-95px); }.fl-node-5c076b4a5c6d7 .uabb-creative-button-wrap a,.fl-node-5c076b4a5c6d7 .uabb-creative-button-wrap a *,.fl-node-5c076b4a5c6d7 .uabb-creative-button-wrap a:visited,.fl-node-5c076b4a5c6d7 .uabb-creative-button-wrap a:visited * {color: #ffffff;}.fl-node-5c076b4a5c6d7 .uabb-creative-button-wrap a:hover {background: rgba(217,73,72,0.85);border: 1px solid rgba(217,73,72,0.85);}.fl-node-5c076b4a5c6d7 .uabb-creative-button-wrap a:hover,.fl-node-5c076b4a5c6d7 .uabb-creative-button-wrap a:hover * {color: #ffffff;}@media ( max-width: 768px ) {.fl-node-5c076b4a5c6d7 .uabb-creative-button-wrap.uabb-creative-button-reponsive-center {text-align: center;}}.fl-node-5c076b4a5c6d7 .uabb-creative-button-wrap a,.fl-node-5c076b4a5c6d7 .uabb-creative-button-wrap a:visited {font-family: Montserrat, sans-serif;font-weight: 600;font-size: 15px;}@media(max-width: 992px) {}@media(max-width: 768px) {}.uabb-imgicon-wrap .uabb-image {line-height: 0;position: relative;}.uabb-imgicon-wrap .uabb-image-align-left {text-align: left;}.uabb-imgicon-wrap .uabb-image-align-center {text-align: center;}.uabb-imgicon-wrap .uabb-image-align-right {text-align: right;}.uabb-imgicon-wrap .uabb-image-content {border-radius: 0;display: inline-block;line-height: 0;position: relative;max-width: 100%;overflow: hidden;}.uabb-imgicon-wrap .uabb-image-content img {display: inline;height: auto !important;max-width: 100%;width: auto;box-sizing: content-box;border-radius: inherit;}.fl-builder-content .uabb-imgicon-wrap .uabb-image-crop-circle img {-webkit-border-radius: 100%;-moz-border-radius: 100%;border-radius: 100%;}.fl-builder-content .uabb-imgicon-wrap .uabb-image-crop-square img {-webkit-border-radius: 0;-moz-border-radius: 0;border-radius: 0;}.fl-node-5c07b175aeb7a .uabb-imgicon-wrap {text-align: center; }.fl-node-5c07b175aeb7a .uabb-icon-wrap .uabb-icon i,.fl-node-5c07b175aeb7a .uabb-icon-wrap .uabb-icon i:before {color: #d1d1d1;font-size: 30px;height: auto;width: auto;line-height: 30px;height: 30px;width: 30px;text-align: center;}.fl-node-5c07b175aeb7a .uabb-icon-wrap .uabb-icon i:before {background: none;}.fl-node-5c07b175aeb7a .uabb-icon-wrap .uabb-icon i:hover,.fl-node-5c07b175aeb7a .uabb-icon-wrap .uabb-icon i:hover:before {color: ;}.fl-node-5c07b175aeb7a .uabb-icon-wrap .uabb-icon i:hover:before {background: none;}@media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c07b175aeb7a > .fl-module-content {margin-top:350px;margin-right:0px;margin-bottom:50px;margin-left:0px;}@media ( max-width: 992px ) { .fl-node-5c07b175aeb7a.fl-module > .fl-module-content {margin-top:100px;margin-bottom:40px;}}@media ( max-width: 768px ) { .fl-node-5c07b175aeb7a.fl-module > .fl-module-content {margin-top:60px;}}@media (max-width: 768px) { .fl-node-5c07b175aeb7a > .fl-module-content { margin-bottom:20px; } }.fl-node-5c07b567b087e .uabb-heading {margin-top: 0px;margin-bottom: 15px;}.fl-node-5c07b567b087e .uabb-subheading {margin-top: 15px;margin-bottom: 0px;}.fl-node-5c07b567b087e .fl-module-content.fl-node-content .uabb-heading,.fl-node-5c07b567b087e .fl-module-content.fl-node-content .uabb-heading .uabb-heading-text,.fl-node-5c07b567b087e .fl-module-content.fl-node-content .uabb-heading * {color:#afafaf;}.fl-node-5c07b567b087e .fl-module-content.fl-node-content .uabb-module-content .uabb-text-editor {color: rgba(1,22,39,0.75);}.fl-node-5c07b567b087e .uabb-separator-parent {line-height: 0;text-align: center;}.fl-node-5c07b567b087e .uabb-image-outter-wrap {width: 50px;}@media ( max-width: 992px ) {.fl-node-5c07b567b087e .uabb-responsive-medsmall .uabb-side-left,.fl-node-5c07b567b087e .uabb-responsive-medsmall .uabb-side-right {width: 20%;}.fl-node-5c07b567b087e .uabb-responsive-medsmall .uabb-divider-content h3 {white-space: normal;}}@media ( max-width: 768px ) {.fl-node-5c07b567b087e .uabb-responsive-mobile .uabb-side-left,.fl-node-5c07b567b087e .uabb-responsive-mobile .uabb-side-right,.fl-node-5c07b567b087e .uabb-responsive-medsmall .uabb-side-left,.fl-node-5c07b567b087e .uabb-responsive-medsmall .uabb-side-right {width: 10%;}.fl-node-5c07b567b087e .uabb-responsive-mobile .uabb-divider-content h3 {white-space: normal;}.fl-node-5c07b567b087e .uabb-heading,.fl-node-5c07b567b087e .uabb-subheading,.fl-node-5c07b567b087e .uabb-subheading * {text-align: center;}}@media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c07b567b087e > .fl-module-content {margin-top:0px;margin-bottom:-10px;}@media (max-width: 768px) { .fl-node-5c07b567b087e > .fl-module-content { margin-bottom:20px; } }.fl-node-5c07b24249d9f .uabb-heading {margin-top: 0px;margin-bottom: 15px;}.fl-node-5c07b24249d9f .uabb-subheading {margin-top: 15px;margin-bottom: 0px;}.fl-node-5c07b24249d9f .fl-module-content.fl-node-content .uabb-heading,.fl-node-5c07b24249d9f .fl-module-content.fl-node-content .uabb-heading .uabb-heading-text,.fl-node-5c07b24249d9f .fl-module-content.fl-node-content .uabb-heading * {color:#011627 !important;}.fl-node-5c07b24249d9f .fl-module-content.fl-node-content .uabb-module-content .uabb-text-editor {color: rgba(1,22,39,0.75);}.fl-node-5c07b24249d9f .uabb-separator-parent {line-height: 0;text-align: center;}.fl-node-5c07b24249d9f .uabb-image-outter-wrap {width: 50px;}@media ( max-width: 992px ) {.fl-node-5c07b24249d9f .uabb-responsive-medsmall .uabb-side-left,.fl-node-5c07b24249d9f .uabb-responsive-medsmall .uabb-side-right {width: 20%;}.fl-node-5c07b24249d9f .uabb-responsive-medsmall .uabb-divider-content h3 {white-space: normal;}}@media ( max-width: 768px ) {.fl-node-5c07b24249d9f .uabb-responsive-mobile .uabb-side-left,.fl-node-5c07b24249d9f .uabb-responsive-mobile .uabb-side-right,.fl-node-5c07b24249d9f .uabb-responsive-medsmall .uabb-side-left,.fl-node-5c07b24249d9f .uabb-responsive-medsmall .uabb-side-right {width: 10%;}.fl-node-5c07b24249d9f .uabb-responsive-mobile .uabb-divider-content h3 {white-space: normal;}.fl-node-5c07b24249d9f .uabb-heading,.fl-node-5c07b24249d9f .uabb-subheading,.fl-node-5c07b24249d9f .uabb-subheading * {text-align: center;}}@media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c07b24249d9f > .fl-module-content {margin-top:0px;margin-right:125px;margin-bottom:0px;margin-left:125px;}@media ( max-width: 768px ) { .fl-node-5c07b24249d9f.fl-module > .fl-module-content {margin-right:40px;margin-left:40px;}}@media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c076900a129d > .fl-module-content {margin-top:10px;margin-bottom:10px;}@media ( max-width: 992px ) { .fl-node-5c076900a129d.fl-module > .fl-module-content {margin-top:25px;margin-bottom:3px;}}@media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c0769297bf17 > .fl-module-content {margin-top:0px;margin-bottom:10px;}@media ( max-width: 992px ) { .fl-node-5c0769297bf17.fl-module > .fl-module-content {margin-bottom:0px;}}.fl-node-5c07676adfcae .uabb-creative-button-wrap a,.fl-node-5c07676adfcae .uabb-creative-button-wrap a:visited {padding-top: 0px;padding-bottom: 0px;padding-left: 0px;padding-right: 0px;border-radius: 100px;-moz-border-radius: 100px;-webkit-border-radius: 100px;width: 170px;min-height: 45px;display: -webkit-inline-box;display: -ms-inline-flexbox;display: inline-flex;-webkit-box-align: center;-ms-flex-align: center;align-items: center;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;background: #d94948;border: 1px solid #d94948;}html.internet-explorer .fl-node-5c07676adfcae .uabb-creative-button-wrap a,html.internet-explorer .fl-node-5c07676adfcae .uabb-creative-button-wrap a:visited {line-height: 45px;}.fl-node-5c07676adfcae .uabb-creative-flat-btn.uabb-animate_from_top-btn:hover .uabb-button-text {-webkit-transform: translateY(95px); -moz-transform: translateY(95px); -ms-transform: translateY(95px); -o-transform: translateY(95px); transform: translateY(95px);}.fl-node-5c07676adfcae .uabb-creative-flat-btn.uabb-animate_from_bottom-btn:hover .uabb-button-text {-webkit-transform: translateY(-95px); -moz-transform: translateY(-95px); -ms-transform: translateY(-95px); -o-transform: translateY(-95px); transform: translateY(-95px); }.fl-node-5c07676adfcae .uabb-creative-button-wrap a,.fl-node-5c07676adfcae .uabb-creative-button-wrap a *,.fl-node-5c07676adfcae .uabb-creative-button-wrap a:visited,.fl-node-5c07676adfcae .uabb-creative-button-wrap a:visited * {color: #ffffff;}.fl-node-5c07676adfcae .uabb-creative-button-wrap a:hover {background: rgba(217,73,72,0.85);border: 1px solid rgba(217,73,72,0.85);}.fl-node-5c07676adfcae .uabb-creative-button-wrap a:hover,.fl-node-5c07676adfcae .uabb-creative-button-wrap a:hover * {color: #ffffff;}@media ( max-width: 768px ) {.fl-node-5c07676adfcae .uabb-creative-button-wrap.uabb-creative-button-reponsive-center {text-align: center;}}.fl-node-5c07676adfcae .uabb-creative-button-wrap a,.fl-node-5c07676adfcae .uabb-creative-button-wrap a:visited {font-family: Montserrat, sans-serif;font-weight: 600;font-size: 15px;}@media(max-width: 992px) {}@media(max-width: 768px) {}.fl-node-5c07b2099c698 .uabb-heading {margin-top: 0px;margin-bottom: 15px;}.fl-node-5c07b2099c698 .uabb-subheading {margin-top: 15px;margin-bottom: 0px;}.fl-node-5c07b2099c698 .fl-module-content.fl-node-content .uabb-heading,.fl-node-5c07b2099c698 .fl-module-content.fl-node-content .uabb-heading .uabb-heading-text,.fl-node-5c07b2099c698 .fl-module-content.fl-node-content .uabb-heading * {color:#afafaf;}.fl-node-5c07b2099c698 .fl-module-content.fl-node-content .uabb-module-content .uabb-text-editor {color: rgba(1,22,39,0.75);}.fl-node-5c07b2099c698 .uabb-separator-parent {line-height: 0;text-align: left;}.fl-node-5c07b2099c698 .uabb-image-outter-wrap {width: 50px;}@media ( max-width: 992px ) {.fl-node-5c07b2099c698 .uabb-responsive-medsmall .uabb-side-left,.fl-node-5c07b2099c698 .uabb-responsive-medsmall .uabb-side-right {width: 20%;}.fl-node-5c07b2099c698 .uabb-responsive-medsmall .uabb-divider-content h3 {white-space: normal;}}@media ( max-width: 768px ) {.fl-node-5c07b2099c698 .uabb-responsive-mobile .uabb-side-left,.fl-node-5c07b2099c698 .uabb-responsive-mobile .uabb-side-right,.fl-node-5c07b2099c698 .uabb-responsive-medsmall .uabb-side-left,.fl-node-5c07b2099c698 .uabb-responsive-medsmall .uabb-side-right {width: 10%;}.fl-node-5c07b2099c698 .uabb-responsive-mobile .uabb-divider-content h3 {white-space: normal;}.fl-node-5c07b2099c698 .uabb-heading,.fl-node-5c07b2099c698 .uabb-subheading,.fl-node-5c07b2099c698 .uabb-subheading * {text-align: center;}}@media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c07b2099c698 > .fl-module-content {margin-top:0px;margin-bottom:0px;}.fl-node-5c07b2b42dd73 .uabb-heading {margin-top: 0px;margin-bottom: 15px;}.fl-node-5c07b2b42dd73 .uabb-subheading {margin-top: 15px;margin-bottom: 0px;}.fl-node-5c07b2b42dd73 .fl-module-content.fl-node-content .uabb-heading,.fl-node-5c07b2b42dd73 .fl-module-content.fl-node-content .uabb-heading .uabb-heading-text,.fl-node-5c07b2b42dd73 .fl-module-content.fl-node-content .uabb-heading * {color:#ffffff;}.fl-node-5c07b2b42dd73 .fl-module-content.fl-node-content .uabb-module-content .uabb-text-editor {color: rgba(1,22,39,0.75);}.fl-node-5c07b2b42dd73 .uabb-separator-parent {line-height: 0;text-align: left;}.fl-node-5c07b2b42dd73 .uabb-image-outter-wrap {width: 50px;}@media ( max-width: 992px ) {.fl-node-5c07b2b42dd73 .uabb-responsive-medsmall .uabb-side-left,.fl-node-5c07b2b42dd73 .uabb-responsive-medsmall .uabb-side-right {width: 20%;}.fl-node-5c07b2b42dd73 .uabb-responsive-medsmall .uabb-divider-content h3 {white-space: normal;}}@media ( max-width: 768px ) {.fl-node-5c07b2b42dd73 .uabb-responsive-mobile .uabb-side-left,.fl-node-5c07b2b42dd73 .uabb-responsive-mobile .uabb-side-right,.fl-node-5c07b2b42dd73 .uabb-responsive-medsmall .uabb-side-left,.fl-node-5c07b2b42dd73 .uabb-responsive-medsmall .uabb-side-right {width: 10%;}.fl-node-5c07b2b42dd73 .uabb-responsive-mobile .uabb-divider-content h3 {white-space: normal;}.fl-node-5c07b2b42dd73 .uabb-heading,.fl-node-5c07b2b42dd73 .uabb-subheading,.fl-node-5c07b2b42dd73 .uabb-subheading * {text-align: center;}}@media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c07b2b42dd73 > .fl-module-content {margin-top:0px;margin-bottom:0px;}.fl-node-5c076f37db6a6 .uabb-separator {border-top:1px solid #6b6b6b;width: 100%;display: inline-block;}.fl-node-5c076f37db6a6 .uabb-separator-parent {text-align: center;}@media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c076f37db6a6 > .fl-module-content {margin-top:0px;margin-bottom:0px;}.fl-node-5c07b46320d2f .uabb-heading {margin-top: 0px;margin-bottom: 15px;}.fl-node-5c07b46320d2f .uabb-subheading {margin-top: 15px;margin-bottom: 0px;}.fl-node-5c07b46320d2f .fl-module-content.fl-node-content .uabb-heading,.fl-node-5c07b46320d2f .fl-module-content.fl-node-content .uabb-heading .uabb-heading-text,.fl-node-5c07b46320d2f .fl-module-content.fl-node-content .uabb-heading * {color:#ffffff;}.fl-node-5c07b46320d2f .fl-module-content.fl-node-content .uabb-module-content .uabb-text-editor {color: rgba(1,22,39,0.75);}.fl-node-5c07b46320d2f .uabb-separator-parent {line-height: 0;text-align: left;}.fl-node-5c07b46320d2f .uabb-image-outter-wrap {width: 50px;}@media ( max-width: 992px ) {.fl-node-5c07b46320d2f .uabb-responsive-medsmall .uabb-side-left,.fl-node-5c07b46320d2f .uabb-responsive-medsmall .uabb-side-right {width: 20%;}.fl-node-5c07b46320d2f .uabb-responsive-medsmall .uabb-divider-content h3 {white-space: normal;}}@media ( max-width: 768px ) {.fl-node-5c07b46320d2f .uabb-responsive-mobile .uabb-side-left,.fl-node-5c07b46320d2f .uabb-responsive-mobile .uabb-side-right,.fl-node-5c07b46320d2f .uabb-responsive-medsmall .uabb-side-left,.fl-node-5c07b46320d2f .uabb-responsive-medsmall .uabb-side-right {width: 10%;}.fl-node-5c07b46320d2f .uabb-responsive-mobile .uabb-divider-content h3 {white-space: normal;}.fl-node-5c07b46320d2f .uabb-heading,.fl-node-5c07b46320d2f .uabb-subheading,.fl-node-5c07b46320d2f .uabb-subheading * {text-align: center;}}@media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c07b46320d2f > .fl-module-content {margin-top:20px;margin-bottom:0px;}.fl-node-5c07b46d367f9 .uabb-heading {margin-top: 0px;margin-bottom: 15px;}.fl-node-5c07b46d367f9 .uabb-subheading {margin-top: 15px;margin-bottom: 0px;}.fl-node-5c07b46d367f9 .fl-module-content.fl-node-content .uabb-heading,.fl-node-5c07b46d367f9 .fl-module-content.fl-node-content .uabb-heading .uabb-heading-text,.fl-node-5c07b46d367f9 .fl-module-content.fl-node-content .uabb-heading * {color:#afafaf;}.fl-node-5c07b46d367f9 .fl-module-content.fl-node-content .uabb-module-content .uabb-text-editor {color: rgba(1,22,39,0.75);}.fl-node-5c07b46d367f9 .uabb-separator-parent {line-height: 0;text-align: left;}.fl-node-5c07b46d367f9 .uabb-image-outter-wrap {width: 50px;}@media ( max-width: 992px ) {.fl-node-5c07b46d367f9 .uabb-responsive-medsmall .uabb-side-left,.fl-node-5c07b46d367f9 .uabb-responsive-medsmall .uabb-side-right {width: 20%;}.fl-node-5c07b46d367f9 .uabb-responsive-medsmall .uabb-divider-content h3 {white-space: normal;}}@media ( max-width: 768px ) {.fl-node-5c07b46d367f9 .uabb-responsive-mobile .uabb-side-left,.fl-node-5c07b46d367f9 .uabb-responsive-mobile .uabb-side-right,.fl-node-5c07b46d367f9 .uabb-responsive-medsmall .uabb-side-left,.fl-node-5c07b46d367f9 .uabb-responsive-medsmall .uabb-side-right {width: 10%;}.fl-node-5c07b46d367f9 .uabb-responsive-mobile .uabb-divider-content h3 {white-space: normal;}.fl-node-5c07b46d367f9 .uabb-heading,.fl-node-5c07b46d367f9 .uabb-subheading,.fl-node-5c07b46d367f9 .uabb-subheading * {text-align: center;}}@media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c07b46d367f9 > .fl-module-content {margin-top:0px;margin-bottom:0px;}.fl-node-5c076f5abe742 .uabb-separator {border-top:1px solid #6b6b6b;width: 100%;display: inline-block;}.fl-node-5c076f5abe742 .uabb-separator-parent {text-align: center;}@media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c076f5abe742 > .fl-module-content {margin-top:0px;margin-right:0px;margin-bottom:0px;}.fl-row .fl-col .fl-node-5c076f423ccd1 h4.fl-heading a,.fl-row .fl-col .fl-node-5c076f423ccd1 h4.fl-heading .fl-heading-text,.fl-row .fl-col .fl-node-5c076f423ccd1 h4.fl-heading .fl-heading-text *,.fl-node-5c076f423ccd1 h4.fl-heading .fl-heading-text {color: #ffffff;}.fl-node-5c076f423ccd1.fl-module-heading .fl-heading {line-height: 1.4;text-align: left;}@media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c076f423ccd1 > .fl-module-content {margin-bottom:10px;}.fl-node-5c07b47e4e58c .uabb-heading {margin-top: 0px;margin-bottom: 15px;}.fl-node-5c07b47e4e58c .uabb-subheading {margin-top: 15px;margin-bottom: 0px;}.fl-node-5c07b47e4e58c .fl-module-content.fl-node-content .uabb-heading,.fl-node-5c07b47e4e58c .fl-module-content.fl-node-content .uabb-heading .uabb-heading-text,.fl-node-5c07b47e4e58c .fl-module-content.fl-node-content .uabb-heading * {color:#afafaf;}.fl-node-5c07b47e4e58c .fl-module-content.fl-node-content .uabb-module-content .uabb-text-editor {color: rgba(1,22,39,0.75);}.fl-node-5c07b47e4e58c .uabb-separator-parent {line-height: 0;text-align: left;}.fl-node-5c07b47e4e58c .uabb-image-outter-wrap {width: 50px;}@media ( max-width: 992px ) {.fl-node-5c07b47e4e58c .uabb-responsive-medsmall .uabb-side-left,.fl-node-5c07b47e4e58c .uabb-responsive-medsmall .uabb-side-right {width: 20%;}.fl-node-5c07b47e4e58c .uabb-responsive-medsmall .uabb-divider-content h3 {white-space: normal;}}@media ( max-width: 768px ) {.fl-node-5c07b47e4e58c .uabb-responsive-mobile .uabb-side-left,.fl-node-5c07b47e4e58c .uabb-responsive-mobile .uabb-side-right,.fl-node-5c07b47e4e58c .uabb-responsive-medsmall .uabb-side-left,.fl-node-5c07b47e4e58c .uabb-responsive-medsmall .uabb-side-right {width: 10%;}.fl-node-5c07b47e4e58c .uabb-responsive-mobile .uabb-divider-content h3 {white-space: normal;}.fl-node-5c07b47e4e58c .uabb-heading,.fl-node-5c07b47e4e58c .uabb-subheading,.fl-node-5c07b47e4e58c .uabb-subheading * {text-align: center;}}@media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c07b47e4e58c > .fl-module-content {margin-top:0px;margin-bottom:0px;}.fl-node-5c07b4746d9f2 .uabb-heading {margin-top: 0px;margin-bottom: 15px;}.fl-node-5c07b4746d9f2 .uabb-subheading {margin-top: 15px;margin-bottom: 0px;}.fl-node-5c07b4746d9f2 .fl-module-content.fl-node-content .uabb-heading,.fl-node-5c07b4746d9f2 .fl-module-content.fl-node-content .uabb-heading .uabb-heading-text,.fl-node-5c07b4746d9f2 .fl-module-content.fl-node-content .uabb-heading * {color:#ffffff;}.fl-node-5c07b4746d9f2 .fl-module-content.fl-node-content .uabb-module-content .uabb-text-editor {color: rgba(1,22,39,0.75);}.fl-node-5c07b4746d9f2 .uabb-separator-parent {line-height: 0;text-align: left;}.fl-node-5c07b4746d9f2 .uabb-image-outter-wrap {width: 50px;}@media ( max-width: 992px ) {.fl-node-5c07b4746d9f2 .uabb-responsive-medsmall .uabb-side-left,.fl-node-5c07b4746d9f2 .uabb-responsive-medsmall .uabb-side-right {width: 20%;}.fl-node-5c07b4746d9f2 .uabb-responsive-medsmall .uabb-divider-content h3 {white-space: normal;}}@media ( max-width: 768px ) {.fl-node-5c07b4746d9f2 .uabb-responsive-mobile .uabb-side-left,.fl-node-5c07b4746d9f2 .uabb-responsive-mobile .uabb-side-right,.fl-node-5c07b4746d9f2 .uabb-responsive-medsmall .uabb-side-left,.fl-node-5c07b4746d9f2 .uabb-responsive-medsmall .uabb-side-right {width: 10%;}.fl-node-5c07b4746d9f2 .uabb-responsive-mobile .uabb-divider-content h3 {white-space: normal;}.fl-node-5c07b4746d9f2 .uabb-heading,.fl-node-5c07b4746d9f2 .uabb-subheading,.fl-node-5c07b4746d9f2 .uabb-subheading * {text-align: center;}}@media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c07b4746d9f2 > .fl-module-content {margin-top:20px;margin-bottom:0px;}.fl-node-5c076ca4431df .uabb-separator {border-top:1px solid #6b6b6b;width: 100%;display: inline-block;}.fl-node-5c076ca4431df .uabb-separator-parent {text-align: center;}@media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c076ca4431df > .fl-module-content {margin-top:0px;margin-bottom:0px;}.fl-row .fl-col .fl-node-5c076f4631a72 h5.fl-heading a,.fl-row .fl-col .fl-node-5c076f4631a72 h5.fl-heading .fl-heading-text,.fl-row .fl-col .fl-node-5c076f4631a72 h5.fl-heading .fl-heading-text *,.fl-node-5c076f4631a72 h5.fl-heading .fl-heading-text {color: #b7b7b7;}.fl-node-5c076f4631a72.fl-module-heading .fl-heading {line-height: 1.8;text-align: left;}@media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c076f4631a72 > .fl-module-content {margin-top:00px;margin-bottom:10px;}.fl-node-5c07b42e77693 .uabb-heading {margin-top: 0px;margin-bottom: 15px;}.fl-node-5c07b42e77693 .uabb-subheading {margin-top: 15px;margin-bottom: 0px;}.fl-node-5c07b42e77693 .fl-module-content.fl-node-content .uabb-heading,.fl-node-5c07b42e77693 .fl-module-content.fl-node-content .uabb-heading .uabb-heading-text,.fl-node-5c07b42e77693 .fl-module-content.fl-node-content .uabb-heading * {color:#ffffff;}.fl-node-5c07b42e77693 .fl-module-content.fl-node-content .uabb-module-content .uabb-text-editor {color: rgba(1,22,39,0.75);}.fl-node-5c07b42e77693 .uabb-separator-parent {line-height: 0;text-align: left;}.fl-node-5c07b42e77693 .uabb-image-outter-wrap {width: 50px;}@media ( max-width: 992px ) {.fl-node-5c07b42e77693 .uabb-responsive-medsmall .uabb-side-left,.fl-node-5c07b42e77693 .uabb-responsive-medsmall .uabb-side-right {width: 20%;}.fl-node-5c07b42e77693 .uabb-responsive-medsmall .uabb-divider-content h3 {white-space: normal;}}@media ( max-width: 768px ) {.fl-node-5c07b42e77693 .uabb-responsive-mobile .uabb-side-left,.fl-node-5c07b42e77693 .uabb-responsive-mobile .uabb-side-right,.fl-node-5c07b42e77693 .uabb-responsive-medsmall .uabb-side-left,.fl-node-5c07b42e77693 .uabb-responsive-medsmall .uabb-side-right {width: 10%;}.fl-node-5c07b42e77693 .uabb-responsive-mobile .uabb-divider-content h3 {white-space: normal;}.fl-node-5c07b42e77693 .uabb-heading,.fl-node-5c07b42e77693 .uabb-subheading,.fl-node-5c07b42e77693 .uabb-subheading * {text-align: center;}}@media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c07b42e77693 > .fl-module-content {margin-top:20px;margin-bottom:0px;}.fl-node-5c07b4023b0ad .uabb-heading {margin-top: 0px;margin-bottom: 15px;}.fl-node-5c07b4023b0ad .uabb-subheading {margin-top: 15px;margin-bottom: 0px;}.fl-node-5c07b4023b0ad .fl-module-content.fl-node-content .uabb-heading,.fl-node-5c07b4023b0ad .fl-module-content.fl-node-content .uabb-heading .uabb-heading-text,.fl-node-5c07b4023b0ad .fl-module-content.fl-node-content .uabb-heading * {color:#afafaf;}.fl-node-5c07b4023b0ad .fl-module-content.fl-node-content .uabb-module-content .uabb-text-editor {color: rgba(1,22,39,0.75);}.fl-node-5c07b4023b0ad .uabb-separator-parent {line-height: 0;text-align: left;}.fl-node-5c07b4023b0ad .uabb-image-outter-wrap {width: 50px;}@media ( max-width: 992px ) {.fl-node-5c07b4023b0ad .uabb-responsive-medsmall .uabb-side-left,.fl-node-5c07b4023b0ad .uabb-responsive-medsmall .uabb-side-right {width: 20%;}.fl-node-5c07b4023b0ad .uabb-responsive-medsmall .uabb-divider-content h3 {white-space: normal;}}@media ( max-width: 768px ) {.fl-node-5c07b4023b0ad .uabb-responsive-mobile .uabb-side-left,.fl-node-5c07b4023b0ad .uabb-responsive-mobile .uabb-side-right,.fl-node-5c07b4023b0ad .uabb-responsive-medsmall .uabb-side-left,.fl-node-5c07b4023b0ad .uabb-responsive-medsmall .uabb-side-right {width: 10%;}.fl-node-5c07b4023b0ad .uabb-responsive-mobile .uabb-divider-content h3 {white-space: normal;}.fl-node-5c07b4023b0ad .uabb-heading,.fl-node-5c07b4023b0ad .uabb-subheading,.fl-node-5c07b4023b0ad .uabb-subheading * {text-align: center;}}@media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c07b4023b0ad > .fl-module-content {margin-top:0px;margin-bottom:0px;}.fl-row .fl-col .fl-node-5c076f5eac778 h4.fl-heading a,.fl-row .fl-col .fl-node-5c076f5eac778 h4.fl-heading .fl-heading-text,.fl-row .fl-col .fl-node-5c076f5eac778 h4.fl-heading .fl-heading-text *,.fl-node-5c076f5eac778 h4.fl-heading .fl-heading-text {color: #ffffff;}.fl-node-5c076f5eac778.fl-module-heading .fl-heading {line-height: 1.4;text-align: left;}@media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c076f5eac778 > .fl-module-content {margin-bottom:10px;}.fl-row .fl-col .fl-node-5c076f61f21f9 h5.fl-heading a,.fl-row .fl-col .fl-node-5c076f61f21f9 h5.fl-heading .fl-heading-text,.fl-row .fl-col .fl-node-5c076f61f21f9 h5.fl-heading .fl-heading-text *,.fl-node-5c076f61f21f9 h5.fl-heading .fl-heading-text {color: #b7b7b7;}.fl-node-5c076f61f21f9.fl-module-heading .fl-heading {line-height: 1.8;text-align: left;}@media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c076f61f21f9 > .fl-module-content {margin-top:00px;margin-bottom:10px;}.fl-row .fl-col .fl-node-5c07646a2047c h4.fl-heading a,.fl-row .fl-col .fl-node-5c07646a2047c h4.fl-heading .fl-heading-text,.fl-row .fl-col .fl-node-5c07646a2047c h4.fl-heading .fl-heading-text *,.fl-node-5c07646a2047c h4.fl-heading .fl-heading-text {color: #ffffff;}.fl-node-5c07646a2047c.fl-module-heading .fl-heading {line-height: 1.4;text-align: left;}@media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c07646a2047c > .fl-module-content {margin-bottom:10px;}.fl-row .fl-col .fl-node-5c076f01b79ba h5.fl-heading a,.fl-row .fl-col .fl-node-5c076f01b79ba h5.fl-heading .fl-heading-text,.fl-row .fl-col .fl-node-5c076f01b79ba h5.fl-heading .fl-heading-text *,.fl-node-5c076f01b79ba h5.fl-heading .fl-heading-text {color: #b7b7b7;}.fl-node-5c076f01b79ba.fl-module-heading .fl-heading {line-height: 1.8;text-align: left;}@media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c076f01b79ba > .fl-module-content {margin-top:00px;margin-bottom:20px;}@media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c076ff748c80 > .fl-module-content {margin-top:0px;margin-right:0px;}img.mfp-img {padding-bottom: 40px !important;}@media (max-width: 768px) { .fl-photo-content {width: 100%;} }.fl-node-5c0772a540625 .fl-photo {text-align: center;}@media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c0772a540625 > .fl-module-content {margin-right:10px;margin-left:10px;}.fl-node-5c07b4e2eaafc .uabb-heading {margin-top: 0px;margin-bottom: 15px;}.fl-node-5c07b4e2eaafc .uabb-subheading {margin-top: 15px;margin-bottom: 0px;}.fl-node-5c07b4e2eaafc .fl-module-content.fl-node-content .uabb-heading,.fl-node-5c07b4e2eaafc .fl-module-content.fl-node-content .uabb-heading .uabb-heading-text,.fl-node-5c07b4e2eaafc .fl-module-content.fl-node-content .uabb-heading * {color:#011627;}.fl-node-5c07b4e2eaafc .fl-module-content.fl-node-content .uabb-module-content .uabb-text-editor {color: rgba(1,22,39,0.75);}.fl-node-5c07b4e2eaafc .uabb-separator-parent {line-height: 0;text-align: left;}.fl-node-5c07b4e2eaafc .uabb-image-outter-wrap {width: 50px;}@media ( max-width: 992px ) {.fl-node-5c07b4e2eaafc .uabb-responsive-medsmall .uabb-side-left,.fl-node-5c07b4e2eaafc .uabb-responsive-medsmall .uabb-side-right {width: 20%;}.fl-node-5c07b4e2eaafc .uabb-responsive-medsmall .uabb-divider-content h3 {white-space: normal;}}@media ( max-width: 768px ) {.fl-node-5c07b4e2eaafc .uabb-responsive-mobile .uabb-side-left,.fl-node-5c07b4e2eaafc .uabb-responsive-mobile .uabb-side-right,.fl-node-5c07b4e2eaafc .uabb-responsive-medsmall .uabb-side-left,.fl-node-5c07b4e2eaafc .uabb-responsive-medsmall .uabb-side-right {width: 10%;}.fl-node-5c07b4e2eaafc .uabb-responsive-mobile .uabb-divider-content h3 {white-space: normal;}.fl-node-5c07b4e2eaafc .uabb-heading,.fl-node-5c07b4e2eaafc .uabb-subheading,.fl-node-5c07b4e2eaafc .uabb-subheading * {text-align: center;}}@media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c07b4e2eaafc > .fl-module-content {margin-top:0px;margin-bottom:0px;margin-left:10px;}@media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c07747738209 > .fl-module-content {margin-top:0px;margin-right:20px;margin-bottom:00px;margin-left:10px;}@media ( max-width: 992px ) { .fl-node-5c07747738209.fl-module > .fl-module-content {margin-top:0px;margin-bottom:3px;}}.fl-node-5c0772a540628 .fl-photo {text-align: center;}@media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c0772a540628 > .fl-module-content {margin-right:10px;margin-left:10px;}.fl-node-5c07b4d1e4e77 .uabb-heading {margin-top: 0px;margin-bottom: 15px;}.fl-node-5c07b4d1e4e77 .uabb-subheading {margin-top: 15px;margin-bottom: 0px;}.fl-node-5c07b4d1e4e77 .fl-module-content.fl-node-content .uabb-heading,.fl-node-5c07b4d1e4e77 .fl-module-content.fl-node-content .uabb-heading .uabb-heading-text,.fl-node-5c07b4d1e4e77 .fl-module-content.fl-node-content .uabb-heading * {color:#011627;}.fl-node-5c07b4d1e4e77 .fl-module-content.fl-node-content .uabb-module-content .uabb-text-editor {color: rgba(1,22,39,0.75);}.fl-node-5c07b4d1e4e77 .uabb-separator-parent {line-height: 0;text-align: left;}.fl-node-5c07b4d1e4e77 .uabb-image-outter-wrap {width: 50px;}@media ( max-width: 992px ) {.fl-node-5c07b4d1e4e77 .uabb-responsive-medsmall .uabb-side-left,.fl-node-5c07b4d1e4e77 .uabb-responsive-medsmall .uabb-side-right {width: 20%;}.fl-node-5c07b4d1e4e77 .uabb-responsive-medsmall .uabb-divider-content h3 {white-space: normal;}}@media ( max-width: 768px ) {.fl-node-5c07b4d1e4e77 .uabb-responsive-mobile .uabb-side-left,.fl-node-5c07b4d1e4e77 .uabb-responsive-mobile .uabb-side-right,.fl-node-5c07b4d1e4e77 .uabb-responsive-medsmall .uabb-side-left,.fl-node-5c07b4d1e4e77 .uabb-responsive-medsmall .uabb-side-right {width: 10%;}.fl-node-5c07b4d1e4e77 .uabb-responsive-mobile .uabb-divider-content h3 {white-space: normal;}.fl-node-5c07b4d1e4e77 .uabb-heading,.fl-node-5c07b4d1e4e77 .uabb-subheading,.fl-node-5c07b4d1e4e77 .uabb-subheading * {text-align: center;}}@media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c07b4d1e4e77 > .fl-module-content {margin-top:0px;margin-bottom:0px;margin-left:10px;}@media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c07747aeea11 > .fl-module-content {margin-top:0px;margin-right:20px;margin-bottom:10px;margin-left:10px;}@media ( max-width: 992px ) { .fl-node-5c07747aeea11.fl-module > .fl-module-content {margin-top:0px;margin-bottom:3px;}}.fl-node-5c0772a54062d .fl-photo {text-align: center;}@media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c0772a54062d > .fl-module-content {margin-right:10px;margin-left:10px;}.fl-node-5c07b4b67bf0f .uabb-heading {margin-top: 0px;margin-bottom: 15px;}.fl-node-5c07b4b67bf0f .uabb-subheading {margin-top: 15px;margin-bottom: 0px;}.fl-node-5c07b4b67bf0f .fl-module-content.fl-node-content .uabb-heading,.fl-node-5c07b4b67bf0f .fl-module-content.fl-node-content .uabb-heading .uabb-heading-text,.fl-node-5c07b4b67bf0f .fl-module-content.fl-node-content .uabb-heading * {color:#011627;}.fl-node-5c07b4b67bf0f .fl-module-content.fl-node-content .uabb-module-content .uabb-text-editor {color: rgba(1,22,39,0.75);}.fl-node-5c07b4b67bf0f .uabb-separator-parent {line-height: 0;text-align: left;}.fl-node-5c07b4b67bf0f .uabb-image-outter-wrap {width: 50px;}@media ( max-width: 992px ) {.fl-node-5c07b4b67bf0f .uabb-responsive-medsmall .uabb-side-left,.fl-node-5c07b4b67bf0f .uabb-responsive-medsmall .uabb-side-right {width: 20%;}.fl-node-5c07b4b67bf0f .uabb-responsive-medsmall .uabb-divider-content h3 {white-space: normal;}}@media ( max-width: 768px ) {.fl-node-5c07b4b67bf0f .uabb-responsive-mobile .uabb-side-left,.fl-node-5c07b4b67bf0f .uabb-responsive-mobile .uabb-side-right,.fl-node-5c07b4b67bf0f .uabb-responsive-medsmall .uabb-side-left,.fl-node-5c07b4b67bf0f .uabb-responsive-medsmall .uabb-side-right {width: 10%;}.fl-node-5c07b4b67bf0f .uabb-responsive-mobile .uabb-divider-content h3 {white-space: normal;}.fl-node-5c07b4b67bf0f .uabb-heading,.fl-node-5c07b4b67bf0f .uabb-subheading,.fl-node-5c07b4b67bf0f .uabb-subheading * {text-align: center;}}@media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c07b4b67bf0f > .fl-module-content {margin-top:0px;margin-bottom:0px;margin-left:10px;}@media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c077433b8ff8 > .fl-module-content {margin-top:0px;margin-right:20px;margin-bottom:10px;margin-left:10px;}@media ( max-width: 992px ) { .fl-node-5c077433b8ff8.fl-module > .fl-module-content {margin-top:0px;margin-bottom:3px;}}.fl-node-5c07b492b7d3c .uabb-heading {margin-top: 0px;margin-bottom: 15px;}.fl-node-5c07b492b7d3c .uabb-subheading {margin-top: 15px;margin-bottom: 0px;}.fl-node-5c07b492b7d3c .fl-module-content.fl-node-content .uabb-heading,.fl-node-5c07b492b7d3c .fl-module-content.fl-node-content .uabb-heading .uabb-heading-text,.fl-node-5c07b492b7d3c .fl-module-content.fl-node-content .uabb-heading * {color:#011627;}.fl-node-5c07b492b7d3c .fl-module-content.fl-node-content .uabb-module-content .uabb-text-editor {color: rgba(1,22,39,0.75);}.fl-node-5c07b492b7d3c .uabb-separator-parent {line-height: 0;text-align: center;}.fl-node-5c07b492b7d3c .uabb-image-outter-wrap {width: 50px;}@media ( max-width: 992px ) {.fl-node-5c07b492b7d3c .uabb-responsive-medsmall .uabb-side-left,.fl-node-5c07b492b7d3c .uabb-responsive-medsmall .uabb-side-right {width: 20%;}.fl-node-5c07b492b7d3c .uabb-responsive-medsmall .uabb-divider-content h3 {white-space: normal;}}@media ( max-width: 768px ) {.fl-node-5c07b492b7d3c .uabb-responsive-mobile .uabb-side-left,.fl-node-5c07b492b7d3c .uabb-responsive-mobile .uabb-side-right,.fl-node-5c07b492b7d3c .uabb-responsive-medsmall .uabb-side-left,.fl-node-5c07b492b7d3c .uabb-responsive-medsmall .uabb-side-right {width: 10%;}.fl-node-5c07b492b7d3c .uabb-responsive-mobile .uabb-divider-content h3 {white-space: normal;}.fl-node-5c07b492b7d3c .uabb-heading,.fl-node-5c07b492b7d3c .uabb-subheading,.fl-node-5c07b492b7d3c .uabb-subheading * {text-align: center;}}@media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c07b492b7d3c > .fl-module-content {margin-top:0px;margin-bottom:-3px;margin-left:10px;}@media (max-width: 768px) { .fl-node-5c07b492b7d3c > .fl-module-content { margin-bottom:20px; } }.fl-node-5c078577ccfc1 .uabb-creative-button-wrap a,.fl-node-5c078577ccfc1 .uabb-creative-button-wrap a:visited {padding-top: 0px;padding-bottom: 0px;padding-left: 0px;padding-right: 0px;border-radius: 100px;-moz-border-radius: 100px;-webkit-border-radius: 100px;width: 170px;min-height: 45px;display: -webkit-inline-box;display: -ms-inline-flexbox;display: inline-flex;-webkit-box-align: center;-ms-flex-align: center;align-items: center;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;background: #d94948;border: 1px solid #d94948;}html.internet-explorer .fl-node-5c078577ccfc1 .uabb-creative-button-wrap a,html.internet-explorer .fl-node-5c078577ccfc1 .uabb-creative-button-wrap a:visited {line-height: 45px;}.fl-node-5c078577ccfc1 .uabb-creative-flat-btn.uabb-animate_from_top-btn:hover .uabb-button-text {-webkit-transform: translateY(95px); -moz-transform: translateY(95px); -ms-transform: translateY(95px); -o-transform: translateY(95px); transform: translateY(95px);}.fl-node-5c078577ccfc1 .uabb-creative-flat-btn.uabb-animate_from_bottom-btn:hover .uabb-button-text {-webkit-transform: translateY(-95px); -moz-transform: translateY(-95px); -ms-transform: translateY(-95px); -o-transform: translateY(-95px); transform: translateY(-95px); }.fl-node-5c078577ccfc1 .uabb-creative-button-wrap a,.fl-node-5c078577ccfc1 .uabb-creative-button-wrap a *,.fl-node-5c078577ccfc1 .uabb-creative-button-wrap a:visited,.fl-node-5c078577ccfc1 .uabb-creative-button-wrap a:visited * {color: #ffffff;}.fl-node-5c078577ccfc1 .uabb-creative-button-wrap a:hover {background: rgba(217,73,72,0.85);border: 1px solid rgba(217,73,72,0.85);}.fl-node-5c078577ccfc1 .uabb-creative-button-wrap a:hover,.fl-node-5c078577ccfc1 .uabb-creative-button-wrap a:hover * {color: #ffffff;}@media ( max-width: 768px ) {.fl-node-5c078577ccfc1 .uabb-creative-button-wrap.uabb-creative-button-reponsive-center {text-align: center;}}.fl-node-5c078577ccfc1 .uabb-creative-button-wrap a,.fl-node-5c078577ccfc1 .uabb-creative-button-wrap a:visited {font-family: Montserrat, sans-serif;font-weight: 600;font-size: 15px;}@media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c078577ccfc1 > .fl-module-content {margin-top:0px;margin-bottom:10px;}@media ( max-width: 768px ) { .fl-node-5c078577ccfc1.fl-module > .fl-module-content {margin-top:22px;}}.fl-node-5c07c94d762a6 .uabb-heading {margin-top: 0px;margin-bottom: 15px;}.fl-node-5c07c94d762a6 .uabb-subheading {margin-top: 15px;margin-bottom: 0px;}.fl-node-5c07c94d762a6 .fl-module-content.fl-node-content .uabb-heading,.fl-node-5c07c94d762a6 .fl-module-content.fl-node-content .uabb-heading .uabb-heading-text,.fl-node-5c07c94d762a6 .fl-module-content.fl-node-content .uabb-heading * {color:#ffffff;}.fl-node-5c07c94d762a6 .fl-module-content.fl-node-content .uabb-module-content .uabb-text-editor {color: #d8d8d8;}.fl-node-5c07c94d762a6 .uabb-separator-parent {line-height: 0;text-align: left;}.fl-node-5c07c94d762a6 .uabb-image-outter-wrap {width: 50px;}@media ( max-width: 992px ) {.fl-node-5c07c94d762a6 .uabb-responsive-medsmall .uabb-side-left,.fl-node-5c07c94d762a6 .uabb-responsive-medsmall .uabb-side-right {width: 20%;}.fl-node-5c07c94d762a6 .uabb-responsive-medsmall .uabb-divider-content h3 {white-space: normal;}}@media ( max-width: 768px ) {.fl-node-5c07c94d762a6 .uabb-responsive-mobile .uabb-side-left,.fl-node-5c07c94d762a6 .uabb-responsive-mobile .uabb-side-right,.fl-node-5c07c94d762a6 .uabb-responsive-medsmall .uabb-side-left,.fl-node-5c07c94d762a6 .uabb-responsive-medsmall .uabb-side-right {width: 10%;}.fl-node-5c07c94d762a6 .uabb-responsive-mobile .uabb-divider-content h3 {white-space: normal;}.fl-node-5c07c94d762a6 .uabb-heading,.fl-node-5c07c94d762a6 .uabb-subheading,.fl-node-5c07c94d762a6 .uabb-subheading * {text-align: center;}}@media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c07c94d762a6 > .fl-module-content {margin-top:0px;margin-bottom:-3px;margin-left:10px;}@media (max-width: 768px) { .fl-node-5c07c94d762a6 > .fl-module-content { margin-bottom:20px; } }.fl-node-5c07c9beed2fd .uabb-heading {margin-top: 0px;margin-bottom: 15px;}.fl-node-5c07c9beed2fd .uabb-subheading {margin-top: 15px;margin-bottom: 0px;}.fl-node-5c07c9beed2fd .fl-module-content.fl-node-content .uabb-heading,.fl-node-5c07c9beed2fd .fl-module-content.fl-node-content .uabb-heading .uabb-heading-text,.fl-node-5c07c9beed2fd .fl-module-content.fl-node-content .uabb-heading * {color:#ffffff;}.fl-node-5c07c9beed2fd .fl-module-content.fl-node-content .uabb-module-content .uabb-text-editor {color: #d8d8d8;}.fl-node-5c07c9beed2fd .uabb-separator-parent {line-height: 0;text-align: left;}.fl-node-5c07c9beed2fd .uabb-image-outter-wrap {width: 50px;}@media ( max-width: 992px ) {.fl-node-5c07c9beed2fd .uabb-responsive-medsmall .uabb-side-left,.fl-node-5c07c9beed2fd .uabb-responsive-medsmall .uabb-side-right {width: 20%;}.fl-node-5c07c9beed2fd .uabb-responsive-medsmall .uabb-divider-content h3 {white-space: normal;}}@media ( max-width: 768px ) {.fl-node-5c07c9beed2fd .uabb-responsive-mobile .uabb-side-left,.fl-node-5c07c9beed2fd .uabb-responsive-mobile .uabb-side-right,.fl-node-5c07c9beed2fd .uabb-responsive-medsmall .uabb-side-left,.fl-node-5c07c9beed2fd .uabb-responsive-medsmall .uabb-side-right {width: 10%;}.fl-node-5c07c9beed2fd .uabb-responsive-mobile .uabb-divider-content h3 {white-space: normal;}.fl-node-5c07c9beed2fd .uabb-heading,.fl-node-5c07c9beed2fd .uabb-subheading,.fl-node-5c07c9beed2fd .uabb-subheading * {text-align: center;}}@media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c07c9beed2fd > .fl-module-content {margin-top:0px;margin-bottom:-3px;margin-left:10px;}@media (max-width: 768px) { .fl-node-5c07c9beed2fd > .fl-module-content { margin-bottom:20px; } }.uabb-info-list .uabb-info-list-wrapper {margin: 0;padding: 0;}.uabb-info-list .uabb-info-list-left,.uabb-info-list .uabb-info-list-right {float:none;}.uabb-info-list-content-wrapper .uabb-info-list-content h2,.uabb-info-list-content-wrapper .uabb-info-list-content h3,.uabb-info-list-content-wrapper .uabb-info-list-content h4,.uabb-info-list-content-wrapper .uabb-info-list-content h5,.uabb-info-list-content-wrapper .uabb-info-list-content h6 {margin: 0;padding: 0;}.uabb-info-list .uabb-info-list-wrapper > li {list-style: none;margin: 0;padding: 0;position: relative;}.uabb-info-list-content-wrapper {position: relative;z-index: 5;}.uabb-info-list-icon {position: relative;z-index: 5;}.uabb-module-content .uabb-text-editor *:not(a) {color: inherit;}.uabb-module-content .uabb-text-editor *:not(i) {font-family: inherit;}.uabb-module-content .uabb-text-editor *:not(h1):not(h2):not(h3):not(h4):not(h5):not(h6) {font-size: inherit;line-height: inherit; }.uabb-module-content .uabb-text-editor *:not(h1):not(h2):not(h3):not(h4):not(h5):not(h6):not(strong):not(b) {font-weight: inherit;}.uabb-info-list-content .uabb-info-list-description p:last-of-type {margin-bottom: 0;}.uabb-info-list-connector,.uabb-info-list-connector-top {height: 100%;position: absolute;z-index: 1;border-width: 0 0 0 1px;}.uabb-info-list-connector-top {top: 0;}.uabb-info-list-item:first-child .uabb-info-list-connector-top {display: none;}.uabb-info-list-wrapper li:last-child .uabb-info-list-connector {display: none;}.uabb-info-list-content-wrapper.uabb-info-list-left .uabb-info-list-icon,.uabb-info-list-content-wrapper.uabb-info-list-right .uabb-info-list-icon {display: inline-block;vertical-align: top;}.uabb-info-list-content-wrapper.uabb-info-list-left .uabb-info-list-content,.uabb-info-list-content-wrapper.uabb-info-list-right .uabb-info-list-content {display: inline-block;} .uabb-info-list-content-wrapper.uabb-info-list-top .uabb-info-list-icon,.uabb-info-list-content-wrapper.uabb-info-list-top .uabb-info-list-content {display: block;}.uabb-info-list-content-wrapper.uabb-info-list-left .uabb-info-list-icon {margin-right: 20px;}.uabb-info-list-content-wrapper.uabb-info-list-right{text-align: right;direction: rtl;}.uabb-info-list-content-wrapper.uabb-info-list-right * {direction: ltr;}.uabb-info-list-content-wrapper.uabb-info-list-right .uabb-info-list-icon {margin-left: 20px;}.uabb-info-list-wrapper.uabb-info-list-top {display: block;}.uabb-info-list-wrapper.uabb-info-list-top li {display: inline-block;}.uabb-info-list-wrapper.uabb-info-list-top li .uabb-info-list-icon {float: none;margin: 0 auto;}.uabb-info-list-wrapper.uabb-info-list-top li .uabb-info-list-content {margin: 15px;padding-bottom: 0;text-align: center;}.uabb-info-list-wrapper.uabb-info-list-top li .uabb-info-list-connector {height: 0;left: 50%;margin-left: 0;position: absolute;width: 100%;}.uabb-info-list-content.uabb-info-list-top {margin-right: 1em;padding: 0px;}.uabb-info-list-link {position: absolute;width: 100%;height: 100%;left: 0;top: 0;bottom: 0;right: 0;z-index: 9;}.uabb-info-list-item .uabb-info-list-icon .uabb-icon-wrap {vertical-align: middle;}.uabb-info-list-icon .icon{display: inline-block;}.uabb-info-list-item .uabb-info-list-icon a {box-shadow: none;}.uabb-info-list-wrapper.uabb-info-list-top .uabb-info-list-item {width: 100%;vertical-align: top;}@media only screen and (max-width:767px) {.uabb-info-list-wrapper.uabb-info-list-top .uabb-info-list-item .uabb-info-list-connector {display:none;}}.fl-node-5c07c9d990906 .uabb-info-list-wrapper .uabb-info-list-item:last-child {padding-bottom: 0;}.fl-node-5c07c9d990906 .uabb-info-list-content-wrapper.uabb-info-list-left .uabb-info-list-content {width: calc( 100% - 38px );}.fl-node-5c07c9d990906 .uabb-info-list-wrapper.uabb-info-list-left li .uabb-info-list-connector,.fl-node-5c07c9d990906 .uabb-info-list-wrapper.uabb-info-list-left li .uabb-info-list-connector-top {left: 9px;}.fl-node-5c07c9d990906 .uabb-info-list-wrapper .uabb-info-list-item {padding-bottom: 0px;}.fl-node-5c07c9d990906 .info-list-icon-dynamic0 .uabb-imgicon-wrap {text-align: center; }.fl-node-5c07c9d990906 .info-list-icon-dynamic0 .uabb-icon-wrap .uabb-icon i,.fl-node-5c07c9d990906 .info-list-icon-dynamic0 .uabb-icon-wrap .uabb-icon i:before {color: #c9c9c9;font-size: 18px;height: auto;width: auto;line-height: 18px;height: 18px;width: 18px;text-align: center;}.fl-node-5c07c9d990906 .info-list-icon-dynamic0 .uabb-icon-wrap .uabb-icon i:before {background: none;}.fl-node-5c07c9d990906 .info-list-icon-dynamic0 .uabb-icon-wrap .uabb-icon i:hover,.fl-node-5c07c9d990906 .info-list-icon-dynamic0 .uabb-icon-wrap .uabb-icon i:hover:before {color: ;}.fl-node-5c07c9d990906 .info-list-icon-dynamic0 .uabb-icon-wrap .uabb-icon i:hover:before {background: none;}@media(max-width: 992px) {}@media(max-width: 768px) {}.fl-node-5c07c9d990906 .info-list-icon-dynamic0 .uabb-imgicon-wrap .uabb-photo-img {}.fl-node-5c07c9d990906 .info-list-icon-dynamic1 .uabb-imgicon-wrap {text-align: center; }.fl-node-5c07c9d990906 .info-list-icon-dynamic1 .uabb-icon-wrap .uabb-icon i,.fl-node-5c07c9d990906 .info-list-icon-dynamic1 .uabb-icon-wrap .uabb-icon i:before {color: #c9c9c9;font-size: 18px;height: auto;width: auto;line-height: 18px;height: 18px;width: 18px;text-align: center;}.fl-node-5c07c9d990906 .info-list-icon-dynamic1 .uabb-icon-wrap .uabb-icon i:before {background: none;}.fl-node-5c07c9d990906 .info-list-icon-dynamic1 .uabb-icon-wrap .uabb-icon i:hover,.fl-node-5c07c9d990906 .info-list-icon-dynamic1 .uabb-icon-wrap .uabb-icon i:hover:before {color: ;}.fl-node-5c07c9d990906 .info-list-icon-dynamic1 .uabb-icon-wrap .uabb-icon i:hover:before {background: none;}@media(max-width: 992px) {}@media(max-width: 768px) {}.fl-node-5c07c9d990906 .info-list-icon-dynamic1 .uabb-imgicon-wrap .uabb-photo-img {}.fl-node-5c07c9d990906 .info-list-icon-dynamic2 .uabb-imgicon-wrap {text-align: center; }.fl-node-5c07c9d990906 .info-list-icon-dynamic2 .uabb-icon-wrap .uabb-icon i,.fl-node-5c07c9d990906 .info-list-icon-dynamic2 .uabb-icon-wrap .uabb-icon i:before {color: #c9c9c9;font-size: 18px;height: auto;width: auto;line-height: 18px;height: 18px;width: 18px;text-align: center;}.fl-node-5c07c9d990906 .info-list-icon-dynamic2 .uabb-icon-wrap .uabb-icon i:before {background: none;}.fl-node-5c07c9d990906 .info-list-icon-dynamic2 .uabb-icon-wrap .uabb-icon i:hover,.fl-node-5c07c9d990906 .info-list-icon-dynamic2 .uabb-icon-wrap .uabb-icon i:hover:before {color: ;}.fl-node-5c07c9d990906 .info-list-icon-dynamic2 .uabb-icon-wrap .uabb-icon i:hover:before {background: none;}@media(max-width: 992px) {}@media(max-width: 768px) {}.fl-node-5c07c9d990906 .info-list-icon-dynamic2 .uabb-imgicon-wrap .uabb-photo-img {}.fl-node-5c07c9d990906 .uabb-icon i {float: none;}.fl-node-5c07c9d990906 .uabb-icon {display: block;}.fl-node-5c07c9d990906 .uabb-info-list-content .uabb-info-list-title{color: #c9c9c9;}.fl-node-5c07c9d990906 .uabb-info-list-content .uabb-info-list-description {} @media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c07c9d990906 > .fl-module-content {margin-top:20px;margin-right:0px;margin-bottom:0px;margin-left:0px;}.fl-node-5c07ca560f1dd .uabb-heading {margin-top: 0px;margin-bottom: 15px;}.fl-node-5c07ca560f1dd .uabb-subheading {margin-top: 15px;margin-bottom: 0px;}.fl-node-5c07ca560f1dd .fl-module-content.fl-node-content .uabb-heading,.fl-node-5c07ca560f1dd .fl-module-content.fl-node-content .uabb-heading .uabb-heading-text,.fl-node-5c07ca560f1dd .fl-module-content.fl-node-content .uabb-heading * {color:#ffffff;}.fl-node-5c07ca560f1dd .fl-module-content.fl-node-content .uabb-module-content .uabb-text-editor {color: #d8d8d8;}.fl-node-5c07ca560f1dd .uabb-separator-parent {line-height: 0;text-align: left;}.fl-node-5c07ca560f1dd .uabb-image-outter-wrap {width: 50px;}@media ( max-width: 992px ) {.fl-node-5c07ca560f1dd .uabb-responsive-medsmall .uabb-side-left,.fl-node-5c07ca560f1dd .uabb-responsive-medsmall .uabb-side-right {width: 20%;}.fl-node-5c07ca560f1dd .uabb-responsive-medsmall .uabb-divider-content h3 {white-space: normal;}}@media ( max-width: 768px ) {.fl-node-5c07ca560f1dd .uabb-responsive-mobile .uabb-side-left,.fl-node-5c07ca560f1dd .uabb-responsive-mobile .uabb-side-right,.fl-node-5c07ca560f1dd .uabb-responsive-medsmall .uabb-side-left,.fl-node-5c07ca560f1dd .uabb-responsive-medsmall .uabb-side-right {width: 10%;}.fl-node-5c07ca560f1dd .uabb-responsive-mobile .uabb-divider-content h3 {white-space: normal;}.fl-node-5c07ca560f1dd .uabb-heading,.fl-node-5c07ca560f1dd .uabb-subheading,.fl-node-5c07ca560f1dd .uabb-subheading * {text-align: center;}}@media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c07ca560f1dd > .fl-module-content {margin-top:0px;margin-bottom:-3px;margin-left:10px;}@media (max-width: 768px) { .fl-node-5c07ca560f1dd > .fl-module-content { margin-bottom:20px; } }.fl-node-5c07ca79202f2 .uabb-info-list-wrapper .uabb-info-list-item:last-child {padding-bottom: 0;}.fl-node-5c07ca79202f2 .uabb-info-list-content-wrapper.uabb-info-list-left .uabb-info-list-content {width: calc( 100% - 38px );}.fl-node-5c07ca79202f2 .uabb-info-list-wrapper.uabb-info-list-left li .uabb-info-list-connector,.fl-node-5c07ca79202f2 .uabb-info-list-wrapper.uabb-info-list-left li .uabb-info-list-connector-top {left: 9px;}.fl-node-5c07ca79202f2 .uabb-info-list-wrapper .uabb-info-list-item {padding-bottom: 0px;}.fl-node-5c07ca79202f2 .info-list-icon-dynamic0 .uabb-imgicon-wrap {text-align: center; }.fl-node-5c07ca79202f2 .info-list-icon-dynamic0 .uabb-icon-wrap .uabb-icon i,.fl-node-5c07ca79202f2 .info-list-icon-dynamic0 .uabb-icon-wrap .uabb-icon i:before {color: #c9c9c9;font-size: 18px;height: auto;width: auto;line-height: 18px;height: 18px;width: 18px;text-align: center;}.fl-node-5c07ca79202f2 .info-list-icon-dynamic0 .uabb-icon-wrap .uabb-icon i:before {background: none;}.fl-node-5c07ca79202f2 .info-list-icon-dynamic0 .uabb-icon-wrap .uabb-icon i:hover,.fl-node-5c07ca79202f2 .info-list-icon-dynamic0 .uabb-icon-wrap .uabb-icon i:hover:before {color: ;}.fl-node-5c07ca79202f2 .info-list-icon-dynamic0 .uabb-icon-wrap .uabb-icon i:hover:before {background: none;}@media(max-width: 992px) {}@media(max-width: 768px) {}.fl-node-5c07ca79202f2 .info-list-icon-dynamic0 .uabb-imgicon-wrap .uabb-photo-img {}.fl-node-5c07ca79202f2 .info-list-icon-dynamic1 .uabb-imgicon-wrap {text-align: center; }.fl-node-5c07ca79202f2 .info-list-icon-dynamic1 .uabb-icon-wrap .uabb-icon i,.fl-node-5c07ca79202f2 .info-list-icon-dynamic1 .uabb-icon-wrap .uabb-icon i:before {color: #c9c9c9;font-size: 18px;height: auto;width: auto;line-height: 18px;height: 18px;width: 18px;text-align: center;}.fl-node-5c07ca79202f2 .info-list-icon-dynamic1 .uabb-icon-wrap .uabb-icon i:before {background: none;}.fl-node-5c07ca79202f2 .info-list-icon-dynamic1 .uabb-icon-wrap .uabb-icon i:hover,.fl-node-5c07ca79202f2 .info-list-icon-dynamic1 .uabb-icon-wrap .uabb-icon i:hover:before {color: ;}.fl-node-5c07ca79202f2 .info-list-icon-dynamic1 .uabb-icon-wrap .uabb-icon i:hover:before {background: none;}@media(max-width: 992px) {}@media(max-width: 768px) {}.fl-node-5c07ca79202f2 .info-list-icon-dynamic1 .uabb-imgicon-wrap .uabb-photo-img {}.fl-node-5c07ca79202f2 .info-list-icon-dynamic2 .uabb-imgicon-wrap {text-align: center; }.fl-node-5c07ca79202f2 .info-list-icon-dynamic2 .uabb-icon-wrap .uabb-icon i,.fl-node-5c07ca79202f2 .info-list-icon-dynamic2 .uabb-icon-wrap .uabb-icon i:before {color: #c9c9c9;font-size: 18px;height: auto;width: auto;line-height: 18px;height: 18px;width: 18px;text-align: center;}.fl-node-5c07ca79202f2 .info-list-icon-dynamic2 .uabb-icon-wrap .uabb-icon i:before {background: none;}.fl-node-5c07ca79202f2 .info-list-icon-dynamic2 .uabb-icon-wrap .uabb-icon i:hover,.fl-node-5c07ca79202f2 .info-list-icon-dynamic2 .uabb-icon-wrap .uabb-icon i:hover:before {color: ;}.fl-node-5c07ca79202f2 .info-list-icon-dynamic2 .uabb-icon-wrap .uabb-icon i:hover:before {background: none;}@media(max-width: 992px) {}@media(max-width: 768px) {}.fl-node-5c07ca79202f2 .info-list-icon-dynamic2 .uabb-imgicon-wrap .uabb-photo-img {}.fl-node-5c07ca79202f2 .uabb-icon i {float: none;}.fl-node-5c07ca79202f2 .uabb-icon {display: block;}.fl-node-5c07ca79202f2 .uabb-info-list-content .uabb-info-list-title{color: #c9c9c9;}.fl-node-5c07ca79202f2 .uabb-info-list-content .uabb-info-list-description {} @media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c07ca79202f2 > .fl-module-content {margin-top:20px;margin-right:0px;margin-bottom:0px;margin-left:0px;}.fl-node-5c07c7bf0af99 {width: 100%;}.fl-node-5c07c7bf0af99 .uabb-spacer-gap-preview.uabb-spacer-gap {height: 20px;clear: both;width: 100%;} @media(max-width: 992px) {}@media(max-width: 768px) {} .fl-node-5c07c7bf0af99 > .fl-module-content {margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}.fl-node-5c07c929a52a0 .uabb-separator {border-top:1px solid #44606b;width: 100%;display: inline-block;}.fl-node-5c07c929a52a0 .uabb-separator-parent {text-align: center;}@media(max-width: 992px) {}@media(max-width: 768px) {}.fl-col-group-equal-height.fl-col-group-align-bottom .fl-col-content {-webkit-justify-content: flex-end;justify-content: flex-end;-webkit-box-align: end; -webkit-box-pack: end;-ms-flex-pack: end;}.uabb-module-content h1,.uabb-module-content h2,.uabb-module-content h3,.uabb-module-content h4,.uabb-module-content h5,.uabb-module-content h6 {margin: 0;clear: both;}.fl-module-content a,.fl-module-content a:hover,.fl-module-content a:focus {text-decoration: none;}.uabb-row-separator {position: absolute;width: 100%;left: 0;z-index: 1}.uabb-top-row-separator {top: -1px;bottom: auto}.uabb-bottom-row-separator {top: auto;bottom: -1px}.uabb-top-row-separator.uabb-has-svg svg {position: absolute;padding: 0;margin: 0;left: 0;top: -1px;bottom: auto;width: 100%;}.uabb-bottom-row-separator.uabb-has-svg svg {position: absolute;padding: 0;margin: 0;left: 0;bottom: -1px;top: auto;width: 100%;}.uabb-bottom-row-separator.uabb-has-svg .uasvg-wave-separator {bottom: 0;}.uabb-top-row-separator.uabb-has-svg .uasvg-wave-separator {top: 0;}.uabb-bottom-row-separator.uabb-svg-triangle svg,.uabb-bottom-row-separator.uabb-xlarge-triangle svg,.uabb-top-row-separator.uabb-xlarge-triangle-left svg,.uabb-bottom-row-separator.uabb-svg-circle svg,.uabb-bottom-row-separator.uabb-xlarge-circle svg,.uabb-top-row-separator.uabb-wave-separator svg {-webkit-transform: scaleY(-1); -moz-transform: scaleY(-1);-ms-transform: scaleY(-1); -o-transform: scaleY(-1);transform: scaleY(-1);}.uabb-top-row-separator.uabb-xlarge-triangle-right svg {-webkit-transform: scale(-1); -moz-transform: scale(-1);-ms-transform: scale(-1); -o-transform: scale(-1);transform: scale(-1);}.uabb-bottom-row-separator.uabb-xlarge-triangle-right svg {-webkit-transform: scaleX(-1); -moz-transform: scaleX(-1);-ms-transform: scaleX(-1); -o-transform: scaleX(-1);transform: scaleX(-1);}.uabb-top-row-separator.uabb-curve-up-separator svg { -webkit-transform: scaleY(-1); -moz-transform: scaleY(-1);-ms-transform: scaleY(-1); -o-transform: scaleY(-1);transform: scaleY(-1);}.uabb-top-row-separator.uabb-curve-down-separator svg {-webkit-transform: scale(-1); -moz-transform: scale(-1);-ms-transform: scale(-1); -o-transform: scale(-1);transform: scale(-1);}.uabb-bottom-row-separator.uabb-curve-down-separator svg {-webkit-transform: scaleX(-1); -moz-transform: scaleX(-1);-ms-transform: scaleX(-1); -o-transform: scaleX(-1);transform: scaleX(-1);}.uabb-top-row-separator.uabb-tilt-left-separator svg {-webkit-transform: scale(-1); -moz-transform: scale(-1);-ms-transform: scale(-1); -o-transform: scale(-1);transform: scale(-1);}.uabb-top-row-separator.uabb-tilt-right-separator svg{-webkit-transform: scaleY(-1); -moz-transform: scaleY(-1);-ms-transform: scaleY(-1); -o-transform: scaleY(-1);transform: scaleY(-1);}.uabb-bottom-row-separator.uabb-tilt-right-separator svg {-webkit-transform: scaleX(-1); -moz-transform: scaleX(-1);-ms-transform: scaleX(-1); -o-transform: scaleX(-1);transform: scaleX(-1);}.uabb-row-separator.uabb-cloud-separator svg {left: -1px;width: 100%;}.uabb-top-row-separator.uabb-cloud-separator svg,.uabb-top-row-separator.uabb-multi-triangle svg {-webkit-transform: scaleY(-1); -moz-transform: scaleY(-1);-ms-transform: scaleY(-1); -o-transform: scaleY(-1);transform: scaleY(-1);}.uabb-row-separator.uabb-round-split {z-index: 1;}.uabb-row-separator.uabb-round-split:after,.uabb-row-separator.uabb-round-split:before {left: 0;z-index: 10;width: 50%;background: inherit inherit/inherit inherit inherit inherit;content: '';position: absolute}.uabb-button-wrap a,.uabb-button-wrap a:visited {display: inline-block;font-size: 16px;line-height: 18px;text-decoration: none;text-shadow: none;}.uabb-button-wrap a *,.uabb-button-wrap a:visited * {}.fl-builder-content .uabb-button:hover {text-decoration: none;}.fl-builder-content .uabb-button-width-full .uabb-button {display: block;text-align: center;}.uabb-button-width-custom .uabb-button {display: inline-block;text-align: center;max-width: 100%;}.fl-builder-content .uabb-button-left {text-align: left;}.fl-builder-content .uabb-button-center {text-align: center;}.fl-builder-content .uabb-button-right {text-align: right;}.fl-builder-content .uabb-button i,.fl-builder-content .uabb-button i:before {font-size: 1em;height: 1em;line-height: 1em;width: 1em;}.uabb-button .uabb-button-icon-after {margin-left: 8px;margin-right: 0;}.uabb-button .uabb-button-icon-before {margin-left: 0;margin-right: 8px;}.uabb-button .uabb-button-icon-no-text {margin: 0;}.uabb-button-has-icon .uabb-button-text {vertical-align: middle;}.uabb-icon-wrap {display: inline-block;}.uabb-icon a {text-decoration: none;}.uabb-icon i {display: block;}.uabb-icon i:before {border: none !important;background: none !important;}.uabb-icon-text {display: table-cell;text-align: left;padding-left: 15px;vertical-align: middle;}.uabb-icon-text *:last-child {margin: 0 !important;padding: 0 !important;}.uabb-icon-text a {text-decoration: none;}.uabb-photo {line-height: 0;position: relative;}.uabb-photo-align-left {text-align: left;}.uabb-photo-align-center {text-align: center;}.uabb-photo-align-right {text-align: right;}.uabb-photo-content {border-radius: 0;display: inline-block;line-height: 0;position: relative;max-width: 100%;overflow: hidden;}.uabb-photo-content img {border-radius: inherit;display: inline;height: auto;max-width: 100%;width: auto;}.fl-builder-content .uabb-photo-crop-circle img {-webkit-border-radius: 100%;-moz-border-radius: 100%;border-radius: 100%;}.fl-builder-content .uabb-photo-crop-square img {-webkit-border-radius: 0;-moz-border-radius: 0;border-radius: 0;}.uabb-photo-caption {font-size: 13px;line-height: 18px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}.uabb-photo-caption-below {padding-bottom: 20px;padding-top: 10px;}.uabb-photo-caption-hover {background: rgba(0,0,0,0.7);bottom: 0;color: #fff;left: 0;opacity: 0;visibility: hidden;filter: alpha(opacity = 0);padding: 10px 15px;position: absolute;right: 0;-webkit-transition:visibility 200ms linear;-moz-transition:visibility 200ms linear;transition:visibility 200ms linear;}.uabb-photo-content:hover .uabb-photo-caption-hover {opacity: 100;visibility: visible;}.uabb-active-btn {background: #1e8cbe;border-color: #0074a2;-webkit-box-shadow: inset 0 1px 0 rgba(120,200,230,.6);box-shadow: inset 0 1px 0 rgba(120,200,230,.6);color: white;}.fl-builder-bar .fl-builder-add-content-button {display: block !important;opacity: 1 !important;}.uabb-imgicon-wrap .uabb-icon {display: block;}.uabb-imgicon-wrap .uabb-icon i{float: none;}.uabb-imgicon-wrap .uabb-image {line-height: 0;position: relative;}.uabb-imgicon-wrap .uabb-image-align-left {text-align: left;}.uabb-imgicon-wrap .uabb-image-align-center {text-align: center;}.uabb-imgicon-wrap .uabb-image-align-right {text-align: right;}.uabb-imgicon-wrap .uabb-image-content {display: inline-block;border-radius: 0;line-height: 0;position: relative;max-width: 100%;}.uabb-imgicon-wrap .uabb-image-content img {display: inline;height: auto !important;max-width: 100%;width: auto;border-radius: inherit;box-shadow: none;box-sizing: content-box;}.fl-builder-content .uabb-imgicon-wrap .uabb-image-crop-circle img {-webkit-border-radius: 100%;-moz-border-radius: 100%;border-radius: 100%;}.fl-builder-content .uabb-imgicon-wrap .uabb-image-crop-square img {-webkit-border-radius: 0;-moz-border-radius: 0;border-radius: 0;}.uabb-creative-button-wrap a,.uabb-creative-button-wrap a:visited {background: #fafafa;border: 1px solid #ccc;color: #333;display: inline-block;vertical-align: middle;text-align: center;overflow: hidden;text-decoration: none;text-shadow: none;box-shadow: none;position: relative;-webkit-transition: all 200ms linear; -moz-transition: all 200ms linear;-ms-transition: all 200ms linear; -o-transition: all 200ms linear;transition: all 200ms linear;}.uabb-creative-button-wrap a:focus {text-decoration: none;text-shadow: none;box-shadow: none;}.uabb-creative-button-wrap a .uabb-creative-button-text,.uabb-creative-button-wrap a .uabb-creative-button-icon,.uabb-creative-button-wrap a:visited .uabb-creative-button-text,.uabb-creative-button-wrap a:visited .uabb-creative-button-icon {-webkit-transition: all 200ms linear; -moz-transition: all 200ms linear;-ms-transition: all 200ms linear; -o-transition: all 200ms linear;transition: all 200ms linear;}.uabb-creative-button-wrap a:hover {text-decoration: none;}.uabb-creative-button-wrap .uabb-creative-button-width-full .uabb-creative-button {display: block;text-align: center;}.uabb-creative-button-wrap .uabb-creative-button-width-custom .uabb-creative-button {display: inline-block;text-align: center;max-width: 100%;}.uabb-creative-button-wrap .uabb-creative-button-left {text-align: left;}.uabb-creative-button-wrap .uabb-creative-button-center {text-align: center;}.uabb-creative-button-wrap .uabb-creative-button-right {text-align: right;}.uabb-creative-button-wrap .uabb-creative-button i {font-size: 1.3em;height: auto;vertical-align: middle;width: auto;}.uabb-creative-button-wrap .uabb-creative-button .uabb-creative-button-icon-after {margin-left: 8px;margin-right: 0;}.uabb-creative-button-wrap .uabb-creative-button .uabb-creative-button-icon-before {margin-right: 8px;margin-left: 0;}.uabb-creative-button-wrap.uabb-creative-button-icon-no-text .uabb-creative-button i {margin: 0;}.uabb-creative-button-wrap .uabb-creative-button-has-icon .uabb-creative-button-text {vertical-align: middle;}.uabb-creative-button.uabb-creative-transparent-btn:after {content: '';position: absolute;z-index: 1;-webkit-transition: all 200ms linear; -moz-transition: all 200ms linear;-ms-transition: all 200ms linear; -o-transition: all 200ms linear;transition: all 200ms linear;}.uabb-transparent-fill-top-btn:after,.uabb-transparent-fill-bottom-btn:after {width: 100%;height: 0;left: 0;}.uabb-transparent-fill-top-btn:after {top: 0;}.uabb-transparent-fill-bottom-btn:after {bottom: 0;}.uabb-transparent-fill-left-btn:after,.uabb-transparent-fill-right-btn:after {width: 0;height: 100%;top: 0;}.uabb-transparent-fill-left-btn:after {left: 0;}.uabb-transparent-fill-right-btn:after {right: 0;}.uabb-transparent-fill-center-btn:after{width: 0;height: 100%;top: 50%;left: 50%;-webkit-transform: translateX(-50%) translateY(-50%); -moz-transform: translateX(-50%) translateY(-50%);-ms-transform: translateX(-50%) translateY(-50%); -o-transform: translateX(-50%) translateY(-50%);transform: translateX(-50%) translateY(-50%);}.uabb-transparent-fill-diagonal-btn:after,.uabb-transparent-fill-horizontal-btn:after {width: 100%;height: 0;top: 50%;left: 50%;}.uabb-transparent-fill-diagonal-btn{overflow: hidden;}.uabb-transparent-fill-diagonal-btn:after{-webkit-transform: translateX(-50%) translateY(-50%) rotate( 45deg ); -moz-transform: translateX(-50%) translateY(-50%) rotate( 45deg );-ms-transform: translateX(-50%) translateY(-50%) rotate( 45deg ); -o-transform: translateX(-50%) translateY(-50%) rotate( 45deg );transform: translateX(-50%) translateY(-50%) rotate( 45deg );}.uabb-transparent-fill-horizontal-btn:after{-webkit-transform: translateX(-50%) translateY(-50%); -moz-transform: translateX(-50%) translateY(-50%);-ms-transform: translateX(-50%) translateY(-50%); -o-transform: translateX(-50%) translateY(-50%);transform: translateX(-50%) translateY(-50%);}.uabb-creative-button-wrap .uabb-creative-threed-btn.uabb-threed_down-btn,.uabb-creative-button-wrap .uabb-creative-threed-btn.uabb-threed_up-btn,.uabb-creative-button-wrap .uabb-creative-threed-btn.uabb-threed_left-btn,.uabb-creative-button-wrap .uabb-creative-threed-btn.uabb-threed_right-btn {-webkit-transition: none; -moz-transition: none;-ms-transition: none; -o-transition: none;transition: none;}.perspective {-webkit-perspective: 800px; -moz-perspective: 800px;perspective: 800px;margin: 0;}.uabb-creative-button.uabb-creative-threed-btn:after {content: '';position: absolute;z-index: -1;-webkit-transition: all 200ms linear; -moz-transition: all 200ms linear;transition: all 200ms linear;}.uabb-creative-button.uabb-creative-threed-btn {outline: 1px solid transparent;-webkit-transform-style: preserve-3d; -moz-transform-style: preserve-3d;transform-style: preserve-3d;}.uabb-creative-threed-btn.uabb-animate_top-btn:after {height: 40%;left: 0;top: -40%;width: 100%;-webkit-transform-origin: 0% 100%; -moz-transform-origin: 0% 100%;transform-origin: 0% 100%;-webkit-transform: rotateX(90deg); -moz-transform: rotateX(90deg);transform: rotateX(90deg);}.uabb-creative-threed-btn.uabb-animate_bottom-btn:after {width: 100%;height: 40%;left: 0;top: 100%;-webkit-transform-origin: 0% 0%; -moz-transform-origin: 0% 0%;-ms-transform-origin: 0% 0%;transform-origin: 0% 0%;-webkit-transform: rotateX(-90deg); -moz-transform: rotateX(-90deg);-ms-transform: rotateX(-90deg);transform: rotateX(-90deg);}.uabb-creative-threed-btn.uabb-animate_left-btn:after {width: 20%;height: 100%;left: -20%;top: 0;-webkit-transform-origin: 100% 0%; -moz-transform-origin: 100% 0%;-ms-transform-origin: 100% 0%;transform-origin: 100% 0%;-webkit-transform: rotateY(-60deg); -moz-transform: rotateY(-60deg);-ms-transform: rotateY(-60deg);transform: rotateY(-60deg);}.uabb-creative-threed-btn.uabb-animate_right-btn:after {width: 20%;height: 100%;left: 104%;top: 0;-webkit-transform-origin: 0% 0%; -moz-transform-origin: 0% 0%;-ms-transform-origin: 0% 0%;transform-origin: 0% 0%;-webkit-transform: rotateY(120deg); -moz-transform: rotateY(120deg);-ms-transform: rotateY(120deg);transform: rotateY(120deg);}.uabb-animate_top-btn:hover{-webkit-transform: rotateX(-15deg); -moz-transform: rotateX(-15deg);-ms-transform: rotateX(-15deg); -o-transform: rotateX(-15deg);transform: rotateX(-15deg);}.uabb-animate_bottom-btn:hover{-webkit-transform: rotateX(15deg); -moz-transform: rotateX(15deg);-ms-transform: rotateX(15deg); -o-transform: rotateX(15deg);transform: rotateX(15deg);}.uabb-animate_left-btn:hover{-webkit-transform: rotateY(6deg); -moz-transform: rotateY(6deg);-ms-transform: rotateY(6deg); -o-transform: rotateY(6deg);transform: rotateY(6deg);}.uabb-animate_right-btn:hover{-webkit-transform: rotateY(-6deg); -moz-transform: rotateY(-6deg);-ms-transform: rotateY(-6deg); -o-transform: rotateY(-6deg);transform: rotateY(-6deg);}.uabb-creative-flat-btn.uabb-animate_to_right-btn,.uabb-creative-flat-btn.uabb-animate_to_left-btn,.uabb-creative-flat-btn.uabb-animate_from_top-btn,.uabb-creative-flat-btn.uabb-animate_from_bottom-btn {overflow: hidden;position: relative;}.uabb-creative-flat-btn.uabb-animate_to_right-btn i,.uabb-creative-flat-btn.uabb-animate_to_left-btn i,.uabb-creative-flat-btn.uabb-animate_from_top-btn i,.uabb-creative-flat-btn.uabb-animate_from_bottom-btn i {bottom: 0;height: 100%;margin: 0;opacity: 1;position: absolute;right: 0;width: 100%;-webkit-transition: all 200ms linear; -moz-transition: all 200ms linear;transition: all 200ms linear;-webkit-transform: translateY(0); -moz-transform: translateY(0); -o-transform: translateY(0);-ms-transform: translateY(0);transform: translateY(0);}.uabb-creative-flat-btn.uabb-animate_to_right-btn .uabb-button-text,.uabb-creative-flat-btn.uabb-animate_to_left-btn .uabb-button-text,.uabb-creative-flat-btn.uabb-animate_from_top-btn .uabb-button-text,.uabb-creative-flat-btn.uabb-animate_from_bottom-btn .uabb-button-text {display: inline-block;width: 100%;height: 100%;-webkit-transition: all 200ms linear; -moz-transition: all 200ms linear;-ms-transition: all 200ms linear; -o-transition: all 200ms linear;transition: all 200ms linear;-webkit-backface-visibility: hidden; -moz-backface-visibility: hidden;backface-visibility: hidden;}.uabb-creative-flat-btn.uabb-animate_to_right-btn i:before,.uabb-creative-flat-btn.uabb-animate_to_left-btn i:before,.uabb-creative-flat-btn.uabb-animate_from_top-btn i:before,.uabb-creative-flat-btn.uabb-animate_from_bottom-btn i:before {position: absolute;top: 50%;left: 50%;-webkit-transform: translateX(-50%) translateY(-50%);-moz-transform: translateX(-50%) translateY(-50%);-o-transform: translateX(-50%) translateY(-50%);-ms-transform: translateX(-50%) translateY(-50%);transform: translateX(-50%) translateY(-50%);}.uabb-creative-flat-btn.uabb-animate_to_right-btn:hover i,.uabb-creative-flat-btn.uabb-animate_to_left-btn:hover i {left: 0;}.uabb-creative-flat-btn.uabb-animate_from_top-btn:hover i,.uabb-creative-flat-btn.uabb-animate_from_bottom-btn:hover i {top: 0;}.uabb-creative-flat-btn.uabb-animate_to_right-btn i {top: 0;left: -100%;}.uabb-creative-flat-btn.uabb-animate_to_right-btn:hover .uabb-button-text {-webkit-transform: translateX(200%); -moz-transform: translateX(200%);-ms-transform: translateX(200%); -o-transform: translateX(200%);transform: translateX(200%);}.uabb-creative-flat-btn.uabb-animate_to_left-btn i {top: 0;left: 100%;}.uabb-creative-flat-btn.uabb-animate_to_left-btn:hover .uabb-button-text {-webkit-transform: translateX(-200%); -moz-transform: translateX(-200%);-ms-transform: translateX(-200%); -o-transform: translateX(-200%);transform: translateX(-200%);}.uabb-creative-flat-btn.uabb-animate_from_top-btn i {top: -100%;left: 0;}.uabb-creative-flat-btn.uabb-animate_from_top-btn:hover .uabb-button-text {-webkit-transform: translateY(400px); -moz-transform: translateY(400px);-ms-transform: translateY(400px); -o-transform: translateY(400px);transform: translateY(400px);}.uabb-creative-flat-btn.uabb-animate_from_bottom-btn i {top: 100%;left: 0;}.uabb-creative-flat-btn.uabb-animate_from_bottom-btn:hover .uabb-button-text {-webkit-transform: translateY(-400px); -moz-transform: translateY(-400px);-ms-transform: translateY(-400px); -o-transform: translateY(-400px);transform: translateY(-400px);}.uabb-tab-acc-content .wp-video, .uabb-tab-acc-content video.wp-video-shortcode, .uabb-tab-acc-content .mejs-container, .uabb-tab-acc-content .mejs-overlay.load,.uabb-adv-accordion-content .wp-video, .uabb-adv-accordion-content video.wp-video-shortcode, .uabb-adv-accordion-content .mejs-container, .uabb-adv-accordion-content .mejs-overlay.load {width: 100% !important;height: 100% !important;}.uabb-tab-acc-content .mejs-container,.uabb-adv-accordion-content .mejs-container {padding-top: 56.25%;}.uabb-tab-acc-content .wp-video, .uabb-tab-acc-content video.wp-video-shortcode,.uabb-adv-accordion-content .wp-video, .uabb-adv-accordion-content video.wp-video-shortcode {max-width: 100% !important;}.uabb-tab-acc-content video.wp-video-shortcode,.uabb-adv-accordion-content video.wp-video-shortcode {position: relative;}.uabb-tab-acc-content .mejs-mediaelement,.uabb-adv-accordion-content .mejs-mediaelement {position: absolute;top: 0;right: 0;bottom: 0;left: 0;}.uabb-tab-acc-content .mejs-overlay-play,.uabb-adv-accordion-content .mejs-overlay-play {top: 0;right: 0;bottom: 0;left: 0;width: auto !important;height: auto !important;}.uabb-creative-button-wrap a,.uabb-creative-button-wrap a:visited { }.uabb-dual-button .uabb-btn,.uabb-dual-button .uabb-btn:visited { }#uabb-js-breakpoint { content:"default"; display:none;}@media screen and (max-width: 992px !important) {#uabb-js-breakpoint {content:"992";}}@media screen and (max-width: 768px) {#uabb-js-breakpoint {content:"768";}}
  }
  .main-navigation li a{
    color:white;
  }
  >.recentcomments a{display:inline !important;padding:0 !important;margin:0 !important;}
  >#wpadminbar { display:none; }
	@media screen and ( max-width: 782px ) {
		html { margin-top: 46px !important; }
		* html body { margin-top: 46px !important; }
}
</style>`;

/*const oldGlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  body{
    font-family : 'Open Sans', sans-serif;
    margin:0 !important;
    padding:0 !important;
  }`
*/
const LayoutWrapper = styled.div`
  .main-header-bar-wrap .ast-search-box.header-cover {
    z-index: 7;
  }
  .ast-below-header-wrap .ast-search-box.header-cover #close,
  .ast-below-header-wrap .ast-search-box.header-cover .search-field {
    font-size: 1.8em;
  }
  .ast-below-header-wrap .ast-search-box.header-cover .search-submit {
    font-size: 1.5em;
  }
  .ast-search-box.full-screen,
  .ast-search-box.header-cover {
    display: none;
    opacity: 0;
    transition: opacity 0.2s;
    width: 100%;
    height: 100%;
  }
  .ast-search-box.full-screen .search-field,
  .ast-search-box.header-cover .search-field {
    background: 0 0;
    border: 0;
    color: #fafafa;
    box-shadow: none;
    text-align: left;
    padding: 0;
  }
  .ast-search-box.full-screen .search-submit,
  .ast-search-box.header-cover .search-submit {
    background: 0 0;
    padding: 0;
    color: #9e9e9e;
    transition: all 0.7s ease-In;
    outline: 0;
    border: 0;
    vertical-align: middle;
  }
  .ast-search-box.full-screen .ast-search-wrapper,
  .ast-search-box.header-cover .ast-search-wrapper {
    position: absolute;
    width: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .ast-search-box.full-screen .ast-search-wrapper .search-form,
  .ast-search-box.header-cover .ast-search-wrapper .search-form {
    line-height: normal;
  }
  .ast-search-box.full-screen #close,
  .ast-search-box.header-cover #close {
    color: #fafafa;
    transform: rotate(0);
    font-size: 2em;
    cursor: pointer;
    z-index: 9;
    font-weight: 400;
  }
  .ast-search-box.full-screen #close::before,
  .ast-search-box.header-cover #close::before {
    font-family: Astra;
    content: "\e5cd";
    display: inline-block;
    transition: transform 0.3s ease-in-out;
  }
  .ast-search-box.full-screen .search-field::-webkit-input-placeholder,
  .ast-search-box.header-cover .search-field::-webkit-input-placeholder {
    color: #fafafa;
  }
  .ast-search-box.full-screen .search-field:-moz-placeholder,
  .ast-search-box.header-cover .search-field:-moz-placeholder {
    color: #fafafa;
  }
  .ast-search-box.full-screen .search-field::-moz-placeholder,
  .ast-search-box.header-cover .search-field::-moz-placeholder {
    color: #fafafa;
  }
  .ast-search-box.full-screen .search-field:-ms-input-placeholder,
  .ast-search-box.header-cover .search-field:-ms-input-placeholder {
    color: #fafafa;
  }
  .ast-search-box.header-cover {
    position: absolute;
    background: rgba(25, 25, 25, 0.94);
    top: 0;
    z-index: 10;
  }
  .ast-search-box.header-cover .search-field {
    font-size: 2em;
    line-height: 2;
    width: 100%;
  }
  .ast-search-box.header-cover .ast-container {
    position: relative;
  }
  .ast-search-box.header-cover .close,
  .ast-search-box.header-cover .search-submit,
  .ast-search-box.header-cover .search-text-wrap {
    display: inline-block;
  }
  .ast-search-box.header-cover .search-text-wrap {
    width: calc(100% - 2.5em);
    vertical-align: middle;
  }
  .ast-search-box.header-cover .search-submit {
    font-size: 1.7em;
    margin-right: 2em;
  }
  .ast-search-box.header-cover #close {
    vertical-align: middle;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .ast-search-box.full-screen {
    position: fixed;
    background: rgba(25, 25, 25, 0.94);
    top: 0;
    left: 0;
    z-index: 999;
  }
  .ast-search-box.full-screen .ast-search-wrapper .large-search-text {
    text-align: center;
    color: #e2e2e2;
    font-size: 1.5em;
    font-weight: 400;
    transition-delay: 50ms;
    transition: all 0.3s ease-in-out;
  }
  .ast-search-box.full-screen .ast-search-wrapper fieldset {
    border: 0;
    padding: 2.5em 0 1em;
    border-bottom: 2px solid #9e9e9e;
  }
  .ast-search-box.full-screen .ast-search-wrapper .search-field {
    font-size: 2.6em;
    padding-left: 30px;
    line-height: 1.7;
    width: 90%;
    width: calc(100% - 1.5em);
    vertical-align: middle;
    text-align: center;
  }
  .ast-search-box.full-screen .ast-search-wrapper .search-form {
    width: 70%;
    margin: 20px auto;
  }
  .ast-search-box.full-screen .ast-search-wrapper .search-submit {
    font-size: 2em;
  }
  .ast-search-box.full-screen #close {
    position: absolute;
    color: #fafafa;
    right: 1em;
    line-height: 1;
    cursor: pointer;
    z-index: 9;
    font-weight: 400;
    font-size: 2em;
    top: 1.5em;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .ast-search-box.full-screen ::-webkit-input-placeholder {
    opacity: 0;
  }
  .ast-search-box.full-screen ::-moz-placeholder {
    opacity: 0;
  }
  .ast-search-box.full-screen :-ms-input-placeholder {
    opacity: 0;
  }
  .ast-search-box.full-screen :-moz-placeholder {
    opacity: 0;
  }
  @media (max-width: 420px) {
    .ast-search-box.full-screen ::-webkit-input-placeholder {
      opacity: 1;
    }
    .ast-search-box.full-screen ::-moz-placeholder {
      opacity: 1;
    }
    .ast-search-box.full-screen :-ms-input-placeholder {
      opacity: 1;
    }
    .ast-search-box.full-screen :-moz-placeholder {
      opacity: 1;
    }
  }
  .site-header .ast-inline-search.ast-search-menu-icon .search-form {
    padding-left: 0;
    padding-right: 2em;
  }
  .site-header .ast-inline-search.ast-search-menu-icon .search-field {
    width: auto;
    padding-left: 1em;
    padding-right: 0;
  }
  .ast-inline-search.ast-search-menu-icon {
    visibility: visible;
    opacity: 1;
    position: relative;
    transform: none;
    left: 0;
    right: 0;
  }
  .ast-inline-search.ast-search-menu-icon .search-submit {
    display: block;
    background: 0 0;
    border: none;
    position: absolute;
    height: 100%;
    right: 0.25em;
    padding: 0;
    top: 0;
    font-size: 1.3em;
    color: #757575;
  }
  .ast-header-break-point .ast-inline-search.ast-search-menu-icon .search-form {
    padding: 0;
  }
  .ast-header-break-point
    .site-header
    .ast-inline-search.ast-search-menu-icon
    .search-field {
    width: 100%;
    padding-right: 2em;
  }
  .ast-header-custom-item-inside.ast-desktop
    .main-header-menu
    .ast-search-menu-icon.full-screen,
  .ast-header-custom-item-inside.ast-desktop
    .main-header-menu
    .ast-search-menu-icon.header-cover {
    display: none;
  }
  .ast-header-break-point
    .ast-swap-above-header-sections
    .ast-above-header-section-1
    .ast-search-menu-icon
    .search-form {
    right: -1em;
    left: auto;
    padding-left: 0;
    padding-right: 3em;
  }
  .ast-header-break-point
    .ast-swap-above-header-sections
    .ast-above-header-section-1
    .search-field {
    padding-right: 0;
    padding-left: 1em;
  }
  .ast-header-break-point
    .ast-swap-above-header-sections
    .ast-above-header-section-2
    .ast-search-menu-icon
    .search-form {
    left: -1em;
    right: auto;
    padding-right: 0;
    padding-left: 3em;
  }
  .ast-header-break-point
    .ast-swap-above-header-sections
    .ast-above-header-section-2
    .search-field {
    padding-left: 0;
    padding-right: 1em;
  }
  .ast-header-break-point
    .ast-above-header
    .ast-above-header-section-1
    .ast-inline-search.ast-search-menu-icon
    .search-field {
    padding-right: 0;
  }
  .ast-header-break-point
    .ast-swap-above-header-sections.ast-mobile-header-stack
    .ast-above-header
    .ast-above-header-section-2
    .ast-search-menu-icon
    .search-form {
    padding-left: 0;
    left: auto;
    padding-right: 2em;
  }
  .ast-header-break-point
    .ast-swap-above-header-sections.ast-mobile-header-stack
    .ast-above-header
    .ast-above-header-section-2
    .ast-search-menu-icon.slide-search
    .search-form {
    left: -1em;
    padding-left: 2em;
  }
  .ast-header-break-point
    .ast-swap-above-header-sections.ast-mobile-header-stack
    .ast-above-header
    .ast-above-header-section-1
    .search-field {
    padding-right: 0;
  }
  .ast-header-break-point
    .ast-swap-above-header-sections.ast-mobile-header-stack
    .ast-above-header
    .search-field {
    padding-right: 0;
    padding-left: 1em;
  }
  .ast-header-break-point
    .ast-above-header-mobile-stack
    .ast-above-header
    .ast-above-header-section-1
    .ast-search-menu-icon.ast-inline-search
    .search-form {
    right: auto;
    padding-right: 2em;
  }
  .ast-header-break-point
    .ast-swap-below-header-sections
    .ast-below-header
    .below-header-section-2
    .ast-search-menu-icon.ast-inline-search
    .search-form {
    left: 0;
    padding-left: 0;
    padding-right: 2em;
  }
  .ast-header-break-point
    .ast-swap-below-header-sections
    .below-header-section-1
    .ast-search-menu-icon
    .search-form {
    right: -1em;
    left: auto;
    padding-left: 0;
    padding-right: 3em;
  }
  .ast-header-break-point
    .ast-swap-below-header-sections
    .below-header-section-1
    .search-field {
    padding-right: 0;
    padding-left: 1em;
  }
  .ast-header-break-point
    .ast-swap-below-header-sections
    .below-header-section-2
    .ast-search-menu-icon
    .search-form {
    left: -1em;
    right: auto;
    padding-right: 0;
    padding-left: 3em;
  }
  .ast-header-break-point
    .ast-swap-below-header-sections
    .below-header-section-2
    .search-field {
    padding-left: 0;
    padding-right: 1em;
  }
  .ast-header-break-point
    .ast-below-header
    .below-header-section-1
    .ast-inline-search.ast-search-menu-icon
    .search-field {
    padding-right: 0;
  }
  .ast-header-break-point
    .ast-swap-below-header-sections.site-header
    .ast-below-header
    .ast-inline-search.ast-search-menu-icon
    .search-field {
    padding-left: 1em;
    padding-right: 0;
  }
  .ast-header-break-point
    .ast-swap-below-header-sections
    .ast-below-header
    .below-header-section-2
    .ast-search-menu-icon
    .search-form {
    left: -1em;
    padding-left: 3em;
    padding-right: 1em;
  }
  .ast-below-header-mobile-stack
    .ast-below-header
    .below-header-section-1
    .ast-search-menu-icon.ast-inline-search
    .search-form {
    right: auto;
    padding-right: 2em;
  }
  .iphone.full-screen,
  .ipod.full-screen {
    position: fixed !important;
  }
  @media (max-width: 992px) {
    .ast-above-header-mobile-stack
      .ast-above-header-section-1
      .ast-search-menu-icon.ast-inline-search
      .search-form {
      left: auto;
    }
    .ast-below-header-mobile-stack
      .below-header-section-1
      .ast-search-menu-icon.ast-inline-search
      .search-form {
      left: auto;
    }
  }
  @media (max-width: 544px) {
    .ast-search-box.full-screen .ast-search-wrapper .large-search-text {
      display: none;
    }
    .ast-search-box.full-screen .ast-search-wrapper .search-field,
    .ast-search-box.full-screen .ast-search-wrapper .search-submit {
      font-size: 1.6em;
    }
  }
  .ast-theme-transparent-header
    .ast-above-header-navigation
    li.current-menu-item
    > a,
  .ast-theme-transparent-header
    .ast-above-header-navigation
    li.current-menu-ancestor
    > a {
    color: #ffffff;
  }
  .ast-theme-transparent-header .ast-above-header-navigation li:hover > a {
    color: #ffffff;
  }
  .ast-theme-transparent-header .ast-above-header-navigation a {
    color: rgba(255, 255, 255, 0.75);
  }
  @media (max-width: 768px) {
    .ast-theme-transparent-header .ast-above-header-menu,
    .ast-theme-transparent-header.ast-header-break-point
      .ast-above-header-section-separated
      .ast-above-header-navigation
      ul.ast-above-header-menu,
    .ast-theme-transparent-header.ast-header-break-point
      .ast-below-header-section-separated
      .ast-below-header-actual-nav {
      background-color: #f9f8f8;
    }
    .ast-theme-transparent-header
      .ast-above-header-navigation
      li.current-menu-item
      > a,
    .ast-theme-transparent-header
      .ast-above-header-navigation
      li.current-menu-ancestor
      > a {
      color: #011627;
    }
    .ast-theme-transparent-header .ast-above-header-navigation li:hover > a {
      color: #011627;
    }
    .ast-theme-transparent-header .ast-above-header-navigation a {
      color: rgba(1, 22, 39, 0.75);
    }
  }
  .ast-theme-transparent-header .ast-below-header-menu,
  .ast-theme-transparent-header .ast-below-header-menu a {
    color: rgba(255, 255, 255, 0.75);
  }
  .ast-theme-transparent-header .ast-below-header-menu li:hover > a,
  .ast-theme-transparent-header .ast-below-header-menu li:focus > a,
  .ast-theme-transparent-header .ast-below-header-menu li.focus > a {
    color: #ffffff;
  }
  .ast-theme-transparent-header
    .ast-below-header-menu
    li.current-menu-ancestor
    > a,
  .ast-theme-transparent-header .ast-below-header-menu li.current-menu-item > a,
  .ast-theme-transparent-header
    .ast-below-header-menu
    li.current-menu-ancestor
    > .ast-menu-toggle,
  .ast-theme-transparent-header
    .ast-below-header-menu
    li.current-menu-item
    > .ast-menu-toggle,
  .ast-theme-transparent-header
    .ast-below-header-menu
    .sub-menu
    li.current-menu-ancestor:hover
    > a,
  .ast-theme-transparent-header
    .ast-below-header-menu
    .sub-menu
    li.current-menu-ancestor:focus
    > a,
  .ast-theme-transparent-header
    .ast-below-header-menu
    .sub-menu
    li.current-menu-ancestor.focus
    > a,
  .ast-theme-transparent-header
    .ast-below-header-menu
    .sub-menu
    li.current-menu-item:hover
    > a,
  .ast-theme-transparent-header
    .ast-below-header-menu
    .sub-menu
    li.current-menu-item:focus
    > a,
  .ast-theme-transparent-header
    .ast-below-header-menu
    .sub-menu
    li.current-menu-item.focus
    > a,
  .ast-theme-transparent-header
    .ast-below-header-menu
    .sub-menu
    li.current-menu-ancestor:hover
    > .ast-menu-toggle,
  .ast-theme-transparent-header
    .ast-below-header-menu
    .sub-menu
    li.current-menu-ancestor:focus
    > .ast-menu-toggle,
  .ast-theme-transparent-header
    .ast-below-header-menu
    .sub-menu
    li.current-menu-ancestor.focus
    > .ast-menu-toggle,
  .ast-theme-transparent-header
    .ast-below-header-menu
    .sub-menu
    li.current-menu-item:hover
    > .ast-menu-toggle,
  .ast-theme-transparent-header
    .ast-below-header-menu
    .sub-menu
    li.current-menu-item:focus
    > .ast-menu-toggle,
  .ast-theme-transparent-header
    .ast-below-header-menu
    .sub-menu
    li.current-menu-item.focus
    > .ast-menu-toggle {
    color: #ffffff;
  }
  @media (max-width: 768px) {
    .ast-theme-transparent-header.ast-no-toggle-below-menu-enable.ast-header-break-point
      .ast-below-header-navigation-wrap,
    .ast-theme-transparent-header .ast-below-header-actual-nav,
    .ast-theme-transparent-header.ast-header-break-point
      .ast-below-header-actual-nav {
      background-color: #f9f8f8;
    }
    .ast-theme-transparent-header .ast-below-header-menu,
    .ast-theme-transparent-header .ast-below-header-menu a {
      color: rgba(1, 22, 39, 0.75);
    }
    .ast-theme-transparent-header .ast-below-header-menu li:hover > a,
    .ast-theme-transparent-header .ast-below-header-menu li:focus > a,
    .ast-theme-transparent-header .ast-below-header-menu li.focus > a {
      color: #011627;
    }
    .ast-theme-transparent-header
      .ast-below-header-menu
      li.current-menu-ancestor
      > a,
    .ast-theme-transparent-header
      .ast-below-header-menu
      li.current-menu-item
      > a,
    .ast-theme-transparent-header
      .ast-below-header-menu
      li.current-menu-ancestor
      > .ast-menu-toggle,
    .ast-theme-transparent-header
      .ast-below-header-menu
      li.current-menu-item
      > .ast-menu-toggle,
    .ast-theme-transparent-header
      .ast-below-header-menu
      .sub-menu
      li.current-menu-ancestor:hover
      > a,
    .ast-theme-transparent-header
      .ast-below-header-menu
      .sub-menu
      li.current-menu-ancestor:focus
      > a,
    .ast-theme-transparent-header
      .ast-below-header-menu
      .sub-menu
      li.current-menu-ancestor.focus
      > a,
    .ast-theme-transparent-header
      .ast-below-header-menu
      .sub-menu
      li.current-menu-item:hover
      > a,
    .ast-theme-transparent-header
      .ast-below-header-menu
      .sub-menu
      li.current-menu-item:focus
      > a,
    .ast-theme-transparent-header
      .ast-below-header-menu
      .sub-menu
      li.current-menu-item.focus
      > a,
    .ast-theme-transparent-header
      .ast-below-header-menu
      .sub-menu
      li.current-menu-ancestor:hover
      > .ast-menu-toggle,
    .ast-theme-transparent-header
      .ast-below-header-menu
      .sub-menu
      li.current-menu-ancestor:focus
      > .ast-menu-toggle,
    .ast-theme-transparent-header
      .ast-below-header-menu
      .sub-menu
      li.current-menu-ancestor.focus
      > .ast-menu-toggle,
    .ast-theme-transparent-header
      .ast-below-header-menu
      .sub-menu
      li.current-menu-item:hover
      > .ast-menu-toggle,
    .ast-theme-transparent-header
      .ast-below-header-menu
      .sub-menu
      li.current-menu-item:focus
      > .ast-menu-toggle,
    .ast-theme-transparent-header
      .ast-below-header-menu
      .sub-menu
      li.current-menu-item.focus
      > .ast-menu-toggle {
      color: #011627;
    }
  }
`;
const Layout = ({ children }) => (
  <div>
    <GlobalStyles />
    <div className="home page-template-default page page-id-6 logged-in admin-bar wp-custom-logo fl-builder ast-desktop ast-page-builder-template ast-no-sidebar astra-2.1.2 ast-header-custom-item-inside group-blog ast-single-post ast-mobile-inherit-site-logo ast-inherit-site-logo-transparent ast-theme-transparent-header astra-addon-2.1.2 customize-support ast-mouse-clicked DejaVue">
      <LayoutWrapper>
        <MainMenu />
        {children}
      </LayoutWrapper>
    </div>
  </div>
);

export default Layout;
