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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/login.js":
/*!*********************!*\
  !*** ./js/login.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log('login loaded');\n\n//# sourceURL=webpack:///./js/login.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*jslint browser:true */\n__webpack_require__(/*! ./login */ \"./js/login.js\")\n'use strict';\n\nvar weatherConditions = new XMLHttpRequest();\nvar weatherForecast = new XMLHttpRequest();\nvar weatherLocation = new XMLHttpRequest();\nvar cObj;\nvar fObj;\nvar lObj;\nvar d = new Date();\nvar days = [\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"];\n\n\n\n\n\nweatherConditions.onload = function() {\n    if (weatherConditions.status === 200){\n        cObj = JSON.parse(weatherConditions.responseText); \n        console.log(cObj);\n        document.getElementById('weather').innerHTML = cObj.response[\"0\"].periods[\"0\"].weather\n        document.getElementById('temperature').innerHTML = cObj.response[\"0\"].periods[\"0\"].avgTempF + degreeSymbol();\n\n    } //end if\n}; //end function\n\n\n\n\n\n\nweatherLocation.responseType = 'text';\nweatherLocation.onload = function(){\n    if (weatherLocation.status === 200){\n        lObj = JSON.parse(weatherLocation.responseText);\n//        console.log(lObj);\n        document.getElementById('location').innerHTML = lObj.response[0].place.name + ', ' + lObj.response[0].place.state\n    }\n}\n\n\n\n\n\n\nweatherForecast.onload = function() {\nif (weatherForecast.status === 200){\n\tfObj = JSON.parse(weatherForecast.responseText);\n//\tconsole.log(fObj);\n    for (let i=1;i<4;i++){\n        document.getElementById('r'+i+'c1').innerHTML = days[d.getDay()+i];\n        document.getElementById('r'+i+'c2').src = '../AerisIcons/'+fObj.response[\"0\"].periods[i].icon;\n        document.getElementById('r'+i+'c3').innerHTML = fObj.response[\"0\"].periods[1].minTempF + degreeSymbol();\n        document.getElementById('r'+i+'c4').innerHTML = fObj.response[\"0\"].periods[1].maxTempF + degreeSymbol();\n    }\n    \n\t\n} //end if\n}; //end function\nloadWeather();\n\nfunction degreeSymbol(){\n    return '˚';\n}\n\nfunction loadWeather(){\n    \n    var zip=document.getElementById('zip').value;\n    if (zip==='') zip = '07205';\n    var forecastPath = 'https://api.aerisapi.com//forecasts/'+zip+'?client_id=NcHv0PCpZs4z1ewF6EmQB&client_secret=Inor4mEIDxWEF3bE9TFRv6xcGvoptNKEhB4v0Gze';\n    \n    var locationPath = 'https://api.aerisapi.com//places/closest?p='+zip+'&client_id=NcHv0PCpZs4z1ewF6EmQB&client_secret=Inor4mEIDxWEF3bE9TFRv6xcGvoptNKEhB4v0Gze';\n    \n    var conditionsPath = 'https://api.aerisapi.com//forecasts/'+zip+'?from=today&to=today&client_id=NcHv0PCpZs4z1ewF6EmQB&client_secret=Inor4mEIDxWEF3bE9TFRv6xcGvoptNKEhB4v0Gze';\n    \n\n    \n    // GET THE CONDITIONS\nweatherConditions.open('GET', conditionsPath,true);\nweatherConditions.responseType = 'text';\nweatherConditions.send(null);\n    \n        // GET THE FORECARST    \nweatherForecast.open('GET', forecastPath, true);\nweatherForecast.responseType = 'text'; \nweatherForecast.send();\n    \n    //Location\nweatherLocation.open('GET',locationPath, true)\nweatherLocation.responseType = 'text';\nweatherLocation.send();\n\n    \n    \n}\n\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/utils.js":
/*!*********************!*\
  !*** ./js/utils.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log('here is utils')\n\n//# sourceURL=webpack:///./js/utils.js?");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi ./js/utils.js ./js/main.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./js/utils.js */\"./js/utils.js\");\nmodule.exports = __webpack_require__(/*! ./js/main.js */\"./js/main.js\");\n\n\n//# sourceURL=webpack:///multi_./js/utils.js_./js/main.js?");

/***/ })

/******/ });