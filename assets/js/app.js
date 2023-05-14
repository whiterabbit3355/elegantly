/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/animation.js":
/*!************************************!*\
  !*** ./src/assets/js/animation.js ***!
  \************************************/
/***/ (function() {

eval("AOS.init();\nconsole.log('aos');\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/animation.js?");

/***/ }),

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("console.log('file 1');\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/burger.js":
/*!*********************************!*\
  !*** ./src/assets/js/burger.js ***!
  \*********************************/
/***/ (function() {

eval("/* -------------- BURGER MOBILE ------------- */\nconsole.log('burger mobile 333');\n\nlet navToggle = $('#toggle');\n\n//let navMenu = $('#navmenu');\n\nnavToggle.on('click', function(event){\n    event.preventDefault();\n\n    $('header').toggleClass('active');\n    // navMenu.toggleClass('open');\n    // $(this).toggleClass('active');\n   // console.log('burger mobile');\n});\n\n$(window).on(\"resize, scroll\", function(){\n    // navToggle.removeClass('active');\n    // navMenu.removeClass('open');\n    // $('body').removeClass('no-scroll');\n    $('header').removeClass('active');\n})\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/burger.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/***/ (function() {

eval("console.log('file 2');\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/file2.js?");

/***/ }),

/***/ "./src/assets/js/owl.js":
/*!******************************!*\
  !*** ./src/assets/js/owl.js ***!
  \******************************/
/***/ (function() {

eval("console.log('owl');\nconst owl1 = $('.wedoit__slider');\nowl1.owlCarousel({\n    center:true,\n    loop:true,\n    margin:20,\n    autoplay: true,\n    autoPlaySpeed: 2000,\n    startPosition:1,\n    items: 3,\n    responsive:{\n        0:{\n            margin: 30,\n            items: 1\n        },\n        460:{\n            margin: 20,\n            items: 1\n        },\n        850:{\n            items: 2,\n            margin: 15\n        },\n        1000:{\n          // items: 2,\n           margin: 20\n        },\n        1269:{\n            margin: 30\n        }\n    }\n\n});\n// Go to the previous item\n$('.slider__btn--prev').click(function() {\n    // With optional speed parameter\n    // Parameters has to be in square bracket '[]'\n    owl1.trigger('prev.owl.carousel', [300]);\n})\n// Go to the next item\n$('.slider__btn--next').click(function() {\n    owl1.trigger('next.owl.carousel');\n});\n\n// REVIEWS\nconst owl2 = $('.reviews__inner');\nowl2.owlCarousel({\n    center:true,\n   // nav:true,\n    loop:true,\n    margin:20,\n    autoplay: true,\n    autoPlaySpeed: 2000,\n    startPosition:1,\n    items: 1,\n    responsive:{\n        // 0:{\n        //     margin: 30,\n        //     items: 1\n        // },\n        // 460:{\n        //     margin: 20,\n        //     items: 1\n        // },\n        // 850:{\n        //     items: 1,\n        //     margin: 15\n        // },\n        1000:{\n          items: 1,\n           margin: 20\n        },\n        1269:{\n            margin: 30\n        }\n    }\n\n});\n// Go to the previous item\n$('.reviews__btn--prev').click(function() {\n    // With optional speed parameter\n    // Parameters has to be in square bracket '[]'\n    owl2.trigger('prev.owl.carousel', [300]);\n})\n// Go to the next item\n$('.reviews__btn--next').click(function() {\n    owl2.trigger('next.owl.carousel');\n});\n\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/owl.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/animation.js"]();
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	__webpack_modules__["./src/assets/js/burger.js"]();
/******/ 	__webpack_modules__["./src/assets/js/file2.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/owl.js"]();
/******/ 	
/******/ })()
;