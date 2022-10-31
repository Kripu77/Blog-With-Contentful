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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-reveal/Fade */ \"./node_modules/react-reveal/Fade.js\");\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProgressBar */ \"./components/ProgressBar.js\");\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Nav = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isOpen = ref[0], setIsOpen = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), width = ref1[0], setWidth = ref1[1];\n    //to track the width of the changing screen\n    var checkWidth = function() {\n        setWidth(window.innerWidth);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.addEventListener(\"resize\", checkWidth);\n        if (width > 700) {\n            setIsOpen(false);\n            document.body.classList.remove(\"navOpen\");\n        }\n        if (width <= 700) {\n            if (isOpen) {\n                document.body.classList.add(\"navOpen\");\n            }\n            if (!isOpen) {\n                document.body.classList.remove(\"navOpen\");\n            }\n        }\n        //clean up function\n        return function() {\n            window.removeEventListener(\"resize\", checkWidth);\n        };\n    }, [\n        width,\n        isOpen\n    ]);\n    {\n        console.log(isOpen);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().navholder),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().mainNav),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().navbar),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().navheader),\n                                            onClick: function() {\n                                                return setIsOpen(false);\n                                            },\n                                            children: \"kripukhadka \\u2728\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kripukhadka/Documents/GitHub/Blog-With-Contentful/components/Nav.js\",\n                                            lineNumber: 45,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kripukhadka/Documents/GitHub/Blog-With-Contentful/components/Nav.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/kripukhadka/Documents/GitHub/Blog-With-Contentful/components/Nav.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                    className: isOpen ? (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().navVisible) : (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().navlink),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().innerLink),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                href: \"/blogs\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                    onClick: function() {\n                                                        return setIsOpen(!isOpen);\n                                                    },\n                                                    children: \" blogs\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/kripukhadka/Documents/GitHub/Blog-With-Contentful/components/Nav.js\",\n                                                    lineNumber: 57,\n                                                    columnNumber: 19\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/kripukhadka/Documents/GitHub/Blog-With-Contentful/components/Nav.js\",\n                                                lineNumber: 56,\n                                                columnNumber: 17\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                href: \"/\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                    onClick: function() {\n                                                        return setIsOpen(!isOpen);\n                                                    },\n                                                    children: \" home\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/kripukhadka/Documents/GitHub/Blog-With-Contentful/components/Nav.js\",\n                                                    lineNumber: 60,\n                                                    columnNumber: 19\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/kripukhadka/Documents/GitHub/Blog-With-Contentful/components/Nav.js\",\n                                                lineNumber: 59,\n                                                columnNumber: 17\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/kripukhadka/Documents/GitHub/Blog-With-Contentful/components/Nav.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/kripukhadka/Documents/GitHub/Blog-With-Contentful/components/Nav.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kripukhadka/Documents/GitHub/Blog-With-Contentful/components/Nav.js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().navToggler),\n                            onClick: function() {\n                                return setIsOpen(!isOpen);\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                width: \"30px\",\n                                height: \"30px\",\n                                viewBox: \"0 0 24 24\",\n                                fill: \"none\",\n                                className: isOpen ? (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().navTogglerfocus) : \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    d: \"M4 7H12M20 7H16M4 12H20M4 17H8M20 17H12\",\n                                    stroke: \"#2b3134\",\n                                    strokeWidth: \"1.7\",\n                                    strokeLinecap: \"round\",\n                                    strokeLinejoin: \"round\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kripukhadka/Documents/GitHub/Blog-With-Contentful/components/Nav.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/kripukhadka/Documents/GitHub/Blog-With-Contentful/components/Nav.js\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/kripukhadka/Documents/GitHub/Blog-With-Contentful/components/Nav.js\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kripukhadka/Documents/GitHub/Blog-With-Contentful/components/Nav.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/kripukhadka/Documents/GitHub/Blog-With-Contentful/components/Nav.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProgressBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/kripukhadka/Documents/GitHub/Blog-With-Contentful/components/Nav.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kripukhadka/Documents/GitHub/Blog-With-Contentful/components/Nav.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, _this);\n};\n_s(Nav, \"v2LPbw3bEQVLYYezUKnwp6+mRmM=\");\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNEM7QUFDRztBQUNsQjtBQUNRO0FBQ0c7O0FBRXhDLElBQU1NLEdBQUcsR0FBRyxXQUFNOztJQUNoQixJQUE0Qk4sR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQVA3QyxNQU9lLEdBQWVBLEdBQWUsR0FBOUIsRUFQZixTQU8wQixHQUFJQSxHQUFlLEdBQW5CO0lBQ3hCLElBQTBCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBUnhDLEtBUWMsR0FBY0EsSUFBWSxHQUExQixFQVJkLFFBUXdCLEdBQUlBLElBQVksR0FBaEI7SUFFdEIsMkNBQTJDO0lBQzNDLElBQU1XLFVBQVUsR0FBRyxXQUFNO1FBQ3ZCRCxRQUFRLENBQUNFLE1BQU0sQ0FBQ0MsVUFBVSxDQUFDLENBQUM7S0FDN0I7SUFFRFosZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RXLE1BQU0sQ0FBQ0UsZ0JBQWdCLENBQUMsUUFBUSxFQUFFSCxVQUFVLENBQUMsQ0FBQztRQUM5QyxJQUFJRixLQUFLLEdBQUcsR0FBRyxFQUFFO1lBQ2ZELFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQk8sUUFBUSxDQUFDQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzNDO1FBRUQsSUFBSVQsS0FBSyxJQUFJLEdBQUcsRUFBRTtZQUNoQixJQUFJRixNQUFNLEVBQUU7Z0JBQ1ZRLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUNFLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUN4QztZQUNELElBQUksQ0FBQ1osTUFBTSxFQUFFO2dCQUNYUSxRQUFRLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDM0M7U0FDRjtRQUNELG1CQUFtQjtRQUNuQixPQUFPLFdBQU07WUFDWE4sTUFBTSxDQUFDUSxtQkFBbUIsQ0FBQyxRQUFRLEVBQUVULFVBQVUsQ0FBQyxDQUFDO1NBQ2xELENBQUM7S0FDSCxFQUFFO1FBQUNGLEtBQUs7UUFBRUYsTUFBTTtLQUFDLENBQUMsQ0FBQztJQUV0QjtRQUFDYyxPQUFPLENBQUNDLEdBQUcsQ0FBQ2YsTUFBTSxDQUFDO0tBQUM7SUFDbkIscUJBQ0UsOERBQUNnQixNQUFJO1FBQUNDLFNBQVMsRUFBRXRCLDBFQUFnQjs7MEJBQy9CLDhEQUFDd0IsS0FBRztnQkFBQ0YsU0FBUyxFQUFFdEIsd0VBQWM7MEJBQzVCLDRFQUFDRSwwREFBSTs7c0NBQ0gsOERBQUNtQixNQUFJOzRCQUFDQyxTQUFTLEVBQUV0Qix1RUFBYTs7OENBQzVCLDhEQUFDMkIsU0FBTzs4Q0FDTiw0RUFBQzFCLGtEQUFJO3dDQUFDMkIsSUFBSSxFQUFDLEdBQUc7a0RBQ1osNEVBQUNDLElBQUU7NENBQ0RQLFNBQVMsRUFBRXRCLDBFQUFnQjs0Q0FDM0IrQixPQUFPLEVBQUU7dURBQU16QixTQUFTLENBQUMsS0FBSyxDQUFDOzZDQUFBO3NEQUNoQyxvQkFFRDs7Ozs7aURBQUs7Ozs7OzZDQUNBOzs7Ozt5Q0FDQzs4Q0FFViw4REFBQ3FCLFNBQU87b0NBQUNMLFNBQVMsRUFBRWpCLE1BQU0sR0FBR0wsMkVBQWlCLEdBQUdBLHdFQUFjOzhDQUM3RCw0RUFBQzJCLFNBQU87d0NBQUNMLFNBQVMsRUFBRXRCLDBFQUFnQjs7MERBQ2xDLDhEQUFDQyxrREFBSTtnREFBQzJCLElBQUksRUFBQyxRQUFROzBEQUNqQiw0RUFBQ0MsSUFBRTtvREFBQ0UsT0FBTyxFQUFFOytEQUFNekIsU0FBUyxDQUFDLENBQUNELE1BQU0sQ0FBQztxREFBQTs4REFBRSxRQUFNOzs7Ozt5REFBSzs7Ozs7cURBQzdDOzBEQUNQLDhEQUFDSixrREFBSTtnREFBQzJCLElBQUksRUFBQyxHQUFHOzBEQUNaLDRFQUFDQyxJQUFFO29EQUFDRSxPQUFPLEVBQUU7K0RBQU16QixTQUFTLENBQUMsQ0FBQ0QsTUFBTSxDQUFDO3FEQUFBOzhEQUFFLE9BQUs7Ozs7O3lEQUFLOzs7OztxREFDNUM7Ozs7Ozs2Q0FDQzs7Ozs7eUNBQ0Y7Ozs7OztpQ0FDTDtzQ0FFUCw4REFBQzhCLFFBQU07NEJBQ0xiLFNBQVMsRUFBRXRCLDJFQUFpQjs0QkFDNUIrQixPQUFPLEVBQUU7dUNBQU16QixTQUFTLENBQUMsQ0FBQ0QsTUFBTSxDQUFDOzZCQUFBO3NDQUVqQyw0RUFBQ2dDLEtBQUc7Z0NBQ0ZDLEtBQUssRUFBQyw0QkFBNEI7Z0NBQ2xDL0IsS0FBSyxFQUFDLE1BQU07Z0NBQ1pnQyxNQUFNLEVBQUMsTUFBTTtnQ0FDYkMsT0FBTyxFQUFDLFdBQVc7Z0NBQ25CQyxJQUFJLEVBQUMsTUFBTTtnQ0FDWG5CLFNBQVMsRUFBRWpCLE1BQU0sR0FBR0wsZ0ZBQXNCLEdBQUcsRUFBRTswQ0FFL0MsNEVBQUMyQyxNQUFJO29DQUNIQyxDQUFDLEVBQUMseUNBQXlDO29DQUMzQ0MsTUFBTSxFQUFDLFNBQVM7b0NBQ2hCQyxXQUFXLEVBQUMsS0FBSztvQ0FDakJDLGFBQWEsRUFBQyxPQUFPO29DQUNyQkMsY0FBYyxFQUFDLE9BQU87Ozs7O3lDQUN0Qjs7Ozs7cUNBQ0U7Ozs7O2lDQUNDOzs7Ozs7eUJBQ0o7Ozs7O3FCQUNIOzBCQUNOLDhEQUFDN0Msb0RBQVc7Ozs7cUJBQUc7Ozs7OzthQUNWLENBQ1A7Q0FDSDtHQXJGS0MsR0FBRztBQUFIQSxLQUFBQSxHQUFHO0FBdUZULCtEQUFlQSxHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYuanM/ODY0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgRmFkZSBmcm9tIFwicmVhY3QtcmV2ZWFsL0ZhZGVcIjtcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tIFwiLi9Qcm9ncmVzc0JhclwiO1xuXG5jb25zdCBOYXYgPSAoKSA9PiB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt3aWR0aCwgc2V0V2lkdGhdID0gdXNlU3RhdGUoW10pO1xuXG4gIC8vdG8gdHJhY2sgdGhlIHdpZHRoIG9mIHRoZSBjaGFuZ2luZyBzY3JlZW5cbiAgY29uc3QgY2hlY2tXaWR0aCA9ICgpID0+IHtcbiAgICBzZXRXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBjaGVja1dpZHRoKTtcbiAgICBpZiAod2lkdGggPiA3MDApIHtcbiAgICAgIHNldElzT3BlbihmYWxzZSk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZPcGVuXCIpO1xuICAgIH1cblxuICAgIGlmICh3aWR0aCA8PSA3MDApIHtcbiAgICAgIGlmIChpc09wZW4pIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibmF2T3BlblwiKTtcbiAgICAgIH1cbiAgICAgIGlmICghaXNPcGVuKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm5hdk9wZW5cIik7XG4gICAgICB9XG4gICAgfVxuICAgIC8vY2xlYW4gdXAgZnVuY3Rpb25cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgY2hlY2tXaWR0aCk7XG4gICAgfTtcbiAgfSwgW3dpZHRoLCBpc09wZW5dKTtcbiAgXG57Y29uc29sZS5sb2coaXNPcGVuKX1cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5uYXZob2xkZXJ9PlxuICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluTmF2fT5cbiAgICAgICAgPEZhZGU+XG4gICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubmF2YmFyfT5cbiAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgIDxoMVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubmF2aGVhZGVyfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKGZhbHNlKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBrcmlwdWtoYWRrYSDinKhcbiAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17aXNPcGVuID8gc3R5bGVzLm5hdlZpc2libGUgOiBzdHlsZXMubmF2bGlua30+XG4gICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmlubmVyTGlua30+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9nc1wiID5cbiAgICAgICAgICAgICAgICAgIDxoMSBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oIWlzT3Blbil9PiBibG9nczwvaDE+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgPlxuICAgICAgICAgICAgICAgICAgPGgxIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbighaXNPcGVuKX0+IGhvbWU8L2gxPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDwvbWFpbj5cblxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5hdlRvZ2dsZXJ9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oIWlzT3Blbil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIzMHB4XCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMzBweFwiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17aXNPcGVuID8gc3R5bGVzLm5hdlRvZ2dsZXJmb2N1cyA6IFwiXCJ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk00IDdIMTJNMjAgN0gxNk00IDEySDIwTTQgMTdIOE0yMCAxN0gxMlwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwiIzJiMzEzNFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjdcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9GYWRlPlxuICAgICAgPC9uYXY+XG4gICAgICA8UHJvZ3Jlc3NCYXIgLz5cbiAgICA8L21haW4+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXY7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJMaW5rIiwiRmFkZSIsIlByb2dyZXNzQmFyIiwiTmF2IiwiaXNPcGVuIiwic2V0SXNPcGVuIiwid2lkdGgiLCJzZXRXaWR0aCIsImNoZWNrV2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRvY3VtZW50IiwiYm9keSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwibWFpbiIsImNsYXNzTmFtZSIsIm5hdmhvbGRlciIsIm5hdiIsIm1haW5OYXYiLCJuYXZiYXIiLCJzZWN0aW9uIiwiaHJlZiIsImgxIiwibmF2aGVhZGVyIiwib25DbGljayIsIm5hdlZpc2libGUiLCJuYXZsaW5rIiwiaW5uZXJMaW5rIiwiYnV0dG9uIiwibmF2VG9nZ2xlciIsInN2ZyIsInhtbG5zIiwiaGVpZ2h0Iiwidmlld0JveCIsImZpbGwiLCJuYXZUb2dnbGVyZm9jdXMiLCJwYXRoIiwiZCIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Nav.js\n");

/***/ })

});