webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils.ts":
/*!******************!*\
  !*** ./utils.ts ***!
  \******************/
/*! exports provided: getRelativePath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRelativePath", function() { return getRelativePath; });
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment */ "./environment.ts");

function getRelativePath(path) {
  if (_environment__WEBPACK_IMPORTED_MODULE_0__["GITHUB"]) {
    var valid = /[^\/].*/g.exec(path);
    return valid ? "/".concat(_environment__WEBPACK_IMPORTED_MODULE_0__["PROJ_NAME"], "/").concat(valid[0]) : "/".concat(_environment__WEBPACK_IMPORTED_MODULE_0__["PROJ_NAME"], "/");
  }

  return path;
}

/***/ })

})
//# sourceMappingURL=index.js.fa798b9ba473e4c03f79.hot-update.js.map