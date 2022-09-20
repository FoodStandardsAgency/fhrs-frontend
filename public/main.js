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

/***/ "./src/components/article/AllergensTable/allergensTable.js":
/*!*****************************************************************!*\
  !*** ./src/components/article/AllergensTable/allergensTable.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _allergensTable_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allergensTable.html.twig */ \"./src/components/article/AllergensTable/allergensTable.html.twig\");\n/* harmony import */ var _allergensTable_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allergensTable.scss */ \"./src/components/article/AllergensTable/allergensTable.scss\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/AllergensTable/allergensTable.js?");

/***/ }),

/***/ "./src/components/article/ArticleHero/articleHero.js":
/*!***********************************************************!*\
  !*** ./src/components/article/ArticleHero/articleHero.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _articleHero_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./articleHero.html.twig */ \"./src/components/article/ArticleHero/articleHero.html.twig\");\n/* harmony import */ var _articleHero_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articleHero.scss */ \"./src/components/article/ArticleHero/articleHero.scss\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/ArticleHero/articleHero.js?");

/***/ }),

/***/ "./src/components/article/BackTo/backTo.js":
/*!*************************************************!*\
  !*** ./src/components/article/BackTo/backTo.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _backTo_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backTo.html.twig */ \"./src/components/article/BackTo/backTo.html.twig\");\n/* harmony import */ var _backTo_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backTo.scss */ \"./src/components/article/BackTo/backTo.scss\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/BackTo/backTo.js?");

/***/ }),

/***/ "./src/components/article/BackToTop/backToTop.js":
/*!*******************************************************!*\
  !*** ./src/components/article/BackToTop/backToTop.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var _backToTop_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backToTop.html.twig */ \"./src/components/article/BackToTop/backToTop.html.twig\");\n/* harmony import */ var _backToTop_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backToTop.scss */ \"./src/components/article/BackToTop/backToTop.scss\");\n/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! smoothscroll-polyfill */ \"./node_modules/smoothscroll-polyfill/dist/smoothscroll.js\");\n/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_2___default().polyfill();\n  var backToTop = document.querySelector('.back-to-top__link');\n\n  if (!backToTop) {\n    return;\n  }\n\n  backToTop.addEventListener('click', function (e) {\n    e.preventDefault();\n    window.scroll({\n      top: 0,\n      left: 0,\n      behavior: 'smooth'\n    });\n  });\n}\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/BackToTop/backToTop.js?");

/***/ }),

/***/ "./src/components/article/ChartBlock/chartBlock.js":
/*!*********************************************************!*\
  !*** ./src/components/article/ChartBlock/chartBlock.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var _chartBlock_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chartBlock.html.twig */ \"./src/components/article/ChartBlock/chartBlock.html.twig\");\n/* harmony import */ var _chartBlock_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chartBlock.scss */ \"./src/components/article/ChartBlock/chartBlock.scss\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  var el = document.querySelectorAll('.chart-block');\n\n  if (!el) {\n    return;\n  }\n\n  var _iterator = _createForOfIteratorHelper(el),\n      _step;\n\n  try {\n    var _loop = function _loop() {\n      var chartBlock = _step.value;\n      var tableButton = chartBlock.querySelector('.chart-block__switch-button--table');\n      var chartButton = chartBlock.querySelector('.chart-block__switch-button--chart');\n      var image = chartBlock.querySelector('.chart-block__image');\n      var content = chartBlock.querySelector('.chart-block__content');\n\n      if (!tableButton || !chartButton || !image || !content) {\n        return {\n          v: void 0\n        };\n      }\n\n      var toggleVisibility = function toggleVisibility() {\n        [tableButton, chartButton, image, content].forEach(function (element) {\n          element.classList.toggle('hide');\n        });\n      };\n\n      tableButton.addEventListener('click', toggleVisibility);\n      chartButton.addEventListener('click', toggleVisibility);\n    };\n\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var _ret = _loop();\n\n      if (_typeof(_ret) === \"object\") return _ret.v;\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n}\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/ChartBlock/chartBlock.js?");

/***/ }),

/***/ "./src/components/article/ContentMetaData/contentMetaData.js":
/*!*******************************************************************!*\
  !*** ./src/components/article/ContentMetaData/contentMetaData.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _contentMetaData_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contentMetaData.html.twig */ \"./src/components/article/ContentMetaData/contentMetaData.html.twig\");\n/* harmony import */ var _contentMetaData_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contentMetaData.scss */ \"./src/components/article/ContentMetaData/contentMetaData.scss\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/ContentMetaData/contentMetaData.js?");

/***/ }),

/***/ "./src/components/article/DocumentDownload/documentDownload.js":
/*!*********************************************************************!*\
  !*** ./src/components/article/DocumentDownload/documentDownload.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _documentDownload_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./documentDownload.html.twig */ \"./src/components/article/DocumentDownload/documentDownload.html.twig\");\n/* harmony import */ var _documentDownload_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./documentDownload.scss */ \"./src/components/article/DocumentDownload/documentDownload.scss\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/DocumentDownload/documentDownload.js?");

/***/ }),

/***/ "./src/components/article/ExplanationBlock/explanationBlock.js":
/*!*********************************************************************!*\
  !*** ./src/components/article/ExplanationBlock/explanationBlock.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _explanationBlock_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./explanationBlock.html.twig */ \"./src/components/article/ExplanationBlock/explanationBlock.html.twig\");\n/* harmony import */ var _explanationBlock_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./explanationBlock.scss */ \"./src/components/article/ExplanationBlock/explanationBlock.scss\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/ExplanationBlock/explanationBlock.js?");

/***/ }),

/***/ "./src/components/article/FootNotes/footNotes.js":
/*!*******************************************************!*\
  !*** ./src/components/article/FootNotes/footNotes.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var _footNotes_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footNotes.html.twig */ \"./src/components/article/FootNotes/footNotes.html.twig\");\n/* harmony import */ var _footNotes_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footNotes.scss */ \"./src/components/article/FootNotes/footNotes.scss\");\n/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! smoothscroll-polyfill */ \"./node_modules/smoothscroll-polyfill/dist/smoothscroll.js\");\n/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_2__);\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_2___default().polyfill();\n  var notes = document.querySelectorAll('.foot-notes__link-list__item-link, .foot-notes__ref-link');\n\n  if (!notes.length) {\n    return;\n  }\n\n  var _iterator = _createForOfIteratorHelper(notes),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var note = _step.value;\n      note.addEventListener('click', function (e) {\n        var id = e.target.getAttribute('href').substring(1);\n        var ref = document.querySelector(\"[id='\".concat(id, \"']\"));\n\n        if (ref) {\n          window.scroll({\n            top: ref.offsetTop,\n            left: 0,\n            behavior: 'smooth'\n          });\n          window.location.hash = id;\n        }\n\n        e.preventDefault();\n      });\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n}\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/FootNotes/footNotes.js?");

/***/ }),

/***/ "./src/components/article/PdfAndPrintButtons/pdfAndPrintButtons.js":
/*!*************************************************************************!*\
  !*** ./src/components/article/PdfAndPrintButtons/pdfAndPrintButtons.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var _pdfAndPrintButtons_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pdfAndPrintButtons.html.twig */ \"./src/components/article/PdfAndPrintButtons/pdfAndPrintButtons.html.twig\");\n/* harmony import */ var _pdfAndPrintButtons_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pdfAndPrintButtons.scss */ \"./src/components/article/PdfAndPrintButtons/pdfAndPrintButtons.scss\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  var el = document.querySelector('.pdf-and-print-buttons');\n\n  if (!el) {\n    return;\n  }\n\n  var printButton = el.querySelector('.pdf-and-print-buttons__button--print button');\n\n  if (!printButton) {\n    return;\n  }\n\n  printButton.addEventListener('click', function () {\n    window.print();\n  });\n}\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/PdfAndPrintButtons/pdfAndPrintButtons.js?");

/***/ }),

/***/ "./src/components/article/ProductDetails/productDetails.js":
/*!*****************************************************************!*\
  !*** ./src/components/article/ProductDetails/productDetails.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _productDetails_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productDetails.html.twig */ \"./src/components/article/ProductDetails/productDetails.html.twig\");\n/* harmony import */ var _productDetails_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productDetails.scss */ \"./src/components/article/ProductDetails/productDetails.scss\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/ProductDetails/productDetails.js?");

/***/ }),

/***/ "./src/components/article/QuoteBlock/quoteBlock.js":
/*!*********************************************************!*\
  !*** ./src/components/article/QuoteBlock/quoteBlock.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _quoteBlock_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quoteBlock.html.twig */ \"./src/components/article/QuoteBlock/quoteBlock.html.twig\");\n/* harmony import */ var _quoteBlock_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quoteBlock.scss */ \"./src/components/article/QuoteBlock/quoteBlock.scss\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/QuoteBlock/quoteBlock.js?");

/***/ }),

/***/ "./src/components/article/RegionalVariationBlock/regionalVariationBlock.js":
/*!*********************************************************************************!*\
  !*** ./src/components/article/RegionalVariationBlock/regionalVariationBlock.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _regionalVariationBlock_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regionalVariationBlock.html.twig */ \"./src/components/article/RegionalVariationBlock/regionalVariationBlock.html.twig\");\n/* harmony import */ var _regionalVariationBlock_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./regionalVariationBlock.scss */ \"./src/components/article/RegionalVariationBlock/regionalVariationBlock.scss\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/RegionalVariationBlock/regionalVariationBlock.js?");

/***/ }),

/***/ "./src/components/article/RelatedContent/relatedContent.js":
/*!*****************************************************************!*\
  !*** ./src/components/article/RelatedContent/relatedContent.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _relatedContent_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./relatedContent.html.twig */ \"./src/components/article/RelatedContent/relatedContent.html.twig\");\n/* harmony import */ var _relatedContent_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./relatedContent.scss */ \"./src/components/article/RelatedContent/relatedContent.scss\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/RelatedContent/relatedContent.js?");

/***/ }),

/***/ "./src/components/article/RevisionLogBottom/revisionLogBottom.js":
/*!***********************************************************************!*\
  !*** ./src/components/article/RevisionLogBottom/revisionLogBottom.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var _revisionLogBottom_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./revisionLogBottom.html.twig */ \"./src/components/article/RevisionLogBottom/revisionLogBottom.html.twig\");\n/* harmony import */ var _revisionLogBottom_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./revisionLogBottom.scss */ \"./src/components/article/RevisionLogBottom/revisionLogBottom.scss\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  var logs = document.querySelectorAll('.revision-log__link-list');\n\n  if (!logs.length) {\n    return;\n  }\n\n  var gotoButton = document.querySelector('.article-hero__toolbar__revision-log');\n  var showButton = document.querySelector('.revision-log__toggle-button-show');\n  var hideButton = document.querySelector('.revision-log__toggle-button-hide');\n  var logsContainer = document.querySelector('.revision-log');\n  var logsList = document.querySelector('.revision-log__link-list');\n\n  function closeRevisionLog() {\n    showButton.setAttribute('aria-hidden', 'true');\n    showButton.setAttribute('tabindex', '-1');\n    hideButton.setAttribute('aria-hidden', 'false');\n    hideButton.removeAttribute('tabindex');\n    logsList.setAttribute('aria-hidden', 'false');\n  }\n\n  function openRevisionLog() {\n    showButton.setAttribute('aria-hidden', 'false');\n    showButton.removeAttribute('tabindex');\n    hideButton.setAttribute('aria-hidden', 'true');\n    hideButton.setAttribute('tabindex', '-1');\n    logsList.setAttribute('aria-hidden', 'true');\n  }\n\n  function toggleClass() {\n    logsContainer.classList.toggle('revision-log--open');\n    logsContainer.classList.toggle('revision-log--closed');\n\n    if (logsContainer.classList.contains('revision-log--open')) {\n      closeRevisionLog();\n    } else {\n      openRevisionLog();\n    }\n  }\n\n  function goToRevisionLog() {\n    logsContainer.classList.add('revision-log--open');\n    logsContainer.classList.remove('revision-log--closed');\n    openRevisionLog();\n  }\n\n  if (showButton) {\n    showButton.addEventListener('click', toggleClass);\n    hideButton.addEventListener('click', toggleClass);\n  }\n\n  if (gotoButton) {\n    gotoButton.addEventListener('click', goToRevisionLog);\n  }\n}\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/RevisionLogBottom/revisionLogBottom.js?");

/***/ }),

/***/ "./src/components/article/StickySidebar/stickySidebar.js":
/*!***************************************************************!*\
  !*** ./src/components/article/StickySidebar/stickySidebar.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var _stickySidebar_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stickySidebar.html.twig */ \"./src/components/article/StickySidebar/stickySidebar.html.twig\");\n/* harmony import */ var _stickySidebar_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stickySidebar.scss */ \"./src/components/article/StickySidebar/stickySidebar.scss\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  var el = document.querySelector('.sticky-sidebar');\n\n  if (!el) {\n    return;\n  } // The top position for the sidebar once fixed.\n\n\n  var sidebarTopPosition = 18; // The margin-top value for the footer once fixed.\n\n  var contentFooterMarginTop = 54; // The margin-top value for the footer once fixed.\n\n  var generalFooterMarginTop = 2; // The margin-top value for the footer once fixed.\n\n  var relatedContentMarginTop = 30; // Work out whether the screensize is mobile/desktop\n\n  function getMode() {\n    return window.innerWidth < 1024 ? 'mobile' : 'desktop';\n  } // Fixed elements are relative to the screen size. When the sidebar becomes fixed, check its parent's width and set its width to match.\n\n\n  function changeSidebarWidth(parent, el, mode) {\n    if (mode === 'mobile') {\n      el.style.width = 'auto';\n    } else {\n      var computedStyle = getComputedStyle(parent);\n      var parentWidth = parent.clientWidth;\n      parentWidth -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);\n      el.style.width = parentWidth + 'px';\n    }\n  } // Get the position of the element if present\n\n\n  function getElementPosition(element) {\n    if (element && element.childElementCount !== 0) {\n      return element.offsetTop;\n    } else {\n      return null;\n    }\n  }\n\n  var viewportOffset = el.getBoundingClientRect();\n  var clientTop = document.documentElement.clientTop || document.body.clientTop || 0;\n  var initScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;\n  var top = viewportOffset.top + initScrollTop - clientTop;\n  var parent = el.parentNode;\n  var contentFooter = document.querySelector('.content-layout__footer');\n  var generalFooter = document.querySelector('.feedback');\n  var relatedContent = document.querySelector('.related-content');\n  var sidebarHeight = document.querySelector('.sticky-sidebar').offsetHeight;\n  var mode = getMode();\n  var contentFooterTop = getElementPosition(contentFooter);\n  var relatedContentTop = getElementPosition(relatedContent);\n  var generalFooterTop = getElementPosition(generalFooter);\n  window.addEventListener('resize', function () {\n    mode = getMode();\n    contentFooterTop = getElementPosition(contentFooter);\n    changeSidebarWidth(parent, el, mode);\n  });\n\n  function scrollAction(elementTop, elementMarginTop, scrollTop) {\n    // If the scroll position is between the top of the page and the top of the element, fix the sidebar\n    if (scrollTop + sidebarTopPosition >= top && scrollTop + elementMarginTop + sidebarHeight <= elementTop) {\n      el.classList.add('sticky-sidebar--fixed');\n      el.classList.remove('sticky-sidebar--bottom');\n      changeSidebarWidth(parent, el, mode);\n    } // If the scroll position is past the element, move the sidebar to the bottom.\n    else if (scrollTop + elementMarginTop + sidebarHeight > elementTop) {\n        el.classList.add('sticky-sidebar--bottom');\n        el.classList.remove('sticky-sidebar--fixed');\n        changeSidebarWidth(parent, el, mode);\n      } // Otherwise, return the sidebar to the top of the page\n      else {\n          el.classList.remove('sticky-sidebar--fixed');\n          el.classList.remove('sticky-sidebar--bottom');\n          changeSidebarWidth(parent, el, mode);\n        }\n  }\n\n  window.addEventListener('scroll', function () {\n    mode = getMode();\n\n    if (mode === 'desktop') {\n      var scrollTop = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop; // If related content, sidebar needs to stop earlier than up to the footer\n\n      if (relatedContentTop) {\n        scrollAction(relatedContentTop, relatedContentMarginTop, scrollTop);\n      } // If there is a content footer\n      else if (contentFooterTop) {\n          scrollAction(contentFooterTop, contentFooterMarginTop, scrollTop);\n        } // If there isn't a footer, use the \"global\" footer\n        // If there is a content footer\n        else {\n            scrollAction(generalFooterTop, generalFooterMarginTop, scrollTop);\n          }\n    }\n  });\n}\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/StickySidebar/stickySidebar.js?");

/***/ }),

/***/ "./src/components/article/SubjectListing/subjectListing.js":
/*!*****************************************************************!*\
  !*** ./src/components/article/SubjectListing/subjectListing.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _subjectListing_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subjectListing.html.twig */ \"./src/components/article/SubjectListing/subjectListing.html.twig\");\n/* harmony import */ var _subjectListing_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subjectListing.scss */ \"./src/components/article/SubjectListing/subjectListing.scss\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/SubjectListing/subjectListing.js?");

/***/ }),

/***/ "./src/components/article/TableOfContents/tableOfContents.js":
/*!*******************************************************************!*\
  !*** ./src/components/article/TableOfContents/tableOfContents.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var _tableOfContents_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tableOfContents.html.twig */ \"./src/components/article/TableOfContents/tableOfContents.html.twig\");\n/* harmony import */ var _tableOfContents_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tableOfContents.scss */ \"./src/components/article/TableOfContents/tableOfContents.scss\");\n/* harmony import */ var _general_Navigation_navigation_accessibility_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../general/Navigation/navigation-accessibility.js */ \"./src/components/general/Navigation/navigation-accessibility.js\");\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  var els = document.querySelectorAll('.table-of-contents');\n\n  if (!els) {\n    return;\n  }\n\n  var mode = (0,_general_Navigation_navigation_accessibility_js__WEBPACK_IMPORTED_MODULE_2__.getMode)();\n  els.forEach(function (el) {\n    var button = el.querySelector('.table-of-contents__title button');\n    var list = el.querySelector('.table-of-contents__list');\n    var arrow = button.querySelector('.table-of-contents__arrow');\n    button.addEventListener('click', function () {\n      if (mode === 'mobile') {\n        list.classList.toggle('table-of-contents__list--open');\n        arrow.classList.toggle('table-of-contents__arrow--active');\n\n        if (button.getAttribute('aria-expanded') === 'true') {\n          button.setAttribute('aria-expanded', 'false');\n        } else {\n          button.setAttribute('aria-expanded', 'true');\n        }\n      }\n    }); // Handle the visibility of the \"skip menu\" link\n\n    var skipLink = el.querySelector('.table-of-contents__skip');\n    skipLink.addEventListener('click', function (e) {\n      e.preventDefault(); // If there is another group, move to that.\n\n      var nextGroup = el.parentElement.nextElementSibling;\n\n      if (nextGroup) {\n        nextGroup.querySelector('a').focus();\n      } // Otherwise scroll and focus the top of the content\n      else {\n          var tocSkip = document.querySelector('#toc-skip-to');\n          tocSkip.scrollIntoView();\n          tocSkip.focus();\n        }\n    });\n  });\n  window.addEventListener('resize', function () {\n    mode = (0,_general_Navigation_navigation_accessibility_js__WEBPACK_IMPORTED_MODULE_2__.getMode)();\n  });\n}\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/TableOfContents/tableOfContents.js?");

/***/ }),

/***/ "./src/components/article/TeamContacts/teamContacts.js":
/*!*************************************************************!*\
  !*** ./src/components/article/TeamContacts/teamContacts.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _teamContacts_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./teamContacts.html.twig */ \"./src/components/article/TeamContacts/teamContacts.html.twig\");\n/* harmony import */ var _teamContacts_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teamContacts.scss */ \"./src/components/article/TeamContacts/teamContacts.scss\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/TeamContacts/teamContacts.js?");

/***/ }),

/***/ "./src/components/article/TextBlock/textBlock.js":
/*!*******************************************************!*\
  !*** ./src/components/article/TextBlock/textBlock.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var _textBlock_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textBlock.html.twig */ \"./src/components/article/TextBlock/textBlock.html.twig\");\n/* harmony import */ var _textBlock_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textBlock.scss */ \"./src/components/article/TextBlock/textBlock.scss\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  var textBlocks = document.querySelectorAll('.text-block');\n\n  if (!textBlocks) {\n    return;\n  } // Get table header positions, i.e. none, mixed, left column or top row\n\n\n  function getTableHeaderType(table) {\n    var th = table.querySelectorAll('th');\n\n    if (th.length === 0) {\n      return 'none';\n    } else {\n      var scopes = [];\n      th.forEach(function (header) {\n        if (header.hasAttribute('scope')) {\n          var scope = header.getAttribute('scope').toString();\n          scopes.push(scope);\n        }\n      });\n\n      if (scopes.includes('col') && scopes.includes('row')) {\n        return 'mixed';\n      } else if (scopes.includes('col')) {\n        return 'column';\n      } else if (scopes.includes('row')) {\n        return 'row';\n      }\n    }\n  } // Get the table header associated with the specified cell and add in a span to the cell\n\n\n  function getAssocHeader(table, cell, headerCell) {\n    if (!headerCell) {\n      return;\n    }\n\n    var headerLabel = headerCell.innerHTML;\n    var header = document.createElement('span');\n    header.classList.add('responsive-table__heading');\n    headerCell.setAttribute('aria-hidden', 'true');\n    header.innerHTML = headerLabel;\n    cell.insertAdjacentElement('afterbegin', header);\n  }\n\n  textBlocks.forEach(function (block) {\n    var tables = block.querySelectorAll('table');\n    tables.forEach(function (table) {\n      table.classList.add('fsa-table');\n      var type = getTableHeaderType(table);\n      var tr = table.querySelectorAll('tbody tr');\n      var th = table.querySelectorAll('tbody tr th');\n      var td = table.querySelectorAll('tbody tr td');\n\n      switch (type) {\n        case 'none':\n          table.classList.add('fsa-table--no-headers');\n          break;\n\n        case 'mixed':\n        case 'column':\n          table.classList.add('fsa-table--column');\n          tr.forEach(function (row) {\n            row.setAttribute('role', 'row');\n          });\n          td.forEach(function (cell) {\n            cell.setAttribute('role', 'cell');\n            var headerCell = table.rows[0].cells[cell.cellIndex];\n            getAssocHeader(table, cell, headerCell);\n          });\n          break;\n\n        case 'row':\n          table.classList.add('fsa-table--rows');\n          th.forEach(function (heading) {\n            heading.classList.add('fsa-table__heading--hidden');\n          });\n          tr.forEach(function (row) {\n            row.setAttribute('role', 'row');\n          });\n          td.forEach(function (cell) {\n            cell.setAttribute('role', 'cell');\n            var row = cell.parentNode.rowIndex;\n            var headerCell = table.rows[row].cells[0];\n            getAssocHeader(table, cell, headerCell);\n          });\n          break;\n      }\n    });\n  });\n}\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/TextBlock/textBlock.js?");

/***/ }),

/***/ "./src/components/contact/HelpSecondaryMenu/helpSecondaryMenu.js":
/*!***********************************************************************!*\
  !*** ./src/components/contact/HelpSecondaryMenu/helpSecondaryMenu.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpSecondaryMenu_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpSecondaryMenu.html.twig */ \"./src/components/contact/HelpSecondaryMenu/helpSecondaryMenu.html.twig\");\n/* harmony import */ var _helpSecondaryMenu_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpSecondaryMenu.scss */ \"./src/components/contact/HelpSecondaryMenu/helpSecondaryMenu.scss\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/contact/HelpSecondaryMenu/helpSecondaryMenu.js?");

/***/ }),

/***/ "./src/components/contact/PromoLinks/promoLinks.js":
/*!*********************************************************!*\
  !*** ./src/components/contact/PromoLinks/promoLinks.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _promoLinks_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promoLinks.html.twig */ \"./src/components/contact/PromoLinks/promoLinks.html.twig\");\n/* harmony import */ var _promoLinks_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./promoLinks.scss */ \"./src/components/contact/PromoLinks/promoLinks.scss\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/contact/PromoLinks/promoLinks.js?");

/***/ }),

/***/ "./src/components/fhrs/Badge/badge.js":
/*!********************************************!*\
  !*** ./src/components/fhrs/Badge/badge.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _badge_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./badge.html.twig */ \"./src/components/fhrs/Badge/badge.html.twig\");\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/fhrs/Badge/badge.js?");

/***/ }),

/***/ "./src/components/fhrs/BadgeDownload/badgeDownload.js":
/*!************************************************************!*\
  !*** ./src/components/fhrs/BadgeDownload/badgeDownload.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var _badgeDownload_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./badgeDownload.html.twig */ \"./src/components/fhrs/BadgeDownload/badgeDownload.html.twig\");\n/* harmony import */ var _badgeDownload_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./badgeDownload.scss */ \"./src/components/fhrs/BadgeDownload/badgeDownload.scss\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  var badgeDownload = document.querySelector('.badge-download'); // Map related - uncomment when FSA confirm whether it should be added to search\n  // const isIE = window.navigator.userAgent.match(/(MSIE|Trident)/);\n\n  if (!badgeDownload) {\n    return;\n  }\n\n  var badges = badgeDownload.querySelectorAll('.badge-download__badge-wrapper');\n  badges.forEach(function (badge) {\n    var codeWrapper = badge.querySelector('.badge-download__code-wrapper');\n    var codeButton = badge.querySelector('.badge-download__code-button');\n    codeButton.addEventListener('click', function () {\n      codeWrapper.classList.toggle('badge-download__code-wrapper--open');\n\n      if (codeButton.getAttribute('aria-expanded') === 'true') {\n        codeButton.setAttribute('aria-expanded', false);\n      } else {\n        codeButton.setAttribute('aria-expanded', true);\n      }\n    });\n  });\n}\n\n//# sourceURL=webpack://fsa-design-system/./src/components/fhrs/BadgeDownload/badgeDownload.js?");

/***/ }),

/***/ "./src/components/fhrs/BusinessHero/businessHero.js":
/*!**********************************************************!*\
  !*** ./src/components/fhrs/BusinessHero/businessHero.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var _businessHero_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./businessHero.html.twig */ \"./src/components/fhrs/BusinessHero/businessHero.html.twig\");\n/* harmony import */ var _businessHero_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./businessHero.scss */ \"./src/components/fhrs/BusinessHero/businessHero.scss\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  var businessHero = document.querySelector('.business-hero');\n\n  if (!businessHero) {\n    return;\n  } // Open map section\n\n\n  var mapButton = businessHero.querySelector('.business-hero__map__button');\n\n  if (mapButton) {\n    var mapButtonArrow = businessHero.querySelector('.business-hero__map__arrow');\n    var mapButtonText = businessHero.querySelector('.business-hero__map__button-label');\n    var mapWrapper = businessHero.querySelector('.business-hero__map__wrapper');\n    mapButton.addEventListener('click', function (e) {\n      e.preventDefault();\n      var showMapLabel = mapButtonText.getAttribute('data-show-map');\n      var hideMapLabel = mapButtonText.getAttribute('data-hide-map');\n      mapButtonArrow.classList.toggle('business-hero__map__arrow--open');\n      mapWrapper.classList.toggle('business-hero__map__wrapper--open');\n\n      if (mapButton.getAttribute('aria-expanded') === 'true') {\n        mapButton.setAttribute('aria-expanded', 'false');\n        mapButtonText.innerHTML = showMapLabel;\n      } else {\n        mapButton.setAttribute('aria-expanded', 'true');\n        mapButtonText.innerHTML = hideMapLabel;\n      }\n    });\n  }\n}\n\n//# sourceURL=webpack://fsa-design-system/./src/components/fhrs/BusinessHero/businessHero.js?");

/***/ }),

/***/ "./src/components/fhrs/LocalAuthority/localAuthority.js":
/*!**************************************************************!*\
  !*** ./src/components/fhrs/LocalAuthority/localAuthority.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _localAuthority_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localAuthority.html.twig */ \"./src/components/fhrs/LocalAuthority/localAuthority.html.twig\");\n/* harmony import */ var _localAuthority_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localAuthority.scss */ \"./src/components/fhrs/LocalAuthority/localAuthority.scss\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/fhrs/LocalAuthority/localAuthority.js?");

/***/ }),

/***/ "./src/components/fhrs/LocalAuthorityMap/localAuthorityMap.js":
/*!********************************************************************!*\
  !*** ./src/components/fhrs/LocalAuthorityMap/localAuthorityMap.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var _localAuthorityMap_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localAuthorityMap.html.twig */ \"./src/components/fhrs/LocalAuthorityMap/localAuthorityMap.html.twig\");\n/* harmony import */ var _localAuthorityMap_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localAuthorityMap.scss */ \"./src/components/fhrs/LocalAuthorityMap/localAuthorityMap.scss\");\n/* harmony import */ var _assets_fhrs_map_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/fhrs-map.svg */ \"./src/components/fhrs/LocalAuthorityMap/assets/fhrs-map.svg\");\n/* harmony import */ var image_map_resizer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! image-map-resizer */ \"./node_modules/image-map-resizer/js/imageMapResizer.min.js\");\n/* harmony import */ var image_map_resizer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(image_map_resizer__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _helpers_imageMapResizer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../helpers/imageMapResizer */ \"./src/helpers/imageMapResizer.js\");\n/* harmony import */ var imagesloaded__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! imagesloaded */ \"./node_modules/imagesloaded/imagesloaded.js\");\n/* harmony import */ var imagesloaded__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(imagesloaded__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  var localAuthorityMap = document.querySelector('.local-authority-map');\n\n  if (!localAuthorityMap) {\n    return;\n  } // Set placeholder map\n\n\n  var map = localAuthorityMap.querySelector('img'); // If this is on Storybook insert a placeholder image and use the original resizer\n\n  if (map.src.includes('storybook-placeholder')) {\n    map.src = _assets_fhrs_map_svg__WEBPACK_IMPORTED_MODULE_2__.default;\n    image_map_resizer__WEBPACK_IMPORTED_MODULE_3___default()(); // Otherwise check that the image has loaded before running the adapter version of the resizer\n  } else {\n    imagesloaded__WEBPACK_IMPORTED_MODULE_5___default()(localAuthorityMap, {\n      background: true\n    }, function () {\n      (0,_helpers_imageMapResizer__WEBPACK_IMPORTED_MODULE_4__.default)();\n    });\n  }\n}\n\n//# sourceURL=webpack://fsa-design-system/./src/components/fhrs/LocalAuthorityMap/localAuthorityMap.js?");

/***/ }),

/***/ "./src/components/fhrs/MapInfobox/mapInfobox.js":
/*!******************************************************!*\
  !*** ./src/components/fhrs/MapInfobox/mapInfobox.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mapInfobox_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapInfobox.html.twig */ \"./src/components/fhrs/MapInfobox/mapInfobox.html.twig\");\n/* harmony import */ var _mapInfobox_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapInfobox.scss */ \"./src/components/fhrs/MapInfobox/mapInfobox.scss\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/fhrs/MapInfobox/mapInfobox.js?");

/***/ }),

/***/ "./src/components/fhrs/RatingsSearchBox/ratingsSearchBox.js":
/*!******************************************************************!*\
  !*** ./src/components/fhrs/RatingsSearchBox/ratingsSearchBox.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var _ratingsSearchBox_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ratingsSearchBox.html.twig */ \"./src/components/fhrs/RatingsSearchBox/ratingsSearchBox.html.twig\");\n/* harmony import */ var _ratingsSearchBox_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ratingsSearchBox.scss */ \"./src/components/fhrs/RatingsSearchBox/ratingsSearchBox.scss\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  var ratingsSearchBox = document.querySelector('.ratings-search-box');\n  var isIE = false;\n\n  if (typeof window !== 'undefined') {\n    isIE = window.navigator.userAgent.match(/(MSIE|Trident)/);\n  }\n\n  if (!ratingsSearchBox) {\n    return;\n  } // Use location\n\n\n  var locationToggle = ratingsSearchBox.querySelector('#location-toggle');\n  var locationInput = ratingsSearchBox.querySelector('.ratings-search-box__location-search');\n  var locationField = ratingsSearchBox.querySelector('.ratings-search-box__location');\n  var businessField = ratingsSearchBox.querySelector('.ratings-search-box__business-name');\n  var locationContainer = ratingsSearchBox.querySelector('.ratings-search-box__location-toggle');\n  var blockedLabel = locationContainer.getAttribute('data-blocked-location');\n  locationToggle.addEventListener('click', function () {\n    var label = locationContainer.querySelector('label > span');\n\n    if (locationToggle.getAttribute('aria-checked') === 'true') {\n      locationInput.classList.add('ratings-search-box__location-search--closed');\n      businessField.classList.add('ratings-search-box__business-name--full-width');\n      navigator.geolocation.getCurrentPosition(function (position) {\n        locationField.value = position.coords.latitude + ',' + position.coords.longitude;\n      }, function () {\n        label.innerText = blockedLabel;\n        locationToggle.disabled = true;\n        locationToggle.classList.add('toggle-button__button--disabled');\n        locationToggle.ariaChecked = 'false';\n        locationInput.classList.remove('ratings-search-box__location-search--closed');\n        businessField.classList.remove('ratings-search-box__business-name--full-width');\n      });\n    } else {\n      locationInput.classList.remove('ratings-search-box__location-search--closed');\n      businessField.classList.remove('ratings-search-box__business-name--full-width');\n      locationField.value = '';\n    }\n  }); // Show results with map\n\n  var map = ratingsSearchBox.querySelector('.ratings-search-box__map');\n  var mapToggleContainer = ratingsSearchBox.querySelector('.ratings-search-box__map-toggle');\n  var mapToggle = ratingsSearchBox.querySelector('#map-toggle'); // Show/hide the map pins depending on whether the show map toggle is active\n\n  function updateCardPins(state) {\n    var mapPins = document.querySelectorAll('.fhrs-search-card__map-pin-wrapper');\n\n    if (state) {\n      mapPins.forEach(function (pin) {\n        pin.classList.add('fhrs-search-card__map-pin-wrapper--open');\n      });\n    } else {\n      mapPins.forEach(function (pin) {\n        pin.classList.remove('fhrs-search-card__map-pin-wrapper--open');\n      });\n    }\n  }\n\n  if (isIE) {\n    mapToggleContainer.classList.add('hidden');\n  } else {\n    mapToggle.addEventListener('click', function () {\n      var hideLabel = mapToggleContainer.getAttribute('data-hide-button');\n      var showLabel = mapToggleContainer.getAttribute('data-show-button');\n      var label = mapToggleContainer.querySelector('label > span');\n\n      if (!ratingsSearchBox.classList.contains('ratings-search-box--homepage')) {\n        if (mapToggle.getAttribute('aria-checked') === 'true') {\n          map.classList.add('ratings-search-box__map--open');\n          label.innerText = hideLabel;\n          updateCardPins(true);\n        } else {\n          map.classList.remove('ratings-search-box__map--open');\n          label.innerText = showLabel;\n          updateCardPins(false);\n        }\n      }\n    });\n  } // Open additional search options\n\n\n  var additionalOptionsLink = ratingsSearchBox.querySelector('.ratings-search-box__more-search-options');\n  var additionalOptionsLinkArrow = ratingsSearchBox.querySelector('.ratings-search-box__more-search-options__arrow');\n  var additionalOptions = ratingsSearchBox.querySelector('.ratings-search-box__additional-options');\n  var moreOptionsLabel = additionalOptionsLink.querySelector('.ratings-search-box__more-search-options__label');\n  var moreOptionsLabelText = moreOptionsLabel.innerHTML;\n  additionalOptionsLink.addEventListener('click', function (e) {\n    e.preventDefault();\n    var fewerOptionsLabelText = additionalOptionsLink.getAttribute('data-fewer-options-label');\n    additionalOptions.classList.toggle('ratings-search-box__additional-options--open');\n    additionalOptionsLinkArrow.classList.toggle('ratings-search-box__more-search-options__arrow--open');\n\n    if (additionalOptions.getAttribute('aria-expanded') === 'true') {\n      additionalOptions.ariaExpanded = 'false';\n      moreOptionsLabel.innerHTML = moreOptionsLabelText;\n    } else {\n      additionalOptions.ariaExpanded = 'true';\n      moreOptionsLabel.innerHTML = fewerOptionsLabelText;\n    }\n  }); // If hygiene rating or status dropdowns are used, automatically check the radio button\n\n  var hygieneRatingSelect = ratingsSearchBox.querySelector('#hygiene_rating');\n  var hygieneRatingRadio = ratingsSearchBox.querySelector('#rating');\n  var hygieneStatusSelect = ratingsSearchBox.querySelector('#hygiene_status');\n  var hygieneStatusRadio = ratingsSearchBox.querySelector('#status');\n\n  if (hygieneRatingRadio) {\n    hygieneRatingSelect.addEventListener('change', function () {\n      hygieneRatingRadio.checked = true;\n    });\n  }\n\n  if (hygieneStatusRadio) {\n    hygieneStatusSelect.addEventListener('change', function () {\n      hygieneStatusRadio.checked = true;\n    });\n  }\n}\n\n//# sourceURL=webpack://fsa-design-system/./src/components/fhrs/RatingsSearchBox/ratingsSearchBox.js?");

/***/ }),

/***/ "./src/components/fhrs/SearchCard/searchCard.js":
/*!******************************************************!*\
  !*** ./src/components/fhrs/SearchCard/searchCard.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _searchCard_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchCard.html.twig */ \"./src/components/fhrs/SearchCard/searchCard.html.twig\");\n/* harmony import */ var _searchCard_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchCard.scss */ \"./src/components/fhrs/SearchCard/searchCard.scss\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/fhrs/SearchCard/searchCard.js?");

/***/ }),

/***/ "./src/components/form/Checkbox/checkbox.js":
/*!**************************************************!*\
  !*** ./src/components/form/Checkbox/checkbox.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _checkbox_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox.html.twig */ \"./src/components/form/Checkbox/checkbox.html.twig\");\n/* harmony import */ var _checkbox_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkbox.scss */ \"./src/components/form/Checkbox/checkbox.scss\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/Checkbox/checkbox.js?");

/***/ }),

/***/ "./src/components/form/Dropdown/dropdown.js":
/*!**************************************************!*\
  !*** ./src/components/form/Dropdown/dropdown.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dropdown_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown.html.twig */ \"./src/components/form/Dropdown/dropdown.html.twig\");\n/* harmony import */ var _dropdown_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown.scss */ \"./src/components/form/Dropdown/dropdown.scss\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/Dropdown/dropdown.js?");

/***/ }),

/***/ "./src/components/form/EmailField/emailField.js":
/*!******************************************************!*\
  !*** ./src/components/form/EmailField/emailField.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emailField_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emailField.html.twig */ \"./src/components/form/EmailField/emailField.html.twig\");\n/* harmony import */ var _emailField_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emailField.scss */ \"./src/components/form/EmailField/emailField.scss\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/EmailField/emailField.js?");

/***/ }),

/***/ "./src/components/form/ErrorBox/errorBoxs.js":
/*!***************************************************!*\
  !*** ./src/components/form/ErrorBox/errorBoxs.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _errorBox_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errorBox.scss */ \"./src/components/form/ErrorBox/errorBox.scss\");\n/* harmony import */ var _errorBox_html_twig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errorBox.html.twig */ \"./src/components/form/ErrorBox/errorBox.html.twig\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/ErrorBox/errorBoxs.js?");

/***/ }),

/***/ "./src/components/form/FileUpload/fileUpload.js":
/*!******************************************************!*\
  !*** ./src/components/form/FileUpload/fileUpload.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fileUpload_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fileUpload.scss */ \"./src/components/form/FileUpload/fileUpload.scss\");\n/* harmony import */ var _fileUpload_html_twig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fileUpload.html.twig */ \"./src/components/form/FileUpload/fileUpload.html.twig\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/FileUpload/fileUpload.js?");

/***/ }),

/***/ "./src/components/form/InputField/inputField.js":
/*!******************************************************!*\
  !*** ./src/components/form/InputField/inputField.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var _inputField_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputField.html.twig */ \"./src/components/form/InputField/inputField.html.twig\");\n/* harmony import */ var _inputField_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputField.scss */ \"./src/components/form/InputField/inputField.scss\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  var textFields = document.querySelectorAll('.input-field');\n\n  if (!textFields) {\n    return;\n  }\n\n  textFields.forEach(function (field) {\n    var charCounter = field.querySelector('.input-field__character-limit__count');\n\n    if (charCounter) {\n      var startingCount = charCounter.innerHTML;\n      var input = field.querySelector('input');\n      input.addEventListener('input', function (e) {\n        charCounter.innerHTML = String(parseInt(startingCount) - e.target.value.length);\n      });\n    }\n  });\n}\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/InputField/inputField.js?");

/***/ }),

/***/ "./src/components/form/MapField/mapField.js":
/*!**************************************************!*\
  !*** ./src/components/form/MapField/mapField.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var _mapField_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapField.html.twig */ \"./src/components/form/MapField/mapField.html.twig\");\n/* harmony import */ var _mapField_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapField.scss */ \"./src/components/form/MapField/mapField.scss\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  var mapField = document.querySelector('.map-field');\n\n  if (!mapField) {\n    return;\n  }\n\n  var mapButton = mapField.querySelector('.map-field__button input');\n  var map = mapField.querySelector('.map-field__map');\n  var isIE = window.navigator.userAgent.match(/(MSIE|Trident)/);\n\n  if (isIE) {\n    mapButton.classList.add('map-field__button--hidden');\n    map.classList.add('map-field__map--hidden');\n  }\n}\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/MapField/mapField.js?");

/***/ }),

/***/ "./src/components/form/MessageBox/messageBox.js":
/*!******************************************************!*\
  !*** ./src/components/form/MessageBox/messageBox.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _messageBox_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messageBox.html.twig */ \"./src/components/form/MessageBox/messageBox.html.twig\");\n/* harmony import */ var _messageBox_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messageBox.scss */ \"./src/components/form/MessageBox/messageBox.scss\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/MessageBox/messageBox.js?");

/***/ }),

/***/ "./src/components/form/MultifieldGroup/multifieldGroup.js":
/*!****************************************************************!*\
  !*** ./src/components/form/MultifieldGroup/multifieldGroup.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; },\n/* harmony export */   \"dispatchMultigroupEvent\": function() { return /* binding */ dispatchMultigroupEvent; }\n/* harmony export */ });\n/* harmony import */ var _multifieldGroup_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multifieldGroup.html.twig */ \"./src/components/form/MultifieldGroup/multifieldGroup.html.twig\");\n/* harmony import */ var _multifieldGroup_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multifieldGroup.scss */ \"./src/components/form/MultifieldGroup/multifieldGroup.scss\");\n/* harmony import */ var _MultivalueField_multivalueField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MultivalueField/multivalueField */ \"./src/components/form/MultivalueField/multivalueField.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  var groups = document.querySelectorAll('.multifield-group');\n\n  var _iterator = _createForOfIteratorHelper(groups),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var group = _step.value;\n\n      if (!group.hasAttribute('pl-listener-assigned')) {\n        initGroup(group);\n      }\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n}\nfunction dispatchMultigroupEvent(element) {\n  var group = element.classList.contains('multifield-group') ? element : element.closest('.multifield-group');\n\n  if (group) {\n    group.dispatchEvent(new Event('input'));\n    group.dispatchEvent(new Event('select'));\n  }\n}\n\nfunction initGroup(group) {\n  group.setAttribute('pl-listener-assigned', '1'); // Delete all IDs to avoid problems with accessibility.\n\n  var allInputs = group.querySelector('.multifield-group__template').querySelectorAll('input, select, textarea');\n\n  var _iterator2 = _createForOfIteratorHelper(allInputs),\n      _step2;\n\n  try {\n    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n      var input = _step2.value;\n      input.removeAttribute('id');\n    }\n  } catch (err) {\n    _iterator2.e(err);\n  } finally {\n    _iterator2.f();\n  }\n\n  var button = group.querySelector('.multifield-group__add-item button');\n  button.addEventListener('click', function (e) {\n    var groupId = addGroup(e.target);\n    dispatchMultigroupEvent(e.target);\n    document.getElementById(groupId).querySelector('[data-field-name]:not([type=\"hidden\"])').focus();\n  });\n  var parsedValues = JSON.parse(decodeURIComponent(group.getAttribute('data-items')));\n  var values = Array.isArray(parsedValues) ? parsedValues : [];\n\n  var _iterator3 = _createForOfIteratorHelper(values),\n      _step3;\n\n  try {\n    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n      var value = _step3.value;\n      addGroup(button, value);\n    }\n  } catch (err) {\n    _iterator3.e(err);\n  } finally {\n    _iterator3.f();\n  }\n\n  dispatchMultigroupEvent(group);\n  group.addEventListener('updateErrors', function (e) {\n    var dataItems = JSON.parse(decodeURIComponent(e.target.getAttribute('data-items')));\n\n    if (!dataItems) {\n      return;\n    }\n\n    var errorFields = e.target.querySelectorAll('.input-field--error, .dropdown--error, .textarea--error, .radio--error');\n\n    var _iterator4 = _createForOfIteratorHelper(errorFields),\n        _step4;\n\n    try {\n      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {\n        var errorField = _step4.value;\n        errorField.classList.remove('input-field--error');\n        errorField.classList.remove('dropdown--error');\n        errorField.classList.remove('textarea--error');\n        errorField.classList.remove('radio--error');\n      }\n    } catch (err) {\n      _iterator4.e(err);\n    } finally {\n      _iterator4.f();\n    }\n\n    for (var i in dataItems) {\n      var line = dataItems[i];\n\n      if (line.errors.length) {\n        var items = e.target.querySelectorAll('.multifield-group__item');\n        var item = items[+i + 1];\n\n        if (item) {\n          var _iterator5 = _createForOfIteratorHelper(line.errors),\n              _step5;\n\n          try {\n            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {\n              var fieldName = _step5.value;\n              var elements = item.querySelectorAll(\"[data-field-name=\\\"\".concat(fieldName, \"\\\"]\"));\n\n              var _iterator6 = _createForOfIteratorHelper(elements),\n                  _step6;\n\n              try {\n                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {\n                  var element = _step6.value;\n\n                  if (element.tagName === 'INPUT' && element.type === 'radio') {\n                    element.closest('.radio').classList.add('radio--error');\n                  } else if (element.tagName === 'INPUT' && element.closest('.input-field')) {\n                    element.closest('.input-field').classList.add('input-field--error');\n                  } else if (element.tagName === 'SELECT') {\n                    element.closest('.dropdown').classList.add('dropdown--error');\n                  } else if (element.tagName === 'TEXTAREA') {\n                    element.closest('.textarea').classList.add('textarea--error');\n                  }\n                }\n              } catch (err) {\n                _iterator6.e(err);\n              } finally {\n                _iterator6.f();\n              }\n            }\n          } catch (err) {\n            _iterator5.e(err);\n          } finally {\n            _iterator5.f();\n          }\n        }\n      }\n    }\n  });\n}\n\nfunction addGroup(group) {\n  var values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {\n    values: {},\n    errors: [],\n    placeholders: {}\n  };\n  var parent = group.closest('.multifield-group');\n  var template = parent.querySelector('.multifield-group__template .multifield-group__item').cloneNode(true);\n\n  var numberOfItems = _toConsumableArray(parent.children).filter(function (item) {\n    return item.classList.contains('multifield-group__item');\n  }).length;\n\n  if (!numberOfItems) {\n    template.querySelector('.multifield-group__form--other-items').remove();\n  } else {\n    template.querySelector('.multifield-group__form--first-item').remove();\n  }\n\n  var groupId = (0,uuid__WEBPACK_IMPORTED_MODULE_3__.default)();\n  template.setAttribute('id', groupId);\n  template.querySelector('.multifield-group__delete-item').addEventListener('click', function (e) {\n    e.preventDefault();\n    var deletedItem = e.target.closest('.multifield-group__item');\n    var group = e.target.closest('.multifield-group');\n    deletedItem.remove();\n    dispatchMultigroupEvent(group);\n  }); // Handle multivalue fields.\n\n  var multivalueFields = template.querySelectorAll('.multivalue-field');\n\n  var _iterator7 = _createForOfIteratorHelper(multivalueFields),\n      _step7;\n\n  try {\n    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {\n      var field = _step7.value;\n      field.removeAttribute('pl-listener-assigned');\n      (0,_MultivalueField_multivalueField__WEBPACK_IMPORTED_MODULE_2__.activateMultivalueField)(field);\n    } // Set uuid for ID field.\n\n  } catch (err) {\n    _iterator7.e(err);\n  } finally {\n    _iterator7.f();\n  }\n\n  var uuidField = template.querySelector(\"[name=\\\"uuid[]\\\"]\");\n\n  if (uuidField) {\n    uuidField.setAttribute('value', (0,uuid__WEBPACK_IMPORTED_MODULE_3__.default)());\n  } // Handle radio buttons.\n\n\n  var radioInputs = template.querySelectorAll(\".radio input\");\n\n  var _iterator8 = _createForOfIteratorHelper(radioInputs),\n      _step8;\n\n  try {\n    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {\n      var radio = _step8.value;\n      var name = radio.getAttribute('name');\n      radio.setAttribute('name', \"\".concat(name, \"[\").concat(groupId, \"]\"));\n      radio.setAttribute('id', \"\".concat(name, \"--\").concat(groupId));\n    } // Set existed values.\n\n  } catch (err) {\n    _iterator8.e(err);\n  } finally {\n    _iterator8.f();\n  }\n\n  for (var key in values.values) {\n    var element = template.querySelector(\"[name^=\\\"\".concat(key, \"\\\"]\"));\n\n    if (element) {\n      var multivalueField = element.closest('.multivalue-field');\n\n      if (multivalueField && Array.isArray(values.values[key]) && values.values[key].length) {\n        element.setAttribute('value', values.values[key][0]);\n\n        var _iterator9 = _createForOfIteratorHelper(values.values[key].splice(1)),\n            _step9;\n\n        try {\n          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {\n            var value = _step9.value;\n            (0,_MultivalueField_multivalueField__WEBPACK_IMPORTED_MODULE_2__.addField)(multivalueField, value);\n          }\n        } catch (err) {\n          _iterator9.e(err);\n        } finally {\n          _iterator9.f();\n        }\n      } else {\n        if (element.tagName === 'INPUT' && element.type === 'radio') {\n          var defaultRadioElem = template.querySelector(\"[name^=\\\"\".concat(key, \"\\\"][value=\\\"\").concat(values.values[key], \"\\\"]\"));\n\n          if (defaultRadioElem) {\n            defaultRadioElem.setAttribute('checked', 'checked');\n          }\n        } else if (element.tagName === 'INPUT') {\n          element.setAttribute('value', values.values[key]);\n        } else if (element.tagName === 'TEXTAREA') {\n          element.innerHTML = values.values[key];\n        } else if (element.tagName === 'SELECT') {\n          var _iterator10 = _createForOfIteratorHelper(element.options),\n              _step10;\n\n          try {\n            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {\n              var option = _step10.value;\n              option.setAttribute('value', option.getAttribute('data-value'));\n\n              if (option.getAttribute('data-value') === values.values[key]) {\n                option.setAttribute('selected', 'selected');\n              }\n            }\n          } catch (err) {\n            _iterator10.e(err);\n          } finally {\n            _iterator10.f();\n          }\n        }\n      }\n    } else {\n      // Fill placeholders\n      var regex = new RegExp(\"\\\\[\".concat(key, \"\\\\]\"), 'g');\n      template.innerHTML = template.innerHTML.replace(regex, values.values[key]);\n    }\n  } // Set proper attrs for all fields, even no predefined.\n\n\n  var allInputs = template.querySelectorAll('input, select, textarea');\n\n  var _iterator11 = _createForOfIteratorHelper(allInputs),\n      _step11;\n\n  try {\n    for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {\n      var _element = _step11.value;\n\n      var _name = _element.getAttribute('name').replace(/\\[.*?\\]/g, '');\n\n      _element.setAttribute('data-field-name', _name);\n\n      _element.setAttribute('data-sub-group-id', groupId); // Set mapping between labels and fields for single fields.\n\n\n      if (_element.tagName === 'INPUT') {\n        var multiWrapper = _element.closest('.multivalue-field');\n\n        if (!multiWrapper && _element.type !== 'radio') {\n          var singleWrapper = _element.closest('.input-field');\n\n          if (singleWrapper) {\n            var label = singleWrapper.querySelector('label');\n            (0,_MultivalueField_multivalueField__WEBPACK_IMPORTED_MODULE_2__.setLabelMappingForInput)(label);\n          }\n        } else if (!multiWrapper && _element.type === 'radio') {\n          var _singleWrapper = _element.closest('.radio');\n\n          if (_singleWrapper) {\n            var labels = _singleWrapper.querySelectorAll('label');\n\n            var _iterator13 = _createForOfIteratorHelper(labels),\n                _step13;\n\n            try {\n              for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {\n                var _label = _step13.value;\n                (0,_MultivalueField_multivalueField__WEBPACK_IMPORTED_MODULE_2__.setLabelMappingForRadio)(_label);\n              }\n            } catch (err) {\n              _iterator13.e(err);\n            } finally {\n              _iterator13.f();\n            }\n          }\n        }\n      } else if (_element.tagName === 'SELECT') {\n        var _singleWrapper2 = _element.closest('.dropdown');\n\n        if (_singleWrapper2) {\n          var _label2 = _singleWrapper2.querySelector('label');\n\n          (0,_MultivalueField_multivalueField__WEBPACK_IMPORTED_MODULE_2__.setLabelMappingForSelect)(_label2);\n        }\n      } else if (_element.tagName === 'TEXTAREA') {\n        var _singleWrapper3 = _element.closest('.textarea');\n\n        if (_singleWrapper3) {\n          var _label3 = _singleWrapper3.querySelector('label');\n\n          (0,_MultivalueField_multivalueField__WEBPACK_IMPORTED_MODULE_2__.setLabelMappingForTextarea)(_label3);\n        }\n      }\n    } // Set errors.\n\n  } catch (err) {\n    _iterator11.e(err);\n  } finally {\n    _iterator11.f();\n  }\n\n  var _iterator12 = _createForOfIteratorHelper(values.errors),\n      _step12;\n\n  try {\n    for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {\n      var _field = _step12.value;\n\n      var _element2 = template.querySelector(\"[name^=\\\"\".concat(_field, \"\\\"]\"));\n\n      if (_element2) {\n        if (_element2.tagName === 'INPUT') {\n          if (_element2.type === 'radio') {\n            var wrapper = _element2.closest('.radio');\n\n            if (wrapper) {\n              wrapper.classList.add('radio--error');\n            }\n          } else {\n            var _wrapper = _element2.closest('.input-field');\n\n            if (_wrapper) {\n              _wrapper.classList.add('input-field--error');\n            }\n          }\n        } else if (_element2.tagName === 'SELECT') {\n          var _wrapper2 = _element2.closest('.dropdown');\n\n          if (_wrapper2) {\n            _wrapper2.classList.add('dropdown--error');\n          }\n        } else if (_element2.tagName === 'TEXTAREA') {\n          var _wrapper3 = _element2.closest('.textarea');\n\n          if (_wrapper3) {\n            _wrapper3.classList.add('textarea--error');\n          }\n        }\n      }\n    }\n  } catch (err) {\n    _iterator12.e(err);\n  } finally {\n    _iterator12.f();\n  }\n\n  parent.insertBefore(template, group.parentNode);\n  return groupId;\n}\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/MultifieldGroup/multifieldGroup.js?");

/***/ }),

/***/ "./src/components/form/MultistepFunction/multistepFunction.js":
/*!********************************************************************!*\
  !*** ./src/components/form/MultistepFunction/multistepFunction.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _multistepFunction_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multistepFunction.scss */ \"./src/components/form/MultistepFunction/multistepFunction.scss\");\n/* harmony import */ var _multistepFunction_html_twig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multistepFunction.html.twig */ \"./src/components/form/MultistepFunction/multistepFunction.html.twig\");\n/* harmony import */ var _drupal_multistepFunction_html_twig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drupal/multistepFunction.html.twig */ \"./src/components/form/MultistepFunction/drupal/multistepFunction.html.twig\");\n\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/MultistepFunction/multistepFunction.js?");

/***/ }),

/***/ "./src/components/form/MultivalueField/multivalueField.js":
/*!****************************************************************!*\
  !*** ./src/components/form/MultivalueField/multivalueField.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; },\n/* harmony export */   \"addField\": function() { return /* binding */ addField; },\n/* harmony export */   \"activateMultivalueField\": function() { return /* binding */ activateMultivalueField; },\n/* harmony export */   \"setLabelMappingForInput\": function() { return /* binding */ setLabelMappingForInput; },\n/* harmony export */   \"setLabelMappingForSelect\": function() { return /* binding */ setLabelMappingForSelect; },\n/* harmony export */   \"setLabelMappingForTextarea\": function() { return /* binding */ setLabelMappingForTextarea; },\n/* harmony export */   \"setLabelMappingForRadio\": function() { return /* binding */ setLabelMappingForRadio; }\n/* harmony export */ });\n/* harmony import */ var _multivalueField_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multivalueField.html.twig */ \"./src/components/form/MultivalueField/multivalueField.html.twig\");\n/* harmony import */ var _multivalueField_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multivalueField.scss */ \"./src/components/form/MultivalueField/multivalueField.scss\");\n/* harmony import */ var _components_components_form_MultifieldGroup_multifieldGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/components/form/MultifieldGroup/multifieldGroup */ \"./src/components/form/MultifieldGroup/multifieldGroup.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  var multivalueFields = document.querySelectorAll('.multivalue-field');\n\n  var _iterator = _createForOfIteratorHelper(multivalueFields),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var field = _step.value;\n      var parsedValues = JSON.parse(field.getAttribute('data-values'));\n      var values = Array.isArray(parsedValues) && parsedValues.length ? parsedValues.slice(1) : [];\n\n      var _iterator2 = _createForOfIteratorHelper(values),\n          _step2;\n\n      try {\n        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n          var value = _step2.value;\n          addField(field, value);\n        }\n      } catch (err) {\n        _iterator2.e(err);\n      } finally {\n        _iterator2.f();\n      }\n\n      activateMultivalueField(field);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n}\nfunction addField(scope) {\n  var initialValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n  var wrappers = scope.querySelectorAll('.input-field__wrapper');\n  var wrapper = wrappers[wrappers.length - 1];\n  var clonedEl = wrapper.cloneNode(true);\n  var clonedDeleteButton = clonedEl.querySelector('.multivalue-field__delete-entity');\n\n  if (clonedDeleteButton) {\n    clonedDeleteButton.remove();\n  }\n\n  var clonedInput = clonedEl.querySelector('input');\n  clonedInput.value = initialValue;\n  clonedInput.setAttribute('data-field-name', clonedInput.getAttribute('name').replace('[]', ''));\n  clonedInput.setAttribute('id', (0,uuid__WEBPACK_IMPORTED_MODULE_3__.default)());\n  var multifieldSubGroup = scope.closest('.multifield-group__item');\n\n  if (multifieldSubGroup && multifieldSubGroup.hasAttribute('id')) {\n    clonedInput.setAttribute('data-sub-group-id', multifieldSubGroup.getAttribute('id'));\n    clonedInput.setAttribute('aria-labelledby', multifieldSubGroup.getAttribute('id'));\n  }\n\n  var deleteButton = buildDeleteButton(scope);\n  clonedEl.append(deleteButton);\n  wrapper.parentNode.insertBefore(clonedEl, wrapper.nextSibling);\n  scope.setAttribute('data-count', wrappers.length + 1);\n  return clonedEl;\n}\nfunction activateMultivalueField(scope) {\n  if (scope.hasAttribute('pl-listener-assigned')) {\n    return;\n  }\n\n  var wrapper = scope.querySelector('.input-field__wrapper');\n  var deleteEntity = wrapper.querySelector('.multivalue-field__delete-entity');\n\n  if (deleteEntity) {\n    deleteEntity.remove();\n  }\n\n  var deleteButton = buildDeleteButton(scope);\n  scope.querySelector('.input-field__wrapper').append(deleteButton);\n  scope.querySelector('.multivalue-field__add-entity a').addEventListener('click', function (e) {\n    e.preventDefault();\n    addField(scope, '');\n\n    _toConsumableArray(scope.querySelectorAll('input')).pop().focus();\n\n    (0,_components_components_form_MultifieldGroup_multifieldGroup__WEBPACK_IMPORTED_MODULE_2__.dispatchMultigroupEvent)(e.target);\n  }); // Set mapping between labels and inputs.\n\n  var labels = scope.querySelectorAll('label');\n\n  var _iterator3 = _createForOfIteratorHelper(labels),\n      _step3;\n\n  try {\n    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n      var label = _step3.value;\n      setLabelMappingForInput(label);\n    }\n  } catch (err) {\n    _iterator3.e(err);\n  } finally {\n    _iterator3.f();\n  }\n\n  scope.setAttribute('pl-listener-assigned', '1');\n}\nfunction setLabelMappingForInput(label) {\n  var input = label.closest('.input-field');\n\n  if (input) {\n    var id = (0,uuid__WEBPACK_IMPORTED_MODULE_3__.default)();\n    input.querySelector('input').setAttribute('id', id);\n    label.setAttribute('for', id);\n    label.setAttribute('id', \"\".concat(id, \"-label\"));\n  }\n}\nfunction setLabelMappingForSelect(label) {\n  var select = label.closest('.dropdown');\n\n  if (select) {\n    var id = (0,uuid__WEBPACK_IMPORTED_MODULE_3__.default)();\n    select.querySelector('select').setAttribute('id', id);\n    label.setAttribute('for', id);\n    label.setAttribute('id', \"\".concat(id, \"-label\"));\n  }\n}\nfunction setLabelMappingForTextarea(label) {\n  var textarea = label.closest('.textarea');\n\n  if (textarea) {\n    var id = (0,uuid__WEBPACK_IMPORTED_MODULE_3__.default)();\n    textarea.querySelector('textarea').setAttribute('id', id);\n    label.setAttribute('for', id);\n    label.setAttribute('id', \"\".concat(id, \"-label\"));\n    var description = textarea.querySelector('.textarea__description');\n\n    if (description) {\n      description.setAttribute('id', \"label-\".concat(id));\n      textarea.querySelector('textarea').setAttribute('aria-describedby', \"label-\".concat(id));\n    }\n  }\n}\nfunction setLabelMappingForRadio(label) {\n  var radio = label.closest('.radio__field');\n\n  if (radio) {\n    var id = (0,uuid__WEBPACK_IMPORTED_MODULE_3__.default)();\n    radio.querySelector('input').setAttribute('id', id);\n    label.setAttribute('for', id);\n    label.setAttribute('id', \"label-\".concat(id));\n    var description = radio.closest('.radio').querySelector('.radio__description');\n\n    if (description) {\n      description.setAttribute('id', \"descr-\".concat(id));\n      radio.closest('.radio').setAttribute('aria-describedby', \"descr-\".concat(id));\n    }\n\n    var legend = radio.closest('.radio').querySelector('.radio__legend');\n\n    if (legend) {\n      legend.setAttribute('id', \"legend-\".concat(id));\n    }\n  }\n}\n\nfunction buildDeleteButton(scope) {\n  var deleteButton = document.createElement('a');\n  deleteButton.href = '#';\n  deleteButton.classList.add('multivalue-field__delete-entity');\n  deleteButton.setAttribute('aria-label', 'Delete element');\n  deleteButton.addEventListener('click', function (e) {\n    e.preventDefault();\n    var parent = e.target.parentNode;\n    var group = e.target.closest('.multifield-group');\n    var label = parent.closest('.multivalue-field').querySelector('label');\n    var next = parent.nextSibling;\n\n    if (next && next.nodeName === 'DIV' && next.querySelector('input')) {\n      next.querySelector('input').focus();\n    } else {\n      parent.closest('.multivalue-field').querySelector('.multivalue-field__add-entity a').focus();\n    }\n\n    parent.remove();\n\n    if (group) {\n      (0,_components_components_form_MultifieldGroup_multifieldGroup__WEBPACK_IMPORTED_MODULE_2__.dispatchMultigroupEvent)(group);\n    }\n\n    setLabelMappingForInput(label);\n    scope.setAttribute('data-count', scope.getAttribute('data-count') - 1);\n  });\n  return deleteButton;\n}\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/MultivalueField/multivalueField.js?");

/***/ }),

/***/ "./src/components/form/Radio/radio.js":
/*!********************************************!*\
  !*** ./src/components/form/Radio/radio.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _radio_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radio.html.twig */ \"./src/components/form/Radio/radio.html.twig\");\n/* harmony import */ var _radio_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./radio.scss */ \"./src/components/form/Radio/radio.scss\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/Radio/radio.js?");

/***/ }),

/***/ "./src/components/form/Step/step.js":
/*!******************************************!*\
  !*** ./src/components/form/Step/step.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _step_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./step.html.twig */ \"./src/components/form/Step/step.html.twig\");\n/* harmony import */ var _step_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step.scss */ \"./src/components/form/Step/step.scss\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/Step/step.js?");

/***/ }),

/***/ "./src/components/form/Tabs/tabs.js":
/*!******************************************!*\
  !*** ./src/components/form/Tabs/tabs.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tabs_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.scss */ \"./src/components/form/Tabs/tabs.scss\");\n/* harmony import */ var _tabs_html_twig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.html.twig */ \"./src/components/form/Tabs/tabs.html.twig\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/Tabs/tabs.js?");

/***/ }),

/***/ "./src/components/form/Textarea/textarea.js":
/*!**************************************************!*\
  !*** ./src/components/form/Textarea/textarea.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var _textarea_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textarea.scss */ \"./src/components/form/Textarea/textarea.scss\");\n/* harmony import */ var _textarea_html_twig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textarea.html.twig */ \"./src/components/form/Textarea/textarea.html.twig\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  var textAreas = document.querySelectorAll('.textarea');\n\n  if (!textAreas) {\n    return;\n  }\n\n  textAreas.forEach(function (field) {\n    var charCounter = field.querySelector('.textarea__character-limit__count');\n\n    if (charCounter) {\n      var startingCount = charCounter.innerHTML;\n      var input = field.querySelector('textarea');\n      input.addEventListener('input', function (e) {\n        charCounter.innerHTML = String(parseInt(startingCount) - e.target.value.length);\n      });\n    }\n  });\n}\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/Textarea/textarea.js?");

/***/ }),

/***/ "./src/components/form/TitleAndText/titleAndText.js":
/*!**********************************************************!*\
  !*** ./src/components/form/TitleAndText/titleAndText.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _titleAndText_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./titleAndText.scss */ \"./src/components/form/TitleAndText/titleAndText.scss\");\n/* harmony import */ var _titleAndText_html_twig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./titleAndText.html.twig */ \"./src/components/form/TitleAndText/titleAndText.html.twig\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/TitleAndText/titleAndText.js?");

/***/ }),

/***/ "./src/components/form/ToggleButton/toggleButton.js":
/*!**********************************************************!*\
  !*** ./src/components/form/ToggleButton/toggleButton.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var _toggleButton_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggleButton.scss */ \"./src/components/form/ToggleButton/toggleButton.scss\");\n/* harmony import */ var _toggleButton_html_twig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toggleButton.html.twig */ \"./src/components/form/ToggleButton/toggleButton.html.twig\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  var toggleButtons = document.querySelectorAll('.toggle-button');\n\n  if (!toggleButtons) {\n    return;\n  }\n\n  toggleButtons.forEach(function (toggleButton) {\n    var button = toggleButton.querySelector('button');\n    button.addEventListener('click', function () {\n      var state = button.getAttribute('aria-checked');\n      var isState = state === 'true';\n      button.setAttribute('aria-checked', !isState);\n    });\n  });\n}\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/ToggleButton/toggleButton.js?");

/***/ }),

/***/ "./src/components/form/Tooltip/tooltip.js":
/*!************************************************!*\
  !*** ./src/components/form/Tooltip/tooltip.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var _tooltip_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tooltip.scss */ \"./src/components/form/Tooltip/tooltip.scss\");\n/* harmony import */ var _tooltip_html_twig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tooltip.html.twig */ \"./src/components/form/Tooltip/tooltip.html.twig\");\n/* harmony import */ var _general_GuidancePopup_guidancePopup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../general/GuidancePopup/guidancePopup */ \"./src/components/general/GuidancePopup/guidancePopup.js\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  document.addEventListener('click', activateTooltip);\n  document.addEventListener('click', closeTooltipAfterActivityOutside);\n  document.addEventListener('focusin', closeTooltipAfterActivityOutside);\n}\n\nfunction activateTooltip(e) {\n  var tooltip = e.target.closest('.tooltip');\n\n  if (!tooltip) {\n    return;\n  }\n\n  if (tooltip.hasAttribute('pl-listener-assigned')) {\n    return;\n  }\n\n  e.preventDefault();\n  tooltip.setAttribute('pl-listener-assigned', '1');\n  var questionMark = tooltip.querySelector('.tooltip__question-mark');\n  var closeMark = tooltip.querySelector('.tooltip__close');\n  var guidancePopup = tooltip.querySelector('.guidance-popup');\n  questionMark.addEventListener('click', handleTooltip);\n  closeMark.addEventListener('click', handleTooltip);\n\n  if (guidancePopup) {\n    var openLink = tooltip.querySelector('.tooltip__popup-open');\n    (0,_general_GuidancePopup_guidancePopup__WEBPACK_IMPORTED_MODULE_2__.activatePopup)(openLink, guidancePopup);\n  }\n\n  questionMark.dispatchEvent(new Event('click'));\n}\n\nfunction closeAllTooltips() {\n  var except = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n  var openedTooltips = document.querySelectorAll('.tooltip__body-opened');\n\n  var _iterator = _createForOfIteratorHelper(openedTooltips),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var openedTooltip = _step.value;\n\n      if (except !== openedTooltip) {\n        openedTooltip.classList.remove('tooltip__body-opened');\n      }\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n}\n\nfunction handleTooltip(e) {\n  e.preventDefault();\n  var tooltip = e.target.closest('.tooltip');\n  var body = tooltip.querySelector('.tooltip__body');\n  closeAllTooltips(body); // Used to provide the proper space from left side of a tooltip.\n\n  var oneMobileRem = 16;\n  var oneDesktopRem = 18;\n  var borders = 4;\n  var tooltipWrapper = tooltip.closest('.label-with-tooltip');\n  var parentWidth = tooltipWrapper ? tooltipWrapper.offsetWidth : tooltip.parentNode.offsetWidth;\n\n  if (window.innerWidth < 1024) {\n    body.style.width = \"\".concat(parentWidth - oneMobileRem - borders, \"px\");\n  } else {\n    var minBodyWidth = window.innerWidth < 1440 ? 250 : 350;\n    body.style.maxWidth = \"\".concat(Math.max(minBodyWidth, parentWidth - oneDesktopRem - borders), \"px\");\n  }\n\n  body.classList.toggle('tooltip__body-opened');\n}\n\nfunction closeTooltipAfterActivityOutside(e) {\n  var activeTooltip = document.querySelector('.tooltip__body-opened');\n\n  if (!activeTooltip) {\n    return;\n  }\n\n  var element = e.target.closest('.tooltip');\n\n  if (!element || element !== activeTooltip.closest('.tooltip')) {\n    closeAllTooltips();\n  }\n}\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/Tooltip/tooltip.js?");

/***/ }),

/***/ "./src/components/general/Breadcrumb/breadcrumb.js":
/*!*********************************************************!*\
  !*** ./src/components/general/Breadcrumb/breadcrumb.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var _breadcrumb_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breadcrumb.scss */ \"./src/components/general/Breadcrumb/breadcrumb.scss\");\n/* harmony import */ var _breadcrumbs_html_twig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breadcrumbs.html.twig */ \"./src/components/general/Breadcrumb/breadcrumbs.html.twig\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  // Toggles the expanded class to expand the breadcrumb or not\n  function toggleBreadcrumb(breadcrumb, mobileOverlay) {\n    breadcrumb.classList.toggle('expanded');\n    breadcrumb.classList.toggle('collapsed');\n\n    if (mobileOverlay.ariaExpanded === 'true') {\n      mobileOverlay.setAttribute('aria-expanded', 'false');\n    } else {\n      mobileOverlay.setAttribute('aria-expanded', 'true');\n    }\n  } // Toggles the overflowed class to handle the overflow on the breadcrumb\n  // depending on screensizes\n\n\n  function overflow(breadcrumb, breadcrumbItems, breadcrumbLength) {\n    var arrow = breadcrumb.querySelector('.breadcrumb__mobile-overlay');\n\n    if (breadcrumbLength > breadcrumbItems.clientWidth) {\n      breadcrumb.classList.add('overflowed');\n      arrow.setAttribute('tabindex', 0);\n    } else {\n      breadcrumb.classList.remove('overflowed');\n      arrow.setAttribute('tabindex', -1);\n    }\n  }\n\n  var mobileOverlay = document.querySelector('.breadcrumb__mobile-overlay');\n  var breadcrumb = document.querySelector('.breadcrumb');\n  var breadcrumbItems = document.querySelector('.breadcrumb__items');\n  if (!mobileOverlay && !breadcrumbItems) return; // Calculates the length of the breadcrumb (+ some extra spacing for the separators)\n\n  var breadcrumbLength = 0;\n  var breadcrumbItemList = document.querySelectorAll('.breadcrumb__item');\n  breadcrumbItemList.forEach(function (item) {\n    breadcrumbLength += item.clientWidth;\n  }); // Handles the expanded toggle with both click & keyboard (enter)\n\n  mobileOverlay.addEventListener('click', function (e) {\n    e.preventDefault();\n    e.stopPropagation();\n    toggleBreadcrumb(breadcrumb, mobileOverlay);\n  });\n  mobileOverlay.addEventListener('keyUp', function (e) {\n    var keyCode = e.keyCode ? e.keyCode : e.which;\n\n    if (keyCode === 13) {\n      toggleBreadcrumb(breadcrumb, mobileOverlay);\n    }\n  }); //-- Overflow state\n  // Upon resize, check if the breadcrumb length is bigger than the visible part of the breadcrumb\n\n  window.addEventListener('resize', function () {\n    overflow(breadcrumb, breadcrumbItems, breadcrumbLength);\n  }); // Triggers it once upon first load\n\n  overflow(breadcrumb, breadcrumbItems, breadcrumbLength);\n}\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/Breadcrumb/breadcrumb.js?");

/***/ }),

/***/ "./src/components/general/Button/button.js":
/*!*************************************************!*\
  !*** ./src/components/general/Button/button.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.scss */ \"./src/components/general/Button/button.scss\");\n/* harmony import */ var _button_html_twig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button.html.twig */ \"./src/components/general/Button/button.html.twig\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/Button/button.js?");

/***/ }),

/***/ "./src/components/general/CookieBanner/cookieBanner.js":
/*!*************************************************************!*\
  !*** ./src/components/general/CookieBanner/cookieBanner.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var _cookieBanner_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cookieBanner.html.twig */ \"./src/components/general/CookieBanner/cookieBanner.html.twig\");\n/* harmony import */ var _cookieBanner_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cookieBanner.scss */ \"./src/components/general/CookieBanner/cookieBanner.scss\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers */ \"./src/helpers.js\");\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  function callback() {\n    var acceptButton = document.querySelector('.cookie-banner__accept');\n    if (!acceptButton) return;\n    acceptButton.addEventListener('click', function () {\n      var cookieBanner = document.querySelector('.cookie-banner');\n\n      if (cookieBanner) {\n        cookieBanner.classList.add('cookie-banner--hidden');\n      }\n    });\n  }\n\n  return (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.domContentLoadedWrapper)(callback);\n}\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/CookieBanner/cookieBanner.js?");

/***/ }),

/***/ "./src/components/general/DropdownMenu/dropdownMenu.js":
/*!*************************************************************!*\
  !*** ./src/components/general/DropdownMenu/dropdownMenu.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var _dropdownMenu_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdownMenu.scss */ \"./src/components/general/DropdownMenu/dropdownMenu.scss\");\n/* harmony import */ var _dropdownMenu_html_twig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdownMenu.html.twig */ \"./src/components/general/DropdownMenu/dropdownMenu.html.twig\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  var dropdowns = document.querySelectorAll('.dropdown-menu__label');\n\n  if (!dropdowns.length) {\n    return;\n  }\n\n  var _iterator = _createForOfIteratorHelper(dropdowns),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var dropdown = _step.value;\n      dropdown.addEventListener('click', function (e) {\n        e.preventDefault();\n        var openedList = document.querySelector('.dropdown-menu__options-open');\n        var options = e.target.closest('.dropdown-menu').querySelector('.dropdown-menu__options');\n\n        if (options && openedList && !options.classList.contains('dropdown-menu__options-open')) {\n          openedList.classList.remove('dropdown-menu__options-open');\n        }\n\n        options.classList.toggle('dropdown-menu__options-open');\n      });\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  document.addEventListener('click', hideUnfocusedDropdowns);\n  document.addEventListener('keyup', function (e) {\n    if (e.key === 'Tab') {\n      hideUnfocusedDropdowns(e);\n    }\n  });\n}\n\nfunction hideUnfocusedDropdowns(e) {\n  if (e.target.closest('.dropdown-menu') === null) {\n    var openedList = document.querySelector('.dropdown-menu__options-open');\n\n    if (openedList) {\n      openedList.classList.remove('dropdown-menu__options-open');\n    }\n  }\n}\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/DropdownMenu/dropdownMenu.js?");

/***/ }),

/***/ "./src/components/general/ErrorResponse/errorResponse.js":
/*!***************************************************************!*\
  !*** ./src/components/general/ErrorResponse/errorResponse.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _errorResponse_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errorResponse.html.twig */ \"./src/components/general/ErrorResponse/errorResponse.html.twig\");\n/* harmony import */ var _errorResponse_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errorResponse.scss */ \"./src/components/general/ErrorResponse/errorResponse.scss\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/ErrorResponse/errorResponse.js?");

/***/ }),

/***/ "./src/components/general/ExternalLink/externalLink.js":
/*!*************************************************************!*\
  !*** ./src/components/general/ExternalLink/externalLink.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _externalLink_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./externalLink.scss */ \"./src/components/general/ExternalLink/externalLink.scss\");\n/* harmony import */ var _externalLink_html_twig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./externalLink.html.twig */ \"./src/components/general/ExternalLink/externalLink.html.twig\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/ExternalLink/externalLink.js?");

/***/ }),

/***/ "./src/components/general/Feedback/feedback.js":
/*!*****************************************************!*\
  !*** ./src/components/general/Feedback/feedback.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var _feedback_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feedback.html.twig */ \"./src/components/general/Feedback/feedback.html.twig\");\n/* harmony import */ var _feedback_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feedback.scss */ \"./src/components/general/Feedback/feedback.scss\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers */ \"./src/helpers.js\");\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  function callback() {\n    var feedback = document.querySelector('.feedback');\n    if (!feedback) return;\n\n    function showThanks(e) {\n      e.preventDefault();\n      feedback.classList.add('feedback--thank');\n      feedback.classList.remove('feedback--form');\n    }\n\n    function showForm(e) {\n      e.preventDefault();\n      feedback.classList.add('feedback--form');\n      feedback.classList.remove('feedback--thank');\n    }\n\n    function showQuestions(e) {\n      e.preventDefault();\n      feedback.classList.remove('feedback--form');\n      feedback.classList.remove('feedback--thank');\n    }\n\n    function addButtonListener(buttonSelector, listener) {\n      var button = feedback.querySelector(buttonSelector);\n\n      if (button) {\n        button.addEventListener('click', listener);\n      }\n    }\n\n    addButtonListener('.feedback__yes', showThanks);\n    addButtonListener('.feedback__no', showForm);\n    addButtonListener('.feedback__report-button', showForm);\n    addButtonListener('.feedback__close', showQuestions);\n    addButtonListener('.feedback__submit', showThanks);\n  }\n\n  return (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.domContentLoadedWrapper)(callback);\n}\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/Feedback/feedback.js?");

/***/ }),

/***/ "./src/components/general/Footer/footer.js":
/*!*************************************************!*\
  !*** ./src/components/general/Footer/footer.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.scss */ \"./src/components/general/Footer/footer.scss\");\n/* harmony import */ var _footer_html_twig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.html.twig */ \"./src/components/general/Footer/footer.html.twig\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/Footer/footer.js?");

/***/ }),

/***/ "./src/components/general/GuidancePopup/guidancePopup.js":
/*!***************************************************************!*\
  !*** ./src/components/general/GuidancePopup/guidancePopup.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; },\n/* harmony export */   \"activatePopup\": function() { return /* binding */ activatePopup; }\n/* harmony export */ });\n/* harmony import */ var _guidancePopup_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guidancePopup.scss */ \"./src/components/general/GuidancePopup/guidancePopup.scss\");\n/* harmony import */ var _guidancePopup_html_twig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guidancePopup.html.twig */ \"./src/components/general/GuidancePopup/guidancePopup.html.twig\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  document.addEventListener('keydown', function (e) {\n    if (e.key !== 'Escape') {\n      return;\n    }\n\n    document.querySelector('html').style.overflow = 'auto';\n    var popups = document.querySelectorAll('.guidance-popup__opened');\n\n    var _iterator = _createForOfIteratorHelper(popups),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var popup = _step.value;\n        popup.classList.remove('guidance-popup__opened');\n        popup.classList.remove('guidance-popup__compact');\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  });\n}\nfunction activatePopup(sourceElement, popup) {\n  sourceElement.addEventListener('click', function (e) {\n    e.preventDefault();\n    popup.classList.add('guidance-popup__opened');\n    var adminToolbar = document.getElementById('toolbar-bar');\n\n    if (adminToolbar) {\n      popup.classList.add('guidance-popup__compact');\n    }\n\n    document.querySelector('html').style.overflow = 'hidden';\n  });\n  popup.querySelector('.guidance-popup__close').addEventListener('click', function (e) {\n    e.preventDefault();\n    var popup = e.target.closest('.guidance-popup');\n    popup.classList.remove('guidance-popup__opened');\n    popup.classList.remove('guidance-popup__compact');\n    document.querySelector('html').style.overflow = 'auto';\n  });\n}\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/GuidancePopup/guidancePopup.js?");

/***/ }),

/***/ "./src/components/general/Header/header.js":
/*!*************************************************!*\
  !*** ./src/components/general/Header/header.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var _header_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.html.twig */ \"./src/components/general/Header/header.html.twig\");\n/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.scss */ \"./src/components/general/Header/header.scss\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  var menuButton = document.querySelector('.header__menu');\n  if (!menuButton) return;\n  var body = document.body;\n  menuButton.addEventListener('click', toggleButton);\n\n  function toggleButton() {\n    var expanded = menuButton.getAttribute('aria-expanded');\n\n    if (expanded === 'true') {\n      menuButton.setAttribute('aria-expanded', 'false');\n      body.classList.remove('lock-scroll');\n    } else {\n      menuButton.setAttribute('aria-expanded', 'true');\n      body.classList.add('lock-scroll');\n    }\n\n    var header = menuButton.closest('.header');\n    header.classList.toggle('header--expanded');\n  }\n}\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/Header/header.js?");

/***/ }),

/***/ "./src/components/general/Hero/hero.js":
/*!*********************************************!*\
  !*** ./src/components/general/Hero/hero.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hero_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero.scss */ \"./src/components/general/Hero/hero.scss\");\n/* harmony import */ var _hero_html_twig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero.html.twig */ \"./src/components/general/Hero/hero.html.twig\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/Hero/hero.js?");

/***/ }),

/***/ "./src/components/general/Link/link.js":
/*!*********************************************!*\
  !*** ./src/components/general/Link/link.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _link_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./link.html.twig */ \"./src/components/general/Link/link.html.twig\");\n/* harmony import */ var _link_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link.scss */ \"./src/components/general/Link/link.scss\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/Link/link.js?");

/***/ }),

/***/ "./src/components/general/MailLink/mailLink.js":
/*!*****************************************************!*\
  !*** ./src/components/general/MailLink/mailLink.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mailLink_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mailLink.html.twig */ \"./src/components/general/MailLink/mailLink.html.twig\");\n/* harmony import */ var _mailLink_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mailLink.scss */ \"./src/components/general/MailLink/mailLink.scss\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/MailLink/mailLink.js?");

/***/ }),

/***/ "./src/components/general/NationalArchiveLink/nationalArchiveLink.js":
/*!***************************************************************************!*\
  !*** ./src/components/general/NationalArchiveLink/nationalArchiveLink.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nationalArchiveLink_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nationalArchiveLink.html.twig */ \"./src/components/general/NationalArchiveLink/nationalArchiveLink.html.twig\");\n/* harmony import */ var _nationalArchiveLink_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nationalArchiveLink.scss */ \"./src/components/general/NationalArchiveLink/nationalArchiveLink.scss\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/NationalArchiveLink/nationalArchiveLink.js?");

/***/ }),

/***/ "./src/components/general/Navigation/navigation-accessibility.js":
/*!***********************************************************************!*\
  !*** ./src/components/general/Navigation/navigation-accessibility.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMode\": function() { return /* binding */ getMode; },\n/* harmony export */   \"menuFocus\": function() { return /* binding */ menuFocus; },\n/* harmony export */   \"subMenuFocus\": function() { return /* binding */ subMenuFocus; },\n/* harmony export */   \"menuArrows\": function() { return /* binding */ menuArrows; },\n/* harmony export */   \"subMenuArrows\": function() { return /* binding */ subMenuArrows; },\n/* harmony export */   \"blurBackground\": function() { return /* binding */ blurBackground; }\n/* harmony export */ });\n/* harmony import */ var _components_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/helpers */ \"./src/helpers.js\");\n\nvar navigation;\n\nfunction callback() {\n  navigation = document.querySelector('#navigation');\n}\n\nif (document.readyState === 'loading') {\n  (0,_components_helpers__WEBPACK_IMPORTED_MODULE_0__.domContentLoadedWrapper)(callback);\n} else {\n  navigation = document.querySelector('#navigation');\n}\n\nvar focusableElements = 'a[href], button:not(.navigation__group-title--mobile), input:not(.js-form-submit), select, textarea, [tabindex]:not([tabindex=\"-1\"])';\n\nfunction getMode() {\n  return window.innerWidth < 1024 ? 'mobile' : 'desktop';\n}\n\nfunction menuFocus(direction, event, link, classes) {\n  var submenu = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;\n  var button = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;\n\n  if (direction === 'out') {\n    if (link.contains(event.relatedTarget)) {\n      return;\n    }\n\n    link.classList.remove(classes.linkOpen);\n    button.setAttribute('aria-expanded', 'false');\n\n    if (submenu) {\n      submenu.classList.remove(classes.subMenuOpen);\n      blurBackground(navigation);\n    }\n  }\n\n  if (direction === 'in') {\n    link.addEventListener('keydown', function (e) {\n      if (e.keyCode === 27) {\n        link.classList.remove(classes.linkOpen);\n        button.setAttribute('aria-expanded', 'false');\n\n        if (submenu) {\n          submenu.classList.remove(classes.subMenuOpen);\n          blurBackground(navigation);\n        }\n      }\n    });\n  }\n}\n\nfunction resetArrows() {\n  var arrows = document.querySelectorAll('.navigation__link__arrow--flipped');\n  arrows.forEach(function (arrow) {\n    arrow.classList.remove('navigation__link__arrow--flipped');\n  });\n}\n\nfunction subMenuFocus(direction, event, link, classes) {\n  var parent = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;\n  var submenu = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;\n\n  if (direction === 'out') {\n    if (parent.contains(event.relatedTarget)) {\n      return;\n    }\n\n    link.classList.remove(classes.linkOpen);\n    link.setAttribute('aria-expanded', 'false');\n    resetArrows();\n\n    if (submenu) {\n      submenu.classList.remove(classes.subMenuOpen);\n      blurBackground(navigation);\n    }\n  }\n\n  if (direction === 'in') {\n    link.addEventListener('keydown', function (e) {\n      if (e.keyCode === 27) {\n        link.classList.remove(classes.linkOpen);\n        link.setAttribute('aria-expanded', 'false');\n\n        if (submenu) {\n          submenu.classList.remove(classes.subMenuOpen);\n          blurBackground(navigation);\n        }\n      }\n    });\n  }\n}\n\nfunction prevAll(element) {\n  var result = [];\n  element = element.previousElementSibling;\n\n  while (element) {\n    result.push(element);\n    element = element.previousElementSibling;\n  }\n\n  return result;\n}\n\nfunction nextAll(element) {\n  var result = [];\n  element = element.nextElementSibling;\n\n  while (element) {\n    result.push(element);\n    element = element.nextElementSibling;\n  }\n\n  return result;\n}\n\nfunction menuArrows(links) {\n  links.forEach(function (link) {\n    var primarySubMenu = link.querySelector('.navigation__submenu');\n    var prev = [];\n    var next = [];\n    link.addEventListener('keydown', function (e) {\n      if ([37, 38, 39, 40].indexOf(e.keyCode) === -1) {\n        return;\n      } // Make sure to stop event bubbling\n\n\n      e.preventDefault();\n      e.stopPropagation();\n\n      switch (e.keyCode) {\n        case 37:\n          // left arrow\n          // This is the first item in the top level mega menu list\n          // Focus on the previous item in the top level\n          prev = prevAll(link)[0];\n\n          if (prev && getMode() === 'desktop') {\n            if (prev.querySelector('button')) {\n              prev.querySelector('button').focus();\n            } else {\n              prev.querySelector('a').focus();\n            }\n\n            var submenu = prev.querySelector('.navigation__submenu'); //open submenu\n\n            if (submenu) {\n              prev.classList.add('navigation__link--open');\n              submenu.classList.add('navigation__submenu--expanded');\n              blurBackground(navigation);\n            }\n          }\n\n          break;\n\n        case 39:\n          // right arrow\n          // Focus on the next item in the top level\n          next = nextAll(link)[0];\n\n          if (next && getMode() === 'desktop') {\n            next.querySelector('button').focus();\n\n            var _submenu = next.querySelector('.navigation__submenu');\n\n            if (_submenu) {\n              next.classList.add('navigation__link--open');\n\n              _submenu.classList.add('navigation__submenu--expanded');\n\n              blurBackground(navigation);\n            }\n          }\n\n          break;\n\n        case 40:\n          // down arrow\n          // If there is a UL available, place focus on the first focusable element within\n          next = nextAll(link)[0];\n\n          if (primarySubMenu && getMode() === 'desktop') {\n            link.classList.add('navigation__link--open');\n            primarySubMenu.classList.add('navigation__submenu--expanded');\n            primarySubMenu.querySelectorAll(focusableElements)[0].focus();\n            blurBackground(navigation);\n          }\n\n          break;\n      }\n    });\n  });\n}\n\nfunction subMenuArrows(group) {\n  var links = group.querySelectorAll('.navigation__link');\n  var parentButton = group.parentNode.previousSibling.previousSibling;\n  var firstElement = group.parentNode.querySelector('.navigation__group >  .navigation__menu-wrapper > .navigation__menu > .navigation__link > a');\n  var submenu = group.parentNode;\n  var parentLink = group.parentNode.parentNode;\n  links.forEach(function (link) {\n    link.addEventListener('keydown', function (e) {\n      if ([37, 38, 39, 40].indexOf(e.keyCode) === -1) {\n        return;\n      } // Make sure to stop event bubbling\n\n\n      e.preventDefault();\n      e.stopPropagation();\n\n      switch (e.keyCode) {\n        case 37:\n          // left arrow\n          if (prevAll(group)[0]) {\n            prevAll(group)[0].querySelector('.navigation__menu > .navigation__link > a').focus();\n          }\n\n          break;\n\n        case 39:\n          // right arrow\n          if (nextAll(group)[0]) {\n            nextAll(group)[0].querySelector('.navigation__menu > .navigation__link > a').focus();\n          }\n\n          break;\n\n        case 38:\n          /// up arrow\n          if (link.querySelector('a') === firstElement) {\n            parentButton.focus();\n            parentLink.classList.remove('navigation__link--open');\n            submenu.classList.remove('navigation__submenu--expanded');\n            blurBackground(navigation);\n          } else if (prevAll(link)[0]) {\n            prevAll(link)[0].querySelector('a').focus();\n          } else if (prevAll(group)[0]) {\n            var sibLinks = prevAll(group)[0].querySelectorAll('.navigation__menu > .navigation__link > a');\n            sibLinks[sibLinks.length - 1].focus();\n          }\n\n          break;\n\n        case 40:\n          // down arrow\n          if (nextAll(link)[0]) {\n            nextAll(link)[0].querySelector('a').focus();\n          } else if (nextAll(group)[0]) {\n            var _sibLinks = nextAll(group)[0].querySelectorAll('.navigation__menu > .navigation__link > a');\n\n            _sibLinks[0].focus();\n          }\n\n          break;\n      }\n    });\n  });\n}\n\nfunction blurBackground(navigation) {\n  var mode = getMode();\n\n  if (mode === 'desktop') {\n    var backgroundBlur = navigation.querySelector('.navigation__background-blur');\n    var body = document.body;\n    var html = document.documentElement; // Height of page\n\n    var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight); // Navigation distance from top\n\n    var distanceFromTop = window.pageYOffset + navigation.getBoundingClientRect().top;\n    var navHeight = navigation.offsetHeight;\n\n    if (navigation.querySelector('.navigation__submenu--expanded')) {\n      backgroundBlur.classList.add('navigation__background-blur--blurred');\n      backgroundBlur.style.height = height - distanceFromTop - navHeight + 'px';\n    } else {\n      backgroundBlur.classList.remove('navigation__background-blur--blurred');\n    }\n  }\n}\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/Navigation/navigation-accessibility.js?");

/***/ }),

/***/ "./src/components/general/Navigation/navigation.js":
/*!*********************************************************!*\
  !*** ./src/components/general/Navigation/navigation.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var _navigation_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation.html.twig */ \"./src/components/general/Navigation/navigation.html.twig\");\n/* harmony import */ var _navigation_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation.scss */ \"./src/components/general/Navigation/navigation.scss\");\n/* harmony import */ var _navigation_accessibility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation-accessibility */ \"./src/components/general/Navigation/navigation-accessibility.js\");\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  var navigation = document.querySelector('#navigation');\n\n  if (!navigation) {\n    return;\n  } // Set initial window size\n\n\n  var mode = (0,_navigation_accessibility__WEBPACK_IMPORTED_MODULE_2__.getMode)();\n\n  function setRole(menuWrappers, mode) {\n    menuWrappers.forEach(function (menuWrapper) {\n      if (mode === 'desktop') {\n        menuWrapper.setAttribute('role', '');\n      } else {\n        menuWrapper.setAttribute('role', 'region');\n      }\n    });\n  } // Set appropriate roles\n\n\n  var menuWrappers = document.querySelectorAll('.navigation__menu-wrapper');\n  setRole(menuWrappers, mode); // Update window size on resize\n\n  window.addEventListener('resize', function () {\n    mode = (0,_navigation_accessibility__WEBPACK_IMPORTED_MODULE_2__.getMode)();\n    setRole(menuWrappers, mode);\n  }); // Blur the background when clicking on the navigation menu\n\n  navigation.addEventListener('click', function () {\n    (0,_navigation_accessibility__WEBPACK_IMPORTED_MODULE_2__.blurBackground)(navigation);\n  });\n  navigation.addEventListener('focusout', function () {\n    (0,_navigation_accessibility__WEBPACK_IMPORTED_MODULE_2__.blurBackground)(navigation);\n  }); //Get top level menu\n\n  var topLevel = navigation.querySelector('.navigation__menu--level-1');\n\n  if (!topLevel) {\n    return;\n  } // Get all top level links\n\n\n  var topLevelLinks = topLevel.querySelectorAll('.navigation__menu--level-1 > .navigation__link');\n\n  if (!topLevelLinks) {\n    return;\n  } // Initialise arrow navigation\n\n\n  (0,_navigation_accessibility__WEBPACK_IMPORTED_MODULE_2__.menuArrows)(topLevelLinks); // Handle top level menu opening\n\n  topLevelLinks.forEach(function (link) {\n    var submenu = link.querySelector('.navigation__submenu');\n\n    if (submenu) {\n      var button = link.querySelector('button');\n      button.addEventListener('click', function () {\n        navigation.querySelectorAll('.navigation-link--open').forEach(function (openItem) {\n          if (openItem !== link) {\n            openItem.classList.remove('navigation-link--open');\n            var toggle = openItem.querySelector('button');\n\n            if (toggle) {\n              toggle.setAttribute('aria-expanded', 'false');\n            }\n          }\n        });\n        submenu.classList.toggle('navigation__submenu--expanded');\n        submenu.setAttribute('aria-modal', 'true');\n        button.setAttribute('aria-expanded', 'true');\n        link.classList.toggle('navigation__link--open');\n      });\n      var classes = {\n        linkOpen: 'navigation__link--open',\n        subMenuOpen: 'navigation__submenu--expanded'\n      };\n      link.addEventListener('focusout', function (event) {\n        (0,_navigation_accessibility__WEBPACK_IMPORTED_MODULE_2__.menuFocus)('out', event, link, classes, submenu, button);\n      });\n      link.addEventListener('focusin', function (event) {\n        (0,_navigation_accessibility__WEBPACK_IMPORTED_MODULE_2__.menuFocus)('in', event, link, classes, submenu, button);\n      });\n    }\n  }); // Get all second level links\n\n  var secondLevel = navigation.querySelectorAll('.navigation__submenu');\n\n  if (!secondLevel) {\n    return;\n  } // Handle submenu opening and navigation\n\n\n  secondLevel.forEach(function (submenu) {\n    // Need to do this for each group\n    var groups = submenu.querySelectorAll('.navigation__group');\n    groups.forEach(function (group) {\n      var title = group.querySelector('.navigation__group-title--mobile');\n      var thirdLevel = group.querySelector('.navigation__menu'); // Init submenu arrows\n\n      (0,_navigation_accessibility__WEBPACK_IMPORTED_MODULE_2__.subMenuArrows)(group);\n\n      if (title) {\n        var arrow = title.querySelector('.navigation__link__arrow');\n        title.addEventListener('click', function () {\n          thirdLevel.classList.toggle('navigation__menu--level-2--expanded');\n          arrow.classList.toggle('navigation__link__arrow--flipped');\n        });\n        var classes = {\n          linkOpen: 'navigation__link--open',\n          subMenuOpen: 'navigation__menu--level-2--expanded'\n        };\n        group.addEventListener('focusout', function (event) {\n          (0,_navigation_accessibility__WEBPACK_IMPORTED_MODULE_2__.subMenuFocus)('out', event, title, classes, group, thirdLevel);\n        });\n        group.addEventListener('focusin', function (event) {\n          (0,_navigation_accessibility__WEBPACK_IMPORTED_MODULE_2__.subMenuFocus)('in', event, title, classes, group, thirdLevel);\n        });\n      }\n    });\n  });\n}\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/Navigation/navigation.js?");

/***/ }),

/***/ "./src/components/general/SiteMap/siteMap.js":
/*!***************************************************!*\
  !*** ./src/components/general/SiteMap/siteMap.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _siteMap_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./siteMap.html.twig */ \"./src/components/general/SiteMap/siteMap.html.twig\");\n/* harmony import */ var _siteMap_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./siteMap.scss */ \"./src/components/general/SiteMap/siteMap.scss\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/SiteMap/siteMap.js?");

/***/ }),

/***/ "./src/components/general/SkipToMainContent/skipToMainContent.js":
/*!***********************************************************************!*\
  !*** ./src/components/general/SkipToMainContent/skipToMainContent.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _skipToMainContent_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skipToMainContent.html.twig */ \"./src/components/general/SkipToMainContent/skipToMainContent.html.twig\");\n/* harmony import */ var _skipToMainContent_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skipToMainContent.scss */ \"./src/components/general/SkipToMainContent/skipToMainContent.scss\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/SkipToMainContent/skipToMainContent.js?");

/***/ }),

/***/ "./src/components/general/TemporaryMessage/temporaryMessage.js":
/*!*********************************************************************!*\
  !*** ./src/components/general/TemporaryMessage/temporaryMessage.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _temporaryMessage_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./temporaryMessage.html.twig */ \"./src/components/general/TemporaryMessage/temporaryMessage.html.twig\");\n/* harmony import */ var _temporaryMessage_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./temporaryMessage.scss */ \"./src/components/general/TemporaryMessage/temporaryMessage.scss\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/TemporaryMessage/temporaryMessage.js?");

/***/ }),

/***/ "./src/components/haccp/SaveProgress/saveProgress.js":
/*!***********************************************************!*\
  !*** ./src/components/haccp/SaveProgress/saveProgress.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _saveProgress_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saveProgress.html.twig */ \"./src/components/haccp/SaveProgress/saveProgress.html.twig\");\n/* harmony import */ var _saveProgress_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saveProgress.scss */ \"./src/components/haccp/SaveProgress/saveProgress.scss\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/haccp/SaveProgress/saveProgress.js?");

/***/ }),

/***/ "./src/components/haccp/WebToolProgressBar/webToolProgressBar.js":
/*!***********************************************************************!*\
  !*** ./src/components/haccp/WebToolProgressBar/webToolProgressBar.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var _webToolProgressBar_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webToolProgressBar.html.twig */ \"./src/components/haccp/WebToolProgressBar/webToolProgressBar.html.twig\");\n/* harmony import */ var _webToolProgressBar_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webToolProgressBar.scss */ \"./src/components/haccp/WebToolProgressBar/webToolProgressBar.scss\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  var labels = document.querySelectorAll('.webtool-progress-bar__label');\n\n  var _iterator = _createForOfIteratorHelper(labels),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var label = _step.value;\n\n      if (!label.hasAttribute('pl-listener-assigned')) {\n        label.setAttribute('pl-listener-assigned', '1');\n        label.addEventListener('click', function (e) {\n          e.preventDefault();\n          var parentLine = e.target.closest('.webtool-progress-bar__line');\n          var isOpened = parentLine.classList.contains('webtool-progress-bar__line-opened');\n          var lines = e.target.closest('.webtool-progress-bar').querySelectorAll('.webtool-progress-bar__line');\n\n          var _iterator2 = _createForOfIteratorHelper(lines),\n              _step2;\n\n          try {\n            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n              var line = _step2.value;\n              line.classList.remove('webtool-progress-bar__line-opened');\n            }\n          } catch (err) {\n            _iterator2.e(err);\n          } finally {\n            _iterator2.f();\n          }\n\n          if (isOpened) {\n            return;\n          }\n\n          parentLine.classList.add('webtool-progress-bar__line-opened');\n        });\n      }\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n}\n\n//# sourceURL=webpack://fsa-design-system/./src/components/haccp/WebToolProgressBar/webToolProgressBar.js?");

/***/ }),

/***/ "./src/components/haccp/WebToolStudiesTable/webToolStudiesTable.js":
/*!*************************************************************************!*\
  !*** ./src/components/haccp/WebToolStudiesTable/webToolStudiesTable.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _webToolStudiesTable_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webToolStudiesTable.html.twig */ \"./src/components/haccp/WebToolStudiesTable/webToolStudiesTable.html.twig\");\n/* harmony import */ var _webToolStudiesTable_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webToolStudiesTable.scss */ \"./src/components/haccp/WebToolStudiesTable/webToolStudiesTable.scss\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/haccp/WebToolStudiesTable/webToolStudiesTable.js?");

/***/ }),

/***/ "./src/components/landing/CampaignBlock/campaignBlock.js":
/*!***************************************************************!*\
  !*** ./src/components/landing/CampaignBlock/campaignBlock.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _campaignBlock_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./campaignBlock.html.twig */ \"./src/components/landing/CampaignBlock/campaignBlock.html.twig\");\n/* harmony import */ var _campaignBlock_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./campaignBlock.scss */ \"./src/components/landing/CampaignBlock/campaignBlock.scss\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/landing/CampaignBlock/campaignBlock.js?");

/***/ }),

/***/ "./src/components/landing/LandingLinks/landingLinks.js":
/*!*************************************************************!*\
  !*** ./src/components/landing/LandingLinks/landingLinks.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _landingLinks_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landingLinks.scss */ \"./src/components/landing/LandingLinks/landingLinks.scss\");\n/* harmony import */ var _landingLinks_html_twig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landingLinks.html.twig */ \"./src/components/landing/LandingLinks/landingLinks.html.twig\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/landing/LandingLinks/landingLinks.js?");

/***/ }),

/***/ "./src/components/landing/LandingText/landingText.js":
/*!***********************************************************!*\
  !*** ./src/components/landing/LandingText/landingText.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _landingText_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landingText.html.twig */ \"./src/components/landing/LandingText/landingText.html.twig\");\n/* harmony import */ var _landingText_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landingText.scss */ \"./src/components/landing/LandingText/landingText.scss\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/landing/LandingText/landingText.js?");

/***/ }),

/***/ "./src/components/landing/LandingTitle/landingTitle.js":
/*!*************************************************************!*\
  !*** ./src/components/landing/LandingTitle/landingTitle.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _landingTitle_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landingTitle.html.twig */ \"./src/components/landing/LandingTitle/landingTitle.html.twig\");\n/* harmony import */ var _landingTitle_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landingTitle.scss */ \"./src/components/landing/LandingTitle/landingTitle.scss\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/landing/LandingTitle/landingTitle.js?");

/***/ }),

/***/ "./src/components/landing/LargePromoGroup/largePromoGroup.js":
/*!*******************************************************************!*\
  !*** ./src/components/landing/LargePromoGroup/largePromoGroup.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _largePromoGroup_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./largePromoGroup.scss */ \"./src/components/landing/LargePromoGroup/largePromoGroup.scss\");\n/* harmony import */ var _largePromoGroup_html_twig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./largePromoGroup.html.twig */ \"./src/components/landing/LargePromoGroup/largePromoGroup.html.twig\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/landing/LargePromoGroup/largePromoGroup.js?");

/***/ }),

/***/ "./src/components/landing/LatestTeaser/latestTeaser.js":
/*!*************************************************************!*\
  !*** ./src/components/landing/LatestTeaser/latestTeaser.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _latestTeaser_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./latestTeaser.html.twig */ \"./src/components/landing/LatestTeaser/latestTeaser.html.twig\");\n/* harmony import */ var _latestTeaser_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./latestTeaser.scss */ \"./src/components/landing/LatestTeaser/latestTeaser.scss\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/landing/LatestTeaser/latestTeaser.js?");

/***/ }),

/***/ "./src/components/landing/PromoGroup/promoGroup.js":
/*!*********************************************************!*\
  !*** ./src/components/landing/PromoGroup/promoGroup.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var _promoGroup_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promoGroup.html.twig */ \"./src/components/landing/PromoGroup/promoGroup.html.twig\");\n/* harmony import */ var _promoGroup_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./promoGroup.scss */ \"./src/components/landing/PromoGroup/promoGroup.scss\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  window.addEventListener('DOMContentLoaded', function () {\n    var cards = document.querySelectorAll('.promo-group__card--one-link');\n    if (!cards.length) return; //Make the whole card clickable\n\n    function makeClickable(card) {\n      var link = card.querySelector('.promo-group__title-link');\n      if (!link) return;\n\n      card.onclick = function () {\n        link.click();\n      };\n    }\n\n    cards.forEach(function (card) {\n      makeClickable(card);\n\n      if (card.classList.contains('promo-group__card--one-link') && card.querySelector('.external-link')) {\n        card.classList.add('promo-group__card--external');\n      }\n    });\n  });\n}\n\n//# sourceURL=webpack://fsa-design-system/./src/components/landing/PromoGroup/promoGroup.js?");

/***/ }),

/***/ "./src/components/landing/ServiceLinks/serviceLinks.js":
/*!*************************************************************!*\
  !*** ./src/components/landing/ServiceLinks/serviceLinks.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _serviceLinks_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./serviceLinks.html.twig */ \"./src/components/landing/ServiceLinks/serviceLinks.html.twig\");\n/* harmony import */ var _serviceLinks_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serviceLinks.scss */ \"./src/components/landing/ServiceLinks/serviceLinks.scss\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/landing/ServiceLinks/serviceLinks.js?");

/***/ }),

/***/ "./src/components/landing/TitleAndDescription/titleAndDescription.js":
/*!***************************************************************************!*\
  !*** ./src/components/landing/TitleAndDescription/titleAndDescription.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _titleAndDescription_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./titleAndDescription.html.twig */ \"./src/components/landing/TitleAndDescription/titleAndDescription.html.twig\");\n/* harmony import */ var _titleAndDescription_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./titleAndDescription.scss */ \"./src/components/landing/TitleAndDescription/titleAndDescription.scss\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/landing/TitleAndDescription/titleAndDescription.js?");

/***/ }),

/***/ "./src/components/multipageguide/GuideHero/guideHero.js":
/*!**************************************************************!*\
  !*** ./src/components/multipageguide/GuideHero/guideHero.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _guideHero_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guideHero.scss */ \"./src/components/multipageguide/GuideHero/guideHero.scss\");\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/multipageguide/GuideHero/guideHero.js?");

/***/ }),

/***/ "./src/components/multipageguide/Pagination/pagination.js":
/*!****************************************************************!*\
  !*** ./src/components/multipageguide/Pagination/pagination.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pagination_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagination.html.twig */ \"./src/components/multipageguide/Pagination/pagination.html.twig\");\n/* harmony import */ var _pagination_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagination.scss */ \"./src/components/multipageguide/Pagination/pagination.scss\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/multipageguide/Pagination/pagination.js?");

/***/ }),

/***/ "./src/components/search/Accordion/accordion.js":
/*!******************************************************!*\
  !*** ./src/components/search/Accordion/accordion.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var _accordion_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordion.html.twig */ \"./src/components/search/Accordion/accordion.html.twig\");\n/* harmony import */ var _accordion_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordion.scss */ \"./src/components/search/Accordion/accordion.scss\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  var accordions = document.querySelectorAll('.accordion');\n\n  if (!accordions) {\n    return;\n  } //Update the 'x selected description for the accordion passed in as first arg\n\n\n  function updateDesc(accordion) {\n    var remainingCheckboxes = accordion.querySelectorAll('.accordion__input');\n    var numChecked = Array.from(remainingCheckboxes).filter(function (checkbox) {\n      return checkbox.checked;\n    }).length;\n    var descriptionElement = accordion.querySelector('.accordion__description');\n    var description = numChecked + ' ' + descriptionElement.dataset.selected;\n    descriptionElement.textContent = numChecked ? description : '';\n  } //Update description when checking checkboxes\n\n\n  function updateDescOnClick(e) {\n    var accordion = e.target.closest('.accordion');\n    updateDesc(accordion);\n  } //Toggle accordion\n\n\n  function toggleAccordion(e) {\n    var currentButton = e.target; // Click on the label instead of the button itself\n\n    if (currentButton.classList.contains('accordion__title-text')) {\n      currentButton = currentButton.closest('.accordion__button');\n    }\n\n    currentButton.classList.toggle('accordion__button--expanded');\n    var isExpanded = currentButton.getAttribute('aria-expanded');\n\n    if (isExpanded === 'true') {\n      currentButton.setAttribute('aria-expanded', 'false');\n    } else {\n      currentButton.setAttribute('aria-expanded', 'true');\n    }\n\n    var accordion = currentButton.closest('.accordion');\n    var fields = accordion.querySelector('.accordion__fields');\n    fields.classList.toggle('accordion__fields--active');\n  } //Additional keyboard control: Navigate between accordion blocks using up, down, home and end buttons\n\n\n  function moveFocus(e) {\n    var button = e.target;\n    var buttons = document.querySelectorAll('.accordion:not(.accordion--hidden) .accordion__button');\n    var currentIndex = Array.from(buttons).indexOf(button);\n    var keyCode = e.keyCode ? e.keyCode : e.which; //40 === down, move to the next accordion\n\n    if (keyCode === 40) {\n      e.preventDefault();\n\n      if (buttons.length - 1 > currentIndex) {\n        buttons[currentIndex + 1].focus();\n      } else {\n        //If this is the last accordion, move to the first accordion\n        buttons[0].focus();\n      }\n\n      return;\n    } //38 === up, move to the previous accordion\n\n\n    if (keyCode === 38) {\n      e.preventDefault();\n\n      if (currentIndex > 0) {\n        buttons[currentIndex - 1].focus();\n      } else {\n        //If this is the first accordion, move to the last accordion\n        buttons[buttons.length - 1].focus();\n      }\n\n      return;\n    } // 36 === home, move to the first accordion\n\n\n    if (keyCode === 36) {\n      e.preventDefault();\n      buttons[0].focus();\n      return;\n    } // 35 === end, move to the last accordion\n\n\n    if (keyCode === 35) {\n      e.preventDefault();\n      buttons[buttons.length - 1].focus();\n    }\n  }\n\n  accordions.forEach(function (accordion) {\n    //Update description on first load\n    updateDesc(accordion); //Update description when checking checkboxes\n\n    var checkboxes = accordion.querySelectorAll('.accordion__input');\n\n    if (checkboxes.length) {\n      checkboxes.forEach(function (checkbox) {\n        checkbox.addEventListener('change', updateDescOnClick);\n      });\n    } //Toggle accordion on click\n\n\n    var button = accordion.querySelector('.accordion__button');\n    button.addEventListener('click', toggleAccordion); //Add keyboard control\n\n    button.addEventListener('keydown', moveFocus);\n  });\n}\n\n//# sourceURL=webpack://fsa-design-system/./src/components/search/Accordion/accordion.js?");

/***/ }),

/***/ "./src/components/search/CollapsibleCheckbox/collapsibleCheckbox.js":
/*!**************************************************************************!*\
  !*** ./src/components/search/CollapsibleCheckbox/collapsibleCheckbox.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _collapsibleCheckbox_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collapsibleCheckbox.html.twig */ \"./src/components/search/CollapsibleCheckbox/collapsibleCheckbox.html.twig\");\n/* harmony import */ var _collapsibleCheckbox_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collapsibleCheckbox.scss */ \"./src/components/search/CollapsibleCheckbox/collapsibleCheckbox.scss\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/search/CollapsibleCheckbox/collapsibleCheckbox.js?");

/***/ }),

/***/ "./src/components/search/Datepicker/datepicker.js":
/*!********************************************************!*\
  !*** ./src/components/search/Datepicker/datepicker.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var _helpers_updateParams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/updateParams */ \"./src/helpers/updateParams.js\");\n/* harmony import */ var _datepicker_html_twig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datepicker.html.twig */ \"./src/components/search/Datepicker/datepicker.html.twig\");\n/* harmony import */ var _datepicker_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datepicker.scss */ \"./src/components/search/Datepicker/datepicker.scss\");\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  var els = document.querySelectorAll('.datepicker');\n\n  if (!els) {\n    return;\n  }\n\n  function isLeapYear(year) {\n    return new Date(year, 1, 29).getDate() === 29;\n  }\n\n  function minimumSelection(datepicker, errorContainer) {\n    var accordion = datepicker.closest('.accordion');\n    datepicker.classList.add('datepicker--error');\n    errorContainer.classList.add('datepicker__error-message--visible');\n\n    if (accordion) {\n      accordion.classList.add('accordion--error');\n    }\n  }\n\n  function validateDate(day, month, year, datepicker, errorContainer) {\n    var accordion = datepicker.closest('.accordion');\n    var shortMonths = [4, 6, 9, 11];\n\n    if (day === 31 && shortMonths.includes(month)) {\n      errorContainer.classList.add('datepicker__error-message--visible');\n      datepicker.classList.add('datepicker--error');\n\n      if (accordion) {\n        accordion.classList.add('accordion--error');\n      }\n\n      return false;\n    } else if (day > 29 && month === 2 || day === 29 && month === 2 && !isLeapYear(year)) {\n      datepicker.classList.add('datepicker--error');\n      errorContainer.classList.add('datepicker__error-message--visible');\n\n      if (accordion) {\n        accordion.classList.add('accordion--error');\n      }\n\n      return false;\n    } else {\n      return true;\n    }\n  }\n\n  function clearErrors(minErrContainer, validationErrContainer) {\n    minErrContainer.classList.remove('datepicker__error-message--visible');\n    validationErrContainer.classList.remove('datepicker__error-message--visible');\n  }\n\n  els.forEach(function (el) {\n    var applyButton = el.querySelector('.datepicker__apply-button');\n    var type = el.getAttribute('data-type');\n    var minimumSelectionErrMsg = el.querySelector('.datepicker__error-message--minimum-selection');\n    var invalidDateErrMsg = el.querySelector('.datepicker__error-message--invalid-dates');\n    var day = '';\n    var month = '';\n    var year = '';\n    applyButton.addEventListener('click', function (e) {\n      e.preventDefault();\n      clearErrors(minimumSelectionErrMsg, invalidDateErrMsg);\n      var selects = el.querySelectorAll('select');\n      selects.forEach(function (select) {\n        var selected = select.value;\n        var name = select.name;\n\n        switch (name) {\n          case 'Day':\n            day = selected !== 'none' ? parseInt(selected, 10) : null;\n            break;\n\n          case 'Month':\n            month = selected !== 'none' ? parseInt(selected, 10) : null;\n            break;\n\n          case 'Year':\n            year = selected !== 'none' ? selected : null;\n            break;\n        }\n      });\n\n      if (!year) {\n        minimumSelection(el, minimumSelectionErrMsg);\n        return;\n      }\n\n      if (validateDate(day, month, year, el, invalidDateErrMsg)) {\n        var date = new Date(year, month, day).getTime() / 1000;\n        (0,_helpers_updateParams__WEBPACK_IMPORTED_MODULE_0__.default)('date' + type, date);\n      }\n    });\n  });\n}\n\n//# sourceURL=webpack://fsa-design-system/./src/components/search/Datepicker/datepicker.js?");

/***/ }),

/***/ "./src/components/search/FiltersHeader/filtersHeader.js":
/*!**************************************************************!*\
  !*** ./src/components/search/FiltersHeader/filtersHeader.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var _filtersHeader_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filtersHeader.html.twig */ \"./src/components/search/FiltersHeader/filtersHeader.html.twig\");\n/* harmony import */ var _filtersHeader_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filtersHeader.scss */ \"./src/components/search/FiltersHeader/filtersHeader.scss\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  window.addEventListener('DOMContentLoaded', function () {\n    var openButton = document.querySelector('.search-filters__button');\n    var returnButton = document.querySelector('.search-filters__return');\n    var contentDiv = document.querySelector('.search-filters__content'); // Add eventlisteners for buttons.\n\n    function toggleClass() {\n      openButton.classList.toggle('search-filters__button--open');\n      contentDiv.classList.toggle('search-filters__content--open');\n      document.body.classList.toggle('overflow-hidden');\n    } // Trap user focus within the modal.\n    // Find the last visible focusable element in the modal.\n\n\n    function getLastElement() {\n      var lastElement;\n      var focusableElements = contentDiv.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex=\"-1\"])');\n\n      for (var i = focusableElements.length - 1; i >= 0; i--) {\n        //offsetParent returns null when an element or one of its parents has display: none;\n        if (focusableElements[i].offsetParent) {\n          lastElement = focusableElements[i];\n          break;\n        }\n      }\n\n      return lastElement;\n    }\n\n    function focusLastElement(e) {\n      var keyCode = e.keyCode ? e.keyCode : e.which; //If user pressed shift + tab on the return button, move focus to the end of the modal\n\n      if (keyCode === 9 || e.key === 'Tab') {\n        if (e.shiftKey) {\n          e.preventDefault();\n          var lastElement = getLastElement();\n          lastElement.focus();\n        }\n      }\n    }\n\n    function focusFirstItem(e) {\n      //Check if we are in the modal on mobile\n      var position = window.getComputedStyle(contentDiv).getPropertyValue('position');\n      if (position !== 'fixed') return; //Check if the element that triggered the event is the last focusable element\n\n      var lastElement = getLastElement();\n      if (lastElement !== e.target) return;\n      var keyCode = e.keyCode ? e.keyCode : e.which; //If user pressed tab on the last focusable element in the modal, move focus to the start of the modal\n\n      if (keyCode === 9 || e.key === 'Tab') {\n        if (!e.shiftKey) {\n          e.preventDefault();\n          returnButton.focus();\n        }\n      }\n    }\n\n    if (openButton && returnButton && contentDiv) {\n      openButton.addEventListener('click', toggleClass);\n      returnButton.addEventListener('click', toggleClass);\n      returnButton.addEventListener('keydown', focusLastElement); //Use event delegation, because the last focusable element will change as filters change.\n\n      contentDiv.addEventListener('keydown', focusFirstItem);\n    }\n  }, {\n    once: true\n  });\n}\n\n//# sourceURL=webpack://fsa-design-system/./src/components/search/FiltersHeader/filtersHeader.js?");

/***/ }),

/***/ "./src/components/search/FiltersSelected/filtersSelected.js":
/*!******************************************************************!*\
  !*** ./src/components/search/FiltersSelected/filtersSelected.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _filtersSelected_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filtersSelected.scss */ \"./src/components/search/FiltersSelected/filtersSelected.scss\");\n/* harmony import */ var _filtersSelected_html_twig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filtersSelected.html.twig */ \"./src/components/search/FiltersSelected/filtersSelected.html.twig\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/search/FiltersSelected/filtersSelected.js?");

/***/ }),

/***/ "./src/components/search/ListingItem/listingItem.js":
/*!**********************************************************!*\
  !*** ./src/components/search/ListingItem/listingItem.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _listingItem_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listingItem.scss */ \"./src/components/search/ListingItem/listingItem.scss\");\n/* harmony import */ var _listingItem_html_twig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listingItem.html.twig */ \"./src/components/search/ListingItem/listingItem.html.twig\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/search/ListingItem/listingItem.js?");

/***/ }),

/***/ "./src/components/search/Pagination/pagination.js":
/*!********************************************************!*\
  !*** ./src/components/search/Pagination/pagination.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var _helpers_updateParams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/updateParams */ \"./src/helpers/updateParams.js\");\n/* harmony import */ var _pagination_html_twig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagination.html.twig */ \"./src/components/search/Pagination/pagination.html.twig\");\n/* harmony import */ var _pagination_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagination.scss */ \"./src/components/search/Pagination/pagination.scss\");\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  var el = document.querySelector('.pagination');\n\n  if (!el) {\n    return;\n  }\n\n  var pages = el.querySelectorAll('.pagination__item a');\n  pages.forEach(function (page) {\n    page.addEventListener('click', function (e) {\n      e.preventDefault();\n      (0,_helpers_updateParams__WEBPACK_IMPORTED_MODULE_0__.default)('page', page.getAttribute('data-page'));\n    });\n  });\n}\n\n//# sourceURL=webpack://fsa-design-system/./src/components/search/Pagination/pagination.js?");

/***/ }),

/***/ "./src/components/search/RatingCta/ratingCta.js":
/*!******************************************************!*\
  !*** ./src/components/search/RatingCta/ratingCta.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ratingCta_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ratingCta.html.twig */ \"./src/components/search/RatingCta/ratingCta.html.twig\");\n/* harmony import */ var _ratingCta_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ratingCta.scss */ \"./src/components/search/RatingCta/ratingCta.scss\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/search/RatingCta/ratingCta.js?");

/***/ }),

/***/ "./src/components/search/SearchBar/searchBar.js":
/*!******************************************************!*\
  !*** ./src/components/search/SearchBar/searchBar.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var _helpers_updateParams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/updateParams */ \"./src/helpers/updateParams.js\");\n/* harmony import */ var _searchBar_html_twig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchBar.html.twig */ \"./src/components/search/SearchBar/searchBar.html.twig\");\n/* harmony import */ var _searchBar_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./searchBar.scss */ \"./src/components/search/SearchBar/searchBar.scss\");\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  var el = document.querySelector('.search-bar');\n\n  if (!el) {\n    return;\n  }\n\n  var input = el.querySelector('.search-bar__box');\n  input.addEventListener('input', function () {\n    if (input.value !== '') {\n      input.classList.add('search-bar__box--has-content');\n    } else {\n      input.classList.remove('search-bar__box--has-content');\n    }\n  });\n  var submit = el.querySelector('.search-bar__submit');\n  submit.addEventListener('click', function (e) {\n    e.preventDefault();\n    var form = document.getElementsByClassName('search-bar');\n    (0,_helpers_updateParams__WEBPACK_IMPORTED_MODULE_0__.default)('keywords', input.value, form[0]);\n  });\n}\n\n//# sourceURL=webpack://fsa-design-system/./src/components/search/SearchBar/searchBar.js?");

/***/ }),

/***/ "./src/components/search/SearchBarHeader/searchBarHeader.js":
/*!******************************************************************!*\
  !*** ./src/components/search/SearchBarHeader/searchBarHeader.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _searchBarHeader_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchBarHeader.html.twig */ \"./src/components/search/SearchBarHeader/searchBarHeader.html.twig\");\n/* harmony import */ var _searchBarHeader_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchBarHeader.scss */ \"./src/components/search/SearchBarHeader/searchBarHeader.scss\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/search/SearchBarHeader/searchBarHeader.js?");

/***/ }),

/***/ "./src/components/search/SearchNoResults/searchNoResults.js":
/*!******************************************************************!*\
  !*** ./src/components/search/SearchNoResults/searchNoResults.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _searchNoResults_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchNoResults.html.twig */ \"./src/components/search/SearchNoResults/searchNoResults.html.twig\");\n/* harmony import */ var _searchNoResults_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchNoResults.scss */ \"./src/components/search/SearchNoResults/searchNoResults.scss\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/search/SearchNoResults/searchNoResults.js?");

/***/ }),

/***/ "./src/components/search/Showing/showing.js":
/*!**************************************************!*\
  !*** ./src/components/search/Showing/showing.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _showing_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showing.html.twig */ \"./src/components/search/Showing/showing.html.twig\");\n/* harmony import */ var _showing_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showing.scss */ \"./src/components/search/Showing/showing.scss\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/search/Showing/showing.js?");

/***/ }),

/***/ "./src/components/search/SortBy/sortBy.js":
/*!************************************************!*\
  !*** ./src/components/search/SortBy/sortBy.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var _helpers_updateParams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/updateParams */ \"./src/helpers/updateParams.js\");\n/* harmony import */ var _sortBy_html_twig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sortBy.html.twig */ \"./src/components/search/SortBy/sortBy.html.twig\");\n/* harmony import */ var _sortBy_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sortBy.scss */ \"./src/components/search/SortBy/sortBy.scss\");\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  var el = document.querySelector('.sort');\n\n  if (!el) {\n    return;\n  }\n\n  var sortBy = el.querySelector('select');\n  sortBy.addEventListener('change', function (e) {\n    e.preventDefault();\n    (0,_helpers_updateParams__WEBPACK_IMPORTED_MODULE_0__.default)('sort', sortBy.value);\n  });\n}\n\n//# sourceURL=webpack://fsa-design-system/./src/components/search/SortBy/sortBy.js?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"domContentLoadedWrapper\": function() { return /* binding */ domContentLoadedWrapper; }\n/* harmony export */ });\nfunction domContentLoadedWrapper(callback) {\n  var DOMContentFirstLoad = true;\n  window.addEventListener('DOMContentLoaded', function (eventDOMContentLoaded) {\n    if (eventDOMContentLoaded.isTrusted && !DOMContentFirstLoad) {\n      return;\n    }\n\n    DOMContentFirstLoad = false;\n    callback();\n  });\n}\n\n//# sourceURL=webpack://fsa-design-system/./src/helpers.js?");

/***/ }),

/***/ "./src/helpers/imageMapResizer.js":
/*!****************************************!*\
  !*** ./src/helpers/imageMapResizer.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/*! Image Map Resizer\n *  Desc: Resize HTML imageMap to scaled image.\n *  Copyright: (c) 2014-15 David J. Bradshaw - dave@bradshaw.net\n *  License: MIT\n */\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  'use strict';\n\n  function scaleImageMap() {\n    function resizeMap() {\n      function resizeAreaTag(cachedAreaCoords, idx) {\n        function scale(coord) {\n          var dimension = 1 === (isWidth = 1 - isWidth) ? 'width' : 'height';\n          return padding[dimension] + Math.floor(Number(coord) * scalingFactor[dimension]);\n        }\n\n        var isWidth = 0;\n        areas[idx].coords = cachedAreaCoords.split(',').map(scale).join(',');\n      }\n\n      var imageClone = document.createElement('img');\n      imageClone.src = image.src;\n      document.body.appendChild(imageClone);\n      var naturalWidth = imageClone.width;\n      var naturalHeight = imageClone.height;\n      imageClone.remove();\n      var scalingFactor = {\n        width: image.width / naturalWidth,\n        height: image.height / naturalHeight\n      };\n      var padding = {\n        width: parseInt(window.getComputedStyle(image, null).getPropertyValue('padding-left'), 10),\n        height: parseInt(window.getComputedStyle(image, null).getPropertyValue('padding-top'), 10)\n      };\n      cachedAreaCoordsArray.forEach(resizeAreaTag);\n    }\n\n    function getCoords(e) {\n      //Normalize coord-string to csv format without any space chars\n      return e.coords.replace(/ *, */g, ',').replace(/ +/g, ',');\n    }\n\n    function debounce() {\n      clearTimeout(timer);\n      timer = setTimeout(resizeMap, 250);\n    }\n\n    function addEventListeners() {\n      image.addEventListener('load', resizeMap, false); //Detect late image loads in IE11\n\n      window.addEventListener('focus', resizeMap, false); //Cope with window being resized whilst on another tab\n\n      window.addEventListener('resize', debounce, false);\n      window.addEventListener('readystatechange', resizeMap, false);\n      document.addEventListener('fullscreenchange', resizeMap, false);\n    }\n\n    function beenHere() {\n      return 'function' === typeof map._resize;\n    }\n\n    function getImg(name) {\n      return document.querySelector('img[usemap=\"' + name + '\"]');\n    }\n\n    function setup() {\n      areas = map.getElementsByTagName('area');\n      cachedAreaCoordsArray = Array.prototype.map.call(areas, getCoords);\n      image = getImg('#' + map.name) || getImg(map.name); // Prevent caching\n\n      image.src = image.src + '?' + new Date().getTime();\n      map._resize = resizeMap; //Bind resize method to HTML map element\n    }\n\n    var\n    /*jshint validthis:true */\n    map = this,\n        areas = null,\n        cachedAreaCoordsArray = null,\n        image = null,\n        timer = null;\n\n    if (!beenHere()) {\n      setup();\n      addEventListeners();\n      resizeMap();\n    } else {\n      map._resize(); //Already setup, so just resize map\n\n    }\n  }\n\n  function factory() {\n    var maps = [];\n\n    function chkMap(element) {\n      if (!element.tagName) {\n        throw new TypeError('Object is not a valid DOM element');\n      } else if ('MAP' !== element.tagName.toUpperCase()) {\n        throw new TypeError('Expected <MAP> tag, found <' + element.tagName + '>.');\n      }\n    }\n\n    function init(element) {\n      if (element) {\n        chkMap(element);\n        scaleImageMap.call(element);\n        maps.push(element);\n      }\n    }\n\n    Array.prototype.forEach.call(document.querySelectorAll('map'), init);\n    return maps;\n  }\n\n  factory();\n}\n\n//# sourceURL=webpack://fsa-design-system/./src/helpers/imageMapResizer.js?");

/***/ }),

/***/ "./src/helpers/updateParams.js":
/*!*************************************!*\
  !*** ./src/helpers/updateParams.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar updateParams = function updateParams(name, value) {\n  var form = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n  var currUrl = new URL(window.location.href);\n  var params = new URLSearchParams(currUrl.search);\n  params.delete(name);\n  params.append(name, value);\n  var query = params.toString();\n  var pathName = currUrl.pathname;\n\n  if (form) {\n    pathName = form.getAttribute('action');\n  }\n\n  window.location.href = window.location.origin + pathName + (query != '' ? '?' + query : '');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (updateParams);\n\n//# sourceURL=webpack://fsa-design-system/./src/helpers/updateParams.js?");

/***/ }),

/***/ "./src/imports.js":
/*!************************!*\
  !*** ./src/imports.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var _base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.scss */ \"./src/base.scss\");\n/* harmony import */ var url_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! url-polyfill */ \"./node_modules/url-polyfill/url-polyfill.js\");\n/* harmony import */ var url_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(url_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var dwnld_attr_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dwnld-attr-polyfill */ \"./node_modules/dwnld-attr-polyfill/dist/index.js\");\n/* harmony import */ var dwnld_attr_polyfill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dwnld_attr_polyfill__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! object-fit-images */ \"./node_modules/object-fit-images/dist/ofi.common-js.js\");\n/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(object_fit_images__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var element_closest_polyfill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! element-closest-polyfill */ \"./node_modules/element-closest-polyfill/index.js\");\n/* harmony import */ var element_closest_polyfill__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(element_closest_polyfill__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_general_Breadcrumb_breadcrumb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/general/Breadcrumb/breadcrumb */ \"./src/components/general/Breadcrumb/breadcrumb.js\");\n/* harmony import */ var _components_general_Button_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/general/Button/button */ \"./src/components/general/Button/button.js\");\n/* harmony import */ var _components_general_Header_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/general/Header/header */ \"./src/components/general/Header/header.js\");\n/* harmony import */ var _components_general_Hero_hero__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/general/Hero/hero */ \"./src/components/general/Hero/hero.js\");\n/* harmony import */ var _components_general_Link_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/general/Link/link */ \"./src/components/general/Link/link.js\");\n/* harmony import */ var _components_general_SiteMap_siteMap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/general/SiteMap/siteMap */ \"./src/components/general/SiteMap/siteMap.js\");\n/* harmony import */ var _components_general_ExternalLink_externalLink__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/general/ExternalLink/externalLink */ \"./src/components/general/ExternalLink/externalLink.js\");\n/* harmony import */ var _components_general_MailLink_mailLink__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/general/MailLink/mailLink */ \"./src/components/general/MailLink/mailLink.js\");\n/* harmony import */ var _components_general_Footer_footer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/general/Footer/footer */ \"./src/components/general/Footer/footer.js\");\n/* harmony import */ var _components_general_Feedback_feedback__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/general/Feedback/feedback */ \"./src/components/general/Feedback/feedback.js\");\n/* harmony import */ var _components_general_CookieBanner_cookieBanner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/general/CookieBanner/cookieBanner */ \"./src/components/general/CookieBanner/cookieBanner.js\");\n/* harmony import */ var _components_general_TemporaryMessage_temporaryMessage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/general/TemporaryMessage/temporaryMessage */ \"./src/components/general/TemporaryMessage/temporaryMessage.js\");\n/* harmony import */ var _components_general_NationalArchiveLink_nationalArchiveLink__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/general/NationalArchiveLink/nationalArchiveLink */ \"./src/components/general/NationalArchiveLink/nationalArchiveLink.js\");\n/* harmony import */ var _components_general_ErrorResponse_errorResponse__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/general/ErrorResponse/errorResponse */ \"./src/components/general/ErrorResponse/errorResponse.js\");\n/* harmony import */ var _components_general_SkipToMainContent_skipToMainContent__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/general/SkipToMainContent/skipToMainContent */ \"./src/components/general/SkipToMainContent/skipToMainContent.js\");\n/* harmony import */ var _components_general_Navigation_navigation__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/general/Navigation/navigation */ \"./src/components/general/Navigation/navigation.js\");\n/* harmony import */ var _components_general_DropdownMenu_dropdownMenu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/general/DropdownMenu/dropdownMenu */ \"./src/components/general/DropdownMenu/dropdownMenu.js\");\n/* harmony import */ var _components_general_GuidancePopup_guidancePopup__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/general/GuidancePopup/guidancePopup */ \"./src/components/general/GuidancePopup/guidancePopup.js\");\n/* harmony import */ var _components_search_CollapsibleCheckbox_collapsibleCheckbox__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/search/CollapsibleCheckbox/collapsibleCheckbox */ \"./src/components/search/CollapsibleCheckbox/collapsibleCheckbox.js\");\n/* harmony import */ var _components_search_FiltersSelected_filtersSelected__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/search/FiltersSelected/filtersSelected */ \"./src/components/search/FiltersSelected/filtersSelected.js\");\n/* harmony import */ var _components_search_ListingItem_listingItem__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/search/ListingItem/listingItem */ \"./src/components/search/ListingItem/listingItem.js\");\n/* harmony import */ var _components_search_Pagination_pagination__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/search/Pagination/pagination */ \"./src/components/search/Pagination/pagination.js\");\n/* harmony import */ var _components_search_SearchBarHeader_searchBarHeader__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/search/SearchBarHeader/searchBarHeader */ \"./src/components/search/SearchBarHeader/searchBarHeader.js\");\n/* harmony import */ var _components_search_SearchNoResults_searchNoResults__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/search/SearchNoResults/searchNoResults */ \"./src/components/search/SearchNoResults/searchNoResults.js\");\n/* harmony import */ var _components_search_Showing_showing__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/search/Showing/showing */ \"./src/components/search/Showing/showing.js\");\n/* harmony import */ var _components_search_SortBy_sortBy__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/search/SortBy/sortBy */ \"./src/components/search/SortBy/sortBy.js\");\n/* harmony import */ var _components_search_FiltersHeader_filtersHeader__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/search/FiltersHeader/filtersHeader */ \"./src/components/search/FiltersHeader/filtersHeader.js\");\n/* harmony import */ var _components_search_RatingCta_ratingCta__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/search/RatingCta/ratingCta */ \"./src/components/search/RatingCta/ratingCta.js\");\n/* harmony import */ var _components_search_Datepicker_datepicker__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/search/Datepicker/datepicker */ \"./src/components/search/Datepicker/datepicker.js\");\n/* harmony import */ var _components_search_Accordion_accordion__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/search/Accordion/accordion */ \"./src/components/search/Accordion/accordion.js\");\n/* harmony import */ var _components_form_Checkbox_checkbox__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/form/Checkbox/checkbox */ \"./src/components/form/Checkbox/checkbox.js\");\n/* harmony import */ var _components_form_Dropdown_dropdown__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/form/Dropdown/dropdown */ \"./src/components/form/Dropdown/dropdown.js\");\n/* harmony import */ var _components_form_ErrorBox_errorBoxs__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/form/ErrorBox/errorBoxs */ \"./src/components/form/ErrorBox/errorBoxs.js\");\n/* harmony import */ var _components_form_MessageBox_messageBox__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/form/MessageBox/messageBox */ \"./src/components/form/MessageBox/messageBox.js\");\n/* harmony import */ var _components_form_MultistepFunction_multistepFunction__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/form/MultistepFunction/multistepFunction */ \"./src/components/form/MultistepFunction/multistepFunction.js\");\n/* harmony import */ var _components_form_Radio_radio__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/form/Radio/radio */ \"./src/components/form/Radio/radio.js\");\n/* harmony import */ var _components_form_Tabs_tabs__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/form/Tabs/tabs */ \"./src/components/form/Tabs/tabs.js\");\n/* harmony import */ var _components_form_TitleAndText_titleAndText__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/form/TitleAndText/titleAndText */ \"./src/components/form/TitleAndText/titleAndText.js\");\n/* harmony import */ var _components_form_EmailField_emailField__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/form/EmailField/emailField */ \"./src/components/form/EmailField/emailField.js\");\n/* harmony import */ var _components_form_Step_step__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/form/Step/step */ \"./src/components/form/Step/step.js\");\n/* harmony import */ var _components_form_FileUpload_fileUpload__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/form/FileUpload/fileUpload */ \"./src/components/form/FileUpload/fileUpload.js\");\n/* harmony import */ var _components_form_MapField_mapField__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/form/MapField/mapField */ \"./src/components/form/MapField/mapField.js\");\n/* harmony import */ var _components_form_Tooltip_tooltip__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/form/Tooltip/tooltip */ \"./src/components/form/Tooltip/tooltip.js\");\n/* harmony import */ var _components_form_MultivalueField_multivalueField__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/form/MultivalueField/multivalueField */ \"./src/components/form/MultivalueField/multivalueField.js\");\n/* harmony import */ var _components_form_MultifieldGroup_multifieldGroup__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/form/MultifieldGroup/multifieldGroup */ \"./src/components/form/MultifieldGroup/multifieldGroup.js\");\n/* harmony import */ var _components_form_ToggleButton_toggleButton__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/form/ToggleButton/toggleButton */ \"./src/components/form/ToggleButton/toggleButton.js\");\n/* harmony import */ var _components_form_InputField_inputField__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./components/form/InputField/inputField */ \"./src/components/form/InputField/inputField.js\");\n/* harmony import */ var _components_form_Textarea_textarea__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/form/Textarea/textarea */ \"./src/components/form/Textarea/textarea.js\");\n/* harmony import */ var _components_landing_LandingLinks_landingLinks__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./components/landing/LandingLinks/landingLinks */ \"./src/components/landing/LandingLinks/landingLinks.js\");\n/* harmony import */ var _components_landing_LargePromoGroup_largePromoGroup__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./components/landing/LargePromoGroup/largePromoGroup */ \"./src/components/landing/LargePromoGroup/largePromoGroup.js\");\n/* harmony import */ var _components_landing_LatestTeaser_latestTeaser__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./components/landing/LatestTeaser/latestTeaser */ \"./src/components/landing/LatestTeaser/latestTeaser.js\");\n/* harmony import */ var _components_landing_PromoGroup_promoGroup__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./components/landing/PromoGroup/promoGroup */ \"./src/components/landing/PromoGroup/promoGroup.js\");\n/* harmony import */ var _components_landing_ServiceLinks_serviceLinks__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./components/landing/ServiceLinks/serviceLinks */ \"./src/components/landing/ServiceLinks/serviceLinks.js\");\n/* harmony import */ var _components_landing_CampaignBlock_campaignBlock__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./components/landing/CampaignBlock/campaignBlock */ \"./src/components/landing/CampaignBlock/campaignBlock.js\");\n/* harmony import */ var _components_landing_LandingText_landingText__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./components/landing/LandingText/landingText */ \"./src/components/landing/LandingText/landingText.js\");\n/* harmony import */ var _components_landing_LandingTitle_landingTitle__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./components/landing/LandingTitle/landingTitle */ \"./src/components/landing/LandingTitle/landingTitle.js\");\n/* harmony import */ var _components_landing_TitleAndDescription_titleAndDescription__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./components/landing/TitleAndDescription/titleAndDescription */ \"./src/components/landing/TitleAndDescription/titleAndDescription.js\");\n/* harmony import */ var _components_contact_HelpSecondaryMenu_helpSecondaryMenu__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./components/contact/HelpSecondaryMenu/helpSecondaryMenu */ \"./src/components/contact/HelpSecondaryMenu/helpSecondaryMenu.js\");\n/* harmony import */ var _components_contact_PromoLinks_promoLinks__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./components/contact/PromoLinks/promoLinks */ \"./src/components/contact/PromoLinks/promoLinks.js\");\n/* harmony import */ var _components_article_DocumentDownload_documentDownload__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./components/article/DocumentDownload/documentDownload */ \"./src/components/article/DocumentDownload/documentDownload.js\");\n/* harmony import */ var _components_article_ArticleHero_articleHero__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./components/article/ArticleHero/articleHero */ \"./src/components/article/ArticleHero/articleHero.js\");\n/* harmony import */ var _components_article_RegionalVariationBlock_regionalVariationBlock__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./components/article/RegionalVariationBlock/regionalVariationBlock */ \"./src/components/article/RegionalVariationBlock/regionalVariationBlock.js\");\n/* harmony import */ var _components_article_BackTo_backTo__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./components/article/BackTo/backTo */ \"./src/components/article/BackTo/backTo.js\");\n/* harmony import */ var _components_article_ContentMetaData_contentMetaData__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./components/article/ContentMetaData/contentMetaData */ \"./src/components/article/ContentMetaData/contentMetaData.js\");\n/* harmony import */ var _components_article_RelatedContent_relatedContent__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./components/article/RelatedContent/relatedContent */ \"./src/components/article/RelatedContent/relatedContent.js\");\n/* harmony import */ var _components_article_SubjectListing_subjectListing__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./components/article/SubjectListing/subjectListing */ \"./src/components/article/SubjectListing/subjectListing.js\");\n/* harmony import */ var _components_article_ExplanationBlock_explanationBlock__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./components/article/ExplanationBlock/explanationBlock */ \"./src/components/article/ExplanationBlock/explanationBlock.js\");\n/* harmony import */ var _components_article_QuoteBlock_quoteBlock__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./components/article/QuoteBlock/quoteBlock */ \"./src/components/article/QuoteBlock/quoteBlock.js\");\n/* harmony import */ var _components_article_TeamContacts_teamContacts__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./components/article/TeamContacts/teamContacts */ \"./src/components/article/TeamContacts/teamContacts.js\");\n/* harmony import */ var _components_article_ProductDetails_productDetails__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./components/article/ProductDetails/productDetails */ \"./src/components/article/ProductDetails/productDetails.js\");\n/* harmony import */ var _components_article_AllergensTable_allergensTable__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./components/article/AllergensTable/allergensTable */ \"./src/components/article/AllergensTable/allergensTable.js\");\n/* harmony import */ var _components_article_FootNotes_footNotes__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./components/article/FootNotes/footNotes */ \"./src/components/article/FootNotes/footNotes.js\");\n/* harmony import */ var _components_article_RevisionLogBottom_revisionLogBottom__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./components/article/RevisionLogBottom/revisionLogBottom */ \"./src/components/article/RevisionLogBottom/revisionLogBottom.js\");\n/* harmony import */ var _components_article_BackToTop_backToTop__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./components/article/BackToTop/backToTop */ \"./src/components/article/BackToTop/backToTop.js\");\n/* harmony import */ var _components_article_PdfAndPrintButtons_pdfAndPrintButtons__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./components/article/PdfAndPrintButtons/pdfAndPrintButtons */ \"./src/components/article/PdfAndPrintButtons/pdfAndPrintButtons.js\");\n/* harmony import */ var _components_article_StickySidebar_stickySidebar__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./components/article/StickySidebar/stickySidebar */ \"./src/components/article/StickySidebar/stickySidebar.js\");\n/* harmony import */ var _components_components_article_TableOfContents_tableOfContents__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! @components/components/article/TableOfContents/tableOfContents */ \"./src/components/article/TableOfContents/tableOfContents.js\");\n/* harmony import */ var _components_article_TextBlock_textBlock__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./components/article/TextBlock/textBlock */ \"./src/components/article/TextBlock/textBlock.js\");\n/* harmony import */ var _components_article_ChartBlock_chartBlock__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./components/article/ChartBlock/chartBlock */ \"./src/components/article/ChartBlock/chartBlock.js\");\n/* harmony import */ var _components_haccp_WebToolStudiesTable_webToolStudiesTable__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./components/haccp/WebToolStudiesTable/webToolStudiesTable */ \"./src/components/haccp/WebToolStudiesTable/webToolStudiesTable.js\");\n/* harmony import */ var _components_haccp_WebToolProgressBar_webToolProgressBar__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./components/haccp/WebToolProgressBar/webToolProgressBar */ \"./src/components/haccp/WebToolProgressBar/webToolProgressBar.js\");\n/* harmony import */ var _components_fhrs_LocalAuthority_localAuthority__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./components/fhrs/LocalAuthority/localAuthority */ \"./src/components/fhrs/LocalAuthority/localAuthority.js\");\n/* harmony import */ var _components_fhrs_SearchCard_searchCard__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./components/fhrs/SearchCard/searchCard */ \"./src/components/fhrs/SearchCard/searchCard.js\");\n/* harmony import */ var _components_fhrs_Badge_badge__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./components/fhrs/Badge/badge */ \"./src/components/fhrs/Badge/badge.js\");\n/* harmony import */ var _components_fhrs_MapInfobox_mapInfobox__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./components/fhrs/MapInfobox/mapInfobox */ \"./src/components/fhrs/MapInfobox/mapInfobox.js\");\n/* harmony import */ var _components_fhrs_RatingsSearchBox_ratingsSearchBox__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./components/fhrs/RatingsSearchBox/ratingsSearchBox */ \"./src/components/fhrs/RatingsSearchBox/ratingsSearchBox.js\");\n/* harmony import */ var _components_fhrs_BadgeDownload_badgeDownload__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./components/fhrs/BadgeDownload/badgeDownload */ \"./src/components/fhrs/BadgeDownload/badgeDownload.js\");\n/* harmony import */ var _components_fhrs_LocalAuthorityMap_localAuthorityMap__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./components/fhrs/LocalAuthorityMap/localAuthorityMap */ \"./src/components/fhrs/LocalAuthorityMap/localAuthorityMap.js\");\n/* harmony import */ var _components_fhrs_BusinessHero_businessHero__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./components/fhrs/BusinessHero/businessHero */ \"./src/components/fhrs/BusinessHero/businessHero.js\");\n/* harmony import */ var _components_haccp_SaveProgress_saveProgress__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./components/haccp/SaveProgress/saveProgress */ \"./src/components/haccp/SaveProgress/saveProgress.js\");\n/* harmony import */ var _components_multipageguide_GuideHero_guideHero__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./components/multipageguide/GuideHero/guideHero */ \"./src/components/multipageguide/GuideHero/guideHero.js\");\n/* harmony import */ var _components_multipageguide_Pagination_pagination__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./components/multipageguide/Pagination/pagination */ \"./src/components/multipageguide/Pagination/pagination.js\");\n/* harmony import */ var _layout_formLayout_formLayout__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ./layout/formLayout/formLayout */ \"./src/layout/formLayout/formLayout.js\");\n/* harmony import */ var _layout_twoColumn_twoColumn__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ./layout/twoColumn/twoColumn */ \"./src/layout/twoColumn/twoColumn.js\");\n/* harmony import */ var _layout_fullWidth_fullWidth__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ./layout/fullWidth/fullWidth */ \"./src/layout/fullWidth/fullWidth.js\");\n/* harmony import */ var _layout_contentLayout_contentLayout__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ./layout/contentLayout/contentLayout */ \"./src/layout/contentLayout/contentLayout.js\");\n/* harmony import */ var _layout_contactLayout_contactLayout__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ./layout/contactLayout/contactLayout */ \"./src/layout/contactLayout/contactLayout.js\");\n/* harmony import */ var _layout_fhrsLayout_fhrsLayout__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ./layout/fhrsLayout/fhrsLayout */ \"./src/layout/fhrsLayout/fhrsLayout.js\");\n/* harmony import */ var _components_search_SearchBar_searchBar__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! ./components/search/SearchBar/searchBar */ \"./src/components/search/SearchBar/searchBar.js\");\n\n\n\n\n\n/* General Components */\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Search Components */\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Form Components */\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Landing Components */\n\n\n\n\n\n\n\n\n\n\n/* Contact Components */\n\n\n\n/* Article Components */\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* HACCP components */\n\n\n\n/* FHRS components */\n\n\n\n\n\n\n\n\n\n/* HACCP components */\n\n\n/* Multipage guide Components */\n\n\n\n/* Layout Components */\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  // Components\n  (0,_components_article_BackToTop_backToTop__WEBPACK_IMPORTED_MODULE_78__.default)();\n  (0,_components_article_FootNotes_footNotes__WEBPACK_IMPORTED_MODULE_76__.default)();\n  (0,_components_article_RevisionLogBottom_revisionLogBottom__WEBPACK_IMPORTED_MODULE_77__.default)();\n  (0,_components_general_Breadcrumb_breadcrumb__WEBPACK_IMPORTED_MODULE_5__.default)();\n  (0,_components_search_Pagination_pagination__WEBPACK_IMPORTED_MODULE_26__.default)();\n  (0,_components_search_SearchBar_searchBar__WEBPACK_IMPORTED_MODULE_103__.default)();\n  (0,_components_search_SortBy_sortBy__WEBPACK_IMPORTED_MODULE_30__.default)();\n  (0,_components_general_Navigation_navigation__WEBPACK_IMPORTED_MODULE_20__.default)();\n  (0,_components_search_Datepicker_datepicker__WEBPACK_IMPORTED_MODULE_33__.default)();\n  (0,_components_search_Accordion_accordion__WEBPACK_IMPORTED_MODULE_34__.default)();\n  (0,_components_general_Header_header__WEBPACK_IMPORTED_MODULE_7__.default)();\n  (0,_components_article_PdfAndPrintButtons_pdfAndPrintButtons__WEBPACK_IMPORTED_MODULE_79__.default)();\n  (0,_components_article_StickySidebar_stickySidebar__WEBPACK_IMPORTED_MODULE_80__.default)();\n  (0,_components_components_article_TableOfContents_tableOfContents__WEBPACK_IMPORTED_MODULE_81__.default)();\n  (0,_components_article_TextBlock_textBlock__WEBPACK_IMPORTED_MODULE_82__.default)();\n  (0,_components_article_ChartBlock_chartBlock__WEBPACK_IMPORTED_MODULE_83__.default)();\n  (0,_components_form_MapField_mapField__WEBPACK_IMPORTED_MODULE_46__.default)();\n  (0,_components_general_DropdownMenu_dropdownMenu__WEBPACK_IMPORTED_MODULE_21__.default)();\n  (0,_components_haccp_WebToolProgressBar_webToolProgressBar__WEBPACK_IMPORTED_MODULE_85__.default)();\n  (0,_components_form_Tooltip_tooltip__WEBPACK_IMPORTED_MODULE_47__.default)();\n  (0,_components_form_MultivalueField_multivalueField__WEBPACK_IMPORTED_MODULE_48__.default)();\n  (0,_components_form_MultifieldGroup_multifieldGroup__WEBPACK_IMPORTED_MODULE_49__.default)();\n  (0,_components_general_GuidancePopup_guidancePopup__WEBPACK_IMPORTED_MODULE_22__.default)();\n  (0,_components_form_ToggleButton_toggleButton__WEBPACK_IMPORTED_MODULE_50__.default)();\n  (0,_components_fhrs_RatingsSearchBox_ratingsSearchBox__WEBPACK_IMPORTED_MODULE_90__.default)();\n  (0,_components_form_InputField_inputField__WEBPACK_IMPORTED_MODULE_51__.default)();\n  (0,_components_form_Textarea_textarea__WEBPACK_IMPORTED_MODULE_52__.default)();\n  (0,_components_fhrs_LocalAuthorityMap_localAuthorityMap__WEBPACK_IMPORTED_MODULE_92__.default)();\n  (0,_components_fhrs_BadgeDownload_badgeDownload__WEBPACK_IMPORTED_MODULE_91__.default)();\n  (0,_components_fhrs_BusinessHero_businessHero__WEBPACK_IMPORTED_MODULE_93__.default)(); // Fixes object-fit on legacy browsers\n\n  object_fit_images__WEBPACK_IMPORTED_MODULE_3___default()();\n}\n\n//# sourceURL=webpack://fsa-design-system/./src/imports.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var css_vars_ponyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! css-vars-ponyfill */ \"./node_modules/css-vars-ponyfill/dist/css-vars-ponyfill.esm.js\");\n/* harmony import */ var _imports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imports */ \"./src/imports.js\");\n/* harmony import */ var _components_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/helpers */ \"./src/helpers.js\");\n\n\n // Fixes css vars on legacy browsers (i.e. IE11) - this is required for Storybook\n\nfunction runCssVars() {\n  // Check whether the browser has native support for css variables\n  var hasNativeSupport = ((window || {}).CSS || {}).supports && window.CSS.supports('(--a: 0)'); // Check whether this is running in Storybook\n\n  if (!hasNativeSupport && window.isStorybook) {\n    (0,css_vars_ponyfill__WEBPACK_IMPORTED_MODULE_2__.default)({\n      silent: true,\n      preserveVars: false,\n      onlyLegacy: false\n    });\n  }\n}\n\nfunction callback() {\n  (0,_imports__WEBPACK_IMPORTED_MODULE_0__.default)();\n  runCssVars();\n}\n\nif (document.readyState === 'loading') {\n  (0,_components_helpers__WEBPACK_IMPORTED_MODULE_1__.domContentLoadedWrapper)(callback);\n} else {\n  (0,_imports__WEBPACK_IMPORTED_MODULE_0__.default)();\n  window.componentImports = _imports__WEBPACK_IMPORTED_MODULE_0__.default;\n}\n\n//# sourceURL=webpack://fsa-design-system/./src/index.js?");

/***/ }),

/***/ "./src/layout/contactLayout/contactLayout.js":
/*!***************************************************!*\
  !*** ./src/layout/contactLayout/contactLayout.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _contactLayout_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactLayout.html.twig */ \"./src/layout/contactLayout/contactLayout.html.twig\");\n/* harmony import */ var _contactLayout_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactLayout.scss */ \"./src/layout/contactLayout/contactLayout.scss\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/layout/contactLayout/contactLayout.js?");

/***/ }),

/***/ "./src/layout/contentLayout/contentLayout.js":
/*!***************************************************!*\
  !*** ./src/layout/contentLayout/contentLayout.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _contentLayout_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contentLayout.scss */ \"./src/layout/contentLayout/contentLayout.scss\");\n/* harmony import */ var _contentLayout_html_twig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contentLayout.html.twig */ \"./src/layout/contentLayout/contentLayout.html.twig\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/layout/contentLayout/contentLayout.js?");

/***/ }),

/***/ "./src/layout/fhrsLayout/fhrsLayout.js":
/*!*********************************************!*\
  !*** ./src/layout/fhrsLayout/fhrsLayout.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fhrsLayout_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fhrsLayout.html.twig */ \"./src/layout/fhrsLayout/fhrsLayout.html.twig\");\n/* harmony import */ var _fhrsLayout_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fhrsLayout.scss */ \"./src/layout/fhrsLayout/fhrsLayout.scss\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/layout/fhrsLayout/fhrsLayout.js?");

/***/ }),

/***/ "./src/layout/formLayout/formLayout.js":
/*!*********************************************!*\
  !*** ./src/layout/formLayout/formLayout.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _formLayout_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formLayout.scss */ \"./src/layout/formLayout/formLayout.scss\");\n/* harmony import */ var _formLayout_html_twig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formLayout.html.twig */ \"./src/layout/formLayout/formLayout.html.twig\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/layout/formLayout/formLayout.js?");

/***/ }),

/***/ "./src/layout/fullWidth/fullWidth.js":
/*!*******************************************!*\
  !*** ./src/layout/fullWidth/fullWidth.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fullWidth_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fullWidth.scss */ \"./src/layout/fullWidth/fullWidth.scss\");\n/* harmony import */ var _fullWidth_html_twig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fullWidth.html.twig */ \"./src/layout/fullWidth/fullWidth.html.twig\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/layout/fullWidth/fullWidth.js?");

/***/ }),

/***/ "./src/layout/twoColumn/twoColumn.js":
/*!*******************************************!*\
  !*** ./src/layout/twoColumn/twoColumn.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _twoColumn_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./twoColumn.scss */ \"./src/layout/twoColumn/twoColumn.scss\");\n/* harmony import */ var _twoColumn_html_twig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./twoColumn.html.twig */ \"./src/layout/twoColumn/twoColumn.html.twig\");\n\n\n\n//# sourceURL=webpack://fsa-design-system/./src/layout/twoColumn/twoColumn.js?");

/***/ }),

/***/ "./node_modules/css-vars-ponyfill/dist/css-vars-ponyfill.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/css-vars-ponyfill/dist/css-vars-ponyfill.esm.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/*!\n * css-vars-ponyfill\n * v2.4.7\n * https://jhildenbiddle.github.io/css-vars-ponyfill/\n * (c) 2018-2021 John Hildenbiddle <http://hildenbiddle.com>\n * MIT license\n */\nfunction _extends() {\n    _extends = Object.assign || function(target) {\n        for (var i = 1; i < arguments.length; i++) {\n            var source = arguments[i];\n            for (var key in source) {\n                if (Object.prototype.hasOwnProperty.call(source, key)) {\n                    target[key] = source[key];\n                }\n            }\n        }\n        return target;\n    };\n    return _extends.apply(this, arguments);\n}\n\n/*!\n * get-css-data\n * v2.0.2\n * https://github.com/jhildenbiddle/get-css-data\n * (c) 2018-2021 John Hildenbiddle <http://hildenbiddle.com>\n * MIT license\n */ function getUrls(urls) {\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    var settings = {\n        mimeType: options.mimeType || null,\n        onBeforeSend: options.onBeforeSend || Function.prototype,\n        onSuccess: options.onSuccess || Function.prototype,\n        onError: options.onError || Function.prototype,\n        onComplete: options.onComplete || Function.prototype\n    };\n    var urlArray = Array.isArray(urls) ? urls : [ urls ];\n    var urlQueue = Array.apply(null, Array(urlArray.length)).map((function(x) {\n        return null;\n    }));\n    function isValidCss(text) {\n        var isString = typeof text === \"string\";\n        var isHTML = isString && text.trim().charAt(0) === \"<\";\n        return isString && !isHTML;\n    }\n    function onError(xhr, urlIndex) {\n        settings.onError(xhr, urlArray[urlIndex], urlIndex);\n    }\n    function onSuccess(responseText, urlIndex) {\n        var returnVal = settings.onSuccess(responseText, urlArray[urlIndex], urlIndex);\n        responseText = returnVal === false ? \"\" : returnVal || responseText;\n        urlQueue[urlIndex] = responseText;\n        if (urlQueue.indexOf(null) === -1) {\n            settings.onComplete(urlQueue);\n        }\n    }\n    var parser = document.createElement(\"a\");\n    urlArray.forEach((function(url, i) {\n        parser.setAttribute(\"href\", url);\n        parser.href = String(parser.href);\n        var isIElte9 = Boolean(document.all && !window.atob);\n        var isIElte9CORS = isIElte9 && parser.host.split(\":\")[0] !== location.host.split(\":\")[0];\n        if (isIElte9CORS) {\n            var isSameProtocol = parser.protocol === location.protocol;\n            if (isSameProtocol) {\n                var xdr = new XDomainRequest;\n                xdr.open(\"GET\", url);\n                xdr.timeout = 0;\n                xdr.onprogress = Function.prototype;\n                xdr.ontimeout = Function.prototype;\n                xdr.onload = function() {\n                    var text = xdr.responseText;\n                    if (isValidCss(text)) {\n                        onSuccess(text, i);\n                    } else {\n                        onError(xdr, i);\n                    }\n                };\n                xdr.onerror = function(err) {\n                    onError(xdr, i);\n                };\n                setTimeout((function() {\n                    xdr.send();\n                }), 0);\n            } else {\n                console.warn(\"Internet Explorer 9 Cross-Origin (CORS) requests must use the same protocol (\".concat(url, \")\"));\n                onError(null, i);\n            }\n        } else {\n            var xhr = new XMLHttpRequest;\n            xhr.open(\"GET\", url);\n            if (settings.mimeType && xhr.overrideMimeType) {\n                xhr.overrideMimeType(settings.mimeType);\n            }\n            settings.onBeforeSend(xhr, url, i);\n            xhr.onreadystatechange = function() {\n                if (xhr.readyState === 4) {\n                    var text = xhr.responseText;\n                    if (xhr.status < 400 && isValidCss(text)) {\n                        onSuccess(text, i);\n                    } else if (xhr.status === 0 && isValidCss(text)) {\n                        onSuccess(text, i);\n                    } else {\n                        onError(xhr, i);\n                    }\n                }\n            };\n            xhr.send();\n        }\n    }));\n}\n\n/**\n * Gets CSS data from <style> and <link> nodes (including @imports), then\n * returns data in order processed by DOM. Allows specifying nodes to\n * include/exclude and filtering CSS data using RegEx.\n *\n * @preserve\n * @param {object}   [options] The options object\n * @param {object}   [options.rootElement=document] Root element to traverse for\n *                   <link> and <style> nodes.\n * @param {string}   [options.include] CSS selector matching <link> and <style>\n *                   nodes to include\n * @param {string}   [options.exclude] CSS selector matching <link> and <style>\n *                   nodes to exclude\n * @param {object}   [options.filter] Regular expression used to filter node CSS\n *                   data. Each block of CSS data is tested against the filter,\n *                   and only matching data is included.\n * @param {boolean}  [options.skipDisabled=true] Determines if disabled\n *                   stylesheets will be skipped while collecting CSS data.\n * @param {boolean}  [options.useCSSOM=false] Determines if CSS data will be\n *                   collected from a stylesheet's runtime values instead of its\n *                   text content. This is required to get accurate CSS data\n *                   when a stylesheet has been modified using the deleteRule()\n *                   or insertRule() methods because these modifications will\n *                   not be reflected in the stylesheet's text content.\n * @param {function} [options.onBeforeSend] Callback before XHR is sent. Passes\n *                   1) the XHR object, 2) source node reference, and 3) the\n *                   source URL as arguments.\n * @param {function} [options.onSuccess] Callback on each CSS node read. Passes\n *                   1) CSS text, 2) source node reference, and 3) the source\n *                   URL as arguments.\n * @param {function} [options.onError] Callback on each error. Passes 1) the XHR\n *                   object for inspection, 2) soure node reference, and 3) the\n *                   source URL that failed (either a <link> href or an @import)\n *                   as arguments\n * @param {function} [options.onComplete] Callback after all nodes have been\n *                   processed. Passes 1) concatenated CSS text, 2) an array of\n *                   CSS text in DOM order, and 3) an array of nodes in DOM\n *                   order as arguments.\n *\n * @example\n *\n *   getCssData({\n *     rootElement : document,\n *     include     : 'style,link[rel=\"stylesheet\"]',\n *     exclude     : '[href=\"skip.css\"]',\n *     filter      : /red/,\n *     skipDisabled: true,\n *     useCSSOM    : false,\n *     onBeforeSend(xhr, node, url) {\n *       // ...\n *     }\n *     onSuccess(cssText, node, url) {\n *       // ...\n *     }\n *     onError(xhr, node, url) {\n *       // ...\n *     },\n *     onComplete(cssText, cssArray, nodeArray) {\n *       // ...\n *     }\n *   });\n */ function getCssData(options) {\n    var regex = {\n        cssComments: /\\/\\*[\\s\\S]+?\\*\\//g,\n        cssImports: /(?:@import\\s*)(?:url\\(\\s*)?(?:['\"])([^'\"]*)(?:['\"])(?:\\s*\\))?(?:[^;]*;)/g\n    };\n    var settings = {\n        rootElement: options.rootElement || document,\n        include: options.include || 'style,link[rel=\"stylesheet\"]',\n        exclude: options.exclude || null,\n        filter: options.filter || null,\n        skipDisabled: options.skipDisabled !== false,\n        useCSSOM: options.useCSSOM || false,\n        onBeforeSend: options.onBeforeSend || Function.prototype,\n        onSuccess: options.onSuccess || Function.prototype,\n        onError: options.onError || Function.prototype,\n        onComplete: options.onComplete || Function.prototype\n    };\n    var sourceNodes = Array.apply(null, settings.rootElement.querySelectorAll(settings.include)).filter((function(node) {\n        return !matchesSelector(node, settings.exclude);\n    }));\n    var cssArray = Array.apply(null, Array(sourceNodes.length)).map((function(x) {\n        return null;\n    }));\n    function handleComplete() {\n        var isComplete = cssArray.indexOf(null) === -1;\n        if (isComplete) {\n            cssArray.reduce((function(skipIndices, value, i) {\n                if (value === \"\") {\n                    skipIndices.push(i);\n                }\n                return skipIndices;\n            }), []).reverse().forEach((function(skipIndex) {\n                return [ sourceNodes, cssArray ].forEach((function(arr) {\n                    return arr.splice(skipIndex, 1);\n                }));\n            }));\n            var cssText = cssArray.join(\"\");\n            settings.onComplete(cssText, cssArray, sourceNodes);\n        }\n    }\n    function handleSuccess(cssText, cssIndex, node, sourceUrl) {\n        var returnVal = settings.onSuccess(cssText, node, sourceUrl);\n        cssText = returnVal !== undefined && Boolean(returnVal) === false ? \"\" : returnVal || cssText;\n        resolveImports(cssText, node, sourceUrl, (function(resolvedCssText, errorData) {\n            if (cssArray[cssIndex] === null) {\n                errorData.forEach((function(data) {\n                    return settings.onError(data.xhr, node, data.url);\n                }));\n                if (!settings.filter || settings.filter.test(resolvedCssText)) {\n                    cssArray[cssIndex] = resolvedCssText;\n                } else {\n                    cssArray[cssIndex] = \"\";\n                }\n                handleComplete();\n            }\n        }));\n    }\n    function parseImportData(cssText, baseUrl) {\n        var ignoreRules = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];\n        var importData = {};\n        importData.rules = (cssText.replace(regex.cssComments, \"\").match(regex.cssImports) || []).filter((function(rule) {\n            return ignoreRules.indexOf(rule) === -1;\n        }));\n        importData.urls = importData.rules.map((function(rule) {\n            return rule.replace(regex.cssImports, \"$1\");\n        }));\n        importData.absoluteUrls = importData.urls.map((function(url) {\n            return getFullUrl$1(url, baseUrl);\n        }));\n        importData.absoluteRules = importData.rules.map((function(rule, i) {\n            var oldUrl = importData.urls[i];\n            var newUrl = getFullUrl$1(importData.absoluteUrls[i], baseUrl);\n            return rule.replace(oldUrl, newUrl);\n        }));\n        return importData;\n    }\n    function resolveImports(cssText, node, baseUrl, callbackFn) {\n        var __errorData = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];\n        var __errorRules = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];\n        var importData = parseImportData(cssText, baseUrl, __errorRules);\n        if (importData.rules.length) {\n            getUrls(importData.absoluteUrls, {\n                onBeforeSend: function onBeforeSend(xhr, url, urlIndex) {\n                    settings.onBeforeSend(xhr, node, url);\n                },\n                onSuccess: function onSuccess(cssText, url, urlIndex) {\n                    var returnVal = settings.onSuccess(cssText, node, url);\n                    cssText = returnVal === false ? \"\" : returnVal || cssText;\n                    var responseImportData = parseImportData(cssText, url, __errorRules);\n                    responseImportData.rules.forEach((function(rule, i) {\n                        cssText = cssText.replace(rule, responseImportData.absoluteRules[i]);\n                    }));\n                    return cssText;\n                },\n                onError: function onError(xhr, url, urlIndex) {\n                    __errorData.push({\n                        xhr: xhr,\n                        url: url\n                    });\n                    __errorRules.push(importData.rules[urlIndex]);\n                    resolveImports(cssText, node, baseUrl, callbackFn, __errorData, __errorRules);\n                },\n                onComplete: function onComplete(responseArray) {\n                    responseArray.forEach((function(importText, i) {\n                        cssText = cssText.replace(importData.rules[i], importText);\n                    }));\n                    resolveImports(cssText, node, baseUrl, callbackFn, __errorData, __errorRules);\n                }\n            });\n        } else {\n            callbackFn(cssText, __errorData);\n        }\n    }\n    if (sourceNodes.length) {\n        sourceNodes.forEach((function(node, i) {\n            var linkHref = node.getAttribute(\"href\");\n            var linkRel = node.getAttribute(\"rel\");\n            var isLink = node.nodeName.toLowerCase() === \"link\" && linkHref && linkRel && linkRel.toLowerCase().indexOf(\"stylesheet\") !== -1;\n            var isSkip = settings.skipDisabled === false ? false : node.disabled;\n            var isStyle = node.nodeName.toLowerCase() === \"style\";\n            if (isLink && !isSkip) {\n                getUrls(linkHref, {\n                    mimeType: \"text/css\",\n                    onBeforeSend: function onBeforeSend(xhr, url, urlIndex) {\n                        settings.onBeforeSend(xhr, node, url);\n                    },\n                    onSuccess: function onSuccess(cssText, url, urlIndex) {\n                        var sourceUrl = getFullUrl$1(linkHref);\n                        handleSuccess(cssText, i, node, sourceUrl);\n                    },\n                    onError: function onError(xhr, url, urlIndex) {\n                        cssArray[i] = \"\";\n                        settings.onError(xhr, node, url);\n                        handleComplete();\n                    }\n                });\n            } else if (isStyle && !isSkip) {\n                var cssText = node.textContent;\n                if (settings.useCSSOM) {\n                    cssText = Array.apply(null, node.sheet.cssRules).map((function(rule) {\n                        return rule.cssText;\n                    })).join(\"\");\n                }\n                handleSuccess(cssText, i, node, location.href);\n            } else {\n                cssArray[i] = \"\";\n                handleComplete();\n            }\n        }));\n    } else {\n        settings.onComplete(\"\", []);\n    }\n}\n\nfunction getFullUrl$1(url, base) {\n    var d = document.implementation.createHTMLDocument(\"\");\n    var b = d.createElement(\"base\");\n    var a = d.createElement(\"a\");\n    d.head.appendChild(b);\n    d.body.appendChild(a);\n    b.href = base || document.baseURI || (document.querySelector(\"base\") || {}).href || location.href;\n    a.href = url;\n    return a.href;\n}\n\nfunction matchesSelector(elm, selector) {\n    var matches = elm.matches || elm.matchesSelector || elm.webkitMatchesSelector || elm.mozMatchesSelector || elm.msMatchesSelector || elm.oMatchesSelector;\n    return matches.call(elm, selector);\n}\n\nvar balancedMatch = balanced;\n\nfunction balanced(a, b, str) {\n    if (a instanceof RegExp) a = maybeMatch(a, str);\n    if (b instanceof RegExp) b = maybeMatch(b, str);\n    var r = range(a, b, str);\n    return r && {\n        start: r[0],\n        end: r[1],\n        pre: str.slice(0, r[0]),\n        body: str.slice(r[0] + a.length, r[1]),\n        post: str.slice(r[1] + b.length)\n    };\n}\n\nfunction maybeMatch(reg, str) {\n    var m = str.match(reg);\n    return m ? m[0] : null;\n}\n\nbalanced.range = range;\n\nfunction range(a, b, str) {\n    var begs, beg, left, right, result;\n    var ai = str.indexOf(a);\n    var bi = str.indexOf(b, ai + 1);\n    var i = ai;\n    if (ai >= 0 && bi > 0) {\n        if (a === b) {\n            return [ ai, bi ];\n        }\n        begs = [];\n        left = str.length;\n        while (i >= 0 && !result) {\n            if (i == ai) {\n                begs.push(i);\n                ai = str.indexOf(a, i + 1);\n            } else if (begs.length == 1) {\n                result = [ begs.pop(), bi ];\n            } else {\n                beg = begs.pop();\n                if (beg < left) {\n                    left = beg;\n                    right = bi;\n                }\n                bi = str.indexOf(b, i + 1);\n            }\n            i = ai < bi && ai >= 0 ? ai : bi;\n        }\n        if (begs.length) {\n            result = [ left, right ];\n        }\n    }\n    return result;\n}\n\nfunction parseCss(css) {\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    var defaults = {\n        preserveStatic: true,\n        removeComments: false\n    };\n    var settings = _extends({}, defaults, options);\n    var errors = [];\n    function error(msg) {\n        throw new Error(\"CSS parse error: \".concat(msg));\n    }\n    function match(re) {\n        var m = re.exec(css);\n        if (m) {\n            css = css.slice(m[0].length);\n            return m;\n        }\n    }\n    function open() {\n        return match(/^{\\s*/);\n    }\n    function close() {\n        return match(/^}/);\n    }\n    function whitespace() {\n        match(/^\\s*/);\n    }\n    function comment() {\n        whitespace();\n        if (css[0] !== \"/\" || css[1] !== \"*\") {\n            return;\n        }\n        var i = 2;\n        while (css[i] && (css[i] !== \"*\" || css[i + 1] !== \"/\")) {\n            i++;\n        }\n        if (!css[i]) {\n            return error(\"end of comment is missing\");\n        }\n        var str = css.slice(2, i);\n        css = css.slice(i + 2);\n        return {\n            type: \"comment\",\n            comment: str\n        };\n    }\n    function comments() {\n        var cmnts = [];\n        var c;\n        while (c = comment()) {\n            cmnts.push(c);\n        }\n        return settings.removeComments ? [] : cmnts;\n    }\n    function selector() {\n        whitespace();\n        while (css[0] === \"}\") {\n            error(\"extra closing bracket\");\n        }\n        var m = match(/^((\"(?:\\\\\"|[^\"])*\"|'(?:\\\\'|[^'])*'|[^{])+)/);\n        if (m) {\n            var _selector = m[0].trim();\n            var selectorItems;\n            var hasComment = /\\/\\*/.test(_selector);\n            if (hasComment) {\n                _selector = _selector.replace(/\\/\\*([^*]|[\\r\\n]|(\\*+([^*/]|[\\r\\n])))*\\*\\/+/g, \"\");\n            }\n            var hasCommaInQuotes = /[\"']\\w*,\\w*[\"']/.test(_selector);\n            if (hasCommaInQuotes) {\n                _selector = _selector.replace(/\"(?:\\\\\"|[^\"])*\"|'(?:\\\\'|[^'])*'/g, (function(m) {\n                    return m.replace(/,/g, \"‌\");\n                }));\n            }\n            var hasMultipleSelectors = /,/.test(_selector);\n            if (hasMultipleSelectors) {\n                selectorItems = _selector.split(/\\s*(?![^(]*\\)),\\s*/);\n            } else {\n                selectorItems = [ _selector ];\n            }\n            if (hasCommaInQuotes) {\n                selectorItems = selectorItems.map((function(s) {\n                    return s.replace(/\\u200C/g, \",\");\n                }));\n            }\n            return selectorItems;\n        }\n    }\n    function declaration() {\n        if (css[0] === \"@\") {\n            return at_rule();\n        }\n        match(/^([;\\s]*)+/);\n        var comment_regexp = /\\/\\*[^*]*\\*+([^/*][^*]*\\*+)*\\//g;\n        var prop = match(/^(\\*?[-#/*\\\\\\w.]+(\\[[0-9a-z_-]+\\])?)\\s*/);\n        if (!prop) {\n            return;\n        }\n        prop = prop[0].trim();\n        if (!match(/^:\\s*/)) {\n            return error(\"property missing ':'\");\n        }\n        var val = match(/^((?:\\/\\*.*?\\*\\/|'(?:\\\\'|.)*?'|\"(?:\\\\\"|.)*?\"|\\((\\s*'(?:\\\\'|.)*?'|\"(?:\\\\\"|.)*?\"|[^)]*?)\\s*\\)|[^};])+)/);\n        var ret = {\n            type: \"declaration\",\n            property: prop.replace(comment_regexp, \"\"),\n            value: val ? val[0].replace(comment_regexp, \"\").trim() : \"\"\n        };\n        match(/^[;\\s]*/);\n        return ret;\n    }\n    function declarations() {\n        if (!open()) {\n            return error(\"missing '{'\");\n        }\n        var d;\n        var decls = comments();\n        while (d = declaration()) {\n            decls.push(d);\n            decls = decls.concat(comments());\n        }\n        if (!close()) {\n            return error(\"missing '}'\");\n        }\n        return decls;\n    }\n    function keyframe() {\n        whitespace();\n        var vals = [];\n        var m;\n        while (m = match(/^((\\d+\\.\\d+|\\.\\d+|\\d+)%?|[a-z]+)\\s*/)) {\n            vals.push(m[1]);\n            match(/^,\\s*/);\n        }\n        if (vals.length) {\n            return {\n                type: \"keyframe\",\n                values: vals,\n                declarations: declarations()\n            };\n        }\n    }\n    function at_keyframes() {\n        var m = match(/^@([-\\w]+)?keyframes\\s*/);\n        if (!m) {\n            return;\n        }\n        var vendor = m[1];\n        m = match(/^([-\\w]+)\\s*/);\n        if (!m) {\n            return error(\"@keyframes missing name\");\n        }\n        var name = m[1];\n        if (!open()) {\n            return error(\"@keyframes missing '{'\");\n        }\n        var frame;\n        var frames = comments();\n        while (frame = keyframe()) {\n            frames.push(frame);\n            frames = frames.concat(comments());\n        }\n        if (!close()) {\n            return error(\"@keyframes missing '}'\");\n        }\n        return {\n            type: \"keyframes\",\n            name: name,\n            vendor: vendor,\n            keyframes: frames\n        };\n    }\n    function at_page() {\n        var m = match(/^@page */);\n        if (m) {\n            var sel = selector() || [];\n            return {\n                type: \"page\",\n                selectors: sel,\n                declarations: declarations()\n            };\n        }\n    }\n    function at_page_margin_box() {\n        var m = match(/@(top|bottom|left|right)-(left|center|right|top|middle|bottom)-?(corner)?\\s*/);\n        if (m) {\n            var name = \"\".concat(m[1], \"-\").concat(m[2]) + (m[3] ? \"-\".concat(m[3]) : \"\");\n            return {\n                type: \"page-margin-box\",\n                name: name,\n                declarations: declarations()\n            };\n        }\n    }\n    function at_fontface() {\n        var m = match(/^@font-face\\s*/);\n        if (m) {\n            return {\n                type: \"font-face\",\n                declarations: declarations()\n            };\n        }\n    }\n    function at_supports() {\n        var m = match(/^@supports *([^{]+)/);\n        if (m) {\n            return {\n                type: \"supports\",\n                supports: m[1].trim(),\n                rules: rules()\n            };\n        }\n    }\n    function at_host() {\n        var m = match(/^@host\\s*/);\n        if (m) {\n            return {\n                type: \"host\",\n                rules: rules()\n            };\n        }\n    }\n    function at_media() {\n        var m = match(/^@media([^{]+)*/);\n        if (m) {\n            return {\n                type: \"media\",\n                media: (m[1] || \"\").trim(),\n                rules: rules()\n            };\n        }\n    }\n    function at_custom_m() {\n        var m = match(/^@custom-media\\s+(--[^\\s]+)\\s*([^{;]+);/);\n        if (m) {\n            return {\n                type: \"custom-media\",\n                name: m[1].trim(),\n                media: m[2].trim()\n            };\n        }\n    }\n    function at_document() {\n        var m = match(/^@([-\\w]+)?document *([^{]+)/);\n        if (m) {\n            return {\n                type: \"document\",\n                document: m[2].trim(),\n                vendor: m[1] ? m[1].trim() : null,\n                rules: rules()\n            };\n        }\n    }\n    function at_x() {\n        var m = match(/^@(import|charset|namespace)\\s*([^;]+);/);\n        if (m) {\n            return {\n                type: m[1],\n                name: m[2].trim()\n            };\n        }\n    }\n    function at_rule() {\n        whitespace();\n        if (css[0] === \"@\") {\n            var ret = at_x() || at_fontface() || at_media() || at_keyframes() || at_supports() || at_document() || at_custom_m() || at_host() || at_page() || at_page_margin_box();\n            if (ret && !settings.preserveStatic) {\n                var hasVarFunc = false;\n                if (ret.declarations) {\n                    hasVarFunc = ret.declarations.some((function(decl) {\n                        return /var\\(/.test(decl.value);\n                    }));\n                } else {\n                    var arr = ret.keyframes || ret.rules || [];\n                    hasVarFunc = arr.some((function(obj) {\n                        return (obj.declarations || []).some((function(decl) {\n                            return /var\\(/.test(decl.value);\n                        }));\n                    }));\n                }\n                return hasVarFunc ? ret : {};\n            }\n            return ret;\n        }\n    }\n    function rule() {\n        if (!settings.preserveStatic) {\n            var balancedMatch$1 = balancedMatch(\"{\", \"}\", css);\n            if (balancedMatch$1) {\n                var hasVarDecl = /:(?:root|host)(?![.:#(])/.test(balancedMatch$1.pre) && /--\\S*\\s*:/.test(balancedMatch$1.body);\n                var hasVarFunc = /var\\(/.test(balancedMatch$1.body);\n                if (!hasVarDecl && !hasVarFunc) {\n                    css = css.slice(balancedMatch$1.end + 1);\n                    return {};\n                }\n            }\n        }\n        var sel = selector() || [];\n        var decls = settings.preserveStatic ? declarations() : declarations().filter((function(decl) {\n            var hasVarDecl = sel.some((function(s) {\n                return /:(?:root|host)(?![.:#(])/.test(s);\n            })) && /^--\\S/.test(decl.property);\n            var hasVarFunc = /var\\(/.test(decl.value);\n            return hasVarDecl || hasVarFunc;\n        }));\n        if (!sel.length) {\n            error(\"selector missing\");\n        }\n        return {\n            type: \"rule\",\n            selectors: sel,\n            declarations: decls\n        };\n    }\n    function rules(core) {\n        if (!core && !open()) {\n            return error(\"missing '{'\");\n        }\n        var node;\n        var rules = comments();\n        while (css.length && (core || css[0] !== \"}\") && (node = at_rule() || rule())) {\n            if (node.type) {\n                rules.push(node);\n            }\n            rules = rules.concat(comments());\n        }\n        if (!core && !close()) {\n            return error(\"missing '}'\");\n        }\n        return rules;\n    }\n    return {\n        type: \"stylesheet\",\n        stylesheet: {\n            rules: rules(true),\n            errors: errors\n        }\n    };\n}\n\nfunction parseVars(cssData) {\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    var defaults = {\n        parseHost: false,\n        store: {},\n        onWarning: function onWarning() {}\n    };\n    var settings = _extends({}, defaults, options);\n    var reVarDeclSelectors = new RegExp(\":\".concat(settings.parseHost ? \"host\" : \"root\", \"$\"));\n    if (typeof cssData === \"string\") {\n        cssData = parseCss(cssData, settings);\n    }\n    cssData.stylesheet.rules.forEach((function(rule) {\n        if (rule.type !== \"rule\" || !rule.selectors.some((function(s) {\n            return reVarDeclSelectors.test(s);\n        }))) {\n            return;\n        }\n        rule.declarations.forEach((function(decl, i) {\n            var prop = decl.property;\n            var value = decl.value;\n            if (prop && prop.indexOf(\"--\") === 0) {\n                settings.store[prop] = value;\n            }\n        }));\n    }));\n    return settings.store;\n}\n\nfunction stringifyCss(tree) {\n    var delim = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"\";\n    var cb = arguments.length > 2 ? arguments[2] : undefined;\n    var renderMethods = {\n        charset: function charset(node) {\n            return \"@charset \" + node.name + \";\";\n        },\n        comment: function comment(node) {\n            return node.comment.indexOf(\"__CSSVARSPONYFILL\") === 0 ? \"/*\" + node.comment + \"*/\" : \"\";\n        },\n        \"custom-media\": function customMedia(node) {\n            return \"@custom-media \" + node.name + \" \" + node.media + \";\";\n        },\n        declaration: function declaration(node) {\n            return node.property + \":\" + node.value + \";\";\n        },\n        document: function document(node) {\n            return \"@\" + (node.vendor || \"\") + \"document \" + node.document + \"{\" + visit(node.rules) + \"}\";\n        },\n        \"font-face\": function fontFace(node) {\n            return \"@font-face\" + \"{\" + visit(node.declarations) + \"}\";\n        },\n        host: function host(node) {\n            return \"@host\" + \"{\" + visit(node.rules) + \"}\";\n        },\n        import: function _import(node) {\n            return \"@import \" + node.name + \";\";\n        },\n        keyframe: function keyframe(node) {\n            return node.values.join(\",\") + \"{\" + visit(node.declarations) + \"}\";\n        },\n        keyframes: function keyframes(node) {\n            return \"@\" + (node.vendor || \"\") + \"keyframes \" + node.name + \"{\" + visit(node.keyframes) + \"}\";\n        },\n        media: function media(node) {\n            return \"@media \" + node.media + \"{\" + visit(node.rules) + \"}\";\n        },\n        namespace: function namespace(node) {\n            return \"@namespace \" + node.name + \";\";\n        },\n        page: function page(node) {\n            return \"@page \" + (node.selectors.length ? node.selectors.join(\", \") : \"\") + \"{\" + visit(node.declarations) + \"}\";\n        },\n        \"page-margin-box\": function pageMarginBox(node) {\n            return \"@\" + node.name + \"{\" + visit(node.declarations) + \"}\";\n        },\n        rule: function rule(node) {\n            var decls = node.declarations;\n            if (decls.length) {\n                return node.selectors.join(\",\") + \"{\" + visit(decls) + \"}\";\n            }\n        },\n        supports: function supports(node) {\n            return \"@supports \" + node.supports + \"{\" + visit(node.rules) + \"}\";\n        }\n    };\n    function visit(nodes) {\n        var buf = \"\";\n        for (var i = 0; i < nodes.length; i++) {\n            var n = nodes[i];\n            if (cb) {\n                cb(n);\n            }\n            var txt = renderMethods[n.type](n);\n            if (txt) {\n                buf += txt;\n                if (txt.length && n.selectors) {\n                    buf += delim;\n                }\n            }\n        }\n        return buf;\n    }\n    return visit(tree.stylesheet.rules);\n}\n\nfunction walkCss(node, fn) {\n    node.rules.forEach((function(rule) {\n        if (rule.rules) {\n            walkCss(rule, fn);\n            return;\n        }\n        if (rule.keyframes) {\n            rule.keyframes.forEach((function(keyframe) {\n                if (keyframe.type === \"keyframe\") {\n                    fn(keyframe.declarations, rule);\n                }\n            }));\n            return;\n        }\n        if (!rule.declarations) {\n            return;\n        }\n        fn(rule.declarations, node);\n    }));\n}\n\nvar VAR_PROP_IDENTIFIER = \"--\";\n\nvar VAR_FUNC_IDENTIFIER = \"var\";\n\nfunction transformCss(cssData) {\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    var defaults = {\n        preserveStatic: true,\n        preserveVars: false,\n        variables: {},\n        onWarning: function onWarning() {}\n    };\n    var settings = _extends({}, defaults, options);\n    if (typeof cssData === \"string\") {\n        cssData = parseCss(cssData, settings);\n    }\n    walkCss(cssData.stylesheet, (function(declarations, node) {\n        for (var i = 0; i < declarations.length; i++) {\n            var decl = declarations[i];\n            var type = decl.type;\n            var prop = decl.property;\n            var value = decl.value;\n            if (type !== \"declaration\") {\n                continue;\n            }\n            if (!settings.preserveVars && prop && prop.indexOf(VAR_PROP_IDENTIFIER) === 0) {\n                declarations.splice(i, 1);\n                i--;\n                continue;\n            }\n            if (value.indexOf(VAR_FUNC_IDENTIFIER + \"(\") !== -1) {\n                var resolvedValue = resolveValue(value, settings);\n                if (resolvedValue !== decl.value) {\n                    resolvedValue = fixNestedCalc(resolvedValue);\n                    if (!settings.preserveVars) {\n                        decl.value = resolvedValue;\n                    } else {\n                        declarations.splice(i, 0, {\n                            type: type,\n                            property: prop,\n                            value: resolvedValue\n                        });\n                        i++;\n                    }\n                }\n            }\n        }\n    }));\n    return stringifyCss(cssData);\n}\n\nfunction fixNestedCalc(value) {\n    var reCalcVal = /calc\\(([^)]+)\\)/g;\n    (value.match(reCalcVal) || []).forEach((function(match) {\n        var newVal = \"calc\".concat(match.split(\"calc\").join(\"\"));\n        value = value.replace(match, newVal);\n    }));\n    return value;\n}\n\nfunction resolveValue(value) {\n    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    var __recursiveFallback = arguments.length > 2 ? arguments[2] : undefined;\n    if (value.indexOf(\"var(\") === -1) {\n        return value;\n    }\n    var valueData = balancedMatch(\"(\", \")\", value);\n    function resolveFunc(value) {\n        var name = value.split(\",\")[0].replace(/[\\s\\n\\t]/g, \"\");\n        var fallback = (value.match(/(?:\\s*,\\s*){1}(.*)?/) || [])[1];\n        var match = Object.prototype.hasOwnProperty.call(settings.variables, name) ? String(settings.variables[name]) : undefined;\n        var replacement = match || (fallback ? String(fallback) : undefined);\n        var unresolvedFallback = __recursiveFallback || value;\n        if (!match) {\n            settings.onWarning('variable \"'.concat(name, '\" is undefined'));\n        }\n        if (replacement && replacement !== \"undefined\" && replacement.length > 0) {\n            return resolveValue(replacement, settings, unresolvedFallback);\n        } else {\n            return \"var(\".concat(unresolvedFallback, \")\");\n        }\n    }\n    if (!valueData) {\n        if (value.indexOf(\"var(\") !== -1) {\n            settings.onWarning('missing closing \")\" in the value \"'.concat(value, '\"'));\n        }\n        return value;\n    } else if (valueData.pre.slice(-3) === \"var\") {\n        var isEmptyVarFunc = valueData.body.trim().length === 0;\n        if (isEmptyVarFunc) {\n            settings.onWarning(\"var() must contain a non-whitespace string\");\n            return value;\n        } else {\n            return valueData.pre.slice(0, -3) + resolveFunc(valueData.body) + resolveValue(valueData.post, settings);\n        }\n    } else {\n        return valueData.pre + \"(\".concat(resolveValue(valueData.body, settings), \")\") + resolveValue(valueData.post, settings);\n    }\n}\n\nvar isBrowser = typeof window !== \"undefined\";\n\nvar isNativeSupport = isBrowser && window.CSS && window.CSS.supports && window.CSS.supports(\"(--a: 0)\");\n\nvar counters = {\n    group: 0,\n    job: 0\n};\n\nvar defaults = {\n    rootElement: isBrowser ? document : null,\n    shadowDOM: false,\n    include: \"style,link[rel=stylesheet]\",\n    exclude: \"\",\n    variables: {},\n    onlyLegacy: true,\n    preserveStatic: true,\n    preserveVars: false,\n    silent: false,\n    updateDOM: true,\n    updateURLs: true,\n    watch: null,\n    onBeforeSend: function onBeforeSend() {},\n    onError: function onError() {},\n    onWarning: function onWarning() {},\n    onSuccess: function onSuccess() {},\n    onComplete: function onComplete() {},\n    onFinally: function onFinally() {}\n};\n\nvar regex = {\n    cssComments: /\\/\\*[\\s\\S]+?\\*\\//g,\n    cssKeyframes: /@(?:-\\w*-)?keyframes/,\n    cssMediaQueries: /@media[^{]+\\{([\\s\\S]+?})\\s*}/g,\n    cssUrls: /url\\((?!['\"]?(?:data|http|\\/\\/):)['\"]?([^'\")]*)['\"]?\\)/g,\n    cssVarDeclRules: /(?::(?:root|host)(?![.:#(])[\\s,]*[^{]*{\\s*[^}]*})/g,\n    cssVarDecls: /(?:[\\s;]*)(-{2}\\w[\\w-]*)(?:\\s*:\\s*)([^;]*);/g,\n    cssVarFunc: /var\\(\\s*--[\\w-]/,\n    cssVars: /(?:(?::(?:root|host)(?![.:#(])[\\s,]*[^{]*{\\s*[^;]*;*\\s*)|(?:var\\(\\s*))(--[^:)]+)(?:\\s*[:)])/\n};\n\nvar variableStore = {\n    dom: {},\n    job: {},\n    user: {}\n};\n\nvar cssVarsIsRunning = false;\n\nvar cssVarsObserver = null;\n\nvar cssVarsSrcNodeCount = 0;\n\nvar debounceTimer = null;\n\nvar isShadowDOMReady = false;\n\n/**\n * Fetches, parses, and transforms CSS custom properties from specified\n * <style> and <link> elements into static values, then appends a new <style>\n * element with static values to the DOM to provide CSS custom property\n * compatibility for legacy browsers. Also provides a single interface for\n * live updates of runtime values in both modern and legacy browsers.\n *\n * @preserve\n * @param {object}   [options] Options object\n * @param {object}   [options.rootElement=document] Root element to traverse for\n *                   <link> and <style> nodes\n * @param {boolean}  [options.shadowDOM=false] Determines if shadow DOM <link>\n *                   and <style> nodes will be processed.\n * @param {string}   [options.include=\"style,link[rel=stylesheet]\"] CSS selector\n *                   matching <link re=\"stylesheet\"> and <style> nodes to\n *                   process\n * @param {string}   [options.exclude] CSS selector matching <link\n *                   rel=\"stylehseet\"> and <style> nodes to exclude from those\n *                   matches by options.include\n * @param {object}   [options.variables] A map of custom property name/value\n *                   pairs. Property names can omit or include the leading\n *                   double-hyphen (—), and values specified will override\n *                   previous values\n * @param {boolean}  [options.onlyLegacy=true] Determines if the ponyfill will\n *                   only generate legacy-compatible CSS in browsers that lack\n *                   native support (i.e., legacy browsers)\n * @param {boolean}  [options.preserveStatic=true] Determines if CSS\n *                   declarations that do not reference a custom property will\n *                   be preserved in the transformed CSS\n * @param {boolean}  [options.preserveVars=false] Determines if CSS custom\n *                   property declarations will be preserved in the transformed\n *                   CSS\n * @param {boolean}  [options.silent=false] Determines if warning and error\n *                   messages will be displayed on the console\n * @param {boolean}  [options.updateDOM=true] Determines if the ponyfill will\n *                   update the DOM after processing CSS custom properties\n * @param {boolean}  [options.updateURLs=true] Determines if relative url()\n *                   paths will be converted to absolute urls in external CSS\n * @param {boolean}  [options.watch=false] Determines if a MutationObserver will\n *                   be created that will execute the ponyfill when a <link> or\n *                   <style> DOM mutation is observed\n * @param {function} [options.onBeforeSend] Callback before XHR is sent. Passes\n *                   1) the XHR object, 2) source node reference, and 3) the\n *                   source URL as arguments\n * @param {function} [options.onError] Callback after a CSS parsing error has\n *                   occurred or an XHR request has failed. Passes 1) an error\n *                   message, and 2) source node reference, 3) xhr, and 4 url as\n *                   arguments.\n * @param {function} [options.onWarning] Callback after each CSS parsing warning\n *                   has occurred. Passes 1) a warning message as an argument.\n * @param {function} [options.onSuccess] Callback after CSS data has been\n *                   collected from each node and before CSS custom properties\n *                   have been transformed. Allows modifying the CSS data before\n *                   it is transformed by returning any string value (or false\n *                   to skip). Passes 1) CSS text, 2) source node reference, and\n *                   3) the source URL as arguments.\n * @param {function} [options.onComplete] Callback after all CSS has been\n *                   processed, legacy-compatible CSS has been generated, and\n *                   (optionally) the DOM has been updated. Passes 1) a CSS\n *                   string with CSS variable values resolved, 2) an array of\n *                   output <style> node references that have been appended to\n *                   the DOM, 3) an object containing all custom properies names\n *                   and values, and 4) the ponyfill execution time in\n *                   milliseconds.\n * @param {function} [options.onFinally] Callback in modern and legacy browsers\n *                   after the ponyfill has finished all tasks. Passes 1) a\n *                   boolean indicating if the last ponyfill call resulted in a\n *                   style change, 2) a boolean indicating if the current\n *                   browser provides native support for CSS custom properties,\n *                   and 3) the ponyfill execution time in milliseconds.\n * @example\n *\n *   cssVars({\n *     rootElement   : document,\n *     shadowDOM     : false,\n *     include       : 'style,link[rel=\"stylesheet\"]',\n *     exclude       : '',\n *     variables     : {},\n *     onlyLegacy    : true,\n *     preserveStatic: true,\n *     preserveVars  : false,\n *     silent        : false,\n *     updateDOM     : true,\n *     updateURLs    : true,\n *     watch         : false,\n *     onBeforeSend(xhr, node, url) {},\n *     onError(message, node, xhr, url) {},\n *     onWarning(message) {},\n *     onSuccess(cssText, node, url) {},\n *     onComplete(cssText, styleNode, cssVariables, benchmark) {},\n *     onFinally(hasChanged, hasNativeSupport, benchmark)\n *   });\n */ function cssVars() {\n    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    var msgPrefix = \"cssVars(): \";\n    var settings = _extends({}, defaults, options);\n    function handleError(message, sourceNode, xhr, url) {\n        if (!settings.silent && window.console) {\n            console.error(\"\".concat(msgPrefix).concat(message, \"\\n\"), sourceNode);\n        }\n        settings.onError(message, sourceNode, xhr, url);\n    }\n    function handleWarning(message) {\n        if (!settings.silent && window.console) {\n            console.warn(\"\".concat(msgPrefix).concat(message));\n        }\n        settings.onWarning(message);\n    }\n    function handleFinally(hasChanged) {\n        settings.onFinally(Boolean(hasChanged), isNativeSupport, getTimeStamp() - settings.__benchmark);\n    }\n    if (!isBrowser) {\n        return;\n    }\n    if (settings.watch) {\n        settings.watch = defaults.watch;\n        addMutationObserver(settings);\n        cssVars(settings);\n        return;\n    } else if (settings.watch === false && cssVarsObserver) {\n        cssVarsObserver.disconnect();\n        cssVarsObserver = null;\n    }\n    if (!settings.__benchmark) {\n        if (cssVarsIsRunning === settings.rootElement) {\n            cssVarsDebounced(options);\n            return;\n        }\n        var srcNodes = [].slice.call(settings.rootElement.querySelectorAll('[data-cssvars]:not([data-cssvars=\"out\"])'));\n        settings.__benchmark = getTimeStamp();\n        settings.exclude = [ cssVarsObserver ? '[data-cssvars]:not([data-cssvars=\"\"])' : '[data-cssvars=\"out\"]', \"link[disabled]:not([data-cssvars])\", settings.exclude ].filter((function(selector) {\n            return selector;\n        })).join(\",\");\n        settings.variables = fixVarNames(settings.variables);\n        srcNodes.forEach((function(srcNode) {\n            var hasStyleCache = srcNode.nodeName.toLowerCase() === \"style\" && srcNode.__cssVars.text;\n            var hasStyleChanged = hasStyleCache && srcNode.textContent !== srcNode.__cssVars.text;\n            if (hasStyleCache && hasStyleChanged) {\n                srcNode.sheet && (srcNode.sheet.disabled = false);\n                srcNode.setAttribute(\"data-cssvars\", \"\");\n            }\n        }));\n        if (!cssVarsObserver) {\n            var outNodes = [].slice.call(settings.rootElement.querySelectorAll('[data-cssvars=\"out\"]'));\n            outNodes.forEach((function(outNode) {\n                var dataGroup = outNode.getAttribute(\"data-cssvars-group\");\n                var srcNode = dataGroup ? settings.rootElement.querySelector('[data-cssvars=\"src\"][data-cssvars-group=\"'.concat(dataGroup, '\"]')) : null;\n                if (!srcNode) {\n                    outNode.parentNode.removeChild(outNode);\n                }\n            }));\n            if (cssVarsSrcNodeCount && srcNodes.length < cssVarsSrcNodeCount) {\n                cssVarsSrcNodeCount = srcNodes.length;\n                variableStore.dom = {};\n            }\n        }\n    }\n    if (document.readyState !== \"loading\") {\n        if (isNativeSupport && settings.onlyLegacy) {\n            var hasVarChange = false;\n            if (settings.updateDOM) {\n                var targetElm = settings.rootElement.host || (settings.rootElement === document ? document.documentElement : settings.rootElement);\n                Object.keys(settings.variables).forEach((function(key) {\n                    var varValue = settings.variables[key];\n                    hasVarChange = hasVarChange || varValue !== getComputedStyle(targetElm).getPropertyValue(key);\n                    targetElm.style.setProperty(key, varValue);\n                }));\n            }\n            handleFinally(hasVarChange);\n        } else if (!isShadowDOMReady && (settings.shadowDOM || settings.rootElement.shadowRoot || settings.rootElement.host)) {\n            getCssData({\n                rootElement: defaults.rootElement,\n                include: defaults.include,\n                exclude: settings.exclude,\n                skipDisabled: false,\n                onSuccess: function onSuccess(cssText, node, url) {\n                    var isUserDisabled = (node.sheet || {}).disabled && !node.__cssVars;\n                    if (isUserDisabled) {\n                        return false;\n                    }\n                    cssText = cssText.replace(regex.cssComments, \"\").replace(regex.cssMediaQueries, \"\");\n                    cssText = (cssText.match(regex.cssVarDeclRules) || []).join(\"\");\n                    return cssText || false;\n                },\n                onComplete: function onComplete(cssText, cssArray, nodeArray) {\n                    parseVars(cssText, {\n                        store: variableStore.dom,\n                        onWarning: handleWarning\n                    });\n                    isShadowDOMReady = true;\n                    cssVars(settings);\n                }\n            });\n        } else {\n            cssVarsIsRunning = settings.rootElement;\n            getCssData({\n                rootElement: settings.rootElement,\n                include: settings.include,\n                exclude: settings.exclude,\n                skipDisabled: false,\n                onBeforeSend: settings.onBeforeSend,\n                onError: function onError(xhr, node, url) {\n                    var responseUrl = xhr.responseURL || getFullUrl(url, location.href);\n                    var statusText = xhr.statusText ? \"(\".concat(xhr.statusText, \")\") : \"Unspecified Error\" + (xhr.status === 0 ? \" (possibly CORS related)\" : \"\");\n                    var errorMsg = \"CSS XHR Error: \".concat(responseUrl, \" \").concat(xhr.status, \" \").concat(statusText);\n                    handleError(errorMsg, node, xhr, responseUrl);\n                },\n                onSuccess: function onSuccess(cssText, node, url) {\n                    var isUserDisabled = (node.sheet || {}).disabled && !node.__cssVars;\n                    if (isUserDisabled) {\n                        return false;\n                    }\n                    var isLink = node.nodeName.toLowerCase() === \"link\";\n                    var isStyleImport = node.nodeName.toLowerCase() === \"style\" && cssText !== node.textContent;\n                    var returnVal = settings.onSuccess(cssText, node, url);\n                    cssText = returnVal !== undefined && Boolean(returnVal) === false ? \"\" : returnVal || cssText;\n                    if (settings.updateURLs && (isLink || isStyleImport)) {\n                        cssText = fixRelativeCssUrls(cssText, url);\n                    }\n                    return cssText;\n                },\n                onComplete: function onComplete(cssText, cssArray) {\n                    var nodeArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];\n                    var currentVars = _extends({}, variableStore.dom, variableStore.user);\n                    var hasVarChange = false;\n                    variableStore.job = {};\n                    nodeArray.forEach((function(node, i) {\n                        var nodeCSS = cssArray[i];\n                        node.__cssVars = node.__cssVars || {};\n                        node.__cssVars.text = nodeCSS;\n                        if (regex.cssVars.test(nodeCSS)) {\n                            try {\n                                var cssTree = parseCss(nodeCSS, {\n                                    preserveStatic: settings.preserveStatic,\n                                    removeComments: true\n                                });\n                                parseVars(cssTree, {\n                                    parseHost: Boolean(settings.rootElement.host),\n                                    store: variableStore.dom,\n                                    onWarning: handleWarning\n                                });\n                                node.__cssVars.tree = cssTree;\n                            } catch (err) {\n                                handleError(err.message, node);\n                            }\n                        }\n                    }));\n                    _extends(variableStore.job, variableStore.dom);\n                    if (settings.updateDOM) {\n                        _extends(variableStore.user, settings.variables);\n                        _extends(variableStore.job, variableStore.user);\n                    } else {\n                        _extends(variableStore.job, variableStore.user, settings.variables);\n                        _extends(currentVars, settings.variables);\n                    }\n                    hasVarChange = counters.job > 0 && Boolean(Object.keys(variableStore.job).length > Object.keys(currentVars).length || Boolean(Object.keys(currentVars).length && Object.keys(variableStore.job).some((function(key) {\n                        return variableStore.job[key] !== currentVars[key];\n                    }))));\n                    if (hasVarChange) {\n                        resetCssNodes(settings.rootElement);\n                        cssVars(settings);\n                    } else {\n                        var outCssArray = [];\n                        var outNodeArray = [];\n                        var hasKeyframesWithVars = false;\n                        if (settings.updateDOM) {\n                            counters.job++;\n                        }\n                        nodeArray.forEach((function(node, i) {\n                            var isSkip = !node.__cssVars.tree;\n                            if (node.__cssVars.tree) {\n                                try {\n                                    transformCss(node.__cssVars.tree, _extends({}, settings, {\n                                        variables: variableStore.job,\n                                        onWarning: handleWarning\n                                    }));\n                                    var outCss = stringifyCss(node.__cssVars.tree);\n                                    if (settings.updateDOM) {\n                                        var nodeCSS = cssArray[i];\n                                        var hasCSSVarFunc = regex.cssVarFunc.test(nodeCSS);\n                                        if (!node.getAttribute(\"data-cssvars\")) {\n                                            node.setAttribute(\"data-cssvars\", \"src\");\n                                        }\n                                        if (outCss.length && hasCSSVarFunc) {\n                                            var dataGroup = node.getAttribute(\"data-cssvars-group\") || ++counters.group;\n                                            var outCssNoSpaces = outCss.replace(/\\s/g, \"\");\n                                            var outNode = settings.rootElement.querySelector('[data-cssvars=\"out\"][data-cssvars-group=\"'.concat(dataGroup, '\"]')) || document.createElement(\"style\");\n                                            hasKeyframesWithVars = hasKeyframesWithVars || regex.cssKeyframes.test(outCss);\n                                            if (settings.preserveStatic) {\n                                                node.sheet && (node.sheet.disabled = true);\n                                            }\n                                            if (!outNode.hasAttribute(\"data-cssvars\")) {\n                                                outNode.setAttribute(\"data-cssvars\", \"out\");\n                                            }\n                                            if (outCssNoSpaces === node.textContent.replace(/\\s/g, \"\")) {\n                                                isSkip = true;\n                                                if (outNode && outNode.parentNode) {\n                                                    node.removeAttribute(\"data-cssvars-group\");\n                                                    outNode.parentNode.removeChild(outNode);\n                                                }\n                                            } else if (outCssNoSpaces !== outNode.textContent.replace(/\\s/g, \"\")) {\n                                                [ node, outNode ].forEach((function(n) {\n                                                    n.setAttribute(\"data-cssvars-job\", counters.job);\n                                                    n.setAttribute(\"data-cssvars-group\", dataGroup);\n                                                }));\n                                                outNode.textContent = outCss;\n                                                outCssArray.push(outCss);\n                                                outNodeArray.push(outNode);\n                                                if (!outNode.parentNode) {\n                                                    node.parentNode.insertBefore(outNode, node.nextSibling);\n                                                }\n                                            }\n                                        }\n                                    } else {\n                                        if (node.textContent.replace(/\\s/g, \"\") !== outCss) {\n                                            outCssArray.push(outCss);\n                                        }\n                                    }\n                                } catch (err) {\n                                    handleError(err.message, node);\n                                }\n                            }\n                            if (isSkip) {\n                                node.setAttribute(\"data-cssvars\", \"skip\");\n                            }\n                            if (!node.hasAttribute(\"data-cssvars-job\")) {\n                                node.setAttribute(\"data-cssvars-job\", counters.job);\n                            }\n                        }));\n                        cssVarsSrcNodeCount = settings.rootElement.querySelectorAll('[data-cssvars]:not([data-cssvars=\"out\"])').length;\n                        if (settings.shadowDOM) {\n                            var elms = [].concat(settings.rootElement).concat([].slice.call(settings.rootElement.querySelectorAll(\"*\")));\n                            for (var i = 0, elm; elm = elms[i]; ++i) {\n                                if (elm.shadowRoot && elm.shadowRoot.querySelector(\"style\")) {\n                                    var shadowSettings = _extends({}, settings, {\n                                        rootElement: elm.shadowRoot\n                                    });\n                                    cssVars(shadowSettings);\n                                }\n                            }\n                        }\n                        if (settings.updateDOM && hasKeyframesWithVars) {\n                            fixKeyframes(settings.rootElement);\n                        }\n                        cssVarsIsRunning = false;\n                        settings.onComplete(outCssArray.join(\"\"), outNodeArray, JSON.parse(JSON.stringify(variableStore.job)), getTimeStamp() - settings.__benchmark);\n                        handleFinally(outNodeArray.length);\n                    }\n                }\n            });\n        }\n    } else {\n        document.addEventListener(\"DOMContentLoaded\", (function init(evt) {\n            cssVars(options);\n            document.removeEventListener(\"DOMContentLoaded\", init);\n        }));\n    }\n}\n\ncssVars.reset = function() {\n    counters.job = 0;\n    counters.group = 0;\n    cssVarsIsRunning = false;\n    if (cssVarsObserver) {\n        cssVarsObserver.disconnect();\n        cssVarsObserver = null;\n    }\n    cssVarsSrcNodeCount = 0;\n    debounceTimer = null;\n    isShadowDOMReady = false;\n    for (var prop in variableStore) {\n        variableStore[prop] = {};\n    }\n};\n\nfunction addMutationObserver(settings) {\n    function isDisabled(node) {\n        var isDisabledAttr = isLink(node) && node.hasAttribute(\"disabled\");\n        var isDisabledSheet = (node.sheet || {}).disabled;\n        return isDisabledAttr || isDisabledSheet;\n    }\n    function isLink(node) {\n        var isStylesheet = node.nodeName.toLowerCase() === \"link\" && (node.getAttribute(\"rel\") || \"\").indexOf(\"stylesheet\") !== -1;\n        return isStylesheet;\n    }\n    function isStyle(node) {\n        return node.nodeName.toLowerCase() === \"style\";\n    }\n    function isValidAttributeMutation(mutation) {\n        var isValid = false;\n        if (mutation.type === \"attributes\" && isLink(mutation.target) && !isDisabled(mutation.target)) {\n            var isEnabledMutation = mutation.attributeName === \"disabled\";\n            var isHrefMutation = mutation.attributeName === \"href\";\n            var isSkipNode = mutation.target.getAttribute(\"data-cssvars\") === \"skip\";\n            var isSrcNode = mutation.target.getAttribute(\"data-cssvars\") === \"src\";\n            if (isEnabledMutation) {\n                isValid = !isSkipNode && !isSrcNode;\n            } else if (isHrefMutation) {\n                if (isSkipNode) {\n                    mutation.target.setAttribute(\"data-cssvars\", \"\");\n                } else if (isSrcNode) {\n                    resetCssNodes(settings.rootElement, true);\n                }\n                isValid = true;\n            }\n        }\n        return isValid;\n    }\n    function isValidStyleTextMutation(mutation) {\n        var isValid = false;\n        if (mutation.type === \"childList\") {\n            var isStyleElm = isStyle(mutation.target);\n            var isOutNode = mutation.target.getAttribute(\"data-cssvars\") === \"out\";\n            isValid = isStyleElm && !isOutNode;\n        }\n        return isValid;\n    }\n    function isValidAddMutation(mutation) {\n        var isValid = false;\n        if (mutation.type === \"childList\") {\n            isValid = [].slice.call(mutation.addedNodes).some((function(node) {\n                var isElm = node.nodeType === 1;\n                var hasAttr = isElm && node.hasAttribute(\"data-cssvars\");\n                var isStyleWithVars = isStyle(node) && regex.cssVars.test(node.textContent);\n                var isValid = !hasAttr && (isLink(node) || isStyleWithVars);\n                return isValid && !isDisabled(node);\n            }));\n        }\n        return isValid;\n    }\n    function isValidRemoveMutation(mutation) {\n        var isValid = false;\n        if (mutation.type === \"childList\") {\n            isValid = [].slice.call(mutation.removedNodes).some((function(node) {\n                var isElm = node.nodeType === 1;\n                var isOutNode = isElm && node.getAttribute(\"data-cssvars\") === \"out\";\n                var isSrcNode = isElm && node.getAttribute(\"data-cssvars\") === \"src\";\n                var isValid = isSrcNode;\n                if (isSrcNode || isOutNode) {\n                    var dataGroup = node.getAttribute(\"data-cssvars-group\");\n                    var orphanNode = settings.rootElement.querySelector('[data-cssvars-group=\"'.concat(dataGroup, '\"]'));\n                    if (isSrcNode) {\n                        resetCssNodes(settings.rootElement, true);\n                    }\n                    if (orphanNode) {\n                        orphanNode.parentNode.removeChild(orphanNode);\n                    }\n                }\n                return isValid;\n            }));\n        }\n        return isValid;\n    }\n    if (!window.MutationObserver) {\n        return;\n    }\n    if (cssVarsObserver) {\n        cssVarsObserver.disconnect();\n        cssVarsObserver = null;\n    }\n    cssVarsObserver = new MutationObserver((function(mutations) {\n        var hasValidMutation = mutations.some((function(mutation) {\n            return isValidAttributeMutation(mutation) || isValidStyleTextMutation(mutation) || isValidAddMutation(mutation) || isValidRemoveMutation(mutation);\n        }));\n        if (hasValidMutation) {\n            cssVars(settings);\n        }\n    }));\n    cssVarsObserver.observe(document.documentElement, {\n        attributes: true,\n        attributeFilter: [ \"disabled\", \"href\" ],\n        childList: true,\n        subtree: true\n    });\n}\n\nfunction cssVarsDebounced(settings) {\n    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;\n    clearTimeout(debounceTimer);\n    debounceTimer = setTimeout((function() {\n        settings.__benchmark = null;\n        cssVars(settings);\n    }), delay);\n}\n\nfunction fixKeyframes(rootElement) {\n    var animationNameProp = [ \"animation-name\", \"-moz-animation-name\", \"-webkit-animation-name\" ].filter((function(prop) {\n        return getComputedStyle(document.body)[prop];\n    }))[0];\n    if (animationNameProp) {\n        var allNodes = rootElement.getElementsByTagName(\"*\");\n        var keyframeNodes = [];\n        var nameMarker = \"__CSSVARSPONYFILL-KEYFRAMES__\";\n        for (var i = 0, len = allNodes.length; i < len; i++) {\n            var node = allNodes[i];\n            var animationName = getComputedStyle(node)[animationNameProp];\n            if (animationName !== \"none\") {\n                node.style[animationNameProp] += nameMarker;\n                keyframeNodes.push(node);\n            }\n        }\n        void document.body.offsetHeight;\n        for (var _i = 0, _len = keyframeNodes.length; _i < _len; _i++) {\n            var nodeStyle = keyframeNodes[_i].style;\n            nodeStyle[animationNameProp] = nodeStyle[animationNameProp].replace(nameMarker, \"\");\n        }\n    }\n}\n\nfunction fixRelativeCssUrls(cssText, baseUrl) {\n    var cssUrls = cssText.replace(regex.cssComments, \"\").match(regex.cssUrls) || [];\n    cssUrls.forEach((function(cssUrl) {\n        var oldUrl = cssUrl.replace(regex.cssUrls, \"$1\");\n        var newUrl = getFullUrl(oldUrl, baseUrl);\n        cssText = cssText.replace(cssUrl, cssUrl.replace(oldUrl, newUrl));\n    }));\n    return cssText;\n}\n\nfunction fixVarNames() {\n    var varObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    var reLeadingHyphens = /^-{2}/;\n    return Object.keys(varObj).reduce((function(obj, value) {\n        var key = reLeadingHyphens.test(value) ? value : \"--\".concat(value.replace(/^-+/, \"\"));\n        obj[key] = varObj[value];\n        return obj;\n    }), {});\n}\n\nfunction getFullUrl(url) {\n    var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : location.href;\n    var d = document.implementation.createHTMLDocument(\"\");\n    var b = d.createElement(\"base\");\n    var a = d.createElement(\"a\");\n    d.head.appendChild(b);\n    d.body.appendChild(a);\n    b.href = base;\n    a.href = url;\n    return a.href;\n}\n\nfunction getTimeStamp() {\n    return isBrowser && (window.performance || {}).now ? window.performance.now() : (new Date).getTime();\n}\n\nfunction resetCssNodes(rootElement) {\n    var resetDOMVariableStore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n    var resetNodes = [].slice.call(rootElement.querySelectorAll('[data-cssvars=\"skip\"],[data-cssvars=\"src\"]'));\n    resetNodes.forEach((function(node) {\n        return node.setAttribute(\"data-cssvars\", \"\");\n    }));\n    if (resetDOMVariableStore) {\n        variableStore.dom = {};\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (cssVars);\n//# sourceMappingURL=css-vars-ponyfill.esm.js.map\n\n\n//# sourceURL=webpack://fsa-design-system/./node_modules/css-vars-ponyfill/dist/css-vars-ponyfill.esm.js?");

/***/ }),

/***/ "./node_modules/dwnld-attr-polyfill/dist/index.js":
/*!********************************************************!*\
  !*** ./node_modules/dwnld-attr-polyfill/dist/index.js ***!
  \********************************************************/
/***/ (function() {

eval("!function(){\"use strict\";var t=\"undefined\"!=typeof window,e=t&&\"download\"in document.createElement(\"a\"),n=t&&void 0!==window.navigator.msSaveBlob;!e&&n&&document.addEventListener(\"click\",(function(t){var e=t.target;if(\"A\"===e.tagName&&e.hasAttribute(\"download\")){t.preventDefault();var n=e.href,o=e.getAttribute(\"download\")||n.split(\"/\").pop(),a=new XMLHttpRequest;a.open(\"GET\",n),a.responseType=\"blob\",a.onreadystatechange=function(){4===a.readyState&&(200===a.status?window.navigator.msSaveBlob(a.response,o):console.error(\"download-attribute-polyfill:\",a.status,a.statusText))},a.send()}}))}();\n\n\n//# sourceURL=webpack://fsa-design-system/./node_modules/dwnld-attr-polyfill/dist/index.js?");

/***/ }),

/***/ "./node_modules/element-closest-polyfill/index.js":
/*!********************************************************!*\
  !*** ./node_modules/element-closest-polyfill/index.js ***!
  \********************************************************/
/***/ (function() {

eval("if (typeof Element !== \"undefined\") {\n    if (!Element.prototype.matches) {\n        Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;\n    }\n\n    if (!Element.prototype.closest) {\n        Element.prototype.closest = function (s) {\n            var el = this;\n\n            do {\n                if (el.matches(s)) return el;\n                el = el.parentElement || el.parentNode;\n            } while (el !== null && el.nodeType === 1);\n            \n            return null;\n        };\n    }\n}\n\n\n//# sourceURL=webpack://fsa-design-system/./node_modules/element-closest-polyfill/index.js?");

/***/ }),

/***/ "./node_modules/ev-emitter/ev-emitter.js":
/*!***********************************************!*\
  !*** ./node_modules/ev-emitter/ev-emitter.js ***!
  \***********************************************/
/***/ (function(module) {

eval("/**\n * EvEmitter v2.1.1\n * Lil' event emitter\n * MIT License\n */\n\n( function( global, factory ) {\n  // universal module definition\n  if (  true && module.exports ) {\n    // CommonJS - Browserify, Webpack\n    module.exports = factory();\n  } else {\n    // Browser globals\n    global.EvEmitter = factory();\n  }\n\n}( typeof window != 'undefined' ? window : this, function() {\n\nfunction EvEmitter() {}\n\nlet proto = EvEmitter.prototype;\n\nproto.on = function( eventName, listener ) {\n  if ( !eventName || !listener ) return this;\n\n  // set events hash\n  let events = this._events = this._events || {};\n  // set listeners array\n  let listeners = events[ eventName ] = events[ eventName ] || [];\n  // only add once\n  if ( !listeners.includes( listener ) ) {\n    listeners.push( listener );\n  }\n\n  return this;\n};\n\nproto.once = function( eventName, listener ) {\n  if ( !eventName || !listener ) return this;\n\n  // add event\n  this.on( eventName, listener );\n  // set once flag\n  // set onceEvents hash\n  let onceEvents = this._onceEvents = this._onceEvents || {};\n  // set onceListeners object\n  let onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};\n  // set flag\n  onceListeners[ listener ] = true;\n\n  return this;\n};\n\nproto.off = function( eventName, listener ) {\n  let listeners = this._events && this._events[ eventName ];\n  if ( !listeners || !listeners.length ) return this;\n\n  let index = listeners.indexOf( listener );\n  if ( index != -1 ) {\n    listeners.splice( index, 1 );\n  }\n\n  return this;\n};\n\nproto.emitEvent = function( eventName, args ) {\n  let listeners = this._events && this._events[ eventName ];\n  if ( !listeners || !listeners.length ) return this;\n\n  // copy over to avoid interference if .off() in listener\n  listeners = listeners.slice( 0 );\n  args = args || [];\n  // once stuff\n  let onceListeners = this._onceEvents && this._onceEvents[ eventName ];\n\n  for ( let listener of listeners ) {\n    let isOnce = onceListeners && onceListeners[ listener ];\n    if ( isOnce ) {\n      // remove listener\n      // remove before trigger to prevent recursion\n      this.off( eventName, listener );\n      // unset once flag\n      delete onceListeners[ listener ];\n    }\n    // trigger listener\n    listener.apply( this, args );\n  }\n\n  return this;\n};\n\nproto.allOff = function() {\n  delete this._events;\n  delete this._onceEvents;\n  return this;\n};\n\nreturn EvEmitter;\n\n} ) );\n\n\n//# sourceURL=webpack://fsa-design-system/./node_modules/ev-emitter/ev-emitter.js?");

/***/ }),

/***/ "./src/components/fhrs/LocalAuthorityMap/assets/fhrs-map.svg":
/*!*******************************************************************!*\
  !*** ./src/components/fhrs/LocalAuthorityMap/assets/fhrs-map.svg ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"./components/fhrs/LocalAuthorityMap/assets/fhrs-map.svg\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/fhrs/LocalAuthorityMap/assets/fhrs-map.svg?");

/***/ }),

/***/ "./src/components/article/AllergensTable/allergensTable.html.twig":
/*!************************************************************************!*\
  !*** ./src/components/article/AllergensTable/allergensTable.html.twig ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/article/AllergensTable/allergensTable.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/AllergensTable/allergensTable.html.twig?");

/***/ }),

/***/ "./src/components/article/ArticleHero/articleHero.html.twig":
/*!******************************************************************!*\
  !*** ./src/components/article/ArticleHero/articleHero.html.twig ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/article/ArticleHero/articleHero.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/ArticleHero/articleHero.html.twig?");

/***/ }),

/***/ "./src/components/article/BackTo/backTo.html.twig":
/*!********************************************************!*\
  !*** ./src/components/article/BackTo/backTo.html.twig ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/article/BackTo/backTo.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/BackTo/backTo.html.twig?");

/***/ }),

/***/ "./src/components/article/BackToTop/backToTop.html.twig":
/*!**************************************************************!*\
  !*** ./src/components/article/BackToTop/backToTop.html.twig ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/article/BackToTop/backToTop.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/BackToTop/backToTop.html.twig?");

/***/ }),

/***/ "./src/components/article/ChartBlock/chartBlock.html.twig":
/*!****************************************************************!*\
  !*** ./src/components/article/ChartBlock/chartBlock.html.twig ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/article/ChartBlock/chartBlock.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/ChartBlock/chartBlock.html.twig?");

/***/ }),

/***/ "./src/components/article/ContentMetaData/contentMetaData.html.twig":
/*!**************************************************************************!*\
  !*** ./src/components/article/ContentMetaData/contentMetaData.html.twig ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/article/ContentMetaData/contentMetaData.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/ContentMetaData/contentMetaData.html.twig?");

/***/ }),

/***/ "./src/components/article/DocumentDownload/documentDownload.html.twig":
/*!****************************************************************************!*\
  !*** ./src/components/article/DocumentDownload/documentDownload.html.twig ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/article/DocumentDownload/documentDownload.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/DocumentDownload/documentDownload.html.twig?");

/***/ }),

/***/ "./src/components/article/ExplanationBlock/explanationBlock.html.twig":
/*!****************************************************************************!*\
  !*** ./src/components/article/ExplanationBlock/explanationBlock.html.twig ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/article/ExplanationBlock/explanationBlock.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/ExplanationBlock/explanationBlock.html.twig?");

/***/ }),

/***/ "./src/components/article/FootNotes/footNotes.html.twig":
/*!**************************************************************!*\
  !*** ./src/components/article/FootNotes/footNotes.html.twig ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/article/FootNotes/footNotes.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/FootNotes/footNotes.html.twig?");

/***/ }),

/***/ "./src/components/article/PdfAndPrintButtons/pdfAndPrintButtons.html.twig":
/*!********************************************************************************!*\
  !*** ./src/components/article/PdfAndPrintButtons/pdfAndPrintButtons.html.twig ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/article/PdfAndPrintButtons/pdfAndPrintButtons.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/PdfAndPrintButtons/pdfAndPrintButtons.html.twig?");

/***/ }),

/***/ "./src/components/article/ProductDetails/productDetails.html.twig":
/*!************************************************************************!*\
  !*** ./src/components/article/ProductDetails/productDetails.html.twig ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/article/ProductDetails/productDetails.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/ProductDetails/productDetails.html.twig?");

/***/ }),

/***/ "./src/components/article/QuoteBlock/quoteBlock.html.twig":
/*!****************************************************************!*\
  !*** ./src/components/article/QuoteBlock/quoteBlock.html.twig ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/article/QuoteBlock/quoteBlock.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/QuoteBlock/quoteBlock.html.twig?");

/***/ }),

/***/ "./src/components/article/RegionalVariationBlock/regionalVariationBlock.html.twig":
/*!****************************************************************************************!*\
  !*** ./src/components/article/RegionalVariationBlock/regionalVariationBlock.html.twig ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/article/RegionalVariationBlock/regionalVariationBlock.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/RegionalVariationBlock/regionalVariationBlock.html.twig?");

/***/ }),

/***/ "./src/components/article/RelatedContent/relatedContent.html.twig":
/*!************************************************************************!*\
  !*** ./src/components/article/RelatedContent/relatedContent.html.twig ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/article/RelatedContent/relatedContent.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/RelatedContent/relatedContent.html.twig?");

/***/ }),

/***/ "./src/components/article/RevisionLogBottom/revisionLogBottom.html.twig":
/*!******************************************************************************!*\
  !*** ./src/components/article/RevisionLogBottom/revisionLogBottom.html.twig ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/article/RevisionLogBottom/revisionLogBottom.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/RevisionLogBottom/revisionLogBottom.html.twig?");

/***/ }),

/***/ "./src/components/article/StickySidebar/stickySidebar.html.twig":
/*!**********************************************************************!*\
  !*** ./src/components/article/StickySidebar/stickySidebar.html.twig ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/article/StickySidebar/stickySidebar.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/StickySidebar/stickySidebar.html.twig?");

/***/ }),

/***/ "./src/components/article/SubjectListing/subjectListing.html.twig":
/*!************************************************************************!*\
  !*** ./src/components/article/SubjectListing/subjectListing.html.twig ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/article/SubjectListing/subjectListing.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/SubjectListing/subjectListing.html.twig?");

/***/ }),

/***/ "./src/components/article/TableOfContents/tableOfContents.html.twig":
/*!**************************************************************************!*\
  !*** ./src/components/article/TableOfContents/tableOfContents.html.twig ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/article/TableOfContents/tableOfContents.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/TableOfContents/tableOfContents.html.twig?");

/***/ }),

/***/ "./src/components/article/TeamContacts/teamContacts.html.twig":
/*!********************************************************************!*\
  !*** ./src/components/article/TeamContacts/teamContacts.html.twig ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/article/TeamContacts/teamContacts.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/TeamContacts/teamContacts.html.twig?");

/***/ }),

/***/ "./src/components/article/TextBlock/textBlock.html.twig":
/*!**************************************************************!*\
  !*** ./src/components/article/TextBlock/textBlock.html.twig ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/article/TextBlock/textBlock.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/TextBlock/textBlock.html.twig?");

/***/ }),

/***/ "./src/components/contact/HelpSecondaryMenu/helpSecondaryMenu.html.twig":
/*!******************************************************************************!*\
  !*** ./src/components/contact/HelpSecondaryMenu/helpSecondaryMenu.html.twig ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/contact/HelpSecondaryMenu/helpSecondaryMenu.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/contact/HelpSecondaryMenu/helpSecondaryMenu.html.twig?");

/***/ }),

/***/ "./src/components/contact/PromoLinks/promoLinks.html.twig":
/*!****************************************************************!*\
  !*** ./src/components/contact/PromoLinks/promoLinks.html.twig ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/contact/PromoLinks/promoLinks.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/contact/PromoLinks/promoLinks.html.twig?");

/***/ }),

/***/ "./src/components/fhrs/Badge/badge.html.twig":
/*!***************************************************!*\
  !*** ./src/components/fhrs/Badge/badge.html.twig ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/fhrs/Badge/badge.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/fhrs/Badge/badge.html.twig?");

/***/ }),

/***/ "./src/components/fhrs/BadgeDownload/badgeDownload.html.twig":
/*!*******************************************************************!*\
  !*** ./src/components/fhrs/BadgeDownload/badgeDownload.html.twig ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/fhrs/BadgeDownload/badgeDownload.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/fhrs/BadgeDownload/badgeDownload.html.twig?");

/***/ }),

/***/ "./src/components/fhrs/BusinessHero/businessHero.html.twig":
/*!*****************************************************************!*\
  !*** ./src/components/fhrs/BusinessHero/businessHero.html.twig ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/fhrs/BusinessHero/businessHero.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/fhrs/BusinessHero/businessHero.html.twig?");

/***/ }),

/***/ "./src/components/fhrs/LocalAuthority/localAuthority.html.twig":
/*!*********************************************************************!*\
  !*** ./src/components/fhrs/LocalAuthority/localAuthority.html.twig ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/fhrs/LocalAuthority/localAuthority.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/fhrs/LocalAuthority/localAuthority.html.twig?");

/***/ }),

/***/ "./src/components/fhrs/LocalAuthorityMap/localAuthorityMap.html.twig":
/*!***************************************************************************!*\
  !*** ./src/components/fhrs/LocalAuthorityMap/localAuthorityMap.html.twig ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/fhrs/LocalAuthorityMap/localAuthorityMap.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/fhrs/LocalAuthorityMap/localAuthorityMap.html.twig?");

/***/ }),

/***/ "./src/components/fhrs/MapInfobox/mapInfobox.html.twig":
/*!*************************************************************!*\
  !*** ./src/components/fhrs/MapInfobox/mapInfobox.html.twig ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/fhrs/MapInfobox/mapInfobox.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/fhrs/MapInfobox/mapInfobox.html.twig?");

/***/ }),

/***/ "./src/components/fhrs/RatingsSearchBox/ratingsSearchBox.html.twig":
/*!*************************************************************************!*\
  !*** ./src/components/fhrs/RatingsSearchBox/ratingsSearchBox.html.twig ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/fhrs/RatingsSearchBox/ratingsSearchBox.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/fhrs/RatingsSearchBox/ratingsSearchBox.html.twig?");

/***/ }),

/***/ "./src/components/fhrs/SearchCard/searchCard.html.twig":
/*!*************************************************************!*\
  !*** ./src/components/fhrs/SearchCard/searchCard.html.twig ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/fhrs/SearchCard/searchCard.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/fhrs/SearchCard/searchCard.html.twig?");

/***/ }),

/***/ "./src/components/form/Checkbox/checkbox.html.twig":
/*!*********************************************************!*\
  !*** ./src/components/form/Checkbox/checkbox.html.twig ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/form/Checkbox/checkbox.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/Checkbox/checkbox.html.twig?");

/***/ }),

/***/ "./src/components/form/Dropdown/dropdown.html.twig":
/*!*********************************************************!*\
  !*** ./src/components/form/Dropdown/dropdown.html.twig ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/form/Dropdown/dropdown.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/Dropdown/dropdown.html.twig?");

/***/ }),

/***/ "./src/components/form/EmailField/emailField.html.twig":
/*!*************************************************************!*\
  !*** ./src/components/form/EmailField/emailField.html.twig ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/form/EmailField/emailField.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/EmailField/emailField.html.twig?");

/***/ }),

/***/ "./src/components/form/ErrorBox/errorBox.html.twig":
/*!*********************************************************!*\
  !*** ./src/components/form/ErrorBox/errorBox.html.twig ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/form/ErrorBox/errorBox.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/ErrorBox/errorBox.html.twig?");

/***/ }),

/***/ "./src/components/form/FileUpload/fileUpload.html.twig":
/*!*************************************************************!*\
  !*** ./src/components/form/FileUpload/fileUpload.html.twig ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/form/FileUpload/fileUpload.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/FileUpload/fileUpload.html.twig?");

/***/ }),

/***/ "./src/components/form/InputField/inputField.html.twig":
/*!*************************************************************!*\
  !*** ./src/components/form/InputField/inputField.html.twig ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/form/InputField/inputField.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/InputField/inputField.html.twig?");

/***/ }),

/***/ "./src/components/form/MapField/mapField.html.twig":
/*!*********************************************************!*\
  !*** ./src/components/form/MapField/mapField.html.twig ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/form/MapField/mapField.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/MapField/mapField.html.twig?");

/***/ }),

/***/ "./src/components/form/MessageBox/messageBox.html.twig":
/*!*************************************************************!*\
  !*** ./src/components/form/MessageBox/messageBox.html.twig ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/form/MessageBox/messageBox.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/MessageBox/messageBox.html.twig?");

/***/ }),

/***/ "./src/components/form/MultifieldGroup/multifieldGroup.html.twig":
/*!***********************************************************************!*\
  !*** ./src/components/form/MultifieldGroup/multifieldGroup.html.twig ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/form/MultifieldGroup/multifieldGroup.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/MultifieldGroup/multifieldGroup.html.twig?");

/***/ }),

/***/ "./src/components/form/MultistepFunction/drupal/multistepFunction.html.twig":
/*!**********************************************************************************!*\
  !*** ./src/components/form/MultistepFunction/drupal/multistepFunction.html.twig ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/form/MultistepFunction/drupal/multistepFunction.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/MultistepFunction/drupal/multistepFunction.html.twig?");

/***/ }),

/***/ "./src/components/form/MultistepFunction/multistepFunction.html.twig":
/*!***************************************************************************!*\
  !*** ./src/components/form/MultistepFunction/multistepFunction.html.twig ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/form/MultistepFunction/multistepFunction.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/MultistepFunction/multistepFunction.html.twig?");

/***/ }),

/***/ "./src/components/form/MultivalueField/multivalueField.html.twig":
/*!***********************************************************************!*\
  !*** ./src/components/form/MultivalueField/multivalueField.html.twig ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/form/MultivalueField/multivalueField.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/MultivalueField/multivalueField.html.twig?");

/***/ }),

/***/ "./src/components/form/Radio/radio.html.twig":
/*!***************************************************!*\
  !*** ./src/components/form/Radio/radio.html.twig ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/form/Radio/radio.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/Radio/radio.html.twig?");

/***/ }),

/***/ "./src/components/form/Step/step.html.twig":
/*!*************************************************!*\
  !*** ./src/components/form/Step/step.html.twig ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/form/Step/step.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/Step/step.html.twig?");

/***/ }),

/***/ "./src/components/form/Tabs/tabs.html.twig":
/*!*************************************************!*\
  !*** ./src/components/form/Tabs/tabs.html.twig ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/form/Tabs/tabs.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/Tabs/tabs.html.twig?");

/***/ }),

/***/ "./src/components/form/Textarea/textarea.html.twig":
/*!*********************************************************!*\
  !*** ./src/components/form/Textarea/textarea.html.twig ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/form/Textarea/textarea.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/Textarea/textarea.html.twig?");

/***/ }),

/***/ "./src/components/form/TitleAndText/titleAndText.html.twig":
/*!*****************************************************************!*\
  !*** ./src/components/form/TitleAndText/titleAndText.html.twig ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/form/TitleAndText/titleAndText.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/TitleAndText/titleAndText.html.twig?");

/***/ }),

/***/ "./src/components/form/ToggleButton/toggleButton.html.twig":
/*!*****************************************************************!*\
  !*** ./src/components/form/ToggleButton/toggleButton.html.twig ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/form/ToggleButton/toggleButton.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/ToggleButton/toggleButton.html.twig?");

/***/ }),

/***/ "./src/components/form/Tooltip/tooltip.html.twig":
/*!*******************************************************!*\
  !*** ./src/components/form/Tooltip/tooltip.html.twig ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/form/Tooltip/tooltip.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/Tooltip/tooltip.html.twig?");

/***/ }),

/***/ "./src/components/general/Breadcrumb/breadcrumbs.html.twig":
/*!*****************************************************************!*\
  !*** ./src/components/general/Breadcrumb/breadcrumbs.html.twig ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/general/Breadcrumb/breadcrumbs.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/Breadcrumb/breadcrumbs.html.twig?");

/***/ }),

/***/ "./src/components/general/Button/button.html.twig":
/*!********************************************************!*\
  !*** ./src/components/general/Button/button.html.twig ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/general/Button/button.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/Button/button.html.twig?");

/***/ }),

/***/ "./src/components/general/CookieBanner/cookieBanner.html.twig":
/*!********************************************************************!*\
  !*** ./src/components/general/CookieBanner/cookieBanner.html.twig ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/general/CookieBanner/cookieBanner.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/CookieBanner/cookieBanner.html.twig?");

/***/ }),

/***/ "./src/components/general/DropdownMenu/dropdownMenu.html.twig":
/*!********************************************************************!*\
  !*** ./src/components/general/DropdownMenu/dropdownMenu.html.twig ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/general/DropdownMenu/dropdownMenu.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/DropdownMenu/dropdownMenu.html.twig?");

/***/ }),

/***/ "./src/components/general/ErrorResponse/errorResponse.html.twig":
/*!**********************************************************************!*\
  !*** ./src/components/general/ErrorResponse/errorResponse.html.twig ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/general/ErrorResponse/errorResponse.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/ErrorResponse/errorResponse.html.twig?");

/***/ }),

/***/ "./src/components/general/ExternalLink/externalLink.html.twig":
/*!********************************************************************!*\
  !*** ./src/components/general/ExternalLink/externalLink.html.twig ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/general/ExternalLink/externalLink.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/ExternalLink/externalLink.html.twig?");

/***/ }),

/***/ "./src/components/general/Feedback/feedback.html.twig":
/*!************************************************************!*\
  !*** ./src/components/general/Feedback/feedback.html.twig ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/general/Feedback/feedback.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/Feedback/feedback.html.twig?");

/***/ }),

/***/ "./src/components/general/Footer/footer.html.twig":
/*!********************************************************!*\
  !*** ./src/components/general/Footer/footer.html.twig ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/general/Footer/footer.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/Footer/footer.html.twig?");

/***/ }),

/***/ "./src/components/general/GuidancePopup/guidancePopup.html.twig":
/*!**********************************************************************!*\
  !*** ./src/components/general/GuidancePopup/guidancePopup.html.twig ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/general/GuidancePopup/guidancePopup.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/GuidancePopup/guidancePopup.html.twig?");

/***/ }),

/***/ "./src/components/general/Header/header.html.twig":
/*!********************************************************!*\
  !*** ./src/components/general/Header/header.html.twig ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/general/Header/header.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/Header/header.html.twig?");

/***/ }),

/***/ "./src/components/general/Hero/hero.html.twig":
/*!****************************************************!*\
  !*** ./src/components/general/Hero/hero.html.twig ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/general/Hero/hero.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/Hero/hero.html.twig?");

/***/ }),

/***/ "./src/components/general/Link/link.html.twig":
/*!****************************************************!*\
  !*** ./src/components/general/Link/link.html.twig ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/general/Link/link.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/Link/link.html.twig?");

/***/ }),

/***/ "./src/components/general/MailLink/mailLink.html.twig":
/*!************************************************************!*\
  !*** ./src/components/general/MailLink/mailLink.html.twig ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/general/MailLink/mailLink.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/MailLink/mailLink.html.twig?");

/***/ }),

/***/ "./src/components/general/NationalArchiveLink/nationalArchiveLink.html.twig":
/*!**********************************************************************************!*\
  !*** ./src/components/general/NationalArchiveLink/nationalArchiveLink.html.twig ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/general/NationalArchiveLink/nationalArchiveLink.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/NationalArchiveLink/nationalArchiveLink.html.twig?");

/***/ }),

/***/ "./src/components/general/Navigation/navigation.html.twig":
/*!****************************************************************!*\
  !*** ./src/components/general/Navigation/navigation.html.twig ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/general/Navigation/navigation.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/Navigation/navigation.html.twig?");

/***/ }),

/***/ "./src/components/general/SiteMap/siteMap.html.twig":
/*!**********************************************************!*\
  !*** ./src/components/general/SiteMap/siteMap.html.twig ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/general/SiteMap/siteMap.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/SiteMap/siteMap.html.twig?");

/***/ }),

/***/ "./src/components/general/SkipToMainContent/skipToMainContent.html.twig":
/*!******************************************************************************!*\
  !*** ./src/components/general/SkipToMainContent/skipToMainContent.html.twig ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/general/SkipToMainContent/skipToMainContent.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/SkipToMainContent/skipToMainContent.html.twig?");

/***/ }),

/***/ "./src/components/general/TemporaryMessage/temporaryMessage.html.twig":
/*!****************************************************************************!*\
  !*** ./src/components/general/TemporaryMessage/temporaryMessage.html.twig ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/general/TemporaryMessage/temporaryMessage.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/TemporaryMessage/temporaryMessage.html.twig?");

/***/ }),

/***/ "./src/components/haccp/SaveProgress/saveProgress.html.twig":
/*!******************************************************************!*\
  !*** ./src/components/haccp/SaveProgress/saveProgress.html.twig ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/haccp/SaveProgress/saveProgress.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/haccp/SaveProgress/saveProgress.html.twig?");

/***/ }),

/***/ "./src/components/haccp/WebToolProgressBar/webToolProgressBar.html.twig":
/*!******************************************************************************!*\
  !*** ./src/components/haccp/WebToolProgressBar/webToolProgressBar.html.twig ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/haccp/WebToolProgressBar/webToolProgressBar.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/haccp/WebToolProgressBar/webToolProgressBar.html.twig?");

/***/ }),

/***/ "./src/components/haccp/WebToolStudiesTable/webToolStudiesTable.html.twig":
/*!********************************************************************************!*\
  !*** ./src/components/haccp/WebToolStudiesTable/webToolStudiesTable.html.twig ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/haccp/WebToolStudiesTable/webToolStudiesTable.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/haccp/WebToolStudiesTable/webToolStudiesTable.html.twig?");

/***/ }),

/***/ "./src/components/landing/CampaignBlock/campaignBlock.html.twig":
/*!**********************************************************************!*\
  !*** ./src/components/landing/CampaignBlock/campaignBlock.html.twig ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/landing/CampaignBlock/campaignBlock.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/landing/CampaignBlock/campaignBlock.html.twig?");

/***/ }),

/***/ "./src/components/landing/LandingLinks/landingLinks.html.twig":
/*!********************************************************************!*\
  !*** ./src/components/landing/LandingLinks/landingLinks.html.twig ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/landing/LandingLinks/landingLinks.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/landing/LandingLinks/landingLinks.html.twig?");

/***/ }),

/***/ "./src/components/landing/LandingText/landingText.html.twig":
/*!******************************************************************!*\
  !*** ./src/components/landing/LandingText/landingText.html.twig ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/landing/LandingText/landingText.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/landing/LandingText/landingText.html.twig?");

/***/ }),

/***/ "./src/components/landing/LandingTitle/landingTitle.html.twig":
/*!********************************************************************!*\
  !*** ./src/components/landing/LandingTitle/landingTitle.html.twig ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/landing/LandingTitle/landingTitle.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/landing/LandingTitle/landingTitle.html.twig?");

/***/ }),

/***/ "./src/components/landing/LargePromoGroup/largePromoGroup.html.twig":
/*!**************************************************************************!*\
  !*** ./src/components/landing/LargePromoGroup/largePromoGroup.html.twig ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/landing/LargePromoGroup/largePromoGroup.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/landing/LargePromoGroup/largePromoGroup.html.twig?");

/***/ }),

/***/ "./src/components/landing/LatestTeaser/latestTeaser.html.twig":
/*!********************************************************************!*\
  !*** ./src/components/landing/LatestTeaser/latestTeaser.html.twig ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/landing/LatestTeaser/latestTeaser.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/landing/LatestTeaser/latestTeaser.html.twig?");

/***/ }),

/***/ "./src/components/landing/PromoGroup/promoGroup.html.twig":
/*!****************************************************************!*\
  !*** ./src/components/landing/PromoGroup/promoGroup.html.twig ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/landing/PromoGroup/promoGroup.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/landing/PromoGroup/promoGroup.html.twig?");

/***/ }),

/***/ "./src/components/landing/ServiceLinks/serviceLinks.html.twig":
/*!********************************************************************!*\
  !*** ./src/components/landing/ServiceLinks/serviceLinks.html.twig ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/landing/ServiceLinks/serviceLinks.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/landing/ServiceLinks/serviceLinks.html.twig?");

/***/ }),

/***/ "./src/components/landing/TitleAndDescription/titleAndDescription.html.twig":
/*!**********************************************************************************!*\
  !*** ./src/components/landing/TitleAndDescription/titleAndDescription.html.twig ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/landing/TitleAndDescription/titleAndDescription.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/landing/TitleAndDescription/titleAndDescription.html.twig?");

/***/ }),

/***/ "./src/components/multipageguide/Pagination/pagination.html.twig":
/*!***********************************************************************!*\
  !*** ./src/components/multipageguide/Pagination/pagination.html.twig ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/multipageguide/Pagination/pagination.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/multipageguide/Pagination/pagination.html.twig?");

/***/ }),

/***/ "./src/components/search/Accordion/accordion.html.twig":
/*!*************************************************************!*\
  !*** ./src/components/search/Accordion/accordion.html.twig ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/search/Accordion/accordion.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/search/Accordion/accordion.html.twig?");

/***/ }),

/***/ "./src/components/search/CollapsibleCheckbox/collapsibleCheckbox.html.twig":
/*!*********************************************************************************!*\
  !*** ./src/components/search/CollapsibleCheckbox/collapsibleCheckbox.html.twig ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/search/CollapsibleCheckbox/collapsibleCheckbox.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/search/CollapsibleCheckbox/collapsibleCheckbox.html.twig?");

/***/ }),

/***/ "./src/components/search/Datepicker/datepicker.html.twig":
/*!***************************************************************!*\
  !*** ./src/components/search/Datepicker/datepicker.html.twig ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/search/Datepicker/datepicker.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/search/Datepicker/datepicker.html.twig?");

/***/ }),

/***/ "./src/components/search/FiltersHeader/filtersHeader.html.twig":
/*!*********************************************************************!*\
  !*** ./src/components/search/FiltersHeader/filtersHeader.html.twig ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/search/FiltersHeader/filtersHeader.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/search/FiltersHeader/filtersHeader.html.twig?");

/***/ }),

/***/ "./src/components/search/FiltersSelected/filtersSelected.html.twig":
/*!*************************************************************************!*\
  !*** ./src/components/search/FiltersSelected/filtersSelected.html.twig ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/search/FiltersSelected/filtersSelected.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/search/FiltersSelected/filtersSelected.html.twig?");

/***/ }),

/***/ "./src/components/search/ListingItem/listingItem.html.twig":
/*!*****************************************************************!*\
  !*** ./src/components/search/ListingItem/listingItem.html.twig ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/search/ListingItem/listingItem.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/search/ListingItem/listingItem.html.twig?");

/***/ }),

/***/ "./src/components/search/Pagination/pagination.html.twig":
/*!***************************************************************!*\
  !*** ./src/components/search/Pagination/pagination.html.twig ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/search/Pagination/pagination.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/search/Pagination/pagination.html.twig?");

/***/ }),

/***/ "./src/components/search/RatingCta/ratingCta.html.twig":
/*!*************************************************************!*\
  !*** ./src/components/search/RatingCta/ratingCta.html.twig ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/search/RatingCta/ratingCta.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/search/RatingCta/ratingCta.html.twig?");

/***/ }),

/***/ "./src/components/search/SearchBar/searchBar.html.twig":
/*!*************************************************************!*\
  !*** ./src/components/search/SearchBar/searchBar.html.twig ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/search/SearchBar/searchBar.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/search/SearchBar/searchBar.html.twig?");

/***/ }),

/***/ "./src/components/search/SearchBarHeader/searchBarHeader.html.twig":
/*!*************************************************************************!*\
  !*** ./src/components/search/SearchBarHeader/searchBarHeader.html.twig ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/search/SearchBarHeader/searchBarHeader.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/search/SearchBarHeader/searchBarHeader.html.twig?");

/***/ }),

/***/ "./src/components/search/SearchNoResults/searchNoResults.html.twig":
/*!*************************************************************************!*\
  !*** ./src/components/search/SearchNoResults/searchNoResults.html.twig ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/search/SearchNoResults/searchNoResults.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/search/SearchNoResults/searchNoResults.html.twig?");

/***/ }),

/***/ "./src/components/search/Showing/showing.html.twig":
/*!*********************************************************!*\
  !*** ./src/components/search/Showing/showing.html.twig ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/search/Showing/showing.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/search/Showing/showing.html.twig?");

/***/ }),

/***/ "./src/components/search/SortBy/sortBy.html.twig":
/*!*******************************************************!*\
  !*** ./src/components/search/SortBy/sortBy.html.twig ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/search/SortBy/sortBy.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/components/search/SortBy/sortBy.html.twig?");

/***/ }),

/***/ "./src/layout/contactLayout/contactLayout.html.twig":
/*!**********************************************************!*\
  !*** ./src/layout/contactLayout/contactLayout.html.twig ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"layout/contactLayout/contactLayout.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/layout/contactLayout/contactLayout.html.twig?");

/***/ }),

/***/ "./src/layout/contentLayout/contentLayout.html.twig":
/*!**********************************************************!*\
  !*** ./src/layout/contentLayout/contentLayout.html.twig ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"layout/contentLayout/contentLayout.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/layout/contentLayout/contentLayout.html.twig?");

/***/ }),

/***/ "./src/layout/fhrsLayout/fhrsLayout.html.twig":
/*!****************************************************!*\
  !*** ./src/layout/fhrsLayout/fhrsLayout.html.twig ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"layout/fhrsLayout/fhrsLayout.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/layout/fhrsLayout/fhrsLayout.html.twig?");

/***/ }),

/***/ "./src/layout/formLayout/formLayout.html.twig":
/*!****************************************************!*\
  !*** ./src/layout/formLayout/formLayout.html.twig ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"layout/formLayout/formLayout.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/layout/formLayout/formLayout.html.twig?");

/***/ }),

/***/ "./src/layout/fullWidth/fullWidth.html.twig":
/*!**************************************************!*\
  !*** ./src/layout/fullWidth/fullWidth.html.twig ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"layout/fullWidth/fullWidth.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/layout/fullWidth/fullWidth.html.twig?");

/***/ }),

/***/ "./src/layout/twoColumn/twoColumn.html.twig":
/*!**************************************************!*\
  !*** ./src/layout/twoColumn/twoColumn.html.twig ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"layout/twoColumn/twoColumn.html.twig\");\n\n//# sourceURL=webpack://fsa-design-system/./src/layout/twoColumn/twoColumn.html.twig?");

/***/ }),

/***/ "./node_modules/image-map-resizer/js/imageMapResizer.min.js":
/*!******************************************************************!*\
  !*** ./node_modules/image-map-resizer/js/imageMapResizer.min.js ***!
  \******************************************************************/
/***/ (function(module, exports) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! Image Map Resizer (imageMapResizer.min.js ) - v1.0.10 - 2019-04-10\n *  Desc: Resize HTML imageMap to scaled image.\n *  Copyright: (c) 2019 David J. Bradshaw - dave@bradshaw.net\n *  License: MIT\n */\n\n!function(){\"use strict\";function r(){function e(){var r={width:u.width/u.naturalWidth,height:u.height/u.naturalHeight},a={width:parseInt(window.getComputedStyle(u,null).getPropertyValue(\"padding-left\"),10),height:parseInt(window.getComputedStyle(u,null).getPropertyValue(\"padding-top\"),10)};i.forEach(function(e,t){var n=0;o[t].coords=e.split(\",\").map(function(e){var t=1==(n=1-n)?\"width\":\"height\";return a[t]+Math.floor(Number(e)*r[t])}).join(\",\")})}function t(e){return e.coords.replace(/ *, */g,\",\").replace(/ +/g,\",\")}function n(){clearTimeout(d),d=setTimeout(e,250)}function r(e){return document.querySelector('img[usemap=\"'+e+'\"]')}var a=this,o=null,i=null,u=null,d=null;\"function\"!=typeof a._resize?(o=a.getElementsByTagName(\"area\"),i=Array.prototype.map.call(o,t),u=r(\"#\"+a.name)||r(a.name),a._resize=e,u.addEventListener(\"load\",e,!1),window.addEventListener(\"focus\",e,!1),window.addEventListener(\"resize\",n,!1),window.addEventListener(\"readystatechange\",e,!1),document.addEventListener(\"fullscreenchange\",e,!1),u.width===u.naturalWidth&&u.height===u.naturalHeight||e()):a._resize()}function e(){function t(e){e&&(!function(e){if(!e.tagName)throw new TypeError(\"Object is not a valid DOM element\");if(\"MAP\"!==e.tagName.toUpperCase())throw new TypeError(\"Expected <MAP> tag, found <\"+e.tagName+\">.\")}(e),r.call(e),n.push(e))}var n;return function(e){switch(n=[],typeof e){case\"undefined\":case\"string\":Array.prototype.forEach.call(document.querySelectorAll(e||\"map\"),t);break;case\"object\":t(e);break;default:throw new TypeError(\"Unexpected data type (\"+typeof e+\").\")}return n}} true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0,\"jQuery\"in window&&(window.jQuery.fn.imageMapResize=function(){return this.filter(\"map\").each(r).end()})}();\n//# sourceMappingURL=imageMapResizer.map\n\n//# sourceURL=webpack://fsa-design-system/./node_modules/image-map-resizer/js/imageMapResizer.min.js?");

/***/ }),

/***/ "./node_modules/imagesloaded/imagesloaded.js":
/*!***************************************************!*\
  !*** ./node_modules/imagesloaded/imagesloaded.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("/*!\n * imagesLoaded v5.0.0\n * JavaScript is all like \"You images are done yet or what?\"\n * MIT License\n */\n\n( function( window, factory ) {\n  // universal module definition\n  if (  true && module.exports ) {\n    // CommonJS\n    module.exports = factory( window, __webpack_require__(/*! ev-emitter */ \"./node_modules/ev-emitter/ev-emitter.js\") );\n  } else {\n    // browser global\n    window.imagesLoaded = factory( window, window.EvEmitter );\n  }\n\n} )( typeof window !== 'undefined' ? window : this,\n    function factory( window, EvEmitter ) {\n\nlet $ = window.jQuery;\nlet console = window.console;\n\n// -------------------------- helpers -------------------------- //\n\n// turn element or nodeList into an array\nfunction makeArray( obj ) {\n  // use object if already an array\n  if ( Array.isArray( obj ) ) return obj;\n\n  let isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';\n  // convert nodeList to array\n  if ( isArrayLike ) return [ ...obj ];\n\n  // array of single index\n  return [ obj ];\n}\n\n// -------------------------- imagesLoaded -------------------------- //\n\n/**\n * @param {[Array, Element, NodeList, String]} elem\n * @param {[Object, Function]} options - if function, use as callback\n * @param {Function} onAlways - callback function\n * @returns {ImagesLoaded}\n */\nfunction ImagesLoaded( elem, options, onAlways ) {\n  // coerce ImagesLoaded() without new, to be new ImagesLoaded()\n  if ( !( this instanceof ImagesLoaded ) ) {\n    return new ImagesLoaded( elem, options, onAlways );\n  }\n  // use elem as selector string\n  let queryElem = elem;\n  if ( typeof elem == 'string' ) {\n    queryElem = document.querySelectorAll( elem );\n  }\n  // bail if bad element\n  if ( !queryElem ) {\n    console.error(`Bad element for imagesLoaded ${queryElem || elem}`);\n    return;\n  }\n\n  this.elements = makeArray( queryElem );\n  this.options = {};\n  // shift arguments if no options set\n  if ( typeof options == 'function' ) {\n    onAlways = options;\n  } else {\n    Object.assign( this.options, options );\n  }\n\n  if ( onAlways ) this.on( 'always', onAlways );\n\n  this.getImages();\n  // add jQuery Deferred object\n  if ( $ ) this.jqDeferred = new $.Deferred();\n\n  // HACK check async to allow time to bind listeners\n  setTimeout( this.check.bind( this ) );\n}\n\nImagesLoaded.prototype = Object.create( EvEmitter.prototype );\n\nImagesLoaded.prototype.getImages = function() {\n  this.images = [];\n\n  // filter & find items if we have an item selector\n  this.elements.forEach( this.addElementImages, this );\n};\n\nconst elementNodeTypes = [ 1, 9, 11 ];\n\n/**\n * @param {Node} elem\n */\nImagesLoaded.prototype.addElementImages = function( elem ) {\n  // filter siblings\n  if ( elem.nodeName === 'IMG' ) {\n    this.addImage( elem );\n  }\n  // get background image on element\n  if ( this.options.background === true ) {\n    this.addElementBackgroundImages( elem );\n  }\n\n  // find children\n  // no non-element nodes, #143\n  let { nodeType } = elem;\n  if ( !nodeType || !elementNodeTypes.includes( nodeType ) ) return;\n\n  let childImgs = elem.querySelectorAll('img');\n  // concat childElems to filterFound array\n  for ( let img of childImgs ) {\n    this.addImage( img );\n  }\n\n  // get child background images\n  if ( typeof this.options.background == 'string' ) {\n    let children = elem.querySelectorAll( this.options.background );\n    for ( let child of children ) {\n      this.addElementBackgroundImages( child );\n    }\n  }\n};\n\nconst reURL = /url\\((['\"])?(.*?)\\1\\)/gi;\n\nImagesLoaded.prototype.addElementBackgroundImages = function( elem ) {\n  let style = getComputedStyle( elem );\n  // Firefox returns null if in a hidden iframe https://bugzil.la/548397\n  if ( !style ) return;\n\n  // get url inside url(\"...\")\n  let matches = reURL.exec( style.backgroundImage );\n  while ( matches !== null ) {\n    let url = matches && matches[2];\n    if ( url ) {\n      this.addBackground( url, elem );\n    }\n    matches = reURL.exec( style.backgroundImage );\n  }\n};\n\n/**\n * @param {Image} img\n */\nImagesLoaded.prototype.addImage = function( img ) {\n  let loadingImage = new LoadingImage( img );\n  this.images.push( loadingImage );\n};\n\nImagesLoaded.prototype.addBackground = function( url, elem ) {\n  let background = new Background( url, elem );\n  this.images.push( background );\n};\n\nImagesLoaded.prototype.check = function() {\n  this.progressedCount = 0;\n  this.hasAnyBroken = false;\n  // complete if no images\n  if ( !this.images.length ) {\n    this.complete();\n    return;\n  }\n\n  /* eslint-disable-next-line func-style */\n  let onProgress = ( image, elem, message ) => {\n    // HACK - Chrome triggers event before object properties have changed. #83\n    setTimeout( () => {\n      this.progress( image, elem, message );\n    } );\n  };\n\n  this.images.forEach( function( loadingImage ) {\n    loadingImage.once( 'progress', onProgress );\n    loadingImage.check();\n  } );\n};\n\nImagesLoaded.prototype.progress = function( image, elem, message ) {\n  this.progressedCount++;\n  this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;\n  // progress event\n  this.emitEvent( 'progress', [ this, image, elem ] );\n  if ( this.jqDeferred && this.jqDeferred.notify ) {\n    this.jqDeferred.notify( this, image );\n  }\n  // check if completed\n  if ( this.progressedCount === this.images.length ) {\n    this.complete();\n  }\n\n  if ( this.options.debug && console ) {\n    console.log( `progress: ${message}`, image, elem );\n  }\n};\n\nImagesLoaded.prototype.complete = function() {\n  let eventName = this.hasAnyBroken ? 'fail' : 'done';\n  this.isComplete = true;\n  this.emitEvent( eventName, [ this ] );\n  this.emitEvent( 'always', [ this ] );\n  if ( this.jqDeferred ) {\n    let jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';\n    this.jqDeferred[ jqMethod ]( this );\n  }\n};\n\n// --------------------------  -------------------------- //\n\nfunction LoadingImage( img ) {\n  this.img = img;\n}\n\nLoadingImage.prototype = Object.create( EvEmitter.prototype );\n\nLoadingImage.prototype.check = function() {\n  // If complete is true and browser supports natural sizes,\n  // try to check for image status manually.\n  let isComplete = this.getIsImageComplete();\n  if ( isComplete ) {\n    // report based on naturalWidth\n    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );\n    return;\n  }\n\n  // If none of the checks above matched, simulate loading on detached element.\n  this.proxyImage = new Image();\n  // add crossOrigin attribute. #204\n  if ( this.img.crossOrigin ) {\n    this.proxyImage.crossOrigin = this.img.crossOrigin;\n  }\n  this.proxyImage.addEventListener( 'load', this );\n  this.proxyImage.addEventListener( 'error', this );\n  // bind to image as well for Firefox. #191\n  this.img.addEventListener( 'load', this );\n  this.img.addEventListener( 'error', this );\n  this.proxyImage.src = this.img.currentSrc || this.img.src;\n};\n\nLoadingImage.prototype.getIsImageComplete = function() {\n  // check for non-zero, non-undefined naturalWidth\n  // fixes Safari+InfiniteScroll+Masonry bug infinite-scroll#671\n  return this.img.complete && this.img.naturalWidth;\n};\n\nLoadingImage.prototype.confirm = function( isLoaded, message ) {\n  this.isLoaded = isLoaded;\n  let { parentNode } = this.img;\n  // emit progress with parent <picture> or self <img>\n  let elem = parentNode.nodeName === 'PICTURE' ? parentNode : this.img;\n  this.emitEvent( 'progress', [ this, elem, message ] );\n};\n\n// ----- events ----- //\n\n// trigger specified handler for event type\nLoadingImage.prototype.handleEvent = function( event ) {\n  let method = 'on' + event.type;\n  if ( this[ method ] ) {\n    this[ method ]( event );\n  }\n};\n\nLoadingImage.prototype.onload = function() {\n  this.confirm( true, 'onload' );\n  this.unbindEvents();\n};\n\nLoadingImage.prototype.onerror = function() {\n  this.confirm( false, 'onerror' );\n  this.unbindEvents();\n};\n\nLoadingImage.prototype.unbindEvents = function() {\n  this.proxyImage.removeEventListener( 'load', this );\n  this.proxyImage.removeEventListener( 'error', this );\n  this.img.removeEventListener( 'load', this );\n  this.img.removeEventListener( 'error', this );\n};\n\n// -------------------------- Background -------------------------- //\n\nfunction Background( url, element ) {\n  this.url = url;\n  this.element = element;\n  this.img = new Image();\n}\n\n// inherit LoadingImage prototype\nBackground.prototype = Object.create( LoadingImage.prototype );\n\nBackground.prototype.check = function() {\n  this.img.addEventListener( 'load', this );\n  this.img.addEventListener( 'error', this );\n  this.img.src = this.url;\n  // check if image is already complete\n  let isComplete = this.getIsImageComplete();\n  if ( isComplete ) {\n    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );\n    this.unbindEvents();\n  }\n};\n\nBackground.prototype.unbindEvents = function() {\n  this.img.removeEventListener( 'load', this );\n  this.img.removeEventListener( 'error', this );\n};\n\nBackground.prototype.confirm = function( isLoaded, message ) {\n  this.isLoaded = isLoaded;\n  this.emitEvent( 'progress', [ this, this.element, message ] );\n};\n\n// -------------------------- jQuery -------------------------- //\n\nImagesLoaded.makeJQueryPlugin = function( jQuery ) {\n  jQuery = jQuery || window.jQuery;\n  if ( !jQuery ) return;\n\n  // set local variable\n  $ = jQuery;\n  // $().imagesLoaded()\n  $.fn.imagesLoaded = function( options, onAlways ) {\n    let instance = new ImagesLoaded( this, options, onAlways );\n    return instance.jqDeferred.promise( $( this ) );\n  };\n};\n// try making plugin\nImagesLoaded.makeJQueryPlugin();\n\n// --------------------------  -------------------------- //\n\nreturn ImagesLoaded;\n\n} );\n\n\n//# sourceURL=webpack://fsa-design-system/./node_modules/imagesloaded/imagesloaded.js?");

/***/ }),

/***/ "./src/base.scss":
/*!***********************!*\
  !*** ./src/base.scss ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/base.scss?");

/***/ }),

/***/ "./src/components/article/AllergensTable/allergensTable.scss":
/*!*******************************************************************!*\
  !*** ./src/components/article/AllergensTable/allergensTable.scss ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/AllergensTable/allergensTable.scss?");

/***/ }),

/***/ "./src/components/article/ArticleHero/articleHero.scss":
/*!*************************************************************!*\
  !*** ./src/components/article/ArticleHero/articleHero.scss ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/ArticleHero/articleHero.scss?");

/***/ }),

/***/ "./src/components/article/BackTo/backTo.scss":
/*!***************************************************!*\
  !*** ./src/components/article/BackTo/backTo.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/BackTo/backTo.scss?");

/***/ }),

/***/ "./src/components/article/BackToTop/backToTop.scss":
/*!*********************************************************!*\
  !*** ./src/components/article/BackToTop/backToTop.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/BackToTop/backToTop.scss?");

/***/ }),

/***/ "./src/components/article/ChartBlock/chartBlock.scss":
/*!***********************************************************!*\
  !*** ./src/components/article/ChartBlock/chartBlock.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/ChartBlock/chartBlock.scss?");

/***/ }),

/***/ "./src/components/article/ContentMetaData/contentMetaData.scss":
/*!*********************************************************************!*\
  !*** ./src/components/article/ContentMetaData/contentMetaData.scss ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/ContentMetaData/contentMetaData.scss?");

/***/ }),

/***/ "./src/components/article/DocumentDownload/documentDownload.scss":
/*!***********************************************************************!*\
  !*** ./src/components/article/DocumentDownload/documentDownload.scss ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/DocumentDownload/documentDownload.scss?");

/***/ }),

/***/ "./src/components/article/ExplanationBlock/explanationBlock.scss":
/*!***********************************************************************!*\
  !*** ./src/components/article/ExplanationBlock/explanationBlock.scss ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/ExplanationBlock/explanationBlock.scss?");

/***/ }),

/***/ "./src/components/article/FootNotes/footNotes.scss":
/*!*********************************************************!*\
  !*** ./src/components/article/FootNotes/footNotes.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/FootNotes/footNotes.scss?");

/***/ }),

/***/ "./src/components/article/PdfAndPrintButtons/pdfAndPrintButtons.scss":
/*!***************************************************************************!*\
  !*** ./src/components/article/PdfAndPrintButtons/pdfAndPrintButtons.scss ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/PdfAndPrintButtons/pdfAndPrintButtons.scss?");

/***/ }),

/***/ "./src/components/article/ProductDetails/productDetails.scss":
/*!*******************************************************************!*\
  !*** ./src/components/article/ProductDetails/productDetails.scss ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/ProductDetails/productDetails.scss?");

/***/ }),

/***/ "./src/components/article/QuoteBlock/quoteBlock.scss":
/*!***********************************************************!*\
  !*** ./src/components/article/QuoteBlock/quoteBlock.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/QuoteBlock/quoteBlock.scss?");

/***/ }),

/***/ "./src/components/article/RegionalVariationBlock/regionalVariationBlock.scss":
/*!***********************************************************************************!*\
  !*** ./src/components/article/RegionalVariationBlock/regionalVariationBlock.scss ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/RegionalVariationBlock/regionalVariationBlock.scss?");

/***/ }),

/***/ "./src/components/article/RelatedContent/relatedContent.scss":
/*!*******************************************************************!*\
  !*** ./src/components/article/RelatedContent/relatedContent.scss ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/RelatedContent/relatedContent.scss?");

/***/ }),

/***/ "./src/components/article/RevisionLogBottom/revisionLogBottom.scss":
/*!*************************************************************************!*\
  !*** ./src/components/article/RevisionLogBottom/revisionLogBottom.scss ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/RevisionLogBottom/revisionLogBottom.scss?");

/***/ }),

/***/ "./src/components/article/StickySidebar/stickySidebar.scss":
/*!*****************************************************************!*\
  !*** ./src/components/article/StickySidebar/stickySidebar.scss ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/StickySidebar/stickySidebar.scss?");

/***/ }),

/***/ "./src/components/article/SubjectListing/subjectListing.scss":
/*!*******************************************************************!*\
  !*** ./src/components/article/SubjectListing/subjectListing.scss ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/SubjectListing/subjectListing.scss?");

/***/ }),

/***/ "./src/components/article/TableOfContents/tableOfContents.scss":
/*!*********************************************************************!*\
  !*** ./src/components/article/TableOfContents/tableOfContents.scss ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/TableOfContents/tableOfContents.scss?");

/***/ }),

/***/ "./src/components/article/TeamContacts/teamContacts.scss":
/*!***************************************************************!*\
  !*** ./src/components/article/TeamContacts/teamContacts.scss ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/TeamContacts/teamContacts.scss?");

/***/ }),

/***/ "./src/components/article/TextBlock/textBlock.scss":
/*!*********************************************************!*\
  !*** ./src/components/article/TextBlock/textBlock.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/article/TextBlock/textBlock.scss?");

/***/ }),

/***/ "./src/components/contact/HelpSecondaryMenu/helpSecondaryMenu.scss":
/*!*************************************************************************!*\
  !*** ./src/components/contact/HelpSecondaryMenu/helpSecondaryMenu.scss ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/contact/HelpSecondaryMenu/helpSecondaryMenu.scss?");

/***/ }),

/***/ "./src/components/contact/PromoLinks/promoLinks.scss":
/*!***********************************************************!*\
  !*** ./src/components/contact/PromoLinks/promoLinks.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/contact/PromoLinks/promoLinks.scss?");

/***/ }),

/***/ "./src/components/fhrs/BadgeDownload/badgeDownload.scss":
/*!**************************************************************!*\
  !*** ./src/components/fhrs/BadgeDownload/badgeDownload.scss ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/fhrs/BadgeDownload/badgeDownload.scss?");

/***/ }),

/***/ "./src/components/fhrs/BusinessHero/businessHero.scss":
/*!************************************************************!*\
  !*** ./src/components/fhrs/BusinessHero/businessHero.scss ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/fhrs/BusinessHero/businessHero.scss?");

/***/ }),

/***/ "./src/components/fhrs/LocalAuthority/localAuthority.scss":
/*!****************************************************************!*\
  !*** ./src/components/fhrs/LocalAuthority/localAuthority.scss ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/fhrs/LocalAuthority/localAuthority.scss?");

/***/ }),

/***/ "./src/components/fhrs/LocalAuthorityMap/localAuthorityMap.scss":
/*!**********************************************************************!*\
  !*** ./src/components/fhrs/LocalAuthorityMap/localAuthorityMap.scss ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/fhrs/LocalAuthorityMap/localAuthorityMap.scss?");

/***/ }),

/***/ "./src/components/fhrs/MapInfobox/mapInfobox.scss":
/*!********************************************************!*\
  !*** ./src/components/fhrs/MapInfobox/mapInfobox.scss ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/fhrs/MapInfobox/mapInfobox.scss?");

/***/ }),

/***/ "./src/components/fhrs/RatingsSearchBox/ratingsSearchBox.scss":
/*!********************************************************************!*\
  !*** ./src/components/fhrs/RatingsSearchBox/ratingsSearchBox.scss ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/fhrs/RatingsSearchBox/ratingsSearchBox.scss?");

/***/ }),

/***/ "./src/components/fhrs/SearchCard/searchCard.scss":
/*!********************************************************!*\
  !*** ./src/components/fhrs/SearchCard/searchCard.scss ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/fhrs/SearchCard/searchCard.scss?");

/***/ }),

/***/ "./src/components/form/Checkbox/checkbox.scss":
/*!****************************************************!*\
  !*** ./src/components/form/Checkbox/checkbox.scss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/Checkbox/checkbox.scss?");

/***/ }),

/***/ "./src/components/form/Dropdown/dropdown.scss":
/*!****************************************************!*\
  !*** ./src/components/form/Dropdown/dropdown.scss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/Dropdown/dropdown.scss?");

/***/ }),

/***/ "./src/components/form/EmailField/emailField.scss":
/*!********************************************************!*\
  !*** ./src/components/form/EmailField/emailField.scss ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/EmailField/emailField.scss?");

/***/ }),

/***/ "./src/components/form/ErrorBox/errorBox.scss":
/*!****************************************************!*\
  !*** ./src/components/form/ErrorBox/errorBox.scss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/ErrorBox/errorBox.scss?");

/***/ }),

/***/ "./src/components/form/FileUpload/fileUpload.scss":
/*!********************************************************!*\
  !*** ./src/components/form/FileUpload/fileUpload.scss ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/FileUpload/fileUpload.scss?");

/***/ }),

/***/ "./src/components/form/InputField/inputField.scss":
/*!********************************************************!*\
  !*** ./src/components/form/InputField/inputField.scss ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/InputField/inputField.scss?");

/***/ }),

/***/ "./src/components/form/MapField/mapField.scss":
/*!****************************************************!*\
  !*** ./src/components/form/MapField/mapField.scss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/MapField/mapField.scss?");

/***/ }),

/***/ "./src/components/form/MessageBox/messageBox.scss":
/*!********************************************************!*\
  !*** ./src/components/form/MessageBox/messageBox.scss ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/MessageBox/messageBox.scss?");

/***/ }),

/***/ "./src/components/form/MultifieldGroup/multifieldGroup.scss":
/*!******************************************************************!*\
  !*** ./src/components/form/MultifieldGroup/multifieldGroup.scss ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/MultifieldGroup/multifieldGroup.scss?");

/***/ }),

/***/ "./src/components/form/MultistepFunction/multistepFunction.scss":
/*!**********************************************************************!*\
  !*** ./src/components/form/MultistepFunction/multistepFunction.scss ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/MultistepFunction/multistepFunction.scss?");

/***/ }),

/***/ "./src/components/form/MultivalueField/multivalueField.scss":
/*!******************************************************************!*\
  !*** ./src/components/form/MultivalueField/multivalueField.scss ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/MultivalueField/multivalueField.scss?");

/***/ }),

/***/ "./src/components/form/Radio/radio.scss":
/*!**********************************************!*\
  !*** ./src/components/form/Radio/radio.scss ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/Radio/radio.scss?");

/***/ }),

/***/ "./src/components/form/Step/step.scss":
/*!********************************************!*\
  !*** ./src/components/form/Step/step.scss ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/Step/step.scss?");

/***/ }),

/***/ "./src/components/form/Tabs/tabs.scss":
/*!********************************************!*\
  !*** ./src/components/form/Tabs/tabs.scss ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/Tabs/tabs.scss?");

/***/ }),

/***/ "./src/components/form/Textarea/textarea.scss":
/*!****************************************************!*\
  !*** ./src/components/form/Textarea/textarea.scss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/Textarea/textarea.scss?");

/***/ }),

/***/ "./src/components/form/TitleAndText/titleAndText.scss":
/*!************************************************************!*\
  !*** ./src/components/form/TitleAndText/titleAndText.scss ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/TitleAndText/titleAndText.scss?");

/***/ }),

/***/ "./src/components/form/ToggleButton/toggleButton.scss":
/*!************************************************************!*\
  !*** ./src/components/form/ToggleButton/toggleButton.scss ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/ToggleButton/toggleButton.scss?");

/***/ }),

/***/ "./src/components/form/Tooltip/tooltip.scss":
/*!**************************************************!*\
  !*** ./src/components/form/Tooltip/tooltip.scss ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/form/Tooltip/tooltip.scss?");

/***/ }),

/***/ "./src/components/general/Breadcrumb/breadcrumb.scss":
/*!***********************************************************!*\
  !*** ./src/components/general/Breadcrumb/breadcrumb.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/Breadcrumb/breadcrumb.scss?");

/***/ }),

/***/ "./src/components/general/Button/button.scss":
/*!***************************************************!*\
  !*** ./src/components/general/Button/button.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/Button/button.scss?");

/***/ }),

/***/ "./src/components/general/CookieBanner/cookieBanner.scss":
/*!***************************************************************!*\
  !*** ./src/components/general/CookieBanner/cookieBanner.scss ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/CookieBanner/cookieBanner.scss?");

/***/ }),

/***/ "./src/components/general/DropdownMenu/dropdownMenu.scss":
/*!***************************************************************!*\
  !*** ./src/components/general/DropdownMenu/dropdownMenu.scss ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/DropdownMenu/dropdownMenu.scss?");

/***/ }),

/***/ "./src/components/general/ErrorResponse/errorResponse.scss":
/*!*****************************************************************!*\
  !*** ./src/components/general/ErrorResponse/errorResponse.scss ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/ErrorResponse/errorResponse.scss?");

/***/ }),

/***/ "./src/components/general/ExternalLink/externalLink.scss":
/*!***************************************************************!*\
  !*** ./src/components/general/ExternalLink/externalLink.scss ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/ExternalLink/externalLink.scss?");

/***/ }),

/***/ "./src/components/general/Feedback/feedback.scss":
/*!*******************************************************!*\
  !*** ./src/components/general/Feedback/feedback.scss ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/Feedback/feedback.scss?");

/***/ }),

/***/ "./src/components/general/Footer/footer.scss":
/*!***************************************************!*\
  !*** ./src/components/general/Footer/footer.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/Footer/footer.scss?");

/***/ }),

/***/ "./src/components/general/GuidancePopup/guidancePopup.scss":
/*!*****************************************************************!*\
  !*** ./src/components/general/GuidancePopup/guidancePopup.scss ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/GuidancePopup/guidancePopup.scss?");

/***/ }),

/***/ "./src/components/general/Header/header.scss":
/*!***************************************************!*\
  !*** ./src/components/general/Header/header.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/Header/header.scss?");

/***/ }),

/***/ "./src/components/general/Hero/hero.scss":
/*!***********************************************!*\
  !*** ./src/components/general/Hero/hero.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/Hero/hero.scss?");

/***/ }),

/***/ "./src/components/general/Link/link.scss":
/*!***********************************************!*\
  !*** ./src/components/general/Link/link.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/Link/link.scss?");

/***/ }),

/***/ "./src/components/general/MailLink/mailLink.scss":
/*!*******************************************************!*\
  !*** ./src/components/general/MailLink/mailLink.scss ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/MailLink/mailLink.scss?");

/***/ }),

/***/ "./src/components/general/NationalArchiveLink/nationalArchiveLink.scss":
/*!*****************************************************************************!*\
  !*** ./src/components/general/NationalArchiveLink/nationalArchiveLink.scss ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/NationalArchiveLink/nationalArchiveLink.scss?");

/***/ }),

/***/ "./src/components/general/Navigation/navigation.scss":
/*!***********************************************************!*\
  !*** ./src/components/general/Navigation/navigation.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/Navigation/navigation.scss?");

/***/ }),

/***/ "./src/components/general/SiteMap/siteMap.scss":
/*!*****************************************************!*\
  !*** ./src/components/general/SiteMap/siteMap.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/SiteMap/siteMap.scss?");

/***/ }),

/***/ "./src/components/general/SkipToMainContent/skipToMainContent.scss":
/*!*************************************************************************!*\
  !*** ./src/components/general/SkipToMainContent/skipToMainContent.scss ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/SkipToMainContent/skipToMainContent.scss?");

/***/ }),

/***/ "./src/components/general/TemporaryMessage/temporaryMessage.scss":
/*!***********************************************************************!*\
  !*** ./src/components/general/TemporaryMessage/temporaryMessage.scss ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/general/TemporaryMessage/temporaryMessage.scss?");

/***/ }),

/***/ "./src/components/haccp/SaveProgress/saveProgress.scss":
/*!*************************************************************!*\
  !*** ./src/components/haccp/SaveProgress/saveProgress.scss ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/haccp/SaveProgress/saveProgress.scss?");

/***/ }),

/***/ "./src/components/haccp/WebToolProgressBar/webToolProgressBar.scss":
/*!*************************************************************************!*\
  !*** ./src/components/haccp/WebToolProgressBar/webToolProgressBar.scss ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/haccp/WebToolProgressBar/webToolProgressBar.scss?");

/***/ }),

/***/ "./src/components/haccp/WebToolStudiesTable/webToolStudiesTable.scss":
/*!***************************************************************************!*\
  !*** ./src/components/haccp/WebToolStudiesTable/webToolStudiesTable.scss ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/haccp/WebToolStudiesTable/webToolStudiesTable.scss?");

/***/ }),

/***/ "./src/components/landing/CampaignBlock/campaignBlock.scss":
/*!*****************************************************************!*\
  !*** ./src/components/landing/CampaignBlock/campaignBlock.scss ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/landing/CampaignBlock/campaignBlock.scss?");

/***/ }),

/***/ "./src/components/landing/LandingLinks/landingLinks.scss":
/*!***************************************************************!*\
  !*** ./src/components/landing/LandingLinks/landingLinks.scss ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/landing/LandingLinks/landingLinks.scss?");

/***/ }),

/***/ "./src/components/landing/LandingText/landingText.scss":
/*!*************************************************************!*\
  !*** ./src/components/landing/LandingText/landingText.scss ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/landing/LandingText/landingText.scss?");

/***/ }),

/***/ "./src/components/landing/LandingTitle/landingTitle.scss":
/*!***************************************************************!*\
  !*** ./src/components/landing/LandingTitle/landingTitle.scss ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/landing/LandingTitle/landingTitle.scss?");

/***/ }),

/***/ "./src/components/landing/LargePromoGroup/largePromoGroup.scss":
/*!*********************************************************************!*\
  !*** ./src/components/landing/LargePromoGroup/largePromoGroup.scss ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/landing/LargePromoGroup/largePromoGroup.scss?");

/***/ }),

/***/ "./src/components/landing/LatestTeaser/latestTeaser.scss":
/*!***************************************************************!*\
  !*** ./src/components/landing/LatestTeaser/latestTeaser.scss ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/landing/LatestTeaser/latestTeaser.scss?");

/***/ }),

/***/ "./src/components/landing/PromoGroup/promoGroup.scss":
/*!***********************************************************!*\
  !*** ./src/components/landing/PromoGroup/promoGroup.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/landing/PromoGroup/promoGroup.scss?");

/***/ }),

/***/ "./src/components/landing/ServiceLinks/serviceLinks.scss":
/*!***************************************************************!*\
  !*** ./src/components/landing/ServiceLinks/serviceLinks.scss ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/landing/ServiceLinks/serviceLinks.scss?");

/***/ }),

/***/ "./src/components/landing/TitleAndDescription/titleAndDescription.scss":
/*!*****************************************************************************!*\
  !*** ./src/components/landing/TitleAndDescription/titleAndDescription.scss ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/landing/TitleAndDescription/titleAndDescription.scss?");

/***/ }),

/***/ "./src/components/multipageguide/GuideHero/guideHero.scss":
/*!****************************************************************!*\
  !*** ./src/components/multipageguide/GuideHero/guideHero.scss ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/multipageguide/GuideHero/guideHero.scss?");

/***/ }),

/***/ "./src/components/multipageguide/Pagination/pagination.scss":
/*!******************************************************************!*\
  !*** ./src/components/multipageguide/Pagination/pagination.scss ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/multipageguide/Pagination/pagination.scss?");

/***/ }),

/***/ "./src/components/search/Accordion/accordion.scss":
/*!********************************************************!*\
  !*** ./src/components/search/Accordion/accordion.scss ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/search/Accordion/accordion.scss?");

/***/ }),

/***/ "./src/components/search/CollapsibleCheckbox/collapsibleCheckbox.scss":
/*!****************************************************************************!*\
  !*** ./src/components/search/CollapsibleCheckbox/collapsibleCheckbox.scss ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/search/CollapsibleCheckbox/collapsibleCheckbox.scss?");

/***/ }),

/***/ "./src/components/search/Datepicker/datepicker.scss":
/*!**********************************************************!*\
  !*** ./src/components/search/Datepicker/datepicker.scss ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/search/Datepicker/datepicker.scss?");

/***/ }),

/***/ "./src/components/search/FiltersHeader/filtersHeader.scss":
/*!****************************************************************!*\
  !*** ./src/components/search/FiltersHeader/filtersHeader.scss ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/search/FiltersHeader/filtersHeader.scss?");

/***/ }),

/***/ "./src/components/search/FiltersSelected/filtersSelected.scss":
/*!********************************************************************!*\
  !*** ./src/components/search/FiltersSelected/filtersSelected.scss ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/search/FiltersSelected/filtersSelected.scss?");

/***/ }),

/***/ "./src/components/search/ListingItem/listingItem.scss":
/*!************************************************************!*\
  !*** ./src/components/search/ListingItem/listingItem.scss ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/search/ListingItem/listingItem.scss?");

/***/ }),

/***/ "./src/components/search/Pagination/pagination.scss":
/*!**********************************************************!*\
  !*** ./src/components/search/Pagination/pagination.scss ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/search/Pagination/pagination.scss?");

/***/ }),

/***/ "./src/components/search/RatingCta/ratingCta.scss":
/*!********************************************************!*\
  !*** ./src/components/search/RatingCta/ratingCta.scss ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/search/RatingCta/ratingCta.scss?");

/***/ }),

/***/ "./src/components/search/SearchBar/searchBar.scss":
/*!********************************************************!*\
  !*** ./src/components/search/SearchBar/searchBar.scss ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/search/SearchBar/searchBar.scss?");

/***/ }),

/***/ "./src/components/search/SearchBarHeader/searchBarHeader.scss":
/*!********************************************************************!*\
  !*** ./src/components/search/SearchBarHeader/searchBarHeader.scss ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/search/SearchBarHeader/searchBarHeader.scss?");

/***/ }),

/***/ "./src/components/search/SearchNoResults/searchNoResults.scss":
/*!********************************************************************!*\
  !*** ./src/components/search/SearchNoResults/searchNoResults.scss ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/search/SearchNoResults/searchNoResults.scss?");

/***/ }),

/***/ "./src/components/search/Showing/showing.scss":
/*!****************************************************!*\
  !*** ./src/components/search/Showing/showing.scss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/search/Showing/showing.scss?");

/***/ }),

/***/ "./src/components/search/SortBy/sortBy.scss":
/*!**************************************************!*\
  !*** ./src/components/search/SortBy/sortBy.scss ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/components/search/SortBy/sortBy.scss?");

/***/ }),

/***/ "./src/layout/contactLayout/contactLayout.scss":
/*!*****************************************************!*\
  !*** ./src/layout/contactLayout/contactLayout.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/layout/contactLayout/contactLayout.scss?");

/***/ }),

/***/ "./src/layout/contentLayout/contentLayout.scss":
/*!*****************************************************!*\
  !*** ./src/layout/contentLayout/contentLayout.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/layout/contentLayout/contentLayout.scss?");

/***/ }),

/***/ "./src/layout/fhrsLayout/fhrsLayout.scss":
/*!***********************************************!*\
  !*** ./src/layout/fhrsLayout/fhrsLayout.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/layout/fhrsLayout/fhrsLayout.scss?");

/***/ }),

/***/ "./src/layout/formLayout/formLayout.scss":
/*!***********************************************!*\
  !*** ./src/layout/formLayout/formLayout.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/layout/formLayout/formLayout.scss?");

/***/ }),

/***/ "./src/layout/fullWidth/fullWidth.scss":
/*!*********************************************!*\
  !*** ./src/layout/fullWidth/fullWidth.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/layout/fullWidth/fullWidth.scss?");

/***/ }),

/***/ "./src/layout/twoColumn/twoColumn.scss":
/*!*********************************************!*\
  !*** ./src/layout/twoColumn/twoColumn.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fsa-design-system/./src/layout/twoColumn/twoColumn.scss?");

/***/ }),

/***/ "./node_modules/object-fit-images/dist/ofi.common-js.js":
/*!**************************************************************!*\
  !*** ./node_modules/object-fit-images/dist/ofi.common-js.js ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
eval("/*! npm.im/object-fit-images 3.2.4 */\n\n\nvar OFI = 'bfred-it:object-fit-images';\nvar propRegex = /(object-fit|object-position)\\s*:\\s*([-.\\w\\s%]+)/g;\nvar testImg = typeof Image === 'undefined' ? {style: {'object-position': 1}} : new Image();\nvar supportsObjectFit = 'object-fit' in testImg.style;\nvar supportsObjectPosition = 'object-position' in testImg.style;\nvar supportsOFI = 'background-size' in testImg.style;\nvar supportsCurrentSrc = typeof testImg.currentSrc === 'string';\nvar nativeGetAttribute = testImg.getAttribute;\nvar nativeSetAttribute = testImg.setAttribute;\nvar autoModeEnabled = false;\n\nfunction createPlaceholder(w, h) {\n\treturn (\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='\" + w + \"' height='\" + h + \"'%3E%3C/svg%3E\");\n}\n\nfunction polyfillCurrentSrc(el) {\n\tif (el.srcset && !supportsCurrentSrc && window.picturefill) {\n\t\tvar pf = window.picturefill._;\n\t\t// parse srcset with picturefill where currentSrc isn't available\n\t\tif (!el[pf.ns] || !el[pf.ns].evaled) {\n\t\t\t// force synchronous srcset parsing\n\t\t\tpf.fillImg(el, {reselect: true});\n\t\t}\n\n\t\tif (!el[pf.ns].curSrc) {\n\t\t\t// force picturefill to parse srcset\n\t\t\tel[pf.ns].supported = false;\n\t\t\tpf.fillImg(el, {reselect: true});\n\t\t}\n\n\t\t// retrieve parsed currentSrc, if any\n\t\tel.currentSrc = el[pf.ns].curSrc || el.src;\n\t}\n}\n\nfunction getStyle(el) {\n\tvar style = getComputedStyle(el).fontFamily;\n\tvar parsed;\n\tvar props = {};\n\twhile ((parsed = propRegex.exec(style)) !== null) {\n\t\tprops[parsed[1]] = parsed[2];\n\t}\n\treturn props;\n}\n\nfunction setPlaceholder(img, width, height) {\n\t// Default: fill width, no height\n\tvar placeholder = createPlaceholder(width || 1, height || 0);\n\n\t// Only set placeholder if it's different\n\tif (nativeGetAttribute.call(img, 'src') !== placeholder) {\n\t\tnativeSetAttribute.call(img, 'src', placeholder);\n\t}\n}\n\nfunction onImageReady(img, callback) {\n\t// naturalWidth is only available when the image headers are loaded,\n\t// this loop will poll it every 100ms.\n\tif (img.naturalWidth) {\n\t\tcallback(img);\n\t} else {\n\t\tsetTimeout(onImageReady, 100, img, callback);\n\t}\n}\n\nfunction fixOne(el) {\n\tvar style = getStyle(el);\n\tvar ofi = el[OFI];\n\tstyle['object-fit'] = style['object-fit'] || 'fill'; // default value\n\n\t// Avoid running where unnecessary, unless OFI had already done its deed\n\tif (!ofi.img) {\n\t\t// fill is the default behavior so no action is necessary\n\t\tif (style['object-fit'] === 'fill') {\n\t\t\treturn;\n\t\t}\n\n\t\t// Where object-fit is supported and object-position isn't (Safari < 10)\n\t\tif (\n\t\t\t!ofi.skipTest && // unless user wants to apply regardless of browser support\n\t\t\tsupportsObjectFit && // if browser already supports object-fit\n\t\t\t!style['object-position'] // unless object-position is used\n\t\t) {\n\t\t\treturn;\n\t\t}\n\t}\n\n\t// keep a clone in memory while resetting the original to a blank\n\tif (!ofi.img) {\n\t\tofi.img = new Image(el.width, el.height);\n\t\tofi.img.srcset = nativeGetAttribute.call(el, \"data-ofi-srcset\") || el.srcset;\n\t\tofi.img.src = nativeGetAttribute.call(el, \"data-ofi-src\") || el.src;\n\n\t\t// preserve for any future cloneNode calls\n\t\t// https://github.com/bfred-it/object-fit-images/issues/53\n\t\tnativeSetAttribute.call(el, \"data-ofi-src\", el.src);\n\t\tif (el.srcset) {\n\t\t\tnativeSetAttribute.call(el, \"data-ofi-srcset\", el.srcset);\n\t\t}\n\n\t\tsetPlaceholder(el, el.naturalWidth || el.width, el.naturalHeight || el.height);\n\n\t\t// remove srcset because it overrides src\n\t\tif (el.srcset) {\n\t\t\tel.srcset = '';\n\t\t}\n\t\ttry {\n\t\t\tkeepSrcUsable(el);\n\t\t} catch (err) {\n\t\t\tif (window.console) {\n\t\t\t\tconsole.warn('https://bit.ly/ofi-old-browser');\n\t\t\t}\n\t\t}\n\t}\n\n\tpolyfillCurrentSrc(ofi.img);\n\n\tel.style.backgroundImage = \"url(\\\"\" + ((ofi.img.currentSrc || ofi.img.src).replace(/\"/g, '\\\\\"')) + \"\\\")\";\n\tel.style.backgroundPosition = style['object-position'] || 'center';\n\tel.style.backgroundRepeat = 'no-repeat';\n\tel.style.backgroundOrigin = 'content-box';\n\n\tif (/scale-down/.test(style['object-fit'])) {\n\t\tonImageReady(ofi.img, function () {\n\t\t\tif (ofi.img.naturalWidth > el.width || ofi.img.naturalHeight > el.height) {\n\t\t\t\tel.style.backgroundSize = 'contain';\n\t\t\t} else {\n\t\t\t\tel.style.backgroundSize = 'auto';\n\t\t\t}\n\t\t});\n\t} else {\n\t\tel.style.backgroundSize = style['object-fit'].replace('none', 'auto').replace('fill', '100% 100%');\n\t}\n\n\tonImageReady(ofi.img, function (img) {\n\t\tsetPlaceholder(el, img.naturalWidth, img.naturalHeight);\n\t});\n}\n\nfunction keepSrcUsable(el) {\n\tvar descriptors = {\n\t\tget: function get(prop) {\n\t\t\treturn el[OFI].img[prop ? prop : 'src'];\n\t\t},\n\t\tset: function set(value, prop) {\n\t\t\tel[OFI].img[prop ? prop : 'src'] = value;\n\t\t\tnativeSetAttribute.call(el, (\"data-ofi-\" + prop), value); // preserve for any future cloneNode\n\t\t\tfixOne(el);\n\t\t\treturn value;\n\t\t}\n\t};\n\tObject.defineProperty(el, 'src', descriptors);\n\tObject.defineProperty(el, 'currentSrc', {\n\t\tget: function () { return descriptors.get('currentSrc'); }\n\t});\n\tObject.defineProperty(el, 'srcset', {\n\t\tget: function () { return descriptors.get('srcset'); },\n\t\tset: function (ss) { return descriptors.set(ss, 'srcset'); }\n\t});\n}\n\nfunction hijackAttributes() {\n\tfunction getOfiImageMaybe(el, name) {\n\t\treturn el[OFI] && el[OFI].img && (name === 'src' || name === 'srcset') ? el[OFI].img : el;\n\t}\n\tif (!supportsObjectPosition) {\n\t\tHTMLImageElement.prototype.getAttribute = function (name) {\n\t\t\treturn nativeGetAttribute.call(getOfiImageMaybe(this, name), name);\n\t\t};\n\n\t\tHTMLImageElement.prototype.setAttribute = function (name, value) {\n\t\t\treturn nativeSetAttribute.call(getOfiImageMaybe(this, name), name, String(value));\n\t\t};\n\t}\n}\n\nfunction fix(imgs, opts) {\n\tvar startAutoMode = !autoModeEnabled && !imgs;\n\topts = opts || {};\n\timgs = imgs || 'img';\n\n\tif ((supportsObjectPosition && !opts.skipTest) || !supportsOFI) {\n\t\treturn false;\n\t}\n\n\t// use imgs as a selector or just select all images\n\tif (imgs === 'img') {\n\t\timgs = document.getElementsByTagName('img');\n\t} else if (typeof imgs === 'string') {\n\t\timgs = document.querySelectorAll(imgs);\n\t} else if (!('length' in imgs)) {\n\t\timgs = [imgs];\n\t}\n\n\t// apply fix to all\n\tfor (var i = 0; i < imgs.length; i++) {\n\t\timgs[i][OFI] = imgs[i][OFI] || {\n\t\t\tskipTest: opts.skipTest\n\t\t};\n\t\tfixOne(imgs[i]);\n\t}\n\n\tif (startAutoMode) {\n\t\tdocument.body.addEventListener('load', function (e) {\n\t\t\tif (e.target.tagName === 'IMG') {\n\t\t\t\tfix(e.target, {\n\t\t\t\t\tskipTest: opts.skipTest\n\t\t\t\t});\n\t\t\t}\n\t\t}, true);\n\t\tautoModeEnabled = true;\n\t\timgs = 'img'; // reset to a generic selector for watchMQ\n\t}\n\n\t// if requested, watch media queries for object-fit change\n\tif (opts.watchMQ) {\n\t\twindow.addEventListener('resize', fix.bind(null, imgs, {\n\t\t\tskipTest: opts.skipTest\n\t\t}));\n\t}\n}\n\nfix.supportsObjectFit = supportsObjectFit;\nfix.supportsObjectPosition = supportsObjectPosition;\n\nhijackAttributes();\n\nmodule.exports = fix;\n\n\n//# sourceURL=webpack://fsa-design-system/./node_modules/object-fit-images/dist/ofi.common-js.js?");

/***/ }),

/***/ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js":
/*!*****************************************************************!*\
  !*** ./node_modules/smoothscroll-polyfill/dist/smoothscroll.js ***!
  \*****************************************************************/
/***/ (function(module) {

eval("/* smoothscroll v0.4.4 - 2019 - Dustan Kasten, Jeremias Menichelli - MIT License */\n(function () {\n  'use strict';\n\n  // polyfill\n  function polyfill() {\n    // aliases\n    var w = window;\n    var d = document;\n\n    // return if scroll behavior is supported and polyfill is not forced\n    if (\n      'scrollBehavior' in d.documentElement.style &&\n      w.__forceSmoothScrollPolyfill__ !== true\n    ) {\n      return;\n    }\n\n    // globals\n    var Element = w.HTMLElement || w.Element;\n    var SCROLL_TIME = 468;\n\n    // object gathering original scroll methods\n    var original = {\n      scroll: w.scroll || w.scrollTo,\n      scrollBy: w.scrollBy,\n      elementScroll: Element.prototype.scroll || scrollElement,\n      scrollIntoView: Element.prototype.scrollIntoView\n    };\n\n    // define timing method\n    var now =\n      w.performance && w.performance.now\n        ? w.performance.now.bind(w.performance)\n        : Date.now;\n\n    /**\n     * indicates if a the current browser is made by Microsoft\n     * @method isMicrosoftBrowser\n     * @param {String} userAgent\n     * @returns {Boolean}\n     */\n    function isMicrosoftBrowser(userAgent) {\n      var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];\n\n      return new RegExp(userAgentPatterns.join('|')).test(userAgent);\n    }\n\n    /*\n     * IE has rounding bug rounding down clientHeight and clientWidth and\n     * rounding up scrollHeight and scrollWidth causing false positives\n     * on hasScrollableSpace\n     */\n    var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;\n\n    /**\n     * changes scroll position inside an element\n     * @method scrollElement\n     * @param {Number} x\n     * @param {Number} y\n     * @returns {undefined}\n     */\n    function scrollElement(x, y) {\n      this.scrollLeft = x;\n      this.scrollTop = y;\n    }\n\n    /**\n     * returns result of applying ease math function to a number\n     * @method ease\n     * @param {Number} k\n     * @returns {Number}\n     */\n    function ease(k) {\n      return 0.5 * (1 - Math.cos(Math.PI * k));\n    }\n\n    /**\n     * indicates if a smooth behavior should be applied\n     * @method shouldBailOut\n     * @param {Number|Object} firstArg\n     * @returns {Boolean}\n     */\n    function shouldBailOut(firstArg) {\n      if (\n        firstArg === null ||\n        typeof firstArg !== 'object' ||\n        firstArg.behavior === undefined ||\n        firstArg.behavior === 'auto' ||\n        firstArg.behavior === 'instant'\n      ) {\n        // first argument is not an object/null\n        // or behavior is auto, instant or undefined\n        return true;\n      }\n\n      if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {\n        // first argument is an object and behavior is smooth\n        return false;\n      }\n\n      // throw error when behavior is not supported\n      throw new TypeError(\n        'behavior member of ScrollOptions ' +\n          firstArg.behavior +\n          ' is not a valid value for enumeration ScrollBehavior.'\n      );\n    }\n\n    /**\n     * indicates if an element has scrollable space in the provided axis\n     * @method hasScrollableSpace\n     * @param {Node} el\n     * @param {String} axis\n     * @returns {Boolean}\n     */\n    function hasScrollableSpace(el, axis) {\n      if (axis === 'Y') {\n        return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;\n      }\n\n      if (axis === 'X') {\n        return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;\n      }\n    }\n\n    /**\n     * indicates if an element has a scrollable overflow property in the axis\n     * @method canOverflow\n     * @param {Node} el\n     * @param {String} axis\n     * @returns {Boolean}\n     */\n    function canOverflow(el, axis) {\n      var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];\n\n      return overflowValue === 'auto' || overflowValue === 'scroll';\n    }\n\n    /**\n     * indicates if an element can be scrolled in either axis\n     * @method isScrollable\n     * @param {Node} el\n     * @param {String} axis\n     * @returns {Boolean}\n     */\n    function isScrollable(el) {\n      var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');\n      var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');\n\n      return isScrollableY || isScrollableX;\n    }\n\n    /**\n     * finds scrollable parent of an element\n     * @method findScrollableParent\n     * @param {Node} el\n     * @returns {Node} el\n     */\n    function findScrollableParent(el) {\n      while (el !== d.body && isScrollable(el) === false) {\n        el = el.parentNode || el.host;\n      }\n\n      return el;\n    }\n\n    /**\n     * self invoked function that, given a context, steps through scrolling\n     * @method step\n     * @param {Object} context\n     * @returns {undefined}\n     */\n    function step(context) {\n      var time = now();\n      var value;\n      var currentX;\n      var currentY;\n      var elapsed = (time - context.startTime) / SCROLL_TIME;\n\n      // avoid elapsed times higher than one\n      elapsed = elapsed > 1 ? 1 : elapsed;\n\n      // apply easing to elapsed time\n      value = ease(elapsed);\n\n      currentX = context.startX + (context.x - context.startX) * value;\n      currentY = context.startY + (context.y - context.startY) * value;\n\n      context.method.call(context.scrollable, currentX, currentY);\n\n      // scroll more if we have not reached our destination\n      if (currentX !== context.x || currentY !== context.y) {\n        w.requestAnimationFrame(step.bind(w, context));\n      }\n    }\n\n    /**\n     * scrolls window or element with a smooth behavior\n     * @method smoothScroll\n     * @param {Object|Node} el\n     * @param {Number} x\n     * @param {Number} y\n     * @returns {undefined}\n     */\n    function smoothScroll(el, x, y) {\n      var scrollable;\n      var startX;\n      var startY;\n      var method;\n      var startTime = now();\n\n      // define scroll context\n      if (el === d.body) {\n        scrollable = w;\n        startX = w.scrollX || w.pageXOffset;\n        startY = w.scrollY || w.pageYOffset;\n        method = original.scroll;\n      } else {\n        scrollable = el;\n        startX = el.scrollLeft;\n        startY = el.scrollTop;\n        method = scrollElement;\n      }\n\n      // scroll looping over a frame\n      step({\n        scrollable: scrollable,\n        method: method,\n        startTime: startTime,\n        startX: startX,\n        startY: startY,\n        x: x,\n        y: y\n      });\n    }\n\n    // ORIGINAL METHODS OVERRIDES\n    // w.scroll and w.scrollTo\n    w.scroll = w.scrollTo = function() {\n      // avoid action when no arguments are passed\n      if (arguments[0] === undefined) {\n        return;\n      }\n\n      // avoid smooth behavior if not required\n      if (shouldBailOut(arguments[0]) === true) {\n        original.scroll.call(\n          w,\n          arguments[0].left !== undefined\n            ? arguments[0].left\n            : typeof arguments[0] !== 'object'\n              ? arguments[0]\n              : w.scrollX || w.pageXOffset,\n          // use top prop, second argument if present or fallback to scrollY\n          arguments[0].top !== undefined\n            ? arguments[0].top\n            : arguments[1] !== undefined\n              ? arguments[1]\n              : w.scrollY || w.pageYOffset\n        );\n\n        return;\n      }\n\n      // LET THE SMOOTHNESS BEGIN!\n      smoothScroll.call(\n        w,\n        d.body,\n        arguments[0].left !== undefined\n          ? ~~arguments[0].left\n          : w.scrollX || w.pageXOffset,\n        arguments[0].top !== undefined\n          ? ~~arguments[0].top\n          : w.scrollY || w.pageYOffset\n      );\n    };\n\n    // w.scrollBy\n    w.scrollBy = function() {\n      // avoid action when no arguments are passed\n      if (arguments[0] === undefined) {\n        return;\n      }\n\n      // avoid smooth behavior if not required\n      if (shouldBailOut(arguments[0])) {\n        original.scrollBy.call(\n          w,\n          arguments[0].left !== undefined\n            ? arguments[0].left\n            : typeof arguments[0] !== 'object' ? arguments[0] : 0,\n          arguments[0].top !== undefined\n            ? arguments[0].top\n            : arguments[1] !== undefined ? arguments[1] : 0\n        );\n\n        return;\n      }\n\n      // LET THE SMOOTHNESS BEGIN!\n      smoothScroll.call(\n        w,\n        d.body,\n        ~~arguments[0].left + (w.scrollX || w.pageXOffset),\n        ~~arguments[0].top + (w.scrollY || w.pageYOffset)\n      );\n    };\n\n    // Element.prototype.scroll and Element.prototype.scrollTo\n    Element.prototype.scroll = Element.prototype.scrollTo = function() {\n      // avoid action when no arguments are passed\n      if (arguments[0] === undefined) {\n        return;\n      }\n\n      // avoid smooth behavior if not required\n      if (shouldBailOut(arguments[0]) === true) {\n        // if one number is passed, throw error to match Firefox implementation\n        if (typeof arguments[0] === 'number' && arguments[1] === undefined) {\n          throw new SyntaxError('Value could not be converted');\n        }\n\n        original.elementScroll.call(\n          this,\n          // use left prop, first number argument or fallback to scrollLeft\n          arguments[0].left !== undefined\n            ? ~~arguments[0].left\n            : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft,\n          // use top prop, second argument or fallback to scrollTop\n          arguments[0].top !== undefined\n            ? ~~arguments[0].top\n            : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop\n        );\n\n        return;\n      }\n\n      var left = arguments[0].left;\n      var top = arguments[0].top;\n\n      // LET THE SMOOTHNESS BEGIN!\n      smoothScroll.call(\n        this,\n        this,\n        typeof left === 'undefined' ? this.scrollLeft : ~~left,\n        typeof top === 'undefined' ? this.scrollTop : ~~top\n      );\n    };\n\n    // Element.prototype.scrollBy\n    Element.prototype.scrollBy = function() {\n      // avoid action when no arguments are passed\n      if (arguments[0] === undefined) {\n        return;\n      }\n\n      // avoid smooth behavior if not required\n      if (shouldBailOut(arguments[0]) === true) {\n        original.elementScroll.call(\n          this,\n          arguments[0].left !== undefined\n            ? ~~arguments[0].left + this.scrollLeft\n            : ~~arguments[0] + this.scrollLeft,\n          arguments[0].top !== undefined\n            ? ~~arguments[0].top + this.scrollTop\n            : ~~arguments[1] + this.scrollTop\n        );\n\n        return;\n      }\n\n      this.scroll({\n        left: ~~arguments[0].left + this.scrollLeft,\n        top: ~~arguments[0].top + this.scrollTop,\n        behavior: arguments[0].behavior\n      });\n    };\n\n    // Element.prototype.scrollIntoView\n    Element.prototype.scrollIntoView = function() {\n      // avoid smooth behavior if not required\n      if (shouldBailOut(arguments[0]) === true) {\n        original.scrollIntoView.call(\n          this,\n          arguments[0] === undefined ? true : arguments[0]\n        );\n\n        return;\n      }\n\n      // LET THE SMOOTHNESS BEGIN!\n      var scrollableParent = findScrollableParent(this);\n      var parentRects = scrollableParent.getBoundingClientRect();\n      var clientRects = this.getBoundingClientRect();\n\n      if (scrollableParent !== d.body) {\n        // reveal element inside parent\n        smoothScroll.call(\n          this,\n          scrollableParent,\n          scrollableParent.scrollLeft + clientRects.left - parentRects.left,\n          scrollableParent.scrollTop + clientRects.top - parentRects.top\n        );\n\n        // reveal parent in viewport unless is fixed\n        if (w.getComputedStyle(scrollableParent).position !== 'fixed') {\n          w.scrollBy({\n            left: parentRects.left,\n            top: parentRects.top,\n            behavior: 'smooth'\n          });\n        }\n      } else {\n        // reveal element in viewport\n        w.scrollBy({\n          left: clientRects.left,\n          top: clientRects.top,\n          behavior: 'smooth'\n        });\n      }\n    };\n  }\n\n  if (true) {\n    // commonjs\n    module.exports = { polyfill: polyfill };\n  } else {}\n\n}());\n\n\n//# sourceURL=webpack://fsa-design-system/./node_modules/smoothscroll-polyfill/dist/smoothscroll.js?");

/***/ }),

/***/ "./node_modules/url-polyfill/url-polyfill.js":
/*!***************************************************!*\
  !*** ./node_modules/url-polyfill/url-polyfill.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("(function(global) {\r\n  /**\r\n   * Polyfill URLSearchParams\r\n   *\r\n   * Inspired from : https://github.com/WebReflection/url-search-params/blob/master/src/url-search-params.js\r\n   */\r\n\r\n  var checkIfIteratorIsSupported = function() {\r\n    try {\r\n      return !!Symbol.iterator;\r\n    } catch (error) {\r\n      return false;\r\n    }\r\n  };\r\n\r\n\r\n  var iteratorSupported = checkIfIteratorIsSupported();\r\n\r\n  var createIterator = function(items) {\r\n    var iterator = {\r\n      next: function() {\r\n        var value = items.shift();\r\n        return { done: value === void 0, value: value };\r\n      }\r\n    };\r\n\r\n    if (iteratorSupported) {\r\n      iterator[Symbol.iterator] = function() {\r\n        return iterator;\r\n      };\r\n    }\r\n\r\n    return iterator;\r\n  };\r\n\r\n  /**\r\n   * Search param name and values should be encoded according to https://url.spec.whatwg.org/#urlencoded-serializing\r\n   * encodeURIComponent() produces the same result except encoding spaces as `%20` instead of `+`.\r\n   */\r\n  var serializeParam = function(value) {\r\n    return encodeURIComponent(value).replace(/%20/g, '+');\r\n  };\r\n\r\n  var deserializeParam = function(value) {\r\n    return decodeURIComponent(String(value).replace(/\\+/g, ' '));\r\n  };\r\n\r\n  var polyfillURLSearchParams = function() {\r\n\r\n    var URLSearchParams = function(searchString) {\r\n      Object.defineProperty(this, '_entries', { writable: true, value: {} });\r\n      var typeofSearchString = typeof searchString;\r\n\r\n      if (typeofSearchString === 'undefined') {\r\n        // do nothing\r\n      } else if (typeofSearchString === 'string') {\r\n        if (searchString !== '') {\r\n          this._fromString(searchString);\r\n        }\r\n      } else if (searchString instanceof URLSearchParams) {\r\n        var _this = this;\r\n        searchString.forEach(function(value, name) {\r\n          _this.append(name, value);\r\n        });\r\n      } else if ((searchString !== null) && (typeofSearchString === 'object')) {\r\n        if (Object.prototype.toString.call(searchString) === '[object Array]') {\r\n          for (var i = 0; i < searchString.length; i++) {\r\n            var entry = searchString[i];\r\n            if ((Object.prototype.toString.call(entry) === '[object Array]') || (entry.length !== 2)) {\r\n              this.append(entry[0], entry[1]);\r\n            } else {\r\n              throw new TypeError('Expected [string, any] as entry at index ' + i + ' of URLSearchParams\\'s input');\r\n            }\r\n          }\r\n        } else {\r\n          for (var key in searchString) {\r\n            if (searchString.hasOwnProperty(key)) {\r\n              this.append(key, searchString[key]);\r\n            }\r\n          }\r\n        }\r\n      } else {\r\n        throw new TypeError('Unsupported input\\'s type for URLSearchParams');\r\n      }\r\n    };\r\n\r\n    var proto = URLSearchParams.prototype;\r\n\r\n    proto.append = function(name, value) {\r\n      if (name in this._entries) {\r\n        this._entries[name].push(String(value));\r\n      } else {\r\n        this._entries[name] = [String(value)];\r\n      }\r\n    };\r\n\r\n    proto.delete = function(name) {\r\n      delete this._entries[name];\r\n    };\r\n\r\n    proto.get = function(name) {\r\n      return (name in this._entries) ? this._entries[name][0] : null;\r\n    };\r\n\r\n    proto.getAll = function(name) {\r\n      return (name in this._entries) ? this._entries[name].slice(0) : [];\r\n    };\r\n\r\n    proto.has = function(name) {\r\n      return (name in this._entries);\r\n    };\r\n\r\n    proto.set = function(name, value) {\r\n      this._entries[name] = [String(value)];\r\n    };\r\n\r\n    proto.forEach = function(callback, thisArg) {\r\n      var entries;\r\n      for (var name in this._entries) {\r\n        if (this._entries.hasOwnProperty(name)) {\r\n          entries = this._entries[name];\r\n          for (var i = 0; i < entries.length; i++) {\r\n            callback.call(thisArg, entries[i], name, this);\r\n          }\r\n        }\r\n      }\r\n    };\r\n\r\n    proto.keys = function() {\r\n      var items = [];\r\n      this.forEach(function(value, name) {\r\n        items.push(name);\r\n      });\r\n      return createIterator(items);\r\n    };\r\n\r\n    proto.values = function() {\r\n      var items = [];\r\n      this.forEach(function(value) {\r\n        items.push(value);\r\n      });\r\n      return createIterator(items);\r\n    };\r\n\r\n    proto.entries = function() {\r\n      var items = [];\r\n      this.forEach(function(value, name) {\r\n        items.push([name, value]);\r\n      });\r\n      return createIterator(items);\r\n    };\r\n\r\n    if (iteratorSupported) {\r\n      proto[Symbol.iterator] = proto.entries;\r\n    }\r\n\r\n    proto.toString = function() {\r\n      var searchArray = [];\r\n      this.forEach(function(value, name) {\r\n        searchArray.push(serializeParam(name) + '=' + serializeParam(value));\r\n      });\r\n      return searchArray.join('&');\r\n    };\r\n\r\n\r\n    global.URLSearchParams = URLSearchParams;\r\n  };\r\n\r\n  var checkIfURLSearchParamsSupported = function() {\r\n    try {\r\n      var URLSearchParams = global.URLSearchParams;\r\n\r\n      return (\r\n        (new URLSearchParams('?a=1').toString() === 'a=1') &&\r\n        (typeof URLSearchParams.prototype.set === 'function') &&\r\n        (typeof URLSearchParams.prototype.entries === 'function')\r\n      );\r\n    } catch (e) {\r\n      return false;\r\n    }\r\n  };\r\n\r\n  if (!checkIfURLSearchParamsSupported()) {\r\n    polyfillURLSearchParams();\r\n  }\r\n\r\n  var proto = global.URLSearchParams.prototype;\r\n\r\n  if (typeof proto.sort !== 'function') {\r\n    proto.sort = function() {\r\n      var _this = this;\r\n      var items = [];\r\n      this.forEach(function(value, name) {\r\n        items.push([name, value]);\r\n        if (!_this._entries) {\r\n          _this.delete(name);\r\n        }\r\n      });\r\n      items.sort(function(a, b) {\r\n        if (a[0] < b[0]) {\r\n          return -1;\r\n        } else if (a[0] > b[0]) {\r\n          return +1;\r\n        } else {\r\n          return 0;\r\n        }\r\n      });\r\n      if (_this._entries) { // force reset because IE keeps keys index\r\n        _this._entries = {};\r\n      }\r\n      for (var i = 0; i < items.length; i++) {\r\n        this.append(items[i][0], items[i][1]);\r\n      }\r\n    };\r\n  }\r\n\r\n  if (typeof proto._fromString !== 'function') {\r\n    Object.defineProperty(proto, '_fromString', {\r\n      enumerable: false,\r\n      configurable: false,\r\n      writable: false,\r\n      value: function(searchString) {\r\n        if (this._entries) {\r\n          this._entries = {};\r\n        } else {\r\n          var keys = [];\r\n          this.forEach(function(value, name) {\r\n            keys.push(name);\r\n          });\r\n          for (var i = 0; i < keys.length; i++) {\r\n            this.delete(keys[i]);\r\n          }\r\n        }\r\n\r\n        searchString = searchString.replace(/^\\?/, '');\r\n        var attributes = searchString.split('&');\r\n        var attribute;\r\n        for (var i = 0; i < attributes.length; i++) {\r\n          attribute = attributes[i].split('=');\r\n          this.append(\r\n            deserializeParam(attribute[0]),\r\n            (attribute.length > 1) ? deserializeParam(attribute[1]) : ''\r\n          );\r\n        }\r\n      }\r\n    });\r\n  }\r\n\r\n  // HTMLAnchorElement\r\n\r\n})(\r\n  (typeof __webpack_require__.g !== 'undefined') ? __webpack_require__.g\r\n    : ((typeof window !== 'undefined') ? window\r\n    : ((typeof self !== 'undefined') ? self : this))\r\n);\r\n\r\n(function(global) {\r\n  /**\r\n   * Polyfill URL\r\n   *\r\n   * Inspired from : https://github.com/arv/DOM-URL-Polyfill/blob/master/src/url.js\r\n   */\r\n\r\n  var checkIfURLIsSupported = function() {\r\n    try {\r\n      var u = new global.URL('b', 'http://a');\r\n      u.pathname = 'c d';\r\n      return (u.href === 'http://a/c%20d') && u.searchParams;\r\n    } catch (e) {\r\n      return false;\r\n    }\r\n  };\r\n\r\n\r\n  var polyfillURL = function() {\r\n    var _URL = global.URL;\r\n\r\n    var URL = function(url, base) {\r\n      if (typeof url !== 'string') url = String(url);\r\n      if (base && typeof base !== 'string') base = String(base);\r\n\r\n      // Only create another document if the base is different from current location.\r\n      var doc = document, baseElement;\r\n      if (base && (global.location === void 0 || base !== global.location.href)) {\r\n        base = base.toLowerCase();\r\n        doc = document.implementation.createHTMLDocument('');\r\n        baseElement = doc.createElement('base');\r\n        baseElement.href = base;\r\n        doc.head.appendChild(baseElement);\r\n        try {\r\n          if (baseElement.href.indexOf(base) !== 0) throw new Error(baseElement.href);\r\n        } catch (err) {\r\n          throw new Error('URL unable to set base ' + base + ' due to ' + err);\r\n        }\r\n      }\r\n\r\n      var anchorElement = doc.createElement('a');\r\n      anchorElement.href = url;\r\n      if (baseElement) {\r\n        doc.body.appendChild(anchorElement);\r\n        anchorElement.href = anchorElement.href; // force href to refresh\r\n      }\r\n\r\n      var inputElement = doc.createElement('input');\r\n      inputElement.type = 'url';\r\n      inputElement.value = url;\r\n\r\n      if (anchorElement.protocol === ':' || !/:/.test(anchorElement.href) || (!inputElement.checkValidity() && !base)) {\r\n        throw new TypeError('Invalid URL');\r\n      }\r\n\r\n      Object.defineProperty(this, '_anchorElement', {\r\n        value: anchorElement\r\n      });\r\n\r\n\r\n      // create a linked searchParams which reflect its changes on URL\r\n      var searchParams = new global.URLSearchParams(this.search);\r\n      var enableSearchUpdate = true;\r\n      var enableSearchParamsUpdate = true;\r\n      var _this = this;\r\n      ['append', 'delete', 'set'].forEach(function(methodName) {\r\n        var method = searchParams[methodName];\r\n        searchParams[methodName] = function() {\r\n          method.apply(searchParams, arguments);\r\n          if (enableSearchUpdate) {\r\n            enableSearchParamsUpdate = false;\r\n            _this.search = searchParams.toString();\r\n            enableSearchParamsUpdate = true;\r\n          }\r\n        };\r\n      });\r\n\r\n      Object.defineProperty(this, 'searchParams', {\r\n        value: searchParams,\r\n        enumerable: true\r\n      });\r\n\r\n      var search = void 0;\r\n      Object.defineProperty(this, '_updateSearchParams', {\r\n        enumerable: false,\r\n        configurable: false,\r\n        writable: false,\r\n        value: function() {\r\n          if (this.search !== search) {\r\n            search = this.search;\r\n            if (enableSearchParamsUpdate) {\r\n              enableSearchUpdate = false;\r\n              this.searchParams._fromString(this.search);\r\n              enableSearchUpdate = true;\r\n            }\r\n          }\r\n        }\r\n      });\r\n    };\r\n\r\n    var proto = URL.prototype;\r\n\r\n    var linkURLWithAnchorAttribute = function(attributeName) {\r\n      Object.defineProperty(proto, attributeName, {\r\n        get: function() {\r\n          return this._anchorElement[attributeName];\r\n        },\r\n        set: function(value) {\r\n          this._anchorElement[attributeName] = value;\r\n        },\r\n        enumerable: true\r\n      });\r\n    };\r\n\r\n    ['hash', 'host', 'hostname', 'port', 'protocol']\r\n      .forEach(function(attributeName) {\r\n        linkURLWithAnchorAttribute(attributeName);\r\n      });\r\n\r\n    Object.defineProperty(proto, 'search', {\r\n      get: function() {\r\n        return this._anchorElement['search'];\r\n      },\r\n      set: function(value) {\r\n        this._anchorElement['search'] = value;\r\n        this._updateSearchParams();\r\n      },\r\n      enumerable: true\r\n    });\r\n\r\n    Object.defineProperties(proto, {\r\n\r\n      'toString': {\r\n        get: function() {\r\n          var _this = this;\r\n          return function() {\r\n            return _this.href;\r\n          };\r\n        }\r\n      },\r\n\r\n      'href': {\r\n        get: function() {\r\n          return this._anchorElement.href.replace(/\\?$/, '');\r\n        },\r\n        set: function(value) {\r\n          this._anchorElement.href = value;\r\n          this._updateSearchParams();\r\n        },\r\n        enumerable: true\r\n      },\r\n\r\n      'pathname': {\r\n        get: function() {\r\n          return this._anchorElement.pathname.replace(/(^\\/?)/, '/');\r\n        },\r\n        set: function(value) {\r\n          this._anchorElement.pathname = value;\r\n        },\r\n        enumerable: true\r\n      },\r\n\r\n      'origin': {\r\n        get: function() {\r\n          // get expected port from protocol\r\n          var expectedPort = { 'http:': 80, 'https:': 443, 'ftp:': 21 }[this._anchorElement.protocol];\r\n          // add port to origin if, expected port is different than actual port\r\n          // and it is not empty f.e http://foo:8080\r\n          // 8080 != 80 && 8080 != ''\r\n          var addPortToOrigin = this._anchorElement.port != expectedPort &&\r\n            this._anchorElement.port !== '';\r\n\r\n          return this._anchorElement.protocol +\r\n            '//' +\r\n            this._anchorElement.hostname +\r\n            (addPortToOrigin ? (':' + this._anchorElement.port) : '');\r\n        },\r\n        enumerable: true\r\n      },\r\n\r\n      'password': { // TODO\r\n        get: function() {\r\n          return '';\r\n        },\r\n        set: function(value) {\r\n        },\r\n        enumerable: true\r\n      },\r\n\r\n      'username': { // TODO\r\n        get: function() {\r\n          return '';\r\n        },\r\n        set: function(value) {\r\n        },\r\n        enumerable: true\r\n      },\r\n    });\r\n\r\n    URL.createObjectURL = function(blob) {\r\n      return _URL.createObjectURL.apply(_URL, arguments);\r\n    };\r\n\r\n    URL.revokeObjectURL = function(url) {\r\n      return _URL.revokeObjectURL.apply(_URL, arguments);\r\n    };\r\n\r\n    global.URL = URL;\r\n\r\n  };\r\n\r\n  if (!checkIfURLIsSupported()) {\r\n    polyfillURL();\r\n  }\r\n\r\n  if ((global.location !== void 0) && !('origin' in global.location)) {\r\n    var getOrigin = function() {\r\n      return global.location.protocol + '//' + global.location.hostname + (global.location.port ? (':' + global.location.port) : '');\r\n    };\r\n\r\n    try {\r\n      Object.defineProperty(global.location, 'origin', {\r\n        get: getOrigin,\r\n        enumerable: true\r\n      });\r\n    } catch (e) {\r\n      setInterval(function() {\r\n        global.location.origin = getOrigin();\r\n      }, 100);\r\n    }\r\n  }\r\n\r\n})(\r\n  (typeof __webpack_require__.g !== 'undefined') ? __webpack_require__.g\r\n    : ((typeof window !== 'undefined') ? window\r\n    : ((typeof self !== 'undefined') ? self : this))\r\n);\r\n\n\n//# sourceURL=webpack://fsa-design-system/./node_modules/url-polyfill/url-polyfill.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack://fsa-design-system/./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ rng; }\n/* harmony export */ });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\nvar getRandomValues;\nvar rnds8 = new Uint8Array(16);\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation. Also,\n    // find the complete implementation of crypto (msCrypto) on IE11.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);\n\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack://fsa-design-system/./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nvar byteToHex = [];\n\nfor (var i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).substr(1));\n}\n\nfunction stringify(arr) {\n  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__.default)(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (stringify);\n\n//# sourceURL=webpack://fsa-design-system/./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\nfunction v4(options, buf, offset) {\n  options = options || {};\n  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (var i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__.default)(rnds);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (v4);\n\n//# sourceURL=webpack://fsa-design-system/./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__.default.test(uuid);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (validate);\n\n//# sourceURL=webpack://fsa-design-system/./node_modules/uuid/dist/esm-browser/validate.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;