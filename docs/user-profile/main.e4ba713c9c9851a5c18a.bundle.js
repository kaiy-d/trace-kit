(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{318:function(module,exports,__webpack_require__){__webpack_require__(319),__webpack_require__(515),module.exports=__webpack_require__(516)},338:function(module,exports){},516:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(316);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(706)],module)}.call(this,__webpack_require__(517)(module))},706:function(module,exports,__webpack_require__){var map={"./ClipListTitle.stories.js":721};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=706},720:function(module,exports,__webpack_require__){},721:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(44);var react=__webpack_require__(39),react_default=__webpack_require__.n(react),moment=(__webpack_require__(707),__webpack_require__(317)),moment_default=__webpack_require__.n(moment);__webpack_require__(720);function ClipListTitle_ClipListTitle(_ref){var utcTime=_ref.utcTime,homeScore=_ref.homeScore,awayScore=_ref.awayScore,awayTitle=_ref.awayTitle,date=moment_default()(utcTime).format("dddd, MMMM Do YYYY"),outcome="tie";return homeScore>awayScore&&(outcome="win"),homeScore>awayScore&&(outcome="loss"),react_default.a.createElement("div",{className:"clip-list-title"},date," ",homeScore," to ",awayScore," ",outcome," ",awayTitle&&react_default.a.createElement("span",null,"vs ",awayTitle))}ClipListTitle_ClipListTitle.displayName="ClipListTitle",ClipListTitle_ClipListTitle.__docgenInfo={description:"",methods:[],displayName:"ClipListTitle",props:{utcTime:{type:{name:"number"},required:!0,description:""},homeScore:{type:{name:"number"},required:!0,description:""},awayScore:{type:{name:"number"},required:!0,description:""},awayTitle:{type:{name:"string"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ClipListTitle.js"]={name:"ClipListTitle",docgenInfo:ClipListTitle_ClipListTitle.__docgenInfo,path:"src/components/ClipListTitle.js"}),__webpack_require__.d(__webpack_exports__,"clipData",(function(){return clipData})),__webpack_require__.d(__webpack_exports__,"actionsData",(function(){return actionsData})),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"NoTitle",(function(){return NoTitle}));__webpack_exports__.default={component:ClipListTitle_ClipListTitle,title:"Clip List Title",excludeStories:/.*Data$/};var clipData={utcTime:1578161195e3,homeScore:5,awayScore:3,awayTitle:"Trace United FC G08 FA Kurti"},actionsData={},Default=function(){return react_default.a.createElement(ClipListTitle_ClipListTitle,clipData)};Default.displayName="Default";var NoTitle=function(){var data=Object.assign({},clipData,{awayTitle:null});return react_default.a.createElement(ClipListTitle_ClipListTitle,data)};NoTitle.displayName="NoTitle",Default.__docgenInfo={description:"",methods:[],displayName:"Default"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ClipListTitle.stories.js"]={name:"Default",docgenInfo:Default.__docgenInfo,path:"src/components/ClipListTitle.stories.js"}),NoTitle.__docgenInfo={description:"",methods:[],displayName:"NoTitle"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ClipListTitle.stories.js"]={name:"NoTitle",docgenInfo:NoTitle.__docgenInfo,path:"src/components/ClipListTitle.stories.js"})}},[[318,1,2]]]);
//# sourceMappingURL=main.e4ba713c9c9851a5c18a.bundle.js.map