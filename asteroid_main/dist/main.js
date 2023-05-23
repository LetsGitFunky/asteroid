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

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\n\n\nclass Asteroid extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    static RADIUS = 25;\n    static COLOR = \"#E97451\"\n\n    constructor({ pos }) {\n        super({\n            pos: pos,\n            vel: _util_js__WEBPACK_IMPORTED_MODULE_1__.randomVec(length),\n            color: Asteroid.COLOR,\n            radius: Asteroid.RADIUS\n        })\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Asteroid);\n\n\n//# sourceURL=webpack://asteroid_main/./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _asteroid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\n\n\nclass Game {\n    static DIM_X = 50;\n    static DIM_Y = 50;\n    static NUM_ASTEROIDS = 10;\n\n    constructor() {\n        this.dim_x = Game.DIM_X;\n        this.dim_y = Game.DIM_Y;\n        this.num_asteroids = Game.NUM_ASTEROIDS;\n        this.asteroids = [];\n\n        this.addAsteroids();\n    }\n\n    randomPosition() {\n        return [\n            Math.floor(Math.random() * this.dim_x),\n            Math.floor(Math.random() * this.dim_y)\n        ];\n    }\n\n    addAsteroids() {\n        for (let i = 0; i < this.num_asteroids; i++) {\n            this.asteroids.push(\n                new _asteroid__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({pos: this.randomPosition() })\n            )\n        }\n    }\n\n    draw(ctx) {\n        ctx.clearRect(0, 0, this.dim_x, this.dim_y)\n        this.asteroids.forEach(asteroid => {\n            asteroid.draw(ctx);\n        })\n    }\n\n    moveObjects() {\n        \n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n\n//# sourceURL=webpack://asteroid_main/./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nclass GameView {\n    constructor(game, ctx) {\n        this.game = game;\n        this.ctx = ctx;\n    }\n\n    start() {\n        // Call this.game.moveObjects and this.game.draw every 20 ms\n        setInterval(() => {\n            this.game.moveObjects();\n            this.game.draw(this.ctx);\n        }, 20);\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameView);\n\n\n//# sourceURL=webpack://asteroid_main/./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _asteroid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n// console.log(\"hello\")\n\n\n\n\n\n\nwindow.MovingObject = _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const canvasEl = document.getElementById(\"game-canvas\")\n    canvasEl.width = 500;\n    canvasEl.height = 700;\n    const ctx = canvasEl.getContext(\"2d\")\n    ctx.fillStyle = \"black\";\n    ctx.fillRect(0, 0, 500, 700);\n\n    ctx.fillStyle = \"pink\"\n    ctx.fillRect(50, 50, 80, 80)\n\n    const mo = new _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n        pos: [200, 200],\n        vel: [10, 10],\n        radius: 50,\n        color: \"#00FF00\"\n    });\n\n    // Draw the MovingObject\n    mo.draw(ctx);\n\n    const ast = new _asteroid__WEBPACK_IMPORTED_MODULE_1__[\"default\"]( {\n        pos: [30, 30]\n    })\n\n    ast.draw(ctx);\n\n    // const gogo = new Game();\n\n    // gogo.draw(ctx)\n\n    const game = new _game__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    const gameView = new _game_view__WEBPACK_IMPORTED_MODULE_3__[\"default\"](game, ctx);\n    gameView.start();\n})\n\n\n//# sourceURL=webpack://asteroid_main/./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass MovingObject {\n    constructor({ pos, vel, radius, color }) {\n        this.pos = pos;\n        this.vel = vel;\n        this.radius = radius;\n        this.color = color;\n    }\n\n    draw(ctx) {\n        ctx.beginPath();\n        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false);\n        ctx.fillStyle = this.color;\n        ctx.fill();\n        ctx.closePath();\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovingObject);\n// MovingObject.prototype.draw = function(ctx) {\n//     return new MovingObject(\n\n//     )\n// }\n\n\n\n\n\n    // const mo = new MovingObject({\n    //     pos: [30, 30],\n    //     vel: [10,10],\n    //     radius: 5,\n    //     color: \"#00FF00\"\n    // });\n\n\n//# sourceURL=webpack://asteroid_main/./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   randomVec: () => (/* binding */ randomVec),\n/* harmony export */   scale: () => (/* binding */ scale)\n/* harmony export */ });\n// Return a randomly oriented vector with the given length.\nfunction randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return scale([Math.sin(deg), Math.cos(deg)], length);\n}\n\n  // Scale the length of a vector by the given amount.\nfunction scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n}\n\n\n//# sourceURL=webpack://asteroid_main/./src/util.js?");

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