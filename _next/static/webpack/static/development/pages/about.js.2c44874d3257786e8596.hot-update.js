webpackHotUpdate("static/development/pages/about.js",{

/***/ "./components/Section.tsx":
/*!********************************!*\
  !*** ./components/Section.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_by__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-by */ "./node_modules/styled-by/build/styled-by.min.js");
/* harmony import */ var styled_by__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_by__WEBPACK_IMPORTED_MODULE_2__);



var StyledSection = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "Section__StyledSection",
  componentId: "q8302s-0"
})(["width:100%;padding-top:", ";padding-bottom:8vh;display:flex;justify-content:center;align-items:", ";text-align:", ";height:", ";box-sizing:", ";background-color:", ""], function (props) {
  return props.first ? 'calc(8vh + 64px)' : '8vh';
}, function (props) {
  return props.alignItems;
}, function (props) {
  return props.textAlign;
}, function (props) {
  return props.fullscreen ? '100vh' : 'initial';
}, function (props) {
  return props.fullscreen ? ' border-box' : 'initial';
}, styled_by__WEBPACK_IMPORTED_MODULE_2___default()('mode'));

var Section = function Section(_ref) {
  var children = _ref.children,
      _ref$fullscreen = _ref.fullscreen,
      fullscreen = _ref$fullscreen === void 0 ? false : _ref$fullscreen,
      _ref$textAlign = _ref.textAlign,
      textAlign = _ref$textAlign === void 0 ? 'left' : _ref$textAlign,
      _ref$first = _ref.first,
      first = _ref$first === void 0 ? false : _ref$first,
      _ref$alignItems = _ref.alignItems,
      alignItems = _ref$alignItems === void 0 ? 'center' : _ref$alignItems,
      _ref$mode = _ref.mode,
      mode = _ref$mode === void 0 ? 'light' : _ref$mode;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledSection, {
    fullscreen: fullscreen,
    textAlign: textAlign,
    first: first,
    alignItems: alignItems,
    mode: mode
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./node_modules/styled-by/build/styled-by.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/styled-by/build/styled-by.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(n,o){ true?o(exports):undefined}(this,function(n){"use strict";var o=Object.assign||function(n){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},r={function:function(n){var o=n.options,t=n.props;return o[t[n.prop]](t)},string:function(n){return n.options[n.props[n.prop]]},undefined:function(n){var o=n.options,t=n.props;return"function"==typeof o._?o._(t):null}},e={string:function(n){return n.options},function:function(n){return(0,n.options)(n.props)},object:function(n){var o=n.options,e=n.props,p=n.prop;return r[t(o[e[p]])]({options:o,props:e,prop:p})},undefined:function(){}},p=function(n,o){return function(r){return r[n]?o?e[void 0===o?"undefined":t(o)]({prop:n,options:o,props:r}):r[n]:""}},u=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(r){return Object.keys(n).reduce(function(e,u){return e+" "+p(u,n[u])(o({},t,r))},"")}};module.exports=function(n,o){return"string"==typeof n?p(n,o):u(n,o)},Object.defineProperty(n,"__esModule",{value:!0})});


/***/ })

})
//# sourceMappingURL=about.js.2c44874d3257786e8596.hot-update.js.map