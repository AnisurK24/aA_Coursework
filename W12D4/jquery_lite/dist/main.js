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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n  constructor (nodes) {\n    this.nodes = nodes;\n  }\n\n  html(html) {\n    if (typeof html === \"string\") {\n      this.each((node) => {\n        node.innerHTML = html;\n        });\n    } else {\n      return this.nodes[0].innerHTML;\n    }\n  }\n\n  empty() {\n    this.html('');\n  }\n\n  append(children) {\n    if (this.nodes.length === 0) return;\n\n    if (typeof children === 'object' && !(children instanceof DomNodeCollection)) {\n      children = $l(children);\n    }\n    \n    if (typeof children === 'string') {\n      this.each((node) => {\n        node.innerHTML += children;\n      });\n    } else if (children instanceof DomNodeCollection) {\n      this.each((childNode) => {\n          node.appendChild(childNode.cloneNode(true));\n      });\n    }    \n  }\n\n  remove() {\n    this.each((node) => {\n      node.parentNode.removeChild(node);\n    });\n  }\n\n\n  addClass(newClass) {\n    this.each((node) => {\n      node.classList.add(newClass);\n    });\n  }\n\n  removeClass(oldClass) {\n    this.each((node) => {\n      node.classList.remove(oldClass);\n    });\n  }\n\n  toggleClass(toggleClass) {\n    this.each((node) => {\n      node.classList.toggle(toggleClass);\n    });\n  }\n\n  find(selector) {\n    let foundNodes = [];\n    this.each((node) => {\n      const nodeList = node.querySelectorAll(selector);\n      foundNodes = foundNodes.concat(Array.from(nodeList));\n    });\n    return new DomNodeCollection(foundNodes);\n  }\n\n  children() {\n    let childNodes = [];\n    this.each((node) => {\n      const childNodeList = node.children;\n      childNodes = childNodes.concat(Array.from(childNodeList));\n    });\n    return new DomNodeCollection(childNodes);\n  }\n\n  parent() {\n    const parentNodes = [];\n    this.each(({ parentNode }) => {\n      // we apply 'visited' property to prevent adding duplicate parents\n      if (!parentNode.visited) {\n        parentNodes.push(parentNode);\n        parentNode.visited = true;\n      }\n    });\n\n    parentNodes.forEach((node) => {\n      node.visited = false;\n    });\n    return new DomNodeCollection(parentNodes);\n  }\n\n  on(eventName, callback) {\n    this.each((node) => {\n      node.addEventListener(eventName, callback);\n      const eventKey = `jqliteEvents-${eventName}`;\n      if (typeof node[eventKey] === \"undefined\") {\n        node[eventKey] = [];\n      }\n      node[eventKey].push(callback);\n    });\n  }\n\n  off(eventName) {\n    this.each((node) => {\n      const eventKey = `jqliteEvents-${eventName}`;\n      if (node[eventKey]) {\n        node[eventKey].forEach((callback) => {\n          node.removeEventListener(eventName, callback);\n        });\n      }\n      node[eventKey] = [];\n    });\n  }\n}\n\n\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DomNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\")   \n\n\nwindow.$l = (arg) => {\n  if (arg instanceof 'string') {\n    return Array.from(document.querySelectorAll(arg));\n  } else if (arg instanceof HTMLElement) {\n    return new DomNodeCollection([arg]);\n  }\n  // \"object\":\n  //   if (arg instanceof HTMLElement) {\n  //   }\n\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// ``\n\n\n\n\n\n\n// const _docReadyCallbacks = [];\n// let _docReady = false;\n\nwindow.$l = (arg) => {\n  switch (typeof arg) {\n    case \"function\":\n      return registerDocReadyCallback(arg); \n    case \"string\":\n      return getNodesFromDom(arg);\n  }\n};\n;\n\n// getNodesFromDom = (selector) => {\n//   const nodes = document.querySelectorAll(selector);\n//   const nodesArray = Array.from(nodes);\n//   return new DomNodeCollection(nodesArray);\n// };\n\n// document.addEventListener('DOMContentLoaded', () => {\n//   _docReady = true;\n//   _docReadyCallbacks.forEach(func => func());\n// });\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });