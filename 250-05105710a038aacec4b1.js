(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{2643:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(r(0)),o=l(r(5)),n=l(r(865)),i=l(r(867));function l(e){return e&&e.__esModule?e:{default:e}}var s=o.default.bind(i.default),u=function(){return a.default.createElement("div",{className:s("content-wrapper")},a.default.createElement(n.default,{size:"small",ariaLabel:"label"}))};t.default=u},865:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TextareaSize=t.default=void 0;var a=l(r(0)),o=l(r(3)),n=l(r(5)),i=l(r(866));function l(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function d(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=y(e);if(t){var o=y(this).constructor;r=Reflect.construct(a,arguments,o)}else r=a.apply(this,arguments);return m(this,r)}}function m(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=n.default.bind(i.default);t.TextareaSize={SMALL:"small",MEDIUM:"medium",LARGE:"large",FULL:"full"};var _={small:2,medium:5,large:10},w={ariaLabel:o.default.string,defaultValue:o.default.string,disabled:o.default.bool,isAutoResizable:o.default.bool,isIncomplete:o.default.bool,isInvalid:o.default.bool,name:o.default.string,onChange:o.default.func,onFocus:o.default.func,placeholder:o.default.string,required:o.default.bool,rows:o.default.number,size:o.default.oneOf(["small","medium","large","full"]),value:o.default.string,refCallback:o.default.func,disableResize:o.default.bool},x={defaultValue:void 0,disabled:!1,name:null,isAutoResizable:!1,isIncomplete:!1,isInvalid:!1,onChange:void 0,placeholder:void 0,required:!1,rows:null,size:"small",value:void 0,refCallback:void 0,disableResize:!1},O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(i,e);var t,r,o,n=b(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=n.call(this,e)).isMobileDevice=window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0),t.onChange=t.onChange.bind(v(t)),t.onFocus=t.onFocus.bind(v(t)),t}return t=i,(r=[{key:"componentDidMount",value:function(){var e=Math.ceil(parseInt(window.getComputedStyle(this.textarea).lineHeight,0));this.textarea.currentLineHeight=e,this.setBaseHeights(),this.props.isAutoResizable&&!this.isMobileDevice&&this.resizeTextarea()}},{key:"componentDidUpdate",value:function(e){this.props.size===e.size&&this.props.rows===e.rows||this.setBaseHeights()}},{key:"onFocus",value:function(e){if(this.props.isAutoResizable&&!this.isMobileDevice){var t=Math.ceil(parseInt(window.getComputedStyle(this.textarea).lineHeight,0));this.textarea.currentLineHeight!==t&&(this.textarea.currentLineHeight=t,this.setBaseHeights())}this.props.onFocus&&this.props.onFocus(e)}},{key:"onChange",value:function(e){this.props.isAutoResizable&&!this.isMobileDevice&&this.resizeTextarea(),this.props.onChange&&this.props.onChange(e)}},{key:"setBaseHeights",value:function(){var e=this.textarea.value;this.textarea.value="",this.textarea.baseScrollHeight=this.textarea.scrollHeight,this.textarea.style.minHeight="0px",this.textarea.style.minHeight="".concat(this.textarea.scrollHeight,"px"),this.textarea.value=e}},{key:"resizeTextarea",value:function(){var e=this.props.rows||_[this.props.size];this.textarea.rows=e;var t=Math.ceil((this.textarea.scrollHeight-this.textarea.baseScrollHeight)/this.textarea.currentLineHeight);this.textarea.rows=e+t}},{key:"render",value:function(){var e,t=this,r=this.props,o=r.name,n=r.required,i=(r.onChange,r.onFocus,r.placeholder),l=r.isAutoResizable,s=r.isIncomplete,d=r.isInvalid,h=r.value,b=r.defaultValue,m=r.rows,v=r.size,y=r.ariaLabel,w=r.refCallback,x=r.disableResize,O=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},p(r,["name","required","onChange","onFocus","placeholder","isAutoResizable","isIncomplete","isInvalid","value","defaultValue","rows","size","ariaLabel","refCallback","disableResize"])),z=g(["textarea",{"form-error":d},{"form-incomplete":s&&n&&!d},{"full-size":"full"===v},{resizable:l&&!this.isMobileDevice},{"no-resize":x},O.className]);O&&Object.prototype.hasOwnProperty.call(O,"aria-label")?e=y||O["aria-label"]:y&&(e=y),O["aria-label"]=e,n&&(O["aria-required"]="true");var j=m||_[v];return void 0!==h?O.value=h:O.defaultValue=b,a.default.createElement("textarea",u({},O,{ref:function(e){t.textarea=e,w&&w(e)},name:o,onFocus:this.onFocus,onChange:this.onChange,placeholder:i,required:n,rows:j,className:z}))}}])&&d(t.prototype,r),o&&d(t,o),i}(a.default.Component);O.propTypes=w,O.defaultProps=x,O.isTextarea=!0;var z=O;t.default=z},866:function(e,t,r){e.exports={textarea:"Textarea-module__textarea___2LAQp","full-size":"Textarea-module__full-size___oV5Sf","no-resize":"Textarea-module__no-resize___1iAys",resizable:"Textarea-module__resizable___MaiV4","form-error":"Textarea-module__form-error___3YkPI","form-incomplete":"Textarea-module__form-incomplete___30YTC"}},867:function(e,t,r){e.exports={"content-wrapper":"Textarea-test-module__content-wrapper___2IpaV"}}}]);
//# sourceMappingURL=250-05105710a038aacec4b1.js.map