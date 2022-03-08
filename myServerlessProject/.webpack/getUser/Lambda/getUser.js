/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports.Response={
    _200(data={}){
        return {
            headers:{
                'Content-Type':"application/json",
                'Access-Control-Allow-Methods':"*",
                'Access-Control-Allow-Origin':'*',
            },
            statusCode:200,
            body:JSON.stringify(data)
        }
    },
    _400(data={}){
        return {
            headers:{
                'Content-Type':"application/json",
                'Access-Control-Allow-Methods':"*",
                'Access-Control-Allow-Origin':'*',
            },
            statusCode:400,
            body:JSON.stringify(data)
        }
    }
}


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
const {Response} = __webpack_require__(1)

exports.handler =async event=>{
    console.log("event",event)
    
    if (!event.pathParameters || !event.pathParameters.ID){
        return Response._400({message:"missing the ID from the path"})
    }
    let ID=event.pathParameters.ID;

    if (data[ID]){
        return Response._200(data[ID])
    }
    return Response._400({message:"no ID in data"})
}

const data={
    123:{name:"surya",age:"24",gender:"male"},
    249:{name:"vamsi",age:"29",gender:"male"},
    808:{name:"pavan",age:"28",gender:"male"},
};
})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;