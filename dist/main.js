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

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _stack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stack */ \"./src/stack.js\");\n\n\nwindow.onload = function () {\n  document.getElementById(\"createStack\").addEventListener(\"click\", createStack);\n  document.getElementById(\"fillStack\").addEventListener(\"click\", fillStack);\n  document.getElementById(\"addElement\").addEventListener(\"click\", addElement);\n  document.getElementById(\"peekElement\").addEventListener(\"click\", peekElement);\n  document.getElementById(\"popElement\").addEventListener(\"click\", popElement);\n  document.getElementById(\"printStack\").addEventListener(\"click\", printStack);\n  document.getElementById(\"clearStack\").addEventListener(\"click\", clearStack);\n  const elements = document.querySelectorAll(\".controls\");\n\n  for (const elem of elements) {\n    elem.disabled = true;\n  }\n\n  document.getElementById(\"createStack\").disabled = false;\n  let stack = null;\n\n  function reverseArray(array) {\n    const reversedArray = [];\n\n    for (let i = 0; i < array.length; i++) {\n      reversedArray[i] = array[array.length - 1 - i];\n    }\n\n    return reversedArray;\n  }\n\n  function getData() {\n    const data = this.data;\n    console.log(\"Data from stack is \" + reverseArray(data));\n    return reverseArray(data);\n  }\n\n  function createStack() {\n    stack = new _stack__WEBPACK_IMPORTED_MODULE_0__.default();\n    const elements = document.querySelectorAll(\".controls\");\n\n    for (const elem of elements) {\n      elem.disabled = false;\n    }\n\n    document.getElementById(\"createStack\").disabled = true;\n  }\n\n  function fillStack() {\n    for (let i = 0; i < 10; i++) {\n      stack.push(Math.floor(Math.random() * 11));\n    }\n  }\n\n  function addElement() {\n    const value = document.getElementById(\"elementField\").value;\n    stack.push(value);\n    document.getElementById(\"elementField\").value = \"\";\n  }\n\n  function peekElement() {\n    try {\n      const result = stack.peek();\n      console.log(\"Top element is \" + result);\n    } catch (e) {\n      console.warn(e);\n    }\n  }\n\n  function popElement() {\n    try {\n      console.log(\"Top element was \" + stack.pop());\n    } catch (e) {\n      console.warn(e);\n    }\n  }\n\n  function printStack() {\n    if (stack.isEmpty() == false) {\n      let result = getData.apply(stack);\n      result += \"\";\n      const splittedResult = result.split(\",\");\n      result = \"\";\n\n      for (let i = 0; i < stack.length(); i++) {\n        result += splittedResult[i] + \"\\n\";\n      }\n\n      if (result == \"\") {\n        console.warn(\"Stack is empty!\");\n      }\n\n      document.getElementById(\"stackField\").value = result;\n    } else if (stack.isEmpty != false) {\n      console.warn(\"Stack is empty!\");\n    }\n  }\n\n  function clearStack() {\n    if (stack.isEmpty() == false) {\n      while (stack.isEmpty() == false) {\n        stack.pop();\n      }\n\n      document.getElementById(\"stackField\").value = \"\";\n      console.log(\"Stack is cleared\");\n    } else {\n      console.warn(\"Stack is empty!\");\n    }\n  }\n};\n\n//# sourceURL=webpack://nc_task_02/./src/script.js?");

/***/ }),

/***/ "./src/stack.js":
/*!**********************!*\
  !*** ./src/stack.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Stack {\n  constructor() {\n    this.data = [];\n    this.top = -1;\n  }\n\n  push(element) {\n    this.top++;\n    this.data[this.top] = element;\n  }\n\n  length() {\n    return this.top + 1;\n  }\n\n  isEmpty() {\n    if (this.top == -1) {\n      return 1;\n    } else {\n      return 0;\n    }\n  }\n\n  pop() {\n    if (this.isEmpty() == false) {\n      this.top--;\n      return this.data.pop();\n    } else {\n      throw \"Stack is empty!\";\n    }\n  }\n\n  peek() {\n    if (this.isEmpty() == false) {\n      return this.data[this.top];\n    } else {\n      throw \"Stack is empty!\";\n    }\n  }\n\n}\n\n(function () {\n  const defaultLog = console.log;\n\n  console.log = function () {\n    const message = [];\n\n    while (arguments.length) {\n      message.push(\"We got the following from Stack: \" + [].shift.call(arguments));\n    }\n\n    defaultLog.apply(console, message);\n  };\n\n  const defaultWarn = console.warn;\n\n  console.warn = function () {\n    const message = [];\n\n    while (arguments.length) {\n      message.push(\"Warning from Stack! \" + [].shift.call(arguments));\n    }\n\n    defaultWarn.apply(console, message);\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stack);\n\n//# sourceURL=webpack://nc_task_02/./src/stack.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;