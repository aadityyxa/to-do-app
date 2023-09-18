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
sessionStorage.getItem('projects'); 
sessionStorage.getItem('inbox'); 
sessionStorage.removeItem('projects');
const contentHeading = document.querySelector('.content-heading');
let addTasks = document.querySelector('.add-tasks');
const sessionProjects = JSON.parse(sessionStorage.getItem('projects'));
const projects = []; 
if(sessionProjects !== null) {
    for(let i = 0; i < sessionProjects.length; i++) {
        projects.push(sessionProjects[i]); 
    }
}
const inboxTaskArray = []; 
const sessionInbox = JSON.parse(sessionStorage.getItem('inbox')); 
if(sessionInbox !== null) {
    for(let i = 0; i <  sessionInbox.length; i++) {
        inboxTaskArray.push(sessionInbox[i]);
    }
}
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
        sessionStorage.removeItem('projects'); 
        sessionStorage.setItem('projects', JSON.stringify(projects)); 
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
            sessionStorage.removeItem('inbox'); 
            sessionStorage.setItem('inbox', JSON.stringify(inboxTaskArray));

        }else {
            inboxTaskArray.push(newTask); 
            sessionStorage.removeItem('inbox'); 
            sessionStorage.setItem('inbox', JSON.stringify(inboxTaskArray));
            addTaskToLibrary(array, newTask); 
            removeTaskFromDOM(array); 
        }
    })
}

function addTaskToLibrary(array, task) {
    array.push(task); 
    sessionStorage.removeItem('projects'); 
    sessionStorage.setItem(`projects`, JSON.stringify(projects));
    renderArray(array); 
}

function removeTaskFromArray(array1, index) {
    array1.splice(index, 1); 
    sessionStorage.removeItem('projects'); 
    sessionStorage.removeItem('inbox'); 
    sessionStorage.setItem('projects', JSON.stringify(projects)); 
    sessionStorage.setItem('inbox', JSON.stringify(inboxTaskArray)); 

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsT0FBTyxL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Q0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNEJBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwwQkFBMEI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxlQUFlO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsYUFBYTtBQUNsRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Qsb0JBQW9CO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxvQkFBb0I7QUFDcEU7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNpRzs7Ozs7OztVQ3RQakc7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBb0I7QUFDb0Q7QUFDeEU7QUFDQSx1REFBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1REFBVTtBQUNkO0FBQ0E7QUFDQSxRQUFRLDJEQUFjO0FBQ3RCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9jb21wb25lbnRzLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSxodG1se1xyXG4gICAgaGVpZ2h0OjEwMCU7IFxyXG4gICAgZm9udC1mYW1pbHk6c3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgICAtLXByaW1hcnktYnJvd246ICM0MDM3Mjg7IFxyXG4gICAgLS1zaWRlYmFyLXdoaXRlOiNkZGQ7IFxyXG4gICAgLS1jb250ZW50LXdoaXRlOiNlZWU7IFxyXG4gICAgLS1yZWQ6ICNmZjljOWM7XHJcbiAgICAtLWxpZ2h0Z3JlZW46ICM5ZmZmOWM7XHJcbiAgICAtLWRhcmtlci1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwwLjEpLCByZ2JhKDAsMCwwLDAuMSkpOyBcclxufVxyXG5cclxuKntcclxuICAgIHBhZGRpbmc6MDsgXHJcbiAgICBtYXJnaW46MDsgXHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4ud3JhcHBlcntcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgZGlzcGxheTpmbGV4OyBcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5taWRkbGUtc2VjdGlvbntcclxuICAgIGZsZXgtZ3JvdzoxO1xyXG4gICAgZGlzcGxheTpncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xyXG59XHJcblxyXG4uaGVhZGVye1xyXG4gICAgZm9udC1zaXplOjEuNXJlbTtcclxuICAgIHBhZGRpbmc6MS41cmVtO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1icm93bik7IFxyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBncmlkLWNvbHVtbjoxLzM7XHJcbn1cclxuXHJcbnVse1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOm5vbmU7XHJcbn1cclxuXHJcblxyXG4uc2lkZWJhcntcclxuICAgIGJhY2tncm91bmQ6dmFyKC0tc2lkZWJhci13aGl0ZSk7IFxyXG4gICAgZ3JpZC1jb2x1bW46MS8yOyBcclxuICAgIHBhZGRpbmc6MnJlbTtcclxufVxyXG5cclxuLnNpZGViYXIgbGl7XHJcbiAgICBwYWRkaW5nOjAuOHJlbTtcclxuICAgIGZvbnQtc2l6ZToxLjJyZW07XHJcbiAgICBkaXNwbGF5OmZsZXg7IFxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDouNXJlbTsgIFxyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEwMCUpO1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOjhweDtcclxufVxyXG5cclxubGk6aG92ZXIge1xyXG4gICAgLyogYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwwLjIpLCByZ2JhKDAsMCwwLDAuMikpOyAgKi9cclxuICAgIGJhY2tncm91bmQ6dmFyKC0tZGFya2VyLWJhY2tncm91bmQpOyBcclxufVxyXG5cclxubGk6YWN0aXZle1xyXG4gICAgZm9udC13ZWlnaHQ6NzAwOyBcclxufVxyXG5cclxuaDJ7XHJcbiAgICBwYWRkaW5nOjAuOHJlbTtcclxufVxyXG5cclxuLmNvbnRlbnR7XHJcbiAgICBwYWRkaW5nOjI0cHg7IFxyXG4gICAgYmFja2dyb3VuZDp2YXIoLS1jb250ZW50LXdoaXRlKTsgXHJcbn1cclxuXHJcbnN2Z3tcclxuICAgIGhlaWdodDoxLjVyZW07XHJcbiAgICB3aWR0aDoxLjVyZW07XHJcbn1cclxuXHJcbi5mb290ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOnZhcigtLXByaW1hcnktYnJvd24pOyBcclxuICAgIHBhZGRpbmc6MXJlbTtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi5hZGRpdGlvbi1mb3Jte1xyXG4gICAgLyogYmFja2dyb3VuZDp3aGl0ZTsgKi9cclxuICAgIGRpc3BsYXk6Z3JpZDsgXHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgIFxyXG4gICAgd2lkdGg6MzAwcHg7IFxyXG4gICAgZ2FwOjhweDtcclxufVxyXG5cclxuLnNpZGViYXIgLmFkZGl0aW9uLWZvcm17XHJcbiAgICB3aWR0aDoxMDAlOyBcclxufVxyXG5cclxuLmFkZGl0aW9uLWZvcm0gKntcclxuICAgIHdpZHRoOjEwMCU7IFxyXG4gICAgcGFkZGluZzo0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjRweDtcclxufVxyXG5cclxuLmFkZC1idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kOnZhcigtLWxpZ2h0Z3JlZW4pO1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7IFxyXG4gICAgYm9yZGVyOm5vbmU7IFxyXG4gICAgY29sb3I6d2hpdGU7IFxyXG59XHJcblxyXG4uYnV0dG9uc3tcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGdhcDoyMHB4O1xyXG59XHJcblxyXG4uY2FuY2VsLWJ1dHRvbntcclxuICAgIGJhY2tncm91bmQ6dmFyKC0tcmVkKTsgXHJcbiAgICBjdXJzb3I6cG9pbnRlcjsgXHJcbiAgICBib3JkZXI6bm9uZTsgXHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuLmFkZC1wcm9qZWN0c3tcclxuICAgIGZvbnQtc2l6ZToxLjJyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOjhweDtcclxuICAgIHBhZGRpbmc6OHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbToyMHB4O1xyXG4gICAgZGlzcGxheTpmbGV4OyBcclxuICAgIGdhcDowLjVyZW07XHJcbiAgICBjdXJzb3I6cG9pbnRlcjsgXHJcbn1cclxuXHJcbi5hZGQtcHJvamVjdHM6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOnZhcigtLWRhcmtlci1iYWNrZ3JvdW5kKTsgXHJcbn1cclxuLnByb2plY3QtY2FyZHtcclxuICAgIHBhZGRpbmc6MTZweDtcclxufVxyXG5cclxuLnByb2plY3QtY2FyZDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDAuNSkpOyBcclxufVxyXG5cclxuLmFkZC10YXNrc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LXNpemU6MS4ycmVtO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDowLjVyZW07XHJcbiAgICBwYWRkaW5nOjEycHg7IFxyXG4gICAgYm9yZGVyLXJhZGl1czo4cHg7IFxyXG4gICAgY3Vyc29yOnBvaW50ZXI7IFxyXG59XHJcblxyXG4uYWRkLXRhc2tzOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDp2YXIoLS1kYXJrZXItYmFja2dyb3VuZCk7IFxyXG59XHJcbi5jb250ZW50LXRvcHtcclxuICAgIGRpc3BsYXk6ZmxleDsgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW4tYm90dG9tOjI0cHg7XHJcbiAgICB3aWR0aDoxMDAlOyBcclxufVxyXG5cclxuLnRhc2stZGlzcGxheXtcclxuICAgIGRpc3BsYXk6ZmxleDsgXHJcbiAgICBwYWRkaW5nOjE2cHg7XHJcbiAgICB3aWR0aDoxMDAlOyBcclxuICAgIGZvbnQtc2l6ZToxLjJyZW07XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6NHB4O1xyXG59XHJcblxyXG4udGFzay1kaXNwbGF5OmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4xKSwgcmdiYSgwLCAwLCAwLCAwLjEpKTtcclxufVxyXG5cclxuLnRhc2stZGlzcGxheS1yaWdodC1zaWRle1xyXG4gICAgZGlzcGxheTpmbGV4OyBcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIGdhcDoyMHB4O1xyXG59XHJcblxyXG4udGFzay10aXRsZXtcclxuICAgIGZvbnQtd2VpZ2h0OjcwMDsgXHJcbiAgICAvKiBmb250LXNpemU6MS4xLnJlbTsgICovXHJcbn1cclxuXHJcbi50YXNrLWRpc3BsYXktcmlnaHQtc2lkZSA+IGlucHV0IHtcclxuICAgIC8qIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgKi9cclxuICAgIGhlaWdodDoxLjJyZW07XHJcbiAgICB3aWR0aDoxLjJyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOjUwJTsgXHJcbn1cclxuXHJcbi50YXNrLWRpc3BsYXktcmlnaHQtc2lkZT5pbnB1dDphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDpkYXJrZ3JleTtcclxufVxyXG5cclxuLnByaW9yaXR5e1xyXG4gICAgaGVpZ2h0OjEuMnJlbTtcclxuICAgIHdpZHRoOjEuMnJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6NTAlOyBcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFdBQVc7SUFDWCxrSkFBa0o7SUFDbEosd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixzRUFBc0U7QUFDMUU7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsUUFBUTtJQUNSLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGdDQUFnQztJQUNoQyxXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7O0FBR0E7SUFDSSwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsU0FBUztJQUNULHdCQUF3QjtJQUN4QixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUVBQW1FO0lBQ25FLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsV0FBVztJQUNYLE9BQU87QUFDWDs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFFBQVE7QUFDWjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osVUFBVTtJQUNWLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDO0FBQ0E7SUFDSSxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsOEJBQThCO0lBQzlCLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtRUFBbUU7QUFDdkU7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGVBQWU7SUFDZix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5LGh0bWx7XFxyXFxuICAgIGhlaWdodDoxMDAlOyBcXHJcXG4gICAgZm9udC1mYW1pbHk6c3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxyXFxuICAgIC0tcHJpbWFyeS1icm93bjogIzQwMzcyODsgXFxyXFxuICAgIC0tc2lkZWJhci13aGl0ZTojZGRkOyBcXHJcXG4gICAgLS1jb250ZW50LXdoaXRlOiNlZWU7IFxcclxcbiAgICAtLXJlZDogI2ZmOWM5YztcXHJcXG4gICAgLS1saWdodGdyZWVuOiAjOWZmZjljO1xcclxcbiAgICAtLWRhcmtlci1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwwLjEpLCByZ2JhKDAsMCwwLDAuMSkpOyBcXHJcXG59XFxyXFxuXFxyXFxuKntcXHJcXG4gICAgcGFkZGluZzowOyBcXHJcXG4gICAgbWFyZ2luOjA7IFxcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4ud3JhcHBlcntcXHJcXG4gICAgaGVpZ2h0OjEwMCU7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDsgXFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5taWRkbGUtc2VjdGlvbntcXHJcXG4gICAgZmxleC1ncm93OjE7XFxyXFxuICAgIGRpc3BsYXk6Z3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVye1xcclxcbiAgICBmb250LXNpemU6MS41cmVtO1xcclxcbiAgICBwYWRkaW5nOjEuNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1icm93bik7IFxcclxcbiAgICBjb2xvcjp3aGl0ZTtcXHJcXG4gICAgZ3JpZC1jb2x1bW46MS8zO1xcclxcbn1cXHJcXG5cXHJcXG51bHtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOm5vbmU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5zaWRlYmFye1xcclxcbiAgICBiYWNrZ3JvdW5kOnZhcigtLXNpZGViYXItd2hpdGUpOyBcXHJcXG4gICAgZ3JpZC1jb2x1bW46MS8yOyBcXHJcXG4gICAgcGFkZGluZzoycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciBsaXtcXHJcXG4gICAgcGFkZGluZzowLjhyZW07XFxyXFxuICAgIGZvbnQtc2l6ZToxLjJyZW07XFxyXFxuICAgIGRpc3BsYXk6ZmxleDsgXFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDouNXJlbTsgIFxcclxcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTAwJSk7XFxyXFxuICAgIGN1cnNvcjpwb2ludGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOjhweDtcXHJcXG59XFxyXFxuXFxyXFxubGk6aG92ZXIge1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDAuMiksIHJnYmEoMCwwLDAsMC4yKSk7ICAqL1xcclxcbiAgICBiYWNrZ3JvdW5kOnZhcigtLWRhcmtlci1iYWNrZ3JvdW5kKTsgXFxyXFxufVxcclxcblxcclxcbmxpOmFjdGl2ZXtcXHJcXG4gICAgZm9udC13ZWlnaHQ6NzAwOyBcXHJcXG59XFxyXFxuXFxyXFxuaDJ7XFxyXFxuICAgIHBhZGRpbmc6MC44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudHtcXHJcXG4gICAgcGFkZGluZzoyNHB4OyBcXHJcXG4gICAgYmFja2dyb3VuZDp2YXIoLS1jb250ZW50LXdoaXRlKTsgXFxyXFxufVxcclxcblxcclxcbnN2Z3tcXHJcXG4gICAgaGVpZ2h0OjEuNXJlbTtcXHJcXG4gICAgd2lkdGg6MS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVye1xcclxcbiAgICBiYWNrZ3JvdW5kOnZhcigtLXByaW1hcnktYnJvd24pOyBcXHJcXG4gICAgcGFkZGluZzoxcmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXHJcXG4gICAgY29sb3I6d2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5hZGRpdGlvbi1mb3Jte1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kOndoaXRlOyAqL1xcclxcbiAgICBkaXNwbGF5OmdyaWQ7IFxcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgIFxcclxcbiAgICB3aWR0aDozMDBweDsgXFxyXFxuICAgIGdhcDo4cHg7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIC5hZGRpdGlvbi1mb3Jte1xcclxcbiAgICB3aWR0aDoxMDAlOyBcXHJcXG59XFxyXFxuXFxyXFxuLmFkZGl0aW9uLWZvcm0gKntcXHJcXG4gICAgd2lkdGg6MTAwJTsgXFxyXFxuICAgIHBhZGRpbmc6NHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1idXR0b257XFxyXFxuICAgIGJhY2tncm91bmQ6dmFyKC0tbGlnaHRncmVlbik7XFxyXFxuICAgIGN1cnNvcjpwb2ludGVyOyBcXHJcXG4gICAgYm9yZGVyOm5vbmU7IFxcclxcbiAgICBjb2xvcjp3aGl0ZTsgXFxyXFxufVxcclxcblxcclxcbi5idXR0b25ze1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGdhcDoyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FuY2VsLWJ1dHRvbntcXHJcXG4gICAgYmFja2dyb3VuZDp2YXIoLS1yZWQpOyBcXHJcXG4gICAgY3Vyc29yOnBvaW50ZXI7IFxcclxcbiAgICBib3JkZXI6bm9uZTsgXFxyXFxuICAgIGNvbG9yOndoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXByb2plY3Rze1xcclxcbiAgICBmb250LXNpemU6MS4ycmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOjhweDtcXHJcXG4gICAgcGFkZGluZzo4cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206MjBweDtcXHJcXG4gICAgZGlzcGxheTpmbGV4OyBcXHJcXG4gICAgZ2FwOjAuNXJlbTtcXHJcXG4gICAgY3Vyc29yOnBvaW50ZXI7IFxcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXByb2plY3RzOmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kOnZhcigtLWRhcmtlci1iYWNrZ3JvdW5kKTsgXFxyXFxufVxcclxcbi5wcm9qZWN0LWNhcmR7XFxyXFxuICAgIHBhZGRpbmc6MTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY2FyZDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMC41KSk7IFxcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRhc2tze1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmb250LXNpemU6MS4ycmVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6MC41cmVtO1xcclxcbiAgICBwYWRkaW5nOjEycHg7IFxcclxcbiAgICBib3JkZXItcmFkaXVzOjhweDsgXFxyXFxuICAgIGN1cnNvcjpwb2ludGVyOyBcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10YXNrczpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZDp2YXIoLS1kYXJrZXItYmFja2dyb3VuZCk7IFxcclxcbn1cXHJcXG4uY29udGVudC10b3B7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDsgXFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbToyNHB4O1xcclxcbiAgICB3aWR0aDoxMDAlOyBcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZGlzcGxheXtcXHJcXG4gICAgZGlzcGxheTpmbGV4OyBcXHJcXG4gICAgcGFkZGluZzoxNnB4O1xcclxcbiAgICB3aWR0aDoxMDAlOyBcXHJcXG4gICAgZm9udC1zaXplOjEuMnJlbTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBjdXJzb3I6cG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czo0cHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWRpc3BsYXk6aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuMSksIHJnYmEoMCwgMCwgMCwgMC4xKSk7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWRpc3BsYXktcmlnaHQtc2lkZXtcXHJcXG4gICAgZGlzcGxheTpmbGV4OyBcXHJcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcclxcbiAgICBnYXA6MjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stdGl0bGV7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OjcwMDsgXFxyXFxuICAgIC8qIGZvbnQtc2l6ZToxLjEucmVtOyAgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZGlzcGxheS1yaWdodC1zaWRlID4gaW5wdXQge1xcclxcbiAgICAvKiAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7ICovXFxyXFxuICAgIGhlaWdodDoxLjJyZW07XFxyXFxuICAgIHdpZHRoOjEuMnJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czo1MCU7IFxcclxcbn1cXHJcXG5cXHJcXG4udGFzay1kaXNwbGF5LXJpZ2h0LXNpZGU+aW5wdXQ6YWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZDpkYXJrZ3JleTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5e1xcclxcbiAgICBoZWlnaHQ6MS4ycmVtO1xcclxcbiAgICB3aWR0aDoxLjJyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6NTAlOyBcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsInNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJyk7IFxyXG5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdpbmJveCcpOyBcclxuc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgncHJvamVjdHMnKTtcclxuY29uc3QgY29udGVudEhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1oZWFkaW5nJyk7XHJcbmxldCBhZGRUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFza3MnKTtcclxuY29uc3Qgc2Vzc2lvblByb2plY3RzID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcclxuY29uc3QgcHJvamVjdHMgPSBbXTsgXHJcbmlmKHNlc3Npb25Qcm9qZWN0cyAhPT0gbnVsbCkge1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHNlc3Npb25Qcm9qZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHByb2plY3RzLnB1c2goc2Vzc2lvblByb2plY3RzW2ldKTsgXHJcbiAgICB9XHJcbn1cclxuY29uc3QgaW5ib3hUYXNrQXJyYXkgPSBbXTsgXHJcbmNvbnN0IHNlc3Npb25JbmJveCA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnaW5ib3gnKSk7IFxyXG5pZihzZXNzaW9uSW5ib3ggIT09IG51bGwpIHtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCAgc2Vzc2lvbkluYm94Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaW5ib3hUYXNrQXJyYXkucHVzaChzZXNzaW9uSW5ib3hbaV0pO1xyXG4gICAgfVxyXG59XHJcbmNvbnN0IGluYm94UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbmJveCcpOyBcclxuY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtbGlzdCcpOyBcclxuXHJcbmNvbnN0IHRhc2sgPSAodGl0bGUsZHVlRGF0ZSkgPT4ge1xyXG4gICAgbGV0IHN0YXR1cyA9ICdpbmNvbXBsZXRlJzsgXHJcbiAgICByZXR1cm4ge3RpdGxlLGR1ZURhdGUsIHN0YXR1c30gIFxyXG59XHJcblxyXG5jbGFzcyBQYWdle1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgYXJyYXkgKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTsgXHJcbiAgICAgICAgdGhpcy5hcnJheSA9IGFycmF5OyBcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZW1wdHlFbGVtZW50KGl0ZW0pIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtpdGVtLmNsYXNzTmFtZX1gKTsgXHJcbiAgICB3aGlsZShlbGVtZW50LmZpcnN0RWxlbWVudENoaWxkKSB7XHJcbiAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0RWxlbWVudENoaWxkKTsgXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFByb2plY3RGb3JtKCkge1xyXG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtbGlzdCcpO1xyXG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0cy1jb250YWluZXInKTsgXHJcbiAgICBjb25zdCBhZGRQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdHMnKTtcclxuICAgIGFkZFByb2plY3RzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXHJcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTsgXHJcbiAgICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCdhZGRpdGlvbi1mb3JtJyk7IFxyXG4gICAgcHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9ICdncmlkJzsgXHJcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpOyBcclxuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXHJcbiAgICBidXR0b25zLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnMnKTsgXHJcbiAgICBjb25zdCBzdWJtaXRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7IFxyXG4gICAgc3VibWl0UHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7IFxyXG4gICAgc3VibWl0UHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtYnV0dG9uJyk7IFxyXG4gICAgc3VibWl0UHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgUHJvamVjdCc7IFxyXG4gICAgY29uc3QgY2FuY2VsUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOyBcclxuICAgIGNhbmNlbFByb2plY3RCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpOyBcclxuICAgIGNhbmNlbFByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2FuY2VsLWJ1dHRvbicpOyBcclxuICAgIGNhbmNlbFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJzsgXHJcbiAgICBidXR0b25zLmFwcGVuZENoaWxkKHN1Ym1pdFByb2plY3RCdXR0b24pOyBcclxuICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoY2FuY2VsUHJvamVjdEJ1dHRvbik7IFxyXG4gICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpOyBcclxuICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGJ1dHRvbnMpOyBcclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybSk7IFxyXG5cclxuICAgIHN1Ym1pdFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyBcclxuICAgICAgICBlbXB0eUVsZW1lbnQocHJvamVjdExpc3QpOyBcclxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFBhZ2UocHJvamVjdE5hbWUudmFsdWUsIFtdKTsgXHJcbiAgICAgICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCdwcm9qZWN0cycpOyBcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7IFxyXG4gICAgICAgIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IFxyXG4gICAgICAgIGFkZFByb2plY3RzLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjsgXHJcbiAgICAgICAgcmVuZGVyUHJvamVjdExpc3QoKTsgXHJcbiAgICB9KVxyXG5cclxuICAgIGNhbmNlbFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyBcclxuICAgICAgICBhZGRQcm9qZWN0cy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnOyBcclxuICAgIH0pXHJcbiAgICBcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdExpc3QoKSB7XHJcbiAgICBcclxuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWxpc3QnKTsgXHJcbiAgICBmb3IobGV0IHByb2plY3Qgb2YgcHJvamVjdHMpIHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7IFxyXG4gICAgICAgIHByb2plY3RDYXJkLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY2FyZCcpOyBcclxuICAgICAgICBwcm9qZWN0Q2FyZC5zZXRBdHRyaWJ1dGUoJ2RhdGEta2V5JywgcHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KSk7IFxyXG4gICAgICAgIHByb2plY3RDYXJkLnRleHRDb250ZW50ID0gYCR7cHJvamVjdC5uYW1lfWA7XHJcbiAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdENhcmQpOyBcclxuICAgICAgICBwcm9qZWN0Q2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBwYWdlTG9hZGVyKHByb2plY3RDYXJkLmdldEF0dHJpYnV0ZSgnZGF0YS1rZXknKSk7IFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaW5ib3hQYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHBhZ2VMb2FkZXIoKTsgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhZ2VMb2FkZXIoaW5kZXgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnRHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtZ3JpZCcpOyBcclxuICAgIGVtcHR5RWxlbWVudChwcm9qZWN0TGlzdCk7IFxyXG4gICAgcmVuZGVyUHJvamVjdExpc3QoKTtcclxuICAgIGVtcHR5RWxlbWVudChjb250ZW50R3JpZCk7XHJcbiAgICBpZihpbmRleCkge1xyXG4gICAgICAgIHJlbmRlckFycmF5KHByb2plY3RzW2luZGV4XS5hcnJheSk7IFxyXG4gICAgfWVsc2Uge1xyXG4gICAgICAgIHJlbmRlckFycmF5KGluYm94VGFza0FycmF5KTsgXHJcbiAgICB9XHJcbiAgICBsZXQgYWRkVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2tzJyk7IFxyXG4gICAgbGV0IG5ld0FkZFRhc2tzID0gYWRkVGFza3MuY2xvbmVOb2RlKHRydWUpOyBcclxuICAgIGFkZFRhc2tzLnJlcGxhY2VXaXRoKG5ld0FkZFRhc2tzKTtcclxuICAgIGlmKGluZGV4KSB7XHJcbiAgICAgICAgY29udGVudEhlYWRpbmcudGV4dENvbnRlbnQgPSBwcm9qZWN0c1tpbmRleF0ubmFtZTsgXHJcbiAgICAgICAgbmV3QWRkVGFza3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgYWRkVGFza0Zvcm0ocHJvamVjdHNbaW5kZXhdLmFycmF5KTsgXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZW5kZXJBcnJheShwcm9qZWN0c1tpbmRleF0uYXJyYXkpOyBcclxuICAgIH1lbHNlIGlmKCFpbmRleCkge1xyXG4gICAgICAgIGNvbnRlbnRIZWFkaW5nLnRleHRDb250ZW50ID0gXCJJbmJveFwiOyBcclxuICAgICAgICAgICAgbmV3QWRkVGFza3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgYWRkVGFza0Zvcm0oaW5ib3hUYXNrQXJyYXkpOyBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRUYXNrRm9ybShhcnJheSkge1xyXG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtdG9wJyk7IFxyXG4gICAgY29uc3QgYWRkVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2tzJyk7IFxyXG4gICAgYWRkVGFza3Muc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxuICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgdGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiOyBcclxuICAgIHRhc2tGb3JtLmNsYXNzTGlzdC5hZGQoJ2FkZGl0aW9uLWZvcm0nKTsgXHJcbiAgICBjb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTsgXHJcbiAgICBpbnB1dFRpdGxlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7IFxyXG4gICAgY29uc3QgaW5wdXREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTsgXHJcbiAgICBpbnB1dERhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcclxuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOyBcclxuICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtYnV0dG9uJyk7IFxyXG4gICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGRcIjsgXHJcbiAgICBhZGRCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpOyBcclxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY2FuY2VsQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTsgXHJcbiAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiOyBcclxuICAgIGNhbmNlbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjYW5jZWwtYnV0dG9uJyk7IFxyXG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcclxuICAgIGJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnYnV0dG9ucycpOyBcclxuICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTsgXHJcbiAgICBidXR0b25zLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7IFxyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHRhc2tGb3JtKTsgXHJcbiAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZChpbnB1dFRpdGxlKTtcclxuICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKGlucHV0RGF0ZSk7IFxyXG4gICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoYnV0dG9ucyk7IFxyXG5cclxuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXHJcbiAgICAgICAgYWRkVGFza3Muc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiOyBcclxuICAgIH0pXHJcblxyXG4gICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgXHJcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IHRhc2soaW5wdXRUaXRsZS52YWx1ZSwgaW5wdXREYXRlLnZhbHVlKTsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyAgICAgICAgICAgICBcclxuICAgICAgICBhZGRUYXNrcy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7IFxyXG4gICAgICAgIGlmKGFycmF5ID09PSBpbmJveFRhc2tBcnJheSkge1xyXG4gICAgICAgICAgICBhZGRUYXNrVG9MaWJyYXJ5KGluYm94VGFza0FycmF5LCBuZXdUYXNrKTsgXHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ2luYm94Jyk7IFxyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdpbmJveCcsIEpTT04uc3RyaW5naWZ5KGluYm94VGFza0FycmF5KSk7XHJcblxyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgaW5ib3hUYXNrQXJyYXkucHVzaChuZXdUYXNrKTsgXHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ2luYm94Jyk7IFxyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdpbmJveCcsIEpTT04uc3RyaW5naWZ5KGluYm94VGFza0FycmF5KSk7XHJcbiAgICAgICAgICAgIGFkZFRhc2tUb0xpYnJhcnkoYXJyYXksIG5ld1Rhc2spOyBcclxuICAgICAgICAgICAgcmVtb3ZlVGFza0Zyb21ET00oYXJyYXkpOyBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRUYXNrVG9MaWJyYXJ5KGFycmF5LCB0YXNrKSB7XHJcbiAgICBhcnJheS5wdXNoKHRhc2spOyBcclxuICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ3Byb2plY3RzJyk7IFxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShgcHJvamVjdHNgLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xyXG4gICAgcmVuZGVyQXJyYXkoYXJyYXkpOyBcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlVGFza0Zyb21BcnJheShhcnJheTEsIGluZGV4KSB7XHJcbiAgICBhcnJheTEuc3BsaWNlKGluZGV4LCAxKTsgXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCdwcm9qZWN0cycpOyBcclxuICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ2luYm94Jyk7IFxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpOyBcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2luYm94JywgSlNPTi5zdHJpbmdpZnkoaW5ib3hUYXNrQXJyYXkpKTsgXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVUYXNrRnJvbURPTShhcnJheSkge1xyXG4gICAgY29uc3QgcmFkaW9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbXBsZXRlLXRhc2snKTtcclxuXHJcbiAgICByYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3QgcmFkaW9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbXBsZXRlLXRhc2snKTsgXHJcbiAgICAgICAgcmVuZGVyQXJyYXkoYXJyYXkpOyBcclxuICAgIH0pKVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJBcnJheShhcnJheSkge1xyXG5cclxuICAgIGNvbnN0IGNvbnRlbnRHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtZ3JpZCcpOyBcclxuICAgIGVtcHR5RWxlbWVudChjb250ZW50R3JpZCk7IFxyXG4gICAgZm9yKGxldCBpdGVtIG9mIGFycmF5KSB7XHJcbiAgICAgICAgY29uc3QgdGFza0Rpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXHJcbiAgICAgICAgdGFza0Rpc3BsYXkuY2xhc3NMaXN0LmFkZChcInRhc2stZGlzcGxheVwiKTsgXHJcbiAgICAgICAgdGFza0Rpc3BsYXkuc2V0QXR0cmlidXRlKCdkYXRhLWtleScsIGAke2FycmF5LmluZGV4T2YoaXRlbSl9YCk7IFxyXG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTsgXHJcbiAgICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gaXRlbS50aXRsZTsgXHJcbiAgICAgICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUnKTsgXHJcbiAgICAgICAgY29uc3QgdGFza0Rpc3BsYXlSaWdodFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXHJcbiAgICAgICAgdGFza0Rpc3BsYXlSaWdodFNpZGUuY2xhc3NMaXN0LmFkZCgndGFzay1kaXNwbGF5LXJpZ2h0LXNpZGUnKTsgXHJcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXHJcbiAgICAgICAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgdGFza0R1ZURhdGUudGV4dENvbnRlbnQgPSBpdGVtLmR1ZURhdGU7IFxyXG4gICAgICAgIGNvbnN0IHN0YXR1c1JhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTsgXHJcbiAgICAgICAgc3RhdHVzUmFkaW8uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7IFxyXG4gICAgICAgIHN0YXR1c1JhZGlvLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnY29tcGxldGUnKTsgXHJcbiAgICAgICAgc3RhdHVzUmFkaW8uc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb21wbGV0ZS10YXNrJyk7IFxyXG4gICAgICAgIHN0YXR1c1JhZGlvLnNldEF0dHJpYnV0ZSgnZGF0YS1rZXknLCBgJHthcnJheS5pbmRleE9mKGl0ZW0pfWApO1xyXG4gICAgICAgIHN0YXR1c1JhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJlbW92ZVRhc2tGcm9tQXJyYXkoYXJyYXksIGFycmF5LmluZGV4T2YoaXRlbSkpOyBcclxuICAgICAgICAgICAgcmVuZGVyQXJyYXkoYXJyYXkpOyAgICAgICAgICAgXHJcbiAgICAgICAgfSkgICBcclxuICAgICAgICBjb250ZW50R3JpZC5hcHBlbmRDaGlsZCh0YXNrRGlzcGxheSk7IFxyXG4gICAgICAgIHRhc2tEaXNwbGF5LmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7IFxyXG4gICAgICAgIHRhc2tEaXNwbGF5UmlnaHRTaWRlLmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlKTsgXHJcbiAgICAgICAgdGFza0Rpc3BsYXlSaWdodFNpZGUuYXBwZW5kQ2hpbGQoc3RhdHVzUmFkaW8pOyBcclxuICAgICAgICB0YXNrRGlzcGxheS5hcHBlbmRDaGlsZCh0YXNrRGlzcGxheVJpZ2h0U2lkZSk7IFxyXG5cclxuICAgIH1cclxufSBcclxuXHJcbmV4cG9ydCB7cmVuZGVyQXJyYXksIGFkZFRhc2tGb3JtLCBjb250ZW50SGVhZGluZywgcmVtb3ZlVGFza0Zyb21ET00sIGFkZFByb2plY3RGb3JtLCBwYWdlTG9hZGVyfTsgXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXHJcbmltcG9ydCB7Y29udGVudEhlYWRpbmcsIGFkZFByb2plY3RGb3JtLCBwYWdlTG9hZGVyfSBmcm9tICcuL2NvbXBvbmVudHMnOyAgXHJcblxyXG5jb250ZW50SGVhZGluZy50ZXh0Q29udGVudCA9ICdJbmJveCc7IFxyXG5cclxuZnVuY3Rpb24gY29tcG9uZW50KCkge1xyXG4gICAgY29uc3QgYWRkUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3RzJyk7IFxyXG5cclxuICAgIHBhZ2VMb2FkZXIoKTsgXHJcblxyXG4gICAgYWRkUHJvamVjdHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBhZGRQcm9qZWN0Rm9ybSgpOyBcclxuICAgICAgICBcclxuICAgIH0pXHJcbn1cclxuXHJcbmNvbXBvbmVudCgpOyAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=