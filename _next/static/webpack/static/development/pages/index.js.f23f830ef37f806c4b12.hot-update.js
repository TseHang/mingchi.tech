webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils.ts":
/*!******************!*\
  !*** ./utils.ts ***!
  \******************/
/*! exports provided: getRelativePath, scrollTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRelativePath", function() { return getRelativePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollTo", function() { return scrollTo; });
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment */ "./environment.ts");

function getRelativePath(path) {
  if (_environment__WEBPACK_IMPORTED_MODULE_0__["GITHUB"]) {
    var valid = /[^\/].*/g.exec(path);
    return valid ? "/".concat(_environment__WEBPACK_IMPORTED_MODULE_0__["PROJ_NAME"], "/").concat(valid[0]) : "/".concat(_environment__WEBPACK_IMPORTED_MODULE_0__["PROJ_NAME"], "/");
  }

  return path;
}
function scrollTo(id) {
  var $el = document.getElementById(id);

  if ($el) {
    var _$el$getBoundingClien = $el.getBoundingClientRect(),
        top = _$el$getBoundingClien.top;

    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    window.scrollTo(0, scrollTop + top);
  }
}

/***/ })

})
//# sourceMappingURL=index.js.f23f830ef37f806c4b12.hot-update.js.map