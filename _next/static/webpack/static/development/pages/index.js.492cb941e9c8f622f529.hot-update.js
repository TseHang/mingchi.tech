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








var Wrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a.Header).withConfig({
  displayName: "Header__Wrapper",
  componentId: "xcop5m-0"
})(["position:fixed;display:flex;justify-content:space-between;align-items:center;width:100%;height:55px;padding:12px ", ";z-index:", ";background-color:", ";border-bottom:solid 1px rgba(51,51,51,0.65);", "{height:", ";}"], function (props) {
  return props.theme.headerHorizontalPadding;
}, function (props) {
  return props.theme.z.header;
}, function (props) {
  return props.theme.colors.black;
}, Object(_themes_helper__WEBPACK_IMPORTED_MODULE_6__["media"])('pad'), function (props) {
  return props.theme.headerHeight;
});
var LogoTitle = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img.withConfig({
  displayName: "Header__LogoTitle",
  componentId: "xcop5m-1"
})(["height:1.5rem;"]);
var Logo = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(react_svg__WEBPACK_IMPORTED_MODULE_4__["default"]).withConfig({
  displayName: "Header__Logo",
  componentId: "xcop5m-2"
})(["svg{height:2em;transform:translateY(5px);}g{path{fill:white;}}"]);

var Header = function Header() {
  var oldY = 0;

  var _useWindowScroll = Object(_hooks_useWindowScroll__WEBPACK_IMPORTED_MODULE_7__["default"])(),
      y = _useWindowScroll.y;

  if (y > oldY) {
    // console.log(document.getElementById('launch-screen'));
    console.log(y, oldY);
    oldY = y;
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Wrapper, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(LogoTitle, {
    src: Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getRelativePath"])('/static/logo-title.png'),
    alt: "logo-title"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Logo, {
    src: Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getRelativePath"])('/static/circle.svg')
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./hooks/useWindowScoll.ts":
false,

/***/ "./hooks/useWindowScroll.ts":
/*!**********************************!*\
  !*** ./hooks/useWindowScroll.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


var isClient = (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object';

var useWindowScroll = function useWindowScroll() {
  var frame = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    x: isClient ? window.scrollX : 0,
    y: isClient ? window.scrollY : 0,
    oldX: isClient ? window.scrollX : 0,
    oldY: isClient ? window.scrollY : 0
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var handler = function handler() {
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(function () {
        setState(function (oldState) {
          return {
            x: window.scrollX,
            y: window.scrollY,
            oldX: oldState.x,
            oldY: oldState.y
          };
        });
      });
    };

    window.addEventListener('scroll', handler, {
      capture: false,
      passive: true
    });
    return function () {
      cancelAnimationFrame(frame.current);
      window.removeEventListener('scroll', handler);
    };
  }, []);
  return state;
};

/* harmony default export */ __webpack_exports__["default"] = (useWindowScroll);

/***/ })

})
//# sourceMappingURL=index.js.492cb941e9c8f622f529.hot-update.js.map