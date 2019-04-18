webpackHotUpdate("static/development/pages/index.js",{

/***/ "./hooks/useWindowScoll.ts":
/*!*********************************!*\
  !*** ./hooks/useWindowScoll.ts ***!
  \*********************************/
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
    y: isClient ? window.scrollY : 0
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
            y: window.scrollY
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
//# sourceMappingURL=index.js.3675914e223aa6d81a75.hot-update.js.map