/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./gameboardreset.js":
/*!***************************!*\
  !*** ./gameboardreset.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst gameBoardReset = () => {\n  const squares = document.querySelectorAll('.game-board .cell');\n  Array.from(squares).forEach((e) => (e.innerText = ''));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (gameBoardReset);\n\n//# sourceURL=webpack:///./gameboardreset.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _showboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showboard */ \"./showboard.js\");\n/* harmony import */ var _gameboardreset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboardreset */ \"./gameboardreset.js\");\n/* eslint-disable no-return-assign */\n/* eslint-disable no-alert */\n\n\n\nlet gameBoard = ['', '', '', '', '', '', '', '', ''];\n\nconst playerConstructor = (name, token) => ({ name, token });\n\nlet player1;\nlet player2;\n\nconst form = document.querySelector('.user-input');\nform.addEventListener('submit', (e) => {\n  e.preventDefault();\n  const p1 = form.querySelector('input[id=\"p1\"]').value;\n  const p2 = form.querySelector('input[id=\"p2\"]').value;\n\n  if (p1 && p2) {\n    player1 = playerConstructor(`${p1}`, 'X');\n    player2 = playerConstructor(`${p2}`, '0');\n    Object(_showboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  }\n});\n\nconst gameBoardValue = (token, position) => {\n  gameBoard[position] = token;\n};\n\n// eslint-disable-next-line\nfunction wins(board, who, counter) {\n  if (\n    (board[0] === board[1] && board[0] === board[2] && board[0] !== '')\n            || (board[0] === board[3] && board[0] === board[6] && board[0] !== '')\n            || (board[0] === board[4] && board[0] === board[8] && board[0] !== '')\n            || (board[3] === board[4] && board[3] === board[5] && board[3] !== '')\n            || (board[6] === board[7] && board[6] === board[8] && board[6] !== '')\n            || (board[1] === board[4] && board[1] === board[7] && board[1] !== '')\n            || (board[2] === board[5] && board[2] === board[8] && board[2] !== '')\n            || (board[2] === board[4] && board[2] === board[6] && board[2] !== '')\n  ) {\n    alert(`${who.name} ( ${who.token} ) wins the Game!!!`);\n    Object(_showboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    return true;\n  }\n  if (counter > 9) {\n    alert(' Its a tie :-( ');\n    Object(_showboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    return true;\n  }\n}\n\nconst startGame = () => {\n  const play = document.querySelector('.game-board');\n  let turn = 1;\n  play.addEventListener('click', (e) => {\n    const cell = e.target;\n    const dataIndex = cell.getAttribute('data-index');\n    function mainFunc(playerAny, positionAny) {\n      cell.innerText = `${playerAny.token}`;\n      gameBoardValue(playerAny, positionAny);\n      turn += 1;\n      if (wins(gameBoard, playerAny, turn)) {\n        gameBoard = ['', '', '', '', '', '', '', '', ''];\n        turn = 1;\n        Object(_gameboardreset__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n      }\n    }\n    if (cell) {\n      if (gameBoard[dataIndex] === '') {\n        if (turn % 2 !== 0) {\n          mainFunc(player1, dataIndex);\n        } else if (turn % 2 === 0) {\n          mainFunc(player2, dataIndex);\n        }\n      } else {\n        alert('position taken');\n      }\n    }\n  });\n};\n\nstartGame();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./showboard.js":
/*!**********************!*\
  !*** ./showboard.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction showBoard() {\n  const board = document.querySelector('.game-board');\n  const names = document.querySelector('.user-input');\n  if (board.style.display === 'grid') {\n    board.style.display = 'none';\n  } else {\n    board.style.display = 'grid';\n  }\n  if (names.style.display === 'none') {\n    names.style.display = 'block';\n  } else {\n    names.style.display = 'none';\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (showBoard);\n\n//# sourceURL=webpack:///./showboard.js?");

/***/ })

/******/ });