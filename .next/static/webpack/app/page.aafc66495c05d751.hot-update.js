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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @paypal/react-paypal-js */ \"(app-pages-browser)/../react-paypal-js/dist/esm/react-paypal-js.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nfunction HomePage() {\n    _s();\n    const [clientToken, setClientToken] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [style, setStyle] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        height: \"20px\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        (async ()=>{\n            const response = await (await fetch(\"https://react-paypal-js-storybook.fly.dev/api/paypal/generate-client-token\", {\n                method: \"POST\"\n            })).json();\n            console.log({\n                token: (response === null || response === void 0 ? void 0 : response.client_token) || (response === null || response === void 0 ? void 0 : response.clientToken)\n            });\n            setClientToken((response === null || response === void 0 ? void 0 : response.client_token) || (response === null || response === void 0 ? void 0 : response.clientToken));\n        })();\n    }, []);\n    function changeStyle() {\n        setStyle(()=>{\n            if (style.height === \"20px\") {\n                return {\n                    height: \"10px\"\n                };\n            }\n            return {\n                height: \"20px\"\n            };\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: clientToken ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.PayPalScriptProvider, {\n            options: {\n                clientId: \"AdNhTwOxsBNL9kXhjVUkwbb5AtOLEx4VmJVSJ5cMf28oZyj2FqQNGI4u2-H6_Tx-EWUQs379TDMrQes6\",\n                components: \"card-fields\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.PayPalCardFieldsProvider, {\n                createOrder: ()=>Promise.resolve(\"some-id\"),\n                onApprove: ()=>{},\n                onError: ()=>{},\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.PayPalNameField, {}, void 0, false, {\n                        fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.PayPalNumberField, {}, void 0, false, {\n                        fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.PayPalExpiryField, {}, void 0, false, {\n                        fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.PayPalCVVField, {}, void 0, false, {\n                        fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubmitCardFields, {}, void 0, false, {\n                        fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n                lineNumber: 59,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n            lineNumber: 49,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n            lineNumber: 73,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"FD53OkBWFtFkdCjMkdUX7IGhYus=\");\n_c = HomePage;\nconst SubmitCardFields = ()=>{\n    _s1();\n    const { cardFieldsForm, fields } = (0,_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.usePayPalCardFields)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: ()=>fields.CVVField.focus(),\n        children: \"Submit\"\n    }, void 0, false, {\n        fileName: \"/Users/sebfernandez/github/public/paypal-next-app/app/page.tsx\",\n        lineNumber: 82,\n        columnNumber: 10\n    }, undefined);\n};\n_s1(SubmitCardFields, \"bwR5eiCVlIGAKWvDWiS/MOBniXM=\", false, function() {\n    return [\n        _paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.usePayPalCardFields\n    ];\n});\n_c1 = SubmitCardFields;\nvar _c, _c1;\n$RefreshReg$(_c, \"HomePage\");\n$RefreshReg$(_c1, \"SubmitCardFields\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBVWlDO0FBRVc7QUFFN0IsU0FBU1M7O0lBQ3RCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUUvQyxNQUFNLENBQUNJLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUM7UUFDakNNLFFBQVE7SUFDVjtJQUVBUCxnREFBU0EsQ0FBQztRQUNQO1lBQ0MsTUFBTVEsV0FBVyxNQUFNLENBQ3JCLE1BQU1DLE1BQ0osOEVBQ0E7Z0JBQUVDLFFBQVE7WUFBTyxFQUNuQixFQUNBQyxJQUFJO1lBQ05DLFFBQVFDLEdBQUcsQ0FBQztnQkFBRUMsT0FBT04sQ0FBQUEscUJBQUFBLCtCQUFBQSxTQUFVTyxZQUFZLE1BQUlQLHFCQUFBQSwrQkFBQUEsU0FBVUwsV0FBVztZQUFDO1lBQ3JFQyxlQUFlSSxDQUFBQSxxQkFBQUEsK0JBQUFBLFNBQVVPLFlBQVksTUFBSVAscUJBQUFBLCtCQUFBQSxTQUFVTCxXQUFXO1FBQ2hFO0lBQ0YsR0FBRyxFQUFFO0lBRUwsU0FBU2E7UUFDUFYsU0FBUztZQUNQLElBQUlELE1BQU1FLE1BQU0sS0FBSyxRQUFRO2dCQUMzQixPQUFPO29CQUFFQSxRQUFRO2dCQUFPO1lBQzFCO1lBQ0EsT0FBTztnQkFDTEEsUUFBUTtZQUNWO1FBQ0Y7SUFDRjtJQUVBLHFCQUNFLDhEQUFDVTtRQUFLQyxXQUFVO2tCQUNiZiw0QkFDQyw4REFBQ1YseUVBQW9CQTtZQUNuQjBCLFNBQVM7Z0JBQ1BDLFVBQ0U7Z0JBQ0ZDLFlBQVk7WUFJZDtzQkFFQSw0RUFBQzNCLDZFQUF3QkE7Z0JBQ3ZCNEIsYUFBYSxJQUFNQyxRQUFRQyxPQUFPLENBQUM7Z0JBQ25DQyxXQUFXLEtBQU87Z0JBQ2xCQyxTQUFTLEtBQUs7O2tDQUVkLDhEQUFDL0Isb0VBQWVBOzs7OztrQ0FDaEIsOERBQUNDLHNFQUFpQkE7Ozs7O2tDQUNsQiw4REFBQ0Msc0VBQWlCQTs7Ozs7a0NBQ2xCLDhEQUFDQyxtRUFBY0E7Ozs7O2tDQUNmLDhEQUFDNkI7Ozs7Ozs7Ozs7Ozs7OztpQ0FLTCw4REFBQ0M7c0JBQUk7Ozs7Ozs7Ozs7O0FBSWI7R0E5RHdCMUI7S0FBQUE7QUFnRXhCLE1BQU15QixtQkFBbUI7O0lBQ3ZCLE1BQU0sRUFBRUUsY0FBYyxFQUFFQyxNQUFNLEVBQUUsR0FBRy9CLDRFQUFtQkE7SUFFdEQscUJBQU8sOERBQUNnQztRQUFPQyxTQUFTLElBQU1GLE9BQU9HLFFBQVEsQ0FBQ0MsS0FBSztrQkFBSTs7Ozs7O0FBRXpEO0lBTE1QOztRQUMrQjVCLHdFQUFtQkE7OztNQURsRDRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLnRzeD83NjAzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQge1xuICBQYXlQYWxTY3JpcHRQcm92aWRlcixcbiAgUGF5UGFsQ2FyZEZpZWxkc1Byb3ZpZGVyLFxuICBQYXlQYWxOYW1lRmllbGQsXG4gIFBheVBhbE51bWJlckZpZWxkLFxuICBQYXlQYWxFeHBpcnlGaWVsZCxcbiAgUGF5UGFsQ1ZWRmllbGQsXG4gIHVzZVBheVBhbENhcmRGaWVsZHMsXG59IGZyb20gXCJAcGF5cGFsL3JlYWN0LXBheXBhbC1qc1wiO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuICBjb25zdCBbY2xpZW50VG9rZW4sIHNldENsaWVudFRva2VuXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IFtzdHlsZSwgc2V0U3R5bGVdID0gdXNlU3RhdGUoe1xuICAgIGhlaWdodDogXCIyMHB4XCIsXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgKFxuICAgICAgICBhd2FpdCBmZXRjaChcbiAgICAgICAgICBcImh0dHBzOi8vcmVhY3QtcGF5cGFsLWpzLXN0b3J5Ym9vay5mbHkuZGV2L2FwaS9wYXlwYWwvZ2VuZXJhdGUtY2xpZW50LXRva2VuXCIsXG4gICAgICAgICAgeyBtZXRob2Q6IFwiUE9TVFwiIH1cbiAgICAgICAgKVxuICAgICAgKS5qc29uKCk7XG4gICAgICBjb25zb2xlLmxvZyh7IHRva2VuOiByZXNwb25zZT8uY2xpZW50X3Rva2VuIHx8IHJlc3BvbnNlPy5jbGllbnRUb2tlbiB9KTtcbiAgICAgIHNldENsaWVudFRva2VuKHJlc3BvbnNlPy5jbGllbnRfdG9rZW4gfHwgcmVzcG9uc2U/LmNsaWVudFRva2VuKTtcbiAgICB9KSgpO1xuICB9LCBbXSk7XG5cbiAgZnVuY3Rpb24gY2hhbmdlU3R5bGUoKSB7XG4gICAgc2V0U3R5bGUoKCkgPT4ge1xuICAgICAgaWYgKHN0eWxlLmhlaWdodCA9PT0gXCIyMHB4XCIpIHtcbiAgICAgICAgcmV0dXJuIHsgaGVpZ2h0OiBcIjEwcHhcIiB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGVpZ2h0OiBcIjIwcHhcIixcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcC0yNFwiPlxuICAgICAge2NsaWVudFRva2VuID8gKFxuICAgICAgICA8UGF5UGFsU2NyaXB0UHJvdmlkZXJcbiAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICBjbGllbnRJZDpcbiAgICAgICAgICAgICAgXCJBZE5oVHdPeHNCTkw5a1hoalZVa3diYjVBdE9MRXg0Vm1KVlNKNWNNZjI4b1p5ajJGcVFOR0k0dTItSDZfVHgtRVdVUXMzNzlURE1yUWVzNlwiLFxuICAgICAgICAgICAgY29tcG9uZW50czogXCJjYXJkLWZpZWxkc1wiLFxuICAgICAgICAgICAgLy8gZGF0YVVzZXJJZFRva2VuOiBjbGllbnRUb2tlbiA/PyBcIlwiLFxuICAgICAgICAgICAgLy8gaW50ZW50OiBcImNhcHR1cmVcIixcbiAgICAgICAgICAgIC8vIHZhdWx0OiBmYWxzZSxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFBheVBhbENhcmRGaWVsZHNQcm92aWRlclxuICAgICAgICAgICAgY3JlYXRlT3JkZXI9eygpID0+IFByb21pc2UucmVzb2x2ZShcInNvbWUtaWRcIil9XG4gICAgICAgICAgICBvbkFwcHJvdmU9eygpID0+IHt9fVxuICAgICAgICAgICAgb25FcnJvcj17KCk9Pnt9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxQYXlQYWxOYW1lRmllbGQgLz5cbiAgICAgICAgICAgIDxQYXlQYWxOdW1iZXJGaWVsZCAvPlxuICAgICAgICAgICAgPFBheVBhbEV4cGlyeUZpZWxkIC8+XG4gICAgICAgICAgICA8UGF5UGFsQ1ZWRmllbGQgLz5cbiAgICAgICAgICAgIDxTdWJtaXRDYXJkRmllbGRzIC8+XG4gICAgICAgICAgPC9QYXlQYWxDYXJkRmllbGRzUHJvdmlkZXI+XG4gICAgICAgIFxuICAgICAgICA8L1BheVBhbFNjcmlwdFByb3ZpZGVyPlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgICApfVxuICAgIDwvbWFpbj5cbiAgKTtcbn1cblxuY29uc3QgU3VibWl0Q2FyZEZpZWxkcyA9ICgpID0+IHtcbiAgY29uc3QgeyBjYXJkRmllbGRzRm9ybSwgZmllbGRzIH0gPSB1c2VQYXlQYWxDYXJkRmllbGRzKCk7XG5cbiAgcmV0dXJuIDxidXR0b24gb25DbGljaz17KCkgPT4gZmllbGRzLkNWVkZpZWxkLmZvY3VzKCl9PlN1Ym1pdDwvYnV0dG9uPjtcbiAgXG59O1xuIl0sIm5hbWVzIjpbIlBheVBhbFNjcmlwdFByb3ZpZGVyIiwiUGF5UGFsQ2FyZEZpZWxkc1Byb3ZpZGVyIiwiUGF5UGFsTmFtZUZpZWxkIiwiUGF5UGFsTnVtYmVyRmllbGQiLCJQYXlQYWxFeHBpcnlGaWVsZCIsIlBheVBhbENWVkZpZWxkIiwidXNlUGF5UGFsQ2FyZEZpZWxkcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSG9tZVBhZ2UiLCJjbGllbnRUb2tlbiIsInNldENsaWVudFRva2VuIiwic3R5bGUiLCJzZXRTdHlsZSIsImhlaWdodCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInRva2VuIiwiY2xpZW50X3Rva2VuIiwiY2hhbmdlU3R5bGUiLCJtYWluIiwiY2xhc3NOYW1lIiwib3B0aW9ucyIsImNsaWVudElkIiwiY29tcG9uZW50cyIsImNyZWF0ZU9yZGVyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJvbkFwcHJvdmUiLCJvbkVycm9yIiwiU3VibWl0Q2FyZEZpZWxkcyIsImRpdiIsImNhcmRGaWVsZHNGb3JtIiwiZmllbGRzIiwiYnV0dG9uIiwib25DbGljayIsIkNWVkZpZWxkIiwiZm9jdXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});