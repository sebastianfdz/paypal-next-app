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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @paypal/react-paypal-js */ \"(app-pages-browser)/../react-paypal-js/dist/esm/react-paypal-js.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nfunction HomePage() {\n    _s();\n    const [style, setStyle] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        height: \"20px\"\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.PayPalScriptProvider, {\n            options: {\n                clientId: \"AdNhTwOxsBNL9kXhjVUkwbb5AtOLEx4VmJVSJ5cMf28oZyj2FqQNGI4u2-H6_Tx-EWUQs379TDMrQes6\",\n                components: \"card-fields\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.PayPalCardFieldsProvider, {\n                createOrder: ()=>Promise.resolve(\"some-id\"),\n                onApprove: ()=>{},\n                onError: ()=>{},\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.PayPalNameField, {}, void 0, false, {\n                        fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.PayPalNumberField, {}, void 0, false, {\n                        fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.PayPalExpiryField, {}, void 0, false, {\n                        fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.PayPalCVVField, {}, void 0, false, {\n                        fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubmitCardFields, {}, void 0, false, {\n                        fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n                lineNumber: 32,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n            lineNumber: 25,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"yfl2xIOjlg1GBW5cl/1DocC4r3o=\");\n_c = HomePage;\nconst SubmitCardFields = ()=>{\n    _s1();\n    const { cardFieldsForm, fields } = (0,_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.usePayPalCardFields)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: ()=>fields.CVVField.focus(),\n        children: \"Submit\"\n    }, void 0, false, {\n        fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n        lineNumber: 53,\n        columnNumber: 10\n    }, undefined);\n};\n_s1(SubmitCardFields, \"bwR5eiCVlIGAKWvDWiS/MOBniXM=\", false, function() {\n    return [\n        _paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.usePayPalCardFields\n    ];\n});\n_c1 = SubmitCardFields;\nvar _c, _c1;\n$RefreshReg$(_c, \"HomePage\");\n$RefreshReg$(_c1, \"SubmitCardFields\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBVWlDO0FBRVc7QUFFN0IsU0FBU1E7O0lBR3RCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSCwrQ0FBUUEsQ0FBQztRQUNqQ0ksUUFBUTtJQUNWO0lBRUEscUJBQ0UsOERBQUNDO1FBQUtDLFdBQVU7a0JBRVosNEVBQUNiLHlFQUFvQkE7WUFDbkJjLFNBQVM7Z0JBQ1BDLFVBQ0U7Z0JBQ0ZDLFlBQVk7WUFDZDtzQkFFQSw0RUFBQ2YsNkVBQXdCQTtnQkFDdkJnQixhQUFhLElBQU1DLFFBQVFDLE9BQU8sQ0FBQztnQkFDbkNDLFdBQVcsS0FBTztnQkFDbEJDLFNBQVMsS0FBSzs7a0NBRWQsOERBQUNuQixvRUFBZUE7Ozs7O2tDQUNoQiw4REFBQ0Msc0VBQWlCQTs7Ozs7a0NBQ2xCLDhEQUFDQyxzRUFBaUJBOzs7OztrQ0FDbEIsOERBQUNDLG1FQUFjQTs7Ozs7a0NBQ2YsOERBQUNpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2I7R0FqQ3dCZDtLQUFBQTtBQW1DeEIsTUFBTWMsbUJBQW1COztJQUN2QixNQUFNLEVBQUVDLGNBQWMsRUFBRUMsTUFBTSxFQUFFLEdBQUdsQiw0RUFBbUJBO0lBRXRELHFCQUFPLDhEQUFDbUI7UUFBT0MsU0FBUyxJQUFNRixPQUFPRyxRQUFRLENBQUNDLEtBQUs7a0JBQUk7Ozs7OztBQUV6RDtJQUxNTjs7UUFDK0JoQix3RUFBbUJBOzs7TUFEbERnQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHtcbiAgUGF5UGFsU2NyaXB0UHJvdmlkZXIsXG4gIFBheVBhbENhcmRGaWVsZHNQcm92aWRlcixcbiAgUGF5UGFsTmFtZUZpZWxkLFxuICBQYXlQYWxOdW1iZXJGaWVsZCxcbiAgUGF5UGFsRXhwaXJ5RmllbGQsXG4gIFBheVBhbENWVkZpZWxkLFxuICB1c2VQYXlQYWxDYXJkRmllbGRzLFxufSBmcm9tIFwiQHBheXBhbC9yZWFjdC1wYXlwYWwtanNcIjtcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgXG5cbiAgY29uc3QgW3N0eWxlLCBzZXRTdHlsZV0gPSB1c2VTdGF0ZSh7XG4gICAgaGVpZ2h0OiBcIjIwcHhcIixcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHAtMjRcIj5cbiAgICAgIFxuICAgICAgICA8UGF5UGFsU2NyaXB0UHJvdmlkZXJcbiAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICBjbGllbnRJZDpcbiAgICAgICAgICAgICAgXCJBZE5oVHdPeHNCTkw5a1hoalZVa3diYjVBdE9MRXg0Vm1KVlNKNWNNZjI4b1p5ajJGcVFOR0k0dTItSDZfVHgtRVdVUXMzNzlURE1yUWVzNlwiLFxuICAgICAgICAgICAgY29tcG9uZW50czogXCJjYXJkLWZpZWxkc1wiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8UGF5UGFsQ2FyZEZpZWxkc1Byb3ZpZGVyXG4gICAgICAgICAgICBjcmVhdGVPcmRlcj17KCkgPT4gUHJvbWlzZS5yZXNvbHZlKFwic29tZS1pZFwiKX1cbiAgICAgICAgICAgIG9uQXBwcm92ZT17KCkgPT4ge319XG4gICAgICAgICAgICBvbkVycm9yPXsoKT0+e319XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFBheVBhbE5hbWVGaWVsZCAvPlxuICAgICAgICAgICAgPFBheVBhbE51bWJlckZpZWxkIC8+XG4gICAgICAgICAgICA8UGF5UGFsRXhwaXJ5RmllbGQgLz5cbiAgICAgICAgICAgIDxQYXlQYWxDVlZGaWVsZCAvPlxuICAgICAgICAgICAgPFN1Ym1pdENhcmRGaWVsZHMgLz5cbiAgICAgICAgICA8L1BheVBhbENhcmRGaWVsZHNQcm92aWRlcj5cbiAgICAgICAgXG4gICAgICAgIDwvUGF5UGFsU2NyaXB0UHJvdmlkZXI+XG4gICBcbiAgICA8L21haW4+XG4gICk7XG59XG5cbmNvbnN0IFN1Ym1pdENhcmRGaWVsZHMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgY2FyZEZpZWxkc0Zvcm0sIGZpZWxkcyB9ID0gdXNlUGF5UGFsQ2FyZEZpZWxkcygpO1xuXG4gIHJldHVybiA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGZpZWxkcy5DVlZGaWVsZC5mb2N1cygpfT5TdWJtaXQ8L2J1dHRvbj47XG4gIFxufTtcbiJdLCJuYW1lcyI6WyJQYXlQYWxTY3JpcHRQcm92aWRlciIsIlBheVBhbENhcmRGaWVsZHNQcm92aWRlciIsIlBheVBhbE5hbWVGaWVsZCIsIlBheVBhbE51bWJlckZpZWxkIiwiUGF5UGFsRXhwaXJ5RmllbGQiLCJQYXlQYWxDVlZGaWVsZCIsInVzZVBheVBhbENhcmRGaWVsZHMiLCJ1c2VTdGF0ZSIsIkhvbWVQYWdlIiwic3R5bGUiLCJzZXRTdHlsZSIsImhlaWdodCIsIm1haW4iLCJjbGFzc05hbWUiLCJvcHRpb25zIiwiY2xpZW50SWQiLCJjb21wb25lbnRzIiwiY3JlYXRlT3JkZXIiLCJQcm9taXNlIiwicmVzb2x2ZSIsIm9uQXBwcm92ZSIsIm9uRXJyb3IiLCJTdWJtaXRDYXJkRmllbGRzIiwiY2FyZEZpZWxkc0Zvcm0iLCJmaWVsZHMiLCJidXR0b24iLCJvbkNsaWNrIiwiQ1ZWRmllbGQiLCJmb2N1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});