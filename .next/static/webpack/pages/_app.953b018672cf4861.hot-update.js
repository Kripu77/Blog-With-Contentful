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

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-reveal/Fade */ \"./node_modules/react-reveal/Fade.js\");\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProgressBar */ \"./components/ProgressBar.js\");\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Nav = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isOpen = ref[0], setIsOpen = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), width = ref1[0], setWidth = ref1[1];\n    //to track the width of the changing screen\n    var checkWidth = function() {\n        setWidth(window.innerWidth);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.addEventListener(\"resize\", checkWidth);\n        if (width > 700) {\n            setIsOpen(false);\n            document.body.classList.remove(\"navOpen\");\n        }\n        if (width < 700) {\n            if (isOpen) {\n                document.body.classList.add(\"navOpen\");\n            }\n            if (!isOpen) {\n                document.body.classList.remove(\"navOpen\");\n            }\n        }\n        //clean up function\n        return function() {\n            window.removeEventListener(\"resize\", checkWidth);\n        };\n    }, [\n        width,\n        isOpen\n    ]);\n    {\n        console.log(isOpen);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().navholder),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().mainNav),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().navbar),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().navheader),\n                                            onClick: function() {\n                                                return setIsOpen(false);\n                                            },\n                                            children: \"kripukhadka \\u2728\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kripukhadka/Documents/GitHub/Blog-With-Contentful/components/Nav.js\",\n                                            lineNumber: 47,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kripukhadka/Documents/GitHub/Blog-With-Contentful/components/Nav.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/kripukhadka/Documents/GitHub/Blog-With-Contentful/components/Nav.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                    className: isOpen ? (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().navVisible) : (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().navlink),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().innerLink),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                href: \"/blogs\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                    onClick: function() {\n                                                        return setIsOpen(!isOpen);\n                                                    },\n                                                    children: \" blogs\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/kripukhadka/Documents/GitHub/Blog-With-Contentful/components/Nav.js\",\n                                                    lineNumber: 59,\n                                                    columnNumber: 19\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/kripukhadka/Documents/GitHub/Blog-With-Contentful/components/Nav.js\",\n                                                lineNumber: 58,\n                                                columnNumber: 17\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                href: \"/\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                    children: [\n                                                        \" onClick=\",\n                                                        function() {\n                                                            return setIsOpen(!isOpen);\n                                                        },\n                                                        \" home\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/kripukhadka/Documents/GitHub/Blog-With-Contentful/components/Nav.js\",\n                                                    lineNumber: 62,\n                                                    columnNumber: 19\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/kripukhadka/Documents/GitHub/Blog-With-Contentful/components/Nav.js\",\n                                                lineNumber: 61,\n                                                columnNumber: 17\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/kripukhadka/Documents/GitHub/Blog-With-Contentful/components/Nav.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/kripukhadka/Documents/GitHub/Blog-With-Contentful/components/Nav.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kripukhadka/Documents/GitHub/Blog-With-Contentful/components/Nav.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().navToggler),\n                            onClick: function() {\n                                return setIsOpen(!isOpen);\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                width: \"30px\",\n                                height: \"30px\",\n                                viewBox: \"0 0 24 24\",\n                                fill: \"none\",\n                                className: isOpen ? (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().navTogglerfocus) : \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    d: \"M4 7H12M20 7H16M4 12H20M4 17H8M20 17H12\",\n                                    stroke: \"#2b3134\",\n                                    strokeWidth: \"1.7\",\n                                    strokeLinecap: \"round\",\n                                    strokeLinejoin: \"round\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kripukhadka/Documents/GitHub/Blog-With-Contentful/components/Nav.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/kripukhadka/Documents/GitHub/Blog-With-Contentful/components/Nav.js\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/kripukhadka/Documents/GitHub/Blog-With-Contentful/components/Nav.js\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kripukhadka/Documents/GitHub/Blog-With-Contentful/components/Nav.js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/kripukhadka/Documents/GitHub/Blog-With-Contentful/components/Nav.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProgressBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/kripukhadka/Documents/GitHub/Blog-With-Contentful/components/Nav.js\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kripukhadka/Documents/GitHub/Blog-With-Contentful/components/Nav.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, _this);\n};\n_s(Nav, \"v2LPbw3bEQVLYYezUKnwp6+mRmM=\");\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLE9BQUs7Ozs7Ozt5REFBSzs7Ozs7cURBQzVDOzs7Ozs7NkNBQ0M7Ozs7O3lDQUNGOzs7Ozs7aUNBQ0w7c0NBRVAsOERBQUM4QixRQUFNOzRCQUNMYixTQUFTLEVBQUV0QiwyRUFBaUI7NEJBQzVCK0IsT0FBTyxFQUFFO3VDQUFNekIsU0FBUyxDQUFDLENBQUNELE1BQU0sQ0FBQzs2QkFBQTtzQ0FFakMsNEVBQUNnQyxLQUFHO2dDQUNGQyxLQUFLLEVBQUMsNEJBQTRCO2dDQUNsQy9CLEtBQUssRUFBQyxNQUFNO2dDQUNaZ0MsTUFBTSxFQUFDLE1BQU07Z0NBQ2JDLE9BQU8sRUFBQyxXQUFXO2dDQUNuQkMsSUFBSSxFQUFDLE1BQU07Z0NBQ1huQixTQUFTLEVBQUVqQixNQUFNLEdBQUdMLGdGQUFzQixHQUFHLEVBQUU7MENBRS9DLDRFQUFDMkMsTUFBSTtvQ0FDSEMsQ0FBQyxFQUFDLHlDQUF5QztvQ0FDM0NDLE1BQU0sRUFBQyxTQUFTO29DQUNoQkMsV0FBVyxFQUFDLEtBQUs7b0NBQ2pCQyxhQUFhLEVBQUMsT0FBTztvQ0FDckJDLGNBQWMsRUFBQyxPQUFPOzs7Ozt5Q0FDdEI7Ozs7O3FDQUNFOzs7OztpQ0FDQzs7Ozs7O3lCQUNKOzs7OztxQkFDSDswQkFDTiw4REFBQzdDLG9EQUFXOzs7O3FCQUFHOzs7Ozs7YUFDVixDQUNQO0NBQ0g7R0F2RktDLEdBQUc7QUFBSEEsS0FBQUEsR0FBRztBQXlGVCwrREFBZUEsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2LmpzPzg2NGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEZhZGUgZnJvbSBcInJlYWN0LXJldmVhbC9GYWRlXCI7XG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSBcIi4vUHJvZ3Jlc3NCYXJcIjtcblxuY29uc3QgTmF2ID0gKCkgPT4ge1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbd2lkdGgsIHNldFdpZHRoXSA9IHVzZVN0YXRlKFtdKTtcblxuICAvL3RvIHRyYWNrIHRoZSB3aWR0aCBvZiB0aGUgY2hhbmdpbmcgc2NyZWVuXG4gIGNvbnN0IGNoZWNrV2lkdGggPSAoKSA9PiB7XG4gICAgc2V0V2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgY2hlY2tXaWR0aCk7XG4gICAgaWYgKHdpZHRoID4gNzAwKSB7XG4gICAgICBzZXRJc09wZW4oZmFsc2UpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibmF2T3BlblwiKTtcbiAgICB9XG5cbiAgICBpZiAod2lkdGggPCA3MDApIHtcbiAgICAgIGlmIChpc09wZW4pIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibmF2T3BlblwiKTtcbiAgICAgIH1cbiAgICAgIGlmICghaXNPcGVuKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm5hdk9wZW5cIik7XG4gICAgICB9XG4gICAgfVxuICAgIC8vY2xlYW4gdXAgZnVuY3Rpb25cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgY2hlY2tXaWR0aCk7XG4gICAgfTtcbiAgfSwgW3dpZHRoLCBpc09wZW5dKTtcbiAge1xuICAgIGNvbnNvbGUubG9nKGlzT3BlbilcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubmF2aG9sZGVyfT5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbk5hdn0+XG4gICAgICAgIDxGYWRlPlxuICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm5hdmJhcn0+XG4gICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICA8aDFcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5hdmhlYWRlcn1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbihmYWxzZSl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAga3JpcHVraGFka2Eg4pyoXG4gICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2lzT3BlbiA/IHN0eWxlcy5uYXZWaXNpYmxlIDogc3R5bGVzLm5hdmxpbmt9PlxuICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5pbm5lckxpbmt9PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYmxvZ3NcIiA+XG4gICAgICAgICAgICAgICAgICA8aDEgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pfT4gYmxvZ3M8L2gxPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiID5cbiAgICAgICAgICAgICAgICAgIDxoMT4gb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pfSBob21lPC9oMT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8L21haW4+XG5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5uYXZUb2dnbGVyfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMzBweFwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjMwcHhcIlxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2lzT3BlbiA/IHN0eWxlcy5uYXZUb2dnbGVyZm9jdXMgOiBcIlwifVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNNCA3SDEyTTIwIDdIMTZNNCAxMkgyME00IDE3SDhNMjAgMTdIMTJcIlxuICAgICAgICAgICAgICAgIHN0cm9rZT1cIiMyYjMxMzRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMS43XCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvRmFkZT5cbiAgICAgIDwvbmF2PlxuICAgICAgPFByb2dyZXNzQmFyIC8+XG4gICAgPC9tYWluPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiTGluayIsIkZhZGUiLCJQcm9ncmVzc0JhciIsIk5hdiIsImlzT3BlbiIsInNldElzT3BlbiIsIndpZHRoIiwic2V0V2lkdGgiLCJjaGVja1dpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsIm1haW4iLCJjbGFzc05hbWUiLCJuYXZob2xkZXIiLCJuYXYiLCJtYWluTmF2IiwibmF2YmFyIiwic2VjdGlvbiIsImhyZWYiLCJoMSIsIm5hdmhlYWRlciIsIm9uQ2xpY2siLCJuYXZWaXNpYmxlIiwibmF2bGluayIsImlubmVyTGluayIsImJ1dHRvbiIsIm5hdlRvZ2dsZXIiLCJzdmciLCJ4bWxucyIsImhlaWdodCIsInZpZXdCb3giLCJmaWxsIiwibmF2VG9nZ2xlcmZvY3VzIiwicGF0aCIsImQiLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Nav.js\n");

/***/ })

});