webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Title.tsx":
/*!******************************!*\
  !*** ./components/Title.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./utils.ts");
/* harmony import */ var _themes_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../themes/helper */ "./themes/helper.ts");




var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Title__Wrapper",
  componentId: "sc-1htw0fb-0"
})(["position:relative;margin:5em auto 2em;> h1{position:relative;margin:0;color:", ";}"], function (p) {
  return p.color || 'inherit';
});
var Circle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "Title__Circle",
  componentId: "sc-1htw0fb-1"
})(["position:absolute;width:15px;height:15px;top:4px;left:-7px;", "{top:5px;left:-9px;width:20px;height:20px;}"], Object(_themes_helper__WEBPACK_IMPORTED_MODULE_3__["media"])('pad'));

var Title = function Title(_ref) {
  var id = _ref.id,
      color = _ref.color,
      title = _ref.title,
      className = _ref.className,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
    className: className,
    color: color,
    id: "id"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Circle, {
    src: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getRelativePath"])('/static/circle.svg')
  }), title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, title), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ })

})
//# sourceMappingURL=index.js.408727c3de71ae4722dd.hot-update.js.map