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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @paypal/react-paypal-js */ \"(app-pages-browser)/../react-paypal-js/dist/esm/react-paypal-js.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nfunction HomePage() {\n    _s();\n    const [clientToken, setClientToken] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [style, setStyle] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        height: \"20px\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        (async ()=>{\n            const response = await (await fetch(\"https://react-paypal-js-storybook.fly.dev/api/paypal/generate-client-token\", {\n                method: \"POST\"\n            })).json();\n            console.log({\n                token: (response === null || response === void 0 ? void 0 : response.client_token) || (response === null || response === void 0 ? void 0 : response.clientToken)\n            });\n            setClientToken((response === null || response === void 0 ? void 0 : response.client_token) || (response === null || response === void 0 ? void 0 : response.clientToken));\n        })();\n    }, []);\n    function changeStyle() {\n        setStyle(()=>{\n            if (style.height === \"20px\") {\n                return {\n                    height: \"10px\"\n                };\n            }\n            return {\n                height: \"20px\"\n            };\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: clientToken ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.PayPalScriptProvider, {\n            options: {\n                clientId: \"AdNhTwOxsBNL9kXhjVUkwbb5AtOLEx4VmJVSJ5cMf28oZyj2FqQNGI4u2-H6_Tx-EWUQs379TDMrQes6\",\n                components: \"buttons,card-fields,hosted-fields\",\n                dataClientToken: clientToken !== null && clientToken !== void 0 ? clientToken : \"\",\n                intent: \"capture\",\n                vault: false\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.PayPalCardFieldsProvider, {\n                createOrder: ()=>Promise.resolve(\"some-id\"),\n                onApprove: ()=>{},\n                onError: ()=>{},\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.PayPalNameField, {}, void 0, false, {\n                        fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.PayPalNumberField, {}, void 0, false, {\n                        fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.PayPalExpiryField, {}, void 0, false, {\n                        fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.PayPalCVVField, {}, void 0, false, {\n                        fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubmitCardFields, {}, void 0, false, {\n                        fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n                lineNumber: 62,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n            lineNumber: 52,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n            lineNumber: 125,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"FD53OkBWFtFkdCjMkdUX7IGhYus=\");\n_c = HomePage;\nconst SubmitCardFields = ()=>{\n    _s1();\n    const { cardFields } = (0,_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.usePayPalCardFields)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: ()=>cardFields.current.submit(),\n        children: \"Submit\"\n    }, void 0, false, {\n        fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n        lineNumber: 134,\n        columnNumber: 10\n    }, undefined);\n};\n_s1(SubmitCardFields, \"djMZ26XeK+OIryKIq+JTBQ91a00=\", false, function() {\n    return [\n        _paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.usePayPalCardFields\n    ];\n});\n_c1 = SubmitCardFields;\nvar _c, _c1;\n$RefreshReg$(_c, \"HomePage\");\n$RefreshReg$(_c1, \"SubmitCardFields\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBY2lDO0FBQ1c7QUFFN0IsU0FBU1M7O0lBQ3RCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUUvQyxNQUFNLENBQUNJLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUM7UUFDakNNLFFBQVE7SUFDVjtJQUVBUCxnREFBU0EsQ0FBQztRQUNQO1lBQ0MsTUFBTVEsV0FBVyxNQUFNLENBQ3JCLE1BQU1DLE1BQ0osOEVBQ0E7Z0JBQUVDLFFBQVE7WUFBTyxFQUNuQixFQUNBQyxJQUFJO1lBQ05DLFFBQVFDLEdBQUcsQ0FBQztnQkFBRUMsT0FBT04sQ0FBQUEscUJBQUFBLCtCQUFBQSxTQUFVTyxZQUFZLE1BQUlQLHFCQUFBQSwrQkFBQUEsU0FBVUwsV0FBVztZQUFDO1lBQ3JFQyxlQUFlSSxDQUFBQSxxQkFBQUEsK0JBQUFBLFNBQVVPLFlBQVksTUFBSVAscUJBQUFBLCtCQUFBQSxTQUFVTCxXQUFXO1FBQ2hFO0lBQ0YsR0FBRyxFQUFFO0lBRUwsU0FBU2E7UUFDUFYsU0FBUztZQUNQLElBQUlELE1BQU1FLE1BQU0sS0FBSyxRQUFRO2dCQUMzQixPQUFPO29CQUFFQSxRQUFRO2dCQUFPO1lBQzFCO1lBQ0EsT0FBTztnQkFDTEEsUUFBUTtZQUNWO1FBQ0Y7SUFDRjtJQUVBLHFCQUNFLDhEQUFDVTtRQUFLQyxXQUFVO2tCQUNiZiw0QkFDQyw4REFBQ1YseUVBQW9CQTtZQUNuQjBCLFNBQVM7Z0JBQ1BDLFVBQ0U7Z0JBQ0ZDLFlBQVk7Z0JBQ1pDLGlCQUFpQm5CLHdCQUFBQSx5QkFBQUEsY0FBZTtnQkFDaENvQixRQUFRO2dCQUNSQyxPQUFPO1lBQ1Q7c0JBRUEsNEVBQUM5Qiw2RUFBd0JBO2dCQUN2QitCLGFBQWEsSUFBTUMsUUFBUUMsT0FBTyxDQUFDO2dCQUNuQ0MsV0FBVyxLQUFPO2dCQUNsQkMsU0FBUyxLQUFLOztrQ0FFZCw4REFBQ2xDLG9FQUFlQTs7Ozs7a0NBQ2hCLDhEQUFDQyxzRUFBaUJBOzs7OztrQ0FDbEIsOERBQUNDLHNFQUFpQkE7Ozs7O2tDQUNsQiw4REFBQ0MsbUVBQWNBOzs7OztrQ0FDZiw4REFBQ2dDOzs7Ozs7Ozs7Ozs7Ozs7aUNBc0RMLDhEQUFDQztzQkFBSTs7Ozs7Ozs7Ozs7QUFJYjtHQS9Hd0I3QjtLQUFBQTtBQWlIeEIsTUFBTTRCLG1CQUFtQjs7SUFDdkIsTUFBTSxFQUFFRSxVQUFVLEVBQUUsR0FBR2pDLDRFQUFtQkE7SUFFMUMscUJBQU8sOERBQUNrQztRQUFPQyxTQUFTLElBQU1GLFdBQVdHLE9BQU8sQ0FBQ0MsTUFBTTtrQkFBSTs7Ozs7O0FBRTdEO0lBTE1OOztRQUNtQi9CLHdFQUFtQkE7OztNQUR0QytCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLnRzeD83NjAzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQge1xuICBQYXlQYWxTY3JpcHRQcm92aWRlcixcbiAgUGF5UGFsQ2FyZEZpZWxkc1Byb3ZpZGVyLFxuICBQYXlQYWxOYW1lRmllbGQsXG4gIFBheVBhbE51bWJlckZpZWxkLFxuICBQYXlQYWxFeHBpcnlGaWVsZCxcbiAgUGF5UGFsQ1ZWRmllbGQsXG4gIFBheVBhbEJ1dHRvbnMsXG4gIFBheVBhbEhvc3RlZEZpZWxkLFxuICBQYXlQYWxIb3N0ZWRGaWVsZHNQcm92aWRlcixcbiAgdXNlUGF5UGFsSG9zdGVkRmllbGRzLFxuICB1c2VQYXlQYWxDYXJkRmllbGRzLFxufSBmcm9tIFwiQHBheXBhbC9yZWFjdC1wYXlwYWwtanNcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIGNvbnN0IFtjbGllbnRUb2tlbiwgc2V0Q2xpZW50VG9rZW5dID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgW3N0eWxlLCBzZXRTdHlsZV0gPSB1c2VTdGF0ZSh7XG4gICAgaGVpZ2h0OiBcIjIwcHhcIixcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCAoXG4gICAgICAgIGF3YWl0IGZldGNoKFxuICAgICAgICAgIFwiaHR0cHM6Ly9yZWFjdC1wYXlwYWwtanMtc3Rvcnlib29rLmZseS5kZXYvYXBpL3BheXBhbC9nZW5lcmF0ZS1jbGllbnQtdG9rZW5cIixcbiAgICAgICAgICB7IG1ldGhvZDogXCJQT1NUXCIgfVxuICAgICAgICApXG4gICAgICApLmpzb24oKTtcbiAgICAgIGNvbnNvbGUubG9nKHsgdG9rZW46IHJlc3BvbnNlPy5jbGllbnRfdG9rZW4gfHwgcmVzcG9uc2U/LmNsaWVudFRva2VuIH0pO1xuICAgICAgc2V0Q2xpZW50VG9rZW4ocmVzcG9uc2U/LmNsaWVudF90b2tlbiB8fCByZXNwb25zZT8uY2xpZW50VG9rZW4pO1xuICAgIH0pKCk7XG4gIH0sIFtdKTtcblxuICBmdW5jdGlvbiBjaGFuZ2VTdHlsZSgpIHtcbiAgICBzZXRTdHlsZSgoKSA9PiB7XG4gICAgICBpZiAoc3R5bGUuaGVpZ2h0ID09PSBcIjIwcHhcIikge1xuICAgICAgICByZXR1cm4geyBoZWlnaHQ6IFwiMTBweFwiIH07XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoZWlnaHQ6IFwiMjBweFwiLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTI0XCI+XG4gICAgICB7Y2xpZW50VG9rZW4gPyAoXG4gICAgICAgIDxQYXlQYWxTY3JpcHRQcm92aWRlclxuICAgICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICAgIGNsaWVudElkOlxuICAgICAgICAgICAgICBcIkFkTmhUd094c0JOTDlrWGhqVlVrd2JiNUF0T0xFeDRWbUpWU0o1Y01mMjhvWnlqMkZxUU5HSTR1Mi1INl9UeC1FV1VRczM3OVRETXJRZXM2XCIsXG4gICAgICAgICAgICBjb21wb25lbnRzOiBcImJ1dHRvbnMsY2FyZC1maWVsZHMsaG9zdGVkLWZpZWxkc1wiLFxuICAgICAgICAgICAgZGF0YUNsaWVudFRva2VuOiBjbGllbnRUb2tlbiA/PyBcIlwiLFxuICAgICAgICAgICAgaW50ZW50OiBcImNhcHR1cmVcIixcbiAgICAgICAgICAgIHZhdWx0OiBmYWxzZSxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFBheVBhbENhcmRGaWVsZHNQcm92aWRlclxuICAgICAgICAgICAgY3JlYXRlT3JkZXI9eygpID0+IFByb21pc2UucmVzb2x2ZShcInNvbWUtaWRcIil9XG4gICAgICAgICAgICBvbkFwcHJvdmU9eygpID0+IHt9fVxuICAgICAgICAgICAgb25FcnJvcj17KCk9Pnt9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxQYXlQYWxOYW1lRmllbGQgLz5cbiAgICAgICAgICAgIDxQYXlQYWxOdW1iZXJGaWVsZCAvPlxuICAgICAgICAgICAgPFBheVBhbEV4cGlyeUZpZWxkIC8+XG4gICAgICAgICAgICA8UGF5UGFsQ1ZWRmllbGQgLz5cbiAgICAgICAgICAgIDxTdWJtaXRDYXJkRmllbGRzIC8+XG4gICAgICAgICAgPC9QYXlQYWxDYXJkRmllbGRzUHJvdmlkZXI+XG4gICAgICAgICAgey8qIDxQYXlQYWxIb3N0ZWRGaWVsZHNQcm92aWRlclxuICAgICAgICAgICAgY3JlYXRlT3JkZXI9e2FzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgXG5cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNhcmQtbnVtYmVyXCI+XG4gICAgICAgICAgICAgIENhcmQgTnVtYmVyXG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19Pio8L3NwYW4+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPFBheVBhbEhvc3RlZEZpZWxkXG4gICAgICAgICAgICAgIGlkPVwiY2FyZC1udW1iZXJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLWZpZWxkXCJcbiAgICAgICAgICAgICAgaG9zdGVkRmllbGRUeXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcIiNjYXJkLW51bWJlclwiLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIjQxMTEgMTExMSAxMTExIDExMTFcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAga2V5PXtzdHlsZS5oZWlnaHQgKyBcImhvc3RlZC1udW1iZXJcIn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImN2dlwiPlxuICAgICAgICAgICAgICBDVlY8c3BhbiBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT4qPC9zcGFuPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxQYXlQYWxIb3N0ZWRGaWVsZFxuICAgICAgICAgICAgICBpZD1cImN2dlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtZmllbGRcIlxuICAgICAgICAgICAgICBob3N0ZWRGaWVsZFR5cGU9XCJjdnZcIlxuICAgICAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiI2N2dlwiLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIjEyM1wiLFxuICAgICAgICAgICAgICAgIG1hc2tJbnB1dDogdHJ1ZSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAga2V5PXtzdHlsZS5oZWlnaHQgKyBcImhvc3RlZC1jdnZcIn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImV4cGlyYXRpb24tZGF0ZVwiPlxuICAgICAgICAgICAgICBFeHBpcmF0aW9uIERhdGVcbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX0+Kjwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8UGF5UGFsSG9zdGVkRmllbGRcbiAgICAgICAgICAgICAgaWQ9XCJleHBpcmF0aW9uLWRhdGVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLWZpZWxkXCJcbiAgICAgICAgICAgICAgaG9zdGVkRmllbGRUeXBlPVwiZXhwaXJhdGlvbkRhdGVcIlxuICAgICAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiI2V4cGlyYXRpb24tZGF0ZVwiLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIk1NL1lZWVlcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAga2V5PXtzdHlsZS5oZWlnaHQgKyBcImhvc3RlZC1leHBpcnlcIn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9QYXlQYWxIb3N0ZWRGaWVsZHNQcm92aWRlcj4gKi99XG4gICAgICAgIDwvUGF5UGFsU2NyaXB0UHJvdmlkZXI+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICl9XG4gICAgPC9tYWluPlxuICApO1xufVxuXG5jb25zdCBTdWJtaXRDYXJkRmllbGRzID0gKCkgPT4ge1xuICBjb25zdCB7IGNhcmRGaWVsZHMgfSA9IHVzZVBheVBhbENhcmRGaWVsZHMoKTtcblxuICByZXR1cm4gPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjYXJkRmllbGRzLmN1cnJlbnQuc3VibWl0KCl9PlN1Ym1pdDwvYnV0dG9uPjtcbiAgXG59O1xuIl0sIm5hbWVzIjpbIlBheVBhbFNjcmlwdFByb3ZpZGVyIiwiUGF5UGFsQ2FyZEZpZWxkc1Byb3ZpZGVyIiwiUGF5UGFsTmFtZUZpZWxkIiwiUGF5UGFsTnVtYmVyRmllbGQiLCJQYXlQYWxFeHBpcnlGaWVsZCIsIlBheVBhbENWVkZpZWxkIiwidXNlUGF5UGFsQ2FyZEZpZWxkcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSG9tZVBhZ2UiLCJjbGllbnRUb2tlbiIsInNldENsaWVudFRva2VuIiwic3R5bGUiLCJzZXRTdHlsZSIsImhlaWdodCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInRva2VuIiwiY2xpZW50X3Rva2VuIiwiY2hhbmdlU3R5bGUiLCJtYWluIiwiY2xhc3NOYW1lIiwib3B0aW9ucyIsImNsaWVudElkIiwiY29tcG9uZW50cyIsImRhdGFDbGllbnRUb2tlbiIsImludGVudCIsInZhdWx0IiwiY3JlYXRlT3JkZXIiLCJQcm9taXNlIiwicmVzb2x2ZSIsIm9uQXBwcm92ZSIsIm9uRXJyb3IiLCJTdWJtaXRDYXJkRmllbGRzIiwiZGl2IiwiY2FyZEZpZWxkcyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjdXJyZW50Iiwic3VibWl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});