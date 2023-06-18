"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth/next":
/*!*********************************!*\
  !*** external "next-auth/next" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("next-auth/next");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].tsx":
/*!******************************************!*\
  !*** ./pages/api/auth/[...nextauth].tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/next */ \"next-auth/next\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_next__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth_next__WEBPACK_IMPORTED_MODULE_0___default()({\n    secret: \"6ec18875c751363e6229e56824fd1cba\",\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET,\n            callbackUrl: `${\"http://localhost:3000\"}/api/auth/callback/google`,\n            scope: \"user\"\n        }),\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.GITHUB_CLIENT_ID,\n            clientSecret: process.env.GITHUB_CLIENT_SECRET,\n            callbackUrl: `${\"http://localhost:3000\"}/api/auth/callback/github`\n        })\n    ]\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXNDO0FBRWtCO0FBQ0Q7QUFnQnZELGlFQUFlQSxxREFBUUEsQ0FBQztJQUN0QkcsUUFBUUMsa0NBQWtCO0lBQzFCRyxXQUFXO1FBQ1ROLGlFQUFjQSxDQUFDO1lBQ2JPLFVBQVVKLFFBQVFDLEdBQUcsQ0FBQ0ksZ0JBQWdCO1lBQ3RDQyxjQUFjTixRQUFRQyxHQUFHLENBQUNNLG9CQUFvQjtZQUM5Q0MsYUFBYSxDQUFDLEVBQUVSLHVCQUF3QixDQUFDLHlCQUF5QixDQUFDO1lBQ25FVSxPQUFNO1FBQ1I7UUFDQVosaUVBQWNBLENBQUM7WUFDYk0sVUFBVUosUUFBUUMsR0FBRyxDQUFDVSxnQkFBZ0I7WUFDdENMLGNBQWNOLFFBQVFDLEdBQUcsQ0FBQ1csb0JBQW9CO1lBQzlDSixhQUFhLENBQUMsRUFBRVIsdUJBQXdCLENBQUMseUJBQXlCLENBQUM7UUFDckU7S0FDRDtBQUNILEVBQUUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRfbW9uZ29iZC8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHN4P2MxMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGgvbmV4dFwiO1xyXG5pbXBvcnQgeyBOZXh0QXBpSGFuZGxlciB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIjtcclxuaW1wb3J0IEdpdEh1YlByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dpdGh1YlwiXHJcblxyXG5pbnRlcmZhY2UgR29vZ2xlUHJvdmlkZXJDb25maWcge1xyXG4gIGNsaWVudElkOiBzdHJpbmc7XHJcbiAgY2xpZW50U2VjcmV0OiBzdHJpbmc7XHJcbiAgY2FsbGJhY2tVcmw6IHN0cmluZztcclxuICBzY29wZTogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgR2l0SHViUHJvdmlkZXJDb25maWcge1xyXG4gIGNsaWVudElkOiBzdHJpbmc7XHJcbiAgY2xpZW50U2VjcmV0OiBzdHJpbmc7XHJcbiAgY2FsbGJhY2tVcmw6IHN0cmluZztcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcclxuICBzZWNyZXQ6IHByb2Nlc3MuZW52LlNFQ1JFVCxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEdvb2dsZVByb3ZpZGVyKHtcclxuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQsXHJcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQsXHJcbiAgICAgIGNhbGxiYWNrVXJsOiBgJHtwcm9jZXNzLmVudi5ORVhUQVVUSF9VUkx9L2FwaS9hdXRoL2NhbGxiYWNrL2dvb2dsZWAsXHJcbiAgICAgIHNjb3BlOid1c2VyJ1xyXG4gICAgfSBhcyBHb29nbGVQcm92aWRlckNvbmZpZyksXHJcbiAgICBHaXRIdWJQcm92aWRlcih7XHJcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfQ0xJRU5UX0lELFxyXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfU0VDUkVULFxyXG4gICAgICBjYWxsYmFja1VybDogYCR7cHJvY2Vzcy5lbnYuTkVYVEFVVEhfVVJMfS9hcGkvYXV0aC9jYWxsYmFjay9naXRodWJgLFxyXG4gICAgfSBhcyBHaXRIdWJQcm92aWRlckNvbmZpZyksXHJcbiAgXSxcclxufSk7Il0sIm5hbWVzIjpbIk5leHRBdXRoIiwiR29vZ2xlUHJvdmlkZXIiLCJHaXRIdWJQcm92aWRlciIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJTRUNSRVQiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsIkdPT0dMRV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsImNhbGxiYWNrVXJsIiwiTkVYVEFVVEhfVVJMIiwic2NvcGUiLCJHSVRIVUJfQ0xJRU5UX0lEIiwiR0lUSFVCX0NMSUVOVF9TRUNSRVQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].tsx"));
module.exports = __webpack_exports__;

})();