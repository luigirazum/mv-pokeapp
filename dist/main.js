/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/pokeData.js":
/*!*****************************!*\
  !*** ./modules/pokeData.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass PokeData {\r\n    getpokemonInfo = async (idPokemon) => {\r\n      const dataPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)\r\n        .then((response) => response.json());\r\n      const {\r\n        id, name, sprites, types,\r\n      } = dataPokemon;\r\n      const pokemonTypes = [];\r\n      types.forEach((element) => {\r\n        pokemonTypes.push(element.type.name);\r\n      });\r\n      const image = sprites.other.dream_world.front_default;\r\n      return {\r\n        id, name, pokemonTypes, image,\r\n      };\r\n    }\r\n\r\n      getpokemons = async (minidPokemon, maxidPokemon) => {\r\n        const listPokemon = [];\r\n        let dataList;\r\n        for (let i = minidPokemon; i <= maxidPokemon; i += 1) {\r\n          dataList = this.getpokemonInfo(i);\r\n          listPokemon.push(dataList);\r\n        }\r\n        return Promise.all(listPokemon);\r\n      }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PokeData);\r\n\n\n//# sourceURL=webpack://mv-pokeapp/./modules/pokeData.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/popup.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/popup.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".popup {\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    box-sizing: border-box;\\r\\n    top: 0;\\r\\n    padding: 30px 10px;\\r\\n    position: fixed;\\r\\n    background-color: rgba(0, 0, 0, 0.349);\\r\\n    backdrop-filter: blur(3px);\\r\\n    overflow-y: auto;\\r\\n    display: none;\\r\\n  }\\r\\n  \\r\\n  /* scrollbar customization */\\r\\n  .popup::-webkit-scrollbar {\\r\\n    width: 7px;\\r\\n  }\\r\\n  \\r\\n  .popup::-webkit-scrollbar-track {\\r\\n    background-color: antiquewhite;\\r\\n    box-shadow: inset 0 0 5px rgb(151, 151, 151);\\r\\n  }\\r\\n  \\r\\n  .popup::-webkit-scrollbar-thumb {\\r\\n    background: orangered;\\r\\n    border-radius: 15px;\\r\\n  }\\r\\n  \\r\\n  .popup::-webkit-scrollbar-thumb:hover {\\r\\n    background: #b30000;\\r\\n  }\\r\\n  \\r\\n  /* *********** */\\r\\n  \\r\\n  .popup-window {\\r\\n    z-index: 10;\\r\\n    max-width: 600px;\\r\\n    margin: auto;\\r\\n    margin-bottom: 20px;\\r\\n    background-color: white;\\r\\n    padding: 20px;\\r\\n    border-radius: 5px;\\r\\n  }\\r\\n  \\r\\n  .popup-header {\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    align-items: center;\\r\\n  }\\r\\n  \\r\\n  .popup-header-text {\\r\\n    color: orangered;\\r\\n    text-transform: capitalize;\\r\\n    font-size: 2rem;\\r\\n  }\\r\\n  \\r\\n  .x-btn {\\r\\n    font-size: 1.5rem;\\r\\n    cursor: pointer;\\r\\n  }\\r\\n  \\r\\n  .popup-image {\\r\\n    margin: auto;\\r\\n    display: block;\\r\\n    border-radius: 30%;\\r\\n    border-bottom: 1px solid orangered;\\r\\n    background-color: orangered;\\r\\n  }\\r\\n  \\r\\n  \\r\\n  .display {\\r\\n    display: block;\\r\\n  }\\r\\n  \\r\\n  \\r\\n  .d-grid-2col {\\r\\n    display: grid;\\r\\n    grid-template-columns: 1fr;\\r\\n    gap: 10px;\\r\\n  }\\r\\n  \\r\\n  .popup-image-detail {\\r\\n    text-align: center;\\r\\n  }\\r\\n  \\r\\n  .popup-detail-item {\\r\\n    font-size: medium;\\r\\n  }\\r\\n  \\r\\n  @media screen and (min-width: 400px) {\\r\\n    .d-grid-2col {\\r\\n      grid-template-columns: 1fr 1fr;\\r\\n    }\\r\\n  }\\r\\n\\r\\n\\r\\n  .popup-detail-item {\\r\\n    font-size: small;\\r\\n  }\\r\\n  \\r\\n  \\r\\n  /*  comments list  */\\r\\n  \\r\\n  .popup-comment-record {\\r\\n    max-height: 220px;\\r\\n    overflow-y: scroll;\\r\\n  }\\r\\n  \\r\\n  /* comment list scrollbar customization */\\r\\n  \\r\\n  .popup-comment-record::-webkit-scrollbar {\\r\\n    width: 5px;\\r\\n  }\\r\\n  \\r\\n  .popup-comment-record::-webkit-scrollbar-track {\\r\\n    box-shadow: inset 0 0 5px rgb(151, 151, 151);\\r\\n    border-radius: 10px;\\r\\n  }\\r\\n  \\r\\n  .popup-comment-record::-webkit-scrollbar-thumb {\\r\\n    background: rgb(141, 63, 231);\\r\\n    border-radius: 15px;\\r\\n  }\\r\\n  \\r\\n  .popup-comment-record::-webkit-scrollbar-thumb:hover {\\r\\n    background: rgb(179, 153, 211);\\r\\n  }\\r\\n  \\r\\n  .popup-comment-header {\\r\\n    color: rgb(141, 63, 231);\\r\\n    margin-bottom: 5px;\\r\\n    text-align: center;\\r\\n  }\\r\\n  \\r\\n  .popup-comment-list {\\r\\n    list-style-type: none;\\r\\n    padding: 0 5px;\\r\\n  }\\r\\n  \\r\\n  .popup-comment-item {\\r\\n    background-color: rgba(196, 159, 201, 0.144);\\r\\n    margin: 5px 0;\\r\\n    padding: 5px;\\r\\n    border-radius: 5px;\\r\\n    font-size: small;\\r\\n  }\\r\\n  \\r\\n  .popup-comment-author {\\r\\n    font-weight: 600;\\r\\n    font-size: small;\\r\\n  }\\r\\n  \\r\\n  .popup-comment-text {\\r\\n    margin: 5px 0;\\r\\n    color: rgb(80, 80, 80);\\r\\n    font-size: small;\\r\\n  }\\r\\n  \\r\\n  .popup-comment-date {\\r\\n    margin: 5px 0;\\r\\n    color: rgb(141, 63, 231);\\r\\n    font-size: small;\\r\\n  }\\r\\n  \\r\\n  /* New comment */\\r\\n  \\r\\n  .popup-new-comment {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 5px;\\r\\n  }\\r\\n  \\r\\n  .popup-comment-input {\\r\\n    padding: 10px;\\r\\n    font-size: medium;\\r\\n    border: 0;\\r\\n    outline: 0;\\r\\n    border-bottom: 1px solid gainsboro;\\r\\n  }\\r\\n  \\r\\n  .popup-comment-input::placeholder {\\r\\n    color: rgb(170, 170, 170);\\r\\n  }\\r\\n  \\r\\n  .popup-comment-input:focus {\\r\\n    border-bottom: 1px solid rgb(141, 63, 231);\\r\\n  }\\r\\n  \\r\\n  .popup-new-comment-text {\\r\\n    resize: none;\\r\\n  }\\r\\n  \\r\\n  .popup-comment-btn {\\r\\n    padding: 10px 15px;\\r\\n    background-color: rgb(141, 63, 231);\\r\\n    color: white;\\r\\n    cursor: pointer;\\r\\n    border-radius: 5px;\\r\\n    width: fit-content;\\r\\n    align-self: flex-end;\\r\\n  }\\r\\n  \\r\\n  @media screen and (min-width: 400px) {\\r\\n    .d-grid-2col {\\r\\n      grid-template-columns: 1fr 1fr;\\r\\n    }\\r\\n  \\r\\n    .popup-image {\\r\\n      width: 200px;\\r\\n    }\\r\\n  }\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://mv-pokeapp/./src/popup.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Styles for the PokeAPP */\\r\\n\\r\\n/* font family */\\r\\n\\r\\n/* General resets */\\r\\n*,\\r\\n*::after,\\r\\n*::before {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  list-style: none;\\r\\n  box-sizing: border-box;\\r\\n  font-family: rubik, sans-serif;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background: hsl(182deg 100% 50% / 54%);\\r\\n  color: #1d1d1d;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  text-align: center;\\r\\n  color: orange;\\r\\n  background: #f6ff76;\\r\\n  margin: auto auto;\\r\\n  width: 481px;\\r\\n  border: 3px solid #9191f1;\\r\\n  padding: 7px 78px;\\r\\n  border-radius: 18px;\\r\\n}\\r\\n\\r\\n#displayPokemon {\\r\\n  width: 90%;\\r\\n  max-width: 1000px;\\r\\n  margin: 40px auto 100px auto;\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(3, 1fr);\\r\\n  gap: 40px;\\r\\n}\\r\\n\\r\\n.pokecards {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  background-color: rgb(216, 7, 7);\\r\\n  align-items: center;\\r\\n  padding: 17px;\\r\\n  border-radius: 14px;\\r\\n  border: 4px solid #ff000085;\\r\\n}\\r\\n\\r\\n.imgContainer {\\r\\n  background: linear-gradient(180deg, rgb(173, 237, 255) 0%, rgb(127, 225, 252) 50%, rgb(12, 233, 82) 73%, rgb(18, 126, 2) 88%, rgb(1, 97, 10) 100%);\\r\\n  width: 223px;\\r\\n  height: 155px;\\r\\n  margin: 3% 0% 2% 0%;\\r\\n  border-radius: 4px;\\r\\n  border: 3px solid white;\\r\\n}\\r\\n\\r\\n#image {\\r\\n  width: 138px;\\r\\n  height: 120px;\\r\\n  margin: 6% 0% 0% 19%;\\r\\n}\\r\\n\\r\\n.shadow {\\r\\n  background-color: #1d1d1d42;\\r\\n  margin: -2% 0% 0% 19%;\\r\\n  width: 124px;\\r\\n  height: 9px;\\r\\n  border-radius: 59%;\\r\\n}\\r\\n\\r\\nul {\\r\\n  display: flex;\\r\\n  margin: 3% 3% 3% 45%;\\r\\n  gap: 150px;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  width: 198px;\\r\\n  height: 30px;\\r\\n  border-radius: 10%;\\r\\n  color: aliceblue;\\r\\n  font-size: 1.3rem;\\r\\n}\\r\\n\\r\\n.likes {\\r\\n  color: aliceblue;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  margin: 5px 0 0 auto;\\r\\n  gap: 5px;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.iconLike {\\r\\n  width: 30px;\\r\\n  height: 30px;\\r\\n  border-radius: 50%;\\r\\n  font-size: 1.3rem;\\r\\n  color: red;\\r\\n}\\r\\n\\r\\n.likeTxt {\\r\\n  color: aliceblue;\\r\\n}\\r\\n\\r\\n.btnDescription {\\r\\n  margin: 10% 0% 10% 0%;\\r\\n  background: #49da5e;\\r\\n}\\r\\n\\r\\n#btnReserve {\\r\\n  margin: 4px 0 20px 0;\\r\\n  background: #49b6da;\\r\\n}\\r\\n\\r\\n#id {\\r\\n  width: 11%;\\r\\n  border-radius: 42%;\\r\\n  color: aliceblue;\\r\\n  margin: 3px 0 3px 14px;\\r\\n  align-self: flex-start;\\r\\n}\\r\\n\\r\\n.cir {\\r\\n  background-color: #1d1d1d57;\\r\\n  width: 6px;\\r\\n  height: 1px;\\r\\n  margin: -5px 185px 0 0;\\r\\n}\\r\\n\\r\\n#name {\\r\\n  background: #faff0080;\\r\\n  border: 1px solid hsl(11deg 100% 62% / 84%);\\r\\n  border-radius: 6px;\\r\\n  padding: 2px;\\r\\n  margin: 3% 0% 5% 0%;\\r\\n  width: 121px;\\r\\n  text-align: center;\\r\\n  font-family: Rubik, sans-serif;\\r\\n  color: aliceblue;\\r\\n  font-size: 1.3rem;\\r\\n}\\r\\n\\r\\n#types {\\r\\n  font-family: Rubik, sans-serif;\\r\\n  color: aliceblue;\\r\\n  font-size: 1.3rem;\\r\\n}\\r\\n\\r\\n.footerImg {\\r\\n  display: flex;\\r\\n  gap: 38px;\\r\\n  margin: 10px 0 10px 0;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://mv-pokeapp/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://mv-pokeapp/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://mv-pokeapp/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/popup.css":
/*!***********************!*\
  !*** ./src/popup.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./popup.css */ \"./node_modules/css-loader/dist/cjs.js!./src/popup.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://mv-pokeapp/./src/popup.css?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://mv-pokeapp/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://mv-pokeapp/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://mv-pokeapp/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://mv-pokeapp/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://mv-pokeapp/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://mv-pokeapp/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://mv-pokeapp/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/baseApis.js":
/*!*************************!*\
  !*** ./src/baseApis.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst involvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1nKEgSDFUEKqARuhDNsk';\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (involvementApi);\n\n//# sourceURL=webpack://mv-pokeapp/./src/baseApis.js?");

/***/ }),

/***/ "./src/cartsCounter.js":
/*!*****************************!*\
  !*** ./src/cartsCounter.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst pokeCounter = () => {\r\n  const pokecard = document.querySelectorAll('.pokecards').length;\r\n  const home = document.querySelector('.home-c');\r\n  home.innerHTML = `(${pokecard})`;\r\n  return pokecard.length;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pokeCounter);\r\n\n\n//# sourceURL=webpack://mv-pokeapp/./src/cartsCounter.js?");

/***/ }),

/***/ "./src/display-comment.js":
/*!********************************!*\
  !*** ./src/display-comment.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _popup_comment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup-comment.js */ \"./src/popup-comment.js\");\n\r\n\r\nconst buttonPressed = async (e) => {\r\n  const sid = Number(e.target.id);\r\n  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${sid}/`;\r\n  await fetch(pokemonUrl)\r\n    .then((response) => response.json())\r\n    .then((json) => {\r\n      const pokemons = json;\r\n      const { name } = pokemons;\r\n      const image = pokemons.sprites.other.dream_world.front_default;\r\n      const info = `\r\n        <p class=\"popup-detail-item\">Height : ${pokemons.height}</p>\r\n        <p class=\"popup-detail-item\">Weight : ${pokemons.weight}</p>\r\n        <p class=\"popup-detail-item\">Base Experience : ${pokemons.base_experience}</p>\r\n        <p class=\"popup-detail-item\">Moves : ${pokemons.moves.length}</p> `;\r\n      (0,_popup_comment_js__WEBPACK_IMPORTED_MODULE_0__.showPopup)(name, image, info);\r\n      (0,_popup_comment_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(sid);\r\n      _popup_comment_js__WEBPACK_IMPORTED_MODULE_0__.popup.classList.toggle('display');\r\n    });\r\n};\r\n\r\nconst addeventComment = () => {\r\n  const commentButtons = document.querySelectorAll('.btnDescription');\r\n  commentButtons.forEach((button) => {\r\n    button.addEventListener('click', buttonPressed);\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addeventComment);\r\n\n\n//# sourceURL=webpack://mv-pokeapp/./src/display-comment.js?");

/***/ }),

/***/ "./src/displayLikes.js":
/*!*****************************!*\
  !*** ./src/displayLikes.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addLikes\": () => (/* binding */ addLikes),\n/* harmony export */   \"likesGet\": () => (/* binding */ likesGet)\n/* harmony export */ });\nconst apiLikes = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/01g8zOGHAMdlxh7XvGhS/likes/';\r\n\r\nconst show = (data) => {\r\n  const likeTxt = document.querySelectorAll('.likeTxt');\r\n  for (let i = 0; i < likeTxt.length; i += 1) {\r\n    const nLike = data.find((like) => like.item_id === (i + 1));\r\n    if (nLike) {\r\n      likeTxt[i].innerHTML = nLike.likes;\r\n    }\r\n  }\r\n};\r\n\r\nconst likesGet = () => {\r\n  fetch(apiLikes, { method: 'GET' })\r\n    .then((res) => res.json())\r\n    .then((data) => {\r\n      show(data);\r\n    });\r\n};\r\n\r\nconst likePost = (id) => {\r\n  fetch(apiLikes, {\r\n    method: 'POST',\r\n    headers: { 'Content-Type': 'application/json' },\r\n    body: JSON.stringify({ item_id: id }),\r\n  });\r\n  const likeElement = document.querySelector(`#like${id}`);\r\n  const likesNum = parseInt(likeElement.innerHTML, 10);\r\n  likeElement.innerHTML = likesNum + 1;\r\n};\r\n\r\nconst addLikes = () => {\r\n  const iconLike = document.querySelectorAll('.iconLike');\r\n  iconLike.forEach((like) => {\r\n    like.addEventListener('click', (e) => {\r\n      const { id } = e.target;\r\n      likePost(parseInt(id.substring(5), 10));\r\n    });\r\n  });\r\n};\r\n\r\n\n\n//# sourceURL=webpack://mv-pokeapp/./src/displayLikes.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _pokemonDisplay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pokemonDisplay.js */ \"./src/pokemonDisplay.js\");\n// Import css styles for our project\n\n\n\n(0,_pokemonDisplay_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n// API to work: https://pokeapi.co/\n// Involvement API: https://www.notion.so/Involvement-API-869e60b5ad104603aa6db59e08150270\n\n//# sourceURL=webpack://mv-pokeapp/./src/index.js?");

/***/ }),

/***/ "./src/pokemonDisplay.js":
/*!*******************************!*\
  !*** ./src/pokemonDisplay.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modules_pokeData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/pokeData.js */ \"./modules/pokeData.js\");\n/* harmony import */ var _display_comment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-comment.js */ \"./src/display-comment.js\");\n/* harmony import */ var _displayLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayLikes.js */ \"./src/displayLikes.js\");\n/* harmony import */ var _cartsCounter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cartsCounter.js */ \"./src/cartsCounter.js\");\n\r\n\r\n\r\n\r\n\r\nasync function PokemonDisplay() {\r\n  const api = new _modules_pokeData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n  const pokemons = await api.getpokemons(1, 21);\r\n\r\n  const displayPokemon = document.getElementById('displayPokemon');\r\n  pokemons.forEach((pokemon) => {\r\n    displayPokemon.innerHTML += `\r\n        <div class=\"pokecards\">\r\n        <p id=\"id\">${pokemon.id}</p>\r\n        <p id=\"name\">${pokemon.name}</p>\r\n        <div class=\"imgContainer\">\r\n        <img id=\"image\" src=\"${pokemon.image}\" alt=\"\">\r\n        <div class=\"shadow\"></div>\r\n        </div>\r\n        <div class=\"footerImg\">\r\n        <p id=\"types\">${pokemon.pokemonTypes}</p>\r\n        <p class=\"likes\">\r\n        <button class=\"iconLike\" id=\"heart${pokemon.id}\" alt=\"heart\">&#10084;</button>\r\n        <span><span class=\"likeTxt\" id=\"like${pokemon.id}\" > 0 </span> Likes </span>\r\n        </p>\r\n        </div>\r\n        <button id=\"${pokemon.id}\" class=\"btnDescription\" type=\"submit\"> Description </button>\r\n        <button id=\"btnReserve\" type=\"button\"> reserve </button>\r\n        </div>\r\n        `;\r\n  });\r\n  (0,_display_comment_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  (0,_displayLikes_js__WEBPACK_IMPORTED_MODULE_2__.addLikes)();\r\n  (0,_displayLikes_js__WEBPACK_IMPORTED_MODULE_2__.likesGet)();\r\n  (0,_cartsCounter_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PokemonDisplay);\r\n\n\n//# sourceURL=webpack://mv-pokeapp/./src/pokemonDisplay.js?");

/***/ }),

/***/ "./src/popup-comment.js":
/*!******************************!*\
  !*** ./src/popup-comment.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"popup\": () => (/* binding */ popup),\n/* harmony export */   \"showPopup\": () => (/* binding */ showPopup)\n/* harmony export */ });\n/* harmony import */ var _popup_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.css */ \"./src/popup.css\");\n/* harmony import */ var _assets_pokemonImg_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/pokemonImg.png */ \"./src/assets/pokemonImg.png\");\n/* harmony import */ var _baseApis_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./baseApis.js */ \"./src/baseApis.js\");\n\r\n\r\n\r\n\r\n\r\n//  popup\r\nconst popup = document.createElement('div');\r\npopup.id = 'popup';\r\npopup.classList = 'popup';\r\ndocument.body.appendChild(popup);\r\n\r\n// popup-window\r\nconst popupWindow = document.createElement('div');\r\npopupWindow.classList = 'popup-window';\r\npopup.appendChild(popupWindow);\r\n\r\n// popup-header\r\nconst popupHeader = document.createElement('div');\r\npopupHeader.classList = 'popup-header';\r\npopupWindow.appendChild(popupHeader);\r\n\r\n// popup-header text\r\nconst popupHeaderText = document.createElement('h2');\r\npopupHeaderText.id = 'popupHeaderText';\r\npopupHeaderText.classList = 'popup-header-text';\r\npopupHeaderText.innerHTML = 'Test'; /// /// for test\r\npopupHeader.appendChild(popupHeaderText);\r\n\r\n// popup-header X-btn\r\nconst xBtn = document.createElement('p');\r\nxBtn.id = 'xBtn';\r\nxBtn.classList = 'x-btn';\r\nxBtn.innerHTML = 'X';\r\npopupHeader.appendChild(xBtn);\r\n\r\n// popup-image\r\nconst popupImage = document.createElement('img');\r\npopupImage.id = 'popupImage';\r\npopupImage.classList = 'popup-image';\r\npopupImage.src = _assets_pokemonImg_png__WEBPACK_IMPORTED_MODULE_1__; /// ////////// for test\r\npopupImage.alt = 'pokemon';\r\npopupWindow.appendChild(popupImage);\r\n\r\n// popup-image-details\r\nconst popupDetail = document.createElement('div');\r\npopupDetail.id = 'popupDetail';\r\npopupDetail.classList = 'popup-image-detail d-grid-2col';\r\n/// /////////////// for test\r\npopupDetail.innerHTML = `\r\n                <p class=\"popup-detail-item\">Color : Green</p>\r\n                <p class=\"popup-detail-item\">Age : 6 years</p>\r\n                <p class=\"popup-detail-item\">Power : 132</p>\r\n                <p class=\"popup-detail-item\">Speed : 42 KM/h</p>\r\n`;\r\npopupWindow.appendChild(popupDetail);\r\n\r\nxBtn.addEventListener('click', () => {\r\n  popup.classList.remove('display');\r\n});\r\n\r\nconst showPopup = (name, image, info) => {\r\n  popupHeaderText.innerHTML = name;\r\n  popupImage.src = image;\r\n  popupDetail.innerHTML = info;\r\n};\r\n\r\n// popup-comment-header\r\nconst popupCommentHeader = document.createElement('h3');\r\npopupCommentHeader.classList = 'popup-comment-header';\r\npopupCommentHeader.innerHTML = 'Comments (0)'; /// /////// for test\r\npopupWindow.appendChild(popupCommentHeader);\r\n\r\n// popup-engage section\r\nconst engage = document.createElement('div');\r\nengage.classList = 'd-grid-2col';\r\npopupWindow.appendChild(engage);\r\n\r\n// popup-comment-record\r\nconst popupCommentRecord = document.createElement('div');\r\npopupCommentRecord.classList = 'popup-comment-record';\r\nengage.appendChild(popupCommentRecord);\r\n\r\n// popup-comment-list\r\nconst popupCommentList = document.createElement('ul');\r\npopupCommentList.id = 'popupCommentList';\r\npopupCommentList.classList = 'popup-comment-list';\r\npopupCommentRecord.appendChild(popupCommentList);\r\n\r\n/// get comments\r\nconst getComments = async (itemId) => {\r\n    const commentsAPI = `${_baseApis_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]}/comments?item_id=${itemId}`;\r\n    await fetch(commentsAPI).then((response) => response.json()).then((json) => {\r\n      if (json.length === undefined) {\r\n        popupCommentHeader.innerHTML = 'Comments (0)';\r\n        popupCommentList.innerHTML = '';\r\n      } else {\r\n        popupCommentHeader.innerHTML = `Comments (${json.length})`;\r\n        popupCommentList.innerHTML = '';\r\n        json.forEach((element) => {\r\n          const newComment = document.createElement('li');\r\n          newComment.classList = 'popup-comment-item';\r\n          newComment.innerHTML = ` \r\n              <label class=\"popup-comment-author\">${element.username}</label>\r\n              <p class=\"popup-comment-text\">${element.comment}</p>\r\n              <p class=\"popup-comment-date\">${element.creation_date}</p>`;\r\n          popupCommentList.appendChild(newComment);\r\n        });\r\n      }\r\n    }).catch((e) => e);\r\n  };\r\n\n\n//# sourceURL=webpack://mv-pokeapp/./src/popup-comment.js?");

/***/ }),

/***/ "./src/assets/pokemonImg.png":
/*!***********************************!*\
  !*** ./src/assets/pokemonImg.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3349d1c0dbda5babf47e.png\";\n\n//# sourceURL=webpack://mv-pokeapp/./src/assets/pokemonImg.png?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;