webpackHotUpdate("main",{

/***/ "./src/web/private/js/components/UserMenu/index.jsx":
/*!**********************************************************!*\
  !*** ./src/web/private/js/components/UserMenu/index.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n // import {\n//     saveMyId,\n//     setLogged,\n// } from '../actions/appActions.js';\n// import {\n//     saveUser\n// } from  '../actions/usersActions.js';\n\nvar UserMenu =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(UserMenu, _Component);\n\n  function UserMenu() {\n    var _this;\n\n    _classCallCheck(this, UserMenu);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(UserMenu).call(this));\n    _this.logout = _this.logout.bind(_assertThisInitialized(_this));\n    _this.saveMyUser = _this.saveMyUser.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(UserMenu, [{\n    key: \"saveMyUser\",\n    value: function saveMyUser() {// let response;\n      // $.ajax({\n      //     url: '/user/getUser',\n      //     dataType: 'json',\n      //     type: 'post',\n      //     contentType: 'application/json',\n      //     success: (ans) => { response = ans; },\n      //     error: (err) => { response = {error : err.responseJSON.error} },\n      //     complete: () => {\n      //         // this.props._saveMyId(response.data)\n      //         console.log('data save!',response.data)\n      //         this.props._saveUser(response.data)\n      //     }\n      // });\n    }\n  }, {\n    key: \"logout\",\n    value: function logout() {\n      var _this2 = this;\n\n      var serverAns;\n      $.ajax({\n        url: '/user/logout',\n        dataType: 'json',\n        type: 'POST',\n        success: function success(ans) {\n          serverAns = ans;\n        },\n        error: function error(err) {\n          serverAns = {\n            err: err.responseJSON\n          };\n        },\n        complete: function complete() {\n          if (serverAns.err == undefined) {\n            _this2.props._setLogged(false); // this.props._saveUser(null);\n\n          }\n        }\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      // console.log('render user menu', this.props.users)\n      // {this.props.users['5c70b2fc03ee561eb476035e'].img}\n      var name = '';\n      var img = ''; // if(this.props.users[this.props.myUser]){\n\n      name = this.props.users[this.props.myUser]['name'];\n      img = this.props.users[this.props.myUser]['img']; // }else{\n      //     name = 'nao sei';\n      //     img = '/images/crying.gif';\n      // }\n\n      /* <h1>NOME AQUI: {this.props.myUser} </h1>\n      <h1>IMG AQUI: {name} </h1> */\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: 'userMenu',\n        onClick: function onClick() {\n          return _this3.logout();\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Logado como \", name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: 'circle'\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        className: 'userImg',\n        src: img\n      }))));\n    }\n  }]);\n\n  return UserMenu;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]); // const mapStateToProps = store => ({\n//     myUser: store.appReduce.myUser,\n//     users: store.usersReduce.users,\n//     // isLogged: store.appReduce.isLogged,\n//   });\n// const mapDispatchToProps = dispatch => ({\n//     // _saveUser: (values) => dispatch(saveUser(values)),\n//     // _saveMyId: (values) => dispatch(saveMyId(values)),\n//    // _isLogged: () => dispatch(isLogged),\n//    _setLogged: (value) => dispatch(setLogged(value)),\n// });\n// export default connect(mapStateToProps,mapDispatchToProps)(UserMenu)\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserMenu);\n\n//# sourceURL=webpack:///./src/web/private/js/components/UserMenu/index.jsx?");

/***/ })

})