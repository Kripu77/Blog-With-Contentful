"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blogs/[title]",{

/***/ "./util/renderOptions.js":
/*!*******************************!*\
  !*** ./util/renderOptions.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderOptions\": function() { return /* binding */ renderOptions; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @contentful/rich-text-types */ \"./node_modules/@contentful/rich-text-types/dist/index.js\");\n/* harmony import */ var _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_RenderImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/RenderImage */ \"./components/RenderImage.js\");\n/* harmony import */ var _images_blurData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/blurData.js */ \"./images/blurData.js\");\n/* harmony import */ var _images_blurData_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_blurData_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nvar _this = undefined;\n\n\n\n\n\nvar _obj;\n//setup for rich text UI rendering\nvar renderOptions = {\n    renderNode: (_obj = {}, _defineProperty(_obj, _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_1__.INLINES.EMBEDDED_ENTRY, function(node, children) {\n        // target the contentType of the EMBEDDED_ENTRY to display as you need\n        if (node.data.target.sys.contentType.sys.id === \"blogPost\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                href: \"/blog/\".concat(node.data.target.fields.slug),\n                alt: node.data.target.fields.title,\n                children: [\n                    \" \",\n                    node.data.target.fields.title\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kripukhadka/Documents/GitHub/Blog-With-Contentful/util/renderOptions.js\",\n                lineNumber: 16,\n                columnNumber: 11\n            }, _this);\n        }\n    }), _defineProperty(_obj, _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_1__.MARKS.CODE, function(node, children) {\n        // target the contentType of the EMBEDDED_ENTRY to display\n        if (node.data.target.sys.contentType.sys.id === \"code\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().codeBlock),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                        children: node.data.target.fields.code\n                    }, void 0, false, {\n                        fileName: \"/Users/kripukhadka/Documents/GitHub/Blog-With-Contentful/util/renderOptions.js\",\n                        lineNumber: 34,\n                        columnNumber: 15\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/kripukhadka/Documents/GitHub/Blog-With-Contentful/util/renderOptions.js\",\n                    lineNumber: 33,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/kripukhadka/Documents/GitHub/Blog-With-Contentful/util/renderOptions.js\",\n                lineNumber: 32,\n                columnNumber: 11\n            }, _this);\n        }\n        if (node.data.target.sys.contentType.sys.id === \"videoEmbed\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                src: node.data.target.fields.embedUrl,\n                height: \"100%\",\n                width: \"100%\",\n                frameBorder: \"0\",\n                scrolling: \"no\",\n                title: node.data.target.fields.title,\n                allowFullScreen: true\n            }, void 0, false, {\n                fileName: \"/Users/kripukhadka/Documents/GitHub/Blog-With-Contentful/util/renderOptions.js\",\n                lineNumber: 42,\n                columnNumber: 11\n            }, _this);\n        }\n    }), _defineProperty(_obj, _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_1__.BLOCKS.EMBEDDED_ASSET, function(node, children) {\n        // render the EMBEDDED_ASSET\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RenderImage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            src: \"https:\".concat(node.data.target.fields.file.url),\n            alt: node.data.target.fields.description,\n            placeholder: \"blur\",\n            blurDataURL: _images_blurData_js__WEBPACK_IMPORTED_MODULE_3__.bodyImage,\n            width: 658,\n            height: 408,\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().demoimage)\n        }, void 0, false, {\n            fileName: \"/Users/kripukhadka/Documents/GitHub/Blog-With-Contentful/util/renderOptions.js\",\n            lineNumber: 60,\n            columnNumber: 9\n        }, _this);\n    }), _obj)\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNILEdBN0RTLElBOERYO0NBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlsL3JlbmRlck9wdGlvbnMuanM/Mjg5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEJMT0NLUywgSU5MSU5FUywgTUFSS1MgfSBmcm9tIFwiQGNvbnRlbnRmdWwvcmljaC10ZXh0LXR5cGVzXCI7XG5pbXBvcnQgUmVuZGVySW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvUmVuZGVySW1hZ2VcIjtcbmltcG9ydCB7IGJvZHlJbWFnZSB9IGZyb20gXCIuLi9pbWFnZXMvYmx1ckRhdGEuanNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcblxuLy9zZXR1cCBmb3IgcmljaCB0ZXh0IFVJIHJlbmRlcmluZ1xuZXhwb3J0IGNvbnN0IHJlbmRlck9wdGlvbnMgPSB7XG4gIHJlbmRlck5vZGU6IHtcbiAgICBbSU5MSU5FUy5FTUJFRERFRF9FTlRSWV06IChub2RlLCBjaGlsZHJlbikgPT4ge1xuICAgICBcblxuICAgICAgLy8gdGFyZ2V0IHRoZSBjb250ZW50VHlwZSBvZiB0aGUgRU1CRURERURfRU5UUlkgdG8gZGlzcGxheSBhcyB5b3UgbmVlZFxuICAgICAgaWYgKG5vZGUuZGF0YS50YXJnZXQuc3lzLmNvbnRlbnRUeXBlLnN5cy5pZCA9PT0gXCJibG9nUG9zdFwiKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGhyZWY9e2AvYmxvZy8ke25vZGUuZGF0YS50YXJnZXQuZmllbGRzLnNsdWd9YH1cbiAgICAgICAgICAgIGFsdD17bm9kZS5kYXRhLnRhcmdldC5maWVsZHMudGl0bGV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAge25vZGUuZGF0YS50YXJnZXQuZmllbGRzLnRpdGxlfVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtNQVJLUy5DT0RFXTogKG5vZGUsIGNoaWxkcmVuKSA9PiB7XG4gICAgXG5cbiAgICAgIC8vIHRhcmdldCB0aGUgY29udGVudFR5cGUgb2YgdGhlIEVNQkVEREVEX0VOVFJZIHRvIGRpc3BsYXlcbiAgICAgIGlmIChub2RlLmRhdGEudGFyZ2V0LnN5cy5jb250ZW50VHlwZS5zeXMuaWQgPT09IFwiY29kZVwiKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb2RlQmxvY2t9PlxuICAgICAgICAgICAgPHByZT5cbiAgICAgICAgICAgICAgPGNvZGU+e25vZGUuZGF0YS50YXJnZXQuZmllbGRzLmNvZGV9PC9jb2RlPlxuICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlLmRhdGEudGFyZ2V0LnN5cy5jb250ZW50VHlwZS5zeXMuaWQgPT09IFwidmlkZW9FbWJlZFwiKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgc3JjPXtub2RlLmRhdGEudGFyZ2V0LmZpZWxkcy5lbWJlZFVybH1cbiAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgIGZyYW1lQm9yZGVyPVwiMFwiXG4gICAgICAgICAgICBzY3JvbGxpbmc9XCJub1wiXG4gICAgICAgICAgICB0aXRsZT17bm9kZS5kYXRhLnRhcmdldC5maWVsZHMudGl0bGV9XG4gICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW49e3RydWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgW0JMT0NLUy5FTUJFRERFRF9BU1NFVF06IChub2RlLCBjaGlsZHJlbikgPT4ge1xuIFxuXG4gICAgICAvLyByZW5kZXIgdGhlIEVNQkVEREVEX0FTU0VUXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UmVuZGVySW1hZ2VcbiAgICAgICAgICBzcmM9e2BodHRwczoke25vZGUuZGF0YS50YXJnZXQuZmllbGRzLmZpbGUudXJsfWB9XG4gICAgICAgICAgYWx0PXtub2RlLmRhdGEudGFyZ2V0LmZpZWxkcy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImJsdXJcIlxuICAgICAgICAgIGJsdXJEYXRhVVJMPXtib2R5SW1hZ2V9XG4gICAgICAgICAgd2lkdGg9ezY1OH1cbiAgICAgICAgICBoZWlnaHQ9ezQwOH1cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kZW1vaW1hZ2V9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH0sXG4gIH0sXG59O1xuIl0sIm5hbWVzIjpbIkJMT0NLUyIsIklOTElORVMiLCJNQVJLUyIsIlJlbmRlckltYWdlIiwiYm9keUltYWdlIiwic3R5bGVzIiwicmVuZGVyT3B0aW9ucyIsInJlbmRlck5vZGUiLCJFTUJFRERFRF9FTlRSWSIsIm5vZGUiLCJjaGlsZHJlbiIsImRhdGEiLCJ0YXJnZXQiLCJzeXMiLCJjb250ZW50VHlwZSIsImlkIiwiTGluayIsImhyZWYiLCJmaWVsZHMiLCJzbHVnIiwiYWx0IiwidGl0bGUiLCJDT0RFIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29kZUJsb2NrIiwicHJlIiwiY29kZSIsImlmcmFtZSIsInNyYyIsImVtYmVkVXJsIiwiaGVpZ2h0Iiwid2lkdGgiLCJmcmFtZUJvcmRlciIsInNjcm9sbGluZyIsImFsbG93RnVsbFNjcmVlbiIsIkVNQkVEREVEX0FTU0VUIiwiZmlsZSIsInVybCIsImRlc2NyaXB0aW9uIiwicGxhY2Vob2xkZXIiLCJibHVyRGF0YVVSTCIsImRlbW9pbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./util/renderOptions.js\n");

/***/ })

});