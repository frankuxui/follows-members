"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/profile/[id]";
exports.ids = ["pages/profile/[id]"];
exports.modules = {

/***/ "./pages/profile/[id].js":
/*!*******************************!*\
  !*** ./pages/profile/[id].js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Profile = ({ user  })=>{\n    console.log(user);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { id  } = router.query;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Profile del usuario\"\n            }, void 0, false, {\n                fileName: \"D:\\\\work\\\\Next\\\\follows-members\\\\pages\\\\profile\\\\[id].js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: user.avatar\n            }, void 0, false, {\n                fileName: \"D:\\\\work\\\\Next\\\\follows-members\\\\pages\\\\profile\\\\[id].js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    user.first_name,\n                    \" \",\n                    user.last_name\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\work\\\\Next\\\\follows-members\\\\pages\\\\profile\\\\[id].js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\work\\\\Next\\\\follows-members\\\\pages\\\\profile\\\\[id].js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined));\n};\nProfile.getInitialProps = async (ctx)=>{\n    const res = await fetch(`https://reqres.in/api/users/${ctx.query.id}`);\n    const json = await res.json();\n    console.log(json);\n    return {\n        user: json.data\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9maWxlL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXFDO0FBR3JDLEtBQUssQ0FBQ0MsT0FBTyxJQUFJLENBQUNDLENBQUFBLElBQUksR0FBQyxHQUFLLENBQUM7SUFDM0JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJO0lBQ2hCLEtBQUssQ0FBQ0csTUFBTSxHQUFHTCxzREFBUztJQUN4QixLQUFLLENBQUMsQ0FBQ00sQ0FBQUEsRUFBRSxHQUFDLEdBQUdELE1BQU0sQ0FBQ0UsS0FBSztJQUN6QixNQUFNLDZFQUNIQyxDQUFHOzt3RkFDREMsQ0FBRTswQkFBQyxDQUFtQjs7Ozs7O3dGQUN0QkMsQ0FBRztnQkFBQ0MsR0FBRyxFQUFFVCxJQUFJLENBQUNVLE1BQU07Ozs7Ozt3RkFDcEJDLENBQUU7O29CQUFHWCxJQUFJLENBQUNZLFVBQVU7b0JBQUMsQ0FBQztvQkFBRVosSUFBSSxDQUFDYSxTQUFTOzs7Ozs7Ozs7Ozs7O0FBRzdDLENBQUM7QUFFRGQsT0FBTyxDQUFDZSxlQUFlLFVBQVVDLEdBQUcsR0FBSyxDQUFDO0lBQ3pDLEtBQUssQ0FBQ0MsR0FBRyxHQUFHLEtBQUssQ0FBQ0MsS0FBSyxFQUFFLDRCQUE0QixFQUFFRixHQUFHLENBQUNWLEtBQUssQ0FBQ0QsRUFBRTtJQUNuRSxLQUFLLENBQUNjLElBQUksR0FBRyxLQUFLLENBQUNGLEdBQUcsQ0FBQ0UsSUFBSTtJQUMxQmpCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDZ0IsSUFBSTtJQUNoQixNQUFNLENBQUMsQ0FBQztRQUFDbEIsSUFBSSxFQUFFa0IsSUFBSSxDQUFDQyxJQUFJO0lBQUEsQ0FBQztBQUMzQixDQUFDO0FBRUQsaUVBQWVwQixPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9sbG93c21lbWJlcnMvLi9wYWdlcy9wcm9maWxlL1tpZF0uanM/ZmVkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5cclxuY29uc3QgUHJvZmlsZSA9ICh7dXNlcn0pID0+IHtcclxuICBjb25zb2xlLmxvZyh1c2VyKVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHtpZH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT5Qcm9maWxlIGRlbCB1c3VhcmlvPC9oMT5cclxuICAgICAgPGltZyBzcmM9e3VzZXIuYXZhdGFyfS8+XHJcbiAgICAgIDxoMj57IHVzZXIuZmlyc3RfbmFtZX0geyB1c2VyLmxhc3RfbmFtZX08L2gyPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5Qcm9maWxlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL3JlcXJlcy5pbi9hcGkvdXNlcnMvJHtjdHgucXVlcnkuaWR9YClcclxuIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXHJcbiAgY29uc29sZS5sb2coanNvbilcclxuICByZXR1cm4geyB1c2VyOiBqc29uLmRhdGF9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlByb2ZpbGUiLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsInJvdXRlciIsImlkIiwicXVlcnkiLCJkaXYiLCJoMSIsImltZyIsInNyYyIsImF2YXRhciIsImgyIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInJlcyIsImZldGNoIiwianNvbiIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/profile/[id].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/profile/[id].js"));
module.exports = __webpack_exports__;

})();