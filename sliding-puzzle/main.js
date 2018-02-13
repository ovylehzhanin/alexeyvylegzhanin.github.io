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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Observer = exports.Observer = {
  _handlers: [],

  attachHandler: function attachHandler(owner, triggerName, handler) {
    this._handlers.push({
      owner: owner,
      triggerName: triggerName,
      handler: handler
    });
  },

  callTrigger: function callTrigger(triggerName, args, callback) {
    for (var i = 0, end = this._handlers.length; i < end; i += 1) {
      if (triggerName === this._handlers[i].triggerName) {
        this._handlers[i].handler.apply(this._handlers[i].owner, [].concat(args));
      }
    }
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var GAME_DEFAULTS = exports.GAME_DEFAULTS = {
  MATRIX_SIZE: 4,
  ITEMS: [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, ' ']],
  TARGET_ITEM_POSITION: [3, 3]
};

var KEY = exports.KEY = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _h = exports._h = {
  qs: function qs(selector, scope) {
    return (scope || document).querySelector(selector);
  },
  qsa: function qsa(selector, scope) {
    return (scope || document).querySelectorAll(selector);
  },
  cdf: function cdf() {
    return document.createDocumentFragment();
  },
  ce: function ce(nodeString) {
    return document.createElement(nodeString);
  }
};

var _2dSwap = exports._2dSwap = function _2dSwap(array, a, b) {
  array[a[0]][a[1]] = [array[b[0]][b[1]], array[b[0]][b[1]] = array[a[0]][a[1]]][0];

  return b;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _controller = __webpack_require__(4);

var _controller2 = _interopRequireDefault(_controller);

var _model = __webpack_require__(5);

var _model2 = _interopRequireDefault(_model);

var _view = __webpack_require__(6);

var _view2 = _interopRequireDefault(_view);

var _observer = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function main() {
  var model = new _model2.default();
  var view = new _view2.default();
  var controller = new _controller2.default(model, view);

  controller.init();
}

window.addEventListener('load', main, false);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _observer = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function () {
  function Controller(model, view) {
    _classCallCheck(this, Controller);

    this._model = model;
    this._view = view;
  }

  _createClass(Controller, [{
    key: 'init',
    value: function init() {
      var self = this;

      self._model.init();
      self._view.init();
      self._view.renderItems(self._model.items(), self._model.getPossibleMoves());
      self._view.renderStatistic(self._model.count());
      self._registerHandlers();
    }
  }, {
    key: '_registerHandlers',
    value: function _registerHandlers() {
      var self = this;

      _observer.Observer.attachHandler(null, 'arrowKeyPressed', function (direction) {
        self._model.makeMove(direction);
      });

      _observer.Observer.attachHandler(null, 'itemClicked', function (direction) {
        self._model.makeMove(direction);
      });

      _observer.Observer.attachHandler(null, 'itemsSwapped', function (previousPosition, currentPosition) {
        self._view.moveBlock(previousPosition, currentPosition, self._model.getPossibleMoves());
        self._view.renderStatistic(self._model.count());
      });

      _observer.Observer.attachHandler(null, 'shuffleButtonPressed', function (movesArray) {
        self._model.shufflePuzzleDeck(movesArray);
        self._view.renderItems(self._model.items(), self._model.getPossibleMoves());
        self._view.renderStatistic(self._model.count());
      });
    }
  }]);

  return Controller;
}();

exports.default = Controller;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _observer = __webpack_require__(0);

var _constants = __webpack_require__(1);

var _helpers = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Model = function () {
  function Model() {
    _classCallCheck(this, Model);

    this._matrixSize = null;
    this._items = [];
    this._possibleMoves = { left: [], up: [], right: [], down: [] };
    this._targetItemPosition = [];
    this._movesCount = 0;
  }

  _createClass(Model, [{
    key: 'matrixSize',
    value: function matrixSize(value) {
      if (value) {
        this._matrixSize = value;
        return;
      }

      return this._matrixSize;
    }
  }, {
    key: 'items',
    value: function items(value) {
      if (value) {
        this._items = value;
        return;
      }

      return this._items;
    }
  }, {
    key: 'targetItemPosition',
    value: function targetItemPosition(value) {
      if (value) {
        this._targetItemPosition = value;
        return;
      }

      return this._targetItemPosition;
    }
  }, {
    key: '_loadDefaults',
    value: function _loadDefaults() {
      this.matrixSize(_constants.GAME_DEFAULTS.MATRIX_SIZE);
      this.items(_constants.GAME_DEFAULTS.ITEMS);
      this.targetItemPosition(_constants.GAME_DEFAULTS.TARGET_ITEM_POSITION);
      this._calculatePossibleMoves();
    }
  }, {
    key: '_calculatePossibleMoves',
    value: function _calculatePossibleMoves() {
      var targetItemPosition = this.targetItemPosition();

      this._possibleMoves.left = [targetItemPosition[0], targetItemPosition[1] - 1];
      this._possibleMoves.up = [targetItemPosition[0] - 1, targetItemPosition[1]];
      this._possibleMoves.right = [targetItemPosition[0], targetItemPosition[1] + 1];
      this._possibleMoves.down = [targetItemPosition[0] + 1, targetItemPosition[1]];
    }
  }, {
    key: 'getPossibleMoves',
    value: function getPossibleMoves() {
      return this._possibleMoves;
    }
  }, {
    key: 'count',
    value: function count(param) {
      if (param === 'refresh') {
        this._movesCount = 0;
      } else if (param === 'increment') {
        this._movesCount++;
      } else {
        return this._movesCount;
      }
    }
  }, {
    key: '_swapItems',
    value: function _swapItems(direction) {
      var oldPosition = this.targetItemPosition();
      var directionIndex = this.getPossibleMoves()[direction],
          directionRow = directionIndex[0],
          directionColumn = directionIndex[1],
          items = this.items(),
          directionItem = items[directionRow] ? items[directionRow][directionColumn] : undefined;

      if (directionItem) {
        var newPosition = (0, _helpers._2dSwap)(items, oldPosition, [directionRow, directionColumn]);
        this.targetItemPosition(newPosition);
        this._calculatePossibleMoves();

        return [newPosition, oldPosition];
      } else {
        return false;
      }
    }
  }, {
    key: 'makeMove',
    value: function makeMove(direction) {
      var viewData = this._swapItems(direction);

      if (viewData) {
        this.count('increment');
        _observer.Observer.callTrigger('itemsSwapped', viewData);
      }
    }
  }, {
    key: 'shufflePuzzleDeck',
    value: function shufflePuzzleDeck(directions) {
      var self = this;

      directions.forEach(function (directionString) {
        self._swapItems(directionString);
      });

      self.count('refresh');
    }
  }, {
    key: 'init',
    value: function init() {
      this._loadDefaults();
    }
  }]);

  return Model;
}();

exports.default = Model;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _observer = __webpack_require__(0);

var _constants = __webpack_require__(1);

var _helpers = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var View = function () {
  function View() {
    _classCallCheck(this, View);

    this.elements = null;
  }

  _createClass(View, [{
    key: '_cacheTheDom',
    value: function _cacheTheDom() {
      var elements = {
        root: _helpers._h.qs('#root'),
        body: _helpers._h.qs('body'),
        statistic: _helpers._h.qs('#statistic', this.body),
        shuffleButton: _helpers._h.qs('#makeShuffle', this.body)
      };

      this.elements = elements;
    }
  }, {
    key: '_createItemNode',
    value: function _createItemNode(currentRow, currentColumn, innerValue) {
      var self = this,
          itemNode = _helpers._h.ce('div');

      itemNode.dataset.row = currentRow;
      itemNode.dataset.column = currentColumn;
      itemNode.dataset.value = innerValue;
      itemNode.dataset.clickDirection = '';
      itemNode.className = 'item';
      itemNode.addEventListener('click', function (event) {
        self._handlerItemClick(itemNode);
      }, false);

      return itemNode;
    }
  }, {
    key: '_handlerItemClick',
    value: function _handlerItemClick(itemNode) {
      if (itemNode.dataset.clickDirection != '') {
        var direction = itemNode.dataset.clickDirection;

        _observer.Observer.callTrigger('itemClicked', direction, null);
      }
    }
  }, {
    key: '_getDirectionFromKeyCode',
    value: function _getDirectionFromKeyCode(keyCode) {
      switch (keyCode) {
        case _constants.KEY.LEFT:
          return 'right';
          break;

        case _constants.KEY.UP:
          return 'down';
          break;

        case _constants.KEY.RIGHT:
          return 'left';
          break;

        case _constants.KEY.DOWN:
          return 'up';
          break;

        default:
          break;
      }
    }
  }, {
    key: 'renderItems',
    value: function renderItems(items, possibleMoves) {
      var self = this,
          _fragment = _helpers._h.cdf(),
          root = this.elements.root;


      for (var row = 0, rows = items.length; row < rows; row += 1) {
        for (var column = 0, columns = items[row].length; column < columns; column += 1) {
          if (items[row][column] != ' ') {
            _fragment.appendChild(self._createItemNode(row, column, items[row][column]));
          }
        }
      }

      root.innerHTML = '';
      root.appendChild(_fragment);
      self._highlightPossibleMoves(possibleMoves);
    }
  }, {
    key: 'renderStatistic',
    value: function renderStatistic(movesCount) {
      var movesCountNode = _helpers._h.qs('.statistic__moves-value');

      movesCountNode.textContent = movesCount;
    }
  }, {
    key: 'generateMovesArray',
    value: function generateMovesArray(count) {
      var self = this,
          movesArray = [];

      for (var i = 0; i < count; i += 1) {
        movesArray.push(self._getDirectionFromKeyCode(generateKeyCode(_constants.KEY.LEFT, _constants.KEY.DOWN + 1)));
      }

      function generateKeyCode(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }

      return movesArray;
    }
  }, {
    key: '_highlightPossibleMoves',
    value: function _highlightPossibleMoves(possibleMoves) {
      var root = this.elements.root;


      root.childNodes.forEach(function (item) {
        item.classList.remove('highlighted');
        item.dataset.clickDirection = '';
      });

      for (var move in possibleMoves) {
        var row = possibleMoves[move][0],
            column = possibleMoves[move][1],
            itemToHighlight = null;

        itemToHighlight = _helpers._h.qs('.item[data-row="' + row + '"][data-column="' + column + '"]', root);
        if (itemToHighlight) {
          itemToHighlight.classList.add('highlighted');
          itemToHighlight.dataset.clickDirection = move;
        }
      }
    }
  }, {
    key: 'moveBlock',
    value: function moveBlock(previousPosition, currentPosition, possibleMoves) {
      var root = this.elements.root;

      var elementToMove = _helpers._h.qs('.item[data-row="' + previousPosition[0] + '"][data-column="' + previousPosition[1] + '"]', root);

      if (elementToMove != null) {
        elementToMove.dataset.row = currentPosition[0];
        elementToMove.dataset.column = currentPosition[1];
      }

      this._highlightPossibleMoves(possibleMoves);
    }
  }, {
    key: '_bindEvents',
    value: function _bindEvents() {
      var self = this,
          shuffleButton = this.elements.shuffleButton;


      window.addEventListener('keydown', function (event) {
        var keyCode = event.keyCode,
            direction = self._getDirectionFromKeyCode(event.keyCode);

        if (keyCode >= 37 && keyCode <= 40) {
          _observer.Observer.callTrigger('arrowKeyPressed', direction, null);
        }
      }, false);

      shuffleButton.addEventListener('click', function (event) {
        var movesArray = self.generateMovesArray(400);

        _observer.Observer.callTrigger('shuffleButtonPressed', [movesArray], null);
      }, false);
    }
  }, {
    key: 'init',
    value: function init() {
      this._cacheTheDom();
      this._bindEvents();
    }
  }]);

  return View;
}();

exports.default = View;

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map