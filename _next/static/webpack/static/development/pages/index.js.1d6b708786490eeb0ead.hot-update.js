webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/layout/style */ "./node_modules/antd/lib/layout/style/index.js");
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/es/react-svg.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./utils.ts");
/* harmony import */ var _themes_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../themes/helper */ "./themes/helper.ts");
/* harmony import */ var _hooks_useWindowScroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useWindowScroll */ "./hooks/useWindowScroll.ts");




function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var Wrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(function (_ref) {
  var hideUp = _ref.hideUp,
      res = _objectWithoutProperties(_ref, ["hideUp"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a.Header, res);
}).withConfig({
  displayName: "Header__Wrapper",
  componentId: "xcop5m-0"
})(["position:fixed;display:flex;justify-content:space-between;align-items:center;width:100%;height:55px;padding:12px ", ";z-index:", ";background-color:", ";border-bottom:solid 1px rgba(51,51,51,0.65);transform:translateY(0);transition:all 0.3s ease-in;", "{height:", ";}", ""], function (props) {
  return props.theme.headerHorizontalPadding;
}, function (props) {
  return props.theme.z.header;
}, function (props) {
  return props.theme.colors.black;
}, Object(_themes_helper__WEBPACK_IMPORTED_MODULE_6__["media"])('pad'), function (props) {
  return props.theme.headerHeight;
}, function (p) {
  return p.hideUp && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(["transform:translateY(-100%);"]);
});
var LogoTitle = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img.withConfig({
  displayName: "Header__LogoTitle",
  componentId: "xcop5m-1"
})(["height:1.5rem;"]);
var Logo = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(react_svg__WEBPACK_IMPORTED_MODULE_4__["default"]).withConfig({
  displayName: "Header__Logo",
  componentId: "xcop5m-2"
})(["svg{height:2em;transform:translateY(5px);}"]);
var BgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Header__BgWrapper",
  componentId: "xcop5m-3"
})(["position:absolute;left:0;top:0;width:100vw;height:100vh;background:", ";"], function (p) {
  return p.theme.colors.black;
});

var Header = function Header() {
  var _useWindowScroll = Object(_hooks_useWindowScroll__WEBPACK_IMPORTED_MODULE_7__["default"])(),
      y = _useWindowScroll.y,
      oldY = _useWindowScroll.oldY;

  var firstSectionHeight = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    if (y) {
      var section = document.getElementById('launch-section');

      if (section) {
        return section.offsetHeight;
      }
    }

    return Infinity;
  }, [!!y]);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Wrapper, {
    hideUp: y > firstSectionHeight && y > oldY
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(LogoTitle, {
    src: Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getRelativePath"])('/static/logo-title.png'),
    alt: "logo-title"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Logo, {
    src: Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getRelativePath"])('/static/circle.svg')
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BgWrapper, null, "1233")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.1d6b708786490eeb0ead.hot-update.js.map