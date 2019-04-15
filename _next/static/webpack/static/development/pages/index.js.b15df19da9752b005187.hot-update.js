webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ServicesList.tsx":
/*!*************************************!*\
  !*** ./components/ServicesList.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./utils.ts");
/* harmony import */ var _themes_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../themes/helper */ "./themes/helper.ts");




var configs = [{
  key: 'equipments',
  title: 'All kinds of Equipments'
}, {
  key: 'customized',
  title: 'Customized Design'
}, {
  key: 'service-first',
  title: 'Service First, Customer First'
}, {
  key: 'global-team',
  title: 'Global Developing & Researching'
}];
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ServicesList__Wrapper",
  componentId: "sc-19o6hdi-0"
})(["width:100%;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-start;margin:3em auto;> div{width:100%;text-align:center;margin:1em auto;", "{width:50%;}", "{width:25%;}}", "{width:80%;margin-top:10%;}"], Object(_themes_helper__WEBPACK_IMPORTED_MODULE_3__["media"])('pad'), Object(_themes_helper__WEBPACK_IMPORTED_MODULE_3__["media"])('desktop'), Object(_themes_helper__WEBPACK_IMPORTED_MODULE_3__["media"])('desktop'));
var Icon = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "ServicesList__Icon",
  componentId: "sc-19o6hdi-1"
})(["width:50%;margin-bottom:1em;"]);

var Services = function Services() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, null, configs.map(function (service) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: service.key
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
      src: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getRelativePath"])("/static/icon-".concat(service.key, ".png"))
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, service.title));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Services);

/***/ })

})
//# sourceMappingURL=index.js.b15df19da9752b005187.hot-update.js.map