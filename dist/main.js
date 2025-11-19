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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/load */ \"./src/modules/load.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/catalog */ \"./src/modules/catalog.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_load__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_catalog__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_search__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n\n//# sourceURL=webpack://my-homework/./src/index.js?\n}");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Модальное окно корзины scriptModalCard\r\nconst scriptModalCard = () => {\r\n\r\n    // Инкапсуляция кода\r\n\r\n    const cartBtn = document.getElementById('cart')\r\n    const cartModal = document.querySelector('.cart')\r\n    const cartClose = cartModal.querySelector('.cart-close')\r\n\r\n\r\n    const openCard = () => {\r\n        cartModal.style.display = 'flex'\r\n    }\r\n\r\n    const closeCard = () => {\r\n        cartModal.style.display = 'none'\r\n    }\r\n\r\n    // Вариант 1 (можно навешивать много событий на одно действие)\r\n    cartBtn.addEventListener('click', openCard)\r\n\r\n    // Вариант 2 (это свойство объекто и оно может быть только одно)\r\n    cartClose.onclick = closeCard;\r\n\r\n}\r\n\r\n/* scriptModalCard(); */\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scriptModalCard);\r\n\r\n\n\n//# sourceURL=webpack://my-homework/./src/modules/cart.js?\n}");

/***/ }),

/***/ "./src/modules/catalog.js":
/*!********************************!*\
  !*** ./src/modules/catalog.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst scriptCatalog = () => {\r\n\r\n    const btnCatalog = document.querySelector('.catalog-button')\r\n    const catalogModal = document.querySelector('.catalog')\r\n    const catalogModalItems = document.querySelectorAll('.catalog li')\r\n\r\n    let isOpen = false;\r\n\r\n\r\n\r\n    btnCatalog.addEventListener('click', () => {\r\n        isOpen = !isOpen\r\n        isOpen ? catalogModal.style.display = 'block' : catalogModal.style.display = 'none'\r\n    })\r\n\r\n\r\n\r\n    catalogModalItems.forEach(item => {\r\n\r\n        item.addEventListener('click', () => {\r\n            const text = item.textContent\r\n            console.log(text);\r\n\r\n            (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n                (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.scriptCategoryFilter)(data, text));\r\n            })\r\n        })\r\n\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scriptCatalog); \n\n//# sourceURL=webpack://my-homework/./src/modules/catalog.js?\n}");

/***/ }),

/***/ "./src/modules/filters.js":
/*!********************************!*\
  !*** ./src/modules/filters.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   scriptCategoryFilter: () => (/* binding */ scriptCategoryFilter),\n/* harmony export */   scriptSearchFilter: () => (/* binding */ scriptSearchFilter)\n/* harmony export */ });\nconst scriptSearchFilter = (goods, value) => {\r\n\r\n    return goods.filter((item) => {\r\n        return item.title.toLowerCase().includes(value.toLowerCase())\r\n    });\r\n}\r\n\r\nconst scriptCategoryFilter = (goods, value) => {\r\n\r\n    return goods.filter((item) => {\r\n        return item.category === value\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://my-homework/./src/modules/filters.js?\n}");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Получение данных\r\nconst getData = (str) => {\r\n\r\n    return fetch(`\r\n        https://test-ozon-148a7-default-rtdb.firebaseio.com/goods.json\r\n        `)\r\n        .then((response) => {\r\n            return response.json();\r\n        })\r\n\r\n    /*         .then((response) => response.json())\r\n            .then((json) => console.log(json)); \r\n            \r\n            \r\n            `https://test-ozon-148a7-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}`)\r\n            \r\n            */\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://my-homework/./src/modules/getData.js?\n}");

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search */ \"./src/modules/search.js\");\n\r\n\r\n\r\n\r\nconst scriptLoad = () => {\r\n\r\n    (0,_search__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\r\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n        (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data);\r\n    })\r\n\r\n    /*  \r\n        import postData from \"./postData\";\r\n\r\n        const cartBtn = document.getElementById('cart')\r\n\r\n        cartBtn.addEventListener('click', () => {\r\n    \r\n            postData().then((data) => {\r\n                console.log(data);\r\n            })\r\n    \r\n            getData().then((data) => {\r\n                console.log(data);\r\n            })\r\n        }) */\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scriptLoad);\n\n//# sourceURL=webpack://my-homework/./src/modules/load.js?\n}");

/***/ }),

/***/ "./src/modules/renderGoods.js":
/*!************************************!*\
  !*** ./src/modules/renderGoods.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scriptRenderGoogs = (data) => {\r\n\r\n    const goodsWrapper = document.querySelector('.goods')\r\n\r\n    goodsWrapper.innerHTML = ''\r\n\r\n    data.forEach(element => {\r\n        // console.log(element);\r\n\r\n        goodsWrapper.insertAdjacentHTML('beforeend', `\r\n            <div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\r\n                <div class=\"card\">\r\n                    ${element.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\r\n                    <div class=\"card-img-wrapper\">\r\n                        <span class=\"card-img-top\"\r\n                            style=\"background-image: url('${element.img}')\"></span>\r\n                    </div>\r\n                    <div class=\"card-body justify-content-between\">\r\n                        <div class=\"card-price\">${element.price} ₽</div>\r\n                        <h5 class=\"card-title\">${element.title}</h5>\r\n                        <button class=\"btn btn-primary\">В корзину</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            `)\r\n\r\n    });\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scriptRenderGoogs);\n\n//# sourceURL=webpack://my-homework/./src/modules/renderGoods.js?\n}");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst scriptSearch = () => {\r\n    const searchInput = document.querySelector('.search-wrapper_input')\r\n\r\n    searchInput.addEventListener('input', (event) => {\r\n        const value = event.target.value\r\n        console.log(value);\r\n\r\n        (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n            (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.scriptSearchFilter)(data, value));\r\n        })\r\n\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scriptSearch);\n\n//# sourceURL=webpack://my-homework/./src/modules/search.js?\n}");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;