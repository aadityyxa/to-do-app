/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body,html{
    height:100%; 
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --primary-brown: #403728; 
    --sidebar-white:#ddd; 
    --content-white:#eee; 
    --red: #ff9c9c;
    --lightgreen: #9fff9c;
    --darker-background: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)); 
}

*{
    padding:0; 
    margin:0; 
    box-sizing: border-box;
}

.wrapper{
    height:100%;
    display:flex; 
    flex-direction: column;
}

.middle-section{
    flex-grow:1;
    display:grid;
    grid-template-columns: 1fr 4fr;
}

.header{
    font-size:1.5rem;
    padding:1.5rem;
    background: var(--primary-brown); 
    color:white;
    grid-column:1/3;
}

ul{
    list-style-type:none;
}


.sidebar{
    background:var(--sidebar-white); 
    grid-column:1/2; 
    padding:2rem;
}

.sidebar li{
    padding:0.8rem;
    font-size:1.2rem;
    display:flex; 
    align-items: center;
    gap:.5rem;  
    filter: brightness(100%);
    cursor:pointer;
    border-radius:8px;
}

li:hover {
    /* background:linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2));  */
    background:var(--darker-background); 
}

li:active{
    font-weight:700; 
}

h2{
    padding:0.8rem;
}

.content{
    padding:24px; 
    background:var(--content-white); 
}

svg{
    height:1.5rem;
    width:1.5rem;
}

.footer{
    background:var(--primary-brown); 
    padding:1rem;
    text-align:center;
    color:white;
}

.addition-form{
    /* background:white; */
    display:grid; 
    grid-template-columns: 1fr;  
    width:300px; 
    gap:8px;
}

.sidebar .addition-form{
    width:100%; 
}

.addition-form *{
    width:100%; 
    padding:4px;
    border-radius:4px;
}

.add-button{
    background:var(--lightgreen);
    cursor:pointer; 
    border:none; 
    color:white; 
}

.buttons{
    display:flex;
    gap:20px;
}

.cancel-button{
    background:var(--red); 
    cursor:pointer; 
    border:none; 
    color:white;
}

.add-projects{
    font-size:1.2rem;
    border-radius:8px;
    padding:8px;
    margin-bottom:20px;
    display:flex; 
    gap:0.5rem;
    cursor:pointer; 
}

.add-projects:hover{
    background:var(--darker-background); 
}
.project-card{
    padding:16px;
}

.project-card:hover {
    background:linear-gradient(rgba(0,0,0,0.5)); 
}

.add-tasks{
    display: flex;
    font-size:1.2rem;
    align-items: center;
    gap:0.5rem;
    padding:12px; 
    border-radius:8px; 
    cursor:pointer; 
}

.add-tasks:hover{
    background:var(--darker-background); 
}
.content-top{
    display:flex; 
    justify-content: space-between;
    margin-bottom:24px;
    width:100%; 
}

.task-display{
    display:flex; 
    padding:16px;
    width:100%; 
    font-size:1.2rem;
    justify-content: space-between;
    cursor:pointer;
    border-radius:4px;
}

.task-display:hover{
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
}

.task-display-right-side{
    display:flex; 
    align-items:center;
    gap:20px;
}

.task-title{
    font-weight:700; 
    /* font-size:1.1.rem;  */
}

.task-display-right-side > input {
    /* -webkit-appearance: none; */
    height:1.2rem;
    width:1.2rem;
    border-radius:50%; 
}

.task-display-right-side>input:active {
    background:darkgrey;
}

.priority{
    height:1.2rem;
    width:1.2rem;
    border-radius:50%; 
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,kJAAkJ;IAClJ,wBAAwB;IACxB,oBAAoB;IACpB,oBAAoB;IACpB,cAAc;IACd,qBAAqB;IACrB,sEAAsE;AAC1E;;AAEA;IACI,SAAS;IACT,QAAQ;IACR,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,8BAA8B;AAClC;;AAEA;IACI,gBAAgB;IAChB,cAAc;IACd,gCAAgC;IAChC,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,oBAAoB;AACxB;;;AAGA;IACI,+BAA+B;IAC/B,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,YAAY;IACZ,mBAAmB;IACnB,SAAS;IACT,wBAAwB;IACxB,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,mEAAmE;IACnE,mCAAmC;AACvC;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,+BAA+B;IAC/B,YAAY;IACZ,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,0BAA0B;IAC1B,WAAW;IACX,OAAO;AACX;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,UAAU;IACV,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,4BAA4B;IAC5B,cAAc;IACd,WAAW;IACX,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,QAAQ;AACZ;;AAEA;IACI,qBAAqB;IACrB,cAAc;IACd,WAAW;IACX,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,WAAW;IACX,kBAAkB;IAClB,YAAY;IACZ,UAAU;IACV,cAAc;AAClB;;AAEA;IACI,mCAAmC;AACvC;AACA;IACI,YAAY;AAChB;;AAEA;IACI,2CAA2C;AAC/C;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,mBAAmB;IACnB,UAAU;IACV,YAAY;IACZ,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,mCAAmC;AACvC;AACA;IACI,YAAY;IACZ,8BAA8B;IAC9B,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,UAAU;IACV,gBAAgB;IAChB,8BAA8B;IAC9B,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,mEAAmE;AACvE;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,QAAQ;AACZ;;AAEA;IACI,eAAe;IACf,wBAAwB;AAC5B;;AAEA;IACI,8BAA8B;IAC9B,aAAa;IACb,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,iBAAiB;AACrB","sourcesContent":["body,html{\r\n    height:100%; \r\n    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    --primary-brown: #403728; \r\n    --sidebar-white:#ddd; \r\n    --content-white:#eee; \r\n    --red: #ff9c9c;\r\n    --lightgreen: #9fff9c;\r\n    --darker-background: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)); \r\n}\r\n\r\n*{\r\n    padding:0; \r\n    margin:0; \r\n    box-sizing: border-box;\r\n}\r\n\r\n.wrapper{\r\n    height:100%;\r\n    display:flex; \r\n    flex-direction: column;\r\n}\r\n\r\n.middle-section{\r\n    flex-grow:1;\r\n    display:grid;\r\n    grid-template-columns: 1fr 4fr;\r\n}\r\n\r\n.header{\r\n    font-size:1.5rem;\r\n    padding:1.5rem;\r\n    background: var(--primary-brown); \r\n    color:white;\r\n    grid-column:1/3;\r\n}\r\n\r\nul{\r\n    list-style-type:none;\r\n}\r\n\r\n\r\n.sidebar{\r\n    background:var(--sidebar-white); \r\n    grid-column:1/2; \r\n    padding:2rem;\r\n}\r\n\r\n.sidebar li{\r\n    padding:0.8rem;\r\n    font-size:1.2rem;\r\n    display:flex; \r\n    align-items: center;\r\n    gap:.5rem;  \r\n    filter: brightness(100%);\r\n    cursor:pointer;\r\n    border-radius:8px;\r\n}\r\n\r\nli:hover {\r\n    /* background:linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2));  */\r\n    background:var(--darker-background); \r\n}\r\n\r\nli:active{\r\n    font-weight:700; \r\n}\r\n\r\nh2{\r\n    padding:0.8rem;\r\n}\r\n\r\n.content{\r\n    padding:24px; \r\n    background:var(--content-white); \r\n}\r\n\r\nsvg{\r\n    height:1.5rem;\r\n    width:1.5rem;\r\n}\r\n\r\n.footer{\r\n    background:var(--primary-brown); \r\n    padding:1rem;\r\n    text-align:center;\r\n    color:white;\r\n}\r\n\r\n.addition-form{\r\n    /* background:white; */\r\n    display:grid; \r\n    grid-template-columns: 1fr;  \r\n    width:300px; \r\n    gap:8px;\r\n}\r\n\r\n.sidebar .addition-form{\r\n    width:100%; \r\n}\r\n\r\n.addition-form *{\r\n    width:100%; \r\n    padding:4px;\r\n    border-radius:4px;\r\n}\r\n\r\n.add-button{\r\n    background:var(--lightgreen);\r\n    cursor:pointer; \r\n    border:none; \r\n    color:white; \r\n}\r\n\r\n.buttons{\r\n    display:flex;\r\n    gap:20px;\r\n}\r\n\r\n.cancel-button{\r\n    background:var(--red); \r\n    cursor:pointer; \r\n    border:none; \r\n    color:white;\r\n}\r\n\r\n.add-projects{\r\n    font-size:1.2rem;\r\n    border-radius:8px;\r\n    padding:8px;\r\n    margin-bottom:20px;\r\n    display:flex; \r\n    gap:0.5rem;\r\n    cursor:pointer; \r\n}\r\n\r\n.add-projects:hover{\r\n    background:var(--darker-background); \r\n}\r\n.project-card{\r\n    padding:16px;\r\n}\r\n\r\n.project-card:hover {\r\n    background:linear-gradient(rgba(0,0,0,0.5)); \r\n}\r\n\r\n.add-tasks{\r\n    display: flex;\r\n    font-size:1.2rem;\r\n    align-items: center;\r\n    gap:0.5rem;\r\n    padding:12px; \r\n    border-radius:8px; \r\n    cursor:pointer; \r\n}\r\n\r\n.add-tasks:hover{\r\n    background:var(--darker-background); \r\n}\r\n.content-top{\r\n    display:flex; \r\n    justify-content: space-between;\r\n    margin-bottom:24px;\r\n    width:100%; \r\n}\r\n\r\n.task-display{\r\n    display:flex; \r\n    padding:16px;\r\n    width:100%; \r\n    font-size:1.2rem;\r\n    justify-content: space-between;\r\n    cursor:pointer;\r\n    border-radius:4px;\r\n}\r\n\r\n.task-display:hover{\r\n    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));\r\n}\r\n\r\n.task-display-right-side{\r\n    display:flex; \r\n    align-items:center;\r\n    gap:20px;\r\n}\r\n\r\n.task-title{\r\n    font-weight:700; \r\n    /* font-size:1.1.rem;  */\r\n}\r\n\r\n.task-display-right-side > input {\r\n    /* -webkit-appearance: none; */\r\n    height:1.2rem;\r\n    width:1.2rem;\r\n    border-radius:50%; \r\n}\r\n\r\n.task-display-right-side>input:active {\r\n    background:darkgrey;\r\n}\r\n\r\n.priority{\r\n    height:1.2rem;\r\n    width:1.2rem;\r\n    border-radius:50%; \r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components.js":
/*!***************************!*\
  !*** ./src/components.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProjectForm: () => (/* binding */ addProjectForm),
/* harmony export */   addTaskForm: () => (/* binding */ addTaskForm),
/* harmony export */   contentHeading: () => (/* binding */ contentHeading),
/* harmony export */   pageLoader: () => (/* binding */ pageLoader),
/* harmony export */   removeTaskFromDOM: () => (/* binding */ removeTaskFromDOM),
/* harmony export */   renderArray: () => (/* binding */ renderArray)
/* harmony export */ });
localStorage.getItem('projects'); 
localStorage.getItem('inbox'); 
const contentHeading = document.querySelector('.content-heading');
let addTasks = document.querySelector('.add-tasks');
const localProjects = JSON.parse(localStorage.getItem('projects'));
console.log('projects', localProjects); 
const projects = [...localProjects]; 
const localInbox = JSON.parse(localStorage.getItem('inbox')); 
console.log('inbox', localInbox); 
const inboxTaskArray = [...localInbox];
const inboxPage = document.querySelector('#inbox'); 
const projectList = document.querySelector('.projects-list'); 

const task = (title,dueDate) => {
    let status = 'incomplete'; 
    return {title,dueDate, status}  
}

class Page{
    constructor(name, array ) {
        this.name = name; 
        this.array = array; 
    }
}

function emptyElement(item) {
    const element = document.querySelector(`.${item.className}`); 
    while(element.firstElementChild) {
        element.removeChild(element.firstElementChild); 
    }
}

function addProjectForm() {
    const projectList = document.querySelector('.projects-list');
    const parent = document.querySelector('.add-projects-container'); 
    const addProjects = document.querySelector('.add-projects');
    addProjects.style.display = "none"; 
    const projectForm = document.createElement('form'); 
    projectForm.classList.add('addition-form'); 
    projectForm.style.display = 'grid'; 
    const projectName = document.createElement('input');
    projectName.setAttribute('type', 'text'); 
    const buttons = document.createElement('div'); 
    buttons.classList.add('buttons'); 
    const submitProjectButton = document.createElement('button'); 
    submitProjectButton.setAttribute('type', 'button'); 
    submitProjectButton.classList.add('add-button'); 
    submitProjectButton.textContent = 'Add Project'; 
    const cancelProjectButton = document.createElement('button'); 
    cancelProjectButton.setAttribute('type', 'button'); 
    cancelProjectButton.classList.add('cancel-button'); 
    cancelProjectButton.textContent = 'Cancel'; 
    buttons.appendChild(submitProjectButton); 
    buttons.appendChild(cancelProjectButton); 
    projectForm.appendChild(projectName); 
    projectForm.appendChild(buttons); 
    parent.appendChild(projectForm); 

    submitProjectButton.addEventListener('click', function(e) {
        e.preventDefault(); 
        emptyElement(projectList); 
        const newProject = new Page(projectName.value, []); 
        projects.push(newProject);
        localStorage.removeItem('projects'); 
        localStorage.setItem('projects', JSON.stringify(projects)); 
        // console.log(projects); 
        projectForm.style.display = 'none'; 
        addProjects.style.display = "flex"; 
        renderProjectList(); 
    })

    cancelProjectButton.addEventListener('click', function() {
        projectForm.style.display = 'none'; 
        addProjects.style.display = 'flex'; 
    })
    
}

function renderProjectList() {
    
    // console.log(JSON.parse(localStorage.getItem('projects'))); 
    const projectList = document.querySelector('.projects-list'); 
    for(let project of projects) {
        const projectCard = document.createElement('li'); 
        projectCard.classList.add('project-card'); 
        projectCard.setAttribute('data-key', projects.indexOf(project)); 
        projectCard.textContent = `${project.name}`;
        projectList.appendChild(projectCard); 
        projectCard.addEventListener('click', function() {
            // console.log(projectCard.getAttribute('data-key')); 
            pageLoader(projectCard.getAttribute('data-key')); 
        })
        inboxPage.addEventListener('click', function() {
            pageLoader(); 
            
        })
    }
}

function pageLoader(index) {
    const contentGrid = document.querySelector('.content-grid'); 
    console.log(JSON.parse(localStorage.getItem('projects')))
    // const projects = JSON.parse(localStorage.getItem('projects')); 
    emptyElement(projectList); 
    renderProjectList();
    emptyElement(contentGrid);
    if(index) {
        // console.log(projects[index].array); 
        renderArray(projects[index].array); 
    }else {
        renderArray(inboxTaskArray); 
    }
    let addTasks = document.querySelector('.add-tasks'); 
    let newAddTasks = addTasks.cloneNode(true); 
    addTasks.replaceWith(newAddTasks);
    if(index) {
        contentHeading.textContent = projects[index].name; 
        newAddTasks.addEventListener('click', function() {
            // console.log('reached'); 
            // console.log(projects[index].array); 
            addTaskForm(projects[index].array); 
        })
        renderArray(projects[index].array); 
    }else if(!index) {
        contentHeading.textContent = "Inbox"; 
            newAddTasks.addEventListener('click', function() {
            addTaskForm(inboxTaskArray); 
        })
    }
}

function addTaskForm(array) {
    const parent = document.querySelector('.content-top'); 
    const addTasks = document.querySelector('.add-tasks'); 
    addTasks.style.display = "none";

    const taskForm = document.createElement('form');
    taskForm.style.display = "grid"; 
    taskForm.classList.add('addition-form'); 
    const inputTitle = document.createElement('input'); 
    inputTitle.setAttribute('type', 'text'); 
    const inputDate = document.createElement('input'); 
    inputDate.setAttribute('type', 'date');
    const addButton = document.createElement('button'); 
    addButton.classList.add('add-button'); 
    addButton.textContent = "Add"; 
    addButton.setAttribute('type', 'submit'); 
    const cancelButton = document.createElement('button');
    cancelButton.setAttribute('type', 'button'); 
    cancelButton.textContent = "Cancel"; 
    cancelButton.classList.add('cancel-button'); 
    const buttons = document.createElement('div'); 
    buttons.classList.add('buttons'); 
    buttons.appendChild(addButton); 
    buttons.appendChild(cancelButton); 
    parent.appendChild(taskForm); 
    taskForm.appendChild(inputTitle);
    taskForm.appendChild(inputDate); 
    taskForm.appendChild(buttons); 

    cancelButton.addEventListener('click', function() {
        taskForm.style.display = "none"; 
        addTasks.style.display = "flex"; 
    })

    addButton.addEventListener('click', function(e) {
        e.preventDefault(); 
        const newTask = task(inputTitle.value, inputDate.value); 
        
        taskForm.style.display = "none";             
        addTasks.style.display = "flex"; 
        // addTaskToLibrary(inboxTaskArray, newTask); 
        // removeTaskFromDOM(inboxTaskArray)
        if(array === inboxTaskArray) {
            // console.log('array is inboxtaskarray'); 
            addTaskToLibrary(inboxTaskArray, newTask); 
            localStorage.removeItem('inbox'); 
            localStorage.setItem('inbox', JSON.stringify(inboxTaskArray));

        }else {
            // console.log('array is project array'); 
            inboxTaskArray.push(newTask); 
            localStorage.removeItem('inbox'); 
            localStorage.setItem('inbox', JSON.stringify(inboxTaskArray));
            addTaskToLibrary(array, newTask); 
            removeTaskFromDOM(array); 
        }
    })
}

function addTaskToLibrary(array, task) {
    array.push(task); 
    localStorage.removeItem('projects'); 
    localStorage.setItem(`projects`, JSON.stringify(projects));
    renderArray(array); 
}

function removeTaskFromArray(array1, index) {
    array1.splice(index, 1); 
    localStorage.removeItem('projects'); 
    localStorage.removeItem('inbox'); 
    localStorage.setItem('projects', JSON.stringify(projects)); 
    localStorage.setItem('inbox', JSON.stringify(inboxTaskArray)); 

}

function removeTaskFromDOM(array) {
    const radios = document.querySelectorAll('.complete-task');
    // console.log(radios); 

    radios.forEach((radio) => radio.addEventListener('click', function() {
        const radios = document.querySelectorAll('.complete-task'); 
        renderArray(array); 
    }))
}

function renderArray(array) {

    const contentGrid = document.querySelector('.content-grid'); 
    emptyElement(contentGrid); 
    for(let item of array) {
        const taskDisplay = document.createElement('div'); 
        taskDisplay.classList.add("task-display"); 
        taskDisplay.setAttribute('data-key', `${array.indexOf(item)}`); 
        const taskTitle = document.createElement('span'); 
        taskTitle.textContent = item.title; 
        taskTitle.classList.add('task-title'); 
        const taskDisplayRightSide = document.createElement('div'); 
        taskDisplayRightSide.classList.add('task-display-right-side'); 
        const priority = document.createElement('div'); 
        const taskDueDate = document.createElement('span');
        taskDueDate.textContent = item.dueDate; 
        const statusRadio = document.createElement('input'); 
        statusRadio.setAttribute('type', 'radio'); 
        statusRadio.setAttribute('value', 'complete'); 
        statusRadio.setAttribute('class', 'complete-task'); 
        statusRadio.setAttribute('data-key', `${array.indexOf(item)}`);
        statusRadio.addEventListener('click', function() {
            removeTaskFromArray(array, array.indexOf(item)); 
            // contentGrid.removeChild(taskDisplay); 
            renderArray(array);           
        })   
        contentGrid.appendChild(taskDisplay); 
        taskDisplay.appendChild(taskTitle); 
        taskDisplayRightSide.appendChild(taskDueDate); 
        taskDisplayRightSide.appendChild(statusRadio); 
        taskDisplay.appendChild(taskDisplayRightSide); 

    }
} 

 


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./src/components.js");

  

_components__WEBPACK_IMPORTED_MODULE_1__.contentHeading.textContent = 'Inbox'; 

function component() {
    const addProjects = document.querySelector('.add-projects'); 

    (0,_components__WEBPACK_IMPORTED_MODULE_1__.pageLoader)(); 

    addProjects.addEventListener('click', function() {
        (0,_components__WEBPACK_IMPORTED_MODULE_1__.addProjectForm)(); 
        
    })
}

component(); 
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsT0FBTyxL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Q0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxlQUFlO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLGFBQWE7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxvQkFBb0I7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELG9CQUFvQjtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDaUc7Ozs7Ozs7VUMzUGpHO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQW9CO0FBQ29EO0FBQ3hFO0FBQ0EsdURBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQVU7QUFDZDtBQUNBO0FBQ0EsUUFBUSwyREFBYztBQUN0QjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsYSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHksaHRtbHtcclxuICAgIGhlaWdodDoxMDAlOyBcclxuICAgIGZvbnQtZmFtaWx5OnN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gICAgLS1wcmltYXJ5LWJyb3duOiAjNDAzNzI4OyBcclxuICAgIC0tc2lkZWJhci13aGl0ZTojZGRkOyBcclxuICAgIC0tY29udGVudC13aGl0ZTojZWVlOyBcclxuICAgIC0tcmVkOiAjZmY5YzljO1xyXG4gICAgLS1saWdodGdyZWVuOiAjOWZmZjljO1xyXG4gICAgLS1kYXJrZXItYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMC4xKSwgcmdiYSgwLDAsMCwwLjEpKTsgXHJcbn1cclxuXHJcbip7XHJcbiAgICBwYWRkaW5nOjA7IFxyXG4gICAgbWFyZ2luOjA7IFxyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLndyYXBwZXJ7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIGRpc3BsYXk6ZmxleDsgXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ubWlkZGxlLXNlY3Rpb257XHJcbiAgICBmbGV4LWdyb3c6MTtcclxuICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcclxufVxyXG5cclxuLmhlYWRlcntcclxuICAgIGZvbnQtc2l6ZToxLjVyZW07XHJcbiAgICBwYWRkaW5nOjEuNXJlbTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktYnJvd24pOyBcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgZ3JpZC1jb2x1bW46MS8zO1xyXG59XHJcblxyXG51bHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTpub25lO1xyXG59XHJcblxyXG5cclxuLnNpZGViYXJ7XHJcbiAgICBiYWNrZ3JvdW5kOnZhcigtLXNpZGViYXItd2hpdGUpOyBcclxuICAgIGdyaWQtY29sdW1uOjEvMjsgXHJcbiAgICBwYWRkaW5nOjJyZW07XHJcbn1cclxuXHJcbi5zaWRlYmFyIGxpe1xyXG4gICAgcGFkZGluZzowLjhyZW07XHJcbiAgICBmb250LXNpemU6MS4ycmVtO1xyXG4gICAgZGlzcGxheTpmbGV4OyBcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6LjVyZW07ICBcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMDAlKTtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czo4cHg7XHJcbn1cclxuXHJcbmxpOmhvdmVyIHtcclxuICAgIC8qIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMC4yKSwgcmdiYSgwLDAsMCwwLjIpKTsgICovXHJcbiAgICBiYWNrZ3JvdW5kOnZhcigtLWRhcmtlci1iYWNrZ3JvdW5kKTsgXHJcbn1cclxuXHJcbmxpOmFjdGl2ZXtcclxuICAgIGZvbnQtd2VpZ2h0OjcwMDsgXHJcbn1cclxuXHJcbmgye1xyXG4gICAgcGFkZGluZzowLjhyZW07XHJcbn1cclxuXHJcbi5jb250ZW50e1xyXG4gICAgcGFkZGluZzoyNHB4OyBcclxuICAgIGJhY2tncm91bmQ6dmFyKC0tY29udGVudC13aGl0ZSk7IFxyXG59XHJcblxyXG5zdmd7XHJcbiAgICBoZWlnaHQ6MS41cmVtO1xyXG4gICAgd2lkdGg6MS41cmVtO1xyXG59XHJcblxyXG4uZm9vdGVye1xyXG4gICAgYmFja2dyb3VuZDp2YXIoLS1wcmltYXJ5LWJyb3duKTsgXHJcbiAgICBwYWRkaW5nOjFyZW07XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG4uYWRkaXRpb24tZm9ybXtcclxuICAgIC8qIGJhY2tncm91bmQ6d2hpdGU7ICovXHJcbiAgICBkaXNwbGF5OmdyaWQ7IFxyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7ICBcclxuICAgIHdpZHRoOjMwMHB4OyBcclxuICAgIGdhcDo4cHg7XHJcbn1cclxuXHJcbi5zaWRlYmFyIC5hZGRpdGlvbi1mb3Jte1xyXG4gICAgd2lkdGg6MTAwJTsgXHJcbn1cclxuXHJcbi5hZGRpdGlvbi1mb3JtICp7XHJcbiAgICB3aWR0aDoxMDAlOyBcclxuICAgIHBhZGRpbmc6NHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czo0cHg7XHJcbn1cclxuXHJcbi5hZGQtYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZDp2YXIoLS1saWdodGdyZWVuKTtcclxuICAgIGN1cnNvcjpwb2ludGVyOyBcclxuICAgIGJvcmRlcjpub25lOyBcclxuICAgIGNvbG9yOndoaXRlOyBcclxufVxyXG5cclxuLmJ1dHRvbnN7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBnYXA6MjBweDtcclxufVxyXG5cclxuLmNhbmNlbC1idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kOnZhcigtLXJlZCk7IFxyXG4gICAgY3Vyc29yOnBvaW50ZXI7IFxyXG4gICAgYm9yZGVyOm5vbmU7IFxyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi5hZGQtcHJvamVjdHN7XHJcbiAgICBmb250LXNpemU6MS4ycmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czo4cHg7XHJcbiAgICBwYWRkaW5nOjhweDtcclxuICAgIG1hcmdpbi1ib3R0b206MjBweDtcclxuICAgIGRpc3BsYXk6ZmxleDsgXHJcbiAgICBnYXA6MC41cmVtO1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7IFxyXG59XHJcblxyXG4uYWRkLXByb2plY3RzOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDp2YXIoLS1kYXJrZXItYmFja2dyb3VuZCk7IFxyXG59XHJcbi5wcm9qZWN0LWNhcmR7XHJcbiAgICBwYWRkaW5nOjE2cHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWNhcmQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwwLjUpKTsgXHJcbn1cclxuXHJcbi5hZGQtdGFza3N7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1zaXplOjEuMnJlbTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6MC41cmVtO1xyXG4gICAgcGFkZGluZzoxMnB4OyBcclxuICAgIGJvcmRlci1yYWRpdXM6OHB4OyBcclxuICAgIGN1cnNvcjpwb2ludGVyOyBcclxufVxyXG5cclxuLmFkZC10YXNrczpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6dmFyKC0tZGFya2VyLWJhY2tncm91bmQpOyBcclxufVxyXG4uY29udGVudC10b3B7XHJcbiAgICBkaXNwbGF5OmZsZXg7IFxyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luLWJvdHRvbToyNHB4O1xyXG4gICAgd2lkdGg6MTAwJTsgXHJcbn1cclxuXHJcbi50YXNrLWRpc3BsYXl7XHJcbiAgICBkaXNwbGF5OmZsZXg7IFxyXG4gICAgcGFkZGluZzoxNnB4O1xyXG4gICAgd2lkdGg6MTAwJTsgXHJcbiAgICBmb250LXNpemU6MS4ycmVtO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOjRweDtcclxufVxyXG5cclxuLnRhc2stZGlzcGxheTpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuMSksIHJnYmEoMCwgMCwgMCwgMC4xKSk7XHJcbn1cclxuXHJcbi50YXNrLWRpc3BsYXktcmlnaHQtc2lkZXtcclxuICAgIGRpc3BsYXk6ZmxleDsgXHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICBnYXA6MjBweDtcclxufVxyXG5cclxuLnRhc2stdGl0bGV7XHJcbiAgICBmb250LXdlaWdodDo3MDA7IFxyXG4gICAgLyogZm9udC1zaXplOjEuMS5yZW07ICAqL1xyXG59XHJcblxyXG4udGFzay1kaXNwbGF5LXJpZ2h0LXNpZGUgPiBpbnB1dCB7XHJcbiAgICAvKiAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7ICovXHJcbiAgICBoZWlnaHQ6MS4ycmVtO1xyXG4gICAgd2lkdGg6MS4ycmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czo1MCU7IFxyXG59XHJcblxyXG4udGFzay1kaXNwbGF5LXJpZ2h0LXNpZGU+aW5wdXQ6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ZGFya2dyZXk7XHJcbn1cclxuXHJcbi5wcmlvcml0eXtcclxuICAgIGhlaWdodDoxLjJyZW07XHJcbiAgICB3aWR0aDoxLjJyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOjUwJTsgXHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxXQUFXO0lBQ1gsa0pBQWtKO0lBQ2xKLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsc0VBQXNFO0FBQzFFOztBQUVBO0lBQ0ksU0FBUztJQUNULFFBQVE7SUFDUixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxnQ0FBZ0M7SUFDaEMsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7OztBQUdBO0lBQ0ksK0JBQStCO0lBQy9CLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCx3QkFBd0I7SUFDeEIsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1FQUFtRTtJQUNuRSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLFdBQVc7SUFDWCxPQUFPO0FBQ1g7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixjQUFjO0lBQ2QsV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFVBQVU7SUFDVixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1DQUFtQztBQUN2QztBQUNBO0lBQ0ksWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtJQUM5QixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUVBQW1FO0FBQ3ZFOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGFBQWE7SUFDYixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSxodG1se1xcclxcbiAgICBoZWlnaHQ6MTAwJTsgXFxyXFxuICAgIGZvbnQtZmFtaWx5OnN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcclxcbiAgICAtLXByaW1hcnktYnJvd246ICM0MDM3Mjg7IFxcclxcbiAgICAtLXNpZGViYXItd2hpdGU6I2RkZDsgXFxyXFxuICAgIC0tY29udGVudC13aGl0ZTojZWVlOyBcXHJcXG4gICAgLS1yZWQ6ICNmZjljOWM7XFxyXFxuICAgIC0tbGlnaHRncmVlbjogIzlmZmY5YztcXHJcXG4gICAgLS1kYXJrZXItYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMC4xKSwgcmdiYSgwLDAsMCwwLjEpKTsgXFxyXFxufVxcclxcblxcclxcbip7XFxyXFxuICAgIHBhZGRpbmc6MDsgXFxyXFxuICAgIG1hcmdpbjowOyBcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLndyYXBwZXJ7XFxyXFxuICAgIGhlaWdodDoxMDAlO1xcclxcbiAgICBkaXNwbGF5OmZsZXg7IFxcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ubWlkZGxlLXNlY3Rpb257XFxyXFxuICAgIGZsZXgtZ3JvdzoxO1xcclxcbiAgICBkaXNwbGF5OmdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcntcXHJcXG4gICAgZm9udC1zaXplOjEuNXJlbTtcXHJcXG4gICAgcGFkZGluZzoxLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktYnJvd24pOyBcXHJcXG4gICAgY29sb3I6d2hpdGU7XFxyXFxuICAgIGdyaWQtY29sdW1uOjEvMztcXHJcXG59XFxyXFxuXFxyXFxudWx7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTpub25lO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uc2lkZWJhcntcXHJcXG4gICAgYmFja2dyb3VuZDp2YXIoLS1zaWRlYmFyLXdoaXRlKTsgXFxyXFxuICAgIGdyaWQtY29sdW1uOjEvMjsgXFxyXFxuICAgIHBhZGRpbmc6MnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIgbGl7XFxyXFxuICAgIHBhZGRpbmc6MC44cmVtO1xcclxcbiAgICBmb250LXNpemU6MS4ycmVtO1xcclxcbiAgICBkaXNwbGF5OmZsZXg7IFxcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6LjVyZW07ICBcXHJcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEwMCUpO1xcclxcbiAgICBjdXJzb3I6cG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czo4cHg7XFxyXFxufVxcclxcblxcclxcbmxpOmhvdmVyIHtcXHJcXG4gICAgLyogYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwwLjIpLCByZ2JhKDAsMCwwLDAuMikpOyAgKi9cXHJcXG4gICAgYmFja2dyb3VuZDp2YXIoLS1kYXJrZXItYmFja2dyb3VuZCk7IFxcclxcbn1cXHJcXG5cXHJcXG5saTphY3RpdmV7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OjcwMDsgXFxyXFxufVxcclxcblxcclxcbmgye1xcclxcbiAgICBwYWRkaW5nOjAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnR7XFxyXFxuICAgIHBhZGRpbmc6MjRweDsgXFxyXFxuICAgIGJhY2tncm91bmQ6dmFyKC0tY29udGVudC13aGl0ZSk7IFxcclxcbn1cXHJcXG5cXHJcXG5zdmd7XFxyXFxuICAgIGhlaWdodDoxLjVyZW07XFxyXFxuICAgIHdpZHRoOjEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlcntcXHJcXG4gICAgYmFja2dyb3VuZDp2YXIoLS1wcmltYXJ5LWJyb3duKTsgXFxyXFxuICAgIHBhZGRpbmc6MXJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxyXFxuICAgIGNvbG9yOndoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkaXRpb24tZm9ybXtcXHJcXG4gICAgLyogYmFja2dyb3VuZDp3aGl0ZTsgKi9cXHJcXG4gICAgZGlzcGxheTpncmlkOyBcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7ICBcXHJcXG4gICAgd2lkdGg6MzAwcHg7IFxcclxcbiAgICBnYXA6OHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciAuYWRkaXRpb24tZm9ybXtcXHJcXG4gICAgd2lkdGg6MTAwJTsgXFxyXFxufVxcclxcblxcclxcbi5hZGRpdGlvbi1mb3JtICp7XFxyXFxuICAgIHdpZHRoOjEwMCU7IFxcclxcbiAgICBwYWRkaW5nOjRweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czo0cHg7XFxyXFxufVxcclxcblxcclxcbi5hZGQtYnV0dG9ue1xcclxcbiAgICBiYWNrZ3JvdW5kOnZhcigtLWxpZ2h0Z3JlZW4pO1xcclxcbiAgICBjdXJzb3I6cG9pbnRlcjsgXFxyXFxuICAgIGJvcmRlcjpub25lOyBcXHJcXG4gICAgY29sb3I6d2hpdGU7IFxcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uc3tcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBnYXA6MjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbmNlbC1idXR0b257XFxyXFxuICAgIGJhY2tncm91bmQ6dmFyKC0tcmVkKTsgXFxyXFxuICAgIGN1cnNvcjpwb2ludGVyOyBcXHJcXG4gICAgYm9yZGVyOm5vbmU7IFxcclxcbiAgICBjb2xvcjp3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1wcm9qZWN0c3tcXHJcXG4gICAgZm9udC1zaXplOjEuMnJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czo4cHg7XFxyXFxuICAgIHBhZGRpbmc6OHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOjIwcHg7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDsgXFxyXFxuICAgIGdhcDowLjVyZW07XFxyXFxuICAgIGN1cnNvcjpwb2ludGVyOyBcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1wcm9qZWN0czpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZDp2YXIoLS1kYXJrZXItYmFja2dyb3VuZCk7IFxcclxcbn1cXHJcXG4ucHJvamVjdC1jYXJke1xcclxcbiAgICBwYWRkaW5nOjE2cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWNhcmQ6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDAuNSkpOyBcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10YXNrc3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZm9udC1zaXplOjEuMnJlbTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOjAuNXJlbTtcXHJcXG4gICAgcGFkZGluZzoxMnB4OyBcXHJcXG4gICAgYm9yZGVyLXJhZGl1czo4cHg7IFxcclxcbiAgICBjdXJzb3I6cG9pbnRlcjsgXFxyXFxufVxcclxcblxcclxcbi5hZGQtdGFza3M6aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQ6dmFyKC0tZGFya2VyLWJhY2tncm91bmQpOyBcXHJcXG59XFxyXFxuLmNvbnRlbnQtdG9we1xcclxcbiAgICBkaXNwbGF5OmZsZXg7IFxcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIG1hcmdpbi1ib3R0b206MjRweDtcXHJcXG4gICAgd2lkdGg6MTAwJTsgXFxyXFxufVxcclxcblxcclxcbi50YXNrLWRpc3BsYXl7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDsgXFxyXFxuICAgIHBhZGRpbmc6MTZweDtcXHJcXG4gICAgd2lkdGg6MTAwJTsgXFxyXFxuICAgIGZvbnQtc2l6ZToxLjJyZW07XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6NHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1kaXNwbGF5OmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjEpLCByZ2JhKDAsIDAsIDAsIDAuMSkpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1kaXNwbGF5LXJpZ2h0LXNpZGV7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDsgXFxyXFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXHJcXG4gICAgZ2FwOjIwcHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLXRpdGxle1xcclxcbiAgICBmb250LXdlaWdodDo3MDA7IFxcclxcbiAgICAvKiBmb250LXNpemU6MS4xLnJlbTsgICovXFxyXFxufVxcclxcblxcclxcbi50YXNrLWRpc3BsYXktcmlnaHQtc2lkZSA+IGlucHV0IHtcXHJcXG4gICAgLyogLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyAqL1xcclxcbiAgICBoZWlnaHQ6MS4ycmVtO1xcclxcbiAgICB3aWR0aDoxLjJyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6NTAlOyBcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZGlzcGxheS1yaWdodC1zaWRlPmlucHV0OmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQ6ZGFya2dyZXk7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eXtcXHJcXG4gICAgaGVpZ2h0OjEuMnJlbTtcXHJcXG4gICAgd2lkdGg6MS4ycmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOjUwJTsgXFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKTsgXHJcbmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbmJveCcpOyBcclxuY29uc3QgY29udGVudEhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1oZWFkaW5nJyk7XHJcbmxldCBhZGRUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFza3MnKTtcclxuY29uc3QgbG9jYWxQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpO1xyXG5jb25zb2xlLmxvZygncHJvamVjdHMnLCBsb2NhbFByb2plY3RzKTsgXHJcbmNvbnN0IHByb2plY3RzID0gWy4uLmxvY2FsUHJvamVjdHNdOyBcclxuY29uc3QgbG9jYWxJbmJveCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2luYm94JykpOyBcclxuY29uc29sZS5sb2coJ2luYm94JywgbG9jYWxJbmJveCk7IFxyXG5jb25zdCBpbmJveFRhc2tBcnJheSA9IFsuLi5sb2NhbEluYm94XTtcclxuY29uc3QgaW5ib3hQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luYm94Jyk7IFxyXG5jb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1saXN0Jyk7IFxyXG5cclxuY29uc3QgdGFzayA9ICh0aXRsZSxkdWVEYXRlKSA9PiB7XHJcbiAgICBsZXQgc3RhdHVzID0gJ2luY29tcGxldGUnOyBcclxuICAgIHJldHVybiB7dGl0bGUsZHVlRGF0ZSwgc3RhdHVzfSAgXHJcbn1cclxuXHJcbmNsYXNzIFBhZ2V7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBhcnJheSApIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lOyBcclxuICAgICAgICB0aGlzLmFycmF5ID0gYXJyYXk7IFxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBlbXB0eUVsZW1lbnQoaXRlbSkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2l0ZW0uY2xhc3NOYW1lfWApOyBcclxuICAgIHdoaWxlKGVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQpIHtcclxuICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQpOyBcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUHJvamVjdEZvcm0oKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1saXN0Jyk7XHJcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3RzLWNvbnRhaW5lcicpOyBcclxuICAgIGNvbnN0IGFkZFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0cycpO1xyXG4gICAgYWRkUHJvamVjdHMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcclxuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpOyBcclxuICAgIHByb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoJ2FkZGl0aW9uLWZvcm0nKTsgXHJcbiAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnOyBcclxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHByb2plY3ROYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7IFxyXG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcclxuICAgIGJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnYnV0dG9ucycpOyBcclxuICAgIGNvbnN0IHN1Ym1pdFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsgXHJcbiAgICBzdWJtaXRQcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTsgXHJcbiAgICBzdWJtaXRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZC1idXR0b24nKTsgXHJcbiAgICBzdWJtaXRQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBQcm9qZWN0JzsgXHJcbiAgICBjb25zdCBjYW5jZWxQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7IFxyXG4gICAgY2FuY2VsUHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7IFxyXG4gICAgY2FuY2VsUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjYW5jZWwtYnV0dG9uJyk7IFxyXG4gICAgY2FuY2VsUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnOyBcclxuICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoc3VibWl0UHJvamVjdEJ1dHRvbik7IFxyXG4gICAgYnV0dG9ucy5hcHBlbmRDaGlsZChjYW5jZWxQcm9qZWN0QnV0dG9uKTsgXHJcbiAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7IFxyXG4gICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9ucyk7IFxyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHByb2plY3RGb3JtKTsgXHJcblxyXG4gICAgc3VibWl0UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IFxyXG4gICAgICAgIGVtcHR5RWxlbWVudChwcm9qZWN0TGlzdCk7IFxyXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUGFnZShwcm9qZWN0TmFtZS52YWx1ZSwgW10pOyBcclxuICAgICAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwcm9qZWN0cycpOyBcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpOyBcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0cyk7IFxyXG4gICAgICAgIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IFxyXG4gICAgICAgIGFkZFByb2plY3RzLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjsgXHJcbiAgICAgICAgcmVuZGVyUHJvamVjdExpc3QoKTsgXHJcbiAgICB9KVxyXG5cclxuICAgIGNhbmNlbFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyBcclxuICAgICAgICBhZGRQcm9qZWN0cy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnOyBcclxuICAgIH0pXHJcbiAgICBcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdExpc3QoKSB7XHJcbiAgICBcclxuICAgIC8vIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpKTsgXHJcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1saXN0Jyk7IFxyXG4gICAgZm9yKGxldCBwcm9qZWN0IG9mIHByb2plY3RzKSB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpOyBcclxuICAgICAgICBwcm9qZWN0Q2FyZC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNhcmQnKTsgXHJcbiAgICAgICAgcHJvamVjdENhcmQuc2V0QXR0cmlidXRlKCdkYXRhLWtleScsIHByb2plY3RzLmluZGV4T2YocHJvamVjdCkpOyBcclxuICAgICAgICBwcm9qZWN0Q2FyZC50ZXh0Q29udGVudCA9IGAke3Byb2plY3QubmFtZX1gO1xyXG4gICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3RDYXJkKTsgXHJcbiAgICAgICAgcHJvamVjdENhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdENhcmQuZ2V0QXR0cmlidXRlKCdkYXRhLWtleScpKTsgXHJcbiAgICAgICAgICAgIHBhZ2VMb2FkZXIocHJvamVjdENhcmQuZ2V0QXR0cmlidXRlKCdkYXRhLWtleScpKTsgXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpbmJveFBhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcGFnZUxvYWRlcigpOyBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcGFnZUxvYWRlcihpbmRleCkge1xyXG4gICAgY29uc3QgY29udGVudEdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1ncmlkJyk7IFxyXG4gICAgY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkpXHJcbiAgICAvLyBjb25zdCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpOyBcclxuICAgIGVtcHR5RWxlbWVudChwcm9qZWN0TGlzdCk7IFxyXG4gICAgcmVuZGVyUHJvamVjdExpc3QoKTtcclxuICAgIGVtcHR5RWxlbWVudChjb250ZW50R3JpZCk7XHJcbiAgICBpZihpbmRleCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RzW2luZGV4XS5hcnJheSk7IFxyXG4gICAgICAgIHJlbmRlckFycmF5KHByb2plY3RzW2luZGV4XS5hcnJheSk7IFxyXG4gICAgfWVsc2Uge1xyXG4gICAgICAgIHJlbmRlckFycmF5KGluYm94VGFza0FycmF5KTsgXHJcbiAgICB9XHJcbiAgICBsZXQgYWRkVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2tzJyk7IFxyXG4gICAgbGV0IG5ld0FkZFRhc2tzID0gYWRkVGFza3MuY2xvbmVOb2RlKHRydWUpOyBcclxuICAgIGFkZFRhc2tzLnJlcGxhY2VXaXRoKG5ld0FkZFRhc2tzKTtcclxuICAgIGlmKGluZGV4KSB7XHJcbiAgICAgICAgY29udGVudEhlYWRpbmcudGV4dENvbnRlbnQgPSBwcm9qZWN0c1tpbmRleF0ubmFtZTsgXHJcbiAgICAgICAgbmV3QWRkVGFza3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3JlYWNoZWQnKTsgXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RzW2luZGV4XS5hcnJheSk7IFxyXG4gICAgICAgICAgICBhZGRUYXNrRm9ybShwcm9qZWN0c1tpbmRleF0uYXJyYXkpOyBcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJlbmRlckFycmF5KHByb2plY3RzW2luZGV4XS5hcnJheSk7IFxyXG4gICAgfWVsc2UgaWYoIWluZGV4KSB7XHJcbiAgICAgICAgY29udGVudEhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkluYm94XCI7IFxyXG4gICAgICAgICAgICBuZXdBZGRUYXNrcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBhZGRUYXNrRm9ybShpbmJveFRhc2tBcnJheSk7IFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFRhc2tGb3JtKGFycmF5KSB7XHJcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC10b3AnKTsgXHJcbiAgICBjb25zdCBhZGRUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFza3MnKTsgXHJcbiAgICBhZGRUYXNrcy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblxyXG4gICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICB0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7IFxyXG4gICAgdGFza0Zvcm0uY2xhc3NMaXN0LmFkZCgnYWRkaXRpb24tZm9ybScpOyBcclxuICAgIGNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpOyBcclxuICAgIGlucHV0VGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTsgXHJcbiAgICBjb25zdCBpbnB1dERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpOyBcclxuICAgIGlucHV0RGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xyXG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7IFxyXG4gICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZC1idXR0b24nKTsgXHJcbiAgICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZFwiOyBcclxuICAgIGFkZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7IFxyXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpOyBcclxuICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7IFxyXG4gICAgY2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NhbmNlbC1idXR0b24nKTsgXHJcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxyXG4gICAgYnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdidXR0b25zJyk7IFxyXG4gICAgYnV0dG9ucy5hcHBlbmRDaGlsZChhZGRCdXR0b24pOyBcclxuICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTsgXHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGFza0Zvcm0pOyBcclxuICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKGlucHV0VGl0bGUpO1xyXG4gICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoaW5wdXREYXRlKTsgXHJcbiAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZChidXR0b25zKTsgXHJcblxyXG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcclxuICAgICAgICBhZGRUYXNrcy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7IFxyXG4gICAgfSlcclxuXHJcbiAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyBcclxuICAgICAgICBjb25zdCBuZXdUYXNrID0gdGFzayhpbnB1dFRpdGxlLnZhbHVlLCBpbnB1dERhdGUudmFsdWUpOyBcclxuICAgICAgICBcclxuICAgICAgICB0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7ICAgICAgICAgICAgIFxyXG4gICAgICAgIGFkZFRhc2tzLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjsgXHJcbiAgICAgICAgLy8gYWRkVGFza1RvTGlicmFyeShpbmJveFRhc2tBcnJheSwgbmV3VGFzayk7IFxyXG4gICAgICAgIC8vIHJlbW92ZVRhc2tGcm9tRE9NKGluYm94VGFza0FycmF5KVxyXG4gICAgICAgIGlmKGFycmF5ID09PSBpbmJveFRhc2tBcnJheSkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYXJyYXkgaXMgaW5ib3h0YXNrYXJyYXknKTsgXHJcbiAgICAgICAgICAgIGFkZFRhc2tUb0xpYnJhcnkoaW5ib3hUYXNrQXJyYXksIG5ld1Rhc2spOyBcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2luYm94Jyk7IFxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaW5ib3gnLCBKU09OLnN0cmluZ2lmeShpbmJveFRhc2tBcnJheSkpO1xyXG5cclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhcnJheSBpcyBwcm9qZWN0IGFycmF5Jyk7IFxyXG4gICAgICAgICAgICBpbmJveFRhc2tBcnJheS5wdXNoKG5ld1Rhc2spOyBcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2luYm94Jyk7IFxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaW5ib3gnLCBKU09OLnN0cmluZ2lmeShpbmJveFRhc2tBcnJheSkpO1xyXG4gICAgICAgICAgICBhZGRUYXNrVG9MaWJyYXJ5KGFycmF5LCBuZXdUYXNrKTsgXHJcbiAgICAgICAgICAgIHJlbW92ZVRhc2tGcm9tRE9NKGFycmF5KTsgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkVGFza1RvTGlicmFyeShhcnJheSwgdGFzaykge1xyXG4gICAgYXJyYXkucHVzaCh0YXNrKTsgXHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncHJvamVjdHMnKTsgXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgcHJvamVjdHNgLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xyXG4gICAgcmVuZGVyQXJyYXkoYXJyYXkpOyBcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlVGFza0Zyb21BcnJheShhcnJheTEsIGluZGV4KSB7XHJcbiAgICBhcnJheTEuc3BsaWNlKGluZGV4LCAxKTsgXHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncHJvamVjdHMnKTsgXHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnaW5ib3gnKTsgXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpOyBcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbmJveCcsIEpTT04uc3RyaW5naWZ5KGluYm94VGFza0FycmF5KSk7IFxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlVGFza0Zyb21ET00oYXJyYXkpIHtcclxuICAgIGNvbnN0IHJhZGlvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wbGV0ZS10YXNrJyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhyYWRpb3MpOyBcclxuXHJcbiAgICByYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3QgcmFkaW9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbXBsZXRlLXRhc2snKTsgXHJcbiAgICAgICAgcmVuZGVyQXJyYXkoYXJyYXkpOyBcclxuICAgIH0pKVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJBcnJheShhcnJheSkge1xyXG5cclxuICAgIGNvbnN0IGNvbnRlbnRHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtZ3JpZCcpOyBcclxuICAgIGVtcHR5RWxlbWVudChjb250ZW50R3JpZCk7IFxyXG4gICAgZm9yKGxldCBpdGVtIG9mIGFycmF5KSB7XHJcbiAgICAgICAgY29uc3QgdGFza0Rpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXHJcbiAgICAgICAgdGFza0Rpc3BsYXkuY2xhc3NMaXN0LmFkZChcInRhc2stZGlzcGxheVwiKTsgXHJcbiAgICAgICAgdGFza0Rpc3BsYXkuc2V0QXR0cmlidXRlKCdkYXRhLWtleScsIGAke2FycmF5LmluZGV4T2YoaXRlbSl9YCk7IFxyXG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTsgXHJcbiAgICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gaXRlbS50aXRsZTsgXHJcbiAgICAgICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUnKTsgXHJcbiAgICAgICAgY29uc3QgdGFza0Rpc3BsYXlSaWdodFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXHJcbiAgICAgICAgdGFza0Rpc3BsYXlSaWdodFNpZGUuY2xhc3NMaXN0LmFkZCgndGFzay1kaXNwbGF5LXJpZ2h0LXNpZGUnKTsgXHJcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXHJcbiAgICAgICAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgdGFza0R1ZURhdGUudGV4dENvbnRlbnQgPSBpdGVtLmR1ZURhdGU7IFxyXG4gICAgICAgIGNvbnN0IHN0YXR1c1JhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTsgXHJcbiAgICAgICAgc3RhdHVzUmFkaW8uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7IFxyXG4gICAgICAgIHN0YXR1c1JhZGlvLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnY29tcGxldGUnKTsgXHJcbiAgICAgICAgc3RhdHVzUmFkaW8uc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb21wbGV0ZS10YXNrJyk7IFxyXG4gICAgICAgIHN0YXR1c1JhZGlvLnNldEF0dHJpYnV0ZSgnZGF0YS1rZXknLCBgJHthcnJheS5pbmRleE9mKGl0ZW0pfWApO1xyXG4gICAgICAgIHN0YXR1c1JhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJlbW92ZVRhc2tGcm9tQXJyYXkoYXJyYXksIGFycmF5LmluZGV4T2YoaXRlbSkpOyBcclxuICAgICAgICAgICAgLy8gY29udGVudEdyaWQucmVtb3ZlQ2hpbGQodGFza0Rpc3BsYXkpOyBcclxuICAgICAgICAgICAgcmVuZGVyQXJyYXkoYXJyYXkpOyAgICAgICAgICAgXHJcbiAgICAgICAgfSkgICBcclxuICAgICAgICBjb250ZW50R3JpZC5hcHBlbmRDaGlsZCh0YXNrRGlzcGxheSk7IFxyXG4gICAgICAgIHRhc2tEaXNwbGF5LmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7IFxyXG4gICAgICAgIHRhc2tEaXNwbGF5UmlnaHRTaWRlLmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlKTsgXHJcbiAgICAgICAgdGFza0Rpc3BsYXlSaWdodFNpZGUuYXBwZW5kQ2hpbGQoc3RhdHVzUmFkaW8pOyBcclxuICAgICAgICB0YXNrRGlzcGxheS5hcHBlbmRDaGlsZCh0YXNrRGlzcGxheVJpZ2h0U2lkZSk7IFxyXG5cclxuICAgIH1cclxufSBcclxuXHJcbmV4cG9ydCB7cmVuZGVyQXJyYXksIGFkZFRhc2tGb3JtLCBjb250ZW50SGVhZGluZywgcmVtb3ZlVGFza0Zyb21ET00sIGFkZFByb2plY3RGb3JtLCBwYWdlTG9hZGVyfTsgXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXHJcbmltcG9ydCB7Y29udGVudEhlYWRpbmcsIGFkZFByb2plY3RGb3JtLCBwYWdlTG9hZGVyfSBmcm9tICcuL2NvbXBvbmVudHMnOyAgXHJcblxyXG5jb250ZW50SGVhZGluZy50ZXh0Q29udGVudCA9ICdJbmJveCc7IFxyXG5cclxuZnVuY3Rpb24gY29tcG9uZW50KCkge1xyXG4gICAgY29uc3QgYWRkUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3RzJyk7IFxyXG5cclxuICAgIHBhZ2VMb2FkZXIoKTsgXHJcblxyXG4gICAgYWRkUHJvamVjdHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBhZGRQcm9qZWN0Rm9ybSgpOyBcclxuICAgICAgICBcclxuICAgIH0pXHJcbn1cclxuXHJcbmNvbXBvbmVudCgpOyAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=