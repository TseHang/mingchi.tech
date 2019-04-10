webpackHotUpdate("static/development/pages/index.js",{

/***/ "./environment.ts":
/*!************************!*\
  !*** ./environment.ts ***!
  \************************/
/*! exports provided: env, GITHUB, PROJ_NAME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "env", function() { return env; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GITHUB", function() { return GITHUB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJ_NAME", function() { return PROJ_NAME; });
// runtime env
var env = function env(key) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return process.env[key] || defaultValue;
};
var GITHUB = env('DEPLOY_ENV') === 'github' || function () {
  // if run `yarn start`, that will get window is reference error
  try {
    return window.location.host.includes('github.io');
  } catch (_unused) {
    return false;
  }
}();
var PROJ_NAME = GITHUB ? 'mingchi.tech' : '';
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=index.js.ce0069d253f83251f22a.hot-update.js.map