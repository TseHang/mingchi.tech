webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Section */ "./components/Section.tsx");
/* harmony import */ var _layouts_Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/Main */ "./layouts/Main.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./utils.ts");





var StyledSection = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_Section__WEBPACK_IMPORTED_MODULE_2__["default"]).withConfig({
  displayName: "pages__StyledSection",
  componentId: "ik9pgg-0"
})(["flex-direction:column;justify-content:flex-start;"]);
var Img = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "pages__Img",
  componentId: "ik9pgg-1"
})(["height:8rem;margin:1em auto;"]);
var FamilyImg = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "pages__FamilyImg",
  componentId: "ik9pgg-2"
})(["height:60%;margin:0 auto;"]);
var Motto = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__Motto",
  componentId: "ik9pgg-3"
})(["font-size:", ";margin:1rem auto;color:", ";"], function (p) {
  return p.theme.fontSize.m;
}, function (p) {
  return p.theme.colors.main;
});
var HintArrow = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__HintArrow",
  componentId: "ik9pgg-4"
})(["position:absolute;bottom:1em;color:", ";"], function (p) {
  return p.theme.colors.main;
});

var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_Main__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledSection, {
    fullscreen: true,
    first: true,
    flex: true,
    alignItems: "center",
    mode: "dark"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Img, {
    src: Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getRelativePath"])('/static/logo-with-title.png')
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FamilyImg, {
    src: Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getRelativePath"])('/static/family/dad-horse.jpg')
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Motto, null, "Home is the best"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HintArrow, null, "\u2193")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Section__WEBPACK_IMPORTED_MODULE_2__["default"], null, "456"));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.1c5773e0e34ec04bb936.hot-update.js.map