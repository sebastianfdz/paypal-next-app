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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @paypal/react-paypal-js */ \"(app-pages-browser)/../react-paypal-js/dist/esm/react-paypal-js.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction HomePage() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.PayPalScriptProvider, {\n            options: {\n                clientId: \"AdNhTwOxsBNL9kXhjVUkwbb5AtOLEx4VmJVSJ5cMf28oZyj2FqQNGI4u2-H6_Tx-EWUQs379TDMrQes6\",\n                components: \"card-fields\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.PayPalCardFieldsProvider, {\n                createOrder: ()=>Promise.resolve(\"some-id\"),\n                onApprove: ()=>{},\n                onError: ()=>{},\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.PayPalNameField, {}, void 0, false, {\n                        fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.PayPalNumberField, {}, void 0, false, {\n                        fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.PayPalExpiryField, {}, void 0, false, {\n                        fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.PayPalCVVField, {}, void 0, false, {\n                        fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubmitCardFields, {}, void 0, false, {\n                        fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_c = HomePage;\nconst SubmitCardFields = ()=>{\n    _s();\n    const { cardFieldsForm, fields } = (0,_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.usePayPalCardFields)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: ()=>fields.CVVField.focus(),\n        children: \"Submit\"\n    }, void 0, false, {\n        fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n        lineNumber: 46,\n        columnNumber: 10\n    }, undefined);\n};\n_s(SubmitCardFields, \"bwR5eiCVlIGAKWvDWiS/MOBniXM=\", false, function() {\n    return [\n        _paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.usePayPalCardFields\n    ];\n});\n_c1 = SubmitCardFields;\nvar _c, _c1;\n$RefreshReg$(_c, \"HomePage\");\n$RefreshReg$(_c1, \"SubmitCardFields\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQVVpQztBQUlsQixTQUFTTztJQUN0QixxQkFDRSw4REFBQ0M7UUFBS0MsV0FBVTtrQkFDZCw0RUFBQ1QseUVBQW9CQTtZQUNuQlUsU0FBUztnQkFDUEMsVUFDRTtnQkFDRkMsWUFBWTtZQUNkO3NCQUVBLDRFQUFDWCw2RUFBd0JBO2dCQUN2QlksYUFBYSxJQUFNQyxRQUFRQyxPQUFPLENBQUM7Z0JBQ25DQyxXQUFXLEtBQU87Z0JBQ2xCQyxTQUFTLEtBQU87O2tDQUVoQiw4REFBQ2Ysb0VBQWVBOzs7OztrQ0FDaEIsOERBQUNDLHNFQUFpQkE7Ozs7O2tDQUVoQiw4REFBQ0Msc0VBQWlCQTs7Ozs7a0NBQ2xCLDhEQUFDQyxtRUFBY0E7Ozs7O2tDQUVqQiw4REFBQ2E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtYO0tBMUJ3Qlg7QUE0QnhCLE1BQU1XLG1CQUFtQjs7SUFDdkIsTUFBTSxFQUFFQyxjQUFjLEVBQUVDLE1BQU0sRUFBRSxHQUFHZCw0RUFBbUJBO0lBRXRELHFCQUFPLDhEQUFDZTtRQUFPQyxTQUFTLElBQU1GLE9BQU9HLFFBQVEsQ0FBQ0MsS0FBSztrQkFBSTs7Ozs7O0FBQ3pEO0dBSk1OOztRQUMrQlosd0VBQW1CQTs7O01BRGxEWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHtcbiAgUGF5UGFsU2NyaXB0UHJvdmlkZXIsXG4gIFBheVBhbENhcmRGaWVsZHNQcm92aWRlcixcbiAgUGF5UGFsTmFtZUZpZWxkLFxuICBQYXlQYWxOdW1iZXJGaWVsZCxcbiAgUGF5UGFsRXhwaXJ5RmllbGQsXG4gIFBheVBhbENWVkZpZWxkLFxuICB1c2VQYXlQYWxDYXJkRmllbGRzLFxufSBmcm9tIFwiQHBheXBhbC9yZWFjdC1wYXlwYWwtanNcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9maWVsZHMubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHAtMjRcIj5cbiAgICAgIDxQYXlQYWxTY3JpcHRQcm92aWRlclxuICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgY2xpZW50SWQ6XG4gICAgICAgICAgICBcIkFkTmhUd094c0JOTDlrWGhqVlVrd2JiNUF0T0xFeDRWbUpWU0o1Y01mMjhvWnlqMkZxUU5HSTR1Mi1INl9UeC1FV1VRczM3OVRETXJRZXM2XCIsXG4gICAgICAgICAgY29tcG9uZW50czogXCJjYXJkLWZpZWxkc1wiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8UGF5UGFsQ2FyZEZpZWxkc1Byb3ZpZGVyXG4gICAgICAgICAgY3JlYXRlT3JkZXI9eygpID0+IFByb21pc2UucmVzb2x2ZShcInNvbWUtaWRcIil9XG4gICAgICAgICAgb25BcHByb3ZlPXsoKSA9PiB7fX1cbiAgICAgICAgICBvbkVycm9yPXsoKSA9PiB7fX1cbiAgICAgICAgPlxuICAgICAgICAgIDxQYXlQYWxOYW1lRmllbGQgLz5cbiAgICAgICAgICA8UGF5UGFsTnVtYmVyRmllbGQgLz5cbiAgICAgICAgICBcbiAgICAgICAgICAgIDxQYXlQYWxFeHBpcnlGaWVsZCAvPlxuICAgICAgICAgICAgPFBheVBhbENWVkZpZWxkIC8+XG4gICAgICAgICAgXG4gICAgICAgICAgPFN1Ym1pdENhcmRGaWVsZHMgLz5cbiAgICAgICAgPC9QYXlQYWxDYXJkRmllbGRzUHJvdmlkZXI+XG4gICAgICA8L1BheVBhbFNjcmlwdFByb3ZpZGVyPlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cblxuY29uc3QgU3VibWl0Q2FyZEZpZWxkcyA9ICgpID0+IHtcbiAgY29uc3QgeyBjYXJkRmllbGRzRm9ybSwgZmllbGRzIH0gPSB1c2VQYXlQYWxDYXJkRmllbGRzKCk7XG5cbiAgcmV0dXJuIDxidXR0b24gb25DbGljaz17KCkgPT4gZmllbGRzLkNWVkZpZWxkLmZvY3VzKCl9PlN1Ym1pdDwvYnV0dG9uPjtcbn07XG4iXSwibmFtZXMiOlsiUGF5UGFsU2NyaXB0UHJvdmlkZXIiLCJQYXlQYWxDYXJkRmllbGRzUHJvdmlkZXIiLCJQYXlQYWxOYW1lRmllbGQiLCJQYXlQYWxOdW1iZXJGaWVsZCIsIlBheVBhbEV4cGlyeUZpZWxkIiwiUGF5UGFsQ1ZWRmllbGQiLCJ1c2VQYXlQYWxDYXJkRmllbGRzIiwiSG9tZVBhZ2UiLCJtYWluIiwiY2xhc3NOYW1lIiwib3B0aW9ucyIsImNsaWVudElkIiwiY29tcG9uZW50cyIsImNyZWF0ZU9yZGVyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJvbkFwcHJvdmUiLCJvbkVycm9yIiwiU3VibWl0Q2FyZEZpZWxkcyIsImNhcmRGaWVsZHNGb3JtIiwiZmllbGRzIiwiYnV0dG9uIiwib25DbGljayIsIkNWVkZpZWxkIiwiZm9jdXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});