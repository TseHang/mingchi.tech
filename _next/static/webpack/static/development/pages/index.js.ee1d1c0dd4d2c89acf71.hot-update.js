webpackHotUpdate("static/development/pages/index.js",{

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


var StyledSection = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "Section__StyledSection",
  componentId: "q8302s-0"
})(["width:100%;padding-top:", ";padding-bottom:8vh;padding-left:3vw;padding-right:3vw;display:", ";justify-content:center;align-items:", ";text-align:", ";height:", ";box-sizing:", ";background-color:", ";"], function (props) {
  return props.first ? props.theme.headerHeight : 0;
}, function (p) {
  return p.flex ? 'flex' : 'block';
}, function (props) {
  return props.alignItems;
}, function (props) {
  return props.textAlign;
}, function (props) {
  return props.fullscreen ? '100vh' : 'initial';
}, function (props) {
  return props.fullscreen ? ' border-box' : 'initial';
}, function (p) {
  return p.mode === 'light' ? '#fff' : p.theme.colors.black;
});

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
      mode = _ref$mode === void 0 ? 'light' : _ref$mode,
      _ref$flex = _ref.flex,
      flex = _ref$flex === void 0 ? false : _ref$flex;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledSection, {
    flex: flex,
    fullscreen: fullscreen,
    textAlign: textAlign,
    first: first,
    alignItems: alignItems,
    mode: mode
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ })

})
//# sourceMappingURL=index.js.ee1d1c0dd4d2c89acf71.hot-update.js.map