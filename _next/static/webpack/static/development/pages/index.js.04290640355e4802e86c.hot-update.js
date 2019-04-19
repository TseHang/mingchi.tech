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
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/MainLayout */ "./layouts/MainLayout.tsx");
/* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Section */ "./components/Section.tsx");
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Title */ "./components/Title.tsx");
/* harmony import */ var _components_ServicesList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ServicesList */ "./components/ServicesList.tsx");
/* harmony import */ var _components_ProductList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ProductList */ "./components/ProductList.tsx");
/* harmony import */ var _components_Motto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Motto */ "./components/Motto.tsx");
/* harmony import */ var _constants_products__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants/products */ "./constants/products.ts");
/* harmony import */ var _themes_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../themes/helper */ "./themes/helper.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils */ "./utils.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../constants */ "./constants/index.ts");












var StyledSection = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_Section__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "pages__StyledSection",
  componentId: "ik9pgg-0"
})(["flex-direction:column;", "{> p{font-size:1.2em;min-width:500px;width:60%;}}"], Object(_themes_helper__WEBPACK_IMPORTED_MODULE_9__["media"])('pad'));
var ContentSection = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(StyledSection).withConfig({
  displayName: "pages__ContentSection",
  componentId: "ik9pgg-1"
})(["display:block;", "{display:flex;}"], Object(_themes_helper__WEBPACK_IMPORTED_MODULE_9__["media"])('pad'));
var slideInKeyframes = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(["from{opacity:0;transform:translateY(40%);}to{opacity:1;transform:translateY(0);}"]);
var showKeyframes = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(["from{opacity:0;}to{opacity:1;}"]);
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "pages__Logo",
  componentId: "ik9pgg-2"
})(["opacity:0;height:10em;margin:2em auto;animation:", " 2s 0.5s ease-in-out forwards;", "{margin:3em auto;height:13em;}"], slideInKeyframes, Object(_themes_helper__WEBPACK_IMPORTED_MODULE_9__["media"])('pad'));
var LogoTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "pages__LogoTitle",
  componentId: "ik9pgg-3"
})(["font-size:3em;letter-spacing:3px;margin:0 auto;color:white;opacity:0;line-height:1.2;animation:", " 2.5s 0.5s ease-in-out forwards;", "{line-height:1.5;}"], showKeyframes, Object(_themes_helper__WEBPACK_IMPORTED_MODULE_9__["media"])('pad'));
var LogoDescription = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "pages__LogoDescription",
  componentId: "ik9pgg-4"
})(["opacity:0;text-align:center;animation:", " 2.5s 0.5s ease-in-out forwards;"], showKeyframes);
var PartnersInfoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__PartnersInfoWrapper",
  componentId: "ik9pgg-5"
})(["display:flex;flex-wrap:wrap;ol{list-style:disc;margin-bottom:0;}", "{padding-left:10%;}", "{width:75%;justify-content:space-between;> ol{width:50%;}}"], Object(_themes_helper__WEBPACK_IMPORTED_MODULE_9__["media"])('pad'), Object(_themes_helper__WEBPACK_IMPORTED_MODULE_9__["media"])('desktop'));

var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "MingChi Tech - All Kinds of Capacitor Equipments",
    sections: [{
      name: 'Service',
      id: 'our-service'
    }, {
      name: 'Products',
      id: 'products'
    }, {
      name: 'Partners',
      id: 'partners'
    }, {
      name: 'About',
      id: 'about-us'
    }, {
      name: 'Contact',
      id: 'contact-us'
    }]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledSection, {
    id: "first-section",
    fullscreen: true,
    first: true,
    flex: true,
    alignItems: "center",
    mode: "dark"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logo, {
    src: Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getRelativePath"])('/static/logo-with-title(white).svg')
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LogoTitle, {
    style: {
      textAlign: 'center'
    }
  }, "We offer you all kinds of equipments."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LogoDescription, null, "Having more than 10 years researching and developing experience in the global market.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContentSection, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "our-service",
    title: "Our Services"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We provide all kinds of equipments you need, including AC/DC capacitor, lithium battery, connector, solar energy and a series of mature equipments."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Having more than 10 years researching and developing experience, our technology keeps more mature and excellent. We sell not only extraordinary well in the domestic market but also great in the global market, ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "like European, Japan, Mainland, India, Malaysia, Sri Lanka etc.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ServicesList__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "products",
    title: "Products"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ProductList__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: _constants_products__WEBPACK_IMPORTED_MODULE_8__["productsOnHome"],
    showMore: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Motto__WEBPACK_IMPORTED_MODULE_7__["default"], null, "We offer you all kinds of equipments"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "partners",
    title: "Strong Partners"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PartnersInfoWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", null, _constants__WEBPACK_IMPORTED_MODULE_11__["partners"].slice(0, 5).map(function (text) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: text
    }, text);
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", null, _constants__WEBPACK_IMPORTED_MODULE_11__["partners"].slice(5).map(function (text) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: text
    }, text);
  })))));
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
//# sourceMappingURL=index.js.04290640355e4802e86c.hot-update.js.map