webpackHotUpdate("static/development/pages/products.js",{

/***/ "./pages/products.tsx":
/*!****************************!*\
  !*** ./pages/products.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/MainLayout */ "./layouts/MainLayout.tsx");
/* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Section */ "./components/Section.tsx");
/* harmony import */ var _components_Motto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Motto */ "./components/Motto.tsx");
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Title */ "./components/Title.tsx");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Button */ "./components/Button.tsx");
/* harmony import */ var _components_ProductList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ProductList */ "./components/ProductList.tsx");
/* harmony import */ var _constants_products__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants/products */ "./constants/products.ts");
/* harmony import */ var _themes_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../themes/helper */ "./themes/helper.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils */ "./utils.ts");











var StyledSection = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_Section__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "products__StyledSection",
  componentId: "sc-3ixvrn-0"
})(["", "{display:flex;flex-direction:column;}"], Object(_themes_helper__WEBPACK_IMPORTED_MODULE_9__["media"])('pad'));
var StyledMotto = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_Motto__WEBPACK_IMPORTED_MODULE_4__["default"]).withConfig({
  displayName: "products__StyledMotto",
  componentId: "sc-3ixvrn-1"
})(["margin-bottom:0.5em;"]);
var StyledButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_Button__WEBPACK_IMPORTED_MODULE_6__["default"]).withConfig({
  displayName: "products__StyledButton",
  componentId: "sc-3ixvrn-2"
})(["width:40%;max-width:115px;text-align:center;margin-bottom:3em;"]);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "MingChi Tech - Products",
    sections: [{
      name: 'Masking',
      id: 'masking'
    }, {
      name: 'Healing Welding Assembling',
      id: 'healing'
    }, {
      name: 'Axial Type',
      id: 'axial-type'
    }, {
      name: 'Test Sorting',
      id: 'test-sorting'
    }, {
      name: 'Laser Marking',
      id: 'laser-marking'
    }, {
      name: 'Forming Tapping',
      id: 'forming-tapping'
    }, {
      name: 'Spraying',
      id: 'spraying'
    }, {
      name: 'Thermal Press',
      id: 'thermal-press'
    }]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledSection, {
    first: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledMotto, null, "Want to customize?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton, {
    outline: true,
    onClick: function onClick() {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_10__["scrollToID"])('contact-us');
    }
  }, "Contact us"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Our Products"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ProductList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "masking",
    data: _constants_products__WEBPACK_IMPORTED_MODULE_8__["MASKING"],
    title: "Masking Machine"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ProductList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "healing",
    data: _constants_products__WEBPACK_IMPORTED_MODULE_8__["HEALING"],
    title: "Healing & Welding Tapping & Assembling Machine "
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ProductList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "axial-type",
    data: _constants_products__WEBPACK_IMPORTED_MODULE_8__["AXIAL_TYPE"],
    title: "Axial Type Machine"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ProductList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "test-sorting",
    data: _constants_products__WEBPACK_IMPORTED_MODULE_8__["TEST_SORTING"],
    title: "Test Sorting Machine"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ProductList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "laser-marking",
    data: _constants_products__WEBPACK_IMPORTED_MODULE_8__["LASER_MARKING"],
    title: "Laser Marking Machine"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ProductList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "forming-tapping",
    data: _constants_products__WEBPACK_IMPORTED_MODULE_8__["FORMING_TAPPING"],
    title: "Forming Tapping Machine"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ProductList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "spraying",
    data: _constants_products__WEBPACK_IMPORTED_MODULE_8__["SPRAYING"],
    title: "Spraying Machine"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ProductList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "thermal-press",
    data: _constants_products__WEBPACK_IMPORTED_MODULE_8__["THERMAL_PRESS"],
    title: "Thremal Press Machine"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledMotto, null, "Nothing meet you? We customize for you!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton, {
    outline: true,
    onClick: function onClick() {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_10__["scrollToID"])('contact-us');
    }
  }, "Contact us")));
});
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/products")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=products.js.f823757d2b83a7285db8.hot-update.js.map