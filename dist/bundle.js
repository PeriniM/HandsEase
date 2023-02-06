/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  \\r\\n  font-family: 'Roboto', sans-serif;\\r\\n  font-size: 16px;\\r\\n  line-height: 1.5;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n/* Mirror and hide the video element */\\r\\nvideo {\\r\\n   display: none;  \\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://three-mediapipe-template/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://three-mediapipe-template/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://three-mediapipe-template/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://three-mediapipe-template/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://three-mediapipe-template/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://three-mediapipe-template/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://three-mediapipe-template/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://three-mediapipe-template/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://three-mediapipe-template/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://three-mediapipe-template/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\nwindow.detections = {};\r\n// create a video element\r\nconst videoElement = document.createElement('video');\r\nvideoElement.setAttribute('autoplay', '');\r\nvideoElement.setAttribute('muted', '');\r\nvideoElement.setAttribute('playsinline', '');\r\nvideoElement.width = 640;\r\nvideoElement.height = 480;\r\ndocument.body.appendChild(videoElement);\r\n\r\nfunction gotHands(results) {\r\n    detections = results;\r\n    //console.log(detections);\r\n}\r\n\r\nconst hands = new Hands({locateFile: (file) => {\r\n  return `https://cdn.jsdelivr.net/npm/@mediapipe/hands@${window.VERSION}/${file}`;\r\n}});\r\nhands.setOptions({\r\n  //selfieMode: true,\r\n  maxNumHands: 2,\r\n  modelComplexity: 1,\r\n  minDetectionConfidence: 0.8,\r\n  minTrackingConfidence: 0.5\r\n});\r\nhands.onResults(gotHands);\r\n// image from camera needs to be flipped before being fed to the model\r\nconst flipHorizontal = true;\r\nhands.setOptions({flipHorizontal: flipHorizontal});\r\nconst camera = new Camera(videoElement, {\r\n  onFrame: async () => {\r\n    await hands.send({image: videoElement});\r\n  },\r\n  width: 640,\r\n  height: 480\r\n});\r\ncamera.start();\n\n//# sourceURL=webpack://three-mediapipe-template/./src/index.js?");

/***/ }),

/***/ "./src/sketch3d.js":
/*!*************************!*\
  !*** ./src/sketch3d.js ***!
  \*************************/
/***/ (() => {

eval("let canvas;\r\n\r\nlet sketch = function(p){\r\n  \r\n  let old_detection_left = {};\r\n  let new_detection_left = {};\r\n  let old_detection_right = {};\r\n  let new_detection_right = {};\r\n\r\n  let old_detection_norm_left = 0.0;\r\n  let old_detection_norm_right = 0.0;\r\n  let new_detection_norm_left = 0.0;\r\n  let new_detection_norm_right = 0.0;\r\n\r\n  let l_threshold = 0.015;\r\n  let r_threshold = 0.015;\r\n  let indeces = [];\r\n  let index_l = [];\r\n  let index_r = [];\r\n  let index_sorted = [];\r\n  let count_l = 0;\r\n  let count_r = 0;\r\n\r\n  let easycam;\r\n  p.setup = function(){\r\n    p.pixelDensity(2);\r\n    canvas = p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);\r\n    canvas.id(\"canvas\");\r\n    //flip canvas horizontally\r\n    canvas.style('transform', 'scale(-1, 1)');\r\n    canvas.style('filter', 'FlipH');\r\n    canvas.style('-moz-transform', 'scale(-1, 1)');\r\n    canvas.style('-webkit-transform', 'scale(-1, 1)');\r\n    canvas.style('-o-transform', 'scale(-1, 1)');\r\n    \r\n    p.colorMode(p.HSB);\r\n    easycam = p.createEasyCam(this._renderer, {distance:900});\r\n    p.setAttributes('antialias', true);\r\n    //easycam.setDefaultInterpolationTime(2000);\r\n\r\n  }\r\n\r\n  p.draw = function(){\r\n    //p.clear();\r\n    p.background('#00524E');\r\n    p.translate(-p.width/2,-p.height/2,0);\r\n    // projection\r\n    var cam_dist = easycam.getDistance();\r\n    var oscale = cam_dist * 0.001;\r\n    var ox = p.width  / 2 * oscale;\r\n    var oy = p.height / 2 * oscale;\r\n    p.ortho(-ox, +ox, -oy, +oy, -10000, 10000);\r\n    easycam.setPanScale(0.004 / Math.sqrt(cam_dist));\r\n    p.ambientLight(100);\r\n    p.pointLight(255, 255, 255, 0, 0, 0);\r\n    if(detections != undefined){\r\n      if(detections.multiHandLandmarks != undefined){ \r\n        indeces = p.handsCalculations(detections.multiHandLandmarks);\r\n        indeces[0].push('l');\r\n        indeces[1].push('r');\r\n        if (indeces[2]<40.0){\r\n          if (count_l == 0){\r\n            index_l.push(indeces[0]);\r\n            count_l = 1;\r\n          }\r\n          else{\r\n            index_l.push(linearInterpolation(indeces[0], index_l[index_l.length-1], 0.8, 'l'));\r\n          }\r\n        }\r\n        else{\r\n          count_l = 0;\r\n        }\r\n        if (indeces[3]<40.0){\r\n          if (count_r == 0){\r\n            index_r.push(indeces[1]);\r\n            count_r = 1;\r\n          }\r\n          else{\r\n            index_r.push(linearInterpolation(indeces[1], index_r[index_r.length-1], 0.8, 'r'));\r\n          }\r\n        }\r\n        else{\r\n          count_r = 0;\r\n        }\r\n        index_sorted = index_l.concat(index_r);\r\n        index_sorted.sort(function(a, b){return Math.abs(a[2]) - Math.abs(b[2])});\r\n        //p.blendMode(SUBTRACT);\r\n        for (let i = 0; i < index_sorted.length; i++) {\r\n          if (index_sorted[i][3] == 'l') {\r\n            p.stroke('#FCD5DB');\r\n            //p.stroke((5*p.frameCount) % 360, 100, 100);\r\n          }\r\n          else if (index_sorted[i][3] == 'r') {\r\n            p.stroke('#ffe1a8');\r\n          }\r\n          p.strokeWeight(Math.abs(index_sorted[i][2] * 400));\r\n          //p.strokeWeight(15);\r\n          p.point(index_sorted[i][0], index_sorted[i][1], Math.abs(index_sorted[i][2] * 10000));\r\n          \r\n        }\r\n      \r\n      }\r\n    }\r\n    //show fps\r\n    //console.log(p.frameRate().toFixed(2));\r\n  }\r\n\r\n  // linearInterpolation function\r\n  function linearInterpolation(a, b, t, hand) {\r\n    let interp = a.map((x, i) => x * (1 - t) + b[i] * t);\r\n    interp[3] = hand;\r\n    return interp;\r\n  }\r\n\r\n  p.handsCalculations = function(detect_hands){\r\n    let tip_index_r = [0,0,0];\r\n    let tip_index_l = [0,0,0];\r\n    let tip_thumb_r = [0,0,0];\r\n    let tip_thumb_l = [0,0,0];\r\n    let dist_it_l;\r\n    let dist_it_r;\r\n    // for each hand\r\n    for(let i=0; i<detect_hands.length; i++){\r\n\r\n      // if left hand\r\n      if(detections.multiHandedness[i].label == \"Left\"){\r\n        new_detection_left = detect_hands[i];\r\n        new_detection_norm_left = p.hands_norm(new_detection_left);\r\n        //console.log(new_detection_norm_left - old_detection_norm_left);\r\n\r\n        if(Math.abs(new_detection_norm_left - old_detection_norm_left) > l_threshold){\r\n          p.drawHands(new_detection_left);\r\n          old_detection_left = new_detection_left;\r\n          old_detection_norm_left = new_detection_norm_left;\r\n          tip_index_l = [new_detection_left[8].x * p.width, new_detection_left[8].y * p.height, new_detection_left[8].z];\r\n          tip_thumb_l = [new_detection_left[4].x * p.width, new_detection_left[4].y * p.height, new_detection_left[4].z];\r\n        }\r\n        else{\r\n          p.drawHands(old_detection_left);\r\n          tip_index_l = [old_detection_left[8].x * p.width, old_detection_left[8].y * p.height, old_detection_left[8].z];\r\n          tip_thumb_l = [old_detection_left[4].x * p.width, old_detection_left[4].y * p.height, old_detection_left[4].z];\r\n        }\r\n        dist_it_l = p.dist(tip_index_l[0],tip_index_l[1],tip_index_l[2],tip_thumb_l[0],tip_thumb_l[1],tip_thumb_l[2]);\r\n      }\r\n\r\n      // if right hand\r\n      else if(detections.multiHandedness[i].label == \"Right\"){\r\n        new_detection_right = detect_hands[i];\r\n        new_detection_norm_right = p.hands_norm(new_detection_right);\r\n\r\n        if(Math.abs(new_detection_norm_right - old_detection_norm_right) > r_threshold){\r\n          p.drawHands(new_detection_right);\r\n          old_detection_right = new_detection_right;\r\n          old_detection_norm_right = new_detection_norm_right;\r\n          tip_index_r = [new_detection_right[8].x * p.width, new_detection_right[8].y * p.height, new_detection_right[8].z];\r\n          tip_thumb_r = [new_detection_right[4].x * p.width, new_detection_right[4].y * p.height, new_detection_right[4].z];\r\n        }\r\n        else{\r\n          p.drawHands(old_detection_right);\r\n          tip_index_r = [old_detection_right[8].x * p.width, old_detection_right[8].y * p.height, old_detection_right[8].z];\r\n          tip_thumb_r = [old_detection_right[4].x * p.width, old_detection_right[4].y * p.height, old_detection_right[4].z];\r\n        }\r\n        dist_it_r = p.dist(tip_index_r[0],tip_index_r[1],tip_index_r[2],tip_thumb_r[0],tip_thumb_r[1],tip_thumb_r[2]);\r\n      }\r\n    }\r\n    return [tip_index_l, tip_index_r, dist_it_l, dist_it_r];\r\n  }\r\n\r\n  p.drawHands = function(detect){\r\n    \r\n    for(let j=0; j<detect.length; j++){\r\n      \r\n      let x = detect[j].x * p.width;\r\n      let y = detect[j].y * p.height;\r\n      let z = detect[j].z;\r\n      p.stroke(0);\r\n      p.strokeWeight(10);\r\n      p.point(x, y);\r\n\r\n    //   p.drawLines(detect,[0, 5, 9, 13, 17, 0]);//palm\r\n    //   p.drawLines(detect,[0, 1, 2, 3 ,4]);//thumb\r\n    //   p.drawLines(detect,[5, 6, 7, 8]);//index finger\r\n    //   p.drawLines(detect,[9, 10, 11, 12]);//middle finger\r\n    //   p.drawLines(detect,[13, 14, 15, 16]);//ring finger\r\n    //   p.drawLines(detect,[17, 18, 19, 20]);//pinky\r\n    }\r\n    \r\n  }\r\n\r\n//create a function that takes in two consecutive multihandlandmarks and calculate the distance between them, then return the distance\r\n  p.hands_norm = function(detect){\r\n    let norm = 0.0; \r\n      for(let j=0; j<detect.length; j++){\r\n        norm += Math.sqrt(detect[j].x**2 + detect[j].y**2 + detect[j].z**2);\r\n      }\r\n    return norm;\r\n  }\r\n\r\n  p.drawLines = function(detect,index){\r\n    p.stroke(0);\r\n    p.strokeWeight(3);\r\n      for(let j=0; j<index.length-1; j++){\r\n        let x = detect[index[j]].x * p.width;\r\n        let y = detect[index[j]].y * p.height;\r\n        // let z = detections.multiHandLandmarks[i][index[j]].z;\r\n\r\n        let _x = detect[index[j+1]].x * p.width;\r\n        let _y = detect[index[j+1]].y * p.height;\r\n        // let _z = detections.multiHandLandmarks[i][index[j+1]].z;\r\n        p.line(x, y, _x, _y);\r\n      }\r\n  }\r\n  p.windowResized = function() {\r\n    p.resizeCanvas(p.windowWidth, p.windowHeight);\r\n    easycam.setViewport([0,0,p.windowWidth, p.windowHeight]);\r\n  }\r\n}\r\n\r\n\r\n\r\nlet myp5 = new p5(sketch);\r\n\n\n//# sourceURL=webpack://three-mediapipe-template/./src/sketch3d.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/sketch3d.js");
/******/ 	
/******/ })()
;