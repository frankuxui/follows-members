"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Users; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.jsx\");\n/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-masonry-component */ \"./node_modules/react-masonry-component/lib/index.js\");\n/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_masonry_component__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Media */ \"./components/Media.jsx\");\n/* harmony import */ var _components_Avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Avatar */ \"./components/Avatar.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSP = true;\nfunction Users(param) {\n    var users = param.users;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), follow = ref1[0], setFollow = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setTimeout(function() {\n            return setLoading(true);\n        }, 3000);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var speed = 900;\n        var containerAnimation = document.querySelectorAll('.js-animation');\n        containerAnimation.forEach(function() {\n            var elements = document.querySelectorAll('.js-animation .js-delay');\n            elements.forEach(function(el) {\n                var elementOffset = el;\n                var offset = elementOffset.getBoundingClientRect().left * 0.5 + elementOffset.getBoundingClientRect().top;\n                var delay = parseFloat(offset / speed).toFixed(2);\n                elementOffset.style.transitionDelay = delay + 's';\n                elementOffset.classList.add('animated');\n            //console.log(delay + ' delay item');\n            });\n        });\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_masonry_component__WEBPACK_IMPORTED_MODULE_4___default()), {\n            className: \"row js-animation\"\n        }, void 0, false, {\n            fileName: \"D:\\\\work\\\\Next\\\\follows-members\\\\pages\\\\index.js\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\work\\\\Next\\\\follows-members\\\\pages\\\\index.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this));\n};\n_s(Users, \"HgVf91ExRUDC6BwoH0sMoClCpdQ=\");\n_c = Users;\nvar _c;\n$RefreshReg$(_c, \"Users\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDVztBQUNGO0FBQ0k7QUFDUztBQUNmO0FBQ0U7OztBQUcxQixRQUFRLENBQUNVLEtBQUssQ0FBQyxLQUFPLEVBQUMsQ0FBQztRQUFSQyxLQUFLLEdBQU4sS0FBTyxDQUFOQSxLQUFLOztJQUVsQyxHQUFLLENBQXlCVixHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxHQUFyQ1csT0FBTyxHQUFnQlgsR0FBZSxLQUE3QlksVUFBVSxHQUFJWixHQUFlO0lBQzdDLEdBQUssQ0FBdUJBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQW5DYSxNQUFNLEdBQWViLElBQWUsS0FBNUJjLFNBQVMsR0FBSWQsSUFBZTtJQUUzQ0MsZ0RBQVMsQ0FBQyxRQUFRLEdBQUYsQ0FBQztRQUNmYyxVQUFVLENBQUMsUUFBUTtZQUFGSCxNQUFNLENBQU5BLFVBQVUsQ0FBQyxJQUFJO1dBQUcsSUFBSTtJQUN6QyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUxYLGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDZixHQUFLLENBQUNlLEtBQUssR0FBRyxHQUFHO1FBQ2pCLEdBQUssQ0FBQ0Msa0JBQWtCLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsQ0FBZTtRQUNwRUYsa0JBQWtCLENBQUNHLE9BQU8sQ0FBQyxRQUFRLEdBQUYsQ0FBQztZQUNoQyxHQUFHLENBQUNDLFFBQVEsR0FBR0gsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxDQUF5QjtZQUNsRUUsUUFBUSxDQUFDRCxPQUFPLENBQUNFLFFBQVEsQ0FBUkEsRUFBRSxFQUFJLENBQUM7Z0JBQ3RCLEdBQUcsQ0FBQ0MsYUFBYSxHQUFHRCxFQUFFO2dCQUN0QixHQUFHLENBQUNFLE1BQU0sR0FBR0QsYUFBYSxDQUFDRSxxQkFBcUIsR0FBR0MsSUFBSSxHQUFHLEdBQUcsR0FBR0gsYUFBYSxDQUFDRSxxQkFBcUIsR0FBR0UsR0FBRztnQkFDekcsR0FBRyxDQUFDQyxLQUFLLEdBQUdDLFVBQVUsQ0FBQ0wsTUFBTSxHQUFDUixLQUFLLEVBQUVjLE9BQU8sQ0FBQyxDQUFDO2dCQUM5Q1AsYUFBYSxDQUFDUSxLQUFLLENBQUNDLGVBQWUsR0FBR0osS0FBSyxHQUFFLENBQUc7Z0JBQ2hETCxhQUFhLENBQUNVLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLENBQVU7WUFDdEMsRUFBcUM7WUFDdkMsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBR0QsTUFBTSw2RUFDSGhDLDBEQUFNOzhGQUNKQyxnRUFBTztZQUFDZ0MsU0FBUyxFQUFDLENBQWtCOzs7Ozs7Ozs7OztBQUszQyxDQUFDO0dBakN1QjFCLEtBQUs7S0FBTEEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBNYXNvbnJ5IGZyb20gJ3JlYWN0LW1hc29ucnktY29tcG9uZW50J1xyXG5pbXBvcnQgeyBDb250YWluZXIsIENvbCwgQ2FyZCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIlxyXG5pbXBvcnQgTWVkaWEgZnJvbSAnLi4vY29tcG9uZW50cy9NZWRpYSdcclxuaW1wb3J0IEF2YXRhciBmcm9tICcuLi9jb21wb25lbnRzL0F2YXRhcidcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2Vycyh7dXNlcnN9KXtcclxuXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtmb2xsb3csIHNldEZvbGxvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldExvYWRpbmcodHJ1ZSksIDMwMDApO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHNwZWVkID0gOTAwO1xyXG4gICAgY29uc3QgY29udGFpbmVyQW5pbWF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLWFuaW1hdGlvbicpXHJcbiAgICBjb250YWluZXJBbmltYXRpb24uZm9yRWFjaCgoKSA9PiB7XHJcbiAgICAgIHZhciBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1hbmltYXRpb24gLmpzLWRlbGF5JylcclxuICAgICAgZWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgdmFyIGVsZW1lbnRPZmZzZXQgPSBlbDtcclxuICAgICAgICB2YXIgb2Zmc2V0ID0gZWxlbWVudE9mZnNldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0ICogMC41ICsgZWxlbWVudE9mZnNldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcbiAgICAgICAgdmFyIGRlbGF5ID0gcGFyc2VGbG9hdChvZmZzZXQvc3BlZWQpLnRvRml4ZWQoMik7XHJcbiAgICAgICAgZWxlbWVudE9mZnNldC5zdHlsZS50cmFuc2l0aW9uRGVsYXkgPSBkZWxheSsgJ3MnXHJcbiAgICAgICAgZWxlbWVudE9mZnNldC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlZCcpXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhkZWxheSArICcgZGVsYXkgaXRlbScpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPE1hc29ucnkgY2xhc3NOYW1lPVwicm93IGpzLWFuaW1hdGlvblwiPlxyXG4gICAgICAgIFxyXG4gICAgICA8L01hc29ucnk+XHJcbiAgICA8L0xheW91dD5cclxuICApXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCl7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcmVxcmVzLmluL2FwaS91c2VycycpXHJcbiAgY29uc3QgdXNlcnMgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIGNvbnNvbGUubG9nKGNvbnRleHQpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICB1c2VyczogdXNlcnNcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxheW91dCIsIk1hc29ucnkiLCJDb250YWluZXIiLCJDb2wiLCJDYXJkIiwiTWVkaWEiLCJBdmF0YXIiLCJVc2VycyIsInVzZXJzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJmb2xsb3ciLCJzZXRGb2xsb3ciLCJzZXRUaW1lb3V0Iiwic3BlZWQiLCJjb250YWluZXJBbmltYXRpb24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxlbWVudHMiLCJlbCIsImVsZW1lbnRPZmZzZXQiLCJvZmZzZXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsZWZ0IiwidG9wIiwiZGVsYXkiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsInN0eWxlIiwidHJhbnNpdGlvbkRlbGF5IiwiY2xhc3NMaXN0IiwiYWRkIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});