"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @paypal/react-paypal-js */ \"(app-pages-browser)/../react-paypal-js/dist/esm/react-paypal-js.js\");\n/* harmony import */ var _fields_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fields.module.css */ \"(app-pages-browser)/./app/fields.module.css\");\n/* harmony import */ var _fields_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fields_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction HomePage() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.PayPalScriptProvider, {\n            options: {\n                clientId: \"AdNhTwOxsBNL9kXhjVUkwbb5AtOLEx4VmJVSJ5cMf28oZyj2FqQNGI4u2-H6_Tx-EWUQs379TDMrQes6\",\n                components: \"card-fields\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.PayPalCardFieldsProvider, {\n                createOrder: ()=>Promise.resolve(\"some-id\"),\n                onApprove: ()=>{},\n                onError: ()=>{},\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.PayPalNameField, {}, void 0, false, {\n                        fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.PayPalNumberField, {}, void 0, false, {\n                        fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_fields_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.PayPalExpiryField, {\n                                    className: (_fields_module_css__WEBPACK_IMPORTED_MODULE_2___default().field)\n                                }, void 0, false, {\n                                    fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.PayPalCVVField, {\n                                    className: (_fields_module_css__WEBPACK_IMPORTED_MODULE_2___default().field)\n                                }, void 0, false, {\n                                    fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubmitCardFields, {}, void 0, false, {\n                        fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_c = HomePage;\nconst SubmitCardFields = ()=>{\n    _s();\n    const { cardFieldsForm, fields } = (0,_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.usePayPalCardFields)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: ()=>fields.CVVField.focus(),\n        children: \"Submit\"\n    }, void 0, false, {\n        fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n        lineNumber: 52,\n        columnNumber: 10\n    }, undefined);\n};\n_s(SubmitCardFields, \"bwR5eiCVlIGAKWvDWiS/MOBniXM=\", false, function() {\n    return [\n        _paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.usePayPalCardFields\n    ];\n});\n_c1 = SubmitCardFields;\nvar _c, _c1;\n$RefreshReg$(_c, \"HomePage\");\n$RefreshReg$(_c1, \"SubmitCardFields\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBVWlDO0FBRU87QUFFekIsU0FBU1E7SUFDdEIscUJBQ0UsOERBQUNDO1FBQUtDLFdBQVU7a0JBQ2QsNEVBQUNWLHlFQUFvQkE7WUFDbkJXLFNBQVM7Z0JBQ1BDLFVBQ0U7Z0JBQ0ZDLFlBQVk7WUFDZDtzQkFFQSw0RUFBQ1osNkVBQXdCQTtnQkFDdkJhLGFBQWEsSUFBTUMsUUFBUUMsT0FBTyxDQUFDO2dCQUNuQ0MsV0FBVyxLQUFPO2dCQUNsQkMsU0FBUyxLQUFPOztrQ0FFaEIsOERBQUNoQixvRUFBZUE7Ozs7O2tDQUNoQiw4REFBQ0Msc0VBQWlCQTs7Ozs7a0NBQ2xCLDhEQUFDZ0I7d0JBQUlULFdBQVdILHFFQUFnQjs7MENBQzlCLDhEQUFDWTswQ0FFRCw0RUFBQ2Ysc0VBQWlCQTtvQ0FBQ00sV0FBV0gsaUVBQVk7Ozs7Ozs7Ozs7OzBDQUUxQyw4REFBQ1k7MENBRUQsNEVBQUNkLG1FQUFjQTtvQ0FBQ0ssV0FBV0gsaUVBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUd6Qyw4REFBQ2U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtYO0tBaEN3QmQ7QUFrQ3hCLE1BQU1jLG1CQUFtQjs7SUFDdkIsTUFBTSxFQUFFQyxjQUFjLEVBQUVDLE1BQU0sRUFBRSxHQUFHbEIsNEVBQW1CQTtJQUV0RCxxQkFBTyw4REFBQ21CO1FBQU9DLFNBQVMsSUFBTUYsT0FBT0csUUFBUSxDQUFDQyxLQUFLO2tCQUFJOzs7Ozs7QUFDekQ7R0FKTU47O1FBQytCaEIsd0VBQW1CQTs7O01BRGxEZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UudHN4Pzc2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7XG4gIFBheVBhbFNjcmlwdFByb3ZpZGVyLFxuICBQYXlQYWxDYXJkRmllbGRzUHJvdmlkZXIsXG4gIFBheVBhbE5hbWVGaWVsZCxcbiAgUGF5UGFsTnVtYmVyRmllbGQsXG4gIFBheVBhbEV4cGlyeUZpZWxkLFxuICBQYXlQYWxDVlZGaWVsZCxcbiAgdXNlUGF5UGFsQ2FyZEZpZWxkcyxcbn0gZnJvbSBcIkBwYXlwYWwvcmVhY3QtcGF5cGFsLWpzXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9maWVsZHMubW9kdWxlLmNzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTI0XCI+XG4gICAgICA8UGF5UGFsU2NyaXB0UHJvdmlkZXJcbiAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgIGNsaWVudElkOlxuICAgICAgICAgICAgXCJBZE5oVHdPeHNCTkw5a1hoalZVa3diYjVBdE9MRXg0Vm1KVlNKNWNNZjI4b1p5ajJGcVFOR0k0dTItSDZfVHgtRVdVUXMzNzlURE1yUWVzNlwiLFxuICAgICAgICAgIGNvbXBvbmVudHM6IFwiY2FyZC1maWVsZHNcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPFBheVBhbENhcmRGaWVsZHNQcm92aWRlclxuICAgICAgICAgIGNyZWF0ZU9yZGVyPXsoKSA9PiBQcm9taXNlLnJlc29sdmUoXCJzb21lLWlkXCIpfVxuICAgICAgICAgIG9uQXBwcm92ZT17KCkgPT4ge319XG4gICAgICAgICAgb25FcnJvcj17KCkgPT4ge319XG4gICAgICAgID5cbiAgICAgICAgICA8UGF5UGFsTmFtZUZpZWxkIC8+XG4gICAgICAgICAgPFBheVBhbE51bWJlckZpZWxkIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9ID5cbiAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgIDxQYXlQYWxFeHBpcnlGaWVsZCBjbGFzc05hbWU9e3N0eWxlcy5maWVsZH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgPFBheVBhbENWVkZpZWxkIGNsYXNzTmFtZT17c3R5bGVzLmZpZWxkfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFN1Ym1pdENhcmRGaWVsZHMgLz5cbiAgICAgICAgPC9QYXlQYWxDYXJkRmllbGRzUHJvdmlkZXI+XG4gICAgICA8L1BheVBhbFNjcmlwdFByb3ZpZGVyPlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cblxuY29uc3QgU3VibWl0Q2FyZEZpZWxkcyA9ICgpID0+IHtcbiAgY29uc3QgeyBjYXJkRmllbGRzRm9ybSwgZmllbGRzIH0gPSB1c2VQYXlQYWxDYXJkRmllbGRzKCk7XG5cbiAgcmV0dXJuIDxidXR0b24gb25DbGljaz17KCkgPT4gZmllbGRzLkNWVkZpZWxkLmZvY3VzKCl9PlN1Ym1pdDwvYnV0dG9uPjtcbn07XG4iXSwibmFtZXMiOlsiUGF5UGFsU2NyaXB0UHJvdmlkZXIiLCJQYXlQYWxDYXJkRmllbGRzUHJvdmlkZXIiLCJQYXlQYWxOYW1lRmllbGQiLCJQYXlQYWxOdW1iZXJGaWVsZCIsIlBheVBhbEV4cGlyeUZpZWxkIiwiUGF5UGFsQ1ZWRmllbGQiLCJ1c2VQYXlQYWxDYXJkRmllbGRzIiwic3R5bGVzIiwiSG9tZVBhZ2UiLCJtYWluIiwiY2xhc3NOYW1lIiwib3B0aW9ucyIsImNsaWVudElkIiwiY29tcG9uZW50cyIsImNyZWF0ZU9yZGVyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJvbkFwcHJvdmUiLCJvbkVycm9yIiwiZGl2IiwiY29udGFpbmVyIiwiZmllbGQiLCJTdWJtaXRDYXJkRmllbGRzIiwiY2FyZEZpZWxkc0Zvcm0iLCJmaWVsZHMiLCJidXR0b24iLCJvbkNsaWNrIiwiQ1ZWRmllbGQiLCJmb2N1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});