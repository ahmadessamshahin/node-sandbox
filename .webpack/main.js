/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ 'use strict';
  /******/ var __webpack_modules__ = {
    /***/ './src/config/logger.ts':
      /*!******************************!*\
  !*** ./src/config/logger.ts ***!
  \******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! winston */ \"winston\");\n/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(winston__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _secrets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./secrets */ \"./src/config/secrets.ts\");\n\n\nconst levels = {\n    error: 0,\n    warn: 1,\n    info: 2,\n    http: 3,\n    debug: 4\n};\nconst level = () => {\n    const isDevelopment = _secrets__WEBPACK_IMPORTED_MODULE_1__.default.NODE_ENV === 'development';\n    return isDevelopment ? 'debug' : 'warn';\n};\nconst colors = {\n    error: 'red',\n    warn: 'yellow',\n    info: 'green',\n    http: 'magenta',\n    debug: 'white'\n};\nwinston__WEBPACK_IMPORTED_MODULE_0___default().addColors(colors);\nconst format = winston__WEBPACK_IMPORTED_MODULE_0___default().format.combine(winston__WEBPACK_IMPORTED_MODULE_0___default().format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }), winston__WEBPACK_IMPORTED_MODULE_0___default().format.colorize({ all: true }), winston__WEBPACK_IMPORTED_MODULE_0___default().format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`));\nconst transports = [\n    new (winston__WEBPACK_IMPORTED_MODULE_0___default().transports.Console)(),\n    new (winston__WEBPACK_IMPORTED_MODULE_0___default().transports.File)({\n        filename: 'logs/error.log',\n        level: 'error'\n    }),\n    new (winston__WEBPACK_IMPORTED_MODULE_0___default().transports.File)({ filename: 'logs/all.log' })\n];\nconst Logger = winston__WEBPACK_IMPORTED_MODULE_0___default().createLogger({\n    level: level(),\n    levels,\n    format,\n    transports\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logger);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXNhbmRib3gvLi9zcmMvY29uZmlnL2xvZ2dlci50cz8zNTliIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBOEI7QUFDRjtBQUU1QixNQUFNLE1BQU0sR0FBRztJQUNiLEtBQUssRUFBRSxDQUFDO0lBQ1IsSUFBSSxFQUFFLENBQUM7SUFDUCxJQUFJLEVBQUUsQ0FBQztJQUNQLElBQUksRUFBRSxDQUFDO0lBQ1AsS0FBSyxFQUFFLENBQUM7Q0FDVCxDQUFDO0FBRUYsTUFBTSxLQUFLLEdBQUcsR0FBRyxFQUFFO0lBQ2pCLE1BQU0sYUFBYSxHQUFHLHNEQUFZLEtBQUssYUFBYSxDQUFDO0lBQ3JELE9BQU8sYUFBYSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUMxQyxDQUFDLENBQUM7QUFFRixNQUFNLE1BQU0sR0FBRztJQUNiLEtBQUssRUFBRSxLQUFLO0lBQ1osSUFBSSxFQUFFLFFBQVE7SUFDZCxJQUFJLEVBQUUsT0FBTztJQUNiLElBQUksRUFBRSxTQUFTO0lBQ2YsS0FBSyxFQUFFLE9BQU87Q0FDZixDQUFDO0FBRUYsd0RBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFMUIsTUFBTSxNQUFNLEdBQUcsNkRBQXNCLENBQ25DLCtEQUF3QixDQUFDLEVBQUUsTUFBTSxFQUFFLHdCQUF3QixFQUFFLENBQUMsRUFDOUQsOERBQXVCLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFDdEMsNERBQXFCLENBQ25CLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQzdELENBQ0YsQ0FBQztBQUVGLE1BQU0sVUFBVSxHQUFHO0lBQ2pCLElBQUksbUVBQTBCLEVBQUU7SUFDaEMsSUFBSSxnRUFBdUIsQ0FBQztRQUMxQixRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLEtBQUssRUFBRSxPQUFPO0tBQ2YsQ0FBQztJQUNGLElBQUksZ0VBQXVCLENBQUMsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLENBQUM7Q0FDMUQsQ0FBQztBQUVGLE1BQU0sTUFBTSxHQUFHLDJEQUFvQixDQUFDO0lBQ2xDLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDZCxNQUFNO0lBQ04sTUFBTTtJQUNOLFVBQVU7Q0FDWCxDQUFDLENBQUM7QUFFSCxpRUFBZSxNQUFNLEVBQUMiLCJmaWxlIjoiLi9zcmMvY29uZmlnL2xvZ2dlci50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3aW5zdG9uIGZyb20gJ3dpbnN0b24nO1xuaW1wb3J0IGVudiBmcm9tICcuL3NlY3JldHMnO1xuXG5jb25zdCBsZXZlbHMgPSB7XG4gIGVycm9yOiAwLFxuICB3YXJuOiAxLFxuICBpbmZvOiAyLFxuICBodHRwOiAzLFxuICBkZWJ1ZzogNFxufTtcblxuY29uc3QgbGV2ZWwgPSAoKSA9PiB7XG4gIGNvbnN0IGlzRGV2ZWxvcG1lbnQgPSBlbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc7XG4gIHJldHVybiBpc0RldmVsb3BtZW50ID8gJ2RlYnVnJyA6ICd3YXJuJztcbn07XG5cbmNvbnN0IGNvbG9ycyA9IHtcbiAgZXJyb3I6ICdyZWQnLFxuICB3YXJuOiAneWVsbG93JyxcbiAgaW5mbzogJ2dyZWVuJyxcbiAgaHR0cDogJ21hZ2VudGEnLFxuICBkZWJ1ZzogJ3doaXRlJ1xufTtcblxud2luc3Rvbi5hZGRDb2xvcnMoY29sb3JzKTtcblxuY29uc3QgZm9ybWF0ID0gd2luc3Rvbi5mb3JtYXQuY29tYmluZShcbiAgd2luc3Rvbi5mb3JtYXQudGltZXN0YW1wKHsgZm9ybWF0OiAnWVlZWS1NTS1ERCBISDptbTpzczptcycgfSksXG4gIHdpbnN0b24uZm9ybWF0LmNvbG9yaXplKHsgYWxsOiB0cnVlIH0pLFxuICB3aW5zdG9uLmZvcm1hdC5wcmludGYoXG4gICAgKGluZm8pID0+IGAke2luZm8udGltZXN0YW1wfSAke2luZm8ubGV2ZWx9OiAke2luZm8ubWVzc2FnZX1gXG4gIClcbik7XG5cbmNvbnN0IHRyYW5zcG9ydHMgPSBbXG4gIG5ldyB3aW5zdG9uLnRyYW5zcG9ydHMuQ29uc29sZSgpLFxuICBuZXcgd2luc3Rvbi50cmFuc3BvcnRzLkZpbGUoe1xuICAgIGZpbGVuYW1lOiAnbG9ncy9lcnJvci5sb2cnLFxuICAgIGxldmVsOiAnZXJyb3InXG4gIH0pLFxuICBuZXcgd2luc3Rvbi50cmFuc3BvcnRzLkZpbGUoeyBmaWxlbmFtZTogJ2xvZ3MvYWxsLmxvZycgfSlcbl07XG5cbmNvbnN0IExvZ2dlciA9IHdpbnN0b24uY3JlYXRlTG9nZ2VyKHtcbiAgbGV2ZWw6IGxldmVsKCksXG4gIGxldmVscyxcbiAgZm9ybWF0LFxuICB0cmFuc3BvcnRzXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nZ2VyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/config/logger.ts\n"
        );

        /***/
      },

    /***/ './src/config/secrets.ts':
      /*!*******************************!*\
  !*** ./src/config/secrets.ts ***!
  \*******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ "dotenv");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);\n\n(0,dotenv__WEBPACK_IMPORTED_MODULE_0__.config)();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    NODE_ENV: "development" || 0\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXNhbmRib3gvLi9zcmMvY29uZmlnL3NlY3JldHMudHM/ZGY4NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsOENBQU0sRUFBRSxDQUFDO0FBQ1QsaUVBQWU7SUFDYixRQUFRLEVBQUUsYUFBb0IsSUFBSSxDQUFhO0NBQ3ZDLEVBQUMiLCJmaWxlIjoiLi9zcmMvY29uZmlnL3NlY3JldHMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25maWcgfSBmcm9tICdkb3RlbnYnO1xuXG5jb25maWcoKTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgTk9ERV9FTlY6IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCdcbn0gYXMgY29uc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/config/secrets.ts\n'
        );

        /***/
      },

    /***/ './src/index.ts':
      /*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config/logger */ "./src/config/logger.ts");\n\n_config_logger__WEBPACK_IMPORTED_MODULE_0__.default.info("his");\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXNhbmRib3gvLi9zcmMvaW5kZXgudHM/ZmZiNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFtQztBQUVuQyx3REFBVyxDQUFDLEtBQUssQ0FBQyIsImZpbGUiOiIuL3NyYy9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMb2dnZXIgZnJvbSAnQGNvbmZpZy9sb2dnZXInXG5cbkxvZ2dlci5pbmZvKFwiaGlzXCIpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.ts\n'
        );

        /***/
      },

    /***/ dotenv:
      /*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
      /***/ (module) => {
        module.exports = require('dotenv');

        /***/
      },

    /***/ winston:
      /*!**************************!*\
  !*** external "winston" ***!
  \**************************/
      /***/ (module) => {
        module.exports = require('winston');

        /***/
      }

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {}
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module['default']
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval-source-map devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__('./src/index.ts');
  /******/
  /******/
})();
