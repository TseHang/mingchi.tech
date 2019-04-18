webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ProductList.tsx":
/*!************************************!*\
  !*** ./components/ProductList.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _themes_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../themes/helper */ "./themes/helper.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./utils.ts");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Button */ "./components/Button.tsx");






var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ProductList__Wrapper",
  componentId: "sc-1tjc4da-0"
})(["width:100%;margin:2em auto;", "{padding:0 10%;}"], Object(_themes_helper__WEBPACK_IMPORTED_MODULE_3__["media"])('desktop'));
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h3.withConfig({
  displayName: "ProductList__Title",
  componentId: "sc-1tjc4da-1"
})(["margin-right:auto;font-size:", ";"], function (p) {
  return p.theme.fontSize.m;
});
var Cover = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ProductList__Cover",
  componentId: "sc-1tjc4da-2"
})(["cursor:pointer;height:15em;background:rgba(231,231,231,.3) url(", ") no-repeat center / contain;"], function (p) {
  return p.src;
});
var InfoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ProductList__InfoWrapper",
  componentId: "sc-1tjc4da-3"
})(["display:flex;justify-content:space-between;padding-left:1%;"]);
var DataWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ProductList__DataWrapper",
  componentId: "sc-1tjc4da-4"
})(["display:flex;justify-content:flex-start;flex-wrap:wrap;> figure{width:46%;text-align:center;margin:0 1% 1.5em;", "{width:23%;}}figcaption{> p{font-size:", ";}}a{color:rgba(0,0,0,0.65);text-decoration:underline;}"], Object(_themes_helper__WEBPACK_IMPORTED_MODULE_3__["media"])('pad'), function (p) {
  return p.theme.fontSize.s;
});
var MoreWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ProductList__MoreWrapper",
  componentId: "sc-1tjc4da-5"
})(["margin-left:auto;display:flex;flex-wrap:nowrap;", "{margin-right:10%;}"], Object(_themes_helper__WEBPACK_IMPORTED_MODULE_3__["media"])('desktop'));

var ProductList = function ProductList(_ref) {
  var id = _ref.id,
      data = _ref.data,
      title = _ref.title,
      _ref$showMore = _ref.showMore,
      showMore = _ref$showMore === void 0 ? false : _ref$showMore,
      className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
    id: id,
    className: className
  }, (title || showMore) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InfoWrapper, null, title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, null, title), showMore && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MoreWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "#contact-us"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__["default"], null, "Contact us")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/products",
    as: Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getRelativePath"])('/products')
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    outline: true
  }, "View all")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DataWrapper, null, data.map(function (product) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
      key: product.modal
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Cover, {
      src: product.coverUri,
      onClick: function onClick() {
        return window.open(product.pdfUri);
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figcaption", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: product.pdfUri,
      target: "_blank"
    }, product.modal), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, product.category)));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductList);

/***/ })

})
//# sourceMappingURL=index.js.75bfb3f1688430152709.hot-update.js.map