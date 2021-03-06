// [DozCombo]  Build version: 1.0.0  
 (function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("doz"));
	else if(typeof define === 'function' && define.amd)
		define("DozCombo", ["doz"], factory);
	else if(typeof exports === 'object')
		exports["DozCombo"] = factory(require("doz"));
	else
		root["DozCombo"] = factory(root["Doz"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _doz = __webpack_require__(0);

var _src = __webpack_require__(2);

var _src2 = _interopRequireDefault(_src);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// expose component to global scope
function register() {
    if (typeof window !== 'undefined') {
        (0, _doz.define)('doz-combo', _src2.default);
    }
}

register();

exports.default = _src2.default;


if (false) {}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n            <style> \n                .list {\n                    list-style-type: none;\n                    text-align: left;\n                    margin: 0;\n                    padding: 0;\n                    position: relative;\n                    display: ', ';\n                    z-index: 1;\n                }\n                .list > li{\n                    box-sizing: border-box;\n                    padding: 10px;\n                    background: #eee;\n                    color: black;\n                    margin-bottom: 1px;\n                    display: block;\n                }\n                .list > li:hover{\n                    background-color: darkgrey;\n                }\n                .input-text{\n                    width: 200px;\n                    padding: 5px;\n                }\n            </style>\n            <input \n                type="text" \n                oninput="this.onInput()"\n                onfocus="this.onFocus()"\n                onkeypress="this.onInputKeyPress()"\n                onkeydown="this.onInputKeyDown()"\n                d-ref="input"\n                size="1"\n                d-bind="value"\n                class="', '"\n                placeholder="', '"\n            >\n            <ul class="list">\n                ', '\n            </ul>\n        '], ['\n            <style> \n                .list {\n                    list-style-type: none;\n                    text-align: left;\n                    margin: 0;\n                    padding: 0;\n                    position: relative;\n                    display: ', ';\n                    z-index: 1;\n                }\n                .list > li{\n                    box-sizing: border-box;\n                    padding: 10px;\n                    background: #eee;\n                    color: black;\n                    margin-bottom: 1px;\n                    display: block;\n                }\n                .list > li:hover{\n                    background-color: darkgrey;\n                }\n                .input-text{\n                    width: 200px;\n                    padding: 5px;\n                }\n            </style>\n            <input \n                type="text" \n                oninput="this.onInput()"\n                onfocus="this.onFocus()"\n                onkeypress="this.onInputKeyPress()"\n                onkeydown="this.onInputKeyDown()"\n                d-ref="input"\n                size="1"\n                d-bind="value"\n                class="', '"\n                placeholder="', '"\n            >\n            <ul class="list">\n                ', '\n            </ul>\n        ']),
    _templateObject2 = _taggedTemplateLiteral(['<li forceupdate onclick="', '">', '</li>'], ['<li forceupdate onclick="', '">', '</li>']),
    _templateObject3 = _taggedTemplateLiteral(['<li style="display: none"></li>'], ['<li style="display: none"></li>']);

var _doz = __webpack_require__(0);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Component) {
    _inherits(_class, _Component);

    function _class(o) {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, o));

        _this.props = {
            items: [],
            search: '',
            value: '',
            listDisplay: 'block',
            placeholder: '',
            inputClassCss: 'input-text',
            isFocus: false
            //selected: false
        };
        return _this;
    }

    _createClass(_class, [{
        key: 'template',
        value: function template(h) {
            var _this2 = this;

            return h(_templateObject, this.props.listDisplay, this.props.inputClassCss, this.props.placeholder, this.each(this.props.items, function (item) {
                return (_this2.props.search || _this2.props.isFocus) && item && item.value.indexOf(_this2.props.search) !== -1 ? _this2.h(_templateObject2, function (e) {
                    return _this2.onClick(item, e);
                }, item.value) : _this2.h(_templateObject3);
            }));
        }
    }, {
        key: 'onMount',
        value: function onMount() {
            var _this3 = this;

            document.body.addEventListener('click', function (e) {
                if (e.target !== _this3.ref.input) {
                    _this3.props.listDisplay = 'none';
                }
            });
        }
    }, {
        key: 'onInput',
        value: function onInput(e) {
            this.props.listDisplay = 'block';
            this.props.search = e.target.value;
        }
    }, {
        key: 'onFocus',
        value: function onFocus() {
            this.props.isFocus = true;
            this.props.listDisplay = 'block';
        }
    }, {
        key: 'onClick',
        value: function onClick(item, e) {
            this.props.value = e.target.outerText;
            this.props.listDisplay = 'none';
            this.emit('select', item);
        }
    }, {
        key: 'onInputKeyPress',
        value: function onInputKeyPress(e) {
            if (e.keyCode === 13) {
                //press invio
                this.props.onFocus = false;
                this.props.listDisplay = 'none';
            }
        }
    }, {
        key: 'onInputKeyDown',
        value: function onInputKeyDown(e) {
            if (e.keyCode === 8 && e.target.value.length === 0) {
                //this.props.selected.pop();
            }
        }
    }]);

    return _class;
}(_doz.Component);

exports.default = _class;
;

/***/ })
/******/ ]);
}); 