webpackHotUpdate("main",{

/***/ "./src/web/private/js/components/Carousel/index.jsx":
/*!**********************************************************!*\
  !*** ./src/web/private/js/components/Carousel/index.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Carousel */ \"./node_modules/react-bootstrap/Carousel.js\");\n/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar Carosel =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Carosel, _Component);\n\n  function Carosel() {\n    var _this;\n\n    _classCallCheck(this, Carosel);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Carosel).call(this));\n    _this.state = {\n      index: 0,\n      direction: null\n    };\n    _this.handleSelect = _this.handleSelect.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(Carosel, [{\n    key: \"handleSelect\",\n    value: function handleSelect(selectedIndex, e) {\n      this.setState({\n        index: selectedIndex\n      });\n      this.setState({\n        direction: e.direction\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        activeIndex: 0,\n        direction: this.state.direction,\n        onSelect: this.handleSelect\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1___default.a.Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        className: \"d-block w-100\",\n        src: \"https://http2.mlstatic.com/console-xbox-one-500gb-preto-controle-original-vitrine-D_NQ_NP_659814-MLB31831333362_082019-O.webp\",\n        alt: \"First slide\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1___default.a.Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        className: \"d-block w-100\",\n        src: \"holder.js/800x400?text=Second slide&bg=282c34\",\n        alt: \"Second slide\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1___default.a.Caption, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Second slide label\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1___default.a.Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        className: \"d-block w-100\",\n        src: \"holder.js/800x400?text=Third slide&bg=20232a\",\n        alt: \"Third slide\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1___default.a.Caption, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Third slide label\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Praesent commodo cursus magna, vel scelerisque nisl consectetur.\")))));\n    }\n  }]);\n\n  return Carosel;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carosel);\n\n//# sourceURL=webpack:///./src/web/private/js/components/Carousel/index.jsx?");

/***/ })

})