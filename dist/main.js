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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contact)\n/* harmony export */ });\nfunction contact(content){\r\n\r\n    content.replaceChildren();\r\n\r\n    const mainHeader = document.createElement('h1');\r\n    mainHeader.textContent = 'Contact Us';\r\n\r\n    //owner\r\n    const ownerContainer = document.createElement('div');\r\n    const managerContainer = document.createElement('div');\r\n    const mainChef = document.createElement('div');\r\n\r\n    ownerContainer.innerHTML=\r\n    `\r\n        <div>\r\n            <h3>John Bean</h3>\r\n            <p>\r\n                Owner <br>\r\n                555-555-5554<br>\r\n                myemail@mail.com\r\n            </p>\r\n        </div>\r\n    `\r\n    managerContainer.innerHTML=\r\n    `\r\n        <div>\r\n            <h3>Neil Armstrong</h3>\r\n            <p>\r\n                Manager <br>\r\n                555-532-5554<br>\r\n                myornotemail@mail.com\r\n            </p>\r\n        </div>\r\n    `\r\n    mainChef.innerHTML=\r\n    `\r\n        <div>\r\n            <h3>Arnold Dobronsky</h3>\r\n            <p>\r\n                Main Chef<br>\r\n                345-555-5554<br>\r\n                contactme@mail.com\r\n            </p>\r\n        </div>\r\n    `\r\n\r\n    content.append(mainHeader, ownerContainer, managerContainer, mainChef);\r\n    //manager\r\n    //main chef\r\n\r\n    return content;\r\n\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _images_food_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/food.jpg */ \"./src/images/food.jpg\");\n\r\n\r\nfunction home(content){\r\n    content.replaceChildren();\r\n    \r\n    const header = document.createElement('h1');\r\n    header.classList.add('headline');\r\n    header.textContent = 'My restaurant page';\r\n\r\n    const paragraph1 = document.createElement('p');\r\n    paragraph1.textContent = 'Ricuperata vi improvviso animatrici ah. Atto se avro di nilo. Impaziente obbedivamo tu la trattenuto ritroverai finalmente ed il ricuperato. Nascondeva finalmente trapassato indicibili ti mi or le. No al palpitante sostenendo appartiene sbigottito ho no. Ai ricuperato sfaldavano rientrarvi da te silenziosa restituire. Nel gambe omeri lauri qui mai mille rombo. Ribollisse trascinava sue indicibile all dormissero lineamento visitatore. Elefantina aspettando impazienza voluttuosa conservava ai ha so immobilita. Supplizio benedetto se desiderio abbassano ho benedetta assistere Obliare corrosi confini pollici ve al deposti monella.'\r\n       \r\n    const description = document.createElement('div');\r\n    description.appendChild(paragraph1);\r\n\r\n    const paragraph2 = document.createElement('p');\r\n    paragraph2.textContent = 'Escito vedono seduce lo tavola veduta ch monaco. Inebriato dov riconosce eri chiamando consiglio ora. Salire voi medico gli soffio statue udi. Restituire conservava mi ai lineamento perfezione ci scomparire oh raccontava. Prime col magro siamo polsi osi. Sue via sonno dov nel versi alcun siate possa salde. ';\r\n\r\n    description.appendChild(paragraph2);\r\n\r\n    const image = document.createElement('img');\r\n    image.src = _images_food_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n\r\n    \r\n    content.appendChild(header);\r\n    content.appendChild(description);\r\n    content.appendChild(image);\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _images_background_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/background.jpg */ \"./src/images/background.jpg\");\n\r\n\r\n\r\n\r\n\r\nconst content = document.querySelector('#content');\r\nconst homeTab = document.querySelector('#home-tab');\r\nconst menuTab = document.querySelector('#menu-tab');\r\nconst contactTab = document.querySelector('#contact-tab');\r\nconst body = document.querySelector('body')\r\n\r\nbody.style.backgroundImage = _images_background_jpg__WEBPACK_IMPORTED_MODULE_3__;\r\n\r\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(content);\r\n\r\nhomeTab.addEventListener('click', () => {\r\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(content);\r\n})\r\nmenuTab.addEventListener('click', () => {\r\n    ;(0,_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(content);\r\n})\r\ncontactTab.addEventListener('click', () => {\r\n    ;(0,_contact_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(content);\r\n})\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\nfunction menu(content){\r\n\r\n    content.replaceChildren();\r\n\r\n    const mainHeader = document.createElement('h1');\r\n    mainHeader.textContent = 'Menu';\r\n\r\n    //beverages\r\n    const subheader1 = document.createElement('h3');\r\n    const beverages = document.createElement('div');\r\n    const bevList = document.createElement('ul');\r\n    \r\n    subheader1.textContent = 'Beverages';\r\n\r\n    for (let i = 0; i < 6; i++) {\r\n        const li = document.createElement('li');\r\n        li.textContent = `Dish number ${i + 1}`;\r\n        bevList.appendChild(li);\r\n    }\r\n    \r\n    beverages.appendChild(subheader1);\r\n    beverages.appendChild(bevList);\r\n    \r\n    //main dishes\r\n    const subheader2 = document.createElement('h3');\r\n    const mainDishes = document.createElement('div');\r\n    const mainList = document.createElement('ul');\r\n    \r\n    subheader2.textContent = 'Main dishes';\r\n\r\n    for (let i = 0; i < 6; i++) {\r\n        const li = document.createElement('li');\r\n        li.textContent = `Main dish number ${i + 1}`;\r\n        mainList.appendChild(li);\r\n    }\r\n    \r\n    mainDishes.appendChild(subheader2);\r\n    mainDishes.appendChild(mainList);\r\n    \r\n    const subheader3 = document.createElement('h3');\r\n    const desserts = document.createElement('div');\r\n    const dessertsList = document.createElement('ul');\r\n    \r\n    subheader3.textContent = 'Desserts';\r\n    \r\n\r\n    for (let i = 0; i < 6; i++) {\r\n        const li = document.createElement('li');\r\n        li.textContent = `Dessert number ${i + 1}`;\r\n        dessertsList.appendChild(li);\r\n    }\r\n    desserts.appendChild(subheader3);\r\n    desserts.appendChild(dessertsList);\r\n\r\n\r\n    content.append(mainHeader, beverages, mainDishes, desserts);\r\n\r\n    return content;\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/images/background.jpg":
/*!***********************************!*\
  !*** ./src/images/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"af60884d385e13f81e93.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/background.jpg?");

/***/ }),

/***/ "./src/images/food.jpg":
/*!*****************************!*\
  !*** ./src/images/food.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8044d086667d8f60bcb9.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/food.jpg?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;