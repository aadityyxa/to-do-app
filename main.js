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
const projects = [...localProjects]; 
const localInbox = JSON.parse(localStorage.getItem('inbox')); 
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
    
    const projectList = document.querySelector('.projects-list'); 
    for(let project of projects) {
        const projectCard = document.createElement('li'); 
        projectCard.classList.add('project-card'); 
        projectCard.setAttribute('data-key', projects.indexOf(project)); 
        projectCard.textContent = `${project.name}`;
        projectList.appendChild(projectCard); 
        projectCard.addEventListener('click', function() {
            pageLoader(projectCard.getAttribute('data-key')); 
        })
        inboxPage.addEventListener('click', function() {
            pageLoader(); 
            
        })
    }
}

function pageLoader(index) {
    const contentGrid = document.querySelector('.content-grid'); 
    emptyElement(projectList); 
    renderProjectList();
    emptyElement(contentGrid);
    if(index) {
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
        if(array === inboxTaskArray) {
            addTaskToLibrary(inboxTaskArray, newTask); 
            localStorage.removeItem('inbox'); 
            localStorage.setItem('inbox', JSON.stringify(inboxTaskArray));

        }else {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsT0FBTyxL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Q0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGVBQWU7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxhQUFhO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxvQkFBb0I7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELG9CQUFvQjtBQUNwRTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2lHOzs7Ozs7O1VDM09qRztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FvQjtBQUNvRDtBQUN4RTtBQUNBLHVEQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVEQUFVO0FBQ2Q7QUFDQTtBQUNBLFFBQVEsMkRBQWM7QUFDdEI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5LGh0bWx7XHJcbiAgICBoZWlnaHQ6MTAwJTsgXHJcbiAgICBmb250LWZhbWlseTpzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICAgIC0tcHJpbWFyeS1icm93bjogIzQwMzcyODsgXHJcbiAgICAtLXNpZGViYXItd2hpdGU6I2RkZDsgXHJcbiAgICAtLWNvbnRlbnQtd2hpdGU6I2VlZTsgXHJcbiAgICAtLXJlZDogI2ZmOWM5YztcclxuICAgIC0tbGlnaHRncmVlbjogIzlmZmY5YztcclxuICAgIC0tZGFya2VyLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDAuMSksIHJnYmEoMCwwLDAsMC4xKSk7IFxyXG59XHJcblxyXG4qe1xyXG4gICAgcGFkZGluZzowOyBcclxuICAgIG1hcmdpbjowOyBcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi53cmFwcGVye1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICBkaXNwbGF5OmZsZXg7IFxyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLm1pZGRsZS1zZWN0aW9ue1xyXG4gICAgZmxleC1ncm93OjE7XHJcbiAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XHJcbn1cclxuXHJcbi5oZWFkZXJ7XHJcbiAgICBmb250LXNpemU6MS41cmVtO1xyXG4gICAgcGFkZGluZzoxLjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWJyb3duKTsgXHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGdyaWQtY29sdW1uOjEvMztcclxufVxyXG5cclxudWx7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6bm9uZTtcclxufVxyXG5cclxuXHJcbi5zaWRlYmFye1xyXG4gICAgYmFja2dyb3VuZDp2YXIoLS1zaWRlYmFyLXdoaXRlKTsgXHJcbiAgICBncmlkLWNvbHVtbjoxLzI7IFxyXG4gICAgcGFkZGluZzoycmVtO1xyXG59XHJcblxyXG4uc2lkZWJhciBsaXtcclxuICAgIHBhZGRpbmc6MC44cmVtO1xyXG4gICAgZm9udC1zaXplOjEuMnJlbTtcclxuICAgIGRpc3BsYXk6ZmxleDsgXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOi41cmVtOyAgXHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTAwJSk7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6OHB4O1xyXG59XHJcblxyXG5saTpob3ZlciB7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDAuMiksIHJnYmEoMCwwLDAsMC4yKSk7ICAqL1xyXG4gICAgYmFja2dyb3VuZDp2YXIoLS1kYXJrZXItYmFja2dyb3VuZCk7IFxyXG59XHJcblxyXG5saTphY3RpdmV7XHJcbiAgICBmb250LXdlaWdodDo3MDA7IFxyXG59XHJcblxyXG5oMntcclxuICAgIHBhZGRpbmc6MC44cmVtO1xyXG59XHJcblxyXG4uY29udGVudHtcclxuICAgIHBhZGRpbmc6MjRweDsgXHJcbiAgICBiYWNrZ3JvdW5kOnZhcigtLWNvbnRlbnQtd2hpdGUpOyBcclxufVxyXG5cclxuc3Zne1xyXG4gICAgaGVpZ2h0OjEuNXJlbTtcclxuICAgIHdpZHRoOjEuNXJlbTtcclxufVxyXG5cclxuLmZvb3RlcntcclxuICAgIGJhY2tncm91bmQ6dmFyKC0tcHJpbWFyeS1icm93bik7IFxyXG4gICAgcGFkZGluZzoxcmVtO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuLmFkZGl0aW9uLWZvcm17XHJcbiAgICAvKiBiYWNrZ3JvdW5kOndoaXRlOyAqL1xyXG4gICAgZGlzcGxheTpncmlkOyBcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyAgXHJcbiAgICB3aWR0aDozMDBweDsgXHJcbiAgICBnYXA6OHB4O1xyXG59XHJcblxyXG4uc2lkZWJhciAuYWRkaXRpb24tZm9ybXtcclxuICAgIHdpZHRoOjEwMCU7IFxyXG59XHJcblxyXG4uYWRkaXRpb24tZm9ybSAqe1xyXG4gICAgd2lkdGg6MTAwJTsgXHJcbiAgICBwYWRkaW5nOjRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6NHB4O1xyXG59XHJcblxyXG4uYWRkLWJ1dHRvbntcclxuICAgIGJhY2tncm91bmQ6dmFyKC0tbGlnaHRncmVlbik7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjsgXHJcbiAgICBib3JkZXI6bm9uZTsgXHJcbiAgICBjb2xvcjp3aGl0ZTsgXHJcbn1cclxuXHJcbi5idXR0b25ze1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZ2FwOjIwcHg7XHJcbn1cclxuXHJcbi5jYW5jZWwtYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZDp2YXIoLS1yZWQpOyBcclxuICAgIGN1cnNvcjpwb2ludGVyOyBcclxuICAgIGJvcmRlcjpub25lOyBcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG4uYWRkLXByb2plY3Rze1xyXG4gICAgZm9udC1zaXplOjEuMnJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6OHB4O1xyXG4gICAgcGFkZGluZzo4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjIwcHg7XHJcbiAgICBkaXNwbGF5OmZsZXg7IFxyXG4gICAgZ2FwOjAuNXJlbTtcclxuICAgIGN1cnNvcjpwb2ludGVyOyBcclxufVxyXG5cclxuLmFkZC1wcm9qZWN0czpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6dmFyKC0tZGFya2VyLWJhY2tncm91bmQpOyBcclxufVxyXG4ucHJvamVjdC1jYXJke1xyXG4gICAgcGFkZGluZzoxNnB4O1xyXG59XHJcblxyXG4ucHJvamVjdC1jYXJkOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMC41KSk7IFxyXG59XHJcblxyXG4uYWRkLXRhc2tze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnQtc2l6ZToxLjJyZW07XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOjAuNXJlbTtcclxuICAgIHBhZGRpbmc6MTJweDsgXHJcbiAgICBib3JkZXItcmFkaXVzOjhweDsgXHJcbiAgICBjdXJzb3I6cG9pbnRlcjsgXHJcbn1cclxuXHJcbi5hZGQtdGFza3M6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOnZhcigtLWRhcmtlci1iYWNrZ3JvdW5kKTsgXHJcbn1cclxuLmNvbnRlbnQtdG9we1xyXG4gICAgZGlzcGxheTpmbGV4OyBcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi1ib3R0b206MjRweDtcclxuICAgIHdpZHRoOjEwMCU7IFxyXG59XHJcblxyXG4udGFzay1kaXNwbGF5e1xyXG4gICAgZGlzcGxheTpmbGV4OyBcclxuICAgIHBhZGRpbmc6MTZweDtcclxuICAgIHdpZHRoOjEwMCU7IFxyXG4gICAgZm9udC1zaXplOjEuMnJlbTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czo0cHg7XHJcbn1cclxuXHJcbi50YXNrLWRpc3BsYXk6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjEpLCByZ2JhKDAsIDAsIDAsIDAuMSkpO1xyXG59XHJcblxyXG4udGFzay1kaXNwbGF5LXJpZ2h0LXNpZGV7XHJcbiAgICBkaXNwbGF5OmZsZXg7IFxyXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgZ2FwOjIwcHg7XHJcbn1cclxuXHJcbi50YXNrLXRpdGxle1xyXG4gICAgZm9udC13ZWlnaHQ6NzAwOyBcclxuICAgIC8qIGZvbnQtc2l6ZToxLjEucmVtOyAgKi9cclxufVxyXG5cclxuLnRhc2stZGlzcGxheS1yaWdodC1zaWRlID4gaW5wdXQge1xyXG4gICAgLyogLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyAqL1xyXG4gICAgaGVpZ2h0OjEuMnJlbTtcclxuICAgIHdpZHRoOjEuMnJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6NTAlOyBcclxufVxyXG5cclxuLnRhc2stZGlzcGxheS1yaWdodC1zaWRlPmlucHV0OmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOmRhcmtncmV5O1xyXG59XHJcblxyXG4ucHJpb3JpdHl7XHJcbiAgICBoZWlnaHQ6MS4ycmVtO1xyXG4gICAgd2lkdGg6MS4ycmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czo1MCU7IFxyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksV0FBVztJQUNYLGtKQUFrSjtJQUNsSix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLHNFQUFzRTtBQUMxRTs7QUFFQTtJQUNJLFNBQVM7SUFDVCxRQUFRO0lBQ1Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZ0NBQWdDO0lBQ2hDLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOzs7QUFHQTtJQUNJLCtCQUErQjtJQUMvQixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1Qsd0JBQXdCO0lBQ3hCLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtRUFBbUU7SUFDbkUsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixXQUFXO0lBQ1gsT0FBTztBQUNYOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsY0FBYztJQUNkLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osUUFBUTtBQUNaOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVO0lBQ1YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1DQUFtQztBQUN2QztBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osVUFBVTtJQUNWLGdCQUFnQjtJQUNoQiw4QkFBOEI7SUFDOUIsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1FQUFtRTtBQUN2RTs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHksaHRtbHtcXHJcXG4gICAgaGVpZ2h0OjEwMCU7IFxcclxcbiAgICBmb250LWZhbWlseTpzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgLS1wcmltYXJ5LWJyb3duOiAjNDAzNzI4OyBcXHJcXG4gICAgLS1zaWRlYmFyLXdoaXRlOiNkZGQ7IFxcclxcbiAgICAtLWNvbnRlbnQtd2hpdGU6I2VlZTsgXFxyXFxuICAgIC0tcmVkOiAjZmY5YzljO1xcclxcbiAgICAtLWxpZ2h0Z3JlZW46ICM5ZmZmOWM7XFxyXFxuICAgIC0tZGFya2VyLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDAuMSksIHJnYmEoMCwwLDAsMC4xKSk7IFxcclxcbn1cXHJcXG5cXHJcXG4qe1xcclxcbiAgICBwYWRkaW5nOjA7IFxcclxcbiAgICBtYXJnaW46MDsgXFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi53cmFwcGVye1xcclxcbiAgICBoZWlnaHQ6MTAwJTtcXHJcXG4gICAgZGlzcGxheTpmbGV4OyBcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLm1pZGRsZS1zZWN0aW9ue1xcclxcbiAgICBmbGV4LWdyb3c6MTtcXHJcXG4gICAgZGlzcGxheTpncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJ7XFxyXFxuICAgIGZvbnQtc2l6ZToxLjVyZW07XFxyXFxuICAgIHBhZGRpbmc6MS41cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWJyb3duKTsgXFxyXFxuICAgIGNvbG9yOndoaXRlO1xcclxcbiAgICBncmlkLWNvbHVtbjoxLzM7XFxyXFxufVxcclxcblxcclxcbnVse1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6bm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnNpZGViYXJ7XFxyXFxuICAgIGJhY2tncm91bmQ6dmFyKC0tc2lkZWJhci13aGl0ZSk7IFxcclxcbiAgICBncmlkLWNvbHVtbjoxLzI7IFxcclxcbiAgICBwYWRkaW5nOjJyZW07XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIGxpe1xcclxcbiAgICBwYWRkaW5nOjAuOHJlbTtcXHJcXG4gICAgZm9udC1zaXplOjEuMnJlbTtcXHJcXG4gICAgZGlzcGxheTpmbGV4OyBcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOi41cmVtOyAgXFxyXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMDAlKTtcXHJcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6OHB4O1xcclxcbn1cXHJcXG5cXHJcXG5saTpob3ZlciB7XFxyXFxuICAgIC8qIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMC4yKSwgcmdiYSgwLDAsMCwwLjIpKTsgICovXFxyXFxuICAgIGJhY2tncm91bmQ6dmFyKC0tZGFya2VyLWJhY2tncm91bmQpOyBcXHJcXG59XFxyXFxuXFxyXFxubGk6YWN0aXZle1xcclxcbiAgICBmb250LXdlaWdodDo3MDA7IFxcclxcbn1cXHJcXG5cXHJcXG5oMntcXHJcXG4gICAgcGFkZGluZzowLjhyZW07XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50e1xcclxcbiAgICBwYWRkaW5nOjI0cHg7IFxcclxcbiAgICBiYWNrZ3JvdW5kOnZhcigtLWNvbnRlbnQtd2hpdGUpOyBcXHJcXG59XFxyXFxuXFxyXFxuc3Zne1xcclxcbiAgICBoZWlnaHQ6MS41cmVtO1xcclxcbiAgICB3aWR0aDoxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5mb290ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQ6dmFyKC0tcHJpbWFyeS1icm93bik7IFxcclxcbiAgICBwYWRkaW5nOjFyZW07XFxyXFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcclxcbiAgICBjb2xvcjp3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZGl0aW9uLWZvcm17XFxyXFxuICAgIC8qIGJhY2tncm91bmQ6d2hpdGU7ICovXFxyXFxuICAgIGRpc3BsYXk6Z3JpZDsgXFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyAgXFxyXFxuICAgIHdpZHRoOjMwMHB4OyBcXHJcXG4gICAgZ2FwOjhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIgLmFkZGl0aW9uLWZvcm17XFxyXFxuICAgIHdpZHRoOjEwMCU7IFxcclxcbn1cXHJcXG5cXHJcXG4uYWRkaXRpb24tZm9ybSAqe1xcclxcbiAgICB3aWR0aDoxMDAlOyBcXHJcXG4gICAgcGFkZGluZzo0cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6NHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWJ1dHRvbntcXHJcXG4gICAgYmFja2dyb3VuZDp2YXIoLS1saWdodGdyZWVuKTtcXHJcXG4gICAgY3Vyc29yOnBvaW50ZXI7IFxcclxcbiAgICBib3JkZXI6bm9uZTsgXFxyXFxuICAgIGNvbG9yOndoaXRlOyBcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbnN7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgZ2FwOjIwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYW5jZWwtYnV0dG9ue1xcclxcbiAgICBiYWNrZ3JvdW5kOnZhcigtLXJlZCk7IFxcclxcbiAgICBjdXJzb3I6cG9pbnRlcjsgXFxyXFxuICAgIGJvcmRlcjpub25lOyBcXHJcXG4gICAgY29sb3I6d2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5hZGQtcHJvamVjdHN7XFxyXFxuICAgIGZvbnQtc2l6ZToxLjJyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6OHB4O1xcclxcbiAgICBwYWRkaW5nOjhweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbToyMHB4O1xcclxcbiAgICBkaXNwbGF5OmZsZXg7IFxcclxcbiAgICBnYXA6MC41cmVtO1xcclxcbiAgICBjdXJzb3I6cG9pbnRlcjsgXFxyXFxufVxcclxcblxcclxcbi5hZGQtcHJvamVjdHM6aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQ6dmFyKC0tZGFya2VyLWJhY2tncm91bmQpOyBcXHJcXG59XFxyXFxuLnByb2plY3QtY2FyZHtcXHJcXG4gICAgcGFkZGluZzoxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1jYXJkOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwwLjUpKTsgXFxyXFxufVxcclxcblxcclxcbi5hZGQtdGFza3N7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZvbnQtc2l6ZToxLjJyZW07XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDowLjVyZW07XFxyXFxuICAgIHBhZGRpbmc6MTJweDsgXFxyXFxuICAgIGJvcmRlci1yYWRpdXM6OHB4OyBcXHJcXG4gICAgY3Vyc29yOnBvaW50ZXI7IFxcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRhc2tzOmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kOnZhcigtLWRhcmtlci1iYWNrZ3JvdW5kKTsgXFxyXFxufVxcclxcbi5jb250ZW50LXRvcHtcXHJcXG4gICAgZGlzcGxheTpmbGV4OyBcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOjI0cHg7XFxyXFxuICAgIHdpZHRoOjEwMCU7IFxcclxcbn1cXHJcXG5cXHJcXG4udGFzay1kaXNwbGF5e1xcclxcbiAgICBkaXNwbGF5OmZsZXg7IFxcclxcbiAgICBwYWRkaW5nOjE2cHg7XFxyXFxuICAgIHdpZHRoOjEwMCU7IFxcclxcbiAgICBmb250LXNpemU6MS4ycmVtO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGN1cnNvcjpwb2ludGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZGlzcGxheTpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4xKSwgcmdiYSgwLCAwLCAwLCAwLjEpKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZGlzcGxheS1yaWdodC1zaWRle1xcclxcbiAgICBkaXNwbGF5OmZsZXg7IFxcclxcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxyXFxuICAgIGdhcDoyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay10aXRsZXtcXHJcXG4gICAgZm9udC13ZWlnaHQ6NzAwOyBcXHJcXG4gICAgLyogZm9udC1zaXplOjEuMS5yZW07ICAqL1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1kaXNwbGF5LXJpZ2h0LXNpZGUgPiBpbnB1dCB7XFxyXFxuICAgIC8qIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgKi9cXHJcXG4gICAgaGVpZ2h0OjEuMnJlbTtcXHJcXG4gICAgd2lkdGg6MS4ycmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOjUwJTsgXFxyXFxufVxcclxcblxcclxcbi50YXNrLWRpc3BsYXktcmlnaHQtc2lkZT5pbnB1dDphY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kOmRhcmtncmV5O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHl7XFxyXFxuICAgIGhlaWdodDoxLjJyZW07XFxyXFxuICAgIHdpZHRoOjEuMnJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czo1MCU7IFxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwibG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJyk7IFxyXG5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW5ib3gnKTsgXHJcbmNvbnN0IGNvbnRlbnRIZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtaGVhZGluZycpO1xyXG5sZXQgYWRkVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2tzJyk7XHJcbmNvbnN0IGxvY2FsUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcclxuY29uc3QgcHJvamVjdHMgPSBbLi4ubG9jYWxQcm9qZWN0c107IFxyXG5jb25zdCBsb2NhbEluYm94ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW5ib3gnKSk7IFxyXG5jb25zdCBpbmJveFRhc2tBcnJheSA9IFsuLi5sb2NhbEluYm94XTtcclxuY29uc3QgaW5ib3hQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luYm94Jyk7IFxyXG5jb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1saXN0Jyk7IFxyXG5cclxuY29uc3QgdGFzayA9ICh0aXRsZSxkdWVEYXRlKSA9PiB7XHJcbiAgICBsZXQgc3RhdHVzID0gJ2luY29tcGxldGUnOyBcclxuICAgIHJldHVybiB7dGl0bGUsZHVlRGF0ZSwgc3RhdHVzfSAgXHJcbn1cclxuXHJcbmNsYXNzIFBhZ2V7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBhcnJheSApIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lOyBcclxuICAgICAgICB0aGlzLmFycmF5ID0gYXJyYXk7IFxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBlbXB0eUVsZW1lbnQoaXRlbSkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2l0ZW0uY2xhc3NOYW1lfWApOyBcclxuICAgIHdoaWxlKGVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQpIHtcclxuICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQpOyBcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUHJvamVjdEZvcm0oKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1saXN0Jyk7XHJcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3RzLWNvbnRhaW5lcicpOyBcclxuICAgIGNvbnN0IGFkZFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0cycpO1xyXG4gICAgYWRkUHJvamVjdHMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcclxuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpOyBcclxuICAgIHByb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoJ2FkZGl0aW9uLWZvcm0nKTsgXHJcbiAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnOyBcclxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHByb2plY3ROYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7IFxyXG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcclxuICAgIGJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnYnV0dG9ucycpOyBcclxuICAgIGNvbnN0IHN1Ym1pdFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsgXHJcbiAgICBzdWJtaXRQcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTsgXHJcbiAgICBzdWJtaXRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZC1idXR0b24nKTsgXHJcbiAgICBzdWJtaXRQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBQcm9qZWN0JzsgXHJcbiAgICBjb25zdCBjYW5jZWxQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7IFxyXG4gICAgY2FuY2VsUHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7IFxyXG4gICAgY2FuY2VsUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjYW5jZWwtYnV0dG9uJyk7IFxyXG4gICAgY2FuY2VsUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnOyBcclxuICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoc3VibWl0UHJvamVjdEJ1dHRvbik7IFxyXG4gICAgYnV0dG9ucy5hcHBlbmRDaGlsZChjYW5jZWxQcm9qZWN0QnV0dG9uKTsgXHJcbiAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7IFxyXG4gICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9ucyk7IFxyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHByb2plY3RGb3JtKTsgXHJcblxyXG4gICAgc3VibWl0UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IFxyXG4gICAgICAgIGVtcHR5RWxlbWVudChwcm9qZWN0TGlzdCk7IFxyXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUGFnZShwcm9qZWN0TmFtZS52YWx1ZSwgW10pOyBcclxuICAgICAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwcm9qZWN0cycpOyBcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpOyBcclxuICAgICAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyBcclxuICAgICAgICBhZGRQcm9qZWN0cy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7IFxyXG4gICAgICAgIHJlbmRlclByb2plY3RMaXN0KCk7IFxyXG4gICAgfSlcclxuXHJcbiAgICBjYW5jZWxQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJzsgXHJcbiAgICAgICAgYWRkUHJvamVjdHMuc3R5bGUuZGlzcGxheSA9ICdmbGV4JzsgXHJcbiAgICB9KVxyXG4gICAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclByb2plY3RMaXN0KCkge1xyXG4gICAgXHJcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1saXN0Jyk7IFxyXG4gICAgZm9yKGxldCBwcm9qZWN0IG9mIHByb2plY3RzKSB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpOyBcclxuICAgICAgICBwcm9qZWN0Q2FyZC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNhcmQnKTsgXHJcbiAgICAgICAgcHJvamVjdENhcmQuc2V0QXR0cmlidXRlKCdkYXRhLWtleScsIHByb2plY3RzLmluZGV4T2YocHJvamVjdCkpOyBcclxuICAgICAgICBwcm9qZWN0Q2FyZC50ZXh0Q29udGVudCA9IGAke3Byb2plY3QubmFtZX1gO1xyXG4gICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3RDYXJkKTsgXHJcbiAgICAgICAgcHJvamVjdENhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcGFnZUxvYWRlcihwcm9qZWN0Q2FyZC5nZXRBdHRyaWJ1dGUoJ2RhdGEta2V5JykpOyBcclxuICAgICAgICB9KVxyXG4gICAgICAgIGluYm94UGFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBwYWdlTG9hZGVyKCk7IFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwYWdlTG9hZGVyKGluZGV4KSB7XHJcbiAgICBjb25zdCBjb250ZW50R3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWdyaWQnKTsgXHJcbiAgICBlbXB0eUVsZW1lbnQocHJvamVjdExpc3QpOyBcclxuICAgIHJlbmRlclByb2plY3RMaXN0KCk7XHJcbiAgICBlbXB0eUVsZW1lbnQoY29udGVudEdyaWQpO1xyXG4gICAgaWYoaW5kZXgpIHtcclxuICAgICAgICByZW5kZXJBcnJheShwcm9qZWN0c1tpbmRleF0uYXJyYXkpOyBcclxuICAgIH1lbHNlIHtcclxuICAgICAgICByZW5kZXJBcnJheShpbmJveFRhc2tBcnJheSk7IFxyXG4gICAgfVxyXG4gICAgbGV0IGFkZFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrcycpOyBcclxuICAgIGxldCBuZXdBZGRUYXNrcyA9IGFkZFRhc2tzLmNsb25lTm9kZSh0cnVlKTsgXHJcbiAgICBhZGRUYXNrcy5yZXBsYWNlV2l0aChuZXdBZGRUYXNrcyk7XHJcbiAgICBpZihpbmRleCkge1xyXG4gICAgICAgIGNvbnRlbnRIZWFkaW5nLnRleHRDb250ZW50ID0gcHJvamVjdHNbaW5kZXhdLm5hbWU7IFxyXG4gICAgICAgIG5ld0FkZFRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGFkZFRhc2tGb3JtKHByb2plY3RzW2luZGV4XS5hcnJheSk7IFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmVuZGVyQXJyYXkocHJvamVjdHNbaW5kZXhdLmFycmF5KTsgXHJcbiAgICB9ZWxzZSBpZighaW5kZXgpIHtcclxuICAgICAgICBjb250ZW50SGVhZGluZy50ZXh0Q29udGVudCA9IFwiSW5ib3hcIjsgXHJcbiAgICAgICAgICAgIG5ld0FkZFRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGFkZFRhc2tGb3JtKGluYm94VGFza0FycmF5KTsgXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkVGFza0Zvcm0oYXJyYXkpIHtcclxuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LXRvcCcpOyBcclxuICAgIGNvbnN0IGFkZFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrcycpOyBcclxuICAgIGFkZFRhc2tzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcbiAgICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgIHRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjsgXHJcbiAgICB0YXNrRm9ybS5jbGFzc0xpc3QuYWRkKCdhZGRpdGlvbi1mb3JtJyk7IFxyXG4gICAgY29uc3QgaW5wdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7IFxyXG4gICAgaW5wdXRUaXRsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpOyBcclxuICAgIGNvbnN0IGlucHV0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7IFxyXG4gICAgaW5wdXREYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XHJcbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsgXHJcbiAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkLWJ1dHRvbicpOyBcclxuICAgIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkXCI7IFxyXG4gICAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTsgXHJcbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNhbmNlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7IFxyXG4gICAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjsgXHJcbiAgICBjYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2FuY2VsLWJ1dHRvbicpOyBcclxuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXHJcbiAgICBidXR0b25zLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnMnKTsgXHJcbiAgICBidXR0b25zLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7IFxyXG4gICAgYnV0dG9ucy5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pOyBcclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0YXNrRm9ybSk7IFxyXG4gICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoaW5wdXRUaXRsZSk7XHJcbiAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZChpbnB1dERhdGUpOyBcclxuICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKGJ1dHRvbnMpOyBcclxuXHJcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICB0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxyXG4gICAgICAgIGFkZFRhc2tzLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjsgXHJcbiAgICB9KVxyXG5cclxuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IFxyXG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSB0YXNrKGlucHV0VGl0bGUudmFsdWUsIGlucHV0RGF0ZS52YWx1ZSk7IFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgICAgICAgICAgICAgXHJcbiAgICAgICAgYWRkVGFza3Muc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiOyBcclxuICAgICAgICBpZihhcnJheSA9PT0gaW5ib3hUYXNrQXJyYXkpIHtcclxuICAgICAgICAgICAgYWRkVGFza1RvTGlicmFyeShpbmJveFRhc2tBcnJheSwgbmV3VGFzayk7IFxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnaW5ib3gnKTsgXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbmJveCcsIEpTT04uc3RyaW5naWZ5KGluYm94VGFza0FycmF5KSk7XHJcblxyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgaW5ib3hUYXNrQXJyYXkucHVzaChuZXdUYXNrKTsgXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdpbmJveCcpOyBcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2luYm94JywgSlNPTi5zdHJpbmdpZnkoaW5ib3hUYXNrQXJyYXkpKTtcclxuICAgICAgICAgICAgYWRkVGFza1RvTGlicmFyeShhcnJheSwgbmV3VGFzayk7IFxyXG4gICAgICAgICAgICByZW1vdmVUYXNrRnJvbURPTShhcnJheSk7IFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFRhc2tUb0xpYnJhcnkoYXJyYXksIHRhc2spIHtcclxuICAgIGFycmF5LnB1c2godGFzayk7IFxyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Byb2plY3RzJyk7IFxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHByb2plY3RzYCwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcclxuICAgIHJlbmRlckFycmF5KGFycmF5KTsgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVRhc2tGcm9tQXJyYXkoYXJyYXkxLCBpbmRleCkge1xyXG4gICAgYXJyYXkxLnNwbGljZShpbmRleCwgMSk7IFxyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Byb2plY3RzJyk7IFxyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2luYm94Jyk7IFxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTsgXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaW5ib3gnLCBKU09OLnN0cmluZ2lmeShpbmJveFRhc2tBcnJheSkpOyBcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVRhc2tGcm9tRE9NKGFycmF5KSB7XHJcbiAgICBjb25zdCByYWRpb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tcGxldGUtdGFzaycpO1xyXG5cclxuICAgIHJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4gcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCByYWRpb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tcGxldGUtdGFzaycpOyBcclxuICAgICAgICByZW5kZXJBcnJheShhcnJheSk7IFxyXG4gICAgfSkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckFycmF5KGFycmF5KSB7XHJcblxyXG4gICAgY29uc3QgY29udGVudEdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1ncmlkJyk7IFxyXG4gICAgZW1wdHlFbGVtZW50KGNvbnRlbnRHcmlkKTsgXHJcbiAgICBmb3IobGV0IGl0ZW0gb2YgYXJyYXkpIHtcclxuICAgICAgICBjb25zdCB0YXNrRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcclxuICAgICAgICB0YXNrRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwidGFzay1kaXNwbGF5XCIpOyBcclxuICAgICAgICB0YXNrRGlzcGxheS5zZXRBdHRyaWJ1dGUoJ2RhdGEta2V5JywgYCR7YXJyYXkuaW5kZXhPZihpdGVtKX1gKTsgXHJcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpOyBcclxuICAgICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSBpdGVtLnRpdGxlOyBcclxuICAgICAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgndGFzay10aXRsZScpOyBcclxuICAgICAgICBjb25zdCB0YXNrRGlzcGxheVJpZ2h0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcclxuICAgICAgICB0YXNrRGlzcGxheVJpZ2h0U2lkZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWRpc3BsYXktcmlnaHQtc2lkZScpOyBcclxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcclxuICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICB0YXNrRHVlRGF0ZS50ZXh0Q29udGVudCA9IGl0ZW0uZHVlRGF0ZTsgXHJcbiAgICAgICAgY29uc3Qgc3RhdHVzUmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpOyBcclxuICAgICAgICBzdGF0dXNSYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKTsgXHJcbiAgICAgICAgc3RhdHVzUmFkaW8uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdjb21wbGV0ZScpOyBcclxuICAgICAgICBzdGF0dXNSYWRpby5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbXBsZXRlLXRhc2snKTsgXHJcbiAgICAgICAgc3RhdHVzUmFkaW8uc2V0QXR0cmlidXRlKCdkYXRhLWtleScsIGAke2FycmF5LmluZGV4T2YoaXRlbSl9YCk7XHJcbiAgICAgICAgc3RhdHVzUmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmVtb3ZlVGFza0Zyb21BcnJheShhcnJheSwgYXJyYXkuaW5kZXhPZihpdGVtKSk7IFxyXG4gICAgICAgICAgICByZW5kZXJBcnJheShhcnJheSk7ICAgICAgICAgICBcclxuICAgICAgICB9KSAgIFxyXG4gICAgICAgIGNvbnRlbnRHcmlkLmFwcGVuZENoaWxkKHRhc2tEaXNwbGF5KTsgXHJcbiAgICAgICAgdGFza0Rpc3BsYXkuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTsgXHJcbiAgICAgICAgdGFza0Rpc3BsYXlSaWdodFNpZGUuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpOyBcclxuICAgICAgICB0YXNrRGlzcGxheVJpZ2h0U2lkZS5hcHBlbmRDaGlsZChzdGF0dXNSYWRpbyk7IFxyXG4gICAgICAgIHRhc2tEaXNwbGF5LmFwcGVuZENoaWxkKHRhc2tEaXNwbGF5UmlnaHRTaWRlKTsgXHJcblxyXG4gICAgfVxyXG59IFxyXG5cclxuZXhwb3J0IHtyZW5kZXJBcnJheSwgYWRkVGFza0Zvcm0sIGNvbnRlbnRIZWFkaW5nLCByZW1vdmVUYXNrRnJvbURPTSwgYWRkUHJvamVjdEZvcm0sIHBhZ2VMb2FkZXJ9OyBcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcclxuaW1wb3J0IHtjb250ZW50SGVhZGluZywgYWRkUHJvamVjdEZvcm0sIHBhZ2VMb2FkZXJ9IGZyb20gJy4vY29tcG9uZW50cyc7ICBcclxuXHJcbmNvbnRlbnRIZWFkaW5nLnRleHRDb250ZW50ID0gJ0luYm94JzsgXHJcblxyXG5mdW5jdGlvbiBjb21wb25lbnQoKSB7XHJcbiAgICBjb25zdCBhZGRQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdHMnKTsgXHJcblxyXG4gICAgcGFnZUxvYWRlcigpOyBcclxuXHJcbiAgICBhZGRQcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGFkZFByb2plY3RGb3JtKCk7IFxyXG4gICAgICAgIFxyXG4gICAgfSlcclxufVxyXG5cclxuY29tcG9uZW50KCk7ICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==