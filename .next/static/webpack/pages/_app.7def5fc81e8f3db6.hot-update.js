"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/BackToTop.js":
/*!*********************************!*\
  !*** ./components/BackToTop.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar BackToTop = function() {\n    _s();\n    //track curr height\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), currentHeight = ref[0], setCurrentHeight = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showScrollButton = ref1[0], setShowScrollButton = ref1[1];\n    //scroll to rop hndler fn\n    var scrollToTop = function() {\n        window.scrollTo({\n            top: 0,\n            left: 0,\n            behavior: \"smooth\"\n        });\n    };\n    //handle scroll\n    var handleScroll = function() {\n        var height = window.scrollY;\n        setCurrentHeight(height);\n        if (currentHeight > 200) {\n            setShowScrollButton(true);\n        } else {\n            setShowScrollButton(false);\n        }\n    };\n    //useEffect and clean up function\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.addEventListener(\"scroll\", handleScroll);\n        (function() {\n            return window.removeEventListener(\"scroll\", handleScroll);\n        });\n    }, [\n        currentHeight\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().backBtn),\n            children: showScrollButton ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                onClick: scrollToTop,\n                children: \" \"\n            }, void 0, false, {\n                fileName: \"/Users/kripukhadka/Documents/GitHub/Blog-With-Contentful/components/BackToTop.js\",\n                lineNumber: 41,\n                columnNumber: 28\n            }, _this) : \"\"\n        }, void 0, false, {\n            fileName: \"/Users/kripukhadka/Documents/GitHub/Blog-With-Contentful/components/BackToTop.js\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/kripukhadka/Documents/GitHub/Blog-With-Contentful/components/BackToTop.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, _this);\n};\n_s(BackToTop, \"ihwtC0nD02yXo+6vkTKPCmd99yA=\");\n_c = BackToTop;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BackToTop);\nvar _c;\n$RefreshReg$(_c, \"BackToTop\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0JhY2tUb1RvcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQW1EO0FBQ0o7O0FBRS9DLElBQU1JLFNBQVMsR0FBRyxXQUFNOztJQUN0QixtQkFBbUI7SUFDbkIsSUFBMENILEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFMdkQsYUFLc0IsR0FBc0JBLEdBQVcsR0FBakMsRUFMdEIsZ0JBS3dDLEdBQUlBLEdBQVcsR0FBZjtJQUN0QyxJQUFnREEsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQU5qRSxnQkFNeUIsR0FBeUJBLElBQWUsR0FBeEMsRUFOekIsbUJBTThDLEdBQUlBLElBQWUsR0FBbkI7SUFFNUMseUJBQXlCO0lBRXpCLElBQU1RLFdBQVcsR0FBRyxXQUFJO1FBQ3RCQyxNQUFNLENBQUNDLFFBQVEsQ0FBQztZQUFFQyxHQUFHLEVBQUMsQ0FBQztZQUFFQyxJQUFJLEVBQUUsQ0FBQztZQUFFQyxRQUFRLEVBQUUsUUFBUTtTQUFFLENBQUMsQ0FBQztLQUN6RDtJQUVELGVBQWU7SUFDZixJQUFNQyxZQUFZLEdBQUcsV0FBTTtRQUN6QixJQUFJQyxNQUFNLEdBQUdOLE1BQU0sQ0FBQ08sT0FBTztRQUUzQlgsZ0JBQWdCLENBQUNVLE1BQU0sQ0FBQyxDQUFDO1FBRXpCLElBQUlYLGFBQWEsR0FBRyxHQUFHLEVBQUU7WUFDdkJHLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzNCLE1BQ0c7WUFDQUEsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUI7S0FDRjtJQUVELGlDQUFpQztJQUNqQ04sZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RRLE1BQU0sQ0FBQ1EsZ0JBQWdCLENBQUMsUUFBUSxFQUFFSCxZQUFZLENBQUMsQ0FBQztRQUVoRDttQkFBTUwsTUFBTSxDQUFDUyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUVKLFlBQVksQ0FBQztTQUFBLEVBQUM7S0FDMUQsRUFBRTtRQUFDVixhQUFhO0tBQUMsQ0FBQyxDQUFDO0lBSXBCLHFCQUNFLDhEQUFDZSxLQUFHO2tCQUNGLDRFQUFDQyxJQUFFO1lBQUNDLFNBQVMsRUFBRW5CLHdFQUFjO3NCQUMxQkksZ0JBQWdCLGlCQUFFLDhEQUFDaUIsR0FBQztnQkFBQ0MsT0FBTyxFQUFFaEIsV0FBVzswQkFBRSxHQUFDOzs7OztxQkFBSSxHQUFHLEVBQUU7Ozs7O2lCQUNuRDs7Ozs7YUFHRCxDQUNOO0NBQ0g7R0EzQ0tMLFNBQVM7QUFBVEEsS0FBQUEsU0FBUztBQTZDZiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQmFja1RvVG9wLmpzPzM1M2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcblxuY29uc3QgQmFja1RvVG9wID0gKCkgPT4ge1xuICAvL3RyYWNrIGN1cnIgaGVpZ2h0XG4gIGNvbnN0IFtjdXJyZW50SGVpZ2h0LCBzZXRDdXJyZW50SGVpZ2h0XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc2hvd1Njcm9sbEJ1dHRvbiwgc2V0U2hvd1Njcm9sbEJ1dHRvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy9zY3JvbGwgdG8gcm9wIGhuZGxlciBmblxuXG4gIGNvbnN0IHNjcm9sbFRvVG9wID0gKCk9PntcbiAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6MCwgbGVmdDogMCwgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG4gIH1cblxuICAvL2hhbmRsZSBzY3JvbGxcbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgIGxldCBoZWlnaHQgPSB3aW5kb3cuc2Nyb2xsWTtcblxuICAgIHNldEN1cnJlbnRIZWlnaHQoaGVpZ2h0KTtcblxuICAgIGlmIChjdXJyZW50SGVpZ2h0ID4gMjAwKSB7XG4gICAgICBzZXRTaG93U2Nyb2xsQnV0dG9uKHRydWUpO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBzZXRTaG93U2Nyb2xsQnV0dG9uKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgLy91c2VFZmZlY3QgYW5kIGNsZWFuIHVwIGZ1bmN0aW9uXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcblxuICAgICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG4gIH0sIFtjdXJyZW50SGVpZ2h0XSk7XG5cbiBcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuYmFja0J0bn0+XG4gICAgICAgIHtzaG93U2Nyb2xsQnV0dG9uPyA8cCBvbkNsaWNrPXtzY3JvbGxUb1RvcH0+IDwvcD4gOiBcIlwifVxuICAgICAgPC9oMT5cblxuICAgIFxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFja1RvVG9wO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJCYWNrVG9Ub3AiLCJjdXJyZW50SGVpZ2h0Iiwic2V0Q3VycmVudEhlaWdodCIsInNob3dTY3JvbGxCdXR0b24iLCJzZXRTaG93U2Nyb2xsQnV0dG9uIiwic2Nyb2xsVG9Ub3AiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInRvcCIsImxlZnQiLCJiZWhhdmlvciIsImhhbmRsZVNjcm9sbCIsImhlaWdodCIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImgxIiwiY2xhc3NOYW1lIiwiYmFja0J0biIsInAiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/BackToTop.js\n");

/***/ })

});