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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass PokeData {\n    getpokemonInfo = async (idPokemon) => {\n      const dataPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)\n        .then((response) => response.json());\n      const {\n        id, name, sprites, types,\n      } = dataPokemon;\n      const pokemonTypes = [];\n      types.forEach((element) => {\n        pokemonTypes.push(element.type.name);\n      });\n      const image = sprites.other.dream_world.front_default;\n      return {\n        id, name, pokemonTypes, image,\n      };\n    }\n\n      getpokemons = async (minidPokemon, maxidPokemon) => {\n        const listPokemon = [];\n        let dataList;\n        for (let i = minidPokemon; i <= maxidPokemon; i += 1) {\n          dataList = this.getpokemonInfo(i);\n          listPokemon.push(dataList);\n        }\n        return Promise.all(listPokemon);\n      }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PokeData);\n\n\n//# sourceURL=webpack://mv-pokeapp/./modules/pokeData.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/popup.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/popup.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".popup,\\n.popupres {\\n  width: 100%;\\n  height: 100%;\\n  box-sizing: border-box;\\n  top: 0;\\n  padding: 30px 10px;\\n  position: fixed;\\n  background-color: rgba(0, 0, 0, 0.349);\\n  backdrop-filter: blur(3px);\\n  overflow-y: auto;\\n  display: none;\\n}\\n\\n/* scrollbar customization */\\n.popup::-webkit-scrollbar,\\n.popupres::-webkit-scrollbar {\\n  width: 7px;\\n}\\n\\n.popup::-webkit-scrollbar-track,\\n.popupres::-webkit-scrollbar-track {\\n  background-color: antiquewhite;\\n  box-shadow: inset 0 0 5px rgb(151, 151, 151);\\n}\\n\\n.popup::-webkit-scrollbar-thumb,\\n.popupres::-webkit-scrollbar-thumb {\\n  background: orangered;\\n  border-radius: 15px;\\n}\\n\\n.popup::-webkit-scrollbar-thumb:hover,\\n.popupres::-webkit-scrollbar-thumb:hover {\\n  background: #b30000;\\n}\\n\\n/* *********** */\\n\\n.popup-window,\\n.popupres-window {\\n  background: linear-gradient(180deg, rgb(225 212 50) 18%, rgb(255 255 255) 45%, hsl(148deg 98% 73%) 95%);\\n  z-index: 10;\\n  max-width: 500px;\\n  margin: auto;\\n  margin-bottom: 20px;\\n  background-color: white;\\n  padding: 20px;\\n  border-radius: 28px;\\n}\\n\\n.popupres-window {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: flex-start;\\n}\\n\\n.popup-header,\\n.popupres-header {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  row-gap: 1em;\\n}\\n\\n.popup-header-text,\\n.popupres-header h2 {\\n  color: orangered;\\n  margin: -5px 0 11px 0;\\n  text-transform: capitalize;\\n  font-size: 2rem;\\n}\\n\\n.popupres-header h2 {\\n  padding: 0.2em 0 0.2em 0;\\n}\\n\\n.x-btn {\\n  color: aliceblue;\\n  font-size: 1.5rem;\\n  cursor: pointer;\\n}\\n\\n#xpopupres {\\n  border-radius: 50%;\\n  border: 2px solid #b30000;\\n  padding: 0.2em 0.35em;\\n  color: #b30000;\\n}\\n\\n#xpopupres:hover {\\n  border-color: #3a3a3a;\\n  background-color: #7c7c7c;\\n  color: #fff;\\n}\\n\\n.div-container {\\n  padding: 16px;\\n  border-radius: 50%;\\n  background: linear-gradient(180deg, rgb(255 0 0) 0%, rgb(255 5 5) 49%, rgb(0 0 0) 42%, rgb(0 0 0) 53%, rgb(255 255 255) 53%, rgb(255 255 255) 100%);\\n  width: 100%;\\n  margin-bottom: 20px;\\n  border: 1px solid #000000a6;\\n}\\n\\n.popup-image {\\n  width: 328px;\\n  height: 416px;\\n  margin: 0 0 0 53px;\\n  position: relative;\\n}\\n\\n.popupres-img {\\n  height: 58vh;\\n  text-align: center;\\n  margin: 0 auto;\\n  display: flex;\\n  flex-direction: column;\\n  background: linear-gradient(180deg, rgb(255 0 0) 0%, rgb(255 5 5) 49%, rgb(0 0 0) 42%, rgb(0 0 0) 53%, rgb(255 255 255) 53%, rgb(255 255 255) 100%);\\n  border-radius: 50%;\\n  width: 100%;\\n  border: 1px solid black;\\n}\\n\\n.popupres-image {\\n  height: 90%;\\n  padding: 2em;\\n  align-self: center;\\n  width: 100%;\\n}\\n\\n.popupres-description {\\n  position: relative;\\n  font-weight: 500;\\n  font-size: 1.1rem;\\n  padding: 0.5em;\\n  quotes: \\\"“\\\" \\\"”\\\" \\\"‘\\\" \\\"’\\\";\\n  bottom: 0.75em;\\n}\\n\\n.popupres-description::before {\\n  content: open-quote;\\n}\\n\\n.popupres-description::after {\\n  content: close-quote;\\n}\\n\\n.display,\\n.show {\\n  display: block;\\n}\\n\\n.d-grid-2col {\\n  display: grid;\\n  grid-template-columns: 1fr;\\n  gap: 10px;\\n}\\n\\n.popup-image-detail {\\n  text-align: center;\\n}\\n\\n.popupres-info {\\n  padding: 1em;\\n  display: flex;\\n  flex-wrap: wrap;\\n  gap: 1em;\\n  font-weight: 600;\\n}\\n\\n.popupres-info p,\\n.popupres-info span {\\n  border: 2px solid orangered;\\n  border-radius: 100px;\\n}\\n\\n.popupres-info p {\\n  width: 45%;\\n  background-color: rgba(255, 69, 0, 0.7);\\n  color: #b30000;\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.popupres-info b {\\n  padding: 0.5em 0 0.5em 0.8em;\\n}\\n\\n.popupres-info span {\\n  display: inline-block;\\n  width: 4.5rem;\\n  margin-left: auto;\\n  height: 100%;\\n  text-align: center;\\n  background: orangered;\\n  color: #fff;\\n  padding: 0.5em 0;\\n}\\n\\n.popup-detail-item {\\n  color: #ff0558;\\n  font-size: larger;\\n  margin: 8px 0 -1px 7px;\\n}\\n\\n@media screen and (min-width: 400px) {\\n  .d-grid-2col {\\n    grid-template-columns: 1fr 1fr;\\n  }\\n}\\n\\n/*  comments list  */\\n\\n.popup-comment-record {\\n  max-height: 220px;\\n  overflow-y: scroll;\\n}\\n\\n/* comment list scrollbar customization */\\n\\n.popup-comment-record::-webkit-scrollbar {\\n  width: 5px;\\n}\\n\\n.popup-comment-record::-webkit-scrollbar-track {\\n  box-shadow: inset 0 0 5px rgb(151, 151, 151);\\n  border-radius: 10px;\\n}\\n\\n.popup-comment-record::-webkit-scrollbar-thumb {\\n  background: rgb(141, 63, 231);\\n  border-radius: 15px;\\n}\\n\\n.popup-comment-record::-webkit-scrollbar-thumb:hover {\\n  background: rgb(179, 153, 211);\\n}\\n\\n.popup-comment-header {\\n  color: rgb(141, 63, 231);\\n  margin: 15px 0 14px 0;\\n  text-align: center;\\n}\\n\\n.popup-comment-list {\\n  list-style-type: none;\\n  padding: 0 5px;\\n  display: block;\\n}\\n\\n.popup-comment-item {\\n  background-color: rgba(196, 159, 201, 0.144);\\n  margin: 5px 0;\\n  padding: 5px;\\n  border-radius: 5px;\\n  font-size: small;\\n}\\n\\n.popup-comment-author {\\n  font-weight: 600;\\n  font-size: small;\\n}\\n\\n.popup-comment-text {\\n  margin: 5px 0;\\n  color: rgb(80, 80, 80);\\n  font-size: small;\\n}\\n\\n.popup-comment-date {\\n  margin: 5px 0;\\n  color: rgb(141, 63, 231);\\n  font-size: small;\\n}\\n\\n/* New comment */\\n\\n.popup-new-comment,\\n.popupres-newreserve {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 5px;\\n}\\n\\n#newreserve {\\n  margin: 0.5em auto;\\n}\\n\\n#newreserve ul {\\n  gap: 0.6em;\\n}\\n\\n.popup-comment-input,\\n#newreserve input {\\n  padding: 10px;\\n  font-size: medium;\\n  border: 0;\\n  outline: 0;\\n  border-bottom: 1px solid gainsboro;\\n  border-radius: 15px;\\n}\\n\\n#newreserve input {\\n  width: 12rem;\\n}\\n\\n.popup-comment-input::placeholder,\\n#newreserve input {\\n  color: rgb(170, 170, 170);\\n}\\n\\n.popup-comment-input:focus,\\n#newreserve input:focus {\\n  border-bottom: 1px solid rgb(141, 63, 231);\\n}\\n\\n.popup-new-comment-text {\\n  resize: none;\\n}\\n\\n.popup-comment-btn,\\n#newreserve button {\\n  padding: 2px 15px;\\n  background-color: rgb(141, 63, 231);\\n  color: white;\\n  cursor: pointer;\\n  border-radius: 5px;\\n  width: fit-content;\\n  align-self: flex-end;\\n}\\n\\n/* Styles for Reservations section */\\n.popupres-reserves {\\n  padding: 1em 2em;\\n  text-align: center;\\n}\\n\\n.popupres-reserves h3 {\\n  color: #b30000;\\n}\\n\\n#popupres-reservelist {\\n  height: auto;\\n  flex-direction: column;\\n  gap: 0;\\n  margin: 0.5em auto;\\n}\\n\\n.popupres-reserveitem {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.reserveitem-date,\\n.reserveitem-username {\\n  font-weight: bold;\\n  padding: 0.4em 0 0.4em 0;\\n}\\n\\n.reserveitem-date:nth-child(2) {\\n  padding: 0.4em 0.4em 0.4em 0.3em;\\n}\\n\\n.reserveitem-date:nth-child(1)::after,\\n.reserveitem-date:nth-child(2)::after {\\n  margin-inline: 0.5em 0;\\n  font-weight: 400;\\n}\\n\\n.reserveitem-date:nth-child(1)::after {\\n  content: \\\"-\\\";\\n}\\n\\n.reserveitem-date:nth-child(2)::after {\\n  content: \\\"by\\\";\\n}\\n\\n.popupres-newreserve {\\n  text-align: center;\\n}\\n\\n.popupres-newreserve ul {\\n  margin: 0 0 0 0;\\n  flex-direction: column;\\n  gap: 0.5em;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://mv-pokeapp/./src/popup.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Styles for the PokeAPP */\\n\\n/* font family */\\n\\n/* General resets */\\n*,\\n*::after,\\n*::before {\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n  box-sizing: border-box;\\n  font-family: rubik, sans-serif;\\n  line-height: 1;\\n}\\n\\n.nav-header {\\n  display: flex;\\n  background-color: #49b6da;\\n  align-items: center;\\n  justify-content: flex-start;\\n}\\n\\nfooter {\\n  background-color: #f6ff76;\\n  margin: 0 auto;\\n  padding: 25px;\\n  display: flex;\\n  height: 91px;\\n  width: auto;\\n  text-align: center;\\n}\\n\\nbody {\\n  background: hsl(182deg 100% 50% / 54%);\\n  color: #1d1d1d;\\n}\\n\\nh1 {\\n  text-align: center;\\n  color: orange;\\n  background: #f6ff76;\\n  margin: 37px auto;\\n  width: 481px;\\n  border: 3px solid #9191f1;\\n  padding: 7px 78px;\\n  border-radius: 18px;\\n}\\n\\nheader {\\n  background: #63b0f3;\\n  padding: 17px 41px;\\n}\\n\\nnav {\\n  display: flex;\\n  height: 3rem;\\n  align-items: center;\\n}\\n\\nnav span {\\n  height: 100%;\\n  font-weight: 600;\\n  font-size: 2rem;\\n  letter-spacing: 0.02em;\\n  align-items: center;\\n  display: flex;\\n}\\n\\na {\\n  display: flex;\\n  text-decoration: none;\\n  color: rgb(216, 7, 7);\\n  font-size: 1.2rem;\\n  font-weight: 500;\\n  padding: 0.5em 0.8em;\\n}\\n\\n.home-c {\\n  font-size: large;\\n}\\n\\na:hover {\\n  color: inherit;\\n}\\n\\n.logo {\\n  height: 100%;\\n  margin-inline-end: auto;\\n}\\n\\n.logo img {\\n  height: 100%;\\n  padding: 0.05em;\\n}\\n\\n.logo:hover img {\\n  filter: saturate(3);\\n}\\n\\n#displayPokemon {\\n  width: 90%;\\n  max-width: 1000px;\\n  margin: 40px auto 100px auto;\\n  display: grid;\\n  grid-template-columns: repeat(3, 1fr);\\n  gap: 40px;\\n}\\n\\n.pokecards {\\n  display: flex;\\n  flex-direction: column;\\n  background-color: rgb(216, 7, 7);\\n  align-items: center;\\n  padding: 17px;\\n  border-radius: 14px;\\n  border: 4px solid #ff000085;\\n}\\n\\n.pokecards:hover {\\n  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\\n}\\n\\n@keyframes shake {\\n  10%,\\n  90% {\\n    transform: translate3d(-1px, 0, 0);\\n  }\\n\\n  20%,\\n  80% {\\n    transform: translate3d(0, 0, 0);\\n  }\\n\\n  30%,\\n  50%,\\n  70% {\\n    transform: translate3d(-1px, 0, 0);\\n  }\\n\\n  40%,\\n  60% {\\n    transform: translate3d(1px, 0, 0);\\n  }\\n}\\n\\n.imgContainer {\\n  background: linear-gradient(180deg, rgb(173, 237, 255) 0%, rgb(127, 225, 252) 50%, rgb(12, 233, 82) 73%, rgb(18, 126, 2) 88%, rgb(1, 97, 10) 100%);\\n  width: 223px;\\n  height: 155px;\\n  margin: 3% 0% 2% 0%;\\n  border-radius: 4px;\\n  border: 3px solid white;\\n}\\n\\n#image {\\n  width: 63%;\\n  height: 76%;\\n  margin: 6% 0% 0% 19%;\\n  animation: jump 6s ease-in-out infinite;\\n}\\n\\n@keyframes jump {\\n  0% {\\n    transform: translate(-1%, -2%) scale(1);\\n  }\\n\\n  50% {\\n    transform: translate(-2%, -3%) scale(1.1);\\n  }\\n\\n  100% {\\n    transform: translate(-1%, -2%) scale(1);\\n  }\\n}\\n\\n.pokecards :hover {\\n  animation: 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\\n}\\n\\n@keyframes shake {\\n  10%,\\n  90% {\\n    transform: translate3d(-1px, 0, 0);\\n  }\\n\\n  20%,\\n  80% {\\n    transform: translate3d(0, 0, 0);\\n  }\\n\\n  30%,\\n  50%,\\n  70% {\\n    transform: translate3d(-1px, 0, 0);\\n  }\\n\\n  40%,\\n  60% {\\n    transform: translate3d(1px, 0, 0);\\n  }\\n}\\n\\n.shadow {\\n  background-color: #1d1d1d42;\\n  margin: -2% 0% 0% 19%;\\n  width: 124px;\\n  height: 9px;\\n  border-radius: 59%;\\n  animation: moving 4.2s ease-in-out infinite;\\n}\\n\\nul {\\n  display: flex;\\n  margin: 3% 0% 4% 14%;\\n  gap: 130px;\\n}\\n\\nbutton {\\n  cursor: pointer;\\n  width: 198px;\\n  height: 30px;\\n  border-radius: 10%;\\n  color: aliceblue;\\n  font-size: 1.3rem;\\n}\\n\\n.likes {\\n  color: aliceblue;\\n  display: flex;\\n  flex-direction: column;\\n  margin: 5px 0 0 auto;\\n  gap: 5px;\\n  align-items: center;\\n}\\n\\n.iconLike {\\n  width: 30px;\\n  height: 30px;\\n  border-radius: 50%;\\n  font-size: 1.3rem;\\n  color: red;\\n}\\n\\n.likeTxt {\\n  color: aliceblue;\\n}\\n\\n.btnDescription {\\n  margin: 10% 0% 10% 0%;\\n  background: #49da5e;\\n  border-radius: 9px;\\n}\\n\\n#btnReserve {\\n  margin: 0 0 11px 0;\\n  background: #49b6da;\\n  border-radius: 9px;\\n}\\n\\n#id {\\n  width: 11%;\\n  border-radius: 42%;\\n  color: aliceblue;\\n  margin: -7px 0 6px 2px;\\n  align-self: flex-start;\\n}\\n\\n#name {\\n  background: #faff0080;\\n  border: 1px solid hsl(11deg 100% 62% / 84%);\\n  border-radius: 6px;\\n  padding: 2px;\\n  margin: 3% 0% 5% 0%;\\n  width: 121px;\\n  text-align: center;\\n  font-family: Rubik, sans-serif;\\n  color: aliceblue;\\n  font-size: 1.3rem;\\n  text-transform: capitalize;\\n}\\n\\n#types {\\n  font-family: Rubik, sans-serif;\\n  color: aliceblue;\\n  font-size: 1.3rem;\\n  display: flex;\\n  gap: 5px;\\n}\\n\\n.footerImg {\\n  display: flex;\\n  gap: 88px;\\n  margin: 9px 0 6px 0;\\n  align-items: center;\\n}\\n\\n.habilityIcon {\\n  width: 30px;\\n  height: 30px;\\n}\\n\\n.habilityIconImg {\\n  width: 100%;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://mv-pokeapp/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst involvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1nKEgSDFUEKqARuhDNsk';\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (involvementApi);\n\n//# sourceURL=webpack://mv-pokeapp/./src/baseApis.js?");

/***/ }),

/***/ "./src/cartsCounter.js":
/*!*****************************!*\
  !*** ./src/cartsCounter.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst pokeCounter = () => {\n  const pokecard = document.querySelectorAll('.pokecards').length;\n  const home = document.querySelector('.home-c');\n  home.innerHTML = `(${pokecard})`;\n  return pokecard;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pokeCounter);\n\n\n//# sourceURL=webpack://mv-pokeapp/./src/cartsCounter.js?");

/***/ }),

/***/ "./src/display-comment.js":
/*!********************************!*\
  !*** ./src/display-comment.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _popup_comment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup-comment.js */ \"./src/popup-comment.js\");\n\n\nconst buttonPressed = async (e) => {\n  const sid = Number(e.target.id);\n  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${sid}/`;\n  await fetch(pokemonUrl)\n    .then((response) => response.json())\n    .then((json) => {\n      const pokemons = json;\n      const { name } = pokemons;\n      const image = pokemons.sprites.other.dream_world.front_default;\n      const info = `\n        <p class=\"popup-detail-item\">Height : ${pokemons.height}</p>\n        <p class=\"popup-detail-item\">Weight : ${pokemons.weight}</p>\n        <p class=\"popup-detail-item\">Base Experience : ${pokemons.base_experience}</p>\n        <p class=\"popup-detail-item\">Moves : ${pokemons.moves.length}</p> `;\n      (0,_popup_comment_js__WEBPACK_IMPORTED_MODULE_0__.showPopup)(name, image, info);\n      (0,_popup_comment_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(sid);\n      (0,_popup_comment_js__WEBPACK_IMPORTED_MODULE_0__.getCommentID)(sid);\n      _popup_comment_js__WEBPACK_IMPORTED_MODULE_0__.popup.classList.toggle('display');\n    });\n};\n\nconst addeventComment = () => {\n  const commentButtons = document.querySelectorAll('.btnDescription');\n  commentButtons.forEach((button) => {\n    button.addEventListener('click', buttonPressed);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addeventComment);\n\n\n//# sourceURL=webpack://mv-pokeapp/./src/display-comment.js?");

/***/ }),

/***/ "./src/displayLikes.js":
/*!*****************************!*\
  !*** ./src/displayLikes.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addLikes\": () => (/* binding */ addLikes),\n/* harmony export */   \"likesGet\": () => (/* binding */ likesGet)\n/* harmony export */ });\nconst apiLikes = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/01g8zOGHAMdlxh7XvGhS/likes/';\n\nconst show = (data) => {\n  const likeTxt = document.querySelectorAll('.likeTxt');\n  for (let i = 0; i < likeTxt.length; i += 1) {\n    const nLike = data.find((like) => like.item_id === (i + 1));\n    if (nLike) {\n      likeTxt[i].innerHTML = nLike.likes;\n    }\n  }\n};\n\nconst likesGet = () => {\n  fetch(apiLikes, { method: 'GET' })\n    .then((res) => res.json())\n    .then((data) => {\n      show(data);\n    });\n};\n\nconst likePost = (id) => {\n  fetch(apiLikes, {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify({ item_id: id }),\n  });\n  const likeElement = document.querySelector(`#like${id}`);\n  const likesNum = parseInt(likeElement.innerHTML, 10);\n  likeElement.innerHTML = likesNum + 1;\n};\n\nconst addLikes = () => {\n  const iconLike = document.querySelectorAll('.iconLike');\n  iconLike.forEach((like) => {\n    like.addEventListener('click', (e) => {\n      const { id } = e.target;\n      likePost(parseInt(id.substring(5), 10));\n    });\n  });\n};\n\n\n\n//# sourceURL=webpack://mv-pokeapp/./src/displayLikes.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _pokemonDisplay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pokemonDisplay.js */ \"./src/pokemonDisplay.js\");\n// Import css styles for our project\n\n\n\n(0,_pokemonDisplay_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n// API to work: https://pokeapi.co/\n// Involvement API: https://www.notion.so/Involvement-API-869e60b5ad104603aa6db59e08150270\n\n\n//# sourceURL=webpack://mv-pokeapp/./src/index.js?");

/***/ }),

/***/ "./src/modules/displayreserve.js":
/*!***************************************!*\
  !*** ./src/modules/displayreserve.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addFakeReserves\": () => (/* binding */ addFakeReserves),\n/* harmony export */   \"default\": () => (/* binding */ linkReserveBtns)\n/* harmony export */ });\n/* harmony import */ var _pokeapi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pokeapi.js */ \"./src/modules/pokeapi.js\");\n/* harmony import */ var _involapi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./involapi.js */ \"./src/modules/involapi.js\");\n/* harmony import */ var _reservesCounter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reservesCounter.js */ \"./src/modules/reservesCounter.js\");\n\n\n\n\n// Global reservePokemon object with pokemon details for the Reservations popup.\n\nconst createPokemon = (values) => {\n  const attString = 'id, name, height, weight, exp, moves, image, description, reserves';\n  const attributes = attString.replace(/\\s/gi, '').split(',');\n\n  const customPokemon = {};\n\n  attributes.forEach((key, index) => {\n    customPokemon[key] = values[index];\n  });\n\n  return customPokemon;\n};\n\nconst createReserve = (id, formData) => {\n  const user = formData.get('username');\n  const dateStart = formData.get('date_start');\n  const dateEnd = formData.get('date_end');\n\n  const customReserve = {\n    item_id: id,\n    username: user,\n    date_start: dateStart,\n    date_end: dateEnd,\n  };\n\n  return customReserve;\n};\n\nconst setCountReserves = (count) => {\n  const reservesCount = document.getElementById('reservescount');\n\n  if (count > 0) {\n    reservesCount.innerText = count;\n  } else {\n    reservesCount.parentElement.innerHTML = '<h3>No Reservations</h3>';\n  }\n};\n\nconst getReservesList = (reserves) => {\n  let allReserves = '';\n\n  reserves.forEach((reserve) => {\n    const reserveTemplate = `\n            <li class=\"popupres-reserveitem\">\n              <span class=\"reserveitem-date\">${reserve.date_start.replace(/-/gi, '/')}</span>\n              <span class=\"reserveitem-date\">${reserve.date_end.replace(/-/gi, '/')}</span>\n              <span class=\"reserveitem-username\">${reserve.username}</span>\n            </li>`;\n    allReserves += reserveTemplate;\n  });\n\n  return allReserves;\n};\n\nconst addFakeReserves = async (id) => {\n  const users = ['pokeBOT', 'pokeApp', 'pokeDEX'];\n  const startDates = ['2023-01-12', '2023-01-13', '2023-01-15'];\n  const endDates = ['2023-01-18', '2023-01-17', '2023-01-19'];\n\n  const res0 = {\n    item_id: id,\n    username: users[0],\n    date_start: startDates[0],\n    date_end: endDates[0],\n  };\n\n  const res1 = {\n    item_id: id,\n    username: users[1],\n    date_start: startDates[1],\n    date_end: endDates[1],\n  };\n\n  const res2 = {\n    item_id: id,\n    username: users[2],\n    date_start: startDates[2],\n    date_end: endDates[2],\n  };\n\n  await (0,_involapi_js__WEBPACK_IMPORTED_MODULE_1__.addReserve)(res0);\n  await (0,_involapi_js__WEBPACK_IMPORTED_MODULE_1__.addReserve)(res1);\n  await (0,_involapi_js__WEBPACK_IMPORTED_MODULE_1__.addReserve)(res2);\n};\n\nconst refreshReservesList = async (id) => {\n  const reserves = JSON.parse(await (0,_involapi_js__WEBPACK_IMPORTED_MODULE_1__.getReserves)(id));\n  const refreshedReservesList = getReservesList(reserves);\n\n  const reservesList = document.getElementById('popupres-reservelist');\n  reservesList.innerHTML = refreshedReservesList;\n  setCountReserves((0,_reservesCounter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n};\n\nconst validReserve = (form, formData) => {\n  const dateStart = new Date(formData.get('date_start'));\n  const dateEnd = new Date(formData.get('date_end'));\n\n  const { elements: { date_start: start } } = form;\n\n  if (dateStart <= dateEnd) {\n    start.setCustomValidity('');\n  } else {\n    start.setCustomValidity('Start date can\\'t be after end date.');\n  }\n\n  return form.checkValidity();\n};\n\nconst addNewReserve = async (e) => {\n  e.preventDefault();\n  const { target: { dataset: { id } }, target: form } = e;\n\n  const formData = new FormData(form);\n\n  if (validReserve(form, formData)) {\n    const newReserve = createReserve(id, formData);\n\n    const result = await (0,_involapi_js__WEBPACK_IMPORTED_MODULE_1__.addReserve)(newReserve);\n\n    if (result) {\n      form.reset();\n      return refreshReservesList(id);\n    }\n  } else {\n    form.reportValidity();\n  }\n\n  return false;\n};\n\nconst linkAddNewReserve = () => {\n  const formNewReserve = document.forms.newreserve;\n\n  formNewReserve.addEventListener('submit', addNewReserve);\n};\n\nconst showReserve = async (id) => {\n  const pokemonDetails = JSON.parse(await (0,_pokeapi_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id));\n  const pokemonDescription = JSON.parse(await (0,_pokeapi_js__WEBPACK_IMPORTED_MODULE_0__.getDescription)(id));\n  const reserves = JSON.parse(await (0,_involapi_js__WEBPACK_IMPORTED_MODULE_1__.getReserves)(id));\n\n  const { descriptions } = pokemonDescription;\n  const englishDescription = descriptions.find((description) => description.language.name === 'en');\n  const { description } = englishDescription;\n  const {\n    name, height, weight, base_experience: exp, moves: { length: moves },\n  } = pokemonDetails;\n  const { sprites: { other: { dream_world: { front_default: image } } } } = pokemonDetails;\n\n  const values = [Number(id), name, height, weight, exp, moves, image, description, reserves];\n\n  const reservePokemon = createPokemon(values);\n\n  return reservePokemon;\n};\n\nconst getReserveTemplate = (pokemon) => {\n  const reserves = getReservesList(pokemon.reserves);\n\n  const template = `\n    <div class=\"popupres-window\">\n      <div class=\"popupres-header\">\n        <h2>${pokemon.id} - ${pokemon.name}</h2>\n        <p id=\"xpopupres\" class=\"x-btn\">X</p>\n      </div>\n      <div class=\"popupres-img\">\n        <img class=\"popupres-image\" src=\"${pokemon.image}\" alt=\"pokemon\" />\n        <p class=\"popupres-description\">${pokemon.description}</p>\n      </div>\n      <div class=\"popupres-info\">\n        <p><b>Height</b><span>${pokemon.height}</span></p>\n        <p><b>Weight</b><span>${pokemon.weight}</span></p>\n        <p><b>Experience</b><span>${pokemon.exp}</span></p>\n        <p><b>Moves</b><span>${pokemon.moves}</span></p>\n      </div>\n      <div class=\"popupres-reserves\">\n        <h3>Reservations (<span id=\"reservescount\"></span>)</h3>\n        <ul id=\"popupres-reservelist\">\n          ${reserves}\n        </ul>\n      </div>\n      <div class=\"popupres-newreserve\">\n        <h3>Add a reservation</h3>\n        <form id=\"newreserve\" data-id=\"${pokemon.id}\" novalidate>\n          <ul>\n            <li>\n              <input type=\"text\" name=\"username\" placeholder=\"Your name\" required>\n            </li>\n            <li>\n              <input type=\"text\" name=\"date_start\" placeholder=\"Start date\" required\n                onblur=\"(this.type='text')\">\n            </li>\n            <li>\n              <input type=\"text\" name=\"date_end\" placeholder=\"End date\" required\n                onblur=\"(this.type='text')\">\n            </li>\n            <li>\n              <button type=\"submit\">Reserve</button>\n            </li>\n          </ul>\n        </form>\n      </div>\n    </div>`;\n\n  return template;\n};\n\nconst displayReserve = (pokemon) => {\n  const body = document.querySelector('body');\n  const pokemonPopupReserve = getReserveTemplate(pokemon);\n  const div = document.createElement('div');\n  div.classList.add('popupres');\n  div.classList.add('show');\n  div.id = 'popupres';\n\n  div.innerHTML = pokemonPopupReserve;\n\n  body.appendChild(div);\n\n  return pokemon;\n};\n\nconst setInputsAsDate = () => {\n  const setDate = (e) => {\n    e.target.type = 'date';\n    const today = new Date();\n    const minDate = today.toJSON().split('T')[0];\n\n    e.target.min = minDate;\n    e.target.showPicker();\n  };\n\n  const startDate = document.forms.newreserve.elements.date_start;\n  const endDate = document.forms.newreserve.elements.date_end;\n\n  startDate.addEventListener('focus', setDate);\n  endDate.addEventListener('focus', setDate);\n};\n\nconst linkCloseReserveBtn = () => {\n  const closeReserveBtn = document.getElementById('xpopupres');\n\n  closeReserveBtn.addEventListener('click', (e) => {\n    e.preventDefault();\n    const { target: { parentElement: { parentElement: { parentElement: popupres } } } } = e;\n    const { parentNode: body } = popupres;\n\n    body.removeChild(popupres);\n  });\n};\n\nconst linkReserveBtns = () => {\n  const reserveBtns = document.querySelectorAll('.reservebtn');\n\n  reserveBtns.forEach((reserveBtn) => {\n    reserveBtn.addEventListener('click', (e) => {\n      e.preventDefault();\n      const { currentTarget: { dataset: { id } } } = e;\n\n      showReserve(id)\n        .then((popedPokemnon) => displayReserve(popedPokemnon))\n        .then(() => linkCloseReserveBtn())\n        .then(() => setInputsAsDate())\n        .then(() => linkAddNewReserve())\n        .then(() => setCountReserves((0,_reservesCounter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()));\n    });\n  });\n};\n\n\n\n\n//# sourceURL=webpack://mv-pokeapp/./src/modules/displayreserve.js?");

/***/ }),

/***/ "./src/modules/involapi.js":
/*!*********************************!*\
  !*** ./src/modules/involapi.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addLike\": () => (/* binding */ addLike),\n/* harmony export */   \"addReserve\": () => (/* binding */ addReserve),\n/* harmony export */   \"default\": () => (/* binding */ getAppID),\n/* harmony export */   \"getReserves\": () => (/* binding */ getReserves)\n/* harmony export */ });\n// This module is made to handle the Involvement Api Requests.\n\n// involapiUrl = Base Url\nconst involapiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';\n\n// These IDs are for testing purposes.\n// const idApp = '1nKEgSDFUEKqARuhDNsk';\n// const idApp = '01g8zOGHAMdlxh7XvGhS';\nconst idApp = '0CG34aiKZpxDXV0UfZ4U';\n// const idApp = 'ZYPqezmGTKMkv14Q0GGV'; // failed\n\n// Next ID is for production.\n// const idApp = '7N9OQ8SKImUJfeBFIgcg';\n\n// EndPoints\n// apps/ POST to create a new App >> return :appid\nconst involapiApps = 'apps/';\nconst involapiFetchUrl = `${involapiUrl}${involapiApps}`;\n\n// RESERVATIONS\n// :app_id/reservations/\n//  GET retrieve the reservations for a Pokemon\n//     /apps/:app_id/reservations?item_id=item1\n//   result:\n//     Array of objects\nconst getReserves = (itemId) => {\n  const endPoint = `${involapiFetchUrl}${idApp}/reservations/?item_id=${itemId}`;\n\n  const request = new Request(endPoint);\n\n  const result = fetch(request)\n    .then((response) => {\n      if (response.status !== 201) {\n        return response.text();\n      }\n\n      return response.json();\n    })\n    .catch((error) => typeof error);\n\n  return result;\n};\n\n// POST new reservation\nconst addReserve = (reserve) => {\n  const endPoint = `${involapiFetchUrl}${idApp}/reservations/`;\n\n  const request = new Request(\n    endPoint,\n    {\n      method: 'POST',\n      headers: { 'Content-Type': 'application/json' },\n      body: JSON.stringify(\n        {\n          item_id: reserve.item_id,\n          username: reserve.username,\n          date_start: reserve.date_start,\n          date_end: reserve.date_end,\n        },\n      ),\n    },\n  );\n\n  const result = fetch(request)\n    .then((response) => {\n      if (response.status !== 201) {\n        return response.text();\n      }\n\n      return response.ok;\n    })\n    .catch((error) => typeof error);\n\n  return result;\n};\n\n// :app_id/likes/ - EndPoint to add likes\nconst addLike = (id) => {\n  const endPoint = `${involapiFetchUrl}${idApp}/likes/`;\n\n  const request = new Request(\n    endPoint,\n    {\n      method: 'POST',\n      headers: { 'Content-Type': 'application/json' },\n      body: JSON.stringify({ item_id: id }),\n    },\n  );\n\n  const result = fetch(request)\n    .then((response) => response.ok);\n\n  return result;\n};\n\n// GET and ID for our App\nconst getAppID = async () => {\n  const data = await fetch(`${involapiFetchUrl}`,\n    { method: 'POST' })\n    .then((response) => response.text());\n\n  return data; // the appID\n};\n\n\n\n\n\n//# sourceURL=webpack://mv-pokeapp/./src/modules/involapi.js?");

/***/ }),

/***/ "./src/modules/pokeapi.js":
/*!********************************!*\
  !*** ./src/modules/pokeapi.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getPokemon),\n/* harmony export */   \"getDescription\": () => (/* binding */ getDescription)\n/* harmony export */ });\nconst getPokemon = (id) => {\n  const endPoint = `https://pokeapi.co/api/v2/pokemon/${id}/`;\n\n  const request = new Request(endPoint);\n\n  const result = fetch(request)\n    .then((response) => {\n      if (response.status !== 201) {\n        return response.text();\n      }\n\n      return response.json();\n    })\n    .catch((error) => typeof error);\n\n  return result;\n};\n\nconst getDescription = (id) => {\n  const endPoint = `https://pokeapi.co/api/v2/characteristic/${id}/`;\n\n  const request = new Request(endPoint);\n\n  const result = fetch(request)\n    .then((response) => {\n      if (response.status !== 201) {\n        return response.text();\n      }\n\n      return response.json();\n    })\n    .catch((error) => typeof error);\n\n  return result;\n};\n\n\n\n\n//# sourceURL=webpack://mv-pokeapp/./src/modules/pokeapi.js?");

/***/ }),

/***/ "./src/modules/reservesCounter.js":
/*!****************************************!*\
  !*** ./src/modules/reservesCounter.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ reservesCounter)\n/* harmony export */ });\nconst reservesCounter = () => {\n  const countAllCurrentReserves = document.querySelectorAll('.popupres-reserveitem');\n\n  return countAllCurrentReserves.length;\n};\n\n\n\n//# sourceURL=webpack://mv-pokeapp/./src/modules/reservesCounter.js?");

/***/ }),

/***/ "./src/pokemonDisplay.js":
/*!*******************************!*\
  !*** ./src/pokemonDisplay.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modules_pokeData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/pokeData.js */ \"./modules/pokeData.js\");\n/* harmony import */ var _modules_displayreserve_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/displayreserve.js */ \"./src/modules/displayreserve.js\");\n/* harmony import */ var _display_comment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display-comment.js */ \"./src/display-comment.js\");\n/* harmony import */ var _displayLikes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayLikes.js */ \"./src/displayLikes.js\");\n/* harmony import */ var _cartsCounter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cartsCounter.js */ \"./src/cartsCounter.js\");\n/* harmony import */ var _assets_bug_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/bug.svg */ \"./src/assets/bug.svg\");\n/* harmony import */ var _assets_dark_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/dark.svg */ \"./src/assets/dark.svg\");\n/* harmony import */ var _assets_dragon_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/dragon.svg */ \"./src/assets/dragon.svg\");\n/* harmony import */ var _assets_electric_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/electric.svg */ \"./src/assets/electric.svg\");\n/* harmony import */ var _assets_fairy_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/fairy.svg */ \"./src/assets/fairy.svg\");\n/* harmony import */ var _assets_fighting_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/fighting.svg */ \"./src/assets/fighting.svg\");\n/* harmony import */ var _assets_fire_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/fire.svg */ \"./src/assets/fire.svg\");\n/* harmony import */ var _assets_flying_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/flying.svg */ \"./src/assets/flying.svg\");\n/* harmony import */ var _assets_ghost_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/ghost.svg */ \"./src/assets/ghost.svg\");\n/* harmony import */ var _assets_grass_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/grass.svg */ \"./src/assets/grass.svg\");\n/* harmony import */ var _assets_ground_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/ground.svg */ \"./src/assets/ground.svg\");\n/* harmony import */ var _assets_ice_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/ice.svg */ \"./src/assets/ice.svg\");\n/* harmony import */ var _assets_normal_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/normal.svg */ \"./src/assets/normal.svg\");\n/* harmony import */ var _assets_poison_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/poison.svg */ \"./src/assets/poison.svg\");\n/* harmony import */ var _assets_psychic_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assets/psychic.svg */ \"./src/assets/psychic.svg\");\n/* harmony import */ var _assets_rock_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./assets/rock.svg */ \"./src/assets/rock.svg\");\n/* harmony import */ var _assets_steel_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./assets/steel.svg */ \"./src/assets/steel.svg\");\n/* harmony import */ var _assets_water_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./assets/water.svg */ \"./src/assets/water.svg\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst typeIcon = (types) => {\n  let iconsHtml = '';\n  types.forEach((type) => {\n    iconsHtml += `<div class=\"habilityIcon\"><img class=\"habilityIconImg\" src=\"./assets/${type}.svg\"></div>`;\n  });\n  return iconsHtml;\n};\n\nasync function PokemonDisplay() {\n  const api = new _modules_pokeData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  const pokemons = await api.getpokemons(1, 30);\n\n  const displayPokemon = document.getElementById('displayPokemon');\n  pokemons.forEach((pokemon) => {\n    displayPokemon.innerHTML += `\n        <div class=\"pokecards\">\n        <p id=\"id\">${pokemon.id}</p>\n        <p id=\"name\">${pokemon.name}</p>  \n        <div class=\"imgContainer\">\n        <img id=\"image\" src=\"${pokemon.image}\" alt=\"\">\n        <div class=\"shadow\"></div>\n        </div>\n        <div class=\"footerImg\">\n        <div id=\"types\">${typeIcon(pokemon.pokemonTypes)}</div>\n        <p class=\"likes\"> \n        <button class=\"iconLike\" id=\"heart${pokemon.id}\" alt=\"heart\">&#10084;</button>\n        <span><span class=\"likeTxt\" id=\"like${pokemon.id}\" > 0 </span> Likes </span>\n        </p>\n        </div>\n        <button id=\"${pokemon.id}\" class=\"btnDescription\" type=\"submit\"> Description </button>\n        <button class=\"reservebtn\" id=\"btnReserve\" type=\"submit\" data-id=\"${pokemon.id}\"> Reserve </button>\n        </div>\n        `;\n  });\n  (0,_display_comment_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  (0,_modules_displayreserve_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_displayLikes_js__WEBPACK_IMPORTED_MODULE_3__.addLikes)();\n  (0,_displayLikes_js__WEBPACK_IMPORTED_MODULE_3__.likesGet)();\n  (0,_cartsCounter_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PokemonDisplay);\n\n\n//# sourceURL=webpack://mv-pokeapp/./src/pokemonDisplay.js?");

/***/ }),

/***/ "./src/popup-comment.js":
/*!******************************!*\
  !*** ./src/popup-comment.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addComment\": () => (/* binding */ addComment),\n/* harmony export */   \"getCommentID\": () => (/* binding */ getCommentID),\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"popup\": () => (/* binding */ popup),\n/* harmony export */   \"popupCommentBtn\": () => (/* binding */ popupCommentBtn),\n/* harmony export */   \"showPopup\": () => (/* binding */ showPopup)\n/* harmony export */ });\n/* harmony import */ var _popup_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.css */ \"./src/popup.css\");\n/* harmony import */ var _assets_pokemonImg_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/pokemonImg.png */ \"./src/assets/pokemonImg.png\");\n/* harmony import */ var _baseApis_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./baseApis.js */ \"./src/baseApis.js\");\n/* harmony import */ var _popup_counter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup-counter.js */ \"./src/popup-counter.js\");\n\n\n\n\n\n//  popup\nconst popup = document.createElement('div');\npopup.id = 'popup';\npopup.classList = 'popup';\ndocument.body.appendChild(popup);\n\n// popup-window\nconst popupWindow = document.createElement('div');\npopupWindow.classList = 'popup-window';\npopup.appendChild(popupWindow);\n\n// popup-header\nconst popupHeader = document.createElement('div');\npopupHeader.classList = 'popup-header';\npopupWindow.appendChild(popupHeader);\n\n// popup-header text\nconst popupHeaderText = document.createElement('h2');\npopupHeaderText.id = 'popupHeaderText';\npopupHeaderText.classList = 'popup-header-text';\npopupHeaderText.innerHTML = 'Test'; /// /// for test\npopupHeader.appendChild(popupHeaderText);\n\n// popup-header X-btn\nconst xBtn = document.createElement('p');\nxBtn.id = 'xBtn';\nxBtn.classList = 'x-btn';\nxBtn.innerHTML = 'X';\npopupHeader.appendChild(xBtn);\n\n// popup-image\nconst popupImage = document.createElement('img');\npopupImage.id = 'popupImage';\npopupImage.classList = 'popup-image';\npopupImage.src = _assets_pokemonImg_png__WEBPACK_IMPORTED_MODULE_1__; /// ////////// for test\npopupImage.alt = 'pokemon';\n\n// div prube\nconst div = document.createElement('div');\ndiv.classList = 'div-container';\ndiv.appendChild(popupImage);\npopupWindow.appendChild(div);\n\n// popup-image-details\nconst popupDetail = document.createElement('div');\npopupDetail.id = 'popupDetail';\npopupDetail.classList = 'popup-image-detail d-grid-2col';\n/// /////////////// for test\npopupDetail.innerHTML = `\n                <p class=\"popup-detail-item\">Color : Green</p>\n                <p class=\"popup-detail-item\">Age : 6 years</p>\n                <p class=\"popup-detail-item\">Power : 132</p>\n                <p class=\"popup-detail-item\">Speed : 42 KM/h</p>\n`;\npopupWindow.appendChild(popupDetail);\n\nxBtn.addEventListener('click', () => {\n  popup.classList.remove('display');\n});\n\nconst showPopup = (name, image, info) => {\n  popupHeaderText.innerHTML = name;\n  popupImage.src = image;\n  popupDetail.innerHTML = info;\n};\n\n// popup-comment-header\nconst popupCommentHeader = document.createElement('h3');\npopupCommentHeader.classList = 'popup-comment-header';\npopupCommentHeader.innerHTML = 'Comments (4)'; /// /////// for test\npopupWindow.appendChild(popupCommentHeader);\n\n// popup-engage section\nconst engage = document.createElement('div');\nengage.classList = 'd-grid-2col';\npopupWindow.appendChild(engage);\n\n// popup-comment-record\nconst popupCommentRecord = document.createElement('div');\npopupCommentRecord.classList = 'popup-comment-record';\nengage.appendChild(popupCommentRecord);\n\n// popup-comment-list\nconst popupCommentList = document.createElement('ul');\npopupCommentList.id = 'popupCommentList';\npopupCommentList.classList = 'popup-comment-list';\npopupCommentRecord.appendChild(popupCommentList);\n\n// popup-new-comment\nconst popupNewComment = document.createElement('div');\npopupNewComment.classList = 'popup-new-comment';\nengage.appendChild(popupNewComment);\n\n// popup-comment-input name\nconst popupCommentInputName = document.createElement('input');\npopupCommentInputName.id = 'popupCommentInputName';\npopupCommentInputName.classList = 'popup-comment-input';\npopupCommentInputName.type = 'text';\npopupCommentInputName.placeholder = 'Your name...';\npopupNewComment.appendChild(popupCommentInputName);\n\n// popup-comment-input comment\nconst popupCommentInputComment = document.createElement('textarea');\npopupCommentInputComment.id = 'popupCommentInputComment';\npopupCommentInputComment.classList = 'popup-comment-input popup-new-comment-text';\npopupCommentInputComment.cols = '15';\npopupCommentInputComment.rows = '4';\npopupCommentInputComment.placeholder = 'Your Comment...';\npopupNewComment.appendChild(popupCommentInputComment);\n\n// popup-comment-btn\nconst popupCommentBtn = document.createElement('a');\npopupCommentBtn.id = 'popupCommentBtn';\npopupCommentBtn.classList = 'popup-comment-btn';\npopupCommentBtn.innerHTML = 'Comment';\npopupNewComment.appendChild(popupCommentBtn);\n\n/// get comments\nconst getComments = async (itemId) => {\n  const commentsAPI = `${_baseApis_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]}/comments?item_id=${itemId}`;\n  await fetch(commentsAPI).then((response) => response.json()).then((json) => {\n    if (json.length === undefined) {\n      popupCommentHeader.innerHTML = 'Comments (0)';\n      popupCommentList.innerHTML = '';\n    } else {\n      popupCommentList.innerHTML = '';\n      json.forEach((element) => {\n        const newComment = document.createElement('li');\n        newComment.classList = 'popup-comment-item';\n        newComment.innerHTML = ` \n                <label class=\"popup-comment-author\">${element.username}</label>\n                <p class=\"popup-comment-text\">${element.comment}</p>\n                <p class=\"popup-comment-date\">${element.creation_date}</p>`;\n        popupCommentList.appendChild(newComment);\n      });\n    }\n  }).catch((e) => e);\n  const qtyComments = (0,_popup_counter_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('popup-comment-item');\n  popupCommentHeader.innerHTML = `Comments (${qtyComments})`;\n};\n\n//  add new comment\n\nconst addComment = async (itemId) => {\n  const commentsAPI = `${_baseApis_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]}/comments`;\n  const id = itemId;\n  const name = document.getElementById('popupCommentInputName').value;\n  const comment = document.getElementById('popupCommentInputComment').value;\n  if (name === '' || comment === '') return;\n\n  await fetch(commentsAPI, {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: id,\n      username: name,\n      comment,\n    }),\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n  }).then((response) => {\n    getComments(itemId);\n    document.getElementById('popupCommentInputName').value = '';\n    document.getElementById('popupCommentInputComment').value = '';\n    return response.json();\n  }).catch((e) => e);\n};\n\nlet commentID = 0;\nfunction getCommentID(id) {\n  commentID = id;\n}\n\n// -- comment button eventlistener\npopupCommentBtn.addEventListener('click', () => {\n  addComment(commentID);\n});\n\n\n//# sourceURL=webpack://mv-pokeapp/./src/popup-comment.js?");

/***/ }),

/***/ "./src/popup-counter.js":
/*!******************************!*\
  !*** ./src/popup-counter.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// counts the number of elements of a given class\n\nconst CounterCheck = (pClassName) => {\n  const contaExist = document.getElementsByClassName(`${pClassName}`);\n  return contaExist.length;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CounterCheck);\n\n//# sourceURL=webpack://mv-pokeapp/./src/popup-counter.js?");

/***/ }),

/***/ "./src/assets/bug.svg":
/*!****************************!*\
  !*** ./src/assets/bug.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/bug.svg\";\n\n//# sourceURL=webpack://mv-pokeapp/./src/assets/bug.svg?");

/***/ }),

/***/ "./src/assets/dark.svg":
/*!*****************************!*\
  !*** ./src/assets/dark.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/dark.svg\";\n\n//# sourceURL=webpack://mv-pokeapp/./src/assets/dark.svg?");

/***/ }),

/***/ "./src/assets/dragon.svg":
/*!*******************************!*\
  !*** ./src/assets/dragon.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/dragon.svg\";\n\n//# sourceURL=webpack://mv-pokeapp/./src/assets/dragon.svg?");

/***/ }),

/***/ "./src/assets/electric.svg":
/*!*********************************!*\
  !*** ./src/assets/electric.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/electric.svg\";\n\n//# sourceURL=webpack://mv-pokeapp/./src/assets/electric.svg?");

/***/ }),

/***/ "./src/assets/fairy.svg":
/*!******************************!*\
  !*** ./src/assets/fairy.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/fairy.svg\";\n\n//# sourceURL=webpack://mv-pokeapp/./src/assets/fairy.svg?");

/***/ }),

/***/ "./src/assets/fighting.svg":
/*!*********************************!*\
  !*** ./src/assets/fighting.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/fighting.svg\";\n\n//# sourceURL=webpack://mv-pokeapp/./src/assets/fighting.svg?");

/***/ }),

/***/ "./src/assets/fire.svg":
/*!*****************************!*\
  !*** ./src/assets/fire.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/fire.svg\";\n\n//# sourceURL=webpack://mv-pokeapp/./src/assets/fire.svg?");

/***/ }),

/***/ "./src/assets/flying.svg":
/*!*******************************!*\
  !*** ./src/assets/flying.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/flying.svg\";\n\n//# sourceURL=webpack://mv-pokeapp/./src/assets/flying.svg?");

/***/ }),

/***/ "./src/assets/ghost.svg":
/*!******************************!*\
  !*** ./src/assets/ghost.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/ghost.svg\";\n\n//# sourceURL=webpack://mv-pokeapp/./src/assets/ghost.svg?");

/***/ }),

/***/ "./src/assets/grass.svg":
/*!******************************!*\
  !*** ./src/assets/grass.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/grass.svg\";\n\n//# sourceURL=webpack://mv-pokeapp/./src/assets/grass.svg?");

/***/ }),

/***/ "./src/assets/ground.svg":
/*!*******************************!*\
  !*** ./src/assets/ground.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/ground.svg\";\n\n//# sourceURL=webpack://mv-pokeapp/./src/assets/ground.svg?");

/***/ }),

/***/ "./src/assets/ice.svg":
/*!****************************!*\
  !*** ./src/assets/ice.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/ice.svg\";\n\n//# sourceURL=webpack://mv-pokeapp/./src/assets/ice.svg?");

/***/ }),

/***/ "./src/assets/normal.svg":
/*!*******************************!*\
  !*** ./src/assets/normal.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/normal.svg\";\n\n//# sourceURL=webpack://mv-pokeapp/./src/assets/normal.svg?");

/***/ }),

/***/ "./src/assets/poison.svg":
/*!*******************************!*\
  !*** ./src/assets/poison.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/poison.svg\";\n\n//# sourceURL=webpack://mv-pokeapp/./src/assets/poison.svg?");

/***/ }),

/***/ "./src/assets/pokemonImg.png":
/*!***********************************!*\
  !*** ./src/assets/pokemonImg.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/pokemonImg.png\";\n\n//# sourceURL=webpack://mv-pokeapp/./src/assets/pokemonImg.png?");

/***/ }),

/***/ "./src/assets/psychic.svg":
/*!********************************!*\
  !*** ./src/assets/psychic.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/psychic.svg\";\n\n//# sourceURL=webpack://mv-pokeapp/./src/assets/psychic.svg?");

/***/ }),

/***/ "./src/assets/rock.svg":
/*!*****************************!*\
  !*** ./src/assets/rock.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/rock.svg\";\n\n//# sourceURL=webpack://mv-pokeapp/./src/assets/rock.svg?");

/***/ }),

/***/ "./src/assets/steel.svg":
/*!******************************!*\
  !*** ./src/assets/steel.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/steel.svg\";\n\n//# sourceURL=webpack://mv-pokeapp/./src/assets/steel.svg?");

/***/ }),

/***/ "./src/assets/water.svg":
/*!******************************!*\
  !*** ./src/assets/water.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/water.svg\";\n\n//# sourceURL=webpack://mv-pokeapp/./src/assets/water.svg?");

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