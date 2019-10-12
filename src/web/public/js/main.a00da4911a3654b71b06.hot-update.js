webpackHotUpdate("main",{

/***/ "./src/web/private/js/containers/Programmation/index.jsx":
/*!***************************************************************!*\
  !*** ./src/web/private/js/containers/Programmation/index.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_MyCalendar_index_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/MyCalendar/index.jsx */ \"./src/web/private/js/components/MyCalendar/index.jsx\");\n/* harmony import */ var _components_SideBar_index_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/SideBar/index.jsx */ \"./src/web/private/js/components/SideBar/index.jsx\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/web/private/js/containers/Programmation/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_4__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\nvar Programmation =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Programmation, _Component);\n\n  function Programmation() {\n    var _this;\n\n    _classCallCheck(this, Programmation);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Programmation).call(this));\n    _this.calendarRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef(); // this.verifySchedule = this.verifySchedule.bind(this);\n    // this.Calendar = {}\n\n    return _this;\n  }\n\n  _createClass(Programmation, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {// this.verifySchedule();\n      // console.log('calendarRef ',  this.calendarRef.current.getInstance());\n      // this.Calendar = this.calendarRef.current.getInstance();\n      // this.Calendar.setOptions({month: {visibleWeeksCount: 6}}, true); // or null\n      // this.Calendar.changeView('month', true);\n      // this.calendarRef.current.getInstance();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var today = new Date();\n      console.log('AgendaView Render');\n      var calendar = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Voc\\xEA n\\xE3o possui permiss\\xE3o nessa agenda\");\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: 'programation-container'\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SideBar_index_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MyCalendar_index_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)));\n    }\n  }]);\n\n  return Programmation;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Programmation);\n\n//# sourceURL=webpack:///./src/web/private/js/containers/Programmation/index.jsx?");

/***/ })

})