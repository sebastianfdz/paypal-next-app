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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @paypal/react-paypal-js */ \"(app-pages-browser)/../react-paypal-js/dist/esm/react-paypal-js.js\");\n/* harmony import */ var _fields_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fields.module.css */ \"(app-pages-browser)/./app/fields.module.css\");\n/* harmony import */ var _fields_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fields_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction HomePage() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.PayPalScriptProvider, {\n            options: {\n                clientId: \"AdNhTwOxsBNL9kXhjVUkwbb5AtOLEx4VmJVSJ5cMf28oZyj2FqQNGI4u2-H6_Tx-EWUQs379TDMrQes6\",\n                components: \"card-fields\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.PayPalCardFieldsProvider, {\n                createOrder: ()=>Promise.resolve(\"some-id\"),\n                onApprove: ()=>{},\n                onError: ()=>{},\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.PayPalNameField, {}, void 0, false, {\n                        fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.PayPalNumberField, {}, void 0, false, {\n                        fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_fields_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.PayPalExpiryField, {}, void 0, false, {\n                                fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.PayPalCVVField, {}, void 0, false, {\n                                fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubmitCardFields, {}, void 0, false, {\n                        fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_c = HomePage;\nconst SubmitCardFields = ()=>{\n    _s();\n    const { cardFieldsForm, fields } = (0,_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.usePayPalCardFields)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: ()=>fields.CVVField.focus(),\n        children: \"Submit\"\n    }, void 0, false, {\n        fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n        lineNumber: 46,\n        columnNumber: 10\n    }, undefined);\n};\n_s(SubmitCardFields, \"bwR5eiCVlIGAKWvDWiS/MOBniXM=\", false, function() {\n    return [\n        _paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.usePayPalCardFields\n    ];\n});\n_c1 = SubmitCardFields;\nvar _c, _c1;\n$RefreshReg$(_c, \"HomePage\");\n$RefreshReg$(_c1, \"SubmitCardFields\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBVWlDO0FBRU87QUFFekIsU0FBU1E7SUFDdEIscUJBQ0UsOERBQUNDO1FBQUtDLFdBQVU7a0JBQ2QsNEVBQUNWLHlFQUFvQkE7WUFDbkJXLFNBQVM7Z0JBQ1BDLFVBQ0U7Z0JBQ0ZDLFlBQVk7WUFDZDtzQkFFQSw0RUFBQ1osNkVBQXdCQTtnQkFDdkJhLGFBQWEsSUFBTUMsUUFBUUMsT0FBTyxDQUFDO2dCQUNuQ0MsV0FBVyxLQUFPO2dCQUNsQkMsU0FBUyxLQUFPOztrQ0FFaEIsOERBQUNoQixvRUFBZUE7Ozs7O2tDQUNoQiw4REFBQ0Msc0VBQWlCQTs7Ozs7a0NBQ2xCLDhEQUFDZ0I7d0JBQUlULFdBQVdILHFFQUFnQjs7MENBQzlCLDhEQUFDSCxzRUFBaUJBOzs7OzswQ0FDbEIsOERBQUNDLG1FQUFjQTs7Ozs7Ozs7Ozs7a0NBRWpCLDhEQUFDZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtYO0tBMUJ3QmI7QUE0QnhCLE1BQU1hLG1CQUFtQjs7SUFDdkIsTUFBTSxFQUFFQyxjQUFjLEVBQUVDLE1BQU0sRUFBRSxHQUFHakIsNEVBQW1CQTtJQUV0RCxxQkFBTyw4REFBQ2tCO1FBQU9DLFNBQVMsSUFBTUYsT0FBT0csUUFBUSxDQUFDQyxLQUFLO2tCQUFJOzs7Ozs7QUFDekQ7R0FKTU47O1FBQytCZix3RUFBbUJBOzs7TUFEbERlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLnRzeD83NjAzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQge1xuICBQYXlQYWxTY3JpcHRQcm92aWRlcixcbiAgUGF5UGFsQ2FyZEZpZWxkc1Byb3ZpZGVyLFxuICBQYXlQYWxOYW1lRmllbGQsXG4gIFBheVBhbE51bWJlckZpZWxkLFxuICBQYXlQYWxFeHBpcnlGaWVsZCxcbiAgUGF5UGFsQ1ZWRmllbGQsXG4gIHVzZVBheVBhbENhcmRGaWVsZHMsXG59IGZyb20gXCJAcGF5cGFsL3JlYWN0LXBheXBhbC1qc1wiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZmllbGRzLm1vZHVsZS5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcC0yNFwiPlxuICAgICAgPFBheVBhbFNjcmlwdFByb3ZpZGVyXG4gICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICBjbGllbnRJZDpcbiAgICAgICAgICAgIFwiQWROaFR3T3hzQk5MOWtYaGpWVWt3YmI1QXRPTEV4NFZtSlZTSjVjTWYyOG9aeWoyRnFRTkdJNHUyLUg2X1R4LUVXVVFzMzc5VERNclFlczZcIixcbiAgICAgICAgICBjb21wb25lbnRzOiBcImNhcmQtZmllbGRzXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxQYXlQYWxDYXJkRmllbGRzUHJvdmlkZXJcbiAgICAgICAgICBjcmVhdGVPcmRlcj17KCkgPT4gUHJvbWlzZS5yZXNvbHZlKFwic29tZS1pZFwiKX1cbiAgICAgICAgICBvbkFwcHJvdmU9eygpID0+IHt9fVxuICAgICAgICAgIG9uRXJyb3I9eygpID0+IHt9fVxuICAgICAgICA+XG4gICAgICAgICAgPFBheVBhbE5hbWVGaWVsZCAvPlxuICAgICAgICAgIDxQYXlQYWxOdW1iZXJGaWVsZCAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSA+XG4gICAgICAgICAgICA8UGF5UGFsRXhwaXJ5RmllbGQgLz5cbiAgICAgICAgICAgIDxQYXlQYWxDVlZGaWVsZCAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxTdWJtaXRDYXJkRmllbGRzIC8+XG4gICAgICAgIDwvUGF5UGFsQ2FyZEZpZWxkc1Byb3ZpZGVyPlxuICAgICAgPC9QYXlQYWxTY3JpcHRQcm92aWRlcj5cbiAgICA8L21haW4+XG4gICk7XG59XG5cbmNvbnN0IFN1Ym1pdENhcmRGaWVsZHMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgY2FyZEZpZWxkc0Zvcm0sIGZpZWxkcyB9ID0gdXNlUGF5UGFsQ2FyZEZpZWxkcygpO1xuXG4gIHJldHVybiA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGZpZWxkcy5DVlZGaWVsZC5mb2N1cygpfT5TdWJtaXQ8L2J1dHRvbj47XG59O1xuIl0sIm5hbWVzIjpbIlBheVBhbFNjcmlwdFByb3ZpZGVyIiwiUGF5UGFsQ2FyZEZpZWxkc1Byb3ZpZGVyIiwiUGF5UGFsTmFtZUZpZWxkIiwiUGF5UGFsTnVtYmVyRmllbGQiLCJQYXlQYWxFeHBpcnlGaWVsZCIsIlBheVBhbENWVkZpZWxkIiwidXNlUGF5UGFsQ2FyZEZpZWxkcyIsInN0eWxlcyIsIkhvbWVQYWdlIiwibWFpbiIsImNsYXNzTmFtZSIsIm9wdGlvbnMiLCJjbGllbnRJZCIsImNvbXBvbmVudHMiLCJjcmVhdGVPcmRlciIsIlByb21pc2UiLCJyZXNvbHZlIiwib25BcHByb3ZlIiwib25FcnJvciIsImRpdiIsImNvbnRhaW5lciIsIlN1Ym1pdENhcmRGaWVsZHMiLCJjYXJkRmllbGRzRm9ybSIsImZpZWxkcyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJDVlZGaWVsZCIsImZvY3VzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});