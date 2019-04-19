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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/es/react-svg.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./utils.ts");
/* harmony import */ var _themes_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../themes/helper */ "./themes/helper.ts");
/* harmony import */ var _hooks_useWindowScroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useWindowScroll */ "./hooks/useWindowScroll.ts");




function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var Wrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(function (_ref) {
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
}, Object(_themes_helper__WEBPACK_IMPORTED_MODULE_7__["media"])('pad'), function (props) {
  return props.theme.headerHeight;
}, function (p) {
  return p.hideUp && Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["transform:translateY(-100%);"]);
});
var LogoTitle = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].img.withConfig({
  displayName: "Header__LogoTitle",
  componentId: "xcop5m-1"
})(["height:1.5rem;"]);
var Circle = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(react_svg__WEBPACK_IMPORTED_MODULE_5__["default"]).withConfig({
  displayName: "Header__Circle",
  componentId: "xcop5m-2"
})(["transform:", ";transition:transform 0.3s ease-in-out;cursor:pointer;svg{height:2em;transform:translateY(5px);path{fill:", ";}}"], function (p) {
  return p.open ? 'rotateZ(270deg)' : 'rotateZ(0deg)';
}, function (p) {
  return p.open ? 'white' : p.theme.colors.main;
});
var SmallCircle = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(react_svg__WEBPACK_IMPORTED_MODULE_5__["default"]).withConfig({
  displayName: "Header__SmallCircle",
  componentId: "xcop5m-3"
})(["margin-right:0.5em;svg{height:1em;}"]);
var BgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Header__BgWrapper",
  componentId: "xcop5m-4"
})(["position:fixed;right:0;top:0;width:100vw;height:", ";color:", ";background:", ";z-index:", ";transition:height 0.5s ease-in-out;display:flex;flex-direction:column;align-items:center;justify-content:center;> div{display:", ";cursor:pointer;align-items:center;margin-bottom:1em;min-width:100px;&:hover{color:white;path{fill:white;}}}p{margin:0;font-size:", ";}"], function (p) {
  return p.open ? '100vh' : '0';
}, function (p) {
  return p.theme.colors.main;
}, function (p) {
  return p.theme.colors.black;
}, function (p) {
  return p.theme.z.header - 1;
}, function (p) {
  return p.open ? 'flex' : 'none';
}, function (p) {
  return p.theme.fontSize.m;
});
var Triangle = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Header__Triangle",
  componentId: "xcop5m-5"
})(["transition:transform 0.3s ease-in-out;transform:", ";margin-left:2em;margin-right:auto;width:0;height:0;border-style:solid;border-width:11px 6px 0px 6px;border-color:", " transparent transparent transparent;border:transparent 1px 1px 1px;", "{display:none;}"], function (p) {
  return p.open ? 'rotateZ(180deg)' : 'rotateZ(0deg)';
}, function (p) {
  return p.theme.colors.main;
}, Object(_themes_helper__WEBPACK_IMPORTED_MODULE_7__["media"])('desktop'));
var SectionSelectWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Header__SectionSelectWrapper",
  componentId: "xcop5m-6"
})([".sections{display:none;cursor:pointer;font-weight:300;margin-right:1.5em;color:", ";&:hover,&.active{color:white;}}", "{display:flex;justify-content:flex-start;align-items:center;margin-right:auto;margin-left:3%;max-width:65%;height:100%;white-space:nowrap;overflow-x:scroll;-webkit-overflow-scrolling:touch;-ms-overflow-style:none;&::-webkit-scrollbar{display:none;}.sections{display:block;}}"], function (p) {
  return p.theme.colors.main;
}, Object(_themes_helper__WEBPACK_IMPORTED_MODULE_7__["media"])('desktop'));

var Header = function Header(_ref2) {
  var sections = _ref2.sections;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      openSectionList = _useState2[0],
      setOpenSectionList = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      open = _useState4[0],
      setOpen = _useState4[1];

  var _useWindowScroll = Object(_hooks_useWindowScroll__WEBPACK_IMPORTED_MODULE_8__["default"])(),
      y = _useWindowScroll.y,
      oldY = _useWindowScroll.oldY;

  var firstSectionHeight = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    if (y) {
      var section = document.getElementById('first-section');
      return section && section.offsetHeight;
    }

    return Infinity;
  }, [!!y]); // If page has no first section, outOfFirst always be correct

  var outOfFirst = !firstSectionHeight || y >= firstSectionHeight;
  var scrollTo = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (section) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_6__["scrollToID"])(section.id);
    setOpen(false);
  }, ['no change']);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Wrapper, {
    hideUp: outOfFirst && !open && y > oldY
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(LogoTitle, {
    src: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getRelativePath"])('/static/logo-title.png'),
    alt: "logo-title"
  }), sections && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Triangle, {
    open: openSectionList
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SectionSelectWrapper, null, sections.map(function (section) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "sections",
      key: section.id,
      onClick: function onClick() {
        return scrollTo(section);
      }
    }, section.name);
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Circle, {
    open: open,
    src: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getRelativePath"])('/static/circle.svg'),
    onClick: function onClick() {
      return setOpen(function (state) {
        return !state;
      });
    }
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BgWrapper, {
    open: openSectionList
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    onClick: function onClick() {
      return setOpen(false);
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SmallCircle, {
    src: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getRelativePath"])('/static/circle.svg'),
    wrapper: "span"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "Home"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/products"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    onClick: function onClick() {
      return setOpen(false);
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SmallCircle, {
    src: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getRelativePath"])('/static/circle.svg'),
    wrapper: "span"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "Products")))), sections && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BgWrapper, {
    open: open
  }, sections.map(function (section) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      key: section.id,
      onClick: function onClick() {
        return scrollTo(section);
      }
    }, section.name);
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.539701bfe5e3977ff94a.hot-update.js.map