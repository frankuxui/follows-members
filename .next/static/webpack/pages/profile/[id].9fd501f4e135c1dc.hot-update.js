"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profile/[id]",{

/***/ "./pages/profile/[id].js":
/*!*******************************!*\
  !*** ./pages/profile/[id].js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_work_Next_follows_members_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_work_Next_follows_members_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_work_Next_follows_members_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Profile = function(param) {\n    var user = param.user;\n    _s();\n    console.log(user.email);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var id = router.query.id;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                    children: \"Goback\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\work\\\\Next\\\\follows-members\\\\pages\\\\profile\\\\[id].js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\work\\\\Next\\\\follows-members\\\\pages\\\\profile\\\\[id].js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: \"Profile del usuario\"\n            }, void 0, false, {\n                fileName: \"D:\\\\work\\\\Next\\\\follows-members\\\\pages\\\\profile\\\\[id].js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                src: user.avatar\n            }, void 0, false, {\n                fileName: \"D:\\\\work\\\\Next\\\\follows-members\\\\pages\\\\profile\\\\[id].js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                children: [\n                    user.first_name,\n                    \" \",\n                    user.last_name\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\work\\\\Next\\\\follows-members\\\\pages\\\\profile\\\\[id].js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\work\\\\Next\\\\follows-members\\\\pages\\\\profile\\\\[id].js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, _this));\n};\n_s(Profile, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Profile;\nProfile.getInitialProps = (function() {\n    var _ref = _asyncToGenerator(D_work_Next_follows_members_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(ctx) {\n        var res, json;\n        return D_work_Next_follows_members_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch(\"https://reqres.in/api/users/\".concat(ctx.query.id));\n                case 2:\n                    res = _ctx.sent;\n                    _ctx.next = 5;\n                    return res.json();\n                case 5:\n                    json = _ctx.sent;\n                    console.log(json);\n                    return _ctx.abrupt(\"return\", {\n                        user: json.data\n                    });\n                case 8:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function(ctx) {\n        return _ref.apply(this, arguments);\n    };\n})();\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9maWxlL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFxQztBQUNUO0FBQ2dCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUc1QyxHQUFLLENBQUNHLE9BQU8sR0FBRyxRQUFRLFFBQUksQ0FBQztRQUFYQyxJQUFJLFNBQUpBLElBQUk7O0lBRXBCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDRyxLQUFLO0lBQ3RCLEdBQUssQ0FBQ0MsTUFBTSxHQUFHUixzREFBUztJQUN4QixHQUFLLENBQUVTLEVBQUUsR0FBSUQsTUFBTSxDQUFDRSxLQUFLLENBQWxCRCxFQUFFO0lBRVQsTUFBTSw2RUFDSFAsMERBQU07O3dGQUNKRCxrREFBSTtnQkFBQ1UsSUFBSSxFQUFDLENBQUc7c0dBQ1hDLENBQUM7OEJBQUMsQ0FBTTs7Ozs7Ozs7Ozs7d0ZBRVZDLENBQUU7MEJBQUMsQ0FBbUI7Ozs7Ozt3RkFDdEJDLENBQUc7Z0JBQUNDLEdBQUcsRUFBRVgsSUFBSSxDQUFDWSxNQUFNOzs7Ozs7d0ZBQ3BCQyxDQUFFOztvQkFBR2IsSUFBSSxDQUFDYyxVQUFVO29CQUFDLENBQUM7b0JBQUVkLElBQUksQ0FBQ2UsU0FBUzs7Ozs7Ozs7Ozs7OztBQUc3QyxDQUFDO0dBaEJLaEIsT0FBTzs7UUFHSUgsa0RBQVM7OztLQUhwQkcsT0FBTztBQWtCYkEsT0FBTyxDQUFDaUIsZUFBZTt3S0FBRyxRQUFRLFNBQURDLEdBQUcsRUFBSyxDQUFDO1lBQ25DQyxHQUFHLEVBQ0hDLElBQUk7Ozs7OzJCQURRQyxLQUFLLENBQUUsQ0FBNEIsOEJBQWUsT0FBYkgsR0FBRyxDQUFDWCxLQUFLLENBQUNELEVBQUU7O29CQUE3RGEsR0FBRzs7MkJBQ1VBLEdBQUcsQ0FBQ0MsSUFBSTs7b0JBQXJCQSxJQUFJO29CQUNUbEIsT0FBTyxDQUFDQyxHQUFHLENBQUNpQixJQUFJO2lEQUNULENBQUM7d0JBQUNuQixJQUFJLEVBQUVtQixJQUFJLENBQUNFLElBQUk7b0JBQUEsQ0FBQzs7Ozs7O0lBQzNCLENBQUM7b0JBTGdDSixHQUFHOzs7O0FBT3BDLCtEQUFlbEIsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9maWxlL1tpZF0uanM/ZmVkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcblxyXG5cclxuY29uc3QgUHJvZmlsZSA9ICh7dXNlcn0pID0+IHtcclxuICBcclxuICBjb25zb2xlLmxvZyh1c2VyLmVtYWlsKVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHtpZH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgPGE+R29iYWNrPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxoMT5Qcm9maWxlIGRlbCB1c3VhcmlvPC9oMT5cclxuICAgICAgPGltZyBzcmM9e3VzZXIuYXZhdGFyfS8+XHJcbiAgICAgIDxoMj57IHVzZXIuZmlyc3RfbmFtZX0geyB1c2VyLmxhc3RfbmFtZX08L2gyPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5Qcm9maWxlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL3JlcXJlcy5pbi9hcGkvdXNlcnMvJHtjdHgucXVlcnkuaWR9YClcclxuIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXHJcbiAgY29uc29sZS5sb2coanNvbilcclxuICByZXR1cm4geyB1c2VyOiBqc29uLmRhdGF9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkxpbmsiLCJMYXlvdXQiLCJQcm9maWxlIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJlbWFpbCIsInJvdXRlciIsImlkIiwicXVlcnkiLCJocmVmIiwiYSIsImgxIiwiaW1nIiwic3JjIiwiYXZhdGFyIiwiaDIiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicmVzIiwianNvbiIsImZldGNoIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/profile/[id].js\n");

/***/ })

});